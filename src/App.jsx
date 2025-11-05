import { useState } from "react";
import Hero from "./components/Hero";
import CategoryTabs from "./components/CategoryTabs";
import PromptList from "./components/PromptList";
import Footer from "./components/Footer";

export default function App() {
  const [category, setCategory] = useState("survival");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Hero />
      <CategoryTabs value={category} onChange={setCategory} />
      <PromptList category={category} />
      <Footer />
    </div>
  );
}
