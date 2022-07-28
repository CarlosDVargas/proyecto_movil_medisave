var medicalRecord;
var user;

$(document).ready(function () {
  const userId = window.location.search.split("?userId=")[1];
  $.ajax({
    url: "http://carlosdvargas-001-site1.itempurl.com/Admin/Record/Get?userId=" + userId,
    type: "GET",
    dataType: "json",
    success: function (info) {
      medicalRecord = info.data;
      user = medicalRecord.applicationUser;
      var illnesses = medicalRecord.illnesses;
      var treatments = medicalRecord.treatments;
      var medicines = medicalRecord.medicines;
      var notes = medicalRecord.medicalHistories;
      var tests = medicalRecord.tests;
      $('#patientName').text(user.dni + " - " + user.name)
      console.log(medicalRecord);
      showTreatment(treatments)
      showMedicines(medicines)
      showIllnesess(illnesses)
      showMedicalHistory(notes)
      showMedicalTests(tests)
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
          <div class="row text-center">
            <div class="col-md-12">
              <h6 class="mb-0">${name}</h6>
              <hr/>
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
          <div class="row text-center">
            <div class="col-md-12">
              <h6 class="mb-0">${name}</h6>
            </div>
          </div>
        </div>
      </div>`;
    $(".medicines").append(text);
  });
}

function showIllnesess(illnesses) {
  illnesses.forEach(illness => {
    var name = illness.name;
    var desc = illness.description;
    var text =
      `<div class="container p-2">
        <div class="card">
          <div class="row text-center">
            <div class="col-md-12 mt-2">
              <h6 class="mb-0">${name}</h6>
              <hr/>
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
    $(".illnesses").append(text);
  });
}

function showMedicalHistory(historyNotes) {
  var i = 1;
  historyNotes.forEach(notes => {
    var doctorName = notes.doctorName;
    var creationDate = new Date(notes.creationDate);
    var desc = notes.description;
    var text =
      `<div class="container p-2">
        <div class="card">
          <div class="row text-center">
            <div class="col-md-12 mt-2">
              <h6 class="mb-0">Medical History Entry ${i}</h6>
              <hr/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 m-2">
              <h6 class="mb-0">Doctor: ${doctorName}</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 m-2">
              <h6 class="mb-0">Date: ${creationDate}</h6>
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
    i += 1;
    $(".medicalHistory").append(text);
  });
}

function showMedicalTests(tests) {
  var i = 1;
  tests.forEach(test => {
    var doctorName = test.doctorName;
    var creationDate = new Date(test.creationDate);
    var desc = test.description;
    var server = "http://carlosdvargas-001-site1.itempurl.com/"
    var downloadUrl = test.fileUrl;
    var text =
      `<div class="container p-2">
        <div class="card">
          <div class="row text-center">
            <div class="col-md-12 mt-2">
              <h6 class="mb-0">Medical Tests ${i}</h6>
              <hr/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 m-2">
              <h6 class="mb-0">Doctor: ${doctorName}</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 m-2">
              <h6 class="mb-0">Date: ${creationDate}</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card-body">
                <p>${desc}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 m-2">
              <div class="card-body">
                <a href = "${server + downloadUrl}"
                download type = "application/octet-stream"> Download test </a>
              </div>
          </div>
        </div>
      </div>`;
    i += 1;
    $(".medicalTests").append(text);
  });
}