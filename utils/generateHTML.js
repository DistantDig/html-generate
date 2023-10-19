
// <-- TITLE RENDERING -->

// Function that returns the title section of README
function renderTitleSection(title) {
    return `${title}`;
  }

// Function to generate html
function generateHTML(data) {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Portfolio Generator</title>
            <!-- Bootstrap Link -->
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <header class="jumbotron text-center">
                <h1>${data.name}</h1>
            </header>
            <div class="container">
                <div class="card mb-5">
                    <div class="card-body">
                        <h5 class="card-title">A Little About Me:</h5>
                        <p class="card-text">I am located in ${data.location}</p>
                        <p class="card-text">Bio </p>
                        <p class="card-text">You can check out my work at ${data.github}</p>
                        <p class="card-text">Interested in hiring me? Heres my LinkedIn: ${data.linkdin}</p> 
                    </div>
                </div>
            </div>
        </body>
    </html>`;
    return html;
  }

  
  module.exports = {generateHTML};