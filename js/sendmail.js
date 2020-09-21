function googleFormsInputs(email, name, subject, message, phone) {
  return {
    "entry.1896731456": phone, //Telefone
    "emailAddress": email, //Email
    "entry.988797157": name, //Nome
    "entry.331516932": subject, //Assunto
    "entry.168716528": message, //Mensagem
  }
}


// function sendMail() {
  // var email = $("#email").val() || ""
  // var name = $("#name").val() || ""
  // var subject = $("#subject").val() || ""
  // var message = $("#message").val() || ""
  // var phone = $("#phone").val() || ""

  //
  // $.ajax({
  //   url: 'https://docs.google.com/forms/d/e/1FAIpQLSfn6lzbhIeEFcdbqjd0zKDISAjlMYs-s7Ol2rh2Db8g2INAhg/formResponse',
  //   type: 'POST',
  //   data: formGoogle,
  //   success: function(t) {
  //     addConsoleText(`
  //       <p class='green' style="margin-left: 14%;font-size: 22px;">Mensagem enviado com sucesso!</p>
  //       <p class='green' style="margin-left: 16%;font-size: 10px;">Por favor peço que aguarde que entraremos em contato!</p>
  //       `);
  //   },
  //   error: function() {
  //     console.log("error");
  //   }
  // });
// }
