import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { ReactNode, useEffect } from "react";
import { ZIM } from "zego-zim-web";
import { ZEGO_SERVER_SECRET } from "../Config";
import { useAppSelector } from "../features/store/store";

const ZegoCloud = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.UserSlice);
  useEffect(() => {
    const userID = user.id;
    const userName = user.name;
    const appID = 1631866234;
    const serverSecret = ZEGO_SERVER_SECRET;
    //@ts-ignore
    const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      null,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(TOKEN);
    zp.addPlugins({ ZIM });

    // Add any additional setup or event handling here
  }, [user]);

  return children;
};

export default ZegoCloud;
