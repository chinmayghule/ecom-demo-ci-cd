type OrderStatusType = (
  status: string
) => "default" | "secondary" | "outline" | "destructive";

export const orderStatus: OrderStatusType = (status: string) => {
  switch (status) {
    case "delivered":
      return "default";
    case "shipped":
      return "secondary";
    case "processing":
      return "outline";
    default:
      return "destructive";
  }
};
