import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import {Home} from "../../components/Home/Home";
import {About} from "../../components/About/About";
import {Pricing} from "../../components/Pricing/Pricing";
import {Features} from "../../components/Features/Features";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";
import { Trainers } from "../../components/Trainers/Trainers";
import { Blogs } from "../../components/Blogs/Blogs";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>

        <Route index element={<Home />}/>
        <Route path={"home"} element={<Home/>}/>
        <Route path={"about"} element={<About />}/>
        <Route path={"features"} element={<Features />}/>
        <Route path={"pricing"} element={<Pricing />}/>
        <Route path={"trainers"} element={<Trainers />}/>
        <Route path={"blogs"} element={<Blogs />}/>

        <Route path={"404"} element={<PageNotFound />} />
        <Route path={"*"} element={<Navigate to={"404"} />} />

      </Route>
    </Routes>
  )
}

