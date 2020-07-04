"use strict";

GBGJ.Dog3 = GBGJ.Boss.extend({
	init : function (x, y, settings) {
		settings = settings || {};
		settings.image = 'dog1';
		settings.width = 40;
		settings.height = 55;
//  Initial position of dog		
		settings.shapes = [ new me.Rect(0, 0, 25, 55)];

		this.states = {
			shoot: {
			
			// this speeds movement up a bit
				delay: 1000,
				next: "moveUp",
			},
			moveUp: {
			
			// 200 on up and down does half circle
				delay: 200,
				next: "shootUp",
			},
			shootUp: {
				delay: 1000,
				next: "down",
			},
			down: {
			
			// 200 on up and down does half circle
				delay: 200,
				next: "slide",
			},
			slide: {
// slide 10 is good for a surprise because it turns around right while moving left
// then shooting
			
				delay: 1000,
				next: "flip",
			},
			flip: {
				delay: 500,
				next: "shoot",
				
			}
		};
		
		this.hp = 255;

		this._super(GBGJ.Boss, 'init', [x, y, settings]);
		this.renderable.addAnimation("idle", [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]);
		this.renderable.addAnimation("hit", [0, 4, 0, 4]);
		this.renderable.addAnimation("die", [34, 33,32,31,30]);
		this.changeAnimation("idle");
		this.state = this.states.flip;
		this.currentTimer = 0;
		this.flipped = false;
		
		this.baseX = this.pos.x;
		this.baseY = this.pos.y;
	},

	
	shootUp: function() {
		var angle = 0;
		var dir = new me.Vector2d(this.flipped ? 1 : -1, 0.25);

 // i is number of bullets when dog is top left shooting down
		for( var i = 0 ; i < 16; i ++ ) {
			me.game.world.addChild(
				new GBGJ.BulletShooter(this.pos.x + i * 5, this.pos.y + (i * 10 - 5), {
					speed: 1,
					dir: dir,
				})
			);
		}
		me.audio.play("enemyshoot");
	},
	
	
//  800 is smooth animation lower number teleports 	
	moveUp: function() {
		var tween = new me.Tween(this.pos).to({
			y: this.baseY - 50,
		}, 800)
			//.onComplete(myFunc);
		//tween.easing(me.Tween.Easing.Quad.Out);
		tween.start();
	},
	
	down: function() {
		var tween = new me.Tween(this.pos).to({
			y: this.baseY,
		}, 800)
			//.onComplete(myFunc);
		//tween.easing(me.Tween.Easing.Quad.Out);
		tween.start();
	},
	

	shoot: function() {
		var angle = 0;
		var dir = new me.Vector2d(this.flipped ? 1 : -1, -0.25);
		
// i is the number when the dog is bottom left shooting up		
		for( var i = 0 ; i < 6; i ++ ) {
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
			x: this.pos.x + (this.flipped ? 1 : -1) * 120,
			
// by setting this to something like 31500 it will make the dog zigzag vertically
// and flip left and right	default is 1500		
		}, 1500)
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
			
// 0 is default  660 is interesting - four digit numbers are bad	
// anything between 450 and 700 is playable		

			this.currentTimer = 0;
		}
	},

	getDeathSound: function() {
		return "boss1death";
	}
});
