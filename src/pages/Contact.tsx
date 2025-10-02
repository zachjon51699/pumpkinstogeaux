import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Preferred Contact: ${formData.preferredContact}

Message:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:laurennicole2122@yahoo.com?subject=New Contact Form Submission - ${formData.subject}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert('Your email client will open with the message ready to send. Please click send to submit your inquiry to laurennicole2122@yahoo.com');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: "(225) 368-7376",
      description: "Call us for immediate assistance",
      color: "text-orange-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: "laurennicole2122@yahoo.com",
      description: "Send us a message anytime",
      color: "text-green-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Service Area",
      details: "Greater Baton Rouge",
      description: "& surrounding parishes",
      color: "text-amber-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Hours",
      details: "Mon-Sat 8am-6pm",
      description: "Sunday by appointment",
      color: "text-yellow-600"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-3 days in advance, especially for weekends. However, we often accommodate same-day requests when possible!"
    },
    {
      question: "What happens if it rains after setup?",
      answer: "Our displays are designed to withstand typical Louisiana weather. If severe weather damages your display, just give us a call and we'll make it right."
    },
    {
      question: "Can you match my home's color scheme?",
      answer: "Absolutely! We love customizing displays to complement your home. Just let us know your preferences when booking."
    },
    {
      question: "Do you offer payment plans?",
      answer: "We accept payment upon completion of setup. For larger custom displays, we can discuss payment arrangements."
    },
    {
      question: "What if I'm not home during setup?",
      answer: "No problem! Many of our customers aren't home during setup. We'll send you photos when we're finished and follow up to make sure you love it."
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-orange-100 mb-8">
            Questions about our services? Ready to book? We'd love to hear from you!
          </p>
          <div className="flex justify-center space-x-4 text-4xl">
            <span>💬</span>
            <span>🎃</span>
            <span>⚜️</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageCircle className="w-8 h-8 text-orange-600 mr-3" />
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="(225) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="general">General Question</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="custom">Custom Package Quote</option>
                      <option value="service">Service Area Question</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-600"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-600"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="either"
                        checked={formData.preferredContact === 'either'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-600"
                      />
                      Either
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your porch, what you're looking for, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Business Info & About */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About Pumpkins to Geaux</h2>
              
              <div className="bg-white rounded-xl p-8 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-2xl">
                    👭
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mama-Run Business</h3>
                    <p className="text-gray-600">Local Louisiana family serving our community</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  We're a mama-owned business who fell in love with bringing fall magic to front porches across 
                  Baton Rouge. What started as decorating our own homes has grown into a passion for 
                  helping our neighbors celebrate the season in style.
                </p>
                <p className="text-gray-700">
                  Every display we create is designed with Louisiana charm and attention to detail. 
                  We source our pumpkins locally and add that special touch that makes each porch unique.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚜️</span>
                  Louisiana Proud
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-3">•</span>
                    <span>Local pumpkin sourcing from Louisiana farms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-3">•</span>
                    <span>Fleur-de-lis and Louisiana-themed accents available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-3">•</span>
                    <span>Supporting local businesses and community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-3">•</span>
                    <span>Bringing neighbors together through beautiful displays</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your question answered here?
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-900">Call us at </span>
              <span className="text-orange-500 font-bold">(225) 368-7376</span>
              <span className="text-gray-600"> or send us a message above!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-xl text-orange-100 mb-8">
            Ready to transform your porch into a fall masterpiece?
          </p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
            Book Your Display Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;