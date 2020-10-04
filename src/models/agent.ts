import {Entity} from './entity';

export class Agent extends Entity {
    name: string;
    description: string;
    machinename: string;
    status: string; //available, busy, error.
    
  }