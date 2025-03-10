import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`/api/${isSignUp ? 'signup' : 'login'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password })
      });

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 409) {
          toast({
            title: "Account already exists",
            description: "Please try logging in instead",
            variant: "destructive"
          });
        } else {
          setError(data.message || 'An error occurred');
        }
        return;
      }

      onClose();
      toast({
        title: isSignUp ? "Account created successfully" : "Welcome back!",
        description: isSignUp ? "Please log in with your credentials" : "You've successfully logged in",
      });
    } catch (err) {
      setError('Failed to connect to the server');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center gap-6 py-6">
          <div className="text-center">
            <div className="inline-block p-2 rounded-xl bg-purple-100 mb-4">
              <img
                src="/logo.svg"
                alt="Cygnus Logo"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Login with your Apple or Google account
            </p>
          </div>

          <div className="w-full space-y-4">
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <FaApple className="mr-2 h-5 w-5" />
              Login with Apple
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <FcGoogle className="mr-2 h-5 w-5" />
              Login with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {!isSignUp && (
                    <Button variant="link" className="px-0 font-normal h-auto">
                      Forgot your password?
                    </Button>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                {isSignUp ? 'Sign Up' : 'Login'}
              </Button>
            </form>

            <div className="text-center text-sm">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{" "}
              <Button
                variant="link"
                className="px-0 font-normal h-auto"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError("");
                  setPassword("");
                  setConfirmPassword("");
                }}
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}