import RacingGame from './components/RacingGame.js';

class App {
  async play() {
    const RACING_GAME = new RacingGame();
    RACING_GAME.start();
  }
}

export default App;
