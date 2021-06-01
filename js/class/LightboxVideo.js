import { photographerPath } from "../page2.js";

export class LightboxVideo {

  /**
   * Create Video for Lightbox
   * @param mediaList
   */
  constructor(mediaList) {
    this.mediaList = mediaList
  }

  /**
   * Create the <video> and the src
   * @returns {HTMLVideoElement}
   */
  render() {
    const containerVideo = document.createElement('video')
    containerVideo.classList.add('lightbox__container-media')
    containerVideo.src = `./../Sample%20Photos/${photographerPath}/${this.mediaList.video}`
    containerVideo.controls = true
    return containerVideo
  }
}
