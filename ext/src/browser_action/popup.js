function search (query, delay) {
  delay = delay || 2000
  $('#results-list').html('');
  setTimeout(function () {
    items = [
      {
        departureDate: new Date(Date.now() + 14 * 86400 * 1000),
        returnDate: new Date(Date.now() + 20 * 86400 * 1000),
        price: '$563'
      },
      {
        departureDate: new Date(Date.now() + 15 * 86400 * 1000),
        returnDate: new Date(Date.now() + 19 * 86400 * 1000),
        price: '$564'
      },
      {
        departureDate: new Date(Date.now() + 16 * 86400 * 1000),
        returnDate: new Date(Date.now() + 32 * 86400 * 1000),
        price: '$565'
      }
    ];
    for (var i=0; i<items.length; i++) {
      var item = items[i];
      var titleText = '';
      var depDate = item.departureDate;
      var retDate = item.returnDate;
      var showReturnMonth = depDate.getMonth() != retDate.getMonth();
      var titleText = moment(depDate).format('MMM '+(showReturnMonth ? 'Do' : 'D'));
      titleText += ' - ';
      titleText += moment(retDate).format((showReturnMonth ? 'MMM ' : '')+'Do');
      //if (.format('MMM Do')
      var title = $('<h2>');
      title
      .addClass('result-title')
      .html(titleText);
      var buyButton = $('<button>');
      buyButton
      .addClass('buy-button')
      .html(item.price);
      var li = $('<li>');
      li
      .addClass('results')
      .append(title)
      .append(buyButton);
      $('#results-list').append(li);
    }
  }, delay);
}

$(document).ready(function () {
  $('.origin').html('BOS');
  $('.destination').html('SFO');
  $('#search-query').val('SFO');
  $('.popup-form').submit(function (e) {
    e.preventDefault();
    $('#form-holder').fadeOut(500);
    $('#results-holder').delay(1000).fadeIn(500);
    var destination = $('#search-query').val();
    $('.destination').html(destination);
    search(destination);
    return false;
  });
});
