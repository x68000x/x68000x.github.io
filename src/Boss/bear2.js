"use strict";

GBGJ.Bear2 = GBGJ.Boss.extend({
	init : function (x, y, settings) {
		settings = settings || {};
		settings.image = 'bear1';
		settings.width = 90;
		settings.height = 62;
		settings.shapes = [ new me.Rect(0, 0, 25, 55)];

		this.states = {
			shoot: {
				delay: 500,
				next: "moveUp",
			},
			moveUp: {
				delay: 1150,
				next: "shootUp",
			},
			shootUp: {
				delay: 500,
				next: "down",
			},
			down: {
				delay: 1150,
				next: "slide",
			},
			slide: {
				delay: 850,
				next: "flip",
			},
			flip: {
				delay: 500,
				next: "shoot",
			}
		};
		
		this.hp = 210;

		this._super(GBGJ.Boss, 'init', [x, y, settings]);
		this.renderable.addAnimation("idle", [0, 1, 2, 3,4,5,6,7,8,9,10,11,12]);
		this.renderable.addAnimation("hit", [0, 4, 0, 4]);
		this.renderable.addAnimation("die", [11,12]);
		this.changeAnimation("idle");
		this.state = this.states.flip;
		this.currentTimer = 0;
		this.flipped = false;
		
		this.baseX = this.pos.x;
		this.baseY = this.pos.y;
	},

	
	shootUp: function() {
		var angle = 45;
		var dir = new me.Vector2d(this.flipped ? 1 : -1, 0.25);
		
		for( var i = 0; i < 8; i ++ ) {

			me.game.world.addChild(
				new GBGJ.BulletShooter(this.pos.x + i * 5, this.pos.y + (i * 10 - 5), {
					speed: 1,
					dir: dir,
				})
			);
		}
		me.audio.play("enemyshoot");
	},


// setting tween values to a lower number makes the bear teleport	
	moveUp: function() {
		var tween = new me.Tween(this.pos).to({
			y: this.baseY - 40,
		}, 600)
			//.onComplete(myFunc);
		//tween.easing(me.Tween.Easing.Quad.Out);
		tween.start();
	},
	
	down: function() {
		var tween = new me.Tween(this.pos).to({
			y: this.baseY,
		}, 600)
			//.onComplete(myFunc);
		//tween.easing(me.Tween.Easing.Quad.Out);
		tween.start();
	},
	
// when bear on right side direction of bullets positive number goes right
	shoot: function() {
		var angle = -45;
		var dir = new me.Vector2d(this.flipped ? 1 : -1, -0.25);
		for( var i = 0 ; i < 8; i ++ ) {
			me.game.world.addChild(
				new GBGJ.BulletShooter(this.pos.x + i * 5, this.pos.y + (i * 10 - 5), {
					speed: 1,
					dir: dir,
				})
			);
		}
		me.audio.play("enemyshoot");
	},

	slide: function() {
		var tween = new me.Tween(this.pos).to({
		
// HORIZONTAL BOSS MOVEMENT the number at the end is relevant	
// setting both values y makes the  bear go vertical	
// combining two lines x and y makes the bear go diagonal
		
			x: this.pos.x + (this.flipped ? 1 : -1) * 100,
			y: this.pos.y + (this.flipped ? 1 : -1) * -30,
		}, 3000)
			//.onComplete(myFunc);
		tween.easing(me.Tween.Easing.Bounce.Out);
		tween.start();
	},

	flip: function() {
		this.flipped = !this.flipped;
		this.renderable.flipX(this.flipped);
	},

	bossUpdate: function(dt) {
		this.currentTimer += dt;
		if(this.currentTimer > this.state.delay) {
			var next = this.state.next
			this[next]();
			this.state = this.states[next];
			this.currentTimer = 0;
		}
	},

	getDeathSound: function() {
		return "boss1death";
	}
});
