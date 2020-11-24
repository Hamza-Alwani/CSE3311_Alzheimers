import LocalizedStrings from 'react-localization';
import english from './EN/Research_en.js'
import korean from './KO/Research_ko.js'
import chinese from './CH/Research_ch.js'

let strings = new LocalizedStrings({
    null: english,
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 