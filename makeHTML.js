import { CSV } from "https://js.sabae.cc/CSV.js";

const addEmbedTwitter = (url) => {
  return `<blockquote class="twitter-tweet">
    <p lang="ja" dir="ltr">
      トップバッターは！チームひまわり！<br><br>鯖江のひととものづくりの魅力を発信し関係人口を増やす為のプラン。<br><br>
      「めがね婚」と称し、結婚８年目を鯖江での旅で祝う。<br><br>
      結婚８年目、眼鏡でお互いに目を向け直そう、という発想が素敵でした！
      <a href="https://twitter.com/hashtag/sabaepc?src=hash&amp;ref_src=twsrc%5Etfw">#sabaepc</a>
      <a href="https://twitter.com/hashtag/%E5%AD%A6%E7%94%9F%E5%9B%A3%E4%BD%93with?src=hash&amp;ref_src=twsrc%5Etfw">#学生団体with</a>
      <a href="https://t.co/tOwsQ4HwAz">pic.twitter.com/tOwsQ4HwAz</a></p>&mdash; 学生団体with (@sabaepc_with)
      <a href="https://twitter.com/sabaepc_with/status/1439815774172893189?ref_src=twsrc%5Etfw">September 20, 2021</a></blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    `
};

const data = CSV.toJSON(await CSV.fetch("./sabaeplan2021.csv"));
// sabaeplan,year,num,team,title,target,summary,strengths,problems,fukuno_comment,prize
const res = [];
for (const d of data) {
  const s = `<h3>「${d.title} by チーム ${d.team}」${d.prize}</h3>
ターゲット: ${d.target}<br>
課題: ${d.problems}<br>
強み: ${d.strengths}<br>
概要: ${d.summary}<br>
<a href=${d.withlink}>学生団体withによる紹介</a><br>
福野コメント: ${d.fukuno_comment}<br>
`;
  res.push(s);
}
console.log(res.join("</p><p>\n"));
