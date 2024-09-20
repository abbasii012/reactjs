function CustomRender(MainContainer,elements){
  const createElemnts = document.createElement(elements.type)
  createElemnts.innerHTML = elements.Childern
//   createElemnts.setAttribute('href',elements.props.href)
//   createElemnts.setAttribute('target',elements.props.target)
 for (const prop in elements.props) {
        if (prop === 'Childern') continue;

    createElemnts.setAttribute(prop,elements.props[prop])

    }
    
    MainContainer.appendChild(createElemnts)
 }





const ReactElement =  {
    type:'a',
    props:{
    href : 'https://google.com/',
     target :  '_blank',
    },
    Childern : 'click me For Google'

}


const MainContainer = document.querySelector('#root')

CustomRender(MainContainer,ReactElement);