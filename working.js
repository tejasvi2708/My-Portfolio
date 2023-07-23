

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwW6PqlZNz9ktugLYDm8tGpShA4zpDuItLGO3qWYX2SacrGKGTGRceSPDdh1rHHLmrP/exec'
  const form = document.forms['submit-to-google-sheet']
  const mssge=document.getElementById("mssge");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        mssge.innerHTML="Message received"
        setTimeout(function(){
            mssge.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
