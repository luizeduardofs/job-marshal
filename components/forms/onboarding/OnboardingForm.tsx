"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/public/logo.png";
import { useState } from "react";
import { CompanyForm } from "./CompanyForm";
import { UserTypeForm } from "./UserTypeForm";

type UserSelectionType = "company" | "jobSeeker" | null;

export function OnboardingForm() {
  const [step, setStep] = useState<number>(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  const handleUserTypeSelection = (type: UserSelectionType) => {
    setUserType(type);
    setStep(2);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserTypeForm onSelect={handleUserTypeSelection} />;

      case 2:
        return userType === "company" ? (
          <CompanyForm />
        ) : (
          <p>User is a job seeker</p>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={Logo} width={50} height={50} alt="Job Marshal logo" />
        <h1 className="text-4xl font-bold">
          Job <span className="text-primary">Marshal</span>
        </h1>
      </div>

      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
}
