"use client";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative bg-black min-h-screen pt-20 overflow-x-hidden">
      {/* Static consistent background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center py-16 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
        >
          Ready to start your cloud journey? Connect with AWS Cloud Club CHARUSAT and become part of our innovative community.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-black/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-purple-200 leading-relaxed">
                      AWS Cloud Club, Charotar University of Science & Technology,
                      CHARUSAT Campus, Off. Nadiad-Petlad Highway, Changa, Anand,
                      Gujarat, India Pin - 388421
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-black/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <Link
                      href="mailto:awscloudclub@charusat.ac.in"
                      className="text-purple-300 hover:text-purple-100 transition-colors duration-200"
                    >
                      awscloudclub@charusat.ac.in
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="bg-black/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Globe className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-purple-300 hover:text-purple-100 transition-colors duration-200">
                        LinkedIn
                      </Link>
                      <Link href="#" className="text-purple-300 hover:text-purple-100 transition-colors duration-200">
                        Twitter
                      </Link>
                      <Link href="#" className="text-purple-300 hover:text-purple-100 transition-colors duration-200">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-black/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Find Us on Map</h3>
              <div className="w-full h-72 rounded-xl overflow-hidden border border-purple-600/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.405508484101!2d72.8172389648827!3d22.60132763516804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1669547931010!5m2!1sen!2sin"
                  title="charusat-map"
                  style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
