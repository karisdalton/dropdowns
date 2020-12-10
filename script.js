function displayDropDown(num1) {
  function displayContent() {
    document.getElementById('dropdowncontent' + num1).classList.toggle('show');
  }
  
  // close dropdown if user clicks on it again or oustside of it
  window.onclick = (e) => {
    if (!e.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown" + num1);
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }
  displayContent();
}