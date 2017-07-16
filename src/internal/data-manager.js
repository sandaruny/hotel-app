import CometD from 'jquery.cometd';

const cometd = CometD;

cometd.configure({
  url: 'http://localhost:8080/MadeInSL-web/cometd'
});

// Handshake with the server. 
cometd.handshake(function(h) {
  if (h.successful) {
    console.log('Handshake Sucessful');
    // Subscribe to receive messages from the server. 
    cometd.subscribe('/mnsl/itemCategories/result', function(m) {
      var dataFromServer = m.data;
      // Use dataFromServer
      console.log('Data' + JSON.stringify(dataFromServer));
    });

    cometd.publish('/mnsl/itemCategories', {});
  }
});

export default cometd;
