/* eslint-disable react/prop-types */

const ButtonStyle = ({name}) => {
    return (
        <button className="text-white bg-gradient-to-br from-black via-red-500 to-black
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-4 py-2 text-center me-2 mb-2">{name}</button>
    );
};

export default ButtonStyle;