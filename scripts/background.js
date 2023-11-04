
let blockedWebsites = [
    'youtube.com',
    'aniwave.to',
    'facebook.com'
  ]

  const isBlocked = (tabId, changeInfo, tab) =>{
    console.log(tab.url)
    for(i=0;i<=blockedWebsites.length;i++)
    if (tab.url.includes(blockedWebsites[i])) {
              sendUrl(tabId)
            }
  }
  const sendUrl= (tabId)=>{
    chrome.tabs.sendMessage(tabId,{
      tabName : 'Yuki is a nerd'
    })
  }
  chrome.tabs.onUpdated.addListener(isBlocked);
  chrome.tabs.onCreated.addListener(isBlocked);