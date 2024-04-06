import classNames from 'classnames';

const ITEMS = [
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN',
  'ELEVEN',
  'TEWLVE',
];

const AdnetoAdItem = ({ text }: { text: string }) => (
  <span className="h-28 mx-2 my-3 px-4 py-3 text-white font-medium text-lg" style={{ backgroundColor: '#007bff' }}>
    <span>{text}</span>
  </span>
);

const AdnetoGridTest = () => {
  return (
    <div
      className={classNames(
        'w-full',
        'grid gap-x-3 grid-y-2',
        'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      )}
    >
      {ITEMS.map((text) => (
        <AdnetoAdItem text={text} />
      ))}
    </div>
  );
};

export default AdnetoGridTest;
