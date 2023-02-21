import axios from "axios";
import titles from "../titles.json";
import { Request, Response } from "express";
import { Menu } from "../types";
import extendMenu from "../utils/extendMenu";

export const getMenu = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("http://backend-challenge-pos.pepperhq.com/menu.json");
    const menu: Menu = response.data;

    const extendedMenu: Menu = extendMenu(menu, titles);

    res.json({ data: extendedMenu });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
