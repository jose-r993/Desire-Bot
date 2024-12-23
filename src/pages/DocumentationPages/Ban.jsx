export default function DocsBan() {
  return (
    <>
      <h1>/ban [user_id] [reason]</h1>
      <h2>Description</h2>
      <p>Bans a user from the server.</p>
      <h2>Usage</h2>
      <p>
        /ban 123456789012345678 "Reason for banning" (Replace with the
        actual user ID and reason)
      </p>
      <h2>Parameters</h2>
      <p>
        user_id (required): The user ID of the user you want to ban (not a
        mention).
      </p>
      <p>reason (optional): The reason for the ban.</p>
      <h2>Required Permissions</h2>
      <p>Bot: Ban Members</p>
      <p>User: Ban Members</p>
    </>
  );
}
