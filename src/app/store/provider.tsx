"use client";
import { Provider } from "react-redux";
import { store, persisterStore } from "./store";
// @ts-ignore
import { PersistGate } from "redux-persist/integration/react";

interface ProviderReduxProps {
  children: React.ReactNode;
}

const ProviderRedux = ({ children }: ProviderReduxProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisterStore}>{children}</PersistGate>
    </Provider>
  );
};

export default ProviderRedux;
