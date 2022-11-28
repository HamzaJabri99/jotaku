import { useEffect, useState } from "react";
import makeRequest from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const resp = await makeRequest.get(url);
        setData(resp.data.data);
        console.log(resp.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getData();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
