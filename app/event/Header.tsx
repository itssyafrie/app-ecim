import Container from "@/components/Container";
import Buttons from "@/components/navbar/components/Buttons";
import Logo from "@/components/Logo";
import EventSearch from "./EventSearch";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-gray-950 border-b-[1px] border-gray-700">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="hidden sm:block">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <EventSearch />
            <HamburgerMenu />
            <div className="hidden md:block">
              <Buttons />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
