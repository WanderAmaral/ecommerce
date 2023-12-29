import { SyncLoader } from "react-spinners";

const Loading = () => {
    return ( 
    <div className="flex fixed h-screen top-0 left-0 w-screen items-center justify-center bg-black bg-opacity-50">
        <SyncLoader size={30}/>
    </div> 
    );
}
 
export default Loading;