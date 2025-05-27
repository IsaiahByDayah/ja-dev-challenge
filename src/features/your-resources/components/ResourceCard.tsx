import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import clsx from "clsx"
import { HiBookmark, HiDotsVertical } from "react-icons/hi"
import { LuLoaderCircle } from "react-icons/lu"
import { RiLightbulbLine } from "react-icons/ri"

import { IconButton } from "../../../components/IconButton"
import {
  bookmarkResource,
  getResourceBookmarks,
  getResourceCategories,
  unbookmarkResource,
} from "../api"
import type { Resource } from "../types"

interface ResourceCardProps {
  className?: string
  resource: Resource
}

export const ResourceCard = ({ className, resource }: ResourceCardProps) => {
  const queryClient = useQueryClient()

  // MARK: These instances of the same `useQuery` hooks are candidates for a custom hook / query factory in bigger projects
  const { data: resourceCategories } = useQuery({
    queryKey: ["getResourceCategories"],
    queryFn: getResourceCategories,
  })

  const { data } = useQuery({
    queryKey: ["getBookmarks"],
    queryFn: getResourceBookmarks,
  })

  const bookmarkMutation = useMutation({
    mutationKey: ["bookmarkResource"],
    mutationFn: bookmarkResource,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getBookmarks"] }),
  })
  const unbookmarkMutation = useMutation({
    mutationKey: ["unbookmarkResource"],
    mutationFn: unbookmarkResource,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getBookmarks"] }),
  })

  const isMutationPending =
    bookmarkMutation.isPending || unbookmarkMutation.isPending
  const isBookmarked = bookmarkMutation.isPending
    ? true
    : unbookmarkMutation.isPending
      ? false
      : Boolean(data?.find((id) => id === resource.id))

  const resourceCategory = resourceCategories?.find(
    (rc) => rc.id === resource.categoryId,
  )

  const handleBookmarkClick = () => {
    if (isBookmarked) {
      unbookmarkMutation.mutate(resource.id)
    } else {
      bookmarkMutation.mutate(resource.id)
    }
  }

  return (
    <div
      className={clsx(
        "bg-blue-dark/75 card relative isolate overflow-hidden p-5 text-white",
        className,
      )}
    >
      <div className="flex w-full flex-row justify-end gap-2">
        <IconButton
          className={clsx("btn-dark-blue transition-colors", {
            "text-teal": isBookmarked && !isMutationPending,
          })}
          onClick={handleBookmarkClick}
        >
          {isMutationPending ? (
            <LuLoaderCircle className="size-full animate-spin" />
          ) : (
            <HiBookmark className="size-full" />
          )}
        </IconButton>
        <IconButton className="btn-dark-blue">
          <HiDotsVertical className="size-full" />
        </IconButton>
      </div>

      <div className="mt-10">
        <div className="flex flex-row items-center gap-2 text-current/75">
          <RiLightbulbLine className="size-4" />
          <span className="flex flex-row gap-0.5 text-xs">
            {resource.categoryId ? (
              <>
                <>{`${resourceCategory?.name}`}</>
                <span className="">&bull;</span>
              </>
            ) : null}{" "}
            Resources
          </span>
        </div>
        <p className="mt-2 text-sm text-current/80">{resource.description}</p>
      </div>

      <img
        className="absolute inset-0 -z-20 size-full object-cover mix-blend-multiply"
        src={resource.imageSrc}
      />
    </div>
  )
}
