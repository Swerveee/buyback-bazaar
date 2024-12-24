import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Package, DollarSign, Recycle } from 'lucide-react';

interface BuybackMetricsProps {
  isWireframe: boolean;
}

const BuybackMetrics: React.FC<BuybackMetricsProps> = ({ isWireframe }) => {
  const metrics = [
    {
      title: "Total Requests",
      value: "24",
      change: "+12%",
      icon: Package
    },
    {
      title: "Value Returned",
      value: "$2,400",
      change: "+8%",
      icon: DollarSign
    },
    {
      title: "Acceptance Rate",
      value: "92%",
      change: "+3%",
      icon: Recycle
    }
  ];

  const wireframeStyles = isWireframe ? {
    card: "border-2 border-dashed border-gray-300",
    title: "font-mono",
    value: "font-mono"
  } : {
    card: "",
    title: "",
    value: ""
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title} className={wireframeStyles.card}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className={`text-sm font-medium ${wireframeStyles.title}`}>
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${wireframeStyles.value}`}>{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-4 w-4 text-secondary" />
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BuybackMetrics;