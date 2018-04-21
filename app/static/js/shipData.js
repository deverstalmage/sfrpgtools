var shipTiers = {
	"1": {
		"SBP": 40
	},
	"1/2": {
		"SBP": 40
	},
	"1/3": {
		"SBP": 30
	},
	"1/4": {
		"SBP": 25
	},
	"10": {
		"SBP": 270,
		"hpIncrease": 2
	},
	"11": {
		"SBP": 310,
		"hpIncrease": 2
	},
	"12": {
		"SBP": 350,
		"hpIncrease": 3
	},
	"13": {
		"SBP": 400,
		"hpIncrease": 3
	},
	"14": {
		"SBP": 450,
		"hpIncrease": 3
	},
	"15": {
		"SBP": 500,
		"hpIncrease": 3
	},
	"16": {
		"SBP": 600,
		"hpIncrease": 4
	},
	"17": {
		"SBP": 700,
		"hpIncrease": 4
	},
	"18": {
		"SBP": 800,
		"hpIncrease": 4
	},
	"19": {
		"SBP": 900,
		"hpIncrease": 4
	},
	"2": {
		"SBP": 75
	},
	"20": {
		"SBP": 1000,
		"hpIncrease": 5
	},
	"3": {
		"SBP": 95
	},
	"4": {
		"SBP": 115,
		"hpIncrease": 1
	},
	"5": {
		"SBP": 135,
		"hpIncrease": 1
	},
	"6": {
		"SBP": 155,
		"hpIncrease": 1
	},
	"7": {
		"SBP": 180,
		"hpIncrease": 1
	},
	"8": {
		"SBP": 205,
		"hpIncrease": 2
	},
	"9": {
		"SBP": 230,
		"hpIncrease": 2
	}
};

var shipSizes = [
  null,
  "Tiny",
  "Small",
  "Medium",
  "Large",
  "Huge",
  "Gargantuan",
  "Colossal"
];

var shipArmor = {
	"Mk 1 armor": {
		"BPCostMultiplier": 1,
		"value": {
			"AC": 1,
			"TL": "none",
			"turn": 0
		}
	},
	"Mk 10 armor": {
		"BPCostMultiplier": 21,
		"value": {
			"AC": 10,
			"TL": -2,
			"turn": 1
		}
	},
	"Mk 11 armor": {
		"BPCostMultiplier": 25,
		"value": {
			"AC": 11,
			"TL": -2,
			"turn": 1
		}
	},
	"Mk 12 armor": {
		"BPCostMultiplier": 30,
		"value": {
			"AC": 12,
			"TL": -3,
			"turn": 2
		}
	},
	"Mk 13 armor": {
		"BPCostMultiplier": 35,
		"value": {
			"AC": 13,
			"TL": -3,
			"turn": 2
		}
	},
	"Mk 14 armor": {
		"BPCostMultiplier": 40,
		"value": {
			"AC": 14,
			"TL": -3,
			"turn": 2
		}
	},
	"Mk 15 armor": {
		"BPCostMultiplier": 45,
		"value": {
			"AC": 15,
			"TL": -4,
			"turn": 3
		}
	},
	"Mk 2 armor": {
		"BPCostMultiplier": 2,
		"value": {
			"AC": 2,
			"TL": "none",
			"turn": 0
		}
	},
	"Mk 3 armor": {
		"BPCostMultiplier": 3,
		"value": {
			"AC": 3,
			"TL": "none",
			"turn": 0
		}
	},
	"Mk 4 armor": {
		"BPCostMultiplier": 5,
		"value": {
			"AC": 4,
			"TL": "none",
			"turn": 0
		}
	},
	"Mk 5 armor": {
		"BPCostMultiplier": 7,
		"value": {
			"AC": 5,
			"TL": -1,
			"turn": 0
		}
	},
	"Mk 6 armor": {
		"BPCostMultiplier": 9,
		"value": {
			"AC": 6,
			"TL": -1,
			"turn": 0
		}
	},
	"Mk 7 armor": {
		"BPCostMultiplier": 12,
		"value": {
			"AC": 7,
			"TL": -1,
			"turn": 0
		}
	},
	"Mk 8 armor": {
		"BPCostMultiplier": 15,
		"value": {
			"AC": 8,
			"TL": -1,
			"turn": 0
		}
	},
	"Mk 9 armor": {
		"BPCostMultiplier": 18,
		"value": {
			"AC": 9,
			"TL": -2,
			"turn": 1
		}
	}
};

var shipComputers = {
	"Basic computer": {
		"cost": {
			"BP": 0,
			"PCU": 0
		},
		"value": {
			"computerBonus": 0,
			"computerNodes": 0
		}
	},
	"Mk 1 duonode": {
		"cost": {
			"BP": 2,
			"PCU": 10
		},
		"value": {
			"computerBonus": 1,
			"computerNodes": 2
		}
	},
	"Mk 1 mononode": {
		"cost": {
			"BP": 1,
			"PCU": 10
		},
		"value": {
			"computerBonus": 1,
			"computerNodes": 1
		}
	},
	"Mk 1 tetranode": {
		"cost": {
			"BP": 4,
			"PCU": 10
		},
		"value": {
			"computerBonus": 1,
			"computerNodes": 4
		}
	},
	"Mk 1 trinode": {
		"cost": {
			"BP": 3,
			"PCU": 10
		},
		"value": {
			"computerBonus": 1,
			"computerNodes": 3
		}
	},
	"Mk 10 duonode": {
		"cost": {
			"BP": 200,
			"PCU": 55
		},
		"value": {
			"computerBonus": 10,
			"computerNodes": 2
		}
	},
	"Mk 10 mononode": {
		"cost": {
			"BP": 100,
			"PCU": 55
		},
		"value": {
			"computerBonus": 10,
			"computerNodes": 1
		}
	},
	"Mk 2 duonode": {
		"cost": {
			"BP": 8,
			"PCU": 15
		},
		"value": {
			"computerBonus": 2,
			"computerNodes": 2
		}
	},
	"Mk 2 mononode": {
		"cost": {
			"BP": 4,
			"PCU": 15
		},
		"value": {
			"computerBonus": 2,
			"computerNodes": 1
		}
	},
	"Mk 2 tetranode": {
		"cost": {
			"BP": 16,
			"PCU": 15
		},
		"value": {
			"computerBonus": 2,
			"computerNodes": 4
		}
	},
	"Mk 2 trinode": {
		"cost": {
			"BP": 12,
			"PCU": 15
		},
		"value": {
			"computerBonus": 2,
			"computerNodes": 3
		}
	},
	"Mk 3 duonode": {
		"cost": {
			"BP": 18,
			"PCU": 20
		},
		"value": {
			"computerBonus": 3,
			"computerNodes": 2
		}
	},
	"Mk 3 mononode": {
		"cost": {
			"BP": 9,
			"PCU": 20
		},
		"value": {
			"computerBonus": 3,
			"computerNodes": 1
		}
	},
	"Mk 3 tetranode": {
		"cost": {
			"BP": 36,
			"PCU": 20
		},
		"value": {
			"computerBonus": 3,
			"computerNodes": 4
		}
	},
	"Mk 3 trinode": {
		"cost": {
			"BP": 27,
			"PCU": 20
		},
		"value": {
			"computerBonus": 3,
			"computerNodes": 3
		}
	},
	"Mk 4 duonode": {
		"cost": {
			"BP": 32,
			"PCU": 25
		},
		"value": {
			"computerBonus": 4,
			"computerNodes": 2
		}
	},
	"Mk 4 mononode": {
		"cost": {
			"BP": 16,
			"PCU": 25
		},
		"value": {
			"computerBonus": 4,
			"computerNodes": 1
		}
	},
	"Mk 4 trinode": {
		"cost": {
			"BP": 48,
			"PCU": 25
		},
		"value": {
			"computerBonus": 4,
			"computerNodes": 3
		}
	},
	"Mk 5 duonode": {
		"cost": {
			"BP": 50,
			"PCU": 30
		},
		"value": {
			"computerBonus": 5,
			"computerNodes": 2
		}
	},
	"Mk 5 mononode": {
		"cost": {
			"BP": 25,
			"PCU": 30
		},
		"value": {
			"computerBonus": 5,
			"computerNodes": 1
		}
	},
	"Mk 5 trinode": {
		"cost": {
			"BP": 75,
			"PCU": 30
		},
		"value": {
			"computerBonus": 5,
			"computerNodes": 3
		}
	},
	"Mk 6 duonode": {
		"cost": {
			"BP": 72,
			"PCU": 35
		},
		"value": {
			"computerBonus": 6,
			"computerNodes": 2
		}
	},
	"Mk 6 mononode": {
		"cost": {
			"BP": 36,
			"PCU": 35
		},
		"value": {
			"computerBonus": 6,
			"computerNodes": 1
		}
	},
	"Mk 7 duonode": {
		"cost": {
			"BP": 98,
			"PCU": 40
		},
		"value": {
			"computerBonus": 7,
			"computerNodes": 2
		}
	},
	"Mk 7 mononode": {
		"cost": {
			"BP": 49,
			"PCU": 40
		},
		"value": {
			"computerBonus": 7,
			"computerNodes": 1
		}
	},
	"Mk 8 duonode": {
		"cost": {
			"BP": 128,
			"PCU": 45
		},
		"value": {
			"computerBonus": 8,
			"computerNodes": 2
		}
	},
	"Mk 8 mononode": {
		"cost": {
			"BP": 64,
			"PCU": 45
		},
		"value": {
			"computerBonus": 8,
			"computerNodes": 1
		}
	},
	"Mk 9 duonode": {
		"cost": {
			"BP": 162,
			"PCU": 50
		},
		"value": {
			"computerBonus": 9,
			"computerNodes": 2
		}
	},
	"Mk 9 mononode": {
		"cost": {
			"BP": 81,
			"PCU": 50
		},
		"value": {
			"computerBonus": 9,
			"computerNodes": 1
		}
	}
};

