import{_ as h}from"./navComponent-kpO0eUSD.js";import{x as d,r as m,s as _,b as n,d as r,m as g,e as a,t as f,p as i,F as k,f as D,h as u}from"./index-kgfN4gNx.js";const v=d("postDataList",()=>{const t=m([]);function o(){const e=localStorage.getItem("long-lived-access-token");_.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${e}`).then(s=>{console.log(s),t.value=s.data.data,console.log("post",t.value)}).catch(s=>{console.log(s)})}return{postData:t,getPostData:o}}),y=d("userDataList",()=>{const t=m(null);async function o(){try{const e=localStorage.getItem("long-lived-access-token"),s=await _.get(`https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${e}`);t.value=s.data,console.log("User data:",t.value)}catch(e){console.error("Error fetching user data:",e)}}return{userData:t,getUserData:o}}),x={class:"row mx-0"},b={class:"col m-0 border-start min-vh-100"},w={class:"profile mx-auto py-md-4"},S=a("div",{class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},null,-1),P={class:"row mx-auto border-top"},V=["onClick"],E={class:"post-pic position-absolute w-100 h-100"},I=["src"],U=["src"],$=a("button",{class:"btn"},null,-1),F={__name:"ProfileView",setup(t){const o=v();o.getPostData();const e=y();e.getUserData();const s=function(l){console.log(l)};return(l,B)=>(n(),r("div",x,[g(h),a("main",b,[a("div",w,[S,a("div",null,f(i(e).userData.username),1)]),a("article",P,[(n(!0),r(k,null,D(i(o).postData,(c,p)=>(n(),r("div",{class:"mt-1 col-4 px-0 ps-1",key:p},[a("div",{class:"profile-post",onClick:C=>s(c.id)},[a("div",E,[c.media_type==="IMAGE"?(n(),r("img",{key:0,src:c.media_url,alt:""},null,8,I)):u("",!0),c.media_type==="VIDEO"?(n(),r("img",{key:1,src:c.thumbnail_url,alt:""},null,8,U)):u("",!0)])],8,V)]))),128))]),$])]))}};export{F as default};
