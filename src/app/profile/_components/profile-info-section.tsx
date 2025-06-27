import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/mock-data/user";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

function ProfileInfoSection() {
  const user = currentUser;

  return (
    <div className="lg:col-span-1">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>
              Member since {new Date(user.joinDate).toLocaleDateString()}
            </span>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
              <div>
                <div>{user.address.street}</div>
                <div>
                  {user.address.city}, {user.address.state}{" "}
                  {user.address.zipCode}
                </div>
                <div>{user.address.country}</div>
              </div>
            </div>
          </div>

          <Separator />

          <Button className="w-full" variant="outline">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfileInfoSection;
