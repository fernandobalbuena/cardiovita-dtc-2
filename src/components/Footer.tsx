import { Shield, Lock, Truck, HeadphonesIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#ingredients" className="hover:text-foreground">Ingredients</a></li>
              <li><a href="#benefits" className="hover:text-foreground">Benefits</a></li>
              <li><a href="#reviews" className="hover:text-foreground">Reviews</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About Us</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              <li><a href="#shipping" className="hover:text-foreground">Shipping Info</a></li>
              <li><a href="#returns" className="hover:text-foreground">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#privacy" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#disclaimer" className="hover:text-foreground">Disclaimer</a></li>
              <li><a href="#affiliate" className="hover:text-foreground">Affiliate Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Get Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <HeadphonesIcon className="h-4 w-4" />
                <span>24/7 Customer Support</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Secure Checkout</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Free US Shipping</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>180-Day Guarantee</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Lymph System Support. All rights reserved.
            </p>
            <div className="flex gap-4">
              <img src="/payment-visa.png" alt="Visa" className="h-8" />
              <img src="/payment-mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/payment-amex.png" alt="Amex" className="h-8" />
              <img src="/payment-paypal.png" alt="PayPal" className="h-8" />
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              * These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease. 
              Results may vary. Consult your physician before taking any dietary supplement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;