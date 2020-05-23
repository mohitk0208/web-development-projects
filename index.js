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


var image = $(".project-image");
image.hide();
//image.setAttribute("src", "https://picsum.photos/" + elementWidth + "/" + elementHeight);

/**   -------------------  ADDING MOUSEOVER EVENT ON THE PROJECT LINKS----------------- */

for (var i = 0; i < document.querySelectorAll(".project").length; i++) {
    document.querySelectorAll(".project")[i].addEventListener("mouseover", function () {

        var innerHTML = this.innerHTML;

      //--------------CODE TO MAKE IMAGE VISIBLE AND SHOW PREVIEW-----------------------//
       // image.css("visibility","visible");
        image.attr("src", "images/"+innerHTML+".png");
        image.show()();

    });
}


//--------------------------  ADDING MOUSEOUT EVENT ON PROJECT LINKS-------------------//

for (var i = 0; i < document.querySelectorAll(".project").length; i++) {
    document.querySelectorAll(".project")[i].addEventListener("mouseout", function () {
        image.hide();
    });
}


