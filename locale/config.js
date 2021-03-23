// Greek Day.js locale

const texts = {
    s: 'μερικά δευτερόλεπτα',
    m: 'ένα λεπτό',
    mm: '%d λεπτά',
    h: 'μία ώρα',
    hh: '%d ώρες',
    d: 'μία μέρα',
    dd: '%d μέρες',
    M: 'ένα μήνα',
    MM: '%d μήνες',
    y: 'ένα χρόνο',
    yy: '%d χρόνια'
}

function relativeTimeFormatter(number, withoutSuffix, key) {
  let l = texts[key]
  if (Array.isArray(l)) {
    l = l[withoutSuffix ? 0 : 1]
  }
  return l.replace('%d', number)
}

dayjs.locale({
    name: 'de',
    weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    months: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ'.split('_'),
    ordinal: n => `${n}.`,
    weekStart: 1,
    formats: {
      LTS: 'HH:mm:ss',
      LT: 'HH:mm',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    relativeTime: {
      future: 'σε %s',
      past: 'πριν από %s',
      s: relativeTimeFormatter,
      m: relativeTimeFormatter,
      mm: relativeTimeFormatter,
      h: relativeTimeFormatter,
      hh: relativeTimeFormatter,
      d: relativeTimeFormatter,
      dd: relativeTimeFormatter,
      M: relativeTimeFormatter,
      MM: relativeTimeFormatter,
      y: relativeTimeFormatter,
      yy: relativeTimeFormatter
    }
})