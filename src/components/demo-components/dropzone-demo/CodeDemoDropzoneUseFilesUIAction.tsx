import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDropzoneUseFilesUIAction = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/files-ui-usefilesui-action-demo"
      codeSandboxTS="https://codesandbox.io/s/files-ui-usefilesui-action-demo"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoDropzoneUseFilesUIAction;

const splittedCodeJS = `const action = async (formData) => {
  const file = formData.get("file");
  return {
    success: !!file,
    message: file ? \`\${file.name} processed via action\` : "No file provided",
    payload: {},
  };
};

const { files, getInputProps, uploadFiles } = useFilesUI({
  action,
  uploadLabel: "file",
  maxFiles: 5,
  maxConcurrentUploads: 3,
  accept: "image/*,.pdf",
});`;

const splittedCodeTS = `const action = async (formData: FormData) => {
  const file = formData.get("file") as File | null;
  return {
    success: !!file,
    message: file ? \`\${file.name} processed via action\` : "No file provided",
    payload: {},
  };
};

const { files, getInputProps, uploadFiles } = useFilesUI({
  action: action as any,
  uploadLabel: "file",
  maxFiles: 5,
  maxConcurrentUploads: 3,
  accept: "image/*,.pdf",
} as any);`;

const completeCodeJS = `import * as React from "react";
import { FileCard, useFilesUI } from "@files-ui/react";

export default function DemoDropzoneUseFilesUIAction() {
  const demoAction = React.useCallback(async (formData) => {
    const file = formData.get("file");
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: !!file,
      message: file ? \`\${file.name} processed via action\` : "No file provided",
      payload: {},
    };
  }, []);

  const { files, getInputProps, uploadFiles, removeFile, isUploading } = useFilesUI({
    action: demoAction,
    uploadLabel: "file",
    maxFiles: 5,
    maxConcurrentUploads: 3,
    accept: "image/*,.pdf",
  });

  return (
    <div>
      <input {...getInputProps()} />
      <button onClick={() => uploadFiles()} disabled={files.length === 0 || isUploading}>
        Upload via action
      </button>
      {files.map((file) => (
        <FileCard key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </div>
  );
}`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileCard, useFilesUI } from "@files-ui/react";

export default function DemoDropzoneUseFilesUIAction() {
  const demoAction = React.useCallback(async (formData: FormData) => {
    const file = formData.get("file") as File | null;
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: !!file,
      message: file ? \`\${file.name} processed via action\` : "No file provided",
      payload: {},
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
      <input {...getInputProps()} />
      <button onClick={() => uploadFiles()} disabled={files.length === 0 || isUploading}>
        Upload via action
      </button>
      {files.map((file: ExtFile) => (
        <FileCard key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </div>
  );
}`;
