

    HTML CSS JS 

    Result
    Skip Results Iframe

EDIT ON

about=()=>{alert("\n✍️ Infrastructures generates abstract art doodles\n⏱️ It takes about 20 seconds to draw\n🖨️ Images are 4096x4096 for HD printing\n⌨️ Programmed in pure JavaScript\n👨‍💻 By Frank Force @KilledByAPixel\n")},save=()=>{h.download=e+".png",h.href=c.toDataURL("image/png").replace("image/png","image/octet-stream"),h.click()},randomize=t=>{e="oo"+Array(49).fill(0).map(e=>a[Math.random()*a.length|0]).join(""),E()},setFxHash=()=>{e=inputFxhash.value,E()};let e,t,a="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";let l=1;const n=(e=1,t=0)=>(l^=l<<13,l^=l>>>17,l^=l<<5,t+(e-t)*Math.abs(l%1e9)/1e9),i=document.createElement("canvas"),o=document.createElement("canvas"),h=document.createElement("a");o.width=c.width,o.height=c.height,document.body.appendChild(c),document.body.style="background:#111;margin:0;overflow:hidden";let r=0,d=0,s=o.getContext("2d"),g=Math.sin,f=Math.cos;Math.tan;const m=c.getContext("2d");let p,u,w,y,b,x,v,M,$,I,A,C,F,S,R,k=e=>{r=d++/60,P(r),m.fillStyle="#fff",m.fillRect(0,0,c.width,c.height),m.drawImage(o,0,0),m.globalAlpha=.07*inputNoise.value/100,m.drawImage(i,0,0,c.width,c.height),m.globalAlpha=1;const t=1>innerWidth/innerHeight?innerWidth:1*innerHeight;c.style.width=t+"px",w&&(m.fillStyle="#fff",m.globalCompositeOperation="difference",m.fillRect(0,0,c.width,c.height),m.globalCompositeOperation="source-over"),requestAnimationFrame(k)},D=0;const E=()=>{inputFxhash.value=e;let n=e.slice(2),h=new RegExp(".{"+(e.length/4|0)+"}","g"),r=n.match(h).map(e=>{return(t=e).split("").reduce((e,l,n)=>e+a.indexOf(l)*Math.pow(a.length,t.length-n-1),0);var t});t=((e,t,a,l)=>()=>{var n=((e|=0)+(t|=0)|0)+(l|=0)|0;return l=l+1|0,e=t^t>>>9,t=(a|=0)+(a<<3)|0,a=(a=a<<21|a>>>11)+n|0,(n>>>0)/4294967296})(...r),l=1e9*t()|0,D=0,p=1e9*t()|0,u=t()<.5,w=t()<.5,y=t()<.9?t()<.4?2:1:0,b=t()<.5?1:t()<.4?2:0,x=t()<.3?1:t()<.4?2:t()<.6?3:0,v=t()<.3?0:t()<.4?1:2,M=t()<.4?0:t()<.4?1:2,$=t()<.7?0:t()<.6?1:2,I=t()<.3,A=y&&t()<.05,C=!A&&t()<.05,F=!A&&!C&&t()<.05,S=0==b?20:1==b?40:80,R=F?.5:1;{const e=t()<.5?2:4;i.width=c.width/e,i.height=c.height/e;let a=new ImageData(i.width,i.height);for(let e=0;e<a.data.length;e+=4){let t=255*Math.random();for(let l=4;l--;)a.data[e+l]=3==l?255:u?255*Math.random():t}i.getContext("2d").putImageData(a,0,0)}d=0,o.width|=0};let H=[];const P=e=>{if(D>parseFloat(inputSimTime.value))return;if(D+=1/60,!e){l=1e9*t(),s.fillStyle=0==y?"#000":`hsl(${n(1e9)},${n(100)}%,${n(15)}%)`,s.fillRect(0,0,c.width,c.height);const e=v?1==v?Math.PI/4:n(Math.PI/4):0;s.translate(c.width/2,c.height/2),s.rotate(e);let a=1080,i=c.width/a;s.scale(i,i);for(let e=S;e--;)H[e]={x:n(.8*a,.8*-a),y:n(.8*a,.8*-a),a:n(1e3)}}l=p,C&&(l+=1e9*(e/2|0));const a=[];for(let e=3;e--;)a[e]=0|n(1e4);const i=[];for(let e=3;e--;)i[e]=100*e/3|0;const o=0|n(1e9),h=0|n(1e9);I&&(s.globalCompositeOperation="lighter");let r=n(2,5)*(x+1)*10,d=A?e*(30*(n()<.5?1:-1)):0;s.fillStyle="#fff";const m=n(1e9)+d,u=n(100,30);s.globalAlpha=1==M?.4:.1;for(let e=0;e<S;++e){3==x&&(r=n()**1.1*1e3),2==M&&(s.globalAlpha=.05+.5*e/S),s.fillStyle=1==y?`hsl(${m+n(50)},${u}%,${n(50,I||A?60:90)}%)`:2==y?`hsl(${a[e%a.length]+d+n(30)},${n(100)}%,${n(50,A?60:I?70:100)}%)`:`hsl(0,0%,${n(30,100)}%)`;let t=H[e];const l=1;for(let e=1e4/S|0;e--;){let e=t.x+o,a=t.y+h,n=0==$?e^a:1==$?e|a:e&a;t.a+=n/r,s.fillRect(t.x+=R*f(t.a),t.y+=R*g(t.a),l*R,l*R)}}};randomize(1),k()

