import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoCropPlugin = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoCropPlugin;

const splittedCodeJS = `<FileMosaic
  {...file}
  onEdit={handleEdit}
  preview
/>

{cropFile && (
  <CropDialog
    file={cropFile}
    onComplete={handleCropComplete}
    onCancel={() => setCropFile(null)}
    aspectRatio={16/9}
    quality={0.92}
  />
)}`;

const splittedCodeTS = `<FileMosaic
  {...file}
  onEdit={handleEdit}
  preview
/>

{cropFile && (
  <CropDialog
    file={cropFile}
    onComplete={handleCropComplete}
    onCancel={() => setCropFile(null)}
    aspectRatio={16/9}
    quality={0.92}
  />
)}`;

const completeCodeJS = `import { FileMosaic } from "@files-ui/react";
import { CropDialog } from "@files-ui/crop/react";
import * as React from "react";

export default function CropDemo() {
  const [files, setFiles] = React.useState([]);
  const [cropFile, setCropFile] = React.useState(null);

  const handleEdit = (file) => {
    setCropFile(file);
  };

  const handleCropComplete = (croppedFile) => {
    // Replace original file with cropped version
    setFiles(prev => prev.map(f => 
      f.id === cropFile.id ? croppedFile : f
    ));
    setCropFile(null);
  };

  const handleDelete = (id) => {
    setFiles(files.filter(f => f.id !== id));
  };

  return (
    <>
      {files.map(file => (
        <FileMosaic
          key={file.id}
          {...file}
          onEdit={handleEdit}
          onDelete={handleDelete}
          preview
        />
      ))}
      
      {cropFile && (
        <CropDialog
          file={cropFile}
          onComplete={handleCropComplete}
          onCancel={() => setCropFile(null)}
          aspectRatio={16/9}
          quality={0.92}
          format="jpeg"
        />
      )}
    </>
  );
}`;

const completeCodeTS = `import { FileMosaic, ExtFile } from "@files-ui/react";
import { CropDialog } from "@files-ui/crop/react";
import * as React from "react";

export default function CropDemo() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [cropFile, setCropFile] = React.useState<ExtFile | null>(null);

  const handleEdit = (file: ExtFile) => {
    setCropFile(file);
  };

  const handleCropComplete = (croppedFile: ExtFile) => {
    // Replace original file with cropped version
    setFiles(prev => prev.map(f => 
      f.id === cropFile?.id ? croppedFile : f
    ));
    setCropFile(null);
  };

  const handleDelete = (id: string | number | undefined) => {
    setFiles(files.filter(f => f.id !== id));
  };

  return (
    <>
      {files.map((file: ExtFile) => (
        <FileMosaic
          key={file.id}
          {...file}
          onEdit={handleEdit}
          onDelete={handleDelete}
          preview
        />
      ))}
      
      {cropFile && (
        <CropDialog
          file={cropFile}
          onComplete={handleCropComplete}
          onCancel={() => setCropFile(null)}
          aspectRatio={16/9}
          quality={0.92}
          format="jpeg"
        />
      )}
    </>
  );
}`;
