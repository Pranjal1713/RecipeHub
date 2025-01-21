import React from "react";
import Nav from "../Nav";
import img from "../../assets/recipe-img.jpg"

const About = () => {
  return (
    <>
      <Nav />

      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              About <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Discover what makes us unique and why our platform is your go-to
              destination for delicious recipes, tiffin services, and more!
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={img}
                alt="About Us"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
                Bringing Food and People Together
              </h3>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                At{" "}
                <span className="text-orange-500 font-bold">Recipe Haven</span>,
                we aim to revolutionize the way you explore, cook, and enjoy
                meals. Whether you're looking for recipes tailored to your
                taste, finding reliable tiffin services, or connecting with
                passionate food enthusiasts, our platform offers it all.
              </p>
              <ul className="mt-6 space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✔</span> Thousands of
                  curated recipes for every occasion.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✔</span> Connect with
                  local tiffin centers for home-cooked meals.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✔</span> Create and
                  share your own recipes with a global community.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✔</span> Easy-to-follow
                  instructions and cooking tips.
                </li>
              </ul>
              <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
