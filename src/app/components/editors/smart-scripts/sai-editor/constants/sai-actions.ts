import { getEnumKeys } from '../../../../../utils/helpers';

export enum SAI_ACTIONS {
  NONE = 0,
  TALK = 1,
  SET_FACTION = 2,
  MORPH_TO_ENTRY_OR_MODEL = 3,
  SOUND = 4,
  PLAY_EMOTE = 5,
  FAIL_QUEST = 6,
  OFFER_QUEST = 7,
  SET_REACT_STATE = 8,
  ACTIVATE_GOBJECT = 9,
  RANDOM_EMOTE = 10,
  CAST = 11,
  SUMMON_CREATURE = 12,
  THREAT_SINGLE_PCT = 13,
  THREAT_ALL_PCT = 14,
  CALL_AREAEXPLOREDOREVENTHAPPENS = 15,
  // RESERVED_16 = 16,
  SET_EMOTE_STATE = 17,
  SET_UNIT_FLAG = 18,
  REMOVE_UNIT_FLAG = 19,
  AUTO_ATTACK = 20,
  ALLOW_COMBAT_MOVEMENT = 21,
  SET_EVENT_PHASE = 22,
  INC_EVENT_PHASE = 23,
  EVADE = 24,
  FLEE_FOR_ASSIST = 25,
  CALL_GROUPEVENTHAPPENS = 26,
  COMBAT_STOP = 27,
  REMOVEAURASFROMSPELL = 28,
  FOLLOW = 29,
  RANDOM_PHASE = 30,
  RANDOM_PHASE_RANGE = 31,
  RESET_GOBJECT = 32,
  CALL_KILLEDMONSTER = 33,
  SET_INST_DATA = 34,
  SET_INST_DATA64 = 35,
  UPDATE_TEMPLATE = 36,
  DIE = 37,
  SET_IN_COMBAT_WITH_ZONE = 38,
  CALL_FOR_HELP = 39,
  SET_SHEATH = 40,
  FORCE_DESPAWN = 41,
  SET_INVINCIBILITY_HP_LEVEL = 42,
  MOUNT_TO_ENTRY_OR_MODEL = 43,
  SET_INGAME_PHASE_MASK = 44,
  SET_DATA = 45,
  MOVE_FORWARD = 46,
  SET_VISIBILITY = 47,
  SET_ACTIVE = 48,
  ATTACK_START = 49,
  SUMMON_GO = 50,
  KILL_UNIT = 51,
  ACTIVATE_TAXI = 52,
  WP_START = 53,
  WP_PAUSE = 54,
  WP_STOP = 55,
  ADD_ITEM = 56,
  REMOVE_ITEM = 57,
  INSTALL_AI_TEMPLATE = 58,
  SET_RUN = 59,
  SET_FLY = 60,
  SET_SWIM = 61,
  TELEPORT = 62,
  SET_COUNTER = 63,
  STORE_TARGET_LIST = 64,
  WP_RESUME = 65,
  SET_ORIENTATION = 66,
  CREATE_TIMED_EVENT = 67,
  PLAYMOVIE = 68,
  MOVE_TO_POS = 69,
  RESPAWN_TARGET = 70,
  EQUIP = 71,
  CLOSE_GOSSIP = 72,
  TRIGGER_TIMED_EVENT = 73,
  REMOVE_TIMED_EVENT = 74,
  ADD_AURA = 75,
  OVERRIDE_SCRIPT_BASE_OBJECT = 76,
  RESET_SCRIPT_BASE_OBJECT = 77,
  CALL_SCRIPT_RESET = 78,
  SET_RANGED_MOVEMENT = 79,
  CALL_TIMED_ACTIONLIST = 80,
  SET_NPC_FLAG = 81,
  ADD_NPC_FLAG = 82,
  REMOVE_NPC_FLAG = 83,
  SIMPLE_TALK = 84,
  INVOKER_CAST = 85,
  CROSS_CAST = 86,
  CALL_RANDOM_TIMED_ACTIONLIST = 87,
  CALL_RANDOM_RANGE_TIMED_ACTIONLIST = 88,
  RANDOM_MOVE = 89,
  SET_UNIT_FIELD_BYTES_1 = 90,
  REMOVE_UNIT_FIELD_BYTES_1 = 91,
  INTERRUPT_SPELL = 92,
  SEND_GO_CUSTOM_ANIM = 93,
  SET_DYNAMIC_FLAG = 94,
  ADD_DYNAMIC_FLAG = 95,
  REMOVE_DYNAMIC_FLAG = 96,
  JUMP_TO_POS = 97,
  SEND_GOSSIP_MENU = 98,
  GO_SET_LOOT_STATE = 99,
  SEND_TARGET_TO_TARGET = 100,
  SET_HOME_POS = 101,
  SET_HEALTH_REGEN = 102,
  SET_ROOT = 103,
  SET_GO_FLAG = 104,
  ADD_GO_FLAG = 105,
  REMOVE_GO_FLAG = 106,
  SUMMON_CREATURE_GROUP = 107,
  SET_POWER = 108,
  ADD_POWER = 109,
  REMOVE_POWER = 110,
  GAME_EVENT_STOP = 111,
  GAME_EVENT_START = 112,
  START_CLOSEST_WAYPOINT = 113,
  RISE_UP = 114,
  RANDOM_SOUND = 115,
  // SET_CORPSE_DELAY                   = 116, //  NOT SUPPORTED YET
  // DISABLE_EVADE                      = 117, //  NOT SUPPORTED YET
  // GO_SET_GO_STATE                    = 118, //  NOT SUPPORTED YET
  // SET_CAN_FLY                        = 119, //  NOT SUPPORTED YET
  // REMOVE_AURAS_BY_TYPE               = 120, //  NOT SUPPORTED YET
  SET_SIGHT_DIST = 121,
  FLEE = 122,
  ADD_THREAT = 123,
  LOAD_EQUIPMENT = 124,
  TRIGGER_RANDOM_TIMED_EVENT = 125,
  REMOVE_ALL_GAMEOBJECTS = 126,
  // REMOVE_MOVEMENT                    = 127, // NOT SUPPORTED YET
  // PLAY_ANIMKIT                       = 128, // don't use on 3.3.5a
  // SCENE_PLAY                         = 129, // don't use on 3.3.5a
  // SCENE_CANCEL                       = 130, // don't use on 3.3.5a
  // SPAWN_SPAWNGROUP                   = 131, // NOT SUPPORTED YET
  // DESPAWN_SPAWNGROUP                 = 132, // NOT SUPPORTED YET
  // RESPAWN_BY_SPAWNID                 = 133, // NOT SUPPORTED YET
  // INVOKER_CAST                       = 134, // name conflicts

