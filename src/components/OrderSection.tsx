import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  const [subscribeAndSave, setSubscribeAndSave] = useState(false);

  const packages: PackageOption[] = [
    {
      id: "1",
      bottles: 1,
      name: "STARTER",
      label: "1 bottle",
      regularPrice: 69,
      price: 69,
      perBottle: 69,
      savings: 0,
      freeShipping: false
    },
    {
      id: "6",
      bottles: 6,
      name: "DOCTOR'S CHOICE",
      label: "6 bottles",
      regularPrice: 414,
      price: 226.8,
      perBottle: 37.8,
      savings: 187.2,
      freeShipping: true,
      isPopular: true
    },
    {
      id: "3",
      bottles: 3,
      name: "LYMPH SUPERHERO",
      label: "3 bottles",
      regularPrice: 207,
      price: 147,
      perBottle: 49,
      savings: 60,
      freeShipping: true
    }
  ];

  const currentPackage = packages.find(p => p.id === selectedPackage) || packages[1];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Limited Time Offer on Lymph System Support
        </h1>

        {/* 3 Boxes Layout */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Left Box - Guarantee */}
          <div className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-lg overflow-hidden">
            <div className="bg-teal-700 text-white text-center py-4 px-6">
              <h3 className="text-xl font-bold">100% SATISFACTION GUARANTEE</h3>
            </div>
            <div className="bg-white p-6">
              <div className="text-center mb-4">
                <img 
                  src="/dr-365-money-back.png" 
                  alt="365 days money back guarantee"
                  className="w-full max-w-[200px] mx-auto"
                />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                You have <strong>365 days to try Lymph System Support</strong> and see the results for yourself risk-free. 
                If you are not 100% satisfied — simply contact us and we will gladly refund your money.
              </p>
            </div>
          </div>

          {/* Center Box - Package Selection */}
          <div className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-lg overflow-hidden">
            <div className="bg-teal-700 text-white text-center py-4 px-6">
              <h3 className="text-xl font-bold">CHOOSE YOUR PACKAGE</h3>
              <p className="text-sm mt-1">Select one of the options</p>
            </div>
            <div className="bg-white p-6">
              {/* Package Options */}
              <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                <div className="flex justify-center gap-3 mb-6">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`relative cursor-pointer transition-all ${
                        selectedPackage === pkg.id ? 'scale-105' : ''
                      }`}
                    >
                      <RadioGroupItem value={pkg.id} className="sr-only" />
                      <div
                        className={`border-2 rounded-lg p-3 text-center transition-all ${
                          selectedPackage === pkg.id
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {pkg.isPopular && (
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                            DOCTOR'S CHOICE
                          </div>
                        )}
                        <div className="text-xs font-semibold mb-1">{pkg.name}</div>
                        <div className="text-2xl font-bold">{pkg.bottles}</div>
                        <div className="text-xs">{pkg.bottles === 1 ? 'bottle' : 'bottles'}</div>
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
                  <p className="text-lg font-bold text-red-600">
                    YOU SAVE: ${currentPackage.savings.toFixed(1)}
                  </p>
                )}
                <p className="text-2xl font-bold text-teal-600">
                  ${currentPackage.perBottle.toFixed(1)} Per Bottle
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                <div className={`flex items-center gap-2 p-2 rounded ${currentPackage.id === "6" || currentPackage.id === "3" ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-semibold">FREE HEALTH EXPERT CALL</span>
                </div>
                <div className={`flex items-center gap-2 p-2 rounded ${currentPackage.id === "6" || currentPackage.id === "3" ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-semibold">2 FREE BONUS BOOKS</span>
                </div>
                <div className={`flex items-center gap-2 p-2 rounded ${currentPackage.freeShipping ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-semibold">FREE SHIPPING IN US</span>
                </div>
              </div>

              {/* Purchase Options */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setSubscribeAndSave(false)}
                  className={`flex-1 py-2 px-4 rounded font-medium transition-all ${
                    !subscribeAndSave
                      ? 'bg-gray-100 border-2 border-teal-600 text-teal-600'
                      : 'bg-white border border-gray-300 text-gray-600'
                  }`}
                >
                  One Time Purchase
                </button>
                <button
                  onClick={() => setSubscribeAndSave(true)}
                  className={`flex-1 py-2 px-4 rounded font-medium transition-all relative ${
                    subscribeAndSave
                      ? 'bg-teal-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-600'
                  }`}
                >
                  Subscribe & Save
                  <span className="absolute -top-2 -right-2 bg-teal-700 text-white text-xs font-bold px-2 py-0.5 rounded">
                    45%
                  </span>
                </button>
              </div>

              {/* Subscribe Terms */}
              {subscribeAndSave && (
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  By selecting "Subscribe & Save" option above, you agree to receive a shipment of Lymph System Support 
                  every {currentPackage.bottles} month{currentPackage.bottles > 1 ? 's' : ''}. You are authorizing us to charge your credit card every {currentPackage.bottles} 
                  month{currentPackage.bottles > 1 ? 's' : ''}, matching the package you have selected. Coupon or discount codes can only be 
                  applied to initial purchases and such discounts do not apply to future autoship products.
                </p>
              )}

              {/* Buy Button */}
              <Button 
                size="lg" 
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6"
              >
                Buy Now
              </Button>

              {/* Reviews and Stock */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">179 reviews</span>
                </div>
                <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <Check className="h-4 w-4" /> In Stock
                </span>
              </div>
            </div>
          </div>

          {/* Right Box - What's Included */}
          <div className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-lg overflow-hidden">
            <div className="bg-teal-700 text-white text-center py-4 px-6">
              <h3 className="text-xl font-bold">INCLUDED</h3>
            </div>
            <div className="bg-white p-6">
              <div className="text-center">
                {/* Product Images */}
                <div className="mb-4">
                  <img 
                    src={`/bottle-${currentPackage.bottles}.png`}
                    alt={`${currentPackage.bottles} bottles of Lymph System Support`}
                    className="h-40 mx-auto"
                  />
                </div>
                
                {/* Free Bonus Badge */}
                {(currentPackage.id === "6" || currentPackage.id === "3") && (
                  <div className="relative mt-4">
                    <div className="absolute -top-3 right-0 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FREE
                    </div>
                    <img 
                      src="/3-badges.jpg"
                      alt="Free bonus books"
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
                
                {currentPackage.id === "1" && (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Get {currentPackage.bottles} bottle of Lymph System Support
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Trust Text */}
        <p className="text-center mt-8 text-gray-600">
          Trusted by many, Lymph System Support contributes to our total of 
          <strong className="text-teal-600"> 3,651,276+ satisfied customers</strong> since 2018
        </p>
      </div>
    </section>
  );
};

export default OrderSection;