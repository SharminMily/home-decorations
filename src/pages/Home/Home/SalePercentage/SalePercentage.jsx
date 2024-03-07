const SalePercentage = () => {
    return (
        <div>
            <h1 className="md:text-5xl text-3xl text-center font-semibold text-violet-800 my-10"><span className="text-black">Sale</span> Percentage</h1>
            <section className="p-6 my-6 bg-gray-800 text-gray-100">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">200</p>
                            <p className="capitalize">Orders</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">7500</p>
                            <p className="capitalize">New customers</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                <rect width="32" height="32" x="80" y="264"></rect>
                                <rect width="32" height="32" x="240" y="128"></rect>
                                <rect width="32" height="32" x="136" y="168"></rect>
                                <rect width="32" height="32" x="400" y="264"></rect>
                                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">172%</p>
                            <p className="capitalize">Growth</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">17%</p>
                            <p className="capitalize">Bounce rate</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4 my-6 md:p-8 bg-gray-800 text-gray-100">
                <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                                <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                                <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">200+</p>
                            <p>Services</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4 bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                                <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">7 500+</p>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg bg-gray-900 dark:text-gray-100">
                        <div className="flex items-center justify-center px-4 bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">14</p>
                            <p>Awards</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4 bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                                <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">24/7 h</p>
                            <p>Support</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4 bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                                <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">99,9 %</p>
                            <p>Uptime</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4 bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"></path>
                                <path d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">720 L</p>
                            <p>Opening</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalePercentage;