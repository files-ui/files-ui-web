import * as React from "react";

export const useVisit = (): Date => {
    const currentDate = new Date();

    React.useEffect(() => {
        const timer: NodeJS.Timer = setInterval(() => {

        }, 1000 * 60 * 3);
        return () => {
            if (timer)
                clearInterval(timer);
        }
    }, []);





    return currentDate;

}