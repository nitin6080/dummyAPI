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

// --------1st flag of country and 2nd flag depicting neighbour/border country--------------------------------------------------------------------------------------------------------

const getCountryAndNeighbour = function (country){
          const renderCountry = function(data, className = '')
          {         const html =      
                              `<div class="countries">
                                        <article class="country">
                                                  <img class="country__img" src=${data.flag} alt=""/>
                                                  <div class="country__data">
                                                            <h3 class="country__name">
                                                                      ${data.name}
                                                            </h3>
                                                            <h4 class="country__region">
                                                                      ${data.region}
                                                            </h4>
                                                            <p class="country__row"><span>👫</span>
                                                                      ${(+data.population /1000000).toFixed(1)} millions
                                                            </p>
                                                            <p class="country__row"><span>🗣️</span>
                                                                      ${data.languages[0].name}
                                                            </p>
                                                            <p class="country__row"><span>💰</span>
                                                                      ${data.currencies[0].name}
                                                            </p>
                                                  </div>
                                        </article>
                              </div>
                              <!-- <button class="btn-country">Where am I?</button> -->
                              <div class="images"></div>`;
                    countriesContainer.insertAdjacentHTML("beforeend", html);
                    // console.log(request.responseText);
                    // console.log(request);
          }
          const requestOne = new XMLHttpRequest();
          requestOne.open("GET", `https://restcountries.com/v2/name/${country}`);
          requestOne.send();
          requestOne.addEventListener("load", function () {
                    const [data] = JSON.parse(this.responseText);
                    console.log(data);
                    renderCountry(data);
                    //either use optional chaining
                    const neighbour = data?.borders[0];

                    // or, use this logic below
                    //  const neighbour = data.border;
                    // if (!neighbour) return;
                    const requestTwo = new XMLHttpRequest();
                    requestTwo.open('GET', `https://restcountries.com/v2/name/${neighbour}`);
                    requestTwo.send();
                    
                    requestTwo.addEventListener('load', function(){
                              console.log(this.responseText);
                              const [data2] = JSON.parse(this.responseText);
                              console.log(data2);
                              renderCountry(data2, 'neighbour');
                    });
          })
}
getCountryAndNeighbour('israel');
