"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const TicketPurchaseCard = () => {
  return (
    <Card className="border-[1px] border-gray-700 w-1/4 md:w-1/2 transition-transform transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="pt-4 text-lg font-semibold pb-2 text-white text-center">
          Choose your ticket
        </CardTitle>
        <CardDescription className="text-sm text-gray-300 pb-2 text-center">
          Tickets starting at
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-white text-center">$199</p>
      </CardContent>
      <CardFooter className="text-sm text-gray-300 pb-8 flex items-center justify-center">
        <Button variant="default" className="bg-blue-500 hover:bg-blue-400">
          Buy Ticket
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TicketPurchaseCard;
