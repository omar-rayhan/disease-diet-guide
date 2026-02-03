import { useState, useMemo } from "react";
import { MessageCircle, Grid3X3, Heart } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiseaseCard from "@/components/DiseaseCard";
import DiseaseDetail from "@/components/DiseaseDetail";
import DietChat from "@/components/DietChat";
import Favorites from "@/components/Favorites";
import Footer from "@/components/Footer";
import { diseases, Disease } from "@/data/diseases";

type ViewMode = "browse" | "chat" | "favorites";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("chat");

  const filteredDiseases = useMemo(() => {
    if (!searchQuery.trim()) return diseases;
    const query = searchQuery.toLowerCase();
    return diseases.filter(
      (disease) =>
        disease.name.toLowerCase().includes(query) ||
        disease.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleDiseaseClick = (disease: Disease) => {
    setSelectedDisease(disease);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedDisease(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {selectedDisease ? (
        <main className="container py-8">
          <DiseaseDetail disease={selectedDisease} onBack={handleBack} />
        </main>
      ) : (
        <>
          <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <main className="container py-16" id="diseases">
            {/* View mode tabs */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setViewMode("chat")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  viewMode === "chat"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                Ask AI
              </button>
              <button
                onClick={() => setViewMode("browse")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  viewMode === "browse"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
                Browse All
              </button>
              <button
                onClick={() => setViewMode("favorites")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  viewMode === "favorites"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Heart className="h-5 w-5" />
                Saved
              </button>
            </div>

            {/* Chat View */}
            {viewMode === "chat" && (
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Get Personalized Recommendations
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Tell me your condition and I'll recommend what to eat and when
                  </p>
                </div>
                <DietChat onViewFullPlan={handleDiseaseClick} />
              </div>
            )}

            {/* Browse View */}
            {viewMode === "browse" && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Browse by Condition
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Select your health condition to discover personalized dietary recommendations
                  </p>
                </div>

                {filteredDiseases.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No conditions found matching "{searchQuery}"
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-4 text-primary hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredDiseases.map((disease) => (
                      <DiseaseCard
                        key={disease.id}
                        disease={disease}
                        onClick={() => handleDiseaseClick(disease)}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Favorites View */}
            {viewMode === "favorites" && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Your Saved Diet Plans
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Quick access to your favorite diet recommendations
                  </p>
                </div>
                <Favorites diseases={diseases} onViewPlan={handleDiseaseClick} />
              </div>
            )}
          </main>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;
