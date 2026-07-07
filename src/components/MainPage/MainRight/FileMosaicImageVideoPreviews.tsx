import * as React from "react";
import { Stack, Paper } from "@mui/material";
import {
  FileMosaic,
  ExtFile,
  FileMosaicProps,
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "@files-ui/react";
import DescParagraph from "../../demo-components/desc-paragraph/DescParagraph";

interface FileMosaicImageVideoPreviewsProps {
  darkMode?: boolean;
}
const FileMosaicImageVideoPreviews: React.FC<
  FileMosaicImageVideoPreviewsProps
> = (props: FileMosaicImageVideoPreviewsProps) => {
  const { darkMode } = props;
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);
  const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
    undefined,
  );

  const handleSee = (imageSource: string | undefined) => {
    console.log("handleSee-imageSource", imageSource);
    setImageSrc(imageSource);
  };

  const handleWatch = (videoSource: File | string | undefined) => {
    console.log("handleWatch videoSource", videoSource);

    setVideoSrc(videoSource);
  };
  const handleDownload = async (
    fileId: FileMosaicProps["id"],
    downloadUrl?: string,
  ) => {
    console.log("Download fileId", fileId);
    console.log("Download fileName", files.filter((x) => x.id === fileId)[0]);
    console.log("Download downloadUrl", downloadUrl);
    if (!downloadUrl) return;
    try {
      const image = await fetch(downloadUrl);
      const imageBlob = await image.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const anchor = document.createElement("a");
      anchor.href = imageURL;
      anchor.download = "fileName.jpg";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(imageURL);
    } catch (error) {
      console.log("Download error", error);
      console.error(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>Or check the previews!</h3>
      <DescParagraph darkMode={darkMode}>
        Add more interaction in your webpage with a full screen preview of
        images or videos
      </DescParagraph>
      <Paper
        variant="outlined"
        sx={{
          padding: "20px 0",
          boxSizing: "border-box",
          backgroundColor: darkMode ? "#121212" : "rgba(0, 0, 0, 0.06)",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          //alignItems="center"
          //justifyContent={"space-evenly"}
          sx={{
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {files.map((f: ExtFile, index: number) => (
            <FileMosaic
              key={index}
              darkMode={darkMode}
              {...f}
              onSee={handleSee}
              onWatch={handleWatch}
              
              {...f.extraData}
              alwaysActive
              onDownload={f.downloadUrl ? handleDownload : undefined}
            />
          ))}
          <FullScreen
            open={imageSrc !== undefined}
            onClose={() => setImageSrc(undefined)}
          >
            <ImagePreview src={imageSrc} />
          </FullScreen>
          <FullScreen
            open={videoSrc !== undefined}
            onClose={() => setVideoSrc(undefined)}
          >
            <VideoPreview src={videoSrc} autoPlay controls />
          </FullScreen>
        </Stack>
      </Paper>
    </div>
  );
};
export default FileMosaicImageVideoPreviews;

const publicImageUrlBase = import.meta.env.BASE_URL + "static/media/";

const publicVideoUrlBase = import.meta.env.BASE_URL + "static/media/videos/";

const ThorArrivesWakandaES = publicVideoUrlBase + "ThorEN.mp4";
const files: ExtFile[] = [
  {
    id: 0,
    name: "mark45.jpg",
    type: "image/jpeg",
    size: 282000,
    imageUrl: publicImageUrlBase + "mark45img.jpg",
  },

  {
    id: 1,
    name: "ThorArrivesWakandaES.mp4",
    type: "video/mp4",
    size: 282000,
    imageUrl: publicImageUrlBase + "Thor2.png",
    downloadUrl: ThorArrivesWakandaES,
    extraData: { videoUrl: ThorArrivesWakandaES },
  },
  {
    id: 3,
    name: "downloadable-file.png",
    type: "image/png",
    size: 282000,
    imageUrl: publicImageUrlBase + "files-ui-logo-blue.png",
    downloadUrl: publicImageUrlBase + "files-ui-logo-blue.png",
    extraData: {
      backgroundBlurImage: false,
    },
  },
  {
    id: 1,
    name: "Facebook_Logo.png",
    type: "image/png",
    size: 282000,
    downloadUrl: publicImageUrlBase + "Facebook_Logo.png",
    imageUrl: publicImageUrlBase + "Facebook_Logo.png",
    extraData: {
      backgroundBlurImage: false,
    },
  },
];
