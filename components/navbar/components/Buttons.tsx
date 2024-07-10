import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button
        variant="outline"
        className="bg-gray-950 text-white hover:text-gray-100"
      >
        Login
      </Button>
      <Button
        variant="default"
        className="bg-blue-500 hover:bg-blue-400 text-white"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Buttons;
