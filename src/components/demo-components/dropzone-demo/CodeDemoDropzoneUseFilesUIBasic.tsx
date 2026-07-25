import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDropzoneUseFilesUIBasic = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/files-ui-usefilesui-headless-basic-3-sample"
      codeSandboxTS="https://codesandbox.io/s/files-ui-usefilesui-headless-basic-3-sample"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoDropzoneUseFilesUIBasic;

const splittedCodeJS = `const {
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
});

<div {...getDragHandlers()}>
  <input {...getInputProps()} />
  <button onClick={() => uploadFiles()} disabled={isUploading}>Upload files</button>
  <span>{numberOfValidFiles} / {files.length}</span>
  {files.map((file) => (
    <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
  ))}
</div>`;

const splittedCodeTS = `const {
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

<div {...getDragHandlers()}>
  <input {...getInputProps()} />
  <button onClick={() => uploadFiles()} disabled={isUploading}>Upload files</button>
  <span>{numberOfValidFiles} / {files.length}</span>
  {files.map((file: ExtFile) => (
    <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
  ))}
</div>`;

const completeCodeJS = `import * as React from "react";
import { FileMosaic, useFilesUI } from "@files-ui/react";

export default function DemoDropzoneUseFilesUIBasic() {
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
  });

  return (
    <div>
      <div {...getDragHandlers()}>
        <input {...getInputProps()} />
        <button onClick={() => uploadFiles()} disabled={files.length === 0 || isUploading}>
          Upload files
        </button>
        <span>Valid files: {numberOfValidFiles} / {files.length}</span>
      </div>
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </div>
  );
}`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileMosaic, useFilesUI } from "@files-ui/react";

export default function DemoDropzoneUseFilesUIBasic() {
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
      <div {...getDragHandlers()}>
        <input {...getInputProps()} />
        <button onClick={() => uploadFiles()} disabled={files.length === 0 || isUploading}>
          Upload files
        </button>
        <span>Valid files: {numberOfValidFiles} / {files.length}</span>
      </div>
      {files.map((file: ExtFile) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </div>
  );
}`;
