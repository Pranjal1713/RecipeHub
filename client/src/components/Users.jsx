import { users } from "../contents";

const Users = () => {
  return (
    <>
      <div className="py-[6rem] flex justify-center align-center gap-6 border-b-4 border-gray-300">
        {users.map((user, index) => (
          <div className="flex w-[300px] flex-col justify-center align-center gap-2" key={index}>
            <div
              className={`w-full rounded-full h-[300px] ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-blue-400 to-violet-700"
                  : "bg-gradient-to-r from-orange-400 to-red-700"
              }`}
            >
              <img
                src={user.img}
                alt="logo"
                className="w-full h-full bg-center bg-cover rounded-full shadow-xl hover:shadow-2xl"
              />
            </div>
            <h1 className="text-center">{user.name}</h1>
            <div className="w-3/5 mx-auto border-b border-black"></div>
            <h1 className="text-center">Rating : {user.rating}⭐</h1>
            <div className="w-3/5 mx-auto border-b border-black"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
