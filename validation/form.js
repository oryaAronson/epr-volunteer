function AlreadyExists(myVolunteer,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (myVolunteer[1]==arr[i][1]&&myVolunteer[2]==arr[i][2]&&myVolunteer[3]==arr[i][3]&&myVolunteer[4]==arr[i][4]
            &&myVolunteer[5]==arr[i][5]&&myVolunteer[0]==arr[i][0]) {
                return true;              
        }                 
    }
return false;
}