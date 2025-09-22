import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Download, 
  FileText, 
  File, 
  Image,
  Calendar,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const personalDocuments = [
  { id: 1, name: "Aadhar Card", type: "ID Proof", uploadDate: "2024-01-15", status: "Verified", icon: FileText },
  { id: 2, name: "PAN Card", type: "ID Proof", uploadDate: "2024-01-15", status: "Verified", icon: FileText },
  { id: 3, name: "Degree Certificate", type: "Education", uploadDate: "2024-01-16", status: "Pending", icon: File },
  { id: 4, name: "Previous Employment Certificate", type: "Employment", uploadDate: "2024-01-17", status: "Verified", icon: FileText },
];

const companyDocuments = [
  { id: 1, name: "Employee Handbook", type: "Policy", date: "2024-01-01", size: "2.5 MB" },
  { id: 2, name: "Payslip - January 2024", type: "Payroll", date: "2024-01-31", size: "458 KB" },
  { id: 3, name: "Tax Declaration Form", type: "Tax", date: "2024-01-10", size: "1.2 MB" },
  { id: 4, name: "Health Insurance Policy", type: "Benefits", date: "2024-01-01", size: "3.1 MB" },
];

const Documents = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Verified':
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="h-3 w-3 mr-1" />Verified</Badge>;
      case 'Pending':
        return <Badge className="bg-warning text-warning-foreground"><AlertCircle className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'Rejected':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Document Management</h1>
        <p className="text-muted-foreground">Upload personal documents and access company documents</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Documents */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Personal Documents
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Upload your personal documents for verification
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="document-type">Document Type</Label>
              <select className="w-full p-2 border border-input rounded-md bg-background">
                <option value="">Select document type</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="pan">PAN Card</option>
                <option value="degree">Degree Certificate</option>
                <option value="marksheet">Marksheet</option>
                <option value="employment">Employment Certificate</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="document-file">Choose File</Label>
              <Input id="document-file" type="file" accept=".pdf,.jpg,.jpeg,.png" />
              <p className="text-xs text-muted-foreground">
                Supported formats: PDF, JPG, PNG (Max 5MB)
              </p>
            </div>
            
            <Button className="w-full">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </CardContent>
        </Card>

        {/* Personal Documents */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Personal Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {personalDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <doc.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.type} • Uploaded {doc.uploadDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(doc.status)}
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Documents */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Company Documents
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Access and download company-related documents
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {companyDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.type} • {doc.date} • {doc.size}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;