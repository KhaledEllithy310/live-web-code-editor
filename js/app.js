//store the code in the local storage
const storeInLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
// Get the code from local storage
const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

//set the old code in the textarea if the code exists in the local storage
document.getElementById("htmlCode").value =
  getFromLocalStorage("htmlCode") || "<div>\n\n</div>";
document.getElementById("cssCode").value =
  getFromLocalStorage("cssCode") || "<style>\n\n</style>";
document.getElementById("jsCode").value =
  getFromLocalStorage("jsCode") || "<script>\n\n</script>";

//preview the code with every change
showPreview();

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  storeInLocalStorage("htmlCode", htmlCode);
  storeInLocalStorage("cssCode", cssCode);
  storeInLocalStorage("jsCode", jsCode);
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
