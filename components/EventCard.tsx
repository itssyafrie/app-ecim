import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface EventCardProps {
  title: string;
  location: string;
  attendees: number;
  imageSrc: string;
  price: number;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  attendees,
  imageSrc,
  price,
  description,
}) => {
  return (
    <Card className="border border-gray-700 overflow-hidden transition-transform transform hover:-translate-y-1">
      <CardHeader>
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <CardTitle className="pt-4 text-lg font-semibold pb-2 text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-300 pb-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-white">${price}</p>
      </CardContent>
      <CardFooter className="text-sm text-gray-300 pb-8">{location}</CardFooter>
    </Card>
  );
};

export default EventCard;
