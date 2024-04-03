# MEETING SCHEDULER

## Meeting Management System

This project is a meeting management system that provides functionality to add, retrieve, update, and delete meetings. It is built using TypeScript and Express.

### Project Structure

The project consists of the following main files and directories:

- `index.ts`: Entry point of the application.
- `types.ts`: Contains type definitions used in the project.
- `utils.ts`: Includes utility functions used throughout the application.
- `meetingStorage.ts`: Provides storage for meeting data.
- `handlers.ts`: Contains request handlers for adding, retrieving, updating, and deleting meetings.

### Installation

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `dfx start --host 127.0.0.1:8000 --background --clean`.
4. Deploy cannisters using `dfx deploy`.

### API Endpoints

The following API endpoints are available:

- `POST /meetings`: Add a new meeting to the system.
- `GET /meetings`: Retrieve all meetings from the system.
- `GET /meetings/:id`: Retrieve a meeting by its ID.
- `PUT /meetings/:id`: Update an existing meeting.
- `DELETE /meetings/:id`: Delete a meeting from the system.

### Testing

You can test the functionality of the system by using tools like ThunderClient on VScode or by sending HTTP requests to the defined endpoints through curl.

## Example

Request:
    `curl -X http://<CANISTER_ID>.localhost:8000/register -H 'Accept: application/json -d '{"meetingName": "Test", "meetingDate": "2024-04-04", "meetingDescription": "Lorem ipsum dolor amet."}'`

Response:
    `{"meetingId": "a4103389-b505-4455-b73d-6b8285c5cd26", "createdAt": "2024-04-03T16:40:37.443Z", "meetingName": "Test", "meetingDate": "2024-04-04", "meetingDescription": "Lorem ipsun dolor amet."}`

### Contributors

- [cipher416](https://github.com/cipher416)
- [ademolab91](https://github.com/ademolab91)

Feel free to contribute to the project by submitting a pull request or by opening an issue for any feedback or suggestions.

Thank you for using the Meeting Management System!