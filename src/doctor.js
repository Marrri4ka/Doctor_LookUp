export class Doctor {
  finddoctor (name,issue) {

    return new Promise (function(resolve,reject){
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=45cd92f3f1240db74a7bbfa4c98a15be&name='+name+'&query='+issue;
      console.log(url);
      request.onload = function(){
        console.log(this.status);
        if(this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET",url,true);
      request.send();
    });
  }
}
