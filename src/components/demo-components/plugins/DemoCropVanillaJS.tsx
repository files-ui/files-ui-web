import * as React from "react";
import { FileMosaic, FileCard, ExtFile } from "@files-ui/react";
import { Paper } from "@mui/material";

const SAMPLE_IMAGES: ExtFile[] = [
  {
    id: "mountain-1",
    name: "mountain-landscape.jpg",
    size: 245000,
    type: "image/jpeg",
    valid: true,
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  },
  {
    id: "forest-2",
    name: "forest-scenery.jpg",
    size: 198000,
    type: "image/jpeg",
    valid: true,
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
  },
];

const DemoCropVanillaJS: React.FC = () => {
  const [files, setFiles] = React.useState<ExtFile[]>(SAMPLE_IMAGES);
  const [cropFile, setCropFile] = React.useState<ExtFile | null>(null);
  const [CropDialogComp, setCropDialogComp] =
    React.useState<React.ComponentType<any> | null>(null);

  // Lazy-load CropDialog from the react sub-path
  React.useEffect(() => {
    import("@files-ui/crop/react")
      .then((mod) => {
        setCropDialogComp(() => mod.CropDialog);
      })
      .catch((err) => {
        console.warn("CropDialog not available:", err);
      });
  }, []);

  const handleEdit = (file: ExtFile) => {
    setCropFile(file);
  };

  const handleCropComplete = (croppedFile: ExtFile) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === cropFile?.id ? { ...croppedFile, id: f.id } : f
      )
    );
    setCropFile(null);
  };

  const handleCropCancel = () => {
    setCropFile(null);
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
        </div>

        <div style={{ textAlign: "center" }}>
          <FileCard {...files[1]} onEdit={handleEdit} preview info />
          <p style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
            FileCard
          </p>
        </div>
      </div>

      {/* CropDialog rendered when a file is selected for editing */}
      {cropFile && CropDialogComp && (
        <CropDialogComp
          file={cropFile}
          onComplete={handleCropComplete}
          onCancel={handleCropCancel}
        />
      )}

      {cropFile && !CropDialogComp && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            border: "1px solid #f0ad4e",
            borderRadius: "8px",
            background: "#fff8e1",
            textAlign: "center",
          }}
        >
          CropDialog requires <code>@files-ui/crop</code> to be installed.
        </div>
      )}
    </Paper>
  );
};

export default DemoCropVanillaJS;
