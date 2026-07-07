import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDropzoneLazyLoad = ({ splittedOnly = false }) => {
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

export default CodeDemoDropzoneLazyLoad;

const splittedCodeJS = `<Dropzone
  value={files}
  onChange={setFiles}
  clickable={false}
  lazyLoad
  lazyLoadBuffer={240}
  style={{ minHeight: "280px", maxHeight: "340px", overflow: "auto" }}
  header={false}
  footer={false}
>
  {files.map((file) => (
    <FileMosaic key={file.id} {...file} info />
  ))}
</Dropzone>`;

const splittedCodeTS = `<Dropzone
  value={files}
  onChange={setFiles}
  clickable={false}
  lazyLoad
  lazyLoadBuffer={240}
  style={{ minHeight: "280px", maxHeight: "340px", overflow: "auto" }}
  header={false}
  footer={false}
>
  {files.map((file: ExtFile) => (
    <FileMosaic key={file.id} {...file} info />
  ))}
</Dropzone>`;

const completeCodeJS = `import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    const generated = Array.from({ length: 120 }).map((_, index) => ({
      id: \`lazy-\${index}\`,
      name: \`lazy-file-\${index}.txt\`,
      type: "text/plain",
      size: 1024 * (index + 1),
      valid: true,
    }));
    setFiles(generated);
  }, []);

  return (
    <Dropzone
      value={files}
      onChange={setFiles}
      clickable={false}
      lazyLoad
      lazyLoadBuffer={240}
      style={{ minHeight: "280px", maxHeight: "340px", overflow: "auto" }}
      header={false}
      footer={false}
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} info />
      ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import * as React from "react";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);

  React.useEffect(() => {
    const generated: ExtFile[] = Array.from({ length: 120 }).map((_, index) => ({
      id: \`lazy-\${index}\`,
      name: \`lazy-file-\${index}.txt\`,
      type: "text/plain",
      size: 1024 * (index + 1),
      valid: true,
    }));
    setFiles(generated);
  }, []);

  return (
    <Dropzone
      value={files}
      onChange={setFiles}
      clickable={false}
      lazyLoad
      lazyLoadBuffer={240}
      style={{ minHeight: "280px", maxHeight: "340px", overflow: "auto" }}
      header={false}
      footer={false}
    >
      {files.map((file: ExtFile) => (
        <FileMosaic key={file.id} {...file} info />
      ))}
    </Dropzone>
  );
}`;