const BluePinkGallery = () => {
    return (
        <div>
            <h1 className="text-4xl py-10 font-bold text-center uppercase"><span className="text-blue-500">Blue</span><span className="text-pink-500"> Pink</span> <span className="text-violet-900 font-bold">Gallery</span></h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 p-10">

                    <img src="https://i.ibb.co/4Sy9t3D/MG-20240304-125659.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

                    {/*  */}

                  
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/YLvZXjL/IMG-20240304-125603.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Q92kmBv/IMG-20240304-125730.jpg" />

                    
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/n1h9pqT/IMG-20240304-125616.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/YLvZXjL/IMG-20240304-125603.jpg" />

                    {/* 2nd start */}

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/b2q3JqH/IMG-20240304-125846.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/vHz83Cf/IMG-20240304-125905.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/ZdLmZDB/IMG-20240304-125942.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/b2q3JqH/IMG-20240304-125846.jpg" />

                    {/* BIg Image */}
                    <img src="https://i.ibb.co/GTr5KWJ/IMG-20240304-125826.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default BluePinkGallery;