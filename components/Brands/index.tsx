import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Linkdin",
    href: "https://www.linkedin.com/company/scselpu/",
    image: "/resources/linkdin.png",
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com/scse_lpu/",
    image: "/resources/instagram.png",
  },
  {
    id: 3,
    name: "Github",
    href: "https://github.com/ieee-lpu-cis",
    image: "/resources/GitHub.png",
  },
];

const Brands = () => {
  return (
    <section className="dark:bg-gray-900 mx-5 mt-2 bg-white rounded-3xl">
      <div className="mx-auto max-w-screen-xl py-5 px-4 lg:py-8">
        <div className="text-gray-500 dark:text-gray-400 grid grid-cols-4 gap-8 sm:gap-12 md:grid-cols-4 lg:grid-cols-4 ">
          <a href="https://www.linkedin.com/company/scselpu/" className="flex flex-col items-center justify-center">
            <img src="/resources/linkdin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/scse_lpu/" className="flex flex-col items-center justify-center">
            <img src="/resources/instagram.png" alt="Instagram" />
          </a>
          <a href="https://github.com/ieee-lpu-cis" className="flex flex-col items-center justify-center">
            <img src="/resources/GitHub.png" alt="GitHub" />
          </a>
          <a href="https://discord.gg/rdVUux52aQ" className="flex flex-col items-center justify-center">
            <img src="/resources/Discordlogo.png" alt="Discord" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;
