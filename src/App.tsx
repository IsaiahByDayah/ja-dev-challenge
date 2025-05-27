import { YourResources } from "./features/your-resources/components/YourResources"
import { TanStackQueryProvider } from "./providers/TanStackQueryProvider"

export const App = () => {
  return (
    <TanStackQueryProvider>
      <YourResources className="px-2 py-4" />
    </TanStackQueryProvider>
  )
}
