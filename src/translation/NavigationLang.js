import LocalizedStrings from 'react-localization';
import english from './EN/Navigation_en.js'
import korean from './KO/Navigation_ko.js'
import chinese from './CH/Navigation_ch.js'

let strings = new LocalizedStrings({
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 