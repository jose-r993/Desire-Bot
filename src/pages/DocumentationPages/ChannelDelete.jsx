export default function ChannelDelete() {
  return (
    <>
      <h1>/channel delete [channel]</h1>
      <h2>Description</h2>
      <p>Deletes the specified channel.</p>
      <h2>Usage:</h2>
      <p>
        /channel delete #channel-name (Replace with the actual channel name)
      </p>
      <h2>Parameters:</h2>
      <p>channel (required): The channel you want to delete.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Channels</p>
      <p>User: Manage Channels</p>
    </>
  );
}
