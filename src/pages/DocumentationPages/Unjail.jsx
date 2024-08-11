export default function Unjail() {
  return (
    <>
      <h1>/unjail [user] [reason]</h1>
      <h2>Description</h2>
      <p>
        Removes the "Jailed" role from a user, restoring their access to
        channels.
      </p>
      <h2>Usage:</h2>
      <p>
        /unban 123456789012345678 "Reason for unbanning" (Replace with the
        actual user ID and reason)
      </p>
      <h2>Parameters:</h2>
      <p>user (required): The user you want to unjail.</p>
      <p>reason (optional): The reason for the unjail.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Roles</p>
      <p>User: Ban Members</p>
    </>
  );
}
