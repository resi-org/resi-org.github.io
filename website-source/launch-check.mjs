import { chromium, webkit } from 'playwright';
import fs from 'node:fs/promises';
const base=process.env.TEST_URL || 'http://127.0.0.1:4387';
const routes=['/','/about/','/research/','/people/','/news/','/seminars/','/support/','/search/','/privacy/'];
const errors=[]; let renders=0;
const out=process.env.TEST_OUTPUT || '/tmp/resi-launch-checks';
await fs.mkdir(out,{recursive:true});
for(const [name,engine] of [['chromium',chromium],['webkit',webkit]]) {
 const browser=await engine.launch();
 const page=await browser.newPage({colorScheme:'light',reducedMotion:'reduce'});
 page.on('pageerror',e=>errors.push(`${name}: ${e.message}`));
 for(const width of [390,1280]) {
  await page.setViewportSize({width,height:900});
  for(const route of routes){
   const response=await page.goto(base+route);
   await page.evaluate(()=>document.fonts.ready);
   await page.locator('footer').scrollIntoViewIfNeeded();
   await page.evaluate(()=>scrollTo(0,0));
   const result=await page.evaluate(()=>({
    overflow:document.documentElement.scrollWidth>innerWidth+1,
    badImages:[...document.images].filter(i=>i.complete && !i.naturalWidth).map(i=>i.src),
    h1:document.querySelectorAll('h1').length,
    noindex:document.querySelector('meta[name=robots]')?.content.includes('noindex'),
    canonical:document.querySelector('link[rel=canonical]')?.href
   }));
   if(![200,304].includes(response.status()) || result.overflow || result.badImages.length || result.h1!==1 || result.noindex || !result.canonical?.startsWith('https://resi.org/')) errors.push({name,width,route,status:response.status(),...result});
   if(name==='chromium' && ['/','/people/','/seminars/'].includes(route)) await page.screenshot({path:`${out}/${base.includes('127.')?'preview':'live'}-${width}-${route.replaceAll('/','_')}.png`,fullPage:true});
   renders++;
  }
 }
 await page.goto(base+'/search/');
 await page.locator('#site-search').fill('Shafi');
 if(!await page.locator('.search-results').innerText().then(s=>s.includes('Shafi'))) errors.push(`${name}: search failed`);
 await page.goto(base+'/about/');
 const disclosure=page.locator('main details').first();
 await disclosure.locator('summary').click();
 if(await disclosure.getAttribute('open')===null)errors.push(`${name}: disclosure failed`);
 await page.locator('.theme-toggle').click();
 if(await page.locator('html').getAttribute('data-theme')!=='dark')errors.push(`${name}: theme failed`);
 await page.setViewportSize({width:390,height:844});
 await page.locator('.mobile-menu summary').click();
 if(!await page.locator('.mobile-menu nav').isVisible())errors.push(`${name}: mobile menu failed`);
 for(const [old,next] of [['/mission/','/about/'],['/announcements/','/news/'],['/home-announcements/','/']]){
  await page.goto(base+old);await page.waitForURL(base+next);
 }
 await page.goto(base+'/#research-team');await page.waitForURL(base+'/people/#research');
 if(process.env.COMPARE_DRAFT==='1'){
  for(const route of routes.filter(r=>r!='/privacy/')){
   await page.goto(base+route);const local=await page.locator('main').innerText();
   await page.goto('https://resi-draft-c-2.rsipser.workers.dev'+route.replace(/\/$/,'/'));
   const draft=await page.locator('main').innerText();
   if(local.replace(/\s+/g,' ').trim()!==draft.replace(/\s+/g,' ').trim())errors.push(`${name}: draft content differs ${route}`);
  }
 }
 await browser.close();
}
const result={base,renders,errors};
await fs.writeFile(`${out}/${base.includes('127.')?'preview':'live'}-report.json`,JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
