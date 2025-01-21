// import React, { useState } from "react";
// import Nav from "../Nav";
// import { ListOfFood as InitialListOfFood } from "../../contents";
// import AddFood from "./Predict/AddFood";
// import Recommend from "./Predict/Recommend";
// import recipeImg from "../../assets/recipe-img.jpg";

// const Predict = () => {
//   const [ListOfFood, setListOfFood] = useState(InitialListOfFood);
//   const [ThreeDayList, setThreeDayList] = useState(["daal chaval", "palak", "aaloo matar"]);
//   const [foodName, setFoodName] = useState(ThreeDayList[ThreeDayList.length - 1]);

//   const getRandomSuggestion = () => {
//     const filteredList = ListOfFood.filter((food) => !ThreeDayList.includes(food));
//     if (filteredList.length === 0) {
//       setFoodName("No suggestions available!");
//       return;
//     }
//     const randomIndex = Math.floor(Math.random() * filteredList.length);
//     setFoodName(filteredList[randomIndex]);
//   };

//   return (
//     <>
//       <Nav />

//       <div className="bg-gray-100 h-screen p-4">
//         <div className="flex justify-center gap-4 mb-4">
//           <button
//             onClick={getRandomSuggestion}
//             className="bg-gradient-to-b from-pink-300 to-red-500 px-4 py-2 rounded-lg hover:from-red-400 hover:to-pink-500 active:from-purple-400 cursor-pointer"
//           >
//             Recommend
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <Recommend img={recipeImg} name={foodName} />
//           </div>
//           <div>
//             <AddFood
//               ListOfFood={ListOfFood}
//               setListOfFood={setListOfFood}
//               ThreeDayList={ThreeDayList}
//               setThreeDayList={setThreeDayList}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Predict;

import React, { useState } from "react";
import Nav from "../Nav";
import { ListOfFood } from "../../contents";
import recipeImg from "../../assets/recipe-img.jpg";
import Recommend from "./Predict/Recommend";
import AddFood from "./Predict/AddFood";

const Predict = () => {
  //   const ThreeDayList = ["daal chaval", "palak", "aaloo matar"];
  //   const food = ThreeDayList[ThreeDayList.length - 1];

  const [ListsOfFood, setListsOfFood] = useState(ListOfFood);
  let [ThreeDayList, setThreeDayList] = useState([
    "daal chaval",
    "palak",
    "aaloo matar",
  ]);
  const [foodName, setFoodName] = useState(
    ThreeDayList[ThreeDayList.length - 1]
  );
  const [flag, setFlag] = useState(false);

  // const [foodName, setFoodName] = useState(food);

  const getRandomSuggestion = () => {

    setFlag(true);
    // Filter out the items from ListOfFood that are not in ThreeDayList
    const filteredList = ListOfFood.filter(
      (food) => !ThreeDayList.includes(food)
    );

    // Check if the filtered list has items
    if (filteredList.length === 0) {
      return "No suggestions available!";
    }

    // Pick a random item from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredList.length);
    setFoodName(filteredList[randomIndex]);
  };

  // Example Usage

  return (
    <>
      <Nav />

      <div className="bg-gray-100 h-screen">
        <div className="pt-6 flex justify-center align-center gap-2">
          <div
            className="bg-gradient-to-b from-pink-300 to-red-500 px-4 py-2 rounded-lg hover:from-red-400 hover:to-pink-500 active:from-purple-400 cursor-pointer"
            onClick={getRandomSuggestion}
          >
            Recommend
          </div>
          <div className="bg-gradient-to-b from-pink-300 to-red-500 px-4 py-2 rounded-lg hover:from-red-400 hover:to-pink-500 active:from-purple-400 cursor-pointer" onClick={() => setFlag(false)}>
            Add Food
          </div>
        </div>

        {flag ? (
          <Recommend img={recipeImg} name={foodName} />
        ) : (
          <AddFood
            ListOfFood={ListsOfFood}
            setListOfFood={setListsOfFood}
            ThreeDayList={ThreeDayList}
            setThreeDayList={setThreeDayList}
          />
        )}

        {/* <Recommend img={recipeImg} name={foodName}/>

        <AddFood
          ListOfFood={ListsOfFood}
          setListOfFood={setListsOfFood}
          ThreeDayList={ThreeDayList}
          setThreeDayList={setThreeDayList}
        /> */}
      </div>
    </>
  );
};

export default Predict;
