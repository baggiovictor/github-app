import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";

export const useApiData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const apiData = await fetchData(url);
      setData(apiData);
    };
    fetchDataFromApi();
  }, [url]);

  return data;
};
