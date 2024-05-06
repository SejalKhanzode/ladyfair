import React from 'react';

const services = [
  {
    title: 'HAIR',
    image: 'https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES%202/1336x360/JPEGS/Priv_Hair_1336x360_R4.jpg',
  },
  {
    title: 'NAILS',
    image: 'https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES%202/1336x360/JPEGS/Priv_Nails_1336x360_R4.jpg',
  },
  {
    title:'MAKEUP',
    image:'https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES 2/1336x360/JPEGS/Priv_Makeup_1336x360_R4.jpg'
  },
  {
    title: 'MASSAGE',
    image: 'https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES%202/1336x360/JPEGS/Priv_Spa_1336x360_R4.jpg',
  },
  {
    title: 'FACIALS',
    image: 'https://priv-image-assets.s3.us-west-2.amazonaws.com/nwb/facial_horizontal.png',
  },
  {
    title: 'SPRAY TAN',
    image: 'https://priv-image-assets.s3.us-west-2.amazonaws.com/nwb/spray_horizontal.png',
  },
  {
    title: 'EAR PIERCING',
    image: 'https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES%202/1336x360/JPEGS/Priv_Ear_Piercing_1336x360_R3.jpg',
  },
  {
    title: 'BRIDAL',
    image: 'https://priv-service-photos-q3-2018.s3.amazonaws.com/R4_SERVICES%202/1336x360/JPEGS/Bridal.jpg',
  },
  
];


const ServicesProvided = () => {
  return (
    <section className="bg-pink-50 py-20">
      <div className="pl-24 pr-24 pt-8 bg-pink-50 pb-8 lg:w-[100%] container mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-6">OUR EXPANDED <span className="font-semibold text-rose-600">
            SIGNATURE SERVICES
          </span></h2>
        <p className="text-center text-lg text-gray-700 mb-12">availability may vary by city</p>

        <div className="grid gap-8 lg:grid-cols-2  sm:grid-cols-1">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto transform scale-100 transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-rose-600 bg-opacity-0 hover:bg-opacity-90 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesProvided;