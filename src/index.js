import Phaser from 'phaser';
import './styles/main.css';
import { BootGame } from './scenes/BootGame.js';
import { MochicStudio } from './scenes/MochicStudio.js';

const MAX_WIDTH = 1080;
const BORDERS = 1.5;

var config = {
	type: Phaser.AUTO,
	width: window.innerWidth > MAX_WIDTH ? window.innerWidth / BORDERS : window.innerWidth,
	height: window.innerHeight,
	background: 0x000000,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
			debug: true
		}
	},
	scene: [BootGame, MochicStudio]
};

new Phaser.Game(config);
