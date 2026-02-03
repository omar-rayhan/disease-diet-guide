export interface DietItem {
  name: string;
  description: string;
  benefits: string;
}

export interface MealTiming {
  time: string;
  meal: string;
  foods: string[];
  notes: string;
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
  mealPlan: MealTiming[];
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
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Oatmeal with berries", "Boiled eggs", "Green tea"], notes: "Start with fiber to slow glucose absorption" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["A handful of almonds", "Apple slices"], notes: "Keep blood sugar stable between meals" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled chicken salad", "Quinoa", "Steamed vegetables"], notes: "Protein + complex carbs for sustained energy" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Greek yogurt", "Walnuts"], notes: "Protein-rich snack to avoid sugar dips" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Baked fish", "Brown rice", "Sautéed greens"], notes: "Light dinner, avoid heavy carbs at night" },
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
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Oatmeal with walnuts", "Fresh berries", "Green tea"], notes: "Fiber-rich start to lower cholesterol" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Handful of almonds", "Orange"], notes: "Heart-healthy fats and vitamin C" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled salmon", "Quinoa salad", "Steamed broccoli"], notes: "Omega-3 rich meal for heart protection" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Avocado toast on whole grain", "Herbal tea"], notes: "Healthy fats without sodium" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Baked chicken breast", "Sweet potato", "Mixed greens with olive oil"], notes: "Low-sodium, heart-friendly dinner" },
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
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Banana smoothie with spinach", "Whole grain toast", "Herbal tea"], notes: "Potassium-rich start to the day" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Fresh beet juice", "Unsalted nuts"], notes: "Nitrates help relax blood vessels" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled fish with lemon", "Brown rice", "Steamed kale"], notes: "Low-sodium, high-potassium meal" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Low-fat yogurt", "Pomegranate seeds"], notes: "Calcium and antioxidants for BP control" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Garlic herb chicken", "Roasted vegetables", "Quinoa"], notes: "Garlic naturally supports blood pressure" },
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
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Egg white omelette", "White bread toast", "Apple juice"], notes: "Low-phosphorus protein start" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Fresh apple slices", "Rice cakes"], notes: "Low-potassium snack option" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled chicken breast", "White rice", "Steamed cabbage"], notes: "Controlled protein with low-potassium veggies" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Cranberry juice", "Plain crackers"], notes: "Kidney-friendly, helps prevent UTIs" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Baked fish (small portion)", "Cauliflower mash", "Green beans"], notes: "Light dinner, kidney-friendly foods" },
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
    mealPlan: [
      { time: "6:30 AM", meal: "Medication", foods: ["Thyroid medication with water only"], notes: "Take on empty stomach, wait 30-60 min before eating" },
      { time: "7:30 AM", meal: "Breakfast", foods: ["Eggs with cheese", "Whole grain toast", "Milk"], notes: "Iodine and selenium-rich breakfast" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Greek yogurt", "2 Brazil nuts"], notes: "Selenium boost for thyroid function" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled shrimp", "Rice", "Cooked broccoli"], notes: "Cook cruciferous veggies to reduce goitrogens" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Mixed berries", "Turkey slices"], notes: "Antioxidants and zinc" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Baked salmon", "Sweet potato", "Steamed spinach"], notes: "Iodine-rich dinner, supports hormone production" },
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
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Plain oatmeal with banana", "Ginger tea"], notes: "Soothing start, oatmeal absorbs acid" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Melon slices", "Plain crackers"], notes: "Low-acid, easy to digest" },
      { time: "12:30 PM", meal: "Lunch", foods: ["Grilled chicken", "White rice", "Steamed zucchini"], notes: "Bland, non-irritating foods" },
      { time: "3:30 PM", meal: "Afternoon Snack", foods: ["Ripe banana", "Chamomile tea"], notes: "Natural antacid effect" },
      { time: "6:00 PM", meal: "Early Dinner", foods: ["Baked fish", "Mashed potato", "Steamed carrots"], notes: "Eat early, avoid lying down after" },
    ],
  },
  {
    id: "anemia",
    name: "Anemia",
    icon: "🩺",
    description: "A condition where you lack enough healthy red blood cells. Iron-rich foods are essential for recovery.",
    color: "from-rose-500 to-red-500",
    foodsToEat: [
      { name: "Red Meat", description: "Beef, lamb (lean cuts)", benefits: "Heme iron, easily absorbed" },
      { name: "Spinach", description: "Fresh or cooked", benefits: "High in iron and folate" },
      { name: "Legumes", description: "Lentils, chickpeas, beans", benefits: "Plant-based iron source" },
      { name: "Fortified Cereals", description: "Iron-fortified options", benefits: "Easy iron boost" },
      { name: "Citrus Fruits", description: "Oranges, lemons", benefits: "Vitamin C enhances iron absorption" },
      { name: "Eggs", description: "Especially egg yolks", benefits: "Iron and B12 content" },
    ],
    foodsToAvoid: [
      { name: "Tea & Coffee", description: "With meals", benefits: "Tannins block iron absorption" },
      { name: "Calcium-Rich Foods", description: "With iron meals", benefits: "Calcium inhibits iron uptake" },
      { name: "Whole Grains", description: "In excess with iron", benefits: "Phytates reduce absorption" },
      { name: "Red Wine", description: "With iron-rich meals", benefits: "Polyphenols block absorption" },
      { name: "Antacids", description: "Around meal times", benefits: "Reduces stomach acid needed for iron" },
    ],
    tips: [
      "Pair iron-rich foods with vitamin C for better absorption",
      "Avoid tea/coffee 1 hour before and after iron-rich meals",
      "Cook in cast iron pans to boost iron content",
      "Take iron supplements on an empty stomach if tolerated",
    ],
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Iron-fortified cereal", "Orange juice", "Scrambled eggs"], notes: "Vitamin C with iron for maximum absorption" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Dried apricots", "Pumpkin seeds"], notes: "Iron-rich snacks between meals" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled beef steak", "Spinach salad with lemon", "Lentil soup"], notes: "Heme iron + citrus for absorption" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Hummus with bell peppers", "Handful of cashews"], notes: "Plant iron with vitamin C" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Lamb chops", "Sautéed kale", "Quinoa"], notes: "Iron-rich dinner, avoid dairy during meal" },
    ],
  },
  {
    id: "liver-disease",
    name: "Liver Disease",
    icon: "🫁",
    description: "Conditions affecting liver function including fatty liver and hepatitis. Diet is crucial for liver healing.",
    color: "from-yellow-500 to-amber-500",
    foodsToEat: [
      { name: "Leafy Greens", description: "Spinach, kale, arugula", benefits: "Antioxidants support liver" },
      { name: "Cruciferous Vegetables", description: "Broccoli, Brussels sprouts", benefits: "Helps detoxification" },
      { name: "Garlic", description: "Fresh garlic", benefits: "Activates liver enzymes" },
      { name: "Green Tea", description: "Unsweetened", benefits: "Catechins protect liver" },
      { name: "Olive Oil", description: "Extra virgin", benefits: "Reduces fat accumulation" },
      { name: "Walnuts", description: "Raw, unsalted", benefits: "Omega-3 for liver health" },
    ],
    foodsToAvoid: [
      { name: "Alcohol", description: "All types completely", benefits: "Directly damages liver cells" },
      { name: "Fried Foods", description: "Deep-fried items", benefits: "Increases liver fat" },
      { name: "Sugary Foods", description: "Sweets, sodas", benefits: "Contributes to fatty liver" },
      { name: "Red Meat", description: "High-fat cuts", benefits: "Hard for liver to process" },
      { name: "Salt", description: "High-sodium foods", benefits: "Causes fluid retention" },
      { name: "Processed Foods", description: "Packaged snacks", benefits: "Additives stress liver" },
    ],
    tips: [
      "Absolutely avoid all alcohol",
      "Stay well hydrated with water",
      "Eat smaller, frequent meals",
      "Choose organic when possible to reduce toxin load",
    ],
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Oatmeal with blueberries", "Green tea", "Fresh fruit"], notes: "Antioxidant-rich start for liver protection" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Fresh vegetable juice", "Walnuts"], notes: "Detoxifying nutrients" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled chicken breast", "Large mixed salad with olive oil", "Steamed broccoli"], notes: "Lean protein with liver-friendly veggies" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Green tea", "Apple slices"], notes: "Catechins support liver function" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Baked fish", "Roasted Brussels sprouts", "Brown rice"], notes: "Light dinner supports overnight liver repair" },
    ],
  },
  {
    id: "arthritis",
    name: "Arthritis",
    icon: "🦴",
    description: "Inflammatory joint conditions causing pain and stiffness. Anti-inflammatory diet can reduce symptoms significantly.",
    color: "from-indigo-500 to-purple-500",
    foodsToEat: [
      { name: "Fatty Fish", description: "Salmon, mackerel, sardines", benefits: "Omega-3 reduces inflammation" },
      { name: "Turmeric", description: "Fresh or powder", benefits: "Curcumin fights inflammation" },
      { name: "Olive Oil", description: "Extra virgin", benefits: "Oleocanthal acts like NSAIDs" },
      { name: "Berries", description: "All types", benefits: "Antioxidants reduce joint damage" },
      { name: "Ginger", description: "Fresh root", benefits: "Natural anti-inflammatory" },
      { name: "Leafy Greens", description: "Spinach, kale", benefits: "Vitamin K protects joints" },
    ],
    foodsToAvoid: [
      { name: "Processed Foods", description: "Packaged, fast food", benefits: "Triggers inflammation" },
      { name: "Sugar", description: "Refined sugars", benefits: "Increases inflammatory markers" },
      { name: "Red Meat", description: "High-fat cuts", benefits: "Contains inflammatory compounds" },
      { name: "Fried Foods", description: "Deep-fried items", benefits: "Trans fats worsen inflammation" },
      { name: "Nightshades", description: "For some people", benefits: "May trigger flares in sensitive individuals" },
      { name: "Alcohol", description: "Excessive amounts", benefits: "Can interact with medications" },
    ],
    tips: [
      "Include turmeric with black pepper for better absorption",
      "Maintain a healthy weight to reduce joint stress",
      "Try an elimination diet to identify trigger foods",
      "Stay physically active with gentle exercises",
    ],
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Turmeric golden milk", "Oatmeal with berries", "Green tea"], notes: "Start with anti-inflammatory turmeric" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Mixed nuts", "Fresh berries"], notes: "Antioxidants and healthy fats" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled salmon", "Kale salad with olive oil", "Quinoa"], notes: "Omega-3 rich meal reduces inflammation" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Ginger tea", "Dark chocolate (small)"], notes: "Ginger soothes joint pain" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Turmeric chicken curry", "Brown rice", "Steamed broccoli"], notes: "Anti-inflammatory dinner" },
    ],
  },
  {
    id: "pcos",
    name: "PCOS",
    icon: "🌸",
    description: "Polycystic Ovary Syndrome affects hormone levels. Diet helps manage insulin resistance and symptoms.",
    color: "from-pink-500 to-rose-500",
    foodsToEat: [
      { name: "Leafy Greens", description: "Spinach, kale", benefits: "Low glycemic, nutrient-dense" },
      { name: "Lean Proteins", description: "Chicken, fish, tofu", benefits: "Stabilizes blood sugar" },
      { name: "Berries", description: "All types", benefits: "Antioxidants, low sugar" },
      { name: "Nuts & Seeds", description: "Walnuts, flaxseeds", benefits: "Healthy fats, hormone balance" },
      { name: "Whole Grains", description: "Quinoa, oats", benefits: "Fiber helps insulin resistance" },
      { name: "Fatty Fish", description: "Salmon, sardines", benefits: "Omega-3 reduces inflammation" },
    ],
    foodsToAvoid: [
      { name: "Refined Carbs", description: "White bread, pasta", benefits: "Spikes insulin levels" },
      { name: "Sugary Foods", description: "Candy, pastries", benefits: "Worsens insulin resistance" },
      { name: "Dairy", description: "For some women", benefits: "May increase androgens" },
      { name: "Processed Foods", description: "Packaged snacks", benefits: "Hidden sugars, unhealthy fats" },
      { name: "Soy Products", description: "In large amounts", benefits: "May affect hormone levels" },
      { name: "Caffeine", description: "Excessive amounts", benefits: "Can affect hormones" },
    ],
    tips: [
      "Focus on low glycemic index foods",
      "Eat regular, balanced meals to stabilize blood sugar",
      "Include anti-inflammatory foods daily",
      "Consider reducing dairy to see if symptoms improve",
    ],
    mealPlan: [
      { time: "7:00 AM", meal: "Breakfast", foods: ["Veggie omelette with spinach", "Avocado", "Herbal tea"], notes: "Protein-rich start to stabilize insulin" },
      { time: "10:00 AM", meal: "Mid-Morning Snack", foods: ["Greek yogurt (if tolerated) with berries", "Flaxseeds"], notes: "Healthy fats support hormone balance" },
      { time: "1:00 PM", meal: "Lunch", foods: ["Grilled chicken", "Large leafy salad", "Quinoa"], notes: "Low-GI meal prevents insulin spikes" },
      { time: "4:00 PM", meal: "Evening Snack", foods: ["Handful of walnuts", "Apple slices"], notes: "Omega-3 and fiber combo" },
      { time: "7:00 PM", meal: "Dinner", foods: ["Baked salmon", "Roasted vegetables", "Brown rice"], notes: "Anti-inflammatory dinner supports hormones" },
    ],
  },
];
