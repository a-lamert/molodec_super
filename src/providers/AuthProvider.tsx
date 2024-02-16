import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { profile, selectIsAuthenticated } from "@/features/auth/authSlice"
import type * as React from "react"
import { useEffect } from "react"

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(profile({}))
  }, [dispatch, isAuthenticated])
  return <>{children}</>
}
