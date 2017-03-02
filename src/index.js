chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: `
      var buttons = document.getElementsByClassName('elm-mini-controls-button')
      var firstButton = buttons[0]
      if (firstButton) {
        var clickEvent = new Event('click')
        firstButton.dispatchEvent(clickEvent)﻿
      }
    `
  })
})
