import { FunctionComponent } from "react";
import Checkout from "../components/checkout/checkout-components";
import AuthenticationGuard from "../../guards/authentication/authentication";

const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <AuthenticationGuard>
        <Checkout />
      </AuthenticationGuard>
    </>
  );
};

export default CheckoutPage;
