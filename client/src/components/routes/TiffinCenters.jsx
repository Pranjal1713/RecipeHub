import React from "react";
import Nav from "../Nav";

import { useState } from "react";

const tiffinCenters = [
  {
    id: 1,
    name: "Healthy Tiffins",
    username: "@healthy_tiffins",
    rating: 4.5,
    location: "Mumbai, India",
    todayMeal: "Paneer Butter Masala, Naan, Rice, Salad",
  },
  {
    id: 2,
    name: "HomeStyle Meals",
    username: "@homestyle_meals",
    rating: 4.8,
    location: "Delhi, India",
    todayMeal: "Rajma Chawal, Aloo Paratha, Pickle",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
  {
    id: 3,
    name: "Fresh Tiffins",
    username: "@fresh_tiffins",
    rating: 4.3,
    location: "Pune, India",
    todayMeal: "Dal Tadka, Jeera Rice, Roti, Curd",
  },
];

const TiffinCenterSection = () => {
  const [selectedTiffinCenter, setSelectedTiffinCenter] = useState(null);

  return (
    <>
      <Nav />
      <div className="p-6 pt-[2rem] bg-gray-100">
        {/* Tiffin Centers List */}
        {!selectedTiffinCenter ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 py-6">
              Tiffin Centers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiffinCenters.map((center) => (
                <div
                  key={center.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedTiffinCenter(center)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {center.name}
                  </h3>
                  <p className="text-sm text-gray-500">{center.username}</p>
                  <p className="mt-2 text-gray-600">
                    <strong>Today's Meal:</strong> {center.todayMeal}
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Rating:</strong> ⭐ {center.rating}
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Location:</strong> {center.location}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Detailed View of Selected Tiffin Center
          <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedTiffinCenter(null)}
              className="text-blue-500 hover:underline mb-4"
            >
              &larr; Back to Tiffin Centers
            </button>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedTiffinCenter.name}
            </h3>
            <p className="text-sm text-gray-500">
              {selectedTiffinCenter.username}
            </p>
            <p className="mt-4 text-gray-600">
              <strong>Rating:</strong> ⭐ {selectedTiffinCenter.rating}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Location:</strong> {selectedTiffinCenter.location}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Today's Meal:</strong> {selectedTiffinCenter.todayMeal}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Contact:</strong> tiffin@center.com
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Description:</strong> Our tiffin service provides healthy
              and delicious homemade meals tailored to your taste preferences.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TiffinCenterSection;
