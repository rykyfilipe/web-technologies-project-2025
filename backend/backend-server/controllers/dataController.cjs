/** @format */

const fs = require('fs').promises;
const path = require('path');

async function interpretData(an) {
  const filePath = path.join(__dirname, '..', 'data', 'data.csv');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const results = lines.slice(1).map((line) => {
      const values = line.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index]?.trim() || null;
      });

      // Convertim "won" în boolean
      if (obj['won'] === 'True') obj['won'] = true;
      else if (obj['won'] === 'False') obj['won'] = false;

      // Convertim "an" în număr, dacă există
      let firstColumn = obj[headers[0]]; // adică prima coloană

      if (firstColumn) {
        yearMatch = firstColumn.match(/^(\d{4})/);
      }
      if (yearMatch) {
        obj['year'] = Number(yearMatch[1]);
      } else {
        obj['year'] = null;
      }

      return obj;
    });

    // 🔍 Filtrare: doar înregistrările cu an >= parametrul dat
    const filteredResults = results.filter((obj) => {
      return typeof obj['year'] === 'number' && obj['year'] >= an;
    });

    return filteredResults;
  } catch (err) {
    console.error('Eroare la citirea sau parsarea fișierului:', err);
    return null;
  }
}

module.exports = {
  interpretData,
};
