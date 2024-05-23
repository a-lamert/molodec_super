import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { NavLink } from "react-router-dom"
import { logout, selectIsAuthenticated, selectRoles } from "@features/auth/authSlice"
import { ROLE } from "@/features/auth/types"

export default function Navbar() {
  const roles = useAppSelector(selectRoles)
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout({}))
  }

  return (
    <div>
      <NavLink to="/auth/login">Sign in</NavLink>
      <NavLink to="/auth/register">Sign up</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/quotes">Quotes</NavLink>
      
      {roles?.includes(ROLE.Admin) && <NavLink to="/profile">Profile</NavLink>}
      
      {isAuthenticated && (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    
    </div>
  )
}
