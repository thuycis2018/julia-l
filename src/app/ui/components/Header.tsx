"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComments, faCode, faBars, faFolder } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans bg-green-1">
      <nav className="bg-brown-1 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Julia Le
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
          <div className={`flex-col md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
            <a href="/" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faHouse} className="mr-2 fa-sm" /> Home
            </a>
            <a href="/case-studies" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faFolder} className="mr-2 fa-sm" /> Case Study
            </a>
            <a href="/testimonials" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faComments} className="mr-2 fa-sm" /> Testimonials
            </a>
            <a href="/playground" className="mt-4 md:mt-0 md:ml-10">
              <FontAwesomeIcon icon={faCode} className="mr-2 fa-sm" /> Playground
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
