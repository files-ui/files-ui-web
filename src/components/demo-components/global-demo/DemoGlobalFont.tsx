import * as React from "react";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FilesUiProvider,
} from "@files-ui/react";
import { Autocomplete, TextField } from "@mui/material";

const fontOptions = [
  { label: "Poppins (default)", value: "Poppins" },
  { label: "Inter", value: "Inter" },
  { label: "Roboto", value: "Roboto" },
  { label: "Montserrat", value: "Montserrat" },
  { label: "system-ui", value: "system-ui" },
];

const sampleFiles: ExtFile[] = [
  { id: "1", name: "report.pdf", size: 125000, type: "application/pdf" },
  { id: "2", name: "photo.png", size: 450000, type: "image/png" },
];

const DemoGlobalFont: React.FC = () => {
  const [fontFamily, setFontFamily] = React.useState<string>("Poppins");
  const [files, setFiles] = React.useState<ExtFile[]>(sampleFiles);

  return (
    <FilesUiProvider config={{ fontFamily }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Autocomplete
          disablePortal
          size="small"
          value={fontOptions.find((f) => f.value === fontFamily) || null}
          onChange={(_e, value) => setFontFamily(value?.value || "Poppins")}
          options={fontOptions}
          sx={{ width: 300 }}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label="Font Family" />
          )}
        />
        <Dropzone
          onChange={setFiles}
          value={files}
          accept="image/*,application/pdf"
          maxFileSize={28 * 1024 * 1024}
          maxFiles={5}
          style={{ width: "100%", maxWidth: 500 }}
        >
          {files.map((f) => (
            <FileMosaic
              key={f.id}
              {...f}
              onDelete={() =>
                setFiles((prev) => prev.filter((x) => x.id !== f.id))
              }
              info
            />
          ))}
        </Dropzone>
      </div>
    </FilesUiProvider>
  );
};

export default DemoGlobalFont;