  // AC-only SmartActions:
  MOVE_TO_POS_TARGET = 201,
  SET_GO_STATE = 202,
  EXIT_VEHICLE = 203,
  SET_UNIT_MOVEMENT_FLAGS = 204,
  SET_COMBAT_DISTANCE = 205,
  SET_CASTER_COMBAT_DIST = 206,
  SET_HOVER = 207,
  ADD_IMMUNITY = 208,
  REMOVE_IMMUNITY = 209,
  FALL = 210,
  SET_EVENT_FLAG_RESET = 211,
  STOP_MOTION = 212,
  NO_ENVIRONMENT_UPDATE = 213,
  ZONE_UNDER_ATTACK = 214,
  LOAD_GRID = 215,
  MUSIC = 216,
  RANDOM_MUSIC = 217,
}
export const SAI_ACTIONS_KEYS = getEnumKeys(SAI_ACTIONS);
export const SAI_ACTION_TOOLTIPS = [];
export const SAI_ACTION_PARAM1_NAMES = [];
export const SAI_ACTION_PARAM2_NAMES = [];
export const SAI_ACTION_PARAM3_NAMES = [];
export const SAI_ACTION_PARAM4_NAMES = [];
export const SAI_ACTION_PARAM5_NAMES = [];
export const SAI_ACTION_PARAM6_NAMES = [];
export const SAI_ACTION_PARAM1_TOOLTIPS = [];
export const SAI_ACTION_PARAM2_TOOLTIPS = [];
export const SAI_ACTION_PARAM3_TOOLTIPS = [];
export const SAI_ACTION_PARAM4_TOOLTIPS = [];
export const SAI_ACTION_PARAM5_TOOLTIPS = [];
export const SAI_ACTION_PARAM6_TOOLTIPS = [];

// Common tooltips
const BOOLEAN_VALUE_TOOLTIP = '0 or 1';
const TIME_IN_MILLISECONDS_TOOLTIP = 'Time in milliseconds';
const ENTRYORGUID_100_N_TOOLTIP = 'entryorguid * 100 + n';
const DYNAMIC_FLAGS_TOOLTIP = 'creature_template.dynamicflags';

// SMART_ACTION_NONE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.NONE] = 'No action type is specified. Do not use because it will cause errors on start-up.';

// SMART_ACTION_TALK
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.TALK] = 'Creature says a creature_text line';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.TALK] = 'GroupId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.TALK] = 'Duration';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.TALK] = 'Target';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.TALK]  = 'This is creature_text.GroupID';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.TALK] = 'Duration (milliseconds) to wait before SMART_EVENT_TEXT_OVER event is triggered';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.TALK] = '0 = Try to trigger talk of the target; ' +
  '1 = Set target as talk target (used for $vars in texts and whisper target)';

// SMART_ACTION_SET_FACTION
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_FACTION] = 'Set faction of target';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_FACTION] = 'FactionId';

// SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.MORPH_TO_ENTRY_OR_MODEL] = 'Morph the creature to a CreatureId (by taking its model) or a given ModelId. ' +
  'If both parameters are 0, demorph the creature';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.MORPH_TO_ENTRY_OR_MODEL] = 'CreatureId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.MORPH_TO_ENTRY_OR_MODEL] = 'ModelId';

// SMART_ACTION_SOUND
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SOUND] = 'Play a sound';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SOUND] = 'SoundId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SOUND] = 'OnlySelf';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SOUND]  = '0 = sends sound to everyone in visibility range; 1 = sends sound to self';

// SMART_ACTION_PLAY_EMOTE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.PLAY_EMOTE] = 'Play en emote';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.PLAY_EMOTE] = 'EmoteId';

// SMART_ACTION_FAIL_QUEST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.FAIL_QUEST] = 'Set a certain quest of our (player) target to \'fail\', making them have to re-take it';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.FAIL_QUEST] = 'QuestId';

// SMART_ACTION_OFFER_QUEST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.OFFER_QUEST] = 'Add a quest to our (player) target\'s quest list';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.OFFER_QUEST] = 'QuestId';

// SMART_ACTION_SET_REACT_STATE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_REACT_STATE] = 'ReactState. Can be Passive (0), Defensive (1), Aggressive (2).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_REACT_STATE] = 'ReactState';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_REACT_STATE] = '0 = Passive; 1 = Defensive; 2 = Aggressive';

// SMART_ACTION_ACTIVATE_GOBJECT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ACTIVATE_GOBJECT] = 'Activate a gameobject (targets our target_type, so it must be a gameobject)';

// SMART_ACTION_RANDOM_EMOTE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RANDOM_EMOTE] = 'Play a random emote. Out of a total of 6 parameters it will pick one and ignore all fields with the value 0';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RANDOM_EMOTE] = 'EmoteId1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.RANDOM_EMOTE] = 'EmoteId2';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.RANDOM_EMOTE] = 'EmoteId3';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.RANDOM_EMOTE] = 'EmoteId4';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.RANDOM_EMOTE] = 'EmoteId5';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.RANDOM_EMOTE] = 'EmoteId6';

// SMART_ACTION_CAST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CAST] = 'Cast a spell to our target type';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CAST] = 'SpellId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CAST] = 'CastFlags';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.CAST] = 'LimitTargets';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.CAST] = 'http://www.azerothcore.org/wiki/smart_scripts#cast-flags'; // TODO
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.CAST] = '0 = all targets';

// SMART_ACTION_SUMMON_CREATURE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE] = 'Summons a creature for a given time (or permanent, depending on the summon type which is set in the second parameter)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SUMMON_CREATURE] = 'CreatureId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SUMMON_CREATURE] = 'SummonType';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.SUMMON_CREATURE] = 'Duration';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.SUMMON_CREATURE] = 'AttackInvoker';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.SUMMON_CREATURE] = 'AttackScriptOwner';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE] = 'Duration (milliseconds)';
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE] = 'Whether or not the summoned creature should attack the action invoker (SMART_TARGET_ACTION_INVOKER) when it\'s summoned. ' +
  '0 = it will not attack, 1 = it will attack.';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE] = '0 = it will not attack, 1 = it will attack';

// SMART_ACTION_THREAT_SINGLE_PCT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.THREAT_SINGLE_PCT] = 'Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.THREAT_SINGLE_PCT] = 'ThreatIncrease%';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.THREAT_SINGLE_PCT] = 'ThreatDecrease%';

// SMART_ACTION_THREAT_ALL_PCT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.THREAT_ALL_PCT] = 'Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.THREAT_ALL_PCT] = 'ThreatIncrease%';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.THREAT_ALL_PCT] = 'ThreatDecrease%';

// SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_AREAEXPLOREDOREVENTHAPPENS] = 'Complete a quest requirement (by entry) of our current (player) target';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_AREAEXPLOREDOREVENTHAPPENS] = 'QuestId';

// SMART_ACTION_SET_EMOTE_STATE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_EMOTE_STATE] = 'Set emote state';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_EMOTE_STATE] = 'EmoteId';

// SMART_ACTION_SET_UNIT_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_UNIT_FLAG] = 'Set the unit flags of the target (using creature_template.unit_flags and creature_template.unit_flags2)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_UNIT_FLAG] = 'UnitFlags';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_UNIT_FLAG] = 'Type';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SET_UNIT_FLAG] = 'Determines which unit flag to target: 0 = targets the default unit flags which is creature_template.unit_flags; 1 = targets creature_template.unit_flags2';

// SMART_ACTION_REMOVE_UNIT_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_UNIT_FLAG] = 'Removes unit flags from the target (using creature_template.unit_flags and creature_template.unit_flags2)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_UNIT_FLAG] = 'UnitFlags';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.REMOVE_UNIT_FLAG] = 'Type';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.REMOVE_UNIT_FLAG] = SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SET_UNIT_FLAG];

// SMART_ACTION_AUTO_ATTACK
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.AUTO_ATTACK] = 'Stop or Continue Automatic Attack.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.AUTO_ATTACK] = 'StartOrStop';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.AUTO_ATTACK]  = '0 = the creature will stop attacking its current target. 1 = starts/continues to attack its target';

// SMART_ACTION_ALLOW_COMBAT_MOVEMENT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ALLOW_COMBAT_MOVEMENT] = 'Allow or disallow moving while the creature is in combat';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ALLOW_COMBAT_MOVEMENT] = 'Allow';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.ALLOW_COMBAT_MOVEMENT]  = '0 = the creature is no longer able to move AT ALL during combat; 1 = it\'s allowed to normally walk during combat';

// SMART_ACTION_SET_EVENT_PHASE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_EVENT_PHASE] = 'Set the creature\'s event phasemask to a new value (warning: this is NOT the creature\'s actual phase!)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_EVENT_PHASE] = 'Phasemask';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_EVENT_PHASE] = 'Event phase 0-12 (the actual values, no bit mask!)';

// SMART_ACTION_INC_EVENT_PHASE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.INC_EVENT_PHASE] = 'Increment or decrement the creature\'s event phasemask (warning: this is NOT the creature\'s actual phase!)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.INC_EVENT_PHASE] = 'Increment';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.INC_EVENT_PHASE] = 'Decrement';

// SMART_ACTION_EVADE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.EVADE] = 'Makes the creature evade and therefore make it stop attacking and leave combat.';

// SMART_ACTION_FLEE_FOR_ASSIST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.FLEE_FOR_ASSIST] = 'Makes the creature flee for assistance of nearby friendly units';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.FLEE_FOR_ASSIST] = 'SayFleeText';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.FLEE_FOR_ASSIST]  = '0 or 1 - determines whether or not the creature should say something along the lines of "NAME starts fleeing ..." when it flees';

// SMART_ACTION_CALL_GROUPEVENTHAPPENS
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_GROUPEVENTHAPPENS] = 'Complete a quest requirement (by entry) of our current (player) target.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_GROUPEVENTHAPPENS] = 'QuestId';

// SMART_ACTION_COMBAT_STOP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.COMBAT_STOP] = 'Complete a quest requirement (by entry) of our current (player) target. Completes a killed monster credit as well as gives credit for a spellcast.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.COMBAT_STOP] = 'CreatureId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.COMBAT_STOP] = 'SpellId';

// SMART_ACTION_REMOVEAURASFROMSPELL
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVEAURASFROMSPELL] = 'Remove an aura/spell from our target';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVEAURASFROMSPELL] = 'SpellId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.REMOVEAURASFROMSPELL] = 'Charges';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.REMOVEAURASFROMSPELL] = 'If 0, removes all auras';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.REMOVEAURASFROMSPELL] = 'Amount of charges of said aura to be removed. If 0, the whole aura is removed.';

// SMART_ACTION_FOLLOW
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.FOLLOW] = 'Makes the creature follow the target at a certain distance and with a certain angle.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.FOLLOW] = 'Distance';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.FOLLOW] = 'Angle';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.FOLLOW] = 'EndCreatureId';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.FOLLOW] = 'CreditCreatureId';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.FOLLOW] = 'CreditType';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.FOLLOW] = 'Default is 0. When not 0, the follow will finish ONLY once the creature is within interaction distance (5 yards) of the given entry.';
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.FOLLOW] = 'The creature id that will be given as a quest credit when the follow has finished for whatever reason.';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.FOLLOW] = 'Requires the 4th parameter to be set and valid; ' +
  'determines whether the entry in parameter 4 is a monster kill or event happening. If you\'re not sure what they mean, read the `quest_template` wiki.';

// SMART_ACTION_RANDOM_PHASE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RANDOM_PHASE] = 'Set the creature\'s event phase (note: this is NOT the creature\'s actual phase!)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RANDOM_PHASE] = 'Phasemask 1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.RANDOM_PHASE] = 'Phasemask 2';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.RANDOM_PHASE] = 'Phasemask 3';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.RANDOM_PHASE] = 'Phasemask 4';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.RANDOM_PHASE] = 'Phasemask 5';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.RANDOM_PHASE] = 'Phasemask 6';

// SMART_ACTION_RANDOM_PHASE_RANGE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RANDOM_PHASE_RANGE] = 'Set the creature\'s event phase randomly between two values (this is NOT the creature\'s actual phase!)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RANDOM_PHASE_RANGE] = 'PhasemaskMin';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.RANDOM_PHASE_RANGE] = 'PhasemaskMax';

// SMART_ACTION_RESET_GOBJECT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RESET_GOBJECT] = 'Reset a gameobject, usually used to open/close a door (calls GameObject::ResetDoorOrButton)';

// SMART_ACTION_CALL_KILLEDMONSTER
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_KILLEDMONSTER] = 'Gives a kill credit to our (player) target. The entry is the same entry as quest_template.RequiredNpcOrGo(1/2/3/4).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_KILLEDMONSTER] = 'CreatureId';

// SMART_ACTION_SET_INST_DATA
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_INST_DATA] = 'Sets a certain instance data field to a specific value. ' +
  'This will be received and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_INST_DATA] = 'Field';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_INST_DATA] = 'Data';

// SMART_ACTION_SET_INST_DATA64
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_INST_DATA64] = 'Sets a certain instance data field to a specific value. ' +
  'This will be received and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_INST_DATA64] = 'Field';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_INST_DATA64] = 'Data';

