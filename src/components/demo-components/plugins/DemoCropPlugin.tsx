import * as React from "react";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import { Paper } from "@mui/material";

const DemoCropPlugin: React.FC = () => {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [cropFile, setCropFile] = React.useState<ExtFile | null>(null);
  const [CropDialogComp, setCropDialogComp] =
    React.useState<React.ComponentType<any> | null>(null);

  // Lazy-load CropDialog
  React.useEffect(() => {
    import("@files-ui/crop/react")
      .then((mod) => {
        setCropDialogComp(() => mod.CropDialog);
      })
      .catch((err) => {
        console.warn("CropDialog not available:", err);
      });
  }, []);

  const handleFilesChange = (incomingFiles: ExtFile[]) => {
    // Mark all image files as valid so the edit icon shows
    setFiles(
      incomingFiles.map((f) => ({
        ...f,
        valid: f.type?.startsWith("image/") ? true : f.valid,
      }))
    );
  };

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
      <div style={{ marginBottom: "20px" }}>
        <Dropzone
          onChange={handleFilesChange}
          value={files}
          accept="image/*"
          maxFiles={3}
          label="Drop images here to try crop functionality"
        >
          {files.map((file) => (
            <FileMosaic
              key={file.id}
              {...file}
              onDelete={(id) => {
                setFiles((prev) => prev.filter((f) => f.id !== id));
              }}
              onEdit={handleEdit}
              preview
              info
            />
          ))}
        </Dropzone>
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

export default DemoCropPlugin;
