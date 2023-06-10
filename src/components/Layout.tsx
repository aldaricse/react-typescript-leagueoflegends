import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout