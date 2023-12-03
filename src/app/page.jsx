import AnimeList from "../component/AnimeList";
import {
  GetAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../services/api-services";

const Home = async () => {
  const anime = await GetAnimeResponse("top/anime", "limit=8");
  let recommendation = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendation = reproduce(recommendation, 8);
  return (
    <div>
      <section>
        <AnimeList
          api={anime}
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Show All"
        />
      </section>
      <section>
        <AnimeList api={recommendation} title="Recommendation" />
      </section>
    </div>
  );
};

export default Home;
