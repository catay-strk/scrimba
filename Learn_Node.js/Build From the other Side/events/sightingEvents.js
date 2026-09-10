import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'

/*
Challenge 1
1. Create and export a new instance of EventEmitter called ‘sightingEvents’.
2. Register the listener function when an event called ‘sighting-added’ is detected. 
*/
// create the emitter
export const sightingEvents = new EventEmitter()
// register the listener
sightingEvents.on('sighting-added', createAlert)