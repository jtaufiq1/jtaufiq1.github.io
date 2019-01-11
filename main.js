window.onload = function() {
    alert("window Loaded");
    collapsible();
    }

// Collapsible Function
function collapsible() {
    // List of Collapsible content
    var coll = document.getElementsByClassName('collapsible');

    // Iterate over content
    for(let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            // Display content
            if(content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

            // Add animation
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

/**
 * 
 * @param {*} name 
 * class of collapsible content
 */
function collapsible(name) {
    // List of Collapsible content
    var coll = document.getElementsByClassName(name);

    // Iterate over content
    for(let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            // Display content
            if(content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

            // Add animation
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}