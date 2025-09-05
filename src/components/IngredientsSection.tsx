import { Card } from "@/components/ui/card";
import { Leaf, FlaskConical, Shield, Zap } from "lucide-react";

const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Horse Chestnut Extract",
      icon: Leaf,
      benefit: "Improves circulation and reduces swelling",
      description: "Clinically proven to strengthen vein walls and improve lymphatic flow"
    },
    {
      name: "Butcher's Broom",
      icon: FlaskConical,
      benefit: "Supports healthy veins and circulation",
      description: "Ancient herb known for its powerful anti-inflammatory properties"
    },
    {
      name: "Dandelion Root",
      icon: Shield,
      benefit: "Natural diuretic and detoxifier",
      description: "Helps flush excess fluids and toxins from the body"
    },
    {
      name: "Ginger Root",
      icon: Zap,
      benefit: "Boosts metabolism and immunity",
      description: "Powerful antioxidant that supports overall lymphatic health"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Scientifically-Backed Ingredients
          </h2>
          <p className="text-lg text-muted-foreground">
            Each ingredient is carefully selected for maximum effectiveness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{ingredient.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">
                  {ingredient.benefit}
                </p>
                <p className="text-sm text-muted-foreground">
                  {ingredient.description}
                </p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-subtle max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Our Formula Is Different
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">100% Natural, Non-GMO ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Manufactured in FDA-registered facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Third-party tested for purity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">No artificial fillers or preservatives</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="/lovable-uploads/96dbcdd0-c5f1-409f-a392-3c679c641a2a.png"
                alt="Cardiovita founders holding product"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default IngredientsSection;