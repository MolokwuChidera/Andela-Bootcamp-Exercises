module.exports=function words(input){
   
  

  let objCount ={},splitwords;
  splitwords=input.toLowerCase();
  splitwords = input.trim();
  splitwords = input.replace(/[\n\t+]/g,' ');
  splitwords=input.replace(/ +/g,' ');
    splitwords = input.split(' ');

    
    splitwords.forEach(function(word){
      if(objCount.hasOwnProperty(word)){
        objCount[word]++;
        
      }else{
        
        objCount[word]=1;
        
      }
      
    });
    return objCount;
    
  }