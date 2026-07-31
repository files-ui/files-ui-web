import * as React from "react";
import { FileMosaic } from "@files-ui/react";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "sampleFile.tsx",
  valid: true,
};

const DemoFileMosaicSizeVariants = () => {
  const removeFile = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "white",
        alignItems: "center",
        padding: "25px 0",
        flexGrow: 1,
        gap: "16px",
      }}
    >
      {(["xs", "small", "medium", "large"] as const).map((variant) => (
        <FileMosaic
          key={variant}
          {...sampleFileProps}
          variant={variant}
          info
          onDelete={removeFile}
        />
      ))}
    </div>
  );
};

export default DemoFileMosaicSizeVariants;