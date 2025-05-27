import clsx from "clsx"
import type { HTMLAttributes } from "react"
import { FaAngleDown } from "react-icons/fa6"

type ShowMoreButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "children">

export const ShowMoreButton = ({ className, ...rest }: ShowMoreButtonProps) => (
  <button
    className={clsx(
      "btn-ghost text-blue-dark flex cursor-pointer flex-row items-center gap-3 rounded-full px-3 py-1 text-xs font-semibold",
      className,
    )}
    {...rest}
  >
    <FaAngleDown className="size-3.5 rounded-full border border-current p-0.5" />{" "}
    Show More
  </button>
)
