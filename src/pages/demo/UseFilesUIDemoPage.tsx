import { Alert, AlertTitle, Paper } from "@mui/material";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import DemoDropzoneUseFilesUIBasic from "../../components/demo-components/dropzone-demo/DemoDropzoneUseFilesUIBasic";
import CodeDemoDropzoneUseFilesUIBasic from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneUseFilesUIBasic";
import DemoDropzoneUseFilesUIAction from "../../components/demo-components/dropzone-demo/DemoDropzoneUseFilesUIAction";
import CodeDemoDropzoneUseFilesUIAction from "../../components/demo-components/dropzone-demo/CodeDemoDropzoneUseFilesUIAction";
import { scrollHandler } from "../../utils/scrollHandler";
import FooterPage from "../../components/layout-pages/FooterPage";

const UseFilesUIDemoPage = (props) => {
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
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>useFilesUI Hook</MainTitle>

        <MainParagraph>
          <CodeHighlight>useFilesUI</CodeHighlight> is the headless file state
          and upload hook behind <CodeHighlight>{"<Dropzone/>"}</CodeHighlight>{" "}
          and <CodeHighlight>{"<FileInputButton/>"}</CodeHighlight>. This page
          focuses on creating custom UI while keeping Files UI validation and
          upload orchestration.
        </MainParagraph>

        <DescParagraph>
          This demo section is useful when you need complete control of layout,
          semantics, and interaction details without re-implementing core file
          logic.
        </DescParagraph>

        <section id="basic-headless">
          <SubTitle content="Basic headless flow" />
          <DescParagraph>
            This sample uses <TypeHighlight>getDragHandlers</TypeHighlight> and{" "}
            <TypeHighlight>getInputProps</TypeHighlight> to wire a custom drop
            area and file selector. Upload is started with{" "}
            <TypeHighlight>uploadFiles()</TypeHighlight>.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneUseFilesUIBasic />
          </Paper>

          <CodeDemoDropzoneUseFilesUIBasic />
        </section>

        <section id="action-based-upload">
          <SubTitle content="Action-based upload" />
          <DescParagraph>
            This sample demonstrates the action-first flow introduced in recent
            changes. Instead of defining a URL in upload config, the hook can
            use an <TypeHighlight>action</TypeHighlight> function that receives
            form data and returns an upload result.
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <DemoDropzoneUseFilesUIAction />
          </Paper>

          <CodeDemoDropzoneUseFilesUIAction />

          <Alert severity="info">
            <AlertTitle> Priority rule </AlertTitle>
            If both <TypeHighlight>action</TypeHighlight> and
            <TypeHighlight> url </TypeHighlight> are provided, the action flow
            is preferred for upload execution.
          </Alert>
        </section>

        <section id="related-docs">
          <SubTitle content="Related docs" />
          <DescParagraph>
            For deeper API and recipes:
            <ul>
              <li>
                <AnchorToTab href="/components/dropzone#usefilesui-headless">
                  Dropzone headless section
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/nextjs/server-actions">
                  Next.js Server Actions guide
                </AnchorToTab>
              </li>
            </ul>
          </DescParagraph>
        </section>

        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            The hook options and return shape are documented in the docs package
            under <CodeHighlight>docs/react/Hooks.md</CodeHighlight> and related
            `useFilesUI` pages.
          </DescParagraph>
        </section>

        <FooterPage
          page="useFilesUI Demo"
          labelBefore="Dropzone Demo"
          linkBefore="/components/dropzone"
          labelAfter="FileMosaic Demo"
          linkAfter="/components/filemosaic"
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
    </React.Fragment>
  );
};

export default UseFilesUIDemoPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Basic headless",
    referTo: "/components/usefilesui#basic-headless",
  },
  {
    id: 1,
    label: "Action-based upload",
    referTo: "/components/usefilesui#action-based-upload",
  },
  {
    id: 2,
    label: "Related docs",
    referTo: "/components/usefilesui#related-docs",
  },
  {
    id: 3,
    label: "API",
    referTo: "/components/usefilesui#api",
  },
];
