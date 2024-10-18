// onmessage = function (e) {
//   console.log(e);
// };

// start = function () {
//   console.log("start");
// };

let leader = false; // a SW instance is made leader until a new version is loaded.
const active_tabs = [];
const browser_instances = [];
const browser_instance_map = {};

onconnect = (e) => {
  //get browser instance
  const port = e.ports[0];

  const msgListener = (e) => {
    console.log(e);
    
  };

  //setup listener to message from all tabs
  port.onmessage = msgListener;

  //method to post message to all tabs
  const msgPoster = (data) => {
    if (data?.port) {
      const { tab } = data?.data || {};

      //sends message to specific tab
      browser_instance_map?.[tab] &&
        browser_instance_map[tab].postMessage(data.data);
    } else {
      //sends message to all tabs
      browser_instances.forEach((port) => {
        port.postMessage(data);
      });
    }
  };
};
