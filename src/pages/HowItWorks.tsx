import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Choose Your Package',
      description: 'Select from our curated options or request a custom porch setup.'
    },
    {
      title: 'Book a Date',
      description: 'Pick your preferred delivery date and we’ll handle the rest.'
    },
    {
      title: 'We Deliver & Decorate',
      description: 'Our team brings everything and creates your beautiful fall porch display.'
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          From choosing your pumpkins to stepping out onto your fully styled fall porch — we make it simple and seamless.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="text-5xl text-orange-400 font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
