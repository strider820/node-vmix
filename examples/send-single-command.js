// Import modules from the package
// Note when using as npm dep: swap in: 'node-vmix' instead of '../index'
const { ConnectionTCP } = require('../dist/index')

// Instanciate connection to vMix instance via TCP localhost:8099
const vMixAddress = 'localhost'
const connection = new ConnectionTCP(vMixAddress)

connection.on('error', (error) => {
  console.error('Error', error)
})
connection.on('data', data => {
  console.log('Got response with data:', data)
})

connection.on('connect', () => {
  console.log('Connected')
  

  // Now that we are connected
  // Perform commands directly on connection
  // You can use any vMix Function here
  // List of all functions here: 
  // https://www.vmix.com/help22/ShortcutFunctionReference.html

  // Perform a single command - a simple cut
  connection.send({ Function: 'Cut' })
})
