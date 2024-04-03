"use strict";
// const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
countriesContainer.computedStyleMap.opacity = 1;

//------------------------------for getting all countries' data in console logs-------------------------------------------------------
// const getAllCountryData = function (country) {
//           const request = new XMLHttpRequest();
//           request.open("GET", `https://restcountries.com/v2/all`);
//           request.send();
//           request.addEventListener("load", function () {
//             const [data] = JSON.parse(this.responseText);
//             const html = `
//                         <div class="countries">
//                                       <article class="country">
//                                                 <img class="country__img" src=${
//                                                   data.flag
//                                                 } alt=""/>
//                                                 <div class="country__data">
//                                                         <h3 class="country__name">
//                                                                 ${data.name}
//                                                         </h3>
//                                                         <h4 class="country__region">
//                                                                 ${data.region}
//                                                         </h4>
//                                                         <p class="country__row"><span>👫</span>
//                                                                 ${(+data.population /1000000).toFixed(1)} millions
//                                                         </p>
//                                                         <p class="country__row"><span>🗣️</span>
//                                                                 ${data.languages[0].name}
//                                                         </p>
//                                                         <p class="country__row"><span>💰</span>
//                                                                 ${data.currencies[0].name}
//                                                         </p>
//                                                 </div>
//                                       </article>
//                         </div>
//                         <!-- <button class="btn-country">Where am I?</button> -->
//                         <div class="images"></div>
//                 `;
//             countriesContainer.insertAdjacentHTML("beforeend", html);
//             console.log(request.responseText);
//             console.log(request);
        
//           });}
//           getAllCountryData()
//           console.log(getAllCountryData())

// -----single country flag------------------------------------- obtaining results via destructuring ----------------------------------------------------

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     const html = `
//                 <div class="countries">
//                               <article class="country">
//                                         <img class="country__img" src=${
//                                           data.flag
//                                         } alt=""/>
//                                         <div class="country__data">
//                                                 <h3 class="country__name">
//                                                         ${data.name}
//                                                 </h3>
//                                                 <h4 class="country__region">
//                                                         ${data.region}
//                                                 </h4>
//                                                 <p class="country__row"><span>👫</span>
//                                                         ${(+data.population /1000000).toFixed(1)} millions
//                                                 </p>
//                                                 <p class="country__row"><span>🗣️</span>
//                                                         ${data.languages[0].name}
//                                                 </p>
//                                                 <p class="country__row"><span>💰</span>
//                                                         ${data.currencies[0].name}
//                                                 </p>
//                                         </div>
//                               </article>
//                 </div>
//                 <!-- <button class="btn-country">Where am I?</button> -->
//                 <div class="images"></div>
//         `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     console.log(request.responseText);
//     console.log(request);

//   });
// };
// getCountryData('norway')
// console.log(getCountryData('portugal'))

// --------1st flag of country and 2nd flag depicting neighbour/border country------------

// const getCountryAndNeighbour = function (country){
//           const renderCountry = function(data, className = '')
//           {         const html =      
//                               `<div class="countries">
//                                         <article class="country">
//                                                   <img class="country__img" src=${data.flag} alt=""/>
//                                                   <div class="country__data">
//                                                             <h3 class="country__name">
//                                                                       ${data.name}
//                                                             </h3>
//                                                             <h4 class="country__region">
//                                                                       ${data.region}
//                                                             </h4>
//                                                             <p class="country__row"><span>👫</span>
//                                                                       ${(+data.population /1000000).toFixed(1)} millions
//                                                             </p>
//                                                             <p class="country__row"><span>🗣️</span>
//                                                                       ${data.languages[0].name}
//                                                             </p>
//                                                             <p class="country__row"><span>💰</span>
//                                                                       ${data.currencies[0].name}
//                                                             </p>
//                                                   </div>
//                                         </article>
//                               </div>
//                               <!-- <button class="btn-country">Where am I?</button> -->
//                               <div class="images"></div>`;
//                     countriesContainer.insertAdjacentHTML("beforeend", html);
//                     // console.log(request.responseText);
//                     // console.log(request);
//           }
//           const requestOne = new XMLHttpRequest();
//           requestOne.open("GET", `https://restcountries.com/v2/name/${country}`);
//           requestOne.send();
//           requestOne.addEventListener("load", function () {
//                     const [data] = JSON.parse(this.responseText);
//                     console.log(data);
//                     renderCountry(data);
//                     //either use optional chaining
//                     const neighbour = data?.borders[0];

