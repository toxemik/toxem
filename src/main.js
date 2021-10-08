/*
** execute when the DOM is fully loaded
*/
window.onload = () => {
    // write hello to the console
    hello()
    // render helloWorld.md to the DOM
    renderMarkdownFile('helloWorld.md')
}

/*
** data
*/

const data = {
    message: 'hello!',
    md: window.markdownit()
}

/*
** functions
*/

// write the message data.message to the the console
function hello() {
    console.log( `Message from src/main.js : ${ data.message }` )
}

// render a markdown file from ./content/ to the tag with id="markdown"
function renderMarkdownFile(file) {
    if(document.getElementById('markdown')){
        var request = new XMLHttpRequest();
        request.open('GET', './content/' + file);
        request.responseType = 'text';
        
        request.onload = function() {
            let mdContent = request.response;
            mdContent = data.md.render(mdContent);
            document.getElementById('markdown').innerHTML = mdContent;
        };
        
        request.send();
    }
    else
        console.log('no markdown id found')
}
