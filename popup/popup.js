chrome.runtime.sendMessage({
  message: "popup_to_background"
})

const updateBlockList = () => {
    let newUrl = document.getElementById('blockedUrl').value
    newUrl.split(',')
}
const updateAllowList = () => {
    let newUrl = document.getElementById('allowedUrl').value
    newUrl.split(',')
}