var shipDefenses = {
	"Mk 1 defenses": {
		"cost": {
			"BP": 2,
			"PCU": 1
		},
		"value": {
			"TL": 1
		}
	},
	"Mk 10 defenses": {
		"cost": {
			"BP": 27,
			"PCU": 13
		},
		"value": {
			"TL": 10
		}
	},
	"Mk 11 defenses": {
		"cost": {
			"BP": 33,
			"PCU": 16
		},
		"value": {
			"TL": 11
		}
	},
	"Mk 12 defenses": {
		"cost": {
			"BP": 40,
			"PCU": 20
		},
		"value": {
			"TL": 12
		}
	},
	"Mk 13 defenses": {
		"cost": {
			"BP": 50,
			"PCU": 25
		},
		"value": {
			"TL": 13
		}
	},
	"Mk 14 defenses": {
		"cost": {
			"BP": 65,
			"PCU": 32
		},
		"value": {
			"TL": 14
		}
	},
	"Mk 15 defenses": {
		"cost": {
			"BP": 90,
			"PCU": 45
		},
		"value": {
			"TL": 15
		}
	},
	"Mk 2 defenses": {
		"cost": {
			"BP": 3,
			"PCU": 1
		},
		"value": {
			"TL": 2
		}
	},
	"Mk 3 defenses": {
		"cost": {
			"BP": 4,
			"PCU": 2
		},
		"value": {
			"TL": 3
		}
	},
	"Mk 4 defenses": {
		"cost": {
			"BP": 6,
			"PCU": 3
		},
		"value": {
			"TL": 4
		}
	},
	"Mk 5 defenses": {
		"cost": {
			"BP": 8,
			"PCU": 4
		},
		"value": {
			"TL": 5
		}
	},
	"Mk 6 defenses": {
		"cost": {
			"BP": 11,
			"PCU": 5
		},
		"value": {
			"TL": 6
		}
	},
	"Mk 7 defenses": {
		"cost": {
			"BP": 14,
			"PCU": 7
		},
		"value": {
			"TL": 7
		}
	},
	"Mk 8 defenses": {
		"cost": {
			"BP": 18,
			"PCU": 9
		},
		"value": {
			"TL": 8
		}
	},
	"Mk 9 defenses": {
		"cost": {
			"BP": 22,
			"PCU": 11
		},
		"value": {
			"TL": 9
		}
	}
};

var shipDriftEngines = {
	"Signal Basic": {
		"BPCostMultiplier": 2,
		"maxSize": 7,
		"minPCU": 2,
		"value": {
			"driftEngineRating": 1
		}
	},
	"Signal Booster": {
		"BPCostMultiplier": 5,
		"maxSize": 5,
		"minPCU": 5,
		"value": {
			"driftEngineRating": 2
		}
	},
	"Signal Major": {
		"BPCostMultiplier": 10,
		"maxSize": 4,
		"minPCU": 10,
		"value": {
			"driftEngineRating": 3
		}
	},
	"Signal Superior": {
		"BPCostMultiplier": 15,
		"maxSize": 4,
		"minPCU": 15,
		"value": {
			"driftEngineRating": 4
		}
	},
	"Signal Ultra": {
		"BPCostMultiplier": 20,
		"maxSize": 3,
		"minPCU": 20,
		"value": {
			"driftEngineRating": 5
		}
	}
};

