/**
 * NOTE: Helpers for mocking data storage via localstorage
 *
 * Would normally be a part of back-end / dal
 */

const _BOOKMARKS_LOCALSTORAGE_KEY = "BOOKMARKS_LOCALSTORAGE_KEY"

// Retrieves ids of bookmarked resources in localstorage for sake of example
export const _getBookmarks = () => {
  const value = window.localStorage.getItem(_BOOKMARKS_LOCALSTORAGE_KEY)
  return (value ? JSON.parse(value) : []) as string[]
}

// Stores ids of bookmarked resources in localstorage for sake of example
export const _setBookmarks = (bookmarks: string[]) => {
  window.localStorage.setItem(
    _BOOKMARKS_LOCALSTORAGE_KEY,
    JSON.stringify(bookmarks),
  )
}
