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
    },
    {
      id: 7,
      author: "Carol D.",
      rating: 5,
      date: "4 days ago",
      verified: true,
      helpful: 93,
      title: "The embarrassing odor is GONE.",
      content: "I need to mention something personal. It was the faint 'swampy' odor that I was so paranoid about, which Dr. Weil mentioned in his video. I felt truly seen. After about a month on Lymph System Support, it's completely gone. That specific relief, for me, was worth everything."
    },
    {
      id: 8,
      author: "Martha H.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      helpful: 287,
      title: "I'm no longer a prisoner in my own home.",
      content: "Before finding Dr. Weil's presentation, my life had shrunk to the four walls of my house. My legs were so heavy and painful, I had to ask my children for help with simple grocery shopping, and I felt like such a burden on them. Dr. Weil's story about his daughter Diana hit me so hard because I saw myself in her struggle and shame. I've been taking this for four months now, and last weekend, I walked the entire farmer's market by myself and carried my own bags. It's not about the shopping; it's about the freedom. I have my independence back, and my family has their mom back."
    },
    {
      id: 9,
      author: "William P.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      helpful: 178,
      title: "My doctor was wrong, and Dr. Weil was right.",
      content: "For two years, I did everything my specialist told me. I wore the suffocating compression socks, ate a miserable no-salt diet, and took the water pills that just left me feeling weak and dehydrated. And I only got worse. Watching Dr. Weil's presentation felt like an act of rebellion against a system that was failing me. I'm so glad I trusted my gut. The swelling in my ankles is down significantly, and I have more energy than I've had in years."
    },
    {
      id: 10,
      author: "Susan M.",
      rating: 5,
      date: "6 days ago",
      verified: true,
      helpful: 54,
      title: "My legs don't feel like concrete anymore.",
      content: "It's hard to explain, but it's not just that the swelling is down. It's the feeling. My legs used to feel like they were made of concrete pillars. Now they just feel... light. That's the only word for it. Light."
    },
    {
      id: 11,
      author: "George T.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      helpful: 142,
      title: "No more living in fear of a simple cut.",
      content: "The constant fear was one of the worst parts. My skin was so stretched, shiny, and fragile, my doctor warned me that any small scratch could lead to a dangerous skin infection. I was terrified of working in my own garden. Since starting Lymph System Support, not only is the swelling down, but my skin itself looks and feels healthier and more resilient. I'm not afraid anymore. That peace of mind is priceless."
    },
    {
      id: 12,
      author: "Eleanor R.",
      rating: 5,
      date: "5 days ago",
      verified: true,
      helpful: 423,
      title: "I danced at my grandson's wedding all night long.",
      content: "My grandson's wedding was six months away, and I was secretly dreading it. At Christmas last year, I couldn't even stand long enough for the family photo without agonizing pain. The thought of the wedding, let alone dancing, brought me to tears. I started taking Lymph System Support after a friend sent me Dr. Weil's video. I was hopeful, but realistic. Well, last Saturday, not only did I stand for all the photos with a huge smile on my face, but I danced the night away with my husband and my grandson. My family was stunned, and I felt 20 years younger. I have this formula to thank for a memory I will cherish forever."
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