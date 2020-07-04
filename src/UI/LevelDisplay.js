"use strict";

GBGJ.LevelDisplay = me.Renderable.extend({
	init : function (settings) {
		this._super(me.Renderable, 'init', [0, 0, -10, 100]);
		this.level = settings.level;
		this.floating = true;
		this.time = 50000;
		this.pos.z = 5;
	
	},

	draw: function(renderer) {
		var screenWidth = renderer.getWidth();
		var screenHeight = renderer.getHeight();
		renderer.setColor(GBGJ.black);
	
	// this is the bar in the level display
		renderer.fillRect(0, screenHeight / 2 - 72, screenWidth, 8);

		var text = "UNKNOWN AREA";
		switch(this.level){
			
				case "1boss1":
				text = "[01] GREEN SWAMP";
				break;
				
				case "2boss2":
				text = "[02] GREEN FORREST";
				break;
				
				
				case "3boss3":
				text = "[03] GREEN PLAINS";
				break;
				
				case "4level":
				text = "[04] GREEN OPEN";
				break;
				
				
				case "5boss4":
				text = "[05] BROWN EARTH";
				break;
				
				
				case "6boss5":
				text = "[06] BROWN SWAMP";
				break;
				
				
				case "7boss6":
				text = "[07] BROWN FOREST";
				break;
				
				
				case "8level":
				text = "[08] BROWN OPEN";
				break;
				
				
				case "9boss7":
				text = "[09] BLUE OCEAN";
				break;
				
				
				
				case "10boss8":
				text = "[10] BLUE BEACH";
				break;
				
				
				
				case "11boss9":
				text = "[11] BLUE SEA";
				break;
				
				
				
				case "12level":
				text = "[12] BLUE OPEN";
				break;
				
				
				
				case "13boss10":
				text = "[13] RED VOLCANO";
				break;
				
				
				
				case "14boss11":
				text = "[14] RED FIELD";
				break;
				
				
				
				case "15boss12":
				text = "[15] RED VALLEY";
				break;
				
				
				
				case "16level":
				text = "[16] RED OPEN";
				break;
				
				
				
				case "17boss13":
				text = "[17] ORANGE PASTURE";
				break;
				
				
				
				case "18boss14":
				text = "[18] ORANGE HILL";
				break;
				
				
				
				case "19boss15":
				text = "[19] ORANGE TEMPLE";
				break;
				
				
				
				case "20level":
				text = "[20] ORANGE OPEN";
				break;
				
				
				
				case "21boss16":
				text = "[21] DECISIONS";
				break;
				
				
				
				case "22pathlevel":
				text = "[22] WHAT";
				break;
				
				
				case "23pathlevel":
				text = "[23] OH NO";
				break;
				
				
				case "24pathlevel":
				text = "[24] WTF";
				break;
				
				
				case "25boss17":
				text = "[25] DARK RED DEVIL";
				break;
				
				
				case "26level":
				text = "[26] ASCENSION";
				break;
				
				
				
				case "27finalboss18":
				text = "[27] BRAIN DEVIL";
				break;
				
	
		}
		GBGJ.font.draw(renderer, text, screenWidth / 2 - (text.length * 9 / 2), screenHeight / 2 - 72);
		renderer.setColor(GBGJ.black);
	},

	update : function (dt) {
		this.time -= dt;
		if(this.time <= 0) {
			me.game.world.removeChild(this);
		}
		return true;
	},
});
