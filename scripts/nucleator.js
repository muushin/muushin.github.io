document.onload = introduction();

function introduction() {
  console.log('  Welcome to Nucleator\n  Logging my activity here...');
}

async function keep_idea() {
  console.log("KEEP button pressed");
  var tbox = document.getElementById('scratchpad');
  if (tbox.value != '') {
   var key = await get_digest(tbox.value);
   localStorage.setItem(key, tbox.value);
   console.log("saving current scratchpad text");
  }
  console.log("---");
}

function clear_scratchpad() {
  console.log("CLEAR button pressed");
  var tbox = document.getElementById('scratchpad');
  tbox.value = "";
  console.log("clearing scratchpad\n---");
}

function nucleate() {
  console.log("NUCLEATE button pressed")
  var tbox = document.getElementById('scratchpad');
  var key = get_random_storage_key();
  tbox.value = localStorage.getItem(key);
  console.log("loading key :\n" + key);
  console.log('---');
}

async function get_digest(idea) {
  console.log("getting hex hash of scratchpad text");
  const data = new TextEncoder().encode(idea);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  console.log('hash: \n' + hashHex);
  return hashHex;
}

function get_random_storage_key() {
  console.log('getting random storage key');
  var I = Math.floor(Math.random() * (localStorage.length));
  return localStorage.key(I);
}