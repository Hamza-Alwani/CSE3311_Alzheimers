import LocalizedStrings from 'react-localization';
import english from './EN/AboutUs_en.js'
import korean from './KO/AboutUs_ko.js'
import chinese from './CH/AboutUs_ch.js'

let strings = new LocalizedStrings({
    null: english,
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 