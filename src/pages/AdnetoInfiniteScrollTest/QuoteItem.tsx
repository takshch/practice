import { Quote } from "./type";

const QuoteItem = ({ id, quote, author }: Quote) => (
  <blockquote>
    <span className="text-2xl font-medium text-white">
      {id}
      {')'} {quote}
    </span>
    <footer className="mt-2 font-medium text-right text-slate-400">
      —{author}
    </footer>
  </blockquote>
);

export default QuoteItem;
