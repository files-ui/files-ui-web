import * as React from "react";
import { Paper } from "@mui/material";
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

const rightMenuItems = [
  { id: 0, label: "Demos", referTo: "/components/skeletons#demos" },
  { id: 1, label: "API", referTo: "/components/skeletons#api" },
];

const SkeletonsDemoPage = () => {
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
            style={{
              padding: "25px",
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div>
              <h3>FileMosaicSkeleton</h3>
              <FileMosaicSkeleton />
            </div>
            <div>
              <h3>FileCardSkeleton</h3>
              <FileCardSkeleton />
            </div>
            <div>
              <h3>DropzoneSkeleton</h3>
              <DropzoneSkeleton />
            </div>
            <div>
              <h3>AvatarSkeleton</h3>
              <AvatarSkeleton />
            </div>
            <div>
              <h3>FileInputButtonSkeleton</h3>
              <FileInputButtonSkeleton />
            </div>
          </Paper>
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