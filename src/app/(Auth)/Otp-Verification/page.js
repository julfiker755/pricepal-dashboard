"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function Verification() {
  const [code, setCode] = useState(Array(6).fill(""));
  const [error, setError] = useState("");

  const handleChange = (val, i) => {
    if (!/^\d?$/.test(val)) return;
    const updated = [...code];
    updated[i] = val;
    setCode(updated);
  };

  const handleVerify = () => {
    const joined = code.join("");
    if (joined.length < 6 || code.includes("")) {
      setError("Please enter all 6 digits.");
    } else {
      setError("");
      console.log("Verifying:", joined);
      // Verification logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg py-20 bg-[#636363]/0.5">
        <CardHeader className="text-center space-y-2 pb-4">
          <h1 className="text-2xl font-semibold text-black">Verification code</h1>
          <p className="text-sm text-gray-600 max-w-xs mx-auto">
            We sent a reset link to <span className="font-medium">abidhasan@gmail.com</span>. Enter the 6-digit code.
          </p>
        </CardHeader>

        <CardContent>
          <div className="flex justify-center space-x-3 mb-2">
            {code.map((d, i) => (
              <Input
                key={i}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-12 text-center text-lg font-medium border-gray-300"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <div className="flex justify-center">
            <Button variant="main" onClick={handleVerify}>Verify Code</Button>
          </div>

          <p className="text-sm text-center text-gray-600 mt-4">
            Didn&apos;t receive the email?{" "}
            <button onClick={() => console.log("Resend")} className="text-primary/70 underline cursor-pointer">
              Resend
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}