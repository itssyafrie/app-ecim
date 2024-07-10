import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EventSearch = () => {
  return (
    <div className="flex flex-grow items-center justify-start sm:justify-center">
      <div className="w-full md:w-1/2">
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

export default EventSearch;
