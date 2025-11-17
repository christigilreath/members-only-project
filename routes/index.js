import { Router } from "express";

import { renderHomepage } from "../controllers/index.js";

const indexRouter= Router()

indexRouter.get("/api", renderHomepage)

export default indexRouter