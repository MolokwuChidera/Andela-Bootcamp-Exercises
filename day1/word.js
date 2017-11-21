module.exports=function words(input){
   
  

    let objCount ={},splitwords;
  splitwords=input.toLowerCase().trim();

  splitwords=splitwords.split(/\s+/g);
  
    
    splitwords.forEach(function(word){
      word = word.replace(/\s+/g,"");
      if(objCount.hasOwnProperty(word)){
        objCount[word]++;
        
      }else{
        
        objCount[word]=1;
        
      }
      
    });
    return objCount;
    
  }