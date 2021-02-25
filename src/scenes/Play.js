import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Music from '../components/Music';
import Pinata from '../components/Pinata';
import Cactus from '../components/Cactus';

export default class Play extends Scene {
  async onCreated() {

    this._music = new Music();

    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);
    
   
    const pinata = new Pinata();
    const cactus1 = new Cactus('cactus1', -700, 640, 'cactus-1');
    const cactus2 = new Cactus('cactus2', 700, 640, 'cactus-2');

    this.addChild(pinata);
    this.addChild(cactus1, cactus2);
    
    this._music.once(Music.events.INTRO, () => {
      this.alpha = 0;
      this.background.alpha = 0;
      gsap.to(this.background.scale, { x: 0.8, y: 0.8, duration: 10, yoyo: true, repeat: -1, ease: 'linear.none'});
      
    });

    this._music.once(Music.events.START, () => {
      this.alpha = 1;
      this.background.alpha = 1;
      pinata.dance();
      cactus1.dance();
      cactus2.dance();
    });

    this._music.on(Music.events.BEAT, () => pinata.createParticle());

  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
