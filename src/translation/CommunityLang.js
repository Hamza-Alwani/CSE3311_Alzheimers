import LocalizedStrings from 'react-localization';
import english from './EN/Community_en.js'
import korean from './KO/Community_ko.js'
import chinese from './CH/Community_ch.js'

let strings = new LocalizedStrings({
    null: english,
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 