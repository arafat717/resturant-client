"use client";
import Image from "next/image";
import React from "react";
import chef from "../../../public/assets/photos/chef.jpg";

// data/team.ts
const teamMembers = [
  {
    name: "Mark Henry",
    role: "Owner",
    image: chef,
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    image: chef,
  },
  {
    name: "Moon Henry",
    role: "Founder",
    image: chef,
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    image: chef,
  },
];

export default function TeamSection() {
  return (
    <section className="relative">
      <div className="bg-[#AD1519D9] h-[430px] text-white text-center py-12 px-4">
        <h2 className="text-[48px] font-bold">Team Member</h2>
        <p className="mt-2 max-w-xl mx-auto text-[16px] md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative bottom-64">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
