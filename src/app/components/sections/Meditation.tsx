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
        Zihniniz ve Ruhunuz için İlham
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {affirmations.map((affirmation, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full aspect-square overflow-hidden rounded-t-xl">
              <Image
                src={`/images/meditation${index + 1}.webp`}
                alt={`Meditation ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <Card
              className="w-full bg-gradient-to-br from-indigo-100 to-purple-200 rounded-b-xl transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <p className="text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors duration-300">
                  {affirmation}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
