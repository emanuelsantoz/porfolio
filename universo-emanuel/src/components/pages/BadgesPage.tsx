"use client";

import { motion } from "framer-motion";
import { Award, Lock, RefreshCcw } from "lucide-react";
import { Navbar } from "@/components/organisms/Navbar";
import { ACHIEVEMENTS, AchievementId, useGamificationStore } from "@/core/store/gamificationStore";

export function BadgesPage() {
  const unlocked = useGamificationStore((s) => s.unlocked);
  const reset = useGamificationStore((s) => s.reset);

  const total = ACHIEVEMENTS.length;
  const unlockedCount = ACHIEVEMENTS.filter((a) => unlocked[a.id as AchievementId]).length;
  const progress = total > 0 ? Math.round((unlockedCount / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 md:px-20 py-10 pt-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mb-8">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <Award size={16} />
            Gamificação
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-bold">Badges</h1>
              <p className="text-muted-foreground">
                {unlockedCount}/{total} desbloqueadas ({progress}%)
              </p>
            </div>
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background border-border hover:border-primary/50 transition-colors"
            >
              Resetar <RefreshCcw size={16} />
            </button>
          </div>
        </motion.div>

        <div className="h-2 bg-muted rounded-full overflow-hidden mb-8">
          <div className="h-full bg-gradient-to-r from-primary to-primary/60" style={{ width: `${progress}%` }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => {
            const isUnlocked = Boolean(unlocked[achievement.id]);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-2xl border p-6 ${
                  isUnlocked ? "bg-card border-primary/30" : "bg-card/50 border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className={`font-semibold ${isUnlocked ? "" : "text-muted-foreground"}`}>{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
                    {isUnlocked ? <Award className="text-primary" size={18} /> : <Lock className="text-muted-foreground" size={18} />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

