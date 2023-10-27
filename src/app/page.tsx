import Card from "@/components/Card";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
const urls: Record<string, string> = {
  trending: `https://api.themoviedb.org/3/trending/all/week`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated`,
};

const getData = async (url: string) => {
  const res = await fetch(`${url}?api_key=${API_KEY}&language=en-US`, {
    next: { revalidate: 10000 },
  });
  const data = await res.json();
  return data;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const genre = searchParams.genre || "trending";
  const data = await getData(urls[genre]);

  return (
    <main className="lg:p-8">
      <Results results={data.results} />
    </main>
  );
}
