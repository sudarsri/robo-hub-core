import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CalendarPlus, 
  Upload, 
  Download, 
  Clock,
  FileText,
  Users
} from "lucide-react";

const quickActions = [
  {
    title: "Apply for Leave",
    description: "Submit a new leave request",
    icon: CalendarPlus,
    variant: "default" as const,
    action: "leave"
  },
  {
    title: "Upload Document",
    description: "Upload personal documents",
    icon: Upload,
    variant: "secondary" as const,
    action: "upload"
  },
  {
    title: "Download Payslip",
    description: "Get your latest payslip",
    icon: Download,
    variant: "outline" as const,
    action: "payslip"
  },
  {
    title: "Check-in Status",
    description: "View today's attendance",
    icon: Clock,
    variant: "outline" as const,
    action: "checkin"
  },
  {
    title: "View Documents",
    description: "Access all documents",
    icon: FileText,
    variant: "outline" as const,
    action: "documents"
  },
  {
    title: "Team Directory",
    description: "Browse team members",
    icon: Users,
    variant: "outline" as const,
    action: "team"
  }
];

export function QuickActions() {
  const handleAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    // Here you would handle routing or specific actions
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
        <p className="text-sm text-muted-foreground">
          Frequently used features and shortcuts
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-shadow"
              onClick={() => handleAction(action.action)}
            >
              <action.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs opacity-70">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}