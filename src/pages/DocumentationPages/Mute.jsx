export default function Mute() {
  return (
    <>
      <h1>/mute [user] [reason]</h1>
      <h2>Description</h2>
      <p>
        Mutes a user in the server, preventing them from sending messages or
        speaking.
      </p>
      <h2>Usage:</h2>
      <p>
        /mute [@username] "Reason for mute" (Replace with the actual user and
        reason)
      </p>
      <h2>Parameters:</h2>
      <p>user (required): The user you want to mute.</p>
      <p>reason (optional): The reason for the mute.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Roles</p>
      <p>User: Moderate Members </p>
    </>
  );
}
