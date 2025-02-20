document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const { email, password } = event.target.elements; 
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
  
    
    if (!formData.email || !formData.password) {
      alert("All form fields must be filled in");
      return;
    }
  
    console.log(formData); 
    event.target.reset(); 
  });
