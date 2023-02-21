import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

function House({ probs }) {
  return (
    <main >
      <section className="bg-white p-5 rounded-lg rounded-tl-[90px] w-full max-w-[350px] shadow-1 hover:shadow-2xl transition m-4 mx-auto ">
        <img src={probs.image} alt="" />
        <div className=" flex gap-3 " >
          <h2 className="text-white px-2 rounded-full my-3 bg-violet-600" >{probs.type}</h2>
          <h2 className="text-white px-2 rounded-full my-3 bg-green-600" >{probs.country}</h2>
        </div>
        <h2 className="font-semibold w-[230px]" >{probs.address}</h2>

        <section className="flex gap-4 my-3" >
          <div className="flex items-center gap-1 text-gray-500  my-1" >
            <h2 className="text-lg" ><BiBed/></h2>
            <h2 className="text-base" >{probs.bedrooms}</h2>
          </div>
          <div className="flex items-center gap-1 text-gray-500  my-1" >
            <h2 className="text-lg" ><BiBath/></h2>
            <h2 className="text-base" >{probs.bathrooms}</h2>
          </div>
          <div className="flex items-center gap-1 text-gray-500  my-1" >
            <h2 className="text-lg" ><BiArea/></h2>
            <h2 className="text-base" >{probs.surface}</h2>
          </div>
        </section>

        <h2 className="font-bold text-violet-800 text-lg" >{probs.price}</h2>

      </section>
    </main>
  );
}

export default House;
