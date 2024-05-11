function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function readMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "inline-block") {
      btnText.innerHTML = "+ Affichez plus"; 
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "- Affichez moins"; 
      moreText.style.display = "inline-block";
    }
  }

  function readMore1() {
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (moreText.style.display === "inline-block") {
      btnText.innerHTML = "+ Affichez plus"; 
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "- Affichez moins"; 
      moreText.style.display = "inline-block";
    }
  }

  function readMore2() {
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (moreText.style.display === "inline-block") {
      btnText.innerHTML = "+ Affichez plus"; 
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "- Affichez moins"; 
      moreText.style.display = "inline-block";
    }
  }

  function readMore3() {
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (moreText.style.display === "inline-block") {
      btnText.innerHTML = "+ Affichez plus"; 
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "- Affichez moins"; 
      moreText.style.display = "inline-block";
    }
  }