"use client";

import Header from "@/app/event/Header";
import ContactForm from "./ContactForm";
import Container from "@/components/Container";
import PurchaseDetails from "./PurchaseDetails";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <main>
      <Header />
      <Container>
        <div className="py-11 gap-y-20 flex flex-col items-center">
          <div className="flex flex-row gap-x-11 justify-between">
            <ContactForm />
            <PurchaseDetails />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ContactInfo;
