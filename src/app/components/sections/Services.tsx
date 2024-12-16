import { Card, CardContent } from "../ui/Card";

export function Services() {
  const services = [
    { title: 'Access Bars', description: 'Zihinsel berraklık için rahatlatıcı bir dokunuş.' },
    { title: 'Healy Frekans Bio Rezonans', description: 'Frekanslarla sağlığınızı dengeleyin.' },
    { title: 'Kişisel Olumlama Önerileri', description: 'Ruhunuza uygun olumlamalarla motivasyon kazanın.' },
    { title: 'Online Koçluk', description: 'Hayatınızda yön bulmak için profesyonel rehberlik.' },
  ];

  return (
    <section className="bg-transparent">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Hizmetlerimiz
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Size en uygun çözümleri sunmak için buradayız.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group relative flex flex-col items-center bg-gradient-to-r from-purple-200 to-blue-100 rounded-lg p-6 shadow-lg transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            <CardContent className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
