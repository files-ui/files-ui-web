import * as React from "react";
import { FileMosaic, FileCard, ExtFile } from "@files-ui/react";
import { Alert, AlertTitle, Paper } from "@mui/material";

const SAMPLE_IMAGES: ExtFile[] = [
  {
    id: "beach-1",
    name: "beach.jpg",
    size: 310000,
    type: "image/jpeg",
    valid: true,
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
  },
  {
    id: "sunset-2",
    name: "sunset.jpg",
    size: 275000,
    type: "image/jpeg",
    valid: true,
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800",
  },
];

/**
 * Crop + Compress integration demo.
 * Click edit → crop center 70% → compress → update same component in place.
 */
const DemoCompressIntegration: React.FC = () => {
  const [files, setFiles] = React.useState<ExtFile[]>(SAMPLE_IMAGES);
  const [stats, setStats] = React.useState<
    Record<string, { originalSize: number; finalSize: number; reduction: number }>
  >({});

  const handleEdit = async (file: ExtFile) => {
    if (!file.imageUrl) return;

    try {
      const { cropImage } = await import("@files-ui/crop/core");
      const { compressImage } = await import("@files-ui/compress");

      // Step 1: Crop center 70%
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load"));
        img.src = file.imageUrl!;
      });

      const cropWidth = img.width * 0.7;
      const cropHeight = img.height * 0.7;
      const x = (img.width - cropWidth) / 2;
      const y = (img.height - cropHeight) / 2;

      const croppedBlob = await cropImage(
        file.imageUrl,
        { x, y, width: cropWidth, height: cropHeight },
        { quality: 0.95, format: "jpeg" }
      );

      // Step 2: Compress
      const croppedFile = new File(
        [croppedBlob],
        file.name || "image.jpg",
        { type: "image/jpeg" }
      );

      const compressedExtFile = await compressImage(croppedFile, {
        maxWidthOrHeight: 1920,
        quality: 0.8,
        format: "jpeg",
      });

      const compressedBlob = compressedExtFile.file!;
      const originalSize = file.size || 0;
      const finalSize = compressedBlob.size;
      const reduction = originalSize > 0
        ? Number.parseFloat(
            (((originalSize - finalSize) / originalSize) * 100).toFixed(1)
          )
        : 0;

      const fileId = String(file.id);
      setStats((prev) => ({
        ...prev,
        [fileId]: { originalSize, finalSize, reduction },
      }));

      // Update the SAME file in place
      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id
            ? {
                ...f,
                file: new File([compressedBlob], f.name || "processed.jpg", {
                  type: "image/jpeg",
                }),
                size: compressedBlob.size,
                imageUrl: URL.createObjectURL(compressedBlob),
              }
            : f
        )
      );
    } catch (err) {
      console.error("Crop + compress not available:", err);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <Paper variant="outlined" style={{ padding: "30px", margin: "20px 0" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <FileMosaic {...files[0]} onEdit={handleEdit} preview info />
          <p style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
            FileMosaic
          </p>
          {stats[String(files[0].id)] && (
            <Alert severity="success" style={{ marginTop: "8px", textAlign: "left" }}>
              <AlertTitle>Crop + Compress Complete</AlertTitle>
              <strong>Original:</strong>{" "}
              {formatBytes(stats[String(files[0].id)].originalSize)}
              {" → "}
              <strong>Final:</strong>{" "}
              {formatBytes(stats[String(files[0].id)].finalSize)}
              {" ("}
              {stats[String(files[0].id)].reduction}% reduction{")"}
            </Alert>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          <FileCard {...files[1]} onEdit={handleEdit} preview info />
          <p style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
            FileCard
          </p>
          {stats[String(files[1].id)] && (
            <Alert severity="success" style={{ marginTop: "8px", textAlign: "left" }}>
              <AlertTitle>Crop + Compress Complete</AlertTitle>
              <strong>Original:</strong>{" "}
              {formatBytes(stats[String(files[1].id)].originalSize)}
              {" → "}
              <strong>Final:</strong>{" "}
              {formatBytes(stats[String(files[1].id)].finalSize)}
              {" ("}
              {stats[String(files[1].id)].reduction}% reduction{")"}
            </Alert>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default DemoCompressIntegration;
