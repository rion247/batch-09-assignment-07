import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";

const SingleItemRecipes = ({ recipe, handleWantoCook }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparation_time_min, calories } = recipe;
    return (


        <div className="w-[430px] p-6 border border-neutral-300 rounded-3xl">

            <div className="mb-6">
                <img className="w-96 h-52 rounded-2xl" src={recipe_image} alt={`...Loading of ${recipe_name} Image`} />
            </div>

            <h4 className="mb-4 text-xl font-semibold">{recipe_name}</h4>

            <p className="mb-4 text-base font-normal text-neutral-400">{short_description}</p>

            <div className="py-6 border-y border-neutral-200">

                <h4 className="font-medium text-lg mb-4">Ingredients: {ingredients.length}</h4>

                {
                    ingredients.map(element => <li className="list-disc text-neutral-400 font-normal text-lg">{element}</li>)
                }

            </div>

            <div className="my-6 font-fira-sans text-base font-normal flex gap-x-4 items-center">

                <div className="flex items-center gap-x-2 text-neutral-400">

                    <LuClock3 />

                    <h6>{preparation_time_min} minutes</h6>

                </div>

                <div className="flex items-center gap-x-2 text-neutral-400">

                    <AiOutlineFire />

                    <h6>{calories} calories</h6>

                </div>

            </div>

            <button onClick={()=>handleWantoCook(recipe)} className="py-3 px-6 bg-green-500 rounded-[50px] text-lg font-medium">Want to Cook</button>




        </div>



    );
};

export default SingleItemRecipes;