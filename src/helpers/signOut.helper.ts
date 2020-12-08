import { get, set } from "../data";

export function $signOut() {
  if (get("user")) {
    set("user", false);
    set("router", "Landing");
    // set('profile', false)
    // set('music', false)
    // set('transmission', false)
    get("socket").emit("logout", get("user"));
  }
}

export function $lock() {
  set("user", false);
  set("router", "Landing");
  // set('profile', false)
  // set('music', false)
  // set('transmission', false)
}
