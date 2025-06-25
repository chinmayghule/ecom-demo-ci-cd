import { Review } from "@/mock-data/reviews";
import CustomerReviewSortBtn from "./customer-review-sort-btn";
import ReviewPagination from "./pagination";
import ReviewCard from "./review-card";

interface IReviewsSection {
  reviews: Review[];
  reviewSort: string;
  setReviewSort: (value: string) => void;
}

function ReviewsSection({
  reviews,
  reviewSort,
  setReviewSort,
}: IReviewsSection) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <CustomerReviewSortBtn {...{ reviewSort, setReviewSort }} />
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Review Pagination */}
      <div className="flex justify-end">
        <ReviewPagination />
      </div>
    </div>
  );
}

export default ReviewsSection;
