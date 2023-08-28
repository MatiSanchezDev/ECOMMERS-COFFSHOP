import { Route, Routes } from "react-router-dom";
import { HomePage } from "../ecommers/pages/HomePage";
import { ShopAllPage } from "../ecommers/pages/ShopAllPage";
import { ShopCupPage } from "../ecommers/pages/ShopCupPage";
import { ShopPackPage } from "../ecommers/pages/ShopPackPage";
import { OnlyProductPage } from "../ecommers/pages/OnlyProductPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop-all" element={<ShopAllPage />} />
      <Route path="/shop-cups" element={<ShopCupPage />} />
      <Route path="/shop-packs" element={<ShopPackPage />} />
      <Route path="/product/:name" element={<OnlyProductPage />} />
    </Routes>
  );
};
