import { type FC, lazy, Suspense, useMemo } from "react";

interface Props {
    name: string
    className?: string
}

const AppIcon: FC<Props> = ({ name, className }) => {
    const SvgComponent = useMemo(() => {
        return lazy(() => import(`@/assets/icons/${name}.svg?react`));
    }, [name]);

    return (
        <Suspense fallback={null}>
            <SvgComponent className={className} />
        </Suspense>
    );
};

export default AppIcon;