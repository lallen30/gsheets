function testGS() {
  const url ="https://script.google.com/macros/s/AKfycbzcmyN6ckHDNw8oYx-Um9NHgKbsfDWn6UfWK59eGuO8Va0MxKyMYw62TmsHbZhk9a4/exec";
  
  
  fetch(url)
  .then(d => d.json())
  .then(d => {
    document.getElementById("app").textContent = d[0].status;
  });  
}