// SMART_ACTION_UPDATE_TEMPLATE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.UPDATE_TEMPLATE] = 'Updates the creature\'s entry to a new one, making it become a completely different unit.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.UPDATE_TEMPLATE] = 'CreatureId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.UPDATE_TEMPLATE] = 'UpdateLevel';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.UPDATE_TEMPLATE]  = 'The creature entry we want to become (creature_template.entry)';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.UPDATE_TEMPLATE] = ''; // TODO

// SMART_ACTION_DIE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.DIE] = 'Instantly kills the target';

// SMART_ACTION_SET_IN_COMBAT_WITH_ZONE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_IN_COMBAT_WITH_ZONE] = 'Sets the creature in combat with its zone. Useful for bosses inside instances so all players will be set in combat until the fight ends.';

// SMART_ACTION_CALL_FOR_HELP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_FOR_HELP] = 'Makes the creature cry/call for help, ' +
  'which makes nearby creatures that are not yet in combat and are able to assist this creature, run to this creature and attack its attackers.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_FOR_HELP] = 'Radius';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CALL_FOR_HELP] = 'SayText';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.CALL_FOR_HELP]  = 'Radius in yards that other creatures must be to acknowledge the cry for help';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.CALL_FOR_HELP] = '0 or 1: whether or not we should automatically make the creature emote "NAME calls for help!"';

// SMART_ACTION_SET_SHEATH
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_SHEATH] = 'Set the sheathe state of the creature. The sheath state determines which weapon will be displayed on the model.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_SHEATH] = 'SheathState';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_SHEATH] = '0-unarmed, 1-melee, 2-ranged';

// SMART_ACTION_FORCE_DESPAWN
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.FORCE_DESPAWN] = 'Despawns the creature/gameobject within a given time (in milliseconds).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.FORCE_DESPAWN] = 'DespawnTime';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.FORCE_DESPAWN] = 'Milliseconds';

// SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_INVINCIBILITY_HP_LEVEL] = 'Sets the creature\'s invincibility health to a flat value or percentage. ' +
  'Either one of the parameters must be set (so not both), and you can not reverse this effect (both parameters at 0 will result in an error).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_INVINCIBILITY_HP_LEVEL] = 'Flat value';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_INVINCIBILITY_HP_LEVEL] = '% value';

// SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.MOUNT_TO_ENTRY_OR_MODEL] = 'Sets the mount model to the model given in the second parameter (or takes the model of the entry given in the first parameter). ' +
  'Only one parameter may be used at the same time.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.MOUNT_TO_ENTRY_OR_MODEL] = 'CreatureId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.MOUNT_TO_ENTRY_OR_MODEL] = 'ModelId';

// SMART_ACTION_SET_INGAME_PHASE_MASK
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_INGAME_PHASE_MASK] = 'Sets the ACTUAL phasemask of the creature. This is not the event phasemask, but the actual phasemask. ' +
  'Sets the phasemask column in the creature table in the world database.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_INGAME_PHASE_MASK] = 'Phasemask';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_INGAME_PHASE_MASK] = 'creature.Phasemask';

// SMART_ACTION_SET_DATA
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_DATA] = 'Calls SMART_EVENT_DATA_SET with given field and data, making it possible to communicate between different entries.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_DATA] = 'Field';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_DATA] = 'Data';

// SMART_ACTION_MOVE_FORWARD
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.MOVE_FORWARD] = 'Move a set amount of yards forward from the current position';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.MOVE_FORWARD] = 'Distance';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.MOVE_FORWARD] = 'Distance in yards';

// SMART_ACTION_SET_VISIBILITY
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_VISIBILITY] = 'Sets the visibility of the creature or gameobject';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_VISIBILITY] = 'Visible';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_VISIBILITY] = 'Makes creature Visible = 1 or Invisible = 0';

// SMART_ACTION_SET_ACTIVE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_ACTIVE] = 'If a creature or GO is set active it will stay active even if no player is near. ' +
  'WARNING: keeping them active needs additional resources (CPU/RAM), the grid where the creature or object is located cannot be unloaded and other objects/creatures nearby also stay active';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_ACTIVE] = 'Active';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_ACTIVE] = 'Can be 0 or 1';

// SMART_ACTION_ATTACK_START
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ATTACK_START] = 'Makes the creature start attacking the first unit it finds on the target list.';

// SMART_ACTION_SUMMON_GO
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SUMMON_GO] = 'Summon a gameobject entry. Use the Target to set the spawn position. ' +
  'If an entity is specified as target and also coordinates are set (target x,y,z), those coordinates are handled as offset from the target\'s position;';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SUMMON_GO] = 'GameobjectId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SUMMON_GO] = 'DespawnTime';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.SUMMON_GO] = 'SummonTarget';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SUMMON_GO] = 'Despawn time in seconds';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.SUMMON_GO] = 'If SummonTarget is 1, the target will summon the Gobject at the position of the actor';

// SMART_ACTION_KILL_UNIT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.KILL_UNIT] = 'Kills the unit target instantly';

// SMART_ACTION_ACTIVATE_TAXI
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ACTIVATE_TAXI] = 'Activates a taxipath of the given id for our (player) target.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ACTIVATE_TAXI] = 'TaxiId';

// SMART_ACTION_WP_START
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.WP_START] = 'Starts a waypoint using the `waypoints` table in the world database.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.WP_START] = 'Run';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.WP_START] = 'Waypoint';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.WP_START] = 'Repeat';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.WP_START] = 'QuestId';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.WP_START] = 'DespawnTime';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.WP_START] = 'ReactState';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.WP_START]  = '0 = the creature will follow the path walking at a normal speed; 1 = it will be running at a higher speed';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.WP_START] = 'waypoints.entry';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.WP_START] = 'Repeat the path when the it\'s finished';
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.WP_START] = 'Quest entry to give credit for once the path has finished. Will use the target type and take all player entities from this list';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.WP_START] = 'Time in milliseconds to wait after the path ended before we despawn';
SAI_ACTION_PARAM6_TOOLTIPS[SAI_ACTIONS.WP_START] = 'ReactState that is set when the waypoint starts';

// SMART_ACTION_WP_PAUSE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.WP_PAUSE] = 'Pauses the waypoint path the creature is currently following for a specific time (milliseconds).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.WP_PAUSE] = 'Time';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.WP_PAUSE] = TIME_IN_MILLISECONDS_TOOLTIP;

