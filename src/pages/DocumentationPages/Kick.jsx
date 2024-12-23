export default function Kick() {
  return (
    <>
      <h1>/kick [user] [reason]</h1>
      <h2>Description</h2>
      <p>Kicks a user from the server.</p>
      <h2>Usage</h2>
      <p>
        /kick [@username] "Reason for kick" (Replace with the actual user and
        reason)
      </p>
      <h2>Parameters</h2>
      <p>user (required): The user you want to jail.</p>
      <p>reason (optional): The reason for the jail.</p>
      <h2>Required Permissions</h2>
      <p>Bot: Kick Members</p>
      <p>User: Kick Members</p>
    </>
  );
}
