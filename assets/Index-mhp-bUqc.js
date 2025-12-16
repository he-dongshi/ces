import{d as E,r as b,o as T,a as u,z as F,c as H,b as S,g as i,h as s,e as z,B as R,k as h,j as U,t as k,A as j,N as g,E as D}from"./index-BUVdxLJQ.js";const I={class:"page p10"},W={class:"actions"},q={class:"right-search"},K=E({__name:"Index",setup(G){const c=b(""),p=b(""),f=b([]),x=b(!1),d=e=>Number(e||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),M=e=>e==null?0:Number(e),$=e=>{const t=e.getFullYear(),a=`${e.getMonth()+1}`.padStart(2,"0"),o=`${e.getDate()}`.padStart(2,"0");return`${t}-${a}-${o}`},Y=()=>{const e=new Date,t=new Date;t.setDate(t.getDate()-30),c.value=$(t),p.value=$(e)},C=(e,t,a)=>{const o=t||{},l=a||{},n=(_,y)=>M(_[y]),r=[];return r.push({name:"一、营业收入",last_amount:n(o,"total_income"),current_amount:n(e,"total_income"),end_amount:n(l,"total_income")}),r.push({name:"销售收入",last_amount:n(o,"sale_income"),current_amount:n(e,"sale_income"),end_amount:n(l,"sale_income")}),r.push({name:"采退收入",last_amount:n(o,"purchase_refund_income"),current_amount:n(e,"purchase_refund_income"),end_amount:n(l,"purchase_refund_income")}),r.push({name:"其他收入",last_amount:n(o,"other_income"),current_amount:n(e,"other_income"),end_amount:n(l,"other_income")}),r.push({name:"二、营业支出",last_amount:n(o,"total_expense"),current_amount:n(e,"total_expense"),end_amount:n(l,"total_expense")}),r.push({name:"采购支出",last_amount:n(o,"purchase_expense"),current_amount:n(e,"purchase_expense"),end_amount:n(l,"purchase_expense")}),r.push({name:"退单支出",last_amount:n(o,"sale_refund_expense"),current_amount:n(e,"sale_refund_expense"),end_amount:n(l,"sale_refund_expense")}),r.push({name:"其他支出",last_amount:n(o,"other_expense"),current_amount:n(e,"other_expense"),end_amount:n(l,"other_expense")}),r.push({name:"三、利润总额",last_amount:n(o,"net_income"),current_amount:n(e,"net_income"),end_amount:n(l,"net_income")}),r},v=async()=>{var n,r,_;x.value=!0;const e={};c.value&&(e.start_time=c.value),p.value&&(e.end_time=p.value);const t=await j.profitStatistics(e),a=((n=t==null?void 0:t.data)==null?void 0:n.current_period)||{},o=((r=t==null?void 0:t.data)==null?void 0:r.previous_period)||{},l=((_=t==null?void 0:t.data)==null?void 0:_.ending_period)||{};f.value=C(a,o,l),x.value=!1},V=()=>{v()},L=()=>{Y(),v()},A=async()=>{try{if(!g.isAvailable()){D.warning("Lodop未安装，将使用浏览器打印"),w();return}if(!await g.init("利润统计报表打印")){D.warning("Lodop初始化失败，将使用浏览器打印"),w();return}g.setPageSize(1,"A4","A4");const{htmlBody:t,htmlStyle:a}=N();g.previewHtml(a,t,{top:10,left:10,width:190,height:277})}catch(e){console.error("打印失败:",e),D.error("打印失败："+e.message),w()}},w=()=>{const e=B(),t=window.open("","_blank");t&&(t.document.write(e),t.document.close(),t.focus(),t.print(),t.close())},B=()=>{let e=`
    <html>
    <head>
      <title>利润统计报表</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; font-size: 12px; }
        .print-header { text-align: center; margin-bottom: 20px; font-size: 16px; font-weight: bold; }
        .print-time { text-align: right; margin-bottom: 10px; color: #666; font-size: 12px; }
        .print-period { text-align: center; margin-bottom: 15px; color: #333; font-size: 14px; }
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
          padding: 8px; 
          text-align: left; 
          background-color: transparent !important;
          word-wrap: break-word;
          overflow-wrap: break-word;
          font-size: 11px;
          margin: 0;
        }
        th { font-weight: bold; text-align: center; }
        th:last-child, td:last-child {
          border-right: none;
        }
        tr:last-child td {
          border-bottom: none;
        }
        .amount { text-align: right; }
        .section-title { font-weight: bold; background-color: #f5f5f5 !important; }
        @media print {
          body { margin: 0; padding: 10px; }
          .print-time { display: none; }
          table { 
            width: 100% !important; 
            max-width: 100% !important;
            border: 1px solid #666 !important;
          }
          th, td { 
            border-right: 1px solid #666 !important;
            border-bottom: 1px solid #666 !important;
            background-color: transparent !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            font-size: 11px !important;
            padding: 8px !important;
            margin: 0 !important;
          }
          th:last-child, td:last-child {
            border-right: none !important;
          }
          tr:last-child td {
            border-bottom: none !important;
          }
          .section-title { 
            background-color: #f5f5f5 !important; 
            font-weight: bold !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-time">打印时间：${new Date().toLocaleString()}</div>
      <div class="print-header">利润统计报表</div>
      <div class="print-period">统计期间：${c.value||"开始日期"} 至 ${p.value||"结束日期"}</div>
      <table>
        <thead>
          <tr>
            <th style="width: 30%;">项目</th>
            <th style="width: 23%;">上期金额</th>
            <th style="width: 23%;">本期金额</th>
            <th style="width: 24%;">期末金额</th>
          </tr>
        </thead>
        <tbody>
  `;return f.value.forEach(t=>{const a=t.name.includes("一、")||t.name.includes("二、")||t.name.includes("三、");e+="<tr>",e+=`<td class="${a?"section-title":""}">${t.name}</td>`,e+=`<td class="amount">${d(t.last_amount)}</td>`,e+=`<td class="amount">${d(t.current_amount)}</td>`,e+=`<td class="amount">${d(t.end_amount)}</td>`,e+="</tr>"}),e+=`
        </tbody>
      </table>
    </body>
    </html>
  `,e},N=()=>{const e=`
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
    .print-period { 
      text-align: center; 
      margin-bottom: 15px; 
      color: #333; 
      font-size: 14px; 
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
      padding: 8px; 
      text-align: left; 
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 11px;
    }
    th { 
      font-weight: bold; 
      text-align: center;
      background-color: #f5f5f5;
    }
    .amount { 
      text-align: right; 
    }
    .section-title { 
      font-weight: bold; 
      background-color: #f5f5f5; 
    }
    tr:nth-child(even) td { 
      background-color: #fafafa; 
    }
  `;let t=`
    <div class="print-time">打印时间：${new Date().toLocaleString()}</div>
    <div class="print-header">利润统计报表</div>
    <div class="print-period">统计期间：${c.value||"开始日期"} 至 ${p.value||"结束日期"}</div>
    <table>
      <thead>
        <tr>
          <th style="width: 30%;">项目</th>
          <th style="width: 23%;">上期金额</th>
          <th style="width: 23%;">本期金额</th>
          <th style="width: 24%;">期末金额</th>
        </tr>
      </thead>
      <tbody>
  `;return f.value.forEach(a=>{const o=a.name.includes("一、")||a.name.includes("二、")||a.name.includes("三、");t+="<tr>",t+=`<td class="${o?"section-title":""}">${a.name}</td>`,t+=`<td class="amount">${d(a.last_amount)}</td>`,t+=`<td class="amount">${d(a.current_amount)}</td>`,t+=`<td class="amount">${d(a.end_amount)}</td>`,t+="</tr>"}),t+=`
      </tbody>
    </table>
  `,{htmlBody:t,htmlStyle:e}};return T(()=>{Y(),v()}),(e,t)=>{const a=u("el-date-picker"),o=u("el-form-item"),l=u("el-button"),n=u("el-form"),r=u("el-table-column"),_=u("el-table"),y=u("el-card"),P=F("loading");return S(),H("div",I,[i(y,{shadow:"never"},{default:s(()=>[z("div",W,[z("div",q,[i(n,{inline:!0},{default:s(()=>[i(o,null,{default:s(()=>[i(a,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=m=>c.value=m),type:"date",placeholder:"开始日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),i(o,null,{default:s(()=>[i(a,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=m=>p.value=m),type:"date",placeholder:"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),i(o,null,{default:s(()=>[i(l,{type:"primary",onClick:V},{default:s(()=>t[2]||(t[2]=[h("查询")])),_:1})]),_:1}),i(o,null,{default:s(()=>[i(l,{onClick:L},{default:s(()=>t[3]||(t[3]=[h("重置")])),_:1})]),_:1}),i(o,null,{default:s(()=>[i(l,{onClick:A,type:"primary"},{default:s(()=>t[4]||(t[4]=[h("打印")])),_:1})]),_:1})]),_:1})])]),R((S(),U(_,{class:"mt20",data:f.value,border:"",stripe:""},{default:s(()=>[i(r,{prop:"name",label:"项目","min-width":"200"}),i(r,{prop:"last_amount",label:"上期金额","min-width":"160"},{default:s(m=>[h(k(d(m.row.last_amount)),1)]),_:1}),i(r,{prop:"current_amount",label:"本期金额","min-width":"160"},{default:s(m=>[h(k(d(m.row.current_amount)),1)]),_:1}),i(r,{prop:"end_amount",label:"期末金额","min-width":"160"},{default:s(m=>[h(k(d(m.row.end_amount)),1)]),_:1})]),_:1},8,["data"])),[[P,x.value]])]),_:1})])}}});export{K as default};
