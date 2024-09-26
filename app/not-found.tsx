import { redirect } from "next/navigation";

const PageNotFound = () => {
    return redirect("/");
};

PageNotFound.displayName = "PageNotFound";
export default PageNotFound;
