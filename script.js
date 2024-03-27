"use strict";
// const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
countriesContainer.computedStyleMap.opacity=1;
// --------------------------------------------destructuring--------------------------------------------------------------------

const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v2/name/india");
request1.send();
request1.addEventListener("load", function () {
          const data = JSON.parse(this.responseText);

          for (let index = 0; index < data.length; index++)
          { console.log(data[index]); }
          //    document.write(data[1]);
  const html = 
          `<div class="countries">
                    <article class="country">
                              <img class="country__img" src=${data[1].flag} alt=""/>
                              <div class="country__data">
                                        <h3 class="country__name">
                                                ${data[1].name}
                                        </h3>
                                        <h4 class="country__region">
                                                ${data[1].region}
                                        </h4>
                                        <p class="country__row"><span>👫</span>
                                                ${(+data[1].population / 1000000).toFixed(1)}
                                        </p>
                                        <p class="country__row"><span>🗣️</span>
                                                ${data[1].languages[0].name}
                                        </p>
                                        <p class="country__row"><span>💰</span>
                                                ${data[1].currencies[0].name}
                                        </p>
                              </div>
                    </article>
          </div>
          <!-- <button class="btn-country">Where am I?</button> -->
          <div class="images"></div>
          `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
});

// ------------------------------------------ opening json through for loop ----------------------------------------------------

"use strict";
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/india");
request.send();
// const exampleData = () => {};
request.addEventListener("load", function () {
          const [data] = JSON.parse(this.responseText);
          const html = 
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
                                                            ${(+data.population / 1000000).toFixed(1)}
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
                    <div class="images"></div>
          `;
          countriesContainer.insertAdjacentHTML("beforeend", html);
});
