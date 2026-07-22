import * as React from "react";
import Alert from "@mui/material/Alert";
import PropsTableApi from "./PropsTableApi";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import FooterPage from "../../components/layout-pages/FooterPage";
import { scrollHandler } from "../../utils/scrollHandler";
import { SkeletonAPIPropsRows } from "../../data/SkeletonAPIPropsRows";

const rightMenuItems = [
  { id: 0, label: "Overview", referTo: "/api/skeletons#overview" },
  { id: 1, label: "Props", referTo: "/api/skeletons#props" },
];

const SkeletonsApi = () => {
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
        <MainTitle>Skeletons API</MainTitle>
        <MainParagraph>
          Documentation for the loading skeleton components used across the
          library.
        </MainParagraph>
        <section id="overview">
          <SubTitle content="Overview" />
          <Alert severity="info">
            These components all share the same prop surface. Use the links
            below to jump to the demo surface for each one:
            <ul>
              <li>
                <AnchorToTab href="/components/skeletons#demos">
                  FileMosaicSkeleton
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/skeletons#demos">
                  FileCardSkeleton
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/skeletons#demos">
                  DropzoneSkeleton
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/skeletons#demos">
                  AvatarSkeleton
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/components/skeletons#demos">
                  FileInputButtonSkeleton
                </AnchorToTab>
              </li>
            </ul>
          </Alert>
        </section>
        <section id="props">
          <PropsTableApi rows={SkeletonAPIPropsRows} />
        </section>
        <FooterPage
          page="Skeletons API"
          labelBefore="Skeletons Demo"
          linkBefore="/components/skeletons"
          labelAfter="Avatar API"
          linkAfter="/api/avatar"
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

export default SkeletonsApi;