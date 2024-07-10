import Categories from "@/components/Categories";
import EventList from "@/components/EventList";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-950 w-screen h-screen">
      <Navbar />
      <Header />
      <Searchbar />
      <Categories />
      <EventList />
    </main>
  );
}
