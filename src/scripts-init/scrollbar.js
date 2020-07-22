// Perfect Scrollbar

import PerfectScrollbar from 'perfect-scrollbar';

$(document).ready(() => {

    setTimeout(function () {

        if ($(".scrollbar-container")[0]) {

            $('.scrollbar-container').each(function () {
                const ps = new PerfectScrollbar($(this)[0], {
                    wheelSpeed: 1,
                    wheelPropagation: false,
                    minScrollbarLength: 20
                });
            });
        }

    }, 1000);
});
