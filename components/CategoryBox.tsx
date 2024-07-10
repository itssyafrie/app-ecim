"use client";

interface CategoryBoxProps {
  label: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-2 p-3 hover:bg-gray-800 transition cursor-pointer">
      <div className="font-medium text-center text-sm text-gray-300">
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;
