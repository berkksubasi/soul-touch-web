import { ChevronRight, Text } from 'lucide-react';
import { Button } from '../ui/Buttons';
import Image from 'next/image';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

export function CTA() {
  return (
    <section className="py-12 text-center rounded-lg shadow-lg mt-12">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-6">
        Dönüşümünüz Burada Başlıyor
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Hayatınızı değiştirecek adımı atın ve dönüşümünüze şimdi başlayın.
      </p>
      <Text style={{ backgroundColor: 'gradient' }}>
        Hemen İndir ve Dönüşümünü Başlatın
      </Text>
      <div className="mt-6 flex justify-center items-center md:justify-center md:items-center space-x-4">
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
          <span className='text-sm'>Google Play</span>
        </a>
      </div>
    </section>
  );
}
