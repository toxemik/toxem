const data = {
  text: 'Welcome!',
  style: {
    p: `
      color: #333;
      border-bottom: 2px solid #333;
    `
  }
}

const template = `
  <h1 style="${ data.style.p }">${ data.text }</h1>
`

export default template
