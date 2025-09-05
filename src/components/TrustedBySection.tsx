import { useEffect, useState } from "react";

const TrustedBySection = () => {
  const [bottleCount, setBottleCount] = useState(11009125);
  
  // Customer photos data - in a real app, these would be actual customer photos
  const customerPhotos = [
    { id: 1, size: "large", position: { top: "10%", left: "15%" } },
    { id: 2, size: "medium", position: { top: "5%", left: "35%" } },
    { id: 3, size: "small", position: { top: "15%", left: "50%" } },
    { id: 4, size: "large", position: { top: "8%", left: "68%" } },
    { id: 5, size: "medium", position: { top: "12%", left: "85%" } },
    { id: 6, size: "small", position: { top: "30%", left: "8%" } },
    { id: 7, size: "large", position: { top: "35%", left: "25%" } },
    { id: 8, size: "medium", position: { top: "32%", left: "42%" } },
    { id: 9, size: "small", position: { top: "38%", left: "58%" } },
    { id: 10, size: "large", position: { top: "35%", left: "75%" } },
    { id: 11, size: "medium", position: { top: "30%", left: "90%" } },
    { id: 12, size: "small", position: { top: "55%", left: "5%" } },
    { id: 13, size: "large", position: { top: "58%", left: "20%" } },
    { id: 14, size: "medium", position: { top: "60%", left: "38%" } },
    { id: 15, size: "small", position: { top: "55%", left: "55%" } },
    { id: 16, size: "large", position: { top: "62%", left: "70%" } },
    { id: 17, size: "medium", position: { top: "58%", left: "85%" } },
    { id: 18, size: "small", position: { top: "75%", left: "12%" } },
    { id: 19, size: "medium", position: { top: "78%", left: "30%" } },
    { id: 20, size: "large", position: { top: "75%", left: "48%" } },
    { id: 21, size: "small", position: { top: "80%", left: "65%" } },
    { id: 22, size: "medium", position: { top: "78%", left: "82%" } },
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large': return 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28';
      case 'medium': return 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24';
      case 'small': return 'w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20';
      default: return 'w-16 h-16 sm:w-20 sm:h-20';
    }
  };

  // Animate bottle count on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = bottleCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= bottleCount) {
        setBottleCount(bottleCount);
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
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mt-12 max-w-6xl mx-auto">
          {customerPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`absolute rounded-full bg-gradient-to-br from-gray-200 to-gray-300 ${getSizeClasses(photo.size)} shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden`}
              style={{
                top: photo.position.top,
                left: photo.position.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Placeholder for customer photo */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-1/2 h-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          ))}
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