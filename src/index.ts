import { Server, StableBTreeMap } from "azle";

import express from "express";
import {
  addMeeting,
  deleteMeeting,
  getAllMeetings,
  getMeetingById,
  testHandler,
  updateMeeting,
} from "./handlers";

class Meeting {
  meetingId: string;
  meetingName: string;
  meetingDate: string;
  meetingDescription: string;
  meetingParticipants: string[];
  createdAt: Date;
  updatedAt: Date | null;
}

export const meetingStorage = StableBTreeMap<string, Meeting>(0);

export default Server(() => {
  const app = express();

  app.use(express.json());
  app.get("/", testHandler);
  app.post("/meetings", addMeeting);
  app.get("/meetings", getAllMeetings);
  app.get("/meetings/:id", getMeetingById);
  app.put("/meetings/:id", updateMeeting);
  app.delete("/messages/:id", deleteMeeting);

  return app.listen();
});
