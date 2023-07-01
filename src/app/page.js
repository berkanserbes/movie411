import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
