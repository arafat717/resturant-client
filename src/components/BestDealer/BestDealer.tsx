/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TCategory } from "@/Types/category";
import { TFood } from "@/Types/food";
import FoodCard from "../Ui/FoodCard";
import Modal from "../Modal/Modal";
import { useState } from "react";
import RInput from "../Form/RInput";
import RForm from "../Form/RForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import RSelect from "../Form/RSelect";
import FoodModal from "../Modal/FoodModal";

type Props = {
  data: TFood[];
  category: TCategory[];
  filter: string;
  setFilter: (value: string) => void;
  refetchCategories: () => Promise<void>;
  refetchFood: () => Promise<void>;
};

const BestDealer = ({
  data,
  category,
  filter,
  setFilter,
  refetchCategories,
  refetchFood,
}: Props) => {
  // for both modal modal/foodmodal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);

  // category options
  const categoryOptions = category?.map((item) => ({
    value: item.category,
    label: `${item.category}`,
  }));

  const [file, setFile] = useState<File | null>(null);
  // add food handler
  const handleAddFood: SubmitHandler<FieldValues> = async (data) => {
    if (!file) {
      toast.error("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/food/create-food",
        {
          method: "POST",
          body: formData,
        }
      );
      await response.json();
      if (response.ok) {
        await refetchFood();
        toast.success("Food added successfully!");
        setIsFoodModalOpen(false);
      }
    } catch (err) {
      toast.error("Failed to add category!");
    }
  };

  // add category handler
  const handleAddCategory: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/category/create-category",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await response.json();
      if (response.ok) {
        await refetchCategories();
        toast.success("Category added successfully!");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Failed to add category!");
    }
  };

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.category === filter);

  return (
    <div className="py-36 max-w-[1300px] mx-auto">
      <div className="text-center max-w-[840px] mx-auto">
        <h1 className="text-[32px] md:text-[55px] text-[#1F1F1F] font-bold">
          Our best Seller Dishes
        </h1>
        <p className="text-[18px] md:text-[25px] text-[#5C5C5C] mt-2">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
      </div>
      <div className="mt-10 md:mt-12 overflow-x-auto md:px-4">
        <div className="overflow-x-auto">
          <div className="flex  md:justify-between gap-2 md:gap-3 min-w-max px-2 md:px-0">
            {/* filter button  */}
            <div className="flex gap-1.5">
              <button
                onClick={() => setFilter("All")}
                className={`border px-3 py-1 md:p-2 md:px-4 rounded-full text-xs md:text-lg whitespace-nowrap cursor-pointer ${
                  filter === "All" ? "bg-[#2C2C2C] text-white" : "text-black"
                }`}
              >
                All
              </button>
              {category?.map((cate) => (
                <button
                  onClick={() => setFilter(cate.category)}
                  key={cate._id}
                  className={`border px-3 py-1 md:p-2 md:px-4 rounded-full text-xs md:text-lg whitespace-nowrap cursor-pointer ${
                    filter === cate.category
                      ? "bg-[#2C2C2C] text-white"
                      : "text-black"
                  }`}
                >
                  {cate.category}
                </button>
              ))}
            </div>
            <div className="flex gap-2 md:ml-4">
              {/* add food button */}
              <button
                onClick={() => setIsFoodModalOpen(true)}
                className="border px-3 py-1 md:p-2 md:px-4 rounded-full text-xs md:text-lg bg-[#2C2C2C] text-white whitespace-nowrap cursor-pointer"
              >
                Add Food
              </button>
              {/* added food modal and form */}
              <FoodModal
                isOpen={isFoodModalOpen}
                onClose={() => setIsFoodModalOpen(false)}
              >
                <h2 className="text-xl font-bold mb-4">Add New Category</h2>
                <RForm onSubmit={handleAddFood}>
                  <RInput type="text" name="name" label="Name"></RInput>
                  <RSelect
                    name="category"
                    label="Name"
                    options={categoryOptions}
                  ></RSelect>
                  <RInput type="text" name="price" label="Price"></RInput>
                  <input
                    className="w-full p-2 border rounded mb-3"
                    type="file"
                    name="image"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    id="image"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFoodModalOpen(false)}
                      className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </RForm>
              </FoodModal>

              {/* add category button  */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="border px-3 py-1 md:p-2 md:px-4 rounded-full text-xs md:text-lg bg-[#2C2C2C] text-white whitespace-nowrap cursor-pointer "
              >
                Add Category
              </button>
              {/* add category modal and form */}
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">Add New Category</h2>
                <RForm onSubmit={handleAddCategory}>
                  <RInput type="text" name="category" label="Category"></RInput>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </RForm>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-14 mt-10 px-2 md:px-4">
        {filteredData?.map((pd) => (
          <FoodCard key={pd._id} {...pd}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default BestDealer;
