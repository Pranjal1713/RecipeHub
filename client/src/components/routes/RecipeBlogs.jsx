import React from "react";
import Nav from "../Nav";
import { useState } from "react";
import img from "../../assets/recipe-img.jpg"


const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    category: "Italian",
    rating: 4.7,
    user: "Chef Maria",
    tags: ["Pasta", "Dinner", "Easy"],
    steps: [
      "Boil spaghetti in salted water until al dente.",
      "In a bowl, whisk eggs, Parmesan, and pepper.",
      "Cook pancetta until crispy in a skillet.",
      "Combine pasta, pancetta, and egg mixture off heat.",
      "Serve with extra Parmesan and parsley.",
    ],
    image: img,
    description: "A classic Italian pasta dish with creamy sauce and pancetta.",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Indian",
    rating: 4.9,
    user: "Chef Ankit",
    tags: ["Rice", "Spicy", "Comfort Food"],
    steps: [
      "Marinate chicken with spices and yogurt.",
      "Cook basmati rice with whole spices.",
      "Layer rice and chicken in a pot, seal with dough.",
      "Cook on low heat for 30 minutes.",
      "Serve with raita and salad.",
    ],
    image: img,
    description: "A fragrant and flavorful rice dish with spiced chicken.",
  },
  {
    id: 3,
    name: "Veg Biryani",
    category: "Mexican",
    rating: 4.2,
    user: "Chef Pooja",
    tags: ["Rice", "Spicy", "Comfort Food"],
    steps: [
      "spices and yogurt.",
      "Cook basmati rice with whole spices.",
      "Layer rice in a pot, seal with dough.",
      "Cook on low heat for 30 minutes.",
      "Serve with raita and salad.",
    ],
    image: img,
    description: "A fragrant and flavorful rice dish with spiced vegetables.",
  },
];

const RecipeSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Nav />
      <div className="p-6 bg-gray-100">
        {!selectedRecipe ? (
          <>
            {/* Search and Categories */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-orange-300"
              />
              <div className="mt-4 flex gap-4">
                {["All", "Italian", "Indian", "Mexican"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } hover:bg-orange-400 hover:text-white`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipes List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-65 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {recipe.name}
                    </h3>
                    <p className="text-sm text-gray-500">{recipe.category}</p>
                    <p className="mt-2 text-gray-600">
                      ⭐ {recipe.rating} • Posted by {recipe.user}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {recipe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Recipe Detail Blog View
          <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="text-blue-500 hover:underline mb-4"
            >
              &larr; Back to Recipes
            </button>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedRecipe.name}
            </h3>
            <p className="text-sm text-gray-500">{selectedRecipe.category}</p>
            <p className="mt-2 text-gray-600">
              ⭐ {selectedRecipe.rating} • Posted by {selectedRecipe.user}
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Tags:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedRecipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-gray-600">{selectedRecipe.description}</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Steps:</h4>
              <ol className="list-decimal ml-6 mt-2 text-gray-600">
                {selectedRecipe.steps.map((step, index) => (
                  <li key={index} className="mt-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeSection;
