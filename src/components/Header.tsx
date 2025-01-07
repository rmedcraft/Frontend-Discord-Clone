import { FaCog, FaHashtag, FaSearch, FaUserCircle } from "react-icons/fa";
import DarkMode from "./DarkMode";

export default function Header(props: any) {
    return (
        <div className="flex flex-row items-center
                        fixed top-0 left-80
                        h-14 w-[calc(100vw-20rem)]
                        bg-gray-200 dark:bg-gray-700 shadow-lg
                        -z-10
                        transition-all">
            <FaHashtag size={20} className="mx-4 text-gray-400" />
            <h1 className="font-bold text-blue-400 text-lg flex-grow">{props.title}</h1>

            <DarkMode />

            <div className="relative flex items-center ml-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className="h-4 w-4 text-gray-500 z-20" />
                </span>
                <input type="search" className="rounded-lg text-md text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:border-2 focus:border-green-700 w-40 h-9 pl-10 focus:outline-none transition-all drop-shadow-xl z-10" placeholder="Search..."></input>
            </div>
            <FaCog size={21} className="mx-4 text-gray-400" />
            <FaUserCircle size={22} className="mx-4 text-gray-400" />
        </div>
    );
}