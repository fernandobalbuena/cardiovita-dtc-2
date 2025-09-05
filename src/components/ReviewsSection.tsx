import { Card } from "@/components/ui/card";
import { Star, ThumbsUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const allReviews = [
    {
      id: 1,
      author: "Margaret S.",
      rating: 5,
      date: "2 days ago",
      verified: true,
      helpful: 89,
      title: "My 'alligator skin' is gone!",
      content: "Forget the swelling for a second—the ugly, scaly 'alligator skin' on my shins is completely GONE. My skin is smooth again for the first time in I don't know how long. Unbelievable."
    },
    {
      id: 2,
      author: "Jennifer R.",
      rating: 5,
      date: "5 days ago",
      verified: true,
      helpful: 156,
      title: "Finally, the REAL answer. I can see my ankles again.",
      content: "I was so skeptical. For years, doctors fed me the same 'poor circulation' line and sent me home with diuretics that just made me feel weak. When I watched Dr. Weil's presentation and he explained the 'lymphatic swamp,' it was like a lightbulb went on. It just made logical sense. I ordered a bottle, and I'm not exaggerating when I say this has been a godsend. Within the first week, the painful tightness was gone, and I could actually see the bones in my ankles for the first time in years. Thank you, Dr. Weil."
    },
    {
      id: 3,
      author: "David K.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      helpful: 67,
      title: "Felt the difference in 48 hours.",
      content: "I was a total skeptic, but I felt a difference in 48 hours. The painful pressure in my legs just... released. Today I'm wearing shoes I haven't been able to fit into for 10 years. Don't wait to try this."
    },
    {
      id: 4,
      author: "Stephen M.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      helpful: 234,
      title: "My legs look like LEGS again, not tree trunks.",
      content: "For the last decade, I haven't had legs; I've had what my wife and I grimly called my 'tree trunks.' They were heavy, constantly aching, and so swollen that I was deeply embarrassed to wear shorts, even in the summer heat. I had given up all hope and was resigned to a life in ugly orthopedic shoes that cost a fortune. Hearing Dr. Weil talk about the toxic 'bio-sludge' was the first explanation that didn't feel like a dismissal of my pain. It was the missing piece of the puzzle. I'm two months in now, and not only can I fit into my favorite dress shoes I haven't touched in five years, but my wife actually cried the other day and said, 'Stephen, your legs look like your legs again.' You cannot put a price on that feeling of getting your life back."
    },
    {
      id: 5,
      author: "Sarah L.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      helpful: 45,
      title: "It works.",
      content: "It's been about five months. The decrease in swelling is noticeable and it's gradual. This supplement is a keeper for me!"
    },
    {
      id: 6,
      author: "Richard T.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      helpful: 312,
      title: "My cardiologist was so impressed, he wrote down the name.",
      content: "As a former engineer, I was intrigued by Dr. Weil's logical explanation of the lymphatic system but remained a healthy skeptic. I decided to give this a proper 90-day trial, tracking my progress. The change wasn't overnight, but it was undeniable. Week by week, the 'water-logged' feeling in my calves lessened. The skin felt softer, less stretched. At my last check-up, my cardiologist—who had previously just told me to 'wear my socks and cut down on salt'—was visibly impressed by the reduction in fluid. He asked what I was doing differently, and after I explained Dr. Weil's approach to clearing the 'lymphatic swamp,' he took down the name of the product for his own research. That's all the proof I need. I've already ordered another six bottles to make sure I never run out."
    }
  ];

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = allReviews.slice(startIndex, endIndex);

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

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {currentReviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-lg">{review.author}</p>
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
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>

                <h4 className="font-bold text-lg">{review.title}</h4>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  {review.content}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, allReviews.length)} of 10,847 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;