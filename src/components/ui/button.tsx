import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("btn", {
    variants: {
        variant: {
            default: "btn-primary",
            neutral: "btn-neutral",
            primary: "btn-primary",
            secondary: "btn-secondary",
            accent: "btn-accent",
            info: "btn-info",
            success: "btn-success",
            warning: "btn-warning",
            error: "btn-error",
        },

        size: {
            default: "",
            xs: "btn-xs",
            sm: "btn-sm",
            lg: "btn-lg",
            xl: "btn-xl",
        },
    },

    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    size,
    variant,
    className,
    type = "button",
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={buttonVariants({ variant, size, className })}
            {...props}
        />
    );
};
