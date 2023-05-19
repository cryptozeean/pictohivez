function toggleMode() {
    var body = document.body;
    var navbar = document.querySelector('.navbar');
    var hero = document.querySelector('#hero');
    var about = document.querySelector('#about');
    var services = document.querySelector('#services');
    var contact = document.querySelector('#contact');
    var footer = document.querySelector('footer');
    var themeIcon = document.getElementById('theme-icon');
  
    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
    hero.classList.toggle('dark');
    about.classList.toggle('dark');
    services.classList.toggle('dark');
    contact.classList.toggle('dark');
    footer.classList.toggle('dark');
  
    // Toggle theme icon
    if (body.classList.contains('dark')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
  
  function handleScroll() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      navbar.classList.add('fixed');
      document.body.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed');
      document.body.classList.remove('fixed-nav');
    }
  }
  
  document.getElementById('theme-icon').addEventListener('click', toggleMode);
  window.addEventListener('scroll', handleScroll);
  // JavaScript code to toggle the theme class
var logo = document.getElementById('logo'); // Replace 'logo' with the ID of your SVG element

function setLightTheme() {
  logo.classList.remove('logo-dark');
  logo.classList.add('logo-light');
}

function setDarkTheme() {
  logo.classList.remove('logo-light');
  logo.classList.add('logo-dark');
}

// Example usage
setLightTheme(); // Set initial theme to light

// Switch to dark theme
setDarkTheme();
// Check if Hive Keychain is installed
if (window.hive_keychain) {
  // Enable login button
  document.getElementById("loginWithHiveBtn").disabled = false;
} else {
  // Hive Keychain is not installed, provide alternative login options
  document.getElementById("loginWithHiveBtn").innerHTML = "Install Hive Keychain";
  // Optionally, provide alternative login functionality for users without Hive Keychain
  // Example: Show a traditional login form
}

// Add event listener to the login button
document.getElementById("loginWithHiveBtn").addEventListener("click", function() {
  // Request login using Hive Keychain
  if (window.hive_keychain) {
    hive_keychain.requestSignBuffer(
      "vishalhkothari",  // Replace with your app's Hive account
      "Login to PictoHivez", // Replace with the message you want the user to sign
      "Posting",           // Required key type for login
      function (response) {
        if (response.success) {
          // User is logged in, perform further actions (e.g., redirect to dashboard)
          // You can access the username and signature in response.result
          var username = response.result.username;
          var signature = response.result.signature;
          // Perform any necessary backend verification using the signature
          // Redirect the user or perform other actions as needed
        } else {
          // Login request failed or was cancelled, handle error
        }
      }
    );
  } else {
    // Hive Keychain is not installed, provide alternative login options
    // Example: Show a traditional login form
  }
});