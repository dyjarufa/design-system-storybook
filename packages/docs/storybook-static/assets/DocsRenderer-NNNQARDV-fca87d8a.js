import{_ as p}from"./iframe-d8fb25d4.js";import{R as e,r as c}from"./index-c013ead5.js";import{r as l,u}from"./react-16-aa54940e.js";import{C as h,A as E,H as d,D as x}from"./index-e218495d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-169ee69c.js";import"./index-11d98b33.js";import"./index-f889f612.js";import"./index-356e4a49.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},H=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-3685aeb7.js"),["./index-3685aeb7.js","./index-dc1d5b46.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js"],import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{H as DocsRenderer,_ as defaultComponents};
