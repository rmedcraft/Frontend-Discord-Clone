import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function InputMessage(props: any) {
    const setMessages = props.sethook;

    const [message, setMessage] = useState("");

    function addMessage(e: any) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (message === "") return;

            // get the formatted date
            const date = new Date();
            const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

            setMessages((messages: any[]) => {
                return messages.concat([{
                    image: "/src/assets/default-pfp.jpg",
                    user: "You",
                    date: dateStr,
                    message: message
                }]);
            });

            e.target.value = "";
            setMessage("");
        }
    }

    return (
        <div className="relative flex flex-col items-start ml-4 shadow-lg">
            <span className="absolute inset-y-0 left-2 flex items-center">
                <FaPlusCircle className="w-7 h-7 text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-200 cursor-pointer transition-all" />
            </span>
            <input onKeyDown={addMessage} onChange={(e) => { setMessage(e.target.value); }} className="h-14 w-[calc(100%-2rem)] pl-11 border-none rounded-xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 focus:outline-none" placeholder="Say something..."></input>
        </div>
    );
}