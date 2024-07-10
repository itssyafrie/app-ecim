import Link from "next/link";

const Navlinks = () => {
  return (
    <div className="hidden md:block cursor-pointer text-gray-300">
      <div className="flex flex-row gap-x-8">
        <Link href={"/"}>Concerts</Link>
        <Link href={"/"}>Arts</Link>
        <Link href={"/"}>Conference</Link>
        <Link href={"/"}>Movies</Link>
        <Link href={"/"}>International</Link>
      </div>
    </div>
  );
};

export default Navlinks;
