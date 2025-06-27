import { Card } from "@/components/ui/card";
import { Order } from "@/mock-data/orders";
import Header from "./card-header";
import Content from "./card-content";

export interface IOrderCard {
  order: Order;
}

function OrderCard({ order }: IOrderCard) {
  return (
    <Card key={order.id}>
      <Header {...{ order }} />

      <Content {...{ order }} />
    </Card>
  );
}

export default OrderCard;
