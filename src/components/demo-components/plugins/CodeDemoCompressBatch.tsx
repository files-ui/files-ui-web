import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoCompressBatch = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoCompressBatch;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = `import { compressImages, getTotalSize, formatBytes } from "@files-ui/compress";

async function handleBatchCompress(files) {
  const imageFiles = files.filter(f => f.type?.startsWith("image/"));
  
  const originalSize = getTotalSize(imageFiles);
  console.log("Original total:", formatBytes(originalSize));
  
  const compressed = await compressImages(imageFiles, {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.8
  });
  
  const compressedSize = getTotalSize(compressed);
  console.log("Compressed total:", formatBytes(compressedSize));
  console.log("Saved:", formatBytes(originalSize - compressedSize));
  
  return compressed;
}`;

const completeCodeTS = `import { compressImages, getTotalSize, formatBytes } from "@files-ui/compress";

async function handleBatchCompress(files: File[]): Promise<Blob[]> {
  const imageFiles = files.filter((f: File) => f.type?.startsWith("image/"));
  
  const originalSize: number = getTotalSize(imageFiles);
  console.log("Original total:", formatBytes(originalSize));
  
  const compressed: Blob[] = await compressImages(imageFiles, {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.8
  });
  
  const compressedSize: number = getTotalSize(compressed);
  console.log("Compressed total:", formatBytes(compressedSize));
  console.log("Saved:", formatBytes(originalSize - compressedSize));
  
  return compressed;
}`;