// SMART_ACTION_WP_STOP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.WP_STOP] = 'Stops the waypoint path the creature is currently following. Also allows you to specify a despawn time from that point on as well as which quest id should be counted as \'fail\' (or not, based on the third parameter).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.WP_STOP] = 'DespawnTime';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.WP_STOP] = 'QuestId';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.WP_STOP] = 'FailQuest';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.WP_STOP]  = 'Time in milliseconds after which the creature despawns when the path was stopped';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.WP_STOP] = 'Quest entry to count as \'failed\' (based on third parameter). Does not have to be set if third parameter is set to 0.';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.WP_STOP] = 'If set to 1, we will mark the quest in parameter 2 to failed for our player targets.';

// SMART_ACTION_ADD_ITEM
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_ITEM] = 'Adds item(s) to our player target.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_ITEM] = 'ItemId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.ADD_ITEM] = 'Count';

// SMART_ACTION_REMOVE_ITEM
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_ITEM] = 'Removes item(s) from our player target.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_ITEM] = 'ItemId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.REMOVE_ITEM] = 'Count';

// SMART_ACTION_INSTALL_AI_TEMPLATE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.INSTALL_AI_TEMPLATE] = 'Installs a SmartAI template which are basically pre-defined scripts for scripts that are used in a lot of cases. Thing of casters with specific spells, passive, turrets, etc.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.INSTALL_AI_TEMPLATE] = 'TemplateId';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.INSTALL_AI_TEMPLATE] = 'http://www.azerothcore.org/wiki/smart_scripts#predefined-sai-templates';
// TODO

// SMART_ACTION_SET_RUN
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_RUN] = 'Sets running flag on or off.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_RUN] = 'On';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_RUN] = '0 = off; 1 = on';

// SMART_ACTION_SET_FLY
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_FLY] = 'Sets flying flag on or off.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_FLY] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_RUN];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_FLY] = SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_RUN];

// SMART_ACTION_SET_SWIM
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_SWIM] = 'Sets swimming flag on or off.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_SWIM] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_RUN];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_SWIM] = SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_RUN];

// SMART_ACTION_TELEPORT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.TELEPORT] = 'Teleports the target to a specific map using coordinates in the target X/Y/Z/O fields. Note: May NOT use SMART_TARGET_POSITION (8)!';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.TELEPORT] = 'MapId';

// SMART_ACTION_SET_COUNTER
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_COUNTER] = 'Stores a decimal variable (number) under a variable id to store information for the creature during runtime.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_COUNTER] = 'CounterId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_COUNTER] = 'Value';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.SET_COUNTER] = 'Reset';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.SET_COUNTER] = 'can be 0 or 1';

// SMART_ACTION_STORE_TARGET_LIST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.STORE_TARGET_LIST] = 'Stores a list of targets under a variable id so it can later be read again.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.STORE_TARGET_LIST] = 'VarId';

// SMART_ACTION_WP_RESUME
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.WP_RESUME] = 'Resumes the waypoint path the creature was previously following.';

// SMART_ACTION_SET_ORIENTATION
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_ORIENTATION] = 'Sets the orientation of the creature to a given value. Must use SMART_TARGET_POSITION. If you, however, want the creature to face its spawn/home position, you can just use SMART_TARGET_SELF and leave all parameters at 0.';

// SMART_ACTION_CREATE_TIMED_EVENT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'Calls SMART_EVENT_UPDATE after a specific time with given parameters.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'EventId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'InitialMin';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'InitialMax';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'RepeatMin';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'RepeatMax';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'Chance';
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.CREATE_TIMED_EVENT] = 'Set this ONLY if the event repeats';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.CREATE_TIMED_EVENT] = SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.CREATE_TIMED_EVENT];

// SMART_ACTION_PLAYMOVIE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.PLAYMOVIE] = 'Plays a movie of a given entry.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.PLAYMOVIE] = 'MovieEntry';

// SMART_ACTION_MOVE_TO_POS
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.MOVE_TO_POS] = 'PointId is called by SMART_EVENT_MOVEMENTINFORM. Continue this action with the TARGET_TYPE column. Use any target_type, and use target_x, target_y, target_z as the coordinates; if an entity is specified as target and also coordinates are set (target x,y,z) those coordinates are handled as offset from the target\'s position';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.MOVE_TO_POS] = 'PointId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.MOVE_TO_POS] = 'isTransport';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.MOVE_TO_POS] = 'isControlled';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.MOVE_TO_POS] = 'ContactDistance';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.MOVE_TO_POS] = BOOLEAN_VALUE_TOOLTIP;
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.MOVE_TO_POS] = BOOLEAN_VALUE_TOOLTIP;

// SMART_ACTION_RESPAWN_TARGET
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RESPAWN_TARGET] = 'Respawns the target. Only works for gameobject target. Action does not actually respawn the target, it just sets the respawn time of the target, but this is how gameobject respawning is handled.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RESPAWN_TARGET] = 'RespawnTime';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.RESPAWN_TARGET] = TIME_IN_MILLISECONDS_TOOLTIP;

// SMART_ACTION_EQUIP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.EQUIP] = 'Set the creature\'s equipment template to a certain entry. If no entry (first parameter) is set, it will set the three item entries which are ordered by slot (param3 is main-hand, param4 is off-hand, param5 is gun/bow/etc). The slotmask (param2) value is 0 by default and goes by bits, so if it\'s \'2\' it will only show the off-hand weapon (bits are 1, 2 and 4). Having 0 defaults to 7, so all slots.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.EQUIP] = 'EquipTemplateId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.EQUIP] = 'Slotmask';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.EQUIP] = 'ItemId 1';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.EQUIP] = 'ItemId 2';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.EQUIP] = 'ItemId 3';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.EQUIP]  = 'Entry of creature_equip_template. If left at 0, either parameter 3, 4 or 5 (or all, or just two) must be filled in with item entries to equip.';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.EQUIP] = 'Slotmask we show. Default is 0 and means all items are shown. If you only want to show one specific item (or two instead of all three), this field should be used as a bitmask starting at 1. Possible bits are 1, 2 and 4.';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.EQUIP] = 'ItemId one (main hand slot) (only has use if the first parameter is 0)';
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.EQUIP] = 'ItemId two (off hand slot) (only has use if the first parameter is 0)';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.EQUIP] = 'ItemId three (gun/bow/etc. slot) (only has use if the first parameter is 0)';

// SMART_ACTION_CLOSE_GOSSIP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CLOSE_GOSSIP] = 'Closes the currently opened gossip to our player target.';

// SMART_ACTION_TRIGGER_TIMED_EVENT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.TRIGGER_TIMED_EVENT] = 'Calls SMART_EVENT_TIMED_EVENT_TRIGGERED with a given id.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.TRIGGER_TIMED_EVENT] = 'EventId';

