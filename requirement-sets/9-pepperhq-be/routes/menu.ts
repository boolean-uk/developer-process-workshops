import { Router } from "express";
import { getMenu } from "../controllers/menu";
import cache from "../middleware/routeCache";

const router = Router();

const fullDayInSeconds = 86400;

router.get("/", cache(fullDayInSeconds), getMenu);

export default router;
