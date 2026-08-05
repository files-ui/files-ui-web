import * as React from "react";
import { FileCard } from "@files-ui/react";
import { Alert, AlertTitle } from "@mui/material";

const DemoFileCardEdit: React.FC = () => {
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
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <FileCard
          {...imageFile}
          onEdit={handleEdit}
          preview
          info
        />
        <FileCard
          {...imageFile}
          id={2}
          onCrop={handleCrop}
          preview
          info
        />
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

export default DemoFileCardEdit;
