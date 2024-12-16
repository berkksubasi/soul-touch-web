import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

export function Testimonials() {
  const testimonials = [
    { name: 'Ayşe Y.', text: 'Numeroloji analizim bana kendimi daha iyi tanımam için rehber oldu. Hayatımın anlamını yeniden keşfettim.' },
    { name: 'Mehmet K.', text: 'Doğum tarihime dayalı analizler sayesinde hayatımdaki fırsatları ve potansiyelimi fark ettim.' },
    { name: 'Zeynep A.', text: 'Numerolojiyle, geçmişteki hatalarıma yeni bir perspektiften bakmayı ve geleceğe umutla bakmayı öğrendim.' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
        Kullanıcılarımızdan İlham Alın
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
          key={index}
          className="group relative flex flex-col items-center bg-gradient-to-r from-purple-200 to-blue-100 rounded-lg p-6 shadow-lg transition-shadow duration-300"
        >
            <CardContent>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-bold text-indigo-600">- {testimonial.name}</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}