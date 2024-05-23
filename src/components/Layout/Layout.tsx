import Navbar from "../Navbar"

type MainLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: MainLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
