import { Request, Response } from "express";
import { Meeting } from "./types";
import { v4 as uuidv4 } from "uuid";
import { getCurrentDate } from "./utils";
import { meetingStorage } from ".";

export function addMeeting(req: Request, res: Response) {
  /**
   * Adds a new meeting to the system.
   *
   * @param req - The request object.
   * @param res - The response object.
   */
  const message: Meeting = {
    meetingId: uuidv4(),
    createdAt: getCurrentDate(),
    ...req.body,
  };

  meetingStorage.insert(message.meetingId, message);

  res.json(message);
}
export function getAllMeetings(req: Request, res: Response) {
  /**
   * Retrieves all meetings from the system and sends them as a JSON response.
   *
   * @param req - The request object.
   * @param res - The response object.
   */
  res.json(meetingStorage.values());
}

export function getMeetingById(req: Request, res: Response) {
  /**
   * Retrieves a meeting by its ID from the system and sends it as a JSON response.
   *
   * @param req - The request object containing the meeting ID as a parameter.
   * @param res - The response object used to send the meeting data or an error message.
   */
  const meetingId = req.params.id;

  const meetingOpt = meetingStorage.get(meetingId);

  if ("None" in meetingOpt) {
    res.status(404).send(`the meeting with id=${meetingId} not found`);
  } else {
    res.json(meetingOpt.Some);
  }
}

export function updateMeeting(req: Request, res: Response) {
  /**
   * Updates an existing meeting in the system.
   *
   * @param req - The request object containing the meeting ID as a parameter.
   * @param res - The response object used to send the meeting data or an error message.
   */
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
  /**
   * Deletes an existing meeting from the system.
   *
   * @param req - The request object containing the meeting ID as a parameter.
   * @param res - The response object used to send the meeting data or an error message.
   */
  const meetingId = req.params.id;

  const deletedMeeting = meetingStorage.remove(meetingId);

  if ("None" in deletedMeeting) {
    res.status(400).send(`couldn't delete a meeting with id=${meetingId}.`);
  } else {
    res.json(deletedMeeting.Some);
  }
}

export function testHandler(req: Request, res: Response) {
  /**
   * A test handler that returns a JSON response.
   *
   * @param req - The request object.
   * @param res - The response object
   */
  res.send("This canister is working properly.");
}
