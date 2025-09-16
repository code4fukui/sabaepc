import { CSV } from "https://js.sabae.cc/CSV.js";
import { parseSec } from "./parseSec.js";

const fn = Deno.args[0];
if (!fn) {
  throw new Error("[csv fn (with video_url and video_t)]");
}
const data = CSV.toJSON(await CSV.fetch(fn));
for (const d of data) {
  const t = d.video_t;
  const sec = parseSec(t);
  if (sec !== null) {
    const url0 = d.video_url;
    const n = url0.lastIndexOf("?");
    const url = n < 0 ? url0 : url0.substring(0, n);
    const url2 = url + "?t=" + sec + "s";
    d.video_url = url2;
    console.log(url2)
  }
}
await Deno.writeTextFile(fn, CSV.stringify(data));
