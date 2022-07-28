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
      var treatments = medicalRecord.treatments;
      var medicines = medicalRecord.medicines;
      $('#patientName').text(user.dni + " - " + user.name)
      console.log(medicalRecord);
      showTreatment(treatments)
      showMedicines(medicines)
    }
  });

});

function showTreatment(treatments) {
  treatments.forEach(treatments => {
    var name = treatments.name;
    var desc = treatments.description;
    $(".treatments").append(name, desc);
  });
}

function showMedicines(medicines) {
  medicines.forEach(medicines => {
    var name = medicines.name;
    $(".medicines").append(name);
  });
}
