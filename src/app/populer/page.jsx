"use client";
import AnimeList from "@/component/AnimeList";
import HeaderMenu from "@/component/utils/HeaderMenu";
import Pagination from "@/component/utils/Pagination";
import React, { useEffect, useState } from "react";
import { GetAnimeResponse } from "../../services/api-services";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    const data = await GetAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(data);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
