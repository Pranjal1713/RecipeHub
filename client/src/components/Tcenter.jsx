import {Tcenter} from  "../contents"

const TCenter = () => {
  return (
    <>

        {/* <div className="pt-7">
            <h1 className='text-center font-bold text-2xl'>Recipes</h1>
            <div className='w-[140px] mt-3 mx-auto border-b border-black'></div>
        </div> */}

        <div className="w-full py-[4rem] max-h-full flex justify-center align-center gap-9">

        {Tcenter.map((item, index) => (
            <div key={index} className="w-[400px] h-[500px] border bg-gradient-to-r from-gray-50 to-blue-50 border-gray-300 shadow-lg hover:shadow-2xl hover:border-gray-400 rounded-lg">
                <div className={`w-full rounded-t-lg h-[250px] ${
                 index % 2 === 0
                ? "bg-gradient-to-r from-blue-400 to-violet-700"
                : "bg-gradient-to-r from-orange-400 to-red-700"
                }`}>
                <img src={item.image} alt="logo" className="w-full h-[250px] rounded-t-lg"/>
              </div>
                <h1 className="px-6 pt-4 font-bold text-2xl pb-3 capitalize">{item.name}</h1>
                <p className="px-6 pb-6 text-slate-500 text-md">{item.menu}</p>
                <h2 className="px-6 font-semibold">Cost : {item.price} Rs</h2>
                <h2 className="px-6 pt-2 font-semibold"> Available at : {item.availableTime}</h2>
                <h2 className="px-6 pt-2 font-semibold">Rating: {item.rating}⭐</h2>
            </div>
        ))
        }
        </div>
    </>
  )
}

export default TCenter