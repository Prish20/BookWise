"use client";

import AuthForm from "@/components/AuthForm/AuthForm";
import { signInSchema } from "@/lib/FormValidation/validation";
import React from "react";

const SignIn = () => (
    <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
            email: "",
            password: "",
        }}
        onSubmit={() => {}}
    />
);

export default SignIn;
