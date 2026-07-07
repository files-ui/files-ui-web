import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDropzoneAccessibility = ({ splittedOnly = false }) => {
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

export default CodeDemoDropzoneAccessibility;

const splittedCodeJS = `<Dropzone
  onChange={updateFiles}
  value={files}
  label="Accessible upload area"
  clickable
  footer
  header
>
  {files.map((file) => (
    <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
  ))}
</Dropzone>`;

const splittedCodeTS = `<Dropzone
  onChange={updateFiles}
  value={files}
  label="Accessible upload area"
  clickable
  footer
  header
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
      label="Accessible upload area"
      clickable
      footer
      header
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
      label="Accessible upload area"
      clickable
      footer
      header
    >
      {files.map((file: ExtFile) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </Dropzone>
  );
}`;