var shipExpansionBays = {
	"Arcane laboratory": {
		"cost": {
			"BP": 1,
			"PCU": 1
		},
		"description": "An arcane laboratory contains all the tools and space necessary to craft magic items (see page 235), though the crafter must still provide the necessary raw materials. Such a laboratory reduces the crafting time by half.",
		"minSize": 1
	},
	"Cargo hold": {
		"cost": {
			"BP": 0,
			"PCU": 0
		},
		"description": "Unconverted expansion bays count as cargo holds. A cargo hold can contain approximately 25 tons of goods, with no item being larger than Large. A starship with multiple cargo holds can hold larger objects; usually 4 contiguous cargo holds are required to hold Huge objects and 8 for Gargantuan objects. These size restrictions can be overridden at the GM's discretion.",
		"minSize": 1
	},
	"Escape pods": {
		"cost": {
			"BP": 1,
			"PCU": 2
		},
		"description": "Escape pods give the crew of a severely damaged or destroyed starship a way to avoid imminent death. An escape pod fits one Medium or smaller creature and has enough supplies and life-support capacity for that creature to survive for 7 days. It is also fitted with a distress beacon that is easily identified by long-range scanners. An escape pod has heat shields that allow it to crash-land on a planet with an atmosphere, but no means of propulsion. A single expansion bay can be converted into six escape pods.",
		"minSize": 1
	},
	"Guest quarters": {
		"cost": {
			"BP": 1,
			"PCU": 1
		},
		"description": "Starships that function as passenger vessels require spaces apart from their crew quarters for their guests to sleep. A single expansion bay can be converted into common quarters (usually simple bunks or hammocks) for six passengers, good quarters (usually a comfortable bed, a desk with a chair, and a small set of drawers) for four passengers, or luxurious quarters (usually a large bed, a wardrobe, a couch, a desk with a nice chair, and a private washroom) for two passengers.",
		"minSize": 1
	},
	"Hangar bay": {
		"cost": {
			"BP": 10,
			"PCU": 30
		},
		"description": "A hangar bay can be installed only in a Gargantuan or larger starship and takes up 4 expansion bays. A hangar bay provides a place for up to 8 Tiny starships to dock.",
		"minSize": 6
	},
	"Life Science lab": {
		"cost": {
			"BP": 1,
			"PCU": 2
		},
		"description": "A science lab contains scientific apparatuses and other laboratory equipment to aid in the research of certain topics. A general science lab provides a +1 circumstance bonus to Life Science and Physical Science checks (and is called a general science lab), a life science lab provides a +2 circumstance bonus to Life Science checks, and a physical science lab provides a +2 circumstance bonus to Physical Science checks. The lab type is chosen when the expansion bay is converted.",
		"minSize": 1
	},
	"Life boats": {
		"cost": {
			"BP": 3,
			"PCU": 5
		},
		"description": "A life boat is a more sophisticated version of an escape pod. It has room for one Large creature, or two Medium or smaller creatures, and enough supplies to last those passengers 15 days (or 30 days of supplies for one Medium or smaller creature). While it has the same kind of distress beacon as an escape pod, a life boat also has an on-board computer that automatically detects the nearest hospitable celestial body and minimal thrusters to get the craft there (though a life boat can't participate in starship combat). A single expansion bay can be converted into two life boats.",
		"minSize": 1
	},
	"Medical bay": {
		"cost": {
			"BP": 8,
			"PCU": 4
		},
		"description": "A medical bay functions as a medical lab (see page 220).",
		"minSize": 1
	},
	"Passenger seating": {
		"cost": {
			"BP": 0,
			"PCU": 0
		},
		"description": "An expansion bay can be converted into rows of seating for passengers at no cost. A single expansion bay can hold seating for 16 Medium passengers (though seats can be built for larger creatures). This upgrade is appropriate only for taking many passengers on short trips; starships on journeys lasting multiple days should instead have guest quarters installed.",
		"minSize": 1
	},
	"Physical Science lab": {
		"cost": {
			"BP": 1,
			"PCU": 2
		},
		"description": "A science lab contains scientific apparatuses and other laboratory equipment to aid in the research of certain topics. A general science lab provides a +1 circumstance bonus to Life Science and Physical Science checks (and is called a general science lab), a life science lab provides a +2 circumstance bonus to Life Science checks, and a physical science lab provides a +2 circumstance bonus to Physical Science checks. The lab type is chosen when the expansion bay is converted.",
		"minSize": 1
	},
	"Power core housing": {
		"cost": {
			"BP": 10,
			"PCU": 0
		},
		"description": "An expansion bay can be set aside for an additional power core (which must be purchased separately) and the associated wiring and safety apparatuses. A power core housing can be installed on only a Medium or larger starship.",
		"minSize": 3
	},
	"Recreation suite (HAC)": {
		"cost": {
			"BP": 1,
			"PCU": 3
		},
		"description": "A recreation suite includes entertainments that help the crew (or passengers) relax and blow off steam. These diversions can be wide-ranging, with some consuming more PCU than others (see the table on page 300). Example recreation suites include a gym, sparring arena, or other exercise area; a trivid den or other comfortable space in which to consume passive entertainment; or a holographic amusement chamber (or HAC), vidgame arcade, or other high-tech interactive entertainment center.",
		"minSize": 1
	},
	"Recreation suite (gym)": {
		"cost": {
			"BP": 1,
			"PCU": 0
		},
		"description": "A recreation suite includes entertainments that help the crew (or passengers) relax and blow off steam. These diversions can be wide-ranging, with some consuming more PCU than others (see the table on page 300). Example recreation suites include a gym, sparring arena, or other exercise area; a trivid den or other comfortable space in which to consume passive entertainment; or a holographic amusement chamber (or HAC), vidgame arcade, or other high-tech interactive entertainment center.",
		"minSize": 1
	},
	"Recreation suite (trivid den)": {
		"cost": {
			"BP": 1,
			"PCU": 1
		},
		"description": "A recreation suite includes entertainments that help the crew (or passengers) relax and blow off steam. These diversions can be wide-ranging, with some consuming more PCU than others (see the table on page 300). Example recreation suites include a gym, sparring arena, or other exercise area; a trivid den or other comfortable space in which to consume passive entertainment; or a holographic amusement chamber (or HAC), vidgame arcade, or other high-tech interactive entertainment center.",
		"minSize": 1
	},
	"Science lab": {
		"cost": {
			"BP": 1,
			"PCU": 2
		},
		"description": "A science lab contains scientific apparatuses and other laboratory equipment to aid in the research of certain topics. A general science lab provides a +1 circumstance bonus to Life Science and Physical Science checks (and is called a general science lab), a life science lab provides a +2 circumstance bonus to Life Science checks, and a physical science lab provides a +2 circumstance bonus to Physical Science checks. The lab type is chosen when the expansion bay is converted.",
		"minSize": 1
	},
	"Sealed environment chamber": {
		"cost": {
			"BP": 1,
			"PCU": 2
		},
		"description": "Occasionally, a starship will need to host an alien or other creature whose biology is radically different from that of the crew. The passenger might be able to breathe only methane gas or can survive in only below-freezing temperatures. In such a case, a sealed environment chamber is required for the passenger to remain comfortable (and alive).",
		"minSize": 1
	},
	"Shuttle bay": {
		"cost": {
			"BP": 4,
			"PCU": 10
		},
		"description": "A shuttle bay can be installed only in a Huge or larger starship and takes up two expansion bays. A shuttle bay provides a place for a Small or smaller starship to dock.",
		"minSize": 5
	},
	"Smuggler compartment": {
		"cost": {
			"BP": 2,
			"PCU": 4
		},
		"description": "Smuggler compartments are cargo holds hidden behind false bulkheads and are shielded from most scanning, allowing a starship equipped with them to haul illegal goods without detection. A smuggler compartment can contain 10 tons of goods, with no item being larger than Medium. A creature on the starship must succeed at a DC 20 Perception check to detect a basic smuggler compartment on the starship. A creature scanning the starship must succeed at a DC 20 Computers check to detect one (this additional check is part of the science officer's scan action in starship combat; see page 325). For each Build Point spent over the base cost, these DCs increase by 5 (maximum DC 50), though the amount of power the compartment uses also increases by 1.",
		"minSize": 1
	},
	"Synthesis bay": {
		"cost": {
			"BP": 1,
			"PCU": 2
		},
		"description": "A synthesis bay contains all the space and tools required to craft drugs, medicine, or poison (see page 235), though the crafter must still provide the necessary raw materials. A synthesis bay reduces the crafting time by half.",
		"minSize": 1
	},
	"Tech workshop": {
		"cost": {
			"BP": 1,
			"PCU": 3
		},
		"description": "A tech workshop contains all the space and tools necessary to craft technological items (see page 235), though the crafter must still provide the necessary raw materials. Such a workshop reduces the crafting time by half.",
		"minSize": 1
	}
};

