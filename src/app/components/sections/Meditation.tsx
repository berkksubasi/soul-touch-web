import Image from 'next/image';
import { Card, CardContent } from '../ui/Card';

export function Meditation() {
  const affirmations = [
    'Bugün yaşam beni destekliyor',
    'Her gün daha güçlü ve daha iyiyim',
    'Sınırsız potansiyele sahibim',
  ];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
        Zihniniz ve Ruhunuz için ilham
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="aspect-square bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={`/images/meditation${index}.webp`}
              alt={`Meditation ${index}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {affirmations.map((affirmation, index) => (
          <Card
            key={index}
            className="group relative bg-gradient-to-br from-indigo-100 to-purple-200 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            <CardContent className="relative p-6 text-center z-10">
              <p className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {affirmation}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

    </section>
  );
}
