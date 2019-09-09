////////////////////
// お気に入り登録ボタン挿入
//


// フロート部分挿入コンテンツ
function floatSource(className, itmBkmUrl){
  source =  '<div id="' + className +'" class="cartButton addToFavoriteButton"><a href="' + itmBkmUrl + '" target="_blank"><img src="https://www.rakuten.ne.jp/gold/life-direct/sp/images/smp_itmbkm_icon.png"><br>お気に入り<br>登録する</a></div>';
  console.log(source);
   return source;
}
var j = jQuery.noConflict();

// お気に入り登録URL取得
itmBkmUrl = j('.itemBuyFavBtn a').attr('href');
// 各挿入コンテンツクラス名設定
flaotClassName = 'floatingAddfavorite';
fixedClassName = 'fixedAddfavorite';

setTimeout(function(){
  j('#floatingCartContainer').append(floatSource(fixedClassName, itmBkmUrl));
  j('#fixedCheckOut').after(floatSource(flaotClassName, itmBkmUrl));
},1000);
// フロート部分挿入コンテンツ