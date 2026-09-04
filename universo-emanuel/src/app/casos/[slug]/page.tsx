import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/portfolio/CasePage";
import { getCaseBySlug, portfolioCases } from "@/data/cases";

type Props = { params: { slug: string } };
export function generateStaticParams() { return portfolioCases.map((item) => ({ slug: item.slug })); }
export function generateMetadata({ params }: Props): Metadata { const item = getCaseBySlug(params.slug); return item ? { title: item.productName, description: item.summary.conflict, alternates: { canonical: `/casos/${item.slug}` } } : {}; }
export default function Page({ params }: Props) { const item = getCaseBySlug(params.slug); if (!item) notFound(); return <CasePage item={item} />; }
