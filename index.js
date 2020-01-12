console.log(new Date());
var arr = [];
document.getElementById('volunteerForm')
    .addEventListener("submit", submitVolunteerForm);
function submitVolunteerForm(e) {
        e.preventDefault();
        let volunteer = document.getElementById('volunteer').value;
        let description = document.getElementById('description').value;
        let population = document.getElementById('population').value;
        let dayInTheWeek = document.getElementById('dayInTheWeek').value;
        let city = document.getElementById('city').value;
        let street = document.getElementById('street').value;
        let nHome = Number(document.getElementById('nHome').value);
        let time = document.getElementById('time').value;
        let contact = document.getElementById('contact').value;
        let address = city + ' , ' + street + ' ' + nHome;
        let myVolunteer=[volunteer,description,population,dayInTheWeek,time,address,contact];
        if(AlreadyExists(myVolunteer,arr))
        {
            alert('This volunteering already exists');
        }  
        else{
        arr.push(myVolunteer);
        print(arr);
        myFunction(myVolunteer);
        document.getElementById("volunteerForm").reset();
    };
    } 
    function print(arr) {
        console.log('jjjjj');

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            console.log(getFullVolunteer(arr[index]));

        }

    }
    function getFullVolunteer(myVolunteer) {
        let element = '';
        for (let index = 0; index < myVolunteer.length; index++) {
            element = element + ' ' +myVolunteer[index];
            
        }
        return element;
    }
    function myFunction(myVolunteer) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        for (let index = 0; index < 7; index++) {
            var cell1 = row.insertCell(index);
            cell1.innerHTML = myVolunteer[index];
        }
      }
    
      