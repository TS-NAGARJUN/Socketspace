"use client"

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Shield, Layout, X, User, LogOut } from 'lucide-react';
import { 
  SignInButton, 
  SignUpButton, 
  UserButton, 
  useUser,
  SignedIn,
  SignedOut
} from "@clerk/nextjs";

export default function Navbar() {
  const [activeDialog, setActiveDialog] = useState(null);
  const { isSignedIn, user } = useUser();

  const openDialog = (dialogName) => {
    setActiveDialog(dialogName);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-blue-800 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Socketspace
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => openDialog('contact')}
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => openDialog('guidelines')}
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Guidelines
            </button>
            <button
              onClick={() => openDialog('about')}
              className="text-blue-300 hover:text-blue-100 transition"
            >
              About Us
            </button>
            
            {/* Clerk Authentication */}
            <SignedIn>
              {/* User is signed in */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-300">
                  {user?.firstName ? `Hi, ${user.firstName}` : 'Welcome'}
                </span>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8 border-2 border-blue-400 rounded-full"
                    }
                  }}
                />
              </div>
            </SignedIn>
            
            <SignedOut>
              {/* User is signed out */}
              <div className="flex items-center space-x-3">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
                    Sign In
                  </button>
                </SignInButton>
                
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium border border-blue-600 text-blue-300 hover:bg-blue-800 hover:bg-opacity-20 rounded-md transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </nav>

      {/* Dialog Boxes */}
      {activeDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div 
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={closeDialog}
          ></div>
          <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl shadow-2xl border border-blue-700 p-6 w-full max-w-md m-4 z-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-300">
                {activeDialog === 'contact' && 'Contact Us'}
                {activeDialog === 'guidelines' && 'Guidelines'}
                {activeDialog === 'about' && 'About Us'}
              </h3>
              <button 
                onClick={closeDialog}
                className="text-gray-300 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="text-blue-100">
              {activeDialog === 'contact' && (
                <div>
                  <p className="mb-4">Have questions or need assistance? We're here to help!</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-300 mr-2">Email:</span> sjce.nagarjunts@gmail.com
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-300 mr-2">Phone:</span> +91 7975574903
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-300 mr-2">Hours:</span> Monday - Friday, 9am - 5pm IND
                    </li>
                  </ul>
                </div>
              )}
              
              {activeDialog === 'guidelines' && (
                <div>
                  <p className="mb-4">To ensure a positive experience for all users:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Respect other users and their privacy</li>
                    <li>Avoid sharing sensitive personal information</li>
                    <li>Report any issues or violations immediately</li>
                    <li>Keep communications professional and appropriate</li>
                    <li>Follow our Terms of Service at all times</li>
                  </ul>
                </div>
              )}
              
              {activeDialog === 'about' && (
                <div>
                  <p className="mb-4">Socketspace is a modern communication platform whose mission to make real-time messaging secure, fast, and accessible.</p>
                  <p>This is basically a small mini project idea </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
}