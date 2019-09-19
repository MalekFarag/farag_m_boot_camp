//import team from "./data.js";

(() => {
    console.log('Fired.');
    
    //burger menu
    const burger = document.querySelector('.burgerBut'),
          nav    = document.querySelector('.mainNav'),
          header = document.querySelector('header');

          function showNav(){
              console.log('You touched my burger >:(');
              nav.classList.toggle('hidden');
              burger.classList.toggle('open');
              header.classList.toggle('bg');
          }

          burger.addEventListener('click', showNav);
    
    
    
    const   close    = document.querySelector('.closeX'),
            mates    = document.querySelectorAll('.mateImg'),
            bioHead  = document.querySelector('.bioHead'),
            bio      = document.querySelector('.bio'),
            mateInfo = ["Hey, I’m Nick. I’m the website designer and front end developer for Cliff Creative’s. I’m a creative mind that focuses heavily on branding with logo design’s, style guides, photography, videography, 3D and more, with some HTML5 and CSS on the side. In my free time I love to play basketball, work on and drive cars, as well as portrait and automotive photography.", 
                        "Hey, I’m Collins. I’m the Project Manager at Cliff Creatives. Bringing an idea to life is no walk in the park. It is my job to make sure expectations are met on both sides - the client and the company. I’m a huge soccer fan (Go Manchester United) and in my spare time I love to cook and watch old sitcoms." ,
                        "Hey, I’m Malek. I’m the back-end developer at Cliff Creatives. I love producing projects for the company! We have lots of fun in the office!I like to spend time with friends, trying new things and exploring new places!"];
    // mateInfo: 0 Nick, 1 Collins, 2 Malek

        function closeBio(){
            close.classList.add('off');
            bioHead.innerHTML = "Hello, friend.";
            bioHead.style.textAlign = "center";
            bio.innerHTML = " ";
        }

        close.addEventListener('click', closeBio);

        function showBio(){
            let name = this.className.split(" ")[1];
            
            if(name == "nick"){
                bioHead.innerHTML = "I’m Nick";
                bio.innerHTML = mateInfo[0];

                bioHead.style.textAlign = 'left';
                //bio.style.height = '100px';
            }

            if(name == "collins"){
                bioHead.innerHTML = "I’m Collins";
                bio.innerHTML = mateInfo[1];

                bioHead.style.textAlign = 'center';
                //bio.style.height = '100px';
            }

            if(name == "malek"){
                bioHead.innerHTML = "I’m Malek";
                bio.innerHTML = mateInfo[2];

                bioHead.style.textAlign = 'right';
                //bio.style.height = '100px';
            }
            close.classList.remove('off');
            console.log('clicked', name);
        }

        mates.forEach(mate => mate.addEventListener('click', showBio));


    })();