import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ICustomerReviewSortBtn {
  reviewSort: string;
  setReviewSort: (value: string) => void;
}

function CustomerReviewSortBtn({
  reviewSort,
  setReviewSort,
}: ICustomerReviewSortBtn) {
  return (
    <Select value={reviewSort} onValueChange={setReviewSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest First</SelectItem>
        <SelectItem value="oldest">Oldest First</SelectItem>
        <SelectItem value="rating-high">Highest Rating</SelectItem>
        <SelectItem value="rating-low">Lowest Rating</SelectItem>
        <SelectItem value="helpful">Most Helpful</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default CustomerReviewSortBtn;
