import { Card } from "@/components/ui/card";
import { 
  Droplets, 
  Heart, 
  Battery, 
  ShieldCheck, 
  Sparkles, 
  Activity 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Droplets,
      title: "Reduces Water Retention",
      description: "Helps flush excess fluids and reduce bloating naturally"
    },
    {
      icon: Heart,
      title: "Improves Circulation",
      description: "Enhances blood flow and oxygen delivery throughout your body"
    },
    {
      icon: Battery,
      title: "Boosts Energy Levels",
      description: "Feel more energetic and vibrant throughout the day"
    },
    {
      icon: ShieldCheck,
      title: "Supports Immunity",
      description: "Strengthens your body's natural defense system"
    },
    {
      icon: Sparkles,
      title: "Clearer Skin",
      description: "Promotes healthy, glowing skin from within"
    },
    {
      icon: Activity,
      title: "Better Mobility",
      description: "Reduces stiffness and improves joint flexibility"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Transform Your Health From Within
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience these life-changing benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-primary mb-2">
            Join 50,000+ Happy Customers
          </p>
          <p className="text-muted-foreground">
            Start your transformation journey today
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;