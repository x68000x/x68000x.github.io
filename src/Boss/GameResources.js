"use strict";
/**
 * @param {String} name file name relative to data/ without extension.
 */
GBGJ.Image = function( name ) {
	return {
		name: name,
		type: "image",
		src: "data/image/" + name + ".png"
	};
}

GBGJ.GameResources = (function() {

	/**
	 * @param {String} name file name relative to data/audio.
	 */
	function _Audio( name ) {
		return {
			name: name,
			type: "audio",
			src: "data/audio/",
			channels: 2,
		};
	}

	function _AddAudioArray( name, num, parent ) {
		for(var i = 1; i <= num; i++) {
			parent.push(_Audio(name + "-" + i));
		}
	}

	/**
	 * @param {String} name file name relative to data/ without extension.
	 */
	function _Level( name ) {
		return {
			name: name,
			type: "tmx",
			src: "data/level/" + name + ".tmx"
		};
	}

	var GameResources = [
		// ALL 27 LEVEL BACKGROUNDS
		GBGJ.Image("bg1"),
		GBGJ.Image("bg2"),
		GBGJ.Image("bg3"),
		GBGJ.Image("bg4"),
		GBGJ.Image("bg5"),
		GBGJ.Image("bg6"),
		GBGJ.Image("bg7"),
		GBGJ.Image("bg8"),
		GBGJ.Image("bg9"),
		GBGJ.Image("bg10"),
		GBGJ.Image("bg11"),
		GBGJ.Image("bg12"),
		GBGJ.Image("bg13"),
		GBGJ.Image("bg14"),
		GBGJ.Image("bg15"),
		GBGJ.Image("bg16"),
		GBGJ.Image("bg17"),
		GBGJ.Image("bg18"),
		GBGJ.Image("bg19"),
		GBGJ.Image("bg20"),
		GBGJ.Image("bg21"),
		GBGJ.Image("bg22"),
		GBGJ.Image("bg23"),
		GBGJ.Image("bg24"),
		GBGJ.Image("bg25"),
		GBGJ.Image("bg26"),
		GBGJ.Image("bg27"),
		
		// EVERYTHING ELSE
		
		GBGJ.Image("intro_bg"),
		GBGJ.Image("intro_glasses1"),
		GBGJ.Image("intro_glasses2"),
		GBGJ.Image("intro_glasses3"),
		GBGJ.Image("intro_glasses4"),
		GBGJ.Image("intro_mars"),
		GBGJ.Image("intro_radmars1"),
		GBGJ.Image("intro_radmars2"),
		_Audio("radboy"),

		// control screen
		GBGJ.Image("controls"),
		GBGJ.Image("pressstart"),

		// title screen
		GBGJ.Image("title"),

		//GameOver
		GBGJ.Image("gameover"),
		GBGJ.Image("gamewin"),

		// entities
		GBGJ.Image("player"),
		GBGJ.Image("enemy1"),
		GBGJ.Image("enemy2"),
		GBGJ.Image("enemy3"),
		GBGJ.Image("enemy4"),
		GBGJ.Image("enemy5"),
		GBGJ.Image("bullet"),
		GBGJ.Image("bullet_baddie_small"),
		GBGJ.Image("bullet_baddie_circle"),
		GBGJ.Image("handboss"),
		GBGJ.Image("skullboss"),
		GBGJ.Image("finalboss"),
		GBGJ.Image("explode_16"),
		GBGJ.Image("explode_32"),
		GBGJ.Image("blood_32"),
		GBGJ.Image("powerup_bomb_16"),
		GBGJ.Image("powerup_triple_16"),
		GBGJ.Image("powerup_rocket_16"),
		GBGJ.Image("bullet_player_big_16"),
		
		GBGJ.Image("dog1"),
		GBGJ.Image("crab1"),
		GBGJ.Image("bear1"),

		// levels
		GBGJ.Image("bio_bg"),
		GBGJ.Image("bg_stars"),
		GBGJ.Image("bg_tech"),
		GBGJ.Image("bg_tunnel"),
		GBGJ.Image("tilemap"),
//		_Level("level1"),
//			_Level("level2"),
//			_Level("level3"),
//			_Level("level4"),
//			_Level("level5"),
//			_Level("level7"),
//			_Level("level8"),
//				_Level("handboss"),
//			_Level("test"),
		// game levels
		
//			_Level("level8"),
		
		
		
		
_Level("1boss1"),
_Level("2boss2"),
_Level("3boss3"),
_Level("4level"),
_Level("5boss4"),
_Level("6boss5"),
_Level("7boss6"),
_Level("8level"),
_Level("9boss7"),
_Level("10boss8"),
_Level("11boss9"),
_Level("12level"),
_Level("13boss10"),
_Level("14boss11"),
_Level("15boss12"),
_Level("16level"),
_Level("17boss13"),
_Level("18boss14"),
_Level("19boss15"),
_Level("20level"),
_Level("21boss16"),
_Level("22pathlevel"),
_Level("23pathlevel"),
_Level("24pathlevel"),
_Level("25boss17"),
_Level("26level"),
_Level("27finalboss18"),
		
		
		
		
		
		
		// _Level("level6"),
	

		_Audio("gbjam5-1"),
//		_Audio("afterdrive"),
//		_Audio("density"),
//		_Audio("forrest"),
		_Audio("gbjam5-2"),
		_Audio("gbjam5-3"),
		_Audio("gbjam5-finalboss"),
		_Audio("gbjam5-gameover"),
		_Audio("gbjam5-title"),
		_Audio("gbjam5-win"),

		_Audio("bomb"),
		_Audio("boss1death"),
		_Audio("boss2death"),
		_Audio("enemy1death"),
		_Audio("enemy2death"),
		_Audio("enemy3death"),
		_Audio("enemyshoot"),
		_Audio("explosion"),
		_Audio("explosion2"),
		_Audio("finalbossdeath"),
		_Audio("hit"),
		_Audio("missile"),
		_Audio("playerdeath"),
		_Audio("playershoot"),
		_Audio("powerup"),
		_Audio("shotgun"),
	];

	return GameResources;
})();
