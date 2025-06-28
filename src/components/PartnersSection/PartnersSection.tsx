// components/PartnersSection.tsx
import Image from "next/image";
import partnerone from "../../../public/assets/photos/partnerOne.png";
import partnertwo from "../../../public/assets/photos/partnertwo.png";
import partnerthree from "../../../public/assets/photos/partnerthree.png";
import partnerfive from "../../../public/assets/photos/partnerfive.png";

const partners = [
  partnerfive,
  partnerone,
  partnertwo,
  partnerthree,
  partnerfive,
  partnerone,
];

export default function PartnersSection() {
  return (
    <section className=" bg-white pb-32">
      <div className="text-center mb-10">
        <p className="text-[16px] text-red-600 font-medium">
          Partners & Clients
        </p>
        <h2 className="text-sm md:text-[48px] font-bold mt-1">
          We work with the best people
        </h2>
      </div>
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
        {partners.map((src, idx) => (
          <div
            key={idx}
            className="flex justify-center grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={src}
              alt={`Partner ${idx + 1}`}
              width={240}
              height={128}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
