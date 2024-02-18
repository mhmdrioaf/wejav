import RegisterForm from "@/components/form/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar | WeJav",
  description: "Halaman pendaftaran WeJav",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
