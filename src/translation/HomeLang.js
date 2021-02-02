import LocalizedStrings from 'react-localization';
import english from './EN/Home_en.js'
import korean from './KO/Home_ko.js'
import chinese from './CH/Home_ch.js'

let strings = new LocalizedStrings({
    null: english,
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 