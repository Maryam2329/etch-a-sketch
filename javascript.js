

let etchASketch = function (gridsize){
    let opacity = 0;
    const container = document.querySelector('body');
    // start the creation of the grid
    const content = document.createElement('div');
    content.style.cssText = 'color: blue; background: white;';
    content.style.border="thick solid blue";
    content.style.display='flex';
    container.appendChild(content);
    for(i=1;i<gridsize;i++){
        const content_column = document.createElement('div');
        content_column.style.cssText = 'color: red;';
        content_column.style.border="thick solid red";
        content_column.style.flex='1';
        content_column.style.display='flex';
        content_column.style.flexDirection='column';
        content.appendChild(content_column);
        for(j=1;j<gridsize;j++){
            const content_element = document.createElement('div');
            content_element.textContent = 'Grid element C'+i+'L'+j;
            content_element.style.cssText = 'color: orange; background: white;';
            content_element.style.border="thick solid orange";
            content_element.style.display='flex';
            content_element.style.flexDirection='column';
            content_element.addEventListener("mouseover", () => {
                content_element.style.cssText = 'color: orange; background: lightpink;';
                content_element.style.border="thick solid orange";
            });
            content_element.addEventListener("mouseout", () => {
                // version with initial color
                content_element.style.cssText = 'color: orange; background: white';
                /*
                //version with random background color
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                content_element.style.cssText = 'color: orange; background: #'+randomColor;
                */
                content_element.style.border="thick solid orange";
            });
            content_column.appendChild(content_element);
            
        }
    }
};
let getGridSize = function (){
    let n = 17;
    const container = document.querySelector('body');
    // create a button to ask for the number of grids
    const button = document.createElement('button');
    button.textContent = 'Click me to define the grid size you want.';
    button.style.border="thick solid darkgrey";
    button.style.marginBottom='30px';
    button.addEventListener('click',()=>{
        let m=prompt('Please enter the grid size you want to display.');
        if (m>0){
            n=Math.round(m);
            etchASketch(n);
        } else {
            alert('What you entered is not a positive number, therefore the default value of 16 will be used.');
            etchASketch(n);
        }
    }
    );
    container.appendChild(button);
}
getGridSize();
