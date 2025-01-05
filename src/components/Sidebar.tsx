import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaCog, FaHome, FaPoo } from "react-icons/fa";


export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-100 text-gray-900
                        dark:bg-gray-900 dark:text-white shadow-lg z-50">

            <SidebarIcon icon={<FaHome size="28" />} text="Home" />
            <hr className="m-1 border"></hr>
            <SidebarIcon icon={<BsPlus size="32" />} text="Add" />
            <SidebarIcon icon={<BsFillLightningFill size="20" />} text="Lightning :3" />
            <SidebarIcon icon={<FaPoo size="20" />} text="IDK :3" />
            <hr className="m-1 border"></hr>
            <SidebarIcon icon={<FaCog size="20" />} text="Settings" />
        </div>
    );
}

export function SidebarIcon(props: any) {
    return (
        <div className="sidebarIcon group">
            {props.icon}
            <span className="sidebarTooltip group-hover:scale-100">
                {props.text}
            </span>
        </div>
    );
}