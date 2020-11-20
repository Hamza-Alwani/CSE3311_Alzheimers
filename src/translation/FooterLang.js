import LocalizedStrings from 'react-localization';
import english from './EN/Footer_en.js'
import korean from './KO/Footer_ko.js'
import chinese from './CH/Footer_ch.js'

let strings = new LocalizedStrings({
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 