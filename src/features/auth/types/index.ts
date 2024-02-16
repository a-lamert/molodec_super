export interface Credentials {
  email: string
  password: string
}

export enum ROLE {
  User = "user",
  Admin = "admin",
}

export interface User {
  id: number
  name: "string"
  email: "string"
  roles: ROLE[]
}

export interface UserRegistrationDto {
  name: string
  email: string
  password: string
}

export interface AuthSliceState {
  isAuthenticated: boolean
  user?: User
}
