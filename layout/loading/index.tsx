export const AppLoading = () => {
    return (
        <div className="flex-center fixed left-0 top-0 z-50 h-full w-full bg-white dark:bg-background">
            <div className="text-center">
                <div className="size-44 animate-spin rounded-full border-2 border-b-[12px] border-primary-900 border-t-transparent duration-2000 dark:border-primary dark:border-t-transparent" />

                <div className="mt-12">
                    <span className="inline-block animate-preloader text-7xl font-semibold leading-[72px] text-primary-900 delay-0 dark:text-primary">
                        G
                    </span>
                    <span className="inline-block animate-preloader text-7xl font-semibold leading-[72px] text-primary-900 delay-100 dark:text-primary">
                        A
                    </span>
                    <span className="inline-block animate-preloader text-7xl font-semibold leading-[72px] text-primary-900 delay-200 dark:text-primary">
                        T
                    </span>
                    <span className="inline-block animate-preloader text-7xl font-semibold leading-[72px] text-primary-900 delay-300 dark:text-primary">
                        A
                    </span>
                </div>
            </div>
        </div>
    );
};

AppLoading.displayName = "AppLoading";
