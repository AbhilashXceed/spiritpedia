

const url = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFavouriteSpirit';
var SpiritList;

fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
      },
}).then(response=>response.json())
.then(resjson=> {
    alert(JSON.stringify(resjson))
    SpiritList = JSON.stringify(resjson)
}).catch(error=>console.warn(error))

// const SpiritList = [
//     {
//       name: 'Virginia',
//       abbreviation: 'VA',
//     },
//     {
//       name: 'Washington',
//       abbreviation: 'WA',
//     },
//     {
//       name: 'West Virginia',
//       abbreviation: 'WV',
//     },
//     {
//       name: 'Wisconsin',
//       abbreviation: 'WI',
//     },
//     {
//       name: 'Wyoming',
//       abbreviation: 'WY',
//     }
//   ]
  
  export default SpiritList;