import { Router } from "express";

import { renderHomepage } from "../controllers/index.js";

const indexRouter= Router()

indexRouter.get("/", renderHomepage)

export default indexRouter