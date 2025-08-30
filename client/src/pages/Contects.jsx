import React from 'react';
import emailjs from '@emailjs/browser';

const Contects = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qpu3xym',
      'template_5cwy0f8', 
      e.target,
      'AGmSFXI0teVQpgA9H'
    )
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((err) => {
      alert('Failed to send message: ' + err.text);
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-3">
          Have questions or need help? Fill out the form below or reach us directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input 
              name="user_name"
              type="text" 
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input 
              name="user_email"
              type="email" 
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea 
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        <div className="bg-gradient-to-b from-teal-50 to-orange-100 p-8 rounded-2xl shadow-md flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">📍 Address</h2>
            <p className="text-gray-700 mt-1">Jaipur, Rajasthan, India</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">📧 Email</h2>
            <p className="text-gray-700 mt-1">anshul.k.002414@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">📞 Phone</h2>
            <p className="text-gray-700 mt-1">+918005576612</p>
          </div>

          <iframe
            title="map"
            className="w-full h-56 rounded-lg border-none mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.089504151893!2d75.78727055!3d26.9124339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ce5aadcdf9%3A0x2a5e42d3b2b2bb1a!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contects;
