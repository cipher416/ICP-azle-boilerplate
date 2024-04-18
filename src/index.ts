import { Server, StableBTreeMap } from "azle";

import express from "express";
import {
  addMeeting,
  deleteMeeting,
  getAllMeetings,
  getCurrentDateMeetings,
  getMeetingById,
  testHandler,
  updateMeeting,
} from "./handlers";
import { Meeting } from "./types";

export const meetingStorage = StableBTreeMap<string, Meeting>(0);

export default Server(() => {
  const app = express();

  app.use(express.json());
  app.get("/", testHandler);
  app.post("/meetings", addMeeting);
  app.get("/meetings", getAllMeetings);
  app.get("/meetings/:id", getMeetingById);
  app.put("/meetings/:id", updateMeeting);
  app.delete("/meetings/:id", deleteMeeting);
  app.get("/today-meetings", getCurrentDateMeetings);
  return app.listen();
});
