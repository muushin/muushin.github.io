function keep_idea() {
  var tbox = document.getElementById('scratchpad');
  var key = get_uuid();
  localStorage.setItem(key, tbox.value)
}

function clear_scratchpad() {
  var tbox = document.getElementById('scratchpad');
  tbox.value = "";
}

function nucleate() {
  var tbox = document.getElementById('scratchpad');
  var key = get_random_storage_key();
  tbox.value = localStorage.getItem(key);
}

function get_uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

function get_random_storage_key() {
  var I = Math.floor(Math.random() * (localStorage.length));
  return localStorage.key(I)
}