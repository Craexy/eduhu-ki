"use strict";(self["webpackChunkeduhu_ki"]=self["webpackChunkeduhu_ki"]||[]).push([[989],{1989:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var a=n(6252),t=n(9963),r=n(3577);const l=e=>((0,a.dD)("data-v-018ab26e"),e=e(),(0,a.Cn)(),e),u={class:"unterrichtsplaner-container"},i={class:"inputContainer"},o=l((()=>(0,a._)("h2",null,"Anfrage",-1))),c={class:""},g=l((()=>(0,a._)("label",{for:"anlass",class:"m-3"},"Anlass des Elternbriefs:",-1))),d=l((()=>(0,a._)("label",{for:"anweisungen",class:"m-3"},"zusätzliche Anweisungen",-1))),p=l((()=>(0,a._)("label",{for:"stufe",class:"m-3"},"Stufe: ",-1))),m={class:"container"},h=l((()=>(0,a._)("h1",null,"Elternbriefe generieren",-1))),f={class:"messageBox mt-8"},_={class:"inputContainer"};function w(e,s,n,l,w,M){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",i,[o,(0,a._)("div",c,[g,(0,a.wy)((0,a._)("input",{type:"text",id:"anlass",name:"anlass",class:"m-3 messageInput","onUpdate:modelValue":s[0]||(s[0]=s=>e.anlass=s)},null,512),[[t.nr,e.anlass]]),d,(0,a.wy)((0,a._)("input",{type:"text",id:"anweisungen",name:"anweisungen",class:"m-3 messageInput","onUpdate:modelValue":s[1]||(s[1]=e=>w.currentMessage=e)},null,512),[[t.nr,w.currentMessage]]),p,(0,a.wy)((0,a._)("input",{type:"text",id:"stufe",name:"stufe",class:"m-3 messageInput","onUpdate:modelValue":s[2]||(s[2]=s=>e.stufe=s)},null,512),[[t.nr,e.stufe]]),(0,a._)("button",{class:"askButton m-3",onClick:s[3]||(s[3]=s=>M.sendMessage(w.currentMessage,e.stufe,e.anlass))}," Elternbrief generieren ")])]),(0,a._)("div",m,[h,(0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.messages,((e,s)=>((0,a.wg)(),(0,a.iD)("div",{key:s,class:(0,r.C_)("user"==e.role?"messageFromUser":"messageFromChatGpt")},[(0,a._)("div",{class:(0,r.C_)("user"==e.role?"userMessageWrapper":"chatGptMessageWrapper")},[(0,a._)("div",{class:(0,r.C_)("user"==e.role?"userMessageContent":"chatGptMessageContent")},(0,r.zw)(e.content),3)],2)],2)))),128))]),(0,a.wy)((0,a._)("div",_,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>w.currentMessage=e),type:"text",class:"messageInput",placeholder:"Sonstige Anweisungen",onKeyup:s[5]||(s[5]=(0,t.D2)((s=>M.sendMessage(w.currentMessage,e.stufe,e.anlass)),["enter"]))},null,544),[[t.nr,w.currentMessage]]),(0,a._)("button",{onClick:s[6]||(s[6]=s=>M.sendMessage(w.currentMessage,e.stufe,e.anlass)),class:"askButton"}," Fragen ")],512),[[t.F8,w.messages.length>0]])])])}n(7658);var M=n(6154),b={name:"UnterrichtsPlaner",data(){return{prompt:"",currentMessage:"",messages:[]}},methods:{async sendMessage(e,s,n){this.currentMessage="",this.prompt="Erstelle einen Elternbrief für die Klassenstufe "+s+" zum Thema "+n+" und beachte dabei das Folgende: "+e,this.messages.push({role:"user",content:this.prompt}),await M.Z.post("http://localhost:3000/unterrichtsplaner",{chatHistory:this.messages}).then((e=>{console.log(e.data),this.messages.push({role:"assistant",content:e.data.data})}))}}},v=n(3744);const y=(0,v.Z)(b,[["render",w],["__scopeId","data-v-018ab26e"]]);var C=y}}]);
//# sourceMappingURL=989.6ca0c8a4.js.map