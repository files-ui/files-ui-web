import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import { scrollHandler } from "../../utils/scrollHandler";
import FooterPage from "../../components/layout-pages/FooterPage";
import { Highlighter } from "rc-highlight";

const clientSubpathsCode = `// All interactive components have a dedicated client subpath
import { Dropzone }        from "@files-ui/react/client/dropzone";
import { FileInputButton } from "@files-ui/react/client/file-input-button";
import { FileCard }        from "@files-ui/react/client/file-card";
import { FileMosaic }      from "@files-ui/react/client/file-mosaic";
import { Avatar }          from "@files-ui/react/client/avatar";
import { FullScreen }      from "@files-ui/react/client/full-screen";`;

const patternCode = `// app/dashboard/page.tsx — Server Component
import UploadPanel from "./UploadPanel";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      {/* Server Components can compose Client Components */}
      <UploadPanel />
    </main>
  );
}

// app/dashboard/UploadPanel.tsx — Client Component
"use client";
import { Dropzone } from "@files-ui/react/client/dropzone";
import { uploadAction } from "../actions";

export default function UploadPanel() {
  return <Dropzone action={uploadAction} />;
}`;

const namedExportsCode = `// Advanced: use explicit Client/Container named exports
import { DropzoneClient, DropzoneContainer } from "@files-ui/react";

// DropzoneClient  — the interactive piece (needs "use client")
// DropzoneContainer — RSC-neutral wrapper that renders DropzoneClient internally`;

const rootImportCode = `// Root import still works — backward compatible with CRA, Vite, etc.
import { Dropzone } from "@files-ui/react";`;

const rightMenuItems = [
  { id: 0, label: "Client subpaths", referTo: "/nextjs/app-router#client-subpaths" },
  { id: 1, label: "Recommended pattern", referTo: "/nextjs/app-router#pattern" },
  { id: 2, label: "Named exports", referTo: "/nextjs/app-router#named-exports" },
  { id: 3, label: "Root import", referTo: "/nextjs/app-router#root-import" },
];

const NextJsAppRouterPage = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => scrollHandler(rightMenuItems, setSelectedItem));
    return () => window.removeEventListener("scroll", () => scrollHandler(rightMenuItems, setSelectedItem));
  }, []);

  return (
    <MainLayoutPage selectedIndex={11}>
      <MainContentContainer>
        <MainTitle>App Router &amp; RSC</MainTitle>
        <MainParagraph>
          Files UI components use interactive React APIs (hooks, event handlers) and must run in
          Client Components. The library provides explicit client entry points so you never
          accidentally import browser code into a Server Component.
        </MainParagraph>

        <section id="client-subpaths">
          <SubTitle content="Client subpaths" />
          <DescParagraph>
            Import from <CodeHighlight>@files-ui/react/client/*</CodeHighlight> subpaths in your
            Client Components. Each entry point carries a guaranteed{" "}
            <CodeHighlight>"use client"</CodeHighlight> boundary:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{clientSubpathsCode}</Highlighter>
        </section>

        <section id="pattern">
          <SubTitle content="Recommended pattern" />
          <DescParagraph>
            Keep pages and layouts as Server Components. Wrap the uploader in a dedicated Client
            Component and compose it from the Server Component:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{patternCode}</Highlighter>
        </section>

        <section id="named-exports">
          <SubTitle content="Named Client/Container exports" />
          <DescParagraph>
            For advanced composition you can import the split pieces directly. Each component has
            a <CodeHighlight>*Client</CodeHighlight> variant (interactive) and a{" "}
            <CodeHighlight>*Container</CodeHighlight> variant (RSC-neutral wrapper):
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{namedExportsCode}</Highlighter>
        </section>

        <section id="root-import">
          <SubTitle content="Root import — backward compatible" />
          <DescParagraph>
            If you are not using Next.js App Router the root import from{" "}
            <CodeHighlight>@files-ui/react</CodeHighlight> continues to work unchanged:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{rootImportCode}</Highlighter>
        </section>

        <FooterPage
          page="App Router & RSC"
          labelBefore="Server Actions"
          linkBefore="/nextjs/server-actions"
          labelAfter="Server side"
          linkAfter="/server-side"
        />
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} selectedItemProp={selectedItem} setSelected={setSelectedItem} />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};

export default NextJsAppRouterPage;
