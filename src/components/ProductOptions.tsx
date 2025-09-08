import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface ProductOption {
  id: number;
  bottles: number;
  name: string;
  originalPrice: number;
  price: number;
  pricePerBottle: number;
  savings: number;
  shipping: string;
  popular?: boolean;
}

const ProductOptions = () => {
  const [selectedOption, setSelectedOption] = useState(2);

  const options: ProductOption[] = [
    {
      id: 1,
      bottles: 1,
      name: "Basic Package",
      originalPrice: 99,
      price: 69,
      pricePerBottle: 69,
      savings: 30,
      shipping: "$9.95 Shipping"
    },
    {
      id: 2,
      bottles: 3,
      name: "Most Popular",
      originalPrice: 297,
      price: 177,
      pricePerBottle: 59,
      savings: 120,
      shipping: "FREE Shipping",
      popular: true
    },
    {
      id: 3,
      bottles: 6,
      name: "Best Value",
      originalPrice: 594,
      price: 294,
      pricePerBottle: 49,
      savings: 300,
      shipping: "FREE Shipping"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground">
            Save more when you order in bulk - 180 Day Money Back Guarantee
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {options.map((option) => (
            <Card
              key={option.id}
              className={`relative p-6 cursor-pointer transition-all hover:shadow-xl ${
                selectedOption === option.id
                  ? "ring-2 ring-primary shadow-lg scale-105"
                  : ""
              }`}
              onClick={() => setSelectedOption(option.id)}
            >

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">{option.name}</h3>
                
                <div className="py-4">
                  <img
                    src={`/bottle-${option.bottles}.png`}
                    alt={`${option.bottles} bottle${option.bottles > 1 ? 's' : ''}`}
                    className="h-32 mx-auto"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">
                    ${option.price}
                  </p>
                  <p className="text-sm text-muted-foreground line-through">
                    ${option.originalPrice}
                  </p>
                  <p className="text-sm font-medium">
                    ${option.pricePerBottle} per bottle
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full">
                    Save ${option.savings}
                  </Badge>
                  {(option.bottles === 3 || option.bottles === 6) && (
                    <Badge className="bg-accent-secondary text-white">
                      FREE Shipping
                    </Badge>
                  )}
                </div>

                <div className="pt-4">
                  {selectedOption === option.id && (
                    <div className="flex justify-center mb-2">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div className="flex justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="text-lg px-12 py-6">
            Get Your Supply Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            🔒 Secure checkout • 🔄 180-day guarantee • 📦 Fast shipping
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductOptions;