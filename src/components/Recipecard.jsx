import React from "react";
import { Link } from "react-router-dom";

const Recipecard = ({ recipe }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;
  console.log(uri);
  const id = uri.split("#")[1];
  console.log(id);

  return (
    <Link to={`/recipes/${id}`} className="w-full md:w-[220px]">
      <div className="bg-black shadow w-full rounded-lg">
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[200px] md:h-[150px] w-full"
        />
        <div className='p-3'>
          <p className="text-white font-semibold">{label}</p>
          <div className='mt-2'>
            <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'>
              {cuisineType}

            </span>
            <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'>
              {mealType}

            </span>
            

          </div>

        </div>
      </div>
    </Link>
  );
};

export default Recipecard;



// the below code fragment can be found in: