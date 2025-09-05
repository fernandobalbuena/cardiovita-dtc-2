import { Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-guarantee">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-card/95 backdrop-blur">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-secondary/20 rounded-full mb-4">
              <Shield className="h-10 w-10 text-accent-secondary" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold">
              180-Day Money Back Guarantee
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're so confident in Lymph System Support that we offer an industry-leading 
              180-day money-back guarantee. If you're not completely satisfied with your results, 
              simply return the product for a full refund - no questions asked.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Risk-Free Trial</h3>
                <p className="text-sm text-muted-foreground">
                  Try it for 6 full months
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">No Questions Asked</h3>
                <p className="text-sm text-muted-foreground">
                  Simple return process
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">100% Refund</h3>
                <p className="text-sm text-muted-foreground">
                  Every penny back
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-2xl font-bold text-primary">
                Your Satisfaction Is Our #1 Priority
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Join over 50,000+ satisfied customers worldwide
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GuaranteeSection;