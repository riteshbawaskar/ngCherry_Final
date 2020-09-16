import {Entity} from './entity';

export class Action extends Entity {
    id: string;
    componentId: string;
    name: string;
    description: string;
    input: any[];
    validation: any[];

  }