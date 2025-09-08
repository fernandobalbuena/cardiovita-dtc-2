import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PackageOption {
  id: string;
  bottles: number;
  name: string;
  label: string;
  regularPrice: number;
  price: number;
  perBottle: number;
  savings: number;
  freeShipping: boolean;
  isPopular?: boolean;
}

const OrderSection = () => {
  const [selectedPackage, setSelectedPackage] = useState("6");

  const packages: PackageOption[] = [
    {
      id: "2",
      bottles: 2,
      name: "STARTER",
      label: "2 bottles",
      regularPrice: 158,
      price: 158,
      perBottle: 79,
      savings: 0,
      freeShipping: true
    },
    {
      id: "6",
      bottles: 6,
      name: "DOCTOR'S CHOICE",
      label: "6 bottles",
      regularPrice: 474,
      price: 294,
      perBottle: 49,
      savings: 180,
      freeShipping: true,
      isPopular: true
    },
    {
      id: "3",
      bottles: 3,
      name: "LYMPH SUPERHERO",
      label: "3 bottles",
      regularPrice: 279,
      price: 207,
      perBottle: 69,
      savings: 72,
      freeShipping: true
    }
  ];

  const currentPackage = packages.find(p => p.id === selectedPackage) || packages[1];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-4">
          Limited Time Offer on Cardiovita
        </h1>

        {/* 3 Boxes Layout - Desktop: side by side, Mobile: stacked */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 max-w-6xl mx-auto">
          
          {/* Center Box - Package Selection (First on mobile) */}
          <div className="rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden w-full lg:w-[400px] lg:order-2">
            <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white text-center py-4 px-6">
              <h3 className="text-xl font-bold">CHOOSE YOUR PACKAGE</h3>
              <p className="text-sm mt-1">Select one of the options</p>
            </div>
            <div className="bg-white p-4 sm:p-6">
              {/* Package Options */}
              <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                <div className="flex justify-center gap-2 sm:gap-4 mb-6">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`relative cursor-pointer transition-all ${
                        selectedPackage === pkg.id ? 'scale-105' : ''
                      }`}
                    >
                      <RadioGroupItem value={pkg.id} className="sr-only" />
                      <div
                        className={`border-2 rounded-lg text-center transition-all ${
                          selectedPackage === pkg.id
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-300 hover:border-gray-400'
                        } ${
                          pkg.id === '6' 
                            ? 'p-3 sm:p-4 min-w-[70px] sm:min-w-[85px]' 
                            : 'p-2 sm:p-3 min-w-[70px] sm:min-w-[85px]'
                        }`}
                      >
                        {pkg.isPopular && (
                          <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap">
                            DOCTOR'S CHOICE
                          </div>
                        )}
                        <div className={`font-bold ${pkg.id === '6' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} mt-2`}>
                          {pkg.bottles}
                        </div>
                        <div className={pkg.id === '6' ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'}>
                          {pkg.bottles <= 1 ? 'bottle' : 'bottles'}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>

              {/* Price Display */}
              <div className="text-center space-y-2 mb-6">
                <p className="text-sm text-gray-600">
                  Regular Price: <span className="line-through">${currentPackage.regularPrice}</span>
                </p>
                {currentPackage.savings > 0 && (
                  <p className="text-base sm:text-lg font-bold text-red-600">
                    YOU SAVE: ${currentPackage.savings.toFixed(1)}
                  </p>
                )}
                <p className="text-xl sm:text-2xl font-bold text-teal-600">
                  ${currentPackage.perBottle.toFixed(1)} Per Bottle
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {currentPackage.id === "6" && (
                  <>
                    <div className="flex items-center gap-2 p-2 rounded bg-teal-500 text-white">
                      <Check className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold">FREE HEALTH EXPERT CALL</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-teal-500 text-white">
                      <Check className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold">2 FREE BONUS BOOKS</span>
                    </div>
                  </>
                )}
                <div className={`flex items-center gap-2 p-2 rounded ${currentPackage.freeShipping ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Check className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">FREE SHIPPING IN US</span>
                </div>
              </div>

              {/* Buy Button */}
              <a 
                href={
                  currentPackage.id === "2" ? "https://ab.capillex.shop/click/1" :
                  currentPackage.id === "3" ? "https://ab.capillex.shop/click/2" :
                  "https://ab.capillex.shop/click/3"
                }
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base sm:text-lg py-5 sm:py-6"
                  asChild
                >
                  <span>Buy Now</span>
                </Button>
              </a>

              {/* Reviews and Stock */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-xs sm:text-sm text-gray-600 ml-1">179 reviews</span>
                </div>
                <span className="text-xs sm:text-sm text-green-600 font-medium flex items-center gap-1">
                  <Check className="h-4 w-4" /> In Stock
                </span>
              </div>
            </div>
          </div>

          {/* Right Box - What's Included (Second on mobile) */}
          <div className="rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden w-full lg:w-[280px] lg:order-3">
            <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white text-center py-3 px-4">
              <h3 className="text-lg font-bold">INCLUDED</h3>
            </div>
            <div className="bg-white p-4">
              <div className="text-center">
                {/* Product Images */}
                <div className="flex items-center justify-center h-[200px]">
                  {currentPackage.id === "2" ? (
                    <img 
                      src="/lovable-uploads/978a2a68-1aed-4848-91b1-7185910a849b.png"
                      alt="2 bottles of Cardiovita"
                      className="h-full object-contain"
                    />
                  ) : currentPackage.id === "3" ? (
                    <img 
                      src="/lovable-uploads/b2e2323f-5669-4dc7-839b-7e9e640a43c2.png"
                      alt="3 bottles of Cardiovita"
                      className="h-full object-contain"
                    />
                  ) : currentPackage.id === "6" ? (
                    <img 
                      src="/lovable-uploads/974f6048-6484-442a-954e-429f4b6ff4ea.png"
                      alt="6 bottles of Cardiovita"
                      className="h-full object-contain"
                    />
                  ) : (
                    <img 
                      src={`/bottle-${currentPackage.bottles}.png`}
                      alt={`${currentPackage.bottles} bottles of Cardiovita`}
                      className="h-full object-contain"
                    />
                  )}
                </div>
                
                {/* Product Description */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">
                    {currentPackage.bottles} {currentPackage.bottles === 1 ? 'Bottle' : 'Bottles'} of Cardiovita
                  </p>
                  {currentPackage.id === "6" && (
                    <p className="text-xs text-teal-600 mt-2">
                      + 2 FREE Bonus Books
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Left Box - Guarantee (Third on mobile) */}
          <div className="rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden w-full lg:w-[280px] lg:order-1">
            <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white text-center py-3 px-4">
              <h3 className="text-base sm:text-lg font-bold">100% SATISFACTION GUARANTEE</h3>
            </div>
            <div className="bg-white p-4">
              <div className="text-center mb-3">
                <img 
                  src="/lovable-uploads/d9bff540-a356-4042-89df-d1ab12d89a1e.png" 
                  alt="Dr. Andrew Weil MD with 365 days money back guarantee"
                  className="w-full max-w-[220px] sm:max-w-[240px] mx-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                You have <strong>365 days to try Cardiovita</strong> and see the results for yourself risk-free. 
                If you are not 100% satisfied — simply contact us and we will gladly refund your money.
              </p>
            </div>
          </div>

        </div>

        {/* Trust Text */}
        <p className="text-center mt-6 sm:mt-8 text-gray-600 px-4 text-sm sm:text-base">
          Trusted by many, Cardiovita contributes to our total of 
          <strong className="text-teal-600"> 7,000+ satisfied customers</strong>
        </p>
      </div>
    </section>
  );
};

export default OrderSection;