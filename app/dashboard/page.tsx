import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Menu, Ticket } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-gray-950">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <Logo />
            </Link>
            <Button variant="outline" className="border-white">
              <Menu color="white" />
            </Button>
          </div>
        </Container>
      </div>

      <div className="flex flex-row h-screen border-t-[1px] border-gray-700">
        <div className="flex flex-col p-8 text-white bg-gray-800 border-r-[1px] border-gray-700 gap-y-2">
          <Button
            variant="default"
            className="hover:bg-gray-950 text-md font-normal flex gap-x-3 items-start justify-start"
          >
            <LayoutDashboard />
            Dashboard
          </Button>
          <Button
            variant="default"
            className="hover:bg-gray-950 text-md font-normal flex gap-x-3 justify-start"
          >
            <Ticket />
            My Events
          </Button>
        </div>
        <div className="h-full w-full p-8 text-white">New Event</div>
      </div>
    </div>
  );
};

export default Dashboard;
