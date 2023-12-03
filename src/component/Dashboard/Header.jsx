"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button onClick={handleBack} className="text-color-primary text-lg">
          <ArrowSquareLeft size={32} />
        </button>
        <h3 className="text-3xl text-color-primary font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Header;
