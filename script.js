$(function() {
  setInterval(function() {
    gyan();
    blight();
  }, 10000);

  function gyan() {
    $("img[src^='https://secure.gravatar.com/avatar/fd2bda3f1aa0c7b0d03b570f81fea9e2']").attr('src', 'http://www2.hi-nobori.net/gundam_icon/ico2/ms15@48.gif');
  }

  function blight() {
    $("img[src^='https://secure.gravatar.com/avatar/5ed3e1702c476bd4d699614a9f71e9f1?s=42&d=mm").attr('src', 'http://t2.gstatic.com/images?q=tbn:ANd9GcQl91LBIgwemdJ12hOhBVM4YdfyTGh_C-0dNyKLzamiEZd7BFfPNA')
  }
});
