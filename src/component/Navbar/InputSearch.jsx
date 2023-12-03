"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() === "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  // const handleSearch = () => {
  //   const keyword = searchRef.current.value;
  //   router.push(`/search/${encodeURIComponent(keyword)}`);
  // };

  // const handleChange = () => {
  //   handleSearch();
  // };
  return (
    <div className="relative w-full md:w-auto">
      <input
        type="text"
        placeholder="Search Anime..."
        className="p-2 rounded-lg w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
        // onChange={handleChange}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
