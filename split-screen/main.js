$(function() {
  // Initialize form validation on the register form, which has the name "registration"
  $("form[name='registration']").validate({
    // validation rules for form
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // validated by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    // Error messages for validation
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
