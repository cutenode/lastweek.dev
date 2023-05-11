const generate = require('@retrogen/generate')
const fs = require('fs/promises')
const path = require('path')
const { DateTime } = require('luxon')

async function markdown (organization, tags) {

  const now = DateTime.now()
  const then = now.minus({ days: 7 }) // change this if you want to set a different period - you can set to weeks or months, too. Check the Luxon DateTime API.

  // the date range we want to get information for
  const dates = {
    start: then.toISODate(),
    end: now.toISODate()
  }

  const retro = await generate(organization, dates)
  const header = `---
title: Week of ${dates.start} in ${organization}
pubDate: ${dates.end}
description: 'A weekly recap of what happened in the ${organization} organization on GitHub, covering Issues, Pull Requests, and Discussions in all active repos.'
author: 'Tierney Cyren'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["${organization}", ${tags.map(tag => `"${tag}"`).join(', ')}] 
---
`

  // write the data out to a file
  fs.writeFile(path.resolve(`./src/pages/posts/${organization}-${dates.start}.md`), `${header}\n${retro}`)
}

const orgs = {
  'nodejs': {
    tags: ['javascript', 'web', 'node.js', 'back-end']
  },
  'kubernetes': {
    tags: ['kubernetes', 'cloud', 'containers', 'infrastructure']
  },
  'fastify': {
    tags: ['javascript', 'web', 'node.js', 'web server', 'back-end']
  },
  'withastro': {
    tags: ['javascript', 'web', 'front-end']
  },
  'electron': {
    tags: ['javascript', 'desktop', 'front-end', 'application']
  }
}

for (let org in orgs) {
  markdown(org, orgs[org].tags)
}