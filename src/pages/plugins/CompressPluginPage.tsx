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
import { scrollHandler } from "../../utils/scrollHandler";
import FooterPage from "../../components/layout-pages/FooterPage";
import CodeDemoCompressPlugin from "../../components/demo-components/plugins/CodeDemoCompressPlugin";
import CodeDemoCompressBatch from "../../components/demo-components/plugins/CodeDemoCompressBatch";
import CodeDemoCompressIntegration from "../../components/demo-components/plugins/CodeDemoCompressIntegration";
import DemoCompressPlugin from "../../components/demo-components/plugins/DemoCompressPlugin";
import DemoCompressBatch from "../../components/demo-components/plugins/DemoCompressBatch";
import DemoCompressIntegration from "../../components/demo-components/plugins/DemoCompressIntegration";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";

const CompressPluginPage = (props) => {
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
        <MainTitle>Compress Plugin</MainTitle>
        <MainParagraph>
          The <CodeHighlight>@files-ui/compress</CodeHighlight> package provides
          client-side image compression and optimization with no external dependencies.
          Reduce file sizes before upload to improve performance and save bandwidth.
        </MainParagraph>

        <section id="installation">
          <SubTitle content="Installation" />
          <DescParagraph>
            Install the compress plugin alongside the core package:
          </DescParagraph>
          <CodeHighlight>{`npm install @files-ui/compress @files-ui/core`}</CodeHighlight>
        </section>

        <section id="demo">
          <SubTitle content="Live Demo" />
          <DescParagraph>
            Drop an image to see automatic compression in action. The demo compresses
            images to max 1920x1080 at 80% quality.
          </DescParagraph>
          
          <DemoCompressPlugin />
        </section>

        <section id="features">
          <SubTitle content="Features" />
          <DescParagraph>
            The compress plugin provides:
            <ul>
              <li>
                <strong>Client-side compression</strong> - No server required,
                process images in the browser
              </li>
              <li>
                <strong>Resize support</strong> - Automatically resize images to
                maximum dimensions
              </li>
              <li>
                <strong>Quality control</strong> - Adjust compression quality from
                0 to 1
              </li>
              <li>
                <strong>Format conversion</strong> - Convert between JPEG, PNG,
                and WebP
              </li>
              <li>
                <strong>Batch processing</strong> - Compress multiple images at
                once
              </li>
              <li>
                <strong>Zero dependencies</strong> - Built with pure Canvas API
              </li>
              <li>
                <strong>TypeScript support</strong> - Full type definitions
              </li>
              <li>
                <strong>Small bundle</strong> - ~8KB minified
              </li>
            </ul>
          </DescParagraph>
        </section>

        <section id="basic-usage">
          <SubTitle content="Basic Usage" />
          <DescParagraph>
            Compress images before upload with automatic statistics:
          </DescParagraph>
          
          <CodeDemoCompressPlugin />
        </section>

        <section id="options">
          <SubTitle content="Compression Options" />
          <DescParagraph>
            All available options for image compression:
          </DescParagraph>
          <Paper variant="outlined" style={{ padding: "20px", margin: "20px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #ddd" }}>
                  <th style={{ textAlign: "left", padding: "8px" }}>Option</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Type</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Default</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>
                    <CodeHighlight>maxWidth</CodeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>
                    <TypeHighlight>number</TypeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>1920</td>
                  <td style={{ padding: "8px" }}>Maximum width in pixels</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>
                    <CodeHighlight>maxHeight</CodeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>
                    <TypeHighlight>number</TypeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>1080</td>
                  <td style={{ padding: "8px" }}>Maximum height in pixels</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>
                    <CodeHighlight>quality</CodeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>
                    <TypeHighlight>number</TypeHighlight> (code example)
                  </td>
                  <td style={{ padding: "8px" }}>0.92</td>
                  <td style={{ padding: "8px" }}>Compression quality (0-1)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>
                    <CodeHighlight>format</CodeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>
                    <TypeHighlight>"jpeg" | "png" | "webp"</TypeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>"jpeg"</td>
                  <td style={{ padding: "8px" }}>Output image format</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <CodeHighlight>maintainAspectRatio</CodeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>
                    <TypeHighlight>boolean</TypeHighlight>
                  </td>
                  <td style={{ padding: "8px" }}>true</td>
                  <td style={{ padding: "8px" }}>Preserve original aspect ratio</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </section>

        <section id="batch">
          <SubTitle content="Batch Compression" />
          <DescParagraph>
            Compress multiple images efficiently:
          </DescParagraph>
          
          <DemoCompressBatch />
          <CodeDemoCompressBatch />
        </section>

        <section id="integration">
          <SubTitle content="Integration with Edit Icon" />
          <DescParagraph>
            Combine compression with cropping for a complete image editing solution:
          </DescParagraph>
          
          <DemoCompressIntegration />
          <CodeDemoCompressIntegration />
        </section>

        <section id="tips">
          <SubTitle content="Best Practices" />
          <Alert severity="info">
            <AlertTitle>Optimization Tips</AlertTitle>
            <ul style={{ marginBottom: 0 }}>
              <li>
                <strong>For photos:</strong> Use JPEG format with quality 0.8-0.85
                for best size/quality balance
              </li>
              <li>
                <strong>For graphics/screenshots:</strong> Use PNG to preserve
                sharp edges and text
              </li>
              <li>
                <strong>For modern browsers:</strong> Use WebP for smaller file
                sizes with same quality
              </li>
              <li>
                <strong>Resize before compress:</strong> Reducing dimensions saves
                more space than quality reduction
              </li>
              <li>
                <strong>Progressive compression:</strong> Compress on client-side
                before upload, optimize further on server if needed
              </li>
            </ul>
          </Alert>
        </section>

        <FooterPage
          page="Compress Plugin"
          labelBefore="Crop Plugin"
          linkBefore="/plugins/crop"
          labelAfter="Getting Started"
          linkAfter="/getting-started"
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

export default CompressPluginPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Installation",
    referTo: "/plugins/compress#installation",
  },
  {
    id: 1,
    label: "Live Demo",
    referTo: "/plugins/compress#demo",
  },
  {
    id: 2,
    label: "Features",
    referTo: "/plugins/compress#features",
  },
  {
    id: 3,
    label: "Basic Usage",
    referTo: "/plugins/compress#basic-usage",
  },
  {
    id: 4,
    label: "Options",
    referTo: "/plugins/compress#options",
  },
  {
    id: 5,
    label: "Batch Compression",
    referTo: "/plugins/compress#batch",
  },
  {
    id: 6,
    label: "Integration",
    referTo: "/plugins/compress#integration",
  },
  {
    id: 7,
    label: "Best Practices",
    referTo: "/plugins/compress#tips",
  },
];
