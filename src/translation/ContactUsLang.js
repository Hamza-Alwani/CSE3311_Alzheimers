import LocalizedStrings from 'react-localization';
import english from './EN/ContactUs_en.js'
import korean from './KO/ContactUs_ko.js'
import chinese from './CH/ContactUs_ch.js'

let strings = new LocalizedStrings({
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 