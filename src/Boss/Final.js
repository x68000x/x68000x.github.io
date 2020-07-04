"use strict";

GBGJ.FinalBoss = GBGJ.Boss.extend({
	init : function (x, y, settings) {
		settings = settings || {};
		settings.image = 'finalboss';
		settings.width = 128;
		settings.height = 160;
		settings.shapes = [
			new me.Rect(0, 0, 34, 60),
			new me.Rect(30, 30, 34, 60),
		];
		this._super(GBGJ.Boss, 'init', [x, y, settings]);
		this.anchorPoint.set(.25, .5);
		this.renderable.addAnimation("idle", [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13], 130);
		this.renderable.addAnimation("hit", [14,0]);
		this.renderable.addAnimation("die", [15,16]);
		this.changeAnimation("idle");
		this.rotator = 0;
		this.eyePos = this.pos.clone().add(new me.Vector2d(4, 10));
		this.gutPos = this.pos.clone().add(new me.Vector2d(26, 80));
		this.chestPos = this.pos.clone().add(new me.Vector2d(16, 40));
		this.shots = 0;
		this.shootDelay = 0;
		this.shotTimer = 0;
		this.hp = 750;
		this.states = [
			{
				eye: 31,
				shots: 55,
				gut: 0,
				tank:7
			},
			{
				eye: 10,
				shots: 55,
				boomer:1,
				gut: 1,
				tank:1
			},
			{
				gut: 1,
				shots: 51,
				eye: 5,
				gut: 1,
				tank:1
			},
			{
				gut: 1,
				shots: 55,
				eye: 12,
				tank:0
			},
			{
				gut: 5,
				shots: 51,
				eye: 6,
				meat:1,
				tank:2
			},
			{
				gut: 1,
				shots: 10,
				eye: 5,
				boomer:1,
				tank:1
				
			},
		];
		this.rotateState();
	},

	rotateState: function() {
		this.currentState = this.states.pop();
		this.states.unshift(this.currentState);
	},

	shoot: function(pos, dir) {
		me.game.world.addChild(
			new GBGJ.BulletShooter(pos.x, pos.y, { speed: 1, dir: dir })
		);
		me.audio.play("enemyshoot");
	},

	shootFromEye: function() {
		//var angle = //this.shots / this.currentState.shots * Math.PI / 2;
		var dir = new me.Vector2d(-0.7, 0.5 + Math.random()*0.5-0.25);
		//dir.normalize();
		//dir.rotate(angle);

		this.shoot(this.eyePos, dir);
	},

	
	spawnBoomer: function() {
		var baddie = me.pool.pull("EnemyBoomer", this.chestPos.x, this.chestPos.y, {});
		me.game.world.addChild(baddie)
		//this.shoot(this.gutPos, dir);
	},
	
	spawnTank: function() {
		var baddie = me.pool.pull("EnemyTank", this.chestPos.x, this.chestPos.y, {});
		me.game.world.addChild(baddie)
				
		
	},
	
//	spawnFish: function() {
//		var baddie = me.pool.pull("EnemyFish", this.chestPos.x, this.chestPos.y, {});
//		me.game.world.addChild(baddie)
	
//	},
//	spawnPig: function() {
//		var baddie = me.pool.pull("EnemyPig", this.chestPos.x, this.chestPos.y, {});
//		me.game.world.addChild(baddie)
		
//	},
//	spawnSpider: function() {
//		var baddie = me.pool.pull("EnemySpider", this.chestPos.x, this.chestPos.y, {});
//		me.game.world.addChild(baddie)
		
//	},
//	spawnBird: function() {
//		var baddie = me.pool.pull("EnemyBird", this.chestPos.x, this.chestPos.y, {});
//		me.game.world.addChild(baddie)
		
//	},
	spawnMeat: function() {
		var baddie = me.pool.pull("EnemyMeat", this.chestPos.x, this.chestPos.y, {});
		me.game.world.addChild(baddie)
		
	},
	
	shootFromGut: function() {
		var angle = this.shots / this.currentState.shots * Math.PI / 2;
		var dir = new me.Vector2d(-1, 0);
		dir.rotate(angle);
		this.shoot(this.gutPos, dir);
	},

	die: function() {
		me.state.change(GBGJ.states.Win);
	},

	bossUpdate: function(dt) {
		// Start pumping shots out in a burst.
		if(this.shootDelay <= 0 && this.shots <= this.currentState.shots ) {
			this.shotTimer += dt;
			if(this.shotTimer >= 800) {
				if(this.currentState.eye) {
					this.shootFromEye();
					
		
				}
				if(this.currentState.gut) {
					this.shootFromGut();
					
				}
				if(this.currentState.boomer) {
				this.spawnBoomer();
				}
				if(this.currentState.tank) {
					this.spawnTank();
				}
			//	if(this.currentState.tank) {
			//		this.spawnFish();
			//	}
			//	if(this.currentState.tank) {
			//		this.spawnPig();
			//	}
			//	if(this.currentState.tank) {
			//		this.spawnSpider();
			//	}
			//	if(this.currentState.tank) {
			//		this.spawnBird();
			//	}
				if(this.currentState.tank) {
					this.spawnMeat();
				}
				
// ++ is clockwise  -- is counterclockwise				
				this.rotator++;
				this.shots ++;
				this.shotTimer = 10;
				if(this.shots >= this.currentState.shots) {
					this.shootDelay = 0;
					this.shots = 20;
					this.rotateState();
				}
			}
		}
		else {
			this.shootDelay -= dt;
		}
	},

	getDeathSound: function() {
		return "finalbossdeath";
	}
});
