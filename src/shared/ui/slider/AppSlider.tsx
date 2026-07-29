import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
}

const AppSlider: FC<Props> = ({ children }) => {
    return (
        <div className="relative w-full py-4 group">
            <div className="flex w-max animate-scroll space-x-6 group-hover:[animation-play-state:paused]">
                {children}
                {children}
            </div>
        </div>
    );
};

export default AppSlider;