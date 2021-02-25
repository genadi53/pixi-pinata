import { Container, Sprite, Texture } from 'pixi.js';
import gsap from 'gsap/all';
import { random } from '../core/utils';

export default class Pinata extends Container{
    constructor(){
        super();
        this.name = 'pinata';
        this._elements = new Container();
        this._body = new Sprite(Texture.from('pinata'));

        this.createPinata();
        this._body.on('click', () => this.createChili());
    }

    /**
     *  @description
     *  @private
     */
    createPinata(){
        this._body.anchor.set(0.5);
        this._body.y = -450;
        this._body.scale.set(1.75);

        this._body.interactive = true;
        this._body.buttonMode = true;

        this.addChild(this._body);
    }

     /**
     *  @description Create chili and animates it
     *  @private
     */
    createChili(){
        const chili = new Sprite(Texture.from('chili'));
        chili.anchor.set(0.5);
        chili.y = -400;
        chili.x = Math.floor(random(-100, 100));
        chili.scale.set(1.75);
        chili.name = 'chili';
        this._elements.addChild(chili);
        this.addChild(this._elements);

        const animation = gsap.timeline();
        animation
            .fromTo(chili, {y: -300, alpha: 1, duration:1}, {y: 200, alpha:0, duration:1})
            .to(this._body.scale, { x: 1.5, y: 1.5, duration: 0.1, yoyo: true, repeat: 1 }, "<");
            
        setTimeout(() => {
            this._elements.removeChild(chili);
        }, 1000);
          
    }

     /**
     * @description Create an animation for the pinata Sprite
     *  @private
     */
    dance(){
        const animation = gsap.timeline();
        animation.fromTo(this._body,
        {angle: 15, duration:1}, 
        {angle: -15, duration:1, yoyo:true, repeat:-1, ease:"power2.inOut"});
    }

     /**
     *  @description Create particle and animates it
     *  @private
     */
    createParticle() {
      const particle = new Sprite(Texture.from('particle'));
        particle.anchor.set(0.5);
        particle.y = -350;
        particle.x = Math.floor(random(-100, 100));

        particle.scale.set(2);
        particle.name = 'particle';
        this._elements.addChild(particle);
        this.addChild(this._elements);

        const animation = gsap.timeline();
        animation
            .to(particle, { y: 200, alpha: 0, duration:1 });

        setTimeout(() => {
            this._elements.removeChild(particle)
        }, 1000);
    }
}