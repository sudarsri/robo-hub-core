import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import warehouseBg from "@/assets/warehouse-robotics-bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const allowedDomains = ["@qikpod.com", "@leapmile.com"];
    return allowedDomains.some(domain => email.endsWith(domain));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate email domain
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Email must end with @qikpod.com or @leapmile.com",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validate password
    if (password !== "1234") {
      toast({
        title: "Invalid Password",
        description: "Please check your password and try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate login delay
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome to AutoRobotics Dashboard!",
      });
      login();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${warehouseBg})` }}
      />
      
      {/* White Overlay with Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/20" />
      
      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md px-6">
        <Card className="shadow-elevated border-border/50 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-4 pb-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back!
              </h1>
              <p className="text-muted-foreground">
                Sign in to your AutoRobotics account
              </p>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Company Registered Email ID
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your company email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:text-primary-hover transition-colors"
                  onClick={() => {
                    toast({
                      title: "Password Reset",
                      description: "Password reset functionality will be available soon.",
                    });
                  }}
                >
                  Forgot password?
                </button>
              </div>
              
              <Button
                type="submit"
                className="w-full h-11 text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;