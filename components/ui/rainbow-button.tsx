import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer group transition-all animate-rainbow",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-sm outline-none focus-visible:ring-[3px] aria-invalid:border-destructive",
    "text-sm font-medium whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
  ),
  {
    variants: {
      variant: {
        default:
          "relative border-[3px] border-transparent bg-white bg-clip-padding text-accent-foreground before:absolute before:inset-0 before:-z-10 before:m-[-1px] before:rounded-[inherit] before:bg-[linear-gradient(90deg,#8b5cf6,#6366f1,#3b82f6,#6366f1,#8b5cf6)] before:bg-[length:200%] before:animate-rainbow after:absolute after:bottom-[-15%] after:left-1/2 after:-z-20 after:h-1/4 after:w-3/4 after:-translate-x-1/2 after:bg-[linear-gradient(90deg,#8b5cf6,#6366f1,#3b82f6,#6366f1,#8b5cf6)] after:bg-[length:200%] after:animate-rainbow after:blur-[0.75rem] after:opacity-50 text-blue-500",
        outline:
          "border-[2px] border-input border-transparent bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(139,92,246,0.3)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-violet),var(--color-indigo),var(--color-blue),var(--color-indigo),var(--color-violet))] bg-[length:200%] text-accent-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-violet),var(--color-indigo),var(--color-blue),var(--color-indigo),var(--color-violet))] before:bg-[length:200%] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(139,92,246,0.3)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-violet),var(--color-indigo),var(--color-blue),var(--color-indigo),var(--color-violet))]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-11 rounded-xl px-12 text-xl",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface RainbowButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainbowButtonVariants> {
  asChild?: boolean
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        data-slot="button"
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

RainbowButton.displayName = "RainbowButton"

export { RainbowButton, rainbowButtonVariants, type RainbowButtonProps }
