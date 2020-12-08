import { set } from "../data";

export default function notify(
  text: string,
  style: string,
  icon: string,
  timeout: number
) {
  set("notification", {
    class: style,
    text,
    icon
  });
  setTimeout(() => (set("notification", false), timeout));
}
