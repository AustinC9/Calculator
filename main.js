// let h1 = document.getElementsByTagName('H1')[0];
// let att = document.createAttribute('class');
// att.value = 'democlass';
// h1.setAttributeNode(att);

//
function init() {
    generateButton('id1', 'hello');
    generateButton('id2', 'Test');
    //generateTitle();



    //     const buttonRow = generateElement('div', 'buttonRow', 'row mt-3');
    //     const buttonCol = generateElement('div','buttonCol', 'col');
    //     const buttonTitle = generateElement('h1', 'buttonTitle', 'text-success');
    //     buttonTitle.textContent = 'Testing';
    // console.log(buttonTitle);
    // let main = document.getElementById('app');
    // main.appendChild(buttonCon);
}
function generateButton(id, name) {
    const buttonCon = generateElement("div", "container-fluid");
    const buttonRow = generateElement("div", "row");
    const buttonCol = generateElement('div', 'col-4');
    const button = generateElement('button', 'btn btn-danger');
    button.textContent = name;
    button.setAttribute("id", id);


    let main = document.getElementById('app');
    buttonCol.appendChild(button);
    buttonRow.appendChild(buttonCol);
    buttonCon.appendChild(buttonRow);
    main.appendChild(buttonCon);
}

function generateElement(element, classes) {
    let output = document.createElement(element);
    output.setAttribute("class", classes)
    return output;

}
// make a container using generate element
// make row
// make column
// make heading
// use textContent to create something
// appendChild container to div app
// I have an element which is setAttribute, etc...
// 'div' is not an element
// 'buttonRow' is not a class
// so i need to redo my const
// using setAttribute("name", value)
// 




// creating function to eliminate WET coding
// generateElement function to pass through different parameters
// pass through element and classes for now
// maybe later pass through id
// setAttribute("name", value)
// return output
// const currentDiv = document.getElementById("app");
//     const h1 = document.createElement("h1");
//     h1.innerText = "Calculator";
//     currentDiv.appendChild(h1);