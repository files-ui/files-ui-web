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
import { useTheme } from "@mui/material";

const installCode = `npm install @files-ui/react @files-ui/core`;

const serverActionCode = `// app/upload/actions.ts
"use server";
import type { ServerResponse } from "@files-ui/core";

export async function uploadFile(formData: FormData): Promise<ServerResponse> {
  const file = formData.get("file") as File | null;
  if (!file) return { success: false, message: "No file provided" };
  // Persist the file: disk, S3, Blob storage, etc.
  return { success: true, message: \`Received \${file.name}\` };
}`;

const panelCode = `// app/upload/UploadPanel.tsx
"use client";
import { Dropzone } from "@files-ui/react/client/dropzone";
import { uploadFile } from "./actions";

export default function UploadPanel() {
  return (
    <Dropzone
      action={uploadFile}
      accept="image/*,.pdf"
      maxFiles={10}
      maxConcurrentUploads={3}
    />
  );
}`;

const pageCode = `// app/upload/page.tsx  (Server Component — no "use client")
import UploadPanel from "./UploadPanel";

export default function Page() {
  return (
    <main>
      <h1>Upload files</h1>
      <UploadPanel />
    </main>
  );
}`;

const rightMenuItems = [
  { id: 0, label: "Installation", referTo: "/nextjs/getting-started#installation" },
  { id: 1, label: "Quick start", referTo: "/nextjs/getting-started#quick-start" },
  { id: 2, label: "How it works", referTo: "/nextjs/getting-started#how-it-works" },
];

const NextJsGettingStartedPage = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  React.useEffect(() => {
    window.addEventListener("scroll", () => scrollHandler(rightMenuItems, setSelectedItem));
    return () => window.removeEventListener("scroll", () => scrollHandler(rightMenuItems, setSelectedItem));
  }, []);

  return (
    <MainLayoutPage selectedIndex={11}>
      <MainContentContainer>
        <MainTitle>Next.js 16 — Getting Started</MainTitle>
        <MainParagraph>
          Files UI integrates natively with the Next.js 16 App Router. This guide shows you
          how to set up file uploads in three files.
        </MainParagraph>

        <section id="installation">
          <SubTitle content="Installation" />
          <DescParagraph>
            Add Files UI to your Next.js project:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{installCode}</Highlighter>
        </section>

        <section id="quick-start">
          <SubTitle content="Quick Start" />
          <DescParagraph>
            <strong>Step 1.</strong> Create a Server Action with <CodeHighlight>"use server"</CodeHighlight>:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{serverActionCode}</Highlighter>

          <DescParagraph>
            <strong>Step 2.</strong> Create a Client Component that wraps the uploader:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{panelCode}</Highlighter>

          <DescParagraph>
            <strong>Step 3.</strong> Render the Client Component from a Server Component page:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{pageCode}</Highlighter>
        </section>

        <section id="how-it-works">
          <SubTitle content="How it works" />
          <DescParagraph>
            <ul>
              <li>
                Interactive components are imported from <CodeHighlight>@files-ui/react/client/*</CodeHighlight> subpaths.
                These entry points carry an explicit <CodeHighlight>"use client"</CodeHighlight> boundary.
              </li>
              <li>
                The <CodeHighlight>action</CodeHighlight> prop accepts any Next.js Server Action
                that returns a <CodeHighlight>ServerResponse</CodeHighlight> object.
              </li>
              <li>
                The Server Component page stays clean — it just composes the
                Client Component wrapper without importing any browser-only code.
              </li>
              <li>
                Root imports <CodeHighlight>from "@files-ui/react"</CodeHighlight> continue to work
                in non-Next.js apps.
              </li>
            </ul>
          </DescParagraph>
        </section>

        <FooterPage
          page="Next.js — Getting Started"
          labelBefore="Server side"
          linkBefore="/server-side"
          labelAfter="Server Actions"
          linkAfter="/nextjs/server-actions"
        />
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} selectedItemProp={selectedItem} setSelected={setSelectedItem} />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};

export default NextJsGettingStartedPage;
