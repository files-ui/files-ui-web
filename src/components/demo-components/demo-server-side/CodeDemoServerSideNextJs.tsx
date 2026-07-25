import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoServerSideNextJs = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
      codeSandboxTS="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeDemoServerSideNextJs;

const splittedCodeJS = `// app/upload/actions.js
"use server";

export async function uploadFileAction(formData) {
  const file = formData.get("file");

  if (!file) {
    return { success: false, message: "No file provided" };
  }

  // Persist file in your storage layer (disk, S3, blob storage, etc.)
  return { success: true, message: "Uploaded successfully" };
}

// app/upload/UploadPanel.jsx
"use client";

import { Dropzone } from "@files-ui/react/client/dropzone";
import { uploadFileAction } from "./actions";

export default function UploadPanel() {
  return (
    <Dropzone
      action={uploadFileAction}
      accept="image/*,.pdf"
      maxFiles={10}
      maxConcurrentUploads={3}
    />
  );
}

// app/upload/page.jsx (Server Component)
import UploadPanel from "./UploadPanel";

export default function Page() {
  return (
    <main>
      <h1>Next.js 16 upload</h1>
      <UploadPanel />
    </main>
  );
}`;

const splittedCodeTS = `// app/upload/actions.ts
"use server";

import type { ServerResponse } from "@files-ui/core";

export async function uploadFileAction(formData: FormData): Promise<ServerResponse> {
  const file = formData.get("file") as File | null;

  if (!file) {
    return { success: false, message: "No file provided" };
  }

  // Persist file in your storage layer (disk, S3, blob storage, etc.)
  return { success: true, message: "Uploaded successfully" };
}

// app/upload/UploadPanel.tsx
"use client";

import { Dropzone } from "@files-ui/react/client/dropzone";
import { uploadFileAction } from "./actions";

export default function UploadPanel() {
  return (
    <Dropzone
      action={uploadFileAction}
      accept="image/*,.pdf"
      maxFiles={10}
      maxConcurrentUploads={3}
    />
  );
}

// app/upload/page.tsx (Server Component)
import UploadPanel from "./UploadPanel";

export default function Page() {
  return (
    <main>
      <h1>Next.js 16 upload</h1>
      <UploadPanel />
    </main>
  );
}`;

const completeCodeJS = ``;
const completeCodeTS = ``;
