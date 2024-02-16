import { store } from "@/app/store"
import * as React from "react"
import { ErrorBoundary } from "react-error-boundary"
import { HelmetProvider } from "react-helmet-async"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./AuthProvider"

const ErrorFallback = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    </div>
  )
}

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div className="">Loading...</div>}>
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <AuthProvider>
              <BrowserRouter>{children}</BrowserRouter>
            </AuthProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </Provider>
    </React.Suspense>
  )
}
