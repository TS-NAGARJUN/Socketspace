"use client"

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { MessageSquare, Shield, Layout } from 'lucide-react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  
  const fullText = "A modern, real-time communication platform designed for fast, secure, and efficient messaging between users.";
  
  // Colors for the text animation
  const colors = [
    'text-blue-400',
    'text-indigo-400',
    'text-purple-400',
    'text-teal-400',
    'text-cyan-400'
  ];
  
  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typedText]);
  
  // Color cycling effect
  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500);
    return () => clearInterval(colorTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Header with animated text */}
        <header className="mb-12 pt-16">
          {/* Animated description text */}
          <div className="relative overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 p-6 backdrop-blur-sm border border-blue-800">
            {/* Animated glow effect */}
            <div className="absolute -inset-1 rounded-lg opacity-50 blur-lg animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"></div>
            
            <div className="relative">
              <p className={`text-2xl tracking-wide ${colors[colorIndex]} transition-colors duration-700`}>
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 backdrop-blur-sm shadow-xl border border-blue-800">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">Why Use Socketspace?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform">
                  <div className="mt-1 bg-blue-600 p-2 rounded-lg animate-pulse">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Instant Messaging</h3>
                    <p className="text-blue-200">Real-time chat powered by WebSockets (Socket.IO).</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform">
                  <div className="mt-1 bg-teal-600 p-2 rounded-lg animate-pulse">
                    <Layout size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sleek UI/UX</h3>
                    <p className="text-blue-200">Built with shadcn/ui components and Next.js for smooth, professional designs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform">
                  <div className="mt-1 bg-green-600 p-2 rounded-lg animate-pulse">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Secure Authentication</h3>
                    <p className="text-blue-200">Enterprise-grade security to protect your communications.</p>
                  </div>
                </div>
              </div>
              
              {/* 3D Button with enhanced animation */}
              <div className="mt-10 flex justify-center">
                <button className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200 animate-gradient-x"></div>
                  <div className="relative flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-full shadow-lg transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <div className="mr-3 bg-green-500 text-green-100 rounded-full p-1 group-hover:animate-bounce">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg">GET STARTED</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Phone mockup with animation */}
          <div className="lg:w-1/2">
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl border-4 border-gray-700">
                <div className="bg-gray-900 rounded-2xl overflow-hidden">
                  {/* Phone content */}
                  <div className="bg-gradient-to-b from-blue-900 to-gray-900 p-6 text-center h-96 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-2 text-blue-300 animate-pulse">CONNECT</h2>
                    <h2 className="text-3xl font-bold mb-8 text-blue-300 animate-pulse">WITH ME</h2>
                    
                    {/* Avatar - using Next.js Image component */}
                    <div className="w-24 h-24 bg-blue-600 rounded-full p-1 mb-8 animate-pulse">
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
                    
                    {/* Bottom phone elements */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
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
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}