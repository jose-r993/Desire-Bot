export default function ChannelLock() {
  return (
    <>
      <h1>/channel lock [channel] [reason]</h1>
      <h2>Description</h2>
      <p>
        Locks the specified channel, preventing @everyone from sending messages.
      </p>
      <h2>Usage</h2>
      <p>
        /channel lock #channel-name "Reason for locking" (Replace with the
        actual channel name and reason)
      </p>
      <h2>Parameters</h2>
      <p>channel (required): The channel you want to lock.</p>
      <p>reason (optional): The reason for locking the channel.</p>
      <h2>Required Permissions</h2>
      <p>Bot: Manage Channels</p>
      <p>User: Manage Channels</p>
    </>
  );
}
