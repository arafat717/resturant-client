import Image from "next/image";
import {
  FaPinterestP,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import {
  MdSend,
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdPhone,
} from "react-icons/md";
import instra from "../../../public/assets/photos/instragram.jpg";
import instraone from "../../../public/assets/photos/instraone.jpg";
import instratwo from "../../../public/assets/photos/instratwo.png";
import instrathree from "../../../public/assets/photos/instrathree.png";
const instraGallary = [
  instra,
  instraone,
  instratwo,
  instrathree,
  instraone,
  instra,
];
const Footer = () => {
  return (
    <footer className="bg-[#880808] text-white">
      <div className="max-w-[1300px] mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h2 className="text-[32px] font-bold mb-4">RESTAURANT</h2>
          <p>Subscribe our newsletter and get discount 25%off</p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 bg-white rounded-l-md text-black w-full"
            />
            <button className=" bg-[#A52A2A] text-whitep-2 rounded-r-md">
              <MdSend className="size-10 p-2" />
            </button>
          </div>
          <div className="flex space-x-3 mt-4 text-lg">
            <FaPinterestP />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaHeart />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-[20px]">Contact us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MdLocationOn className="mr-2" />
              3517 W. Gray St. Utica, Pennsylvania 57867
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2" />
              (480) 555-0103
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" />
              M.Alyaqout@4house.Co
            </li>
            <li className="flex items-center">
              <MdAccessTime className="mr-2" />
              Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[20px]">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Menu</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h3 className="font-semibold mb-4 text-[20px]">Instagram Gallery</h3>
          <div className="grid grid-cols-3 gap-1">
            {instraGallary.map((item, index) => (
              <div
                key={index}
                className="bg-white aspect-square rounded overflow-hidden"
              >
                <Image
                  src={item}
                  alt={`Gallery ${item}`}
                  height={110}
                  width={110}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-[#A52A2A]  px-6 py-4">
        <div className="max-w-[1300px] mx-auto text-sm text-white flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2025. All rights reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
