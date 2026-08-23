"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  BookOpen,
  CheckCircle,
  Circle,
  Code,
  Cpu,
  GraduationCap,
  Lightbulb,
  Play,
  Server,
  Smartphone,
  Youtube,
} from "lucide-react";
import { Navbar } from "@/components/organisms/Navbar";

const youtubeVideos = [
  {
    id: "1",
    title: "React Next.js 14 - Tutorial Completo",
    thumbnail: "https://img.youtube.com/vi/example1/maxresdefault.jpg",
    duration: "2:30:00",
    views: "150K",
    channel: "Emanuel Dev",
    playlist: "Frontend",
  },
  {
    id: "2",
    title: "Flutter - Do Zero ao App",
    thumbnail: "https://img.youtube.com/vi/example2/maxresdefault.jpg",
    duration: "1:45:00",
    views: "89K",
    channel: "Emanuel Dev",
    playlist: "Mobile",
  },
  {
    id: "3",
    title: "Node.js + TypeScript - API REST",
    thumbnail: "https://img.youtube.com/vi/example3/maxresdefault.jpg",
    duration: "3:00:00",
    views: "200K",
    channel: "Emanuel Dev",
    playlist: "Backend",
  },
  {
    id: "4",
    title: "Docker & Kubernetes - Guia Prático",
    thumbnail: "https://img.youtube.com/vi/example4/maxresdefault.jpg",
    duration: "1:15:00",
    views: "75K",
    channel: "Emanuel Dev",
    playlist: "DevOps",
  },
  {
    id: "5",
    title: "Python para Data Science",
    thumbnail: "https://img.youtube.com/vi/example5/maxresdefault.jpg",
    duration: "2:00:00",
    views: "120K",
    channel: "Emanuel Dev",
    playlist: "Data",
  },
  {
    id: "6",
    title: "AI & LLMs - Introdução Prática",
    thumbnail: "https://img.youtube.com/vi/example6/maxresdefault.jpg",
    duration: "45:00",
    views: "95K",
    channel: "Emanuel Dev",
    playlist: "AI",
  },
];

