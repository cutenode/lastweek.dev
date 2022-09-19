const generate = require('./tools/generate')

const orgs = [
  'nodejs',
  'npm',
  'pkgjs',
  'openjs-foundation'
]
async function generator () { // need an async function so we can await
  for (const org of orgs) {
    await generate(org) // this automatically writes the files for us
  }
}