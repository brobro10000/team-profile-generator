//Creates markdown page
function generateHeader() {
    return `
    <header id="headerContainer">
        <h3 class="text-center">My Team</h3>
    </header>
    `
}
function generateGeneralQuestions(role, data) {
    return `
<section id=${role}Section>
    <div id="${role}CarouselContainer" class="carousel slide carouselContainer">
        <div id="${role}CarouselInner" class="carousel-inner">
            ${carouselPosition(role)}
        </div>
    </div>
    ${generateCarouselArrows(role,data)}
</section>  
        `
}
function generateCarouselArrows(role,data){
    if(data.length == 1) {
        return ``
    }
    else{
        return `
        <a id="${role}prevButton" class="carousel-control-prev" href="#${role}CarouselContainer" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Prev</span></a>
        <a id="${role}nextButton" class="carousel-control-next" href="#${role}CarouselContainer" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span></a>`
    }
}
function carouselPosition(role) {
    return `<div id="${role}carouselPosition0" class="carousel-item active">
                ${carouselCard(role)}
            </div>`
}
function carouselCard(role) {
    return `<div id="${role}cardContainer0" class="card ml-1 mr-1 text-center">
                <div id="${role}cardContainerHeader0" class="card cardHeader ml-1 mr-1 text-center">
                    <h5 id="${role}name0" class="cardText">
                    Name
                    <img id="${role}icon0" src="./src/images/${role}.png" height="auto" width="30px"></h5>
                    <h5 id="${role}role0" class="cardText">role0</h5>
                </div>
                <div id="${role}cardContainerContent0" class="card ml-1 mr-1 text-center">
                    <h6 id="${role}ID0" class="cardText">ID0</h6>
                    <h6 id="${role}Email0" class="cardText">Email0</h6>
                    <h6 id="${role}GithubSchool0" class="cardText">GorS0</h6> 
            </div>`
}
function ifExist(managerData,engineerData,internData){
    var output = ``
    if(managerData[0] == 0){}
    else{
        output += generateGeneralQuestions(managerData[0].getRole(),managerData)
    }
    if(engineerData[0] == 0){}
    else{
        output += generateGeneralQuestions(engineerData[0].getRole(),engineerData)
    }
    if(internData[0] == 0){}
    else{
        output += generateGeneralQuestions(internData[0].getRole(),internData)
    }
    return output
}
function generateHTML(managerData,engineerData,internData) {
    console.log(managerData,engineerData,internData)
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="./src/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./src/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./src/images/favicon_io/favicon-16x16.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile Generator</title>
</head>

<body>
${generateHeader()}
<main id="main">
   ${ifExist(managerData,engineerData,internData)}
</main>
</body>
</html>
  `
}
module.exports = { generateHTML, generateGeneralQuestions };