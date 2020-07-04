"use strict";

GBGJ.PlayScreen = me.ScreenObject.extend({
	init: function() {
		this._super(me.ScreenObject, 'init', []);
		this.setNextLevel(GBGJ.data.options.level || "26level");
		
	},

	setNextLevel: function(name) {
		this.nextLevel = name;
	},

	goToNextLevel: function(level) {
		this.setNextLevel(level);
		this.loadNextLevel()
		
	},

	onResetEvent: function() {
		me.game.world.autoSort = true;
		me.game.world.autoDepth = false;

		this.loadNextLevel();
	},

	levelLoaded: function() {
		me.game.world.addChild(new GBGJ.BombDisplay());
		//me.game.world.addChild(new GBGJ.PointsDisplay());
		
  // INITIAL NUMBER OF BOMBS		
		
		this.player.setBombs(5);
		me.game.world.addChild(new GBGJ.LevelDisplay({
			level: this.nextLevel,
		}));

		var song = "";
	
		
		// OLD GAME CODE
		
		if (this.nextLevel == "1boss1" || this.nextLevel == "2boss2") {
			song = "gbjam5-title";
		}

		
		// START OF GAME
		
//		else if (this.nextLevel == "1boss1") {
//			song = "forrest";
			
//		}
		else if (this.nextLevel == "2boss2") {
			song = "gbjam5-title";
			
			
		}
		else if (this.nextLevel == "3boss3") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "4level") {
			song = "gbjam5-title";
		
			
		}
		else if (this.nextLevel == "5boss4") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "6boss5") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "7boss6") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "8level") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "9boss7") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "10boss8") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "11boss9") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "12level") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "13boss10") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "14boss11") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "15boss12") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "16level") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "17boss13") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "18boss14") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "19boss15") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "20level") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "21boss16") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "22pathlevel") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "23pathlevel") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "24pathlevel") {
			song = "gbjam5-title";
			
		}
		else if (this.nextLevel == "25boss17") {
			song = "gbjam5-title";
	
			
		}
		else if (this.nextLevel == "26level") {
			song = "gbjam5-title";
			
			
		}
		else if (this.nextLevel == "27finalboss18") {
			song = "gbjam5-title";
			
		}
		
		
		
		
		
		
		
		
		
		//else if (this.nextLevel == "level6") {
		//	song = "gbjam5-finalboss";
		//}
		if (song != "") {
			me.audio.stopTrack();
			me.audio.playTrack(song, 0.8);
		}
	},

	loadNextLevel: function() {
		me.levelDirector.loadLevel(this.nextLevel, {
			onLoaded: this.levelLoaded.bind(this),
		});
	},

	onDestroyEvent: function() {
		me.audio.stopTrack();
	},

	onModeChange: function(oldMode, newMode) {
	},
});
