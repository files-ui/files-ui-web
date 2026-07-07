import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicVideoDownload = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};

export default CodeJSFileMosaicVideoDownload;

const splittedCodeJS = `<FileMosaic
  {...sampleVideo}
  onDownload={(_id, downloadUrl) => setLastDownloadUrl(downloadUrl || "")}
  preview
  info
/>`;

const splittedCodeTS = `<FileMosaic
  {...sampleVideo}
  onDownload={(_id, downloadUrl) => setLastDownloadUrl(downloadUrl || "")}
  preview
  info
/>`;

const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "@files-ui/react";

const sampleVideo = {
  id: "video-1",
  name: "demo-video.mp4",
  type: "video/mp4",
  size: 8 * 1024 * 1024,
  valid: true,
  imageUrl: "https://.../thumbnail.jpg",
  videoUrl: "https://.../video.mp4",
  downloadUrl: "https://example.com/wrong-fallback-image.jpg",
};

export default function App() {
  const [lastDownloadUrl, setLastDownloadUrl] = React.useState("");

  return (
    <FileMosaic
      {...sampleVideo}
      onDownload={(_id, downloadUrl) => setLastDownloadUrl(downloadUrl || "")}
      preview
      info
    />
  );
}`;

const completeCodeTS = `import * as React from "react";
import { FileMosaic, ExtFile } from "@files-ui/react";

const sampleVideo: ExtFile = {
  id: "video-1",
  name: "demo-video.mp4",
  type: "video/mp4",
  size: 8 * 1024 * 1024,
  valid: true,
  imageUrl: "https://.../thumbnail.jpg",
  videoUrl: "https://.../video.mp4",
  downloadUrl: "https://example.com/wrong-fallback-image.jpg",
};

export default function App() {
  const [lastDownloadUrl, setLastDownloadUrl] = React.useState<string>("");

  return (
    <FileMosaic
      {...sampleVideo}
      onDownload={(_id, downloadUrl) => setLastDownloadUrl(downloadUrl || "")}
      preview
      info
    />
  );
}`;