//                     // or, use this logic below
//                     //  const neighbour = data.border;
//                     // if (!neighbour) return;

//                     const requestTwo = new XMLHttpRequest();
//                     requestTwo.open('GET', `https://restcountries.com/v2/name/${neighbour}`);
//                     requestTwo.send();
                    
//                     requestTwo.addEventListener('load', function(){
//                               console.log(this.responseText);
//                               const [data2] = JSON.parse(this.responseText);
//                               console.log(data2);
//                               renderCountry(data2, 'neighbour');
//                     });
//           })
// }
// getCountryAndNeighbour('israel');


//---------------- callback hell example ----------------------

//---------------------- just a simple setTimeout function
// setTimeout(()=>{console.log('1 second passed');}, 1000)

//--------- just a simple callback i.e. function calling function
// setTimeout(()=>{
//           console.log('1 second passed');
//           setTimeout(()=>{
//                     console.log('2 seconds passed');
//           }, 1000)
// }, 1000)

//--------- too many callbacks just used to depict how callback hell looks like
// setTimeout(()=>{
//           console.log('1 second passed');
//           setTimeout(()=>{
//                     console.log('2 seconds passed');
//                     setTimeout(()=>{
//                               console.log('3 seconds passed');
//                               setTimeout(()=>{
//                                         console.log('4 seconds passed');
//                               }, 1000);
//                     }, 1000);
//           }, 1000);
// }, 1000);


/*
callback hell makes our code :
1) messy
2) harder to maintain
3) difficult to understand
4) bug existence/encounter probability high

harder the code is to understand & maintain,
more difficulties will come in adding new features & functionalities
*/

//----------------------- consuming promises -----------------------------

const cardSkeleton = function(data){
  const html =      
          `<div class="countries">
            <article class="country">
              <img class="country__img" src=${data?.flag} alt=""/>
              <div class="country__data">
                <h3 class="country__name">
                  ${data?.name}
                </h3>
                <h4 class="country__region">
                  ${data?.region}
                </h4>
                <p class="country__row"><span>👫</span>
                  ${(+data?.population /1000000).toFixed(2)} millions
                </p>
                <p class="country__row"><span>🗣️</span>
                  ${data?.languages[0].name}
                </p>
                <p class="country__row"><span>💰</span>
                  ${data?.currencies[0].name}
                </p>
              </div>
            </article>
          </div>
          <!-- <button class="btn-country">Where am I?</button> -->
          <div class="images"></div>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
}
const yieldCountryData = function (country) {
          // fetch(`https://restcountries.com/v2/name/${country}`).then(function(response)
          //           { console.log(response);
          //             return response.json();
          //           }
          // ).then(function(data) //this was for getting json data once request was OK
          //           { console.log(data[0]);
          //             cardSkeleton(data[0]);
          //             data[1] && console.log(data[1]); // will show fetched info in console only if it exists
          //             data[1] && cardSkeleton(data[1]); // will show fetched info in card on-screen only if it exists
          //           }
          // );

//------ chaining promises ----- flat chain of promises ------also doing same thing with arrow function for clear & short code -------------
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response => 
    { console.log(response);
      return response.json();
    }
  )
  .then(data => // this was for getting json data once request was OK
    { console.log(data[0]);
      cardSkeleton(data[0]);

      //------below code is for extra flags incase of india[1] depiction----------
      //data[1] && console.log(data[1]); // will show fetched info in console only if it exists
      //data[1] && cardSkeleton(data[1]); // will show fetched info in card on-screen only if it exists

      //from here borderCountry info is rendered on another cardSkeleton //this is an upgrade which isn't in previous code
      const borderCountry = data[0]?.borders[0]; //we defined borderCountry here
      return fetch (`https://restcountries.com/v2/alpha/${borderCountry}`); //we decided where we'd fetch this info from of data[] array's API
    }
  )
  .then(response => { // to handle success value of promise fulfilled above
      console.log(response);
      return response.json(); // here we're handling 
    }
  )
  .then(data =>
    cardSkeleton(data, 'borderCountry')
  )
};
yieldCountryData('USA');