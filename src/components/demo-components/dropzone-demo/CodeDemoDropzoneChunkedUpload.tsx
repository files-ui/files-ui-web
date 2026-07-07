import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDropzoneChunkedUpload = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoDropzoneChunkedUpload;

const splittedCodeJS = `<Dropzone
  onChange={updateFiles}
  value={files}
  maxConcurrentUploads={3}
  actionButtons={{ position: "after", uploadButton: {}, abortButton: {} }}
  uploadConfig={{
    url: "https://www.myawsomeserver.com/upload",
    method: "POST",
    chunked: true,
    chunkSize: 256 * 1024,
  }}
  fakeUpload
>
  {files.map((file) => (
    <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
  ))}
</Dropzone>`;

const splittedCodeTS = `<Dropzone
  onChange={updateFiles}
  value={files}
  maxConcurrentUploads={3}
  actionButtons={{ position: "after", uploadButton: {}, abortButton: {} }}
  uploadConfig={{
    url: "https://www.myawsomeserver.com/upload",
    method: "POST",
    chunked: true,
    chunkSize: 256 * 1024,
  } as any}
  fakeUpload
>
  {files.map((file: ExtFile) => (
    <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
  ))}
</Dropzone>`;

const completeCodeJS = `import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState([]);

  const updateFiles = (incomingFiles) => setFiles(incomingFiles);
  const removeFile = (id) => setFiles((prev) => prev.filter((x) => x.id !== id));

  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      maxConcurrentUploads={3}
      actionButtons={{ position: "after", uploadButton: {}, abortButton: {} }}
      uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        chunked: true,
        chunkSize: 256 * 1024,
      }}
      fakeUpload
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import * as React from "react";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);

  const updateFiles = (incomingFiles: ExtFile[]) => setFiles(incomingFiles);
  const removeFile = (id: number | string | undefined) =>
    setFiles((prev) => prev.filter((x) => x.id !== id));

  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      maxConcurrentUploads={3}
      actionButtons={{ position: "after", uploadButton: {}, abortButton: {} }}
      uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        chunked: true,
        chunkSize: 256 * 1024,
      } as any}
      fakeUpload
    >
      {files.map((file: ExtFile) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </Dropzone>
  );
}`;