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
      title: "Drains 'Toxic' Fluid Buildup",
      description: "Helps flush the inflammatory 'bio-sludge' that causes heavy, swollen legs and feet"
    },
    {
      icon: Heart,
      title: "Supports Healthy Circulation",
      description: "By clearing lymphatic pathways, it also enhances blood flow, helping to ease that 'pins and needles' feeling in your feet"
    },
    {
      icon: Battery,
      title: "Restores Natural Energy",
      description: "Purifies your blood of the toxic filth that causes bone-deep fatigue and brain fog, restoring your natural vitality"
    },
    {
      icon: ShieldCheck,
      title: "Fortifies Your Body's Defenses",
      description: "Strengthens your natural immune system to protect vulnerable skin from dangerous infections like cellulitis"
    },
    {
      icon: Sparkles,
      title: "Promotes Smooth, Healthy Skin",
      description: "Relieves the tightness, shininess, and 'alligator skin' look caused by trapped inflammatory fluid"
    },
    {
      icon: Activity,
      title: "Restores Effortless Mobility",
      description: "Reduces the stiffness and 'concrete pillar' feeling, giving you back the freedom to move, walk, and dance with ease"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Flush The 'Internal Swamp' and Reclaim Your Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            By targeting the root cause that conventional medicine ignores, our unique formula delivers results you can feel
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