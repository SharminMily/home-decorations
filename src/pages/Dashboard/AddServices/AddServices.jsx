
const AddServices = () => {

    
    return (
        <div className="m-10">
            <section className="p-6 bg-gray-800 text-gray-50">
	<form action="" className="container flex flex-col mx-auto space-y-12">


		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-4xl"> Add Services</p>
				<p className="text-xs pb-4">Add your services from</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full ">

				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Category</label>
					<input id="username" type="text" placeholder="category" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Title</label>
					<input id="website" type="text" placeholder="title" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Area Name</label>
					<input id="username" type="text" placeholder="area neme" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Price</label>
					<input id="website" type="text" placeholder="$00" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>

				<div className="col-span-full">
					<label className="text-sm">Descriptions </label>
					<textarea id="bio" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<label  className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-700" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
					</div>
				</div>

                <button className="px-4 py-2 bg-violet-700 "> Submit </button>
			</div>

          
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default AddServices;