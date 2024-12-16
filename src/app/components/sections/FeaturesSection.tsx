'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "Günlük Meditasyonlar",
    image: "/placeholder.svg?height=400&width=200",
    description: "Her gün yeni, rehberli meditasyonlarla iç huzurunuzu bulun.",
  },
  {
    title: "Kişisel Olumlamalar",
    image: "/placeholder.svg?height=400&width=200",
    description: "Size özel hazırlanmış olumlamalarla pozitif düşünceyi güçlendirin.",
  },
  {
    title: "Enerji Takibi",
    image: "/placeholder.svg?height=400&width=200",
    description: "Günlük enerji seviyenizi takip edin ve dengenizi koruyun.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-serif text-center text-white mb-16">Uygulama Özellikleri</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <Image
                src={feature.image}
                alt={feature.title}
                width={200}
                height={400}
                className="rounded-3xl shadow-xl border-2 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}