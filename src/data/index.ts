import { computed, ref, watch } from "vue";
import { User } from "../models/User.interface";
import { Config } from "../models/Config.interface";
import { Notification } from "../models/Notification.interface";
import { Socket } from "socket.io-client";

export interface State {
  config: false | Config;
  user: false | User;
  socket: false | typeof Socket;
  ip: string;
  notification: false | Notification;
}

const state = ref<State>({
  user: false,
  config: false,
  socket: false,
  ip: "127.0.0.1",
  notification: false
});

export type StateValues = keyof State;

export function get(property: StateValues) {
  return computed((): any => state.value[property]).value;
}

export function set(property: any, value: any) {
  (state.value as any)[property] = value;
}

const history = [];
history.push(state);

watch(state, newState => {
  history.push(newState);
});

export { history };
