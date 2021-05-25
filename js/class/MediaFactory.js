import { Image } from "./Image.js";
import { Video } from "./Video.js";
import {photographerPath} from "../page2.js";

export class MediaFactory {

  constructor(type, photographerId, title, image, video, tags, likes, date, price) {
    if (type === "image") {
      return new Image(photographerId, title, image, tags, likes, date, price);
    }
    if (type === "video") {
      return new Video(photographerId, title, video, tags, likes, date, price);
    }
  }

  render(el) {
    console.log(el)
  }

}
