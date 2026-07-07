import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

const DemoDropzoneAccessibility = () => {
  const [files, setFiles] = React.useState([]);

  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      label="Accessible upload area"
      clickable
      footer
      header
      style={{ minHeight: "220px" }}
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </Dropzone>
  );
};

export default DemoDropzoneAccessibility;
