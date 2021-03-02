import mochic_studio_logo from '../assets/images/logo/mochicstudio.png';

export class BootGame extends Phaser.Scene {
	constructor(){
		super('bootGame');
	}

	preload(){
		this.load.image('logo', mochic_studio_logo);
	}

	create(){
		this.add.text(20, 20, 'Loading game...', { font: '2em Arial' });
		this.scene.start('mochicStudio');
	}
}
