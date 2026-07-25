import * as React from "react";
import { FileCard, useFilesUI } from "@files-ui/react";

const DemoDropzoneUseFilesUIAction = () => {
  const demoAction = React.useCallback(async (formData: FormData) => {
    const file = formData.get("file") as File | null;
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (!file) {
      return { success: false, message: "No file provided", payload: {} };
    }
    return {
      success: true,
      message: `${file.name} processed via action`,
      payload: { name: file.name, size: file.size },
    };
  }, []);

  const { files, getInputProps, uploadFiles, removeFile, isUploading } = useFilesUI({
    action: demoAction as any,
    uploadLabel: "file",
    maxFiles: 5,
    maxConcurrentUploads: 3,
    accept: "image/*,.pdf",
  } as any);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input {...getInputProps()} />
        <button type="button" onClick={() => uploadFiles()} disabled={files.length === 0 || isUploading}>
          {isUploading ? "Running action..." : "Upload via action"}
        </button>
        <span style={{ fontSize: "13px" }}>
          Uses <strong>useFilesUI</strong> + <strong>action</strong> (url not required).
        </span>
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
          <FileCard key={file.id} {...file} onDelete={removeFile} info preview />
        ))}
      </div>
    </div>
  );
};

export default DemoDropzoneUseFilesUIAction;
