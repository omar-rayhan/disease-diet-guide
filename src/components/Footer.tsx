import { Salad, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Salad className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Diet<span className="text-primary">Care</span>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Personalized diet recommendations for better health outcomes.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for your health
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DietCare. For educational purposes only. Always consult a healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
