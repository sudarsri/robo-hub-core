import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, Edit, Camera } from "lucide-react";
import { ImageUploadCrop } from "./ImageUploadCrop";

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
  const [profileImage, setProfileImage] = useState<string>("/placeholder.svg");

  const handleImageChange = (newImage: string) => {
    setProfileImage(newImage);
  };

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
            <ImageUploadCrop currentImage={profileImage} onImageChange={handleImageChange}>
              <div className="relative group">
                <Avatar className="h-24 w-24 transition-all duration-200 group-hover:opacity-80">
                  <AvatarImage src={profileImage} alt={mockEmployeeData.name} />
                  <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                    {mockEmployeeData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </ImageUploadCrop>
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
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm font-medium text-foreground leading-tight">{mockEmployeeData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm font-medium text-foreground leading-tight">{mockEmployeeData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm font-medium text-foreground leading-tight">{mockEmployeeData.location}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Employee ID</p>
                  <p className="text-sm font-medium text-foreground leading-tight">{mockEmployeeData.employeeId}</p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Department</p>
                  <p className="text-sm font-medium text-foreground leading-tight">{mockEmployeeData.department}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Join Date</p>
                    <p className="text-sm font-medium text-foreground leading-tight">
                      {new Date(mockEmployeeData.joinDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Manager</p>
                  <p className="text-sm font-medium text-foreground leading-tight">{mockEmployeeData.manager}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}