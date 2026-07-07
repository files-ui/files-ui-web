import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicLocalization = ({ card }: { card?: any }) => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS(card)}
      codeCompleteTS={completeCodeTS(card)}
      codeSandboxJS={
        card
          ? "https://codesandbox.io/s/files-ui-localization-filecard-cd3ewd?file=/src/App.js"
          : "https://codesandbox.io/s/files-ui-localization-filemosaic-g0ob4x?file=/src/App.js"
      }
      codeSandboxTS={
        card
          ? "https://codesandbox.io/s/files-ui-localization-filecard-cd3ewd?file=/src/App.js"
          : "https://codesandbox.io/s/files-ui-localization-filemosaic-g0ob4x?file=/src/App.js"
      }
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeJSFileMosaicLocalization;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = (card) => `import * as React from "react";
import { ${card ? "FileInputButton" : `Dropzone`}, ${
  card ? "FileCard" : `FileMosaic`
} } from "@files-ui/react";
import "./styles.css";
import { Autocomplete, TextField } from "@mui/material";

const DemoLocalization = () => {
  const [localization, setLocalization] = React.useState(undefined);

  const hadleSelect = (value) => {
    console.log(value);
    setLocalization(value?.value);
  };
  return (
    <>
      <Autocomplete
        disablePortal
        autoSelect
        size="small"
        onChange={(e, value) => hadleSelect(value)}
        id="combo-box-demo"
        options={languages}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.language}
        renderInput={(params) => <TextField {...params} label="Localization" />}
      />
      <br/>
      ${
        !card
          ? `<div className="demo-localization-container">
        <div className="dropzone-filemosaic-container">
          <Dropzone
            accept={"image/*"}
            maxFileSize={28 * 1024 * 1024}
            maxFiles={10}
            localization={localization}
          ></Dropzone>
        </div>
        <div className="dropzone-filemosaic-container">
          {extFiles.map((extFile, index) => (
            <FileMosaic
              key={index}
              {...extFile}
              localization={localization}
              onDelete={() => {}}
              info
            />
          ))}
        </div>
      </div>`
          : `<div className="demo-localization-container">
        <div className="inputbutton-container">
          <FileInputButton
            localization={localization}
          ></FileInputButton>
        </div>
        <div className="filecard-container">
          {extFiles.map((extFile, index) => (
            <FileCard
              key={index}
              {...extFile}
              localization={localization}
              onDelete={() => {}}
              info
            />
          ))}
        </div>
      </div>`
      }
    </>
  );
};
export default DemoLocalization;

const languages = [
  { language: "Español: ES-es", value: "ES-es" },
  { language: "English: EN-en", value: "EN-en" },
  { language: "French: FR-fr", value: "FR-fr" },
  { language: "Italian: IT-it", value: "IT-it" },
  { language: "Portuguese: PT-pt", value: "PT-pt" },
  { language: "Russian: RU-ru", value: "RU-ru" },
  { language: "Chinese(simplified): ZH-cn", value: "ZH-cn" },
  { language: "Chinese(traditional): ZH-hk", value: "ZH-hk" },
];
const extFiles = [
  {
    id: 0,
    name: "file_localization.docx",
    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 1,
    valid: false,
    name: "file_localization.docx",
    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 2,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
  },
  {
    id: 3,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "preparing",
  },
  {
    id: 4,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "uploading",
    progress: 28,
  },
  {
    id: 5,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "aborted",
    uploadMessage: "Upload was aborted",
  },
  {
    id: 6,
    valid: false,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "error",
    uploadMessage: "there was an error on the server",
  },
  {
    id: 7,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "success",
    uploadMessage: "files-ui <3",
  },
];`;

const completeCodeTS = (card) => `import * as React from "react";
import { ExtFile, ${card ? "FIleInputButton" : `Dropzone`}, ${
  card ? "FileCard" : `FileMosaic`
}, Localization } from "@files-ui/react";
import "./styles.css";
import { Autocomplete, TextField } from "@mui/material";

const DemoLocalization = () => {
  const [localization, setLocalization] = React.useState<
    Localization | undefined
  >(undefined);

  const hadleSelect = (value: LanguageItem | null) => {
    console.log(value);
    setLocalization(value?.value);
  };

  return (
    <>
      <Autocomplete
        disablePortal
        autoSelect
        size="small"
        onChange={(e, value) => hadleSelect(value as LanguageItem)}
        id="combo-box-demo"
        options={languages}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.language}
        renderInput={(params) => <TextField {...params} label="Localization" />}
      />
      ${
        !card
          ? `<div className="demo-localization-container">
        <div className="dropzone-filemosaic-container">
          <Dropzone
            accept={"image/*"}
            maxFileSize={28 * 1024 * 1024}
            maxFiles={10}
            localization={localization}
          ></Dropzone>
        </div>
        <div className="dropzone-filemosaic-container">
          {extFiles.map((extFile, index) => (
            <FileMosaic
              key={index}
              {...extFile}
              localization={localization}
              onDelete={() => {}}
              info
            />
          ))}
        </div>
      </div>`
          : `<div className="demo-localization-container">
        <div className="inputbutton-container">
          <FileInputButton
            localization={localization}
          ></FileInputButton>
        </div>
        <div className="filecard-container">
          {extFiles.map((extFile, index) => (
            <FileCard
              key={index}
              {...extFile}
              localization={localization}
              onDelete={() => {}}
              info
            />
          ))}
        </div>
      </div>`
      }
    </>
  );
};
export default DemoLocalization;

interface LanguageItem {
  language: string;
  value: Localization;
}

const languages = [
  { language: "Español: ES-es", value: "ES-es" },
  { language: "English: EN-en", value: "EN-en" },
  { language: "French: FR-fr", value: "FR-fr" },
  { language: "Italian: IT-it", value: "IT-it" },
  { language: "Portuguese: PT-pt", value: "PT-pt" },
  { language: "Russian: RU-ru", value: "RU-ru" },
  { language: "Chinese(simplified): ZH-cn", value: "ZH-cn" },
  { language: "Chinese(traditional): ZH-hk", value: "ZH-hk" },
];
const extFiles: ExtFile[] = [
  {
    id: 0,
    name: "file_localization.docx",
    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 1,
    valid: false,
    name: "file_localization.docx",

    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 2,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
  },
  {
    id: 3,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "preparing",
  },
  {
    id: 4,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "uploading",
    progress: 28,
  },
  {
    id: 5,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "aborted",
    uploadMessage: "Upload was aborted",
  },
  {
    id: 6,
    valid: false,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "error",
    uploadMessage: "there was an error on the server",
  },
  {
    id: 7,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "success",
    uploadMessage: "files-ui <3",
  },
];`;
