import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center py-5 bg-gray-800">
      <div className="w-1/2 lg:w-full max-w-3xl">
        <Input
          className="border-gray-700 text-gray-400"
          placeholder="Search event by name, location, and more"
        />
      </div>
      <Button
        variant="default"
        type="submit"
        className=" text-white -ml-[1px] bg-blue-500  hover:bg-blue-400"
      >
        Search
      </Button>
    </div>
  );
};

export default Searchbar;
