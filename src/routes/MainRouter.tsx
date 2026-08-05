import * as React from "react";
import GettingStartedPage from "../pages/getting-started/GettingStartedPage";
import ErrorPage from "../pages/error-page/ErrorPage";
import DropzoneDemoPage from "../pages/demo/DropzoneDemoPage";
import FileMosaicDemoPage from "../pages/demo/FileMosaicDemoPage";
import FileCardDemoPage from "../pages/demo/FileCardDemoPage";
import ServerSidePage from "../pages/server-side/ServerSidePage";
import DropzoneApi from "../pages/api/DropzoneApi";
import FileMosaicApi from "../pages/api/FileMosaicApi";
import FileCardApi from "../pages/api/FileCardApi";
import UsagePage from "../pages/usage/UsagePage";
import TypesPage from "../pages/types-page/TypesPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayoutPage from "../components/layout-pages/MainLayoutPage";
import AvatarDemoPage from "../pages/demo/AvatarDemoPage";
import FileInputButtonApi from "../pages/api/FileInputButtonApi";
import AvatarApi from "../pages/api/AvatarApi";
import FileInputButtonDemoPage from "../pages/demo/FileInputButtonDemoPage";
import FileDownloadPage from "../pages/download-page/FileDownloadPage";
import FileIconsPage from "../pages/file-icons/FileIconsPage";
import LocalizationPage from "../pages/localization/LocalizationPage";
import FullScreenApi from "../pages/api/FullScreenApi";
import FullScreenDemoPage from "../pages/demo/FullScreenDemoPage";
import GlobalConfigPage from "../pages/global-config-page/GlobalConfigPage";
import MainPage from "../pages/MainPage";
import SizeVariantsPage from "../components/demo-pages/SizeVariantsPage";
import SkeletonsDemoPage from "../pages/demo/SkeletonsDemoPage";
import SkeletonsApi from "../pages/api/SkeletonsApi";
import NextJsGettingStartedPage from "../pages/nextjs/NextJsGettingStartedPage";
import NextJsServerActionsPage from "../pages/nextjs/NextJsServerActionsPage";
import NextJsAppRouterPage from "../pages/nextjs/NextJsAppRouterPage";
import UseFilesUIDemoPage from "../pages/demo/UseFilesUIDemoPage";
import CropPluginPage from "../pages/plugins/CropPluginPage";
import CompressPluginPage from "../pages/plugins/CompressPluginPage";
import HeadlessPage from "../pages/headless/HeadlessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: (
      <MainLayoutPage selectedIndex={0}>
        <ErrorPage />
      </MainLayoutPage>
    ),
  },
  {
    path: "/getting-started",
    element: <GettingStartedPage />,
  },
  {
    path: "/usage",
    element: <UsagePage />,
  },
  {
    path: "/components",
    element: (
      <MainLayoutPage selectedIndex={2}>
        <Outlet />
      </MainLayoutPage>
    ),
    children: [
      {
        path: "/components/avatar",
        element: <AvatarDemoPage />,
      },
      {
        path: "/components/dropzone",
        element: <DropzoneDemoPage />,
      },
      {
        path: "/components/fileinputbutton",
        element: <FileInputButtonDemoPage />,
      },
      {
        path: "/components/filemosaic",
        element: <FileMosaicDemoPage />,
      },
      {
        path: "/components/filecard",
        element: <FileCardDemoPage />,
      },
      {
        path: "/components/fullscreen",
        element: <FullScreenDemoPage />,
      },
      {
        path: "/components/skeletons",
        element: <SkeletonsDemoPage />,
      },
      {
        path: "/components/usefilesui",
        element: <UseFilesUIDemoPage />,
      },
    ],
  },
  {
    path: "/api",
    element: (
      <MainLayoutPage selectedIndex={3}>
        <Outlet />
      </MainLayoutPage>
    ),
    children: [
      {
        path: "/api/avatar",
        element: <AvatarApi />,
      },
      {
        path: "/api/fileinputbutton",
        element: <FileInputButtonApi />,
      },
      {
        path: "/api/dropzone",
        element: <DropzoneApi />,
      },
      {
        path: "/api/filemosaic",
        element: <FileMosaicApi />,
      },
      {
        path: "/api/filecard",
        element: <FileCardApi />,
      },
      {
        path: "/api/fullscreen",
        element: <FullScreenApi />,
      },
      {
        path: "/api/skeletons",
        element: <SkeletonsApi />,
      },
    ],
  },
  {
    path: "/file-icons",
    element: <FileIconsPage />,
  },
  {
    path: "/localization",
    element: <LocalizationPage />,
  },
  {
    path: "/server-side",
    element: <ServerSidePage />,
  },
  /*   {
    path: "/code-generator",
    element: <CodeGeneratorPage />,
  }, */
  {
    path: "/types",
    element: <TypesPage />,
  },
  /*   {
    path: "/file-reader",
    element: <FileReaderPage />,
  }, */
  {
    path: "/file-download",
    element: <FileDownloadPage />,
  },
  ///
  /*   {
    path: "/file-upload",
    element: <FileUploaderPage />,
  }, */
  { path: "/global-config", element: <GlobalConfigPage /> },
  { path: "/demo/size-variants", element: <SizeVariantsPage /> },
  { path: "/nextjs/getting-started", element: <NextJsGettingStartedPage /> },
  { path: "/nextjs/server-actions", element: <NextJsServerActionsPage /> },
  { path: "/nextjs/app-router", element: <NextJsAppRouterPage /> },
  { path: "/plugins/crop", element: <CropPluginPage /> },
  { path: "/plugins/compress", element: <CompressPluginPage /> },
  { path: "/headless", element: <HeadlessPage /> },
]);

const MainRouter = (props) => {
  return <RouterProvider router={router} />;
};
export default MainRouter;
