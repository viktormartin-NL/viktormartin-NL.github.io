import { FiSend } from "react-icons/fi";
import FormInput from "../reusable/FormInput";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col 2xl:px-12 w-full lg:w-1/2 bg-gray-100 dark:bg-[#101111] rounded-xl shadow-lg shadow-gray-400/30 dark:shadow-black/30"
    >
      <div className="leading-loose">
        <form
          action="https://getform.io/f/e05b6bc9-032c-4a2c-a5af-ff2107822d78"
          method="POST"
          className="max-w-xl p-5 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl text-left"
        >
          {/* <h4 className="font-medium text-neutral-600 dark:text-neutral-200 text-2xl mb-8">
            <Reveal width="100%">Leave a Message</Reveal>
          </h4> */}
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="">
            <label
              className="block text-lg text-amber-600 dark:text-amber-500 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 bg-white dark:bg-[#0a0a0a] dark:text-white rounded-md shadow-sm text-md resize-none"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              placeholder="Say what you have on your mind"
            ></textarea>
          </div>

          <div className="flex items-center justify-center pb-5 md:pb-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <div className="absolute mt-10 -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-50 group-hover:scale-105 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt z-0"></div>
              <button className="group relative flex items-center justify-center mt-10 bg-white dark:bg-[#0d0c0e] bg-transparent hover:bg-amber-500 dark:hover:bg-amber-500 py-2 rounded-xl font-semibold tracking-[1px] hover:text-black duration-300 px-7 cursor-pointer">
                Send
                <FiSend className="ml-2" />
              </button>
            </motion.div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
