import { useEffect, useState } from "react";

const DecorationShow = () => {
	
		
	
  return (
    <div className="mb-10">
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 text-gray-100 pb-62">

        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded relative pb-60">

          
          <img
            src="https://i.ibb.co/dKwnYw2/home2.png"
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />         

          <div className="absolute inset-x-0 bottom-8   transform-none translate-y-1/2 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 shadow-2xl hover:shadow-slate-300 pb-6">
            <div className="space-y-2">
            <img src="https://i.ibb.co/vw1KzMt/Animation-1717752206382-1.gif" alt="" />
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl no-underline font-semibold sm:text-3xl text-gray-200"
              >
                The Best Activewear from the Home Decorations Sale
              </a>
              <p className="text-xs text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline no-underline text-gray-400"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            {/* <div className="text-gray-100">                <p>
                Join us at our Decoration Show! Witness stunning displays, get
                inspired, and discover the latest trends. Dont miss out on this
                opportunity to elevate your space. See you there!...
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorationShow;
