const HeroBanner = () => {
    return (
        <div className="lg:w-full lg:h-[600px] rounded-3xl bg-[url('./images/heroimage.png')] flex justify-center items-center text-white bg-no-repeat bg-cover">

            <div>
                <h1 className="text-5xl font-bold w-[897px] mx-auto text-center leading-[76px] mb-6">Discover an exceptional cooking class tailored for you!</h1>

                <p className="mb-10 font-normal text-lg leading-7 w-[1000px] text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

                <div className="flex justify-center items-center gap-x-6">

                    <a className="bg-green-600 px-8 py-5 text-black text-xl font-semibold rounded-[50px] border-2 border-transparent" href="#">Explore Now</a>
                    <a className=" px-8 py-5 text-xl font-semibold rounded-[50px] border-2 border-white" href="#">Our Feedback</a>

                </div>

            </div>

        </div>
    );
};

export default HeroBanner;