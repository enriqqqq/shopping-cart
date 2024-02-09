import { CartContext } from "./CartContext";
import { useContext } from "react";

export const useCart = () => {
    return useContext(CartContext);
}