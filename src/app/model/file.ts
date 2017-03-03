

export class File {
    id: number;
    path: string;
    name: string;
    reference: string;
    description: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
        let file = new File({
        });

    }
}