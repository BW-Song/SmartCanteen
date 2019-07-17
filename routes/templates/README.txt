   
  I. Introduction to the website
  --------------------------------
    The "ExPerth" website aims to give users a general concept about Perth by showing them 
  introduction to Perth and interesting places in Perth. It also collects the user's opinions
  about Perth.
    "ExPerth" is a word combination of "Explore" and "Perth".

  
  II. File list (There are clear comments in these files)
  --------------
      File Name                                          Theme

   A. HTML5 files

     Home.html                 The front page of the web site which has a picture slide to show the pictures of perth
     About.html                A general introduction to perth using both paragraphs and key words.   
     Attractions.html          List top three places in perth (fremantle, rottnest island and Kings park) using picture 					wall; 
                               Has links to the following 3 pages.
 
     Attraction_fremantle.html Introduction to fremantle  
     Attraction_rottnest.html  Introduction to rottnest island
     Attraction_kingspark      Introduction to Kings park
     Survey.html               To collect the words about the experience in perth
     sign_in.html              Let the user to sign in 
     sign_up.html              Let the user to sign up
     Disclaimer.html           Disclaimer and references
     SiteMap.html              Show Site Map of the website
     Contact.html              Give contact information of the website
     Validation.html           Show validation logo and links of HTML5 and CSS files

   B. CSS files
     
      base.css                 Initial and set of tags
      boxed.css                Basic set of the two boxes: "body" and "wrapper".
                               The "body" is the father box of the "wrapper" box.
                               The "header", "section" and "footer" are son boxes of "wrapper".
      style.css                Set the style if each page. 
      home_pictureslide.css    Set the style of the slide in home.html
      picturewall.css          Set the style of the picture wall in Attractions.html

   C. Javascript files
    
      sign_in.js               Validation of the sign in form
      sign_up.js               Validation of the sign up form
      Survey.js                Validation of the textarea
   
                                          
  
  III. Layout        
  --------------
    Five boxes are used to help with the layout. They are father and son boxes.

                          body (box 1)
                           | 
                           |
                         wrapper(box 2)
                           | 
                           |
            |--------------|-----------------|
          header(box3)  section(box4)   footer(box5)
            |              |                  |
            | the content depends on the topic|of the page                              
    |-------|---------|                       |
website email+mobile navigation               |
 logo                                  Some quick links
  +             
 tagline          
  
     The content of "section"box vary from page to page according to the page's topic while the rest of the 
  boxes are part of the template which are almost the same in each page.  
     

     
  IV. Techniques that used        
  ---------------------------
   A. CSS 
      1. All the page layout use CSS .
      2. Every page use CSS2.1 and CSS3 to give the elements in it styles.
     
         Take "Attractions.html" as an exmple.

         CSS positioning is used to make the box of "wrapper""header""section"and "footer" on the right place. The attributes of margin,padding,width,height and float are all helpful.
         The "section"box is the father box of those pictures. Those pictures use absolute positioning to be positioned relative to its father box "section" since "section" has the attribute of relative position.
         The attributes of CSS3 are used here too. When the mouse is over a specific picture, the picture will rotate, become larger and become the highest layer. These effect rely on the the following attribute:transform,transition and z-index. To be compatible  with different browsers, codes like "-webkit-transform:rotate(20deg);-moz-transform:rotate(20deg);" are used. Those pictures also have borders and shadow because of the use of "border" and "box-shadow".   

       Except the "Attractions.html", all the other pages use CSS2.1 and CSS3 attributes to make the pages look nicer.
