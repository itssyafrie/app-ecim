"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  price: number;
}

const TicketCard: React.FC<EventCardProps> = ({
  title,
  description,
  price,
}) => {
  const [ticketCount, setTicketCount] = useState<number>(0);
  const onIncrement = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };
  const onDecrement = () => {
    setTicketCount((prevCount) => Math.max(0, prevCount - 1));
  };
  return (
    <Card className="border border-gray-700 overflow-hidden transition-transform transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="pt-4 text-lg font-semibold pb-2 text-white text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-300 pb-2 text-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-white text-center">${price}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-white px-12">
        <Button
          size="icon"
          variant="outline"
          onClick={onDecrement}
          className="hover:bg-blue-500"
        >
          <Minus />
        </Button>
        <div>{ticketCount}</div>
        <Button
          size="icon"
          variant="outline"
          onClick={onIncrement}
          className="hover:bg-blue-500"
        >
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
