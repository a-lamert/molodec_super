import { useAppSelector } from "@/app/hooks"
import { selectUser } from "../authSlice"

export default function Profile() {
  const user = useAppSelector(selectUser)
  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.email}</p>
      <p>{user?.name}</p>
    </div>
  )
}
