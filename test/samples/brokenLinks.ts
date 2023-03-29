import fetch from 'node-fetch'
import JasmineExpect from '@wdio/jasmine-framework';


describe("Broken links" ,()=>{

    it("verify broken links...",async()=>{
     let baseUrl = "https://qavbox.github.io/";
     browser.url(`${baseUrl}demo/links/`);
     await browser.pause(2000)
     console.log(`${baseUrl}demo/links/`);
     await $$('a').forEach(async (link)=>{
        await link.getAttribute('href').then(async (href)=>{
            let url:string | URL=href
            if(!url.startsWith('http')){
                console.log("before - " +url)
                url = new URL(url,baseUrl)
                console.log("after - " + url);
            }
             await fetch(url).then(async (resp)=>{
                //expect(resp.status).toMatch(/^[2-3].*/)
                expect(resp.status)
                  .withContext(
                    "link '" +
                      (await link.getText()) +
                      "'returned status " +
                      resp.status
                  )
                  .toBeLessThan(400);
            })
        })
     })
    })
})
