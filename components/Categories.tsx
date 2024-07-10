"use client";

import Container from "./Container";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "Concert",
  },
  {
    label: "Hobbies",
  },
  {
    label: "Foods",
  },
  {
    label: "Sports",
  },
  {
    label: "Arts",
  },
  {
    label: "Religious",
  },
  {
    label: "Financials",
  },
  {
    label: "Automotives",
  },
  {
    label: "Sciences",
  },
  {
    label: "Nature",
  },
  {
    label: "Careers",
  },
  {
    label: "Movies",
  },
  {
    label: "Education",
  },
  {
    label: "Design",
  },
  {
    label: "Fashion",
  },
];

const Categories = () => {
  return (
    <div className="border-y-[1px] border-gray-700">
      <Container>
        <div className="flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox key={item.label} label={item.label} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
