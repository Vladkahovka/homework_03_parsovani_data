
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