////////////////////
// ������������Ͽ�ܥ�������
//


// �ե�����ʬ��������ƥ��
function floatSource(className, itmBkmUrl){
  source =  '<div id="' + className +'" class="cartButton addToFavoriteButton"><a href="' + itmBkmUrl + '" target="_blank"><img src="https://www.rakuten.ne.jp/gold/life-direct/sp/images/smp_itmbkm_icon.png"><br>����������<br>��Ͽ����</a></div>';
  console.log(source);
   return source;
}
var j = jQuery.noConflict();

// ������������ϿURL����
itmBkmUrl = j('.itemBuyFavBtn a').attr('href');
// ����������ƥ�ĥ��饹̾����
flaotClassName = 'floatingAddfavorite';
fixedClassName = 'fixedAddfavorite';

setTimeout(function(){
  j('#floatingCartContainer').append(floatSource(fixedClassName, itmBkmUrl));
  j('#fixedCheckOut').after(floatSource(flaotClassName, itmBkmUrl));
},1000);
// �ե�����ʬ��������ƥ��