"border-radius" is used to make the border of the box circular;in "About.html" and "home.html", "opacity" and "rgba" are used to give opacity to colors. The button of submit in "Survey.html""sign_in.html"and "sign_up.html" uses border,border-radius,box-shadow,text-shadow,opacity and gradient to make the button prettier."input:focus" and "textarea:focus " are used to show changes when the form is focused.

    B. Form control
          Form control is used in "sign_in.html" "sign_up.html" and "Survey.html". Since the rationale is similar,I take                     "sign_up.html" as an example.
          
          "<form action = "#" name="myForm" onsubmit = "return locate();">". From this code we can know that this form will be               submmited to the current page and when the form is submmited, the function "locate();" in javascript will be excuted. This 
       function will be demonstrated in part C. 
          In the sign up form, user need to input their username, password, email and country. The first three of them use "input"
       element to take in the input from users(In"Survey.html", textarea element is used). But the input type of the password should          be "password" to make it only black dots.The password also has a "placeholder" to tell the user the required format of                 password. The input type of username and email is text. The "select" element is used to let user select their country.                 Both of the input and select elements have their "name"attribute to be used by the form validation javascript.
          The two buttons whose type are "submit" and "reset" are used to submit or clear what the user has written. The button               of"submit" type will invoke the "locate();"function.
      

    C. Javascript-Basic form validation
          In "sign_up.html" "sign_in.html" and "Survey.html" JS form validation is used.
          All the three forms use "if( document.Form's name.input's class name.value == "" )" to check whether the input is empty
       or not. If the input is empty, an alert appears and the cursor will be focused on the relative input blank.
          
          In "sign_up.html", the form of email address, password and the confirm of the password are checked.
          If the email address has no "@" or the position of "@" and the last "." is are too close, the email adress will be defined          as wrong and the user will be asked to fill it agian.
          The password is required to be at least 6 characters and has at least one letter and one number, otherwise, the user will 
       be informed to fill the password again.DOM is used to get the value of the input of password and the regular expressions are           used to check whether the password has at least one number and one letter.
       
          If the repeated of the password is not same to the password, the user will be asked to fill it agian. 



    D. DHTML

      1.The slide in the home page ( home.html )

          In the Home page, there is a slide. There are in all five pictures showed in turn. When the mouse is not over the slide, 
       the slide will do switchover automatically. When the mouse is over it, it stops switchover and user can change the pictures 
       by clicking on the "arrow" on left or right side or click on the five little circular buttons on the bottom of the slide. 
         The animation effect of this slide is realized by using the function in javascript. The function will be excuted when the            page is onload. 

         The box whose id is "container" holds the "list" box and the "list" box holds the slide. Actually, in the "list"box ,5               pictures are arranged horizontally but with the attribute of "overflow:hidden" in "container",thus, we can only see one 
       picture each time.

          "<div id="list" style="left: -960px;">" 
         The picture switchover can be achieved by changing the value of "left" in this code:style=left: -960px. If the value of 
      the "left" is changed to -960*2 px, then the second picture appear, the rest can be done in the same manner. 

         As a result, the most basic thing to do is to change the value of "left" every few seconds or when the user click on the            arrow or the little circular buttons. Besides, I should also 
       

       1.1 DOM
          The following codes are the basic layout and CSS of the slide.  

       <section id="container">
           <div id="list" style="left: -960px;">
                 <img src="images/slide_images/5.jpg" alt="5"/>
                 <img src="images/slide_images/1.jpg" alt="1"/>
                 <img src="images/slide_images/2.jpg" alt="2"/>
                 <img src="images/slide_images/3.jpg" alt="3"/>
                 <img src="images/slide_images/4.jpg" alt="4"/>
                 <img src="images/slide_images/5.jpg" alt="5"/>
                 <img src="images/slide_images/1.jpg" alt="1"/>
           </div>
    
           <div id="buttons">
                 <span index = "1" class="on"></span>
                 <span index = "2"></span>
                 <span index = "3"></span>
                 <span index = "4"></span>
                 <span index = "5"></span>
           </div>
    
           <a href="javascript:;" id="prev" class="arrow">&lt;</a>
           <a href="javascript:;" id="next" class="arrow">&gt;</a>
       </section>

       The "container" box hold the slide. The "list" box hold the 5 slide pictures. The "buttons" box hold the 5 circular little           buttons. The "prev" and "next" work as arrows making the slide move left or right. 

       To manipulate these tags' attributes and bind events on them, I should get these elements first by using JS code 
    "document.getElementById('element's id here');". In my code, it is used as the following: 
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
       
       By using "list.style.left", the attribute "left" of the "list" box is got. Then I can change the value of "left" to change
     the picture shown in the slide.

     
     1.2 Event Model
         The main events of the slide are listed below:

         a. On clicking the arrows on the right and left side of the slide, switchover happens and the relative little circular             button's background color changes from black to orange; 
         b. On clicking the little circular buttons on the bottom of the slide,switchover happens and the relative button will 
            change its color from black to orange;
         c. When the mouse is not over the "container" box, the slide will play automatically;
         d. When the mouse is over the "container" box, the slide will stop playing except that one clicks the arrows or the buttons.

         
         a.
           The element of "prev" and "next" have been got by using DOM : var prev = document.getElementById('prev');
                                                                        var next = document.getElementById('next');
          
           Then events can be bound to these elements. The frame of the relization of it is this:
        
           //To show next picture in the slide
             next.onclick = function () { // 1. change the value of "left" ;
                                        2. chaneg the background color of the button;
                                    } 

           //To show previous picture in the slide
             prev.onclick = function () { // 1. change the value of "left" ;
                                        2. chaneg the background color of the button;
                                    } 
   
         b.
          The same with "a", "var buttons = document.getElementById('buttons').getElementsByTagName('span');" help get the 
        element of little circular buttons. 
           The difference between the arrows and buttons are that by clicking on the arrows, the picture will be shown one by one
        while by clicking on the buttons pictures can be shown without order. For example, user can click on the first button and  
        then click on the third button rather than click on the second button. As a result the third picture will be shown right
        after the first picture. The value of "left" should not be changed only by on width of the picture but should be changed
        by 2*(width of the picture). Thus, I use the variable "index" to record the current index of the button and "myIndext" to 
        store the index of the index of the button that the user clicks on. The frame of the codes are shown as below:
     
               for (var i = 0; i < buttons.length; i++) { //To bind the event to every button 
                buttons[i].onclick = function () { //Add "onclick" event to every button                 
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -960 * (myIndex - index); // 960px is the width of each picture
                                                           //offset is the calculated distance to be moved

                    // move the silde of the distance of offset
                    //change the current index to "myIndex"
                    //change the relative button's background color from black to orange
                    
                }
              }


         c,d.
            The same with "a", "var container = document.getElementById('container');" help get the element of "container".
          By adding mouse event the effect can be realized:
            container.onmouseover = function(){ //stop the slide playing };
            container.onmouseout = function(){ //continue the slide playing };
       
                   
     1.3 Javascript
         
         a. The use of "setTimeout()"
         To make the picture switches slowly rather than switching in a blink of an eye, I use the "setTimeout()" and recursive 
       function to make every picture move only part of the aim distance every few miliseconds. By moving several times, the picture          will finish moving the by aim distance.(The aim distance is actually the width of the picture). The frame of the function is 
       shown below:

        var go = function (){ //To make the picture move slowly
                    if (//The picture has not moved by the aim distance) {
                        //change the value of the "left" by adding or minusing the part of the aimed distance

                        setTimeout(go, the inteval of each moving); // recursive
                    }
                    else { //if the picture has moved by the aimed distance
                           //realized switching the pictures in a loop
                    }
                }
         

        Playing the silde autamatically is the similar:
         function play() {
                timer = setTimeout(function () {
                    next.onclick(); //click the "next" arrow automatically 
                    play();  //recursive
                }, interval);
            }
            
      b. JS functions
         The effect of slide can be realized by using different self-defined functions.

         1.function animate (offset);
           This JS function adds the distance of "offset" to the "left" attribute. It is called whenever the picture should be 
         moved. For example, when users click on the arrows or the buttons; when the slide is playing automatically.
         
         2.function showButton();
           This JS function change the background color of the little circular buttons on the bottom of the slide. It changes the 
         background color of current button to orange and change the other buttons' background color to black.

         3.function play();
           This JS function render the slide play automatically.
     
         4.function stop();
           This JS function stops the playing of the slide.


     1.4 CSS
         a. The position and size of the slide is controled by CSS by using "posisiton:relative" "position:absolute; top = **;
      left = **" and "height = **; width = **" ;
    
         b.The different background colors of arrows when mouse is over or leaving arrows is defined by CSS by using 
     ".arrow:hover { background-color: RGBA(0,0,0,.7);}" and ".arrow {background-color: RGBA(0,0,0,.3);}"

         c.The realization of different background colors of buttons is similar to "b"
     
         d.The arrows and buttons are on the higher layer of the pictures because their use of"z-index:2";

         Many other CSS is used in this slide to define the style of each box and things like arrows and buttons. 



   2. Introduce Perth by using key words ( About.html )

      In the "About.html" page, five key words of Perth are listed: Building Projects, Have Fun, Sun Shine, Transition and 
    Isolated. When mouse enters the area of key word, a paragraph will appear while when the mouse leave both the key word area and 
    the relative paragraph area, the relative paragraph will disapear.
      At the first time when the mouse is over one key word, the relative paragraph element should be created and shown. If that 
    element has been created, each time when the mouse is over that key word, I use "display:block" to make that element appear.
   
      By using <ul> and <li>, these 5 key words are listed. The <li> of each key word has its own "id". By using                          "document.getElementById(Id);" I can get the element of each <li> and change the style of the <li> which means to add a
    paragraph that exlpains the key word beside the key word.The following are main codes of creating such an element:
   
     function showTooltip(obj, id, html, width, height) {
     
     //The use of DOM
      tooltipBox = document.createElement('div'); //create an "div" element named as "tooltipBox" 
      tooltipBox.className = 'tooltip-box';       //set the class name of this element
      tooltipBox.id = id;                         //set the id of this element
      tooltipBox.innerHTML = html;                //set the content of the HTML of this element

      obj.appendChild(tooltipBox);                //append the tooltipBox element to the object who calls this function
                                                  //which is usually the "key word"

      //when the element is created, I can set the style of this element (The use of DOM)
        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";
	tooltipBox.style.border = "1px solid #000";
	tooltipBox.style.background = "#FFF5EE";
	tooltipBox.style.color = "#333";
        tooltipBox.style.padding = "10px";
      
      //The use of event: bind the event on the mouse  
       obj.onmouseleave = function () { //When the mouse leave within 100 miliseconds, the paragraph should disapear
                setTimeout(function () {
                    document.getElementById(id).style.display = "none";
                }, 100);
            };

      .....
    }
 
      When mouse is over the key word what should be done is to call "function showTooltip(obj, id, html, width, height);". For            example "var t1 = document.getElementById("id of the <li>"); t1.onmouseenter = function () {
        showTooltip(this, "t1", '<p class = "toolboxfont">Perth is Australia¡¯s (and many say, the world¡¯s) most isolated city,          almost 4000km from Sydney by road, a four-hour flight from the east coast and in a different time zone (Western Standard Time) 
     to the rest of the country.</p>', 300);
    };"  
















































