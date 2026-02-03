export interface DietItem {
  name: string;
  description: string;
  benefits: string;
}

export interface Disease {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  foodsToEat: DietItem[];
  foodsToAvoid: DietItem[];
  tips: string[];
}

export const diseases: Disease[] = [
  {
    id: "diabetes",
    name: "Diabetes",
    icon: "🩸",
    description: "A metabolic disease that causes high blood sugar. Diet plays a crucial role in managing blood glucose levels.",
    color: "from-blue-500 to-cyan-500",
    foodsToEat: [
      { name: "Leafy Greens", description: "Spinach, kale, lettuce", benefits: "Low in carbs, high in nutrients" },
      { name: "Whole Grains", description: "Oats, quinoa, brown rice", benefits: "Slow-releasing energy" },
      { name: "Lean Proteins", description: "Fish, chicken, tofu", benefits: "Helps maintain muscle mass" },
      { name: "Nuts & Seeds", description: "Almonds, walnuts, chia", benefits: "Healthy fats & fiber" },
      { name: "Berries", description: "Blueberries, strawberries", benefits: "Low glycemic, antioxidants" },
      { name: "Legumes", description: "Lentils, chickpeas, beans", benefits: "High fiber, protein" },
    ],
    foodsToAvoid: [
      { name: "Sugary Drinks", description: "Sodas, fruit juices", benefits: "Spikes blood sugar rapidly" },
      { name: "White Bread", description: "Refined flour products", benefits: "High glycemic index" },
      { name: "Fried Foods", description: "Deep-fried snacks", benefits: "Trans fats, inflammation" },
      { name: "Candy & Sweets", description: "Chocolates, candies", benefits: "Pure sugar, no nutrients" },
      { name: "Processed Meats", description: "Sausages, bacon", benefits: "High sodium, preservatives" },
    ],
    tips: [
      "Eat at regular intervals to maintain steady blood sugar",
      "Monitor portion sizes carefully",
      "Choose complex carbohydrates over simple sugars",
      "Stay hydrated with water instead of sugary beverages",
    ],
  },
  {
    id: "heart-disease",
    name: "Heart Disease",
    icon: "❤️",
    description: "Conditions affecting the heart and blood vessels. A heart-healthy diet can reduce risks significantly.",
    color: "from-red-500 to-pink-500",
    foodsToEat: [
      { name: "Fatty Fish", description: "Salmon, mackerel, sardines", benefits: "Omega-3 fatty acids" },
      { name: "Olive Oil", description: "Extra virgin olive oil", benefits: "Healthy monounsaturated fats" },
      { name: "Avocados", description: "Fresh avocados", benefits: "Potassium & healthy fats" },
      { name: "Whole Grains", description: "Oats, whole wheat", benefits: "Fiber reduces cholesterol" },
      { name: "Berries", description: "All types of berries", benefits: "Antioxidants protect heart" },
      { name: "Dark Chocolate", description: "70%+ cocoa", benefits: "Flavonoids improve heart health" },
    ],
    foodsToAvoid: [
      { name: "Trans Fats", description: "Margarine, fried foods", benefits: "Raises bad cholesterol" },
      { name: "Red Meat", description: "Beef, pork, lamb", benefits: "High in saturated fat" },
      { name: "Salt/Sodium", description: "Processed & canned foods", benefits: "Raises blood pressure" },
      { name: "Sugary Foods", description: "Desserts, sodas", benefits: "Contributes to obesity" },
      { name: "Alcohol", description: "Excessive consumption", benefits: "Weakens heart muscle" },
    ],
    tips: [
      "Limit sodium intake to less than 2,300mg daily",
      "Choose lean proteins like fish and poultry",
      "Include fiber-rich foods in every meal",
      "Cook at home to control ingredients",
    ],
  },
  {
    id: "hypertension",
    name: "Hypertension",
    icon: "💉",
    description: "High blood pressure that can lead to serious health issues. Diet modifications can help control it naturally.",
    color: "from-purple-500 to-violet-500",
    foodsToEat: [
      { name: "Bananas", description: "Potassium-rich fruit", benefits: "Helps lower blood pressure" },
      { name: "Leafy Greens", description: "Spinach, kale, arugula", benefits: "High in potassium" },
      { name: "Beets", description: "Fresh or juiced", benefits: "Nitrates relax blood vessels" },
      { name: "Garlic", description: "Fresh garlic cloves", benefits: "Natural blood thinner" },
      { name: "Yogurt", description: "Low-fat, unsweetened", benefits: "Calcium for blood pressure" },
      { name: "Pomegranates", description: "Fresh or juiced", benefits: "Reduces arterial plaque" },
    ],
    foodsToAvoid: [
      { name: "Salt", description: "Table salt, soy sauce", benefits: "Directly raises BP" },
      { name: "Caffeine", description: "Coffee, energy drinks", benefits: "Temporarily spikes BP" },
      { name: "Alcohol", description: "All alcoholic beverages", benefits: "Raises blood pressure" },
      { name: "Canned Foods", description: "Soups, vegetables", benefits: "High sodium content" },
      { name: "Deli Meats", description: "Processed lunch meats", benefits: "High in sodium" },
    ],
    tips: [
      "Follow the DASH diet approach",
      "Reduce sodium gradually for lasting change",
      "Eat potassium-rich foods daily",
      "Maintain a healthy weight",
    ],
  },
  {
    id: "kidney-disease",
    name: "Kidney Disease",
    icon: "🫘",
    description: "Conditions affecting kidney function. Diet helps reduce strain on kidneys and manage symptoms.",
    color: "from-amber-500 to-orange-500",
    foodsToEat: [
      { name: "Cauliflower", description: "Steamed or roasted", benefits: "Low potassium, vitamin C" },
      { name: "Cabbage", description: "Green or red cabbage", benefits: "Low in potassium & phosphorus" },
      { name: "Garlic", description: "Fresh garlic", benefits: "Flavor without salt" },
      { name: "Egg Whites", description: "Without yolks", benefits: "High-quality, low-phosphorus protein" },
      { name: "Apples", description: "Fresh with skin", benefits: "Fiber, low potassium" },
      { name: "Cranberries", description: "Fresh or dried", benefits: "Prevents UTIs" },
    ],
    foodsToAvoid: [
      { name: "Bananas", description: "High potassium fruit", benefits: "Strains kidneys" },
      { name: "Dairy Products", description: "Milk, cheese, yogurt", benefits: "High in phosphorus" },
      { name: "Nuts & Seeds", description: "Most varieties", benefits: "High phosphorus content" },
      { name: "Processed Foods", description: "Packaged snacks", benefits: "Hidden phosphorus" },
      { name: "Dark Sodas", description: "Cola drinks", benefits: "Phosphoric acid" },
    ],
    tips: [
      "Monitor protein intake as advised by doctor",
      "Track potassium and phosphorus levels",
      "Stay hydrated but don't overdo fluids",
      "Read food labels for hidden additives",
    ],
  },
  {
    id: "thyroid",
    name: "Thyroid Disorders",
    icon: "🦋",
    description: "Conditions affecting thyroid hormone production. Diet can support thyroid function and medication effectiveness.",
    color: "from-teal-500 to-emerald-500",
    foodsToEat: [
      { name: "Seafood", description: "Fish, shrimp, seaweed", benefits: "Natural iodine source" },
      { name: "Brazil Nuts", description: "1-2 daily", benefits: "Selenium for thyroid" },
      { name: "Eggs", description: "Whole eggs", benefits: "Iodine and selenium" },
      { name: "Dairy", description: "Milk, cheese, yogurt", benefits: "Iodine content" },
      { name: "Berries", description: "All varieties", benefits: "Antioxidants support function" },
      { name: "Lean Meats", description: "Chicken, turkey", benefits: "Zinc for hormone production" },
    ],
    foodsToAvoid: [
      { name: "Soy Products", description: "Tofu, soy milk", benefits: "May interfere with absorption" },
      { name: "Cruciferous Raw", description: "Raw broccoli, cabbage", benefits: "Goitrogens when raw" },
      { name: "Gluten", description: "For some patients", benefits: "May trigger inflammation" },
      { name: "Processed Foods", description: "Fast food, packaged", benefits: "Additives affect thyroid" },
      { name: "Excessive Fiber", description: "Too much at once", benefits: "Blocks medication absorption" },
    ],
    tips: [
      "Take thyroid medication on an empty stomach",
      "Wait 4 hours before calcium supplements",
      "Cook cruciferous vegetables to reduce goitrogens",
      "Maintain consistent iodine intake",
    ],
  },
  {
    id: "gastric",
    name: "Gastric Issues",
    icon: "🫃",
    description: "Digestive problems including GERD, ulcers, and gastritis. Diet modifications provide significant relief.",
    color: "from-lime-500 to-green-500",
    foodsToEat: [
      { name: "Ginger", description: "Fresh or tea", benefits: "Soothes stomach, anti-nausea" },
      { name: "Oatmeal", description: "Plain, unsweetened", benefits: "Absorbs stomach acid" },
      { name: "Bananas", description: "Ripe bananas", benefits: "Natural antacid effect" },
      { name: "Lean Proteins", description: "Grilled chicken, fish", benefits: "Easy to digest" },
      { name: "Melons", description: "Watermelon, honeydew", benefits: "Low acid, hydrating" },
      { name: "Green Vegetables", description: "Steamed veggies", benefits: "Low acid, nutritious" },
    ],
    foodsToAvoid: [
      { name: "Spicy Foods", description: "Chili, hot peppers", benefits: "Irritates stomach lining" },
      { name: "Citrus Fruits", description: "Oranges, lemons", benefits: "High acid content" },
      { name: "Tomatoes", description: "Fresh or sauces", benefits: "Acidic, triggers reflux" },
      { name: "Coffee", description: "Regular or decaf", benefits: "Stimulates acid production" },
      { name: "Alcohol", description: "All types", benefits: "Damages stomach lining" },
      { name: "Fried Foods", description: "Oily, greasy items", benefits: "Hard to digest" },
    ],
    tips: [
      "Eat smaller, more frequent meals",
      "Don't lie down right after eating",
      "Chew food thoroughly",
      "Avoid eating 3 hours before bed",
    ],
  },
];
