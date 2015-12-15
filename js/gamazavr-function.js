/**
 * Created by Arkadiy on 16.11.2015.
 */


jQuery(document).ready(function($) {

    var targetLink;

    var targetTitle;

    var targetImages;

    var targetPrice;

    var oldPrice;

    var randId;

    var targetId;

    var targetLengnt;

    var targetContainer = $('.js-gavazavr');

    var targetContainersj = $('.gavazavr_sjforest');

    function randTarget() {
        randId = Math.random();
    }

    targetLengnt = targetGoods.length;

    var targetItem;

    function createBlock(targetId, container, partnerId) {
        targetLink = targetGoods[targetId].link;

        targetTitle = targetGoods[targetId].title;

        targetImages = targetGoods[targetId].image;

        targetPrice = targetGoods[targetId].price;

        oldPrice = targetGoods[targetId].old;

        targetItem = '<a class="item" href="' + targetLink + '?partner=' + partnerId + '" title="' + targetTitle + '"><img src="' + targetImages + '" alt="' + targetTitle + '" width="198" height="89" data-pin-nopin="true"><span class="name" style="bottom: 0px;">' + targetTitle + '</span><span class="price"><s>' + oldPrice + '<span>&nbsp;</span></s>&nbsp;<b>' + targetPrice + '</b>&nbsp;руб</span></a>';

        container.append(targetItem);
    };

    function createBanner(container, colItem, partnerId) {

        createBlock(1, container, partnerId);

        createBlock(5, container, partnerId);

        createBlock(17, container, partnerId);

        for (var i = 0; i < colItem; i++) {

            randTarget();

            targetId = Math.floor(targetLengnt * randId);

            createBlock(targetId, container, partnerId);

        }

    }


    createBanner(targetContainer, 1, '4b02bd4fa1741ffe');

    createBanner(targetContainersj, 1, '31712fe093127028');


});
