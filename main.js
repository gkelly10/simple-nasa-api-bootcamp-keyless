//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

/*Button event listener so button can oerform an action*/
 
document.querySelector('button').addEventListener('click', picOfTheDay)
     
/* function -> instructions pic of the day */
    function picOfTheDay(){
      //  variable usierInput to contain the date of input
      const userInput=document.querySelector('input').value
      // variable to hold in API key
      const url = `https://api.nasa.gov/planetary/apod?api_key=&date=${userInput}`
// func to let the API work//
       fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      // method -> taking in res outputtin re.json | taking in date it's the res json |outputting a series of things(console, docqueryselectors)// look into late since this was an example Leon told us to use.
      
      console.log(data) 
      console.log(data.date)
      console.log(data.explanation)
      console.log(data.hdurl)
      console.log(data.title)
      //  inserting stuff(date/exp/pic url/title) into html
      document.querySelector('h1').innerText=data.date
      document.querySelector('h3').innerText=data.explanation
      document.querySelector('img').src = data.hdurl
      document.querySelector('h2').innerText=data.title

     }) 
    //  func for in case of errors
    .catch(err => { 
        console.log(`error ${err}`) 
    });

    }