// SMART_ACTION_REMOVE_TIMED_EVENT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_TIMED_EVENT] = 'Interrupts the timed event called from SMART_ACTION_TRIGGER_TIMED_EVENT. 0 is NOT a proper value!';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_TIMED_EVENT] = 'EventId';

// SMART_ACTION_ADD_AURA
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_AURA] = 'Adds aura to player(s). Use target_type 17 to make AoE aura.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_AURA] = 'SpellId';

// SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.OVERRIDE_SCRIPT_BASE_OBJECT] = 'Overrides the current creature\'s/gameobject\'s script to a new source using the targettype. If more than one target is specified, the first on the list will be used.';

// SMART_ACTION_RESET_SCRIPT_BASE_OBJECT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RESET_SCRIPT_BASE_OBJECT] = 'Resets the script of the source to its original state. Only useful after SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT was called (because we store the original guid when doing this).';

// SMART_ACTION_CALL_SCRIPT_RESET
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_SCRIPT_RESET] = 'Calls SMART_EVENT_RESET (only calls this, doesn\'t actually reset the creature/gameobject).';

// SMART_ACTION_SET_RANGED_MOVEMENT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_RANGED_MOVEMENT] = 'Sets the creature\'s attack distance and angle to chase its target with. The distance (first parameter) is the minimum distance it will keep away from its target during combat.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_RANGED_MOVEMENT] = 'AttackDistance';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_RANGED_MOVEMENT] = 'AttackAngle';

// SMART_ACTION_CALL_TIMED_ACTIONLIST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_TIMED_ACTIONLIST] = 'Calls a script for the source with a given entry.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_TIMED_ACTIONLIST] = 'ScriptEntry';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CALL_TIMED_ACTIONLIST] = 'TimerType';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.CALL_TIMED_ACTIONLIST] = 'EntryOrGuid * 100 (entryorguid with 00 added after the entry, or 01, 02, 03 etc. for multiple action lists)';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.CALL_TIMED_ACTIONLIST] = 'The timer update type. If set to 0, the script will only occur out of combat. If set to 1, it will only occur during combat and if set to 2 it will always occur.';

// SMART_ACTION_SET_NPC_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_NPC_FLAG] = 'Set the npc flags of the target (using creature_template.npcflag)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_NPC_FLAG] = 'NpcFlags';

// SMART_ACTION_ADD_NPC_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_NPC_FLAG] = 'Adds npc flags of the target (using creature_template.npcflag)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_NPC_FLAG] = 'NpcFlags';

// SMART_ACTION_REMOVE_NPC_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_NPC_FLAG] = 'Removes npc flags of the target (using creature_template.npcflag)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_NPC_FLAG] = 'NpcFlags';
// TODO: flag selector?

// SMART_ACTION_SIMPLE_TALK
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SIMPLE_TALK] = 'Makes a player say text (just like SMART_ACTION_TALK, except that it makes the player target say it). ' +
  'Does NOT trigger SMART_EVENT_TEXT_OVER.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SIMPLE_TALK] = 'GroupId';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SIMPLE_TALK] = 'creature_text.GroupID';

// SMART_ACTION_INVOKER_CAST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.INVOKER_CAST] = 'Make our action invoker type cast a spell to our target type';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.INVOKER_CAST] = 'SpellId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.INVOKER_CAST] = 'CastFlags';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.INVOKER_CAST] = 'TriggeredFlags';

// SMART_ACTION_CROSS_CAST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CROSS_CAST] = 'Make the specified target type (in parameters) cast a spell to our target type';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CROSS_CAST] = 'SpellId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CROSS_CAST] = 'CastFlags';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.CROSS_CAST] = 'CasterTargetType';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.CROSS_CAST] = 'CasterTarget1';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.CROSS_CAST] = 'CasterTarget2';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.CROSS_CAST] = 'CasterTarget3';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.CROSS_CAST] = 'The caster is selected here, use it as target_type';
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.CROSS_CAST] = 'target_param1';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.CROSS_CAST] = 'target_param2';
SAI_ACTION_PARAM6_TOOLTIPS[SAI_ACTIONS.CROSS_CAST] = 'target_param3';

// SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'Calls a random script for the source with given entries';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'ScriptId 1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'ScriptId 2';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'ScriptId 3';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'ScriptId 4';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'ScriptId 5';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = 'ScriptId 6';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;
SAI_ACTION_PARAM4_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;
SAI_ACTION_PARAM6_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;

// SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_RANGE_TIMED_ACTIONLIST] = 'Calls a random script between two values for the source with given entries. ' +
  'So if parameter 1 is 500 and parameter 2 is 550, a script will randomly be picked between 500 and 550.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.CALL_RANDOM_RANGE_TIMED_ACTIONLIST] = 'ScriptId 1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.CALL_RANDOM_RANGE_TIMED_ACTIONLIST] = 'ScriptId 2';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_RANGE_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.CALL_RANDOM_RANGE_TIMED_ACTIONLIST] = ENTRYORGUID_100_N_TOOLTIP;

// SMART_ACTION_RANDOM_MOVE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RANDOM_MOVE] = 'Creature moves to A random position in given radius.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RANDOM_MOVE] = 'Radius';

// SMART_ACTION_SET_UNIT_FIELD_BYTES_1
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1] = 'Set the unit field bytes 1 flags of the target to a specific value';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1] = 'UnitFieldBytes';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1] = 'Type';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1] = '0 = targets the stand states (stand/sit/sleep/etc..); ' +
  '1 = targets something talent-related for pets; 2 = targets the stand flags (creep/untrackable/etc..); 3 = targets the stand misc. flags (hover/always-stand/etc..)';

// SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_UNIT_FIELD_BYTES_1] = 'Removes specific unit field bytes 1 flags of the target';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_UNIT_FIELD_BYTES_1] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1];
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.REMOVE_UNIT_FIELD_BYTES_1] = SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1];
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.REMOVE_UNIT_FIELD_BYTES_1] = SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SET_UNIT_FIELD_BYTES_1];

// SMART_ACTION_INTERRUPT_SPELL
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.INTERRUPT_SPELL] = 'This action allows you to interrupt the current spell being cast. ' +
  'If you do not set the spellId, the core will find the current spell depending on the withDelay and the withInstant values.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.INTERRUPT_SPELL] = 'WithDelay';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.INTERRUPT_SPELL] = 'SpellId';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.INTERRUPT_SPELL] = 'Instant';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.INTERRUPT_SPELL] = BOOLEAN_VALUE_TOOLTIP;
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.INTERRUPT_SPELL] = 'If left at 0, the core will interrupt the currently being cast spell (based on the with-delay and instant parameters)';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.INTERRUPT_SPELL] = BOOLEAN_VALUE_TOOLTIP;

