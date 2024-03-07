const DecorationsDate = () => {
    return (
        <div className="my-10">

            <h1 className="md:text-4xl text-2xl mb-4 font-semibold text-center">Special <span className="text-violet-800 font-bold">Decorations</span>  Date</h1>
            <div className="max-w-screen-xl p-5 mx-auto ">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 p-8 py-16 bg-gray-800 text-gray-100">
                    {/* dark:bg-gray-800 dark:text-gray-100 */}

                    <div className="relative border-2 border-violet-800 shadow-xl hover:shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/h8L6CKd/IMG-20240304-124643.jpg')" }}>
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Room</a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leadi tracki">01</span>
                                <span className="leadi uppercase">Jan</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">
                                Floral centerpieces, draped fabric, fairy lights, elegant table settings</a>
                        </h2>
                    </div>

                    <div className="relative border-2 border-violet-800 shadow-xl hover:shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/LDwgt12/IMG-20240304-124710.jpg')" }} >

                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Health</a>
                            <div className="flex flex-col justify-start text-center text-gray-100">
                                <span className="text-3xl font-semibold leadi tracki">07</span>
                                <span className="leadi uppercase">Jan</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Balloons, streamers, vibrant colors, joyful celebration atmosphere.</a>
                        </h2>
                    </div>

                    <div className="relative border-2 border-violet-800 shadow-xl shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/GkjKTVX/IMG-20240304-124738.jpg')" }}>

                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Room</a>
                            <div className="flex flex-col justify-start text-center text-gray-100">
                                <span className="text-3xl font-semibold leadi tracki">02</span>
                                <span className="leadi uppercase">Mar</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">Candles flicker, satin drapes sway, crystal chandeliers sparkle, creating enchantment.</a>
                        </h2>
                    </div>

                    <div className="relative border-2 border-violet-800 shadow-xl hover:shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/12HtvDT/IMG-20240304-124755.jpg')" }}>
                        {/* background-image: url(&quot;&quot;https://source.unsplash.com/random/243x320&quot;&quot;); */}
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Sports</a>
                            <div className="flex flex-col justify-start text-center text-gray-100">
                                <span className="text-3xl font-semibold leadi tracki">11</span>
                                <span className="leadi uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">Soft rugs, plush cushions, warm lighting, cozy blankets invite relaxation.</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DecorationsDate;