var shipFrames = {
	"Battleship": {
		"cost": {
			"BP": 150
		},
		"maneuverability": "average",
		"mounts": {
			"AftArc": {
				"light": 1
			},
			"ForwardArc": {
				"capital": 1,
				"heavy": 2
			},
			"PortArc": {
				"heavy": 2,
				"light": 1
			},
			"StarboardArc": {
				"heavy": 2,
				"light": 1
			},
			"Turret": {
				"heavy": 2
			}
		},
		"size": 6,
		"value": {
			"CT": 56,
			"DT": 10,
			"ExansionBays": 8,
			"HP": 280,
			"HPIncrement": 40,
			"maxCrew": 300,
			"minCrew": 100,
			"piloting": 0,
			"turn": 2
		}
	},
	"Bulk Freighter": {
		"cost": {
			"BP": 55
		},
		"maneuverability": "poor",
		"mounts": {
			"AftArc": {
				"heavy": 1
			},
			"ForwardArc": {
				"heavy": 1
			},
			"Turret": {
				"light": 2
			}
		},
		"size": 5,
		"value": {
			"CT": 32,
			"DT": 5,
			"ExansionBays": 10,
			"HP": 160,
			"HPIncrement": 20,
			"maxCrew": 50,
			"minCrew": 20,
			"piloting": -1,
			"turn": 3
		}
	},
	"Carrier": {
		"cost": {
			"BP": 120
		},
		"maneuverability": "poor",
		"mounts": {
			"ForwardArc": {
				"capital": 1
			},
			"PortArc": {
				"heavy": 3
			},
			"StarboardArc": {
				"heavy": 3
			},
			"Turret": {
				"light": 2
			}
		},
		"size": 6,
		"value": {
			"CT": 48,
			"DT": 10,
			"ExansionBays": 10,
			"HP": 240,
			"HPIncrement": 30,
			"maxCrew": 200,
			"minCrew": 75,
			"piloting": -1,
			"turn": 3
		}
	},
	"Cruiser": {
		"cost": {
			"BP": 60
		},
		"maneuverability": "average",
		"mounts": {
			"ForwardArc": {
				"capital": 1
			},
			"PortArc": {
				"light": 1
			},
			"StarboardArc": {
				"light": 1
			},
			"Turret": {
				"heavy": 1
			}
		},
		"size": 5,
		"value": {
			"CT": 36,
			"DT": 5,
			"ExansionBays": 6,
			"HP": 180,
			"HPIncrement": 25,
			"maxCrew": 100,
			"minCrew": 20,
			"piloting": 0,
			"turn": 2
		}
	},
	"Destroyer": {
		"cost": {
			"BP": 30
		},
		"maneuverability": "average",
		"mounts": {
			"AftArc": {
				"light": 1
			},
			"ForwardArc": {
				"heavy": 2
			},
			"PortArc": {
				"light": 1
			},
			"StarboardArc": {
				"light": 1
			},
			"Turret": {
				"light": 1
			}
		},
		"size": 4,
		"value": {
			"CT": 30,
			"DT": 0,
			"ExansionBays": 4,
			"HP": 150,
			"HPIncrement": 20,
			"maxCrew": 20,
			"minCrew": 6,
			"piloting": 0,
			"turn": 2
		}
	},
	"Dreadnought": {
		"cost": {
			"BP": 200
		},
		"maneuverability": "clumsy",
		"mounts": {
			"ForwardArc": {
				"capital": 2,
				"heavy": 2
			},
			"PortArc": {
				"capital,3": 1
			},
			"StarboardArc": {
				"capital": 1,
				"heavy": 3
			},
			"Turret": {
				"light": 4
			}
		},
		"size": 7,
		"value": {
			"CT": 80,
			"DT": 15,
			"ExansionBays": 20,
			"HP": 400,
			"HPIncrement": 50,
			"maxCrew": 500,
			"minCrew": 125,
			"piloting": -2,
			"turn": 4
		}
	},
	"Explorer": {
		"cost": {
			"BP": 12
		},
		"maneuverability": "good",
		"mounts": {
			"ForwardArc": {
				"light": 1
			},
			"PortArc": {
				"light": 1
			},
			"StarboardArc": {
				"light": 1
			},
			"Turret": {
				"light": 1
			}
		},
		"size": 3,
		"value": {
			"CT": 11,
			"DT": 0,
			"ExansionBays": 4,
			"HP": 55,
			"HPIncrement": 10,
			"maxCrew": 6,
			"minCrew": 1,
			"piloting": 1,
			"turn": 1
		}
	},
	"Fighter": {
		"cost": {
			"BP": 8
		},
		"maneuverability": "good",
		"mounts": {
			"AftArc": {
				"light": 1
			},
			"ForwardArc": {
				"light": 2
			}
		},
		"size": 1,
		"value": {
			"CT": 7,
			"DT": 0,
			"ExansionBays": 0,
			"HP": 35,
			"HPIncrement": 5,
			"maxCrew": 2,
			"minCrew": 1,
			"piloting": 1,
			"turn": 1
		}
	},
	"Heavy Freighter": {
		"cost": {
			"BP": 40
		},
		"maneuverability": "average",
		"mounts": {
			"ForwardArc": {
				"heavy": 1,
				"light": 2
			},
			"PortArc": {
				"heavy": 1
			},
			"StarboardArc": {
				"heavy": 1
			}
		},
		"size": 4,
		"value": {
			"CT": 24,
			"DT": 0,
			"ExansionBays": 8,
			"HP": 120,
			"HPIncrement": 20,
			"maxCrew": 20,
			"minCrew": 6,
			"piloting": 0,
			"turn": 2
		}
	},
	"Interceptor": {
		"cost": {
			"BP": 6
		},
		"maneuverability": "perfect",
		"mounts": {
			"ForwardArc": {
				"light": 2
			}
		},
		"size": 1,
		"value": {
			"CT": 6,
			"DT": 0,
			"ExansionBays": 0,
			"HP": 30,
			"HPIncrement": 5,
			"maxCrew": 1,
			"minCrew": 1,
			"piloting": 2,
			"turn": 0
		}
	},
	"Light Freighter": {
		"cost": {
			"BP": 10
		},
		"maneuverability": "good",
		"mounts": {
			"ForwardArc": {
				"light": 2
			},
			"PortArc": {
				"light": 1
			},
			"StarboardArc": {
				"light": 1
			}
		},
		"size": 2,
		"value": {
			"CT": 8,
			"DT": 0,
			"ExansionBays": 3,
			"HP": 40,
			"HPIncrement": 10,
			"maxCrew": 6,
			"minCrew": 1,
			"piloting": 1,
			"turn": 1
		}
	},
	"Racer": {
		"cost": {
			"BP": 4
		},
		"maneuverability": "perfect",
		"mounts": {
			"AftArc": {
				"light": 1
			},
			"ForwardArc": {
				"light": 1
			}
		},
		"size": 1,
		"value": {
			"CT": 4,
			"DT": 0,
			"ExansionBays": 0,
			"HP": 20,
			"HPIncrement": 5,
			"maxCrew": 1,
			"minCrew": 1,
			"piloting": 2,
			"turn": 0
		}
	},
	"Shuttle": {
		"cost": {
			"BP": 6
		},
		"maneuverability": "perfect",
		"mounts": {
			"ForwardArc": {
				"light": 1
			}
		},
		"size": 2,
		"value": {
			"CT": 7,
			"DT": 0,
			"ExansionBays": 3,
			"HP": 35,
			"HPIncrement": 5,
			"maxCrew": 4,
			"minCrew": 1,
			"piloting": 2,
			"turn": 0
		}
	},
	"Transport": {
		"cost": {
			"BP": 15
		},
		"maneuverability": "average",
		"mounts": {
			"AftArc": {
				"light": 1
			},
			"ForwardArc": {
				"heavy": 1,
				"light": 1
			},
			"Turret": {
				"light": 2
			}
		},
		"size": 3,
		"value": {
			"CT": 14,
			"DT": 0,
			"ExansionBays": 5,
			"HP": 70,
			"HPIncrement": 15,
			"maxCrew": 6,
			"minCrew": 1,
			"piloting": 0,
			"turn": 2
		}
	}
};

