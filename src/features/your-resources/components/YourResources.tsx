import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { HiMenuAlt2, HiOutlinePencil, HiOutlinePlus } from "react-icons/hi"
import { HiOutlineListBullet } from "react-icons/hi2"

import { IconButton } from "../../../components/IconButton"
import { ShowMoreButton } from "../../../components/ShowMoreButton"
import { getResourceCategories, getResources } from "../api"
import { CategoryFilter } from "./CategoryFilter"
import { ResourcesGrid } from "./ResourcesGrid"

interface YourResourcesProps {
  className?: string
}

export const YourResources = ({ className }: YourResourcesProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )
  const { data: resourceCategories } = useQuery({
    queryKey: ["getResourceCategories"],
    queryFn: () => getResourceCategories(),
  })
  const {
    data: resources,
    isPending: isResourcesLoading,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["getResources", selectedCategoryId],
    queryFn: () =>
      getResources({ categoryId: selectedCategoryId ?? undefined }),
    placeholderData: keepPreviousData,
  })

  return (
    <div className={className}>
      <div className="m-auto max-w-6xl">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-blue-medium text-2xl font-semibold">
            Your Resources
          </h2>
          <div className="flex flex-row gap-2">
            <IconButton className="btn-ghost">
              <HiOutlinePencil className="size-full" />
            </IconButton>
            <IconButton className="btn-ghost">
              <HiOutlinePlus className="size-full" />
            </IconButton>
            <IconButton className="btn-ghost">
              <HiOutlineListBullet className="size-full stroke-2" />
            </IconButton>
            <IconButton className="btn-ghost">
              <HiMenuAlt2 className="size-full" />
            </IconButton>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm font-light">
            You may add or edit your existing resources
          </p>

          <CategoryFilter
            className="mt-4 flex-wrap"
            options={resourceCategories ?? []}
            value={selectedCategoryId}
            onChange={setSelectedCategoryId}
          />
        </div>

        <ResourcesGrid
          className="mt-8"
          resources={resources ?? []}
          isLoading={isResourcesLoading || isPlaceholderData}
        />

        <ShowMoreButton className="m-auto mt-8" />
      </div>
    </div>
  )
}
