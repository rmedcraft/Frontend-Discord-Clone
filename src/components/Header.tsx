import { FaHashtag, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header(props: any) {
    return (
        <div className="flex flex-row items-center
                        fixed top-0 left-80
                        h-14 w-[calc(100vw-20rem)]
                        bg-gray-300 shadow-lg
                        -z-10">
            <FaHashtag size={20} className="mx-4 text-gray-400" />
            <h1 className="font-bold text-blue-400 text-lg flex-grow">{props.title}</h1>

            <div className="relative flex items-center">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className="h-4 w-4 text-gray-500 " />
                </span>
                <input type="search" className="rounded-lg text-sm text-gray-900 border-2 focus:border-gray-500 w-40 h-9 pl-10 focus:outline-none transition-all" placeholder="Search"></input>
            </div>
            <FaUserCircle size={22} className="mx-4 text-gray-500" />
        </div>
    );
}