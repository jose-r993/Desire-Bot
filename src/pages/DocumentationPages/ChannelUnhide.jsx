export default function ChannelUnhide() {
  return (
    <>
      <h1>/channel unhide [channel]</h1>
      <h2>Description</h2>
      <p>
        Unhides the specified channel, making it visible to the @everyone role.
      </p>
      <h2>Usage:</h2>
      <p>
        /channel unhide #channel-name (Replace with the actual channel name)
      </p>
      <h2>Parameters:</h2>
      <p>channel (required): The channel you want to unhide.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Channels</p>
      <p>User: Manage Channels</p>
    </>
  );
}
