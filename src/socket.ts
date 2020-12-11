import { get, set } from "./data";
import io from "socket.io-client";
import { Config } from "./models/Config.interface";
import { User } from "./models/User.interface";
import { $signOut, $lock } from "./helpers/signOut.helper";
import $notify from "./helpers/notify.helper";

export function initializeSocketEventHandlers() {
  console.log("init socket");
  let socket = (io as any).connect("https://www.theparadigmdev.com");

  set("socket", socket);

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("config", (data: Config) => {
    set("config", data);
    if (data.banned.includes(get("ip") as string)) {
      if (get("user")) socket.emit("logout", get("user"));
      set("router", "Error");
      set("user", false);
      // set('profile', false)
      // set('music', false)
    }
  });

  socket.on("kick", (username: string) => {
    if (username == get("user").username) {
      $signOut();
      $notify("You were kicked out", "red--text", "mdi-alert-circle", 2000);
    }
  });

  socket.on("nuke", () => {
    set("config.shutdown", true);
  });

  if (get("user")) socket.emit("login", get("user"));
  socket.on("user", (data: User) => {
    if (data.strikes != get("user").strikes)
      $notify(
        `You have ${data.strikes} strikes!`,
        "orange--text",
        "mdi-gavel",
        3000
      );
    if (get("user") !== data) set("user", data);
  });

  socket.on("logout", () => {
    socket.disconnect();
    socket = io("https://www.theparadigmdev.com");
    set("socket", socket);
    set("user", false);
  });

  socket.on("disconnect", () => {
    let reconnected = false;
    socket.on("reconnect", () => (reconnected = true));
    setTimeout(() => {
      if (!reconnected) $lock();
    }, 10000);
  });

  socket.on("connect_error", (error: any) => {
    console.error(error);
  });
}
