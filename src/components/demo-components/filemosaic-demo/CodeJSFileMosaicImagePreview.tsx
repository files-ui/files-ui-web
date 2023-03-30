import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicImagePreview = (props: { card: boolean }) => {
  const { card } = props;
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS(card)}
      codeCompleteTS={completeCodeTS(card)}
      codeSandboxJS={
        card
          ? "https://codesandbox.io/s/files-ui-imagepreview-filecard-ztr25h?file=/src/App.js"
          : "https://codesandbox.io/s/files-ui-imagepreview-filemosaic-w09s6r?file=/src/App.js"
      }
      codeSandboxTS={
        card
          ? "https://codesandbox.io/s/files-ui-imagepreview-filecard-ztr25h?file=/src/App.js"
          : "https://codesandbox.io/s/files-ui-imagepreview-filemosaic-w09s6r?file=/src/App.js"
      }
      codeSplittedJS={splittedCodeJS(card)}
      codeSplittedTS={splittedCodeTS(card)}
    />
  );
};
export default CodeJSFileMosaicImagePreview;

const splittedCodeJS = (card: boolean) => `<>
  {value ? (
    <${
      card ? "FileCard" : "FileMosaic"
    } {...value} onDelete={removeFile} info preview/>
  ) : (
    <FileInputButton onChange={updateFile} accept="image/*"/>
  )}
  <${card ? "FileCard" : "FileMosaic"} {...sampleFileProps} info/>
</>

// file props
const sampleFileProps = {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "Thor arrives wakanda.jpg",
    imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
};`;

const completeCodeJS = (card: boolean) => `import * as React from "react";
import { FileInputButton, ${
  card ? "FileCard" : "FileMosaic"
} } from "@files-ui/react";

const sampleFileProps = {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "Thor arrives wakanda.jpg",
    imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
};

export default function App() {
  const [value, setValue] = React.useState(undefined);

  const updateFiles = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
      {value ? (
        <${
          card ? "FileCard" : "FileMosaic"
        } {...value} onDelete={removeFile} info preview/>
      ) : (
        <FileInputButton onChange={updateFile} accept="image/*"/>
      )}
      <${card ? "FileCard" : "FileMosaic"} {...sampleFileProps} info/>
    </div>
  );
};`;

const splittedCodeTS = (card: boolean) => `<>
{value ? (
  <${
    card ? "FileCard" : "FileMosaic"
  } {...value} onDelete={removeFile} info preview/>
) : (
  <FileInputButton onChange={updateFile} accept="image/*"/>
)}
<${card ? "FileCard" : "FileMosaic"} {...sampleFileProps} info/>
</>

// file props
const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "Thor arrives wakanda.jpg",
  imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
};`;
const completeCodeTS = (card: boolean) => `import * as React from "react";
import { FileInputButton, ${
  card ? "FileCard" : "FileMosaic"
}, ExtFile } from "@files-ui/react";

const sampleFileProps: ExtFile = {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "Thor arrives wakanda.jpg",
    imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
};

export default function App() {
  const [value, setValue] = React.useState<ExtFile | undefined>(undefined);

  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
      {value ? (
        <${
          card ? "FileCard" : "FileMosaic"
        } {...value} onDelete={removeFile} info preview/>
      ) : (
        <FileInputButton onChange={updateFile} accept="image/*"/>
      )}
      <${card ? "FileCard" : "FileMosaic"} {...sampleFileProps} info/>
    </div>
  );
};`;
