import { ArrowLeft, Check, X, Lightbulb } from "lucide-react";
import { Disease } from "@/data/diseases";

interface DiseaseDetailProps {
  disease: Disease;
  onBack: () => void;
}

const DiseaseDetail = ({ disease, onBack }: DiseaseDetailProps) => {
  return (
    <div className="animate-fade-in">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all conditions
      </button>

      {/* Header */}
      <div className="bg-card rounded-2xl border border-border p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="text-6xl">{disease.icon}</div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {disease.name} Diet Plan
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {disease.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Foods to Eat */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="bg-success/10 px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success">
                <Check className="h-5 w-5 text-success-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Foods to Eat</h2>
                <p className="text-sm text-muted-foreground">Recommended for your condition</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {disease.foodsToEat.map((food, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{food.name}</h3>
                  <p className="text-sm text-muted-foreground">{food.description}</p>
                  <p className="text-xs text-success mt-1">{food.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Foods to Avoid */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="bg-destructive/10 px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive">
                <X className="h-5 w-5 text-destructive-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Foods to Avoid</h2>
                <p className="text-sm text-muted-foreground">Limit or eliminate these foods</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {disease.foodsToAvoid.map((food, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                  <X className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{food.name}</h3>
                  <p className="text-sm text-muted-foreground">{food.description}</p>
                  <p className="text-xs text-destructive mt-1">{food.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips section */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="bg-accent/20 px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
              <Lightbulb className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Helpful Tips</h2>
              <p className="text-sm text-muted-foreground">Additional dietary guidelines</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {disease.tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {index + 1}
                </span>
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
        <p className="text-xs text-muted-foreground text-center">
          ⚠️ <strong>Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. 
          Always consult with your healthcare provider before making any dietary changes.
        </p>
      </div>
    </div>
  );
};

export default DiseaseDetail;
