$(document).ready(function() {
  // Make draggable items
  $('.draggable-item').draggable({
    revert: true,
    zIndex: 1000,
    cursor: 'move',
    helper: 'clone'
  });

  // Make droppable container
  $('#fusion-output').droppable({
    accept: '.draggable-item',
    drop: function(event, ui) {
      var item1 = ui.helper.text(); // Get text of dragged item
      var item2 = $(this).text();   // Get text of droppable container
      var fusion = generate_fusion(item1, item2);
      $(this).text(fusion);
    }
  });

  // Function to generate fusion (dummy function for demonstration)
  function generate_fusion(item1, item2) {
    return item1 + ' + ' + item2 + ' = Fusion Product';
  }
});

