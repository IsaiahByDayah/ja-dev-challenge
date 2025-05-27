// NOTE: Mocks of various potential API endpoints where resource data could come from

import { sleep } from "../../../utils"
import { MOCK_RESOURCE_CATEGORIES, MOCK_RESOURCES } from "./mocks"
import { _getBookmarks, _setBookmarks } from "./utils"

/**
 * Fetches resource categories for user / org / etc.
 */
export const getResourceCategories = async () => {
  // Using mock data for sake of example
  const resourceCategories = [...MOCK_RESOURCE_CATEGORIES]

  // MARK: perform any other additional logic to results where applicable

  return resourceCategories
}

interface GetResourcesOptions {
  /**
   * NOTE: keeping it simple with just 1 field for filtering by `categoryId` here,
   * but additional options could be supported as well
   */
  categoryId?: string
}

/**
 * Fetches resources for user / org / etc.
 */
export const getResources = async (options?: GetResourcesOptions) => {
  // Using hardcoded mock for sake of example
  let resources = [...MOCK_RESOURCES]

  // Filtering based on passed options. Would normally be done in back-end (api request, db query, etc)
  if (options?.categoryId) {
    resources = resources.filter(
      (resource) => resource.categoryId === options.categoryId,
    )
  }

  // MARK: perform any other additional logic to results where applicable

  // MARK: simulating latency
  await sleep(500)

  return resources
}

/**
 * Fetches resource bookmarks for user / org / etc.
 *
 * This data could just as easily be part of the `getResources` payload
 * Breaking out into own function for mock simplicity
 */
export const getResourceBookmarks = async () => {
  const bookmarks = _getBookmarks()

  // MARK: simulating latency
  await sleep(500)

  return bookmarks
}

/**
 * Stores passed in resource to bookmarks
 */
export const bookmarkResource = async (resourceId: string) => {
  const bookmarks = _getBookmarks()

  // Use JS Set to avoid duplicates
  const bookmarksSet = new Set(bookmarks)
  bookmarksSet.add(resourceId)

  // MARK: simulating latency
  await sleep(500)

  _setBookmarks(Array.from(bookmarksSet))
}

export const unbookmarkResource = async (resourceId: string) => {
  const bookmarks = _getBookmarks()

  // MARK: simulating latency
  await sleep(500)

  _setBookmarks(bookmarks.filter((b) => b !== resourceId))
}
