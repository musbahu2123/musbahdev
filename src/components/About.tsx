"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Add this import

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-400">
            About MUSBAHDEV ENTERPRISES
          </h2>

          <div className="space-y-6 text-gray-300">
            <p>
              MUSBAHDEV ENTERPRISES is a sole proprietorship business duly
              registered under the Laws of the Federal Republic of Nigeria, with
              its office located at 166 Kansakali Quarters, Kano State.
            </p>

            <p>
              Founded and led by Musbahu Aminu Bala, we are dedicated to
              empowering individuals and businesses through innovative Value
              Added Services (VAS). Our commitment is to deliver efficient,
              reliable, and cutting-edge solutions that drive growth and
              convenience for our clients.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Our Vision
              </h3>
              <p>
                To be the leading provider of value-added services in Nigeria,
                recognized for innovation, reliability, and customer
                satisfaction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Our Mission
              </h3>
              <p>
                To provide accessible and high-quality digital solutions that
                simplify processes, enhance connectivity, and create value for
                our diverse clientele.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Legal Compliance
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/cac/cac-badge.png"
                  alt="CAC Registered Business"
                  fill
                  className="object-contain"
                  priority // Add this if it's above the fold
                />
              </div>
              <div className="text-left">
                <p className="text-gray-300">
                  MUSBAHDEV ENTERPRISES is duly registered with the Corporate
                  Affairs Commission (CAC) under the Laws of the Federal
                  Republic of Nigeria.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Registration Number: [Your CAC Registration Number]
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
