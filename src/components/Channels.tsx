import { FaChevronRight, FaPlus } from "react-icons/fa";

export default function Channels() {
    return (
        <div className="fixed top-0 left-16
                        flex flex-col
                        h-screen w-64
                        bg-gray-200 dark:bg-gray-700
                        shadow-md
                        z-0">
            <h1 className="my-4 ml-4 text-xl
                        text-gray-800 font-bold">
                Channels
            </h1>
            <Category text="Topics" />
            <Category text="Questions" />
            <Category text="Something Else" />
        </div>
    );
}

export function Category(props: any) {
    return (
        <div className="ml-4 mb-2
                        flex items-center
                        cursor-pointer group">
            <FaChevronRight className="text-blue-400 focus:rotate-90" />
            <h1 className="text-gray-600 text-lg font-semibold ml-2 flex-grow select-none">{props.text}</h1>
            <FaPlus size={15} className="text-blue-400 mr-4" />
        </div>
    );
}