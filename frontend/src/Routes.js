import { Routes, Route } from "react-router";
import { Home } from "./Routes/home";
import { CreateDate } from "./Routes/dates/create";
import { ViewDate } from "./Routes/dates";
export const CustomRoutes = ()=> (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dates/create/:id" element={<CreateDate />} />
      <Route path="/dates/:id" element={<ViewDate />} />
    </Routes>
)