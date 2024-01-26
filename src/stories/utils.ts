import type {Configuration} from "../lib/types";

/**
 * A utility to wait a certain amount of milliseconds in an async function.
 * @param timeMs 
 * @returns 
 */
export async function untilTimePassed(timeMs: number) {
    let timeout: NodeJS.Timeout;
    return await new Promise<void>(
        (resolve) =>
            timeout = setTimeout(
                () => {
                    clearTimeout(timeout);
                    resolve();
                },
                timeMs)
    );
}


//the askEndpoint is just a testing url for the local testing. 
//it should be replaced with the real url when the backend is deployed.
export const dummyConfiguration: Configuration = {
    collections: [],
    askEndpoint: "http://127.0.0.1:5000/ask",
    addEndpoint: "",
    model: "gpt-3.5-turbo-16k",
};