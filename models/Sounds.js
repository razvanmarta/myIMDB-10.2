class InteractionSounds {
  constructor() {
    this.jokerLaugh = new Audio("../assets/sounds/smile.mp3");
    this.jokerLaugh.volume = 0.5;
    this.rewindMusic();
  }
  startMusic() {
    this.jokerLaugh.play();
  }
  rewindMusic() {
    this.jokerLaugh.currentTime = 0;
  }
}

document.querySelector(".arrow-parallax").addEventListener("click", () => {
  const laugh = new InteractionSounds();
  laugh.startMusic();
});
