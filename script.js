/* .js files add interaction to your website */

var factList = [
  "On a global scale, people dump two million tons of sewage into waterways every single day.",
  "The demand for energy and water are set to grow by 50 percent in the next 10 years, increasing the need for resources.",
  "Over a period of several months, more than 11 million hectares (110,000 sq km or 27.2 million acres) of bush, forest and parks across Australia were burned. Nearly 50 threatened species are believed to have had more than 80% of their area affected, including seven critically endangered plants.",
  "The air quality across the globe has been steadily worsening for the past 50 years, latest figures from the UN reveal that in low and middle-income countries, 98 percent of cities with more than 100,000 inhabitants fall below the World Health Organization’s air quality guidelines.",
  "According to UN statistics, only 82 out of 193 countries have incentives promoting investment in renewable energy production, cleaner production, energy efficiency and pollution control.",
  "Almost one-quarter of energy-related carbon dioxide emissions are from fossil fuels.",
  "Open waste burning is another large contributor to air pollution, releasing harmful dioxins, furans, methane, and black carbon. Globally, it’s estimated that around 40 percent of waste is openly burned, and is practised in 166 out of 193 countries.",
  "7 million premature deaths occur each year as a result of poor air quality.",
  "24,126.1 million tonnes of CO2 from human activities released each year.",
  "10-20 million tons of plastic ends up in our oceans every year.",
  "5.2 trillion plastic particles are currently floating in the world’s oceans.",
  "$13 billion number of estimated losses per year associated with marine plastic debris due to the negative impact on marine ecosystems.",
  "Learn more at: https://sloactive.com/world-environment-day/",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
