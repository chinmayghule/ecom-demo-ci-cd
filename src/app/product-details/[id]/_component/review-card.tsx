import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "@/mock-data/reviews";
import { Star } from "lucide-react";

interface IReviewCard {
  review: Review;
}

function ReviewCard({ review }: IReviewCard) {
  return (
    <Card key={review.id}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{review.title}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                by {review.userName}
              </span>
              {review.verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified Purchase
                </Badge>
              )}
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            {new Date(review.date).toLocaleDateString()}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{review.comment}</p>
        <div className="flex items-center gap-4 text-sm">
          <Button variant="ghost" size="sm">
            Helpful ({review.helpful})
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
