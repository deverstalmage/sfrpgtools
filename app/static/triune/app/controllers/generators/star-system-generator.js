import Controller from '@ember/controller';
import { storageFor } from 'ember-local-storage';

import {
  mainStars,
  giantStars,
  supergiantStars,
  otherStars,
  systemlessObjects,
  starModifiers,
  terrestrialLife,
  terrestrialNonLife,
  artificialWorlds,
  gasGiants,
  worldModifiers,
  lifeMoons,
  nonLifeMoons,
  artificialSatellites,
  atmosphereType,
  atmosphereMods,
  safeGases,
  gasGiantGases,
  corrosiveGases,
  toxicGases,
  biomes,
  planetBiomes,
} from 'triune/data';

import {
  createFilledArray,
  randomWeightedChoice,
} from 'triune/utils';

export default Controller.extend({
  systems: storageFor('star-systems'),

  generateStar(includeSystemless) {
    let stars = [...mainStars, ...giantStars, ...supergiantStars, ...otherStars];
    if (includeSystemless) stars = stars.concat(systemlessObjects);

    let weights = [

    ]
  },

  clear() {
    this.systems.reset();
  },

  generate() {
    this.systems.insertAt(0, {
    });
  },
});
