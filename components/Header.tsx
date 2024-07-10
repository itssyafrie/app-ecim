"use client";

import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <Image
        src="/images/wendywei.jpg"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-white lg:text-8xl text-6xl font-bold text-center">
          Where fun lasts forever
        </h1>
      </div>
    </div>
  );
};
export default HeroImage;
