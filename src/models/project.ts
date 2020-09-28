import {Entity} from './entity';

export class Project extends Entity {
    name: string;
    description: string;
    active: boolean;
    components: any[];
  }
