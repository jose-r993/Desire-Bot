export default function Unmute() {
  return (
    <>
      <h1>/unjail [user] [reason]</h1>
      <h2>Description</h2>
      <p>
        Unmutes a user in the server, allowing them to send messages and speak.
      </p>
      <h2>Usage:</h2>
      <p>
        /unmute [@username] "Reason for unmute" (Replace with the actual user
        and reason)
      </p>
      <h2>Parameters:</h2>
      <p>user (required): The user you want to unmute.</p>
      <p>reason (optional): The reason for the unmute.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Roles</p>
      <p>User: Moderate Members</p>
    </>
  );
}
