import clsx from "clsx"

import { ChipButton } from "../../../components/ChipButton"
import type { ResourceCategory } from "../types"

interface CategoryFilterProps {
  className?: string
  options: ResourceCategory[]
  value: string | null
  onChange: (newValue: string | null) => void
}

export const CategoryFilter = ({
  className,
  options,
  value,
  onChange,
}: CategoryFilterProps) => (
  <div className={clsx("flex flex-row gap-4", className)}>
    <ChipButton
      onClick={() => {
        onChange(null)
      }}
      isSelected={value === null}
    >
      ALL
    </ChipButton>
    {options.map((option) => (
      <ChipButton
        key={option.id}
        onClick={() => {
          onChange(option.id)
        }}
        isSelected={value === option.id}
      >
        {option.name}
      </ChipButton>
    ))}
  </div>
)
