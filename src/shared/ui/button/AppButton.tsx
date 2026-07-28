import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
}

const AppButton: FC<Props> = ({ children, className, onClick, disabled }) => {
    return (
        <button className={`${className} border border-accent py-3 px-6 rounded-xl`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default AppButton;