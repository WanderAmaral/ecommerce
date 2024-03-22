'use client'
import { Provider } from "react-redux";
import store from "./store";

interface ProviderReduxProps {
    children: React.ReactNode
}

const ProviderRedux = ({children}: ProviderReduxProps) => {
    return ( <Provider store={store}>{children}</Provider> );
}
 
export default ProviderRedux;