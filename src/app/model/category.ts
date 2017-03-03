import { File } from './file'

export class Category {

    id: number;
    label: string = '';
    files: File[];
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
