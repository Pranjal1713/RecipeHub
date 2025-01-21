import React from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import Nav from "../Nav";
import Recipes from "../Recipes";
// import Predict from "./components/routes/Predict";
import TCenter from "../Tcenter";
import Users from "../Users";

const Home = () => {
  return (
    <>
      <section>
        <Nav />
      </section>

      <section className="bg-gray-200">
        <Hero />
      </section>

      <section className="w-full max-h-full pb-[3rem]">
        <Recipes />
      </section>

      <section className="pb-10 bg-gray-50">
        <div className="pt-[5.3rem] pb-3">
          <h1 className="text-center font-bold text-2xl capitalize">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-violet-500">
              tiffin centers
            </span>
          </h1>
          <div className="w-[200px] mt-3 mx-auto border-b border-black"></div>
        </div>
        <TCenter />
      </section>

      <section className="pb-10 bg-cyan-50	">
        <div className="pt-[5.3rem] pb-3">
          <h1 className="text-center font-bold text-2xl capitalize">
            <span class="bg-clip-text text-transparent text-center bg-gradient-to-r from-amber-600 to-violet-500">
              Users
            </span>
          </h1>
          <div className="w-[98px] mt-3 mx-auto border-b border-black"></div>
        </div>
        <Users />
      </section>

      <section className="w-full h-full">
        <Footer />
      </section>
    </>
  );
};

export default Home;
