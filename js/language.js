(function () {
    $(function () {
        if(!localStorage.getItem('lang')) {
            setLang('ja');
        } else {
            setLang(localStorage.getItem('lang')); // ここにif文で、strageがあればそれを使うなければデフォルトのjaにする
        }

        $(".lang").val(localStorage.getItem('lang'));

        $('.lang').on('change', function () {　　　　// inputをlabelに変更するだけで良い
            var lang = $('.lang').val();
            setLang(lang);
        });
    });

})();

function setLang(lang) {
    console.log('lang=' + lang);
    localStorage.setItem('lang', lang);

    i18next.use(i18nextXHRBackend).init({
        backend: {
            loadPath: '/web-demo/language/{{lng}}/string.json'
        },
        debug: false,
        defaultLng: 'ja',
        fallbackLng: false,
        lng: lang,
    }, function (err, t) {
        jqueryI18next.init(i18next, $);
        $('[data-i18n]').localize();
    });
}