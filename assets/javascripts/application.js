//= require vendor/jquery-1.11.1.min
//= require vendor/jquery.dataTables.min
//= require vendor/jquery.timeago
//= require vendor/jquery.url
//= require vendor/highlight.pack
//= require vendor/bootstrap.min
//= require_self

$.extend(true, $.fn.dataTableExt, {
  oJUIClasses: {
    sSortJUI: "fa fa-sort",
    sSortJUIAsc: "fa fa-sort-up",
    sSortJUIAscAllowed: "fa fa-sort-up",
    sSortJUIDesc: "fa fa-sort-down",
    sSortJUIDescAllowed: "fa fa-sort-down"
  }
});

$(function() {
  var currentAnchor = (window.location.hash || "").replace("#", "");

  $("abbr.timeago").timeago();

  $(".file_list").dataTable({
    "aaSorting": [[ 1, "asc" ]],
    "bPaginate": false,
    "bJQueryUI": true,
    "aoColumns": [ null, { "sType": "percent" }, null, null, null, null, null ]
  });

  $(".dataTables_filter input").addClass("form-control");

  $(".modal").on("show.bs.modal", function() {
    if (!$(this).hasClass("highlighted")) {
      $(this).find("pre code").each(function(i, e) {hljs.highlightBlock(e, "  ")});
      $(this).addClass("highlighted");
    };
  });

  $(".modal").on("shown.bs.modal", function() {
    window.location.hash = $(this).attr("id");
    $(".modal.in .focus-hidden").focus();
  });

  $(".modal").on("hidden.bs.modal", function() {
    window.location.hash = $(".nav-tabs li.active a").attr("href").replace("#", "_");
  });

  $("a[data-toggle='tab']").on("shown.bs.tab", function() {
    window.location.hash = $(this).attr("href").replace("#", "_");
  });

  if (currentAnchor) {
    if (currentAnchor.length == 40) {
      $(".nav-tabs a:first").trigger("click");

      setTimeout(function() {
        $("a[data-target=#" + currentAnchor + "]:first").trigger("click");
      }, 10);
    } else {
      $(".nav-tabs a[href=#" + currentAnchor.replace("_", "") + "]").trigger("click");
    }
  } else {
    $(".nav-tabs a:first").trigger("click");
  };
});
