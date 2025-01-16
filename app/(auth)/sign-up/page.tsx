"use client";


import AuthForm from "@/components/AuthForm/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/FormValidation/validation";

const Page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            email: "",
            password: "",
            fullName: "",
            universityId: 0,
            universityCard: "",
        }}
        onSubmit={signUp}
    />
);

export default Page;
