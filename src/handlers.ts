import { Request, Response } from "express";
import { Meeting } from "./types";
import { v4 as uuidv4 } from "uuid";
import { getCurrentDate } from "./utils";
import { meetingStorage } from ".";

export function addMeeting(req: Request, res: Response) {
  const message: Meeting = {
    meetingId: uuidv4(),
    createdAt: getCurrentDate(),
    ...req.body,
  };

  meetingStorage.insert(message.meetingId, message);

  res.json(message);
}
export function getAllMeetings(req: Request, res: Response) {
  res.json(meetingStorage.values());
}

export function getMeetingById(req: Request, res: Response) {
  const meetingId = req.params.id;

  const meetingOpt = meetingStorage.get(meetingId);

  if ("None" in meetingOpt) {
    res.status(404).send(`the meeting with id=${meetingId} not found`);
  } else {
    res.json(meetingOpt.Some);
  }
}

export function updateMeeting(req: Request, res: Response) {
  const meetingId = req.params.id;

  const meetingOpt = meetingStorage.get(meetingId);

  if ("None" in meetingOpt) {
    res.status(400).send(`couldn't update a meeting with id=${meetingId}.`);
  } else {
    const meeting = meetingOpt.Some;

    const updatedMeeting = {
      ...meeting,
      ...req.body,
      updatedAt: getCurrentDate(),
    };

    meetingStorage.insert(meeting.meetingId, updatedMeeting);

    res.json(updatedMeeting);
  }
}

export function deleteMeeting(req: Request, res: Response) {
  const meetingId = req.params.id;

  const deletedMeeting = meetingStorage.remove(meetingId);

  if ("None" in deletedMeeting) {
    res.status(400).send(`couldn't delete a meeting with id=${meetingId}.`);
  } else {
    res.json(deletedMeeting.Some);
  }
}

export function testHandler(req: Request, res: Response) {
  res.send("This canister is working properly.");
}
