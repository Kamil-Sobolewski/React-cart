import { useEffect, useState } from 'react';
import { ProductType } from '../types';

const useFetchData = () => {
  const [data, setData] = useState([] as ProductType[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => {
        console.log(res);

        if (!res.ok) {
          throw Error("couldn't fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
