import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicSelection = ({ splittedOnly = false, card = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={card ? completeCodeJSCard : completeCodeJS}
      codeCompleteTS={card ? completeCodeTSCard : completeCodeTS}
      codeSplittedJS={card ? splittedCodeJSCard : splittedCodeJS}
      codeSplittedTS={card ? splittedCodeTSCard : splittedCodeTS}
    />
  );
};

export default CodeJSFileMosaicSelection;

const splittedCodeJS = `<FileMosaic
  {...file}
  selectable
  selected={selectedIds.includes(file.id)}
  onSelect={toggleSelection}
  preview
  info
/>`;

const splittedCodeTS = `<FileMosaic
  {...file}
  selectable
  selected={selectedIds.includes(file.id)}
  onSelect={toggleSelection}
  preview
  info
/>`;

const splittedCodeJSCard = `<FileCard
  {...file}
  selectable
  selected={selectedIds.includes(file.id)}
  onSelect={toggleSelection}
  preview
  info
/>`;

const splittedCodeTSCard = `<FileCard
  {...file}
  selectable
  selected={selectedIds.includes(file.id)}
  onSelect={toggleSelection}
  preview
  info
/>`;

const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "@files-ui/react";

const files = [
  { id: "sel-1", name: "selection-1.png", type: "image/png", size: 53000, valid: true },
  { id: "sel-2", name: "selection-2.png", type: "image/png", size: 71000, valid: true },
];

export default function App() {
  const [selectedIds, setSelectedIds] = React.useState([]);

  const toggleSelection = React.useCallback((id, selected) => {
    if (id === undefined) return;
    setSelectedIds((prev) => {
      if (selected) return prev.includes(id) ? prev : [...prev, id];
      return prev.filter((item) => item !== id);
    });
  }, []);

  return files.map((file) => (
    <FileMosaic
      key={file.id}
      {...file}
      selectable
      selected={selectedIds.includes(file.id)}
      onSelect={toggleSelection}
      preview
      info
    />
  ));
}`;

const completeCodeTS = `import * as React from "react";
import { FileMosaic, ExtFile } from "@files-ui/react";

const files: ExtFile[] = [
  { id: "sel-1", name: "selection-1.png", type: "image/png", size: 53000, valid: true },
  { id: "sel-2", name: "selection-2.png", type: "image/png", size: 71000, valid: true },
];

export default function App() {
  const [selectedIds, setSelectedIds] = React.useState<(string | number)[]>([]);

  const toggleSelection = React.useCallback((id: string | number | undefined, selected: boolean) => {
    if (id === undefined) return;
    setSelectedIds((prev) => {
      if (selected) return prev.includes(id) ? prev : [...prev, id];
      return prev.filter((item) => item !== id);
    });
  }, []);

  return files.map((file: ExtFile) => (
    <FileMosaic
      key={file.id}
      {...file}
      selectable
      selected={selectedIds.includes(file.id as string | number)}
      onSelect={toggleSelection}
      preview
      info
    />
  ));
}`;

const completeCodeJSCard = `import * as React from "react";
import { FileCard } from "@files-ui/react";

const files = [
  { id: "sel-1", name: "selection-1.png", type: "image/png", size: 53000, valid: true },
  { id: "sel-2", name: "selection-2.png", type: "image/png", size: 71000, valid: true },
];

export default function App() {
  const [selectedIds, setSelectedIds] = React.useState([]);

  const toggleSelection = React.useCallback((id, selected) => {
    if (id === undefined) return;
    setSelectedIds((prev) => {
      if (selected) return prev.includes(id) ? prev : [...prev, id];
      return prev.filter((item) => item !== id);
    });
  }, []);

  return files.map((file) => (
    <FileCard
      key={file.id}
      {...file}
      selectable
      selected={selectedIds.includes(file.id)}
      onSelect={toggleSelection}
      preview
      info
    />
  ));
}`;

const completeCodeTSCard = `import * as React from "react";
import { FileCard, ExtFile } from "@files-ui/react";

const files: ExtFile[] = [
  { id: "sel-1", name: "selection-1.png", type: "image/png", size: 53000, valid: true },
  { id: "sel-2", name: "selection-2.png", type: "image/png", size: 71000, valid: true },
];

export default function App() {
  const [selectedIds, setSelectedIds] = React.useState<(string | number)[]>([]);

  const toggleSelection = React.useCallback((id: string | number | undefined, selected: boolean) => {
    if (id === undefined) return;
    setSelectedIds((prev) => {
      if (selected) return prev.includes(id) ? prev : [...prev, id];
      return prev.filter((item) => item !== id);
    });
  }, []);

  return files.map((file: ExtFile) => (
    <FileCard
      key={file.id}
      {...file}
      selectable
      selected={selectedIds.includes(file.id as string | number)}
      onSelect={toggleSelection}
      preview
      info
    />
  ));
}`;