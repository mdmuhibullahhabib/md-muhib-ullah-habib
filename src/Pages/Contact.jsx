import React, { useState } from "react";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaGlobe,
} from "react-icons/fa";
import Header from "../Components/Header";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Contact = () => {

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value

        const messageData = { name, email, subject, message }
        console.log(messageData)

        const res = await axios.post('https://md-muhib-ullah-habib-server.vercel.app/message', messageData);
        if (res.data.insertedId) {
            console.log('add to database', res.data)
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for your message.',
                confirmButtonColor: '#3085d6'
            });
            form.reset();
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact - Md. Muhib Ullah Habib</title>
            </Helmet>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 sm:px-6 py-16">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-0">

                    {/* Left Side */}
                    <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0 bg-white/5 backdrop-blur-xl rounded-xl p-10 shadow-2xl text-gray-100 space-y-8 border border-white/10">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Get In Touch
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Have a project, idea, or just want to say hi? I’m open to collaboration and always happy to connect. Reach out through any of the options below or send me a message.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-cyan-400 text-xl" />
                                <a
                                    href="mailto:mdmuhibullahhabib6348@gmail.com"
                                    className="text-gray-200 hover:text-cyan-300 transition duration-300"
                                >
                                    mdmuhibullahhabib6348@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaGlobe className="text-cyan-400 text-xl" />
                                <a
                                    href="https://mdmuhibullahhabib.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-cyan-300 transition duration-300"
                                >
                                    www.mdmuhibullahhabib.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                                <span className="text-gray-200">Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        <div className="flex space-x-8 text-cyan-400 text-2xl mt-10">
                            <a
                                href="https://www.facebook.com/mdmuhibullah.habib"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-300 transition duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://linkedin.com/in/muhibullah-habib-8b107a278"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-300 transition duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/mdmuhibullahhabib"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-cyan-300 transition duration-300"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form (no change needed here, but you can also apply backdrop if desired) */}
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
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
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
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
