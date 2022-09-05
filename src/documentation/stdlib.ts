
import docEntries from './stdlib-data';

const stdlib = new Map();

for (let entry of docEntries) {
    if (entry.type === 'definition') {
        stdlib.set(entry.name, entry.docstring);
    }
}

export default stdlib;