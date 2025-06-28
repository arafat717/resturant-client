import Image from "next/image";
import { IoStar } from "react-icons/io5";

interface FoodCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  rating: number;
}

const FoodCard = ({ image, name, category, price }: FoodCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Responsive image container */}
      <div className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 417px"
        />
      </div>

      <div className="px-3 sm:px-4 md:px-5 pt-4 pb-5 sm:pt-5 sm:pb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[14px] sm:text-[18px] md:text-[24px] font-medium text-black">
            {name}
          </h2>
          <span className="bg-[#F03328] text-white text-[10px] sm:text-[12px] md:text-[14px] px-3 py-0.5 sm:px-4 sm:py-1 rounded-full">
            {category}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-1 text-[#FF9E0C] text-[12px] sm:text-[16px] md:text-[20px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <IoStar key={i} />
            ))}
          </div>
          <div className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px] font-semibold text-black">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
