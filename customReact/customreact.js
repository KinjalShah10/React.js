// function customRender(reactElement,container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.herf)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// }


const domElement=document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if (prop === 'children') continue;{
        domElement.setAttribute(prop , reactElement.props[prop])

        
    }
    Container.appendChild(domElement)
}
//How react is shown after compiling
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

