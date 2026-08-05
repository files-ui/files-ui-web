import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoFileCardEdit: React.FC = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoFileCardEdit;

const splittedCodeJS = `<FileCard
  {...file}
  onEdit={(file) => console.log("Edit:", file.name)}
  preview
/>`;

const splittedCodeTS = splittedCodeJS;

const completeCodeJS = `
import * as React from "react";
import { FileCard } from "@files-ui/react";

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
    <FileCard
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
import { FileCard, ExtFile } from "@files-ui/react";

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
    <FileCard
      {...file}
      onEdit={handleEdit}
      preview
      info
    />
  );
}
`;
