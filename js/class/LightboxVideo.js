import { photographerPath } from "../page2.js";

export class LightboxVideo {

  constructor(mediaList) {
    this.mediaList = mediaList
  }

  render() {
    const containerVideo = document.createElement('video')
    containerVideo.classList.add('lightbox__container-media')
    containerVideo.src = `./../Sample%20Photos/${photographerPath}/${this.mediaList.video}`
    containerVideo.controls = true
    return containerVideo
  }
}
