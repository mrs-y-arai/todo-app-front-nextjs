import { API_BASE_URL } from "../constants";

const getApiUrl = (path: string) => `${API_BASE_URL}${path}`;

export const getApiData = async (
  apiPath: string,
  options?: { cache?: any; next?: any },
) => {
  const res: Response = await fetch(getApiUrl(apiPath), {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    cache: options?.cache ?? undefined,
    next: options?.next ?? undefined,
  });

  if (!res.ok) {
    console.log("Error in getApiData", { apiPath, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const postApiData = async ({
  apiPath,
  data,
}: {
  apiPath: string;
  data?: any;
}) => {
  const res: Response = await fetch(getApiUrl(apiPath), {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    mode: "cors",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("Error in postData", { apiPath, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};
