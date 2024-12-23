export default function UserInfo() {
  return (
    <>
      <h1>/userinfo [user]</h1>
      <h2>Description</h2>
      <p>Get information about a user or yourself if no user is mentioned.</p>
      <h2>Usage</h2>
      <p>/userinfo (Get your own information)</p>
      <p>/userinfo [@username] (Get the information of a mentioned user)</p>
      <h2>Parameters</h2>
      <p>
        user (optional): The user whose information you want to view. If not
        provided, your information will be displayed.
      </p>
    </>
  );
}
