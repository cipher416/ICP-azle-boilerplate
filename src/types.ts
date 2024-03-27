export type Meeting = {
  meetingId: string;
  meetingName: string;
  meetingDate: string;
  meetingDescription: string;
  meetingParticipants: string[];
  createdAt: Date;
  updatedAt: Date | null;
};
