import * as React from "react";
import { FileMosaic, useFilesUI } from "@files-ui/react";

const DemoDropzoneUseFilesUIBasic = () => {
  const {
    files,
    getDragHandlers,
    getInputProps,
    uploadFiles,
    removeFile,
    isUploading,
    numberOfValidFiles,
  } = useFilesUI({
    accept: "image/*",
    maxFiles: 4,
    maxFileSize: 2 * 1024 * 1024,
    fakeUpload: true,
    maxConcurrentUploads: 2,
  } as any);

  return (
    <div>
      <div
        {...getDragHandlers()}
        style={{
          border: "2px dashed #1976d2",
          borderRadius: "10px",
          padding: "20px",
          minHeight: "130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <input {...getInputProps()} />
        <strong>Headless drop area</strong>
        <span style={{ fontSize: "13px" }}>
          Drag files here or click this area to browse.
        </span>
        <span style={{ fontSize: "13px" }}>
          Valid files: {numberOfValidFiles} / {files.length}
        </span>
      </div>

      <div style={{ marginTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => uploadFiles()}
          disabled={files.length === 0 || isUploading}
          style={{ padding: "6px 12px" }}
        >
          {isUploading ? "Uploading..." : "Upload files"}
        </button>
      </div>

      <div
        style={{
          marginTop: "14px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "6px",
          minHeight: "20px",
        }}
      >
        {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
        ))}
      </div>
    </div>
  );
};

export default DemoDropzoneUseFilesUIBasic;
