"use client";

import { useRouter } from "next/navigation";
import { Form, FormField } from ".";
import { Button } from "../button";
import { Slogan } from "../other";

export default function LoginForm() {
  const router = useRouter();
  return (
    <div className="w-full grid grid-cols-2 px-8 py-4">
      <div className="w-full flex flex-col gap-4 px-4 py-2">
        <div className="flex flex-col gap-1">
          <p className="font-aclonica text-2xl font-bold">Login</p>
          <p className="text-xs">
            Segera login untuk menikmati pengalaman pemesanan makanan online
            yang cepat, mudah, dan nyaman!
          </p>
        </div>
        <Form>
          <FormField
            type="text"
            name="username"
            label="Username/Email"
            id="username"
            required
          />
          <FormField
            type="password"
            name="password"
            label="Password"
            id="password"
            required
          />
          <div className="w-full h-px rounded bg-border" />
          <Button fullWidth type="submit" variant="primary">
            Login
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
            onClick={() => router.push("/register")}
          >
            Daftar
          </Button>
        </Form>
      </div>

      <Slogan />
    </div>
  );
}
