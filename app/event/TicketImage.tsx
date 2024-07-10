"use client";

import Image from "next/image";

const TicketImage = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <Image
        src="/images/huuhuynh.jpg"
        alt="event picture"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default TicketImage;
