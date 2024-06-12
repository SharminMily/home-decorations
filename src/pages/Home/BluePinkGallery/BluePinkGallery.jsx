const BluePinkGallery = () => {
    return (
        <div>
            <h1 className="md:text-4xl text-2xl pb-4 font-bold text-center uppercase"><span className="text-violet-600">Blue</span><span className="text-pink-500"> Pink</span> <span className="text-violet-600 font-bold">Gallery</span></h1>
            <section className="py-6 bg-gray-800 text-gray-50">
                <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 p-10 ">

                    <img src="https://i.ibb.co/jwwbtsV/photo-1533008093099-e2681382639a-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square shadow-xl hover:shadow-pink-800" />

                    {/*  */}

                  
                    <img alt="" className="w-full h-full rounded min-h-48 bg-gray-500 aspect-square shadow-xl hover:shadow-pink-800" src="https://i.ibb.co/YLvZXjL/IMG-20240304-125603.jpg" />

                    <img alt="" className="w-full h-full rounded min-h-48 bg-gray-500 aspect-square shadow-xl hover:shadow-pink-800" src="https://i.ibb.co/Q92kmBv/IMG-20240304-125730.jpg" />

                    
                    <img alt="" className="w-full h-full rounded shadow-xl hover:shadow-pink-800 min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/n1h9pqT/IMG-20240304-125616.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-xl hover:shadow-pink-800 min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/4Sy9t3D/MG-20240304-125659.jpg" />

                    {/* 2nd start */}

                    <img alt="" className="w-full h-full rounded min-h-48 bg-gray-500 aspect-square shadow-xl hover:shadow-violet-800" src="https://i.ibb.co/b2q3JqH/IMG-20240304-125846.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-xl hover:shadow-violet-800 min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/vHz83Cf/IMG-20240304-125905.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-xl hover:shadow-violet-800 min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/ZdLmZDB/IMG-20240304-125942.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-xl hover:shadow-violet-800 min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/b2q3JqH/IMG-20240304-125846.jpg" />

                    {/* BIg Image */}
                    <img src="https://i.ibb.co/FKJCRVP/photo-1599619351208-3e6c839d6828-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-xl hover:shadow-violet-800 min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default BluePinkGallery;