import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        {/* Left — Brand & copyright */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            MyAwesomeSite
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MyAwesomeSite. All rights reserved.
          </p>
        </div>

        {/* Middle — Nav links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right — Social icons */}
        <div className="flex gap-4 text-xl">
          <Link
            href="https://github.com/your-handle"
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/your-handle"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://twitter.com/your-handle"
            aria-label="Twitter"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
