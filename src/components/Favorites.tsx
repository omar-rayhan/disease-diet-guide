import { useState, useEffect } from "react";
import { Heart, HeartOff, Bookmark, Clock, ChevronRight } from "lucide-react";
import { Disease } from "@/data/diseases";

interface FavoritesProps {
  diseases: Disease[];
  onViewPlan: (disease: Disease) => void;
}

const FAVORITES_KEY = "dietcare_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (diseaseId: string) => {
    setFavorites((prev) =>
      prev.includes(diseaseId)
        ? prev.filter((id) => id !== diseaseId)
        : [...prev, diseaseId]
    );
  };

  const isFavorite = (diseaseId: string) => favorites.includes(diseaseId);

  return { favorites, toggleFavorite, isFavorite };
};

export const FavoriteButton = ({
  diseaseId,
  isFavorite,
  onToggle,
  size = "md",
}: {
  diseaseId: string;
  isFavorite: boolean;
  onToggle: (id: string) => void;
  size?: "sm" | "md";
}) => {
  const sizeClasses = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle(diseaseId);
      }}
      className={`${sizeClasses} flex items-center justify-center rounded-full transition-all ${
        isFavorite
          ? "bg-destructive/10 text-destructive hover:bg-destructive/20"
          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
      }`}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? (
        <Heart className={`${iconSize} fill-current`} />
      ) : (
        <Heart className={iconSize} />
      )}
    </button>
  );
};

const Favorites = ({ diseases, onViewPlan }: FavoritesProps) => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const favoriteDiseases = diseases.filter((d) => favorites.includes(d.id));

  if (favoriteDiseases.length === 0) {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <Bookmark className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No Favorites Yet</h3>
        <p className="text-sm text-muted-foreground">
          Save your diet plans by clicking the heart icon on any condition card.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="bg-destructive/10 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive">
            <Heart className="h-5 w-5 text-destructive-foreground fill-current" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Your Saved Plans</h3>
            <p className="text-sm text-muted-foreground">{favoriteDiseases.length} diet plan(s) saved</p>
          </div>
        </div>
      </div>
      <div className="divide-y divide-border">
        {favoriteDiseases.map((disease) => (
          <div
            key={disease.id}
            className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
            onClick={() => onViewPlan(disease)}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{disease.icon}</span>
              <div>
                <h4 className="font-medium text-foreground">{disease.name}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {disease.mealPlan.length} meals/day
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FavoriteButton
                diseaseId={disease.id}
                isFavorite={isFavorite(disease.id)}
                onToggle={toggleFavorite}
                size="sm"
              />
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
