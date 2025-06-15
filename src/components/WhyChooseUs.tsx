"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/constants";
import type { FeatureItem } from "@/types";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-400">
            Why Choose MUSBAHDEV?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What sets us apart from the competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature: FeatureItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
            >
              <div className="text-3xl mb-4">{feature.emoji}</div>
              <h3 className="text-lg font-bold mb-2 text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
