export default function ChannelCreate() {
  return (
    <>
      <h1>/channel create [name] [type] [category]</h1>
      <h2>Description</h2>
      <p>Creates a new text or voice channel in the specified category.</p>
      <h2>Usage:</h2>
      <p>/channel create "new-channel" Text Category Name</p>
      <h2>Parameters:</h2>
      <p>name (required): The name of the new channel.</p>
      <p>type (required): The type of channel to create ("Text" or "Voice").</p>
      <p>
        category (required): The category where the channel should be created.
      </p>
      <h2>Required Permissions:</h2>
      <p>Bot: Manage Channels</p>
      <p>User: Manage Channels</p>
    </>
  );
}
