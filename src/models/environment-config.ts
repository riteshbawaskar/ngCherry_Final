import {Entity} from './entity';

export class EnvironmentConfig extends Entity {
    componentid: string;
    environmentid: string;
    config: KeyValuePair[];
}


interface KeyValuePair {
    key: string;
    value: string;
}
