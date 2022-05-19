import md5 from "md5";

interface RequestProps {
  type: "characters" | "comics" | "creators" | "events" | "series" | "stories";
  id?: number | string;
  detail?:
    | "comics"
    | "events"
    | "series"
    | "stories"
    | "characters"
    | "creators";
}

export function makeRequest({ type, id, detail }: RequestProps) {
  const url = new URL(`http://gateway.marvel.com/v1/public/${type}`);

  const timestamp = new Date().getTime();
  const hash = md5(
    `${timestamp}e9b96dad4f3ca00eda051f647c54e5fbc67e8c06e9ba2d39a25d59924be1414b882cd946`
  );
  url.searchParams.set("ts", `${timestamp}`);
  url.searchParams.set("apikey", `e9ba2d39a25d59924be1414b882cd946`);
  url.searchParams.set("hash", hash);
  console.log(url.toString());
}
