$('#submit').click(function () {
  var identifier = $('#identifier').val();
  $.ajax({
    url: "https://localhost:44392/Admin/Record/Get?userId=" + identifier,
    type: "GET",
    dataType: "json",
    success: function (info) {
      information = info.data;
      if (information == null) {
        alert("No record found");
      } else {
        window.location.replace("../html/medicalrecord.html?userId=" + identifier);
      }
    }
  })
})