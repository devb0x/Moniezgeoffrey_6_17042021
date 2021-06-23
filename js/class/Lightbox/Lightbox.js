import { LightboxFactory } from "./LightboxFactory.js";

const lightBox_parent_div = document.getElementById("lightbox");
const lightBoxContainer_div = document.querySelector(".lightbox__container");
const lightBoxClose_btn = document.querySelector(".lightbox-btn__close");
const lightBoxPrev_btn = document.querySelector(".lightbox-btn__prev");
const lightBoxNext_btn = document.querySelector(".lightbox-btn__next");
let test = lightBoxContainer_div.children[0];

/**
 * Class representing the Lightbox
 */
export class Lightbox {
  constructor(mediaList) {
    this.mediaList = mediaList;
    this.index = null;

    /**
     * Event Listener for close prev and next
     */
    lightBoxClose_btn.addEventListener("click", () => {
      this.close();
    });

    lightBoxPrev_btn.addEventListener("click", () => {
      this.prev();
    });

    lightBoxNext_btn.addEventListener("click", () => {
      this.next();
    });

    this.keyboardNavigation = this.keyboardNavigation.bind(this);
    this.mouseEvent = this.mouseEvent.bind(this);

    document.addEventListener("keydown", this.keyboardNavigation);
    document.addEventListener("click", this.mouseEvent);
  }

  /**
   * Listen to keydown for navigation and close inside the lightbox
   * @param e
   */
  // TODO nvda bloque navigation fleches gauche et droite
  keyboardNavigation(e) {
    if (e.key === "Escape") {
      this.close();
    }
    if (e.key === "ArrowLeft") {
      this.prev();
    }
    if (e.key === "ArrowRight") {
      this.next();
    }
    /**
     * tab
     */
    if (!e.shiftKey && e.key === "Tab") {
      // e.preventDefault();
      switch (document.activeElement) {
        case lightBoxClose_btn: // close to prev
          e.preventDefault();
          lightBoxPrev_btn.focus();
          break;

        case lightBoxPrev_btn: // prev to next
          e.preventDefault();
          lightBoxNext_btn.focus();
          document.querySelector(".lightbox__container").children[0].focus();
          break;

        case lightBoxNext_btn: // next to close
          e.preventDefault();
          lightBoxClose_btn.focus();
          break;
      }
    }
    /**
     * shift + tab
     */
    if (e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      switch (document.activeElement) {
        case lightBoxClose_btn: // close to next
          lightBoxNext_btn.focus();
          break;

        case lightBoxPrev_btn: // prev to close
          lightBoxClose_btn.focus();
          break;

        case lightBoxNext_btn: // next to media
          console.log("next to media");
          lightBoxContainer_div.children[0].focus();
          console.log(document.activeElement);
          break;

        // case lightBoxContainer_div.children[0]: // media to prev
        //   console.log('media to prev')
        //   lightBoxPrev_btn.focus()
        //   break

        // case lightBoxNext_btn: // next to prev
        //   lightBoxPrev_btn.focus()
        //   break

        // next to media

        // media to prev
      }
    }
  }

  /**
   * set focus on next btn if we clic on the modal
   * @param e
   */
  mouseEvent(e) {
    if (e.button === 0) {
      lightBoxNext_btn.focus();
    }
  }

  /**
   * Create a new media
   * @returns {LightboxFactory}
   */
  newMedia() {
    return new LightboxFactory({
      id: this.mediaList[this.index].id,
      photographerId: this.mediaList[this.index].photographerId,
      title: this.mediaList[this.index].title,
      image: this.mediaList[this.index].image,
      video: this.mediaList[this.index].video,
    });
  }

  /**
   * Remove the <img> inside the container of the lightbox
   */
  reset() {
    lightBoxContainer_div.innerHTML = "";
  }

  /**
   * Next media
   */
  next() {
    this.index += 1;
    /**
     * If we are on the last element, display the first one
     */
    if (this.index > this.mediaList.length - 1) {
      this.index = 0;
    }
    this.reset();

    this.newMedia().render();

    /**
     * set focus
     */
    lightBoxNext_btn.focus();
  }

  /**
   * Prev media
   */
  prev() {
    this.index -= 1;
    /**
     * If we are on first element, display the last one
     */
    if (this.index < 0) {
      this.index = this.mediaList.length - 1;
    }
    this.reset();

    this.newMedia().render();

    /**
     * set focus
     */
    lightBoxPrev_btn.focus();
  }

  /**
   * Close Lightbox & remove EventListener
   */
  close() {
    document.removeEventListener("keydown", this.keyboardNavigation);
    document.removeEventListener("click", this.mouseEvent);
    this.reset();
    lightBox_parent_div.style.display = "none";
  }

  /**
   * Display lightbox
   * @param idMedia
   */
  render(idMedia) {
    this.index = idMedia;
    this.open();
    if (this.newMedia.video) {
      console.log("video");
    }
    if (this.newMedia.image) {
      console.log("image lel");
    }
    this.newMedia().render();
  }

  /**
   * Add style for display
   */
  open() {
    lightBox_parent_div.style.display = "block";
  }
}
