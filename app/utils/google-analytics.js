require('autotrack');

// GA Script
(function(window, document, script, url, ga) {
  window.GoogleAnalyticsObject = ga;
  window[ga] = window[ga] || function() {
    (window[ga].q = window[ga].q || []).push(arguments);
  };
  window[ga].l = 1 * new Date();
  var tag = document.createElement(script);
  var firstScriptTag = document.getElementsByTagName(script)[0];
  tag.async = 1;
  tag.src = url;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})(
  window,
  document,
  'script',
  '//www.google-analytics.com/analytics.js',
  'ga'
);

// GA Setup
window.ga('create', 'UA-3657515-3', 'auto');
window.ga('send', 'pageview');
