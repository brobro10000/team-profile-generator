//SAME JS START HEADER
function header() {
    $("<header>").attr({ "id": "headerContainer" }).appendTo(document.body)
    $("<h3>").text("My Team").attr({ "class": "text-center" }).appendTo("#headerContainer")
}
//END HEADER
function main() {
    $("<main>").attr({"id":"main"}).appendTo(document.body)
    $("<section>").attr({"id":"employeeCards"}).appendTo("#main")
    $("<div>").attr({ "id": "cardDeck", "class": "card-deck" }).appendTo("#employeeCards")
}
function cards(i) {
    $("<div>").attr({ "id": "cardContainer" + i, "class": "card ml-1 mr-1 text-center" }).appendTo("#cardDeck")
         $("<div>").attr({ "id": "cardContainerHeader" + i, "class": "card cardHeader ml-1 mr-1 text-center" }).appendTo("#cardContainer"+i)
        $("<h5>").text("").attr({ "id": "name" + i, "class": "cardText" }).appendTo("#cardContainerHeader" + i)
        $("<img>").attr({ "id": "icon" + i, "src": ""}).appendTo("#name" + i)
        $("<h5>").text("role"+i).attr({ "id": "role" + i, "class": "cardText" }).appendTo("#cardContainerHeader" + i)
        $("<div>").attr({ "id": "cardContainerContent" + i, "class": "card ml-1 mr-1 text-center" }).appendTo("#cardContainer"+i)
        $("<h6>").text("ID"+i).attr({ "id": "ID" + i, "class": "cardText" }).appendTo("#cardContainerContent" + i)
        $("<h6>").text("Email"+i).attr({ "id": "Email" + i, "class": "cardText" }).appendTo("#cardContainerContent" + i)
        $("<h6>").text("GorS"+i).attr({ "id": "GithubSchool" + i, "class": "cardText" }).appendTo("#cardContainerContent" + i)
}
header()
main()
for(var i = 0;i < 5; i++)
cards(i)