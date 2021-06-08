import { Image } from "./Image.js";
import { Video } from "./Video.js";

/**
 * Class representing the MediaFactory
 */
export class MediaFactory {

  /**
   * Create Image or Video
   * @param id
   * @param photographerId
   * @param title
   * @param tags
   * @param likes
   * @param date
   * @param price
   * @param image
   * @param video
   * @returns {Video|Image}
   */
  constructor({id, photographerId, title, tags, likes, date, price, image, video}) {
    if (image) {
      return new Image(id, photographerId, title, image, tags, likes, date, price);
    }
    if (video) {
      return new Video(id, photographerId, title, video, tags, likes, date, price);
    }
  }

}
