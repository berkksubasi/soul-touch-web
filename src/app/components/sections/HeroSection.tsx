'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HeroSection() {
  return (
    <header className="h-screen text-black flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className=" mt-4 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
            Soul Touch ile Ruhuna Dokun
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-md lg:max-w-lg mb-8 leading-relaxed">
            Kendinizi yeniden keşfedin, dengeli bir yaşam için doğru adımları atın. Ruhunuz için eşsiz bir deneyime hazır olun.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-blue-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md text-lg font-medium flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
              <SiAppstore className="text-2xl" />
              <span className="text-sm">App Store</span>
            </a>
            <a
              href="#"
              className="bg-green-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md text-lg font-medium flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
              <SiGoogleplay className="text-2xl" />
              <span className="text-sm">Google Play</span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="md:w-1/2 flex justify-center md:justify-end relative"
        >
          <div className="relative w-80 h-[28rem] md:w-[24rem] md:h-[36rem] lg:w-[28rem] lg:h-[40rem]">
            <Image
              src="/placeholder.png?height=800&width=400"
              alt="SoulTouch App Preview"
              layout="fill"
              className="object-contain mt-2"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
