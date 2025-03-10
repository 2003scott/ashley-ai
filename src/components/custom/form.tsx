import { cn } from "@/libs/classsName";
import { ElementType } from "react";

export type Element<T extends React.ElementType> =
    React.ComponentPropsWithoutRef<T> & {
        as?: T;
    };

export const Form = ({
    className,
    ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
    return <form className={cn("grid gap-4", className)} {...props} />;
}

Form.Input = <T extends ElementType = "input">({
    as,
    children,
    ...props
}: (
    | { as: T; children?: never }
    | { as?: never; children: React.ReactNode }
    | { as?: never; children?: never }
) &
    Element<T>) => {
    const Component = as || "input";
    return (
        <div className="">
            <label className="block space-y-2">
                <p className="text-sm font-medium text-neutral space-x-1">
                    <span>{props.title}</span>
                    {props.required && <span className="text-error">*</span>}
                </p>
                {children ? (
                    children
                ) : (
                    <Component
                        className={cn(
                            "w-full",
                            (!as || as === "input") && "input",
                            as === "textarea" && "textarea"
                        )}
                        {...props}
                    />
                )}
            </label>
        </div>
    );
};
