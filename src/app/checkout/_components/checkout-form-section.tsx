import { ICardInfo, IShippingInfo } from "../page";
import PaymentMethodSection from "./payment-method-section";
import ShippingInfoSection from "./shipping-info-section";
import ShippingMethodSection from "./shipping-method-section";

interface ICheckoutFormSection {
  shippingInfo: IShippingInfo;
  setShippingInfo: (shippingInfo: IShippingInfo) => void;
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
  cardInfo: ICardInfo;
  setCardInfo: (cardInfo: ICardInfo) => void;
  shipping: number;
}

function CheckoutFormSection({
  shippingInfo,
  setShippingInfo,
  paymentMethod,
  setPaymentMethod,
  cardInfo,
  setCardInfo,
  shipping,
}: ICheckoutFormSection) {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Step 1: Shipping Information */}
      <ShippingInfoSection {...{ shippingInfo, setShippingInfo }} />

      {/* Step 2: Shipping Method */}
      <ShippingMethodSection {...{ shipping }} />

      {/* Step 3: Payment Method */}
      <PaymentMethodSection
        {...{ paymentMethod, setPaymentMethod, cardInfo, setCardInfo }}
      />
    </div>
  );
}

export default CheckoutFormSection;
