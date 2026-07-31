import * as React from "react";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";

const BASE_URL = "https://www.myserver.com";

export default function AdvancedDropzoneDemo() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);

  const updateFiles = (incommingFiles: ExtFile[]) => {
    setFiles(incommingFiles);
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const handleSee = (imageSource: File | string | undefined) => {
    if (typeof imageSource === "string") {
      setImageSrc(imageSource);
    }
  };

  const handleStart = (filesToUpload: ExtFile[]) => {
    console.log("Upload started:", filesToUpload);
  };

  const handleFinish = (uploadedFiles: ExtFile[]) => {
    console.log("Upload finished:", uploadedFiles);
  };
  return (
    <>
      <Dropzone
        onChange={updateFiles}
        value={files}
        accept="image/*"
        maxFiles={3}
        maxFileSize={2 * 1024 * 1024}
        label="Drop images here or click to browse"
        uploadConfig={{
          url: BASE_URL + "/api/upload",
          cleanOnUpload: true,
        }}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
        fakeUpload
        actionButtons={{
          position: "after",
          uploadButton: {},
          deleteButton: {},
          abortButton: {},
        }}
      >
        {files.map((file) => (
          <FileMosaic
            key={file.id}
            {...file}
            onDelete={removeFile}
            onSee={handleSee}
            resultOnTooltip
            preview
            info
          />
        ))}
      </Dropzone>

      <FullScreen open={!!imageSrc} onClose={() => setImageSrc(undefined)}>
        <ImagePreview src={imageSrc} />
      </FullScreen>
    </>
  );
}
