import { Card } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      age: 45,
      location: "California",
      rating: 5,
      verified: true,
      beforeAfterImage: "/lovable-uploads/45d36862-85a4-4994-ae84-8ba740ea91a6.png",
      title: "Life-Changing Results!",
      content: "I've struggled with swelling in my legs for years. After just 3 weeks of taking Dominus, the difference is incredible. My ankles are back to normal size and I feel so much lighter!",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael R.",
      age: 52,
      location: "Texas",
      rating: 5,
      verified: true,
      beforeAfterImage: "/lovable-uploads/cb7c110a-a035-4344-9a00-c44efe4d90d3.png",
      title: "Finally Found Something That Works",
      content: "I was skeptical at first, but this product delivered beyond my expectations. The puffiness in my face is gone, and I have so much more energy throughout the day.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Jennifer K.",
      age: 38,
      location: "Florida",
      rating: 5,
      verified: true,
      beforeAfterImage: "/lovable-uploads/2c0577dd-41a5-409d-9247-6e44eced6352.png",
      title: "Incredible Transformation",
      content: "Not only did this help with my water retention, but my immune system feels stronger than ever. I haven't been sick once since starting this supplement 3 months ago!",
      date: "1 month ago"
    }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Real People, Real Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who have transformed their health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Age {testimonial.age}, {testimonial.location}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {testimonial.beforeAfterImage && (
                  <div className="w-full">
                    <img 
                      src={testimonial.beforeAfterImage} 
                      alt={`${testimonial.name}'s before and after results`}
                      className="w-full h-48 rounded-lg object-cover object-center"
                    />
                  </div>
                )}

                <div>
                  <h4 className="font-bold mb-2">{testimonial.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.content}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground">
                  {testimonial.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;