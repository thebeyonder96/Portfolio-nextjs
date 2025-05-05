// components/OtpGate.tsx
"use client";
import React, { useState } from "react";

const OtpGate = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "85138629") {
      setIsAdmin(true);
    }
  };

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-[calc(100dvh-250px)]">
        <form onSubmit={handleSubmit}>
          <input
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-100 rounded-2xl px-6 py-4 outline-none"
            type="text"
            placeholder="Enter the OTP"
          />
        </form>
      </div>
    );
  }

  return <>{children}</>;
};

export default OtpGate;
