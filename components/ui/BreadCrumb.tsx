"use client";
import { ChevronRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { Breadcrumb, BreadcrumbPage, BreadcrumbList, BreadcrumbItem } from "@/ui/breadcrumb";

export const BreadCrumb = () => {
    const pathname = usePathname().split("/");

    const links = pathname
        .map((route, index) => ({
            _id: `${route} - ${index}`,
            label: route ? route.replaceAll("-", " ") : "",
        }))
        .filter((route) => route.label && route.label !== "overview");

    return (
        <Breadcrumb>
            <BreadcrumbList className="mx-auto my-6 w-fit px-4">
                {links.map((link, index) => (
                    <Fragment key={link._id}>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-base font-medium text-primary md:text-xl">{link.label}</BreadcrumbPage>
                        </BreadcrumbItem>

                        {index + 1 !== links.length && <ChevronRightIcon className="size-4 text-primary md:size-5" />}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

BreadCrumb.displayName = "BreadCrumb";
