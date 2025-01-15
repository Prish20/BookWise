"use client";

import AuthForm from "@/components/AuthForm/AuthForm";
import { signUpSchema } from "@/lib/FormValidation/validation";
import React from "react";

const SignUp = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            email: "",
            password: "",
            fullName: "",
            universityId: "",
            universityCard: "",
        }}
        onSubmit={() => {}}
    />
);

export default SignUp;
