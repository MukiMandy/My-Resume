// Sound disabled
class NoopSoundManager {
  playHover() {}
  playClick() {}
  playSuccess() {}
  toggleSound() { return false; }
}

export const sounds = new NoopSoundManager();
