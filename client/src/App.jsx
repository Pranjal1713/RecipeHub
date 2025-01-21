// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Nav from "./components/Nav";
// import Recipes from "./components/Recipes";
import Chat from "./components/routes/Chat";
import Home from "./components/routes/Home";
import Predict from "./components/routes/Predict";
// import TCenter from "./components/Tcenter";
// import Users from "./components/Users";

import { Routes, Route } from "react-router-dom";
import TiffinCenters from "./components/routes/TiffinCenters";
import RecipeBlogs from "./components/routes/RecipeBlogs";
import About from "./components/routes/About";
import Users from "./components/Users";
import User from "./components/routes/User";

export default function App() {
  return (
    <>
      


    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tcenter" element={<TiffinCenters />} />
        <Route path="/recipes" element={<RecipeBlogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>


    </>
  );
}
