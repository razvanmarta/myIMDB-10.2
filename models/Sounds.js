class InteractionSounds {
  constructor() {
    this.landingPage = new Audio("../assets/sounds/smile.mp3");
    this.deleteMovie = new Audio("../assets/sounds/laugh.mp3");
    this.landingPage.volume = 0.1;
    this.rewindMusic();
  }
  startMusic() {
    this.landingPage.play();
  }
  rewindMusic() {
    this.landingPage.currentTime = 0;
    this.deleteMovie.currentTime = 0;
  }
  deleteSound() {
    console.log(this);
    this.deleteMovie.play();
  }
}

document.querySelector(".arrow-parallax").addEventListener("click", () => {
  const laugh = new InteractionSounds();
  laugh.startMusic();
});
