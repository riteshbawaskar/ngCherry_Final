import {Entity} from './entity';

export class Action extends Entity {
    componentName: string;
    name: string;
    description: string;
    input: any[];
    validation: any[];

  }