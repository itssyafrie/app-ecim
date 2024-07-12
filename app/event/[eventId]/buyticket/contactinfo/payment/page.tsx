"use client";

import Header from "@/app/event/Header";
import PaymentOptions from "@/app/event/PaymentOptions";
import Container from "@/components/Container";
import PurchaseDetails from "../PurchaseDetails";
import { Button } from "@/components/ui/button";

const PaymentMethod = () => {
  return (
    <main>
      <Header />
      <Container>
        <div className="py-11 gap-y-20 flex flex-col items-center">
          <div className="flex flex-row gap-x-11 justify-between">
            <PaymentOptions />
            <PurchaseDetails />
          </div>
          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-400 w-1/3"
          >
            Pay now
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default PaymentMethod;
