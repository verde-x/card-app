import { memo, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/components/pages/Home";
import { Cards } from "@/components/pages/Cards";
import { Register } from "@/components/pages/Register";
import { Page404 } from "@/components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards/:id" element={<Cards />} />
      <Route path="/cards/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
