import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/page-layout";
import type { Metadata } from "next";

// Types for brand data
interface BrandStat {
  label: string;
  value: string;
}

interface Brand {
  name: string;
  logo: string;
  sector: string;
  description: string;
  features: string[];
  stats: BrandStat[];
}

type BrandsData = {
  [key: string]: Brand;
};

// Example data for brands
const brandsData: BrandsData = {
  "hasey-petroleum": {
    name: "Hasey Petroleum",
    logo: "/brands/hasey-petroleum.png",
    sector: "Oil & Gas",
    description:
      "Leading petroleum exploration and production company with operations across multiple regions.",
    features: [
      "State-of-the-art exploration technology",
      "Sustainable production practices",
      "Global distribution network",
      "Research and development facilities",
    ],
    stats: [
      { label: "Years of Operation", value: "15+" },
      { label: "Countries Present", value: "12" },
      { label: "Production Capacity", value: "500K bpd" },
      { label: "Employees", value: "2,000+" },
    ],
  },
};

// Generate metadata using the correct Next.js 15 types
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const brand = brandsData[params.slug];
  
  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }
  
  return {
    title: `${brand.name} | Hasey Group`,
    description: brand.description,
  };
}

// Page component using Next.js 15 pattern
export default async function BrandPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const brand = brandsData[params.slug];

  // If the brand is not found, show a 404 page
  if (!brand) {
    notFound();
  }

  return (
    <PageLayout
      title={brand.name}
      subtitle={`Part of our ${brand.sector} division`}
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="relative mb-6 aspect-video overflow-hidden rounded-lg border bg-white">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          <p className="mb-6 text-lg text-gray-700">{brand.description}</p>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Key Features</h2>
            <ul className="space-y-2">
              {brand.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div>
          <div className="rounded-lg border bg-gray-50 p-6">
            <h2 className="mb-6 text-xl font-bold">Company Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              {brand.stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-bold">Latest News</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-white p-4">
                <h3 className="font-medium">Company Expansion</h3>
                <p className="text-sm text-gray-600">
                  Latest updates on our growth and development...
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <h3 className="font-medium">New Partnerships</h3>
                <p className="text-sm text-gray-600">
                  Recent collaborations and strategic alliances...
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <h3 className="font-medium">Innovation Updates</h3>
                <p className="text-sm text-gray-600">
                  Recent technological advancements and innovations.....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}