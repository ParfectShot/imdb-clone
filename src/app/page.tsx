import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import { BiSolidUpvote } from "react-icons/bi";

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
    <main className=" lg:p-24">
      {data.results.map((item: any) => (
        <div key={item.id} className="flex justify-around gap-2 p-4">
          <div className="relative w-1/3">
            <Image
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
              width={90}
              height={100}
            />
          </div>
          <div className="text-start w-2/3">
            <h6 className="text-sm font-bold">
              {item.title || item.original_name}
            </h6>
            <div className="text-xs flex items-center text-gray-400">
              <span>{item.release_date || item.first_air_date}</span>
            </div>
            <div className="flex items-center justify-start gap-4 mt-2">
              <div className="text-xs font-thin flex items-center gap-1">
                <AiFillFire className="text-red-500" />
                <span>{Number(item.vote_average).toFixed(1)}/10</span>
              </div>
              <div className="text-xs flex items-center gap-1 font-thin">
                <BiSolidUpvote className="text-green-500" />
                <span>{item.vote_count}</span>
              </div>
            </div>
            <div className="mt-2">
              {item.overview.length > 70 ? (
                <p className="text-xs text-gray-400">
                  {item.overview.slice(0, 70)}...
                </p>
              ) : (
                <p className="text-xs text-gray-400">{item.overview}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
