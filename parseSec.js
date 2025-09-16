export const parseSec = (t) => { // hh:mm:ss -> sec
  if (t === "") return null;
  const s = t.split(":");
  if (s.length == 1) {
    return parseInt(s[0]);
  } else if (s.length == 2) {
    return parseInt(s[0]) * 60 + parseInt(s[1]);
  } else if (s.length == 3) {
    return parseInt(s[0]) * (60 * 60) + parseInt(s[1]) * 60 + parseInt(s[2]);
  }
};