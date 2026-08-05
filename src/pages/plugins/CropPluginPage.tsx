import * as React from "react";
import { Alert, AlertTitle, Paper } from "@mui/material";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import { scrollHandler } from "../../utils/scrollHandler";
import FooterPage from "../../components/layout-pages/FooterPage";
import CodeDemoCropPlugin from "../../components/demo-components/plugins/CodeDemoCropPlugin";
import CodeDemoCropVanillaJS from "../../components/demo-components/plugins/CodeDemoCropVanillaJS";
import CodeDemoCropFunction from "../../components/demo-components/plugins/CodeDemoCropFunction";
import DemoCropPlugin from "../../components/demo-components/plugins/DemoCropPlugin";
import DemoCropVanillaJS from "../../components/demo-components/plugins/DemoCropVanillaJS";
import DemoCropFunction from "../../components/demo-components/plugins/DemoCropFunction";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";

const CropPluginPage = (props) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () =>
      scrollHandler(rightMenuItems, setSelectedItem)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        scrollHandler(rightMenuItems, setSelectedItem)
      );
    };
  }, []);

  return (
    <MainLayoutPage selectedIndex={-1}>
      <MainContentContainer>
        <MainTitle>Crop Plugin</MainTitle>
        <MainParagraph>
          The <CodeHighlight>@files-ui/crop</CodeHighlight> package provides
          framework-agnostic image cropping capabilities with a clean, modern
          interface. Built with zero dependencies using pure Canvas API.
        </MainParagraph>

        <section id="installation">
          <SubTitle content="Installation" />
          <DescParagraph>
            Install the crop plugin alongside the core and react packages:
          </DescParagraph>
          <CodeHighlight>{`npm install @files-ui/crop @files-ui/core @files-ui/react`}</CodeHighlight>
        </section>

        <section id="demo">
          <SubTitle content="Live Demo" />
          <DescParagraph>
            Drop images below and click the edit icon (pencil) on any FileMosaic
            to see the crop handler in action. The full CropDialog component can be
            seen on the{" "}
            <AnchorToTab href="/components/filemosaic#edit-icon">
              FileMosaic demo page
            </AnchorToTab>.
          </DescParagraph>
          <DemoCropPlugin />
        </section>

        <section id="features">
          <SubTitle content="Features" />
          <DescParagraph>
            The crop plugin provides:
            <ul>
              <li>
                <strong>Framework-agnostic core</strong> - Use with any
                JavaScript framework or vanilla JS
              </li>
              <li>
                <strong>Interactive controls</strong> - Drag to reposition,
                scroll to zoom, visual crop box with grid
              </li>
              <li>
                <strong>Zero dependencies</strong> - Built with pure Canvas API,
                no external libraries
              </li>
              <li>
                <strong>TypeScript support</strong> - Full type definitions
                included
              </li>
              <li>
                <strong>Aspect ratio control</strong> - Free crop or fixed
                aspect ratios
              </li>
              <li>
                <strong>Quality settings</strong> - Configurable output quality
                and format (JPEG, PNG, WebP)
              </li>
            </ul>
          </DescParagraph>
        </section>

        <section id="architecture">
          <SubTitle content="Architecture" />
          <DescParagraph>
            The crop package follows a layered architecture:
          </DescParagraph>
          <Paper variant="outlined" style={{ padding: "20px", margin: "20px 0" }}>
            <pre style={{ margin: 0, fontSize: "14px" }}>
              {`@files-ui/crop
├── /core           Framework-agnostic cropping logic (~5KB)
│   ├── CropEngine  Interactive canvas-based crop interface
│   ├── cropImage   Pure function for image cropping
│   └── cropExtFile Crop ExtFile objects
│
└── /react          React wrapper components (~2KB)
    ├── CropDialog  Ready-to-use crop dialog
    └── useCropDialog Hook for custom integrations`}
            </pre>
          </Paper>
          <Alert severity="info">
            <AlertTitle>Framework Flexibility</AlertTitle>
            You can use <CodeHighlight>@files-ui/crop/core</CodeHighlight> with
            any framework (Vue, Angular, Svelte) or vanilla JavaScript. The{" "}
            <CodeHighlight>@files-ui/crop/react</CodeHighlight> wrapper is
            optional and only needed for React projects.
          </Alert>
        </section>

        <section id="basic-usage">
          <SubTitle content="Basic Usage with React" />
          <DescParagraph>
            Integrate cropping with FileMosaic or FileCard components using the
            onEdit or onCrop handler:
          </DescParagraph>
          
          <CodeDemoCropPlugin />
        </section>

        <section id="vanilla-js">
          <SubTitle content="CropDialog Usage" />
          <DescParagraph>
            Click the edit icon (pencil) on either component to open the
            CropDialog. After saving, the cropped image replaces the original
            in the same FileMosaic or FileCard.
          </DescParagraph>
          
          <DemoCropVanillaJS />
          <CodeDemoCropVanillaJS />
        </section>

        <section id="crop-function">
          <SubTitle content="Pure Cropping" />
          <DescParagraph>
            Click the edit icon below to crop the center 60% of the image
            programmatically using <CodeHighlight>cropImage()</CodeHighlight>,
            without any interactive canvas or dialog.
          </DescParagraph>
          
          <DemoCropFunction />
          <CodeDemoCropFunction />
        </section>

        <section id="examples">
          <SubTitle content="Live Examples" />
          <Alert severity="success">
            <AlertTitle>Try it now!</AlertTitle>
            See the edit icon in action on the{" "}
            <AnchorToTab href="/components/filemosaic#edit-icon">
              FileMosaic demo
            </AnchorToTab>{" "}
            and{" "}
            <AnchorToTab href="/components/filecard#edit-icon">
              FileCard demo
            </AnchorToTab>{" "}
            pages.
          </Alert>
        </section>

        <FooterPage
          page="Crop Plugin"
          labelBefore="Next.js - App Router"
          linkBefore="/nextjs/app-router"
          labelAfter="Compress Plugin"
          linkAfter="/plugins/compress"
        />
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu
          width="240px"
          items={rightMenuItems}
          selectedItemProp={selectedItem}
          setSelected={setSelectedItem}
        />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};

export default CropPluginPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Installation",
    referTo: "/plugins/crop#installation",
  },
  {
    id: 1,
    label: "Live Demo",
    referTo: "/plugins/crop#demo",
  },
  {
    id: 2,
    label: "Features",
    referTo: "/plugins/crop#features",
  },
  {
    id: 3,
    label: "Architecture",
    referTo: "/plugins/crop#architecture",
  },
  {
    id: 4,
    label: "Basic Usage",
    referTo: "/plugins/crop#basic-usage",
  },
  {
    id: 5,
    label: "CropDialog",
    referTo: "/plugins/crop#vanilla-js",
  },
  {
    id: 6,
    label: "Pure Cropping",
    referTo: "/plugins/crop#crop-function",
  },
  {
    id: 7,
    label: "Examples",
    referTo: "/plugins/crop#examples",
  },
];
