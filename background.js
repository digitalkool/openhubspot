/*
 * Developer: Ruben Ordonez
 * URL: https://www.rubenordonez.com/
 *   
 */

/*
 * Called by browserAction.onClicked
 */
function openHubSpot() {
  console.log("openHubSpot function called");
  browser.tabs.create({url: "https://app.hubspot.com/login/"});
}
browser.browserAction.onClicked.addListener(openHubSpot);

/*
 * Called when the item has been created, or when creation failed due to an error.
 * We'll just log success/failure here.
 */
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
 * Creates a new context menu item.
 */
browser.menus.create({
  id: "hubspot",
  title: "HubSpot",
  type: "normal",
  contexts: ["all"],
  onclick: openHubSpot
}, onCreated);
