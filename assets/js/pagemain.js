jQuery(document).ready(function(){var t;0<$(".cd-stretchy-nav").length&&((t=$(".cd-stretchy-nav")).each(function(){var t=$(this);t.find(".cd-nav-trigger").on("click",function(n){n.preventDefault(),t.toggleClass("nav-is-visible")})}),$(document).on("click",function(n){$(n.target).is(".cd-nav-trigger")||$(n.target).is(".cd-nav-trigger span")||t.removeClass("nav-is-visible")}))});