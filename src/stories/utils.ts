import type { Configuration } from "../lib/types";

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

export const dummyConfiguration: Configuration = {
    collections: [],
    askEndpoint: "",
    addEndpoint: "",
    model: "gpt-3.5-turbo-16k",
}