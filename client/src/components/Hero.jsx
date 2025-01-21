

const Hero = () => {
  return (
    <div className="relative">
      {/* Your Hero Section */}
      <div className="bg-gradient-to-r from-pink-200 to-blue-200 flex items-center justify-center h-screen px-3 border-none">
        <div className="max-w-7xl flex flex-col md:flex-row items-center gap-6 z-10">
          {/* Text Section */}
          <div className="text-left md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-blue-600">
              Delicious 
              </span>{" "} 
              Recipes <br /> for Every Occasion
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mt-4 w-[85%] max-sm:mx-auto">
              Discover thousands of recipes tailored to your taste. Cook like a
              pro with step-by-step instructions and tips. From quick meals to
              gourmet feasts, we've got it all covered!
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600">
                Explore Recipes
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnb9lfVWLVQsv4rewdqk_dgp2vT2iU76qyA&s"
              alt="Delicious Dish"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-none outline-none leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] translate-y-[1px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white border-none outline-none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-r from-pink-200 to-blue-200 flex items-center justify-center h-screen px-3">

//         {/* Text Section */}
//       <div className="max-w-7xl flex flex-col md:flex-row items-center gap-6">
//         <div className="text-left md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
//             Delicious Recipes <br /> for Every Occasion
//           </h1>
//           <p className="text-lg md:text-xl text-gray-500 mt-4 w-[85%] max-sm:mx-auto">
//             Discover thousands of recipes tailored to your taste. Cook like a
//             pro with step-by-step instructions and tips. From quick meals to
//             gourmet feasts, we've got it all covered!
//           </p>
//           <div className="mt-6 flex justify-center md:justify-start">
//             <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600">
//               Explore Recipes
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnb9lfVWLVQsv4rewdqk_dgp2vT2iU76qyA&s"
//             alt="Delicious Dish"
//             className="rounded-lg shadow-lg w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
