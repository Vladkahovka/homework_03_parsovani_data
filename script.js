
/*Zadání
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
*/

/*
const datum = {
     day: 19,
     month: 11,
     year: 2023,
     }

  const parseDate = (datum) => {
     return datum
     }
  
         
document.body.innerHTML += `
     <p>Den: ${parseDate(datum.day)}</p>
     <p>Měsíc: ${parseDate(datum.month)}</p>
     <p>Rok: ${parseDate(datum.year)}</p>
      `
      */

  
      function parseDate(datumString) {
          const day = datumString.slice(0,2)
          const month = datumString.slice(3,5)
          const year = datumString.slice(6,10)
          return {day, month, year}
        }
        
        const datum = '21.11.2023';
        const rozlozene = parseDate(datum);
       
          
        document.body.innerHTML += `
     <p> day: ${rozlozene.day}, month: ${rozlozene.month}, year: ${rozlozene.year}</p>
   
      `
      