

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Kulkarni',
    location: 'Pune',
    text: "After moving to Pune for my job, I was searching for a place that was both affordable and comfortable. Nestaway made the process incredibly easy, and I found a semi-furnished apartment in a great locality. The entire experience has been seamless, and the maintenance services are top-notch. I would definitely recommend Nestaway to anyone new to Pune.",
    image: 'https://i.pinimg.com/originals/6c/ed/56/6ced56ed5358c9937230cb972cc3dab6.png',
  },
  {
    name: 'Sneha Patil',
    location: 'Pune',
    text: 'Nestaway helped me find the perfect home near my college. The apartment is well-maintained, and the staff is always available to assist. It made my transition to Pune stress-free. I highly recommend their services.',
    image: 'https://harunmudak.com/wp-content/uploads/2020/12/girl-cartoon-characters-3.jpg',
  },
  {
    name: 'Ajay Deshmukh',
    location: 'Pune',
    text: 'Finding a good apartment in Pune within my budget was challenging until I found Nestaway. The process was smooth, and the place I found is well-located and clean .',
    image: 'https://img.freepik.com/premium-vector/cute-cartoon-boy-face-vector-design-with-white-background_911078-1747.jpg?w=2000'
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="my-12 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg shadow-lg p-8">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Our Happy Customers</h2>
      <div className="flex items-center justify-between">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>

        <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
          <div className="relative">
            <Quote size={48} className="absolute -top-4 -left-4 text-blue-200 opacity-50" />
            <p className="italic text-xl leading-relaxed text-gray-700 text-center px-12">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full border-2 border-white shadow-md"
            />
            <div className="text-left">
              <p className="font-semibold text-lg text-gray-800">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;