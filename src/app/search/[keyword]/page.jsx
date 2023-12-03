import AnimeList from "../../../component/AnimeList";
import { GetAnimeResponse } from "@/services/api-services";

const Home = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await GetAnimeResponse("anime", `q=${keyword}`);
  return (
    <div>
      <section>
        <AnimeList api={searchAnime} title={`Search for ${decodeKeyword}...`} />
      </section>
    </div>
  );
};

export default Home;
