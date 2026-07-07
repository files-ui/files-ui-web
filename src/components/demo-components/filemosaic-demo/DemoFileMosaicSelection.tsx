import * as React from "react";
import { FileCard, FileMosaic } from "@files-ui/react";
import DemoContainerFileMosaic from "./DemoContainerFileMosaic";

const baseFiles = [
  {
    id: "sel-1",
    name: "selection-1.png",
    type: "image/png",
    size: 53000,
    valid: true,
    imageUrl:
      "https://w0.peakpx.com/wallpaper/635/84/HD-wallpaper-thanos-and-iron-man-avengers-clouds-cloudy-face-to-face-her-iron-man-marvel-thanos-war.jpg",
  },
  {
    id: "sel-2",
    name: "selection-2.png",
    type: "image/png",
    size: 71000,
    valid: true,
    imageUrl:
      "https://www.shutterstock.com/image-photo/beautiful-autumn-landscape-nature-background-600w-2471169231.jpg",
  },
  {
    id: "sel-3",
    name: "selection-3.png",
    type: "image/png",
    size: 89000,
    valid: true,
    imageUrl:
      "https://www.shutterstock.com/image-photo/beautiful-autumn-landscape-nature-background-600w-2453020839.jpg",
  },
];

interface DemoFileMosaicSelectionProps {
  card?: boolean;
}

const DemoFileMosaicSelection: React.FC<DemoFileMosaicSelectionProps> = ({
  card,
}: DemoFileMosaicSelectionProps) => {
  const [selectedIds, setSelectedIds] = React.useState<(string | number)[]>([]);

  const toggleSelection = React.useCallback(
    (id: string | number | undefined, selected: boolean) => {
      if (id === undefined) return;

      setSelectedIds((prev) => {
        if (selected) {
          return prev.includes(id) ? prev : [...prev, id];
        }
        return prev.filter((item) => item !== id);
      });
    },
    [],
  );

  return (
    <>
      <DemoContainerFileMosaic card={card}>
        {baseFiles.map((file) => {
          const commonProps = {
            key: file.id,
            ...file,
            selectable: true,
            selected: selectedIds.includes(file.id),
            onSelect: toggleSelection,
            preview: true,
            info: true,
          };

          if (card) {
            return <FileCard {...commonProps} />;
          }

          return <FileMosaic {...commonProps} />;
        })}
      </DemoContainerFileMosaic>
      <p style={{ textAlign: "center" }}>
        Selected: {selectedIds.length ? selectedIds.join(", ") : "none"}
      </p>
    </>
  );
};

export default DemoFileMosaicSelection;
