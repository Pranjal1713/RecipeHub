import { users } from "../../contents";

const User = () => {
  return (
    <>
        <div className="w-[90%] mt-5 mx-auto" >
        <input
                type="text"
                placeholder="Search Users..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-purple-200"
              />
        </div>
      <div className="py-[6rem] flex justify-around align-center gap-6 w-[95%] mx-auto">
        
        {users.map((user, index) => (
          <div className="flex w-[300px] flex-col justify-center align-center gap-2" key={index}>
            <div
              className={`w-full rounded-xl h-[300px] ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-blue-400 to-violet-700"
                  : "bg-gradient-to-r from-orange-400 to-red-700"
              }`}
            >
              <img
                src={user.img}
                alt="logo"
                className="w-full h-full bg-center bg-cover rounded-xl shadow-xl hover:shadow-2xl"
              />
            </div>
            <h1 className="text-center mt-3">{user.name}</h1>
            <div className="w-3/5 mx-auto border-b border-black"></div>
            <h1 className="text-center">Rating : {user.rating}⭐</h1>
            <div className="w-3/5 mx-auto border-b border-black"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
