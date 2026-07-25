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

const basicActionCode = `// app/actions/upload.ts
"use server";
import type { ServerResponse } from "@files-ui/core";

export async function uploadFile(formData: FormData): Promise<ServerResponse> {
  const file = formData.get("file") as File | null;
  if (!file) return { success: false, message: "No file provided" };

  const bytes = await file.arrayBuffer();
  // await fs.writeFile(\`./uploads/\${file.name}\`, Buffer.from(bytes));

  return {
    success: true,
    message: \`\${file.name} uploaded successfully\`,
    payload: { name: file.name, size: file.size },
  };
}`;

const dropzoneUsageCode = `// app/upload/UploadPanel.tsx
"use client";
import { Dropzone } from "@files-ui/react/client/dropzone";
import { uploadFile } from "../actions/upload";

export default function UploadPanel() {
  return (
    <Dropzone
      action={uploadFile}
      accept="image/*,.pdf,.docx"
      maxFileSize={10 * 1024 * 1024}
      maxFiles={5}
      maxConcurrentUploads={3}
      onChange={(files) => console.log("Files:", files)}
      onUploadFinish={(files) => console.log("Done:", files)}
      label="Drop files or click to browse"
    />
  );
}`;

const fileInputButtonCode = `// Using FileInputButton instead
"use client";
import { FileInputButton } from "@files-ui/react/client/file-input-button";
import { uploadFile } from "../actions/upload";

export default function UploadButton() {
  return (
    <FileInputButton action={uploadFile} accept="image/*" maxFiles={5}>
      Choose files
    </FileInputButton>
  );
}`;

const responseTypeCode = `import type { ServerResponse } from "@files-ui/core";

// ServerResponse shape:
// {
//   success: boolean;
//   message?: string;
//   payload?: any;
// }`;

const priorityCode = `// action takes precedence over uploadConfig.url
<Dropzone
  action={uploadFile}               // ✅ used
  uploadConfig={{ url: "/api/v1" }} // ❌ ignored when action is present
/>`;

const rightMenuItems = [
  { id: 0, label: "Server Action", referTo: "/nextjs/server-actions#server-action" },
  { id: 1, label: "Dropzone", referTo: "/nextjs/server-actions#dropzone" },
  { id: 2, label: "FileInputButton", referTo: "/nextjs/server-actions#file-input-button" },
  { id: 3, label: "ServerResponse type", referTo: "/nextjs/server-actions#response-type" },
  { id: 4, label: "Priority rules", referTo: "/nextjs/server-actions#priority" },
];

const NextJsServerActionsPage = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => scrollHandler(rightMenuItems, setSelectedItem));
    return () => window.removeEventListener("scroll", () => scrollHandler(rightMenuItems, setSelectedItem));
  }, []);

  return (
    <MainLayoutPage selectedIndex={11}>
      <MainContentContainer>
        <MainTitle>Server Actions</MainTitle>
        <MainParagraph>
          Use Next.js Server Actions as a first-class upload strategy — no manual{" "}
          <CodeHighlight>fetch()</CodeHighlight> calls, automatic{" "}
          <CodeHighlight>FormData</CodeHighlight> serialization, and full TypeScript support.
        </MainParagraph>

        <section id="server-action">
          <SubTitle content="Define a Server Action" />
          <DescParagraph>
            Create a file with <CodeHighlight>"use server"</CodeHighlight> at the top and export
            an async function that accepts <CodeHighlight>FormData</CodeHighlight> and returns a{" "}
            <CodeHighlight>ServerResponse</CodeHighlight>:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{basicActionCode}</Highlighter>
        </section>

        <section id="dropzone">
          <SubTitle content="Usage with Dropzone" />
          <DescParagraph>
            Pass the Server Action to the <CodeHighlight>action</CodeHighlight> prop. Import from
            the client subpath to guarantee the client boundary in Next.js 16 App Router:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{dropzoneUsageCode}</Highlighter>
        </section>

        <section id="file-input-button">
          <SubTitle content="Usage with FileInputButton" />
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{fileInputButtonCode}</Highlighter>
        </section>

        <section id="response-type">
          <SubTitle content="ServerResponse type" />
          <DescParagraph>
            Every Server Action used with Files UI must return a{" "}
            <CodeHighlight>ServerResponse</CodeHighlight> from{" "}
            <CodeHighlight>@files-ui/core</CodeHighlight>:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{responseTypeCode}</Highlighter>
        </section>

        <section id="priority">
          <SubTitle content="Priority: action vs url" />
          <DescParagraph>
            When both <CodeHighlight>action</CodeHighlight> and{" "}
            <CodeHighlight>uploadConfig.url</CodeHighlight> are provided,{" "}
            <CodeHighlight>action</CodeHighlight> always wins:
          </DescParagraph>
          <Highlighter style={{ margin: "16px 0", fontSize: "14px" }}>{priorityCode}</Highlighter>
        </section>

        <FooterPage
          page="Server Actions"
          labelBefore="Getting Started"
          linkBefore="/nextjs/getting-started"
          labelAfter="App Router & RSC"
          linkAfter="/nextjs/app-router"
        />
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} selectedItemProp={selectedItem} setSelected={setSelectedItem} />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};

export default NextJsServerActionsPage;
