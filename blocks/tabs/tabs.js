var tabs = $('.tabs');
tabs.each(function() {
    var parent = $(this);
    tabsNav = $(this).find('.tabs__nav'),
        tabsNavItem = $(this).find('.tabs__nav-item');
    tabsNavItem.each(function() {
        var attr = $(this).attr('data-tab');
        if ($(this).hasClass('tabs__nav-item_select')) {
            var tab = parent.find('#' + attr);
            tab.show();
        }
        attr = tab = null;
    });
    parent = tabsNav = tabsNavItem = null;
});

function tabsActive() {
    $('.tabs__nav-item').click(function() {
        var parent = $('.tabs'),
            attr = $(this).attr('data-tab'),
            tabs = parent.find('.tabs__tab'),
            navItem = parent.find('.tabs__nav-item');
        navItem.each(function() {
            $(this).removeClass('tabs__nav-item_select');
        });
        if ($(this).hasClass('tabs__nav-item_select') == false) {
            $(this).addClass('tabs__nav-item_select');
            tabs.each(function() {
                $(this).hide();
            });

            var tab = parent.find('#' + attr);
            tab.show();

        }
        parent = attr = tab = tabs = navItem = null;
    });
}
tabsActive();
tabs = null;