import useSWR from "swr";

export const useSWRFetch = <T, Params extends Record<string, string>>(
  base: string,
  params?: Params
) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const url = `${base}?${new URLSearchParams(params).toString()}`;
  return useSWR<T>(url, fetcher);
};
