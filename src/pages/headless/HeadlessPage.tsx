import * as React from "react";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import UseFilesUIDemoPage from "../demo/UseFilesUIDemoPage";

const HeadlessPage = () => (
  <MainLayoutPage selectedIndex={13}>
    <UseFilesUIDemoPage />
  </MainLayoutPage>
);

export default HeadlessPage;
