import { sendRequest, addExtraData } from "./request";

export type RateProps = {
    like?: boolean;
    sectionToComment?: string;
    pageToComment?: string;
    comment?: string;
}
const url="http://localhost:2800/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503/feedback";
export class MailController {

    static sendFeddback = async (props: RateProps) => {


        const formData = new FormData();


        addExtraData(formData, props as Record<string, string>);
        //addExtraData(formData, props as Record<string, string>);
        console.log(formData, "formData");
        console.log(props, "props");
        //const response = await sendRequest("POST", "https://files-ui-server.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503/feedback");
        const response = await sendRequest("POST", url,formData);

        return response;

    }
}