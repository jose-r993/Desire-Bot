export default function Jail() {
  return (
    <>
      <h1>/jail [user] [reason]</h1>
      <h2>Description</h2>
      <p>Restricts a user from viewing channels in the server.</p>
      <h2>Usage</h2>
      <p>
        /jail [@username] "Reason for jailing" (Replace with the actual user and
        reason)
      </p>
      <h2>Parameters</h2>
      <p>user (required): The user you want to jail.</p>
      <p>reason (optional): The reason for the jail.</p>
      <h2>Required Permissions</h2>
      <p>Bot: Manage Roles</p>
      <p>User: Ban Members</p>
    </>
  );
}
