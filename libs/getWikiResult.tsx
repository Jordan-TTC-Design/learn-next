export default async function getWikiResult(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    prop: 'pageimages|extracts',
    exintro: 'true',
    explaintext: 'true',
    exlimin: 'max',
    exchars: '200',
    format: 'json',
    origin: '*',
  });
  const res = await fetch(`https://en.wikipedia.org/w/api.php?${searchParams}`);
  return res.json();
}
