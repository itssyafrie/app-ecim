"use client";

import Container from "@/components/Container";
import { useParams, useRouter } from "next/navigation";
import Header from "../Header";
import TicketImage from "../TicketImage";
import TicketInfo from "../TicketInfo";
import TicketPurchaseCard from "../TicketPurchaseCard";
import TicketDescription from "../TicketDescription";

const EventDetails = () => {
  const { eventId } = useParams();

  return (
    <main className="bg-gray-950">
      <Header />
      <div className="py-4">
        <Container>
          <div className="flex flex-col gap-y-11">
            <TicketImage />
            <div className="flex flex-row gap-x-12 justify-between">
              <TicketInfo />
              <TicketPurchaseCard />
            </div>
            <TicketDescription />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default EventDetails;
