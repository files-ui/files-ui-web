import { ValidateFileResponse } from "theamazingunkowntext";
export declare const useDropzoneValidation: (accept: string | undefined, maxFileSize: number | undefined, maxFiles: number | undefined, validator: (f: File) => ValidateFileResponse) => boolean;
