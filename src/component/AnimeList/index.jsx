import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const AnimeList = ({ api, linkHref, linkTitle, title }) => {
  return (
    <>
      <Header title={title} linkHref={linkHref} linkTitle={linkTitle} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {api &&
          api.data?.map((data, i) => (
            <Link
              key={i}
              href={`/anime/${data.mal_id}`}
              className="bg-color-primary cursor-pointer hover:text-color-accent transition-all"
            >
              <Image
                src={data.images.webp.image_url}
                width={350}
                height={350}
                alt="..."
                className="w-full max-h-64 object-cover"
              ></Image>
              <h3 className="font-bold hover:text-color-accent md:text-xl mx-auto p-4 text-md text-black">
                {data.title}
              </h3>
            </Link>
          ))}
      </div>
    </>
  );
};

export default AnimeList;
