import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoCropVanillaJS = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoCropVanillaJS;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = `import { useState, useEffect } from "react";
import { FileMosaic, FileCard } from "@files-ui/react";

const SAMPLE_IMAGES = [
  {
    id: "mountain-1",
    name: "mountain-landscape.jpg",
    size: 245000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  },
  {
    id: "forest-2",
    name: "forest-scenery.jpg",
    size: 198000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
  },
];

export default function DemoCropDialog() {
  const [files, setFiles] = useState(SAMPLE_IMAGES);
  const [cropFile, setCropFile] = useState(null);
  const [CropDialogComp, setCropDialogComp] = useState(null);

  useEffect(() => {
    import("@files-ui/crop/react").then((mod) => {
      setCropDialogComp(() => mod.CropDialog);
    });
  }, []);

  const handleEdit = (file) => {
    setCropFile(file);
  };

  const handleCropComplete = (croppedFile) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === cropFile?.id ? { ...croppedFile, id: f.id } : f
      )
    );
    setCropFile(null);
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <FileMosaic {...files[0]} onEdit={handleEdit} preview info />
      <FileCard  {...files[1]} onEdit={handleEdit} preview info />

      {cropFile && CropDialogComp && (
        <CropDialogComp
          file={cropFile}
          onComplete={handleCropComplete}
          onCancel={() => setCropFile(null)}
        />
      )}
    </div>
  );
}`;

const completeCodeTS = `import { useState, useEffect, ComponentType } from "react";
import { FileMosaic, FileCard, ExtFile } from "@files-ui/react";

const SAMPLE_IMAGES: ExtFile[] = [
  {
    id: "mountain-1",
    name: "mountain-landscape.jpg",
    size: 245000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  },
  {
    id: "forest-2",
    name: "forest-scenery.jpg",
    size: 198000,
    type: "image/jpeg",
    valid: true,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
  },
];

export default function DemoCropDialog() {
  const [files, setFiles] = useState<ExtFile[]>(SAMPLE_IMAGES);
  const [cropFile, setCropFile] = useState<ExtFile | null>(null);
  const [CropDialogComp, setCropDialogComp] =
    useState<ComponentType<any> | null>(null);

  useEffect(() => {
    import("@files-ui/crop/react").then((mod) => {
      setCropDialogComp(() => mod.CropDialog);
    });
  }, []);

  const handleEdit = (file: ExtFile) => {
    setCropFile(file);
  };

  const handleCropComplete = (croppedFile: ExtFile) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === cropFile?.id ? { ...croppedFile, id: f.id } : f
      )
    );
    setCropFile(null);
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <FileMosaic {...files[0]} onEdit={handleEdit} preview info />
      <FileCard  {...files[1]} onEdit={handleEdit} preview info />

      {cropFile && CropDialogComp && (
        <CropDialogComp
          file={cropFile}
          onComplete={handleCropComplete}
          onCancel={() => setCropFile(null)}
        />
      )}
    </div>
  );
}`;
