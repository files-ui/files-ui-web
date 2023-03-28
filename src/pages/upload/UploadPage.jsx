import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const UploadPage = (props) => {
  return (
    <MainLayoutPage>
      <MainContentContainer>
        <MainTitle>Upload with Files ui</MainTitle>
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={[]} />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};
export default UploadPage;
