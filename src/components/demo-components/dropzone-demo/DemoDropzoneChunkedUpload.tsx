import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

const DemoDropzoneChunkedUpload = () => {
  const [files, setFiles] = React.useState([]);

  const updateFiles = (incomingFiles) => setFiles(incomingFiles);
  const removeFile = (id) => setFiles((prev) => prev.filter((x) => x.id !== id));

  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      accept="image/*"
      maxFiles={8}
      actionButtons={{ position: "after", uploadButton: {}, abortButton: {} }}
      maxConcurrentUploads={3}
      uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        chunked: true,
        chunkSize: 256 * 1024,
        cleanOnUpload: true,
      } as any}
      fakeUpload
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
      ))}
    </Dropzone>
  );
};

export default DemoDropzoneChunkedUpload;
