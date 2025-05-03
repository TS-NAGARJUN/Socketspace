"use client"

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { MessageSquare, Shield, Layout } from 'lucide-react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  
  const fullText = "A modern, real-time communication platform designed for fast, secure, and efficient messaging between users.";

  const colors = [
    'text-blue-400',
    'text-indigo-400',
    'text-purple-400',
    'text-teal-400',
    'text-cyan-400'
  ];
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typedText]);

  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500);
    return () => clearInterval(colorTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-12 pt-16">
          <div className="relative overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 p-4 sm:p-6 backdrop-blur-sm border border-blue-800">
            <div className="absolute -inset-1 rounded-lg opacity-50 blur-lg animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"></div>
            <div className="relative">
              <p className={`text-xl sm:text-2xl tracking-wide ${colors[colorIndex]} transition-colors duration-700`}>
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </header>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-800 bg-opacity-70 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-xl border border-blue-800">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-300 text-center lg:text-left">Why Use Socketspace?</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <MessageSquare size={20} />,
                    title: "Instant Messaging",
                    desc: "Real-time chat powered by WebSockets (Socket.IO).",
                    color: "bg-blue-600"
                  },
                  {
                    icon: <Layout size={20} />,
                    title: "Sleek UI/UX",
                    desc: "Built with shadcn/ui components and Next.js.",
                    color: "bg-teal-600"
                  },
                  {
                    icon: <Shield size={20} />,
                    title: "Secure Authentication",
                    desc: "Enterprise-grade security to protect your communications.",
                    color: "bg-green-600"
                  }
                ].map(({ icon, title, desc, color }, i) => (
                  <div key={i} className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                    <div className={`mt-1 p-2 rounded-lg animate-pulse ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{title}</h3>
                      <p className="text-blue-200">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <button className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200 animate-gradient-x"></div>
                  <div className="relative flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-full shadow-lg transition group-hover:-translate-y-1 group-hover:scale-105">
                    <div className="mr-3 bg-green-500 text-green-100 rounded-full p-1 group-hover:animate-bounce">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="font-bold text-base sm:text-lg">GET STARTED</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative animate-float w-full max-w-sm mx-auto lg:mx-0">
              <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl border-4 border-gray-700">
                <div className="bg-gray-900 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-b from-blue-900 to-gray-900 p-6 text-center h-96 flex flex-col items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-300 animate-pulse">CONNECT</h2>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-300 animate-pulse">WITH ME</h2>

                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-full p-1 mb-8 animate-pulse">
                      <div className="bg-blue-100 rounded-full w-full h-full flex items-center justify-center relative">
                        <Image 
                          src="/avatar.png" 
                          alt="User avatar" 
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Pulses */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-teal-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
