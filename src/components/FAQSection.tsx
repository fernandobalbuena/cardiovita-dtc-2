import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Cardiovita work?",
      answer: "Cardiovita works by combining powerful natural ingredients that help support cardiovascular health, improve blood circulation, and support your body's natural cardiovascular processes. The formula targets the root causes of cardiovascular issues to provide comprehensive support."
    },
    {
      question: "How long before I see results?",
      answer: "Most customers report noticeable improvements within 2-3 weeks of consistent use. However, for optimal results, we recommend taking Cardiovita for at least 3 months to allow your body to fully benefit from the formula."
    },
    {
      question: "Is Cardiovita safe?",
      answer: "Yes! Cardiovita is manufactured in an FDA-registered, GMP-certified facility in the USA. All ingredients are natural, non-GMO, and thoroughly tested for purity and potency. However, we always recommend consulting with your healthcare provider before starting any new supplement."
    },
    {
      question: "How many bottles should I order?",
      answer: "We recommend ordering at least 3 bottles for a 90-day supply to see significant results. Many customers order 6 bottles to take advantage of our best pricing and to ensure they don't run out during their transformation journey."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We're confident you'll love Cardiovita, but if for any reason you're not satisfied, we offer a 180-day money-back guarantee. Simply return the product (even empty bottles) for a full refund, no questions asked."
    },
    {
      question: "How do I take Cardiovita?",
      answer: "Take 2 capsules daily with a glass of water, preferably with a meal. For best results, take consistently at the same time each day and maintain proper hydration throughout the day."
    },
    {
      question: "Are there any side effects?",
      answer: "Cardiovita is made with natural ingredients and is generally well-tolerated. Some users may experience mild adjustment symptoms initially as their body adjusts. These typically subside within a few days."
    },
    {
      question: "Can I take this with other medications?",
      answer: "While Cardiovita is natural and safe, we recommend consulting with your healthcare provider before taking it alongside other medications to ensure there are no interactions."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Cardiovita
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;