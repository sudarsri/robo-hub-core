import { DashboardStats } from "@/components/DashboardStats";
import { AttendanceChart } from "@/components/AttendanceChart";
import { EmployeeProfile } from "@/components/EmployeeProfile";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary text-white p-6 rounded-lg shadow-elevated">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Rajesh!</h1>
        <p className="text-white/90">Here's what's happening with your work today.</p>
      </div>

      {/* Dashboard Stats */}
      <DashboardStats />

      {/* Employee Profile */}
      <EmployeeProfile />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceChart />
        <QuickActions />
      </div>
    </div>
  );
};

export default Index;
