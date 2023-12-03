import { GetAnimeResponse } from "@/services/api-services";
import React from "react";
import Image from "next/image";
import VideoPlayer from "@/component/utils/VideoPlayer";

const Page = async ({ params: { id } }) => {
  const { data } = await GetAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {data?.title} - {data?.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col items-center rounded border p-2">
          <h3>Peringkat</h3>
          <p>{data?.rank}</p>
        </div>
        <div className="w-36 flex flex-col items-center rounded border p-2">
          <h3>Score</h3>
          <p>{data?.score}</p>
        </div>
        <div className="w-36 flex flex-col items-center rounded border p-2">
          <h3>Members</h3>
          <p>{data?.members}</p>
        </div>
        <div className="w-36 flex flex-col items-center rounded border p-2">
          <h3>Episodes</h3>
          <p>{data?.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 gap-2 flex sm:flex-nowrap flex-wrap text-color-primary">
        <Image
          src={data?.images.webp.image_url}
          alt={data?.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className=" mt-5 text-lg">{data?.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={data?.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
