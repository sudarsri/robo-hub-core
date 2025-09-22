import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Clock } from "lucide-react";

const mockLeaveHistory = [
  { id: 1, type: "Annual Leave", startDate: "2024-01-20", endDate: "2024-01-22", days: 3, status: "Approved", reason: "Family vacation" },
  { id: 2, type: "Sick Leave", startDate: "2024-01-15", endDate: "2024-01-15", days: 1, status: "Approved", reason: "Medical appointment" },
  { id: 3, type: "Personal Leave", startDate: "2024-02-05", endDate: "2024-02-06", days: 2, status: "Pending", reason: "Personal work" },
];

const Leave = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case 'Pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'Rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Leave Management</h1>
        <p className="text-muted-foreground">Apply for leave and track your leave history</p>
      </div>

      {/* Leave Balance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Annual Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12 days</div>
            <p className="text-xs text-muted-foreground">Remaining this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sick Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8 days</div>
            <p className="text-xs text-muted-foreground">Remaining this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Personal Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">5 days</div>
            <p className="text-xs text-muted-foreground">Remaining this year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Apply for Leave */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Apply for Leave
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="leave-type">Leave Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Leave</SelectItem>
                    <SelectItem value="emergency">Emergency Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="days">Number of Days</Label>
                <Input id="days" type="number" placeholder="1" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Reason</Label>
              <Textarea 
                id="reason" 
                placeholder="Please provide a reason for your leave request..."
                rows={3}
              />
            </div>
            
            <Button className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Submit Leave Request
            </Button>
          </CardContent>
        </Card>

        {/* Leave History */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Leave History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLeaveHistory.map((leave) => (
                <div key={leave.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{leave.type}</h4>
                    {getStatusBadge(leave.status)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{leave.startDate} to {leave.endDate} ({leave.days} days)</p>
                    <p className="mt-1">{leave.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leave;