import sanitizeHtml from 'sanitize-html' // installed by: npm install sanitize-html

console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>'))
console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>', {allowedTags: ['h1'], allowedAttributes: {}}))
console.log(sanitizeHtml('strong: <strong>I am in a strong tag</strong>'))
console.log(sanitizeHtml('p: <p>I am in a p tag</p>'))
console.log(sanitizeHtml('style: <style>I am in a style tag</style>'))
console.log(sanitizeHtml('script: <script>I am in a script tag</script>'))

const hacker = {
 title: 'Dr',
 surname: '<script>Evil</script>',
 location: 'A dark room somewhere'
}


console.log(sanitizeHtml(hacker.title))
console.log(sanitizeHtml(hacker.surname))
console.log(sanitizeHtml(hacker.location))