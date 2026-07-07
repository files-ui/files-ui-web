import * as React from "react";
import { FileMosaic } from "@files-ui/react";

const sampleVideo = {
  id: "video-1",
  name: "demo-video.mp4",
  type: "video/mp4",
  size: 8 * 1024 * 1024,
  valid: true,
  imageUrl:
    "https://w0.peakpx.com/wallpaper/635/84/HD-wallpaper-thanos-and-iron-man-avengers-clouds-cloudy-face-to-face-her-iron-man-marvel-thanos-war.jpg",
  videoUrl:
    "https://srv23.y2mate.is/download?file=cd448fa7c7fe6c301970e890794fb682137140",
  downloadUrl:
    "https://example.com/wrong-fallback-image.jpg",
};

const DemoFileMosaicVideoDownload = () => {
  const [lastDownloadUrl, setLastDownloadUrl] = React.useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
      <FileMosaic
        {...sampleVideo}
        onDownload={(_id, downloadUrl) => setLastDownloadUrl(downloadUrl || "")}
        preview
        info
      />
      <small>
        Last download URL: {lastDownloadUrl || "(click download icon to test priority)"}
      </small>
    </div>
  );
};

export default DemoFileMosaicVideoDownload;
