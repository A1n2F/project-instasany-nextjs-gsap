import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface GridContainerProps {
    children: ReactNode
    className?: string  
}

export function GridContainer({ children, className}: GridContainerProps) {
    const defaultClass = "w-full max-w-[1240px] mx-auto px-3"
    const combinadClasses = twMerge(defaultClass, className)
    return (
        <div className={combinadClasses}>
            {children}
        </div>
    )
}