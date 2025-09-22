import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

interface EmployeeData {
  name: string;
  email: string;
  phone: string;
  location: string;
  employeeId: string;
  department: string;
  position: string;
  status: 'Employee' | 'Intern';
  joinDate: string;
  manager: string;
}

const mockEmployeeData: EmployeeData = {
  name: "Rajesh Kumar",
  email: "rajesh.kumar@autorobotics.com",
  phone: "+91 98765 43210",
  location: "Bangalore, Karnataka",
  employeeId: "AR2024001",
  department: "Automation Engineering",
  position: "Senior Software Engineer",
  status: "Employee",
  joinDate: "2023-06-15",
  manager: "Priya Sharma"
};

export function EmployeeProfile() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">Employee Profile</CardTitle>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col items-center xl:items-start space-y-4 flex-shrink-0">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt={mockEmployeeData.name} />
              <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                {mockEmployeeData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="text-center xl:text-left min-w-0">
              <h3 className="text-xl font-semibold text-foreground break-words">{mockEmployeeData.name}</h3>
              <p className="text-muted-foreground text-sm break-words">{mockEmployeeData.position}</p>
              <Badge 
                variant={mockEmployeeData.status === 'Employee' ? 'default' : 'secondary'}
                className="mt-2"
              >
                {mockEmployeeData.status}
              </Badge>
            </div>
          </div>

          {/* Employee Details */}
          <div className="flex-1 min-w-0 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4 min-w-0">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground break-all">{mockEmployeeData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground break-all">{mockEmployeeData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground break-words">{mockEmployeeData.location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 min-w-0">
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Employee ID</p>
                  <p className="text-sm font-medium text-foreground break-all">{mockEmployeeData.employeeId}</p>
                </div>
                
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Department</p>
                  <p className="text-sm font-medium text-foreground break-words">{mockEmployeeData.department}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">Join Date</p>
                    <p className="text-sm font-medium text-foreground break-words">
                      {new Date(mockEmployeeData.joinDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Manager</p>
                  <p className="text-sm font-medium text-foreground break-words">{mockEmployeeData.manager}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}