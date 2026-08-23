import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/pages/HomePage";
import { getPersonaInfo, isPersonaType } from "@/core/personas/personas";

type Props = {
  params: { persona: string };
};

export function generateMetadata({ params }: Props): Metadata {
  if (!isPersonaType(params.persona)) {
    return {
      title: "Persona",
      description: "Persona não encontrada.",
    };
  }

  const info = getPersonaInfo(params.persona);

  return {
    title: info.seo.title,
    description: info.seo.description,
    openGraph: {
      title: info.seo.title,
      description: info.seo.description,
    },
    twitter: {
      title: info.seo.title,
      description: info.seo.description,
    },
  };
}

export default function PersonaPage({ params }: Props) {
  if (!isPersonaType(params.persona)) notFound();
  return <HomePage initialPersona={params.persona} />;
}

