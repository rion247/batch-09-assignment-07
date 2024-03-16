import { useEffect } from "react";
import { useState } from "react";
import SingleItemRecipes from "./singleItemRecipes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RecipesSection = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('../../../public/fakeJsonData.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, []);

    const [wantToCook, setWantToCook] = useState([]);

    const handleWantoCook = recipe => {
        const isExist = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
        if (!isExist) {
            setWantToCook([...wantToCook, recipe]);
        } else {
            toast('Already Added. Please Try Another One. Thank You!!!')
        }
    }

    return (
        <div className="my-24 py-1">

            <h2 className="text-4xl text-center mb-6 text-sky-950 font-semibold">Our Recipes</h2>

            <p className="mb-12 text-center w-[823px] mx-auto text-neutral-400 leading-7">
                Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
            </p>

            <div className="flex gap-x-6">

                <div className="grid grid-cols-2 gap-6 w-3/5">

                    {
                        recipes.map(recipe => <SingleItemRecipes key={recipe.recipe_id} recipe={recipe} handleWantoCook={handleWantoCook}></SingleItemRecipes>)
                    }

                </div>

                <div className="w-2/5 h-auto py-8 border border-neutral-300 rounded-3xl">

                    <div className="min-h-96">

                        <h4 className="text-center pb-4 text-2xl font-semibold mx-16 border-b border-neutral-300">Want to cook: {wantToCook.length}</h4>

                        <table className="table mx-auto font-fira-sans text-base font-medium">

                            <thead className="text-slate-950">

                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>

                            </thead>

                            <tbody className="text-neutral-400 font-normal">

                                {
                                    wantToCook.map((item, index) => (

                                        <tr>
                                            <th>{index + 1}</th>
                                            <td>{item.recipe_name}</td>
                                            <td>{item.preparation_time_min}</td>
                                            <td>{item.calories}</td>
                                            <td><button className="bg-green-500 text-slate-950 px-4 py-3 font-semibold rounded-full">Preparing</button></td>
                                        </tr>

                                    ))
                                }

                            </tbody>

                        </table>

                    </div>

                    <div className="min-h-96 mt-20">

                        <h4 className="text-center pb-4 text-2xl font-semibold mx-16 border-b border-neutral-300">Want to cook: {wantToCook.length}</h4>

                        <table className="table mx-auto font-fira-sans text-base font-medium">

                            <thead className="text-slate-950">

                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>

                            </thead>

                            <tbody className="text-neutral-400 font-normal">

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            <ToastContainer></ToastContainer>

        </div>

    );
};

export default RecipesSection;