var shipPowerCores = {
	"Arcus Heavy": {
		"cost": {
			"BP": 13
		},
		"maxSize": 3,
		"minSize": 1,
		"value": {
			"PCU": 130
		}
	},
	"Arcus Light": {
		"cost": {
			"BP": 7
		},
		"maxSize": 2,
		"minSize": 1,
		"value": {
			"PCU": 75
		}
	},
	"Arcus Maximum": {
		"cost": {
			"BP": 20
		},
		"maxSize": 4,
		"minSize": 2,
		"value": {
			"PCU": 200
		}
	},
	"Arcus Ultra": {
		"cost": {
			"BP": 15
		},
		"maxSize": 4,
		"minSize": 2,
		"value": {
			"PCU": 150
		}
	},
	"Gateway Heavy": {
		"cost": {
			"BP": 40
		},
		"maxSize": 6,
		"minSize": 4,
		"value": {
			"PCU": 400
		}
	},
	"Gateway Light": {
		"cost": {
			"BP": 30
		},
		"maxSize": 6,
		"minSize": 4,
		"value": {
			"PCU": 300
		}
	},
	"Gateway Ultra": {
		"cost": {
			"BP": 50
		},
		"maxSize": 7,
		"minSize": 5,
		"value": {
			"PCU": 500
		}
	},
	"Micron Heavy": {
		"cost": {
			"BP": 6
		},
		"maxSize": 1,
		"minSize": 1,
		"value": {
			"PCU": 70
		}
	},
	"Micron Light": {
		"cost": {
			"BP": 4
		},
		"maxSize": 1,
		"minSize": 1,
		"value": {
			"PCU": 50
		}
	},
	"Micron Ultra": {
		"cost": {
			"BP": 8
		},
		"maxSize": 1,
		"minSize": 1,
		"value": {
			"PCU": 80
		}
	},
	"Nova Heavy": {
		"cost": {
			"BP": 20
		},
		"maxSize": 5,
		"minSize": 3,
		"value": {
			"PCU": 200
		}
	},
	"Nova Light": {
		"cost": {
			"BP": 15
		},
		"maxSize": 5,
		"minSize": 3,
		"value": {
			"PCU": 150
		}
	},
	"Nova Ultra": {
		"cost": {
			"BP": 30
		},
		"maxSize": 5,
		"minSize": 3,
		"value": {
			"PCU": 300
		}
	},
	"Pulse Black": {
		"cost": {
			"BP": 12
		},
		"maxSize": 2,
		"minSize": 1,
		"value": {
			"PCU": 120
		}
	},
	"Pulse Blue": {
		"cost": {
			"BP": 20
		},
		"maxSize": 3,
		"minSize": 1,
		"value": {
			"PCU": 200
		}
	},
	"Pulse Brown": {
		"cost": {
			"BP": 9
		},
		"maxSize": 2,
		"minSize": 1,
		"value": {
			"PCU": 90
		}
	},
	"Pulse Gray": {
		"cost": {
			"BP": 10
		},
		"maxSize": 3,
		"minSize": 1,
		"value": {
			"PCU": 100
		}
	},
	"Pulse Green": {
		"cost": {
			"BP": 15
		},
		"maxSize": 3,
		"minSize": 1,
		"value": {
			"PCU": 150
		}
	},
	"Pulse Orange": {
		"cost": {
			"BP": 25
		},
		"maxSize": 4,
		"minSize": 2,
		"value": {
			"PCU": 250
		}
	},
	"Pulse Prismatic": {
		"cost": {
			"BP": 30
		},
		"maxSize": 4,
		"minSize": 2,
		"value": {
			"PCU": 300
		}
	},
	"Pulse Red": {
		"cost": {
			"BP": 17
		},
		"maxSize": 3,
		"minSize": 1,
		"value": {
			"PCU": 175
		}
	},
	"Pulse White": {
		"cost": {
			"BP": 14
		},
		"maxSize": 2,
		"minSize": 1,
		"value": {
			"PCU": 140
		}
	}
};

