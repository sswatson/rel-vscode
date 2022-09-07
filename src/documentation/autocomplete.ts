
import docEntries from './stdlib-data';
import unicodeEntries from './unicode-data';

const completions = new Map();

for (let entry of docEntries) {
    if (entry.type === 'definition') {
        completions.set(entry.name, entry.docstring);
    }
}

for (let entry of unicodeEntries) {
    completions.set(entry.label, entry.info);
}

export default completions;