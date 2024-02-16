import "./App.css"
import { AppRoutes } from "./routes"
import Layout from "./components/Layout"
import { AppProvider } from "./providers/app"

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProvider>
  )
}

export default App
