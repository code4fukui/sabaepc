import { parseSec } from "./parseSec.js";

export const addEmbedYouTube = (video_id, video_t) => {
	return `<iframe class="embedyoutube" src="https://www.youtube.com/embed/${video_id}?start=${parseSec(video_t)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
};
