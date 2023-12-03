import Link from "next/link";
import Image from "next/image";
import Header from "@/component/Dashboard/Header";

const Page = () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Collection Anime" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="" className="relative border-color-accent border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex items-center justify-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-color-accent border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex items-center justify-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-color-accent border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex items-center justify-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-color-accent border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex items-center justify-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
