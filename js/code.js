$(document).ready(function() {
  $("#txtPhpcode").on("input", function() {
    if ($("#txtPhpcode").val() != "") {
      wait_encode("txtPhpcode", "txtPhpencode", "ajax/encode.php")
    }
  });
  $("#txtPhpcode2").on("input", function() {
    if ($("#txtPhpcode2").val() != "") {
      wait_encode("txtPhpcode2", "txtPhpencode2", "ajax/decode.php")
    }
  })
});
var gTimeout = null;

function wait_encode(a, d, c) {
  if (gTimeout != null) {
    clearTimeout(gTimeout)
  }
  gTimeout = setTimeout(function() {
    encode(a, d, c)
  }, 500)
}
var fprocess = false;

function encode(a, d, c) {
  gTimeout = null;
  if (!fprocess) {
    fprocess = true;
    $.ajax({
      url: c,
      type: "post",
      datatype: "text",
      data: {
        code_: $("#" + a).val()
      },
      beforeSend: function(e) {
        $("body").append('<div id="img-loading" class="text-center img-loading"><div class="il-content"></div></div>')
      },
      success: function(e) {
        $("#img-loading").remove();
        $("#" + a).val("");
        $("#" + d).val(e);
        fprocess = false
      }
    })
  }
}

function wait_decode(a, d, c) {
  if (gTimeout != null) {
    clearTimeout(gTimeout)
  }
  gTimeout = setTimeout(function() {
    decode(a, d, c)
  }, 500)
}
var fprocess = false;

function decode(a, d, c) {
  gTimeout = null;
  if (!fprocess) {
    fprocess = true;
    $.ajax({
      url: c,
      type: "post",
      datatype: "text",
      data: {
        code_: $("#" + a).val()
      },
      beforeSend: function(e) {
        $("body").append('<div id="img-loading" class="text-center img-loading"><div class="il-content"></div></div>')
      },
      success: function(e) {
        $("#img-loading").remove();
        $("#" + a).val("");
        $("#" + d).val(e);
        fprocess = false
      }
    })
  }
};