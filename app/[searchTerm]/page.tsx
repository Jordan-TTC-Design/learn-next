import getWikiResult from '@/libs/getWikiResult';
import Result from './components/Result';
type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  console.log(searchTerm);
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  console.log(data);
  const results: Result[] | undefined = data.query?.pages;

  const content = (
    <main className='bg-gray-300 w-full p-8'>
      <div className='space-y-6'>
        {results ? (
          Object.values(results).map(result => {
            return <Result key={result.title} result={result}></Result>;
          })
        ) : (
          <h2>{`${searchTerm} Not Found`}</h2>
        )}
      </div>
    </main>
  );
  return content;
}
