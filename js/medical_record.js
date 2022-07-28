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
    var text =
      `<div class="container p-2">
        <div class="card">
          <div class="row">
            <div class="col-md-12">
              <h6 class="mb-0">${name}</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card-body">
                <p>${desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $(".treatments").append(text);
  });
}


function showMedicines(medicines) {
  medicines.forEach(medicines => {
    var name = medicines.name;
    var text =
      `<div class="container p-2">
        <div class="card">
          <div class="row">
            <div class="col-md-12">
              <h6 class="mb-0">${name}</h6>
            </div>
          </div>
        </div>
      </div>`;
    $(".medicines").append(text);
  });
}
