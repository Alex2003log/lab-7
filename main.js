function searchText() {



   let inputElement = document.getElementById("info");
   let inputValue = inputElement.value;

   async function getResponse(){
      let response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-25/currencies/eur/uah.json');
      let content = await response.json();
      let key;

      for (key in content){
	
         let valueData = content['date'];
			let valueUah = content['uah'];
   
         if(content[inputValue] === valueData){
            console.log("Date - " + valueData);
				break
         }else if(content[inputValue] === valueUah){
            console.log("Uah - " + valueUah);
				break
         }else if(inputValue === 'date and uah'){
				console.log("Date - " + valueData);
            console.log("Uah - " + valueUah);
				break
         }else{
            console.log("no information");
         }
      }
      
      }
      getResponse();
}













