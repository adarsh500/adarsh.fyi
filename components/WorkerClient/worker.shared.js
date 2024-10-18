let leader = false;
const activeTabs = [];
const browserInstances = [];

onconnect = (e) => {
  const port = e.ports[0];

  const msgListener = (e) => {
    const { type, data } = e.data;

    switch (type) {
      case "register": {
        const { tabId } = data;
        if (!tabId) return;

        if (!activeTabs.includes(tabId)) {
          browserInstances.push(port);
          activeTabs.push(tabId);
          msgPoster({
            type: "register_ack",
            data: {
              tab: String(tabId),
              tabs: activeTabs,
            },
          });
        }
        break;
      }

      case "terminate": {
        const { tabId } = data;
        const index = activeTabs.indexOf(tabId);
        if (index > -1) {
          activeTabs.splice(index, 1);
          msgPoster({
            type: "activeTabs",
            data: {
              tabs: activeTabs,
            },
          });
        }

        const instanceIndex = browserInstances.indexOf(port);
        if (instanceIndex > -1) {
          browserInstances.splice(instanceIndex, 1);
        }
        break;
      }
    }
  };

  port.onmessage = msgListener;

  //post message to all tabs
  const msgPoster = (data) => {
    browserInstances.forEach((port) => {
      port.postMessage(data);
    });
  };
};
