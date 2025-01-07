import { FaPlusCircle } from "react-icons/fa";

export default function InputMessage() {
    return (
        <div className="relative flex flex-col items-start ml-4">
            <span className="absolute inset-y-0 left-2 flex items-center">
                <FaPlusCircle className="w-7 h-7 text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-200 cursor-pointer transition-all" />
            </span>
            <input className="h-14 w-[calc(100%-2rem)] pl-11 border-none rounded-xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 focus:outline-none" placeholder="Say something..."></input>
        </div>
    );
}