import { motion } from "framer-motion";
import { useRef } from "react";
import { social_links } from "../../utilities/constant";
import { HiOutlineMail } from "react-icons/hi";
// Assuming you're using react-feather for icons
const ContactUs = () => {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Add your submission logic here
        console.log("Form Submitted:", { name, email, message });

        form.current.reset(); // Optional: Reset form after submission
    };

    return (
        <section id="contact" className="relative py-20 px-4 overflow-hidden">
            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
                    <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
                        07.
                    </span>
                    <h2 className="text-sectionHeading">Get in Touch</h2>
                    <div className="block sm:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px] "></div>
                    <div className="hidden sm:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] ml-[20px]"></div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <motion.div initial={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        animate={{ opacity: 1 }}
                        target="_blank" className="relative transition-all duration-200 ease-in-out">
                        <div className="w-full h-ful rounded-lg  bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 duration-200 transition-transform    group   items-start relative  px-7 py-8     ease-in-out overflow-auto shadow-aboutShadow cursor-pointer">
                            <p className="text-gray-300 mb-8">
                                I'm an email away for all your constructive feedback, improvement suggestions, remarkable ideas, fun collaboration, tech discussions, mutual networking or to meet over a coffee.
                                <br />

                                I'm always open to new collaborations! Drop a message anytime.
                            </p>
                            <div className="space-y-4">
                                {social_links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 text-themeBlue hover:underline"
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        animate={{ opacity: 1 }}
                        target="_blank" className="relative transition-all duration-200 ease-in-out"
                    >
                        <div className="w-full h-ful rounded-lg  bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 duration-200 transition-transform    group   items-start relative  px-7 py-8     ease-in-out overflow-auto shadow-aboutShadow cursor-pointer">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-500/50 text-white"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-500/50 text-white"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                required
                                className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-500/50 text-white"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
