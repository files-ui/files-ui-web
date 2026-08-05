import * as React from "react";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import { Alert, AlertTitle, Button, Paper } from "@mui/material";

const DemoCompressPlugin = () => {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [compressing, setCompressing] = React.useState(false);
  const [compressionStats, setCompressionStats] = React.useState<{
    original: number;
    compressed: number;
    ratio: number;
  } | null>(null);

  const handleFilesChange = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
    setCompressionStats(null);
  };

  const handleCompress = async () => {
    if (files.length === 0) return;

    setCompressing(true);
    try {
      // Try to use real compress package
      try {
        const { compressImage } = await import("@files-ui/compress");

        const file = files[0];
        const originalSize = file.size || 0;

        // Compress the image
        const compressedExtFile = await compressImage(file.file!, {
          maxWidthOrHeight: 1920,
          quality: 0.8,
          format: "jpeg",
        });

        const compressedBlob = compressedExtFile.file!;
        const compressedSize = compressedBlob.size;
        const ratio = (
          ((originalSize - compressedSize) / originalSize) *
          100
        ).toFixed(1);

        setCompressionStats({
          original: originalSize,
          compressed: compressedSize,
          ratio: Number.parseFloat(ratio),
        });

        // Create new ExtFile with compressed image
        const compressedFile = new File(
          [compressedBlob],
          file.name || "compressed.jpg",
          {
            type: compressedBlob.type,
          }
        );

        // Update file list
        const newExtFile: ExtFile = {
          ...file,
          file: compressedFile,
          size: compressedSize,
          imageUrl: URL.createObjectURL(compressedBlob),
        };

        setFiles([newExtFile]);
      } catch (importError) {
        // Fallback: Show mock compression
        console.log("Compress package not available, using mock compression");
        
        const file = files[0];
        const originalSize = file.size || 0;
        const mockReduction = 0.4; // Mock 40% reduction
        const mockCompressedSize = Math.round(originalSize * (1 - mockReduction));
        
        setCompressionStats({
          original: originalSize,
          compressed: mockCompressedSize,
          ratio: mockReduction * 100,
        });
        
        // Update file with mock compressed indicator
        const mockExtFile: ExtFile = {
          ...file,
          name: (file.name || "image.jpg") + " (mock compressed)",
          size: mockCompressedSize,
        };
        
        setFiles([mockExtFile]);
      }
    } catch (error) {
      console.error("Compression demo failed:", error);
      alert("Demo failed. This is a preview of compression functionality.");
    } finally {
      setCompressing(false);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <Paper variant="outlined" style={{ padding: "30px", margin: "20px 0" }}>
      <div style={{ marginBottom: "20px" }}>
        <Dropzone
          onChange={handleFilesChange}
          value={files}
          accept="image/*"
          maxFiles={1}
          label="Drop an image here to compress"
        >
          {files.map((file) => (
            <FileMosaic
              key={file.id}
              {...file}
              onDelete={() => {
                setFiles([]);
                setCompressionStats(null);
              }}
              preview
              info
            />
          ))}
        </Dropzone>
      </div>

      {files.length > 0 && !compressionStats && (
        <Button
          variant="contained"
          onClick={handleCompress}
          disabled={compressing}
          fullWidth
        >
          {compressing ? "Compressing..." : "Compress Image"}
        </Button>
      )}

      {compressionStats && (
        <Alert severity="success">
          <AlertTitle>Compression Complete!</AlertTitle>
          <div style={{ marginTop: "10px" }}>
            <strong>Original size:</strong>{" "}
            {formatBytes(compressionStats.original)}
            <br />
            <strong>Compressed size:</strong>{" "}
            {formatBytes(compressionStats.compressed)}
            <br />
            <strong>Size reduction:</strong> {compressionStats.ratio}%
          </div>
        </Alert>
      )}
    </Paper>
  );
};

export default DemoCompressPlugin;
