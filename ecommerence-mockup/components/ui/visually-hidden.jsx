import { cn } from "@/lib/utils"

const VisuallyHidden = ({ className, ...props }) => (
  <span
    className={cn(
      "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)",
      className
    )}
    style={{
      clip: "rect(0, 0, 0, 0)",
      clipPath: "inset(50%)",
      position: "absolute",
      overflow: "hidden",
      whiteSpace: "nowrap",
      height: "1px",
      width: "1px",
      margin: "-1px",
      padding: 0,
      border: 0,
    }}
    {...props}
  />
)

export { VisuallyHidden } 