import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  const NavData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Explore", link: "/RecipeDetail" },
    { id: 3, title: "Favourites", link: "/RecipeDetails" },
  ];

  return (
    <>
      <nav className="w-full bg-black h-[5rem] text-white flex items-center">
        <ul className="flex gap-6 w-full justify-around items-center">
          <img className="w-[80px]" src={Logo} alt="Logo" />
          <div>
            <span className="font-bold text-xl">Flavor</span>
            <span className="text-green-500 text-2xl">Verse</span>
          </div>
          <div className="w-[50rem] flex justify-center gap-7">
            {NavData.map((items) => (
              <li key={items.id}>
                <a href={items.link}>{items.title}</a>
              </li>
            ))}
          </div>
          <Link className="p-4 bg-white text-black rounded-full " to="/Login">
            Sign In
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-4">
//             <div>
//               <a href="#" className="flex items-center py-5 px-2 text-gray-700">
//                 <span className="font-bold">Brand</span>
//               </a>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <a href="#" className="py-5 px-3 hover:text-gray-400">Home</a>
//               <a href="#" className="py-5 px-3 hover:text-gray-400">About</a>
//               <a href="#" className="py-5 px-3 hover:text-gray-400">Services</a>
//               <a href="#" className="py-5 px-3 hover:text-gray-400">Contact</a>
//             </div>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path d="M6 18L18 6M6 6l12 12"></path>
//                 ) : (
//                   <path d="M4 6h16M4 12h16M4 18h16"></path>
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
