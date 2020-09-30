import {Entity} from './entity';

export class Execution extends Entity {
    runid: string;
    name: string;
    description: string;
    agent: string;
    suiteid: string;
    schedule: string; //once , daily , weekkly , monthly
    date: Date;
    testcasefilter: string[];
    teststepfilter: string[];
    continueprevexecution: boolean;
    option: string; // All , Failed
    runby: string;
    status: string; //scheduled, running, completed
  }
