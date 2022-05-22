let clear = () => {
    let content = document.getElementById('content');
    content.className = '';
    let HeaderBtns = document.getElementById('header-right');
    let HeaderBtnsChildren = HeaderBtns.children;
    for (let i = 0; i < HeaderBtnsChildren.length; i++){
        if (HeaderBtnsChildren[i].classList.contains('activeHeaderbtn')){
            HeaderBtnsChildren[i].classList.remove('activeHeaderbtn')
        };
    };
    let ContentWrapper = document.getElementById('ContentWrapper');
    ContentWrapper.remove();



  }
  
  export default clear;