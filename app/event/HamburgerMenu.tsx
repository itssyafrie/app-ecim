import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const HamburgerMenu = () => {
  return (
    <div className="block md:hidden">
      <Button variant="outline" className="border-white">
        <Menu color="white" />
      </Button>
    </div>
  );
};

export default HamburgerMenu;
