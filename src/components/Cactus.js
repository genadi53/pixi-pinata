import { Container, Sprite, Texture } from 'pixi.js';
import gsap from 'gsap/all';


export default class Cactus extends Container{
    constructor(texture, x, y, name){
        super();
        this.name = name;
        this._element = null;
        this.createCactus(texture, x, y);
    }

    /**
     *  @description Create and set properties of the Cactus
     *  @param {string} texture texture of the Sprite
     *  @param {Number} x coordinate
     *  @param {Number} y coordinate
     *  @private
     */
    createCactus(texture, x, y){

        this._element = new Sprite(Texture.from(texture));

        this._element.x = x;
        this._element.y = y;

        this._element.anchor.set(0.5, 1);
        this._element.scale.set(1.75);
        this.addChild(this._element);
    }

    /**
     * @description Create an animation for the cactus Sprite
     */
    dance(){

       const animation = gsap.timeline();
       //this._element.transformOrigin = "center bottom";
    
        animation.fromTo(this._element, 
            {angle: 15, duration:1}, 
            {angle: -15, duration:1, yoyo:true, repeat:-1, ease:"power2.inOut"});
    }
}