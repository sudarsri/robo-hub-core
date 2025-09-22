import { AttendanceChart } from "@/components/AttendanceChart";
import { DashboardStats } from "@/components/DashboardStats";

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Attendance Tracking</h1>
        <p className="text-muted-foreground">Monitor your check-in times, hours worked, and attendance patterns</p>
      </div>
      
      <DashboardStats />
      <AttendanceChart />
    </div>
  );
};

export default Attendance;