import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoGlobalFont: React.FC = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoGlobalFont;

const splittedCodeJS = `<FilesUiProvider config={{ fontFamily: "Inter" }}>
  {/** All Files UI components inside will use "Inter" */}
  <Dropzone onChange={handleChange} value={files}>
    {files.map((f) => (
      <FileMosaic key={f.id} {...f} />
    ))}
  </Dropzone>
</FilesUiProvider>`;

const splittedCodeTS = splittedCodeJS;

const completeCodeJS = `import { useState } from "react";
import {
  Dropzone,
  FileMosaic,
  FilesUiProvider,
} from "@files-ui/react";

export default function App() {
  const [files, setFiles] = useState([]);

  return (
    <FilesUiProvider config={{ fontFamily: "Inter" }}>
      <Dropzone
        onChange={setFiles}
        value={files}
        accept="image/*"
        maxFileSize={28 * 1024 * 1024}
        maxFiles={5}
      >
        {files.map((f) => (
          <FileMosaic key={f.id} {...f} onDelete={() =>
            setFiles((prev) => prev.filter((x) => x.id !== f.id))
          } info />
        ))}
      </Dropzone>
    </FilesUiProvider>
  );
}`;

const completeCodeTS = `import { useState } from "react";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FilesUiProvider,
} from "@files-ui/react";

export default function App() {
  const [files, setFiles] = useState<ExtFile[]>([]);

  return (
    <FilesUiProvider config={{ fontFamily: "Inter" }}>
      <Dropzone
        onChange={setFiles}
        value={files}
        accept="image/*"
        maxFileSize={28 * 1024 * 1024}
        maxFiles={5}
      >
        {files.map((f) => (
          <FileMosaic key={f.id} {...f} onDelete={() =>
            setFiles((prev) => prev.filter((x) => x.id !== f.id))
          } info />
        ))}
      </Dropzone>
    </FilesUiProvider>
  );
}`;
