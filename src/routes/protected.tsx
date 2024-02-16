import { Navigate } from "react-router-dom"

import Profile from "@/features/auth/Profile"

export const protectedRoutes = [

  // { path: "/users", element: <Users /> },
  { path: "/profile", element: <Profile /> },
  // { path: "/", element: <Dashboard /> },
  { path: "*", element: <Navigate to="." /> },
]
