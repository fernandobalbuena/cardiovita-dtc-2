import { Card } from "@/components/ui/card";
import { Star, ThumbsUp, CheckCircle } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      author: "Emily Thompson",
      rating: 5,
      date: "3 days ago",
      verified: true,
      helpful: 42,
      title: "Game changer for my lymphedema!",
      content: "I've been dealing with lymphedema in my legs for 5 years. After trying countless remedies, this is the only thing that has actually made a visible difference. The swelling has reduced by at least 50% and I can finally wear my regular shoes again!"
    },
    {
      id: 2,
      author: "Robert Chen",
      rating: 5,
      date: "1 week ago",
      verified: true,
      helpful: 38,
      title: "Skeptical at first, now a believer",
      content: "As a healthcare professional, I was skeptical about supplements. But the science behind this formula convinced me to try it. I'm amazed at how much better I feel - less bloated, more energy, and my chronic sinus issues have improved."
    },
    {
      id: 3,
      author: "Maria Garcia",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      helpful: 29,
      title: "Finally, something that works!",
      content: "I've struggled with water retention my whole adult life. Within just 10 days, I noticed my rings fitting better and my face looking less puffy. Now at 2 months, I've lost 8 pounds of water weight and feel incredible!"
    },
    {
      id: 4,
      author: "David Miller",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      helpful: 51,
      title: "Excellent customer service too",
      content: "Not only does the product work amazingly well, but when I had questions, their customer service team was incredibly helpful and knowledgeable. They really care about their customers' success."
    },
    {
      id: 5,
      author: "Lisa Anderson",
      rating: 5,
      date: "1 month ago",
      verified: true,
      helpful: 67,
      title: "Worth every penny",
      content: "I was hesitant about the price at first, but this has been the best investment in my health. My energy levels are through the roof, and the brain fog I've had for years is completely gone. I feel like a new person!"
    },
    {
      id: 6,
      author: "James Wilson",
      rating: 5,
      date: "1 month ago",
      verified: true,
      helpful: 44,
      title: "Noticeable results in just 2 weeks",
      content: "The puffiness under my eyes is gone, my ankles don't swell anymore after long days at work, and I just feel 'lighter' overall. This stuff really works!"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Verified Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9 out of 5</span>
            <span className="text-muted-foreground">Based on 10,847 reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {review.verified && (
                        <span className="flex items-center gap-1 text-xs text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          Verified Purchase
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>

                <h4 className="font-bold">{review.title}</h4>
                
                <p className="text-sm text-muted-foreground">
                  {review.content}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                    <ThumbsUp className="h-3 w-3" />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Showing 6 of 10,847 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;