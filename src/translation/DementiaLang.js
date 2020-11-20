import LocalizedStrings from 'react-localization';
import english from './EN/Dementia_en.js'
import korean from './KO/Dementia_ko.js'
import chinese from './CH/Dementia_ch.js'

let strings = new LocalizedStrings({
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 