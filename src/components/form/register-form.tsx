"use client";

import { useRouter } from "next/navigation";
import { Form, FormField } from ".";
import { Button } from "../button";
import { Slogan } from "../other";
import useRegister from "./useRegister";

export default function RegisterForm() {
  const { isLoading, handleSubmit, response } = useRegister();

  const router = useRouter();

  return (
    <div className="w-full grid grid-cols-2 px-8 py-4">
      <div className="w-full flex flex-col gap-4 px-4 py-2">
        <div className="flex flex-col gap-1">
          <p className="font-aclonica text-2xl font-bold">Daftar</p>
          <p className="text-xs">
            Segera lakukan pendaftaran dan nikmati pengalaman pemesanan makanan
            online yang cepat, mudah, dan nyaman!
          </p>
        </div>

        <Form action={handleSubmit}>
          <FormField
            disabled={isLoading}
            label="Nama Lengkap"
            type="text"
            id="name"
            name="name"
          />
          <FormField
            disabled={isLoading}
            label="Email"
            type="email"
            id="email"
            name="email"
          />
          <FormField
            disabled={isLoading}
            label="Password"
            type="password"
            id="password"
            name="password"
          />

          <div className="w-full h-px bg-border rounded-lg" />
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            Daftar
          </Button>

          <div className="w-full relative">
            <div className="w-full h-px rounded-lg bg-border" />
            <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-border text-xs">
              ATAU
            </p>
          </div>

          <Button
            fullWidth
            variant="outline"
            type="button"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </Form>
      </div>

      <Slogan />
    </div>
  );
}
