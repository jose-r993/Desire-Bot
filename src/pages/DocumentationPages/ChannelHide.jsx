export default function ChannelHide() {
  return (
    <>
      <h1>/channel hide [channel]</h1>
      <h2>Description</h2>
      <p>Hides the specified channel from the @everyone role.</p>
      <h2>Usage:</h2>
      <p>/channel hide #channel-name (Replace with the actual channel name)</p>
      <h2>Parameters:</h2>
      <p>channel (required): The channel you want to hide.</p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Channels</p>
      <p>User: Manage Channels</p>
    </>
  );
}
