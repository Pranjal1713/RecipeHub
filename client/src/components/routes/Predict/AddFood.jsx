import React, { useState } from "react";

const AddFood = ({
  ListOfFood,
  setListOfFood,
  ThreeDayList,
  setThreeDayList,
}) => {
  const [foodType, setFoodType] = useState("Lunch");
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [foodImagePreview, setFoodImagePreview] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFoodImage(file);

    // Generate a preview of the image
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFoodImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddFood = () => {
    // Validation: Ensure food name is not already in ListOfFood
    if (ListOfFood.includes(foodName)) {
      alert("Food already exists in the list!");
      return;
    }

    // Validation: Ensure food name and image are provided
    if (!foodName || !foodImage) {
      alert("Please provide both food name and image!");
      return;
    }

    // Add new food to ListOfFood
    setListOfFood([...ListOfFood, foodName]);

    // Update ThreeDayList
    const updatedThreeDayList = [...ThreeDayList, foodName];
    if (updatedThreeDayList.length > 3) {
      updatedThreeDayList.shift(); // Remove the first item if more than 3
    }
    setThreeDayList(updatedThreeDayList);

    // Clear inputs
    setFoodType("Lunch");
    setFoodName("");
    setFoodImage(null);
    setFoodImagePreview("");
    alert(`${foodName} added successfully!`);
  };

  return (
    <div className="bg-gray-100 w-[50%] mx-auto p-4 mt-10 rounded-lg border border-gray-200 shadow-md">
      <h2 className="text-center text-xl font-bold mb-4">Add New Food</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Type of Food</label>
        <select
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Food Name</label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter food name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Food Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        {foodImagePreview && (
          <img
            src={foodImagePreview}
            alt="Food Preview"
            className="w-32 h-32 rounded-lg mt-2"
          />
        )}
      </div>

      <button
        onClick={handleAddFood}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Add Food
      </button>
    </div>
  );
};

export default AddFood;
