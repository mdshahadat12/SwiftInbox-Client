// components/WhyChooseUs.js

import { FaEnvelope, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-accent font-semibold text-center mb-4 lg:mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="border border-gray-300 rounded-lg shadow-md  overflow-hidden p-6 flex items-center justify-center flex-col">
            <FaEnvelope className="text-3xl lg:text-5xl text-accent  mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Dynamic Email Management</h3>
            <p className="text-center text-white">
              Experience real-time email management with our intuitive interface. We provide seamless email creation and organization, ensuring efficient communication.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden p-6 flex items-center justify-center flex-col">
            <FaMobileAlt className="text-3xl lg:text-5xl text-accent  mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Cross-Platform Accessibility</h3>
            <p className="text-center text-white">
            Access your temporary emails securely from any device. Our platform is optimized for both mobile and desktop, ensuring accessibility wherever you are.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden p-6 flex items-center justify-center flex-col">
            <FaShieldAlt className="text-3xl lg:text-5xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Privacy and Security</h3>
            <p className="text-white text-center">
              Your privacy is our priority. Rest assured that your emails are safe with us. We employ state-of-the-art security measures to protect your sensitive information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
