import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicBasic = (props: any) => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/files-ui-basic-filemosaic-d6n7fy"
      codeSandboxTS="https://codesandbox.io/s/files-ui-basic-filemosaic-d6n7fy"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeJSFileMosaicBasic;

const splittedCodeJS = `<>
  {value ? (
    <FileMosaic {...value} onDelete={removeFile} />
  ) : (
    <FileInputButton value={value ? [value] : []} onChange={updateFiles} />
  )}
  <FileMosaic {...sampleFileProps} />
</>

// file props
const sampleFileProps = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.tsx",
};`;

const completeCodeJS = `import * as React from "react";
import { FileInputButton, FileMosaic } from "@files-ui/react";

const sampleFileProps = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.tsx"
};

export default function BasicFileMosaicDemo() {
  const [value, setValue] = React.useState(undefined);

  const updateFiles = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {value ? (
        <FileMosaic {...value} onDelete={removeFile} info />
      ) : (
        <FileInputButton value={value ? [value] : []} onChange={updateFiles} />
      )}
      <FileMosaic {...sampleFileProps} info />
    </div>
  );
}`;

const splittedCodeTS = `<>
  {value ? (
    <FileMosaic {...value} onDelete={removeFile} info/>
  ) : (
    <FileInputButton value={value ? [value] : []} onChange={updateFiles} />
  )}
  <FileMosaic {...sampleFileProps} info/>
</>

// file props
const sampleFileProps: ExtFile = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.tsx",
};`;
const completeCodeTS = `import * as React from "react";
import { FileInputButton, FileMosaic, ExtFile } from "@files-ui/react";

const sampleFileProps:ExtFile = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.tsx",
};

export default function BasicFileMosaicDemo() {
  const [value, setValue] = React.useState<ExtFile | undefined>(undefined);

  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {value ? (
        <FileMosaic {...value} onDelete={removeFile} info/>
      ) : (
        <FileInputButton value={value ? [value] : []} onChange={updateFiles} />
      )}
      <FileMosaic {...sampleFileProps} info/>
    </div>
  );
};`;
