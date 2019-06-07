import { Doctor} from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';


$(document).ready(function(){
  $('.doctorForm').submit(function(event){
    event.preventDefault();

    let name = $('.name').val();
    let issue = $('.issue').val();
    let doctor = new Doctor();
    let promise = doctor.finddoctor(name,issue);
    promise.then(function(response){
      let body = JSON.parse(response);


      if(body.data.length>0)
      {
        $('.showDoctor').text('');

        for(let i= 0; i<body.data.length; i++)
        {
          $('.showDoctor').append("<ul>"  +
          "<li>"+"Doctor's name: " + body.data[i].profile.first_name + " " +body.data[i].profile.last_name + "</li>" +
          "<li>" + "Doctor accepts new patients: " + body.data[i].practices[0].accepts_new_patients + "</li>"+
          "<li>" + "Phone number is: " + body.data[i].practices[0].phones[0].number + "</li>"+
          "<li>" + "Website:" + body.data[i].practices[0].website+ "</li>" +
          "<li>" + "Address: " + body.data[i].practices[0].visit_address.street + "</li>" + "</ul>");
        }
      }
      else {
        $('.showDoctor').text('Sorry,there are no doctors meeting your criteria!');
      }
    }, function (error){
      $('.showDoctor').text('There was an error processing your request: ' + error);
    }
    );





  });

});
