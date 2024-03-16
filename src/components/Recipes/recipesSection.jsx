import { useEffect } from "react";
import { useState } from "react";
import SingleItemRecipes from "./singleItemRecipes";

const RecipesSection = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('../../../public/fakeJsonData.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="my-24 py-1">

            <h2 className="text-4xl text-center mb-6 text-sky-950 font-semibold">Our Recipes</h2>

            <p className="mb-12 text-center w-[823px] mx-auto text-neutral-400 leading-7">
                Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
            </p>

            <div className="flex gap-x-6">

                <div className="grid grid-cols-2 gap-6 w-3/5">

                    {
                        recipes.map(recipe => <SingleItemRecipes recipe={recipe}></SingleItemRecipes>)
                    }

                </div>

                <div className="">

                </div>

            </div>





        </div>

    );
};

export default RecipesSection;