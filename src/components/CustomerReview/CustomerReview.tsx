"use client";

// components/FeedbackSection.tsx
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import chef from "../../../public/assets/photos/saf.png";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Tayyab Sohail",
    role: "UX/UI Designer",
    image: chef,
  },
  {
    text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Maria Gomez",
    role: "Product Manager",
    image: chef,
  },
  {
    text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Alex Lee",
    role: "Food Blogger",
    image: chef,
  },
];

const CustomerReview = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Swiper Left */}
        <div>
          <h2 className="text-[50px] font-bold ">
            Customer <span className="text-[#AD1519]">Feedback</span>
          </h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="mt-6"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <p className="text-gray-600 mb-4 text-[25px]">{review.text}</p>

                <div className="flex items-center space-x-4 mt-10">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={74}
                    height={74}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-[24px] font-semibold text-[#A52A2A]">
                      {review.name}
                    </p>
                    <p className="text-[18px] text-gray-500">{review.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Chef Image Right */}
        <div className="relative flex justify-center">
          <div className="bg-red-700 w-[450px] h-[270px] rounded-tl-[100px] z-0 absolute bottom-0 right-10 hidden md:block"></div>
          <Image
            src={chef}
            alt="Chef"
            width={550}
            height={550}
            className="relative z-10 left-9"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
