import { Search, Table, BarChart3, LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Search}
            title="Advanced Search"
            description="Powerful search capabilities to find exactly what you need in your data."
          />
          <FeatureCard
            icon={Table}
            title="Interactive Tables"
            description="Customizable tables for efficient data presentation and manipulation."
          />
          <FeatureCard
            icon={BarChart3}
            title="Data Visualization"
            description="Create insightful charts and graphs to visualize your data trends."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
