import { useEffect, useState } from "react";
import customersImage from "@/assets/customers-collage.png";

const TrustedBySection = () => {
  const [bottleCount, setBottleCount] = useState(0);
  const finalCount = 11009125;
  
  // Animate bottle count on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = finalCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalCount) {
        setBottleCount(finalCount);
        clearInterval(timer);
      } else {
        setBottleCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 lg:py-24" style={{ backgroundColor: '#2B8B99' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
            Trusted by many. Lymph System Support contributes to our total of
          </h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#FFD700' }}>
            {bottleCount.toLocaleString()} bottles sold,
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl">
            supporting your lymph health.
          </p>
        </div>

        {/* Customer photos collage */}
        <div className="relative mt-12 max-w-5xl mx-auto flex justify-center">
          <img 
            src={customersImage} 
            alt="Actual Customer Photos" 
            className="w-full h-auto animate-fade-in"
          />
        </div>

        {/* Caption */}
        <p className="text-center text-white/90 text-sm sm:text-base mt-8">
          Actual Customer Photos
        </p>
      </div>
    </section>
  );
};

export default TrustedBySection;