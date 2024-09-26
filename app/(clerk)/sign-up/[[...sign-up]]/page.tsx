"use client";
import * as SignUp from "@clerk/elements/sign-up";
import * as Clerk from "@clerk/elements/common";
import { FacebookIcon } from "lucide-react";
import { Fragment } from "react";

import { ClerkConnection } from "../../_components/start/clerk-connection";
import { ClerkOTP } from "../../_components/verifications/clerk-otp";
import { ClerkAction } from "../../_components/start/clerk-action";
import { ClerkField } from "../../_components/start/clerk-field";

import { GoogleIcon, MicrosoftIcon } from "@/public/icons";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import Image from "next/image";

export default function SignUpPage() {
    return (
        <SignUp.Root>
            <Clerk.Loading>
                {(isGlobalLoading) => (
                    <Fragment>
                        <SignUp.Step name="start">
                            <Card className="w-full border-none p-6">
                                <CardHeader className="">
                                    <CardTitle>
                                        <Image
                                            className="mx-auto block"
                                            src="/images/common/logo-3.png"
                                            alt="logo"
                                            width={100}
                                            height={100}
                                        />
                                    </CardTitle>
                                    <CardDescription className="text-center text-2xl font-bold text-primary">
                                        Sign Up At GATA
                                    </CardDescription>
                                </CardHeader>

                                <div className="flex-between">
                                    <ClerkConnection name="google" isGlobalLoading={isGlobalLoading} Icon={GoogleIcon} />
                                    <ClerkConnection name="facebook" isGlobalLoading={isGlobalLoading} Icon={FacebookIcon} />
                                    <ClerkConnection name="microsoft" isGlobalLoading={isGlobalLoading} Icon={MicrosoftIcon} />
                                </div>

                                <p className="my-8 flex items-center gap-x-4 text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                    OR
                                </p>

                                <ClerkField label="Email Address" name="emailAddress" type="email" />
                                <ClerkField label="Password" name="password" type="password" />

                                <ClerkAction
                                    isGlobalLoading={isGlobalLoading}
                                    navigate={{ text: "Already Have An Account? Sign In", href: "/sign-in" }}
                                />
                            </Card>
                        </SignUp.Step>

                        <SignUp.Step name="continue">
                            <Card>
                                <ClerkField label="Username" name="username" type="text" />
                                <ClerkAction isGlobalLoading={isGlobalLoading} />
                            </Card>
                        </SignUp.Step>

                        <SignUp.Step name="verifications">
                            <Card>
                                <SignUp.Strategy name="email_code">
                                    <ClerkOTP />
                                    <ClerkAction isGlobalLoading={isGlobalLoading} />
                                </SignUp.Strategy>
                            </Card>
                        </SignUp.Step>
                    </Fragment>
                )}
            </Clerk.Loading>
        </SignUp.Root>
    );
}