// SMART_ACTION_SEND_GO_CUSTOM_ANIM
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SEND_GO_CUSTOM_ANIM] = 'Sends a custom gameobject animation from the target';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SEND_GO_CUSTOM_ANIM] = 'Animation';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SEND_GO_CUSTOM_ANIM] = '0-255';

// SMART_ACTION_SET_DYNAMIC_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_DYNAMIC_FLAG] = 'Sets the dynamic flags of the target to a specific value';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_DYNAMIC_FLAG] = 'DynamicFlags';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_DYNAMIC_FLAG] = DYNAMIC_FLAGS_TOOLTIP;

// SMART_ACTION_ADD_DYNAMIC_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_DYNAMIC_FLAG] = 'Adds dynamic flags to the current value of the target';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_DYNAMIC_FLAG] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_DYNAMIC_FLAG];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.ADD_DYNAMIC_FLAG] = DYNAMIC_FLAGS_TOOLTIP;

// SMART_ACTION_REMOVE_DYNAMIC_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_DYNAMIC_FLAG] = 'Removes specific dynamic flags of the target\'s current dynamic flags';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_DYNAMIC_FLAG] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_DYNAMIC_FLAG];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.REMOVE_DYNAMIC_FLAG] = DYNAMIC_FLAGS_TOOLTIP;

// SMART_ACTION_JUMP_TO_POS
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.JUMP_TO_POS] = 'Jump to a given position with a given speed. Must use SMART_TARGET_POSITION with this action_type. ' +
  'If selfJump is 1 the actor will jump to the target (you can add an offset from the target\'s position by also specifying target coordinates); ' +
  'if selfJump is 0 the targeted creature will jump to the target position';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.JUMP_TO_POS] = 'Speed XY';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.JUMP_TO_POS] = 'Speed Z';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.JUMP_TO_POS] = 'SelfJump';
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.JUMP_TO_POS] = BOOLEAN_VALUE_TOOLTIP;

// SMART_ACTION_SEND_GOSSIP_MENU
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SEND_GOSSIP_MENU] = 'Sends a specific gossip menu to a player which will then be opened for this player';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SEND_GOSSIP_MENU] = 'GossipMenuId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SEND_GOSSIP_MENU] = 'NpcTextId';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SEND_GOSSIP_MENU] = 'gossip_menu.MenuID';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SEND_GOSSIP_MENU] = 'Uses the `id` value from the `npc_text` table in the world database';

// SMART_ACTION_GO_SET_LOOT_STATE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.GO_SET_LOOT_STATE] = 'Sets the gameobject\'s loot state to a given value';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.GO_SET_LOOT_STATE] = 'LootState';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.GO_SET_LOOT_STATE] = '0 - Not ready, 1 - Ready, 2 - Activated, 3 - Just deactivated';

// SMART_ACTION_SEND_TARGET_TO_TARGET
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SEND_TARGET_TO_TARGET] = 'Sends a stored target id to our given target type. The id comes from SMART_ACTION_STORE_TARGET and can be used with SMART_TARGET_STORED';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SEND_TARGET_TO_TARGET] = 'TargetId';

// SMART_ACTION_SET_HOME_POS
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_HOME_POS] = 'Sets the home position of the source to a new position. ' +
  'The home position is the position the creature runs to when evading/resetting/etc. Uses the target type to determine the new home position.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_HOME_POS] = 'FromDB';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_HOME_POS] = '0: if the target is a creature, set it\'s current position as it\'s new home position; ' +
  'if the target is SMART_TARGET_POSITION, use this position as new home position for the actor\n' +
  '1: if the target is a creature, reset it\'s home position to the one from the DB; ' +
  'if the target is SMART_TARGET_POSITION, reset the actor\'s home position to the one from the DB (the actual values of the target position are ignored)';

// SMART_ACTION_SET_HEALTH_REGEN
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_HEALTH_REGEN] = 'Turns the health regeneration of the creature on or off';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_HEALTH_REGEN] = 'On';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_HEALTH_REGEN] = BOOLEAN_VALUE_TOOLTIP;

// SMART_ACTION_SET_ROOT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_ROOT] = 'Roots or unroots the creature (or player target).';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_ROOT] = 'Root';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_ROOT] = BOOLEAN_VALUE_TOOLTIP;

// SMART_ACTION_SET_GO_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_GO_FLAG] = 'Sets the gameobject\'s flags to a specific value (oldFlag = newFlag)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_GO_FLAG] = 'GameobjectFlags';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_GO_FLAG] = 'gameobject_template_addon.flags';

// SMART_ACTION_ADD_GO_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_GO_FLAG] = 'Adds specific flags to the gameobject\'s flags field (oldFlag |= newFlag)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_GO_FLAG] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_GO_FLAG];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.ADD_GO_FLAG] = SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_GO_FLAG];

// SMART_ACTION_REMOVE_GO_FLAG
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_GO_FLAG] = 'Removes specific flags from the gameobject\'s flags field (oldFlag &= ~newFlag)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_GO_FLAG] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_GO_FLAG];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.REMOVE_GO_FLAG] = SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SET_GO_FLAG];

// SMART_ACTION_SUMMON_CREATURE_GROUP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = 'Summon a set of creatures in once using the creature_summon_groups table of the world database. Target has no effect here.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = 'GroupId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = 'AttackInvoker';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = 'AttackScriptOwner';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = 'creature_summon_groups.groupId';
SAI_ACTION_PARAM2_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = BOOLEAN_VALUE_TOOLTIP;
SAI_ACTION_PARAM3_TOOLTIPS[SAI_ACTIONS.SUMMON_CREATURE_GROUP] = BOOLEAN_VALUE_TOOLTIP;

// SMART_ACTION_SET_POWER
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_POWER] = 'Sets the value of a given power type to a specific value';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_POWER] = 'PowerType';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_POWER] = 'PowerValue';

// SMART_ACTION_ADD_POWER
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_POWER] = 'Adds a given value to a given power type';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_POWER] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_POWER];
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.ADD_POWER] = SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_POWER];

// SMART_ACTION_REMOVE_POWER
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_POWER] = 'Removes a given value from a given power type';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_POWER] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_POWER];
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.REMOVE_POWER] = SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_POWER];

// SMART_ACTION_GAME_EVENT_STOP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.GAME_EVENT_STOP] = 'Stops a game event with specified id (game_event.eventEntry)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.GAME_EVENT_STOP] = 'EventId';
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.GAME_EVENT_STOP] = 'game_event.eventEntry';

// SMART_ACTION_GAME_EVENT_START
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.GAME_EVENT_START] = 'Starts a game event with specified id (game_event.eventEntry)';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.GAME_EVENT_START] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.GAME_EVENT_STOP];
SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.GAME_EVENT_START] = SAI_ACTION_PARAM1_TOOLTIPS[SAI_ACTIONS.GAME_EVENT_STOP];

