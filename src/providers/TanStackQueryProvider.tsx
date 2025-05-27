import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"

/**
 * Async state manager used for performant data fetching and mutations
 *
 * REF: https://tanstack.com/query/latest
 */

const queryClient = new QueryClient()

export const TanStackQueryProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
