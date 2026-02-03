import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiseaseCard from "@/components/DiseaseCard";
import DiseaseDetail from "@/components/DiseaseDetail";
import Footer from "@/components/Footer";
import { diseases, Disease } from "@/data/diseases";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDiseases.map((disease) => (
                  <DiseaseCard
                    key={disease.id}
                    disease={disease}
                    onClick={() => handleDiseaseClick(disease)}
                  />
                ))}
              </div>
            )}
          </main>

          {/* How it works section */}
          <section id="how-it-works" className="bg-secondary/30 py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get personalized diet plans in three simple steps
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Select Condition",
                    description: "Browse our list of health conditions or search for your specific ailment",
                  },
                  {
                    step: "02",
                    title: "View Diet Plan",
                    description: "See detailed lists of foods to eat and avoid, tailored to your condition",
                  },
                  {
                    step: "03",
                    title: "Follow Guidelines",
                    description: "Apply the dietary tips and recommendations to improve your health",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card rounded-2xl border border-border p-8 h-full">
                      <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About section */}
          <section id="about" className="py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About DietCare
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  DietCare provides evidence-based dietary recommendations for various health conditions. 
                  Our goal is to help you understand how diet affects your health and provide clear, 
                  actionable guidance on what to eat and what to avoid.
                </p>
                <p className="text-muted-foreground">
                  Remember: While diet plays a crucial role in managing many health conditions, 
                  it should complement—not replace—medical treatment. Always consult with your 
                  healthcare provider before making significant dietary changes.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;
