
let acc_box = document.getElementsByClassName('accordian_box');
let i;
for (i = 0; i < acc_box.length; i++) {
    acc_box[i].addEventListener("click", function() {
        this.classList.toggle("active");
        resetAcc(this);

        var description = this.children[1];
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
        } else {
            description.style.maxHeight = description.scrollHeight + "px";
        }
    });
  }

  function resetAcc(skip){
    for (i = 0; i < acc_box.length; i++) {
        // console.log(acc_box[i]);
        if(acc_box[i] !== skip)
        {

            acc_box[i].classList.remove("active");

            var description = acc_box[i].children[1];
             description.style.maxHeight = null;
        }
      }
  }
