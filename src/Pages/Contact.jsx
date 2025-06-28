import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import Header from "../Components/Header";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (

        <div className="">
            <div className=" pt-10">
            <Header
                subtitle={'Want to talk to me?'}
                title={'Lets Contact'}
            ></Header>
            </div>
            <section className="min-h-screen flex items-center justify-center bg-white px-6">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side */}
                    <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0 bg-gray-900 rounded-xl p-10  shadow-lg text-gray-100 space-y-8 border border-gray-700">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white">
                            Get In Touch
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Have a project, idea, or just want to say hi? I’m open to collaboration and always happy to connect. Reach out through any of the options below or send me a message.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-blue-400 text-xl" />
                                <a
                                    href="mailto:youremail@example.com"
                                    className="text-gray-200 hover:text-blue-300 transition duration-300"
                                >
                                    youremail@example.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt className="text-blue-400 text-xl" />
                                <a
                                    href="tel:+880123456789"
                                    className="text-gray-200 hover:text-blue-300 transition duration-300"
                                >
                                    +880 1234 56789
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                                <span className="text-gray-200">Daffodil International University, Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        <div className="flex space-x-8 text-blue-400 text-2xl mt-10">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-300 transition duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-300 transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-300 transition duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>


                    {/* Right Side - Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-50 rounded-lg shadow-lg p-10 max-w-md mx-auto w-full"
                        noValidate
                    >
                        {/* Name */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                            >
                                Name
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                            >
                                Email
                            </label>
                        </div>

                        {/* Subject */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="subject"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                            >
                                Subject
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative z-0 w-full mb-8 group">
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold transition duration-300"
                        >
                            Send Message
                        </button>

                        {submitted && (
                            <p className="text-green-600 mt-6 text-center font-semibold animate-fadeIn">
                                Thank you! Your message has been sent.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
