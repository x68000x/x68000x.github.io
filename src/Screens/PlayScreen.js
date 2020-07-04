"use strict";

GBGJ.PlayScreen = me.ScreenObject.extend({
	init: function() {
		this._super(me.ScreenObject, 'init', []);
		this.setNextLevel(GBGJ.data.options.level || "1boss1");
		
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

		
  // INITIAL NUMBER OF BOMBS		
		
		this.player.setBombs(5);
		me.game.world.addChild(new GBGJ.LevelDisplay({
			level: this.nextLevel,
		}));

		var song = "";
	
		
		
		// START OF GAME
		
		 if (this.nextLevel == "1boss1") {
			song = "1591317";
			
		}
		else if (this.nextLevel == "2boss2") {
			song = "26101418";
			
			
		}
		else if (this.nextLevel == "3boss3") {
			song = "37111519";
			
		}
		else if (this.nextLevel == "4level") {
			song = "4level";
		
			
		}
		else if (this.nextLevel == "5boss4") {
			song = "1591317";
			
		}
		else if (this.nextLevel == "6boss5") {
			song = "26101418";
			
		}
		else if (this.nextLevel == "7boss6") {
			song = "37111519";
			
		}
		else if (this.nextLevel == "8level") {
			song = "8level";
			
		}
		else if (this.nextLevel == "9boss7") {
			song = "1591317";
			
		}
		else if (this.nextLevel == "10boss8") {
			song = "26101418";
			
		}
		else if (this.nextLevel == "11boss9") {
			song = "37111519";
			
		}
		else if (this.nextLevel == "12level") {
			song = "12level";
			
		}
		else if (this.nextLevel == "13boss10") {
			song = "1591317";
			
		}
		else if (this.nextLevel == "14boss11") {
			song = "26101418";
			
		}
		else if (this.nextLevel == "15boss12") {
			song = "37111519";
			
		}
		else if (this.nextLevel == "16level") {
			song = "16level";
			
		}
		else if (this.nextLevel == "17boss13") {
			song = "1591317";
			
		}
		else if (this.nextLevel == "18boss14") {
			song = "26101418";
			
		}
		else if (this.nextLevel == "19boss15") {
			song = "37111519";
			
		}
		else if (this.nextLevel == "20level") {
			song = "20level";
			
		}
		else if (this.nextLevel == "21boss16") {
			song = "21boss16";
			
		}
		else if (this.nextLevel == "22pathlevel") {
			song = "222324pathlevel";
			
		}
		else if (this.nextLevel == "23pathlevel") {
			song = "222324pathlevel";
			
		}
		else if (this.nextLevel == "24pathlevel") {
			song = "222324pathlevel";
			
		}
		else if (this.nextLevel == "25boss17") {
			song = "25boss17";
	
			
		}
		else if (this.nextLevel == "26level") {
			song = "26level";
			
			
		}
		else if (this.nextLevel == "27finalboss18") {
			song = "27finalboss18";
			
		}
		
		
		
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


