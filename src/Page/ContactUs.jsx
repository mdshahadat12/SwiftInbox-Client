import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pxyrcyz",
        "template_8dn512p",
        form.current,
        "5Pvfyvswn_SbZTfcK"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully sent the message");
        },
        (error) => {
          toast.error("Message not sent");
          console.log(error.text);
        }
      );
  };

  const contact_info = [
    { icon: <FaEnvelope />, text: "codecrafters@gmail.com" },
    { icon: <FaWhatsapp />, text: "+8801860779884" },
    {
      icon: <FaMapMarkerAlt />,
      text: "1137, Nurerchala, Vatara, Ghulsan 1212",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white bg-base-200">
      <div className="text-center ">
        <h3 className="text-4xl font-semibold text-accent">
          Contact <span className="text-accent">Us</span>
        </h3>
        <p className="text-gray-600 mt-3 text-center max-w-[900px] mx-auto text-lg">
          Instantly generate temporary email addresses for secure and private
          communication. Utilize the form below to create a temporary email and
          begin receiving messages without compromising your personal
          information.
        </p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5 text-black"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="py-2 px-4 border border-cyan-500 rounded focus:outline-none focus:border-cyan-700"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email Address"
              className="py-2 px-4 border border-cyan-500 rounded focus:outline-none focus:border-cyan-700"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
              className="py-2 px-4 border border-cyan-500 rounded focus:outline-none focus:border-cyan-700"
            ></textarea>
            <button
              className="btn-primary w-fit mt-2 bg-accent hover:bg-accent-600 focus:outline-none focus:shadow-outline-cyan-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center text-white bg-accent rounded-full">
                  {contact.icon}
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
