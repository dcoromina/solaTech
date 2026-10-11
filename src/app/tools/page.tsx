"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Calculator,
  Flame,
  Apple,
  Sparkles,
  User,
  Info,
  ChevronRight,
} from "lucide-react";

type UnitSystem = "metric" | "imperial";
type Gender = "male" | "female";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "extreme";
type FitnessGoal = "lose" | "maintain" | "gain";
type DietType = "balanced" | "lowcarb" | "highprotein" | "keto";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<"bmi" | "bmr" | "calories" | "macros">("bmi");

  // Sync tab with URL search parameter if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab") as any;
      if (tab && ["bmi", "bmr", "calories", "macros"].includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  // Common input states
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<number>(25);

  // Height states
  const [heightCm, setHeightCm] = useState<number>(175);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);

  // Weight states
  const [weightKg, setWeightKg] = useState<number>(70);
  const [weightLbs, setWeightLbs] = useState<number>(154);

  // Target Weight states for caloric calculator
  const [targetWeightKg, setTargetWeightKg] = useState<number>(65);
  const [targetWeightLbs, setTargetWeightLbs] = useState<number>(143);
  const [weeklyChangeRate, setWeeklyChangeRate] = useState<number>(0.5); // 0.5 kg or 1 lb

  // BMR & Macro specific states
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [fitnessGoal, setFitnessGoal] = useState<FitnessGoal>("maintain");
  const [dietType, setDietType] = useState<DietType>("balanced");

  // Helper conversions
  const getWeightInKg = () => {
    return unitSystem === "metric" ? weightKg : parseFloat((weightLbs * 0.45359237).toFixed(1));
  };

  const getHeightInCm = () => {
    if (unitSystem === "metric") return heightCm;
    const totalInches = heightFt * 12 + heightIn;
    return parseFloat((totalInches * 2.54).toFixed(1));
  };

  // 1. BMI Calculation & Results
  const calculateBMI = () => {
    let bmiValue = 0;
    if (unitSystem === "metric") {
      const heightM = heightCm / 100;
      if (heightM > 0) bmiValue = weightKg / (heightM * heightM);
    } else {
      const totalInches = heightFt * 12 + heightIn;
      if (totalInches > 0) bmiValue = (weightLbs * 703) / (totalInches * totalInches);
    }
    return parseFloat(bmiValue.toFixed(1));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400 bg-blue-500/10 border-blue-500/30", scoreColor: "bg-blue-400" };
    if (bmi < 25) return { label: "Healthy Weight", color: "text-teal-400 bg-teal-500/10 border-teal-500/30", scoreColor: "bg-teal-400" };
    if (bmi < 30) return { label: "Overweight", color: "text-orange-400 bg-orange-500/10 border-orange-500/30", scoreColor: "bg-orange-400" };
    return { label: "Obese", color: "text-red-400 bg-red-500/10 border-red-500/30", scoreColor: "bg-red-400" };
  };

  const getHealthyWeightRange = () => {
    const heightCmVal = getHeightInCm();
    const heightM = heightCmVal / 100;
    const minKg = 18.5 * heightM * heightM;
    const maxKg = 24.9 * heightM * heightM;

    if (unitSystem === "metric") {
      return `${minKg.toFixed(1)} kg - ${maxKg.toFixed(1)} kg`;
    } else {
      const minLbs = minKg / 0.45359237;
      const maxLbs = maxKg / 0.45359237;
      return `${minLbs.toFixed(1)} lbs - ${maxLbs.toFixed(1)} lbs`;
    }
  };

  // 2. BMR & TDEE Calculations
  const calculateBMR = () => {
    const w = getWeightInKg();
    const h = getHeightInCm();
    // Mifflin-St Jeor Equation
    let bmrVal = 10 * w + 6.25 * h - 5 * age;
    if (gender === "male") {
      bmrVal += 5;
    } else {
      bmrVal -= 161;
    }
    return Math.round(bmrVal);
  };

  const getActivityMultiplier = (level: ActivityLevel) => {
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      extreme: 1.9,
    };
    return multipliers[level];
  };

  const calculateTDEE = (bmr: number) => {
    return Math.round(bmr * getActivityMultiplier(activityLevel));
  };

  // Caloric adjustment and target calorie intake helpers
  const getCaloricAdjustment = () => {
    if (fitnessGoal === "maintain") return 0;
    
    let calories = 0;
    if (unitSystem === "metric") {
      // 1 kg = 7700 calories -> 7700 * weeklyChangeRate / 7 days
      calories = Math.round((7700 * weeklyChangeRate) / 7);
    } else {
      // 1 lb = 3500 calories -> 3500 * weeklyChangeRate / 7 days
      calories = Math.round((3500 * weeklyChangeRate) / 7);
    }
    
    return fitnessGoal === "lose" ? -calories : calories;
  };

  const getTargetCalories = (tdeeVal: number) => {
    const adj = getCaloricAdjustment();
    const rawTarget = tdeeVal + adj;
    const minSafe = gender === "female" ? 1200 : 1500;
    return {
      raw: rawTarget,
      safe: Math.max(rawTarget, minSafe),
      isBelowFloor: rawTarget < minSafe,
      adjustment: adj
    };
  };

  // 3. Macro Calculator
  const calculateMacros = (targetCalVal: number) => {
    // Protein: 4 kcal/g, Carbs: 4 kcal/g, Fat: 9 kcal/g
    const ratios = {
      balanced: { p: 0.30, c: 0.40, f: 0.30 },
      lowcarb: { p: 0.35, c: 0.25, f: 0.40 },
      highprotein: { p: 0.40, c: 0.30, f: 0.30 },
      keto: { p: 0.20, c: 0.05, f: 0.75 },
    };

    const ratio = ratios[dietType];
    const proteinG = Math.max(0, Math.round((targetCalVal * ratio.p) / 4));
    const carbsG = Math.max(0, Math.round((targetCalVal * ratio.c) / 4));
    const fatG = Math.max(0, Math.round((targetCalVal * ratio.f) / 9));

    return {
      calories: targetCalVal,
      protein: proteinG,
      carbs: carbsG,
      fat: fatG,
      ratios: ratio,
    };
  };

  // Calculated values
  const bmi = calculateBMI();
  const bmiCat = getBMICategory(bmi);
  const healthyRange = getHealthyWeightRange();

  const bmr = calculateBMR();
  const tdee = calculateTDEE(bmr);
  const calorieTargetObj = getTargetCalories(tdee);
  const macros = calculateMacros(calorieTargetObj.safe);

  const handleUnitSystemChange = (system: UnitSystem) => {
    setUnitSystem(system);
    // Convert current values to make the experience smooth
    if (system === "metric") {
      // Imperial to Metric
      const cm = getHeightInCm();
      setHeightCm(Math.round(cm));
      const kg = getWeightInKg();
      setWeightKg(Math.round(kg));

      const targetKg = targetWeightLbs * 0.45359237;
      setTargetWeightKg(Math.round(targetKg));
      
      // Reset weekly change rate to metric standard (e.g. 0.5 kg/wk)
      setWeeklyChangeRate(0.5);
    } else {
      // Metric to Imperial
      const totalInches = (heightCm / 2.54);
      setHeightFt(Math.floor(totalInches / 12));
      setHeightIn(Math.round(totalInches % 12));
      setWeightLbs(Math.round(weightKg / 0.45359237));

      const targetLbs = targetWeightKg / 0.45359237;
      setTargetWeightLbs(Math.round(targetLbs));
      
      // Reset weekly change rate to imperial standard (e.g. 1.0 lb/wk)
      setWeeklyChangeRate(1.0);
    }
  };

  return (
    <div className="flex flex-col bg-slate-950 min-h-screen text-slate-100 selection:bg-purple-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-[150px]" />
      </div>

      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-1 relative z-10 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm inline-flex items-center gap-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              SolaTech Interactive Tools
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Optimize Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Health & Ratios
              </span>
            </h1>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Unlock precise insights for your training, diet, and recovery. Select a calculator below to start measuring.
            </p>
          </div>

          {/* Unit System & Global Settings Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
              <button
                onClick={() => handleUnitSystemChange("metric")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  unitSystem === "metric"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => handleUnitSystemChange("imperial")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  unitSystem === "imperial"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Imperial (lbs/ft)
              </button>
            </div>

            <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
              <button
                onClick={() => setGender("male")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  gender === "male"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <User className="w-4 h-4" /> Male
              </button>
              <button
                onClick={() => setGender("female")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  gender === "female"
                    ? "bg-pink-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <User className="w-4 h-4" /> Female
              </button>
            </div>
          </div>

          {/* Tab Navigation Menu */}
          <div className="border-b border-slate-800/80 mb-12">
            <nav className="flex justify-center -mb-px space-x-4 md:space-x-10" aria-label="Tabs">
              {[
                { id: "bmi", label: "BMI Calculator", icon: <Calculator className="w-5 h-5" /> },
                { id: "bmr", label: "BMR Calculator", icon: <Activity className="w-5 h-5" /> },
                { id: "calories", label: "Calorie Calculator", icon: <Flame className="w-5 h-5" /> },
                { id: "macros", label: "Macro Calculator", icon: <Apple className="w-5 h-5" /> },
              ].map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`group flex items-center gap-2 py-4 px-1 border-b-2 font-bold text-sm md:text-lg transition-all ${
                      active
                        ? "border-purple-500 text-purple-400"
                        : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Active Calculator Component View */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === "bmi" && (
                <motion.div
                  key="bmi"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Inputs */}
                  <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-3xl space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Calculator className="text-purple-400 w-6 h-6" /> Body Mass Index (BMI)
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      BMI is a quick estimator of body fatness based on height and weight. Use the sliders to input your values.
                    </p>

                    {/* Height input slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Height</span>
                        <span className="text-lg font-bold text-purple-400">
                          {unitSystem === "metric"
                            ? `${heightCm} cm`
                            : `${heightFt} ft ${heightIn} in`}
                        </span>
                      </div>
                      {unitSystem === "metric" ? (
                        <input
                          type="range"
                          min="100"
                          max="220"
                          value={heightCm}
                          onChange={(e) => setHeightCm(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <span className="text-xs text-slate-500">Feet</span>
                            <input
                              type="number"
                              min="3"
                              max="8"
                              value={heightFt}
                              onChange={(e) => setHeightFt(parseInt(e.target.value) || 0)}
                              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 font-bold focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="text-xs text-slate-500">Inches</span>
                            <input
                              type="number"
                              min="0"
                              max="11"
                              value={heightIn}
                              onChange={(e) => setHeightIn(parseInt(e.target.value) || 0)}
                              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 font-bold focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Weight input slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Weight</span>
                        <span className="text-lg font-bold text-purple-400">
                          {unitSystem === "metric" ? `${weightKg} kg` : `${weightLbs} lbs`}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={unitSystem === "metric" ? "30" : "70"}
                        max={unitSystem === "metric" ? "180" : "400"}
                        value={unitSystem === "metric" ? weightKg : weightLbs}
                        onChange={(e) =>
                          unitSystem === "metric"
                            ? setWeightKg(parseInt(e.target.value))
                            : setWeightLbs(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                    </div>

                    {/* Age input */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Age</span>
                        <span className="text-lg font-bold text-purple-400">{age} years</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                    </div>
                  </div>

                  {/* Right Column: BMI results */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-gradient-to-br from-slate-900/80 to-purple-950/20 backdrop-blur-md border border-slate-800 p-8 rounded-3xl text-center space-y-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Activity className="w-32 h-32" />
                      </div>

                      <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-widest">
                        Your Calculated BMI
                      </h3>

                      <div className="relative inline-flex flex-col items-center justify-center">
                        <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          {bmi}
                        </div>
                        <span className={`mt-3 px-4 py-1.5 rounded-full text-xs font-bold border uppercase tracking-wider ${bmiCat.color}`}>
                          {bmiCat.label}
                        </span>
                      </div>

                      {/* Visual gauge bar */}
                      <div className="space-y-2 pt-4">
                        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex relative">
                          <div className="h-full w-[18.5%] bg-blue-400/50" />
                          <div className="h-full w-[6.5%] bg-teal-400" />
                          <div className="h-full w-[5%] bg-orange-400" />
                          <div className="h-full w-[70%] bg-red-400" />

                          {/* Needle Indicator */}
                          <div
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center transition-all duration-500"
                            style={{
                              left: `${Math.min(Math.max(((bmi - 10) / 30) * 100, 2), 98)}%`,
                            }}
                          >
                            <div className="w-3 h-3 rounded-full bg-white border border-slate-950" />
                          </div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 px-1">
                          <span>10 (Underweight)</span>
                          <span>18.5 - 24.9 (Normal)</span>
                          <span>30+ (Obese)</span>
                        </div>
                      </div>

                      {/* Info & Healthy range indicator */}
                      <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6">
                        <div className="text-left space-y-1">
                          <span className="text-xs text-slate-500 block">Healthy Range</span>
                          <span className="text-sm font-bold text-slate-200">{healthyRange}</span>
                        </div>
                        <div className="text-right space-y-1">
                          <span className="text-xs text-slate-500 block">Height Basis</span>
                          <span className="text-sm font-bold text-slate-200">
                            {unitSystem === "metric"
                              ? `${getHeightInCm()} cm`
                              : `${heightFt}'${heightIn}"`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Health Tip Card */}
                    <div className="bg-slate-900/30 backdrop-blur-md border border-slate-800/60 p-6 rounded-2xl flex gap-4 items-start">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
                        <Info className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-200">Personal Health Insight</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {bmi < 18.5
                            ? "Being underweight can impact bone density and immune function. Consider focusing on nutrient-dense foods and strength training."
                            : bmi < 25
                            ? "Great job! Your BMI is within the healthy weight zone. Maintain your balanced diet, hydration, and steady activity routine."
                            : bmi < 30
                            ? "Your weight is slightly higher than typical heights. Incremental active changes (like daily walks or calorie tracking) support great heart health."
                            : "A high BMI increases the load on vital systems. Regular cardiovascular training and dietary portion control can lead to excellent shifts."}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "bmr" && (
                <motion.div
                  key="bmr"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Inputs */}
                  <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-3xl space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Flame className="text-pink-400 w-6 h-6" /> Basal Metabolic Rate (BMR)
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      BMR defines the baseline energy cost of maintaining basic cellular functions at rest.
                    </p>

                    {/* Age slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Age</span>
                        <span className="text-lg font-bold text-pink-400">{age} years</span>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="85"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                      />
                    </div>

                    {/* Height slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Height</span>
                        <span className="text-lg font-bold text-pink-400">
                          {unitSystem === "metric"
                            ? `${heightCm} cm`
                            : `${heightFt} ft ${heightIn} in`}
                        </span>
                      </div>
                      {unitSystem === "metric" ? (
                        <input
                          type="range"
                          min="100"
                          max="220"
                          value={heightCm}
                          onChange={(e) => setHeightCm(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                        />
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="number"
                            min="3"
                            max="8"
                            value={heightFt}
                            onChange={(e) => setHeightFt(parseInt(e.target.value) || 0)}
                            className="bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 font-bold focus:outline-none focus:ring-1 focus:ring-pink-500"
                          />
                          <input
                            type="number"
                            min="0"
                            max="11"
                            value={heightIn}
                            onChange={(e) => setHeightIn(parseInt(e.target.value) || 0)}
                            className="bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 font-bold focus:outline-none focus:ring-1 focus:ring-pink-500"
                          />
                        </div>
                      )}
                    </div>

                    {/* Weight slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Weight</span>
                        <span className="text-lg font-bold text-pink-400">
                          {unitSystem === "metric" ? `${weightKg} kg` : `${weightLbs} lbs`}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={unitSystem === "metric" ? "30" : "70"}
                        max={unitSystem === "metric" ? "180" : "400"}
                        value={unitSystem === "metric" ? weightKg : weightLbs}
                        onChange={(e) =>
                          unitSystem === "metric"
                            ? setWeightKg(parseInt(e.target.value))
                            : setWeightLbs(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                      />
                    </div>

                    {/* Activity Level Selector */}
                    <div className="space-y-3">
                      <span className="font-semibold text-slate-300 block">Activity Profile</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: "sedentary", label: "Sedentary", desc: "No workout (1.2x)" },
                          { id: "light", label: "Lightly Active", desc: "1-3 days/wk (1.375x)" },
                          { id: "moderate", label: "Moderately Active", desc: "3-5 days/wk (1.55x)" },
                          { id: "active", label: "Highly Active", desc: "6-7 days/wk (1.725x)" },
                        ].map((act) => (
                          <button
                            key={act.id}
                            onClick={() => setActivityLevel(act.id as ActivityLevel)}
                            className={`p-3 rounded-2xl border text-left transition-all ${
                              activityLevel === act.id
                                ? "bg-pink-600/10 border-pink-500 text-pink-300"
                                : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <span className="font-bold block text-sm text-slate-200">{act.label}</span>
                            <span className="text-xs text-slate-400">{act.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: BMR Results */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-gradient-to-br from-slate-900/80 to-pink-950/10 backdrop-blur-md border border-slate-800 p-8 rounded-3xl space-y-6 text-center">
                      <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-widest">
                        Your Rest-Rate Burn (BMR)
                      </h3>

                      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                        {bmr} <span className="text-lg font-bold text-slate-400 uppercase">kcal/day</span>
                      </div>

                      <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                        This is the exact number of calories your body burns simply to survive and breathe if you lay in bed all day.
                      </p>

                      <div className="border-t border-slate-800/80 pt-6">
                        <span className="text-xs text-slate-500 block uppercase tracking-widest mb-2">
                          Total Daily Energy Expenditure (TDEE)
                        </span>
                        <div className="text-3xl font-bold text-slate-200">
                          {tdee} <span className="text-sm font-normal text-slate-400">kcal/day</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                          Includes baseline calculations scaled to your current activity level.
                        </p>
                      </div>
                    </div>

                    {/* Caloric Needs Table Breakdown */}
                    <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                      <h4 className="font-bold text-slate-200 flex items-center gap-1.5 text-sm">
                        <Activity className="w-4 h-4 text-pink-400" /> TDEE Activity Matrix
                      </h4>
                      <div className="divide-y divide-slate-800/50">
                        {[
                          { label: "Sedentary (desk work)", multiplier: 1.2 },
                          { label: "Light activity (light walks)", multiplier: 1.375 },
                          { label: "Moderate activity (strength/cardio)", multiplier: 1.55 },
                          { label: "High activity (dedicated athletes)", multiplier: 1.725 },
                          { label: "Athlete / extreme labor", multiplier: 1.9 },
                        ].map((item, idx) => {
                          const calories = Math.round(bmr * item.multiplier);
                          const isCurrent = Math.abs(item.multiplier - getActivityMultiplier(activityLevel)) < 0.01;
                          return (
                            <div key={idx} className={`flex justify-between items-center py-2.5 text-xs ${isCurrent ? "text-pink-400 font-bold" : "text-slate-400"}`}>
                              <span className="flex items-center gap-1">
                                {isCurrent && <ChevronRight className="w-3.5 h-3.5" />}
                                {item.label}
                              </span>
                              <span>{calories} kcal/day</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "calories" && (
                <motion.div
                  key="calories"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Inputs */}
                  <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-3xl space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Flame className="text-purple-400 w-6 h-6" /> Daily Caloric Budget
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Determine your target calories to reach your ideal weight. Setting a goal weight and rate of change calculates the timeline.
                    </p>

                    {/* Goal Weight input */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Target Goal Weight</span>
                        <span className="text-lg font-bold text-purple-400">
                          {unitSystem === "metric" ? `${targetWeightKg} kg` : `${targetWeightLbs} lbs`}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={unitSystem === "metric" ? "30" : "70"}
                        max={unitSystem === "metric" ? "180" : "400"}
                        value={unitSystem === "metric" ? targetWeightKg : targetWeightLbs}
                        onChange={(e) =>
                          unitSystem === "metric"
                            ? setTargetWeightKg(parseInt(e.target.value))
                            : setTargetWeightLbs(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                    </div>

                    {/* Weight Goal Selector */}
                    <div className="space-y-3">
                      <span className="font-semibold text-slate-300 block">Fitness Goal Direction</span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "lose", label: "Weight Loss", desc: "Calorie Deficit" },
                          { id: "maintain", label: "Maintenance", desc: "No Adjustment" },
                          { id: "gain", label: "Muscle Gain", desc: "Calorie Surplus" },
                        ].map((goal) => (
                          <button
                            key={goal.id}
                            onClick={() => setFitnessGoal(goal.id as FitnessGoal)}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              fitnessGoal === goal.id
                                ? "bg-purple-600/10 border-purple-500 text-purple-300"
                                : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <span className="font-bold block text-xs md:text-sm text-slate-200">{goal.label}</span>
                            <span className="text-[10px] text-slate-500 mt-1 block">{goal.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weekly Pace Selector */}
                    {fitnessGoal !== "maintain" && (
                      <div className="space-y-3">
                        <span className="font-semibold text-slate-300 block">Pace of Change (Per Week)</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {(unitSystem === "metric" ? [0.25, 0.5, 0.75, 1.0] : [0.5, 1.0, 1.5, 2.0]).map((rate) => (
                            <button
                              key={rate}
                              onClick={() => setWeeklyChangeRate(rate)}
                              className={`p-2.5 rounded-xl border text-center transition-all ${
                                weeklyChangeRate === rate
                                  ? "bg-purple-600/10 border-purple-500 text-purple-300"
                                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              <span className="font-bold block text-sm text-slate-200">
                                {rate} {unitSystem === "metric" ? "kg" : "lbs"}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Calories target */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-gradient-to-br from-slate-900/80 to-purple-950/10 backdrop-blur-md border border-slate-800 p-8 rounded-3xl space-y-6 text-center">
                      <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-widest">
                        Target Daily Calories
                      </h3>

                      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        {calorieTargetObj.safe} <span className="text-lg font-bold text-slate-400 uppercase">kcal/day</span>
                      </div>

                      {calorieTargetObj.isBelowFloor && (
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs rounded-xl text-left flex gap-2">
                          <Info className="w-4 h-4 flex-shrink-0" />
                          <span>
                            Safety Floor Triggered: We have capped your daily budget at {gender === "female" ? "1,200" : "1,500"} kcal for baseline metabolic safety. Eating below this line without medical supervision is not advised.
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-left">
                        <div>
                          <span className="text-xs text-slate-500 block uppercase tracking-wider">TDEE Baseline</span>
                          <span className="text-lg font-bold text-slate-300">{tdee} kcal</span>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 block uppercase tracking-wider">Adjustment</span>
                          <span className={`text-lg font-bold ${fitnessGoal === "lose" ? "text-red-400" : fitnessGoal === "gain" ? "text-teal-400" : "text-slate-400"}`}>
                            {fitnessGoal === "lose" ? "-" : fitnessGoal === "gain" ? "+" : ""}
                            {Math.abs(calorieTargetObj.adjustment)} kcal
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Estimate Card */}
                    {fitnessGoal !== "maintain" && (
                      <div className="bg-slate-900/30 backdrop-blur-md border border-slate-800/60 p-6 rounded-2xl space-y-4">
                        <h4 className="font-bold text-slate-200 flex items-center gap-2">
                          <Activity className="text-purple-400 w-5 h-5" /> Goal Timeline Estimate
                        </h4>
                        
                        {(() => {
                          const currentWeight = unitSystem === "metric" ? weightKg : weightLbs;
                          const targetWeight = unitSystem === "metric" ? targetWeightKg : targetWeightLbs;
                          const weightDiff = Math.abs(currentWeight - targetWeight);
                          const isIncorrectDirection = 
                            (fitnessGoal === "lose" && currentWeight < targetWeight) || 
                            (fitnessGoal === "gain" && currentWeight > targetWeight);
                          
                          if (weightDiff === 0) {
                            return <p className="text-sm text-slate-400">Your current weight matches your target goal!</p>;
                          }
                          if (isIncorrectDirection) {
                            return (
                              <p className="text-sm text-red-400/80">
                                Please check your inputs. Current weight is {currentWeight} {unitSystem === "metric" ? "kg" : "lbs"} and goal weight is {targetWeight} {unitSystem === "metric" ? "kg" : "lbs"} which does not align with your goal direction ({fitnessGoal === "lose" ? "Loss" : "Gain"}).
                              </p>
                            );
                          }

                          const weeks = (weightDiff / weeklyChangeRate).toFixed(1);
                          return (
                            <div className="space-y-2">
                              <p className="text-sm text-slate-300">
                                You need to {fitnessGoal === "lose" ? "lose" : "gain"} <span className="font-bold text-purple-400">{weightDiff.toFixed(1)} {unitSystem === "metric" ? "kg" : "lbs"}</span>.
                              </p>
                              <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                                <span className="text-xs text-slate-400 uppercase tracking-widest block">Estimated Timeline</span>
                                <span className="text-2xl font-bold text-purple-300">{weeks} weeks</span>
                              </div>
                              <p className="text-xs text-slate-500">
                                Estimated using {weeklyChangeRate} {unitSystem === "metric" ? "kg" : "lbs"} target change per week. Actual speed may vary based on metabolic adaptation.
                              </p>
                            </div>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "macros" && (
                <motion.div
                  key="macros"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Inputs */}
                  <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-3xl space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Apple className="text-blue-400 w-6 h-6" /> Macro Ratio Planner
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Optimize your split of proteins, carbohydrates, and fats to match your body transformation goal.
                    </p>

                    {/* Calories Input based on BMR helper */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-300">Active TDEE Baseline</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-400">({activityLevel})</span>
                          <span className="text-lg font-bold text-blue-400">{tdee} kcal</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500">
                        Automatically derived from the height, weight, and activity states above.
                      </p>
                    </div>

                    {/* Diet Goal Selector */}
                    <div className="space-y-3">
                      <span className="font-semibold text-slate-300 block">Your Primary Target</span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "lose", label: "Fat Loss", desc: "-20% kcal" },
                          { id: "maintain", label: "Maintenance", desc: "+0% kcal" },
                          { id: "gain", label: "Muscle Gain", desc: "+10% kcal" },
                        ].map((goal) => (
                          <button
                            key={goal.id}
                            onClick={() => setFitnessGoal(goal.id as FitnessGoal)}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              fitnessGoal === goal.id
                                ? "bg-blue-600/10 border-blue-500 text-blue-300"
                                : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <span className="font-bold block text-xs md:text-sm text-slate-200">{goal.label}</span>
                            <span className="text-[10px] text-slate-500 mt-1 block">{goal.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Diet Plan profile */}
                    <div className="space-y-3">
                      <span className="font-semibold text-slate-300 block">Dietary Profile Split</span>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "balanced", label: "Balanced Split", desc: "30/40/30 (P/C/F)" },
                          { id: "lowcarb", label: "Low-Carb / Zone", desc: "35/25/40 (P/C/F)" },
                          { id: "highprotein", label: "High Protein", desc: "40/30/30 (P/C/F)" },
                          { id: "keto", label: "Keto Split", desc: "20/5/75 (P/C/F)" },
                        ].map((split) => (
                          <button
                            key={split.id}
                            onClick={() => setDietType(split.id as DietType)}
                            className={`p-3.5 rounded-2xl border text-left transition-all ${
                              dietType === split.id
                                ? "bg-blue-600/10 border-blue-500 text-blue-300"
                                : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <span className="font-bold block text-sm text-slate-200">{split.label}</span>
                            <span className="text-xs text-slate-500 mt-1 block">{split.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Macro outputs */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/10 backdrop-blur-md border border-slate-800 p-8 rounded-3xl space-y-6">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-widest">
                          Target Calories
                        </h3>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mt-2">
                          {macros.calories} <span className="text-lg font-bold text-slate-400 uppercase">kcal/day</span>
                        </div>
                      </div>

                      {/* Display breakdown cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 text-center">
                          <span className="text-xs text-slate-500 block uppercase tracking-wider">Protein</span>
                          <span className="text-xl font-bold text-slate-200 mt-1 block">{macros.protein}g</span>
                          <span className="text-[10px] text-slate-500 block">{(macros.protein * 4)} kcal</span>
                        </div>
                        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 text-center">
                          <span className="text-xs text-slate-500 block uppercase tracking-wider">Carbs</span>
                          <span className="text-xl font-bold text-slate-200 mt-1 block">{macros.carbs}g</span>
                          <span className="text-[10px] text-slate-500 block">{(macros.carbs * 4)} kcal</span>
                        </div>
                        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 text-center">
                          <span className="text-xs text-slate-500 block uppercase tracking-wider">Fat</span>
                          <span className="text-xl font-bold text-slate-200 mt-1 block">{macros.fat}g</span>
                          <span className="text-[10px] text-slate-500 block">{(macros.fat * 9)} kcal</span>
                        </div>
                      </div>

                      {/* Clean responsive SVG Pie/Donut Chart */}
                      <div className="flex flex-col items-center justify-center pt-4">
                        <svg width="150" height="150" viewBox="0 0 100 100" className="transform -rotate-90">
                          {/* Inner / Outer Radii */}
                          {(() => {
                            const pRatio = macros.ratios.p;
                            const cRatio = macros.ratios.c;
                            const fRatio = macros.ratios.f;

                            // Arc lengths
                            const circumference = 2 * Math.PI * 35; // r=35
                            const pStroke = pRatio * circumference;
                            const cStroke = cRatio * circumference;
                            const fStroke = fRatio * circumference;

                            return (
                              <>
                                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#1e293b" strokeWidth="16" />
                                {/* Protein (Blue) */}
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="35"
                                  fill="transparent"
                                  stroke="#3b82f6"
                                  strokeWidth="16"
                                  strokeDasharray={`${pStroke} ${circumference - pStroke}`}
                                  strokeDashoffset="0"
                                />
                                {/* Carbs (Green/Teal) */}
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="35"
                                  fill="transparent"
                                  stroke="#14b8a6"
                                  strokeWidth="16"
                                  strokeDasharray={`${cStroke} ${circumference - cStroke}`}
                                  strokeDashoffset={`-${pStroke}`}
                                />
                                {/* Fats (Purple/Orange) */}
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="35"
                                  fill="transparent"
                                  stroke="#a855f7"
                                  strokeWidth="16"
                                  strokeDasharray={`${fStroke} ${circumference - fStroke}`}
                                  strokeDashoffset={`-${pStroke + cStroke}`}
                                />
                              </>
                            );
                          })()}
                        </svg>

                        <div className="flex gap-4 mt-6 text-xs justify-center flex-wrap">
                          <span className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-blue-500" />
                            Protein ({(macros.ratios.p * 100).toFixed(0)}%)
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-teal-500" />
                            Carbs ({(macros.ratios.c * 100).toFixed(0)}%)
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-purple-500" />
                            Fat ({(macros.ratios.f * 100).toFixed(0)}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
