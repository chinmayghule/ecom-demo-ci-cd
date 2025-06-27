import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function ShippingMethodSection({ shipping }: { shipping: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
            2
          </div>
          Shipping Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="standard">
          <div className="flex items-center space-x-2 p-3 border rounded-lg">
            <RadioGroupItem value="standard" id="standard" />
            <div className="flex-1">
              <Label
                htmlFor="standard"
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Standard Shipping</div>
                  <div className="text-sm text-muted-foreground">
                    5-7 business days
                  </div>
                </div>
                <span className="font-semibold">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </Label>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-3 border rounded-lg">
            <RadioGroupItem value="express" id="express" />
            <div className="flex-1">
              <Label
                htmlFor="express"
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Express Shipping</div>
                  <div className="text-sm text-muted-foreground">
                    2-3 business days
                  </div>
                </div>
                <span className="font-semibold">$14.99</span>
              </Label>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-3 border rounded-lg">
            <RadioGroupItem value="overnight" id="overnight" />
            <div className="flex-1">
              <Label
                htmlFor="overnight"
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <div className="font-medium">Overnight Shipping</div>
                  <div className="text-sm text-muted-foreground">
                    Next business day
                  </div>
                </div>
                <span className="font-semibold">$24.99</span>
              </Label>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

export default ShippingMethodSection;
