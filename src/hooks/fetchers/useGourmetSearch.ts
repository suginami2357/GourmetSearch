import { GourmetSearch } from "../../types/fetchers/GourmetSearch";
import { useSWRFetch } from "./useSWRFetch";

export type GourmetSearchOptions = {
  keyword: string;
  start: string;
  count: string;
};

export const useGourmetSearch = (options?: GourmetSearchOptions) => {
  const response = useSWRFetch<GourmetSearch, GourmetSearchOptions>(
    `http://localhost:5000/fetchData`,
    options
  );
  return {
    data: response.data?.results.shop,
    isLoading: response.isLoading,
    error: response.error,
  };
};
