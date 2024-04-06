import { Quote } from './type';

const BASE_URL = 'https://api.javascripttutorial.net';
const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 10;

const API = {
  getQuote: (page: number, limit: number) =>
    `${BASE_URL}/v1/quotes/?page=${page}&limit=${limit}`,
};

type GET_QUOTES_API_RESPONSE = {
  total: number;
  data: Quote[];
};

const fetchQuotes = async (
  page: number = DEFAULT_PAGE_NUMBER,
  limit: number = DEFAULT_PAGE_LIMIT
) => {
  const url = API.getQuote(page, limit);
  const response = await fetch(url);
  const { data: quotes }: GET_QUOTES_API_RESPONSE = await response.json();
  return quotes;
};

export default fetchQuotes;
