'use client'; // 

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <Link
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            >
              MUSBAHDEV
            </Link>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>
              &copy; {currentYear} MUSBAHDEV ENTERPRISES. All rights reserved.
            </p>
            <p className="mt-1">Designed and developed with passion.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
