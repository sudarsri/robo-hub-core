import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, FileText, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Hours This Month",
    value: "168",
    change: "+2.5%",
    icon: Clock,
    color: "text-primary"
  },
  {
    title: "Days Present",
    value: "21",
    change: "+5.2%",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    title: "Leave Balance",
    value: "12",
    change: "-1 day",
    icon: Calendar,
    color: "text-secondary"
  },
  {
    title: "Documents",
    value: "8",
    change: "+2 new",
    icon: FileText,
    color: "text-warning"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className={stat.change.startsWith('+') ? 'text-success' : 'text-muted-foreground'}>
                {stat.change}
              </span>
              {" from last month"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}