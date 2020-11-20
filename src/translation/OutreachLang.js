import LocalizedStrings from 'react-localization';
import english from './EN/Outreach_en.js'
import korean from './KO/Outreach_ko.js'
import chinese from './CH/Outreach_ch.js'

let strings = new LocalizedStrings({
    null: english,
    en: english,
    ko: korean,
    ch: chinese,
});

export default strings 