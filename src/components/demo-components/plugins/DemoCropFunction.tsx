import * as React from "react";
import { FileMosaic, FileCard, ExtFile } from "@files-ui/react";
import { Paper, Button } from "@mui/material";

const SAMPLE_IMAGES: ExtFile[] = [
  {
    id: "landscape-1",
    name: "landscape.jpg",
    size: 245000,
    type: "image/jpeg",
    valid: true,
    imageUrl:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
  },
  {
    id: "cityscape-2",
    name: "cityscape.jpg",
    size: 198000,
    type: "image/jpeg",
    valid: true,
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
  },
];

const MAX_CROPS = 3;

/**
 * Pure Cropping demo: clicking edit crops the center 60% programmatically
 * using cropImage() without any interactive canvas or dialog.
 */
const DemoCropFunction: React.FC = () => {
  const [files, setFiles] = React.useState<ExtFile[]>(SAMPLE_IMAGES);
  const [cropCounts, setCropCounts] = React.useState<Record<string, number>>({});

  const handleEdit = async (file: ExtFile) => {
    if (!file.imageUrl) return;

    const fileId = String(file.id);
    const count = cropCounts[fileId] || 0;
    if (count >= MAX_CROPS) return;

    try {
      const { cropImage } = await import("@files-ui/crop/core");

      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = file.imageUrl!;
      });

      // Crop center 60%
      const cropWidth = img.width * 0.6;
      const cropHeight = img.height * 0.6;
      const x = (img.width - cropWidth) / 2;
      const y = (img.height - cropHeight) / 2;

      const croppedBlob = await cropImage(
        file.imageUrl,
        { x, y, width: cropWidth, height: cropHeight },
        { quality: 0.92, format: "jpeg" }
      );

      const croppedFileObj = new File(
        [croppedBlob],
        file.name || "cropped.jpg",
        { type: "image/jpeg" }
      );

      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id
            ? {
                ...f,
                file: croppedFileObj,
                size: croppedBlob.size,
                imageUrl: URL.createObjectURL(croppedBlob),
              }
            : f
        )
      );
      setCropCounts((prev) => ({ ...prev, [fileId]: count + 1 }));
    } catch (err) {
      console.error("cropImage not available:", err);
    }
  };

  const handleReset = () => {
    setFiles(SAMPLE_IMAGES);
    setCropCounts({});
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
          <FileMosaic
            {...files[0]}
            onEdit={
              (cropCounts[String(files[0].id)] || 0) < MAX_CROPS
                ? handleEdit
                : undefined
            }
            preview
            info
          />
          <p style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
            FileMosaic ({MAX_CROPS - (cropCounts[String(files[0].id)] || 0)}{" "}
            crops left)
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <FileCard
            {...files[1]}
            onEdit={
              (cropCounts[String(files[1].id)] || 0) < MAX_CROPS
                ? handleEdit
                : undefined
            }
            preview
            info
          />
          <p style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
            FileCard ({MAX_CROPS - (cropCounts[String(files[1].id)] || 0)}{" "}
            crops left)
          </p>
        </div>
      </div>

      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <Button variant="outlined" size="small" onClick={handleReset}>
          Reset to Original
        </Button>
      </div>
    </Paper>
  );
};

export default DemoCropFunction;
