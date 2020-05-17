// -------------------- CODE TO FIND THE DIV HEIGHT AND WIDTH---------------// 

/*var element = document.querySelector(".site-preview");

var computedStyle = getComputedStyle(element);

elementHeight = element.clientHeight; // height with padding
elementWidth = element.clientWidth; // width with padding

elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) + 1;
elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight) + 1;

console.log(elementHeight - 1);
console.log(elementWidth - 1);
*/



var image = document.querySelector(".project-image");
//image.setAttribute("src", "https://picsum.photos/" + elementWidth + "/" + elementHeight);

/**   -------------------  ADDING MOUSEOVER EVENT ON THE PROJECT LINKS----------------- */

for (var i = 0; i < document.querySelectorAll(".project").length; i++) {
    document.querySelectorAll(".project")[i].addEventListener("mouseover", function () {

        var innerHTML = this.innerHTML;

        showPreview(innerHTML);

    });
}

//--------------------------  ADDING MOUSEOUT EVENT ON PROJECT LINKS-------------------//

for (var i = 0; i < document.querySelectorAll(".project").length; i++) {
    document.querySelectorAll(".project")[i].addEventListener("mouseout", function () {

        var innerHTML = this.innerHTML;

        removePreview(innerHTML);

    });
}



//---------------------------  FUNCTION TO SHOW THE PREVIEW---------------------------//


function showPreview(name) {
    switch (name) {
        case "Dicee Game":
            image.style.visibility = "visible";
            image.setAttribute("src", "images/dicee game.png");
            break;
        case "Test-site":
            image.style.visibility = "visible";
            image.setAttribute("src", "images/test-site.png");
            break;
            case "Drum Kit":
                image.style.visibility = "visible";
                image.setAttribute("src", "images/Drum Kit.png");
                break;

        default:
            console.log(name);
            break;
    }
}


//----------------------------  FUNCTION TO REMOVE PREVIEW --------------------------------//


function removePreview(name) {

    image.style.visibility = "hidden";
} 