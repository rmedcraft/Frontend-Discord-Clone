import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(true);
    const [dark, setDark] = useState(<FaSun size={22} className="text-yellow-200" />);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            setDark(<FaSun size={22} className="text-yellow-200" />);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(<FaMoon size={22} className="text-blue-900" />);
        }
    }, [darkMode]);

    // function toggleDarkMode() {
    //     setDarkMode(darkMode => !darkMode);
    // }

    return (
        <div className="cursor-pointer shadow-sm" onClick={() => setDarkMode(darkMode => !darkMode)}>
            {dark}
        </div>
    );
}