import Avatar from "./DocumentationPages/Avatar";
import BotInfo from "./DocumentationPages/BotInfo";
import ProfileEdit from "./DocumentationPages/ProfileEdit";
import ProfileView from "./DocumentationPages/ProfileView";
import ServerBanner from "./DocumentationPages/ServerBanner";
import ServerIcon from "./DocumentationPages/ServerIcon";
import ServerInfo from "./DocumentationPages/ServerInfo";
import UserInfo from "./DocumentationPages/UserInfo";
import Ban from "./DocumentationPages/Ban";
import Jail from "./DocumentationPages/Jail";
import Kick from "./DocumentationPages/Kick";
import Mute from "./DocumentationPages/Mute";
import Unban from "./DocumentationPages/Unban";
import Unjail from "./DocumentationPages/Unjail";
import Unmute from "./DocumentationPages/Unmute";
import ChannelCreate from "./DocumentationPages/ChannelCreate";
import ChannelDelete from "./DocumentationPages/ChannelDelete";
import ChannelHide from "./DocumentationPages/ChannelHide";
import ChannelUnhide from "./DocumentationPages/ChannelUnhide";
import ChannelLock from "./DocumentationPages/ChannelLock";
import ChannelUnlock from "./DocumentationPages/ChannelUnlock";
import Configure from "./DocumentationPages/Configure";

import { useParams } from "react-router-dom";

const commandComponents = {
  ban: Ban,
  avatar: Avatar,
  "bot-info": BotInfo,
  "profile-edit": ProfileEdit,
  "profile-view": ProfileView,
  "server-banner": ServerBanner,
  "server-icon": ServerIcon,
  "server-info": ServerInfo,
  "user-info": UserInfo,
  jail: Jail,
  kick: Kick,
  mute: Mute,
  unban: Unban,
  unjail: Unjail,
  unmute: Unmute,
  "channel-create": ChannelCreate,
  "channel-delete": ChannelDelete,
  "channel-hide": ChannelHide,
  "channel-unhide": ChannelUnhide,
  "channel-lock": ChannelLock,
  "channel-unlock": ChannelUnlock,
  configure: Configure,
};

export default function DocsPage() {
  const { command } = useParams();
  const CommandComponent = commandComponents[command];

  if (!CommandComponent) {
    return <div>Command Not Found!</div>;
  }

  return <CommandComponent />;
}
