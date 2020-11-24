import LocalizedStrings from 'react-localization';
import english from './EN/Welcome_en.js'
import korean from './KO/Welcome_ko.js'
import chinese from './CH/Welcome_ch.js'

let strings = new LocalizedStrings({
    null: english,
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 