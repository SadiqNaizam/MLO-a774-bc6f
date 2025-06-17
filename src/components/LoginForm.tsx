import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle } from 'lucide-react';

// Define the validation schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }).min(1, { message: "Password is required." }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  console.log('LoginForm loaded');
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  // const navigate = useNavigate(); // Uncomment if direct navigation is needed after login

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    setFormError(null);
    console.log("Login form submitted with values:", values);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Simulate login success or failure
    if (values.email === "fail@example.com") {
      setFormError("Invalid email or password. Please try again.");
    } else if (values.password === "error") {
        form.setError("password", { type: "manual", message: "This password triggered a server error."})
    } else {
      console.log("Login successful for:", values.email);
      // In a real application, you might call an authentication service here
      // and then navigate the user or update global state.
      // For example: navigate('/dashboard');
      // Or show a success toast:
      // toast({ title: "Login Successful", description: "Welcome back!" });
    }

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formError && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Username</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="rememberMe"
                      />
                    </FormControl>
                    <FormLabel htmlFor="rememberMe" className="text-sm font-medium cursor-pointer">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2 pt-4">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/registration" className="font-medium text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;