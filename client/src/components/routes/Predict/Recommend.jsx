import React from "react";

const Recommend = ({img, name}) => {
  return (
    <div className="text-center pt-10 w-[30%] mx-auto">
      <img
        src={img}
        alt="recipe"
        className="w-full h-250px rounded-lg mx-auto"
      />
      <h1 className="text-center pt-5 text-lg">{name}</h1>
      <div className="w-[250px] h-250px border-b-2 border-black mx-auto"></div>
    </div>
  );
};

export default Recommend;
