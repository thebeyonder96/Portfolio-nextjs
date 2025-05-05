// app/page.tsx or app/admin/page.tsx
import Logged from "@/components/Logged";
import OtpGate from "@/components/OtpGate";
import React from "react";

const AdminPage = ({ searchParams }: { searchParams: { page?: string } }) => {
    return (
      <OtpGate>
        <Logged searchParams={searchParams} />
      </OtpGate>
    );
  };

export default AdminPage;
