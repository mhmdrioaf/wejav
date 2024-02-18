import LoginForm from "@/components/form/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | WeJav",
  description: "Halaman login WeJav",
};

export default function LoginPage() {
  return <LoginForm />;
}
