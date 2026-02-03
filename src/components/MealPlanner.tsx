import { Clock, Utensils, Info } from "lucide-react";
import { Disease } from "@/data/diseases";

interface MealPlannerProps {
  disease: Disease;
}

const MealPlanner = ({ disease }: MealPlannerProps) => {
  const getMealIcon = (meal: string) => {
    if (meal.includes("Breakfast")) return "🌅";
    if (meal.includes("Lunch")) return "☀️";
    if (meal.includes("Dinner")) return "🌙";
    if (meal.includes("Snack")) return "🍎";
    if (meal.includes("Medication")) return "💊";
    return "🍽️";
  };

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="bg-accent/20 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <Utensils className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Daily Meal Planner</h2>
            <p className="text-sm text-muted-foreground">Personalized schedule for {disease.name}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Timeline */}
        <div className="relative">
          {disease.mealPlan.map((meal, index) => (
            <div key={index} className="relative pl-8 pb-8 last:pb-0">
              {/* Timeline line */}
              {index !== disease.mealPlan.length - 1 && (
                <div className="absolute left-[15px] top-8 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {getMealIcon(meal.meal)}
              </div>

              {/* Content */}
              <div className="bg-secondary/50 rounded-xl p-4 ml-4 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{meal.time}</span>
                  <span className="text-sm font-medium text-foreground">— {meal.meal}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {meal.foods.map((food, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-background text-sm text-foreground border border-border"
                    >
                      {food}
                    </span>
                  ))}
                </div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <p>{meal.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
