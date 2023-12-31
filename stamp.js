const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
if (!title) {
    $('body').text('No title provided.')
}

$(document).ready(async function () {
    console.log('ready');
    $('#stamp-name').text(title);
    new CircleType(document.getElementById('stamp-name'));

    if (title) {
        let element = $(".image-stamp"); // global variable
        console.log(element);
        element.width(element.height());
        $('#stamp-name div').css('transform', 'rotate(90deg)');
        console.log('title:', title);

        try {
            const canvas = await html2canvas(element);
            const dataURI = canvas.toDataURL("image/png");
            console.log(dataURI);
            // Form Submission
            const qr_form_ele = $('#qr_form');
            const qr_code_ele = $('#qr_code');
            qr_code_ele.val(dataURI);
            // qr_form_ele.submit();


            const div = $(`<div id="box">`);
            div.text(dataURI);
            div.appendTo('body');


        } catch (error) {
            console.error('Error during html2canvas:', error);
        }
    } else {
        $('body').text('No title provided.')
    }


    $(window).on('load', async function () {
        console.log('load will not run on selenium and puppeter');
    });
});