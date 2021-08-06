document.querySelector('.player__item-line').oninput = function() {
    this.style.background = 'linear-gradient(to right, #46D1DA 0%, #46D1DA ' + this.value + '%, #DAEEFF ' + this.value + '%, #DAEEFF 100%)'
  };

  document.querySelector('.player__item-volume').oninput = function() {
    this.style.background = 'linear-gradient(to right, #46D1DA 0%, #46D1DA ' + this.value + '%, #DAEEFF ' + this.value + '%, #DAEEFF 100%)'
  };