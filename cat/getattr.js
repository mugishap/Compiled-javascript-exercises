function getAttributes(){
    let link = document.querySelector("#w3r")
   let href = link.getAttribute("href")
   let hrefLang = link.getAttribute("hreflang")
   let rel = link.getAttribute("rel")
   let target = link.getAttribute("target")
   let type = link.getAttribute("type")
   let resultDiv = document.querySelector(".results")
   
   let hrefText = document.createTextNode("href: " +href + "\n")
   let hrefLangText = document.createTextNode("hrefLang: " + hrefLang)
   let relText = document.createTextNode("\nrel: " + rel)
   let targetText = document.createTextNode("target: " +target )
   let typeText = document.createTextNode("type: " + type)    
   
   let p1 = document.createElement("p").appendChild(hrefText)
   let p2 = document.createElement("p").appendChild(hrefLangText)
   let p3 = document.createElement("p").appendChild(relText)
   let p4 = document.createElement("p").appendChild(targetText)
   let p5 = document.createElement("p").appendChild(typeText)
   
resultDiv.append(p1,p2,p3,p4,p5)
}