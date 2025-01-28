import { cn } from "@/lib/utils"

function Alert({ className, variant, ...props }) {
  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4",
        {
          "border-red-500/50 text-red-600": variant === "destructive",
          "border-gray-200 text-gray-900": !variant
        },
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }) {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertDescription }
