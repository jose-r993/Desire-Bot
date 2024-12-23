export default function ProfileEdit() {
  return (
    <>
      <h1>/profile edit</h1>
      <h2 id="profile-edit-description">Description</h2>
      <p>
        The <code>/profile edit</code> command allows users to create or modify
        their personal profiles within the application. This feature enables
        users to update their display name, bio, profile picture, and other
        personal details to reflect their current preferences.
      </p>
      <p>
        With this command, users can ensure their profiles are up-to-date and
        accurately represent them to other members of the community. The process
        is straightforward, offering a user-friendly interface for making these
        changes.
      </p>
      <h2 id="profile-edit-usage">Usage</h2>
      <p>
        To use the <code>/profile edit</code> command, simply type{" "}
        <code>/profile edit</code> in the command input field and press Enter.
        This will open the profile editor, where you can make your desired
        changes.
      </p>
      <h2 id="profile-edit-parameters">Parameters</h2>
      <p>
        The <code>/profile edit</code> command does not require any additional
        parameters. However, once the editor is open, you can modify the
        following fields:
      </p>
      <ul>
        <li>
          <strong>Display Name:</strong> Your name as it will appear to other
          users.
        </li>
        <li>
          <strong>Bio:</strong> A short description about yourself.
        </li>
        <li>
          <strong>Profile Picture:</strong> Upload or change your profile
          picture.
        </li>
        <li>
          <strong>Contact Information:</strong> Update your email address or
          other contact details.
        </li>
      </ul>
    </>
  );
}
