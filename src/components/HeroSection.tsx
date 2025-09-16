import { Button } from "@/components/ui/button";
import { Shield, Award, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent-secondary font-semibold uppercase tracking-wider">
                #1 Rated Cardiovascular Support Formula
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Support Your Heart's Natural 
                <span className="text-primary"> Health System</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The breakthrough formula that helps maintain healthy cardiovascular function, 
                supports blood circulation, and promotes your heart health naturally.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent-secondary" />
                <span className="text-sm font-medium">FDA Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent-secondary" />
                <span className="text-sm font-medium">GMP Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-accent-secondary" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 animate-pulse-slow">
                Order Now - Save Up to 50%
              </Button>
              <p className="text-sm text-muted-foreground">
                ⭐⭐⭐⭐⭐ Rated 4.9/5 by 179 reviews
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-3xl"></div>
            <img 
              src="/lymph-product-hero.png" 
              alt="Dominus Bottles"
              className="relative z-10 w-full max-w-lg mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;