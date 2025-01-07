import Channels from "./components/Channels";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";

export default function App() {

    return (
        <div className="flex">
            <Sidebar />
            <Channels />
            <div className="flex flex-row ">
                <Header title="channel-name" className='flex flex-grow-0 flex-shrink' />
                <MainPage />
                {/* the actual content in this div */}
            </div>
        </div>
    );
}

