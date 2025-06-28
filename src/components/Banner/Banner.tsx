import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import breakfast from "../../../public/assets/photos/breakfast.png";

const gallery = [breakfast, breakfast, breakfast, breakfast];

const Banner = () => {
  return (
    <section className="bg-[#880808] text-white w-full h-screen relative overflow-hidden">
      {/* Logo and Search */}
      <div className="flex justify-between items-center  pt-12 px-20">
        <div>
          <h1 className="text-white font-bold text-[32px]">RESTAURANT</h1>
        </div>
        <div className="relative w-[800px]">
          <input
            type="text"
            placeholder="Search...."
            className="w-full bg-white pl-10 pr-4 py-3 rounded-full text-black"
          />
          <FaSearch className="absolute left-3 top-4 text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  px-28 py-16 relative z-10">
        {/* Left Content */}
        <div className="w-full  space-y-6 relative">
          <h2 className="text-[96px]">BREAKFAST</h2>
          <p className="text-[20px] font-semibold leading-6 w-[900px]">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet.
          </p>

          {/* Image Carousel */}
          <div className="flex items-center space-x-4 mt-6">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                className="rounded-full overflow-hidden border-4 border-transparent hover:border-white transition duration-300"
              >
                <Image
                  src={src}
                  alt={`breakfast${idx + 1}`}
                  width={180}
                  height={280}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center">
          <Image
            src={breakfast}
            alt="Hero Breakfast"
            height={630}
            width={1000}
          />
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-800 rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-800 rounded-full opacity-30 -z-10" />
    </section>
  );
};

export default Banner;
