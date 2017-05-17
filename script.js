// note: key library was modified to enable capture in addEventListener

(function() {
    var idx = 0;
    var select = function(focus) {
        $('h3.r a').css('background-color', 'inherit');
        var link = $('h3.r:nth('+idx+') a');
        link.css('background-color', '#fcc');
        if (focus) {link.focus(); }
        return link;
    };
    key('⌘+return', function(ev) {
        var link = select();
        window.open(link.attr('href'));
        ev.stopPropagation();
        ev.preventDefault();
    });
    key('return', function(ev) {
        var link = select();
        location.href = link.attr('href');
        ev.stopPropagation();
        ev.preventDefault();
    });
    
    key('l', function(ev) {
        var link = $('#pnnext');
        if (link.length){
                location.href = link.attr('href');
        }
        ev.stopPropagation();
        ev.preventDefault();
    });
    key('h', function(ev) {
        var link = $('#pnprev');
        if (link.length){
                location.href = link.attr('href');
        }
        ev.stopPropagation();
        ev.preventDefault();
    });
    

    var node = null;

    $(function() {
        document.getElementById('main').addEventListener("DOMSubtreeModified", function () {
            var newNode = $('h3.r:nth(0) a');
            if (!node || (node.attr('href') != newNode.attr('href'))) {
                idx = 0;
                select();
                node = newNode;
            }
        });
    });

    key('j', function(ev) {
        if (idx < $('h3.r a').length-1) {
            idx++;
            select(true);
        }
        ev.stopPropagation();
    });
    key('k', function(ev) {
        if (idx > 0) {
            idx--;
            select(true);
        }
        ev.stopPropagation();
    });
    key('/', function(ev) {
        $('#lst-ib').focus();
        $('#lst-ib').select();
        ev.stopPropagation();
        ev.preventDefault();
    });
    $(function() {
    	$('.hdtb-mitem').each(function(index){
		console.log(index);
		console.log($(this).text());
	//	$(this).html($(this).text() + index);
	});
    });
    	
})();
