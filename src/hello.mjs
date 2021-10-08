const data = {
  text: 'Welcome!',
  style: {
    h1: `
      color: #333;
      border-bottom: 2px solid #333;
    `
  }
}

const template = `
  <h1 style="${ data.style.h1 }">${ data.text }</h1>
`

export default template
