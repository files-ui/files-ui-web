import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoFileCardSizeVariants: React.FC = () => {
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

export default CodeDemoFileCardSizeVariants;

const splittedCodeJS = `const variants = ["xs", "small", "medium", "large"];

{variants.map((variant) => (
  <FileCard
    key={variant}
    {...sampleFileProps}
    variant={variant}
    elevation={8}
  />
))}`;

const completeCodeJS = `import * as React from "react";
import { FileCard } from "@files-ui/react";

const sampleFileProps = {
  id: "demo-file-1",
  size: 28 * 1024 * 1024,
  type: "application/pdf",
  name: "document.pdf",
};

export default function FileCardSizeVariantsDemo() {
  const variants = ["xs", "small", "medium", "large"];

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <FileCard
          key={variant}
          {...sampleFileProps}
          variant={variant}
          elevation={8}
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
  <FileCard
    key={variant}
    {...sampleFileProps}
    variant={variant}
    elevation={8}
  />
))}`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileCard } from "@files-ui/react";

const sampleFileProps: ExtFile = {
  id: "demo-file-1",
  size: 28 * 1024 * 1024,
  type: "application/pdf",
  name: "document.pdf",
};

export default function FileCardSizeVariantsDemo() {
  const variants: Array<"xs" | "small" | "medium" | "large"> = [
    "xs",
    "small",
    "medium",
    "large",
  ];

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <FileCard
          key={variant}
          {...sampleFileProps}
          variant={variant}
          elevation={8}
        />
      ))}
    </div>
  );
}`;