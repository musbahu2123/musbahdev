"use client"; //

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-400">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;d love to hear from you and discuss how we can help your
            business
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-8 md:p-12 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-teal-400" />
                <div>
                  <h4 className="font-semibold text-gray-300">Address</h4>
                  <p className="text-gray-400">
                    166 Kansakali Quarters, Kano State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-teal-400" />
                <div>
                  <h4 className="font-semibold text-gray-300">Phone</h4>
                  <a
                    href="tel:09034850157"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    09034850157
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-teal-400" />
                <div>
                  <h4 className="font-semibold text-gray-300">Email</h4>
                  <a
                    href="mailto:Musbahuameen2123@gmail.com"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Musbahuameen2123@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h4 className="font-bold text-gray-300 mb-4">Management</h4>
              <p className="text-gray-400">
                <span className="text-teal-400">MUSBAHU AMINU BALA</span> -
                Chief Executive Officer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
