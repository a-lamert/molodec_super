import Login from "@/features/auth/Login"
import Registration from "@/features/auth/Registration"
import { Counter } from "@/features/counter/Counter"
import { Quotes } from "@/features/quotes/Quotes"

export const publicRoutes = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Registration />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/quotes',
    element: <Quotes />,
  },
];
