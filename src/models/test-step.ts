import { Entity } from './entity';
export class TestStep extends Entity{
    id: string;
    testcaseid: string;
    name: string;
    action: string;
    input: KeyValuePair[];
    validation: KeyValuePair[];
    tags: any[];
    active: boolean;
  }

interface KeyValuePair {
    key: string;
    value: string;
}
