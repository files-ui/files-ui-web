import * as React from "react";
import ShowDemoCode from "../../components/show-demo-code/ShowDemoCode";
// Adjust the import path for ShowDemoCode according to your folder structure


const CodeDemoFilesUiProvider: React.FC = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS=""
      codeSandboxTS=""
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoFilesUiProvider;

const splittedCodeJS = `<FilesUiProvider config={{ fontFamily: "Inter" }}>
  {/* All Files UI components will use Inter */}
  <YourApp />
</FilesUiProvider>`;

const completeCodeJS = `import * as React from "react";
import { FilesUiProvider } from "@files-ui/react";
import YourApp from "./YourApp"; // Replace with your actual app component

export default function App() {
  return (
    <FilesUiProvider config={{ fontFamily: "Inter" }}>
      {/* All Files UI components will use Inter */}
      <YourApp />
    </FilesUiProvider>
  );
}`;

const splittedCodeTS = `<FilesUiProvider config={{ fontFamily: "Inter" }}>
  {/* All Files UI components will use Inter */}
  <YourApp />
</FilesUiProvider>`;

const completeCodeTS = `import * as React from "react";
import { FilesUiProvider } from "@files-ui/react";
import YourApp from "./YourApp"; // Replace with your actual app component

export default function App(): JSX.Element {
  return (
    <FilesUiProvider config={{ fontFamily: "Inter" }}>
      {/* All Files UI components will use Inter */}
      <YourApp />
    </FilesUiProvider>
  );
}`;