import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";
import FileController from "./app/controllers/FileController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.put("/users", UserController.update);

// routes.get('/meetups', MeetupController.index);
// routes.post('/meetups', MeetupController.store);
// routes.put('/meetups/:id', MeetupController.update);
// routes.delete('/meetups/:id', MeetupController.delete);

// routes.get('/organizing', OrganizingController.index);
// routes.get('/subscriptions', SubscriptionController.index);

// routes.post('/meetups/:meetupId/subscriptions', SubscriptionController.store);

routes.post("/files", upload.single("file"), FileController.store);

export default routes;
