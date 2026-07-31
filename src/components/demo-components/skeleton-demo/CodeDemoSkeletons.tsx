import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

type SkeletonCodeItem = {
  id: string;
  title: string;
  codeSplittedJS: string;
  codeSplittedTS: string;
  codeCompleteJS: string;
  codeCompleteTS: string;
};

interface CodeDemoSkeletonsProps {
  splittedOnly?: boolean;
}

const CodeDemoSkeletons: React.FC<CodeDemoSkeletonsProps> = ({
  splittedOnly = false,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleAccordionChange =
    (panelId: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelId : false);
    };

  return (
    <Box>
      <ShowDemoCode
        splittedOnly={splittedOnly}
        codeCompleteJS={completeCodeJS}
        codeCompleteTS={completeCodeTS}
        codeSandboxJS="https://codesandbox.io/s/files-ui-skeletons-demo"
        codeSandboxTS="https://codesandbox.io/s/files-ui-skeletons-demo"
        codeSplittedJS={splittedCodeJS}
        codeSplittedTS={splittedCodeTS}
      />

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}>
        Individual Skeleton Snippets
      </Typography>

      {skeletonCodeItems.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleAccordionChange(item.id)}
          disableGutters
          sx={{
            mb: 1,
            "&:before": { display: "none" },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <ShowDemoCode
              splittedOnly={false}
              codeSandboxJS="https://codesandbox.io/s/files-ui-skeletons-demo"
              codeSandboxTS="https://codesandbox.io/s/files-ui-skeletons-demo"
              codeSplittedJS={item.codeSplittedJS}
              codeSplittedTS={item.codeSplittedTS}
              codeCompleteJS={item.codeCompleteJS}
              codeCompleteTS={item.codeCompleteTS}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CodeDemoSkeletons;

// ----------------------------------------------------------------------
// Code Strings
// ----------------------------------------------------------------------

const splittedCodeJS = `import {
  FileMosaicSkeleton,
  FileCardSkeleton,
  DropzoneSkeleton,
  AvatarSkeleton,
  FileInputButtonSkeleton,
} from "@files-ui/react";

<FileMosaicSkeleton />
<FileCardSkeleton />
<DropzoneSkeleton />
<AvatarSkeleton />
<FileInputButtonSkeleton />`;

const splittedCodeTS = splittedCodeJS;

const completeCodeJS = `import * as React from "react";
import {
  FileMosaicSkeleton,
  FileCardSkeleton,
  DropzoneSkeleton,
  AvatarSkeleton,
  FileInputButtonSkeleton,
} from "@files-ui/react";

export default function SkeletonsDemo() {
  return (
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      <div>
        <h4>FileMosaicSkeleton</h4>
        <FileMosaicSkeleton />
      </div>
      <div>
        <h4>FileCardSkeleton</h4>
        <FileCardSkeleton />
      </div>
      <div>
        <h4>DropzoneSkeleton</h4>
        <DropzoneSkeleton />
      </div>
      <div>
        <h4>AvatarSkeleton</h4>
        <AvatarSkeleton />
      </div>
      <div>
        <h4>FileInputButtonSkeleton</h4>
        <FileInputButtonSkeleton />
      </div>
    </div>
  );
}`;

const completeCodeTS = `import * as React from "react";
import {
  FileMosaicSkeleton,
  FileCardSkeleton,
  DropzoneSkeleton,
  AvatarSkeleton,
  FileInputButtonSkeleton,
} from "@files-ui/react";

const SkeletonsDemo: React.FC = () => {
  return (
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      <div>
        <h4>FileMosaicSkeleton</h4>
        <FileMosaicSkeleton />
      </div>
      <div>
        <h4>FileCardSkeleton</h4>
        <FileCardSkeleton />
      </div>
      <div>
        <h4>DropzoneSkeleton</h4>
        <DropzoneSkeleton />
      </div>
      <div>
        <h4>AvatarSkeleton</h4>
        <AvatarSkeleton />
      </div>
      <div>
        <h4>FileInputButtonSkeleton</h4>
        <FileInputButtonSkeleton />
      </div>
    </div>
  );
};

export default SkeletonsDemo;`;

const skeletonCodeItems: SkeletonCodeItem[] = [
  {
    id: "file-mosaic",
    title: "FileMosaicSkeleton",
    codeSplittedJS: `import { FileMosaicSkeleton } from "@files-ui/react";\n\n<FileMosaicSkeleton />`,
    codeSplittedTS: `import { FileMosaicSkeleton } from "@files-ui/react";\n\n<FileMosaicSkeleton />`,
    codeCompleteJS: `import * as React from "react";\nimport { FileMosaicSkeleton } from "@files-ui/react";\n\nexport default function FileMosaicSkeletonDemo() {\n  return <FileMosaicSkeleton />;\n}`,
    codeCompleteTS: `import * as React from "react";\nimport { FileMosaicSkeleton } from "@files-ui/react";\n\nconst FileMosaicSkeletonDemo: React.FC = () => {\n  return <FileMosaicSkeleton />;\n};\n\nexport default FileMosaicSkeletonDemo;`,
  },
  {
    id: "file-card",
    title: "FileCardSkeleton",
    codeSplittedJS: `import { FileCardSkeleton } from "@files-ui/react";\n\n<FileCardSkeleton />`,
    codeSplittedTS: `import { FileCardSkeleton } from "@files-ui/react";\n\n<FileCardSkeleton />`,
    codeCompleteJS: `import * as React from "react";\nimport { FileCardSkeleton } from "@files-ui/react";\n\nexport default function FileCardSkeletonDemo() {\n  return <FileCardSkeleton />;\n}`,
    codeCompleteTS: `import * as React from "react";\nimport { FileCardSkeleton } from "@files-ui/react";\n\nconst FileCardSkeletonDemo: React.FC = () => {\n  return <FileCardSkeleton />;\n};\n\nexport default FileCardSkeletonDemo;`,
  },
  {
    id: "dropzone",
    title: "DropzoneSkeleton",
    codeSplittedJS: `import { DropzoneSkeleton } from "@files-ui/react";\n\n<DropzoneSkeleton />`,
    codeSplittedTS: `import { DropzoneSkeleton } from "@files-ui/react";\n\n<DropzoneSkeleton />`,
    codeCompleteJS: `import * as React from "react";\nimport { DropzoneSkeleton } from "@files-ui/react";\n\nexport default function DropzoneSkeletonDemo() {\n  return <DropzoneSkeleton />;\n}`,
    codeCompleteTS: `import * as React from "react";\nimport { DropzoneSkeleton } from "@files-ui/react";\n\nconst DropzoneSkeletonDemo: React.FC = () => {\n  return <DropzoneSkeleton />;\n};\n\nexport default DropzoneSkeletonDemo;`,
  },
  {
    id: "avatar",
    title: "AvatarSkeleton",
    codeSplittedJS: `import { AvatarSkeleton } from "@files-ui/react";\n\n<AvatarSkeleton />`,
    codeSplittedTS: `import { AvatarSkeleton } from "@files-ui/react";\n\n<AvatarSkeleton />`,
    codeCompleteJS: `import * as React from "react";\nimport { AvatarSkeleton } from "@files-ui/react";\n\nexport default function AvatarSkeletonDemo() {\n  return <AvatarSkeleton />;\n}`,
    codeCompleteTS: `import * as React from "react";\nimport { AvatarSkeleton } from "@files-ui/react";\n\nconst AvatarSkeletonDemo: React.FC = () => {\n  return <AvatarSkeleton />;\n};\n\nexport default AvatarSkeletonDemo;`,
  },
  {
    id: "file-input-button",
    title: "FileInputButtonSkeleton",
    codeSplittedJS: `import { FileInputButtonSkeleton } from "@files-ui/react";\n\n<FileInputButtonSkeleton />`,
    codeSplittedTS: `import { FileInputButtonSkeleton } from "@files-ui/react";\n\n<FileInputButtonSkeleton />`,
    codeCompleteJS: `import * as React from "react";\nimport { FileInputButtonSkeleton } from "@files-ui/react";\n\nexport default function FileInputButtonSkeletonDemo() {\n  return <FileInputButtonSkeleton />;\n}`,
    codeCompleteTS: `import * as React from "react";\nimport { FileInputButtonSkeleton } from "@files-ui/react";\n\nconst FileInputButtonSkeletonDemo: React.FC = () => {\n  return <FileInputButtonSkeleton />;\n};\n\nexport default FileInputButtonSkeletonDemo;`,
  },
];