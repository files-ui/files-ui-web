import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoFileMosaicSizeVariants: React.FC = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/files-ui-size-variants-demo"
      codeSandboxTS="https://codesandbox.io/s/files-ui-size-variants-demo"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoFileMosaicSizeVariants;

const splittedCodeJS = `const variants = ["xs", "small", "medium", "large"];

{variants.map((variant) => (
  <FileMosaic
    key={variant}
    {...sampleFileProps}
    variant={variant}
    info
    preview
  />
))}`;

const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "@files-ui/react";

const sampleFileProps = {
  id: "demo-file-1",
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "photo.jpg",
};

export default function FileMosaicSizeVariantsDemo() {
  const variants = ["xs", "small", "medium", "large"];

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <FileMosaic
          key={variant}
          {...sampleFileProps}
          variant={variant}
          info
          preview
        />
      ))}
    </div>
  );
}`;

const splittedCodeTS = `const variants: Array<"xs" | "small" | "medium" | "large"> = [
  "xs",
  "small",
  "medium",
  "large",
];

{variants.map((variant) => (
  <FileMosaic
    key={variant}
    {...sampleFileProps}
    variant={variant}
    info
    preview
  />
))}`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileMosaic } from "@files-ui/react";

const sampleFileProps: ExtFile = {
  id: "demo-file-1",
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "photo.jpg",
};

export default function FileMosaicSizeVariantsDemo() {
  const variants: Array<"xs" | "small" | "medium" | "large"> = [
    "xs",
    "small",
    "medium",
    "large",
  ];

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <FileMosaic
          key={variant}
          {...sampleFileProps}
          variant={variant}
          info
          preview
        />
      ))}
    </div>
  );
}`;