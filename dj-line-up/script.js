var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  
  ready(() => { 

    function getNodeindex(elm){ 
      var c = elm.parentNode.children, i = 0;
      for(; i < c.length; i++ )
          if( c[i] == elm ) return i;
    }
  
    //const btns = document.querySelectorAll('.wrapper .dir-btn a');
    const accordions = document.querySelectorAll('.slr-daily-tab');
    const checks = document.querySelectorAll('input[id]');

    const d = new Date();
    const thisDay = d.getDay();
    let yana = thisDay - 1;

    const handleChange = input => () => {
      [].forEach.call(document.querySelectorAll('.tab-content'), container => {
        container.style.height = null;
      });

      [].forEach.call(document.querySelectorAll('input:checked ~ .tab-content'), container => {
        tHeight = container.querySelector('.slr-tab-content-wrap').offsetHeight + 17;
        container.style.height = tHeight + 'px';
      });
    };

    checks.forEach( elem => {  
      var seq = parseInt(elem.id.substr(3));
      elem.checked = false; 
      
      if (seq === thisDay) {
        //console.log((58 - 24) / 2);
        let p = elem.parentElement; console.log(p);
        let t = p.querySelector('.tab-content');
        t.style.height = parseInt(t.querySelector('.slr-tab-content-wrap').offsetHeight + 17) + 'px';
        var lab = p.getElementsByTagName('label'); console.log(lab);
        elem.checked = true;
        //lab.click();
      }

    });

    [].forEach.call(document.querySelectorAll('input[id]'), input => {
      input.addEventListener('change', handleChange(input));
    });
    
  
    function myFunction(e) {
    var elems = document.querySelectorAll(".showing");
    [].forEach.call(elems, function(el) {
        el.classList.remove("showing");
    });
    e.classList.add("showing");
    }
  
  // });
    
  });
  
  
  
  
  
  