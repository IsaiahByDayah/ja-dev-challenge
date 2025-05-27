import clsx from "clsx"
import type { HTMLAttributes } from "react"

type IconButtonProps = HTMLAttributes<HTMLButtonElement>

export const IconButton = ({ className, ...rest }: IconButtonProps) => (
  <button
    className={clsx(
      "size-10 cursor-pointer rounded-full p-2 transition-colors",
      className,
    )}
    {...rest}
  />
)
