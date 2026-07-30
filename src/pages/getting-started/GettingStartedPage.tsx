import * as React from "react";

import { Stack } from "@mui/material";
import Overview from "../../components/getting-started/Overview";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import logoLight from "../../static/files-ui-logo-blue-wbg.png";
import logo_blue from "../../static/files-ui-logo-blue.png";
import "../../styles/GettingStartedPage.css";
import InstallationNPM from "../../components/getting-started/InstallationNPM";
import InstallationYarn from "../../components/getting-started/InstallationYarn";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";

import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import { scrollHandler } from "../../utils/scrollHandler";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import { ImagePreview } from "@files-ui/react";
import FooterPage from "../../components/layout-pages/FooterPage";
import CodeDemoFilesUiProvider from "./CodeDemoFilesUiProvider";
const GettingStartedPage = ({ darkModeOn }: { darkModeOn?: any } = {}) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () =>
      scrollHandler(rightMenuItems, setSelectedItem),
    );
    return () => {
      window.removeEventListener("scroll", () =>
        scrollHandler(rightMenuItems, setSelectedItem),
      );
    };
  }, []);

  return (
    <MainLayoutPage selectedIndex={0}>
      <MainContentContainer>
        <Stack sx={{ width: "100%", alignItems: "center" }}>
          <img
            className="fui-logo-img-getting-started"
            src={!darkModeOn ? logo_blue : logoLight}
            alt="files-ui-logo"
          />
          <MainTitle>Files UI - Getting started!</MainTitle>
        </Stack>
        <section id="overview">
          <Overview />
        </section>

        <section id="installation">
          <SubTitle content="Installation" />

          <MainParagraph>
            Run one of the following commands to add Files UI to your project:
          </MainParagraph>
          <h3>npm:</h3>
          <InstallationNPM />
          <h3>yarn:</h3>
          <InstallationYarn />
        </section>

        <section id="peer-dependency">
          <SubTitle content="Peer dependency" />

          <DescParagraph>
            <CodeHighlight>react </CodeHighlight>{" "}
            {"^17.0.2 || ^18.0.0 || ^19.0.0 "}and{" "}
            <CodeHighlight>react-dom</CodeHighlight>
            {" ^17.0.2 || ^18.0.0 || ^19.0.0 "} are peer dependencies.
          </DescParagraph>
        </section>
        <section id="dropzoneui">
          <SubTitle content="Dropzone-ui" />

          <DescParagraph>
            If you come from Dropzone-ui thank you so much for using
            dropzone-ui/react ❤️ !
            <br />
            Dropzone UI has grown very fast and has exceeded its original scope.
            That's why we find it reasonable to rebrand it and create a new
            package keeping the best and adding more features and new
            components. This new package is here and its name is Files UI ⚡!!
          </DescParagraph>
          <ImagePreview
            src="https://user-images.githubusercontent.com/43678736/225168231-35d7dc8d-f89e-43a1-8ce9-441bd59a74df.png"
            alt="img-dui-to-fui"
          ></ImagePreview>
        </section>
        <section id="default-font">
          <SubTitle content="Default font" />

          <DescParagraph>
            Files UI components use the Poppins font by default. If Poppins is
            not loaded in your application, components gracefully fall back to
            system fonts.
          </DescParagraph>

          <h3>Using Poppins (opt-in):</h3>
          <DescParagraph>
            Add one of the following to your application entry point:
          </DescParagraph>
          <CodeHighlight>
            {`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900" />`}
          </CodeHighlight>
        </section>

        <section id="custom-font">
          <SubTitle content="Custom font" />

          <DescParagraph>
            You can set a global custom font for all Files UI components using
            the <CodeHighlight>fontFamily</CodeHighlight> prop in{" "}
            <CodeHighlight>FilesUiProvider</CodeHighlight>:
          </DescParagraph>

          {/* Replaced the old CodeHighlight block with the new Demo component */}
          <CodeDemoFilesUiProvider />

          <DescParagraph>
            When <CodeHighlight>fontFamily</CodeHighlight> is set, a single
            stylesheet is injected that overrides the default Poppins stack with
            your chosen font plus standard system fallbacks. If{" "}
            <CodeHighlight>fontFamily</CodeHighlight> is not set, components
            keep their default behavior.
          </DescParagraph>
          <DescParagraph>
            Remember to load your custom font (via{" "}
            <CodeHighlight>{"<link>"}</CodeHighlight>, CSS{" "}
            <CodeHighlight>@import</CodeHighlight>, or a package like{" "}
            <CodeHighlight>@fontsource/inter</CodeHighlight>) in your
            application so the browser can render it.
          </DescParagraph>
        </section>
        <FooterPage
          page="Getting started"
          // labelBefore="Usage"
          //linkBefore="/usage"
          labelAfter="Usage"
          linkAfter="/usage"
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
export default GettingStartedPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Overview",
    referTo: "/getting-started#overview",
  },
  {
    id: 1,
    label: "Installation",
    referTo: "/getting-started#installation",
  },
  {
    id: 2,
    label: "Peer dependency",
    referTo: "/getting-started#peer-dependency",
  },
  {
    id: 3,
    label: "Dropzone ui",
    referTo: "/getting-started#dropzoneui",
  },
  { id: 4, label: "Default font", referTo: "/getting-started#default-font" },
  { id: 5, label: "Custom font", referTo: "/getting-started#custom-font" },
];
