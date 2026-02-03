import { ChevronRight } from "lucide-react";
import { Disease } from "@/data/diseases";

interface DiseaseCardProps {
  disease: Disease;
  onClick: () => void;
}

const DiseaseCard = ({ disease, onClick }: DiseaseCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-card rounded-2xl border border-border p-6 cursor-pointer hover-lift overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${disease.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative">
        {/* Icon */}
        <div className="text-4xl mb-4">{disease.icon}</div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {disease.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {disease.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-xs">
            <span className="text-success font-medium">{disease.foodsToEat.length}</span>
            <span className="text-muted-foreground"> foods to eat</span>
          </div>
          <div className="text-xs">
            <span className="text-destructive font-medium">{disease.foodsToAvoid.length}</span>
            <span className="text-muted-foreground"> to avoid</span>
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex items-center text-sm font-medium text-primary">
          View Diet Plan
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;
