export default function MainPage() {
    return (
        <div className="fixed top-14 left-80
                        w-[calc(100vw-20rem)] h-[calc(100vh-3.5rem)]
                        bg-gray-300 dark:bg-gray-600
                        transition-all overflow-y-auto">
            <ul className="flex flex-col justify-end h-full flex-grow">
                <Message image="/src/assets/default-pfp.jpg" user="rowan" date="1/7/2024" message="wAOW!!! THIS IS AN EXAMPLE MESSAGE!!!!!" />
                <Message image="/src/assets/default-pfp.jpg" user="rowan" date="1/7/2024" message="THIS IS A SECOND MESSAGE!!!!" />
            </ul>
        </div>
    );
}

export function Message(props: any) {
    return (
        <div className="flex flex-row">
            <img src={props.image} className="rounded-full w-12 h-12 m-4"></img>
            <div className="my-3 font-semibold text-gray-700 dark:text-gray-100 mr-4">
                <h1 className="text-lg">{props.user} <span className="text-xs font-medium">{props.date}</span></h1>
                <p>{props.message}</p>
            </div>
        </div >
    );
}