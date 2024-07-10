import Container from "../Container";
import Buttons from "./components/Buttons";
import Logo from "../Logo";
import Navlinks from "./components/Navlinks";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-950">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Navlinks />
            <Buttons />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
