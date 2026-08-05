import * as React from "react";
import { FileMosaic } from "@files-ui/react";
import { Alert, AlertTitle } from "@mui/material";

const DemoFileMosaicEdit: React.FC = () => {
  const [lastAction, setLastAction] = React.useState<string>("");

  const handleEdit = (file: any) => {
    setLastAction(`Edit clicked on: ${file.name}`);
  };

  const handleCrop = (file: any) => {
    setLastAction(`Crop clicked on: ${file.name}`);
  };

  const imageFile = {
    id: 1,
    name: "sample-image.jpg",
    size: 1024000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://picsum.photos/400/300",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <FileMosaic
            {...imageFile}
            onEdit={handleEdit}
            preview
            info
          />
          <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>
            With <code>onEdit</code>
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <FileMosaic
            {...imageFile}
            id={2}
            onCrop={handleCrop}
            preview
            info
          />
          <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>
            With <code>onCrop</code>
          </p>
        </div>
      </div>
      {lastAction && (
        <Alert severity="info">
          <AlertTitle>Last Action</AlertTitle>
          {lastAction}
        </Alert>
      )}
    </div>
  );
};

export default DemoFileMosaicEdit;
