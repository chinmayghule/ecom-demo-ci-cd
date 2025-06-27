import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IShippingInfo } from "../page";

interface IShippingInfoSection {
  shippingInfo: IShippingInfo;
  setShippingInfo: (shippingInfo: IShippingInfo) => void;
}

function ShippingInfoSection({
  shippingInfo,
  setShippingInfo,
}: IShippingInfoSection) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
            1
          </div>
          Shipping Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={shippingInfo.firstName}
              onChange={(e) =>
                setShippingInfo({
                  ...shippingInfo,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={shippingInfo.lastName}
              onChange={(e) =>
                setShippingInfo({
                  ...shippingInfo,
                  lastName: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={shippingInfo.email}
              onChange={(e) =>
                setShippingInfo({
                  ...shippingInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={shippingInfo.phone}
              onChange={(e) =>
                setShippingInfo({
                  ...shippingInfo,
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({
                ...shippingInfo,
                address: e.target.value,
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={shippingInfo.city}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, city: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="state">State</Label>
            <Select
              value={shippingInfo.state}
              onValueChange={(value) =>
                setShippingInfo({ ...shippingInfo, state: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CA">California</SelectItem>
                <SelectItem value="NY">New York</SelectItem>
                <SelectItem value="TX">Texas</SelectItem>
                <SelectItem value="FL">Florida</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              value={shippingInfo.zipCode}
              onChange={(e) =>
                setShippingInfo({
                  ...shippingInfo,
                  zipCode: e.target.value,
                })
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShippingInfoSection;
