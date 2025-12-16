import{d as lt,r as w,G as at,H as ot,o as nt,A,m as rt,l as ae,a as v,z as st,c as g,b as c,F as E,e as U,g as u,h as s,D as b,I as oe,k,p as ve,i as z,j as f,B as he,s as S,t as F,x as dt,L as it,M as ut,E as $,y as ct,N as I,O as pt,_ as ft}from"./index-BUVdxLJQ.js";const mt={class:"page p10"},yt={class:"left-actions"},vt={key:0},ht={class:"actions"},gt={class:"left-actions"},bt={key:1},_t={key:2},kt={key:4},xt={class:"upload center"},wt=["src"],Ct={key:7,class:"conversion-tip"},Vt={key:8,class:"price-table"},Kt={class:"share-preview-container"},St={key:0,class:"image-preview"},$t=["src"],Tt={key:1,class:"loading-container"},At=lt({__name:"IndexSearch",props:{list:{type:Object,default:{url:""}},print:{type:Boolean,default:!0},columns:{type:Array,default:[]},edit:{type:Object,default:{url:"",id:"",fields:[{label:"名称",field:"field"}]}},del:{type:Object,default:{url:"",field:""}},searchFields:{type:Array,default:[]},customActions:{type:Object,default:null},customOperationButtons:{type:Array,default:()=>[]},summaryMethod:{type:Function,default:null},getTableSummary:{type:Function,default:null},showSummary:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},treeKey:{type:String,default:"id"},treeParentKey:{type:String,default:"p_id"},treeChildrenKey:{type:String,default:"children"},defaultExpandAll:{type:Boolean,default:!1},maxLevel:{type:Number,default:0}},emits:["handleExport"],setup(C,{emit:Et}){const R=w(!1),V=at(),ge=ot(),n=C;nt(()=>{_e(),T(),be()});const ne=w([]),be=async()=>{var e;const t=await A.goodsCateList({page:1,limit:9999});ne.value=Array.isArray(t.data)?t.data:((e=t.data)==null?void 0:e.data)||[]},W=w(!0),Q=w(!1),M=w(!1),P=w(""),h=rt({pager:{page:1,limit:15},total:0,list:[]}),T=()=>{W.value=!0;const t={...h.pager};n.list.extraParams&&Object.assign(t,n.list.extraParams),m.value&&Object.keys(m.value).forEach(e=>{if(m.value[e]!==void 0&&m.value[e]!=="")if(e==="startTime"&&Array.isArray(m.value[e])){const[l,o]=m.value[e];l&&(t.start_time=re(l)),o&&(t.end_time=re(o))}else t[e]=m.value[e]}),A.list(n.list.url,t).then(e=>{var o,r,d,y,_,x;let l=((r=(o=e==null?void 0:e.data)==null?void 0:o.list)==null?void 0:r.data)||((d=e==null?void 0:e.data)==null?void 0:d.data)||(e==null?void 0:e.data)||[];n.isTree&&(l.length>0&&l.some(G=>G[n.treeChildrenKey]!==void 0)||(l=Me(l))),h.list=l,h.total=((_=(y=e==null?void 0:e.data)==null?void 0:y.list)==null?void 0:_.total)||(e==null?void 0:e.total)||((x=e==null?void 0:e.data)==null?void 0:x.total)||l.length,W.value=!1})},re=t=>{if(!t)return"";const e=typeof t=="string"?new Date(t):t,l=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${l}-${o}-${r}`},Y=w({});w({});const m=w({}),_e=async()=>{n.edit.fields.forEach(t=>{if(t.type=="select")A.list(t.url,{page:1,limit:9999}).then(e=>{Y.value[t.field]=e.data});else if(t.type=="tree-select"){const e={page:1,limit:9999};t.extraParams&&Object.assign(e,t.extraParams),A.list(t.url,e).then(l=>{var y,_,x;let o=((_=(y=l==null?void 0:l.data)==null?void 0:y.list)==null?void 0:_.data)||((x=l==null?void 0:l.data)==null?void 0:x.data)||(l==null?void 0:l.data)||[];const r=t.treeChildrenKey||"children";o.length>0&&o.some(D=>D[r]!==void 0)||(o=$e(o,t)),Y.value[t.field]=o})}})},ke=async()=>{if(n.edit.fields.find(e=>e.field==="number"))try{const e=xe(n.edit.url),l=await A.getNumber({model_str:e});l&&l.data&&(i.value.number=l.data)}catch(e){console.error("获取编号失败:",e)}},xe=t=>({brand:"P",customer:"KH",supplier:"G",goods_cate:"SF",customer_cate:"KF",supplier_cate:"GF",region:"K",cooperate:"H",otherUnit:"Q",staff:"Y",station:"GW",income_expenses:"S",bank_account:"X",origin:"C",unit:"J",sale:"XS",spec:"GG",goods:"SP",warehouse:"CK",deposit:"KZ"})[t]||t.toUpperCase(),N=()=>{h.pager.page=1,T()},we=()=>{m.value={},h.pager.page=1,T()},Ce=(t,e)=>{i.value[e]=t.data.path},X=w(""),B=w(!1),i=w({}),j=w(null),Ve=w({}),se=t=>{if(!t.showCondition)return!0;const e=i.value[t.showCondition];return t.field==="f_unit"?i.value.is_quan===0&&i.value.is_repeated===1:e===t.showValue},Ke=t=>{const e=[];return t.required&&e.push({required:!0,message:`请输入${t.label}`,trigger:[]}),e},Se=t=>{let e=Y.value[t.field]||[];return t.options&&t.options.length>0&&(e=[...t.options,...e]),e},$e=(t,e)=>{if(!t||t.length===0)return[];const l=e.treeKey||"id",o=e.treeParentKey||"p_id",r=e.treeChildrenKey||"children",d={},y=[];return t.forEach(_=>{d[_[l]]={..._,[r]:[]}}),t.forEach(_=>{const x=_[o];x&&x!==0&&d[x]?d[x][r].push(d[_[l]]):y.push(d[_[l]])}),y},Te=t=>Y.value[t.field]||[],O=(t,e)=>{if(!e)return t;const l=e.split(".");let o=t;for(const r of l){if(o==null)return;o=o[r]}return o},q=(t,e)=>{const l=O(t,e.props);return(e.props==="unit"||e.props==="c_unit"||e.props==="b_unit"||e.props==="deposit")&&l===0?"-":l&&typeof l=="object"?l.name??"-":l??"-"},Ae=t=>t.fields.map(e=>({type:e.label,fields:e.fields})),Ee=t=>{if(!t.dynamic)return t.content;const e=J(i.value.unit_id),l=J(i.value.c_unit_id),o=J(i.value.b_unit_id);return`换算关系：1${l}=${i.value.c_ratio||0}×${e}，1${o}=${i.value.b_ratio||0}×${e}`},J=t=>{if(!t||t===0)return"单位";const l=(Y.value.unit_id||[]).find(o=>o.id===t);return l?l.name:"单位"},Ue=()=>{n.customActions&&n.customActions.add?n.customActions.add():Z(null,n.isTree?0:void 0)},Pe=t=>{n.customActions&&n.customActions.edit?n.customActions.edit(t):Z(t)},Z=async(t,e)=>{X.value=t?"修改":"新增",t?i.value={...t}:(await ke(),n.edit.fields.forEach(l=>{l.type=="select"?i.value[l.field]="":l.type=="radio"?i.value[l.field]=l.list[0].value:l.field!=="number"&&l.field!==n.treeParentKey&&(i.value[l.field]="")}),n.isTree&&e!==void 0&&(i.value[n.treeParentKey]=e),i.value.is_quan=0,i.value.is_oversell=0,i.value.status=1,i.value.deposit_id=0,i.value.is_repeated=0),B.value=!0},Oe=async()=>{if(!j.value)return;j.value.clearValidate();const t=n.edit.fields.filter(l=>se(l)),e=t.filter(l=>l.required);for(const l of e){const o=i.value[l.field];if(!o||o===""){$.error(`请输入${l.label}`);return}}try{let l={};if(t.forEach(o=>{o.type==="price_table"&&o.fields?o.fields.forEach(r=>{r.fields.forEach(d=>{l[d]=i.value[d]||""})}):l[o.field]=i.value[o.field]}),n.isTree&&i.value[n.treeParentKey]!==void 0){if(n.maxLevel>0){const o=i.value[n.treeParentKey];if(o&&o!==0){const r=de(h.list),d=r.find(y=>y[n.treeKey]===o);if(d&&ee(d,r)>=n.maxLevel){$.warning(`最多只能添加${n.maxLevel}级分类`);return}}}l[n.treeParentKey]=i.value[n.treeParentKey]}X.value=="新增"?A.add(n.edit.url,l).then(o=>{console.log(o),B.value=!1,T()}):A.edit(n.edit.url,i.value[n.edit.id],l).then(o=>{console.log(o),B.value=!1,T()})}catch(l){console.log("提交失败:",l)}},De=()=>{j.value&&j.value.clearValidate(),i.value={},B.value=!1},Le=t=>{ct.confirm("确认删除吗").then(()=>{A.del(n.del.url,t[n.del.field]).then(e=>{console.log(e),T()})})},ze=ae(()=>{var y;const t=n.edit&&n.edit.url,e=n.del&&n.del.url,l=(y=V.meta)==null?void 0:y.actions,o=!l||l.indexOf("更新")>=0,r=!l||l.indexOf("删除")>=0,d=n.customOperationButtons&&n.customOperationButtons.length>0;return t&&o||e&&r||n.isTree||d}),Be=ae(()=>n.isTree?n.treeKey:void 0),Fe=ae(()=>n.isTree?{children:n.treeChildrenKey,hasChildren:"hasChildren"}:void 0),Me=t=>{if(!t||t.length===0)return[];const e={},l=[];return t.forEach(o=>{e[o[n.treeKey]]={...o,[n.treeChildrenKey]:[]}}),t.forEach(o=>{const r=o[n.treeParentKey];r&&r!==0&&e[r]?e[r][n.treeChildrenKey].push(e[o[n.treeKey]]):l.push(e[o[n.treeKey]])}),l},ee=(t,e=[])=>{if(!t||t[n.treeParentKey]===0||t[n.treeParentKey]===null||t[n.treeParentKey]===void 0)return 1;e.length===0&&(e=de(h.list));const l=e.find(o=>o[n.treeKey]===t[n.treeParentKey]);return l?ee(l,e)+1:1},de=t=>{const e=[],l=o=>{o.forEach(r=>{e.push(r),r[n.treeChildrenKey]&&r[n.treeChildrenKey].length>0&&l(r[n.treeChildrenKey])})};return l(t),e},Ye=()=>({backgroundColor:"#f5f7fa",color:"#606266",textAlign:"center",fontWeight:"600"}),ie=t=>!n.isTree||n.maxLevel===0?!0:ee(t)<n.maxLevel,Ne=t=>{if(!ie(t)){$.warning(`最多只能添加${n.maxLevel}级分类`);return}Z(null,t[n.treeKey])},je=async()=>{var t;try{if(!I.isAvailable()){$.warning("Lodop未安装，将使用浏览器打印"),te();return}if(!await I.init(((t=V.meta)==null?void 0:t.title)||"数据列表打印")){$.warning("Lodop初始化失败，将使用浏览器打印"),te();return}I.setPageSize(1,"A4","A4");const{htmlBody:l,htmlStyle:o}=ue();I.previewHtml(o,l,{top:10,left:10,width:190,height:277})}catch(e){console.error("打印失败:",e),$.error("打印失败："+e.message),te()}},te=()=>{const t=He(),e=window.open("","_blank");e&&(e.document.write(t),e.document.close(),e.focus(),e.print(),e.close())},He=()=>{var l;const t=n.columns.filter(o=>o.props!=="operation"&&o.props!=="img");let e=`
    <html>
    <head>
      <title>打印列表</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; font-size: 12px; }
        .print-header { text-align: center; margin-bottom: 20px; font-size: 16px; font-weight: bold; }
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin-top: 10px;
          table-layout: fixed;
          border: 1px solid #666;
        }
        th, td {
          border-right: 1px solid #666;
          border-bottom: 1px solid #666;
          padding: 6px;
          text-align: left;
          background-color: transparent !important;
          word-wrap: break-word;
          overflow-wrap: break-word;
          font-size: 11px;
          margin: 0;
        }
        th:last-child, td:last-child {
          border-right: none;
        }
        tr:last-child td {
          border-bottom: none;
        }
        th { font-weight: bold; }
        tr:nth-child(even) { background-color: transparent !important; }
        .print-time { text-align: right; margin-bottom: 10px; color: #666; font-size: 12px; }
        @media print {
          body { margin: 0; padding: 10px; }
          .print-time { display: none; }
          thead { display: table-header-group; }
          tfoot { display: table-footer-group; }
          table {
            width: 100% !important;
            max-width: 100% !important;
            border: 1px solid #666 !important;
            border-collapse: collapse !important;
          }
          tr, th, td { page-break-inside: avoid; break-inside: avoid; }
          th, td {
            border: 1px solid #666 !important;
            background-color: transparent !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            font-size: 11px !important;
            padding: 6px !important;
            margin: 0 !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-time">打印时间：${new Date().toLocaleString()}</div>
      <div class="print-header">${((l=V.meta)==null?void 0:l.title)||"数据列表"}</div>
      <table>
        <thead>
          <tr>
  `;return t.forEach(o=>{e+=`<th>${o.label}</th>`}),e+=`
          </tr>
        </thead>
        <tbody>
  `,n.isTree?e+=le(h.list,t,0):h.list.forEach(o=>{e+="<tr>",t.forEach(r=>{const d=q(o,r);e+=`<td>${d}</td>`}),e+="</tr>"}),e+=`
        </tbody>
      </table>
    </body>
    </html>
  `,e},le=(t,e,l=0)=>{let o="";const r=n.treeChildrenKey||"children";return t.forEach(d=>{o+="<tr>",e.forEach((y,_)=>{const x=q(d,y);if(_===0&&n.isTree&&l>0){const D=l*20;o+=`<td style="padding-left: ${D}px;">${x}</td>`}else o+=`<td>${x}</td>`}),o+="</tr>",n.isTree&&d[r]&&Array.isArray(d[r])&&d[r].length>0&&(o+=le(d[r],e,l+1))}),o},ue=()=>{var o;const t=n.columns.filter(r=>r.props!=="operation"&&r.props!=="img"),e=`
    body {
      font-family: Arial, "Microsoft YaHei", sans-serif;
      padding: 10mm;
      font-size: 12px;
      margin: 0;
    }
    .print-header {
      text-align: center;
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
    .print-time {
      text-align: right;
      margin-bottom: 10px;
      color: #666;
      font-size: 11px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      table-layout: fixed;
      border: 1px solid #333;
    }
    th, td {
      border: 1px solid #333;
      padding: 6px;
      text-align: left;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 11px;
    }
    th {
      font-weight: bold;
      background-color: #f5f5f5;
    }
    tr:nth-child(even) td {
      background-color: #fafafa;
    }
  `;let l=`
    <div class="print-time">打印时间：${new Date().toLocaleString()}</div>
    <div class="print-header">${((o=V.meta)==null?void 0:o.title)||"数据列表"}</div>
    <table>
      <thead>
        <tr>
  `;return t.forEach(r=>{l+=`<th>${r.label}</th>`}),l+=`
        </tr>
      </thead>
      <tbody>
  `,n.isTree?l+=le(h.list,t,0):h.list.forEach(r=>{l+="<tr>",t.forEach(d=>{const y=q(r,d);l+=`<td>${y}</td>`}),l+="</tr>"}),l+=`
      </tbody>
    </table>
  `,{htmlBody:l,htmlStyle:e}},Re=async()=>{if(!h.list||h.list.length===0){$.warning("没有数据可分享");return}Q.value=!0,M.value=!0,P.value="";try{const{htmlBody:t,htmlStyle:e}=ue(),l=document.createElement("div");l.style.position="absolute",l.style.left="-9999px",l.style.top="-9999px",l.style.width="210mm",l.style.backgroundColor="#fff",l.style.padding="20px";const o=document.createElement("style");o.textContent=e,l.appendChild(o);const r=document.createElement("div");r.innerHTML=t,l.appendChild(r),document.body.appendChild(l);const d=await pt(l,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!1});P.value=d.toDataURL("image/png"),document.body.removeChild(l),$.success("图片生成成功")}catch(t){console.error("生成分享图片失败:",t),$.error("生成分享图片失败"),M.value=!1}finally{Q.value=!1}},qe=()=>{var e;if(!P.value)return;const t=document.createElement("a");t.href=P.value,t.download=`${((e=V.meta)==null?void 0:e.title)||"数据列表"}_${new Date().getTime()}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t),$.success("图片下载成功")};return(t,e)=>{const l=v("el-input"),o=v("el-form-item"),r=v("el-col"),d=v("el-button"),y=v("el-row"),_=v("el-date-picker"),x=v("el-option"),D=v("el-select"),G=v("el-form"),ce=v("el-card"),H=v("el-table-column"),Ge=v("el-image"),pe=v("el-table"),Ie=v("el-pagination"),We=v("el-tree-select"),Qe=v("el-radio"),Xe=v("el-radio-group"),fe=v("el-icon"),Je=v("el-upload"),Ze=v("el-alert"),me=v("el-dialog"),et=st("loading");return c(),g(E,null,[U("div",mt,[u(ce,{shadow:"never",style:{"margin-bottom":"20px"}},{default:s(()=>[U("div",yt,[u(G,{"label-position":"left",inline:!1,model:m.value},{default:s(()=>[u(y,{gutter:24},{default:s(()=>[u(r,{span:6},{default:s(()=>[u(o,{label:"名称：",class:"goods-form-item"},{default:s(()=>[u(l,{modelValue:m.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>m.value.name=a),placeholder:"名称",onKeyup:oe(N,["enter"])},null,8,["modelValue"])]),_:1})]),_:1}),u(r,{span:6},{default:s(()=>[u(o,{label:"往来单位：",class:"goods-form-item"},{default:s(()=>[u(l,{modelValue:m.value.name,"onUpdate:modelValue":e[1]||(e[1]=a=>m.value.name=a),placeholder:"往来单位",onKeyup:oe(N,["enter"])},null,8,["modelValue"])]),_:1})]),_:1}),u(r,{span:6},{default:s(()=>[u(o,{label:"条码：",class:"goods-form-item"},{default:s(()=>[u(l,{modelValue:m.value.barcode,"onUpdate:modelValue":e[2]||(e[2]=a=>m.value.barcode=a),placeholder:"条码",onKeyup:oe(N,["enter"])},null,8,["modelValue"])]),_:1})]),_:1}),u(r,{span:6},{default:s(()=>[u(d,{type:"primary",onClick:N},{default:s(()=>e[12]||(e[12]=[k("查询")])),_:1}),u(d,{onClick:we},{default:s(()=>e[13]||(e[13]=[k("重置")])),_:1}),u(d,{class:ve({topShow:R.value}),onClick:e[3]||(e[3]=a=>R.value=!R.value)},{default:s(()=>e[14]||(e[14]=[k(" 高级筛选 ")])),_:1},8,["class"])]),_:1})]),_:1}),R.value?(c(),g("div",vt,[u(y,{gutter:24},{default:s(()=>[u(r,{span:12},{default:s(()=>[u(o,{label:"时间：",class:"goods-form-item"},{default:s(()=>[u(_,{modelValue:m.value.startTime,"onUpdate:modelValue":e[4]||(e[4]=a=>m.value.startTime=a),type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"YYYY-MM-DD HH:mm:ss","date-format":"YYYY/MM/DD ddd","time-format":"A hh:mm:ss",shortcuts:t.shortcuts},null,8,["modelValue","shortcuts"])]),_:1})]),_:1}),u(r,{span:6},{default:s(()=>[u(o,{label:"品牌：",class:"goods-form-item"},{default:s(()=>[u(l,{modelValue:m.value.brand,"onUpdate:modelValue":e[5]||(e[5]=a=>m.value.brand=a),placeholder:"请输入品牌"},null,8,["modelValue"])]),_:1})]),_:1}),u(r,{span:6},{default:s(()=>[u(o,{label:"分类：",class:"goods-form-item"},{default:s(()=>[u(D,{modelValue:m.value.cate_id,"onUpdate:modelValue":e[6]||(e[6]=a=>m.value.cate_id=a),filterable:"",clearable:"",placeholder:"选择商品分类",onChange:N},{default:s(()=>[(c(!0),g(E,null,z(ne.value,a=>(c(),f(x,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})])):b("",!0)]),_:1},8,["model"])])]),_:1}),u(ce,{shadow:"never"},{default:s(()=>[U("div",ht,[U("div",gt,[!S(V).meta.actions||S(V).meta.actions.indexOf("新增")>=0?(c(),f(d,{key:0,type:"primary",onClick:Ue},{default:s(()=>e[15]||(e[15]=[k("新增 ")])),_:1})):b("",!0),u(d,{onClick:T},{default:s(()=>e[16]||(e[16]=[k("刷新")])),_:1}),C.print?(c(),f(d,{key:1,onClick:je,type:"primary"},{default:s(()=>e[17]||(e[17]=[k("打印")])),_:1})):b("",!0),C.print?(c(),f(d,{key:2,onClick:Re,type:"success",loading:Q.value},{default:s(()=>e[18]||(e[18]=[k("分享")])),_:1},8,["loading"])):b("",!0),u(d,{type:"success",onClick:t.handleExport},{default:s(()=>e[19]||(e[19]=[k("导出")])),_:1},8,["onClick"])])]),he((c(),f(pe,{class:"mt20",data:h.list,border:"",stripe:"","row-key":Be.value,"tree-props":Fe.value,"default-expand-all":C.defaultExpandAll,"header-cell-style":Ye,"show-summary":C.showSummary,"summary-method":n.getTableSummary?a=>n.getTableSummary(a):C.summaryMethod},{default:s(()=>[u(H,{type:"index",label:"序号",width:"80"}),(c(!0),g(E,null,z(C.columns,(a,K)=>(c(),f(H,{key:K,label:a.label,prop:a.props,"min-width":a.width,sortable:a.sortable},{default:s(({row:p})=>[a.type=="pic"?(c(),f(Ge,{key:0,class:"img",src:O(p,a.props),"preview-src-list":[O(p,a.props)]},null,8,["src","preview-src-list"])):a.type=="name"?(c(),g("div",bt,F(q(p,a)),1)):a.type=="switch"?(c(),g("div",_t,F(O(p,a.props)==1?"开":"关"),1)):a.type=="switch1"?(c(),g("div",{key:3,class:ve(O(p,a.props)==1?"switch1-yes":"switch1-no")},F(O(p,a.props)==1?"是":"否"),3)):(c(),g("div",kt,F(O(p,a.props)),1))]),_:2},1032,["label","prop","min-width","sortable"]))),128)),ze.value||C.customOperationButtons&&C.customOperationButtons.length>0?(c(),f(H,{key:0,label:"操作","min-width":"150",fixed:"right"},{default:s(({row:a})=>[C.isTree&&ie(a)&&(!S(V).meta.actions||S(V).meta.actions.indexOf("新增")>=0)?(c(),f(d,{key:0,type:"success",link:"",size:"small",onClick:K=>Ne(a)},{default:s(()=>e[20]||(e[20]=[k("新增 ")])),_:2},1032,["onClick"])):b("",!0),!S(V).meta.actions||S(V).meta.actions.indexOf("更新")>=0?(c(),f(d,{key:1,type:"primary",link:"",size:"small",onClick:K=>Pe(a)},{default:s(()=>e[21]||(e[21]=[k("修改 ")])),_:2},1032,["onClick"])):b("",!0),!S(V).meta.actions||S(V).meta.actions.indexOf("删除")>=0?(c(),f(d,{key:2,type:"danger",link:"",size:"small",onClick:K=>Le(a)},{default:s(()=>e[22]||(e[22]=[k("删除 ")])),_:2},1032,["onClick"])):b("",!0),(c(!0),g(E,null,z(C.customOperationButtons,K=>(c(),f(d,{key:K.label,type:K.type||"primary",link:"",size:"small",onClick:p=>K.handler&&K.handler(a)},{default:s(()=>[k(F(K.label),1)]),_:2},1032,["type","onClick"]))),128))]),_:1})):b("",!0)]),_:1},8,["data","row-key","tree-props","default-expand-all","show-summary","summary-method"])),[[et,W.value]]),C.isTree?b("",!0):(c(),f(Ie,{key:0,class:"mt10",background:"",layout:"prev, pager, next,jumper","current-page":h.pager.page,"onUpdate:currentPage":e[7]||(e[7]=a=>h.pager.page=a),"page-size":h.pager.limit,total:h.total,onCurrentChange:T},null,8,["current-page","page-size","total"]))]),_:1})]),u(me,{class:"dialog",title:X.value,draggable:"",modelValue:B.value,"onUpdate:modelValue":e[8]||(e[8]=a=>B.value=a),onClose:e[9]||(e[9]=a=>i.value={})},{footer:s(()=>[u(d,{onClick:De},{default:s(()=>e[23]||(e[23]=[k("取消")])),_:1}),u(d,{type:"primary",onClick:Oe},{default:s(()=>e[24]||(e[24]=[k("提交")])),_:1})]),default:s(()=>[u(G,{class:"dialogForm p20","label-width":"125px",rules:Ve.value,ref_key:"formRef",ref:j},{default:s(()=>[(c(!0),g(E,null,z(C.edit.fields,(a,K)=>he((c(),f(o,{key:K,label:a.label+"：",prop:a.field,rules:Ke(a)},{default:s(()=>[a.type=="input"?(c(),f(l,{key:0,type:a.field=="mark"?"textarea":"",rows:4,modelValue:i.value[a.field],"onUpdate:modelValue":p=>i.value[a.field]=p,placeholder:a.placeholder||`请输入${a.label}`,readonly:a.field=="number"},null,8,["type","modelValue","onUpdate:modelValue","placeholder","readonly"])):b("",!0),a.type=="textarea"?(c(),f(l,{key:1,type:"textarea",rows:4,modelValue:i.value[a.field],"onUpdate:modelValue":p=>i.value[a.field]=p,placeholder:`请输入${a.label}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])):b("",!0),a.type=="select"?(c(),f(D,{key:2,modelValue:i.value[a.field],"onUpdate:modelValue":p=>i.value[a.field]=p,placeholder:`请选择${a.label}`},{default:s(()=>[(c(!0),g(E,null,z(Se(a),(p,L)=>(c(),f(x,{key:L,label:p[a.text||"name"],value:p[a.value||"id"]},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):b("",!0),a.type=="tree-select"?(c(),f(We,{key:3,modelValue:i.value[a.field],"onUpdate:modelValue":p=>i.value[a.field]=p,data:Te(a),props:{children:a.treeChildrenKey||"children",label:a.text||"name",value:a.value||"id"},"render-after-expand":!1,"check-strictly":a.checkStrictly!==void 0?a.checkStrictly:!0,placeholder:`请选择${a.label}`,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","data","props","check-strictly","placeholder"])):b("",!0),a.type=="date"?(c(),f(_,{key:4,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",modelValue:i.value[a.field],"onUpdate:modelValue":p=>i.value[a.field]=p,type:"date",placeholder:`请选择${a.label}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])):b("",!0),a.type=="radio"?(c(),f(Xe,{key:5,modelValue:i.value[a.field],"onUpdate:modelValue":p=>i.value[a.field]=p},{default:s(()=>[(c(!0),g(E,null,z(a.list,(p,L)=>(c(),f(Qe,{key:L,value:p.value},{default:s(()=>[k(F(p.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):b("",!0),a.type=="pic"?(c(),f(Je,{key:6,name:"image",headers:{Authorization:`Bearer ${S(ge).token}`},action:"https://software.syn.tswm.club/api/upload/image","show-file-list":!1,"on-success":p=>Ce(p,a.field)},{default:s(()=>[U("div",xt,[i.value[a.field]?(c(),g("img",{key:0,src:i.value[a.field]},null,8,wt)):(c(),f(fe,{key:1,size:"20"},{default:s(()=>[u(S(dt))]),_:1}))])]),_:2},1032,["headers","on-success"])):b("",!0),a.type=="tip"?(c(),g("div",Ct,[u(Ze,{title:Ee(a),type:"info",closable:!1,"show-icon":""},null,8,["title"])])):b("",!0),a.type=="price_table"?(c(),g("div",Vt,[u(pe,{data:Ae(a),border:""},{default:s(()=>[u(H,{prop:"type",label:"价格类型",width:"100",align:"center"}),(c(!0),g(E,null,z(a.columns,(p,L)=>(c(),f(H,{key:L,label:p,width:"150",align:"center"},{default:s(({row:ye})=>[u(l,{modelValue:i.value[ye.fields[L]],"onUpdate:modelValue":tt=>i.value[ye.fields[L]]=tt,placeholder:`请输入${p}价格`,size:"small"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]))),128))]),_:2},1032,["data"])])):b("",!0)]),_:2},1032,["label","prop","rules"])),[[it,se(a)]])),128))]),_:1},8,["rules"])]),_:1},8,["title","modelValue"]),u(me,{modelValue:M.value,"onUpdate:modelValue":e[11]||(e[11]=a=>M.value=a),title:"单据分享",width:"80%",top:"1%","close-on-click-modal":!1},{footer:s(()=>[u(d,{onClick:e[10]||(e[10]=a=>M.value=!1)},{default:s(()=>e[26]||(e[26]=[k("关闭")])),_:1}),u(d,{type:"primary",onClick:qe,disabled:!P.value},{default:s(()=>e[27]||(e[27]=[k("下载图片")])),_:1},8,["disabled"])]),default:s(()=>[U("div",Kt,[P.value?(c(),g("div",St,[U("img",{src:P.value,alt:"打印内容预览",style:{height:"auto",width:"100%"}},null,8,$t)])):(c(),g("div",Tt,[u(fe,{class:"is-loading",style:{"font-size":"24px"}},{default:s(()=>[u(S(ut))]),_:1}),e[25]||(e[25]=U("span",{style:{"margin-left":"8px"}},"正在生成图片...",-1))]))])]),_:1},8,["modelValue"])],64)}}}),Pt=ft(At,[["__scopeId","data-v-291af3ff"]]);export{Pt as P};
