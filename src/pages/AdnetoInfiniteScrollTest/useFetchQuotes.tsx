import { useCallback, useEffect, useRef, useState } from 'react';
import fetchQuotes from './fetchMoreQuote';
import { Quote } from './type';

const useFetchQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pageRef = useRef<number>(0);

  const fetchMoreQuotes = useCallback(async () => {
    if (isLoading) return;

    const nextPage = pageRef.current + 1;
    setHasError(false);
    setIsLoading(true);

    fetchQuotes(nextPage)
      .then((quotes) => {
        setQuotes((oldQuotes) => [...oldQuotes, ...quotes]);
        pageRef.current = nextPage;
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading]);

  useEffect(() => {
    fetchMoreQuotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { quotes, fetchMoreQuotes, hasError, isLoading };
};

export default useFetchQuotes;
