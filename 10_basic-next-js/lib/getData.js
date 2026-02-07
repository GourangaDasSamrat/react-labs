import wait from "@/utils/wait";

// latency in milliseconds
export default async function getData(url, options = {}, latency = 0) {
    if (latency > 0) {
        await wait(latency);
    }
    const result = await fetch(url, options);
    return result.json();
}
