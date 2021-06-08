import { LightboxImage } from "./LightboxImage.js";
import { LightboxVideo } from "./LightboxVideo.js";

/**
 * Class representing the LightboxFactory
 */
export class LightboxFactory {
  /**
   * Create Image or Video for Lightbox
   * @param id
   * @param photographerId
   * @param title
   * @param image
   * @param video
   * @param index
   * @returns {LightboxImage|LightboxVideo}
   */
  constructor({id, photographerId, title, image, video, index}) {
    if (image) {
      return new LightboxImage(id, photographerId, title, image, index)
    }
    if (video) {
      return new LightboxVideo(id, photographerId, title, video, index)
    }
  }

}
