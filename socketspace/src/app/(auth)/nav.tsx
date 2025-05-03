"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  SignedIn,
  SignedOut
} from "@clerk/nextjs";

export default function Navbar() {
  const [activeDialog, setActiveDialog] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const openDialog = (dialogName: string) => {
    setActiveDialog(dialogName);
    setIsMenuOpen(false); // Close menu on mobile when dialog opens
  };

  const closeDialog = () => setActiveDialog("");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-blue-800 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Socketspace
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button onClick={toggleMenu} className="md:hidden text-blue-300 hover:text-blue-100 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => openDialog('contact')} className="text-blue-300 hover:text-blue-100 transition">Contact Us</button>
            <button onClick={() => openDialog('guidelines')} className="text-blue-300 hover:text-blue-100 transition">Guidelines</button>
            <button onClick={() => openDialog('about')} className="text-blue-300 hover:text-blue-100 transition">About Us</button>

            <SignedIn>
              <div className="flex items-center space-x-4">
                <span className="text-blue-300">{user?.firstName ? `Hi, ${user.firstName}` : 'Welcome'}</span>
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
              <div className="flex items-center space-x-3">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium border border-blue-600 text-blue-300 hover:bg-blue-800 hover:bg-opacity-20 rounded-md transition">Sign Up</button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 px-2">
            <button onClick={() => openDialog('contact')} className="block w-full text-left text-blue-300 hover:text-blue-100 transition">Contact Us</button>
            <button onClick={() => openDialog('guidelines')} className="block w-full text-left text-blue-300 hover:text-blue-100 transition">Guidelines</button>
            <button onClick={() => openDialog('about')} className="block w-full text-left text-blue-300 hover:text-blue-100 transition">About Us</button>

            <SignedIn>
              <div className="mt-2 flex items-center justify-between px-2">
                <span className="text-blue-300">{user?.firstName ? `Hi, ${user.firstName}` : 'Welcome'}</span>
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
              <div className="flex flex-col gap-2 mt-2">
                <SignInButton mode="modal">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full px-4 py-2 text-sm font-medium border border-blue-600 text-blue-300 hover:bg-blue-800 hover:bg-opacity-20 rounded-md transition">Sign Up</button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        )}
      </nav>

      {/* Dialog Logic (unchanged) */}
      {activeDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={closeDialog}></div>
          <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl shadow-2xl border border-blue-700 p-6 w-full max-w-md m-4 z-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-300">
                {activeDialog === 'contact' && 'Contact Us'}
                {activeDialog === 'guidelines' && 'Guidelines'}
                {activeDialog === 'about' && 'About Us'}
              </h3>
              <button onClick={closeDialog} className="text-gray-300 hover:text-white transition">
                <X size={20} />
              </button>
            </div>
            <div className="text-blue-100">
              {activeDialog === 'contact' && (
                <div>
                  <p className="mb-4">Have questions or need assistance? We&apos;re here to help!</p>
                  <ul className="space-y-2">
                    <li><span className="text-blue-300 mr-2">Email:</span> sjce.nagarjunts@gmail.com</li>
                    <li><span className="text-blue-300 mr-2">Phone:</span> +91 7975574903</li>
                    <li><span className="text-blue-300 mr-2">Hours:</span> Monday - Friday, 9am - 5pm IND</li>
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
                  <p className="mb-4">Socketspace is a modern communication platform with a mission to make real-time messaging secure, fast, and accessible.</p>
                  <p>This is basically a small mini project idea.  {"It's"} a simple yet effective.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
