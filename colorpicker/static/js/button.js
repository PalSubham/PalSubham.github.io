/*
Here we send ajax request with hex code of the color as JSON data.
PNG is returned as blob (bytecode).
On success (checked from an HTTP header 'if_success') an object url is referred to the blob and attached to a hidden 'a' element.
Image name is returned in 'png_download' HTTP header and assigned to 'download' attribute of that 'a' tag.
Then the generated link is clicked automatically after one 'alert' message.
The object url is dereferred, 'href' and 'download' attributes of 'a' is removed.
*/

$(window).ready(function () {

    $("#download").click(function () {

        let red_val = parseInt($("#slider-red").val(), 10);
		let green_val = parseInt($("#slider-green").val(), 10);
        let blue_val = parseInt($("#slider-blue").val(), 10);
        let hex = '#' + hex_pad(red_val) + hex_pad(green_val) + hex_pad(blue_val);
        var now_element = $(this);

        now_element.prop('disabled', true);

        $.ajax({
            type: 'POST',
            url: $SCRIPT_ROOT + '/get_image/',
            data: {'hex_code': hex},
            cache: false,
            xhrFields: {responseType: 'blob'},
            success: function(data, textStatus, jqXHR) {
                if(jqXHR.getResponseHeader('if_success') === '1')
                {
                    let a = $('#down')[0];
                    let url = window.URL || window.webkitURL;
                    a.href = url.createObjectURL(data); // Object URL creation and refering
                    a.download = jqXHR.getResponseHeader('name_of_file');
                    alert(jqXHR.getResponseHeader('png_download'));
                    a.click(); // Autoclick
                    url.revokeObjectURL(a.href); // Derefer object URL 
                    a.removeAttribute('href');
                    a.removeAttribute('download');
                }
                else if(jqXHR.getResponseHeader('if_success') === '0')
                {
                    alert(jqXHR.getResponseHeader('png_download'));
                }

                now_element.prop('disabled', false);
                return;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
                now_element.prop('disabled', false);
                return;
            }
        });
    });
    
    return;
});