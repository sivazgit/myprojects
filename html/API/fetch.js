//  <!-- Using fetch rather than XMLHttpRequest -->

 fetch('https://jsonplaceholder.typicode.com/todos')
.then(result=>result.json())
.then(todos=>displayData(todos))


// display data in the html


function displayData(todos){
    html_content = "";
    for(let todo of todos){
        html_content = html_content+"<tr><td>"+todo.userId+"</td><td>"+todo.id+"</td><td>"+todo.title+"</td><td>"+todo.completed+"</td></tr>"
        result.innerHtml += html_content
    }
}
        