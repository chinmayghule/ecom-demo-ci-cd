import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard } from "lucide-react";
import { ICardInfo } from "../page";

interface IPaymentMethodSection {
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  cardInfo: ICardInfo;
  setCardInfo: (value: ICardInfo) => void;
}
function PaymentMethodSection({
  paymentMethod,
  setPaymentMethod,
  cardInfo,
  setCardInfo,
}: IPaymentMethodSection) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
            3
          </div>
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Credit/Debit Card
            </Label>
          </div>
        </RadioGroup>

        {paymentMethod === "card" && (
          <div className="space-y-4 mt-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardInfo.number}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, number: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={cardInfo.expiry}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, expiry: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cardInfo.cvv}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, cvv: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                value={cardInfo.name}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, name: e.target.value })
                }
              />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 pt-4">
          <Checkbox id="savePayment" />
          <Label htmlFor="savePayment" className="text-sm">
            Save payment method for future purchases
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}

export default PaymentMethodSection;
