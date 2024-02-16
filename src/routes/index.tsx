import { useRoutes } from "react-router-dom"

import { protectedRoutes } from "./protected"
import { publicRoutes } from "./public"
import { commonRoutes } from "./common"
import { useAppSelector } from "@/app/hooks"
import { selectRoles } from "@/features/auth/authSlice"
import { ROLE } from "@/features/auth/types"

export const AppRoutes = () => {
  // здесь можно также проверять роли
  const roles = useAppSelector(selectRoles)
  const routes = roles?.includes(ROLE.Admin) ? protectedRoutes : []

  const element = useRoutes([...commonRoutes, ...publicRoutes, ...routes])

  return <>{element}</>
}
