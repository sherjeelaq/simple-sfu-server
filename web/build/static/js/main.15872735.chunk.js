(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(26),s=n.n(o),i=n(27),a=n(2),u=n(8),d=n.n(u),p=n(10),f=n(12),j=n.n(f),l={iceServers:[{urls:"stun:stun.stunprotocol.org"}]},h="https://sfuserver.herokuapp.com",b=n(1),v=l,x=h;var O=function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:n=e.sent,document.getElementById("video").srcObject=n,r=t(),n.getTracks().forEach((function(e){return r.addTrack(e,n)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){var e=new RTCPeerConnection(v);return e.onnegotiationneeded=function(){return function(e){return n.apply(this,arguments)}(e)},e}function n(){return(n=Object(p.a)(d.a.mark((function e(t){var n,r,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createOffer();case 2:return n=e.sent,e.next=5,t.setLocalDescription(n);case 5:return r={sdp:t.localDescription},e.next=8,j.a.post("".concat(x,"/broadcast"),r);case 8:c=e.sent,o=c.data,s=new RTCSessionDescription(o.sdp),t.setRemoteDescription(s).catch((function(e){return console.log(e)}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Host"}),Object(b.jsx)("video",{autoPlay:!0,id:"video"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{id:"my-button",onClick:function(){return function(){return e.apply(this,arguments)}()},children:"Start Stream"})]})},m=l,w=h;var y=function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t().addTransceiver("video",{direction:"recvonly"});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){var e=new RTCPeerConnection(m);return e.ontrack=r,e.onnegotiationneeded=function(){return function(e){return n.apply(this,arguments)}(e)},e}function n(){return(n=Object(p.a)(d.a.mark((function e(t){var n,r,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createOffer({offerToReceiveAudio:1,offerToReceiveVideo:1});case 2:return n=e.sent,e.next=5,t.setLocalDescription(n);case 5:return r={sdp:t.localDescription},e.next=8,j.a.post("".concat(w,"/consumer"),r);case 8:c=e.sent,o=c.data,s=new RTCSessionDescription(o.sdp),t.setRemoteDescription(s).catch((function(e){return console.log(e)}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(e){var t=document.getElementById("video");console.log("tack is >>",e.streams[0]),t.srcObject=e.streams[0]}return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Viewer"}),Object(b.jsx)("div",{id:"vidCon",children:Object(b.jsx)("video",{autoPlay:!0,id:"video",style:{height:300,width:300,borderRadius:10},children:Object(b.jsx)("source",{src:"",type:"video/mp4"})})}),Object(b.jsx)("button",{id:"my-button",onClick:function(){return function(){return e.apply(this,arguments)}()},children:"View Stream"})]})};var g=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"/host",component:O}),Object(b.jsx)(a.b,{path:"/guest",component:y}),Object(b.jsx)(a.a,{from:"*",to:"/guest"})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.15872735.chunk.js.map