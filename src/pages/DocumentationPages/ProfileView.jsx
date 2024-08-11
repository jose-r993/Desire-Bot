export default function ProfileView() {
  return (
    <>
      <h1>/profile view [user]</h1>
      <h2>Description</h2>
      <p>Allows you to view your own or another user's profile.</p>
      <h2>Usage:</h2>
      <p>/profile view (View your own profile)</p>
      <p>/profile view [@username] (View another user's profile)</p>
      <h2>Parameters:</h2>
      <p>
        user (optional): The user whose profile you want to view. If not
        provided, your own profile will be displayed.
      </p>
    </>
  );
}
