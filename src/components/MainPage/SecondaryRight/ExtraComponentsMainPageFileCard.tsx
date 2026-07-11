import * as React from "react";
import { Stack, Paper } from "@mui/material";
import {
  FileCard,
  ExtFile,
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "@files-ui/react";
import AnchorToTab from "../../util-components/AnchorToTab";
import TypeHighlight from "../../typeHighlight/TypeHighlight";

interface ExtraComponentsMainPageFileCardProps {
  darkMode?: boolean;
}
const ExtraComponentsMainPageFileCard: React.FC<
  ExtraComponentsMainPageFileCardProps
> = (props: ExtraComponentsMainPageFileCardProps) => {
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
    //setVideoSrc(videoSource);
    //
    setVideoSrc(videoSource);
    // setVideoSrc("https://www.w3schools.com/tags/movie.mp4");
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        boxSizing: "border-box",
        backgroundColor: darkMode ? "#121212" : "rgba(0, 0, 0, 0.06)",
        height: "100%",
      }}
    >
      <TypeHighlight size="1.1rem">
        <AnchorToTab href="/components/filecard">
          <h3 style={{ margin: 0 }}>{"<FileCard/>"}</h3>
        </AnchorToTab>
      </TypeHighlight>
      <Stack
        direction={"column"}
        spacing={2}
        //alignItems="center"
        //justifyContent={"space-evenly"}
        sx={{
          flexWrap: "wrap",
          flexGrow: 1,
          
          justifyContent: "space-evenly",
          alignItems:"center"
        }}
      >
        {files.map((f: ExtFile, index: number) => (
          <FileCard
            key={index}
            {...f}
            onSee={handleSee}
            onWatch={handleWatch}
            {...f.extraData}
            info
            darkMode={darkMode}
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
  );
};
export default ExtraComponentsMainPageFileCard;
const publicImageUrlBase = import.meta.env.BASE_URL + "static/media/";
const publicVideoUrlBase = import.meta.env.BASE_URL + "static/media/videos/";

const ThorArrivesWakandaES = publicVideoUrlBase + "ThorEN.mp4";
const files: ExtFile[] = [
  /* {
    id: 0,
    name: "image-preview.png",
    type: "image/png",
    size: 282000,
    imageUrl: "https://i.ytimg.com/vi/98FO19TuI9A/maxresdefault.jpg",
  }, */

  {
    id: 2,
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
    name: "ironman.png",
    type: "image/png",
    size: 282000,
    downloadUrl:
      "https://i.pinimg.com/236x/3e/e9/46/3ee946b27fd1cc5eb0b485e4a0669534.jpg",

    imageUrl:
      "https://i.pinimg.com/236x/3e/e9/46/3ee946b27fd1cc5eb0b485e4a0669534.jpg",
  },
];
