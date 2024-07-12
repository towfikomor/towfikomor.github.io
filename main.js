document.addEventListener('DOMContentLoaded', function () {
    // Scroll Effect
    window.onscroll = function() {scrollStyle()};
    function scrollStyle(){
      var element = document.getElementById("header");
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll/height)*100;
      if (winScroll >= window.innerHeight){
        element.classList.add("test");
      } else {
        element.classList.remove("test");
      }
    }
  
    // Typewriter Effect
    var typeText = document.querySelector(".typeText");
    var textToBeTypedArr = ["a Full Stack Web Developer", "a Business Analyst", "a Marketing Professional"];
    var index = 0, isAdding = true, textToBeTypedIndex = 0;
  
    function playAnim() {
      setTimeout(function () {
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
        if (isAdding) {
          if (index > textToBeTypedArr[textToBeTypedIndex].length) {
            isAdding = false;
            typeText.classList.add("showAnim");
            setTimeout(function () {
              typeText.classList.remove("showAnim");
              playAnim();
            }, 2000);
            return;
          } else {
            index++;
          }
        } else {
          if (index === 0) {
            isAdding = true;
            textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length;
          } else {
            index--;
          }
        }
        playAnim();
      }, isAdding ? 120 : 60);
    }
    playAnim();
  
    // Animate Skills List
    const skillsList = document.querySelectorAll('.skills-list li');
    skillsList.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.add('visible');
      }, index * 200);
    });
  
    // Animate Skills Chart
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Web Development', 'Web Design', 'SEO', 'Business Analysis', 'Data Visualization', 'Marketing'],
        datasets: [{
          label: 'Years of Experience',
          data: [3, 5, 2, 2, 2, 4],
          backgroundColor: 'rgba(69, 211, 217, 0.6)',
          borderColor: 'rgba(69, 211, 217, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutQuad'
        }
      }
    });
  
  });
  