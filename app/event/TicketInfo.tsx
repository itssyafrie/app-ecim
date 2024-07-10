"use client";

import { MapPin, Calendar } from "lucide-react";

const TicketInfo = () => {
  return (
    <div className="flex flex-col gap-y-2 text-white w-1/2 md:w-full">
      <div className="font-medium text-3xl">Arts Expo</div>
      <div className="font-light text-gray-400 flex flex-row gap-x-3">
        <MapPin />
        <span>Salatiga</span>
      </div>
      <div className="font-light text-gray-400 flex flex-row gap-x-3">
        <Calendar />
        <span>22 Agustus 2024</span>
      </div>
      <p className="font-light">
        Marty travels back in time using an eccentric scientist's time machine.
        However, he must make his high-school-aged parents fall in love in order
        to return to the present.
      </p>
    </div>
  );
};

export default TicketInfo;
