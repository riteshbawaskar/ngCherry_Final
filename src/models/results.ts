import {Entity} from './entity';

export class Results extends Entity {
    runid: string;
    testcaseid: string;
    suiteid: string;
    stepid: string
    stepresult: {string,string}
    
  }
