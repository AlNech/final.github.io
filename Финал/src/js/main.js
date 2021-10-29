$( document ).ready(function() {
    const itemData = {
        "structure": [
          {
            "type": "node",
            "children": [
              {
                "type": "link",
                "props": { "href": "go/to/owen-lars", "children": ["Owen Lars"] }
              },
              {
                "type": "link",
                "props": { "href": "go/to/obi-wan-kenobi", "children": ["Obi-Wan Kenobi"] }
              }
            ]
          },
          {
            "type": "node",
            "children": [
              {
                "type": "link",
                "props": { "href": "go/to/mon-mothma", "children": ["Mon Mothma"] }
              },
              { "type": "button", "props": { "children": ["Kit Fisto"] } }
            ]
          },
          {
            "type": "node",
            "children": [
              { "type": "button", "props": { "children": ["Palpatine"] } },
              {
                "type": "link",
                "props": { "href": "go/to/jango-fett", "children": ["Jango Fett"] }
              }
            ]
          },
          {
            "type": "node",
            "children": [
              {
                "type": "link",
                "props": { "href": "go/to/yarael-poof", "children": ["Yarael Poof"] }
              },
              { "type": "button", "props": { "children": ["Bib Fortuna"] } },
              { "type": "button", "props": { "children": ["Nien Nunb"] } },
              { "type": "button", "props": { "children": ["Dooku"] } },
              { "type": "link", "props": { "href": "go/to/watto", "children": ["Watto"] } }
            ]
          }
        ],
        "components": {
          "link": {
            "style": "color:red;font-size:20px;"
          },
          "button": {
            "style": "display:block;width:100%;border:none;height:30px;"
          }
        }
      }
    
   
   
   
    // Create div, a, button from structure
    $('#app-menu').append(`<div class="div1">
        <a href="${itemData.structure[3].children[0].props.href}">${itemData.structure[3].children[0].props.children.join('')}</a>
        <a type="button" class="btn">${itemData.structure[3].children[1].props.children.join('')}</a>
        <a type="button" class="btn">${itemData.structure[3].children[2].props.children.join('')}</a>
        <a type="button" class="btn">${itemData.structure[3].children[3].props.children.join('')}</a>
        <a href="${itemData.structure[3].children[4].props.href}">${itemData.structure[3].children[4].props.children.join('')}</a>
    </div>`);


    $('.div1').after(`<div class="div2">
        <a type="button" class="btn">${itemData.structure[2].children[0].props.children.join('')}</a>
        <a href="${itemData.structure[2].children[1].props.href}">${itemData.structure[2].children[1].props.children.join('')}</a>
        </div>
        `);
    $('.div2').after(`<div class="div3" id="div3">
        <a href="${itemData.structure[1].children[0].props.href}">${itemData.structure[1].children[0].props.children.join('')}</a>
        <a type="button" class="btn">${itemData.structure[1].children[1].props.children.join('')}</a>
    </div>`);
    $('.div3').after(`<div class="div4">
        <a href="${itemData.structure[0].children[0].props.href}">${itemData.structure[0].children[0].props.children.join('')}</a>
        <a href="${itemData.structure[0].children[1].props.href}">${itemData.structure[0].children[1].props.children.join('')}</a>
    </div>`);



    //Style for a, button from components
    $("a").has(".btn").css({display:'block', width: '100%' , border:'none', height:'30px'});
    $("a").css({color: 'red' ,fontSize: '20px'});
    


    //Move items in div 
    $('.div1 > a').draggable({
        cursor: 'move',
        containment: 'parent'});

    $('.div1 > button').draggable({
            cursor: 'move',
            containment: 'parent'});
            
            
    $('.div2 > a ').draggable({
        cursor: 'move',
        containment: 'parent'});
        
    $('.div3 > a ').draggable({
        cursor: 'move',
        containment: 'parent'});
        
    $('.div4 > a ').draggable({
        cursor: 'move',
        containment: 'parent'});    


    $('#save-btn').click(function func(){
            
            let initElement = document.getElementById("app-menu");
            let json = initElement;
            console.log(json);
      
    })
   
})