# Support Agent Presence Tracking

Two options are demonstrated.
`one.html` and `two.html`.

## Presence Tuning/Configuration for Support Agent Tracking

>*TL;DR*
> *Option #1 seems like a generally good approach.*
> It matches the customer's requirements, also it tracks individual tabs.
> Option #2 is an alternative that also works,
> and is simpler from a solution perspective regarding customer implementation.
> Option #1 sounds more ideal as it comes with more power and flexability.

Found two solutions, confirmed to work.
Heartbeats should be disabled due to browser throttling and tabs in the background.

#### Option One
An "agent-channel" is a channel the agent subscribes to.
Each tab has an "agent-uuid" with a suffix of a "windowID/tabID".
The webhook is registered to "active" and "inactive".
When the agent opens their first tab, the "active" webhook fires.
Subsequent tabs being opened will not fire any events.
Once all tabs are closed, the "inactive" webhook fires.
The occupancy count represents the number of Tabs open for that agent's channel.
No special settings are needed, though we can tune/tweak behavior as needed.
This option has the most value and is more inline with stock presence capability.
This is a good design pattern that can be used to accomplish the customer's business requirements.

#### Option Two
Using special JS SDK settings and special PNConfig settings,
we can track an Agent's activity across all tabs, using a single UUID.
After inactivity of 300 seconds (tunable),
a timeout event is fired, marking the agent has gone offline.
This option is the simplest,
though requires specific SDK and PNConfig settings.
It's the simplest as it requires little consideration.
