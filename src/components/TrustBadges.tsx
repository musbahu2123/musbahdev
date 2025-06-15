"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-2">
              <Image
                src="/trust-badges/cac.png"
                alt="CAC Registered"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-300">CAC Registered</span>
          </div>

          {/* Add other trust badges as needed */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-2">
              <Image
                src="/trust-badges/secure.png"
                alt="Secure Payments"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-300">Secure Payments</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
