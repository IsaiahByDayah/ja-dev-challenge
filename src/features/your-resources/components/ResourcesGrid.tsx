import clsx from "clsx"

import type { Resource } from "../types"
import { ResourceCard } from "./ResourceCard"

interface ResourcesGridProps {
  className?: string
  resources: Resource[]
  isLoading?: boolean
}

export const ResourcesGrid = ({
  className,
  resources,
  isLoading,
}: ResourcesGridProps) => {
  if (!resources.length) {
    if (isLoading) {
      return (
        <div
          className={clsx(
            "grid animate-pulse auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
            className,
          )}
        >
          <div className="bg-gray-light/50 card aspect-video" />
          <div className="bg-gray-light/50 card hidden aspect-video sm:block" />
          <div className="bg-gray-light/50 card hidden aspect-video lg:block" />
        </div>
      )
    }

    return (
      <div
        className={clsx(
          "bg-gray-light/10 card px-4 py-20 text-center",
          className,
        )}
      >
        No Resources Found
      </div>
    )
  }

  return (
    <div
      className={clsx(
        "grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
        { "animate-pulse": isLoading },
        className,
      )}
    >
      {resources?.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )
}