const roadmapData = {
  frontend: {
    title: "Frontend Development",
    icon: Code,
    color: "blue",
    tracks: [
      {
        name: "Fundamentos HTML/CSS",
        items: [
          { title: "Estrutura HTML5", completed: true },
          { title: "CSS Flexbox & Grid", completed: true },
          { title: "Responsive Design", completed: true },
          { title: "CSS Variables", completed: false },
        ],
      },
      {
        name: "JavaScript Moderno",
        items: [
          { title: "ES6+ Features", completed: true },
          { title: "Async/Await", completed: true },
          { title: "DOM Manipulation", completed: true },
          { title: "Fetch API", completed: false },
        ],
      },
      {
        name: "React & Next.js",
        items: [
          { title: "React Hooks", completed: false },
          { title: "Context API", completed: false },
          { title: "Next.js App Router", completed: false },
          { title: "Server Components", completed: false },
        ],
      },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    color: "green",
    tracks: [
      {
        name: "Node.js",
        items: [
          { title: "Event Loop", completed: true },
          { title: "NPM & Modules", completed: true },
          { title: "Express.js", completed: true },
          { title: "RESTful API", completed: false },
        ],
      },
      {
        name: "Database",
        items: [
          { title: "SQL Fundamentals", completed: true },
          { title: "PostgreSQL", completed: true },
          { title: "MongoDB", completed: false },
          { title: "Redis Cache", completed: false },
        ],
      },
      {
        name: "Architecture",
        items: [
          { title: "SOLID Principles", completed: false },
          { title: "Design Patterns", completed: false },
          { title: "Microservices", completed: false },
          { title: "Message Queues", completed: false },
        ],
      },
    ],
  },
  mobile: {
    title: "Mobile Development",
    icon: Smartphone,
    color: "purple",
    tracks: [
      {
        name: "Flutter Basics",
        items: [
          { title: "Dart Language", completed: true },
          { title: "Widgets Basics", completed: true },
          { title: "State Management", completed: false },
          { title: "Navigation", completed: false },
        ],
      },
      {
        name: "Advanced Flutter",
        items: [
          { title: "BLoC Pattern", completed: false },
          { title: "Firebase Integration", completed: false },
          { title: "Animations", completed: false },
          { title: "Testing", completed: false },
        ],
      },
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "pink",
    tracks: [
      {
        name: "Python for AI",
        items: [
          { title: "NumPy & Pandas", completed: true },
          { title: "Python Basics", completed: true },
          { title: "Matplotlib", completed: false },
        ],
      },
      {
        name: "LLMs & Prompt Engineering",
        items: [
          { title: "OpenAI API", completed: false },
          { title: "LangChain", completed: false },
          { title: "Vector Databases", completed: false },
          { title: "RAG Architecture", completed: false },
        ],
      },
    ],
  },
};

const trackColorClasses: Record<
  string,
  { badgeBg: string; icon: string; border: string }
> = {
  blue: {
    badgeBg: "bg-blue-500/20",
    icon: "text-blue-500",
    border: "border-blue-500/20",
  },
  green: {
    badgeBg: "bg-green-500/20",
    icon: "text-green-500",
    border: "border-green-500/20",
  },
  purple: {
    badgeBg: "bg-purple-500/20",
    icon: "text-purple-500",
    border: "border-purple-500/20",
  },
  pink: {
    badgeBg: "bg-pink-500/20",
    icon: "text-pink-500",
    border: "border-pink-500/20",
  },
};

export function StudyDevPage() {
  const [selectedTrack, setSelectedTrack] = useState<string>("frontend");
  const [completedItems, setCompletedItems] = useState<Record<string, string[]>>({});

  const currentRoadmap = roadmapData[selectedTrack as keyof typeof roadmapData] || roadmapData.frontend;
  const TrackIcon = currentRoadmap.icon;
  const colors = trackColorClasses[currentRoadmap.color] ?? trackColorClasses.blue;

  const toggleItemCompletion = (trackName: string, itemTitle: string) => {
    const key = `${selectedTrack}-${trackName}`;
    setCompletedItems((prev) => {
      const trackItems = prev[key] || [];
      if (trackItems.includes(itemTitle)) {
        return { ...prev, [key]: trackItems.filter((t) => t !== itemTitle) };
      }
      return { ...prev, [key]: [...trackItems, itemTitle] };
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 md:px-20 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <GraduationCap size={16} />
            Learning Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Study Dev</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
            Explore roadmaps interativos, tutoriais em vídeo e recursos de aprendizado para impulsionar sua carreira como desenvolvedor.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {Object.entries(roadmapData).map(([key, data]) => {
            const Icon = data.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedTrack(key)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                  ${selectedTrack === key ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary/50"}
                `}
              >
                <Icon size={18} />
                {data.title}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            key={selectedTrack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-lg ${colors.badgeBg}`}>
                <TrackIcon className={colors.icon} size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{currentRoadmap.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {currentRoadmap.tracks.reduce((acc, t) => acc + t.items.length, 0)} tópicos
                </p>
              </div>
            </div>

            {currentRoadmap.tracks.map((track, trackIndex) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: trackIndex * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" />
                  {track.name}
                </h3>

                <div className="space-y-3">
                  {track.items.map((item) => {
                    const key = `${selectedTrack}-${track.name}`;
                    const isCompleted = completedItems[key]?.includes(item.title);

                    return (
                      <button
                        key={item.title}
                        onClick={() => toggleItemCompletion(track.name, item.title)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      >
                        {isCompleted ? (
                          <CheckCircle size={20} className="text-green-500 shrink-0" />
                        ) : (
                          <Circle size={20} className="text-muted-foreground shrink-0" />
                        )}
                        <span className={isCompleted ? "line-through text-muted-foreground" : ""}>{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-red-500/20">
                <Youtube className="text-red-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Vídeos</h2>
                <p className="text-sm text-muted-foreground">Tutoriais em destaque</p>
              </div>
            </div>

            <div className="space-y-4">
              {youtubeVideos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href="#"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                        <Play size={20} className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-mono">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">{video.title}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{video.channel}</span>
                      <span>{video.views} visualizações</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                      {video.playlist}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <button className="w-full py-3 bg-red-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition-colors">
              <Youtube size={18} />
              Ver Playlist Completa
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl border ${colors.border}`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/20 rounded-lg shrink-0">
              <Lightbulb className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Dica de Aprendizado</h3>
              <p className="text-muted-foreground">
                A melhor forma de aprender é fazendo. Comece com projetos pequenos e vá aumentando a complexidade gradualmente. Não tenha medo de errar - cada bug é uma oportunidade de aprendizado. Marque os tópicos que você já domina para acompanhar seu progresso!
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

