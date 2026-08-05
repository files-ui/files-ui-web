import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoCompressIntegration = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoCompressIntegration;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = `import { FileMosaic } from "@files-ui/react";
import { CropDialog } from "@files-ui/crop/react";
import { compressImage } from "@files-ui/compress";
import { useState } from "react";

function ImageEditor() {
  const [files, setFiles] = useState([]);
  const [cropFile, setCropFile] = useState(null);

  const handleCropAndCompress = async (croppedFile) => {
    // First crop, then compress
    const compressed = await compressImage(croppedFile.file, {
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 0.85,
      format: "jpeg"
    });
    
    const final = {
      ...croppedFile,
      file: new File([compressed], croppedFile.name, { type: compressed.type }),
      size: compressed.size,
      imageUrl: URL.createObjectURL(compressed)
    };
    
    setFiles(prev => prev.map(f => f.id === cropFile.id ? final : f));
    setCropFile(null);
  };

  return (
    <>
      {files.map(file => (
        <FileMosaic
          key={file.id}
          {...file}
          onEdit={() => setCropFile(file)}
          preview
          info
        />
      ))}
      
      {cropFile && (
        <CropDialog
          file={cropFile}
          onComplete={handleCropAndCompress}
          onCancel={() => setCropFile(null)}
        />
      )}
    </>
  );
}

export default ImageEditor;`;

const completeCodeTS = `import { FileMosaic, ExtFile } from "@files-ui/react";
import { CropDialog } from "@files-ui/crop/react";
import { compressImage } from "@files-ui/compress";
import { useState } from "react";

function ImageEditor() {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const [cropFile, setCropFile] = useState<ExtFile | null>(null);

  const handleCropAndCompress = async (croppedFile: ExtFile) => {
    if (!croppedFile.file) return;
    
    // First crop, then compress
    const compressed: Blob = await compressImage(croppedFile.file, {
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 0.85,
      format: "jpeg"
    });
    
    const final: ExtFile = {
      ...croppedFile,
      file: new File([compressed], croppedFile.name || "compressed.jpg", { 
        type: compressed.type 
      }),
      size: compressed.size,
      imageUrl: URL.createObjectURL(compressed)
    };
    
    setFiles((prev: ExtFile[]) => 
      prev.map((f: ExtFile) => f.id === cropFile?.id ? final : f)
    );
    setCropFile(null);
  };

  return (
    <>
      {files.map((file: ExtFile) => (
        <FileMosaic
          key={file.id}
          {...file}
          onEdit={() => setCropFile(file)}
          preview
          info
        />
      ))}
      
      {cropFile && (
        <CropDialog
          file={cropFile}
          onComplete={handleCropAndCompress}
          onCancel={() => setCropFile(null)}
        />
      )}
    </>
  );
}

export default ImageEditor;`;
