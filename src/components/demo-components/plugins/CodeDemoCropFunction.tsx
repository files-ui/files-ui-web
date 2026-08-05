import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoCropFunction = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoCropFunction;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = `import { useState } from "react";
import { FileMosaic, FileCard } from "@files-ui/react";

const SAMPLE_IMAGES = [
  {
    id: "landscape-1",
    name: "landscape.jpg",
    size: 245000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
  },
  {
    id: "cityscape-2",
    name: "cityscape.jpg",
    size: 198000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
  },
];

export default function DemoPureCropping() {
  const [files, setFiles] = useState(SAMPLE_IMAGES);

  const handleEdit = async (file) => {
    if (!file.imageUrl) return;

    const { cropImage } = await import("@files-ui/crop/core");

    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = file.imageUrl;
    });

    // Crop center 60%
    const cropWidth  = img.width * 0.6;
    const cropHeight = img.height * 0.6;
    const x = (img.width - cropWidth) / 2;
    const y = (img.height - cropHeight) / 2;

    const croppedBlob = await cropImage(
      file.imageUrl,
      { x, y, width: cropWidth, height: cropHeight },
      { quality: 0.92, format: "jpeg" }
    );

    const croppedFileObj = new File([croppedBlob], file.name, {
      type: "image/jpeg",
    });

    // Update the same file in place
    setFiles((prev) =>
      prev.map((f) =>
        f.id === file.id
          ? {
              ...f,
              file: croppedFileObj,
              size: croppedBlob.size,
              imageUrl: URL.createObjectURL(croppedBlob),
            }
          : f
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <FileMosaic {...files[0]} onEdit={handleEdit} preview info />
      <FileCard  {...files[1]} onEdit={handleEdit} preview info />
    </div>
  );
}`;

const completeCodeTS = `import { useState } from "react";
import { FileMosaic, FileCard, ExtFile } from "@files-ui/react";

const SAMPLE_IMAGES: ExtFile[] = [
  {
    id: "landscape-1",
    name: "landscape.jpg",
    size: 245000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
  },
  {
    id: "cityscape-2",
    name: "cityscape.jpg",
    size: 198000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
  },
];

export default function DemoPureCropping() {
  const [files, setFiles] = useState<ExtFile[]>(SAMPLE_IMAGES);

  const handleEdit = async (file: ExtFile) => {
    if (!file.imageUrl) return;

    const { cropImage } = await import("@files-ui/crop/core");

    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = file.imageUrl!;
    });

    // Crop center 60%
    const cropWidth  = img.width * 0.6;
    const cropHeight = img.height * 0.6;
    const x = (img.width - cropWidth) / 2;
    const y = (img.height - cropHeight) / 2;

    const croppedBlob = await cropImage(
      file.imageUrl,
      { x, y, width: cropWidth, height: cropHeight },
      { quality: 0.92, format: "jpeg" }
    );

    const croppedFileObj = new File([croppedBlob], file.name || "cropped.jpg", {
      type: "image/jpeg",
    });

    // Update the same file in place
    setFiles((prev) =>
      prev.map((f) =>
        f.id === file.id
          ? {
              ...f,
              file: croppedFileObj,
              size: croppedBlob.size,
              imageUrl: URL.createObjectURL(croppedBlob),
            }
          : f
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <FileMosaic {...files[0]} onEdit={handleEdit} preview info />
      <FileCard  {...files[1]} onEdit={handleEdit} preview info />
    </div>
  );
}`;
