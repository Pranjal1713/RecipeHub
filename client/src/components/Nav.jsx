import { useState } from "react";
import logo from "../assets/recipe-logo.png";
// const logo = "https://e7.pngegg.com/pngimages/854/415/png-clipart-recipe-cooking-chef-dish-food-cooking-food-recipe-thumbnail.png"

import SignInSignUpModal from "./routes/SignInSignUpModal";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Track if modal is for SignUp
  const [TrackLogin, setTrackLogin] = useState(false); // Track if user is logged in

  const openModal = (signUp = false) => {
    setIsSignUp(signUp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-400 to-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img className="h-8 w-13" src={logo} alt="Logo" />
            </a>
            <div className="hidden md:flex space-x-4 ml-10">
              <a
                href="/recipes"
                className="text-gray-900 hover:text-indigo-600 hover:border-b-2 hover:border-pink-500 px-3 py-2 text-md font-medium"
              >
                Recipes
              </a>
              <a
                href="/tcenter"
                className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium"
              >
                TCenter
              </a>
              <a
                href="/predict"
                className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium"
              >
                Predict
              </a>
              <a
                href="/chat"
                className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium"
              >
                Chat
              </a>
              <a
                href="/about"
                className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium"
              >
                About
              </a>
              <a
                href="/users"
                className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium"
              >
                Users
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-full max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full bg-gray-50 pl-10 pr-3 py-2 border border-gray-100 rounded-[17px] shadow-sm placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm max-sm:w-[190px]"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.42-1.42l4.59 4.6a1 1 0 01-1.42 1.4l-4.6-4.59zM8 14a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* User Actions */}
            {
              (!TrackLogin) ?
              <div className="flex justify-center align-center gap-2">
              
              <button
              onClick={() => openModal(false)}
              className="text-gray-900 max-sm:text-sm hover:bg-indigo-600 hover:text-white  hover:rounded-md px-4 py-2 lg:text-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => openModal(true)}
              className="bg-indigo-600 text-white px-3 py-2 max-sm:text-sm rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Sign Up
            </button>
            </div>

            :

            <div className="rounded-full px-4 py-2 bg-pink-400 border border-gray-600 text-black">U</div>
            }
          </div>
        </div>
      </div>

      {/* SignIn/SignUp Modal */}
      <SignInSignUpModal
        isOpen={isModalOpen}
        onClose={closeModal}
        isSignUp={isSignUp}
      />
    </nav>
  );
};

export default Nav;

// const Nav = () => (
//     <nav className=" bg-gradient-to-r from-pink-400 to-blue-300 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex-shrink-0">
//               <img className="h-8 w-13" src={logo} alt="Logo" />
//             </a>
//             <div className="hidden md:flex space-x-4 ml-10">
//               <a href="/recipes" className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium">
//                 Recipes
//               </a>
//               <a href="/tcenter" className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium">
//                 TCenter
//               </a>
//               <a href="/predict" className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium">
//                 Predict
//               </a>
//               <a href="/chat" className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium">
//                 Chat
//               </a>
//               <a href="/about" className="text-gray-900 hover:text-indigo-600 hover:underline px-3 py-2 text-md font-medium">
//                 About
//               </a>
//             </div>
//           </div>

//           {/* Search Bar */}

//           {/* User Actions */}
//           <div className="flex items-center space-x-4">

//             <div className="flex items-center flex-end justify-center md:justify-start">
//               <div className="w-full max-w-md">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="block w-full bg-gray-50 pl-10 pr-3 py-2 border border-gray-100 rounded-[17px] shadow-sm placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm max-sm:w-[190px]"
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.9 14.32a8 8 0 111.42-1.42l4.59 4.6a1 1 0 01-1.42 1.4l-4.6-4.59zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <a
//               href="#"
//               className="text-gray-900 sm:text-sm hover:bg-indigo-600 hover:text-white hover:rounded-md hover:text-sm px-3 py-2 lg:text-[16px] font-medium"
//             >
//               Sign In
//             </a>
//             <a
//               href="#"
//               className="bg-indigo-600 text-white px-3 py-2 max-sm:text-sm rounded-md text-sm font-medium hover:bg-indigo-700"
//             >
//               Sign Up
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );

//   export default Nav;



