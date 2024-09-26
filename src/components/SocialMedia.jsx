import { Instagram } from "lucide-react";

import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-2">
      <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
