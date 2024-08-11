export default function Unban() {
  return (
    <>
      <h1>/unban [user_id] [reason]</h1>
      <h2>Description</h2>
      <p>Unbans a user from the server.</p>
      <h2>Usage:</h2>
      <p>
        /unban 123456789012345678 "Reason for unbanning" (Replace with the
        actual user ID and reason)
      </p>
      <h2>Parameters:</h2>
      <p>
        user_id (required): The user ID of the user you want to unban (not a
        mention).
      </p>
      <p>reason (optional): The reason for the unban.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Ban Members</p>
      <p>User: Ban Members</p>
    </>
  );
}
