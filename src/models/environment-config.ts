import {Entity} from './entity';

export class Configuration {
    id: string;
    name: string;
    configtype: string;
    environment: string;
    componentlib: string;
    config: KeyValuePair;
}



interface KeyValuePair {
    key: string;
    value: string;
}
