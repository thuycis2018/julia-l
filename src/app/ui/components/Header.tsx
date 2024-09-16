"use client";
import { useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComments, faCode, faBars, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FaHome, FaComments, FaCode, FaBars, FaFolder,} from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return activeSegment === path ? 'font-bold' : '';
  };

  return (
    <div className="font-sans bg-green-1">
      <nav className="bg-brown-1 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Julia Le
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaBars className="inline text-xl" />
            </button>
          </div>
          <div className={`flex-col md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
            <Link href="/" className={`mt-4 md:mt-0 md:ml-10 ${isActive('/')}`}>
              <FaHome className="inline text-lg mb-2" /> Home
            </Link>
            <Link href="/case-studies" className={`mt-4 md:mt-0 md:ml-10 ${isActive('case-studies')}`}>
              <FaFolder className="inline text-lg mb-2" /> Case Study
            </Link>
            <Link href="/testimonials" className={`mt-4 md:mt-0 md:ml-10 ${isActive('testimonials')}`}>
              <FaComments className="inline text-lg mb-2" /> Testimonials
            </Link>
            <Link href="/playground" className={`mt-4 md:mt-0 md:ml-10 ${isActive('playground')}`}>
              <FaCode className="inline text-lg mb-2" /> Playground
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
