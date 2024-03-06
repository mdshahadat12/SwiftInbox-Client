import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import { useState } from "react";

const Faq = () => {
  // State to manage which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle FAQ item expansion
  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section>
      <Particlesanimation2 />
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-semibold text-accent text-center mb-3 md:mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4 md:space-y-6 text-white">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 md:p-6">
              <button
                className="flex justify-between items-center w-full p-2 md:p-4 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h2 className="text-lg md:text-xl font-semibold">{item.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${
                    expandedItems.includes(index) ? "transform rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {expandedItems.includes(index) && (
                <p className="p-2 text-sm md:text-lg  md:p-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Data for FAQ items
const faqData = [
  {
    question: "How does the temporary email service work?",
    answer:
      "Our temporary email service generates a unique email address for you to use for a limited time. Any emails sent to this address will be forwarded to your real email address, ensuring your privacy.",
  },
  {
    question: "How long can I use the temporary email address?",
    answer:
      "You can use the temporary email address for as long as you need, depending on the service you choose. We offer various time durations to suit your requirements.",
  },
  {
    question: "Is the temporary email service secure?",
    answer:
      "Yes, our temporary email service is designed with security in mind. We do not store any of your emails on our servers, and the temporary email address expires after a set period, ensuring your privacy.",
  },
  {
    question: "Can I use the temporary email address for verification?",
    answer:
      "Absolutely! Our temporary email service is perfect for verification purposes. Simply use the generated email address during sign-up or verification processes.",
  },
  {
    question: "Are there any limitations on the temporary email service?",
    answer:
      "While there are no strict limitations, we encourage responsible use of our service. Please avoid using it for any illegal or malicious activities.",
  },
  {
    question: "How do I access my temporary email inbox?",
    answer:
      "Once you've generated a temporary email address, you can access its inbox by visiting our website and entering the email address you've been provided. You can then view any emails that have been forwarded to your real email address.",
  },
  {
    question: "Can I send emails from my temporary email address?",
    answer:
      "No, our temporary email service is designed for receiving emails only. You cannot send emails from the temporary email address provided.",
  },
  {
    question: "Do you offer customer support for the temporary email service?",
    answer:
      "Yes, we provide customer support to assist with any questions or issues you may encounter while using our temporary email service. You can reach out to our support team through our website.",
  },
];

export default Faq;
