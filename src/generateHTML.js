//Creates markdown page
function generateHeader() {
    return `
    <header id="headerContainer">
        <h3 class="text-center">My Team</h3>
    </header>
    `
}
function generateGeneralQuestions(data) {
    var cardOutput = ''
    for(var i = 0; i< data.length;i++)
    cardOutput+= carouselPosition(data,i)
    return `
    <div id="${data[0].getRole()}CarouselContainer" class="carousel slide carouselContainer">
        <div id="${data[0].getRole()}CarouselInner" class="carousel-inner">
            ${cardOutput}
        </div>
    ${generateCarouselArrows(data)}
    </div>`
}
function generateCarouselArrows(data){
    if(data.length == 1) {
        return ``
    }
    else{
        return `
        <a id="${data[0].getRole()}prevButton" class="carousel-control-prev" href="#${data[0].getRole()}CarouselContainer" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Prev</span>
        </a>
        <a id="${data[0].getRole()}nextButton" class="carousel-control-next" href="#${data[0].getRole()}CarouselContainer" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
            `
    }
}
function carouselPosition(data,i) {
    var className = `carousel-item active`
    if(i == 0){}
    else{
        className = `carousel-item`
    }
    return `<div id="${data[i].getRole()}carouselPosition${i}" class="${className}">
                ${carouselCard(data,i)}
            </div>`
}
function carouselCard(data,i) {
    if(data[0].getRole() == 'Manager'){
        var outputUnique =`
                    <h6 id="${data[0].getRole()}OfficeNumber${i}" class="cardText">
                        Office number: ${data[i].getOfficeNumber()}
                    </h6>`    
    }
    if(data[0].getRole() == 'Engineer'){
        var outputUnique =`
                    <h6 id="${data[0].getRole()}Github${i}" class="cardText">
                        Github:<a href="https://github.com/${data[i].getGithub()}" target = "_blank">https://github.com/${data[i].getGithub()}</a>
                    </h6>`        
    }
    if(data[0].getRole() == 'Intern'){
        var outputUnique =`
                    <h6 id="${data[0].getRole()}School${i}" class="cardText">
                        School: ${data[i].getSchool()}
                    </h6>`    
    }
    return `<div id="${data[0].getRole()}cardContainer${i}" class="card ml-1 mr-1 text-center">
                <div id="${data[0].getRole()}cardContainerHeader${i}" class="card cardHeader ml-1 mr-1 text-center">
                    <h5 id="${data[0].getRole()}name${i}" class="cardText">
                        ${data[i].getName()}
                        <img id="${data[0].getRole()}icon${i}" src="./src/images/${data[0].getRole()}.png" height="auto" width="30px">
                    </h5>
                    <h5 id="${data[0].getRole()}role${i}" class="cardText">
                    ${data[0].getRole()} #${i+1}
                    </h5>
                </div>
                <div id="${data[0].getRole()}cardContainerContent${i}" class="card ml-1 mr-1 text-center">
                    <h6 id="${data[0].getRole()}Id${i}" class="cardText">
                        ID: ${data[i].getId()}
                    </h6>
                    <h6 id="${data[0].getRole()}Email${i}" class="cardText">
                        Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a>
                    </h6>
                    ${outputUnique}
                </div>
            </div>`
}
function ifExist(managerData,engineerData,internData){
    var output = ``
    if(managerData[0] == 0){}
    else{
        output += generateGeneralQuestions(managerData)
    }
    if(engineerData[0] == 0){}
    else{
        output += generateGeneralQuestions(engineerData)
    }
    if(internData[0] == 0){}
    else{
        output += generateGeneralQuestions(internData)
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