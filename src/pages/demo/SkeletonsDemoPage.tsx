import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  AvatarSkeleton,
  DropzoneSkeleton,
  FileCardSkeleton,
  FileInputButtonSkeleton,
  FileMosaicSkeleton,
} from "@files-ui/react";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import FooterPage from "../../components/layout-pages/FooterPage";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import { scrollHandler } from "../../utils/scrollHandler";
import CodeDemoSkeletons from "../../components/demo-components/skeleton-demo/CodeDemoSkeletons";

const rightMenuItems = [
  { id: 0, label: "Demos", referTo: "/components/skeletons#demos" },
  { id: 1, label: "API", referTo: "/components/skeletons#api" },
];

const SkeletonsDemoPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => scrollHandler(rightMenuItems, setSelectedItem);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>Skeletons</MainTitle>
        <MainParagraph>
          Skeleton components provide loading placeholders for the core visual
          components in the library.
        </MainParagraph>
        
        <section id="demos">
          <SubTitle content="Demos" />
          <DescParagraph>
            Each skeleton mirrors the shape of its real component so loading
            states stay visually consistent.
          </DescParagraph>
          
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              display: "grid",
              gap: 3,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              mb: 4,
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
                FileMosaicSkeleton
              </Typography>
              <FileMosaicSkeleton />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
                FileCardSkeleton
              </Typography>
              <FileCardSkeleton />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
                DropzoneSkeleton
              </Typography>
              <DropzoneSkeleton />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
                AvatarSkeleton
              </Typography>
              <AvatarSkeleton />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
                FileInputButtonSkeleton
              </Typography>
              <FileInputButtonSkeleton />
            </Box>
          </Paper>

          <CodeDemoSkeletons />
        </section>
        
        <section id="api">
          <SubTitle content="API" />
          <DescParagraph>
            The skeleton family shares the same prop surface as the base
            skeleton primitive: animation, variant, width, height, className,
            and style.
          </DescParagraph>
        </section>
        
        <FooterPage
          page="Skeletons Demo"
          labelBefore="FullScreen Demo"
          linkBefore="/components/fullscreen"
          labelAfter="Skeletons API"
          linkAfter="/api/skeletons"
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
    </React.Fragment>
  );
};

export default SkeletonsDemoPage;