import React from "react";
import TicketCard from "./TicketCard";

const EventList = () => {
  const events = [
    {
      title: "Music Concert",
      location: "New York, USA",
      attendees: 200,
      imageSrc: "/images/huuhuynh.jpg",
      price: 50,
      description: "Enjoy a night of great music with top artists.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Cultural expo",
      location: "London, United Kingdom",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      attendees: 100,
      imageSrc: "/images/huuhuynh.jpg",
      price: 30,
      description: "Experience the finest art from around the world.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 bg-gray-950">
      {events.map((event, index) => (
        <TicketCard
          key={index}
          title={event.title}
          price={event.price}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default EventList;
