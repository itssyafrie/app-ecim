"use client";

import Container from "@/components/Container";
import Header from "../../Header";
import TicketList from "../../TicketList";
import TicketInfo from "../../TicketInfo";
import Image from "next/image";

const BuyTicket = () => {
  return (
    <main className="bg-gray-950">
      <Header />
      <div className="py-11">
        <Container>
          <div className="flex flex-col gap-y-11">
            <div className="text-3xl text-white font-medium">
              Ticket Options
            </div>
            <div className="flex flex-row items-center justify-between gap-x-10">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/huuhuynh.jpg"
                  alt="event picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <TicketInfo />
            </div>
            <TicketList />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default BuyTicket;
