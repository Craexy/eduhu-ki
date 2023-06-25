"use strict";(self["webpackChunkeduhu_ki"]=self["webpackChunkeduhu_ki"]||[]).push([[323],{2323:function(e,n,s){s.r(n),s.d(n,{default:function(){return B}});var t=s(6252),r=s(9963),i=s(3577);const l=e=>((0,t.dD)("data-v-376dfb94"),e=e(),(0,t.Cn)(),e),a={class:"unterrichtsplaner-container"},u={class:"container"},o=l((()=>(0,t._)("h2",null,"Anfrage",-1))),d={class:"form-group"},c=l((()=>(0,t._)("label",{for:"inputText"},"Umzuwandelnder Text:",-1))),p={class:"form-group"},h=l((()=>(0,t._)("label",{for:"inputAge"},"durchschnittliches Alter der Schüler:innen",-1))),g={class:"form-group"},m=l((()=>(0,t._)("label",{for:"inputFlesch"},"gewünschter Flesch-Reading-Ease-Index",-1))),f={class:"form-group"},w=l((()=>(0,t._)("label",{for:"inputSchoolType"},"Schulart",-1))),_={class:"form-group"},b=l((()=>(0,t._)("label",{for:"inputLearningType"},"Lernstil",-1))),v={class:"form-group"},y=l((()=>(0,t._)("label",{for:"inputSize"},"Umfang",-1))),T=l((()=>(0,t._)("option",null,"umfangreich",-1))),x=l((()=>(0,t._)("option",null,"ausführlich",-1))),k=l((()=>(0,t._)("option",null,"knapp",-1))),D=l((()=>(0,t._)("option",null,"so knapp wie möglich",-1))),S=[T,x,k,D],F={class:"container messages"},z=l((()=>(0,t._)("h1",null,"Unterricht planen",-1))),A={class:"messageBox mt-8"},L={class:"inputContainer"};function M(e,n,s,l,T,x){return(0,t.wg)(),(0,t.iD)("div",a,[(0,t.wy)((0,t._)("div",u,[o,(0,t._)("div",d,[c,(0,t.wy)((0,t._)("textarea",{class:"form-control",id:"inputText",rows:"3",placeholder:"Umzuwandelnder Text","onUpdate:modelValue":n[0]||(n[0]=n=>e.inputText=n)},null,512),[[r.nr,e.inputText]])]),(0,t._)("div",p,[h,(0,t.wy)((0,t._)("input",{type:"number",class:"form-control",id:"inputAge","onUpdate:modelValue":n[1]||(n[1]=n=>e.inputAge=n)},null,512),[[r.nr,e.inputAge]])]),(0,t._)("div",g,[m,(0,t.wy)((0,t._)("input",{type:"number",class:"form-control",id:"inputFlesch","onUpdate:modelValue":n[2]||(n[2]=n=>e.inputFlesch=n)},null,512),[[r.nr,e.inputFlesch]])]),(0,t._)("div",f,[w,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"inputSchoolType",placeholder:"z.B. berufsbildende Schule","onUpdate:modelValue":n[3]||(n[3]=n=>e.inputSchoolType=n)},null,512),[[r.nr,e.inputSchoolType]])]),(0,t._)("div",_,[b,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"inputLearningType",placeholder:"z.B. viel eigene Aktivität der Schüler:innen","onUpdate:modelValue":n[4]||(n[4]=n=>e.inputLearningType=n)},null,512),[[r.nr,e.inputLearningType]])]),(0,t._)("div",v,[y,(0,t.wy)((0,t._)("select",{class:"form-control",id:"inputSize","onUpdate:modelValue":n[5]||(n[5]=n=>e.inputSize=n)},S,512),[[r.bM,e.inputSize]])]),(0,t._)("button",{class:"askButton m-3",onClick:n[6]||(n[6]=e=>x.sendMessage("Bitte erstelle den Text."))}," Text umwandeln! ")],512),[[r.F8,0===T.messages.length]]),(0,t.wy)((0,t._)("div",F,[z,(0,t._)("div",A,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(T.messages,((e,n)=>((0,t.wg)(),(0,t.iD)(t.HY,{key:n},["user"===e.role||"assistant"===e.role?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,i.C_)({messageFromUser:"user"===e.role,messageFromChatGpt:"assistant"===e.role,messageFromSystem:"user"!==e.role&&"assistant"!==e.role})},[(0,t._)("div",{class:(0,i.C_)("user"==e.role?"userMessageWrapper":"chatGptMessageWrapper")},[(0,t._)("div",{class:(0,i.C_)("user"==e.role?"userMessageContent":"chatGptMessageContent")},(0,i.zw)(e.content),3)],2)],2)):(0,t.kq)("",!0)],64)))),128))]),(0,t._)("div",L,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":n[7]||(n[7]=n=>e.currentMessage=n),type:"text",class:"messageInput",placeholder:"Stell mir eine Frage...",onKeyup:n[8]||(n[8]=(0,r.D2)((n=>x.sendMessage(e.currentMessage)),["enter"]))},null,544),[[r.nr,e.currentMessage]]),(0,t._)("button",{onClick:n[9]||(n[9]=n=>x.sendMessage(e.currentMessage)),class:"askButton"}," Fragen ")])],512),[[r.F8,T.messages.length>0]])])}s(7658);var U=s(6154),C={name:"UnterrichtsPlaner",data(){return{messages:[]}},methods:{async sendMessage(e){this.currentMessage="",this.messages.length>0||(this.messages.push({role:"system",content:"Du bist eine KI, die Lehrpersonen bei der Erstellung von Lehrmaterialien unterstützt.Du erhältst zunächst einige Informationen zur Lerngruppe und zu der Lehrkraft. Anschließend bekommst du Anweisungen zur genauen Aufgabe.Lerngruppe: Die Schüler:innen der Lerngruppe haben im Durchschnitt folgendes Alter"+this.inputAge+" Das Leseverständnis wird über den Flesch-Reading-Ease-Index bestimmt. Der Wert wird als "+this.inputFlesch+" im Durchschnitt angegeben.Der:die Lehrer:in unterrichtet an folgender Schulform: "+this.inputSchoolType+"Die Lehrkraft beschreibt ihren Lernstil wie folgt: "+this.inputLearningType+"Deine Aufgabe ist es, einen Fachtext so umzuformulieren, dass er für die Schüler:innen des angegebenen Alters gut verständlich ist. Du erhältst dafür als Input den (1) Text, (2) Informationen zum Umfang des Textes, der generiert werden soll und (3) Hinweise, wie du den Text für die Zielgruppe schreiben sollst.  (1) Folgender Text soll umgewandelt werden: "+this.inputText+"(2) Der Text soll "+this.inputSize+"formuliert werden. (3) Textformulierung: Dieser Text ist für Schüler:innen. Deshalb soll er leicht verständlich formuliert werden.Das bedeutet, dass der Text am Ende den Wert des „Flesch-Reading-Ease“-Indexes erfüllen soll, der als Durchschnitt für die Gruppe angegeben wurde. Außerdem solltest du folgende Kriterien für die Formulierung von einfachen Texten berücksichtigen: Sätze sollten kurz gehalten werden (15 – 20 Worte), vorwiegend aktive statt passiver Sprache verwendet werden, konkrete Beispiele und Analogien immer dort verwenden, wo es für das Verständnis sinnvoll ist, klar gegliedert werden und über eine aussagekräftige Überschrift sowie über Zwischenüberschriften im Text verfügen. Verwende Fachsprache, aber füge als Fußnote entsprechende Erklärungen an."}),console.log(this.messages)),this.messages.push({role:"user",content:e}),await U.Z.post("http://localhost:3000/unterrichtsplaner",{chatHistory:this.messages}).then((e=>{console.log(e.data.data),this.messages.push({role:"assistant",content:e.data.data})}))}}},I=s(3744);const V=(0,I.Z)(C,[["render",M],["__scopeId","data-v-376dfb94"]]);var B=V}}]);
//# sourceMappingURL=323.4097d5a6.js.map