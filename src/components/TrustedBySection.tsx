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
    <section className="relative py-12 lg:py-16" style={{ backgroundColor: '#2B8B99' }}>
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-3">
            Trusted by many. Cardiovita contributes to our total of
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: '#FFD700' }}>
            {bottleCount.toLocaleString()} bottles sold,
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl">
            supporting your lymph health.
          </p>
        </div>

        {/* Customer photos collage */}
        <div className="relative mt-8 max-w-4xl mx-auto flex justify-center">
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