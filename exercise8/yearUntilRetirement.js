import { calculateAge } from './calculateAge.js';

export const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`Hallo nama saya ${firstName}, umur saya ${retirement} tahun`);
  } else {
    console.log(`Hallo nama saya ${firstName}, sudah pensiun.`);
  }
};