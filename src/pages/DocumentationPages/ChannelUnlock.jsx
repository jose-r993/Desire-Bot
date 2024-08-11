export default function ChannelUnlock() {
  return (
    <>
      <h1>/channel unhide [channel]</h1>
      <h2>Description</h2>
      <p>Unlocks the specified channel, allowing @everyone to send messages.</p>
      <h2>Usage:</h2>
      <p>
        /channel unlock #channel-name "Reason for unlocking" (Replace with the
        actual channel name and reason)
      </p>
      <h2>Parameters:</h2>
      <p>channel (required): The channel you want to unlock.</p>
      <p>reason (optional): The reason for unlocking the channel.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Channels</p>
      <p>User: Manage Channels</p>
    </>
  );
}
