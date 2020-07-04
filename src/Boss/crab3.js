"use strict";

GBGJ.Crab3 = GBGJ.Boss.extend({
	init : function (x, y, settings) {
		settings = settings || {};
		settings.image = 'crab1';
		settings.width = 70;
		settings.height = 70;
		settings.shapes = [new me.Rect(10, 5, 40, 47)];
		this._super(GBGJ.Boss, 'init', [x, y, settings]);
		this.anchorPoint.set(.5, .60);
		this.renderable.addAnimation("idle", [0, 1, 2, 3,4,5,6,7,8,9]);
		this.renderable.addAnimation("hit", [0, 4, 0, 4]);
		this.renderable.addAnimation("die", [0, 4]);
		this.changeAnimation("idle");
		this.bulletTimer = 0;
		this.rotator = 0;
		
		this.phase = "wait"
		this.phaseTimer = 300;
		this.hp = 235;
	},

	updateFork: function(dt) {
	
	// default 400 set timer to 0 for two massive bullet streams
	
		if(this.bulletTimer > 50) {
			var angle = this.rotator++ / 10 * Math.PI / 2 ;
			
 // default is 4 setting this to 0 makes the diagonal up left and diagonal down right
 // shoot straight instead of a very slight curve	
 // setting this to a higher number makes is shoot in a circle little by little		
			if(this.rotator > 360) {

// second rotator default is 4 setting this to
// can be commented out

				this.rotator = 4;
				
			}
			me.game.world.addChild(
				new GBGJ.BulletShooter(this.pos.x + 25, this.pos.y+6, {
					speed: 2,
					


// vector angles can be changed but you have to change at least two values for it
// to make sense

					dir: (new me.Vector2d(-270, -180)).rotate(angle).normalize(),
				})
			);
			me.game.world.addChild(
				new GBGJ.BulletShooter(this.pos.x + 25, this.pos.y+6, {
					speed: 1,
					dir: (new me.Vector2d(-90, -360)).rotate(angle).normalize(),
				})
			);
			me.audio.play("enemyshoot");
			this.bulletTimer = 0;
		}
	},
	
	updateFwd: function(dt) {
	
// default is 200 setting this to 0 makes for a massive wavy bullet wave going left	
	
		if(this.bulletTimer > 50) {
			me.game.world.addChild(
				new GBGJ.BulletShooter(this.pos.x + 25, this.pos.y+6, {
					speed: 3,
					
					
					dir: (new me.Vector2d(-1, Math.random()*0.2-0.1)).normalize(),
				})
			);
			this.bulletTimer = 0;
			me.audio.play("enemyshoot");
		}
	},
	
	bossUpdate: function(dt) {
		
		this.phaseTimer-=dt;
		
		switch(this.phase){
			case "fork":
				if(this.phaseTimer <=0){
					this.phase = "fwd"
					this.phaseTimer = 2500;
					this.bulletTimer = -250;
				}else{
					this.updateFork(dt);
				}
				break;
			case "fwd":
				if(this.phaseTimer <=0){
					this.phase = "wait"
					this.phaseTimer = 1500;
					this.bulletTimer = -250;
				}else{
					this.updateFwd(dt);
				}
				break;
			case "wait":
				if(this.phaseTimer <=0){
					this.phase = "fork"
					this.phaseTimer = 1500;
					this.bulletTimer = 0;
				}
				break;
			
		}
		
		
		

		this.bulletTimer += dt;
	},

	getDeathSound: function() {
		return "boss2death";
	}
});
