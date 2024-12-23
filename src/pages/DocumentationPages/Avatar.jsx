export default function Avatar() {
  return (
    <>
      <h1>/avatar [user]</h1>
      <h2 id="avatar-user-description">Description</h2>
      <p>
        Gets the avatar (profile picture) of a specified user or your own if no
        user is mentioned.
      </p>
      <h2 id="avatar-user-usage">Usage</h2>
      <p>/avatar (Get your own avatar)</p>
      <p>/avatar @username (Get the avatar of a mentioned user)</p>
      <h2 id="avatar-user-parameters">Parameters</h2>
      <p>
        user (optional): The user whose avatar you want to retrieve. If not
        provided, the command will show your avatar.
      </p>
    </>
  );
}
