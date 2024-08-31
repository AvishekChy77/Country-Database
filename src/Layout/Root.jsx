import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="flex flex-col text-center items-center gap-5">
            <h2>Navbar</h2>
            <Outlet/>
            <h2>footer</h2>
        </div>
    );
};

export default Root;