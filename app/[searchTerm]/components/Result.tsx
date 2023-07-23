type Props = {
  result: Result;
};
export default function Result({ result }: Props) {
  return (
    <div className='p-4 rounded bg-white space-y-2' key={result.pageid}>
      {result?.thumbnail ? (
        <img
          src={result?.thumbnail?.source}
          alt={result.title}
          className='w-16 h-16 object-cover rounded'
        />
      ) : (
        <div className='w-16 h-16 bg-gray-200 rounded'></div>
      )}
      <h3 className='text-zh-head-4 text-pr'>{result.title}</h3>
      <p className='text-txt'>{result.extract}</p>
    </div>
  );
}
