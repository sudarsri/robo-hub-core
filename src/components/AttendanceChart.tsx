import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'on-time' | 'late' | 'early-leave' | 'absent';
  hours: string;
}

const mockAttendanceData: AttendanceRecord[] = [
  { date: "2024-01-15", checkIn: "09:15", checkOut: "18:30", status: "on-time", hours: "9h 15m" },
  { date: "2024-01-16", checkIn: "09:50", checkOut: "18:00", status: "late", hours: "8h 10m" },
  { date: "2024-01-17", checkIn: "09:30", checkOut: "17:45", status: "early-leave", hours: "8h 15m" },
  { date: "2024-01-18", checkIn: "09:00", checkOut: "18:15", status: "on-time", hours: "9h 15m" },
  { date: "2024-01-19", checkIn: "09:35", checkOut: "18:20", status: "on-time", hours: "8h 45m" },
];

const getStatusBadge = (status: AttendanceRecord['status']) => {
  switch (status) {
    case 'on-time':
      return <Badge className="bg-success text-success-foreground">On Time</Badge>;
    case 'late':
      return <Badge className="bg-late text-warning-foreground">Late</Badge>;
    case 'early-leave':
      return <Badge className="bg-early-leave text-destructive-foreground">Early Leave</Badge>;
    case 'absent':
      return <Badge variant="destructive">Absent</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

const getRowColor = (status: AttendanceRecord['status']) => {
  switch (status) {
    case 'late':
      return 'bg-late/10 border-l-4 border-late';
    case 'early-leave':
      return 'bg-early-leave/10 border-l-4 border-early-leave';
    case 'on-time':
      return 'bg-success/5 border-l-4 border-success';
    default:
      return '';
  }
};

export function AttendanceChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Attendance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Your attendance record for the last 7 days
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4 pb-2 border-b text-sm font-medium text-muted-foreground">
            <div>Date</div>
            <div>Check In</div>
            <div>Check Out</div>
            <div>Hours</div>
            <div>Status</div>
          </div>
          
          {mockAttendanceData.map((record, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-5 gap-4 py-3 px-2 rounded-lg transition-colors ${getRowColor(record.status)}`}
            >
              <div className="text-sm font-medium text-foreground">
                {new Date(record.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-sm text-foreground">{record.checkIn}</div>
              <div className="text-sm text-foreground">{record.checkOut}</div>
              <div className="text-sm text-foreground">{record.hours}</div>
              <div>{getStatusBadge(record.status)}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-muted-foreground">On Time (Before 9:45 AM)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-late rounded-full"></div>
              <span className="text-muted-foreground">Late (After 9:45 AM)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-early-leave rounded-full"></div>
              <span className="text-muted-foreground">Early Leave (Before 6:00 PM)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}