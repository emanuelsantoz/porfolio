import type { Metadata } from "next";
import { StudyDevPage } from "@/components/pages/StudyDevPage";

export const metadata: Metadata = {
  title: "Study Dev",
  description: "Roadmaps interativos, vídeos e recursos de aprendizado.",
};

export default function Page() {
  return <StudyDevPage />;
}
