// Import modules from the package
// Note when using as npm dep: swap in: 'node-vmix' instead of '../index'
const { ConnectionTCP } = require('../dist/index')

// Instanciate connection to vMix instance via TCP localhost:8099
const connection = new ConnectionTCP('localhost', '8089')

connection.on('error', (error) => {
  console.error('Error', error)
})
connection.on('data', data => {
  console.log('Got response with data:', data)
})


connection.on('connect', () => {
  console.log('Connected')
  
  // Perform commands directly on connection as soon as connected
  // You can use any vMix Function here
  // List of all functions here: 
  // https://www.vmix.com/help22/ShortcutFunctionReference.html

  // Perform multiple commands at once:
  connection.send([
    'TALLY', // Get tally information
    // - On title on input with name 'MyTitle' - set text of field "TitleField" to the text "Updated text!"
    { Function: 'SetText', Input: 'MyTitle', SelectedName: 'TitleField', Value: 'Updated text!' },
    // - Put input 1 on air on overlay channel 1
    { Function: 'OverlayInput1On', Input: 'MyTitle' },
    // - Perform Cut to the input currently in preview
    { Function: 'Cut' }
  ])
})
