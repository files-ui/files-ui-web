import * as React from "react";
import { Localization } from "theamazingunkowntext";
import "./DropzoneChildren.scss";
declare type DropzoneChildrenProps = {
    children?: React.ReactNode | [];
    label?: string;
    localization?: Localization;
};
declare const DropzoneChildren: React.FC<DropzoneChildrenProps>;
export default DropzoneChildren;
