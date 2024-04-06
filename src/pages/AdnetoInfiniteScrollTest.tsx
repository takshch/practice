import { useEffect } from 'react';
import QuoteItem from './AdnetoInfiniteScrollTest/QuoteItem';
import useFetchQuotes from './AdnetoInfiniteScrollTest/useFetchQuotes';

const AdentoInfiniteScrollTest = () => {
  const { fetchMoreQuotes, hasError, isLoading, quotes } = useFetchQuotes();

  useEffect(() => {
    const scrollHandler = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 40) {
        fetchMoreQuotes();
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [fetchMoreQuotes]);

  return (
    <div className="min-h-screen h-full bg-black flex flex-col items-center pb-10">
      <h1 className="text-capitalize font-bold mb-4 font-medium text-5xl text-white mt-10">
        Programming Quotes
      </h1>
      <div className="flex flex-col gap-8 mt-10 w-3/4 overflow-hidden">
        {quotes.map((quote) => (
          <QuoteItem key={quote.id} {...quote} />
        ))}
      </div>
      <div className="my-10">
        {isLoading && (
          <div className="flex gap-2 loading-animation h-12 flex-justify-center items-center">
            <span className="w-2 bg-white"></span>
            <span className="w-2 bg-white"></span>
            <span className="w-2 bg-white"></span>
          </div>
        )}
        {hasError && (
          <div className="text-red-700 font-medium text-2xl">
            Failed to fetch the quotes
          </div>
        )}
      </div>
    </div>
  );
};

export default AdentoInfiniteScrollTest;
