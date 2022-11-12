import {Header} from "./Header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header/>

      <main>

        {/* added main when need to wrap using class 'container' */}
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

