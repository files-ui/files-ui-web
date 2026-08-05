import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoFileMosaicEdit: React.FC = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoFileMosaicEdit;

const splittedCodeJS = `<FileMosaic
  {...file}
  onEdit={(file) => console.log("Edit:", file.name)}
  preview
/>`;

const splittedCodeTS = splittedCodeJS;

const completeCodeJS = `
import * as React from "react";
import { FileMosaic } from "@files-ui/react";

function EditExample() {
  const handleEdit = (file) => {
    console.log("Opening editor for:", file.name);
    // Open your image editor here
  };

  const file = {
    id: 1,
    name: "photo.jpg",
    type: "image/jpeg",
    size: 1024000,
    valid: true,
    imageUrl: "https://example.com/photo.jpg",
  };

  return (
    <FileMosaic
      {...file}
      onEdit={handleEdit}
      preview
      info
    />
  );
}
`;

const completeCodeTS = `
import * as React from "react";
import { FileMosaic, ExtFile } from "@files-ui/react";

function EditExample() {
  const handleEdit = (file: ExtFile) => {
    console.log("Opening editor for:", file.name);
    // Open your image editor here
  };

  const file = {
    id: 1,
    name: "photo.jpg",
    type: "image/jpeg",
    size: 1024000,
    valid: true,
    imageUrl: "https://example.com/photo.jpg",
  };

  return (
    <FileMosaic
      {...file}
      onEdit={handleEdit}
      preview
      info
    />
  );
}
`;
