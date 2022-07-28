var medicalRecord;
var user;

$(document).ready(function () {
  const userId = window.location.search.split("?userId=")[1];
  $.ajax({
    url: "https://localhost:44392/Admin/Record/Get?userId=" + userId,
    type: "GET",
    dataType: "json",
    success: function (info) {
      medicalRecord = info.data;
      user = medicalRecord.applicationUser;
      var illnesses = medicalRecord.illnesses;
      $('#patientName').text(user.dni + " - " + user.name)
      console.log(medicalRecord);
      illnesses.forEach(illness => {
        var illnessName = illness.name;
        var illnessDescription = illness.description;
        $("#example").append(illnessName, illnessDescription);
      });
    }
  });

});

