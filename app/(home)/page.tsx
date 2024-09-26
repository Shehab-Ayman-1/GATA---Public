import { Coverage } from "./_components/coverage";
import { Services } from "./_components/services";
import { AboutUs } from "./_components/about";
import { Media } from "./_components/media";
import { Cards } from "./_components/cards";

type OverviewProps = {};

const Overview = ({}: OverviewProps) => {
    return (
        <main className="flex flex-col gap-16 md:gap-32">
            <Coverage />

            <div className="container p-3 md:p-6">
                <Cards />
                <AboutUs />
            </div>

            <Services />
            <Media />
        </main>
    );
};

export default Overview;
