import { Image } from "./Image.js";
import { Video } from "./Video.js";

export class MediaFactory {

  constructor({id, photographerId, title,  tags, likes, date, price, image, video}) {
    if (image) {
      return new Image(id, photographerId, title, image, tags, likes, date, price);
    }
    if (video) {
      return new Video(id, photographerId, title, video, tags, likes, date, price);
    }
  }

}
