import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoCompressPlugin = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoCompressPlugin;

const splittedCodeJS = `const handleCompress = async (file) => {
  const { compressImage } = await import("@files-ui/compress");
  
  const compressedBlob = await compressImage(file.file, {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.8,
    format: "image/jpeg"
  });
  
  const compressedFile = new File([compressedBlob], file.name, {
    type: "image/jpeg"
  });
  
  // Update with compressed file
  const newExtFile = {
    ...file,
    file: compressedFile,
    size: compressedBlob.size
  };
  
  setFiles([newExtFile]);
};`;

const splittedCodeTS = `const handleCompress = async (file: ExtFile) => {
  const { compressImage } = await import("@files-ui/compress");
  
  const compressedBlob = await compressImage(file.file!, {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.8,
    format: "image/jpeg"
  });
  
  const compressedFile = new File([compressedBlob], file.name, {
    type: "image/jpeg"
  });
  
  // Update with compressed file
  const newExtFile: ExtFile = {
    ...file,
    file: compressedFile,
    size: compressedBlob.size
  };
  
  setFiles([newExtFile]);
};`;

const completeCodeJS = `import { Dropzone, FileMosaic } from "@files-ui/react";
import * as React from "react";

export default function CompressDemo() {
  const [files, setFiles] = React.useState([]);
  const [compressing, setCompressing] = React.useState(false);
  const [stats, setStats] = React.useState(null);

  const handleFilesChange = (newFiles) => {
    setFiles(newFiles);
    setStats(null);
  };

  const handleCompress = async (file) => {
    setCompressing(true);
    try {
      const { compressImage } = await import("@files-ui/compress");
      
      const originalSize = file.size;
      const compressedBlob = await compressImage(file.file, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.8,
        format: "image/jpeg"
      });
      
      const compressedFile = new File([compressedBlob], file.name, {
        type: "image/jpeg"
      });
      
      const compressedSize = compressedBlob.size;
      const ratio = Math.round((1 - compressedSize / originalSize) * 100);
      
      setStats({
        original: originalSize,
        compressed: compressedSize,
        ratio: ratio
      });
      
      const newExtFile = {
        ...file,
        file: compressedFile,
        size: compressedSize,
        imageUrl: URL.createObjectURL(compressedBlob)
      };
      
      setFiles([newExtFile]);
    } catch (error) {
      console.error("Compression failed:", error);
    } finally {
      setCompressing(false);
    }
  };

  const handleDelete = () => {
    setFiles([]);
    setStats(null);
  };

  return (
    <>
      <Dropzone
        onChange={handleFilesChange}
        value={files}
        accept="image/*"
        maxFiles={1}
        label="Drop an image to compress"
      >
        {files.map((file) => (
          <FileMosaic
            key={file.id}
            {...file}
            onDelete={handleDelete}
            preview
            info
          />
        ))}
      </Dropzone>

      {files.length > 0 && !stats && (
        <button onClick={() => handleCompress(files[0])} disabled={compressing}>
          {compressing ? "Compressing..." : "Compress Image"}
        </button>
      )}

      {stats && (
        <div>
          <p>Original: {formatBytes(stats.original)}</p>
          <p>Compressed: {formatBytes(stats.compressed)}</p>
          <p>Saved: {stats.ratio}%</p>
        </div>
      )}
    </>
  );
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}`;

const completeCodeTS = `import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

interface CompressionStats {
  original: number;
  compressed: number;
  ratio: number;
}

export default function CompressDemo() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [compressing, setCompressing] = React.useState(false);
  const [stats, setStats] = React.useState<CompressionStats | null>(null);

  const handleFilesChange = (newFiles: ExtFile[]) => {
    setFiles(newFiles);
    setStats(null);
  };

  const handleCompress = async (file: ExtFile) => {
    setCompressing(true);
    try {
      const { compressImage } = await import("@files-ui/compress");
      
      const originalSize = file.size;
      const compressedBlob = await compressImage(file.file!, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.8,
        format: "image/jpeg"
      });
      
      const compressedFile = new File([compressedBlob], file.name, {
        type: "image/jpeg"
      });
      
      const compressedSize = compressedBlob.size;
      const ratio = Math.round((1 - compressedSize / originalSize) * 100);
      
      setStats({
        original: originalSize,
        compressed: compressedSize,
        ratio: ratio
      });
      
      const newExtFile: ExtFile = {
        ...file,
        file: compressedFile,
        size: compressedSize,
        imageUrl: URL.createObjectURL(compressedBlob)
      };
      
      setFiles([newExtFile]);
    } catch (error) {
      console.error("Compression failed:", error);
    } finally {
      setCompressing(false);
    }
  };

  const handleDelete = () => {
    setFiles([]);
    setStats(null);
  };

  return (
    <>
      <Dropzone
        onChange={handleFilesChange}
        value={files}
        accept="image/*"
        maxFiles={1}
        label="Drop an image to compress"
      >
        {files.map((file: ExtFile) => (
          <FileMosaic
            key={file.id}
            {...file}
            onDelete={handleDelete}
            preview
            info
          />
        ))}
      </Dropzone>

      {files.length > 0 && !stats && (
        <button onClick={() => handleCompress(files[0])} disabled={compressing}>
          {compressing ? "Compressing..." : "Compress Image"}
        </button>
      )}

      {stats && (
        <div>
          <p>Original: {formatBytes(stats.original)}</p>
          <p>Compressed: {formatBytes(stats.compressed)}</p>
          <p>Saved: {stats.ratio}%</p>
        </div>
      )}
    </>
  );
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}`;
