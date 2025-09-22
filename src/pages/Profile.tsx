import { EmployeeProfile } from "@/components/EmployeeProfile";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Employee Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and employment details</p>
      </div>
      
      <EmployeeProfile />
    </div>
  );
};

export default Profile;