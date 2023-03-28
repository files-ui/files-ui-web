import { UserFilesUi } from "./UserFilesUi";

export type FuiAction = {
    type?: "OPENFEEDBACK" | "CLOSEFEEDBACK" | "TURNONLIGHT" | "TURNOFFLIGHT";
    payload?: UserFilesUi;
}