(()=>{
'use strict'

// https://www.pubnub.com/docs/console/?channel=one&pchannel=one&origin=ssp.pubnub.com&sub=sub-c-6ac3f30a-14e0-11ec-8d67-2273f4c3fba1&pub=pub-c-dd72c7e2-9c22-4ee2-be70-29a3187159b1&uuid=uuid-12345
const channels     = ['one'];
const publishKey   = 'pub-c-dd72c7e2-9c22-4ee2-be70-29a3187159b1';
const subscribeKey = 'sub-c-6ac3f30a-14e0-11ec-8d67-2273f4c3fba1';
const userId       = 'SUPPORT-AGENT-123';
const origin       = 'ssp.pubnub.com';
//const origin       = 'ps.pndsn.com';

const pubnub = new PubNub({
    publishKey          : publishKey,
    subscribeKey        : subscribeKey,
    uuid                : userId,
    origin              : origin,
    ssl                 : false,
    useInstanceId       : true,
    presenceTimeout     : 150, // SECONDS, consider offline after 2.5 minutes of inactivity
    heartbeatInterval   : 0,
    //suppressLeaveEvents : true,
});

pubnub.addListener({
    status: (statusEvent) => {
	console.log(statusEvent);
    },
    message: (messageEvent) => {
	console.log(messageEvent);
    },
    presence: (presenceEvent) => {
	console.log(presenceEvent);
    }
});

pubnub.subscribe({channels: channels});

})();