// SMART_ACTION_START_CLOSEST_WAYPOINT
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Starts moving by the closest waypoint it can find. Parameters allow to give up to 6 waypoints and it will start the closest.';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Waypoint 1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Waypoint 2';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Waypoint 3';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Waypoint 4';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Waypoint 5';
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.START_CLOSEST_WAYPOINT] = 'Waypoint 6';

// SMART_ACTION_RISE_UP
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RISE_UP] = 'Move up for the specified distance';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RISE_UP] = 'Distance';

// SMART_ACTION_RANDOM_SOUND
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RANDOM_SOUND] = 'Play a random sound';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SOUND] = 'SoundId1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SOUND] = 'SoundId2';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.SOUND] = 'SoundId3';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.SOUND] = 'SoundId4';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.SOUND] = 'OnlySelf';
SAI_ACTION_PARAM5_TOOLTIPS[SAI_ACTIONS.SOUND] = 'If 0, everybody within the visibility range will hear the sound';

// SMART_ACTION_SET_SIGHT_DIST
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_SIGHT_DIST] = 'SET_SIGHT_DIST';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_SIGHT_DIST] = 'SightDistance';

// SMART_ACTION_FLEE
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.FLEE] = 'FLEE';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.FLEE] = 'FleeTime';

// SMART_ACTION_ADD_THREAT
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_THREAT] = 'ADD_THREAT';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_THREAT] = '+Threat';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_THREAT] = '-Threat';

// SMART_ACTION_LOAD_EQUIPMENT
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.LOAD_EQUIPMENT] = 'LOAD_EQUIPMENT';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.LOAD_EQUIPMENT] = 'Id';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.LOAD_EQUIPMENT] = 'Force';

// SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.TRIGGER_RANDOM_TIMED_EVENT] = 'TRIGGER_RANDOM_TIMED_EVENT';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.TRIGGER_RANDOM_TIMED_EVENT] = 'IdMinRange';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.TRIGGER_RANDOM_TIMED_EVENT] = 'IdMaxRange';

// SMART_ACTION_REMOVE_ALL_GAMEOBJECTS
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_ALL_GAMEOBJECTS] = 'REMOVE_ALL_GAMEOBJECTS';

/*** AC-only Actions below ***/

// SMART_ACTION_MOVE_TO_POS_TARGET
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.MOVE_TO_POS_TARGET] = 'MOVE_TO_POS_TARGET';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.MOVE_TO_POS_TARGET] = 'PointId';

// SMART_ACTION_SET_GO_STATE
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_GO_STATE] = 'SET_GO_STATE';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_GO_STATE] = 'State';

// SMART_ACTION_EXIT_VEHICLE
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.EXIT_VEHICLE] = 'EXIT_VEHICLE';

// SMART_ACTION_SET_UNIT_MOVEMENT_FLAGS
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_UNIT_MOVEMENT_FLAGS] = 'SET_UNIT_MOVEMENT_FLAGS';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_UNIT_MOVEMENT_FLAGS] = 'Flags';

// SMART_ACTION_SET_COMBAT_DISTANCE
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_COMBAT_DISTANCE] = 'SET_COMBAT_DISTANCE';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_COMBAT_DISTANCE] = 'CombatDistance';

// SMART_ACTION_SET_CASTER_COMBAT_DIST
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_CASTER_COMBAT_DIST] = 'SET_CASTER_COMBAT_DIST';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_CASTER_COMBAT_DIST] = 'FollowDistance';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.SET_CASTER_COMBAT_DIST] = 'ResetToMax';

// SMART_ACTION_SET_HOVER
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_HOVER] = 'SET_HOVER';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_HOVER] = 'On';

// SMART_ACTION_ADD_IMMUNITY
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ADD_IMMUNITY] = 'ADD_IMMUNITY';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_IMMUNITY] = 'Type';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.ADD_IMMUNITY] = 'Id';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.ADD_IMMUNITY] = 'Value';

// SMART_ACTION_REMOVE_IMMUNITY
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.REMOVE_IMMUNITY] = 'REMOVE_IMMUNITY';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.REMOVE_IMMUNITY] = SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.ADD_IMMUNITY];
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.REMOVE_IMMUNITY] = SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.ADD_IMMUNITY];
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.REMOVE_IMMUNITY] = SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.ADD_IMMUNITY];

// SMART_ACTION_FALL
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.FALL] = 'FALL';

// SMART_ACTION_SET_EVENT_FLAG_RESET
// SAI_ACTION_TOOLTIPS[SAI_ACTIONS.SET_EVENT_FLAG_RESET] = 'SET_EVENT_FLAG_RESET';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.SET_EVENT_FLAG_RESET] = 'On';

// SMART_ACTION_STOP_MOTION
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.STOP_MOTION] = 'STOP_MOTION';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.STOP_MOTION] = 'StopMoving';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.STOP_MOTION] = 'MovementExpired';

// SMART_ACTION_NO_ENVIRONMENT_UPDATE
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.NO_ENVIRONMENT_UPDATE] = 'NO_ENVIRONMENT_UPDATE';

// SMART_ACTION_ZONE_UNDER_ATTACK
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.ZONE_UNDER_ATTACK] = 'ZONE_UNDER_ATTACK';

// SMART_ACTION_LOAD_GRID
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.LOAD_GRID] = 'LOAD_GRID';

// SMART_ACTION_MUSIC
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.MUSIC] = 'MUSIC';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.MUSIC] = 'SoundId';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.MUSIC] = 'OnlySelf';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.MUSIC] = 'Type';

// SMART_ACTION_RANDOM_MUSIC
SAI_ACTION_TOOLTIPS[SAI_ACTIONS.RANDOM_MUSIC] = 'RANDOM_MUSIC';
SAI_ACTION_PARAM1_NAMES[SAI_ACTIONS.RANDOM_MUSIC] = 'SoundId 1';
SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.RANDOM_MUSIC] = 'SoundId 2';
SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.RANDOM_MUSIC] = 'SoundId 3';
SAI_ACTION_PARAM4_NAMES[SAI_ACTIONS.RANDOM_MUSIC] = 'SoundId 4';
SAI_ACTION_PARAM5_NAMES[SAI_ACTIONS.RANDOM_MUSIC] = SAI_ACTION_PARAM2_NAMES[SAI_ACTIONS.MUSIC];
SAI_ACTION_PARAM6_NAMES[SAI_ACTIONS.RANDOM_MUSIC] = SAI_ACTION_PARAM3_NAMES[SAI_ACTIONS.MUSIC];
