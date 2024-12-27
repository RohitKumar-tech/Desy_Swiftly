// In this file we will connect all the routes created for this project

import { authRoutes } from "./auth.js";

const prefix = "/api";

export const registerRoutes = async (fastify) => {
    fastify.register(authRoutes, { prefix : prefix } );
};
