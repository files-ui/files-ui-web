import { JSON_PARSE_ERROR_RESPONSE, TIMEOUT_ERROR_RESPONSE } from "@files-ui/core";
import { ServerResponse } from "@files-ui/react";




export const JsonParseResponse = (xhr: XMLHttpRequest): ServerResponse => {
    try {
        const jsonResponse = JSON.parse(xhr.response);
        const success: any = jsonResponse.success;
        const message: string = jsonResponse.message;
        const payload: any = jsonResponse.payload;

        const fuiResponse: ServerResponse = {
            success: typeof success === "boolean" ? success : false,
            message: typeof message === "string" ? message : "Error on message response",
            payload: payload || {}
        }
        return fuiResponse
    } catch (error) {
        //console.log("FuiUpload ERROR", error);
        return JSON_PARSE_ERROR_RESPONSE;
    }
}

export const sendRequest = (
    method?: string,
    endpoint?: string,
    data?: FormData,
    headers?: Record<string, string> | undefined
) => {
    return new Promise<ServerResponse>((resolve, reject) => {
        //console.log("Fui_uploadFormData uploadFile", xhr, method, endpoint, data, headers);

        if (!endpoint) return;

        const xhr = new XMLHttpRequest();

        const finalMethod: "POST" | "GET" | "PUT" | "PATCH"
            = method ? ["GET", "POST", "PUT", "PATCH"].includes(method?.toUpperCase()) ? method as "POST" | "GET" | "PUT" | "PATCH" : "POST" : "POST";


        xhr.upload.onload = () => {
            //console.log("Fui_uploadFormData uploadFile onLoad", xhr.readyState, xhr.response);
        };
        xhr.upload.ontimeout = () => resolve(TIMEOUT_ERROR_RESPONSE);


        //currently listening on FileItem component hook
        xhr.onreadystatechange = async (e) => {

            if (xhr.readyState === 4) {
                if (xhr.response !== "") {
                    //there is the answer
                    resolve(JsonParseResponse(xhr));
                } else {
                    //error unexpected
                    // console.log("Fui_uploadFormData EMPTY status", xhr.status);
                    // console.log("Fui_uploadFormData EMPTY readyState", xhr.readyState);
                    // console.log("Fui_uploadFormData EMPTY upload", xhr.upload);
                    //console.log("Fui_uploadFormData EMPTY abort", xhr.abort);
                    //const jumped = lastLastState - lastLastState !== 1;
                    resolve(TIMEOUT_ERROR_RESPONSE);

                }
            } else {
                //console.log("Fui_uploadFormData FuiUpload NOT YET" + xhr.readyState);
            }
        };
        // open request
        xhr.open(finalMethod, endpoint, true);

        //add header to request
        addHeaders(xhr, headers);
        //start uploading
        xhr.send(data);
    });

};

function addHeaders(
    xhr: XMLHttpRequest,
    headers: Record<string, string> | undefined
) {
    //headers
    const headerKeys: string[] = Object.keys(headers || {});
    //const headerValues: string[] = Object.values(headers);
    for (let i = 0; i < headerKeys.length && headers; i++) {
        //console.log("uploadFile headers", headerKeys[i], headers[headerKeys[i]]);
        xhr.setRequestHeader(
            headerKeys[i],
            headers[headerKeys[i]]
        );
    }


}

export const addExtraData = (
    formData: FormData,
    extraData: Record<string, string> | undefined
): void => {
    //headers
    //const extraDataKeys: string[] = Object.keys(extraData || {});
    //const headerValues: string[] = Object.values(headers);
    /*   for (let i = 0; i < extraDataKeys.length && extraData; i++) {
          //console.log("uploadFile extraData", extraDataKeys[i], extraData[extraDataKeys[i]]);
          formData.append(extraDataKeys[i], extraData[extraDataKeys[i]]);
      } */
    formData.append("body", JSON.stringify(extraData));
    //  formData.append("otherValue", "HAAAAAAAAAAAAAAa");

}