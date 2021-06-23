//SAME JS START HEADER
function header() {
    $("<header>").attr({ "id": "headerContainer" }).appendTo(document.body)
    $("<h3>").text("My Team").attr({ "class": "text-center" }).appendTo("#headerContainer")
}
//END HEADER
function main() {
    $("<main>").attr({ "id": "main" }).appendTo(document.body)
}
function carouselCreator(innerItems, role) {
    if (innerItems == 0) {
        return
    } else {
        $("<div>").attr({ "id": role + "CarouselContainer", "class": "carousel slide carouselContainer" }).appendTo("#main")
        $("<div>").attr({ "id": role + "CarouselInner", "class": "carousel-inner" }).appendTo("#" + role + "CarouselContainer")
        for (var i = 0; i < innerItems; i++) {
            carouselInner(i, role)
            cards(i, role)
        }
        if (innerItems == 1) {
            return
        }
        else
            carouselButtons(role)
    }
}
function carouselInner(i, role) {
    if (i == 0)
        $("<div>").attr({ "id": role + "carouselPosition" + i, "class": "carousel-item active" }).appendTo("#" + role + "CarouselInner")
    else {
        $("<div>").attr({ "id": role + "carouselPosition" + i, "class": "carousel-item" }).appendTo("#" + role + "CarouselInner")
    }
}
function cards(i, role) {
    $("<div>").attr({ "id": role + "cardContainer" + i, "class": "card ml-1 mr-1 text-center" }).appendTo("#" + role + "carouselPosition" + i)
    $("<div>").attr({ "id": role + "cardContainerHeader" + i, "class": "card cardHeader ml-1 mr-1 text-center" }).appendTo("#" + role + "cardContainer" + i)
    $("<h5>").text("Name").attr({ "id": role + "name" + i, "class": "cardText" }).appendTo("#" + role + "cardContainerHeader" + i)
    $("<img>").attr({ "id": role + "icon" + i, "src": "./src/images/" + role + ".png", "height": "auto", "width": "30px" }).appendTo("#" + role + "name" + i)
    $("<h5>").text("role" + i).attr({ "id": role + "role" + i, "class": "cardText" }).appendTo("#" + role + "cardContainerHeader" + i)
    $("<div>").attr({ "id": role + "cardContainerContent" + i, "class": "card ml-1 mr-1 text-center" }).appendTo("#" + role + "cardContainer" + i)
    $("<h6>").text("ID" + i).attr({ "id": role + "ID" + i, "class": "cardText" }).appendTo("#" + role + "cardContainerContent" + i)
    $("<h6>").text("Email" + i).attr({ "id": role + "Email" + i, "class": "cardText" }).appendTo("#" + role + "cardContainerContent" + i)
    $("<h6>").text("GorS" + i).attr({ "id": role + "GithubSchool" + i, "class": "cardText" }).appendTo("#" + role + "cardContainerContent" + i)
}
function carouselButtons(role) {
    $("<a>").attr({ "id": role + "prevButton", "class": "carousel-control-prev", "href": "#" + role + "CarouselContainer", "role": "button", "data-slide": "prev" }).appendTo("#" + role + "CarouselContainer")
    $("<span>").attr({ "class": "carousel-control-prev-icon", "aria-hidden": "true" }).appendTo("#" + role + "prevButton")
    $("<span>").attr({ "class": "sr-only" }).text("Prev").appendTo("#" + role + "prevButton")
    $("<a>").attr({ "id": role + "nextButton", "class": "carousel-control-next", "href": "#" + role + "CarouselContainer", "role": "button", "data-slide": "next" }).appendTo("#" + role + "CarouselContainer")
    $("<span>").attr({ "class": "carousel-control-next-icon", "aria-hidden": "true" }).appendTo("#" + role + "nextButton")
    $("<span>").attr({ "class": "sr-only" }).text("Next").appendTo("#" + role + "nextButton")
}
function startProgram() {
    header()
    main()
    carouselCreator(3, "manager")
    carouselCreator(6, "engineer")
    carouselCreator(10, "intern")
}

startProgram()