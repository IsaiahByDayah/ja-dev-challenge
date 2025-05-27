import clsx from "clsx"
import type { HTMLAttributes } from "react"
import { FaCheck } from "react-icons/fa6"

interface ChipButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

export const ChipButton = ({
  className,
  children,
  isSelected,
  ...rest
}: ChipButtonProps) => (
  <button
    className={clsx(
      "flex cursor-pointer flex-row items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium transition-colors",
      {
        "border-gray-light btn-ghost": !isSelected,
        "text-blue-dark border-blue-light bg-blue-light": isSelected,
      },
      className,
    )}
    {...rest}
  >
    {isSelected ? <FaCheck className="-ml-2" /> : null}
    {children}
  </button>
)
