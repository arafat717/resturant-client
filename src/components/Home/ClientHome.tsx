"use client";

import { useState } from "react";
import BestDealer from "@/components/BestDealer/BestDealer";
import { TFood } from "@/Types/food";
import { TCategory } from "@/Types/category";

type Props = {
  foodData: TFood[];
  categoryData: TCategory[];
};

const ClientHome = ({ foodData, categoryData }: Props) => {
  const [filter, setFilter] = useState<string>("All");
  const [categories, setCategories] = useState<TCategory[]>(categoryData);
  const [food, setFood] = useState<TFood[]>(foodData);

  const refetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/category");
      const data = await res.json();
      setCategories(data.data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  const refetchFood = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/food");
      const data = await res.json();
      setFood(data.data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  return (
    <BestDealer
      data={food}
      category={categories}
      filter={filter}
      setFilter={setFilter}
      refetchCategories={refetchCategories}
      refetchFood={refetchFood}
    />
  );
};

export default ClientHome;