var shipQuarters = {
  Good: {
    "cost": {
    "BP": 2
    },
    "description": "Good crew quarters are a bit more upscale than common crew quarters. They consist of dormitory-style rooms that can hold one or two small beds (larger starships usually require lower-ranking crew members to share these quarters) and sometimes a personal closet or drawer space for each occupant. Good crew quarters also include one or two shared bathrooms with multiple sinks and shower stalls, and a dining space with an attached galley. Crews of larger starships eat in this dining space in shifts."
  },
  "Common": {
    "cost": {
      "BP": 0
    },
    "description": "Common crew quarters are the most basic type. They consist of simple bunks (sometimes folding out from the side of a hallway) or other similarly austere places to rest. Crew members who sleep in common quarters usually keep their personal possessions in a footlocker. Common crew quarters also include a communal bathroom (which includes a military-style shower) and a tiny galley (big enough to prepare only the most basic of meals). Starships with crews numbering in the dozens or hundreds often have massive barracks where crew members sleep in shifts."
  },
  "Luxurious": {
    "cost": {
      "BP": 5
    },
    "description": "Luxurious crew quarters are the pinnacle of comfort. They consist of private rooms for each crew member, with personal bathrooms (including showers with high water pressure) and furnishings that match the resident's tastes. Some luxurious crew quarters also feature a kitchenette, gaming areas, or intimate meeting spaces."
}

var shipSecurity = {
	"Anti-hacking systems": {
		"cost": {
			"BP": 3,
			"PCU": 0
		},
		"description": "By increasing the security of the starship's computer, these systems increase the DC to hack into it by 1 (see page 139). This upgrade can be purchased up to four times."
	},
	"Antipersonnel weapon (heavy)": {
		"cost": {
			"BP": 5,
			"PCU": 0
		},
		"description": "An antipersonnel weapon must be mounted near the boarding ramp of a Medium or smaller starship. This weapon can be any longarm whose item level is equal to or less than the starship's tier. By spending 5 additional Build Points, the installed weapon can be a heavy weapon (of creature scale, not starship scale). When an antipersonnel weapon is activated, if a hostile creature approaches within the weapon's range increment, it begins firing with an attack roll modifier equal to the ship's tier (minimum 1). It fires once per round during combat until its ammunition is depleted or the hostile creature is disabled or flees. The weapon can't detect invisible (or similarly hidden) creatures. This weapon can't be removed and used by characters. Anyone with access to the starship's computer system can activate or deactivate the weapon, as well designate what kind of targets are considered hostile. Once installed, this weapon can't be removed from the starship without destroying it."
	},
	"Antipersonnel weapon (longarm)": {
		"cost": {
			"BP": 0,
			"PCU": 0
		},
		"description": "An antipersonnel weapon must be mounted near the boarding ramp of a Medium or smaller starship. This weapon can be any longarm whose item level is equal to or less than the starship's tier. By spending 5 additional Build Points, the installed weapon can be a heavy weapon (of creature scale, not starship scale). When an antipersonnel weapon is activated, if a hostile creature approaches within the weapon's range increment, it begins firing with an attack roll modifier equal to the ship's tier (minimum 1). It fires once per round during combat until its ammunition is depleted or the hostile creature is disabled or flees. The weapon can't detect invisible (or similarly hidden) creatures. This weapon can't be removed and used by characters. Anyone with access to the starship's computer system can activate or deactivate the weapon, as well designate what kind of targets are considered hostile. Once installed, this weapon can't be removed from the starship without destroying it."
	},
	"Biometric locks": {
		"cost": {
			"BP": 5,
			"PCU": 0
		},
		"description": "The systems of a starship with biometric locks can only be used by certain creatures, designated when the locks are installed; this list can be updated by any creature who can gain access to the ship's computer systems. A successful Computers check (DC = 20 + 1-1/2 + the tier of the starship) can bypass these locks."
	},
	"Computer countermeasures": {
		"cost": {
			"BP": 0,
			"PCU": 0
		},
		"description": "When a foe attempts to hack a starship's computers and fails, a set of countermeasures can punish the would-be hacker. The crew can install one of the countermeasures listed on page 216, following the normal rules for countermeasures. Each countermeasure costs a number of Build Points equal to the starship's computer's tier (half the starship's tier; see page 297)."
	},
	"Self-destruct system": {
		"cost": {
			"BP": 5,
			"PCU": 0
		},
		"description": "Used most often as a last resort, a self-destruct system completely destroys the starship on which it is installed (as if the ship had taken damage equal to twice its Hull Points), often killing everyone on board. A starship in a hex adjacent to a starship that self-destructs takes an amount of damage equal to half the destroyed starship's maximum Hull Points; this damage can be mitigated by shields. A self-destruct system can be activated only by creatures on the starship (by turning a set of keys, typing in a specific passcode, or other physical means known only to high-ranking members of the crew) and can't be activated remotely via hacking. The activating creatures set a time delay for the destruction (at least 1 round of starship combat). The cost of a self-destruct system depends on the size category of the ship (for the purposes of this calculation, Tiny = 1, Small = 2, Medium = 3, Large = 4, and so on)."
	}
};

var shipSensors = {
	"Advanced long-range": {
		"cost": {
			"BP": 14
		},
		"range": "Long",
		"sensorMod": 4
	},
	"Advanced medium-range": {
		"cost": {
			"BP": 8
		},
		"range": "Medium",
		"sensorMod": 4
	},
	"Advanced short-range": {
		"cost": {
			"BP": 4
		},
		"range": "Short",
		"sensorMod": 4
	},
	"Basic long-range": {
		"cost": {
			"BP": 10
		},
		"range": "Long",
		"sensorMod": 2
	},
	"Basic medium-range": {
		"cost": {
			"BP": 5
		},
		"range": "Medium",
		"sensorMod": 2
	},
	"Basic short-range": {
		"cost": {
			"BP": 3
		},
		"range": "Short",
		"sensorMod": 2
	},
	"Budget long-range": {
		"cost": {
			"BP": 6
		},
		"range": "Long",
		"sensorMod": 0
	},
	"Budget medium-range": {
		"cost": {
			"BP": 3
		},
		"range": "Medium",
		"sensorMod": 0
	},
	"Budget short-range": {
		"cost": {
			"BP": 2
		},
		"range": "Short",
		"sensorMod": 0
	},
	"Cut-rate": {
		"cost": {
			"BP": 1
		},
		"range": "Short",
		"sensorMod": -2
	}
};

var shipShields = {
	"Basic 10": {
		"cost": {
			"BP": 2,
			"PCU": 5
		},
		"value": {
			"SP": 10,
			"shieldRegen": 1
		}
	},
	"Basic 20": {
		"cost": {
			"BP": 3,
			"PCU": 10
		},
		"value": {
			"SP": 20,
			"shieldRegen": 1
		}
	},
	"Basic 30": {
		"cost": {
			"BP": 4,
			"PCU": 15
		},
		"value": {
			"SP": 30,
			"shieldRegen": 1
		}
	},
	"Basic 40": {
		"cost": {
			"BP": 5,
			"PCU": 15
		},
		"value": {
			"SP": 40,
			"shieldRegen": 1
		}
	},
	"Heavy 240": {
		"cost": {
			"BP": 23,
			"PCU": 55
		},
		"value": {
			"SP": 240,
			"shieldRegen": 16
		}
	},
	"Heavy 280": {
		"cost": {
			"BP": 25,
			"PCU": 60
		},
		"value": {
			"SP": 280,
			"shieldRegen": 16
		}
	},
	"Heavy 320": {
		"cost": {
			"BP": 27,
			"PCU": 70
		},
		"value": {
			"SP": 320,
			"shieldRegen": 16
		}
	},
	"Heavy 360": {
		"cost": {
			"BP": 28,
			"PCU": 80
		},
		"value": {
			"SP": 360,
			"shieldRegen": 32
		}
	},
	"Heavy 420": {
		"cost": {
			"BP": 30,
			"PCU": 90
		},
		"value": {
			"SP": 420,
			"shieldRegen": 32
		}
	},
	"Heavy 480": {
		"cost": {
			"BP": 32,
			"PCU": 110
		},
		"value": {
			"SP": 480,
			"shieldRegen": 32
		}
	},
	"Light 50": {
		"cost": {
			"BP": 6,
			"PCU": 20
		},
		"value": {
			"SP": 50,
			"shieldRegen": 2
		}
	},
	"Light 60": {
		"cost": {
			"BP": 8,
			"PCU": 20
		},
		"value": {
			"SP": 60,
			"shieldRegen": 2
		}
	},
	"Light 70": {
		"cost": {
			"BP": 10,
			"PCU": 25
		},
		"value": {
			"SP": 70,
			"shieldRegen": 2
		}
	},
	"Light 80": {
		"cost": {
			"BP": 12,
			"PCU": 30
		},
		"value": {
			"SP": 80,
			"shieldRegen": 2
		}
	},
	"Medium 100": {
		"cost": {
			"BP": 15,
			"PCU": 30
		},
		"value": {
			"SP": 100,
			"shieldRegen": 4
		}
	},
	"Medium 120": {
		"cost": {
			"BP": 17,
			"PCU": 35
		},
		"value": {
			"SP": 120,
			"shieldRegen": 4
		}
	},
	"Medium 140": {
		"cost": {
			"BP": 18,
			"PCU": 40
		},
		"value": {
			"SP": 140,
			"shieldRegen": 8
		}
	},
	"Medium 160": {
		"cost": {
			"BP": 20,
			"PCU": 45
		},
		"value": {
			"SP": 160,
			"shieldRegen": 8
		}
	},
	"Medium 200": {
		"cost": {
			"BP": 22,
			"PCU": 50
		},
		"value": {
			"SP": 200,
			"shieldRegen": 8
		}
	},
	"Medium 90": {
		"cost": {
			"BP": 13,
			"PCU": 30
		},
		"value": {
			"SP": 90,
			"shieldRegen": 4
		}
	},
	"Superior 540": {
		"cost": {
			"BP": 35,
			"PCU": 130
		},
		"value": {
			"SP": 540,
			"shieldRegen": 64
		}
	},
	"Superior 600": {
		"cost": {
			"BP": 40,
			"PCU": 160
		},
		"value": {
			"SP": 600,
			"shieldRegen": 64
		}
	}
};

var shipThrusters = {
	"C4 Thrusters": {
		"cost": {
			"BP": 8,
			"PCU": 200
		},
		"size": 7,
		"value": {
			"hexSpeed": 4,
			"piloting": 2
		}
	},
	"C6 Thrusters": {
		"cost": {
			"BP": 12,
			"PCU": 300
		},
		"size": 7,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"C8 Thrusters": {
		"cost": {
			"BP": 16,
			"PCU": 400
		},
		"size": 7,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	},
	"G4 Thrusters": {
		"cost": {
			"BP": 8,
			"PCU": 120
		},
		"size": 6,
		"value": {
			"hexSpeed": 4,
			"piloting": 2
		}
	},
	"G6 Thrusters": {
		"cost": {
			"BP": 12,
			"PCU": 180
		},
		"size": 6,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"G8 Thrusters": {
		"cost": {
			"BP": 16,
			"PCU": 240
		},
		"size": 6,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	},
	"H10 Thrusters": {
		"cost": {
			"BP": 10,
			"PCU": 160
		},
		"size": 5,
		"value": {
			"hexSpeed": 10,
			"piloting": 0
		}
	},
	"H4 Thrusters": {
		"cost": {
			"BP": 4,
			"PCU": 80
		},
		"size": 5,
		"value": {
			"hexSpeed": 4,
			"piloting": 2
		}
	},
	"H6 Thrusters": {
		"cost": {
			"BP": 6,
			"PCU": 120
		},
		"size": 5,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"H8 Thrusters": {
		"cost": {
			"BP": 8,
			"PCU": 140
		},
		"size": 5,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	},
	"L10 Thrusters": {
		"cost": {
			"BP": 10,
			"PCU": 120
		},
		"size": 4,
		"value": {
			"hexSpeed": 10,
			"piloting": 0
		}
	},
	"L4 Thrusters": {
		"cost": {
			"BP": 4,
			"PCU": 60
		},
		"size": 4,
		"value": {
			"hexSpeed": 4,
			"piloting": 2
		}
	},
	"L6 Thrusters": {
		"cost": {
			"BP": 6,
			"PCU": 80
		},
		"size": 4,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"L8 Thrusters": {
		"cost": {
			"BP": 8,
			"PCU": 100
		},
		"size": 4,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	},
	"M10 Thrusters": {
		"cost": {
			"BP": 5,
			"PCU": 70
		},
		"size": 3,
		"value": {
			"hexSpeed": 10,
			"piloting": 0
		}
	},
	"M12 Thrusters": {
		"cost": {
			"BP": 6,
			"PCU": 80
		},
		"size": 3,
		"value": {
			"hexSpeed": 12,
			"piloting": -1
		}
	},
	"M4 Thrusters": {
		"cost": {
			"BP": 2,
			"PCU": 40
		},
		"size": 3,
		"value": {
			"hexSpeed": 4,
			"piloting": 2
		}
	},
	"M6 Thrusters": {
		"cost": {
			"BP": 3,
			"PCU": 50
		},
		"size": 3,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"M8 Thrusters": {
		"cost": {
			"BP": 4,
			"PCU": 60
		},
		"size": 3,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	},
	"S10 Thrusters": {
		"cost": {
			"BP": 5,
			"PCU": 50
		},
		"size": 2,
		"value": {
			"hexSpeed": 10,
			"piloting": 0
		}
	},
	"S12 Thrusters": {
		"cost": {
			"BP": 6,
			"PCU": 60
		},
		"size": 2,
		"value": {
			"hexSpeed": 12,
			"piloting": -1
		}
	},
	"S6 Thrusters": {
		"cost": {
			"BP": 3,
			"PCU": 30
		},
		"size": 2,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"S8 Thrusters": {
		"cost": {
			"BP": 4,
			"PCU": 40
		},
		"size": 2,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	},
	"T10 Thrusters": {
		"cost": {
			"BP": 5,
			"PCU": 30
		},
		"size": 1,
		"value": {
			"hexSpeed": 10,
			"piloting": 0
		}
	},
	"T12 Thrusters": {
		"cost": {
			"BP": 6,
			"PCU": 35
		},
		"size": 1,
		"value": {
			"hexSpeed": 12,
			"piloting": -1
		}
	},
	"T14 Thrusters": {
		"cost": {
			"BP": 7,
			"PCU": 40
		},
		"size": 2,
		"value": {
			"hexSpeed": 14,
			"piloting": -2
		}
	},
	"T6 Thrusters": {
		"cost": {
			"BP": 3,
			"PCU": 20
		},
		"size": 1,
		"value": {
			"hexSpeed": 6,
			"piloting": 1
		}
	},
	"T8 Thrusters": {
		"cost": {
			"BP": 4,
			"PCU": 25
		},
		"size": 1,
		"value": {
			"hexSpeed": 8,
			"piloting": 0
		}
	}
};

var shipWeapons = {
	"Antimatter mega-missile launcher": {
		"class": "Capital",
		"cost": {
			"BP": 25,
			"PCU": 15
		},
		"damage": "4d10 + 10",
		"hexSpeed": 6,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Chain cannon": {
		"class": "Light",
		"cost": {
			"BP": 15,
			"PCU": 15
		},
		"damage": "6d4",
		"range": "Short",
		"special": "Ripper",
		"type": "Direct"
	},
	"Coilgun": {
		"class": "Light",
		"cost": {
			"BP": 6,
			"PCU": 10
		},
		"damage": "4d4",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Flak thrower": {
		"class": "Light",
		"cost": {
			"BP": 5,
			"PCU": 10
		},
		"damage": "3d4",
		"range": "Short",
		"special": "Point (+8)",
		"type": "Direct"
	},
	"Graser": {
		"class": "Heavy",
		"cost": {
			"BP": 35,
			"PCU": 40
		},
		"damage": "7d10",
		"range": "Short",
		"special": "Irradiate (medium)",
		"type": "Direct"
	},
	"Gravity cannon": {
		"class": "Capital",
		"cost": {
			"BP": 50,
			"PCU": 40
		},
		"damage": "2d6 + 10",
		"range": "Long",
		"special": "Tractor beam",
		"type": "Direct"
	},
	"Gravity gun": {
		"class": "Heavy",
		"cost": {
			"BP": 30,
			"PCU": 40
		},
		"damage": "6d6",
		"range": "Medium",
		"special": "Tractor beam",
		"type": "Direct"
	},
	"Gyrolaser": {
		"class": "Light",
		"cost": {
			"BP": 3,
			"PCU": 10
		},
		"damage": "1d8",
		"range": "Short",
		"special": "Broad arc",
		"type": "Direct"
	},
	"Heavy EMP cannon": {
		"class": "Heavy",
		"cost": {
			"BP": 24,
			"PCU": 30
		},
		"damage": "Special",
		"range": "Medium",
		"special": "EMP",
		"type": "Direct"
	},
	"Heavy antimatter missile launcher": {
		"class": "Heavy",
		"cost": {
			"BP": 12,
			"PCU": 15
		},
		"damage": "10d10",
		"hexSpeed": 8,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Heavy laser array": {
		"class": "Heavy",
		"cost": {
			"BP": 10,
			"PCU": 15
		},
		"damage": "6d4",
		"range": "Short",
		"special": "Array",
		"type": "Direct"
	},
	"Heavy laser cannon": {
		"class": "Heavy",
		"cost": {
			"BP": 8,
			"PCU": 10
		},
		"damage": "4d8",
		"range": "Medium",
		"special": "-",
		"type": "Direct"
	},
	"Heavy laser net": {
		"class": "Heavy",
		"cost": {
			"BP": 12,
			"PCU": 15
		},
		"damage": "5d6",
		"range": "Short",
		"special": "Point (+12)",
		"type": "Direct"
	},
	"Heavy nuclear missile launcher": {
		"class": "Heavy",
		"cost": {
			"BP": 10,
			"PCU": 15
		},
		"damage": "10d8",
		"hexSpeed": 10,
		"range": "Long",
		"special": "Irradiate (medium), limited fire 5",
		"type": "Tracking"
	},
	"Heavy plasma torpedo launcher": {
		"class": "Heavy",
		"cost": {
			"BP": 10,
			"PCU": 10
		},
		"damage": "5d10",
		"hexSpeed": 12,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Heavy torpedo launcher": {
		"class": "Heavy",
		"cost": {
			"BP": 8,
			"PCU": 10
		},
		"damage": "5d8",
		"hexSpeed": 14,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Hellfire torpedo launcher": {
		"class": "Capital",
		"cost": {
			"BP": 25,
			"PCU": 10
		},
		"damage": "2d10 + 10",
		"hexSpeed": 8,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"High explosive missile launcher": {
		"class": "Light",
		"cost": {
			"BP": 4,
			"PCU": 10
		},
		"damage": "4d8",
		"hexSpeed": 12,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Laser net": {
		"class": "Light",
		"cost": {
			"BP": 9,
			"PCU": 10
		},
		"damage": "2d6",
		"range": "Short",
		"special": "Point (+10)",
		"type": "Direct"
	},
	"Light EMP cannon": {
		"class": "Light",
		"cost": {
			"BP": 8,
			"PCU": 10
		},
		"damage": "Special",
		"range": "Short",
		"special": "EMP",
		"type": "Direct"
	},
	"Light laser cannon": {
		"class": "Light",
		"cost": {
			"BP": 2,
			"PCU": 5
		},
		"damage": "2d4",
		"range": "Short",
		"special": "-",
		"type": "Direct"
	},
	"Light particle beam": {
		"class": "Light",
		"cost": {
			"BP": 10,
			"PCU": 10
		},
		"damage": "3d6",
		"range": "Medium",
		"special": "-",
		"type": "Direct"
	},
	"Light plasma cannon": {
		"class": "Light",
		"cost": {
			"BP": 12,
			"PCU": 10
		},
		"damage": "2d12",
		"range": "Short",
		"special": "-",
		"type": "Direct"
	},
	"Light plasma torpedo launcher": {
		"class": "Light",
		"cost": {
			"BP": 5,
			"PCU": 5
		},
		"damage": "3d8",
		"hexSpeed": 14,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Light torpedo launcher": {
		"class": "Light",
		"cost": {
			"BP": 4,
			"PCU": 5
		},
		"damage": "2d8",
		"hexSpeed": 16,
		"range": "Long",
		"special": "-",
		"type": "Tracking"
	},
	"Maser": {
		"class": "Heavy",
		"cost": {
			"BP": 22,
			"PCU": 35
		},
		"damage": "6d10",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Mass driver": {
		"class": "Capital",
		"cost": {
			"BP": 25,
			"PCU": 25
		},
		"damage": "2d6 + 10",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Micromissile battery": {
		"class": "Light",
		"cost": {
			"BP": 3,
			"PCU": 10
		},
		"damage": "2d6",
		"hexSpeed": 10,
		"range": "Long",
		"special": "Array, limited fire 5",
		"type": "Tracking"
	},
	"Nuclear mega-missile launcher": {
		"class": "Capital",
		"cost": {
			"BP": 20,
			"PCU": 15
		},
		"damage": "4d8 + 10",
		"hexSpeed": 8,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Particle beam": {
		"class": "Heavy",
		"cost": {
			"BP": 15,
			"PCU": 25
		},
		"damage": "8d6",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Particle beam cannon": {
		"class": "Capital",
		"cost": {
			"BP": 30,
			"PCU": 30
		},
		"damage": "3d4 + 10",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Persistent particle beam": {
		"class": "Heavy",
		"cost": {
			"BP": 25,
			"PCU": 40
		},
		"damage": "10d6",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Persistent particle beam cannon": {
		"class": "Capital",
		"cost": {
			"BP": 40,
			"PCU": 50
		},
		"damage": "2d10 + 10",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Plasma cannon": {
		"class": "Heavy",
		"cost": {
			"BP": 20,
			"PCU": 30
		},
		"damage": "5d12",
		"range": "Medium",
		"special": "-",
		"type": "Direct"
	},
	"Quantum missile launcher": {
		"class": "Capital",
		"cost": {
			"BP": 20,
			"PCU": 15
		},
		"damage": "2d8 + 10",
		"hexSpeed": 12,
		"range": "Long",
		"special": "Limited fire 5, quantum",
		"type": "Tracking"
	},
	"Railgun": {
		"class": "Heavy",
		"cost": {
			"BP": 15,
			"PCU": 20
		},
		"damage": "8d4",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Solar torpedo launcher": {
		"class": "Capital",
		"cost": {
			"BP": 20,
			"PCU": 10
		},
		"damage": "2d6 + 10",
		"hexSpeed": 10,
		"range": "Long",
		"special": "Limited fire 5",
		"type": "Tracking"
	},
	"Super EMP cannon": {
		"class": "Capital",
		"cost": {
			"BP": 45,
			"PCU": 45
		},
		"damage": "Special",
		"range": "Long",
		"special": "EMP",
		"type": "Direct"
	},
	"Super X-laser cannon": {
		"class": "Capital",
		"cost": {
			"BP": 60,
			"PCU": 50
		},
		"damage": "3d4 + 10",
		"range": "Long",
		"special": "Line",
		"type": "Direct"
	},
	"Super plasma cannon": {
		"class": "Capital",
		"cost": {
			"BP": 35,
			"PCU": 45
		},
		"damage": "3d6 + 10",
		"range": "Medium",
		"special": "-",
		"type": "Direct"
	},
	"Supergraser": {
		"class": "Capital",
		"cost": {
			"BP": 60,
			"PCU": 50
		},
		"damage": "2d8 + 10",
		"range": "Medium",
		"special": "Irradiate (high)",
		"type": "Direct"
	},
	"Superlaser": {
		"class": "Capital",
		"cost": {
			"BP": 20,
			"PCU": 20
		},
		"damage": "2d4 + 10",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Supermaser": {
		"class": "Capital",
		"cost": {
			"BP": 35,
			"PCU": 40
		},
		"damage": "2d8 + 10",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Tactical nuclear missile launcher": {
		"class": "Light",
		"cost": {
			"BP": 5,
			"PCU": 10
		},
		"damage": "5d8",
		"hexSpeed": 10,
		"range": "Long",
		"special": "Irradiate (low), limited fire 5",
		"type": "Tracking"
	},
	"Twin laser": {
		"class": "Heavy",
		"cost": {
			"BP": 12,
			"PCU": 15
		},
		"damage": "5d8",
		"range": "Long",
		"special": "-",
		"type": "Direct"
	},
	"Vortex cannon": {
		"class": "Capital",
		"cost": {
			"BP": 75,
			"PCU": 55
		},
		"damage": "2d12 + 10",
		"range": "Medium",
		"special": "Vortex",
		"type": "Direct"
	},
	"X-laser cannon": {
		"class": "Heavy",
		"cost": {
			"BP": 35,
			"PCU": 40
		},
		"damage": "8d6",
		"range": "Long",
		"special": "Line",
		"type": "Direct"
	}
};