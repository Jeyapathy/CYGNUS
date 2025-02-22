import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <h2 className="text-2xl font-semibold">Welcome back</h2>
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

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="px-0 font-normal">
                    Forgot your password?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full">Login</Button>
            </div>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Button variant="link" className="px-0 font-normal">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
