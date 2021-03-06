/*!
 * by Dgrees
 *
 */
/*! For license information please see app.min.js.LICENSE.txt */
! function(e) {
    function t(t) {
        for (var r, s, l = t[0], a = t[1], u = t[2], d = 0, h = []; d < l.length; d++)
            s = l[d],
            Object
            .prototype
            .hasOwnProperty
            .call(n, s) && n[s] && h.push(n[s][0]),
            n[s] = 0;
        for (r in a)
            Object
            .prototype
            .hasOwnProperty
            .call(a, r) && (e[r] = a[r]);
        for (c && c(t); h.length;)
            h.shift()();
        return o
            .push
            .apply(o, u || []),
            i()
    }

    function i() {
        for (var e, t = 0; t < o.length; t++) {
            for (var i = o[t], r = !0, l = 1; l < i.length; l++) {
                var a = i[l];
                0 !== n[a] && (r = !1)
            }
            r && (o.splice(t--, 1), e = s(s.s = i[0]))
        }
        return e
    }
    var r = {},
        n = {
            0: 0
        },
        o = [];

    function s(t) {
        if (r[t])
            return r[t].exports;
        var i = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, s),
            i.l = !0,
            i.exports
    }
    s.m = e,
        s.c = r,
        s.d = function(e, t, i) {
            s.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        },
        s.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
                    e,
                    Symbol.toStringTag, { value: "Module" }
                ),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        s.t = function(e, t) {
            if (1 & t && (e = s(e)), 8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (s.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e)
                    s.d(i, r, function(t) {
                        return e[t]
                    }.bind(null, r));
            return i
        },
        s.n = function(e) {
            var t = e && e.__esModule ?

                function() {
                    return e.default
                } :
                function() {
                    return e
                };
            return s.d(t, "a", t),
                t
        },
        s.o = function(e, t) {
            return Object
                .prototype
                .hasOwnProperty
                .call(e, t)
        },
        s.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        a = l
        .push
        .bind(l);
    l.push = t,
        l = l.slice();
    for (var u = 0; u < l.length; u++)
        t(l[u]);
    var c = a;
    o.push([54, 1]),
        i()
}([,
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                var content = this.options.footer;
                __p += '\n<div id="footer" class="footer">\n    ',
                    window.innerWidth > 768 ?
                    __p += '\n        <div class="title title--xlarge">' + (
                        null == (__t = content.title) ?
                        "" :
                        __t
                    ) + "</div>\n    " :
                    __p += '\n        <div class="title title--xlarge">' + (
                        null == (__t = content.title_mobile) ?
                        "" :
                        __t
                    ) + "</div>\n    ",
                    __p += '\n    <div class="footer__contact"><a href="' + (
                        null == (__t = content.mail.url) ?
                        "" :
                        __t
                    ) + '" class="mail">' + (
                        null == (__t = content.mail.title) ?
                        "" :
                        __t
                    ) + '</a></div>\n    <div class="footer__social">\n        ';
                var social = content.social;
                __p += "\n        ";
                for (var i = 0; i < social.length; i++)
                    __p += '\n            <a href="' + (
                        null == (__t = social[i].link.url) ?
                        "" :
                        __t
                    ) + '" class="social" target="_blank">' + (
                        null == (__t = social[i].link.title) ?
                        "" :
                        __t
                    ) + "</a>\n            ",
                    i !== social.length - 1 && (__p += "<span>  ??  </span>"),
                    __p += "\n        ";
                __p += '\n    </div>\n    <div class="footer__address">\n        <div class="text">' + (
                    null == (__t = content.address_title) ?
                    "" :
                    __t
                ) + "</div>\n        ";
                var address = content.address;
                __p += "\n        ";
                for (var i = 0; i < address.length; i++)
                    __p += '\n            <div class="label label--mini">' + (
                        null == (__t = address[i].label) ?
                        "" :
                        __t
                    ) + '</div>\n            <div class="wysiwyg">' + (
                        null == (__t = address[i].direction) ?
                        "" :
                        __t
                    ) + "</div>\n        ";
                __p += '\n    </div>\n    <div class="footer__logo">\n        <div class="label label-' +
                    '-mini">' + (
                        null == (__t = content.logos_label) ?
                        "" :
                        __t
                    ) + "</div>\n        ";
                var logos = content.logos;
                __p += "\n        ";
                for (var i = 0; i < logos.length; i++)
                    __p += '\n            <a href="' + (
                        null == (__t = logos[i].url) ?
                        "" :
                        __t
                    ) + '" target="_blank" class="logo">\n                <img src="' + (
                        null == (__t = logos[i].image.url) ?
                        "" :
                        __t
                    ) + '" alt="' + (
                        null == (__t = logos[i].image.title) ?
                        "" :
                        __t
                    ) + '">\n            </a>\n        ';
                __p += '\n    </div>\n    <div class="footer__legal">\n        ';
                var legal = content.legal;
                __p += "\n        ";
                for (var i = 0; i < legal.length; i++)
                    __p += '\n            <a href="' + (
                        null == (__t = legal[i].link.url) ?
                        "" :
                        __t
                    ) + '" class="legal" target="_blank">' + (
                        null == (__t = legal[i].link.title) ?
                        "" :
                        __t
                    ) + "</a>\n            ",
                    i !== legal.length - 1 && (__p += "<span>  ??  </span>"),
                    __p += "\n        ";
                __p += "\n    </div>\n</div>\n"
            }
            return __p
        }
    }, , , ,
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                if (
                    __p += '<div class="bgs"></div>\n<div class="inner home">\n    <div class="home__heade' +
                    'r"></div>\n    <div class="home__hero">\n        ',
                    this.router.isDesktop
                ) {
                    __p += '\n            <div class="gallery">\n                <div class="gallery__inne' +
                        'r">\n                    ';
                    var gallery = data.fields.gallery;
                    __p += "\n                    ";
                    for (var i = 0; i < gallery.length; i++) {
                        __p += '\n                        <div class="gallery__inner__column column--' + (
                            null == (__t = i) ?
                            "" :
                            __t
                        ) + '">\n                            ';
                        var galleryColumn = data
                            .fields
                            .gallery[i]
                            .gallery_column;
                        __p += "\n                            ";
                        for (var j = 0; j < galleryColumn.length; j++)
                            __p += '\n                                <div class="item">\n                        ' +
                            '            ',
                            galleryColumn[j].video_mp4 || galleryColumn[j].video_webm || galleryColumn[j].video_ogg ?
                            (
                                __p += "\n                                        ",
                                __p += 2 === i ?
                                '\n                                            <div class="video video--visible' +
                                '">\n                                                <div class="video__inner">' +
                                '\n                                                    <div class="video__playe' +
                                'r">\n                                                        <video autoplay p' +
                                'reload="none" muted="muted" playsinline>\n                                    ' +
                                '                        <source src="' + (
                                    null == (__t = galleryColumn[j].video_mp4) ?
                                    "" :
                                    __t
                                ) + '" type="video/mp4"/>\n                                                    ' +
                                '        <source src="' + (
                                    null == (__t = galleryColumn[j].video_webm) ?
                                    "" :
                                    __t
                                ) + '" type="video/webm"/>\n                                                   ' +
                                '         <source src="' + (
                                    null == (__t = galleryColumn[j].video_ogg) ?
                                    "" :
                                    __t
                                ) + '" type="video/ogg"/>\n                                                    ' +
                                '    </video>\n                                                    </div>\n    ' +
                                '                                            </div>\n                          ' +
                                '                  </div>\n                                            <div cla' +
                                'ss="video video--lightbox">\n                                                <' +
                                'div class="video__inner">\n                                                   ' +
                                ' <div class="video__player">\n                                                ' +
                                '        <video preload="none" autoplay="false" muted="true" loop="false" contr' +
                                'ols="true" playsinline>\n                                                     ' +
                                '       <source src="' + (
                                    null == (__t = data.fields.main_video_mp4) ?
                                    "" :
                                    __t
                                ) + '" type="video/mp4"/>\n                                                    ' +
                                '        <source src="' + (
                                    null == (__t = data.fields.main_video_webm) ?
                                    "" :
                                    __t
                                ) + '" type="video/webm"/>\n                                                   ' +
                                '         <source src="' + (
                                    null == (__t = data.fields.main_video_ogg) ?
                                    "" :
                                    __t
                                ) + '" type="video/ogg"/>\n                                                    ' +
                                '    </video>\n                                                    </div>\n    ' +
                                '                                            </div>\n                          ' +
                                '                  </div>\n                                        ' :
                                '\n                                            <div class="video">\n           ' +
                                '                                     <div class="video__inner">\n             ' +
                                '                                       <div class="video__player">\n          ' +
                                '                                              <video autoplay preload="none" m' +
                                'uted="muted" playsinline>\n                                                   ' +
                                '         <source src="' + (
                                    null == (__t = galleryColumn[j].video_mp4) ?
                                    "" :
                                    __t
                                ) + '" type="video/mp4"/>\n                                                    ' +
                                '        <source src="' + (
                                    null == (__t = galleryColumn[j].video_webm) ?
                                    "" :
                                    __t
                                ) + '" type="video/webm"/>\n                                                   ' +
                                '         <source src="' + (
                                    null == (__t = galleryColumn[j].video_ogg) ?
                                    "" :
                                    __t
                                ) + '" type="video/ogg"/>\n                                                    ' +
                                '    </video>\n                                                    </div>\n    ' +
                                '                                            </div>\n                          ' +
                                '                  </div>\n                                        ',
                                __p += "\n                                    "
                            ) :
                            __p += '\n                                        <div class="background"><div class="' +
                            'background__bg" style="background-image: url(\'' + (
                                null == (__t = galleryColumn[j].image) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                                    ",
                            __p += "\n                                </div>\n                            ";
                        __p += "\n                        </div>\n                    "
                    }
                    __p += '\n                </div>\n            </div>\n            <div class="wrapper"' +
                        '>\n                <div class="title title--small">' + (
                            null == (__t = data.fields.description) ?
                            "" :
                            __t
                        ) + '</div>\n                <div class="title title--xlarge">' + (
                            null == (__t = data.fields.title) ?
                            "" :
                            __t
                        ) + "</div>\n            </div>\n        "
                } else
                    __p += '\n            <div class="wrapper">\n                ',
                    window.innerWidth < 768 ?
                    __p += '\n                    <div class="title title--small">' + (
                        null == (__t = data.fields.description_mobile) ?
                        "" :
                        __t
                    ) + "</div>\n                " :
                    __p += '\n                    <div class="title title--small">' + (
                        null == (__t = data.fields.description) ?
                        "" :
                        __t
                    ) + "</div>\n                ",
                    __p += '\n                <div class="title title--xlarge">' + (
                        null == (__t = data.fields.title) ?
                        "" :
                        __t
                    ) + '</div>\n            </div>\n            <div class="video video--lightbox"' +
                    '>\n                <div class="video__inner">\n                    <video clas' +
                    's="video__player"  preload="none" autoplay="false" muted="false" loop="false" ' +
                    'controls="true" playsinline>\n                        <source src="' + (
                        null == (__t = data.fields.main_video_mp4) ?
                        "" :
                        __t
                    ) + '" type="video/mp4"/>\n                        <source src="' + (
                        null == (__t = data.fields.main_video_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                        <source src="' + (
                        null == (__t = data.fields.main_video_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                    </video>\n                </div>' +
                    '\n            </div>\n            <div class="video video--visible">\n        ' +
                    '        <div class="video__inner">\n                    <div class="video__pos' +
                    'ter background">\n                        <div class="background__bg" style="b' +
                    'ackground-image: url(\'' + (
                        null == (__t = data.fields.main_video_image) ?
                        "" :
                        __t
                    ) + '\');"></div>\n                    </div>\n                    <div class="' +
                    'video__trigger"></div>\n                </div>\n            </div>\n        ';
                __p += '\n    </div>\n    <div class="home__curators">\n        ',
                    this.router.isDesktop && (
                        __p += '\n            <div class="title title--xlarge">' + (
                            null == (__t = data.fields.curators_title) ?
                            "" :
                            __t
                        ) + '</div>\n            <div class="trigger"></div>\n            <div class="s' +
                        'ensor"></div>\n        '
                    ),
                    __p += "\n        ",
                    this.router.isDesktop || (
                        __p += '\n            <div class="title title--xlarge">' + (
                            null == (__t = data.fields.curators_title) ?
                            "" :
                            __t
                        ) + "</div>\n        "
                    ),
                    __p += '\n        <div class="container">\n            <div class="label">' + (
                        null == (__t = data.fields.curators_featured_label) ?
                        "" :
                        __t
                    ) + '</div>\n            <div class="featured">\n                ',
                    this.router.isDesktop ?
                    __p += '\n                <div class="video">\n                    <div class="video__' +
                    'inner">\n                        <div class="video__player">\n                ' +
                    '            <video class="player" autoplay="false" controls preload="none" mut' +
                    'ed="false" playsinline>\n                                <source src="' + (
                        null == (__t = data.fields.curators_featured_video_mp4) ?
                        "" :
                        __t
                    ) + '" type="video/mp4"/>\n                                <source src="' + (
                        null == (__t = data.fields.curators_featured_video_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                                <source src="' + (
                        null == (__t = data.fields.curators_featured_video_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                            </video>\n              ' +
                    '          </div>\n                        <div class="video__poster background' +
                    '">\n                            <div class="background__bg" style="background-' +
                    'image: url(\'' + (
                        null == (__t = data.fields.curators_featured_image) ?
                        "" :
                        __t
                    ) + '\');"></div>\n                            <div class="overlay"></div>\n   ' +
                    '                     </div>\n                        <div class="video__trigge' +
                    'r"></div>\n                        <div class="video__sensor"></div>\n        ' +
                    '            </div>\n                </div>\n                ' :
                    __p += '\n                    <div class="video video--lightbox">\n                   ' +
                    '     <div class="video__inner">\n                            <video class="vid' +
                    'eo__player" preload="none" autoplay="false" muted="false" loop="false" control' +
                    's="true" playsinline>\n                                <source src="' + (
                        null == (__t = data.fields.curators_featured_video_mp4) ?
                        "" :
                        __t
                    ) + '" type="video/mp4"/>\n                                <source src="' + (
                        null == (__t = data.fields.curators_featured_video_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                                <source src="' + (
                        null == (__t = data.fields.curators_featured_video_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                            </video>\n              ' +
                    '          </div>\n                    </div>\n                    <div class="' +
                    'video video--visible">\n                        <div class="video__inner">\n  ' +
                    '                          <div class="video__poster background">\n            ' +
                    '                    <div class="background__bg" style="background-image: url(' +
                    '\'' + (
                        null == (__t = data.fields.curators_featured_image) ?
                        "" :
                        __t
                    ) + '\');"></div>\n                                <div class="overlay"></div>' +
                    '\n                            </div>\n                            <div class="' +
                    'video__trigger"></div>\n                        </div>\n                    </' +
                    'div>\n                ',
                    __p += '\n                <div class="name">' + (
                        null == (__t = data.fields.curators_featured_name) ?
                        "" :
                        __t
                    ) + '</div>\n                <div class="position">' + (
                        null == (__t = data.fields.curators_featured_position) ?
                        "" :
                        __t
                    ) + '</div>\n            </div>\n            <div class="label label--list">' + (
                        null == (__t = data.fields.curators_list_label) ?
                        "" :
                        __t
                    ) + '</div>\n            <div class="list">\n                ';
                var list = data.fields.curators_list;
                __p += "\n                ";
                for (var i = 0; i < list.length; i++)
                    __p += '\n                    <div class="list__item" data-index="' + (
                        null == (__t = i) ?
                        "" :
                        __t
                    ) + '">\n                        <div class="video video--lightbox">\n         ' +
                    '                   <div class="video__inner">\n                               ' +
                    ' <div class="video__player">\n                                    <video prelo' +
                    'ad="none" autoplay="false" muted="false" loop="false" controls="true" playsinl' +
                    'ine>\n                                        <source src="' + (
                        null == (__t = list[i].video_mp4) ?
                        "" :
                        __t
                    ) +
                    '" type="video/mp4"/>\n                                        <source src="' + (
                        null == (__t = list[i].video_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                                        <source src' +
                    '="' + (
                        null == (__t = list[i].video_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                                    </video>\n      ' +
                    '                          </div>\n                            </div>\n        ' +
                    '                </div>\n                        <div class="video video--visib' +
                    'le">\n                            <div class="video__inner">\n                ' +
                    '                <div class="video__poster background">\n                      ' +
                    '              <div class="background__bg" style="background-image: url(\'' + (
                        null == (__t = list[i].image) ?
                        "" :
                        __t
                    ) + '\');"></div>\n                                    <div class="overlay"></d' +
                    'iv>\n                                </div>\n                                <' +
                    'div class="video__trigger"></div>\n                                ',
                    this.router.isDesktop && (
                        __p += '\n                                    <div class="video__sensor"></div>\n     ' +
                        '                           '
                    ),
                    __p += '\n                            </div>\n                        </div>\n        ' +
                    '                <div class="name title--large">' + (
                        null == (__t = list[i].name) ?
                        "" :
                        __t
                    ) + '</div>\n                        <div class="position">' + (
                        null == (__t = list[i].position) ?
                        "" :
                        __t
                    ) + "</div>\n                    </div>\n                ";
                __p += '\n            </div>\n        </div>\n    </div>\n    <div class="home__why">' +
                    '\n        ',
                    this.router.isDesktop || (
                        __p += '\n            <div class="title title--xlarge">' + (
                            null == (__t = data.fields.why_title) ?
                            "" :
                            __t
                        ) + "</div>\n        "
                    ),
                    __p += '\n        <div class="features">\n            ';
                var features = data.fields.features;
                __p += "\n            ";
                for (var i = 0; i < features.length; i++)
                    __p += '\n                <div class="features__item item--' + (
                        null == (__t = [i]) ?
                        "" :
                        __t
                    ) + '">\n                    <div class="image">\n                        <div ' +
                    'class="image__bg" style="background-image: url(\'' + (
                        null == (__t = features[i].image) ?
                        "" :
                        __t
                    ) + '\');"></div>\n                    </div>\n                    <div class="' +
                    'number">' + (
                        null == (__t = "0" + [i + 1] + "/") ?
                        "" :
                        __t
                    ) + '</div>\n                    <div class="text">' + (
                        null == (__t = features[i].text) ?
                        "" :
                        __t
                    ) + "</div>\n                </div>\n            ";
                __p += "\n        </div>\n        ",
                    this.router.isDesktop && (
                        __p += '\n            <div class="title title--xlarge">' + (
                            null == (__t = data.fields.why_title) ?
                            "" :
                            __t
                        ) + "</div>\n        "
                    ),
                    __p += '\n        <div class="headline">\n            <div class="headline--1">\n     ' +
                    '           <div class="headline__inner">\n                    ';
                for (var i = 0; i < data.fields.headline_cities.length; i++)
                    __p += '\n                        <div class="headline__inner__item title--xlarge">' + (
                        null == (__t = data.fields.headline_cities[i].cities) ?
                        "" :
                        __t
                    ) + "</div>\n                    ";
                __p += '\n                </div>\n                <div class="headline__inner">\n     ' +
                    '               ';
                for (var i = 0; i < data.fields.headline_cities.length; i++)
                    __p += '\n                        <div class="headline__inner__item title--xlarge">' + (
                        null == (__t = data.fields.headline_cities[i].cities) ?
                        "" :
                        __t
                    ) + "</div>\n                    ";
                __p += '\n                </div>\n            </div>\n            <div class="headline' +
                    '--2">\n                <div class="headline__inner">\n                    ';
                for (var i = 0; i < data.fields.headline_experiences.length; i++)
                    __p += '\n                        <div class="headline__inner__item title--xlarge">' + (
                        null == (__t = data.fields.headline_experiences[i].experiences) ?
                        "" :
                        __t
                    ) + "</div>\n                    ";
                __p += '\n                </div>\n                <div class="headline__inner">\n     ' +
                    '               ';
                for (var i = 0; i < data.fields.headline_experiences.length; i++)
                    __p += '\n                        <div class="headline__inner__item title--xlarge">' + (
                        null == (__t = data.fields.headline_experiences[i].experiences) ?
                        "" :
                        __t
                    ) + "</div>\n                    ";
                if (
                    __p += '\n                </div>\n            </div>\n        </div>\n    </div>\n    ' +
                    '<div class="home__discover">\n        ',
                    this.router.isDesktop
                ) {
                    __p += '\n        <div class="container">\n            <div class="title title--large"' +
                        '>' + (
                            null == (__t = data.fields.discover_title) ?
                            "" :
                            __t
                        ) + '</div>\n            <div class="slider">\n                <div class="slid' +
                        'er__inner">\n                    ';
                    var collections = data.fields.collections;
                    __p += "\n                    ";
                    for (var i = 0; i < collections.length; i++) {
                        __p += "\n                        ";
                        var item = allCollections[collections[i].ID];
                        __p += '\n                        <div class="slider__inner__item">\n                 ' +
                            '           <a class="collection" href="/collections/' + (
                                null == (__t = item.slug) ?
                                "" :
                                __t
                            ) + '" data-router-link>\n                                <div class="image">\n' +
                            '                                    <div class="image__bg image__bg--overlay" ' +
                            'style="background-image: url(\'' + (
                                null == (__t = item.image) ?
                                "" :
                                __t
                            ) + '\');"></div>\n                                </div>\n                    ' +
                            '            <div class="description">\n                                    ';
                        for (var j = 0; j < item.experiences.length; j++)
                            __p += '\n                                        <div class="label">' + (
                                null == (__t = item.experiences[j].name) ?
                                "" :
                                __t
                            ) + '<span class="white"> IN ' + (
                                null == (__t = item.destinations[j].name) ?
                                "" :
                                __t
                            ) + "</span></div>\n                                    ";
                        __p += '\n                                    <div class="title">' + (
                                null == (__t = item.title) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="text">' + (
                                null == (__t = item.fields.intro) ?
                                "" :
                                __t
                            ) + '</div>\n                                </div>\n                          ' +
                            '      <div class="link">\n                                    <svg version="1.' +
                            '1" viewBox="0 0 400 400">\n                                        <circle cla' +
                            'ss="back" cx="200" cy="200" r="190"></circle>\n                               ' +
                            '         <circle class="front" cx="200" cy="200" r="190"></circle>\n          ' +
                            '                          </svg>\n                                    <div cla' +
                            'ss="arrow">\n                                        <div class="arrow__first"' +
                            '></div>\n                                        <div class="arrow__last"></di' +
                            'v>\n                                    </div>\n                              ' +
                            '  </div>\n                            </a>\n                        </div>\n  ' +
                            '                  '
                    }
                    __p += "\n                </div>\n            </div>\n        </div>\n        "
                } else {
                    __p += '\n            <div class="container">\n                <div class="title title' +
                        '--large">' + (
                            null == (__t = data.fields.discover_title) ?
                            "" :
                            __t
                        ) + '</div>\n            </div>\n            <div class="slider">\n            ' +
                        '    <div class="slider__inner">\n                    ';
                    var collections = data.fields.collections;
                    __p += "\n                    ";
                    for (var i = 0; i < collections.length; i++) {
                        __p += "\n                        ";
                        var item = allCollections[collections[i].ID];
                        __p += '\n                        <div class="slider__inner__item">\n                 ' +
                            '           <a class="collection" href="/collections/' + (
                                null == (__t = item.slug) ?
                                "" :
                                __t
                            ) + '" data-router-link>\n                                <div class="image">\n' +
                            '                                    <div class="image__bg" style="background-i' +
                            'mage: url(\'' + (
                                null == (__t = item.image) ?
                                "" :
                                __t
                            ) + '\');"></div>\n                                    <div class="overlay"></d' +
                            'iv>\n                                    <div class="info">\n                 ' +
                            '                       <div class="title">' + (
                                null == (__t = item.title) ?
                                "" :
                                __t
                            ) + '</div>\n                                        <div class="text">' + (
                                null == (__t = item.fields.intro) ?
                                "" :
                                __t
                            ) + "</div>\n                                    </div>\n                      " +
                            "          </div>\n                            </a>\n                        </" +
                            "div>\n                    "
                    }
                    __p += "\n                </div>\n            </div>\n        "
                }
                __p += '\n    </div>\n    <div class="home__footer">\n        ' + (
                        null == (__t = footer()) ?
                        "" :
                        __t
                    ) + '\n    </div>\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>' +
                    '\n</div>\n'
            }
            __p = __p.replace('class="home__header"', 'class="home__header" style="display:none;"');
            // __p = __p.replace('class="home__hero"', 'class="home__hero" style="display:none;"');
            // __p = __p.replace('class="home__curators"', 'class="home__curators" style="background: black;"');
            __p = __p.replace('class="home__why"', 'class="home__why" style="display:none;"');
            __p = __p.replace('class="home__footer"', 'class="home__footer" style="display:none;"');
            __p = __p.replace('class="home__discover"', 'class="home__discover" style="display:none;"');
            __p = __p.replace('class="label label--list"', 'class="label label--list" style="display:none;"');
            __p = __p.replace('class="list"', 'class="list" style="display:none;"');
            console.log(__p);
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                if (
                    __p += '<div class="inner collectionsFeatured">\n    <div class="collectionsFeatured__' +
                    'header"></div>\n    ',
                    this.router.isDesktop
                ) {
                    __p += '\n        <div class="collectionsFeatured__experiences experiences">\n        ' +
                        '    <div class="experiences__inner">\n                ';
                    for (var i = 0; i < experiences.length; i++)
                        __p += '\n                    <div class="image">\n                        <div class=' +
                        '"image__bg" style="background-image: url(\'' + (
                            null == (__t = experiences[i].cover_image) ?
                            "" :
                            __t
                        ) + '\');"></div>\n                        <div class="overlay"></div>\n       ' +
                        '             </div>\n                ';
                    __p += '\n            </div>\n            <div class="experiences__category">\n       ' +
                        '         <div class="label">' + (
                            null == (__t = data.fields.experiences_label) ?
                            "" :
                            __t
                        ) + "</div>\n                ";
                    for (var i = 0; i < experiences.length; i++)
                        __p += '\n                    <div class="category__content">\n                       ' +
                        ' <a href="/experiences/' + (
                            null == (__t = experiences[i].slug) ?
                            "" :
                            __t
                        ) + '" class="category" data-router-link data-index="' + (
                            null == (__t = i) ?
                            "" :
                            __t
                        ) + '">' + (
                            null == (__t = experiences[i].title) ?
                            "" :
                            __t
                        ) + "</a>\n                        ",
                        i !== experiences.length - 1 && (
                            __p += '\n                            <span class="separator"></span>\n               ' +
                            '         '
                        ),
                        __p += "\n                    </div>\n                ";
                    __p += '\n            </div>\n        </div>\n        <div class="collectionsFeatured_' +
                        '_destinations destinations">\n            <div class="destinations__inner">\n ' +
                        '               ';
                    for (var i = 0; i < destinations.length; i++)
                        __p += '\n                    <div class="image">\n                        <div class=' +
                        '"image__bg" style="background-image: url(\'' + (
                            null == (__t = destinations[i].cover_image) ?
                            "" :
                            __t
                        ) + '\');"></div>\n                        <div class="overlay"></div>\n       ' +
                        '             </div>\n                ';
                    __p += '\n            </div>\n            <div class="destinations__category">\n      ' +
                        '          <div class="label">' + (
                            null == (__t = data.fields.destinations_label) ?
                            "" :
                            __t
                        ) + "</div>\n                ";
                    for (var i = 0; i < destinations.length; i++)
                        __p += '\n                    <div class="category__content">\n                       ' +
                        ' <a href="/destinations/' + (
                            null == (__t = destinations[i].slug) ?
                            "" :
                            __t
                        ) + '" class="category" data-router-link data-index="' + (
                            null == (__t = i) ?
                            "" :
                            __t
                        ) + '">' + (
                            null == (__t = destinations[i].title) ?
                            "" :
                            __t
                        ) + "</a>\n                        ",
                        i !== destinations.length - 1 && (
                            __p += '\n                            <span class="separator"></span>\n               ' +
                            '         '
                        ),
                        __p += "\n                    </div>\n                ";
                    __p += '\n            </div>\n        </div>\n        <div class="collectionsFeatured_' +
                        '_hero">\n            <div class="content"><div class="title title--small">' + (
                            null == (__t = data.fields.description) ?
                            "" :
                            __t
                        ) + '</div></div>\n            <div class="background"><div class="background__' +
                        'bg" style="background-image: url(\'' + (
                            null == (__t = data.fields.image) ?
                            "" :
                            __t
                        ) + '\');"></div><div class="overlay"></div></div>\n        </div>\n    '
                } else {
                    __p += '\n        <div class="collectionsFeatured__hero">\n            ',
                        window.innerWidth < 768 ?
                        __p += '\n            <div class="title title--small">' + (
                            null == (__t = data.fields.description_mobile) ?
                            "" :
                            __t
                        ) + "</div>\n            " :
                        __p += '\n                <div class="title title--small">' + (
                            null == (__t = data.fields.description) ?
                            "" :
                            __t
                        ) + "</div>\n            ",
                        __p += '\n        </div>\n        <div class="collectionsFeatured__destinations destin' +
                        'ations">\n            <div class="label">' + (
                            null == (__t = data.fields.destinations_label) ?
                            "" :
                            __t
                        ) + '</div>\n            <div class="destinations__inner">\n                ';
                    for (var i = 0; i < destinations.length; i++)
                        __p += '\n                    <div class="destinations__inner__item">\n               ' +
                        '         <a href="/destinations/' + (
                            null == (__t = destinations[i].slug) ?
                            "" :
                            __t
                        ) + '" data-router-link>\n                            <div class="image"><div c' +
                        'lass="image__bg" style="background-image: url(\'' + (
                            null == (__t = destinations[i].cover_image) ?
                            "" :
                            __t
                        ) + '\');"></div> </div>\n                            <div class="title title--' +
                        'small">' + (
                            null == (__t = destinations[i].title) ?
                            "" :
                            __t
                        ) + "</div>\n                        </a>\n                    </div>\n        " +
                        "        ";
                    __p += '\n                <div class="destinations__inner__dots">\n                   ' +
                        ' ';
                    for (var i = 0; i < destinations.length; i++)
                        __p += '\n                        <div class="dots"></div>\n                    ';
                    __p += '\n                </div>\n            </div>\n        </div>\n        <div cla' +
                        'ss="collectionsFeatured__experiences experiences">\n            <div class="la' +
                        'bel">' + (
                            null == (__t = data.fields.experiences_label) ?
                            "" :
                            __t
                        ) + '</div>\n            <div class="experiences__inner">\n                ';
                    for (var i = 0; i < experiences.length; i++)
                        __p += '\n                    <div class="experiences__inner__item">\n                ' +
                        '        <a href="/experiences/' + (
                            null == (__t = experiences[i].slug) ?
                            "" :
                            __t
                        ) + '" data-router-link>\n                            <div class="image"><div c' +
                        'lass="image__bg" style="background-image: url(\'' + (
                            null == (__t = experiences[i].cover_image) ?
                            "" :
                            __t
                        ) + '\');"></div> </div>\n                            <div class="title title--' +
                        'small">' + (
                            null == (__t = experiences[i].title) ?
                            "" :
                            __t
                        ) + "</div>\n                        </a>\n                    </div>\n        " +
                        "        ";
                    __p += '\n                <div class="experiences__inner__dots">\n                    ';
                    for (var i = 0; i < experiences.length; i++)
                        __p += '\n                        <div class="dots"></div>\n                    ';
                    __p += '\n                </div>\n            </div>\n        </div>\n        <div cla' +
                        'ss="collectionsFeatured__footer">\n            ' + (
                            null == (__t = footer()) ?
                            "" :
                            __t
                        ) + "\n        </div>\n    "
                }
                __p += '\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>\n</div>\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                if (
                    __p += '<div class="inner collectionsCategory collectionsCategory--' + (
                        null == (__t = type) ?
                        "" :
                        __t
                    ) + '">\n    <div class="collectionsCategory__header"></div>\n    ',
                    this.router.isDesktop
                ) {
                    if (
                        __p += '\n        <div class="collectionsCategory__hero">\n            <div class="con' +
                        'tent">\n                <div class="label">Your ' + (
                            null == (
                                __t = "experiences" === type ?
                                "experience" :
                                "destination"
                            ) ?
                            "" :
                            __t
                        ) + '</div>\n                <div class="title title--large">' + (
                            null == (__t = content.title) ?
                            "" :
                            __t
                        ) + "</div>\n                ",
                        "destinations" === type && (__p += '\n                    <div class="country">' + (
                            null == (__t = content.country) ?
                            "" :
                            __t
                        ) + "</div>\n                "),
                        __p += '\n                <div class="text">' + (
                            null == (__t = content.intro) ?
                            "" :
                            __t
                        ) +
                        '</div>\n                <div class="label label--scroll">SCROLL TO SELECT ' + (
                            null == (
                                __t = "experiences" === type ?
                                "destination" :
                                "experience"
                            ) ?
                            "" :
                            __t
                        ) + '</div>\n                <div class="separator"></div>\n            </div>' +
                        '\n        </div>\n        <div class="collectionsCategory__slider" style="',
                        content.related.length >= 3 ?
                        __p += " height: 100vh; height: calc(var(--vh, 1vh) * 100); " :
                        __p += " height: auto; ",
                        __p += '">\n            ',
                        content.related.sort((function(e, t) {
                            return related[e].order - related[t].order
                        })),
                        __p += "\n            ",
                        content.related.length >= 3
                    ) {
                        __p += '\n                <div class="explanation">\n                    <div class="e' +
                            'xplanation__mask"></div>\n                    <div class="explanation__icon"><' +
                            'img src="/wp-content/themes/spaincollection/img/explanation.gif" alt=""></div>' +
                            '<\n                </div>\n                <div class="slider">\n             ' +
                            '       <div class="slider__prev"></div>\n                    <div class="slide' +
                            'r__next"></div>\n                    <div class="slider__inner">\n            ' +
                            '            ';
                        for (var i = 0; i < content.related.length; i++) {
                            __p += '\n                            <div class="slider__inner__item">\n             ' +
                                '                   ';
                            var rel = related[content.related[i]];
                            __p += "\n                                ";
                            var relatedTax = !!rel.relatedData[content.id] && rel.relatedData[content.id];
                            __p += '\n                                <div class="item" data-index="' + (
                                    null == (__t = i) ?
                                    "" :
                                    __t
                                ) + '" data-rel="' + (
                                    null == (__t = rel.slug) ?
                                    "" :
                                    __t
                                ) + '">\n                                    ',
                                relatedTax && relatedTax.image ?
                                __p += '\n                                        <div class="image">\n               ' +
                                '                             <div class="image__bg" style="background-image: u' +
                                'rl(\'' + (
                                    null == (__t = relatedTax.image) ?
                                    "" :
                                    __t
                                ) + '\');"></div>\n                                            <div class="imag' +
                                'e__gradient"></div>\n                                        </div>\n         ' +
                                '                           ' :
                                __p += '\n                                        <div class="image">\n               ' +
                                '                             <div class="image__bg" style="background-image: u' +
                                'rl(\'' + (
                                    null == (__t = rel.slider_image) ?
                                    "" :
                                    __t
                                ) + '\');"></div>\n                                            <div class="imag' +
                                'e__gradient"></div>\n                                        </div>\n         ' +
                                '                           ',
                                __p += '\n                                    <div class="content">\n                 ' +
                                '                   ',
                                rel.country && (
                                    __p += '\n                                        <div class="country">' + (
                                        null == (__t = rel.country) ?
                                        "" :
                                        __t
                                    ) + "</div>\n                                    "
                                ),
                                __p += '\n                                    <div class="title">' + (
                                    null == (__t = rel.title) ?
                                    "" :
                                    __t
                                ) + "</div>\n                                    ",
                                relatedTax && relatedTax.description ?
                                __p += '\n                                        <div class="text">' + (
                                    null == (__t = relatedTax.description) ?
                                    "" :
                                    __t
                                ) + "</div>\n                                    " :
                                __p += '\n                                        <div class="text">' + (
                                    null == (__t = rel.description) ?
                                    "" :
                                    __t
                                ) + "</div>\n                                    ",
                                __p += '\n                                    <a class="link" href="/' + (
                                    null == (__t = type) ?
                                    "" :
                                    __t
                                ) + "/" + (
                                    null == (__t = content.slug) ?
                                    "" :
                                    __t
                                ) + "/" + (
                                    null == (__t = rel.slug) ?
                                    "" :
                                    __t
                                ) + '">\n                                        <svg version="1.1" viewBox="0 ' +
                                '0 400 400">\n                                            <circle class="back" ' +
                                'cx="200" cy="200" r="190"></circle>\n                                         ' +
                                '   <circle class="front" cx="200" cy="200" r="190"></circle>\n                ' +
                                '                        </svg>\n                                        <div c' +
                                'lass="arrow">\n                                            <div class="arrow__' +
                                'first"></div>\n                                            <div class="arrow__' +
                                'last"></div>\n                                        </div>\n                ' +
                                '                    </a>\n                                    </div>\n        ' +
                                '                        </div>\n                            </div>\n          ' +
                                '              '
                        }
                        __p += "\n                    </div>\n                </div>\n            "
                    } else
                        __p += '\n                <div class="message">Sorry, but we still don\'t have related' +
                        ' posts to show you ...</div>\n            ';
                    __p += "\n        </div>\n    "
                } else {
                    if (
                        __p += '\n        <div class="collectionsCategory__hero">\n            <div class="con' +
                        'tent">\n                <div class="label">Your ' + (
                            null == (__t = type) ?
                            "" :
                            __t
                        ) + '</div>\n                <div class="title title--xlarge">' + (
                            null == (__t = content.title) ?
                            "" :
                            __t
                        ) + "</div>\n                ",
                        "destinations" === type && (__p += '\n                    <div class="country">' + (
                            null == (__t = content.country) ?
                            "" :
                            __t
                        ) + "</div>\n                "),
                        __p += '\n                <div class="text">' + (
                            null == (__t = content.intro) ?
                            "" :
                            __t
                        ) + '</div>\n                <div class="separator"></div>\n            </div>' +
                        '\n        </div>\n        <div class="collectionsCategory__categories">\n     ' +
                        '       ',
                        content.related.length > 0
                    ) {
                        __p += '\n                <div class="categories">\n                    ';
                        for (var i = 0; i < content.related.length; i++) {
                            __p += "\n                        ";
                            var rel = related[content.related[i]];
                            __p += "\n                        ";
                            var relatedTax = !!rel.relatedData[content.id] && rel.relatedData[content.id];
                            __p += '\n                        <div class="categories__item" data-index="' + (
                                    null == (__t = i) ?
                                    "" :
                                    __t
                                ) + '" data-rel="' + (
                                    null == (__t = rel.slug) ?
                                    "" :
                                    __t
                                ) + '">\n                            <a href="/' + (
                                    null == (__t = type) ?
                                    "" :
                                    __t
                                ) + "/" + (
                                    null == (__t = content.slug) ?
                                    "" :
                                    __t
                                ) + "/" + (
                                    null == (__t = rel.slug) ?
                                    "" :
                                    __t
                                ) + '">\n                                ',
                                relatedTax && relatedTax.image ?
                                __p += '\n                                    <div class="image">\n                   ' +
                                '                     <div class="image__bg" style="background-image: url(\'' + (
                                    null == (__t = relatedTax.image) ?
                                    "" :
                                    __t
                                ) + '\');"></div>\n                                        <div class="image__g' +
                                'radient"></div>\n                                    </div>\n                 ' +
                                '               ' :
                                __p += '\n                                    <div class="image">\n                   ' +
                                '                     <div class="image__bg" style="background-image: url(\'' + (
                                    null == (__t = rel.slider_image) ?
                                    "" :
                                    __t
                                ) + '\');"></div>\n                                        <div class="image__g' +
                                'radient"></div>\n                                    </div>\n                 ' +
                                '               ',
                                __p += '\n                                <div class="content">\n                     ' +
                                '               ',
                                rel.country && (
                                    __p += '\n                                        <div class="country">' + (
                                        null == (__t = rel.country) ?
                                        "" :
                                        __t
                                    ) + "</div>\n                                    "
                                ),
                                __p += '\n                                    <div class="title title--small">' + (
                                    null == (__t = rel.title) ?
                                    "" :
                                    __t
                                ) + '</div>\n                                    <div class="link"></div>\n    ' +
                                '                            </div>\n                            </a>\n        ' +
                                '                </div>\n                    '
                        }
                        __p += "\n                </div>\n            "
                    } else
                        __p += '\n                <div class="message title title--small">Sorry, but we still ' +
                        'don\'t have related posts to show you ...</div>\n            ';
                    __p += '\n        </div>\n        <div class="collectionsCategory__footer">\n         ' +
                        '   ' + (
                            null == (__t = footer()) ?
                            "" :
                            __t
                        ) + "\n        </div>\n    "
                }
                __p += '\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>\n</div>\n',
                    this.router.isDesktop && (__p += '\n    <div class="blank ' + (
                        null == (
                            __t = "experiences" === type ?
                            "black" :
                            ""
                        ) ?
                        "" :
                        __t
                    ) + '"></div>\n'),
                    __p += '\n<div class="archive"></div>\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                this.router.isDesktop && (__p += '<div class="mask"></div>'),
                    __p += '\n<div class="inner collectionsArchive">\n    <div class="collectionsArchive__' +
                    'header"></div>\n    <div class="collectionsArchive__archive">\n        <div cl' +
                    'ass="content">\n            <div class="label ' + (
                        null == (
                            __t = "destination" === type ?
                            "black" :
                            "white"
                        ) ?
                        "" :
                        __t
                    ) + '">' + (
                        null == (__t = experience.title + " IN") ?
                        "" :
                        __t
                    ) + '</div>\n            <div class="title title--large ' + (
                        null == (
                            __t = "destination" === type ?
                            "black" :
                            "white"
                        ) ?
                        "" :
                        __t
                    ) + '">' + (
                        null == (__t = destination.title) ?
                        "" :
                        __t
                    ) + "</div>\n            ",
                    this.router.isDesktop && (__p += '\n                <div class="country">' + (
                        null == (__t = destination.country) ?
                        "" :
                        __t
                    ) + "</div>\n            "),
                    __p += "\n            ",
                    this.router.isDesktop || (__p += '<div class="content__inner">'),
                    __p += "\n            ";
                for (var i = 0; i < items.length; i++) {
                    __p += "\n                ";
                    var collection = collections[items[i]];
                    __p += '\n                <div class="content__item item">\n                    <a hre' +
                        'f="collections/' + (
                            null == (__t = collection.slug) ?
                            "" :
                            __t
                        ) + '" data-router-link>\n                        ',
                        this.router.isDesktop ?
                        __p += '\n                            <div class="image">\n                           ' +
                        '     <div class="image__bg image__bg--overlay" style="background-image: url(\'' + (
                            null == (__t = collection.image) ?
                            "" :
                            __t
                        ) + '\');"></div>\n                            </div>\n                        ' +
                        '    <div class="info">\n                                <div class="title">' + (
                            null == (__t = collection.title) ?
                            "" :
                            __t
                        ) + '</div>\n                                <div class="text">' + (
                            null == (__t = collection.fields.intro) ?
                            "" :
                            __t
                        ) + '</div>\n                            </div>\n                            <d' +
                        'iv class="link">\n                                <svg version="1.1" viewBox="' +
                        '0 0 400 400">\n                                    <circle class="back" cx="20' +
                        '0" cy="200" r="190"></circle>\n                                    <circle cla' +
                        'ss="front" cx="200" cy="200" r="190"></circle>\n                              ' +
                        '  </svg>\n                                <div class="arrow">\n               ' +
                        '                     <div class="arrow__first"></div>\n                       ' +
                        '             <div class="arrow__last"></div>\n                                ' +
                        '</div>\n                            </div>\n                        ' :
                        __p += '\n                            <div class="image">\n                           ' +
                        '     <div class="image__bg image__bg--overlay" style="background-image: url(\'' + (
                            null == (__t = collection.image) ?
                            "" :
                            __t
                        ) + '\');"></div>\n                                <div class="overlay"></div>' +
                        '\n                                <div class="info">\n                        ' +
                        '            <div class="title">' + (
                            null == (__t = collection.title) ?
                            "" :
                            __t
                        ) + '</div>\n                                    <div class="text">' + (
                            null == (__t = collection.fields.intro) ?
                            "" :
                            __t
                        ) + "</div>\n                                </div>\n                          " +
                        "  </div>\n                        ",
                        __p += "\n                    </a>\n                </div>\n            "
                }
                __p += '\n            <div class="dots">\n                ';
                for (var i = 0; i < items.length; i++)
                    __p += '\n                    <div class="dots__item"></div>\n                ';
                __p += "\n            </div>\n            ",
                    this.router.isDesktop || (__p += "</div>"),
                    __p += '\n            <div class="closer ' + (
                        null == (
                            __t = "destination" === type ?
                            "black" :
                            "white"
                        ) ?
                        "" :
                        __t
                    ) + '"></div>\n        </div>\n    </div>\n    <div class="scrollbar">\n       ' +
                    ' <div class="bar"></div>\n    </div>\n</div>\n\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                __p += '<div class="inner collectionsSingle">\n    <div class="collectionsSingle__head' +
                    'er"></div>\n    <div class="collectionsSingle__hero">\n        <div class="bac' +
                    'kground">\n            <div class="background__bg" style="background-image: ur' +
                    'l(\'' + (
                        null == (__t = collection.fields.hero_image) ?
                        "" :
                        __t
                    ) + '\');"></div>\n            <div class="overlay"></div>\n        </div>\n   ' +
                    ' </div>\n    <div class="collectionsSingle__content">\n        <div class="con' +
                    'tent">\n            <div class="content__header">\n                ';
                for (var i = 0; i < collection.experiences.length; i++)
                    __p += '\n                    <div class="label">' + (
                        null == (__t = collection.experiences[i].name) ?
                        "" :
                        __t
                    ) + '<span class="white"> IN ' + (
                        null == (__t = collection.destinations[i].name) ?
                        "" :
                        __t
                    ) + "</span></div>\n                ";
                __p += '\n                <div class="title title--small">' + (
                        null == (__t = collection.title) ?
                        "" :
                        __t
                    ) + '</div>\n                <div class="intro">' + (
                        null == (__t = collection.fields.intro) ?
                        "" :
                        __t
                    ) + '</div>\n            </div>\n            <div class="content__cover">\n    ' +
                    '            <div class="background"><div class="background__bg" style="backgro' +
                    'und-image: url(\'' + (
                        null == (__t = collection.image) ?
                        "" :
                        __t
                    ) + "');\"></div></div>\n                ",
                    this.router.isDesktop && (__p += '\n                    <div class="image ' + (
                            null == (__t = collection.fields.image_above_position) ?
                            "" :
                            __t
                        ) + '">\n                        <div class="image__bg" style="background-image' +
                        ': url(\'' + (
                            null == (__t = collection.fields.image_above) ?
                            "" :
                            __t
                        ) + "');\"></div>\n                    </div>\n                "),
                    __p += '\n            </div>\n            <div class="content__flexible">\n           ' +
                    '     ';
                var flexible = collection.fields.flexible;
                __p += "\n                ";
                for (var i = 0; i < flexible.length; i++) {
                    __p += "\n                    ";
                    var contentType = flexible[i].acf_fc_layout;
                    if (__p += "\n                    ", "wysiwyg" === contentType)
                        __p += '\n                        <div class="flexible flexible--wysiwyg">\n          ' +
                        '                  <div class="wysiwyg">' + (
                            null == (__t = flexible[i].wysiwyg) ?
                            "" :
                            __t
                        ) + "</div>\n                        </div>\n                    ";
                    else if ("images" === contentType) {
                        __p += '\n                        <div class="flexible flexible--images">\n           ' +
                            '                 ';
                        var images = flexible[i].mosaic;
                        __p += "\n                            ";
                        var position = flexible[i].position;
                        __p += '\n                            <div class="mosaic mosaic--' + (
                            null == (
                                __t = "position1" === flexible[i].position ?
                                "1" :
                                "2"
                            ) ?
                            "" :
                            __t
                        ) + '">\n                                ';
                        for (var j = 0; j < images.length; j++)
                            __p += '\n                                    <div class="image image--' + (
                                null == (__t = j) ?
                                "" :
                                __t
                            ) + '"><div class="image__bg" style="background-image: url(\'' + (
                                null == (__t = images[j].image) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                                ";
                        __p += "\n                            </div>\n                        </div>\n        " +
                            "            "
                    } else
                        __p += '\n                        <div class="flexible flexible--error"></div>\n      ' +
                        '              ';
                    __p += "\n                "
                }
                __p += '\n                <a href="' + (
                        null == (__t = options.button_link) ?
                        "" :
                        __t
                    ) + '" class="button">' + (
                        null == (__t = options.button_text) ?
                        "" :
                        __t
                    ) + "</a>\n                ",
                    this.router.isDesktop && (
                        __p += '\n                    <div class="title">Related</div>\n                '
                    ),
                    __p += '\n            </div>\n\n        </div>\n    </div>\n    <div class="collection' +
                    'sSingle__related">\n        <div class="related">\n            ',
                    this.router.isDesktop || (
                        __p += '\n                <div class="title">Related</div>\n            '
                    ),
                    __p += '\n            <div class="slider">\n                <div class="slider__inner"' +
                    '>\n                    ';
                var related = collection.fields.related;
                if (__p += "\n                    ", related) {
                    __p += "\n                        ";
                    for (var i = 0; i < related.length; i++) {
                        __p += "\n                            ";
                        var single = allCollections[related[i].ID];
                        if (
                            __p += '\n                            <div class="slider__inner__item item">\n        ' +
                            '                        <a class="item" href="collections/' + (
                                null == (__t = single.slug) ?
                                "" :
                                __t
                            ) + '" data-router-link>\n                                    ',
                            this.router.isDesktop
                        ) {
                            __p += '\n                                    <div class="image">\n                   ' +
                                '                     <div class="image__bg image__bg--overlay" style="backgrou' +
                                'nd-image: url(\'' + (
                                    null == (__t = single.image) ?
                                    "" :
                                    __t
                                ) + '\');"></div>\n                                    </div>\n                ' +
                                '                    <div class="description">\n                               ' +
                                '         ';
                            for (var j = 0; j < single.experiences.length; j++)
                                __p += '\n                                            <div class="label">' + (
                                    null == (__t = single.experiences[j].name) ?
                                    "" :
                                    __t
                                ) + '<span class="white"> IN ' + (
                                    null == (__t = single.destinations[j].name) ?
                                    "" :
                                    __t
                                ) + "</span></div>\n                                        ";
                            __p += '\n                                        <div class="title">' + (
                                    null == (__t = single.title) ?
                                    "" :
                                    __t
                                ) + '</div>\n                                        <div class="text">' + (
                                    null == (__t = single.fields.intro) ?
                                    "" :
                                    __t
                                ) + '</div>\n                                    </div>\n                      ' +
                                '              <div class="link">\n                                        <svg' +
                                ' version="1.1" viewBox="0 0 400 400">\n                                       ' +
                                '     <circle class="back" cx="200" cy="200" r="190"></circle>\n               ' +
                                '                             <circle class="front" cx="200" cy="200" r="190"><' +
                                '/circle>\n                                        </svg>\n                    ' +
                                '                    <div class="arrow">\n                                     ' +
                                '       <div class="arrow__first"></div>\n                                     ' +
                                '       <div class="arrow__last"></div>\n                                      ' +
                                '  </div>\n                                    </div>\n                        ' +
                                '            '
                        } else
                            __p += '\n                                        <div class="image">\n               ' +
                            '                             <div class="image__bg image__bg--overlay" style="' +
                            'background-image: url(\'' + (
                                null == (__t = single.image) ?
                                "" :
                                __t
                            ) + '\');"></div>\n                                            <div class="info' +
                            '">\n                                                <div class="title">' + (
                                null == (__t = single.title) ?
                                "" :
                                __t
                            ) +
                            '</div>\n                                                <div class="text">' + (
                                null == (__t = single.fields.intro) ?
                                "" :
                                __t
                            ) + "</div>\n                                            </div>\n              " +
                            "                          </div>\n                                    ";
                        __p += "\n                                </a>\n                            </div>\n  " +
                            "                      "
                    }
                    __p += "\n                    "
                }
                __p += '\n                </div>\n            </div>\n        </div>\n    </div>\n    ' +
                    '<div class="collectionsSingle__search">\n        <div class="content">\n      ' +
                    '      <div class="title title--xlarge">' + (
                        null == (__t = options.search_title) ?
                        "" :
                        __t
                    ) + "</div>\n            ",
                    null === this.router.instance.store.pageFrom || "home" === this.router.instance.store.pageFrom ?
                    __p += '\n                <a href="' + (
                        null == (__t = options.search_button_link) ?
                        "" :
                        __t
                    ) + '" class="button">' + (
                        null == (__t = options.search_button_text) ?
                        "" :
                        __t
                    ) + "</a>\n            " :
                    __p += '\n                <div class="button button--prev">' + (
                        null == (__t = options.search_button_text) ?
                        "" :
                        __t
                    ) + "</div>\n            ",
                    __p += "\n        </div>\n    </div>\n    ",
                    this.router.isDesktop || (
                        __p += '\n        <div class="collectionsSingle__footer">\n            ' + (
                            null == (__t = footer()) ?
                            "" :
                            __t
                        ) + "\n        </div>\n    "
                    ),
                    __p += '\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>\n</div>\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                __p += '<div class="inner curators">\n    <div class="curators__header"></div>\n    <d' +
                    'iv class="curators__hero">\n        ',
                    this.router.isDesktop ?
                    __p += '\n            <div class="title title--xlarge">' + (
                        null == (__t = data.fields.hero_title) ?
                        "" :
                        __t
                    ) + "</div>\n        " :
                    __p += '\n            <div class="title title--xlarge">' + (
                        null == (__t = data.fields.hero_title_mobile) ?
                        "" :
                        __t
                    ) + "</div>\n        ",
                    __p += '\n        <div class="features">\n            ';
                var features = data.fields.features;
                __p += "\n            ";
                for (var i = 0; i < features.length; i++)
                    __p += '\n                <div class="features__item item--' + (
                        null == (__t = [i]) ?
                        "" :
                        __t
                    ) + '">\n                    <div class="image"><div class="image__bg" style="b' +
                    'ackground-image: url(\'' + (
                        null == (__t = features[i].image) ?
                        "" :
                        __t
                    ) +
                    '\');"></div></div>\n                    <div class="title title--large">' + (
                        null == (__t = features[i].title) ?
                        "" :
                        __t
                    ) + '</div>\n                    <div class="text">' + (
                        null == (__t = features[i].text) ?
                        "" :
                        __t
                    ) + "</div>\n                </div>\n            ";
                __p += '\n        </div>\n    </div>\n    <div class="curators__team team">\n        <' +
                    'div class="title title--xlarge">' + (
                        null == (__t = data.fields.team_title) ?
                        "" :
                        __t
                    ) + '</div>\n        <div class="team__featured">\n            <div class="cont' +
                    'ainer">\n                <div class="image"><div class="image__bg" style="back' +
                    'ground-image: url(\'' + (
                        null == (__t = data.fields.featured_image) ?
                        "" :
                        __t
                    ) + '\');"></div></div>\n                <div class="description title title--s' +
                    'mall">' + (
                        null == (__t = data.fields.featured_text) ?
                        "" :
                        __t
                    ) + '</div>\n                <div class="name">' + (
                        null == (__t = data.fields.featured_name) ?
                        "" :
                        __t
                    ) + '</div>\n                <div class="position">' + (
                        null == (__t = data.fields.featured_position) ?
                        "" :
                        __t
                    ) + '</div>\n                <div class="sign image">\n                    <div' +
                    ' class="image__bg" style="background-image: url(\'' + (
                        null == (__t = data.fields.featured_sign) ?
                        "" :
                        __t
                    ) + '\');"></div>\n                    <div class="image__mask">\n             ' +
                    '           <span></span>\n                        <span></span>\n             ' +
                    '           <span></span>\n                    </div>\n                </div>\n' +
                    '            </div>\n        </div>\n        <div class="team__list">\n        ' +
                    '    <div class="label">' + (
                        null == (__t = data.fields.list_label) ?
                        "" :
                        __t
                    ) + "</div>\n            ";
                var list = data.fields.list;
                __p += '\n            <div class="slider">\n                <div class="slider__inner"' +
                    '>\n                    ';
                for (var i = 0; i < list.length; i++) {
                    if (
                        __p += '\n                        <div class="slider__inner__item" data-index="' + (
                            null == (__t = i) ?
                            "" :
                            __t
                        ) + '">\n                            <div class="member member--visible">\n    ' +
                        '                            <div class="image">\n                             ' +
                        '       <div class="image__bg" style="background-image: url(\'' + (
                            null == (__t = list[i].list_image) ?
                            "" :
                            __t
                        ) + "');\"></div>\n                                </div>\n                    " +
                        "            ",
                        this.router.isDesktop && (__p += '\n                                    <div class="image above above--' + (
                            null == (__t = list[i].list_above_class) ?
                            "" :
                            __t
                        ) + '"><div class="image__bg" style="background-image: url(\'' + (
                            null == (__t = list[i].list_above) ?
                            "" :
                            __t
                        ) + "');\"></div></div>\n                                "),
                        __p += '\n                                <div class="name">' + (
                            null == (__t = list[i].list_name) ?
                            "" :
                            __t
                        ) + '</div>\n                                <div class="position">' + (
                            null == (__t = list[i].list_position) ?
                            "" :
                            __t
                        ) + '</div>\n                                <div class="anchor">\n            ' +
                        '                        <span class="text">Read more</span>\n                 ' +
                        '                   <span class="underline"></span>\n                          ' +
                        '      </div>\n                            </div>\n                            ' +
                        '<div class="member member--lightbox">\n                                <div cl' +
                        'ass="image image--below">\n                                    <div class="ima' +
                        'ge__bg" style="background-image: url(\'' + (
                            null == (__t = list[i].list_image) ?
                            "" :
                            __t
                        ) + "');\"></div>\n                                </div>\n                    " +
                        "            ",
                        this.router.isDesktop && (__p += '\n                                    <div class="image image--above">\n      ' +
                            '                                  <div class="image__bg" style="background-ima' +
                            'ge: url(\'' + (
                                null == (__t = list[i].list_above) ?
                                "" :
                                __t
                            ) + "');\"></div>\n                                    </div>\n                " +
                            "                "),
                        __p += '\n                                <div class="content">\n                     ' +
                        '               <div class="name">' + (
                            null == (__t = list[i].list_name) ?
                            "" :
                            __t
                        ) + '</div>\n                                    <div class="intro">' + (
                            null == (__t = list[i].list_intro) ?
                            "" :
                            __t
                        ) + '</div>\n                                    <div class="text">' + (
                            null == (__t = list[i].list_text) ?
                            "" :
                            __t
                        ) + "</div>\n                                    ",
                        list[i].list_linkedin && (__p += '\n                                        <a href="' + (
                                null == (__t = list[i].list_linkedin) ?
                                "" :
                                __t
                            ) + '" target="_blank" class="linkedin">Linkedin</a>\n                         ' +
                            '           '),
                        __p += "\n                                    ",
                        this.router.isDesktop
                    ) {
                        __p += "\n                                        ";
                        var gallery = list[i].list_gallery;
                        __p += "\n                                        ";
                        for (var j = 0; j < gallery.length; j++)
                            __p += '\n                                            <div class="gallery gallery--' + (
                                null == (__t = [j]) ?
                                "" :
                                __t
                            ) + '"><div class="gallery__bg" style="background-image: url(\'' + (
                                null == (__t = gallery[j].gallery_image) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                                        ";
                        __p += "\n                                    "
                    }
                    __p += "\n                                </div>\n                            </div>\n" +
                        "                        </div>\n                    "
                }
                __p += '\n                </div>\n            </div>\n        </div>\n        <div cla' +
                    'ss="team__ambassadors">\n            <div class="label">' + (
                        null == (__t = data.fields.ambassadors_label) ?
                        "" :
                        __t
                    ) + '</div>\n            <div class="slider">\n                <div class="slid' +
                    'er__inner">\n                    ';
                var ambassadors = data.fields.ambassadors;
                __p += "\n                    ";
                for (var i = 0; i < ambassadors.length; i++)
                    __p += '\n                        <div class="slider__inner__item" data-index="' + (
                        null == (__t = i) ?
                        "" :
                        __t
                    ) + '">\n                            <div class="ambassador">\n                ' +
                    '                <div class="video video--lightbox">\n                         ' +
                    '           <div class="video__inner">\n                                       ' +
                    ' <div class="video__player">\n                                            <vid' +
                    'eo preload="none" autoplay="false" muted="false" loop="false" controls="true" ' +
                    'playsinline>\n                                                <source src="' + (
                        null == (__t = ambassadors[i].ambassadors_video_mp4) ?
                        "" :
                        __t
                    ) + '" type="video/mp4"/>\n                                                <sou' +
                    'rce src="' + (
                        null == (__t = ambassadors[i].ambassadors_video_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                                                <so' +
                    'urce src="' + (
                        null == (__t = ambassadors[i].ambassadors_video_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                                            </video>' +
                    '\n                                        </div>\n                            ' +
                    '        </div>\n                                </div>\n                      ' +
                    '          <div class="video video--visible">\n                                ' +
                    '    <div class="video__inner">\n                                        <div c' +
                    'lass="video__poster background">\n                                            ' +
                    '<div class="background__bg" style="background-image: url(\'' + (
                        null == (__t = ambassadors[i].ambassadors_image) ?
                        "" :
                        __t
                    ) + '\');""></div>\n                                            <div class="ove' +
                    'rlay"></div>\n                                        </div>\n                ' +
                    '                        <div class="video__trigger"></div>\n                  ' +
                    '                      <div class="video__sensor"></div>\n                     ' +
                    '               </div>\n                                </div>\n               ' +
                    '                 <div class="name">' + (
                        null == (__t = ambassadors[i].ambassadors_name) ?
                        "" :
                        __t
                    ) + '</div>\n                                <div class="position">' + (
                        null == (__t = ambassadors[i].ambassadors_position) ?
                        "" :
                        __t
                    ) + "</div>\n                            </div>\n                        </div>" +
                    "\n                    ";
                __p += '\n                </div>\n            </div>\n        </div>\n    </div>\n    ' +
                    '<div class="curators__footer">\n        ' + (
                        null == (__t = footer()) ?
                        "" :
                        __t
                    ) + '\n    </div>\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>' +
                    '\n</div>\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                __p += '<div class="inner journalArchive">\n    <div class="journalArchive__header"></' +
                    'div>\n    <div class="journalArchive__hero">\n        ',
                    window.innerWidth > 767 ?
                    __p += '\n            <div class="title title--small">' + (
                        null == (__t = data.fields.title) ?
                        "" :
                        __t
                    ) + "</div>\n        " :
                    __p += '\n            <div class="title title--small">' + (
                        null == (__t = data.fields.title_mobile) ?
                        "" :
                        __t
                    ) + "</div>\n        ",
                    __p += '\n    </div>\n    <div class="journalArchive__archive">\n        <div class="c' +
                    'ontent">\n            <div class="column column--article column--0">\n        ' +
                    '        ';
                var list1 = data.fields.list1;
                if (__p += "\n                ", list1) {
                    __p += "\n                    ";
                    for (var i = 0; i < list1.length; i++) {
                        __p += "\n                        ";
                        var single = allJournals[list1[i].ID];
                        __p += '\n                        <a class="item ' + (
                                null == (
                                    __t = "vertical" === single.orientation ?
                                    "vertical" :
                                    "horizontal"
                                ) ?
                                "" :
                                __t
                            ) + '" href="/journal/' + (
                                null == (__t = single.slug) ?
                                "" :
                                __t
                            ) + '" data-router-link>\n                            <div class="image"><div c' +
                            'lass="image__bg" style="background-image: url(\'' + (
                                null == (
                                    __t = "vertical" === single.orientation ?
                                    single.fields.portrait_image :
                                    single.fields.landscape_image
                                ) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                            ",
                            this.router.isDesktop ?
                            __p += '\n                                <div class="info">\n                        ' +
                            '            <div class="date label">' + (
                                null == (__t = single.date) ?
                                "" :
                                __t
                            ) + ' &nbsp;|&nbsp;</div>\n                                    <div class="time' +
                            '"><div class="time__icon"></div><span>' + (
                                null == (__t = single.time) ?
                                "" :
                                __t
                            ) + '\' min read</span></div>\n                                </div>\n        ' +
                            '                        <div class="title">' + (
                                null == (__t = single.title) ?
                                "" :
                                __t
                            ) + '</div>\n                                <div class="excerpt">' + (
                                null == (__t = single.excerpt) ?
                                "" :
                                __t
                            ) + '</div>\n                                <div class="link">\n              ' +
                            '                      <svg version="1.1" viewBox="0 0 400 400">\n             ' +
                            '                           <circle class="back" cx="200" cy="200" r="190"></ci' +
                            'rcle>\n                                        <circle class="front" cx="200" ' +
                            'cy="200" r="190"></circle>\n                                    </svg>\n      ' +
                            '                              <div class="arrow">\n                           ' +
                            '             <div class="arrow__first"></div>\n                               ' +
                            '         <div class="arrow__last"></div>\n                                    ' +
                            '</div>\n                                </div>\n                            ' :
                            __p += '\n                                <div class="content">\n                     ' +
                            '               <div class="time"><div class="time__icon"></div><span>' + (
                                null == (__t = single.time) ?
                                "" :
                                __t
                            ) + '\' min read</span></div>\n                                    <div class="' +
                            'title">' + (
                                null == (__t = single.title) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="excerpt">' + (
                                null == (__t = single.excerpt) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="date label">' + (
                                null == (__t = single.date) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="link"></div>\n    ' +
                            '                            </div>\n                            ',
                            __p += "\n                        </a>\n                    "
                    }
                    __p += "\n                "
                }
                __p += '\n            </div>\n            <div class="column column--video">\n        ' +
                    '        ',
                    this.router.isDesktop || (
                        __p += '\n                    <div class="column__inner">\n                '
                    ),
                    __p += "\n                ";
                var list2 = data.fields.list2;
                if (__p += "\n                ", list2) {
                    __p += "\n                    ";
                    for (var i = 0; i < list2.length; i++) {
                        __p += "\n                        ";
                        var single = allJournals[list2[i].ID];
                        __p += '\n                        <a class="item" href="/journal/' + (
                                null == (__t = single.slug) ?
                                "" :
                                __t
                            ) + '" data-router-link>\n                            <div class="image">\n    ' +
                            '                            <div class="image__bg" style="background-image: ur' +
                            'l(\'' + (
                                null == (__t = single.fields.poster) ?
                                "" :
                                __t
                            ) + '\');"></div>\n                                <div class="overlay"></div>' +
                            '\n                                <div class="trigger"></div>\n               ' +
                            '                 <div class="sensor"></div>\n                            </div' +
                            '>\n                            <div class="title">' + (
                                null == (__t = single.title) ?
                                "" :
                                __t
                            ) + "</div>\n                        </a>\n                    "
                    }
                    __p += "\n                "
                }
                __p += "\n                ",
                    this.router.isDesktop || (
                        __p += "\n                    </div>\n                "
                    ),
                    __p += '\n            </div>\n            <div class="column column--article column--1' +
                    '">\n                ';
                var list3 = data.fields.list3;
                if (__p += "\n                ", list3) {
                    __p += "\n                    ";
                    for (var i = 0; i < list3.length; i++) {
                        __p += "\n                        ";
                        var single = allJournals[list3[i].ID];
                        __p += '\n                        <a class="item ' + (
                                null == (
                                    __t = "vertical" === single.orientation ?
                                    "vertical" :
                                    "horizontal"
                                ) ?
                                "" :
                                __t
                            ) + '" href="/journal/' + (
                                null == (__t = single.slug) ?
                                "" :
                                __t
                            ) + '" data-router-link>\n                            <div class="image"><div c' +
                            'lass="image__bg" style="background-image: url(\'' + (
                                null == (
                                    __t = "vertical" === single.orientation ?
                                    single.fields.portrait_image :
                                    single.fields.landscape_image
                                ) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                            ",
                            this.router.isDesktop ?
                            __p += '\n                                <div class="info">\n                        ' +
                            '            <div class="date label">' + (
                                null == (__t = single.date) ?
                                "" :
                                __t
                            ) + ' &nbsp;|&nbsp;</div>\n                                    <div class="time' +
                            '"><div class="time__icon"></div><span>' + (
                                null == (__t = single.time) ?
                                "" :
                                __t
                            ) + '\' min read</span></div>\n                                </div>\n        ' +
                            '                        <div class="title">' + (
                                null == (__t = single.title) ?
                                "" :
                                __t
                            ) + '</div>\n                                <div class="excerpt">' + (
                                null == (__t = single.excerpt) ?
                                "" :
                                __t
                            ) + '</div>\n                                <div class="link">\n              ' +
                            '                      <svg version="1.1" viewBox="0 0 400 400">\n             ' +
                            '                           <circle class="back" cx="200" cy="200" r="190"></ci' +
                            'rcle>\n                                        <circle class="front" cx="200" ' +
                            'cy="200" r="190"></circle>\n                                    </svg>\n      ' +
                            '                              <div class="arrow">\n                           ' +
                            '             <div class="arrow__first"></div>\n                               ' +
                            '         <div class="arrow__last"></div>\n                                    ' +
                            '</div>\n                                </div>\n                            ' :
                            __p += '\n                                <div class="content">\n                     ' +
                            '               <div class="time"><div class="time__icon"></div><span>' + (
                                null == (__t = single.time) ?
                                "" :
                                __t
                            ) + '\' min read</span></div>\n                                    <div class="' +
                            'title">' + (
                                null == (__t = single.title) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="excerpt">' + (
                                null == (__t = single.excerpt) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="date label">' + (
                                null == (__t = single.date) ?
                                "" :
                                __t
                            ) + '</div>\n                                    <div class="link"></div>\n    ' +
                            '                            </div>\n                            ',
                            __p += "\n                        </a>\n                    "
                    }
                    __p += "\n                "
                }
                __p += '\n            </div>\n        </div>\n    </div>\n    <div class="journalArchi' +
                    've__footer">\n        ' + (
                        null == (__t = footer()) ?
                        "" :
                        __t
                    ) + '\n    </div>\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>' +
                    '\n</div>\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                if (
                    __p += '<div class="inner journalSingle journalSingle--' + (
                        null == (
                            __t = "video" === journal.type ?
                            "video" :
                            "article"
                        ) ?
                        "" :
                        __t
                    ) + '">\n    <div class="journalSingle__header"></div>\n    ',
                    "video" === journal.type
                ) {
                    __p += '\n        <div class="journalSingle__hero journalSingle__heroVideo">\n        ' +
                        '    ',
                        this.router.isDesktop ?
                        (
                            __p += '\n            <div class="content">\n                <div class="excerpt">' + (
                                null == (__t = journal.excerpt) ?
                                "" :
                                __t
                            ) + '</div>\n                <div class="video">\n                    <div clas' +
                            's="info">\n                        <div class="date label">' + (
                                null == (__t = journal.date) ?
                                "" :
                                __t
                            ) + ' &nbsp;|&nbsp;</div>\n                        <div class="time"><div class' +
                            '="time__icon"></div><span>' + (
                                null == (__t = journal.time) ?
                                "" :
                                __t
                            ) + '\' min watch</span></div>\n                    </div>\n                   ' +
                            ' <div class="video__inner">\n                        <div class="video__player' +
                            '">\n                            ',
                            journal.fields.video_mp4 || journal.fields.video_webm || journal.fields.video_ogg ?
                            __p += '\n                            <video class="player" autoplay="false" controls=' +
                            '"true" preload="none" muted="false" playsinline>\n                            ' +
                            '    <source src="' + (
                                null == (__t = journal.fields.video_mp4) ?
                                "" :
                                __t
                            ) + '" type="video/mp4"/>\n                                <source src="' + (
                                null == (__t = journal.fields.video_webm) ?
                                "" :
                                __t
                            ) + '" type="video/webm"/>\n                                <source src="' + (
                                null == (__t = journal.fields.video_ogg) ?
                                "" :
                                __t
                            ) + '" type="video/ogg"/>\n                            </video>\n              ' +
                            '              ' :
                            __p += '\n                                <div id="' + (
                                null == (__t = journal.fields.youtube) ?
                                "" :
                                __t
                            ) + '" class="youtube"></div>\n                            ',
                            __p += '\n                        </div>\n                        <div class="video__p' +
                            'oster background">\n                            <div class="background__bg" st' +
                            'yle="background-image: url(\'' + (
                                null == (__t = journal.fields.poster) ?
                                "" :
                                __t
                            ) + '\');"></div>\n                        </div>\n                        <div' +
                            ' class="video__overlay"></div>\n                        <div class="video__tri' +
                            'gger"></div>\n                        <div class="video__sensor"></div>\n     ' +
                            '               </div>\n                </div>\n            </div>\n           ' +
                            ' '
                        ) :
                        (
                            __p += '\n                <div class="content">\n                    <div class="excer' +
                            'pt">' + (
                                null == (__t = journal.excerpt) ?
                                "" :
                                __t
                            ) + '</div>\n                    <div class="info">\n                        <d' +
                            'iv class="date label">' + (
                                null == (__t = journal.date) ?
                                "" :
                                __t
                            ) + ' | </div>\n                        <div class="time"><div class="time__ico' +
                            'n"></div><span>' + (
                                null == (__t = journal.time) ?
                                "" :
                                __t
                            ) + ' min watch</span></div>\n                    </div>\n                </div' +
                            '>\n                <div class="video video--lightbox">\n                    <d' +
                            'iv class="video__inner">\n                        <div class="video__player">' +
                            '\n                            ',
                            journal.fields.video_mp4 || journal.fields.video_webm || journal.fields.video_ogg ?
                            __p += '\n                            <video autoplay preload="none" loop muted="muted' +
                            '" playsinline>\n                                <source src="' + (
                                null == (__t = journal.fields.video_mp4) ?
                                "" :
                                __t
                            ) + '" type="video/mp4"/>\n                                <source src="' + (
                                null == (__t = journal.fields.video_webm) ?
                                "" :
                                __t
                            ) + '" type="video/webm"/>\n                                <source src="' + (
                                null == (__t = journal.fields.video_ogg) ?
                                "" :
                                __t
                            ) + '" type="video/ogg"/>\n                            </video>\n              ' +
                            '              ' :
                            __p += '\n                                <div data-id="' + (
                                null == (__t = journal.fields.youtube) ?
                                "" :
                                __t
                            ) + '" class="youtube"></div>\n                            ',
                            __p += '\n                        </div>\n                    </div>\n                ' +
                            '</div>\n                <div class="video video--visible">\n                  ' +
                            '  <div class="video__poster background">\n                        <div class="' +
                            'background__bg" style="background-image: url(\'' + (
                                null == (__t = journal.fields.poster) ?
                                "" :
                                __t
                            ) + '\');"></div>\n                    </div>\n                    <div class="' +
                            'video__overlay"></div>\n                    <div class="video__trigger"></div>' +
                            '\n                </div>\n            '
                        ),
                        __p += '\n        </div>\n        <div class="journalSingle__related journalSingle__re' +
                        'latedVideo">\n            <div class="label">Related</div>\n            <div c' +
                        'lass="related__inner">\n                ';
                    var related = journal.fields.related;
                    if (__p += "\n                ", related) {
                        __p += "\n                    ";
                        for (var i = 0; i < related.length; i++) {
                            __p += "\n                        ";
                            var single = allJournals[related[i].ID];
                            __p += '\n                        <div class="related__inner__item item">\n           ' +
                                '                 <a href="/journal/' + (
                                    null == (__t = single.slug) ?
                                    "" :
                                    __t
                                ) + '" data-router-link>\n                                <div class="image">\n' +
                                '                                    <div class="image__bg" style="background-i' +
                                'mage: url(\'' + (
                                    null == (__t = single.fields.poster) ?
                                    "" :
                                    __t
                                ) + '\');"></div>\n                                    <div class="overlay"></d' +
                                'iv>\n                                    <div class="trigger"></div>\n        ' +
                                '                            <div class="sensor"></div>\n                      ' +
                                '          </div>\n                                <div class="title">' + (
                                    null == (__t = single.title) ?
                                    "" :
                                    __t
                                ) + "</div>\n                            </a>\n                        </div>\n" +
                                "                    "
                        }
                        __p += "\n                "
                    }
                    __p += "\n            </div>\n        </div>\n    "
                } else {
                    __p += '\n        <div class="journalSingle__hero journalSingle__heroArticle">\n      ' +
                        '      ',
                        this.router.isDesktop ?
                        (
                            __p += '\n                <div class="content">\n                    <div class="info"' +
                            '>\n                        <div class="date label">' + (
                                null == (__t = journal.date) ?
                                "" :
                                __t
                            ) + " &nbsp;|&nbsp;</div>\n                        ",
                            journal.fields.author && (__p += '<div class="author">By ' + (
                                null == (__t = journal.fields.author) ?
                                "" :
                                __t
                            ) + "</div>"),
                            __p += '\n                        <div class="time"><div class="time__icon"></div><spa' +
                            'n>' + (
                                null == (__t = journal.time) ?
                                "" :
                                __t
                            ) + '\' min read</span></div>\n                    </div>\n                    ' +
                            '<div class="title">' + (
                                null == (__t = journal.title) ?
                                "" :
                                __t
                            ) + '</div>\n                    <div class="image"><div class="image__bg" styl' +
                            'e="background-image: url(\'' + (
                                null == (__t = journal.fields.landscape_image) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                </div>\n            "
                        ) :
                        (
                            __p += '\n                <div class="content">\n                    <div class="time"' +
                            '><div class="time__icon"></div><span>' + (
                                null == (__t = journal.time) ?
                                "" :
                                __t
                            ) + "' min read</span></div>\n                    ",
                            journal.fields.author && (__p += '<div class="author">By ' + (
                                null == (__t = journal.fields.author) ?
                                "" :
                                __t
                            ) + "</div>"),
                            __p += '\n                    <div class="title">' + (
                                null == (__t = journal.title) ?
                                "" :
                                __t
                            ) + '</div>\n                    <div class="date label">' + (
                                null == (__t = journal.date) ?
                                "" :
                                __t
                            ) + '</div>\n                    <div class="image"><div class="image__bg" styl' +
                            'e="background-image: url(\'' + (
                                null == (__t = journal.fields.landscape_image) ?
                                "" :
                                __t
                            ) + "');\"></div></div>\n                </div>\n            "
                        ),
                        __p += '\n        </div>\n        <div class="journalSingle__flexible journalSingle__f' +
                        'lexibleArticle">\n            ';
                    var flexible = journal.fields.flexible;
                    __p += "\n            ";
                    for (var i = 0; i < flexible.length; i++) {
                        __p += "\n                ";
                        var contentType = flexible[i].acf_fc_layout;
                        if (__p += "\n                ", "wysiwyg" === contentType) {
                            if (
                                __p += '\n                    <div class="flexible flexible--wysiwyg">\n              ' +
                                '          ',
                                this.router.isDesktop
                            ) {
                                __p += '\n                        <div class="columns">\n                            <' +
                                    'div class="column">\n                                ',
                                    flexible[i].excerpt && (
                                        __p += '\n                                    <div class="excerpt">' + (
                                            null == (__t = flexible[i].excerpt) ?
                                            "" :
                                            __t
                                        ) + "</div>\n                                "
                                    ),
                                    __p += "\n                                ";
                                var images = flexible[i].images;
                                __p += "\n                                ";
                                for (var j = 0; j < images.length; j++)
                                    __p += '\n                                    <div class="image image--' + (
                                        null == (
                                            __t = "horizontal" === images[j].orientation ?
                                            "horizontal" :
                                            "vertical"
                                        ) ?
                                        "" :
                                        __t
                                    ) + '"><div class="image__bg" style="background-image: url(\'' + (
                                        null == (__t = images[j].image) ?
                                        "" :
                                        __t
                                    ) + "');\"></div></div>\n                                ";
                                __p += '\n                            </div>\n                            <div class="' +
                                    'column">\n                                <div class="wysiwyg">' + (
                                        null == (__t = flexible[i].wysiwyg) ?
                                        "" :
                                        __t
                                    ) + "</div>\n                            </div>\n                        </div>" +
                                    "\n                        "
                            } else {
                                __p += "\n                            ",
                                    flexible[i].excerpt && (
                                        __p += '\n                            <div class="content content__excerpt">\n        ' +
                                        '                        <div class="excerpt">' + (
                                            null == (__t = flexible[i].excerpt) ?
                                            "" :
                                            __t
                                        ) +
                                        "</div>\n                            </div>\n                            "
                                    ),
                                    __p += '\n                            <div class="content">\n                         ' +
                                    '       <div class="wysiwyg">' + (
                                        null == (__t = flexible[i].wysiwyg) ?
                                        "" :
                                        __t
                                    ) +
                                    "</div>\n                            </div>\n                            ";
                                var images = flexible[i].images;
                                __p += "\n                            ";
                                for (var j = 0; j < images.length; j++)
                                    __p += '\n                                <div class="image image--' + (
                                        null == (
                                            __t = "horizontal" === images[j].orientation ?
                                            "horizontal" :
                                            "vertical"
                                        ) ?
                                        "" :
                                        __t
                                    ) + '"><div class="image__bg" style="background-image: url(\'' + (
                                        null == (__t = images[j].image) ?
                                        "" :
                                        __t
                                    ) + "');\"></div></div>\n                            ";
                                __p += "\n                        "
                            }
                            __p += "\n                    </div>\n                "
                        } else
                            "quote" === contentType ?
                            (
                                __p += '\n                    <div class="flexible flexible--quote">\n                ' +
                                '        <div class="quote">\n                            ',
                                this.router.isDesktop && (__p += '\n                                <div class="quote__icon"></div>\n           ' +
                                    '                 '),
                                __p += '\n                            <div class="quote__title title title--small">' + (
                                    null == (__t = flexible[i].title) ?
                                    "" :
                                    __t
                                ) + "</div>\n                        </div>\n                    </div>\n      " +
                                "          "
                            ) :
                            __p += '\n                    <div class="flexible flexible--error"></div>\n          ' +
                            '      ';
                        __p += "\n            "
                    }
                    __p += '\n        </div>\n        <div class="journalSingle__related journalSingle__re' +
                        'latedArticle">\n            <div class="label">Related</div>\n            <div' +
                        ' class="related__inner">\n                ';
                    var related = journal.fields.related;
                    if (__p += "\n                ", related) {
                        __p += "\n                    ";
                        for (var i = 0; i < related.length; i++) {
                            __p += "\n                        ";
                            var single = allJournals[related[i].ID];
                            __p += '\n                        <div class="related__inner__item item">\n           ' +
                                '                 <a href="/journal/' + (
                                    null == (__t = single.slug) ?
                                    "" :
                                    __t
                                ) + '" data-router-link>\n                                <div class="image">\n' +
                                '                                    <div class="image__bg" style="background-i' +
                                'mage: url(\'' + (
                                    null == (__t = single.fields.landscape_image) ?
                                    "" :
                                    __t
                                ) + "');\"></div>\n                                </div>\n                    " +
                                "            ",
                                this.router.isDesktop ?
                                __p += '\n                                    <div class="info">\n                    ' +
                                '                    <div class="date label">' + (
                                    null == (__t = single.date) ?
                                    "" :
                                    __t
                                ) + ' &nbsp;|&nbsp;</div>\n                                        <div class="' +
                                'time"><div class="time__icon"></div><span>' + (
                                    null == (__t = single.time) ?
                                    "" :
                                    __t
                                ) + '\' min read</span></div>\n                                    </div>\n    ' +
                                '                                <div class="title">' + (
                                    null == (__t = single.title) ?
                                    "" :
                                    __t
                                ) + '</div>\n                                    <div class="link">\n          ' +
                                '                              <svg version="1.1" viewBox="0 0 400 400">\n     ' +
                                '                                       <circle class="back" cx="200" cy="200" ' +
                                'r="190"></circle>\n                                            <circle class="' +
                                'front" cx="200" cy="200" r="190"></circle>\n                                  ' +
                                '      </svg>\n                                        <div class="arrow">\n   ' +
                                '                                         <div class="arrow__first"></div>\n   ' +
                                '                                         <div class="arrow__last"></div>\n    ' +
                                '                                    </div>\n                                  ' +
                                '  </div>\n                                ' :
                                __p += '\n                                    <div class="content">\n                 ' +
                                '                       <div class="time"><div class="time__icon"></div><span>' + (
                                    null == (__t = single.time) ?
                                    "" :
                                    __t
                                ) + '\' min read</span></div>\n                                        <div cla' +
                                'ss="title">' + (
                                    null == (__t = single.title) ?
                                    "" :
                                    __t
                                ) +
                                '</div>\n                                        <div class="date label">' + (
                                    null == (__t = single.date) ?
                                    "" :
                                    __t
                                ) + '</div>\n                                        <div class="link"></div>\n' +
                                '                                    </div>\n                                ',
                                __p += "\n                            </a>\n                        </div>\n          " +
                                "          "
                        }
                        __p += "\n                "
                    }
                    __p += "\n            </div>\n        </div>\n    "
                }
                __p += '\n    <div class="journalSingle__footer">\n        ' + (
                        null == (__t = footer()) ?
                        "" :
                        __t
                    ) + '\n    </div>\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>' +
                    '\n</div>\n'
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "";
            with(obj)
            __p += '<div class="inner page">\n    <div class="page__header"></div>\n    <div class' +
                '="page__content">\n        <h1>' + (
                    null == (__t = data.title) ?
                    "" :
                    __t
                ) + '</h1>\n        <div class="wysiwyg">' + (
                    null == (__t = data.content) ?
                    "" :
                    __t
                ) + '</div>\n    </div>\n    <div class="page__footer">\n        ' + (
                    null == (__t = footer()) ?
                    "" :
                    __t
                ) + '\n    </div>\n</div>\n<div class="scrollbar">\n    <div class="bar"></div>' +
                '\n</div>';
            return __p
        }
    }, , , , ,
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj)
            __p += '<div id="lightbox">\n    <div class="lightbox__mask"></div>\n    <div class="l' +
                'ightbox__inner"></div>\n    <div class="lightbox__closer"></div>\n</div>\n\n',
                this.router.isDesktop && (
                    __p += '\n    <div id="cursor">\n        <div class="cursor__dot"></div>\n        <div' +
                    ' class="cursor__text"><span>Drag</span></div>\n    </div>\n'
                ),
                __p += '\n\n<div id="mask">\n    <div class="mask__bg"></div>\n    <div class="mask__l' +
                'ogo">\n        <svg version="1.1" viewBox="0 0 400 400">\n            <circle ' +
                'class="back" cx="200" cy="200" r="190"></circle>\n            <circle class="f' +
                'ront" cx="200" cy="200" r="190"></circle>\n        </svg>\n    </div>\n</div>' +
                '\n';
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                __p += '<div id="menu" class="selected">\n    <div class="menu__inner">\n        ';
                var menuVideo = options.menu_video;
                __p += "\n        ";
                for (var i = 0; i < menuVideo.length; i++)
                    __p += '\n            <div class="video video--large video--large-' + (
                        null == (__t = [i]) ?
                        "" :
                        __t
                    ) + '">\n                <div class="video__inner">\n                    <video' +
                    ' autoplay preload="none" muted="muted" playsinline>\n                        <' +
                    'source src="' + (
                        null == (__t = menuVideo[i].video_large_mp4) ?
                        "" :
                        __t
                    ) + '" type="video/mp4"/>\n                        <source src="' + (
                        null == (__t = menuVideo[i].video_large_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                        <source src="' + (
                        null == (__t = menuVideo[i].video_large_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                    </video>\n                </div>' +
                    '\n            </div>\n            <div class="video video--small video--small-' + (
                        null == (__t = [i]) ?
                        "" :
                        __t
                    ) + '">\n                <div class="video__inner">\n                    <video' +
                    ' autoplay preload="none" muted="muted" playsinline>\n                        <' +
                    'source src="' + (
                        null == (__t = menuVideo[i].video_small_mp4) ?
                        "" :
                        __t
                    ) + '" type="video/mp4"/>\n                        <source src="' + (
                        null == (__t = menuVideo[i].video_small_webm) ?
                        "" :
                        __t
                    ) + '" type="video/webm"/>\n                        <source src="' + (
                        null == (__t = menuVideo[i].video_small_ogg) ?
                        "" :
                        __t
                    ) + '" type="video/ogg"/>\n                    </video>\n                </div>' +
                    '\n            </div>\n        ';
                __p += '\n    </div>\n    <nav class="nav">\n        ',
                    this.router.isDesktop || (
                        __p += '\n            <a href="/" class="logo" data-router-link></a>\n        '
                    ),
                    __p += '\n        <ul class="list">\n            ';
                var menu_mobile = options.menu_mobile;
                __p += "\n            ";
                for (var i = 0; i < menu_mobile.length; i++)
                    __p += '\n                <li>\n                    <a href="' + (
                        null == (__t = menu_mobile[i].mobile_link) ?
                        "" :
                        __t
                    ) + '" class="' + (
                        null == (__t = menu_mobile[i].mobile_class) ?
                        "" :
                        __t
                    ) + '" data-router-link data-index="' + (
                        null == (__t = i) ?
                        "" :
                        __t
                    ) + '">' + (
                        null == (__t = menu_mobile[i].mobile_text) ?
                        "" :
                        __t
                    ) + "</a>\n                </li>\n            ";
                __p += '\n        </ul>\n        <ul class="social">\n            ';
                var social = options.social;
                __p += "\n            ";
                for (var i = 0; i < social.length; i++)
                    __p += '\n                <li><a href="' + (
                        null == (__t = social[i].social_link) ?
                        "" :
                        __t
                    ) + '" target="_blank">' + (
                        null == (__t = social[i].social_text) ?
                        "" :
                        __t
                    ) + '<span class="underline"></span></a></li>\n            ';
                __p += "\n        </ul>\n    </nav>\n    ",
                    this.router.isDesktop || (__p += '\n        <div class="closer"></div>\n    '),
                    __p += "\n</div>\n\n",
                    this.router.isDesktop && (
                        __p += '\n    <div class="opener">\n        <div class="opener__circle">\n            ' +
                        '<svg version="1.1" viewBox="0 0 400 400">\n                <circle class="back' +
                        '" cx="200" cy="200" r="190"></circle>\n                <circle class="front" c' +
                        'x="200" cy="200" r="190"></circle>\n            </svg>\n        </div>\n      ' +
                        '  <div class="opener__icon">\n            <div class="opener__icon--top"></div' +
                        '>\n            <div class="opener__icon--bottom"></div>\n        </div>\n    <' +
                        '/div>\n'
                    ),
                    __p += "\n\n",
                    this.router.isDesktop || (
                        __p += '\n    <div id="menumobile" class="menumobile">\n        <div class="menumobile' +
                        '__logo">\n            <a href="/" data-router-link></a>\n        </div>\n     ' +
                        '   <div class="menumobile__opener">\n            <div class="icon">\n         ' +
                        '       <div class="icon--top"></div>\n                <div class="icon--bottom' +
                        '"></div>\n            </div>\n        </div>\n    </div>\n'
                    ),
                    __p += "\n"
            }
            return __p
        }
    },
    function(module, exports) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                if (
                    __p += '<div id="header" class="header ',
                    "home" == section && (__p += "home"),
                    __p += " " + (
                        null == (__t = color) ?
                        "" :
                        __t
                    ) + '">\n    ',
                    this.router.isDesktop
                ) {
                    __p += '\n    <div class="header__menu">\n        <nav class="menu">\n            <ul ' +
                        'class="list">\n                ';
                    var menu = options.menu;
                    __p += "\n                ";
                    for (var i = 0; i < menu.length; i++)
                        __p += '\n                    <li>\n                        <a href="' + (
                            null == (__t = menu[i].link) ?
                            "" :
                            __t
                        ) + '" class="' + (
                            null == (__t = menu[i].class) ?
                            "" :
                            __t
                        ) + '" data-router-link>' + (
                            null == (__t = menu[i].text) ?
                            "" :
                            __t
                        ) + '<span class="underline"></span></a>\n                    </li>\n          ' +
                        '      ';
                    __p += '\n            </ul>\n        </nav>\n    </div>\n    <div class="header__logo"' +
                        '>\n        <a href="/" class="logo" data-router-link></a>\n    </div>\n    '
                } else
                    __p += '\n        <div class="header__logo">\n            <a href="/" class="logo" dat' +
                    'a-router-link></a>\n        </div>\n        <div class="header__opener">\n    ' +
                    '        <div class="header__opener__icon">\n                <div class="header' +
                    '__opener__icon--top"></div>\n                <div class="header__opener__icon-' +
                    '-bottom"></div>\n            </div>\n        </div>\n    ';
                __p += "\n</div>\n"
            }
            return __p
        }
    }, ,
    function(module, exports, __webpack_require__) {
        module.exports = function(obj) {
            obj || (obj = {});
            var __t,
                __p = "",
                __j = Array.prototype.join;

            function print() {
                __p += __j.call(arguments, "")
            }
            with(obj) {
                var $i;
                __p += '<div id="content"></div>\n\n',
                    __p += "\n\n",
                    window.innerWidth < 1025 && (
                        __p += '\n    <div id="notice">\n        <div class="wrapper">\n            <div class' +
                        '="text">Atenci??n se??ores viajeros, giren su dispositivo si quieren seguir disf' +
                        'rutando del viaje</div>\n        </div>\n    </div>\n'
                    ),
                    __p += "\n"
            }
            return __p
        }
    },
    function(e, t, i) {}, , ,
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {}, , , , , , ,
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {},
    function(e, t, i) {
        "use strict";
        i.r(t);
        i(23);
        var r = function(e, t) {
                return e.indexOf(t) > -1
            },
            n = {
                array: function(e) {
                    return Array.isArray(e)
                },
                object: function(e) {
                    return r(Object.prototype.toString.call(e), "Object")
                },
                path: function(e) {
                    return n.obj(e) && e.hasOwnProperty("totalLength")
                },
                svg: function(e) {
                    return e instanceof SVGElement
                },
                node: function(e) {
                    return e.nodeType || n.svg(e)
                },
                nodeList: function(e) {
                    return e instanceof NodeList || e instanceof HTMLCollection
                },
                string: function(e) {
                    return "string" == typeof e
                },
                number: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                function: function(e) {
                    return "function" == typeof e
                },
                undefined: function(e) {
                    return void 0 === e
                },
                hex: function(e) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                },
                rgb: function(e) {
                    return /^rgb/.test(e)
                },
                hsl: function(e) {
                    return /^hsl/.test(e)
                },
                color: function(e) {
                    return n.hex(e) || n.rgb(e) || n.hsl(e)
                }
            };

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._eventCache = []
            }
            var t,
                i,
                r;
            return t = e,
                (i = [{
                    key: "_removeEvent",
                    value: function(e) {
                        this
                            ._eventCache[e]
                            .node
                            .removeEventListener(this._eventCache[e].action, this._eventCache[e].cb),
                            this
                            ._eventCache
                            .splice(e, 1)
                    }
                }, {
                    key: "add",
                    value: function(e, t, i) {
                        for (
                            var r = this,
                                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                                a = n.nodeList(e) || n.array(e) ?
                                e : [e],
                                u = function(e) {
                                    var n = !1 !== o ?

                                        function(t) {
                                            i.call(o, t, s, a[e])
                                        } :
                                        function(t) {
                                            i(t, s, a[e])
                                        };
                                    r
                                        ._eventCache
                                        .push({ node: a[e], action: t, func: i, cb: n, routerLink: l }),
                                        a[e].addEventListener(t, n)
                                },
                                c = 0; c < a.length; c++
                        )
                            u(c)
                    }
                }, {
                    key: "remove",
                    value: function(e, t, i) {
                        for (
                            var r = n.nodeList(e) || n.array(e) ?
                                e : [e],
                                o = 0; o < r.length; o++
                        )
                            for (var s = 0; s < this._eventCache.length;)
                                this
                                ._eventCache[s]
                                .node !== r[o] || this
                                ._eventCache[s]
                                .routerLink ?
                                s++
                                :
                                t && i ?
                                this
                                ._eventCache[s]
                                .action === t && this
                                ._eventCache[s]
                                .func === i ?
                                this._removeEvent(s) :
                                s++
                                :
                                t ?
                                this
                                ._eventCache[s]
                                .action === t ?
                                this._removeEvent(s) :
                                s++
                                :
                                i ?
                                this
                                ._eventCache[s]
                                .func === i ?
                                this._removeEvent(s) :
                                s++
                                :
                                this._removeEvent(s)
                    }
                }, {
                    key: "removeAll",
                    value: function() {
                        for (var e = 0; e < this._eventCache.length;)
                            this
                            ._eventCache[e]
                            .routerLink ?
                            e++
                            :
                            this._removeEvent(e)
                    }
                }, {
                    key: "_removeAll",
                    value: function() {
                        for (; this._eventCache.length > 0;)
                            this._removeEvent(0)
                    }
                }]) && o(t.prototype, i),
                r && o(t, r),
                e
        }();

        function l(e) {
            return (
                l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var u = {
                FIRST: 1,
                LAST: 2,
                BEFORE: 3,
                AFTER: 4
            },
            c = function() {},
            d = function() {
                function e(t) {
                    if (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e), !(
                            "object" === l(t) && t.eventHub && t.store && t.router && t.templateFunction
                        ))
                        throw new Error(
                            "This component needs event hub, store, router and a template function referenc" +
                            "es."
                        );
                    this.eventHub = t.eventHub,
                        this.store = t.store,
                        this.router = t.router,
                        this._templateFunction = t.templateFunction,
                        this._parent = t.parent || this.store.main || document.body,
                        this._insertPosition = t.insertPosition ?
                        u[t.insertPosition] :
                        u.FIRST,
                        this._insertReference = t.insertReference || !1,
                        this._templateData = t.templateData || {},
                        this.store.client && this.store.client.lang && !this._templateData.lang && (
                            this._templateData.lang = this.store.client.lang
                        ),
                        this._templateStyles = t.templateStyles || {},
                        this._templateDomNodes = [],
                        this._initialRenderDelay = t.initialRenderDelay || 0,
                        this.firstResize = !0,
                        this.isLeaving = !1,
                        this.events = new s
                }
                var t,
                    i,
                    r;
                return t = e,
                    (i = [{
                        key: "preloadItems",
                        value: function(e) {
                            return { main: [], secondary: [] }
                        }
                    }, {
                        key: "preloadProgress",
                        value: function(e) {}
                    }, {
                        key: "render",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ?
                                arguments[0] :
                                c,
                                t = arguments.length > 1 ?
                                arguments[1] :
                                void 0,
                                i = arguments.length > 2 ?
                                arguments[2] :
                                void 0;
                            this.beforeMount(t),
                                this._mount(e, i)
                        }
                    }, {
                        key: "beforeMount",
                        value: function(e) {}
                    }, {
                        key: "_mount",
                        value: function(e, t) {
                            var i = document.createElement("div");
                            i.innerHTML = this._templateFunction(this._templateData),
                                this.router.instance && this
                                .events
                                .add(
                                    i.querySelectorAll("a[data-router-link]"),
                                    "click",
                                    this.router.instance.clickLink, !1, !1, !0
                                );
                            for (var r = i.children.length, n = 0; n < r; n++) {
                                for (var o in this._templateDomNodes.push(i.children[0]), this._templateStyles)
                                    this
                                    ._templateDomNodes[n]
                                    .style[o] = this
                                    ._templateStyles[o];

                                0 === n ?
                                    this._insertPosition === u.FIRST ?
                                    this
                                    ._parent
                                    .insertAdjacentElement("afterbegin", this._templateDomNodes[n]) :
                                    this._insertPosition === u.LAST ?
                                    this
                                    ._parent
                                    .insertAdjacentElement("beforeend", this._templateDomNodes[n]) :
                                    this._insertPosition === u.BEFORE && this._insertReference ?
                                    this
                                    ._insertReference
                                    .insertAdjacentElement("beforebegin", this._templateDomNodes[n]) :
                                    this._insertPosition === u.AFTER && this._insertReference && this
                                    ._insertReference
                                    .insertAdjacentElement("afterend", this._templateDomNodes[n]) :
                                    this
                                    ._templateDomNodes[n - 1]
                                    .insertAdjacentElement("afterend", this._templateDomNodes[n])
                            }
                            i = null,
                                this._mounted(e, t)
                        }
                    }, {
                        key: "_mounted",
                        value: function(e, t) {
                            var i = this;
                            this.selectors(),
                                this.setup(t),
                                0 === this._initialRenderDelay ?
                                this._resizeEnter(e, t) :
                                setTimeout((function() {
                                    i._resizeEnter(e, t)
                                }), this._initialRenderDelay)
                        }
                    }, {
                        key: "_resizeEnter",
                        value: function(e, t) {
                            this.resize(this.store.client.sizes.width, this.store.client.sizes.height),
                                this.firstResize = !1,
                                this.enter(e, t)
                        }
                    }, {
                        key: "selectors",
                        value: function() {}
                    }, {
                        key: "setup",
                        value: function(e) {}
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {}
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {}
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {}
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e) {}
                    }, {
                        key: "resize",
                        value: function(e, t) {}
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            e()
                        }
                    }, {
                        key: "routeChanged",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ?
                                arguments[0] :
                                c;
                            e()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ?
                                arguments[0] :
                                c;
                            this.isLeaving = !0,
                                console.log(this._templateDomNodes),
                                this.leave((function() {
                                    e.afterLeave();
                                    for (var i = 0; i < e._templateDomNodes.length; i++)
                                        e
                                        ._parent
                                        .removeChild(e._templateDomNodes[i]);
                                    e
                                        .events
                                        ._removeAll(),
                                        e._templateDomNodes = null,
                                        e._parent = null,
                                        e._insertReference = null,
                                        t()
                                }))
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            e()
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {}
                    }]) && a(t.prototype, i),
                    r && a(t, r),
                    e
            }(),
            h = i(4);

        function v(e) {
            return (
                v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function _(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = m(e);
                if (t) {
                    var n = m(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return f(this, i)
            }
        }

        function f(e, t) {
            return !t || "object" !== v(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function m(e) {
            return (
                m = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var g = {
                DESKTOP: 1,
                MOBILE: 2,
                TABLET: 3,
                MIXED: 4
            },
            b = {
                NONE: 1,
                VERTICAL: 2,
                HORIZONTAL: 3
            },
            D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && p(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = y(o);

                function o(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    (t = n.call(this, e)).store.rootUrl = window.location.protocol + "//" +
                        window.location.host;
                    var i,
                        r,
                        s,
                        l = h
                        .getParser(window.navigator.userAgent)
                        .parsedResult;
                    return t._setOS(l),
                        t._setDevice(l),
                        t._addClasses(),
                        t._sayHello(),
                        t._appType = g[e.appType] || g.DESKTOP,
                        t._parent = document.querySelector("#app"),
                        t._orientation = b[e.orientation] || b.NONE,
                        t._resize = function() {
                            t.store.client.sizes.width = window.innerWidth,
                                t.store.client.sizes.height = window.innerHeight,
                                t.resize(t.store.client.sizes.width, t.store.client.sizes.height),
                                t
                                .router
                                .resize(t.store.client.sizes.width, t.store.client.sizes.height),
                                t._checkOrientation()
                        },
                        t._debouncedResize = (i = t._resize, r = 150, function() {
                            clearTimeout(s),
                                s = setTimeout(i, r)
                        }),
                        t
                }
                return t = o,
                    (i = [{
                        key: "_setOS",
                        value: function(e) {
                            switch (e.os.name.toLowerCase()) {
                                case "macos":
                                    this.store.client.os = "mac";
                                    break;
                                case "ios":
                                    this.store.client.os = "ios";
                                    break;
                                default:
                                    this.store.client.os = "windows"
                            }
                        }
                    }, {
                        key: "_setDevice",
                        value: function(e) {
                            switch (
                                this.store.client.device = "desktop" === e.platform.type ?
                                "desktop" :
                                "mobile",
                                e.browser.name
                            ) {
                                case "Internet Explorer":
                                    this.store.client.browser = "explorer";
                                    break;
                                case "Microsoft Edge":
                                    this.store.client.browser = "edge";
                                    break;
                                case "Firefox":
                                    this.store.client.browser = "firefox";
                                    break;
                                case "Safari":
                                    this.store.client.browser = "safari";
                                    break;
                                default:
                                    this.store.client.browser = "chrome"
                            }
                        }
                    }, {
                        key: "_addClasses",
                        value: function() {
                            var e = document.querySelector("html");
                            e
                                .classList
                                .add(this.store.client.device),
                                e
                                .classList
                                .add(this.store.client.os),
                                e
                                .classList
                                .add(this.store.client.browser)
                        }
                    }, {
                        key: "_sayHello",
                        value: function() {
                            "chrome" === this.store.client.browser || "firefox" === this.store.client.browser ?
                                window
                                .console
                                .log
                                .apply(console, [
                                    "%c Developed by Dgrees ", "display: block; padding: 5px; background: #351330; line-height: 40px; color: #" +
                                    "ffffff;"
                                ]) :
                                window
                                .console
                                .log("Developed by Dgrees")
                        }
                    }, {
                        key: "_mounted",
                        value: function(e, t) {
                            this.store.main = this
                                ._parent
                                .querySelector("#content"),
                                this.selectors(),
                                this.setup(t),
                                this.createEasings(),
                                this
                                .events
                                .add(window, "resize", this._debouncedResize),
                                this._resize(),
                                this._resizeEnter(e, !0)
                        }
                    }, {
                        key: "createEasings",
                        value: function() {}
                    }, {
                        key: "_checkOrientation",
                        value: function() {
                            this._orientation === b.NONE && this.rotateDevice(
                                    this.store.client.sizes.width > this.store.client.sizes.height ?
                                    0 :
                                    1
                                ),
                                this._orientation === b.VERTICAL ?
                                this.store.client.sizes.width > this.store.client.sizes.height ?
                                this.rotateDevice(!0) :
                                this.rotateDevice(!1) :
                                this._orientation === b.HORIZONTAL && (
                                    this.store.client.sizes.height > this.store.client.sizes.width ?
                                    this.rotateDevice(!0) :
                                    this.rotateDevice(!1)
                                )
                        }
                    }, {
                        key: "rotateDevice",
                        value: function(e) {}
                    }]) && _(t.prototype, i),
                    r && _(t, r),
                    o
            }(d),
            S = i(0),
            $ = i(2),
            w = i(17);

        function x(e) {
            return (
                x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function k(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var C = function() {},
            q = (
                document.querySelector("html"), ["before", "preloadHide", "show", "after"]
            ),
            A = 1,
            I = 2,
            O = 3,
            E = 4,
            F = function() {
                function e(t) {
                    var i = this;
                    if (
                        function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        "object" !== x(t) || !t.eventHub || !t.store || !t.routes
                    )
                        throw new Error("The router needs options, event hub, store and routes.");
                    this.eventHub = t.eventHub,
                        this.store = t.store,
                        this._routes = t.routes,
                        this.currentRoute = {
                            index: null,
                            params: {}
                        },
                        this._routesRegexp = this._createRegxp(),
                        this._base = t.base && "" !== t.base ?
                        this._normalize(t.base) :
                        "",
                        this._onSameRoute = t.onSameRoute || C,
                        this._allowSectionUpdate = !0 === t.allowSectionUpdate,
                        this._updateSection = !1,
                        this.currentSection = null,
                        this.newSection = null,
                        this._guards = {},
                        q.forEach((function(e) {
                            i._guards[e] = []
                        })),
                        this._preloader = new $,
                        this._secondaryPreloader = new $,
                        this._sectionLeft = !1,
                        this._sectionPreloaded = !1,
                        this._titleBase = t.titleBase || "",
                        this._titleSeparator = t.titleSeparator || "",
                        this._allowNavigation = !1 !== t.allowNavigation,
                        this.clickLink = function(e, t, r) {
                            if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button || r.target)) {
                                var n = r.pathname;
                                e.preventDefault(),
                                    i.go(n)
                            }
                        },
                        this._onpopstate = function(e) {
                            null !== i.currentSection && i._handle(window.location.pathname, E)
                        },
                        this
                        ._guards
                        .before
                        .push((function(e, t, r, n) {
                            i._allowNavigation = !1,
                                i._allowSectionUpdate && i.currentRoute.index === t && (i._updateSection = !1),
                                n()
                        })),
                        this
                        ._guards
                        .preloadHide
                        .push((function(e, t, r, n) {
                            if (i._updateSection)
                                i
                                .currentSection
                                .routeChanged(n, r);
                            else {
                                i.newSection = new e.component(r, null === i.currentSection);
                                var o = i
                                    .newSection
                                    .preloadItems(r);
                                i._preloadItems(i._preloader, o.main, (function() {
                                        i._sectionPreloaded = !0,
                                            i._checkSection(n)
                                    })),
                                    i._preloadItems(i._secondaryPreloader, o.secondary),
                                    null !== i.currentSection ?
                                    i
                                    .currentSection
                                    .destroy((function() {
                                        i._sectionLeft = !0,
                                            i._checkSection(n)
                                    })) :
                                    (i._sectionLeft = !0, i._checkSection(n))
                            }
                        })),
                        this
                        ._guards
                        .show
                        .push((function(e, t, r, n) {
                            e.title && "" !== e.title && (
                                    document.title = (i._titleBase + " " + i._titleSeparator + " " + e.title).trim()
                                ),
                                i._updateSection ?
                                n() :
                                i
                                .newSection
                                .render(n, r, null === i.currentSection)
                        })),
                        this
                        ._guards
                        .after
                        .push((function(e, t, r, n) {
                            i._updateSection ?
                                i._updateSection = !1 :
                                (i.currentSection = i.newSection, i.newSection = null),
                                i.currentRoute.index = t,
                                i.currentRoute.params = r,
                                i._allowNavigation = !0,
                                n()
                        })),
                        window.addEventListener("popstate", this._onpopstate, !1)
                }
                var t,
                    i,
                    r;
                return t = e,
                    (i = [{
                        key: "_createRegxp",
                        value: function() {
                            for (var e = [], t = 0; t < this._routes.length; t++) {
                                var i = [],
                                    r = Object(w.a)(this._routes[t].path, i);
                                e.push({ regex: r, keys: i })
                            }
                            return e
                        }
                    }, {
                        key: "_normalize",
                        value: function(e) {
                            return e.length > 0 && "/" !== e[0] && (e = "/" + e),
                                e.length > 1 && "/" === e[e.length - 1] && (e = e.slice(0, -1)),
                                e
                        }
                    }, {
                        key: "_removeBase",
                        value: function(e) {
                            return 0 === e.indexOf(this._base) && (
                                    e = e.substr(this._base.length),
                                    e = this._normalize(e)
                                ),
                                e
                        }
                    }, {
                        key: "_checkSection",
                        value: function(e) {
                            this._sectionLeft && this._sectionPreloaded && (
                                this._sectionLeft = !1,
                                this._sectionPreloaded = !1,
                                e()
                            )
                        }
                    }, {
                        key: "_preloadItems",
                        value: function(e, t, i) {
                            var r = this;
                            if (t && 0 !== t.length) {
                                e.reset(),
                                    e
                                    .onComplete
                                    .detachAll();
                                for (var n = 0; n < t.length; n++)
                                    e.resources[t[n]] || e.add(t[n]);
                                e
                                    .onProgress
                                    .add((function(e) {
                                        r
                                            .newSection
                                            .preloadProgress(e.progress)
                                    })),
                                    i && e
                                    .onComplete
                                    .once(i),
                                    e.load()
                            } else
                                i && i()
                        }
                    }, {
                        key: "_handle",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ?
                                arguments[0] :
                                "/",
                                t = arguments.length > 1 ?
                                arguments[1] :
                                void 0;
                            e = this._normalize(e),
                                e = "" !== this._base ?
                                this._removeBase(e) :
                                e;
                            var i = this._checkPath(e);
                            if (!1 !== i) {
                                if (t !== E) {
                                    var r = "" === this._base ?
                                        e :
                                        "/" === e ?
                                        this._base :
                                        this._base + e;
                                    t === A ?
                                        history.pushState({
                                            path: r
                                        }, null, r) :
                                        history.replaceState({
                                            path: r
                                        }, null, r)
                                }
                                t !== I && this._proccessGuards(i)
                            }
                        }
                    }, {
                        key: "_checkPath",
                        value: function(e) {
                            var t = this;
                            if (!1 === this._allowNavigation)
                                return !1;
                            var i,
                                r = null;
                            for (
                                i = 0; i < this._routesRegexp.length && null === (r = this._routesRegexp[i].regex.exec(e)); i++
                            )
                            ;
                            if (null === r)
                                return setTimeout((function() {
                                    t.redirect("/")
                                }), 0), !1;
                            for (var n = {}, o = 1, s = r.length; o < s; ++o) {
                                var l = this
                                    ._routesRegexp[i]
                                    .keys[o - 1],
                                    a = "string" == typeof r[o] ?
                                    decodeURIComponent(r[o]) :
                                    r[o];
                                l && (n[l.name] = a)
                            }
                            return this.currentRoute.index === i && JSON.stringify(
                                    this.currentRoute.params
                                ) === JSON.stringify(n) ?
                                (this._onSameRoute(this.currentRoute), !1) : {
                                    index: i,
                                    params: n
                                }
                        }
                    }, {
                        key: "_proccessGuards",
                        value: function(e) {
                            var t = this,
                                i = q.length,
                                r = this
                                ._guards[q[0]]
                                .length,
                                n = 0,
                                o = 0;
                            ! function s() {
                                o === r && (o = 0, (n += 1) < i && (r = t._guards[q[n]].length)),
                                    n !== i && t._guards[q[n]][o++](t._routes[e.index], e.index, e.params, s)
                            }()
                        }
                    }, {
                        key: "addGuard",
                        value: function(e, t) {
                            this._guards[e] && this
                                ._guards[e]
                                .splice(this._guards[e].length - 1, 0, t)
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ?
                                arguments[0] :
                                window.location.pathname;
                            this.redirect(e)
                        }
                    }, {
                        key: "go",
                        value: function(e) {
                            this._handle(e, A)
                        }
                    }, {
                        key: "redirect",
                        value: function(e) {
                            this._handle(e, O)
                        }
                    }, {
                        key: "replace",
                        value: function(e) {
                            this._handle(e, I)
                        }
                    }]) && k(t.prototype, i),
                    r && k(t, r),
                    e
            }(),
            P = {
                main: null,
                rootUrl: null,
                appData: null,
                client: {
                    browser: "",
                    device: "",
                    lang: "en",
                    os: "",
                    sizes: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    mousePosition: {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }
                }
            },
            j = {
                navigate: new(i(3))
            },
            T = i(18),
            L = i.n(T);
        i(26);

        function R(e) {
            return (
                R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function B(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function V(e, t) {
            return (V = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function M(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = N(e);
                if (t) {
                    var n = N(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return z(this, i)
            }
        }

        function z(e, t) {
            return !t || "object" !== R(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function N(e) {
            return (
                N = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var H = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && V(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = M(o);

                function o(e) {
                    var t;
                    return function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, o),
                        (t = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: L.a,
                            insertPosition: "AFTER",
                            insertReference: P.main,
                            initialRenderDelay: null === P.pageFrom ?
                                1e3 : 0
                        })).cursor = {
                            lock: !1,
                            isOpen: !1,
                            isPlayed: !1,
                            isReduced: !1
                        },
                        t.lightbox = {
                            type: null
                        },
                        t
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$cursor = document.getElementById("cursor"),
                                this.$lightbox = document.getElementById("lightbox"),
                                this.$lightboxMask = this
                                .$lightbox
                                .querySelector(".lightbox__mask"),
                                this.$lightboxInner = this
                                .$lightbox
                                .querySelector(".lightbox__inner"),
                                this.$lightboxCloser = this
                                .$lightbox
                                .querySelector(".lightbox__closer"),
                                this.$video = null,
                                this.$mask = document.getElementById("mask"),
                                this.$maskLogo = this
                                .$mask
                                .querySelector(".mask__logo")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            this.$cursor && this
                                .events
                                .add(document, "mousemove", (function(e) {
                                    t.moveCursor(e)
                                })),
                                this
                                .events
                                .add(this.$lightboxMask, "click", (function(e, i, r) {
                                    t.closeLightbox()
                                }), this),
                                this
                                .events
                                .add(this.$lightboxCloser, "click", (function(e, i, r) {
                                    t.closeLightbox()
                                }), this)
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "openLightbox",
                        value: function(e, t) {
                            var i = this;
                            if (
                                this.lightbox.type = e,
                                this.router.isDesktop ?
                                this.router.instance.currentSection.superScroller._scroll.enable = !1 :
                                document.getElementById("content").classList.add("noscroll"),
                                this.$lightboxInner.innerHTML = t.outerHTML,
                                "video" === this.lightbox.type
                            ) {
                                if (
                                    S.a.set(this.$lightbox, { display: "block" }),
                                    S.a.set(this.$lightboxMask, {
                                        display: "block",
                                        backgroundColor: "#000000"
                                    }),
                                    S.a.set(this.$lightboxInner, { y: "-100%" }),
                                    this.$video = this.$lightboxInner.querySelector("video"),
                                    this.$video && (
                                        this.$video.controls = !0,
                                        this.$video.currentTime = 0,
                                        this.$video.autoplay = !0,
                                        this.$video.muted = !1,
                                        this.$video.loop = !1,
                                        this.$video.volume = 0
                                    ), !this.router.isDesktop
                                ) {
                                    var r = this
                                        .$lightboxInner
                                        .querySelector(".video__player")
                                        .children[0]
                                        .getAttribute("data-id") + "-Mobile";
                                    this.$videoPlayerObj = new YT.Player(r.replace("-Mobile", ""), {
                                        playerVars: {
                                            rel: 0,
                                            showinfo: 0,
                                            ecver: 2
                                        },
                                        videoId: r
                                    })
                                }
                                this.$video && S
                                    .a
                                    .to(this.$video, {
                                        volume: 1,
                                        ease: "expo.inOut",
                                        duration: 1
                                    }),
                                    this.router.isDesktop ?
                                    S
                                    .a
                                    .to(this.$lightboxMask, {
                                        opacity: .9,
                                        ease: "power2.out",
                                        duration: .8
                                    }) :
                                    S
                                    .a
                                    .to(this.$lightboxMask, {
                                        opacity: .9,
                                        ease: "power2.out",
                                        duration: .4
                                    }),
                                    S
                                    .a
                                    .to(this.$lightboxInner, {
                                        y: "0%",
                                        ease: "expo.inOut",
                                        duration: 1
                                    }),
                                    S
                                    .a
                                    .to(this.$lightboxCloser, {
                                        scale: 1,
                                        opacity: 1,
                                        ease: "expo.inOut",
                                        duration: .4,
                                        delay: .2
                                    }),
                                    this.$video && (this.$video.onended = function() {
                                        null !== document.fullscreenElement && document.exitFullscreen(),
                                            S
                                            .a
                                            .delayedCall(1, (function() {
                                                i.closeLightbox()
                                            }))
                                    })
                            } else
                                S
                                .a
                                .set(this.$lightbox, { display: "block" }),
                                this.router.isDesktop || S
                                .a
                                .set(this.$lightbox, { backgroundColor: "#ffffff" }),
                                S
                                .a
                                .set(this.$lightboxMask, {
                                    display: "block",
                                    backgroundColor: "#ffffff"
                                }),
                                S
                                .a
                                .set(this.$lightboxInner, { y: "0%" }),
                                S
                                .a
                                .to(this.$lightboxMask, {
                                    opacity: 1,
                                    ease: "power2.out",
                                    duration: .4
                                }),
                                S
                                .a
                                .to(this.$lightboxCloser, {
                                    scale: 1,
                                    opacity: 1,
                                    ease: "expo.inOut",
                                    duration: .4,
                                    delay: .2
                                }),
                                this.router.isDesktop || this
                                .$lightbox
                                .classList
                                .add("member"),
                                this
                                .$lightboxCloser
                                .classList
                                .add("member"),
                                this.$member = this
                                .$lightboxInner
                                .querySelector(".member"),
                                S
                                .a
                                .to(this.$member.querySelector(".image--below"), {
                                    x: 0,
                                    ease: "expo.inOut",
                                    duration: 1
                                }),
                                S
                                .a
                                .to(this.$member.querySelector(".image--below .image__bg"), {
                                    x: 0,
                                    ease: "expo.inOut",
                                    duration: 1
                                }),
                                this.router.isDesktop && (S.a.to(this.$member.querySelector(".image--above"), {
                                    x: 0,
                                    ease: "expo.inOut",
                                    duration: 1,
                                    delay: .2
                                }), S.a.to(this.$member.querySelector(".image--above .image__bg"), {
                                    x: 0,
                                    ease: "expo.inOut",
                                    duration: 1,
                                    delay: .2
                                })),
                                S
                                .a
                                .to(this.$member.querySelector(".content"), {
                                    opacity: 1,
                                    ease: "power2.out",
                                    duration: 1,
                                    delay: .2
                                })
                        }
                    }, {
                        key: "closeLightbox",
                        value: function() {
                            var e = this;
                            this.router.isDesktop ?
                                this.router.instance.currentSection.superScroller._scroll.enable = !0 :
                                document
                                .getElementById("content")
                                .classList
                                .remove("noscroll"),
                                "video" === this.lightbox.type ?
                                (
                                    this.$video = this.$lightboxInner.querySelector("video"),
                                    this.$video && S.a.to(this.$video, {
                                        volume: 0,
                                        ease: "expo.inOut",
                                        duration: 1
                                    }),
                                    S.a.to(this.$lightboxCloser, {
                                        scale: .6,
                                        opacity: 1e-4,
                                        ease: "expo.inOut",
                                        duration: .4
                                    }),
                                    S.a.to(this.$lightboxInner, {
                                        y: "100%",
                                        ease: "expo.inOut",
                                        duration: .8
                                    }),
                                    S.a.to(this.$lightboxMask, {
                                        opacity: 0,
                                        ease: "power2.out",
                                        duration: .8,
                                        delay: .4,
                                        clearProps: "all",
                                        onComplete: function() {
                                            e.$video && e
                                                .$video
                                                .remove(),
                                                S
                                                .a
                                                .set(e.$lightbox, { display: "none" }),
                                                e.lightbox.type = null
                                        }
                                    })
                                ) :
                                (
                                    this.router.isDesktop || S.a.set(this.$lightbox, { backgroundColor: "transparent" }),
                                    this.$member = this.$lightboxInner.querySelector(".member"),
                                    this.router.isDesktop && (S.a.to(this.$member.querySelector(".image--above"), {
                                        x: "-100%",
                                        ease: "expo.inOut",
                                        duration: .8
                                    }), S.a.to(this.$member.querySelector(".image--above .image__bg"), {
                                        x: "100%",
                                        ease: "expo.inOut",
                                        duration: .8
                                    })),
                                    S.a.to(this.$member.querySelector(".image--below"), {
                                        x: "-100%",
                                        ease: "expo.inOut",
                                        duration: .8,
                                        delay: .1
                                    }),
                                    S.a.to(this.$member.querySelector(".image--below .image__bg"), {
                                        x: "100%",
                                        ease: "expo.inOut",
                                        duration: .8,
                                        delay: .1
                                    }),
                                    S.a.to(this.$member.querySelector(".content"), {
                                        opacity: .001,
                                        ease: "power2.out",
                                        duration: .8,
                                        delay: 0
                                    }),
                                    S.a.to(this.$lightboxCloser, {
                                        scale: .6,
                                        opacity: 1e-4,
                                        ease: "expo.inOut",
                                        duration: .4
                                    }),
                                    S.a.to(this.$lightboxMask, {
                                        opacity: 0,
                                        ease: "power2.out",
                                        duration: .4,
                                        delay: .4,
                                        clearProps: "all",
                                        onComplete: function() {
                                            e
                                                .$member
                                                .remove(),
                                                S
                                                .a
                                                .set(e.$lightbox, { display: "none" }),
                                                e.lightbox.type = null
                                        }
                                    })
                                )
                        }
                    }, {
                        key: "moveCursor",
                        value: function(e) {
                            this.cursor.lock || S
                                .a
                                .to(this.$cursor, {
                                    x: e.clientX,
                                    y: e.clientY,
                                    duration: .6,
                                    ease: "power4.out",
                                    overwrite: "all"
                                })
                        }
                    }, {
                        key: "openCursor",
                        value: function() {
                            this.cursor.isOpen ?
                                (S.a.to(this.$cursor.children[1], {
                                    scale: 0,
                                    duration: .8,
                                    ease: "expo.out"
                                }), this.cursor.isOpen = !1) :
                                (
                                    this.cursor.isOpen = !0,
                                    this.cursor.isReduced ?
                                    S.a.to(this.$cursor.children[1], {
                                        scale: .6,
                                        duration: .8,
                                        ease: "expo.out"
                                    }) :
                                    S.a.to(this.$cursor.children[1], {
                                        scale: 1,
                                        duration: .8,
                                        ease: "expo.out"
                                    })
                                )
                        }
                    }, {
                        key: "reduceCursor",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ?
                                arguments[0] :
                                null;
                            e
                                ?
                                (
                                    this.cursor.isPlayed = !0,
                                    this.$cursor.children[1].children[0].innerHTML = e,
                                    S.a.to(this.$cursor.children[1], {
                                        scale: .65,
                                        duration: .8,
                                        ease: "expo.out"
                                    }),
                                    S.a.to(this.$cursor.children[1], {
                                        backgroundColor: "white",
                                        color: "black",
                                        duration: .8,
                                        ease: "expo.out"
                                    }),
                                    S.a.to(this.$cursor.children[1].children[0], {
                                        scale: 1.5,
                                        duration: .8,
                                        ease: "expo.out"
                                    })
                                ) :
                                (this.cursor.isReduced = !0, S.a.to(this.$cursor.children[1], {
                                    scale: .5,
                                    duration: .8,
                                    ease: "expo.out"
                                }), S.a.to(this.$cursor.children[1].children[0], {
                                    opacity: 1e-4,
                                    duration: .8,
                                    ease: "expo.out"
                                }))
                        }
                    }, {
                        key: "expandCursor",
                        value: function() {
                            this.cursor.isReduced = !1,
                                this.cursor.isPlayed && (
                                    this.$cursor.children[1].children[0].innerHTML = "DRAG",
                                    S.a.to(this.$cursor.children[1], {
                                        backgroundColor: "#bf1826",
                                        color: "white",
                                        duration: .8,
                                        ease: "expo.out"
                                    }),
                                    S.a.to(this.$cursor.children[1].children[0], {
                                        scale: 1,
                                        duration: .8,
                                        ease: "expo.out"
                                    }),
                                    this.cursor.isPlayed = !1
                                ),
                                this.cursor.isOpen ?
                                S
                                .a
                                .to(this.$cursor.children[1], {
                                    scale: 1,
                                    duration: .8,
                                    ease: "expo.out"
                                }) :
                                S
                                .a
                                .to(this.$cursor.children[1], {
                                    scale: 0,
                                    duration: .8,
                                    ease: "expo.out"
                                }),
                                S
                                .a
                                .to(this.$cursor.children[1].children[0], {
                                    opacity: 1,
                                    duration: .8,
                                    ease: "expo.out"
                                })
                        }
                    }, {
                        key: "initMask",
                        value: function(e) {
                            var t = this;
                            e
                                ?
                                (S.a.to(this.$maskLogo, {
                                    opacity: 1,
                                    duration: 2,
                                    ease: "power2.out"
                                }), S.a.set(this.$mask, {
                                    y: "0%",
                                    display: "block"
                                }), S.a.set(this.$mask.children[0], { backgroundColor: "#000000" })) :
                                (S.a.set(this.$mask, {
                                    y: "0%",
                                    display: "block"
                                }), S.a.to(this.$mask, {
                                    y: "100%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: 1,
                                    onComplete: function() {
                                        S
                                            .a
                                            .set(t.$mask, {
                                                display: "none",
                                                clearProps: "all"
                                            })
                                    }
                                }))
                        }
                    }, {
                        key: "leaveMask",
                        value: function() {
                            var e = this;
                            S
                                .a
                                .to(this.$mask, {
                                    y: "100%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: 0,
                                    onComplete: function() {
                                        S
                                            .a
                                            .set(e.$mask, {
                                                display: "none",
                                                clearProps: "all",
                                                delay: .1
                                            })
                                    }
                                })
                        }
                    }, {
                        key: "enterMask",
                        value: function() {
                            S
                                .a
                                .set(this.$mask, {
                                    y: "-100%",
                                    display: "block"
                                }),
                                S
                                .a
                                .to(this.$mask, {
                                    y: "0%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: 0
                                })
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {}
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .to(this.$header, {
                                    opacity: 1e-4,
                                    duration: .8,
                                    ease: "power2.inOut",
                                    onComplete: e
                                })
                        }
                    }]) && B(t.prototype, i),
                    r && B(t, r),
                    o
            }(d),
            W = i(19),
            G = i.n(W);
        i(27);

        function U(e) {
            return (
                U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Y(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function X(e, t) {
            return (X = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function J(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = K(e);
                if (t) {
                    var n = K(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Z(this, i)
            }
        }

        function Z(e, t) {
            return !t || "object" !== U(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function K(e) {
            return (
                K = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && X(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = J(o);

                function o(e) {
                    var t;
                    return function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, o),
                        (t = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: G.a,
                            templateData: {
                                options: P.appData.options
                            },
                            insertPosition: "AFTER",
                            insertReference: P.main,
                            initialRenderDelay: null === P.pageFrom ?
                                1e3 : 0
                        })).menu = {
                            open: !1,
                            isAnimating: !1,
                            isShowing: !1,
                            openerVisible: !1
                        },
                        t.cursor = {
                            isOpen: !1,
                            isReduced: !1
                        },
                        t.contentScroll = 0,
                        t.contentPosition = document
                        .getElementById("content")
                        .scrollTop,
                        t.archiveSvg = {
                            dashoffset: 0
                        },
                        t
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$opener = document.querySelector(".opener"),
                                this.$menu = document.getElementById("menu"),
                                this.$menuLinks = this
                                .$menu
                                .querySelectorAll("li > a"),
                                this.$menuVideosLarge = this
                                .$menu
                                .querySelectorAll(".video--large"),
                                this.$menuVideosSmall = this
                                .$menu
                                .querySelectorAll(".video--small"),
                                this.$menuLogo = this
                                .$menu
                                .querySelector(".logo"),
                                this.$menuCloser = this
                                .$menu
                                .querySelector(".closer"),
                                this.$menuSocial = this
                                .$menu
                                .querySelector(".social"),
                                this.$menuSocialLinks = this
                                .$menuSocial
                                .querySelectorAll("li > a"),
                                this.$menuMobile = document.getElementById("menumobile")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            if (this.enterAnimation = S.a.timeline({
                                    paused: !0,
                                    delay: 0
                                }), this.router.isDesktop) {
                                for (var i = 0; i < this.$menuSocialLinks.length; i++)
                                    this
                                    .events
                                    .add(this.$menuSocialLinks[i], "mouseenter", (function(e, i, r) {
                                        t.enterSocialLink(e, i, r)
                                    }), this),
                                    this
                                    .events
                                    .add(this.$menuSocialLinks[i], "mouseleave", (function(e, i, r) {
                                        t.leaveSocialLink(e, i, r)
                                    }), this);
                                for (var r = 0; r < this.$menuVideosLarge.length; r++)
                                    this
                                    .$menuVideosLarge[r]
                                    .querySelector("video")
                                    .pause();
                                for (var n = 0; n < this.$menuVideosSmall.length; n++)
                                    this
                                    .$menuVideosSmall[n]
                                    .querySelector("video")
                                    .pause();
                                for (var o = function(e) {
                                        t
                                            .events
                                            .add(t.$menuLinks[e], "mouseenter", (function(i, r, n) {
                                                if (t.enterMenu(i, n.dataset.index), 1 === e) {
                                                    t
                                                        .$menu
                                                        .classList
                                                        .add("black");
                                                    for (var o = 0; o < t.$menuLinks.length; o++)
                                                        t
                                                        .$menuLinks[o]
                                                        .classList
                                                        .add("white");
                                                    for (var s = 0; s < t.$menuSocialLinks.length; s++)
                                                        t
                                                        .$menuSocialLinks[s]
                                                        .classList
                                                        .add("white")
                                                }
                                                if (2 === e) {
                                                    t
                                                        .$menu
                                                        .classList
                                                        .add("red");
                                                    for (var l = 0; l < t.$menuSocialLinks.length; l++)
                                                        t
                                                        .$menuSocialLinks[l]
                                                        .classList
                                                        .add("white")
                                                }
                                            }), t),
                                            t
                                            .events
                                            .add(t.$menuLinks[e], "mouseleave", (function(i, r, n) {
                                                if (t.leaveMenu(i, n.dataset.index), 1 === e) {
                                                    t
                                                        .$menu
                                                        .classList
                                                        .remove("black");
                                                    for (var o = 0; o < t.$menuLinks.length; o++)
                                                        t
                                                        .$menuLinks[o]
                                                        .classList
                                                        .remove("white");
                                                    for (var s = 0; s < t.$menuSocialLinks.length; s++)
                                                        t
                                                        .$menuSocialLinks[s]
                                                        .classList
                                                        .remove("white")
                                                }
                                                if (2 === e) {
                                                    t
                                                        .$menu
                                                        .classList
                                                        .remove("red");
                                                    for (var l = 0; l < t.$menuSocialLinks.length; l++)
                                                        t
                                                        .$menuSocialLinks[l]
                                                        .classList
                                                        .remove("white")
                                                }
                                            }), t)
                                    }, s = 0; s < this.$menuLinks.length; s++)
                                    o(s);
                                this
                                    .events
                                    .add(this.$opener, "click", (function() {
                                        t.menu.open ?
                                            t.closeMenu() :
                                            t.openMenu()
                                    })),
                                    this
                                    .events
                                    .add(this.$opener, "mouseenter", (function(e, i, r) {
                                        t.enterOpener(e, i, r)
                                    }), this),
                                    this
                                    .events
                                    .add(this.$opener, "mouseleave", (function(e, i, r) {
                                        t.leaveOpener(e, i, r)
                                    }), this)
                            } else
                                document
                                .getElementById("content")
                                .addEventListener("scroll", (function(e) {
                                    t.contentScroll = document
                                        .getElementById("content")
                                        .scrollTop,
                                        t.contentScroll < 20 || t.contentScroll < t.contentPosition ?
                                        t.showMenuMobile() :
                                        t.hideMenuMobile(),
                                        t.contentPosition = t.contentScroll
                                })),
                                this
                                .events
                                .add(
                                    this.$menuMobile.querySelector(".menumobile__opener"),
                                    "click",
                                    (function() {
                                        t.openMenu()
                                    }),
                                    this
                                ),
                                this
                                .events
                                .add(this.$menuCloser, "click", (function() {
                                    t.closeMenu()
                                }), this)
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "enterLink",
                        value: function(e, t, i) {
                            i
                                .classList
                                .contains("active") || S
                                .a
                                .fromTo(i.querySelector(".underline"), {
                                    width: "0%",
                                    left: "0%"
                                }, {
                                    width: "100%",
                                    duration: .4,
                                    ease: "power4.inOut",
                                    delay: .1
                                })
                        }
                    }, {
                        key: "leaveLink",
                        value: function(e, t, i) {
                            i
                                .classList
                                .contains("active") || S
                                .a
                                .fromTo(i.querySelector(".underline"), {
                                    width: "100%",
                                    left: "0%"
                                }, {
                                    width: "100%",
                                    left: "100%",
                                    duration: .4,
                                    ease: "power4.inOut"
                                })
                        }
                    }, {
                        key: "enterSocialLink",
                        value: function(e, t, i) {
                            S
                                .a
                                .fromTo(i.querySelector(".underline"), {
                                    width: "100%",
                                    left: "0%"
                                }, {
                                    width: "100%",
                                    left: "100%",
                                    duration: .4,
                                    ease: "power4.inOut"
                                })
                        }
                    }, {
                        key: "leaveSocialLink",
                        value: function(e, t, i) {
                            S
                                .a
                                .fromTo(i.querySelector(".underline"), {
                                    width: "0%",
                                    left: "0%"
                                }, {
                                    width: "100%",
                                    duration: .4,
                                    ease: "power4.inOut",
                                    delay: .1
                                })
                        }
                    }, {
                        key: "showOpener",
                        value: function() {
                            this.menu.openerVisible || (
                                S.a.set(this.$opener, { opacity: 1 }),
                                S.a.to(this.$opener, {
                                    y: "0%",
                                    duration: .8,
                                    ease: "expo.out"
                                }),
                                this.menu.openerVisible = !0
                            )
                        }
                    }, {
                        key: "hideOpener",
                        value: function() {
                            var e = this;
                            this.menu.openerVisible && (S.a.to(this.$opener, {
                                opacity: 1e-4,
                                duration: .8,
                                ease: "power2.out",
                                onComplete: function() {
                                    S
                                        .a
                                        .set(e.$opener, { y: "-200%" })
                                }
                            }), this.menu.openerVisible = !1)
                        }
                    }, {
                        key: "enterOpener",
                        value: function() {
                            this.menu.open || (S.a.to(this.$opener.children[1].children[0], {
                                y: 3,
                                duration: .6,
                                ease: "power4.out"
                            }), S.a.to(this.$opener.children[1].children[1], {
                                y: -3,
                                duration: .6,
                                ease: "power4.out"
                            }))
                        }
                    }, {
                        key: "leaveOpener",
                        value: function() {
                            this.menu.open || (S.a.to(this.$opener.children[1].children[0], {
                                y: 0,
                                duration: .6,
                                ease: "power4.out"
                            }), S.a.to(this.$opener.children[1].children[1], {
                                y: 0,
                                duration: .6,
                                ease: "power4.out"
                            }))
                        }
                    }, {
                        key: "openMenu",
                        value: function() {
                            var e = this;
                            this.menu.isAnimating || (
                                this.menu.isAnimating = !0,
                                this.router.isDesktop ?
                                (
                                    this.router.instance.currentSection.superScroller._scroll.enable = !1,
                                    S.a.delayedCall(.5, (function() {
                                        S
                                            .a
                                            .to(e.$opener.children[1].children[0], {
                                                y: 9,
                                                rotation: 45,
                                                duration: 1.2,
                                                ease: "expo.out"
                                            }),
                                            S
                                            .a
                                            .to(e.$opener.children[1].children[1], {
                                                y: -11,
                                                rotation: -45,
                                                duration: 1.2,
                                                ease: "expo.out"
                                            })
                                    })),
                                    S.a.to(this.archiveSvg, {
                                        dashoffset: 1,
                                        duration: 2,
                                        ease: "expo.out",
                                        onUpdate: function() {
                                            e
                                                .$opener
                                                .querySelector(".opener__circle svg")
                                                .children[1]
                                                .style
                                                .strokeDashoffset = 1197 - 1197 * e.archiveSvg.dashoffset + "px"
                                        }
                                    })
                                ) :
                                document.getElementById("content").classList.add("noscroll"),
                                S.a.set(this.$menu, { display: "block" }),
                                S.a.to(this.$menu, {
                                    y: "0%",
                                    duration: 1.2,
                                    ease: "expo.inOut",
                                    onComplete: function() {
                                        e.menu.open = !0,
                                            e.menu.isAnimating = !1
                                    }
                                })
                            )
                        }
                    }, {
                        key: "closeMenu",
                        value: function() {
                            var e = this;
                            this.menu.isAnimating || (
                                this.menu.isAnimating = !0,
                                this.router.isDesktop && (S.a.to(this.$opener.children[1].children[0], {
                                    y: 0,
                                    rotation: 0,
                                    duration: 1.2,
                                    ease: "expo.out"
                                }), S.a.to(this.$opener.children[1].children[1], {
                                    y: 0,
                                    rotation: 0,
                                    duration: 1.2,
                                    ease: "expo.out"
                                }), S.a.to(this.archiveSvg, {
                                    dashoffset: 0,
                                    duration: 1.2,
                                    ease: "expo.out",
                                    onUpdate: function() {
                                        e
                                            .$opener
                                            .querySelector(".opener__circle svg")
                                            .children[1]
                                            .style
                                            .strokeDashoffset = 1197 - 1197 * e.archiveSvg.dashoffset + "px"
                                    }
                                })),
                                S.a.to(this.$menu, {
                                    y: "100%",
                                    duration: 1.2,
                                    ease: "expo.inOut",
                                    onComplete: function() {
                                        S
                                            .a
                                            .set(e.$menu, {
                                                display: "none",
                                                y: "-100%"
                                            }),
                                            e.menu.open = !1,
                                            e.menu.isAnimating = !1,
                                            e.router.isDesktop ?
                                            e.router.instance.currentSection.superScroller._scroll.enable = !0 :
                                            document
                                            .getElementById("content")
                                            .classList
                                            .remove("noscroll")
                                    }
                                })
                            )
                        }
                    }, {
                        key: "enterMenu",
                        value: function(e, t) {
                            var i = this;
                            this.menuEnterAnimating || (
                                this.menu.enterAnimating = !0,
                                this.$menuVideosLarge && (S.a.to(this.$menuVideosLarge[t], {
                                    opacity: 1,
                                    duration: .2,
                                    ease: "power2.out"
                                }), this.$menuVideosLarge[t].querySelector("video").play()),
                                this.$menuVideosSmall && (S.a.to(this.$menuVideosSmall[t], {
                                    opacity: 1,
                                    duration: .2,
                                    ease: "power2.out"
                                }), this.$menuVideosSmall[t].querySelector("video").play()),
                                S.a.delayedCall(.8, (function() {
                                    i.menu.enterAnimating = !1
                                }))
                            )
                        }
                    }, {
                        key: "leaveMenu",
                        value: function(e, t) {
                            var i = this;
                            this.menuEnterAnimating || (
                                this.menu.enterAnimating = !0,
                                this.$menuVideosLarge && (S.a.to(this.$menuVideosLarge[t], {
                                    opacity: 1e-4,
                                    duration: .2,
                                    ease: "power2.out"
                                }), this.$menuVideosLarge[t].querySelector("video").pause()),
                                this.$menuVideosSmall && (S.a.to(this.$menuVideosSmall[t], {
                                    opacity: 1e-4,
                                    duration: .2,
                                    ease: "power2.out"
                                }), this.$menuVideosSmall[t].querySelector("video").pause()),
                                S.a.delayedCall(.8, (function() {
                                    i.menu.enterAnimating = !1
                                }))
                            )
                        }
                    }, {
                        key: "showMenuMobile",
                        value: function() {
                            var e = this;
                            if (!this.router.isDesktop) {
                                if (this.menu.isShowing)
                                    return;
                                this.menu.isShowing = !0,
                                    S
                                    .a
                                    .set(this.$menuMobile, { display: "flex" }),
                                    S
                                    .a
                                    .to(this.$menuMobile, {
                                        y: "0%",
                                        duration: .5,
                                        ease: "expo.inOut",
                                        onComplete: function() {
                                            e.menu.open = !0,
                                                e.menu.isShowing = !1
                                        }
                                    })
                            }
                        }
                    }, {
                        key: "hideMenuMobile",
                        value: function() {
                            var e = this;
                            if (!this.router.isDesktop) {
                                if (this.menu.isShowing)
                                    return;
                                this.menu.isShowing = !0,
                                    S
                                    .a
                                    .to(this.$menuMobile, {
                                        y: "-100%",
                                        duration: .5,
                                        ease: "expo.inOut",
                                        onComplete: function() {
                                            S
                                                .a
                                                .set(e.$menuMobile, { display: "none" }),
                                                e.menu.open = !1,
                                                e.menu.isShowing = !1
                                        }
                                    })
                            }
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {}
                    }, {
                        key: "leave",
                        value: function(e) {}
                    }]) && Y(t.prototype, i),
                    r && Y(t, r),
                    o
            }(d),
            ee = i(20),
            te = i.n(ee);
        i(28);

        function ie(e) {
            return (
                ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function re(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function ne(e, t) {
            return (ne = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function oe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = le(e);
                if (t) {
                    var n = le(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return se(this, i)
            }
        }

        function se(e, t) {
            return !t || "object" !== ie(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function le(e) {
            return (
                le = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var ae = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && ne(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = oe(o);

                function o(e, t, i) {
                    var r;
                    return function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, o),
                        (r = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: te.a,
                            templateData: {
                                options: P.appData.options,
                                section: e,
                                color: t
                            },
                            parent: document.querySelector("." + e + "__header"),
                            insertPosition: "FIRST",
                            initialRenderDelay: i
                        })).menu = {
                            open: !1,
                            isAnimating: !1,
                            isShowing: !1,
                            openerVisible: !1
                        },
                        r
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$header = document.getElementById("header"),
                                this.$headerLinks = this
                                .$header
                                .querySelectorAll("li > a"),
                                this.$headerOpener = this
                                .$header
                                .querySelector(".header__opener")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            if (this.enterAnimation = S.a.timeline({
                                    paused: !0,
                                    delay: 0
                                }), this.enterAnimation.fromTo(this.$header, {
                                    opacity: 1e-4
                                }, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "power2.out",
                                    clearProps: "all"
                                }, 0), this.router.isDesktop)
                                for (var i = 0; i < this.$headerLinks.length; i++)
                                    this
                                    .events
                                    .add(this.$headerLinks[i], "mouseenter", (function(e, i, r) {
                                        t.enterLink(e, i, r)
                                    }), this),
                                    this
                                    .events
                                    .add(this.$headerLinks[i], "mouseleave", (function(e, i, r) {
                                        t.leaveLink(e, i, r)
                                    }), this)
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "enterLink",
                        value: function(e, t, i) {
                            i
                                .classList
                                .contains("active") || S
                                .a
                                .fromTo(i.querySelector(".underline"), {
                                    width: "0%",
                                    left: "0%"
                                }, {
                                    width: "100%",
                                    duration: .4,
                                    ease: "power4.inOut",
                                    delay: .1
                                })
                        }
                    }, {
                        key: "leaveLink",
                        value: function(e, t, i) {
                            i
                                .classList
                                .contains("active") || S
                                .a
                                .fromTo(i.querySelector(".underline"), {
                                    width: "100%",
                                    left: "0%"
                                }, {
                                    width: "100%",
                                    left: "100%",
                                    duration: .4,
                                    ease: "power4.inOut"
                                })
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {}
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .to(this.$header, {
                                    opacity: 1e-4,
                                    duration: .8,
                                    ease: "power2.inOut",
                                    onComplete: e
                                })
                        }
                    }]) && re(t.prototype, i),
                    r && re(t, r),
                    o
            }(d),
            ue = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

        function ce(e) {
            return (
                ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }
        var de,
            he,
            ve,
            _e = /(?:\r|\n|\t\t)/g,
            pe = /(?:\s\s+)/g,
            ye = function(e) {
                return he.getComputedStyle(e)
            },
            fe = Array.isArray,
            me = [].slice,
            ge = function(e, t) {
                var i;
                return fe(e) ?
                    e :
                    "string" === (i = ce(e)) && !t && e ?
                    me.call(de.querySelectorAll(e), 0) :
                    e && "object" === i && "length" in e ?
                    me.call(e, 0) :
                    e ? [e] : []
            },
            be = function(e) {
                return "absolute" === e.position || !0 === e.absolute
            },
            De = function(e, t) {
                for (var i, r = t.length; --r > -1;)
                    if (i = t[r], e.substr(0, i.length) === i)
                        return i.length
            },
            Se = function(e, t) {
                void 0 === e && (e = "");
                var i = ~e.indexOf("++"),
                    r = 1;
                return i && (e = e.split("++").join("")),
                    function() {
                        return "<" + t + " style='position:relative;display:inline-block;'" + (
                            e ?
                            " class='" + e + (
                                i ?
                                r++
                                :
                                ""
                            ) + "'>" :
                            ">"
                        )
                    }
            },
            $e = function e(t, i, r) {
                var n = t.nodeType;
                if (1 === n || 9 === n || 11 === n)
                    for (t = t.firstChild; t; t = t.nextSibling)
                        e(t, i, r);
                else
                    3 !== n && 4 !== n || (t.nodeValue = t.nodeValue.split(i).join(r))
            },
            we = function(e, t) {
                for (var i = t.length; --i > -1;)
                    e.push(t[i])
            },
            xe = function(e, t, i) {
                for (var r; e && e !== t;) {
                    if (r = e._next || e.nextSibling)
                        return r
                            .textContent
                            .charAt(0) === i;
                    e = e.parentNode || e._parent
                }
            },
            ke = function e(t) {
                var i,
                    r,
                    n = ge(t.childNodes),
                    o = n.length;
                for (i = 0; i < o; i++)
                    (r = n[i])._isSplit ?
                    e(r) :
                    (
                        i && 3 === r.previousSibling.nodeType ?
                        r.previousSibling.nodeValue += 3 === r.nodeType ?
                        r.nodeValue :
                        r.firstChild.nodeValue :
                        3 !== r.nodeType && t.insertBefore(r.firstChild, r),
                        t.removeChild(r)
                    )
            },
            Ce = function(e, t) {
                return parseFloat(t[e]) || 0
            },
            qe = function(e, t, i, r, n, o, s) {
                var l,
                    a,
                    u,
                    c,
                    d,
                    h,
                    v,
                    _,
                    p,
                    y,
                    f,
                    m,
                    g = ye(e),
                    b = Ce("paddingLeft", g),
                    D = -999,
                    S = Ce("borderBottomWidth", g) + Ce("borderTopWidth", g),
                    $ = Ce("borderLeftWidth", g) + Ce("borderRightWidth", g),
                    w = Ce("paddingTop", g) + Ce("paddingBottom", g),
                    x = Ce("paddingLeft", g) + Ce("paddingRight", g),
                    k = .2 * Ce("fontSize", g),
                    C = g.textAlign,
                    q = [],
                    A = [],
                    I = [],
                    O = t.wordDelimiter || " ",
                    E = t.tag ?
                    t.tag :
                    t.span ?
                    "span" :
                    "div",
                    F = t.type || t.split || "chars,words,lines",
                    P = n && ~F.indexOf("lines") ? [] :
                    null,
                    j = ~F.indexOf("words"),
                    T = ~F.indexOf("chars"),
                    L = be(t),
                    R = t.linesClass,
                    B = ~(R || "").indexOf("++"),
                    V = [];
                for (
                    B && (R = R.split("++").join("")),
                    u = (a = e.getElementsByTagName("*")).length,
                    d = [],
                    l = 0; l < u; l++
                )
                    d[l] = a[l];
                if (P || L)
                    for (l = 0; l < u; l++)
                        ((h = (c = d[l]).parentNode === e) || L || T && !j) && (
                            m = c.offsetTop,
                            P && h && Math.abs(m - D) > k && ("BR" !== c.nodeName || 0 === l) && (v = [], P.push(v), D = m),
                            L && (c._x = c.offsetLeft, c._y = m, c._w = c.offsetWidth, c._h = c.offsetHeight),
                            P && (
                                (c._isSplit && h || !T && h || j && h || !j && c.parentNode.parentNode === e && !c.parentNode._isSplit) && (v.push(c), c._x -= b, xe(c, e, O) && (c._wordEnd = !0)),
                                "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === l) && P.push([])
                            )
                        );
                for (l = 0; l < u; l++)
                    h = (c = d[l]).parentNode === e,
                    "BR" !== c.nodeName ?
                    (
                        L && (
                            p = c.style,
                            j || h || (c._x += c.parentNode._x, c._y += c.parentNode._y),
                            p.left = c._x + "px",
                            p.top = c._y + "px",
                            p.position = "absolute",
                            p.display = "block",
                            p.width = c._w + 1 + "px",
                            p.height = c._h + "px"
                        ), !j && T ?
                        c._isSplit ?
                        (c._next = c.nextSibling, c.parentNode.appendChild(c)) :
                        c.parentNode._isSplit ?
                        (
                            c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0),
                            c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && V.push(c.nextSibling),
                            c._next = c.nextSibling && c.nextSibling._isFirst ?
                            null :
                            c.nextSibling,
                            c.parentNode.removeChild(c),
                            d.splice(l--, 1),
                            u--
                        ) :
                        h || (
                            m = !c.nextSibling && xe(c.parentNode, e, O),
                            c.parentNode._parent && c.parentNode._parent.appendChild(c),
                            m && c.parentNode.appendChild(de.createTextNode(" ")),
                            "span" === E && (c.style.display = "inline"),
                            q.push(c)
                        ) :
                        c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ?
                        A.push(c) :
                        T && !c._isSplit && ("span" === E && (c.style.display = "inline"), q.push(c))
                    ) :
                    P || L ?
                    (c.parentNode && c.parentNode.removeChild(c), d.splice(l--, 1), u--) :
                    j || e.appendChild(c);
                for (l = V.length; --l > -1;)
                    V[l]
                    .parentNode
                    .removeChild(V[l]);
                if (P) {
                    for (L && (
                            y = de.createElement(E),
                            e.appendChild(y),
                            f = y.offsetWidth + "px",
                            m = y.offsetParent === e ?
                            0 :
                            e.offsetLeft,
                            e.removeChild(y)
                        ), p = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;)
                        e.removeChild(e.firstChild);
                    for (_ = " " === O && (!L || !j && !T), l = 0; l < P.length; l++) {
                        for (
                            v = P[l],
                            (y = de.createElement(E)).style.cssText = "display:block;text-align:" + C + ";p" +
                            "osition:" + (
                                L ?
                                "absolute;" :
                                "relative;"
                            ),
                            R && (y.className = R + (
                                B ?
                                l + 1 :
                                ""
                            )),
                            I.push(y),
                            u = v.length,
                            a = 0; a < u; a++
                        )
                            "BR" !== v[a].nodeName && (
                                c = v[a],
                                y.appendChild(c),
                                _ && c._wordEnd && y.appendChild(de.createTextNode(" ")),
                                L && (
                                    0 === a && (y.style.top = c._y + "px", y.style.left = b + m + "px"),
                                    c.style.top = "0px",
                                    m && (c.style.left = c._x - m + "px")
                                )
                            );

                        0 === u ?
                            y.innerHTML = "&nbsp;" :
                            j || T || (ke(y), $e(y, String.fromCharCode(160), " ")),
                            L && (y.style.width = f, y.style.height = c._h + "px"),
                            e.appendChild(y)
                    }
                    e.style.cssText = p
                }
                L && (
                        s > e.clientHeight && (e.style.height = s - w + "px", e.clientHeight < s && (e.style.height = s + S + "px")),
                        o > e.clientWidth && (e.style.width = o - x + "px", e.clientWidth < o && (e.style.width = o + $ + "px"))
                    ),
                    we(i, q),
                    j && we(r, A),
                    we(n, I)
            },
            Ae = function(e, t, i, r) {
                var n,
                    o,
                    s,
                    l,
                    a,
                    u,
                    c,
                    d,
                    h = t.tag ?
                    t.tag :
                    t.span ?
                    "span" :
                    "div",
                    v = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
                    _ = be(t),
                    p = t.wordDelimiter || " ",
                    y = " " !== p ?
                    "" :
                    _ ?
                    "&#173; " :
                    " ",
                    f = "</" + h + ">",
                    m = 1,
                    g = t.specialChars ?
                    "function" == typeof t.specialChars ?
                    t.specialChars :
                    De :
                    null,
                    b = de.createElement("div"),
                    D = e.parentNode;
                for (
                    D.insertBefore(b, e),
                    b.textContent = e.nodeValue,
                    D.removeChild(e),
                    c = -1 !== (n = function e(t) {
                        var i = t.nodeType,
                            r = "";
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                r += e(t)
                        } else if (3 === i || 4 === i)
                            return t.nodeValue;
                        return r
                    }(e = b)).indexOf("<"), !1 !== t.reduceWhiteSpace && (n = n.replace(pe, " ").replace(_e, "")),
                    c && (n = n.split("<").join("{{LT}}")),
                    a = n.length,
                    o = (
                        " " === n.charAt(0) ?
                        y :
                        ""
                    ) + i(),
                    s = 0; s < a; s++
                )
                    if (u = n.charAt(s), g && (d = g(n.substr(s), t.specialChars)))
                        u = n.substr(s, d || 1),
                        o += v && " " !== u ?
                        r() + u + "</" + h + ">" :
                        u,
                        s += d - 1;
                    else if (u === p && n.charAt(s - 1) !== p && s) {
                    for (
                        o += m ?
                        f :
                        "",
                        m = 0; n.charAt(s + 1) === p;
                    )
                        o += y,
                        s++;
                    s === a - 1 ?
                        o += y :
                        ")" !== n.charAt(s + 1) && (o += y + i(), m = 1)
                } else
                    "{" === u && "{{LT}}" === n.substr(s, 6) ?
                    (
                        o += v ?
                        r() + "{{LT}}</" + h + ">" :
                        "{{LT}}",
                        s += 5
                    ) :
                    u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319 || n.charCodeAt(s + 1) >= 65024 && n.charCodeAt(
                        s + 1
                    ) <= 65039 ?
                    (
                        l = ((n.substr(s, 12).split(ue) || [])[1] || "").length || 2,
                        o += v && " " !== u ?
                        r() + n.substr(s, l) + "</" + h + ">" :
                        n.substr(s, l),
                        s += l - 1
                    ) :
                    o += v && " " !== u ?
                    r() + u + "</" + h + ">" :
                    u;
                e.outerHTML = o + (
                        m ?
                        f :
                        ""
                    ),
                    c && $e(D, "{{LT}}", "<")
            },
            Ie = function e(t, i, r, n) {
                var o,
                    s,
                    l = ge(t.childNodes),
                    a = l.length,
                    u = be(i);
                if (3 !== t.nodeType || a > 1) {
                    for (i.absolute = !1, o = 0; o < a; o++)
                        (3 !== (s = l[o]).nodeType || /\S+/.test(s.nodeValue)) && (
                            u && 3 !== s.nodeType && "inline" === ye(s).display && (s.style.display = "inline-block", s.style.position = "relative"),
                            s._isSplit = !0,
                            e(s, i, r, n)
                        );
                    return i.absolute = u,
                        void(t._isSplit = !0)
                }
                Ae(t, i, r, n)
            },
            Oe = function() {
                function e(e, t) {
                    ve || (de = document, he = window, ve = 1),
                        this.elements = ge(e),
                        this.chars = [],
                        this.words = [],
                        this.lines = [],
                        this._originals = [],
                        this.vars = t || {},
                        this.split(t)
                }
                var t = e.prototype;
                return t.split = function(e) {
                        this.isSplit && this.revert(),
                            this.vars = e = e || this.vars,
                            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                        for (
                            var t,
                                i,
                                r,
                                n = this.elements.length,
                                o = e.tag ?
                                e.tag :
                                e.span ?
                                "span" :
                                "div",
                                s = Se(e.wordsClass, o),
                                l = Se(e.charsClass, o); --n > -1;
                        )
                            r = this.elements[n],
                            this._originals[n] = r.innerHTML,
                            t = r.clientHeight,
                            i = r.clientWidth,
                            Ie(r, e, s, l),
                            qe(r, e, this.chars, this.words, this.lines, i, t);
                        return this
                            .chars
                            .reverse(),
                            this
                            .words
                            .reverse(),
                            this
                            .lines
                            .reverse(),
                            this.isSplit = !0,
                            this
                    },
                    t.revert = function() {
                        var e = this._originals;
                        if (!e)
                            throw "revert() call wasn't scoped properly.";
                        return this
                            .elements
                            .forEach((function(t, i) {
                                return t.innerHTML = e[i]
                            })),
                            this.chars = [],
                            this.words = [],
                            this.lines = [],
                            this.isSplit = !1,
                            this
                    },
                    e.create = function(t, i) {
                        return new e(t, i)
                    },
                    e
            }();
        Oe.version = "3.2.6";
        var Ee = i(21),
            Fe = i.n(Ee);

        function Pe(e) {
            return (
                Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function je(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var Te = h
            .getParser(window.navigator.userAgent)
            .parsedResult,
            Le = "Firefox" === Te.browser.name,
            Re = ("Microsoft Edge" === Te.browser.name || Te.browser.name, function() {}),
            Be = function() {
                function e(t) {
                    var i = this;
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this._onRaf = t.onRaf || Re,
                        this._currentSection = t.currentSection ?
                        t.currentSection :
                        null,
                        this._global = {
                            percent: {
                                x: 0,
                                y: 0
                            },
                            mode: t.mode || "vertical"
                        },
                        t.scroll && (this._virtualScroll = null, this._virtualScrollOptions = {
                            el: void 0 !== t.el ?
                                t.el : window,
                            mouseMultiplier: void 0 !== t.mouseMultiplier ?
                                Pe(t.mouseMultiplier) : .4,
                            touchMultiplier: void 0 !== t.touchMultiplier ?
                                Pe(t.touchMultiplier) : 2,
                            firefoxMultiplier: void 0 !== t.firefoxMultiplier ?
                                Pe(t.firefoxMultiplier) : 50,
                            limitInertia: void 0 !== t.limitInertia && Pe(t.limitInertia),
                            passive: void 0 !== t.passive && t.pasive
                        }, this._scroll = {
                            enable: void 0 === t.enable || t.enable,
                            target: t.scrollTarget,
                            width: 0,
                            height: 0,
                            position: {
                                x: 0,
                                y: 0
                            },
                            lastPosition: {
                                x: 0,
                                y: 0
                            },
                            livePosition: {
                                x: 0,
                                y: 0
                            },
                            maxScroll: {
                                x: 0,
                                y: 0
                            },
                            direction: "down"
                        }, this._scrollMove = function(e) {
                            if (i._scroll.enable)
                                if ("horizontal" === i._global.mode) {
                                    var t = e.deltaY;
                                    i._scroll.position.x += t,
                                        i._scroll.position.x = Math.max(i._scroll.maxScroll.x, i._scroll.position.x),
                                        i._scroll.position.x = Math.min(0, i._scroll.position.x),
                                        i._global.percent.x = i._scroll.position.x / i._scroll.maxScroll.x || 0,
                                        i._scroll.lastPosition.x = i._scroll.position.x
                                } else {
                                    var r = e.deltaY;
                                    i._scroll.position.y += r,
                                        i._scroll.position.y = Math.max(i._scroll.maxScroll.y, i._scroll.position.y),
                                        i._scroll.position.y = Math.min(0, i._scroll.position.y),
                                        i._global.percent.y = i._scroll.position.y / i._scroll.maxScroll.y || 0,
                                        i._scroll.lastPosition.y = i._scroll.position.y
                                }
                        }, this._scrollRaf = function() {
                            "horizontal" === i._global.mode ?
                                i._scroll.livePosition.x = i.lerp(
                                    i._scroll.livePosition.x,
                                    i._scroll.maxScroll.x * i._global.percent.x,
                                    .08
                                ) :
                                i._scroll.livePosition.y = i.lerp(
                                    i._scroll.livePosition.y,
                                    i._scroll.maxScroll.y * i._global.percent.y,
                                    .08
                                ),
                                i._scroll.target.style.transform = "translate3d(" + i
                                ._scroll
                                .livePosition
                                .x
                                .toString() + "px," + i
                                ._scroll
                                .livePosition
                                .y
                                .toString() + "px, 0px)"
                        }),
                        t.bar && (
                            this._bar = {
                                enable: !0,
                                target: t.barTarget,
                                width: 0,
                                height: 0,
                                dragging: !1,
                                ratio: {
                                    x: 0,
                                    y: 0
                                },
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                livePosition: {
                                    x: 0,
                                    y: 0
                                },
                                maxScroll: {
                                    x: 0,
                                    y: 0
                                },
                                clickedPoint: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            this._barDown = function(e) {
                                i._bar.dragging = !0,
                                    i._bar.clickedPoint.x = e.clientX - i._bar.livePosition.x,
                                    i._bar.clickedPoint.y = e.clientY - i._bar.livePosition.y,
                                    document.addEventListener("mousemove", i._barMove),
                                    document.addEventListener("mouseup", i._barUp)
                            },
                            this._barMove = function(e) {
                                "horizontal" === i._global.mode ?
                                    (
                                        i._bar.position.x = Math.min(Math.max(e.clientX - i._bar.clickedPoint.x, 0), i._bar.maxScroll.x),
                                        i._global.percent.x = i._bar.position.x / i._bar.maxScroll.x || 0
                                    ) :
                                    (
                                        i._bar.position.y = Math.min(Math.max(e.clientY - i._bar.clickedPoint.y, 0), i._bar.maxScroll.y),
                                        i._global.percent.y = i._bar.position.y / i._bar.maxScroll.y || 0
                                    )
                            },
                            this._barUp = function() {
                                document.removeEventListener("mousemove", i._barMove),
                                    document.removeEventListener("mouseup", i._barUp),
                                    i._bar.dragging = !1
                            },
                            this._barRaf = function() {
                                "horizontal" === i._global.mode ?
                                    i._bar.livePosition.x = i.lerp(
                                        i._bar.livePosition.x,
                                        i._bar.maxScroll.x * i._global.percent.x,
                                        .08
                                    ) :
                                    i._bar.livePosition.y = i.lerp(
                                        i._bar.livePosition.y,
                                        i._bar.maxScroll.y * i._global.percent.y,
                                        .08
                                    ),
                                    i._bar.target.style.transform = "translate3d(" + i
                                    ._bar
                                    .livePosition
                                    .x
                                    .toString() + "px," + i
                                    ._bar
                                    .livePosition
                                    .y
                                    .toString() + "px, 0px)"
                            },
                            this._bar.target.addEventListener("mousedown", this._barDown)
                        ),
                        this._raf = function() {
                            i._scroll && i._scrollRaf(),
                                i._bar && i._barRaf(),
                                i._onRaf(i._scroll)
                        },
                        this.init()
                }
                var t,
                    i,
                    r;
                return t = e,
                    (i = [{
                        key: "init",
                        value: function() {
                            var e = this;
                            "undefined" !== this._virtualScroll && (
                                    this._virtualScroll = new Fe.a(this._virtualScrollOptions),
                                    this._virtualScroll.on((function(t) {
                                        e._scrollMove(t)
                                    }))
                                ),
                                S
                                .a
                                .ticker
                                .add(this._raf)
                        }
                    }, {
                        key: "lerp",
                        value: function(e, t, i) {
                            return e + (t - e) * (
                                i = (
                                    i = i < 0 ?
                                    0 :
                                    i
                                ) > 1 ?
                                1 :
                                i
                            )
                        }
                    }, {
                        key: "scrollAnimate",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ?
                                arguments[1] :
                                Le ?
                                1 :
                                2,
                                i = arguments.length > 2 && void 0 !== arguments[2] ?
                                arguments[2] :
                                "power4.inOut",
                                r = arguments.length > 3 ?
                                arguments[3] :
                                void 0;
                            (r || this._scroll.enable) && (
                                this._scroll.position.y = -e,
                                S.a.to(this._global.percent, {
                                    y: -e / this._scroll.maxScroll.y || 0,
                                    ease: i,
                                    duration: t
                                })
                            )
                        }
                    }, {
                        key: "scrollResize",
                        value: function() {
                            this._scroll.width = this
                                ._scroll
                                .target
                                .getBoundingClientRect()
                                .width,
                                this._scroll.height = this
                                ._scroll
                                .target
                                .getBoundingClientRect()
                                .height,
                                this._scroll.maxScroll.x = -(this._scroll.width - window.innerWidth),
                                this._scroll.maxScroll.y = -(this._scroll.height - window.innerHeight)
                        }
                    }, {
                        key: "barResize",
                        value: function() {
                            this._bar.parentWidth = this
                                ._bar
                                .target
                                .parentNode
                                .getBoundingClientRect()
                                .width,
                                this._bar.parentHeight = this
                                ._bar
                                .target
                                .parentNode
                                .getBoundingClientRect()
                                .height,
                                this._bar.width = this
                                ._bar
                                .target
                                .getBoundingClientRect()
                                .width,
                                this._bar.height = this._bar.parentHeight * this._bar.parentHeight / this._scroll.height,
                                this._bar.target.style.height = this._bar.height + "px",
                                this._bar.maxScroll.x = this._bar.parentWidth - this._bar.width,
                                this._bar.maxScroll.y = this._bar.parentHeight - this._bar.height,
                                this._bar.ratio.x = this._bar.width / this._bar.parentWidth,
                                this._bar.ratio.y = this._bar.height / this._bar.parentHeight
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this._scroll && this.scrollResize(),
                                this._bar && this.barResize()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            S
                                .a
                                .ticker
                                .remove(this._raf)
                        }
                    }]) && je(t.prototype, i),
                    r && je(t, r),
                    e
            }();

        function Ve(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var Me = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._currentSection = t.currentSection ?
                    t.currentSection :
                    null,
                    t.observer && "IntersectionObserver" in window && (
                        void 0 !== t.observerSections && t.observerSections.length > 0 && (
                            this._observerSections = null,
                            this._observerSectionsArray = t.observerSections,
                            this._observerSectionsOptions = {
                                root: t.observerTarget,
                                rootMargin: .1 * window.innerWidth + "px 0px",
                                threshold: 0
                            }
                        ),
                        void 0 !== t.observerItems && t.observerItems.length > 0 && (
                            this._observerItems = null,
                            this._observerItemsArray = t.observerItems,
                            this._observerItemsOptions = {
                                root: t.observerTarget,
                                rootMargin: "0px",
                                threshold: 0
                            }
                        ),
                        void 0 !== t.observerParallax && t.observerParallax.length > 0 && (
                            this._observerParallax = null,
                            this._observerParallaxArray = t.observerParallax,
                            this._observerParallaxOptions = {
                                root: t.observerTarget,
                                rootMargin: "0px",
                                threshold: 0
                            }
                        )
                    ),
                    this.init()
            }
            var t,
                i,
                r;
            return t = e,
                (i = [{
                    key: "init",
                    value: function() {
                        var e = this;
                        null === this._observerSections && (
                                this._observerSections = new IntersectionObserver((function(t) {
                                    e.observerSectionsCallback(t)
                                }), this._observerSectionsOptions),
                                this._observerSectionsArray.forEach((function(t, i) {
                                    e
                                        ._observerSections
                                        .observe(t)
                                }))
                            ),
                            null === this._observerItems && (
                                this._observerItems = new IntersectionObserver((function(t) {
                                    e.observerItemsCallback(t)
                                }), this._observerItemsOptions),
                                this._observerItemsArray.forEach((function(t, i) {
                                    e
                                        ._currentSection
                                        .observerAnimationInit(i),
                                        e
                                        ._observerItems
                                        .observe(t.node)
                                }))
                            ),
                            null === this._observerParallax && (
                                this._observerParallax = new IntersectionObserver((function(t) {
                                    e.observerParallaxCallback(t)
                                }), this._observerParallaxOptions),
                                this._observerParallaxArray.forEach((function(t, i) {
                                    e
                                        ._currentSection
                                        .observerParallaxInit(t, i),
                                        e
                                        ._observerParallax
                                        .observe(t.node)
                                }))
                            )
                    }
                }, {
                    key: "observerSectionsCallback",
                    value: function(e) {
                        var t = this;
                        e.forEach((function(e) {
                            var i = t
                                ._observerSectionsArray
                                .indexOf(e.target);
                            e.isIntersecting ?
                                (
                                    t._observerSectionsArray[i].style.pointerEvents = "initial",
                                    t._observerSectionsArray[i].style.visibility = "visible"
                                ) :
                                (
                                    t._observerSectionsArray[i].style.pointerEvents = "none  ",
                                    t._observerSectionsArray[i].style.visibility = "hidden"
                                )
                        }))
                    }
                }, {
                    key: "observerItemsCallback",
                    value: function(e) {
                        var t = this;
                        e.forEach((function(e) {
                            var i = t
                                ._observerItemsArray
                                .findIndex((function(t) {
                                    return t.node === e.target
                                }));
                            e.isIntersecting && (
                                t._currentSection.observerAnimationTrigger(i),
                                t._observerItems.unobserve(e.target)
                            )
                        }))
                    }
                }, {
                    key: "observerParallaxCallback",
                    value: function(e) {
                        var t = this;
                        e.forEach((function(e) {
                            e.target.parallax || (e.target.parallax = function() {
                                    var i = t
                                        ._observerParallaxArray
                                        .findIndex((function(t) {
                                            return t.node === e.target
                                        })),
                                        r = t._observerParallaxArray[i],
                                        n = r.mode || "vertical",
                                        o = e
                                        .target
                                        .getBoundingClientRect(),
                                        s = null;
                                    s = "horizontal" === n ?
                                        (o.left - window.innerWidth) / (window.innerWidth + o.width) * -1 :
                                        (o.top - window.innerHeight) / (window.innerHeight + o.height) * -1,
                                        t
                                        ._currentSection
                                        .observerParallaxTrigger(r, i, s)
                                }),
                                e.intersectionRatio > 0 ?
                                S
                                .a
                                .ticker
                                .add(e.target.parallax) :
                                S
                                .a
                                .ticker
                                .remove(e.target.parallax)
                        }))
                    }
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {
                        this._observerSections && this
                            ._observerSections
                            .disconnect(),
                            this._observerSections = null,
                            this._observerItems && this
                            ._observerItems
                            .disconnect(),
                            this._observerItems = null,
                            this._observerParallax && this
                            ._observerParallax
                            .disconnect(),
                            this._observerParallax = null
                    }
                }]) && Ve(t.prototype, i),
                r && Ve(t, r),
                e
        }();

        function ze(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var Ne = function() {},
            He = function(e, t, i) {
                return (1 - i) * e + i * t
            },
            We = function() {
                function e(t) {
                    var i = this;
                    if (
                        function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        this._onRaf = t.onRaf || Ne,
                        this._onMouseEnter = t.onMouseEnter || Ne,
                        this._onMouseLeave = t.onMouseLeave || Ne,
                        this._onDragStart = t.onDragStart || Ne,
                        this._onDragMove = t.onDragMove || Ne,
                        this._onDragEnd = t.onDragEnd || Ne,
                        this._onSnap = t.onSnap || Ne,
                        this._onSnapLimits = t._onSnapLimits || Ne,
                        this.rAF = void 0,
                        this._drag = {
                            enable: void 0 === t.enable || t.enable,
                            el: t.el,
                            elClickables: t.elClickables || [],
                            inner: t.inner || t
                                .el
                                .children[0],
                            ease: t.ease || .1,
                            speed: t.speed || 2,
                            dragging: !1,
                            width: 0,
                            height: 0,
                            velocity: 0,
                            direction: 0,
                            on: {
                                x: 0,
                                y: 0
                            },
                            off: {
                                x: 0,
                                y: 0
                            },
                            offset: {
                                x: 0,
                                y: 0
                            },
                            movement: {
                                x: 0,
                                y: 0
                            },
                            position: {
                                x: 0,
                                y: 0
                            },
                            lastPosition: {
                                x: 0,
                                y: 0
                            },
                            livePosition: {
                                x: 0,
                                y: 0
                            },
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            },
                            total: 0,
                            snap: void 0 !== t.snap && t.snap,
                            snapPositions: [],
                            snapLimits: [],
                            snapAnimating: !1,
                            inertia: void 0 !== t.inertia ?
                                t.inertia : .4,
                            elasticity: void 0 !== t.elasticity && t.elasticity,
                            elasticityType: void 0 !== t.elasticityType ?
                                t.elasticityType : 1
                        },
                        this._drag.snap && 0 === this._drag.inertia
                    )
                        throw Error("If snap is true, inertia should be great than 0");
                    this.raf = function() {
                            if (
                                i._onRaf(i._drag),
                                i._drag.livePosition.x = He(i._drag.livePosition.x, i._drag.position.x, i._drag.ease),
                                i.$dragInner.style.transform = "translate3d(".concat(i._drag.livePosition.x, "px, 0, 0)"),
                                i._drag.elasticity
                            ) {
                                var e = Math.abs(i._drag.livePosition.x - i._drag.position.x),
                                    t = Math.sqrt(e * e + e * e) / 10;
                                i._drag.velocity = He(i._drag.velocity, t, 2 * i._drag.ease);
                                for (
                                    var r = i._drag.velocity * -i._drag.direction,
                                        n = 0; n < i.$dragItems.length; n++
                                )
                                    (
                                        1 === i._drag.elasticityType ?
                                        i._drag.direction < 0 :
                                        i._drag.direction > 0
                                    ) ?
                                    i
                                    .$dragItems[n]
                                    .style
                                    .transform = "translate3d(".concat(n * r, "px, 0, 0)") :
                                    i
                                    .$dragItems[n]
                                    .style
                                    .transform = "translate3d(".concat((i.$dragItems.length - n) * r, "px, 0, 0)")
                            }
                        },
                        this.selectors(),
                        this.init()
                }
                var t,
                    i,
                    r;
                return t = e,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$drag = this._drag.el,
                                this.$dragInner = this._drag.inner,
                                this.$dragItems = this._drag.inner.children,
                                this.$dragClickables = this._drag.elClickables
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this;
                            this.setBounds(),
                                S
                                .a
                                .ticker
                                .add(this.raf);
                            for (var t = 0; t < this.$dragClickables.length; t++)
                                this
                                .$dragClickables[t]
                                .addEventListener("click", (function(t) {
                                    e.click(t)
                                }), !0);
                            this
                                .$dragInner
                                .addEventListener("mousedown", (function(t) {
                                    e.on(t)
                                })),
                                this
                                .$drag
                                .addEventListener("mouseenter", (function(t) {
                                    e.enter(t)
                                })),
                                this
                                .$drag
                                .addEventListener("mouseleave", (function(t) {
                                    e.leave(t)
                                })),
                                document.addEventListener("mousemove", (function(t) {
                                    e.move(t)
                                })),
                                document.addEventListener("mouseup", (function(t) {
                                    e.off(t)
                                })),
                                document.addEventListener("resize", (function(t) {
                                    e.resize(t)
                                }))
                        }
                    }, {
                        key: "setBounds",
                        value: function() {
                            var e = this
                                .$drag
                                .getBoundingClientRect(),
                                t = this
                                .$dragInner
                                .getBoundingClientRect();
                            if (
                                this._drag.width = e.width,
                                this._drag.height = e.height,
                                this._drag.min.x = e.width - t.width,
                                this._drag.max.x = 0,
                                this._drag.offset.x = e.x,
                                this._drag.snapLimits.push(0),
                                this._drag.snapLimits.push(e.width - t.width),
                                this._drag.snap
                            )
                                for (var i = 0; i < this.$dragItems.length; i++) {
                                    var r = this
                                        .$dragItems[i]
                                        .getBoundingClientRect()
                                        .x - this._drag.offset.x;
                                    this
                                        ._drag
                                        .snapPositions
                                        .push(-r)
                                }
                        }
                    }, {
                        key: "click",
                        value: function(e) {
                            Math.abs(this._drag.on.x - this._drag.off.x) > 10 && (
                                e.stopPropagation(),
                                e.preventDefault()
                            )
                        }
                    }, {
                        key: "enter",
                        value: function() {
                            this._onMouseEnter()
                        }
                    }, {
                        key: "on",
                        value: function(e) {
                            var t = this;
                            this._drag.dragging = !0,
                                this._drag.on.x = e.clientX,
                                this.onTimeout = setTimeout((function() {
                                    t._onDragStart(),
                                        t
                                        .$drag
                                        .classList
                                        .add("is--dragging")
                                }), 120)
                        }
                    }, {
                        key: "move",
                        value: function(e) {
                            e.preventDefault(),
                                this._drag.dragging && this._drag.enable && (
                                    this._onDragMove(),
                                    this._drag.movement = e.clientX - this._drag.on.x,
                                    this._drag.direction = Math.sign(e.clientX - this._drag.on.x),
                                    this._drag.position.x = this._drag.lastPosition.x + e.clientX - this._drag.on.x,
                                    this._drag.position.x = Math.min(
                                        this._drag.max.x + this._drag.width / 4 * this._drag.inertia,
                                        Math.max(
                                            this._drag.position.x,
                                            this._drag.min.x - this._drag.width / 4 * this._drag.inertia
                                        )
                                    )
                                )
                        }
                    }, {
                        key: "off",
                        value: function(e) {
                            clearTimeout(this.onTimeout),
                                this._drag.dragging && (
                                    this._drag.dragging = !1,
                                    this._drag.off.x = e.clientX,
                                    this._drag.lastPosition.x = this._drag.position.x,
                                    this._onDragEnd(),
                                    this.$drag.classList.remove("is--dragging"),
                                    this._drag.position.x > 0 || this._drag.position.x < this._drag.min.x ?
                                    this.snapLimits() :
                                    this._drag.snap && this.snap()
                                )
                        }
                    }, {
                        key: "leave",
                        value: function() {
                            this._onMouseLeave()
                        }
                    }, {
                        key: "snap",
                        value: function() {
                            var e = this._drag.position.x,
                                t = this
                                ._drag
                                .snapPositions
                                .reduce((function(t, i) {
                                    return Math.abs(i - e) < Math.abs(t - e) ?
                                        i :
                                        t
                                }));
                            this._drag.position.x = t,
                                this._drag.lastPosition.x = t,
                                this._onSnap()
                        }
                    }, {
                        key: "snapLimits",
                        value: function() {
                            var e = this._drag.position.x,
                                t = this
                                ._drag
                                .snapLimits
                                .reduce((function(t, i) {
                                    return Math.abs(i - e) < Math.abs(t - e) ?
                                        i :
                                        t
                                }));
                            this._drag.position.x = t,
                                this._drag.lastPosition.x = t,
                                this._onSnapLimits()
                        }
                    }, {
                        key: "lerp",
                        value: function(e, t, i) {
                            return e + (t - e) * (
                                i = (
                                    i = i < 0 ?
                                    0 :
                                    i
                                ) > 1 ?
                                1 :
                                i
                            )
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.setBounds()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._drag = {},
                                S
                                .a
                                .ticker
                                .remove(this.raf),
                                document.removeEventListener("mousedown", this.on),
                                document.removeEventListener("resize", this.resize)
                        }
                    }]) && ze(t.prototype, i),
                    r && ze(t, r),
                    e
            }(),
            Ge = i(5),
            Ue = i.n(Ge),
            Ye = (i(35), i(1)),
            Xe = i.n(Ye);

        function Je(e) {
            return (
                Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Ze(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Ke(e, t) {
            return (Ke = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Qe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = tt(e);
                if (t) {
                    var n = tt(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return et(this, i)
            }
        }

        function et(e, t) {
            return !t || "object" !== Je(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function tt(e) {
            return (
                tt = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var it = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Ke(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Qe(o);

            function o(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var i = Object.values(P.appData.destinations),
                    r = P.appData.collections;
                return (t = n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: Ue.a,
                        templateData: {
                            data: P.appData.pages.home,
                            destinations: i,
                            allCollections: r,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            2e3 : 0
                    })).isPlaying = !1,
                    t.bgsShow = !1,
                    t.archiveSvg = {
                        dashoffset: 0
                    },
                    t
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$bgs = this
                            ._parent
                            .querySelector(".bgs"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = document.getElementById("header"),
                            this.$body = document.querySelector("body"),
                            this.$hero = this
                            .$el
                            .querySelector(".home__hero"),
                            this.$curators = this
                            .$el
                            .querySelector(".home__curators"),
                            this.$why = this
                            .$el
                            .querySelector(".home__why"),
                            this.$discover = this
                            .$el
                            .querySelector(".home__discover"),
                            this.$footer = this
                            .$el
                            .querySelector(".home__footer"),
                            this.$heroTitle = this
                            .$hero
                            .querySelector(".title--xlarge"),
                            this.$heroDescription = this
                            .$hero
                            .querySelector(".title--small"),
                            this.$gallery = this
                            .$hero
                            .querySelector(".gallery"),
                            this.$galleryColumn = this
                            .$gallery
                            .querySelectorAll(".gallery__inner__column"),
                            this.$galleryColumnItems = this
                            .$gallery
                            .querySelectorAll(".item"),
                            this.$curatorsTitle = this
                            .$curators
                            .querySelector(".title"),
                            this.$curatorsFeatured = this
                            .$curators
                            .querySelector(".featured"),
                            this.$curatorsList = this
                            .$curators
                            .querySelector(".list"),
                            this.$curatorsListItems = this
                            .$curatorsList
                            .querySelectorAll(".list__item"),
                            this.$curatorsListVideo = this
                            .$curatorsList
                            .querySelectorAll(".player"),
                            this.$carrouselOne = this
                            .$why
                            .querySelector(".headline--1"),
                            this.$carrouselTwo = this
                            .$why
                            .querySelector(".headline--2")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        new Oe(this.$heroDescription, {
                            type: "lines, words",
                            linesClass: "line line--++",
                            wordsClass: "word word--++"
                        });
                        for (
                            var i = 0; i < this.$heroDescription.querySelectorAll(".word").length; i++
                        )
                            S
                            .a
                            .set(this.$heroDescription.querySelectorAll(".word")[i], {
                                opacity: 1e-4,
                                y: "-100%"
                            });
                        if (null === this.router.instance.store.pageFrom) {
                            new Oe(this.$heroTitle, {
                                type: "lines, words, chars",
                                linesClass: "line line--++",
                                wordsClass: "word word--++",
                                charsClass: "char char--++"
                            });
                            for (var r = 0; r < this.$heroTitle.querySelectorAll(".char").length; r++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".char")[r], {
                                    opacity: 1e-4,
                                    y: "-200%"
                                })
                        } else {
                            new Oe(this.$heroTitle, {
                                type: "lines, words",
                                linesClass: "line line--++",
                                wordsClass: "word word--++"
                            });
                            for (var n = 0; n < this.$heroTitle.querySelectorAll(".line").length; n++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".line")[n], { overflow: "hidden" });
                            for (var o = 0; o < this.$heroTitle.querySelectorAll(".word").length; o++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".word")[o], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                })
                        }
                        this.galleryOpacityItems = [
                                this
                                .$galleryColumn[0]
                                .children[1],
                                this
                                .$galleryColumn[0]
                                .children[2],
                                this
                                .$galleryColumn[1]
                                .children[2],
                                this
                                .$galleryColumn[1]
                                .children[3],
                                this
                                .$galleryColumn[2]
                                .children[1],
                                this
                                .$galleryColumn[2]
                                .children[2],
                                this
                                .$galleryColumn[3]
                                .children[2],
                                this
                                .$galleryColumn[3]
                                .children[3],
                                this
                                .$galleryColumn[4]
                                .children[1],
                                this
                                .$galleryColumn[4]
                                .children[2]
                            ],
                            this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this
                            .events
                            .add(
                                this.$curatorsFeatured.querySelector(".video__sensor"),
                                "click",
                                (function() {
                                    t.playFeaturedVideo()
                                })
                            ),
                            this
                            .events
                            .add(this.$curatorsFeatured.querySelector("video"), "pause", (function() {
                                t.pauseFeaturedVideo()
                            })),
                            this
                            .events
                            .add(this.$curatorsFeatured.querySelector("video"), "ended", (function() {
                                t.pauseFeaturedVideo()
                            })),
                            this
                            .events
                            .add(
                                this.$curatorsFeatured.querySelector(".video__sensor"),
                                "mousemove",
                                (function(e, i, r) {
                                    t.videoEnter(e, i, r)
                                }),
                                this
                            ),
                            this
                            .events
                            .add(
                                this.$curatorsFeatured.querySelector(".video__sensor"),
                                "mouseleave",
                                (function(e, i, r) {
                                    t.videoLeave(e, i, r)
                                }),
                                this
                            ),
                            this
                            .events
                            .add(
                                this.$curators.querySelector(".sensor"),
                                "mousemove",
                                (function(e, i, r) {
                                    t.videoEnter(e, i, r)
                                }),
                                this
                            ),
                            this
                            .events
                            .add(
                                this.$curators.querySelector(".sensor"),
                                "mouseleave",
                                (function(e, i, r) {
                                    t.videoLeave(e, i, r)
                                }),
                                this
                            ),
                            this
                            .events
                            .add(this.$curators.querySelector(".sensor"), "click", (function(e, i, r) {
                                t
                                    .router
                                    .ui
                                    .openLightbox("video", t.$hero.querySelector(".video--lightbox"))
                            }), this);
                        for (var s = function(e) {
                                t
                                    .events
                                    .add(t.$curatorsListItems[e], "click", (function(i, r, n) {
                                        t
                                            .router
                                            .ui
                                            .openLightbox(
                                                "video",
                                                t.$curatorsListItems[e].querySelector(".video--lightbox")
                                            )
                                    }), t)
                            }, l = 0; l < this.$curatorsListItems.length; l++)
                            s(l);
                        for (var a = function(e) {
                                t
                                    .events
                                    .add(
                                        t.$curatorsListItems[e].querySelector(".video__sensor"),
                                        "click",
                                        (function(i, r, n) {
                                            t
                                                .router
                                                .ui
                                                .openLightbox(
                                                    "video",
                                                    t.$curatorsListItems[e].querySelector(".video--lightbox")
                                                )
                                        }),
                                        t
                                    ),
                                    t
                                    .events
                                    .add(
                                        t.$curatorsListItems[e].querySelector(".video__sensor"),
                                        "mousemove",
                                        (function(e, i, r) {
                                            t.videoEnter(e, i, r)
                                        }),
                                        t
                                    ),
                                    t
                                    .events
                                    .add(
                                        t.$curatorsListItems[e].querySelector(".video__sensor"),
                                        "mouseleave",
                                        (function(e, i, r) {
                                            t.videoLeave(e, i, r)
                                        }),
                                        t
                                    )
                            }, u = 0; u < this.$curatorsListItems.length; u++)
                            a(u);
                        if (this.galleryVideoInit(), "firefox" !== this.store.client.browser)
                            for (var c = 0; c < this.$galleryColumnItems.length; c++)
                                this
                                .$galleryColumnItems[c]
                                .style
                                .willChange = "transform"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener(),
                                        e.contentPosition && e.galleryPositionRaf(i),
                                        e.gallery && e.galleryStickyRaf(i)
                                }
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$why
                                    .querySelector(".headline"),
                                delay: 0,
                                id: "titleLarge"
                            }, {
                                node: this
                                    .$footer
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [{
                                node: this.$hero,
                                delay: 0,
                                id: "hero"
                            }, {
                                node: this
                                    .$hero
                                    .querySelector(".wrapper"),
                                delay: 0,
                                id: "wrapper"
                            }, {
                                node: this
                                    .$curators
                                    .querySelector(".container"),
                                delay: 0,
                                id: "curators"
                            }, {
                                node: this.$why,
                                delay: 0,
                                id: "why"
                            }, {
                                node: this
                                    .$why
                                    .querySelectorAll(".image")[0],
                                delay: 0,
                                id: "whyImage"
                            }, {
                                node: this
                                    .$why
                                    .querySelectorAll(".image")[1],
                                delay: 0,
                                id: "whyImage"
                            }, {
                                node: this
                                    .$why
                                    .querySelectorAll(".image")[2],
                                delay: 0,
                                id: "whyImage"
                            }, {
                                node: this
                                    .$why
                                    .querySelector(".headline"),
                                delay: 0,
                                id: "headline"
                            }, {
                                node: this.$discover,
                                delay: 0,
                                id: "discover"
                            }, {
                                node: this.$footer,
                                delay: 0,
                                id: "footer"
                            }],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            }),
                            this.textCarrousel(),
                            this.discoverSliderInit(),
                            this.galleryPosition(),
                            this.gallerySticky()
                    }
                }, {
                    key: "preloadItems",
                    value: function(e) {
                        var t = this
                            ._templateData
                            .data
                            .fields
                            .gallery[0],
                            i = this
                            ._templateData
                            .data
                            .fields
                            .gallery[1],
                            r = this
                            ._templateData
                            .data
                            .fields
                            .gallery[2],
                            n = this
                            ._templateData
                            .data
                            .fields
                            .gallery[3],
                            o = this
                            ._templateData
                            .data
                            .fields
                            .gallery[4];
                        if ("firefox" !== this.store.client.browser) {
                            for (var s = [
                                    t
                                    .gallery_column[0]
                                    .image,
                                    t
                                    .gallery_column[1]
                                    .image,
                                    t
                                    .gallery_column[2]
                                    .image,
                                    i
                                    .gallery_column[0]
                                    .image,
                                    i
                                    .gallery_column[1]
                                    .image,
                                    i
                                    .gallery_column[2]
                                    .image,
                                    i
                                    .gallery_column[3]
                                    .image,
                                    r
                                    .gallery_column[0]
                                    .image,
                                    r
                                    .gallery_column[1]
                                    .image,
                                    r
                                    .gallery_column[2]
                                    .image,
                                    n
                                    .gallery_column[0]
                                    .image,
                                    n
                                    .gallery_column[1]
                                    .image,
                                    n
                                    .gallery_column[2]
                                    .image,
                                    n
                                    .gallery_column[3]
                                    .image,
                                    o
                                    .gallery_column[0]
                                    .image,
                                    o
                                    .gallery_column[1]
                                    .image,
                                    o
                                    .gallery_column[2]
                                    .image,
                                    t
                                    .gallery_column[0]
                                    .video_mp4,
                                    i
                                    .gallery_column[0]
                                    .video_mp4,
                                    i
                                    .gallery_column[1]
                                    .video_mp4,
                                    r
                                    .gallery_column[0]
                                    .video_mp4,
                                    n
                                    .gallery_column[0]
                                    .video_mp4,
                                    n
                                    .gallery_column[1]
                                    .video_mp4,
                                    o
                                    .gallery_column[0]
                                    .video_mp4,
                                    this._templateData.data.fields.curators_featured_video_mp4
                                ], l = 0; l < this._templateData.data.fields.collections.length; l++)
                                s.push(this._templateData.allCollections[
                                    this
                                    ._templateData
                                    .data
                                    .fields
                                    .collections[l]
                                    .ID
                                ].image);
                            return { main: s }
                        }
                        if ("firefox" === this.store.client.browser) {
                            for (var a = [
                                    t
                                    .gallery_column[0]
                                    .image,
                                    t
                                    .gallery_column[1]
                                    .image,
                                    t
                                    .gallery_column[2]
                                    .image,
                                    i
                                    .gallery_column[0]
                                    .image,
                                    i
                                    .gallery_column[1]
                                    .image,
                                    i
                                    .gallery_column[2]
                                    .image,
                                    i
                                    .gallery_column[3]
                                    .image,
                                    r
                                    .gallery_column[0]
                                    .image,
                                    r
                                    .gallery_column[1]
                                    .image,
                                    r
                                    .gallery_column[2]
                                    .image,
                                    n
                                    .gallery_column[0]
                                    .image,
                                    n
                                    .gallery_column[1]
                                    .image,
                                    n
                                    .gallery_column[2]
                                    .image,
                                    n
                                    .gallery_column[3]
                                    .image,
                                    o
                                    .gallery_column[0]
                                    .image,
                                    o
                                    .gallery_column[1]
                                    .image,
                                    o
                                    .gallery_column[2]
                                    .image
                                ], u = 0; u < this._templateData.data.fields.collections.length; u++)
                                a.push(this._templateData.allCollections[
                                    this
                                    ._templateData
                                    .data
                                    .fields
                                    .collections[u]
                                    .ID
                                ].image);
                            return { main: a }
                        }
                    }
                }, {
                    key: "preloadProgress",
                    value: function(e) {
                        if (null === this.router.instance.store.pageFrom) {
                            var t = 1197 - e / 100 * 1197;
                            S
                                .a
                                .to(this.router.ui.$maskLogo.children[0].querySelector(".front"), {
                                    strokeDashoffset: t + "px",
                                    delay: 1
                                })
                        }
                    }
                }, {
                    key: "playFeaturedVideo",
                    value: function() {
                        this.isPlaying || (
                            this.$curatorsFeatured.querySelector(".player").muted = !1,
                            S.a.set(this.$curatorsFeatured.querySelector(".video__player"), { display: "block" }),
                            S.a.to(this.$curatorsFeatured.querySelector(".video__poster"), {
                                opacity: 1e-4,
                                duration: .8,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$curatorsFeatured.querySelector(".video__trigger"), {
                                opacity: 1e-4,
                                duration: .8,
                                ease: "power2.out"
                            }),
                            this.$curatorsFeatured.querySelector("video").play(),
                            this.isPlaying = !0
                        )
                    }
                }, {
                    key: "pauseFeaturedVideo",
                    value: function() {
                        var e = this;
                        this.isPlaying && (
                            S.a.to(this.$curatorsFeatured.querySelector(".video__trigger"), {
                                opacity: 1,
                                duration: .8,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$curatorsFeatured.querySelector(".video__poster"), {
                                opacity: 1,
                                duration: .8,
                                ease: "power2.out",
                                onComplete: function() {
                                    S
                                        .a
                                        .set(e.$curatorsFeatured.querySelector(".video__player"), { display: "none" }),
                                        e.isPlaying = !1
                                }
                            })
                        )
                    }
                }, {
                    key: "videoEnter",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .reduceCursor("play");
                        var r = i
                            .getBoundingClientRect()
                            .left + i
                            .getBoundingClientRect()
                            .width / 2 - e.pageX,
                            n = i
                            .getBoundingClientRect()
                            .top + i
                            .getBoundingClientRect()
                            .height / 2 - e.pageY;
                        i
                            .parentNode
                            .querySelector(".video__trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".video__trigger"), {
                                scale: .9,
                                x: -r,
                                y: 4 - n,
                                ease: "expo.out",
                                duration: .4
                            }),
                            i
                            .parentNode
                            .querySelector(".trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".trigger"), {
                                scale: .9,
                                x: -r,
                                y: 4 - n,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "videoLeave",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .expandCursor(),
                            i
                            .parentNode
                            .querySelector(".video__trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".video__trigger"), {
                                scale: 1,
                                x: 0,
                                y: 0,
                                ease: "expo.out",
                                duration: .4
                            }),
                            i
                            .parentNode
                            .querySelector(".trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".trigger"), {
                                scale: 1,
                                x: 0,
                                y: 0,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "enterGalleryFirst",
                    value: function() {
                        var e = this;
                        this.enterGalleryAnimation = S
                            .a
                            .timeline({
                                defaults: {
                                    ease: "expo.inOut"
                                },
                                onComplete: function() {
                                    for (var t = 0; t < e.galleryOpacityItems.length; t++)
                                        S
                                        .a
                                        .set(e.galleryOpacityItems[t], {
                                            opacity: 1e-4,
                                            visibility: "hidden",
                                            clearProps: "will-change"
                                        });
                                    e.init(),
                                        e.resize()
                                }
                            }),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumnItems, {
                                opacity: 1e-4,
                                willChange: "transform",
                                scale: .5,
                                clearProps: "will-change"
                            }, 0);
                        for (var t = 0; t < this.$galleryColumnItems.length; t++)
                            this
                            .enterGalleryAnimation
                            .to(this.$galleryColumnItems[t], {
                                opacity: 1,
                                scale: 1,
                                duration: 2
                            }, 0 + .05 * Math.floor(Math.random() * this.$galleryColumnItems.length));
                        this.router.isLaptop ?
                            (this.enterGalleryAnimation.to(this.$galleryColumn[0], {
                                y: "56vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[1], {
                                y: "46vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[2], {
                                y: "104.25vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[3], {
                                y: "46vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[4], {
                                y: "56vw",
                                duration: 4
                            }, 0)) :
                            (this.enterGalleryAnimation.to(this.$galleryColumn[0], {
                                y: "62.6vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[1], {
                                y: "52.6vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[2], {
                                y: "108.6vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[3], {
                                y: "52.6vw",
                                duration: 4
                            }, 0), this.enterGalleryAnimation.to(this.$galleryColumn[4], {
                                y: "62.6vw",
                                duration: 4
                            }, 0));
                        for (
                            var i = this.$heroTitle.querySelectorAll(".char"),
                                r = 0; r < i.length; r++
                        )
                            this
                            .enterGalleryAnimation
                            .to(i[r], {
                                opacity: 1,
                                y: "0%",
                                duration: 2
                            }, .5 + .05 * Math.floor(Math.random() * i.length));
                        for (
                            var n = 0; n < this.$heroDescription.querySelectorAll(".word").length; n++
                        )
                            this
                            .enterGalleryAnimation
                            .to(this.$heroDescription.querySelectorAll(".word")[n], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4
                            }, 1.5 + .02 * n)
                    }
                }, {
                    key: "enterGallerySecond",
                    value: function() {
                        var e = this;
                        this.enterGalleryAnimation = S
                            .a
                            .timeline({
                                defaults: {
                                    ease: "expo.inOut"
                                },
                                onComplete: function() {
                                    for (var t = 0; t < e.galleryOpacityItems.length; t++)
                                        S
                                        .a
                                        .set(e.galleryOpacityItems[t], {
                                            opacity: 1e-4,
                                            visibility: "hidden"
                                        });
                                    e.init(),
                                        e.resize()
                                }
                            }),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumnItems, {
                                opacity: 1e-4
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumn[0], {
                                y: "52.6vw"
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumn[1], {
                                y: "42.6vw"
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumn[2], {
                                y: "97.6vw"
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumn[3], {
                                y: "42.6vw"
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .set(this.$galleryColumn[4], {
                                y: "52.6vw"
                            }, 0);
                        for (var t = 0; t < this.$galleryColumnItems.length; t++)
                            this
                            .enterGalleryAnimation
                            .to(this.$galleryColumnItems[t], {
                                opacity: 1,
                                duration: 1.4
                            }, 0);
                        this
                            .enterGalleryAnimation
                            .to(this.$galleryColumn[0], {
                                y: "62.6vw",
                                opacity: 1,
                                duration: 1.4
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .to(this.$galleryColumn[1], {
                                y: "52.6vw",
                                opacity: 1,
                                duration: 1.4
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .to(this.$galleryColumn[2], {
                                y: "108.6vw",
                                opacity: 1,
                                duration: 1.4
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .to(this.$galleryColumn[3], {
                                y: "52.6vw",
                                opacity: 1,
                                duration: 1.4
                            }, 0),
                            this
                            .enterGalleryAnimation
                            .to(this.$galleryColumn[4], {
                                y: "62.6vw",
                                opacity: 1,
                                duration: 1.4
                            }, 0);
                        for (
                            var i = this.$heroTitle.querySelectorAll(".word"),
                                r = 0; r < i.length; r++
                        )
                            this
                            .enterGalleryAnimation
                            .to(i[r], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4,
                                ease: "expo.inOut"
                            }, 0 + .05 * r);
                        for (
                            var n = 0; n < this.$heroDescription.querySelectorAll(".word").length; n++
                        )
                            this
                            .enterGalleryAnimation
                            .to(this.$heroDescription.querySelectorAll(".word")[n], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4
                            }, 0 + .02 * n)
                    }
                }, {
                    key: "galleryVideoInit",
                    value: function() {
                        this.$galleryItem1Video = this
                            .$galleryColumn[0]
                            .children[0]
                            .querySelector("video"),
                            this.$galleryItem2Video = this
                            .$galleryColumn[1]
                            .children[0]
                            .querySelector("video"),
                            this.$galleryItem3Video = this
                            .$galleryColumn[1]
                            .children[1]
                            .querySelector("video"),
                            this.$galleryItem4Video = this
                            .$galleryColumn[2]
                            .children[0]
                            .querySelector("video"),
                            this.$galleryItem5Video = this
                            .$galleryColumn[3]
                            .children[0]
                            .querySelector("video"),
                            this.$galleryItem6Video = this
                            .$galleryColumn[3]
                            .children[1]
                            .querySelector("video"),
                            this.$galleryItem7Video = this
                            .$galleryColumn[4]
                            .children[0]
                            .querySelector("video");
                        for (var e = [
                                this.$galleryItem1Video,
                                this.$galleryItem2Video,
                                this.$galleryItem3Video,
                                this.$galleryItem4Video,
                                this.$galleryItem5Video,
                                this.$galleryItem6Video,
                                this.$galleryItem7Video
                            ], t = 0; t < e.length; t++)
                            e[t].pause();
                        this.galleryVideosAutoplay()
                    }
                }, {
                    key: "galleryVideosAutoplay",
                    value: function() {
                        var e = this;
                        this.$galleryItem4Video.loop = !0,
                            S
                            .a
                            .delayedCall(1.5, (function() {
                                e
                                    .$galleryItem1Video
                                    .play(),
                                    e.$galleryItem1Video.onended = function() {
                                        e.$galleryItem1Video.currentTime = 0,
                                            e
                                            .$galleryItem6Video
                                            .play(),
                                            e.$galleryItem6Video.onended = function() {
                                                e.$galleryItem6Video.currentTime = 0,
                                                    e
                                                    .$galleryItem3Video
                                                    .play(),
                                                    e.$galleryItem3Video.onended = function() {
                                                        e.$galleryItem3Video.currentTime = 0,
                                                            e
                                                            .$galleryItem1Video
                                                            .play()
                                                    }
                                            }
                                    },
                                    e
                                    .$galleryItem5Video
                                    .play(),
                                    e.$galleryItem5Video.onended = function() {
                                        e.$galleryItem5Video.currentTime = 0,
                                            e
                                            .$galleryItem2Video
                                            .play(),
                                            e.$galleryItem2Video.onended = function() {
                                                e.$galleryItem2Video.currentTime = 0,
                                                    e
                                                    .$galleryItem7Video
                                                    .play(),
                                                    e.$galleryItem7Video.onended = function() {
                                                        e.$galleryItem7Video.currentTime = 0,
                                                            e
                                                            .$galleryItem5Video
                                                            .play()
                                                    }
                                            }
                                    }
                            }))
                    }
                }, {
                    key: "galleryPosition",
                    value: function() {
                        var e = this;
                        this.galleryLateral = [
                                this
                                .$galleryColumn[0]
                                .children[0],
                                this
                                .$galleryColumn[4]
                                .children[0]
                            ],
                            this.galleryCentral = this
                            .$galleryColumn[2]
                            .children[0],
                            this.galleryInside = [
                                this
                                .$galleryColumn[1]
                                .children[0],
                                this
                                .$galleryColumn[1]
                                .children[1],
                                this
                                .$galleryColumn[3]
                                .children[0],
                                this
                                .$galleryColumn[3]
                                .children[1]
                            ],
                            this.contentPosition = {
                                start: 0,
                                end: .3 * window.innerWidth
                            },
                            this.contentPositionTimeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 2,
                                    ease: "none"
                                }
                            });
                        for (var t = {
                                x: .35 * window.innerWidth,
                                y: .05 * window.innerWidth,
                                left: 35,
                                right: 65
                            }, i = 0; i < this.galleryLateral.length; i++)
                            this
                            .contentPositionTimeline
                            .set(this.galleryLateral[i], {
                                y: "0%"
                            }, 0);
                        this
                            .contentPositionTimeline
                            .set(this.galleryCentral, {
                                y: "0%"
                            }, 0);
                        for (var r = 0; r < this.galleryInside.length; r++)
                            this
                            .contentPositionTimeline
                            .set(this.galleryInside[r], {
                                y: "0vw"
                            }, 0);
                        this
                            .$galleryItem4Video
                            .play();
                        for (var n = 0; n < this.galleryLateral.length; n++)
                            this
                            .contentPositionTimeline
                            .to(this.galleryLateral[n], {
                                y: "30%"
                            }, 0);
                        this
                            .contentPositionTimeline
                            .to(this.galleryCentral, {
                                y: "0%"
                            }, 0);
                        for (var o = 0; o < this.galleryInside.length; o++)
                            this
                            .contentPositionTimeline
                            .to(this.galleryInside[o], {
                                y: "5vw"
                            }, 0);
                        this
                            .contentPositionTimeline
                            .to(t, {
                                y: 0,
                                onUpdate: function() {
                                    var i = "polygon(" + t.x + "px " + t.y + "px, " + (
                                        window.innerWidth - t.x
                                    ) + "px " + t.y + "px, " + (
                                        window.innerWidth - t.x
                                    ) + "px " + (
                                        window.innerHeight - t.y
                                    ) + "px, " + t.x + "px " + (
                                        window.innerHeight - t.y
                                    ) + "px)";
                                    S
                                        .a
                                        .set(e.galleryCentral.querySelector(".video__inner"), {
                                            clipPath: i,
                                            webkitClipPath: i
                                        })
                                }
                            }, 0)
                    }
                }, {
                    key: "galleryPositionRaf",
                    value: function(e) {
                        if (e < -this.contentPosition.start && e > -this.contentPosition.end) {
                            var t = -(e + this.contentPosition.start) / (
                                this.contentPosition.end - this.contentPosition.start
                            );
                            this
                                .contentPositionTimeline
                                .progress(t)
                        }
                    }
                }, {
                    key: "gallerySticky",
                    value: function() {
                        var e = this,
                            t = this
                            .galleryCentral
                            .getBoundingClientRect();
                        this.gallery = {
                            top: t.y,
                            height: t.height,
                            bottom: t.y + this
                                .$hero
                                .getBoundingClientRect()
                                .height,
                            start: t.y - (window.innerHeight - t.height) / 2,
                            end: this
                                .$curators
                                .querySelector(".container")
                                .getBoundingClientRect()
                                .y - t.height - 130
                        };
                        var i = {
                                left: 35,
                                right: 65
                            },
                            r = [
                                this.$galleryColumn[0], this.$galleryColumn[4]
                            ],
                            n = [
                                this.$galleryColumn[1], this.$galleryColumn[3]
                            ];
                        this.galleryTimeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .galleryTimeline
                            .to(r[0], {
                                x: "-22.5vw"
                            }, 0),
                            this
                            .galleryTimeline
                            .to(r[1], {
                                x: "22.5vw"
                            }, 0),
                            this
                            .galleryTimeline
                            .to(i, {
                                left: 22.5,
                                right: 77.5,
                                onUpdate: function() {
                                    var t = "polygon(" + i.left + "vw 0%, " + i.right + "vw 0%, " + i.right + "vw 1" +
                                        "00%, " + i.left + "vw 100%)";
                                    S
                                        .a
                                        .set(e.galleryCentral.querySelector(".video__inner"), {
                                            clipPath: t,
                                            webkitClipPath: t
                                        })
                                }
                            }, 0),
                            this
                            .galleryTimeline
                            .to(n[0], {
                                x: "-17.5vw"
                            }, 0),
                            this
                            .galleryTimeline
                            .to(n[1], {
                                x: "17.5vw"
                            }, 0),
                            this
                            .galleryTimeline
                            .to(r[0], {
                                x: "-45vw"
                            }, 1),
                            this
                            .galleryTimeline
                            .to(r[1], {
                                x: "45vw"
                            }, 1),
                            this
                            .galleryTimeline
                            .to(i, {
                                left: 0,
                                right: 100,
                                onUpdate: function() {
                                    var t = "polygon(" + i.left + "vw 0%, " + i.right + "vw 0%, " + i.right + "vw 1" +
                                        "00%, " + i.left + "vw 100%)";
                                    S
                                        .a
                                        .set(e.galleryCentral.querySelector(".video__inner"), {
                                            clipPath: t,
                                            webkitClipPath: t
                                        })
                                }
                            }, 1),
                            this
                            .galleryTimeline
                            .to(n[0], {
                                x: "-35vw"
                            }, 1),
                            this
                            .galleryTimeline
                            .to(n[1], {
                                x: "35vw"
                            }, 1),
                            this.changeBgColor()
                    }
                }, {
                    key: "galleryStickyRaf",
                    value: function(e) {
                        if (e < -this.gallery.start && e > -this.gallery.end) {
                            var t = e + this.gallery.start,
                                i = -t / (this.gallery.end - this.gallery.start);
                            this
                                .galleryTimeline
                                .progress(i),
                                this
                                .$gallery
                                .children[0]
                                .style
                                .transform = "translateY(" + -t + "px)"
                        }
                        if (e < -this.container.start && e > -this.container.end) {
                            if (!this.bgsShow) {
                                S
                                    .a
                                    .to(this.$bgs, { opacity: 1 }),
                                    this.bgsShow = !0;
                                for (var r = 0; r < this.$curatorsListItems.length; r++)
                                    S
                                    .a
                                    .to(this.$curatorsListItems[r].querySelector(".name"), {
                                        color: "#ffffff",
                                        duration: .6,
                                        ease: "power2.out"
                                    }),
                                    S
                                    .a
                                    .to(this.$curatorsListItems[r].querySelector(".position"), {
                                        color: "#ffffff",
                                        duration: .6,
                                        ease: "power2.out"
                                    })
                            }
                        } else if (this.bgsShow) {
                            S
                                .a
                                .to(this.$bgs, { opacity: 1e-4 }),
                                this.bgsShow = !1;
                            for (var n = 0; n < this.$curatorsListItems.length; n++)
                                S
                                .a
                                .to(this.$curatorsListItems[n].querySelector(".name"), {
                                    color: "#060707",
                                    duration: .6,
                                    ease: "power2.out"
                                }),
                                S
                                .a
                                .to(this.$curatorsListItems[n].querySelector(".position"), {
                                    color: "#060707",
                                    duration: .6,
                                    ease: "power2.out"
                                })
                        }
                    }
                }, {
                    key: "changeBgColor",
                    value: function() {
                        var e = this
                            .$curators
                            .querySelector(".container")
                            .getBoundingClientRect();
                        this.container = {
                            start: e.y - this
                                .galleryCentral
                                .getBoundingClientRect()
                                .height - 200,
                            end: this
                                .$curators
                                .querySelector(".label--list")
                                .getBoundingClientRect()
                                .y
                        }
                    }
                }, {
                    key: "textCarrousel",
                    value: function() {
                        this.carrouselToRight = S
                            .a
                            .timeline({
                                paused: !1,
                                repeat: -1,
                                defaults: {
                                    duration: 8 * this
                                        .$carrouselOne
                                        .children[0]
                                        .children
                                        .length,
                                    ease: "none"
                                }
                            }),
                            this.carrouselToLeft = S
                            .a
                            .timeline({
                                paused: !1,
                                repeat: -1,
                                defaults: {
                                    duration: 8 * this
                                        .$carrouselTwo
                                        .children[0]
                                        .children
                                        .length,
                                    ease: "none"
                                }
                            });
                        for (var e = 0; e < this.$carrouselOne.children.length; e++)
                            this
                            .carrouselToRight
                            .to(this.$carrouselOne.children[e], {
                                x: this
                                    .$carrouselOne
                                    .children[0]
                                    .offsetWidth
                            }, 0);
                        for (var t = 0; t < this.$carrouselTwo.children.length; t++)
                            this
                            .carrouselToLeft
                            .to(this.$carrouselTwo.children[t], {
                                x: -this
                                    .$carrouselOne
                                    .children[0]
                                    .offsetWidth
                            }, 0)
                    }
                }, {
                    key: "discoverSliderInit",
                    value: function() {
                        for (
                            var e = this,
                                t = function(t) {
                                    e
                                        .events
                                        .add(e.$discover.querySelectorAll(".link")[t], "mouseenter", (
                                            function(i, r, n) {
                                                e.discoverSliderEnter(i, n, t)
                                            }
                                        )),
                                        e
                                        .events
                                        .add(e.$discover.querySelectorAll(".link")[t], "mouseleave", (
                                            function(i, r, n) {
                                                e.discoverSliderLeave(i, n, t)
                                            }
                                        ))
                                },
                                i = 0; i < this.$discover.querySelectorAll(".link").length; i++
                        )
                            t(i);
                        this.superDragger = new We({
                            el: this
                                .$discover
                                .querySelector(".slider"),
                            elClickables: this
                                .$discover
                                .querySelectorAll(".collection"),
                            snap: !1,
                            onMouseEnter: function() {
                                e
                                    .router
                                    .ui
                                    .openCursor()
                            },
                            onMouseLeave: function() {
                                e
                                    .router
                                    .ui
                                    .openCursor()
                            },
                            onDragStart: function() {
                                e
                                    .router
                                    .ui
                                    .reduceCursor();
                                for (
                                    var t = 0; t < e.$discover.querySelectorAll(".slider__inner__item").length; t++
                                )
                                    S
                                    .a
                                    .to(e.$discover.querySelectorAll(".slider__inner__item")[t], {
                                        scale: .95,
                                        ease: "power4.out",
                                        duration: .6
                                    })
                            },
                            onDragEnd: function() {
                                e
                                    .router
                                    .ui
                                    .expandCursor();
                                for (
                                    var t = 0; t < e.$discover.querySelectorAll(".slider__inner__item").length; t++
                                )
                                    S
                                    .a
                                    .to(e.$discover.querySelectorAll(".slider__inner__item")[t], {
                                        scale: 1,
                                        ease: "power4.out",
                                        duration: .6
                                    })
                            }
                        }, this)
                    }
                }, {
                    key: "discoverSliderEnter",
                    value: function(e, t, i) {
                        var r = this;
                        this.superDragger && this
                            .router
                            .ui
                            .openCursor(),
                            S
                            .a
                            .to(t.children[1], {
                                x: "100%",
                                duration: .9,
                                ease: "expo.out"
                            }),
                            S
                            .a
                            .to(this.archiveSvg, {
                                dashoffset: 1,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .children[0]
                                        .querySelector(".front")
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * r.archiveSvg.dashoffset + "px"
                                }
                            }),
                            S
                            .a
                            .to(this.$discover.querySelectorAll(".collection")[i].querySelector(
                                ".image__bg"
                            ), {
                                willChange: "transform",
                                scale: 1.05,
                                duration: .9,
                                ease: "expo.out"
                            })
                    }
                }, {
                    key: "discoverSliderLeave",
                    value: function(e, t, i) {
                        var r = this;
                        this.superDragger && this
                            .router
                            .ui
                            .openCursor(),
                            S
                            .a
                            .to(t.children[1], {
                                x: "0%",
                                duration: .9,
                                ease: "expo.out"
                            }),
                            S
                            .a
                            .to(this.archiveSvg, {
                                dashoffset: 0,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .children[0]
                                        .querySelector(".front")
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * r.archiveSvg.dashoffset + "px"
                                }
                            }),
                            S
                            .a
                            .to(this.$discover.querySelectorAll(".collection")[i].querySelector(
                                ".image__bg"
                            ), {
                                scale: 1,
                                duration: .9,
                                ease: "expo.out",
                                clearProps: "will-change"
                            })
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    });
                                break;
                            case "titleLarge":
                                new Oe(this.$discover.querySelector(".title--large"), {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (
                                    var r = 0; r < this.$discover.querySelector(".title--large").querySelectorAll(".word").length; r++
                                )
                                    S
                                    .a
                                    .set(
                                        this.$discover.querySelector(".title--large").querySelectorAll(".word")[r], {
                                            opacity: 1e-4,
                                            y: "50%"
                                        }
                                    );
                                break;
                            case "position":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var n = 0; n < t.querySelectorAll(".line").length; n++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".line")[n], {
                                        opacity: 1e-4,
                                        y: "50%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.6,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    });
                                break;
                            case "titleLarge":
                                for (
                                    var r = 0; r < this.$discover.querySelector(".title--large").querySelectorAll(".word").length; r++
                                )
                                    S
                                    .a
                                    .to(
                                        this.$discover.querySelector(".title--large").querySelectorAll(".word")[r], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1.4,
                                            ease: "expo.inOut",
                                            delay: .4 + .05 * r
                                        }
                                    );
                                break;
                            case "position":
                                for (var n = 0; n < t.querySelectorAll(".line").length; n++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".line")[n], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1,
                                        ease: "expo.inOut",
                                        delay: .75 + .05 * n
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        switch (e.timeline = S.a.timeline({
                            paused: !0,
                            ease: "none",
                            defaults: {
                                duration: 1,
                                ease: "none"
                            }
                        }), this.observerParallax[t].id) {
                            case "why":
                                var i = e
                                    .node
                                    .querySelector(".item--0"),
                                    r = e
                                    .node
                                    .querySelector(".item--1"),
                                    n = e
                                    .node
                                    .querySelector(".item--2");
                                e
                                    .timeline
                                    .fromTo(i, {
                                        y: "10%"
                                    }, {
                                        y: "-25%"
                                    }, 0),
                                    e
                                    .timeline
                                    .fromTo(r, {
                                        y: "0%"
                                    }, {
                                        y: "10%"
                                    }, 0),
                                    e
                                    .timeline
                                    .fromTo(n, {
                                        y: "10%"
                                    }, {
                                        y: "-25%"
                                    }, 0);
                                break;
                            case "whyImage":
                                e
                                    .timeline
                                    .fromTo(e.node.children[0], {
                                        y: "-100px"
                                    }, {
                                        y: "100px"
                                    }, 0);
                                break;
                            case "headline":
                                var o = e
                                    .node
                                    .querySelector(".headline--1"),
                                    s = e
                                    .node
                                    .querySelector(".headline--2");
                                e
                                    .timeline
                                    .set(o, {
                                        x: "-60vw"
                                    }, 0),
                                    e
                                    .timeline
                                    .set(s, {
                                        x: "15vw"
                                    }, 0),
                                    e
                                    .timeline
                                    .to(o, {
                                        x: "-50vw"
                                    }, 0),
                                    e
                                    .timeline
                                    .to(s, {
                                        x: "-5vw"
                                    }, 0),
                                    e
                                    .timeline
                                    .to(o, {
                                        x: "-40vw"
                                    }, 1),
                                    e
                                    .timeline
                                    .to(s, {
                                        x: "-15vw"
                                    }, 1);
                                break;
                            case "discover":
                                e
                                    .timeline
                                    .fromTo(e.node.querySelector(".slider"), {
                                        x: "10vw"
                                    }, {
                                        x: "-5vw"
                                    }, 0)
                        }
                        e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        var i = this;
                        null === this.router.instance.store.pageFrom && (
                                S.a.to(this.router.ui.$maskLogo, {
                                    opacity: 1e-4,
                                    duration: 1,
                                    ease: "power2.out",
                                    delay: .5
                                }),
                                S.a.to(this.router.ui.$mask, {
                                    y: "100%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: .5,
                                    onComplete: function() {
                                        S
                                            .a
                                            .set(i.router.ui.$mask, {
                                                display: "none",
                                                y: "-100%"
                                            }),
                                            S
                                            .a
                                            .set(i.router.ui.$mask.children[0], { backgroundColor: "" })
                                    }
                                })
                            ),
                            S
                            .a
                            .set(document.querySelector(".opener"), {
                                opacity: 1e-4,
                                onComplete: function() {
                                    S
                                        .a
                                        .set(document.querySelector(".opener"), { y: "-200%" })
                                }
                            }),
                            null === this.router.instance.store.pageFrom ?
                            this.enterGalleryFirst() :
                            this.enterGallerySecond(),
                            this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Ze(t.prototype, i),
                r && Ze(t, r),
                o
        }(d);

        function rt(e) {
            return (
                rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function nt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var ot = "ontouchstart" in document,
            st = {
                VERTICAL: 1,
                HORIZONTAL: 2
            },
            lt = {
                DEFAULT: 1,
                CARD: 2
            },
            at = function() {},
            ut = function() {
                function e(t) {
                    var i = this;
                    if (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e), "object" !== rt(t))
                        throw new Error("touchSlider needs options to work.");
                    this._target = t.target || window,
                        this._touchDirection = t.touchDirection ?
                        st[t.touchDirection] :
                        st.HORIZONTAL,
                        this._touchMode = t.touchMode ?
                        lt[t.touchMode] :
                        lt.DEFAULT,
                        this._duration = t.duration || .75,
                        this._ease = t && t.ease ?
                        t.ease :
                        "power4.out",
                        this._touchMultiplier = t.touchMultiplier || 1,
                        this._touchStartPosition = {
                            x: 0,
                            y: 0
                        },
                        this._touchInitialPosition = {
                            x: 0,
                            y: 0
                        },
                        this._touchPosition = {
                            x: 0,
                            y: 0
                        },
                        this._canSwipe = !1 !== t.canSwipe,
                        this._swipeTime = 0,
                        this._swipeLastPosition = {
                            x: 0,
                            y: 0
                        },
                        this._swipeVelocity = 0,
                        this._swipeMinVelocity = t.swipeMinVelocity || 1,
                        this._lastClosestNode = 0,
                        this._onRaf = t.onRaf || at,
                        this._onTStart = t.onTouchStart || at,
                        this._onTMove = t.onTouchMove || at,
                        this._onTEnd = t.onTouchEnd || at,
                        this._animation = new S
                        .a
                        .delayedCall(0, at),
                        this._nodes = [];
                    for (
                        var r = t.nodes.length ?
                            t.nodes : [t.nodes],
                            n = 0; n < r.length; n++
                    )
                        this
                        ._nodes
                        .push({
                            el: r[n],
                            position: 0,
                            sizes: {
                                w: 0,
                                h: 0
                            },
                            additionalTransform: ""
                        });
                    this.enabled = !1 !== t.enabled,
                        this._isScrolling = void 0,
                        this._onTouchStart = function(e) {
                            if (i.enabled) {
                                i
                                    ._animation
                                    .kill();
                                var t = e.targetTouches ?
                                    e.targetTouches[0] :
                                    e;
                                i._touchStartPosition.x = t.clientX + i._touchPosition.x,
                                    i._touchStartPosition.y = t.clientY + i._touchPosition.y,
                                    i._touchInitialPosition.x = i._touchPosition.x,
                                    i._touchInitialPosition.y = i._touchPosition.y,
                                    i._onTStart()
                            }
                        },
                        this._onTouchMove = function(e) {
                            if (!0 !== i._isScrolling) {
                                var t = e.targetTouches ?
                                    e.targetTouches[0] :
                                    e;
                                if (void 0 === i._isScrolling) {
                                    var r = (i._touchStartPosition.x - i._touchPosition.x - t.clientX) * i._touchMultiplier,
                                        n = (i._touchStartPosition.y - i._touchPosition.y - t.clientY) * i._touchMultiplier;
                                    if (i._touchDirection === st.HORIZONTAL && 0 === Math.abs(n) || i._touchDirection === st.VERTICAL && 0 === Math.abs(r))
                                        i._isScrolling = !1;
                                    else if (r * r + n * n >= 25) {
                                        var o = 180 * Math.atan2(Math.abs(n), Math.abs(r)) / Math.PI;
                                        if (
                                            i._isScrolling = i._touchDirection === st.HORIZONTAL ?
                                            o > 45 :
                                            90 - o > 45,
                                            i._isScrolling
                                        )
                                            return
                                    }
                                }
                                i._touchPosition.x = (i._touchStartPosition.x - t.clientX) * i._touchMultiplier,
                                    i._touchPosition.y = (i._touchStartPosition.y - t.clientY) * i._touchMultiplier,
                                    i._onTMove(),
                                    e.preventDefault(),
                                    e.stopPropagation()
                            }
                        },
                        this._onTouchEnd = function(e) {
                            var t,
                                r = [
                                    "x", "y"
                                ],
                                n = [{
                                    x: 0,
                                    ease: i._ease,
                                    overwrite: "all"
                                }, {
                                    y: 0,
                                    ease: i._ease,
                                    overwrite: "all"
                                }],
                                o = i._touchDirection === st.HORIZONTAL ?
                                0 :
                                1,
                                s = i._touchPosition[r[o]] < i._touchInitialPosition[r[o]] ?
                                "left" :
                                "right",
                                l = i._canSwipe && i._swipeVelocity > i._swipeMinVelocity;
                            t = i._touchPosition[r[o]] < 0 ?
                                0 :
                                i._touchPosition[r[o]] > i
                                ._nodes[i._nodes.length - 1]
                                .position ?
                                i._nodes.length - 1 :
                                l ?
                                "left" === s && 0 === i._lastClosestNode ?
                                0 :
                                "right" === s && i._lastClosestNode === i._nodes.length - 1 ?
                                i._nodes.length - 1 :
                                "left" === s ?
                                i._lastClosestNode - 1 :
                                i._lastClosestNode + 1 :
                                i._getClosestNode(r[o], ["w", "h"][o], s, .2),
                                n[o][r[o]] = i
                                ._nodes[t]
                                .position,
                                i._animation = S
                                .a
                                .to(i._touchPosition, i._duration, n[o]),
                                i._lastClosestNode = t,
                                i._isScrolling = void 0,
                                i._onTEnd(t)
                        },
                        this._update = function() {
                            var e = [
                                    "x", "y"
                                ],
                                t = i._touchDirection === st.HORIZONTAL ?
                                0 :
                                1;
                            if (i._canSwipe) {
                                var r = performance.now(),
                                    n = Math.abs(i._touchPosition[e[t]] - i._swipeLastPosition[e[t]]);
                                i._swipeVelocity = n / (r - i._swipeTime),
                                    i._swipeTime = r,
                                    i._swipeLastPosition.x = i._touchPosition.x,
                                    i._swipeLastPosition.y = i._touchPosition.y
                            }
                            if (i._touchMode === lt.DEFAULT)
                                for (var o = 0; o < i._nodes.length; o++) {
                                    var s = -i._touchPosition.x * (1 - t),
                                        l = -i._touchPosition.y * t;
                                    i
                                        ._nodes[o]
                                        .el
                                        .style
                                        .transform = "translate3d(" + s
                                        .toString() + "px," + l
                                        .toString() + "px, 0px) " + i
                                        ._nodes[o]
                                        .additionalTransform
                                }
                            i._onRaf()
                        },
                        ot && (this._target.addEventListener("touchstart", this._onTouchStart, {
                            passive: !0,
                            capture: !1
                        }), this._target.addEventListener("touchmove", this._onTouchMove, {
                            passive: !1,
                            capture: !1
                        }), this._target.addEventListener("touchend", this._onTouchEnd, {
                            passive: !0,
                            capture: !1
                        })),
                        S
                        .a
                        .ticker
                        .add(this._update)
                }
                var t,
                    i,
                    r;
                return t = e,
                    (i = [{
                        key: "_getClosestNode",
                        value: function(e, t, i, r) {
                            for (var n = 0, o = 1 / 0, s = 0; s < this._nodes.length; s++) {
                                var l = Math.abs(this._touchPosition[e] - this._nodes[s].position + (
                                    "right" === i ?
                                    this._nodes[s].sizes[t] * r :
                                    this._nodes[s].sizes[t] * -r
                                ));
                                l < o && (o = l, n = s)
                            }
                            return n
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ?
                                arguments[2] :
                                null,
                                r = arguments.length > 3 && void 0 !== arguments[3] ?
                                arguments[3] :
                                0,
                                n = arguments.length > 4 && void 0 !== arguments[4] ?
                                arguments[4] :
                                "",
                                o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                                s = [
                                    "x", "y"
                                ],
                                l = [
                                    "w", "h"
                                ],
                                a = [
                                    "left", "top"
                                ],
                                u = [{
                                    css: {
                                        left: 0
                                    }
                                }, {
                                    css: {
                                        top: 0
                                    }
                                }],
                                c = this._touchDirection === st.HORIZONTAL ?
                                0 :
                                1;
                            if (this._touchMode === lt.DEFAULT) {
                                for (
                                    var d = this._getClosestNode(s[c], l[c], "right", 0) || 0,
                                        h = null === i ?
                                        this._nodes : [this._nodes[i]],
                                        v = 0; v < h.length; v++
                                )
                                    h[v].sizes[l[c]] = this._touchDirection === st.HORIZONTAL ?
                                    e :
                                    t,
                                    h[v].position = null === i ?
                                    0 === v ?
                                    0 :
                                    this
                                    ._nodes[v - 1]
                                    .position + this
                                    ._nodes[v - 1]
                                    .sizes[l[c]] :
                                    0 === i ?
                                    0 :
                                    this
                                    ._nodes[i - 1]
                                    .position + this
                                    ._nodes[i - 1]
                                    .sizes[l[c]],
                                    o && (u[c].css[a[c]] = h[v].position + r, S.a.set(h[v].el, u[c])),
                                    h[v].additionalTransform = n;
                                this._touchPosition[s[c]] = this
                                    ._nodes[d]
                                    .position
                            }
                        }
                    }, {
                        key: "removeTicker",
                        value: function() {
                            S
                                .a
                                .ticker
                                .remove(this._update)
                        }
                    }, {
                        key: "removeEvents",
                        value: function() {
                            ot && (
                                this._target.removeEventListener("touchstart", this._onTouchStart),
                                this._target.removeEventListener("touchmove", this._onTouchMove),
                                this._target.removeEventListener("touchend", this._onTouchEnd)
                            )
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeTicker(),
                                this.removeEvents(),
                                this._nodes = [],
                                this._target = null
                        }
                    }]) && nt(t.prototype, i),
                    r && nt(t, r),
                    e
            }();
        i(36);

        function ct(e) {
            return (
                ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function dt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function ht(e, t) {
            return (ht = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function vt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = pt(e);
                if (t) {
                    var n = pt(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return _t(this, i)
            }
        }

        function _t(e, t) {
            return !t || "object" !== ct(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function pt(e) {
            return (
                pt = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var yt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && ht(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = vt(o);

                function o(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var i = Object.values(P.appData.destinations),
                        r = P.appData.collections;
                    return (t = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: Ue.a,
                            templateData: {
                                data: P.appData.pages.home,
                                destinations: i,
                                allCollections: r,
                                options: P.appData.options,
                                footer: Xe.a
                            },
                            insertPosition: "FIRST",
                            initialRenderDelay: null === P.pageFrom ?
                                1e3 : 0
                        })).isPlaying = !1,
                        t
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$header = document.getElementById("header"),
                                this.$menuMobile = document.querySelector(".menu--mobile"),
                                this.$hero = this
                                .$el
                                .querySelector(".home__hero"),
                                this.$curators = this
                                .$el
                                .querySelector(".home__curators"),
                                this.$why = this
                                .$el
                                .querySelector(".home__why"),
                                this.$discover = this
                                .$el
                                .querySelector(".home__discover"),
                                this.$footer = this
                                .$el
                                .querySelector(".home__footer"),
                                this.$heroTitle = this
                                .$hero
                                .querySelector(".title--xlarge"),
                                this.$heroDescription = this
                                .$hero
                                .querySelector(".title--small"),
                                this.$heroImage = this
                                .$hero
                                .querySelector(".image"),
                                this.$curatorsTitle = this
                                .$curators
                                .querySelector(".title"),
                                this.$curatorsFeatured = this
                                .$curators
                                .querySelector(".featured"),
                                this.$curatorsList = this
                                .$curators
                                .querySelector(".list"),
                                this.$curatorsListItems = this
                                .$curatorsList
                                .querySelectorAll(".list__item"),
                                this.$curatorsListVideo = this
                                .$curatorsList
                                .querySelectorAll(".player"),
                                this.$curatorsListTrigger = this
                                .$curatorsList
                                .querySelectorAll(".trigger"),
                                this.$carrouselOne = this
                                .$why
                                .querySelector(".headline--1"),
                                this.$carrouselTwo = this
                                .$why
                                .querySelector(".headline--2")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            new Oe(this.$heroDescription, {
                                type: "lines, words",
                                linesClass: "line line--++",
                                wordsClass: "word word--++"
                            });
                            for (
                                var i = 0; i < this.$heroDescription.querySelectorAll(".word").length; i++
                            )
                                S
                                .a
                                .set(this.$heroDescription.querySelectorAll(".word")[i], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            new Oe(this.$heroTitle, {
                                type: "lines, words",
                                linesClass: "line line--++",
                                wordsClass: "word word--++"
                            });
                            for (var r = 0; r < this.$heroTitle.querySelectorAll(".word").length; r++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".word")[r], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            if (this.enterAnimation = S.a.timeline({
                                    paused: !0,
                                    delay: 0
                                }), null !== this.router.instance.store.pageFrom) {
                                for (
                                    var n = 0; n < this.$heroDescription.querySelectorAll(".word").length; n++
                                )
                                    this
                                    .enterAnimation
                                    .to(this.$heroDescription.querySelectorAll(".word")[n], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: .8,
                                        ease: "expo.inOut",
                                        delay: .1 + .02 * n
                                    }, 0);
                                for (var o = 0; o < this.$heroTitle.querySelectorAll(".word").length; o++)
                                    this
                                    .enterAnimation
                                    .to(this.$heroTitle.querySelectorAll(".word")[o], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: .8,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * o
                                    }, .25)
                            }
                            this
                                .events
                                .add(
                                    this.$hero.querySelector(".video__trigger"),
                                    "click",
                                    (function(e, i, r) {
                                        t
                                            .router
                                            .ui
                                            .openLightbox("video", t.$hero.querySelector(".video--lightbox"))
                                    }),
                                    this
                                ),
                                this
                                .events
                                .add(
                                    this.$curatorsFeatured.querySelector(".video__trigger"),
                                    "click",
                                    (function(e, i, r) {
                                        t
                                            .router
                                            .ui
                                            .openLightbox("video", t.$curatorsFeatured.querySelector(".video--lightbox"))
                                    }),
                                    this
                                );
                            for (var s = function(e) {
                                    t
                                        .events
                                        .add(t.$curatorsListItems[e], "click", (function(i, r, n) {
                                            t
                                                .router
                                                .ui
                                                .openLightbox(
                                                    "video",
                                                    t.$curatorsListItems[e].querySelector(".video--lightbox")
                                                )
                                        }), t)
                                }, l = 0; l < this.$curatorsListItems.length; l++)
                                s(l);
                            null === this.router.instance.store.pageFrom && this.enterFirstNavigation(),
                                this.curatorsSliderInit(),
                                this.textCarrousel(),
                                this.discoverSliderInit(),
                                this.init()
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$curators
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }, {
                                    node: this
                                        .$discover
                                        .querySelector(".title--large"),
                                    delay: 0,
                                    id: "titleLarge"
                                }, {
                                    node: this
                                        .$footer
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [{
                                    node: this
                                        .$why
                                        .querySelectorAll(".image")[0],
                                    delay: 0,
                                    id: "whyImage"
                                }, {
                                    node: this
                                        .$why
                                        .querySelectorAll(".image")[1],
                                    delay: 0,
                                    id: "whyImage"
                                }, {
                                    node: this
                                        .$why
                                        .querySelectorAll(".image")[2],
                                    delay: 0,
                                    id: "whyImage"
                                }, {
                                    node: this
                                        .$why
                                        .querySelector(".headline"),
                                    delay: 0,
                                    id: "headline"
                                }],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "preloadItems",
                        value: function(e) {
                            for (
                                var t = [
                                        this._templateData.data.fields.main_video_image, this._templateData.data.fields.main_video_mp4, this._templateData.data.fields.curators_featured_image, this._templateData.data.fields.curators_featured_video_mp4
                                    ],
                                    i = 0; i < this._templateData.data.fields.curators_list.length; i++
                            )
                                t.push(this._templateData.data.fields.curators_list[i].image);
                            for (var r = 0; r < this._templateData.data.fields.features.length; r++)
                                t.push(this._templateData.data.fields.features[r].image);
                            for (var n = 0; n < this._templateData.data.fields.collections.length; n++)
                                t.push(this._templateData.allCollections[
                                    this
                                    ._templateData
                                    .data
                                    .fields
                                    .collections[n]
                                    .ID
                                ].image);
                            return { main: t }
                        }
                    }, {
                        key: "preloadProgress",
                        value: function(e) {
                            var t = 1197 - e / 100 * 1197;
                            S
                                .a
                                .to(this.router.ui.$maskLogo.children[0].querySelector(".front"), {
                                    strokeDashoffset: t + "px",
                                    delay: 1
                                })
                        }
                    }, {
                        key: "enterFirstNavigation",
                        value: function() {
                            for (
                                var e = 0; e < this.$heroDescription.querySelectorAll(".word").length; e++
                            )
                                S
                                .a
                                .to(this.$heroDescription.querySelectorAll(".word")[e], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 1.4,
                                    ease: "expo.inOut",
                                    delay: .5 + .02 * e
                                }, 1);
                            for (var t = 0; t < this.$heroTitle.querySelectorAll(".word").length; t++)
                                S
                                .a
                                .to(this.$heroTitle.querySelectorAll(".word")[t], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 2,
                                    ease: "expo.inOut",
                                    delay: .5 + .05 * t
                                }, .75)
                        }
                    }, {
                        key: "curatorsSliderInit",
                        value: function() {
                            this.curatorsSlider = new ut({
                                target: this.$curatorsList,
                                nodes: this.$curatorsListItems,
                                enable: !0
                            })
                        }
                    }, {
                        key: "textCarrousel",
                        value: function() {
                            this.carrouselToRight = S
                                .a
                                .timeline({
                                    paused: !1,
                                    repeat: -1,
                                    defaults: {
                                        duration: 20 * this
                                            .$carrouselOne
                                            .children[0]
                                            .children
                                            .length,
                                        ease: "none"
                                    }
                                }),
                                this.carrouselToLeft = S
                                .a
                                .timeline({
                                    paused: !1,
                                    repeat: -1,
                                    defaults: {
                                        duration: 20 * this
                                            .$carrouselTwo
                                            .children[0]
                                            .children
                                            .length,
                                        ease: "none"
                                    }
                                });
                            for (var e = 0; e < this.$carrouselOne.children.length; e++)
                                this
                                .carrouselToRight
                                .to(this.$carrouselOne.children[e], {
                                    x: this
                                        .$carrouselOne
                                        .children[0]
                                        .offsetWidth
                                }, 0);
                            for (var t = 0; t < this.$carrouselTwo.children.length; t++)
                                this
                                .carrouselToLeft
                                .to(this.$carrouselTwo.children[t], {
                                    x: -this
                                        .$carrouselOne
                                        .children[0]
                                        .offsetWidth
                                }, 0)
                        }
                    }, {
                        key: "discoverSliderInit",
                        value: function() {
                            this.discoverSlider = new ut({
                                target: this
                                    .$discover
                                    .querySelector(".slider__inner"),
                                nodes: this
                                    .$discover
                                    .querySelectorAll(".slider__inner > .slider__inner__item"),
                                enable: !0
                            })
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[i], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        });
                                    break;
                                case "titleLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var r = 0; r < t.querySelectorAll(".word").length; r++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[r], {
                                            opacity: 1e-4,
                                            y: "50%"
                                        });
                                    break;
                                case "position":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var n = 0; n < t.querySelectorAll(".line").length; n++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".line")[n], {
                                            opacity: 1e-4,
                                            y: "50%"
                                        })
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1.6,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * i
                                        });
                                    break;
                                case "titleLarge":
                                    for (var r = 0; r < t.querySelectorAll(".word").length; r++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[r], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1.4,
                                            ease: "expo.inOut",
                                            delay: .5 + .05 * r
                                        });
                                    break;
                                case "position":
                                    for (var n = 0; n < t.querySelectorAll(".line").length; n++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".line")[n], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1,
                                            ease: "expo.inOut",
                                            delay: .75 + .05 * n
                                        })
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            switch (e.timeline = S.a.timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }), this.observerParallax[t].id) {
                                case "whyImage":
                                    e
                                        .timeline
                                        .fromTo(e.node.children[0], {
                                            y: "-100px"
                                        }, {
                                            y: "100px"
                                        }, 0);
                                    break;
                                case "headline":
                                    var i = e
                                        .node
                                        .querySelector(".headline--1"),
                                        r = e
                                        .node
                                        .querySelector(".headline--2");
                                    e
                                        .timeline
                                        .set(i, {
                                            x: "-60vw"
                                        }, 0),
                                        e
                                        .timeline
                                        .set(r, {
                                            x: "15vw"
                                        }, 0),
                                        e
                                        .timeline
                                        .to(i, {
                                            x: "-50vw"
                                        }, 0),
                                        e
                                        .timeline
                                        .to(r, {
                                            x: "-5vw"
                                        }, 0),
                                        e
                                        .timeline
                                        .to(i, {
                                            x: "-40vw"
                                        }, 1),
                                        e
                                        .timeline
                                        .to(r, {
                                            x: "-15vw"
                                        }, 1)
                            }
                            e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize(),
                                this
                                .curatorsSlider
                                .resize(this.$curatorsList.offsetWidth + 20, this.$curatorsList.offsetHeight),
                                this
                                .discoverSlider
                                .resize(
                                    this.$discover.querySelector(".slider").offsetWidth + 15,
                                    this.$discover.querySelector(".slider").offsetHeight
                                )
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            var i = this;
                            S
                                .a
                                .to(this.router.ui.$maskLogo, {
                                    opacity: 1e-4,
                                    duration: 1,
                                    ease: "power2.out"
                                }),
                                S
                                .a
                                .to(this.router.ui.$mask, {
                                    y: "100%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    onComplete: function() {
                                        S
                                            .a
                                            .set(i.router.ui.$mask, {
                                                display: "none",
                                                y: "-100%"
                                            }),
                                            S
                                            .a
                                            .set(i.router.ui.$mask.children[0], { backgroundColor: "" })
                                    }
                                }),
                                this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && dt(t.prototype, i),
                    r && dt(t, r),
                    o
            }(d),
            ft = i(6),
            mt = i.n(ft);
        i(37);

        function gt(e) {
            return (
                gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function bt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Dt(e, t) {
            return (Dt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function St(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = wt(e);
                if (t) {
                    var n = wt(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return $t(this, i)
            }
        }

        function $t(e, t) {
            return !t || "object" !== gt(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function wt(e) {
            return (
                wt = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var xt = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Dt(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = St(o);

            function o(e) {
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var t = Object.values(P.appData.experiences),
                    i = Object.values(P.appData.destinations);
                return n.call(this, {
                    eventHub: j,
                    store: P,
                    router: Rr,
                    templateFunction: mt.a,
                    templateData: {
                        data: P.appData.pages.collections,
                        experiences: t,
                        destinations: i,
                        options: P.appData.options,
                        footer: Xe.a
                    },
                    insertPosition: "FIRST",
                    initialRenderDelay: null === P.pageFrom ?
                        1e3 : 0
                })
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = document.getElementById("header"),
                            this.$hero = this
                            .$el
                            .querySelector(".collectionsFeatured__hero"),
                            this.$experiences = this
                            .$el
                            .querySelector(".collectionsFeatured__experiences"),
                            this.$destinations = this
                            .$el
                            .querySelector(".collectionsFeatured__destinations"),
                            this.$experiencesImages = this
                            .$experiences
                            .querySelectorAll(".image"),
                            this.$experiencesCategories = this
                            .$experiences
                            .querySelectorAll(".category"),
                            this.$destinationsImages = this
                            .$destinations
                            .querySelectorAll(".image"),
                            this.$destinationsCategories = this
                            .$destinations
                            .querySelectorAll(".category")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        new Oe(this.$hero.querySelector(".title--small"), {
                            type: "lines, words",
                            linesClass: "line line--++",
                            wordsClass: "word word--++"
                        });
                        for (
                            var i = 0; i < this.$hero.querySelector(".title--small").querySelectorAll(".word").length; i++
                        )
                            S
                            .a
                            .set(this.$hero.querySelector(".title--small").querySelectorAll(".word")[i], {
                                opacity: 1e-4,
                                y: "-100%"
                            });
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this
                            .enterAnimation
                            .to(this.$hero.children[1].children[0], {
                                scale: 1,
                                duration: 4,
                                ease: "expo.out"
                            }, 0);
                        for (
                            var r = 0; r < this.$hero.querySelector(".title--small").querySelectorAll(".word").length; r++
                        )
                            this
                            .enterAnimation
                            .to(this.$hero.querySelector(".title--small").querySelectorAll(".word")[r], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4,
                                ease: "expo.inOut"
                            }, 0 + .02 * r);
                        for (var n = 0; n < this.$experiencesCategories.length; n++)
                            this
                            .events
                            .add(this.$experiencesCategories[n], "mouseenter", (function(e, i, r) {
                                t.enterExperiences(e, r.dataset.index)
                            }), this),
                            this
                            .events
                            .add(this.$experiencesCategories[n], "mouseleave", (function(e, i, r) {
                                t.leaveExperiences(e, r.dataset.index)
                            }), this);
                        for (var o = 0; o < this.$destinationsCategories.length; o++)
                            this
                            .events
                            .add(this.$destinationsCategories[o], "mouseenter", (function(e, i, r) {
                                t.enterDestinations(e, r.dataset.index)
                            }), this),
                            this
                            .events
                            .add(this.$destinationsCategories[o], "mouseleave", (function(e, i, r) {
                                t.leaveDestinations(e, r.dataset.index)
                            }), this);
                        this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(e) {}
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [],
                            this.observerParallax = [],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "enterExperiences",
                    value: function(e, t) {
                        S
                            .a
                            .set(this.$experiencesImages[t], { display: "block" }),
                            S
                            .a
                            .to(this.$experiencesImages[t], {
                                opacity: 1,
                                duration: 1,
                                ease: "power2.out"
                            }),
                            S
                            .a
                            .to(this.$experiencesImages[t], {
                                scale: 1,
                                duration: 4,
                                ease: "expo.out"
                            })
                    }
                }, {
                    key: "leaveExperiences",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(this.$experiencesImages[t], {
                                opacity: 1e-4,
                                duration: 1,
                                ease: "power2.out"
                            }),
                            S
                            .a
                            .to(this.$experiencesImages[t], {
                                scale: 1.1,
                                duration: 4,
                                ease: "expo.out",
                                onComplete: function() {
                                    S
                                        .a
                                        .set(i.$experiencesImages[t], { display: "none" })
                                }
                            })
                    }
                }, {
                    key: "enterDestinations",
                    value: function(e, t) {
                        S
                            .a
                            .set(this.$destinationsImages[t], { display: "block" }),
                            S
                            .a
                            .to(this.$destinationsImages[t], {
                                opacity: 1,
                                duration: 1,
                                ease: "power2.out"
                            }),
                            S
                            .a
                            .to(this.$destinationsImages[t], {
                                scale: 1,
                                duration: 4,
                                ease: "expo.out"
                            })
                    }
                }, {
                    key: "leaveDestinations",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(this.$destinationsImages[t], {
                                opacity: 1e-4,
                                duration: 1,
                                ease: "power2.out"
                            }),
                            S
                            .a
                            .to(this.$destinationsImages[t], {
                                scale: 1.1,
                                duration: 4,
                                ease: "expo.out",
                                onComplete: function() {
                                    S
                                        .a
                                        .set(i.$destinationsImages[t], { display: "none" })
                                }
                            })
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        e.timeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .observerParallax[t]
                            .id,
                            e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .set(document.querySelector(".opener"), {
                                opacity: 1e-4,
                                onComplete: function() {
                                    S
                                        .a
                                        .set(document.querySelector(".opener"), { y: "-200%" })
                                }
                            }),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && bt(t.prototype, i),
                r && bt(t, r),
                o
        }(d);
        i(38);

        function kt(e) {
            return (
                kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Ct(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function qt(e, t) {
            return (qt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function At(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = Ot(e);
                if (t) {
                    var n = Ot(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return It(this, i)
            }
        }

        function It(e, t) {
            return !t || "object" !== kt(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function Ot(e) {
            return (
                Ot = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Et = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && qt(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = At(o);

                function o(e) {
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var t = Object.values(P.appData.experiences),
                        i = Object.values(P.appData.destinations);
                    return n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: mt.a,
                        templateData: {
                            data: P.appData.pages.collections,
                            experiences: t,
                            destinations: i,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$scrollbar = this
                                ._parent
                                .querySelector(".scrollbar"),
                                this.$header = document.getElementById("header"),
                                this.$hero = this
                                .$el
                                .querySelector(".collectionsFeatured__hero"),
                                this.$experiences = this
                                .$el
                                .querySelector(".collectionsFeatured__experiences"),
                                this.$destinations = this
                                .$el
                                .querySelector(".collectionsFeatured__destinations"),
                                this.$footer = this
                                .$el
                                .querySelector(".collectionsFeatured__footer"),
                                this.$destinationsInner = this
                                .$destinations
                                .querySelector(".destinations__inner"),
                                this.$destinationsInnerItems = this
                                .$destinations
                                .querySelectorAll(".destinations__inner__item"),
                                this.$destinationsInnerDots = this
                                .$destinations
                                .querySelectorAll(".destinations__inner__dots > .dots"),
                                this.$experiencesInner = this
                                .$experiences
                                .querySelector(".experiences__inner"),
                                this.$experiencesInnerItems = this
                                .$experiences
                                .querySelectorAll(".experiences__inner__item"),
                                this.$experiencesInnerDots = this
                                .$experiences
                                .querySelectorAll(".experiences__inner__dots > .dots")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            new Oe(this.$hero.querySelector(".title--small"), {
                                type: "lines, words",
                                linesClass: "line line--++",
                                wordsClass: "word word--++"
                            });
                            for (
                                var t = 0; t < this.$hero.querySelector(".title--small").querySelectorAll(".word").length; t++
                            )
                                S
                                .a
                                .set(this.$hero.querySelector(".title--small").querySelectorAll(".word")[t], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            this.enterAnimation = S
                                .a
                                .timeline({
                                    paused: !0,
                                    delay: 0
                                });
                            for (
                                var i = 0; i < this.$hero.querySelector(".title--small").querySelectorAll(".word").length; i++
                            )
                                this
                                .enterAnimation
                                .to(this.$hero.querySelector(".title--small").querySelectorAll(".word")[i], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: .1 + .02 * i
                                }, 0);
                            this.destinationsSliderInit(),
                                this.experiencesSliderInit(),
                                this.init()
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$destinations
                                        .querySelector(".label"),
                                    delay: 0,
                                    id: "label"
                                }, {
                                    node: this
                                        .$experiences
                                        .querySelector(".label"),
                                    delay: 0,
                                    id: "label"
                                }, {
                                    node: this
                                        .$experiences
                                        .querySelector(".title"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "destinationsSliderInit",
                        value: function() {
                            var e = this;
                            this.destinationsSlider = new ut({
                                    target: this.$destinationsInner,
                                    nodes: this.$destinationsInnerItems,
                                    enable: !0,
                                    onTouchEnd: function(t) {
                                        if (e.$destinationsInnerDots) {
                                            for (var i = 0; i < e.$destinationsInnerDots.length; i++)
                                                e
                                                .$destinationsInnerDots[i]
                                                .classList
                                                .remove("active");
                                            e
                                                .$destinationsInnerDots[t]
                                                .classList
                                                .add("active")
                                        }
                                    }
                                }),
                                this.$destinationsInnerDots[0] && this
                                .$destinationsInnerDots[0]
                                .classList
                                .add("active")
                        }
                    }, {
                        key: "experiencesSliderInit",
                        value: function() {
                            var e = this;
                            this.experiencesSlider = new ut({
                                    target: this.$experiencesInner,
                                    nodes: this.$experiencesInnerItems,
                                    enable: !0,
                                    onTouchEnd: function(t) {
                                        if (e.$experiencesInnerDots) {
                                            for (var i = 0; i < e.$experiencesInnerDots.length; i++)
                                                e
                                                .$experiencesInnerDots[i]
                                                .classList
                                                .remove("active");
                                            e
                                                .$experiencesInnerDots[t]
                                                .classList
                                                .add("active")
                                        }
                                    }
                                }),
                                this.$experiencesInnerDots[0] && this
                                .$experiencesInnerDots[0]
                                .classList
                                .add("active")
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "label":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".line").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".line")[i], {
                                            opacity: 1e-4,
                                            y: "50%"
                                        });
                                    break;
                                case "titleExtraLarge":
                                    new Oe(this.$footer.querySelector(".title--xlarge"), {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (
                                        var r = 0; r < this.$footer.querySelector(".title--xlarge").querySelectorAll(".word").length; r++
                                    )
                                        S
                                        .a
                                        .set(
                                            this.$footer.querySelector(".title--xlarge").querySelectorAll(".word")[r], {
                                                opacity: 1e-4,
                                                y: "100%"
                                            }
                                        )
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "label":
                                    for (var i = 0; i < t.querySelectorAll(".line").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".line")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1,
                                            ease: "expo.inOut",
                                            delay: .75 + .05 * i
                                        });
                                    break;
                                case "titleExtraLarge":
                                    for (
                                        var r = 0; r < this.$footer.querySelector(".title--xlarge").querySelectorAll(".word").length; r++
                                    )
                                        S
                                        .a
                                        .to(
                                            this.$footer.querySelector(".title--xlarge").querySelectorAll(".word")[r], {
                                                opacity: 1,
                                                y: "0%",
                                                duration: 1.6,
                                                ease: "expo.inOut",
                                                delay: .1 + .05 * r
                                            }
                                        )
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            e.timeline = S
                                .a
                                .timeline({
                                    paused: !0,
                                    ease: "none",
                                    defaults: {
                                        duration: 1,
                                        ease: "none"
                                    }
                                }),
                                this
                                .observerParallax[t]
                                .id,
                                e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize(),
                                this
                                .destinationsSlider
                                .resize(
                                    this.$destinationsInner.offsetWidth + 20,
                                    this.$destinationsInner.offsetHeight
                                ),
                                this
                                .experiencesSlider
                                .resize(
                                    this.$experiencesInner.offsetWidth + 20,
                                    this.$experiencesInner.offsetHeight
                                )
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && Ct(t.prototype, i),
                    r && Ct(t, r),
                    o
            }(d),
            Ft = i(7),
            Pt = i.n(Ft),
            jt = (i(39), i(8)),
            Tt = i.n(jt);
        i(40);

        function Lt(e) {
            return (
                Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Rt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Bt(e, t) {
            return (Bt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Vt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = zt(e);
                if (t) {
                    var n = zt(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Mt(this, i)
            }
        }

        function Mt(e, t) {
            return !t || "object" !== Lt(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function zt(e) {
            return (
                zt = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Nt = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Bt(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Vt(o);

            function o(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var i = e.type,
                    r = Object
                    .keys(P.appData.experiences)
                    .find((function(t) {
                        return P
                            .appData
                            .experiences[t]
                            .slug === e.experience
                    })),
                    s = P
                    .appData
                    .experiences[r],
                    l = s.items,
                    a = Object
                    .keys(P.appData.destinations)
                    .find((function(t) {
                        return P
                            .appData
                            .destinations[t]
                            .slug === e.destination
                    })),
                    u = P
                    .appData
                    .destinations[a],
                    c = u.items,
                    d = P.appData.collections,
                    h = c.filter((function(e) {
                        return l.includes(e)
                    }));
                return (t = n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: Tt.a,
                        templateData: {
                            type: i,
                            experience: s,
                            destination: u,
                            items: h,
                            collections: d,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        parent: document.querySelector(".archive"),
                        insertPosition: "FIRST",
                        initialRenderDelay: 0
                    })).archiveSvg = {
                        dashoffset: 0
                    },
                    t
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".collectionsArchive"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = document.getElementById("header"),
                            this.$mask = this
                            ._parent
                            .querySelector(".mask"),
                            this.$closer = this
                            ._parent
                            .querySelector(".closer"),
                            this.$archive = this
                            .$el
                            .querySelector(".collectionsArchive__archive")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this
                            .enterAnimation
                            .to(this.$archive, {
                                y: "0%",
                                duration: 1.6,
                                ease: "expo.inOut"
                            }, 0),
                            this
                            .enterAnimation
                            .to(this.$closer, {
                                opacity: 1,
                                duration: .8,
                                ease: "power2.out"
                            }, 1.2),
                            this
                            .events
                            .add(this.$mask, "click", (function(e, i, r) {
                                t.destroy(),
                                    t
                                    .router
                                    .instance
                                    .currentSection
                                    .hideSection()
                            })),
                            this
                            .events
                            .add(this.$closer, "click", (function(e, i, r) {
                                t.destroy(),
                                    t
                                    .router
                                    .instance
                                    .currentSection
                                    .hideSection()
                            }));
                        for (
                            var i = function(e) {
                                    t
                                        .events
                                        .add(t.$archive.querySelectorAll(".item a")[e], "mouseenter", (
                                            function(i, r, n) {
                                                t.enterItem(i, n, e)
                                            }
                                        )),
                                        t
                                        .events
                                        .add(t.$archive.querySelectorAll(".item a")[e], "mouseleave", (
                                            function(i, r, n) {
                                                t.leaveItem(i, n, e)
                                            }
                                        ))
                                },
                                r = 0; r < this.$archive.querySelectorAll(".item a").length; r++
                        )
                            i(r);
                        this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(e) {}
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [],
                            this.observerParallax = [],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "enterItem",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(t.querySelector(".image"), {
                                scaleX: .95,
                                scaleY: .92,
                                ease: "expo.out",
                                duration: .9
                            }),
                            S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scaleX: 1.05,
                                scaleY: 1.08,
                                ease: "expo.out",
                                duration: .9
                            }),
                            S
                            .a
                            .to(t.querySelector(".link").children[1], {
                                x: "100%",
                                duration: .9,
                                ease: "expo.out"
                            }),
                            S
                            .a
                            .to(this.archiveSvg, {
                                dashoffset: 1,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .querySelector(".link")
                                        .children[0]
                                        .children[1]
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * i.archiveSvg.dashoffset + "px"
                                }
                            })
                    }
                }, {
                    key: "leaveItem",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(t.querySelector(".image"), {
                                scale: 1,
                                ease: "expo.out",
                                duration: .9
                            }),
                            S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1,
                                ease: "expo.out",
                                duration: .9
                            }),
                            S
                            .a
                            .to(t.querySelector(".link").children[1], {
                                x: "0%",
                                duration: .9,
                                ease: "expo.out"
                            }),
                            S
                            .a
                            .to(this.archiveSvg, {
                                dashoffset: 0,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .querySelector(".link")
                                        .children[0]
                                        .children[1]
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * i.archiveSvg.dashoffset + "px"
                                }
                            })
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        e.timeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .observerParallax[t]
                            .id,
                            e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .to(this.$archive, {
                                y: "100%",
                                duration: .8,
                                ease: "expo.inOut",
                                delay: 0,
                                onComplete: e
                            })
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Rt(t.prototype, i),
                r && Rt(t, r),
                o
        }(d);

        function Ht(e) {
            return (
                Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Wt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Gt(e, t) {
            return (Gt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Ut(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = Xt(e);
                if (t) {
                    var n = Xt(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Yt(this, i)
            }
        }

        function Yt(e, t) {
            return !t || "object" !== Ht(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function Xt(e) {
            return (
                Xt = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Jt = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Gt(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Ut(o);

            function o(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var i = Object.keys(e)[0],
                    r = null,
                    s = null,
                    l = null,
                    a = null;
                return "experience" === i ?
                    (
                        document.body.classList.add("experience"),
                        r = "experiences",
                        s = Object.keys(P.appData.experiences).find((function(t) {
                            return P
                                .appData
                                .experiences[t]
                                .slug === e.experience
                        })),
                        l = P.appData.experiences[s],
                        a = P.appData.destinations
                    ) :
                    (
                        document.body.classList.add("destinations"),
                        r = "destinations",
                        s = Object.keys(P.appData.destinations).find((function(t) {
                            return P
                                .appData
                                .destinations[t]
                                .slug === e.destination
                        })),
                        l = P.appData.destinations[s],
                        a = P.appData.experiences
                    ),
                    (t = n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: Pt.a,
                        templateData: {
                            type: r,
                            content: l,
                            related: a,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom || "collectionsSingle" === P.pageFrom ?
                            1e3 : 0
                    })).archive = void 0 !== e.experience && void 0 !== e.destination,
                    t.archiveType = i,
                    t.archiveSvg = {
                        dashoffset: 0
                    },
                    e.experience && (t.experience = e.experience),
                    e.destination && (t.destination = e.destination),
                    t.clipPath = t.router.isLaptop ? {
                        left: 18.335,
                        right: 51.67
                    } : {
                        left: 13.335,
                        right: 46.685
                    },
                    t.isOpened = !1,
                    t.archiveComponent = null,
                    t
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$collectionsArchive = this
                            ._parent
                            .querySelector(".collectionsArchive"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$archive = this
                            ._parent
                            .querySelector(".archive"),
                            this.$blank = this
                            ._parent
                            .querySelector(".blank"),
                            this.$header = document.getElementById("header"),
                            this.$hero = this
                            .$el
                            .querySelector(".collectionsCategory__hero"),
                            this.$slider = this
                            .$el
                            .querySelector(".collectionsCategory__slider"),
                            this.$heroLabel = this
                            .$hero
                            .querySelector(".label"),
                            this.$heroTitle = this
                            .$hero
                            .querySelector(".title"),
                            this.$heroCountry = this
                            .$hero
                            .querySelector(".country"),
                            this.$heroText = this
                            .$hero
                            .querySelector(".text"),
                            this.$heroScroll = this
                            .$hero
                            .querySelector(".label--scroll"),
                            this.$heroLine = this
                            .$hero
                            .querySelector(".separator"),
                            this.$sliderExplanation = this
                            .$slider
                            .querySelector(".explanation"),
                            this.$sliderCategory = this
                            .$slider
                            .querySelector(".slider"),
                            this.$sliderCategoryInner = this
                            .$slider
                            .querySelector(".slider__inner"),
                            this.$sliderCategoryPrev = this
                            .$slider
                            .querySelector(".slider__prev"),
                            this.$sliderCategoryNext = this
                            .$slider
                            .querySelector(".slider__next"),
                            this.$sliderCategoryItems = this
                            .$slider
                            .querySelectorAll(".slider__inner__item")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        new Oe(this.$heroLabel, {
                                type: "lines",
                                linesClass: "line line--++"
                            }),
                            S
                            .a
                            .set(this.$heroLabel.querySelector(".line"), {
                                opacity: 1e-4,
                                y: "-100%"
                            }),
                            new Oe(this.$heroTitle, {
                                type: "lines, words, chars",
                                linesClass: "line line--++",
                                wordsClass: "word word--++",
                                charsClass: "char char--++"
                            });
                        for (var i = 0; i < this.$heroTitle.querySelectorAll(".word").length; i++)
                            S
                            .a
                            .set(this.$heroTitle.querySelectorAll(".word")[i], {
                                opacity: 1e-4,
                                y: "-100%"
                            });
                        if (this.$heroCountry) {
                            new Oe(this.$heroCountry, {
                                type: "lines",
                                linesClass: "line line--++"
                            });
                            for (var r = 0; r < this.$heroCountry.querySelectorAll(".line").length; r++)
                                S
                                .a
                                .set(this.$heroCountry.querySelectorAll(".line")[r], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                })
                        }
                        new Oe(this.$heroScroll, {
                                type: "lines",
                                linesClass: "line line--++"
                            }),
                            S
                            .a
                            .set(this.$heroScroll.querySelector(".line"), {
                                opacity: 1e-4,
                                y: "-100%"
                            }),
                            S
                            .a
                            .set(this.$heroLine, {
                                scaleY: 0,
                                transformOrigin: "bottom"
                            }),
                            this.$sliderCategory && S
                            .a
                            .set(this.$sliderCategory, { y: "50%" }),
                            this.$archive && this.$sliderCategory && S
                            .a
                            .set(this.$sliderCategory, { y: "0%" }),
                            this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this
                            .enterAnimation
                            .to(this.$heroLabel.querySelector(".line"), {
                                opacity: 1,
                                y: "0%",
                                duration: 1,
                                ease: "expo.inOut"
                            }, 0);
                        for (var n = 0; n < this.$heroTitle.querySelectorAll(".word").length; n++)
                            this
                            .enterAnimation
                            .to(this.$heroTitle.querySelectorAll(".word")[n], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4,
                                ease: "expo.inOut"
                            }, 0 + .02 * n);
                        if (this.$heroCountry)
                            for (var o = 0; o < this.$heroCountry.querySelectorAll(".line").length; o++)
                                this
                                .enterAnimation
                                .to(this.$heroCountry.querySelectorAll(".line")[o], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: .5 + .05 * o
                                }, 0);
                        if (
                            this.enterAnimation.to(this.$heroText, {
                                opacity: 1,
                                duration: 1,
                                ease: "expo.inOut"
                            }, .6),
                            this.enterAnimation.to(this.$heroLine, {
                                scaleY: 2,
                                y: 0,
                                duration: 1,
                                ease: "expo.inOut"
                            }, 0),
                            this.$sliderCategory && this.enterAnimation.to(this.$sliderCategory, {
                                y: "0%",
                                duration: 1,
                                ease: "expo.inOut"
                            }, 0),
                            this.enterAnimation.to(this.$heroScroll.querySelector(".line"), {
                                opacity: 1,
                                y: "0%",
                                duration: 1,
                                ease: "expo.inOut"
                            }, 0),
                            this.router.dragExplanation || S.a.set(this.$sliderExplanation, { display: "block" }),
                            this.events.add(window, "popstate", (function() {
                                t.onpopstate()
                            }), !1),
                            this.$sliderCategory
                        ) {
                            for (
                                var s = function(e) {
                                        t
                                            .events
                                            .add(t.$sliderCategory.querySelectorAll(".link")[e], "mouseenter", (
                                                function(i, r, n) {
                                                    t.enterLink(i, n, e)
                                                }
                                            )),
                                            t
                                            .events
                                            .add(t.$sliderCategory.querySelectorAll(".link")[e], "mouseleave", (
                                                function(i, r, n) {
                                                    t.leaveLink(i, n, e)
                                                }
                                            )),
                                            t
                                            .events
                                            .add(t.$sliderCategory.querySelectorAll(".link")[e], "click", (
                                                function(i, r, n) {
                                                    t.showSection(i, n, e)
                                                }
                                            ))
                                    },
                                    l = 0; l < this.$sliderCategory.querySelectorAll(".link").length; l++
                            )
                                s(l);
                            this
                                .$sliderCategoryPrev
                                .insertAdjacentHTML(
                                    "afterbegin",
                                    this.$sliderCategoryItems[this.$sliderCategoryItems.length - 1].outerHTML
                                ),
                                this
                                .$sliderCategoryNext
                                .insertAdjacentHTML("afterbegin", this.$sliderCategoryItems[0].outerHTML),
                                this
                                .$sliderCategoryPrev
                                .querySelector(".item")
                                .setAttribute("data-rel", ""),
                                this
                                .$sliderCategoryPrev
                                .querySelector(".item")
                                .setAttribute("data-index", ""),
                                this
                                .$sliderCategoryNext
                                .querySelector(".item")
                                .setAttribute("data-rel", ""),
                                this
                                .$sliderCategoryNext
                                .querySelector(".item")
                                .setAttribute("data-index", "")
                        }
                        this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        if (
                            this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !0,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener(), !e.router.dragExplanation && i < -window.innerHeight + .06 * window.innerWidth && e.showExplanation()
                                }
                            }),
                            this.$sliderCategory && this.$sliderCategoryItems.length > 3
                        ) {
                            this.observerDragSections = Object.values(
                                    this.$slider.querySelector(".slider__inner").children
                                ),
                                this.observerParallax = [];
                            for (
                                var t = 0; t < this.$slider.querySelectorAll(".slider__inner__item").length; t++
                            )
                                this
                                .observerParallax
                                .push({
                                    node: this
                                        .$slider
                                        .querySelectorAll(".slider__inner__item")[t],
                                    delay: 0,
                                    id: "item",
                                    mode: "horizontal"
                                });
                            this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$slider : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax
                                }),
                                this.superDragger = new We({
                                    el: this
                                        .$slider
                                        .querySelector(".slider"),
                                    inner: this
                                        .$slider
                                        .querySelector(".slider__inner"),
                                    snap: !0,
                                    inertia: 1e-4,
                                    onMouseEnter: function() {
                                        e
                                            .router
                                            .ui
                                            .openCursor()
                                    },
                                    onMouseLeave: function() {
                                        e
                                            .router
                                            .ui
                                            .openCursor()
                                    },
                                    onDragStart: function() {
                                        e
                                            .router
                                            .ui
                                            .reduceCursor()
                                    },
                                    onDragEnd: function() {
                                        e
                                            .router
                                            .ui
                                            .expandCursor()
                                    }
                                })
                        }
                    }
                }, {
                    key: "showExplanation",
                    value: function() {
                        var e = this;
                        this.router.dragExplanation = !0,
                            S
                            .a
                            .to(this.$sliderExplanation, {
                                opacity: 1,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            S
                            .a
                            .to(this.$sliderCategory, {
                                opacity: .2,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            S
                            .a
                            .delayedCall(2.4, (function() {
                                S
                                    .a
                                    .to(e.$sliderCategory, {
                                        opacity: 1,
                                        duration: .6,
                                        ease: "power2.out"
                                    }),
                                    S
                                    .a
                                    .to(e.$sliderExplanation, {
                                        opacity: 1e-4,
                                        duration: .6,
                                        ease: "power2.out",
                                        onComplete: function() {
                                            S
                                                .a
                                                .set(e.$sliderExplanation, { display: "none" })
                                        }
                                    })
                            }))
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        switch (e.timeline = S.a.timeline({
                            paused: !0,
                            ease: "none",
                            defaults: {
                                duration: 1,
                                ease: "none"
                            }
                        }), this.observerParallax[t].id) {
                            case "item":
                                e
                                    .timeline
                                    .fromTo(e.node.querySelector(".image"), {
                                        x: "-10vw"
                                    }, {
                                        x: "10vw"
                                    }, 0)
                        }
                        e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "onpopstate",
                    value: function(e) {
                        console.log("onpopstate"),
                            console.log(this.archiveComponent),
                            this.archiveComponent && (
                                console.log("pasa"),
                                this.archiveComponent.destroy(),
                                this.hideSection()
                            )
                    }
                }, {
                    key: "enterLink",
                    value: function(e, t, i) {
                        var r = this;
                        if (!this.isOpened) {
                            this.superDragger && this
                                .router
                                .ui
                                .openCursor(),
                                S
                                .a
                                .to(t.children[1], {
                                    x: "100%",
                                    duration: .9,
                                    ease: "expo.out"
                                }),
                                S
                                .a
                                .to(this.archiveSvg, {
                                    dashoffset: 1,
                                    duration: .9,
                                    ease: "expo.out",
                                    onUpdate: function() {
                                        t
                                            .children[0]
                                            .querySelector(".front")
                                            .style
                                            .strokeDashoffset = 1197 - 1197 * r.archiveSvg.dashoffset + "px"
                                    }
                                });
                            for (var n = 0; n < this.$sliderCategoryItems.length; n++)
                                n === i && S
                                .a
                                .to(this.$sliderCategoryItems[n].querySelector(".image"), {
                                    scale: 1.05,
                                    duration: .9,
                                    ease: "expo.out"
                                })
                        }
                    }
                }, {
                    key: "leaveLink",
                    value: function(e, t, i) {
                        var r = this;
                        if (!this.isOpened) {
                            this.superDragger && this
                                .router
                                .ui
                                .openCursor(),
                                S
                                .a
                                .to(t.children[1], {
                                    x: "0%",
                                    duration: .9,
                                    ease: "expo.out"
                                }),
                                S
                                .a
                                .to(this.archiveSvg, {
                                    dashoffset: 0,
                                    duration: .9,
                                    ease: "expo.out",
                                    onUpdate: function() {
                                        t
                                            .children[0]
                                            .querySelector(".front")
                                            .style
                                            .strokeDashoffset = 1197 - 1197 * r.archiveSvg.dashoffset + "px"
                                    }
                                });
                            for (var n = 0; n < this.$sliderCategoryItems.length; n++)
                                n === i && S
                                .a
                                .to(this.$sliderCategoryItems[n].querySelector(".image"), {
                                    scale: 1,
                                    duration: .9,
                                    ease: "expo.out"
                                })
                        }
                    }
                }, {
                    key: "showSection",
                    value: function(e, t, i) {
                        var r = this;
                        if (
                            e && e.preventDefault(),
                            this.isOpened = !0, !this.superDragger || !this.superDragger._drag.dragging
                        ) {
                            this.archiveIndex = i,
                                this.archiveOffset = Math.floor(
                                    this.$sliderCategoryItems[i].getBoundingClientRect().left
                                ),
                                this.archiveToCenter = window.innerWidth / 2 - window.innerWidth / 6 - this.archiveOffset,
                                this.archiveOffset < 20 || (this.archiveOffset, window.innerWidth),
                                this.superScroller._scroll.enable = !1,
                                this.superDragger && (this.superDragger._drag.enable = !1),
                                this.archivePath = window.location.pathname;
                            var n = t.getAttribute("href");
                            history.pushState({
                                    path: n
                                }, null, n),
                                S
                                .a
                                .to(this.$sliderCategoryItems[i].querySelector(".content"), {
                                    opacity: 1e-4,
                                    duration: .8,
                                    ease: "expo.inOut"
                                }),
                                S
                                .a
                                .to(this.$sliderCategory, {
                                    x: this.archiveToCenter,
                                    willChange: "transform",
                                    duration: .8,
                                    ease: "expo.inOut",
                                    clearProps: "will-change"
                                });
                            for (var o = 0; o < this.$sliderCategoryItems.length; o++)
                                o !== i && (S.a.to(this.$sliderCategoryItems[o], {
                                    opacity: .3,
                                    duration: .8,
                                    ease: "expo.out"
                                }), S.a.to(this.$sliderCategoryItems[o].querySelector(".content"), {
                                    opacity: 1e-4,
                                    duration: .8,
                                    ease: "expo.out"
                                }));
                            S
                                .a
                                .to(this.$sliderCategoryPrev, {
                                    opacity: .3,
                                    duration: .8,
                                    ease: "expo.out"
                                }),
                                S
                                .a
                                .to(this.$sliderCategoryNext, {
                                    opacity: .3,
                                    duration: .8,
                                    ease: "expo.out"
                                }),
                                this.superDragger && this
                                .router
                                .ui
                                .openCursor(),
                                S
                                .a
                                .set(this.$sliderCategoryItems[i].children[0], { zIndex: 1 }),
                                S
                                .a
                                .to(this.clipPath, {
                                    left: 0,
                                    right: this.router.isLaptop ?
                                        70 : 60,
                                    duration: .8,
                                    ease: "expo.inOut",
                                    delay: 0,
                                    onUpdate: function() {
                                        var e = "polygon(" + r.clipPath.left + "vw 0, " + r.clipPath.right +
                                            "vw 0%, " + r.clipPath.right + "vw 100%, " + r.clipPath.left + "vw 100%)";
                                        S
                                            .a
                                            .set(r.$sliderCategoryItems[i].children[0], {
                                                clipPath: e,
                                                webkitClipPath: e
                                            })
                                    }
                                }),
                                S
                                .a
                                .set(this.$archive, { display: "block" }),
                                S
                                .a
                                .set(this.$blank, { display: "block" }),
                                S
                                .a
                                .to(this.$sliderCategoryItems[i].querySelector(".image"), {
                                    y: .1 * -window.innerWidth,
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: .8
                                }),
                                S
                                .a
                                .to(this.$blank, {
                                    y: "0%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: .8
                                }),
                                S
                                .a
                                .delayedCall(.6, (function() {
                                    "experiences" === r._templateData.type ?
                                        r.renderArchive(n.split("/")[2], n.split("/")[3]) :
                                        r.renderArchive(n.split("/")[3], n.split("/")[2])
                                }))
                        }
                    }
                }, {
                    key: "hideSection",
                    value: function() {
                        var e = this,
                            t = this.archiveIndex;
                        S
                            .a
                            .to(this.$sliderCategoryItems[t].querySelector(".image"), {
                                y: 0,
                                scale: 1,
                                duration: .8,
                                ease: "expo.inOut",
                                delay: .2
                            }),
                            S
                            .a
                            .to(this.$blank, {
                                y: "100%",
                                duration: .8,
                                ease: "expo.inOut",
                                delay: .2,
                                onComplete: function() {
                                    S
                                        .a
                                        .set(e.$archive, { display: "none" }),
                                        S
                                        .a
                                        .set(e.$blank, { display: "none" }),
                                        S
                                        .a
                                        .to(e.$sliderCategoryItems[t].querySelector(".content"), {
                                            opacity: 1,
                                            duration: .8,
                                            ease: "expo.inOut"
                                        }),
                                        S
                                        .a
                                        .to(e.$sliderCategory, {
                                            x: 0,
                                            willChange: "transform",
                                            duration: .8,
                                            ease: "expo.inOut",
                                            clearProps: "will-change"
                                        });
                                    for (var i = 0; i < e.$sliderCategoryItems.length; i++)
                                        i !== t && (S.a.to(e.$sliderCategoryItems[i], {
                                            opacity: 1,
                                            duration: .8,
                                            ease: "expo.out"
                                        }), S.a.to(e.$sliderCategoryItems[i].querySelector(".content"), {
                                            opacity: 1,
                                            duration: .8,
                                            ease: "expo.out"
                                        }));
                                    S
                                        .a
                                        .to(e.$sliderCategoryPrev, {
                                            opacity: 1,
                                            duration: .8,
                                            ease: "expo.out"
                                        }),
                                        S
                                        .a
                                        .to(e.$sliderCategoryNext, {
                                            opacity: 1,
                                            duration: .8,
                                            ease: "expo.out"
                                        }),
                                        S
                                        .a
                                        .to(e.$sliderCategoryItems[t].querySelector(".link").children[1], {
                                            x: "0%",
                                            duration: .6,
                                            delay: .2,
                                            ease: "expo.out"
                                        }),
                                        S
                                        .a
                                        .to(e.archiveSvg, {
                                            dashoffset: 0,
                                            duration: .6,
                                            delay: .2,
                                            ease: "expo.out",
                                            onUpdate: function() {
                                                S
                                                    .a
                                                    .to(
                                                        e.$sliderCategoryItems[t].querySelector(".link").children[0].querySelector(".front"), {
                                                            strokeDashoffset: 1197 - 1197 * e.archiveSvg.dashoffset + "px"
                                                        }
                                                    )
                                            }
                                        }),
                                        S
                                        .a
                                        .to(e.clipPath, {
                                            left: e.router.isLaptop ?
                                                18.335 : 13.335,
                                            right: e.router.isLaptop ?
                                                51.67 : 46.685,
                                            duration: .8,
                                            ease: "expo.inOut",
                                            delay: 0,
                                            onUpdate: function() {
                                                var i = "polygon(" + e.clipPath.left + "vw 0, " + e.clipPath.right +
                                                    "vw 0%, " + e.clipPath.right + "vw 100%, " + e.clipPath.left + "vw 100%)";
                                                S
                                                    .a
                                                    .set(e.$sliderCategoryItems[t].children[0], {
                                                        clipPath: i,
                                                        webkitClipPath: i
                                                    })
                                            },
                                            onComplete: function() {
                                                S
                                                    .a
                                                    .set(e.$sliderCategoryItems[t].children[0], { zIndex: 0 }),
                                                    e.superScroller._scroll.enable = !0,
                                                    e.superDragger && (e.superDragger._drag.enable = !0)
                                            }
                                        })
                                }
                            }),
                            history.replaceState({
                                path: this.archivePath
                            }, null, this.archivePath),
                            this.isOpened = !1,
                            this.archiveComponent = null
                    }
                }, {
                    key: "renderArchive",
                    value: function(e, t) {
                        this.archiveComponent = new Nt({ experience: e, destination: t, type: this.archiveType }),
                            this
                            .archiveComponent
                            .render(),
                            this.archiveRendered = !0
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        var i = this;
                        this
                            .enterAnimation
                            .play(),
                            this.archive && (
                                this.superScroller.scrollAnimate(this.$sliderCategory.getBoundingClientRect().y, .8, "power4.inOut", !0),
                                S.a.delayedCall(.8, (function() {
                                    var e = "experience" === i.archiveType ?
                                        i.destination :
                                        i.experience,
                                        t = i
                                        .$sliderCategory
                                        .querySelector('.item[data-rel="' + e + '"]'),
                                        r = new Event("mouseenter"),
                                        n = new Event("click");
                                    t
                                        .querySelector(".link")
                                        .dispatchEvent(r),
                                        t
                                        .querySelector(".link")
                                        .dispatchEvent(n)
                                }))
                            ),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Wt(t.prototype, i),
                r && Wt(t, r),
                o
        }(d);
        i(41),
            i(42);

        function Zt(e) {
            return (
                Zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Kt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Qt(e, t) {
            return (Qt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function ei(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = ii(e);
                if (t) {
                    var n = ii(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return ti(this, i)
            }
        }

        function ti(e, t) {
            return !t || "object" !== Zt(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function ii(e) {
            return (
                ii = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var ri = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Qt(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = ei(o);

            function o(e) {
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var t = e.type,
                    i = Object
                    .keys(P.appData.experiences)
                    .find((function(t) {
                        return P
                            .appData
                            .experiences[t]
                            .slug === e.experience
                    })),
                    r = P
                    .appData
                    .experiences[i],
                    s = r.items,
                    l = Object
                    .keys(P.appData.destinations)
                    .find((function(t) {
                        return P
                            .appData
                            .destinations[t]
                            .slug === e.destination
                    })),
                    a = P
                    .appData
                    .destinations[l],
                    u = a.items,
                    c = P.appData.collections,
                    d = u.filter((function(e) {
                        return s.includes(e)
                    }));
                return n.call(this, {
                    eventHub: j,
                    store: P,
                    router: Rr,
                    templateFunction: Tt.a,
                    templateData: {
                        type: t,
                        experience: r,
                        destination: a,
                        items: d,
                        collections: c,
                        options: P.appData.options,
                        footer: Xe.a
                    },
                    parent: document.querySelector(".archive"),
                    insertPosition: "FIRST"
                })
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".collectionsArchive"),
                            this.$closer = this
                            ._parent
                            .querySelector(".closer"),
                            this.$archive = this
                            .$el
                            .querySelector(".collectionsArchive__archive"),
                            this.$archiveInner = this
                            .$archive
                            .querySelector(".content__inner"),
                            this.$archiveInnerItems = this
                            .$archive
                            .querySelectorAll(".content__item"),
                            this.$archiveInnerDots = this
                            .$archive
                            .querySelectorAll(".dots > .dots__item")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this
                            .enterAnimation
                            .to(this.$archive, {
                                x: "0%",
                                duration: .8,
                                ease: "expo.Out"
                            }, 0),
                            this
                            .enterAnimation
                            .to(this.$closer, {
                                opacity: 1,
                                duration: .6,
                                ease: "power2.out"
                            }, .6),
                            this
                            .events
                            .add(this.$closer, "click", (function(e, i, r) {
                                t
                                    .router
                                    .instance
                                    .currentSection
                                    .hideSection(),
                                    S
                                    .a
                                    .delayedCall(1, (function() {
                                        t.destroy()
                                    }))
                            })),
                            this.archiveSliderInit(),
                            this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [],
                            this.observerParallax = [],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "archiveSliderInit",
                    value: function() {
                        var e = this;
                        this.$archiveInnerItems.length > 1 ?
                            (
                                this.$archiveInner.classList.add("initialized"),
                                this.archiveSlider = new ut({
                                    target: this.$archiveInner,
                                    nodes: this.$archiveInnerItems,
                                    enable: !0,
                                    onTouchEnd: function(t) {
                                        if (e.$archiveInnerDots) {
                                            for (var i = 0; i < e.$archiveInnerDots.length; i++)
                                                e
                                                .$archiveInnerDots[i]
                                                .classList
                                                .remove("active");
                                            e
                                                .$archiveInnerDots[t]
                                                .classList
                                                .add("active")
                                        }
                                    }
                                }),
                                this.$archiveInnerDots[0] && this.$archiveInnerDots[0].classList.add("active")
                            ) :
                            (
                                this.$archiveInner.classList.remove("initialized"),
                                S.a.set(this.$archiveInner.querySelector(".dots"), { display: "none" })
                            )
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        this
                            .observerItems[e]
                            .id
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        e.timeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .observerParallax[t]
                            .id,
                            e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superObserver && this
                            .superObserver
                            .resize(),
                            this.$archiveInnerItems.length > 1 && this
                            .archiveSlider
                            .resize(this.$archiveInner.offsetWidth + 20, this.$archiveInner.offsetHeight)
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {}
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Kt(t.prototype, i),
                r && Kt(t, r),
                o
        }(d);

        function ni(e) {
            return (
                ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function oi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function si(e, t) {
            return (si = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function li(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = ui(e);
                if (t) {
                    var n = ui(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return ai(this, i)
            }
        }

        function ai(e, t) {
            return !t || "object" !== ni(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function ui(e) {
            return (
                ui = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var ci = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && si(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = li(o);

                function o(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var i = Object.keys(e)[0],
                        r = null,
                        s = null,
                        l = null,
                        a = null;
                    return "experience" === i ?
                        (
                            document.body.classList.add("experience"),
                            r = "experiences",
                            s = Object.keys(P.appData.experiences).find((function(t) {
                                return P
                                    .appData
                                    .experiences[t]
                                    .slug === e.experience
                            })),
                            l = P.appData.experiences[s],
                            a = P.appData.destinations
                        ) :
                        (
                            document.body.classList.add("destinations"),
                            r = "destinations",
                            s = Object.keys(P.appData.destinations).find((function(t) {
                                return P
                                    .appData
                                    .destinations[t]
                                    .slug === e.destination
                            })),
                            l = P.appData.destinations[s],
                            a = P.appData.experiences
                        ),
                        (t = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: Pt.a,
                            templateData: {
                                type: r,
                                content: l,
                                related: a,
                                options: P.appData.options,
                                footer: Xe.a
                            },
                            insertPosition: "FIRST",
                            initialRenderDelay: null === P.pageFrom || "collectionsSingle" === P.pageFrom ?
                                1e3 : 0
                        })).archive = void 0 !== e.experience && void 0 !== e.destination,
                        t.archiveType = i,
                        e.experience && (t.experience = e.experience),
                        e.destination && (t.destination = e.destination),
                        t
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$content = document.getElementById("content"),
                                this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$collectionsArchive = this
                                ._parent
                                .querySelector(".collectionsArchive"),
                                this.$archive = this
                                ._parent
                                .querySelector(".archive"),
                                this.$header = document.getElementById("header"),
                                this.$hero = this
                                .$el
                                .querySelector(".collectionsCategory__hero"),
                                this.$categories = this
                                .$el
                                .querySelector(".collectionsCategory__categories"),
                                this.$footer = this
                                .$el
                                .querySelector(".collectionsCategory__footer"),
                                this.$heroLabel = this
                                .$hero
                                .querySelector(".label"),
                                this.$heroTitle = this
                                .$hero
                                .querySelector(".title"),
                                this.$heroCountry = this
                                .$hero
                                .querySelector(".country"),
                                this.$heroText = this
                                .$hero
                                .querySelector(".text"),
                                this.$heroLine = this
                                .$hero
                                .querySelector(".separator"),
                                this.$sliderCategory = this
                                .$categories
                                .querySelector(".categories"),
                                this.$sliderCategoryItems = this
                                .$categories
                                .querySelectorAll(".categories__item")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            new Oe(this.$heroLabel, {
                                    type: "lines",
                                    linesClass: "line line--++"
                                }),
                                S
                                .a
                                .set(this.$heroLabel.querySelector(".line"), {
                                    opacity: 1e-4,
                                    y: "-100%"
                                }),
                                new Oe(this.$heroTitle, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                            for (var i = 0; i < this.$heroTitle.querySelectorAll(".word").length; i++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".word")[i], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            if (this.$heroCountry) {
                                new Oe(this.$heroCountry, {
                                    type: "lines",
                                    linesClass: "line line--++"
                                });
                                for (var r = 0; r < this.$heroCountry.querySelectorAll(".line").length; r++)
                                    S
                                    .a
                                    .set(this.$heroCountry.querySelectorAll(".line")[r], {
                                        opacity: 1e-4,
                                        y: "-100%"
                                    })
                            }
                            if (S.a.set(this.$heroLine, {
                                    scaleY: 0,
                                    transformOrigin: "bottom"
                                }), this.$sliderCategoryItems)
                                for (var n = 0; n < this.$sliderCategoryItems.length; n++)
                                    S
                                    .a
                                    .set(this.$sliderCategoryItems[n], { y: "100%" });
                            this.enterAnimation = S
                                .a
                                .timeline({
                                    paused: !0,
                                    delay: 0
                                }),
                                this
                                .enterAnimation
                                .to(this.$heroLabel.querySelector(".line"), {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 1,
                                    ease: "expo.inOut"
                                }, 0);
                            for (var o = 0; o < this.$heroTitle.querySelectorAll(".word").length; o++)
                                this
                                .enterAnimation
                                .to(this.$heroTitle.querySelectorAll(".word")[o], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 1,
                                    ease: "expo.inOut",
                                    delay: .5 + .05 * o
                                }, 0);
                            if (this.$heroCountry)
                                for (var s = 0; s < this.$heroCountry.querySelectorAll(".line").length; s++)
                                    this
                                    .enterAnimation
                                    .to(this.$heroCountry.querySelectorAll(".line")[s], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1,
                                        ease: "expo.inOut",
                                        delay: .5 + .05 * s
                                    }, 0);
                            if (this.enterAnimation.to(this.$heroText, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "expo.inOut"
                                }, .6), this.enterAnimation.to(this.$heroLine, {
                                    scaleY: 1,
                                    y: 0,
                                    duration: 1,
                                    ease: "expo.inOut"
                                }, 1), this.$sliderCategoryItems)
                                for (var l = 0; l < this.$sliderCategoryItems.length; l++)
                                    this
                                    .enterAnimation
                                    .to(this.$sliderCategoryItems[l], {
                                        y: "0%",
                                        duration: 1.6,
                                        ease: "expo.inOut",
                                        delay: .05 + .05 * l
                                    }, 0);
                            if (window.addEventListener("popstate", (function() {
                                    t.onpopstate()
                                }), !1), this.$sliderCategoryItems)
                                for (var a = function(e) {
                                        t
                                            .events
                                            .add(t.$sliderCategoryItems[e], "click", (function(i, r, n) {
                                                t.clickedItem = e,
                                                    t.showSection(i, r, n)
                                            }))
                                    }, u = 0; u < this.$sliderCategoryItems.length; u++)
                                    a(u);
                            this.init()
                        }
                    }, {
                        key: "onpopstate",
                        value: function(e) {
                            var t = this;
                            this.archiveComponent && this
                                .archiveComponent
                                .destroy(),
                                S
                                .a
                                .delayedCall(.8, (function() {
                                    t.hideSection()
                                }))
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$footer
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[i], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        })
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1.6,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * i
                                        })
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            e.timeline = S
                                .a
                                .timeline({
                                    paused: !0,
                                    ease: "none",
                                    defaults: {
                                        duration: 1,
                                        ease: "none"
                                    }
                                }),
                                this
                                .observerParallax[t]
                                .id,
                                e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "showSection",
                        value: function(e, t, i) {
                            var r = this;
                            e && e.preventDefault(),
                                document
                                .getElementById("content")
                                .classList
                                .add("noscroll"),
                                this.archivePath = window.location.pathname;
                            var n = i
                                .querySelector("a")
                                .getAttribute("href");
                            history.pushState({
                                    path: n
                                }, null, n),
                                this.$archiveCurrent = this.$sliderCategoryItems[this.clickedItem],
                                S
                                .a
                                .to(this.$sliderCategoryItems[this.clickedItem].querySelector(".content"), {
                                    opacity: 1e-4,
                                    duration: .8,
                                    ease: "expo.inOut"
                                });
                            var o = this.$categories.offsetTop + this.$archiveCurrent.offsetTop;
                            S
                                .a
                                .to(this.$archiveCurrent, {
                                    height: window.innerHeight,
                                    opacity: .3,
                                    duration: .8,
                                    ease: "expo.inOut"
                                }),
                                S
                                .a
                                .to(this.$content, {
                                    scrollTop: o,
                                    duration: .8,
                                    ease: "expo.inOut"
                                }),
                                S
                                .a
                                .set(this.$archiveCurrent, { zIndex: "1" }),
                                S
                                .a
                                .delayedCall(.8, (function() {
                                    S
                                        .a
                                        .set(r.$archive, {
                                            display: "block",
                                            onComplete: function() {
                                                S
                                                    .a
                                                    .to(r.$archive, {
                                                        x: "0%",
                                                        duration: .6,
                                                        ease: "power2.out"
                                                    })
                                            }
                                        })
                                })),
                                S
                                .a
                                .delayedCall(.8, (function() {
                                    "experiences" === r._templateData.type ?
                                        r.renderArchive(n.split("/")[2], n.split("/")[3]) :
                                        r.renderArchive(n.split("/")[3], n.split("/")[2])
                                }))
                        }
                    }, {
                        key: "hideSection",
                        value: function() {
                            var e = this;
                            history.replaceState({
                                    path: this.archivePath
                                }, null, this.archivePath),
                                S
                                .a
                                .to(this.$archive, {
                                    x: "100%",
                                    duration: .6,
                                    ease: "power2.out",
                                    delay: .2,
                                    onComplete: function() {
                                        S
                                            .a
                                            .set(e.$archive, { display: "none" }),
                                            S
                                            .a
                                            .set(e.$archiveCurrent, { zIndex: "initial" })
                                    }
                                }),
                                this.$archiveCurrent && S
                                .a
                                .to(this.$archiveCurrent, {
                                    height: "75vw",
                                    opacity: 1,
                                    duration: .8,
                                    ease: "expo.inOut",
                                    delay: .6,
                                    onComplete: function() {
                                        S
                                            .a
                                            .to(e.$archiveCurrent.querySelector(".content"), {
                                                opacity: 1,
                                                duration: .4,
                                                ease: "expo.inOut"
                                            }),
                                            document
                                            .getElementById("content")
                                            .classList
                                            .remove("noscroll")
                                    }
                                })
                        }
                    }, {
                        key: "renderArchive",
                        value: function(e, t) {
                            this.archiveComponent = new ri({ experience: e, destination: t, type: this.archiveType }),
                                this
                                .archiveComponent
                                .render(),
                                this.archiveRendered = !0
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize()
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            document
                                .getElementById("content")
                                .classList
                                .remove("noscroll"),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && oi(t.prototype, i),
                    r && oi(t, r),
                    o
            }(d),
            di = i(9),
            hi = i.n(di);
        i(43);

        function vi(e) {
            return (
                vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function _i(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function pi(e, t) {
            return (pi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function yi(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = mi(e);
                if (t) {
                    var n = mi(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return fi(this, i)
            }
        }

        function fi(e, t) {
            return !t || "object" !== vi(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function mi(e) {
            return (
                mi = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var gi = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && pi(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = yi(o);

            function o(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var i = Object
                    .keys(P.appData.collections)
                    .find((function(t) {
                        return P
                            .appData
                            .collections[t]
                            .slug === e.collection
                    })),
                    r = P.appData.collections;
                return (t = n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: hi.a,
                        templateData: {
                            collection: r[i],
                            allCollections: r,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })).archiveSvg = {
                        dashoffset: 0
                    },
                    t
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = document.getElementById("header"),
                            this.$hero = this
                            .$el
                            .querySelector(".collectionsSingle__hero"),
                            this.$content = this
                            .$el
                            .querySelector(".collectionsSingle__content"),
                            this.$related = this
                            .$el
                            .querySelector(".collectionsSingle__related"),
                            this.$search = this
                            .$el
                            .querySelector(".collectionsSingle__search"),
                            this.$contentHeader = this
                            .$content
                            .querySelector(".content__header"),
                            this.$contentCover = this
                            .$content
                            .querySelector(".content__cover")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this
                            .enterAnimation
                            .to(this.$hero.children[0].children[0], {
                                scale: 1,
                                duration: 4,
                                ease: "expo.out"
                            }, 0),
                            this
                            .enterAnimation
                            .fromTo(this.$contentCover, {
                                y: "-10%"
                            }, {
                                y: "0%",
                                duration: 1.5,
                                ease: "expo.out"
                            }, .5),
                            this
                            .enterAnimation
                            .to(this.$contentHeader, {
                                opacity: 1,
                                duration: 1,
                                ease: "power2.out"
                            }, .5);
                        for (
                            var i = function(e) {
                                    t
                                        .events
                                        .add(t.$related.querySelectorAll(".item")[e], "mouseenter", (
                                            function(i, r, n) {
                                                t.enterItem(i, n, e)
                                            }
                                        )),
                                        t
                                        .events
                                        .add(t.$related.querySelectorAll(".item")[e], "mouseleave", (
                                            function(i, r, n) {
                                                t.leaveItem(i, n, e)
                                            }
                                        ))
                                },
                                r = 0; r < this.$related.querySelectorAll(".item").length; r++
                        )
                            i(r);
                        this
                            .$el
                            .querySelector(".button--prev") && this
                            .events
                            .add(this.$el.querySelector(".button--prev"), "click", (function() {
                                window
                                    .history
                                    .go(-1)
                            }), this),
                            this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        S
                            .a
                            .delayedCall(1, (function() {
                                e.heroSticky()
                            })),
                            this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener(),
                                        e.contentPosition && e.heroStickyRaf(i)
                                }
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$search
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [{
                                node: this
                                    .$contentCover
                                    .querySelector(".image"),
                                delay: 0,
                                id: "minimage"
                            }],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "enterItem",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1.05,
                                ease: "expo.out",
                                duration: .9
                            }),
                            t.querySelector(".link") && (S.a.to(t.querySelector(".link").children[1], {
                                x: "100%",
                                duration: .9,
                                ease: "expo.out"
                            }), S.a.to(this.archiveSvg, {
                                dashoffset: 1,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .querySelector(".link")
                                        .children[0]
                                        .children[1]
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * i.archiveSvg.dashoffset + "px"
                                }
                            }))
                    }
                }, {
                    key: "leaveItem",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1,
                                ease: "expo.out",
                                duration: .9
                            }),
                            t.querySelector(".link") && (S.a.to(t.querySelector(".link").children[1], {
                                x: "0%",
                                duration: .9,
                                ease: "expo.out"
                            }), S.a.to(this.archiveSvg, {
                                dashoffset: 0,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .querySelector(".link")
                                        .children[0]
                                        .children[1]
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * i.archiveSvg.dashoffset + "px"
                                }
                            }))
                    }
                }, {
                    key: "heroSticky",
                    value: function(e) {
                        var t = this
                            .$el
                            .getBoundingClientRect();
                        this.contentPosition = {
                                start: t.top,
                                end: this
                                    .$related
                                    .querySelector(".related")
                                    .getBoundingClientRect()
                                    .y
                            },
                            this.contentPositionTimeline = S
                            .a
                            .timeline({
                                paused: !0,
                                defaults: {
                                    duration: 2,
                                    ease: "none"
                                }
                            }),
                            this
                            .contentPositionTimeline
                            .to(this.$hero.children[0].children[0], {
                                scale: 1.1
                            }, 0)
                    }
                }, {
                    key: "heroStickyRaf",
                    value: function(e) {
                        if (e < -this.contentPosition.start && e > -this.contentPosition.end) {
                            var t = e + this.contentPosition.start,
                                i = -t / (this.contentPosition.end - this.contentPosition.start);
                            this
                                .contentPositionTimeline
                                .progress(i),
                                this.$hero.style.transform = "translateY(" + -t + "px)"
                        }
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.6,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        switch (e.timeline = S.a.timeline({
                            paused: !0,
                            ease: "none",
                            defaults: {
                                duration: 1,
                                ease: "none"
                            }
                        }), this.observerParallax[t].id) {
                            case "minimage":
                                e
                                    .timeline
                                    .fromTo(e.node.querySelector(".image__bg"), {
                                        y: "4vw"
                                    }, {
                                        y: "-2vw"
                                    }, 0)
                        }
                        e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && _i(t.prototype, i),
                r && _i(t, r),
                o
        }(d);
        i(44);

        function bi(e) {
            return (
                bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Di(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Si(e, t) {
            return (Si = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function $i(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = xi(e);
                if (t) {
                    var n = xi(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return wi(this, i)
            }
        }

        function wi(e, t) {
            return !t || "object" !== bi(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function xi(e) {
            return (
                xi = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var ki = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && Si(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = $i(o);

                function o(e) {
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var t = Object
                        .keys(P.appData.collections)
                        .find((function(t) {
                            return P
                                .appData
                                .collections[t]
                                .slug === e.collection
                        })),
                        i = P.appData.collections;
                    return n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: hi.a,
                        templateData: {
                            collection: i[t],
                            allCollections: i,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$header = document.getElementById("header"),
                                this.$hero = this
                                .$el
                                .querySelector(".collectionsSingle__hero"),
                                this.$content = this
                                .$el
                                .querySelector(".collectionsSingle__content"),
                                this.$related = this
                                .$el
                                .querySelector(".collectionsSingle__related"),
                                this.$search = this
                                .$el
                                .querySelector(".collectionsSingle__search"),
                                this.$footer = this
                                .$el
                                .querySelector(".collectionsSingle__footer"),
                                this.$contentHeader = this
                                .$content
                                .querySelector(".content__header"),
                                this.$contentCover = this
                                .$content
                                .querySelector(".content__cover"),
                                this.$contentFlexible = this
                                .$content
                                .querySelector(".content__flexible"),
                                this.$related = this
                                .$related
                                .querySelector(".slider__inner"),
                                this.$relatedItems = this
                                .$related
                                .querySelectorAll(".slider__inner__item")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            S
                                .a
                                .set(this.$contentHeader, { opacity: 1e-4 }),
                                S
                                .a
                                .set(this.$contentCover, { y: "100%" });
                            var t = this.$contentHeader.offsetHeight + this
                                .$contentHeader
                                .getBoundingClientRect()
                                .top;
                            this.$hero.style.height = t + "px",
                                this.enterAnimation = S
                                .a
                                .timeline({
                                    paused: !0,
                                    delay: 0
                                }),
                                this
                                .enterAnimation
                                .to(this.$hero.children[0].children[0], {
                                    scale: 1,
                                    duration: 4,
                                    ease: "power4.inOut"
                                }, 0),
                                this
                                .enterAnimation
                                .to(this.$contentHeader, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "power2.out"
                                }, 1.5),
                                this
                                .enterAnimation
                                .to(this.$contentCover, {
                                    y: "0%",
                                    duration: 1.5,
                                    ease: "power4.inOut"
                                }, 1.5),
                                this.relatedSliderInit(),
                                this.init(),
                                this
                                .$el
                                .querySelector(".button--prev") && this
                                .events
                                .add(this.$el.querySelector(".button--prev"), "click", (function() {
                                    window
                                        .history
                                        .go(-1)
                                }), this)
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$content
                                        .querySelector(".title--small"),
                                    delay: 0,
                                    id: "titleSmall"
                                }, {
                                    node: this
                                        .$content
                                        .querySelector(".intro"),
                                    delay: 0,
                                    id: "intro"
                                }, {
                                    node: this
                                        .$search
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }, {
                                    node: this
                                        .$footer
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "relatedSliderInit",
                        value: function() {
                            this.relatedSlider = new ut({
                                target: this.$related,
                                nodes: this.$relatedItems,
                                enable: !0
                            })
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[i], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        })
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1.6,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * i
                                        })
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            e.timeline = S
                                .a
                                .timeline({
                                    paused: !0,
                                    ease: "none",
                                    defaults: {
                                        duration: 1,
                                        ease: "none"
                                    }
                                }),
                                this
                                .observerParallax[t]
                                .id,
                                e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize(),
                                this
                                .relatedSlider
                                .resize(this.$related.offsetWidth + 20, this.$related.offsetHeight)
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && Di(t.prototype, i),
                    r && Di(t, r),
                    o
            }(d),
            Ci = i(10),
            qi = i.n(Ci);
        i(45);

        function Ai(e) {
            return (
                Ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Ii(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Oi(e, t) {
            return (Oi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Ei(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = Pi(e);
                if (t) {
                    var n = Pi(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Fi(this, i)
            }
        }

        function Fi(e, t) {
            return !t || "object" !== Ai(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function Pi(e) {
            return (
                Pi = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var ji = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Oi(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Ei(o);

            function o(e) {
                return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: qi.a,
                        templateData: {
                            data: P.appData.pages.curators,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$body = document.querySelector("body"),
                            this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = document.getElementById("header"),
                            this.$hero = this
                            .$el
                            .querySelector(".curators__hero"),
                            this.$team = this
                            .$el
                            .querySelector(".curators__team"),
                            this.$footer = this
                            .$el
                            .querySelector(".curators__footer"),
                            this.$features = this
                            .$hero
                            .querySelector(".features"),
                            this.$featuresItems = this
                            .$features
                            .querySelectorAll(".features__item"),
                            this.$teamFeatured = this
                            .$team
                            .querySelector(".team__featured"),
                            this.$teamList = this
                            .$team
                            .querySelector(".team__list"),
                            this.$teamListSlider = this
                            .$teamList
                            .querySelector(".slider__inner"),
                            this.$teamListSliderItems = this
                            .$teamList
                            .querySelectorAll(".slider__inner__item"),
                            this.$teamAmbassadors = this
                            .$team
                            .querySelector(".team__ambassadors"),
                            this.$teamAmbassadorsItems = this
                            .$teamAmbassadors
                            .querySelectorAll(".slider__inner__item"),
                            this.$teamAmbassadorsVideo = this
                            .$teamAmbassadors
                            .querySelectorAll(".player")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        new Oe(this.$hero.querySelector(".title--xlarge"), {
                            type: "lines, words",
                            linesClass: "line line--++",
                            wordsClass: "word word--++"
                        });
                        for (
                            var i = 0; i < this.$hero.querySelector(".title--xlarge").querySelectorAll(".word").length; i++
                        )
                            S
                            .a
                            .set(this.$hero.querySelector(".title--xlarge").querySelectorAll(".word")[i], {
                                opacity: 1e-4,
                                y: "-100%"
                            });
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            });
                        for (
                            var r = 0; r < this.$hero.querySelector(".title--xlarge").querySelectorAll(".word").length; r++
                        )
                            this
                            .enterAnimation
                            .to(this.$hero.querySelector(".title--xlarge").querySelectorAll(".word")[r], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4,
                                ease: "expo.inOut"
                            }, 0 + .05 * r);
                        for (var n = function(e) {
                                t
                                    .events
                                    .add(
                                        t.$teamListSlider.querySelectorAll(".member.member--visible .anchor")[e],
                                        "click",
                                        (
                                            function(i, r, n) {
                                                t
                                                    .router
                                                    .ui
                                                    .openLightbox(
                                                        "member",
                                                        t.$teamListSlider.querySelectorAll(".member.member--lightbox")[e]
                                                    )
                                            }
                                        ),
                                        t
                                    ),
                                    t
                                    .events
                                    .add(
                                        t.$teamListSlider.querySelectorAll(".member.member--visible .anchor")[e],
                                        "mouseenter",
                                        (
                                            function(e, i, r) {
                                                t.linkEnter(e, i, r)
                                            }
                                        ),
                                        t
                                    ),
                                    t
                                    .events
                                    .add(
                                        t.$teamListSlider.querySelectorAll(".member.member--visible .anchor")[e],
                                        "mouseleave",
                                        (
                                            function(e, i, r) {
                                                t.linkLeave(e, i, r)
                                            }
                                        ),
                                        t
                                    )
                            }, o = 0; o < this.$teamListSlider.querySelectorAll(
                                ".member.member--visible .anchor"
                            ).length; o++)
                            n(o);
                        for (var s = function(e) {
                                t
                                    .events
                                    .add(
                                        t.$teamAmbassadorsItems[e].querySelector(".video__sensor"),
                                        "click",
                                        (function(i, r, n) {
                                            t
                                                .router
                                                .ui
                                                .openLightbox(
                                                    "video",
                                                    t.$teamAmbassadorsItems[e].querySelector(".video--lightbox")
                                                )
                                        }),
                                        t
                                    ),
                                    t
                                    .events
                                    .add(
                                        t.$teamAmbassadorsItems[e].querySelector(".video__sensor"),
                                        "mousemove",
                                        (function(e, i, r) {
                                            t.videoEnter(e, i, r)
                                        }),
                                        t
                                    ),
                                    t
                                    .events
                                    .add(
                                        t.$teamAmbassadorsItems[e].querySelector(".video__sensor"),
                                        "mouseleave",
                                        (function(e, i, r) {
                                            t.videoLeave(e, i, r)
                                        }),
                                        t
                                    )
                            }, l = 0; l < this.$teamAmbassadorsItems.length; l++)
                            s(l);
                        this.teamSliderInit(),
                            this.ambassadorsSliderInit(),
                            this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener()
                                }
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$featuresItems[0]
                                    .querySelector(".title--large"),
                                delay: 0,
                                id: "featuresTitle"
                            }, {
                                node: this
                                    .$featuresItems[1]
                                    .querySelector(".title--large"),
                                delay: 0,
                                id: "featuresTitle"
                            }, {
                                node: this
                                    .$featuresItems[2]
                                    .querySelector(".title--large"),
                                delay: 0,
                                id: "featuresTitle"
                            }, {
                                node: this
                                    .$team
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }, {
                                node: this
                                    .$footer
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [{
                                node: this.$hero,
                                delay: 0,
                                id: "hero"
                            }, {
                                node: this
                                    .$hero
                                    .querySelectorAll(".image")[0],
                                delay: 0,
                                id: "heroImage"
                            }, {
                                node: this
                                    .$hero
                                    .querySelectorAll(".image")[1],
                                delay: 0,
                                id: "heroImage"
                            }, {
                                node: this
                                    .$hero
                                    .querySelectorAll(".image")[2],
                                delay: 0,
                                id: "heroImage"
                            }, {
                                node: this.$team,
                                delay: 0,
                                id: "team"
                            }, {
                                node: this
                                    .$teamFeatured
                                    .querySelector(".container"),
                                delay: 0,
                                id: "teamFeatured"
                            }, {
                                node: this.$teamList,
                                delay: 0,
                                id: "teamList"
                            }, {
                                node: this.$footer,
                                delay: 0,
                                id: "footer"
                            }];
                        for (
                            var t = 0; t < this.$teamList.querySelectorAll(".slider__inner__item").length; t++
                        )
                            this
                            .observerParallax
                            .push({
                                node: this
                                    .$teamList
                                    .querySelectorAll(".slider__inner__item")[t],
                                delay: 0,
                                id: "above",
                                mode: "horizontal"
                            });
                        this.superObserver = new Me({
                            currentSection: this,
                            observer: !0,
                            observerTarget: this.router.isDesktop ?
                                this.$el.parentNode : null,
                            observerSections: this.observerSections,
                            observerParallax: this.observerParallax,
                            observerItems: this.observerItems
                        })
                    }
                }, {
                    key: "linkEnter",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .openCursor(),
                            this.router.ui.cursor.lock = !0,
                            S
                            .a
                            .to(this.router.ui.$cursor, {
                                x: i
                                    .getBoundingClientRect()
                                    .left + 5,
                                y: i
                                    .getBoundingClientRect()
                                    .top + i.offsetHeight / 2,
                                duration: .6,
                                ease: "power4.out",
                                overwrite: "all"
                            }),
                            S
                            .a
                            .to(i.children[0], {
                                x: 15,
                                ease: "expo.out",
                                duration: .6
                            }),
                            S
                            .a
                            .to(i.children[1], {
                                transformOrigin: "100% 100%",
                                scaleX: 0,
                                ease: "expo.out",
                                duration: .6,
                                onComplete: function() {}
                            })
                    }
                }, {
                    key: "linkLeave",
                    value: function(e, t, i) {
                        this.router.ui.cursor.lock = !1,
                            this
                            .router
                            .ui
                            .openCursor(),
                            S
                            .a
                            .to(this.router.ui.$cursor, {
                                x: e.clientX,
                                y: e.clientY,
                                duration: .6,
                                ease: "power4.out",
                                overwrite: "all"
                            }),
                            S
                            .a
                            .to(i.children[0], {
                                x: 0,
                                ease: "expo.out",
                                duration: .6
                            }),
                            S
                            .a
                            .to(i.children[1], {
                                transformOrigin: "0% 0%",
                                scaleX: 1,
                                ease: "expo.out",
                                duration: .6,
                                onComplete: function() {}
                            })
                    }
                }, {
                    key: "videoEnter",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .reduceCursor("play");
                        var r = i
                            .getBoundingClientRect()
                            .left + i
                            .getBoundingClientRect()
                            .width / 2 - e.pageX,
                            n = i
                            .getBoundingClientRect()
                            .top + i
                            .getBoundingClientRect()
                            .height / 2 - e.pageY;
                        S
                            .a
                            .to(i.parentNode.querySelector(".video__trigger"), {
                                scale: .9,
                                x: -r,
                                y: 4 - n,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "videoLeave",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .expandCursor(),
                            S
                            .a
                            .to(i.parentNode.querySelector(".video__trigger"), {
                                scale: 1,
                                x: 0,
                                y: 0,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "teamSliderInit",
                    value: function() {
                        var e = this;
                        this
                            .$teamList
                            .querySelector(".slider")
                            .style
                            .cursor = "grab",
                            this
                            .$teamList
                            .querySelector(".slider__inner")
                            .style
                            .margin = "initial",
                            this.superDraggerTeam = new We({
                                el: this
                                    .$teamList
                                    .querySelector(".slider"),
                                elClickables: this
                                    .$teamListSlider
                                    .querySelectorAll(".member.member--visible .anchor"),
                                snap: !1,
                                onMouseEnter: function() {
                                    e
                                        .router
                                        .ui
                                        .openCursor()
                                },
                                onMouseLeave: function() {
                                    e
                                        .router
                                        .ui
                                        .openCursor()
                                },
                                onDragStart: function() {
                                    e
                                        .router
                                        .ui
                                        .reduceCursor();
                                    for (
                                        var t = 0; t < e.$teamList.querySelectorAll(".slider__inner__item").length; t++
                                    )
                                        S
                                        .a
                                        .to(e.$teamList.querySelectorAll(".slider__inner__item")[t], {
                                            scale: .95,
                                            ease: "power4.out",
                                            duration: .6
                                        })
                                },
                                onDragEnd: function() {
                                    e
                                        .router
                                        .ui
                                        .expandCursor();
                                    for (
                                        var t = 0; t < e.$teamList.querySelectorAll(".slider__inner__item").length; t++
                                    )
                                        S
                                        .a
                                        .to(e.$teamList.querySelectorAll(".slider__inner__item")[t], {
                                            scale: 1,
                                            ease: "power4.out",
                                            duration: .6
                                        })
                                }
                            })
                    }
                }, {
                    key: "ambassadorsSliderInit",
                    value: function() {
                        var e = this;
                        this
                            .$teamAmbassadors
                            .querySelectorAll(".slider__inner__item")
                            .length > 3 && (
                                this.$teamAmbassadors.querySelector(".slider").style.cursor = "grab",
                                this.$teamAmbassadors.querySelector(".slider__inner").style.margin = "initial",
                                this.superDraggerAmbassadors = new We({
                                    el: this
                                        .$teamAmbassadors
                                        .querySelector(".slider"),
                                    snap: !1,
                                    onMouseEnter: function() {
                                        e
                                            .router
                                            .ui
                                            .openCursor()
                                    },
                                    onMouseLeave: function() {
                                        e
                                            .router
                                            .ui
                                            .openCursor()
                                    },
                                    onDragStart: function() {
                                        e
                                            .router
                                            .ui
                                            .reduceCursor();
                                        for (
                                            var t = 0; t < e.$teamAmbassadors.querySelectorAll(".slider__inner__item").length; t++
                                        )
                                            S
                                            .a
                                            .to(e.$teamAmbassadors.querySelectorAll(".slider__inner__item")[t], {
                                                scale: .95,
                                                ease: "power4.out",
                                                duration: .6
                                            })
                                    },
                                    onDragEnd: function() {
                                        e
                                            .router
                                            .ui
                                            .expandCursor();
                                        for (
                                            var t = 0; t < e.$teamAmbassadors.querySelectorAll(".slider__inner__item").length; t++
                                        )
                                            S
                                            .a
                                            .to(e.$teamAmbassadors.querySelectorAll(".slider__inner__item")[t], {
                                                scale: 1,
                                                ease: "power4.out",
                                                duration: .6
                                            })
                                    }
                                })
                            )
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "featuresTitle":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    });
                                break;
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var r = 0; r < t.querySelectorAll(".word").length; r++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[r], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "featuresTitle":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.4,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    });
                                break;
                            case "titleExtraLarge":
                                for (var r = 0; r < t.querySelectorAll(".word").length; r++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[r], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.4,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * r
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        switch (e.timeline = S.a.timeline({
                            paused: !0,
                            ease: "none",
                            defaults: {
                                duration: 1,
                                ease: "none"
                            }
                        }), this.observerParallax[t].id) {
                            case "hero":
                                var i = e
                                    .node
                                    .querySelector(".item--0"),
                                    r = e
                                    .node
                                    .querySelector(".item--1"),
                                    n = e
                                    .node
                                    .querySelector(".item--2");
                                e
                                    .timeline
                                    .fromTo(i, {
                                        y: "10%"
                                    }, {
                                        y: "-25%"
                                    }, 0),
                                    e
                                    .timeline
                                    .fromTo(r, {
                                        y: "0%"
                                    }, {
                                        y: "10%"
                                    }, 0),
                                    e
                                    .timeline
                                    .fromTo(n, {
                                        y: "10%"
                                    }, {
                                        y: "-25%"
                                    }, 0);
                                break;
                            case "above":
                                e
                                    .timeline
                                    .fromTo(e.node.querySelector(".above"), {
                                        x: "10vw"
                                    }, {
                                        x: "-10vw"
                                    }, 0);
                                break;
                            case "heroImage":
                                e
                                    .timeline
                                    .fromTo(e.node.children[0], {
                                        y: "-100px"
                                    }, {
                                        y: "100px"
                                    }, 0);
                                break;
                            case "teamFeatured":
                                var o = e
                                    .node
                                    .children[0];
                                e
                                    .timeline
                                    .set(o, {
                                        y: "0%"
                                    }, 0),
                                    e
                                    .timeline
                                    .to(o, {
                                        y: "15%"
                                    }, 0)
                        }
                        e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Ii(t.prototype, i),
                r && Ii(t, r),
                o
        }(d);
        i(46);

        function Ti(e) {
            return (
                Ti = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Li(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Ri(e, t) {
            return (Ri = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Bi(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = Mi(e);
                if (t) {
                    var n = Mi(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Vi(this, i)
            }
        }

        function Vi(e, t) {
            return !t || "object" !== Ti(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function Mi(e) {
            return (
                Mi = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var zi = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && Ri(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = Bi(o);

                function o(e) {
                    return function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, o),
                        n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: qi.a,
                            templateData: {
                                data: P.appData.pages.curators,
                                options: P.appData.options,
                                footer: Xe.a
                            },
                            insertPosition: "FIRST",
                            initialRenderDelay: null === P.pageFrom ?
                                1e3 : 0
                        })
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$header = document.getElementById("header"),
                                this.$hero = this
                                .$el
                                .querySelector(".curators__hero"),
                                this.$team = this
                                .$el
                                .querySelector(".curators__team"),
                                this.$footer = this
                                .$el
                                .querySelector(".curators__footer"),
                                this.$features = this
                                .$hero
                                .querySelector(".features"),
                                this.$featuresItems = this
                                .$features
                                .querySelectorAll(".features__item"),
                                this.$teamFeatured = this
                                .$team
                                .querySelector(".team__featured"),
                                this.$teamList = this
                                .$team
                                .querySelector(".team__list"),
                                this.$teamListSlider = this
                                .$teamList
                                .querySelector(".slider__inner"),
                                this.$teamListSliderItems = this
                                .$teamList
                                .querySelectorAll(".slider__inner__item"),
                                this.$teamAmbassadors = this
                                .$team
                                .querySelector(".team__ambassadors"),
                                this.$teamAmbassadorsSlider = this
                                .$teamAmbassadors
                                .querySelector(".slider__inner"),
                                this.$teamAmbassadorsSliderItems = this
                                .$teamAmbassadors
                                .querySelectorAll(".slider__inner__item")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            new Oe(this.$hero.querySelector(".title--xlarge"), {
                                type: "lines, words",
                                linesClass: "line line--++",
                                wordsClass: "word word--++"
                            });
                            for (
                                var i = 0; i < this.$hero.querySelector(".title--xlarge").querySelectorAll(".word").length; i++
                            )
                                S
                                .a
                                .set(this.$hero.querySelector(".title--xlarge").querySelectorAll(".word")[i], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            this.enterAnimation = S
                                .a
                                .timeline({
                                    paused: !0,
                                    delay: 0
                                });
                            for (
                                var r = 0; r < this.$hero.querySelector(".title--xlarge").querySelectorAll(".word").length; r++
                            )
                                this
                                .enterAnimation
                                .to(this.$hero.querySelector(".title--xlarge").querySelectorAll(".word")[r], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: .8,
                                    ease: "expo.inOut",
                                    delay: .1 + .05 * r
                                }, 0);
                            for (var n = function(e) {
                                    t
                                        .events
                                        .add(t.$teamListSliderItems[e], "click", (function(i, r, n) {
                                            t
                                                .router
                                                .ui
                                                .openLightbox(
                                                    "member",
                                                    t.$teamListSliderItems[e].querySelector(".member--lightbox")
                                                )
                                        }), t)
                                }, o = 0; o < this.$teamListSliderItems.length; o++)
                                n(o);
                            for (var s = function(e) {
                                    t
                                        .events
                                        .add(
                                            t.$teamAmbassadorsSliderItems[e].querySelector(".video__trigger"),
                                            "click",
                                            (function(i, r, n) {
                                                t
                                                    .router
                                                    .ui
                                                    .openLightbox(
                                                        "video",
                                                        t.$teamAmbassadorsSliderItems[e].querySelector(".video--lightbox")
                                                    )
                                            }),
                                            t
                                        )
                                }, l = 0; l < this.$teamAmbassadorsSliderItems.length; l++)
                                s(l);
                            this.teamSliderInit(),
                                this.ambassadorsSliderInit(),
                                this.init()
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$featuresItems[0]
                                        .querySelector(".title--large"),
                                    delay: 0,
                                    id: "featuresTitle"
                                }, {
                                    node: this
                                        .$featuresItems[1]
                                        .querySelector(".title--large"),
                                    delay: 0,
                                    id: "featuresTitle"
                                }, {
                                    node: this
                                        .$featuresItems[2]
                                        .querySelector(".title--large"),
                                    delay: 0,
                                    id: "featuresTitle"
                                }, {
                                    node: this
                                        .$team
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }, {
                                    node: this
                                        .$footer
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [{
                                    node: this.$hero,
                                    delay: 0,
                                    id: "hero"
                                }, {
                                    node: this
                                        .$hero
                                        .querySelectorAll(".image")[0],
                                    delay: 0,
                                    id: "heroImage"
                                }, {
                                    node: this
                                        .$hero
                                        .querySelectorAll(".image")[1],
                                    delay: 0,
                                    id: "heroImage"
                                }, {
                                    node: this
                                        .$hero
                                        .querySelectorAll(".image")[2],
                                    delay: 0,
                                    id: "heroImage"
                                }, {
                                    node: this.$team,
                                    delay: 0,
                                    id: "team"
                                }, {
                                    node: this
                                        .$teamFeatured
                                        .querySelector(".container"),
                                    delay: 0,
                                    id: "teamFeatured"
                                }, {
                                    node: this.$teamList,
                                    delay: 0,
                                    id: "teamList"
                                }, {
                                    node: this.$footer,
                                    delay: 0,
                                    id: "footer"
                                }],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "teamSliderInit",
                        value: function() {
                            this.teamSlider = new ut({
                                target: this.$teamListSlider,
                                nodes: this.$teamListSliderItems,
                                enable: !0
                            })
                        }
                    }, {
                        key: "ambassadorsSliderInit",
                        value: function() {
                            this.ambassadorsSlider = new ut({
                                target: this.$teamAmbassadorsSlider,
                                nodes: this.$teamAmbassadorsSliderItems,
                                enable: !0
                            })
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "featuresTitle":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[i], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        });
                                    break;
                                case "titleExtraLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var r = 0; r < t.querySelectorAll(".word").length; r++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[r], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        })
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "featuresTitle":
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: .8,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * i
                                        });
                                    break;
                                case "titleExtraLarge":
                                    for (var r = 0; r < t.querySelectorAll(".word").length; r++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[r], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: .8,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * r
                                        })
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            switch (e.timeline = S.a.timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }), this.observerParallax[t].id) {
                                case "heroImage":
                                    e
                                        .timeline
                                        .fromTo(e.node.children[0], {
                                            y: "-100px"
                                        }, {
                                            y: "100px"
                                        }, 0);
                                    break;
                                case "teamFeatured":
                                    var i = e
                                        .node
                                        .children[0];
                                    e
                                        .timeline
                                        .set(i, {
                                            y: "0%"
                                        }, 0),
                                        e
                                        .timeline
                                        .to(i, {
                                            y: "5%"
                                        }, 0)
                            }
                            e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize(),
                                this
                                .teamSlider
                                .resize(
                                    this.$teamListSlider.offsetWidth + 30,
                                    this.$teamListSlider.offsetHeight
                                ),
                                this
                                .ambassadorsSlider
                                .resize(
                                    this.$teamAmbassadorsSlider.offsetWidth + 20,
                                    this.$teamAmbassadorsSlider.offsetHeight
                                )
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && Li(t.prototype, i),
                    r && Li(t, r),
                    o
            }(d),
            Ni = i(11),
            Hi = i.n(Ni);
        i(47);

        function Wi(e) {
            return (
                Wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Gi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Ui(e, t) {
            return (Ui = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Yi(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = Ji(e);
                if (t) {
                    var n = Ji(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Xi(this, i)
            }
        }

        function Xi(e, t) {
            return !t || "object" !== Wi(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function Ji(e) {
            return (
                Ji = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Zi = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Ui(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Yi(o);

            function o(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var i = Object
                    .keys(P.appData.journals)
                    .find((function(t) {
                        return P
                            .appData
                            .journals[t]
                            .slug === e.journal
                    })),
                    r = P.appData.journals;
                return (t = n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: Hi.a,
                        templateData: {
                            data: P.appData.pages.journal,
                            journal: r[i],
                            allJournals: r,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })).archiveSvg = {
                        dashoffset: 0
                    },
                    t
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = document.getElementById("header"),
                            this.$hero = this
                            .$el
                            .querySelector(".journalArchive__hero"),
                            this.$archive = this
                            .$el
                            .querySelector(".journalArchive__archive"),
                            this.$footer = this
                            .$el
                            .querySelector(".journalArchive__footer"),
                            this.$heroTitle = this
                            .$hero
                            .querySelector(".title--small"),
                            this.$columnVideo = this
                            .$archive
                            .querySelector(".column--video"),
                            this.$columnVideoItems = this
                            .$columnVideo
                            .querySelectorAll(".item")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        new Oe(this.$heroTitle, {
                            type: "lines, words",
                            linesClass: "line line--++",
                            wordsClass: "word word--++"
                        });
                        for (var i = 0; i < this.$heroTitle.querySelectorAll(".word").length; i++)
                            S
                            .a
                            .set(this.$heroTitle.querySelectorAll(".word")[i], {
                                opacity: 1e-4,
                                y: "-100%"
                            });
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            });
                        for (var r = 0; r < this.$heroTitle.querySelectorAll(".word").length; r++)
                            this
                            .enterAnimation
                            .to(this.$heroTitle.querySelectorAll(".word")[r], {
                                opacity: 1,
                                y: "0%",
                                duration: 1.4,
                                ease: "expo.inOut"
                            }, 0 + .02 * r);
                        for (
                            var n = function(e) {
                                    t
                                        .events
                                        .add(t.$archive.querySelectorAll(".item")[e], "mouseenter", (
                                            function(i, r, n) {
                                                t.enterItem(i, n, e)
                                            }
                                        )),
                                        t
                                        .events
                                        .add(t.$archive.querySelectorAll(".item")[e], "mouseleave", (
                                            function(i, r, n) {
                                                t.leaveItem(i, n, e)
                                            }
                                        ))
                                },
                                o = 0; o < this.$archive.querySelectorAll(".item").length; o++
                        )
                            n(o);
                        for (var s = 0; s < this.$columnVideoItems.length; s++)
                            this
                            .events
                            .add(
                                this.$columnVideoItems[s].querySelector(".sensor"),
                                "mousemove",
                                (function(e, i, r) {
                                    t.videoEnter(e, i, r)
                                }),
                                this
                            ),
                            this
                            .events
                            .add(
                                this.$columnVideoItems[s].querySelector(".sensor"),
                                "mouseleave",
                                (function(e, i, r) {
                                    t.videoLeave(e, i, r)
                                }),
                                this
                            );
                        this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener()
                                }
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$footer
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [{
                                node: this
                                    .$archive
                                    .querySelector(".column--video"),
                                delay: 0,
                                id: "columnVideo"
                            }],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "videoEnter",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .reduceCursor("play");
                        var r = i
                            .getBoundingClientRect()
                            .left + i
                            .getBoundingClientRect()
                            .width / 2 - e.pageX,
                            n = i
                            .getBoundingClientRect()
                            .top + i
                            .getBoundingClientRect()
                            .height / 2 - e.pageY;
                        S
                            .a
                            .to(i.parentNode.querySelector(".trigger"), {
                                scale: .9,
                                x: -r,
                                y: 4 - n,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "videoLeave",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .expandCursor(),
                            S
                            .a
                            .to(i.parentNode.querySelector(".trigger"), {
                                scale: 1,
                                x: 0,
                                y: 0,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "enterItem",
                    value: function(e, t) {
                        S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1.05,
                                ease: "expo.out",
                                duration: .9
                            })
                    }
                }, {
                    key: "leaveItem",
                    value: function(e, t) {
                        S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1,
                                ease: "expo.out",
                                duration: .9
                            })
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.6,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        switch (e.timeline = S.a.timeline({
                            paused: !0,
                            ease: "none",
                            defaults: {
                                duration: 1,
                                ease: "none"
                            }
                        }), this.observerParallax[t].id) {
                            case "columnVideo":
                                e
                                    .timeline
                                    .set(e.node, {
                                        y: "0vw"
                                    }, 0),
                                    e
                                    .timeline
                                    .to(e.node, {
                                        y: "10vw"
                                    }, 0),
                                    e
                                    .timeline
                                    .to(e.node, {
                                        y: "15vw"
                                    }, 1)
                        }
                        e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Gi(t.prototype, i),
                r && Gi(t, r),
                o
        }(d);
        i(48);

        function Ki(e) {
            return (
                Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Qi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function er(e, t) {
            return (er = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function tr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = rr(e);
                if (t) {
                    var n = rr(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return ir(this, i)
            }
        }

        function ir(e, t) {
            return !t || "object" !== Ki(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function rr(e) {
            return (
                rr = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var nr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && er(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = tr(o);

                function o(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var i = Object
                        .keys(P.appData.journals)
                        .find((function(t) {
                            return P
                                .appData
                                .journals[t]
                                .slug === e.journal
                        })),
                        r = P.appData.journals;
                    return (t = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: Hi.a,
                            templateData: {
                                data: P.appData.pages.journal,
                                journal: r[i],
                                allJournals: r,
                                options: P.appData.options,
                                footer: Xe.a
                            },
                            insertPosition: "FIRST",
                            initialRenderDelay: null === P.pageFrom ?
                                1e3 : 0
                        })).contentScroll = 0,
                        t.contentPosition = document
                        .getElementById("content")
                        .scrollTop,
                        t
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$hero = this
                                .$el
                                .querySelector(".journalArchive__hero"),
                                this.$archive = this
                                .$el
                                .querySelector(".journalArchive__archive"),
                                this.$footer = this
                                .$el
                                .querySelector(".journalArchive__footer"),
                                this.$heroTitle = this
                                .$hero
                                .querySelector(".title--small"),
                                this.$videoSlider = this
                                .$archive
                                .querySelector(".column__inner"),
                                this.$videoSliderItems = this
                                .$archive
                                .querySelectorAll(".column__inner > .item")
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            new Oe(this.$heroTitle, {
                                type: "lines, words",
                                linesClass: "line line--++",
                                wordsClass: "word word--++"
                            });
                            for (var t = 0; t < this.$heroTitle.querySelectorAll(".word").length; t++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".word")[t], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            this.enterAnimation = S
                                .a
                                .timeline({
                                    paused: !0,
                                    delay: 0
                                });
                            for (var i = 0; i < this.$heroTitle.querySelectorAll(".word").length; i++)
                                this
                                .enterAnimation
                                .to(this.$heroTitle.querySelectorAll(".word")[i], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: .8,
                                    ease: "expo.inOut",
                                    delay: .1 + .02 * i
                                }, 0);
                            this.videoSliderInit(),
                                this.init()
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$footer
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "videoSliderInit",
                        value: function() {
                            this.videoSlider = new ut({
                                target: this.$videoSlider,
                                nodes: this.$videoSliderItems,
                                enable: !0
                            })
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[i], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        })
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: 1.6,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * i
                                        })
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            e.timeline = S
                                .a
                                .timeline({
                                    paused: !0,
                                    ease: "none",
                                    defaults: {
                                        duration: 1,
                                        ease: "none"
                                    }
                                }),
                                this
                                .observerParallax[t]
                                .id,
                                e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize(),
                                this
                                .videoSlider
                                .resize(this.$videoSlider.offsetWidth + 15, this.$videoSlider.offsetHeight)
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && Qi(t.prototype, i),
                    r && Qi(t, r),
                    o
            }(d),
            or = i(12),
            sr = i.n(or);
        i(49);

        function lr(e) {
            return (
                lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function ar(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function ur(e, t) {
            return (ur = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function cr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = hr(e);
                if (t) {
                    var n = hr(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return dr(this, i)
            }
        }

        function dr(e, t) {
            return !t || "object" !== lr(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function hr(e) {
            return (
                hr = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var vr = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ur(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = cr(o);

            function o(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var i = Object
                    .keys(P.appData.journals)
                    .find((function(t) {
                        return P
                            .appData
                            .journals[t]
                            .slug === e.post
                    })),
                    r = P.appData.journals;
                return (t = n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: sr.a,
                        templateData: {
                            journal: r[i],
                            allJournals: r,
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })).isPlaying = !1,
                    t.archiveSvg = {
                        dashoffset: 0
                    },
                    document
                    .body
                    .classList
                    .add(
                        "video" === r[i].type ?
                        "video" :
                        "article"
                    ),
                    t
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$heroVideo = this
                            .$el
                            .querySelector(".journalSingle__heroVideo"),
                            this.$relatedVideo = this
                            .$el
                            .querySelector(".journalSingle__relatedVideo"),
                            this.$heroArticle = this
                            .$el
                            .querySelector(".journalSingle__heroArticle"),
                            this.$relatedArticle = this
                            .$el
                            .querySelector(".journalSingle__relatedArticle"),
                            this.$footer = this
                            .$el
                            .querySelector(".journalSingle__footer")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this;
                        if (this.enterAnimation = S.a.timeline({
                                paused: !0,
                                delay: 0
                            }), this.$heroArticle) {
                            this.$heroTitle = this
                                .$heroArticle
                                .querySelector(".title"),
                                new Oe(this.$heroTitle, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                            for (var i = 0; i < this.$heroTitle.querySelectorAll(".word").length; i++)
                                S
                                .a
                                .set(this.$heroTitle.querySelectorAll(".word")[i], {
                                    opacity: 1e-4,
                                    y: "-100%"
                                });
                            for (var r = 0; r < this.$heroTitle.querySelectorAll(".word").length; r++)
                                this
                                .enterAnimation
                                .to(this.$heroTitle.querySelectorAll(".word")[r], {
                                    opacity: 1,
                                    y: "0%",
                                    duration: 1.4,
                                    ease: "expo.inOut"
                                }, 0 + .02 * r)
                        }
                        if (
                            this.$heroVideo && (
                                this.$heroVideo.querySelector("video") ?
                                (
                                    this.$heroVideo.querySelector("video").pause(),
                                    this.events.add(this.$heroVideo.querySelector(".video__sensor"), "click", (function() {
                                        t.playVideo()
                                    })),
                                    this.events.add(this.$heroVideo.querySelector("video"), "pause", (function() {
                                        t.pauseVideo()
                                    })),
                                    this.events.add(this.$heroVideo.querySelector("video"), "ended", (function() {
                                        t.pauseVideo()
                                    }))
                                ) :
                                (
                                    this.videoYoutubeInit(),
                                    this.events.add(this.$heroVideo.querySelector(".video__sensor"), "click", (function() {
                                        t.videoYoutubePlay()
                                    }), this)
                                ),
                                this.events.add(
                                    this.$heroVideo.querySelector(".video__sensor"),
                                    "mousemove",
                                    (function(e, i, r) {
                                        t.videoEnter(e, i, r)
                                    }),
                                    this
                                ),
                                this.events.add(
                                    this.$heroVideo.querySelector(".video__sensor"),
                                    "mouseleave",
                                    (function(e, i, r) {
                                        t.videoLeave(e, i, r)
                                    }),
                                    this
                                )
                            ),
                            this.$relatedVideo
                        ) {
                            this.$relatedVideoItems = this
                                .$relatedVideo
                                .querySelectorAll(".item");
                            for (var n = 0; n < this.$relatedVideoItems.length; n++)
                                this
                                .events
                                .add(
                                    this.$relatedVideoItems[n].querySelector(".sensor"),
                                    "mousemove",
                                    (function(e, i, r) {
                                        t.videoEnter(e, i, r)
                                    }),
                                    this
                                ),
                                this
                                .events
                                .add(
                                    this.$relatedVideoItems[n].querySelector(".sensor"),
                                    "mouseleave",
                                    (function(e, i, r) {
                                        t.videoLeave(e, i, r)
                                    }),
                                    this
                                )
                        }
                        if (this.$relatedArticle)
                            for (
                                var o = function(e) {
                                        t
                                            .events
                                            .add(t.$relatedArticle.querySelectorAll(".item")[e], "mouseenter", (
                                                function(i, r, n) {
                                                    t.enterItem(i, n, e)
                                                }
                                            )),
                                            t
                                            .events
                                            .add(t.$relatedArticle.querySelectorAll(".item")[e], "mouseleave", (
                                                function(i, r, n) {
                                                    t.leaveItem(i, n, e)
                                                }
                                            ))
                                    },
                                    s = 0; s < this.$relatedArticle.querySelectorAll(".item").length; s++
                            )
                                o(s);
                        this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener()
                                }
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$footer
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "enterItem",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1.05,
                                ease: "expo.out",
                                duration: .9
                            }),
                            t.querySelector(".link") && (S.a.to(t.querySelector(".link").children[1], {
                                x: "100%",
                                duration: .9,
                                ease: "expo.out"
                            }), S.a.to(this.archiveSvg, {
                                dashoffset: 1,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .querySelector(".link")
                                        .children[0]
                                        .children[1]
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * i.archiveSvg.dashoffset + "px"
                                }
                            }))
                    }
                }, {
                    key: "leaveItem",
                    value: function(e, t) {
                        var i = this;
                        S
                            .a
                            .to(t.querySelector(".image__bg"), {
                                scale: 1,
                                ease: "expo.out",
                                duration: .9
                            }),
                            t.querySelector(".link") && (S.a.to(t.querySelector(".link").children[1], {
                                x: "0%",
                                duration: .9,
                                ease: "expo.out"
                            }), S.a.to(this.archiveSvg, {
                                dashoffset: 0,
                                duration: .9,
                                ease: "expo.out",
                                onUpdate: function() {
                                    t
                                        .querySelector(".link")
                                        .children[0]
                                        .children[1]
                                        .style
                                        .strokeDashoffset = 1197 - 1197 * i.archiveSvg.dashoffset + "px"
                                }
                            }))
                    }
                }, {
                    key: "videoEnter",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .reduceCursor("play");
                        var r = i
                            .getBoundingClientRect()
                            .left + i
                            .getBoundingClientRect()
                            .width / 2 - e.pageX,
                            n = i
                            .getBoundingClientRect()
                            .top + i
                            .getBoundingClientRect()
                            .height / 2 - e.pageY;
                        i
                            .parentNode
                            .querySelector(".video__trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".video__trigger"), {
                                scale: .9,
                                x: -r,
                                y: 4 - n,
                                ease: "expo.out",
                                duration: .4
                            }),
                            i
                            .parentNode
                            .querySelector(".trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".trigger"), {
                                scale: .9,
                                x: -r,
                                y: 4 - n,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "videoLeave",
                    value: function(e, t, i) {
                        this
                            .router
                            .ui
                            .expandCursor(),
                            i
                            .parentNode
                            .querySelector(".video__trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".video__trigger"), {
                                scale: 1,
                                x: 0,
                                y: 0,
                                ease: "expo.out",
                                duration: .4
                            }),
                            i
                            .parentNode
                            .querySelector(".trigger") && S
                            .a
                            .to(i.parentNode.querySelector(".trigger"), {
                                scale: 1,
                                x: 0,
                                y: 0,
                                ease: "expo.out",
                                duration: .4
                            })
                    }
                }, {
                    key: "videoYoutubeInit",
                    value: function() {
                        var e = this;
                        if (window.YT.loaded) {
                            var t = this
                                .$heroVideo
                                .querySelector(".video__player")
                                .children[0]
                                .id;
                            this.$videoPlayerObj = new YT.Player(t, {
                                playerVars: {
                                    rel: 0,
                                    showinfo: 0,
                                    ecver: 2
                                },
                                videoId: t
                            })
                        } else
                            setTimeout((function() {
                                e.videoYoutubeInit()
                            }), 10)
                    }
                }, {
                    key: "videoYoutubePlay",
                    value: function() {
                        this.isPlaying || (
                            S.a.set(this.$heroVideo.querySelector("iframe"), { pointerEvents: "initial" }),
                            S.a.set(this.$heroVideo.querySelector(".video__player"), { display: "block" }),
                            S.a.to(this.$heroVideo.querySelector(".video__poster"), {
                                opacity: 1e-4,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__overlay"), {
                                opacity: 1e-4,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__trigger"), {
                                opacity: 1e-4,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            this.$videoPlayerObj.playVideo(),
                            this.isPlaying = !0
                        )
                    }
                }, {
                    key: "videoYoutubeStop",
                    value: function() {
                        var e = this;
                        this.isPlaying && (
                            this.$videoPlayerObj.stopVideo(),
                            S.a.to(this.$heroVideo.querySelector(".video__trigger"), {
                                opacity: 1,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__overlay"), {
                                opacity: .6,
                                duration: .6,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__poster"), {
                                opacity: 1,
                                duration: .6,
                                ease: "power2.out",
                                onComplete: function() {
                                    S
                                        .a
                                        .set(e.$heroVideo.querySelector(".video__player"), { display: "none" }),
                                        e.isPlaying = !1
                                }
                            })
                        )
                    }
                }, {
                    key: "playVideo",
                    value: function() {
                        this.isPlaying || (
                            S.a.set(this.$heroVideo.querySelector(".video__player"), { display: "block" }),
                            this.$video = this.$heroVideo.querySelector("video"),
                            this.$video.currentTime = 0,
                            this.$video.autoplay = !0,
                            this.$video.muted = !1,
                            this.$video.loop = !1,
                            this.$video.volume = 0,
                            this.$video.play(),
                            S.a.to(this.$video, {
                                volume: 1,
                                ease: "expo.inOut",
                                duration: 1
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__poster"), {
                                opacity: 1e-4,
                                duration: .8,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__overlay"), {
                                opacity: 1e-4,
                                duration: .8,
                                ease: "power2.out"
                            }),
                            S.a.to(this.$heroVideo.querySelector(".video__trigger"), {
                                opacity: 1e-4,
                                duration: .8,
                                ease: "power2.out"
                            }),
                            this.isPlaying = !0
                        )
                    }
                }, {
                    key: "pauseVideo",
                    value: function() {
                        var e = this;
                        this.isPlaying && (S.a.to(this.$heroVideo.querySelector(".video__trigger"), {
                            opacity: 1,
                            duration: .8,
                            ease: "power2.out"
                        }), S.a.to(this.$heroVideo.querySelector(".video__overlay"), {
                            opacity: .6,
                            duration: .8,
                            ease: "power2.out"
                        }), S.a.to(this.$heroVideo.querySelector(".video__poster"), {
                            opacity: 1,
                            duration: .8,
                            ease: "power2.out",
                            onComplete: function() {
                                S
                                    .a
                                    .set(e.$heroVideo.querySelector(".video__player"), { display: "none" }),
                                    e.isPlaying = !1
                            }
                        }))
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.4,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        e.timeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .observerParallax[t]
                            .id,
                            e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && ar(t.prototype, i),
                r && ar(t, r),
                o
        }(d);
        i(50);

        function _r(e) {
            return (
                _r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function pr(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function yr(e, t) {
            return (yr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function fr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = gr(e);
                if (t) {
                    var n = gr(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return mr(this, i)
            }
        }

        function mr(e, t) {
            return !t || "object" !== _r(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function gr(e) {
            return (
                gr = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var br = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && yr(e, t)
                }(o, e);
                var t,
                    i,
                    r,
                    n = fr(o);

                function o(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var i = Object
                        .keys(P.appData.journals)
                        .find((function(t) {
                            return P
                                .appData
                                .journals[t]
                                .slug === e.post
                        })),
                        r = P.appData.journals;
                    return (t = n.call(this, {
                            eventHub: j,
                            store: P,
                            router: Rr,
                            templateFunction: sr.a,
                            templateData: {
                                journal: r[i],
                                allJournals: r,
                                options: P.appData.options,
                                footer: Xe.a
                            },
                            insertPosition: "FIRST",
                            initialRenderDelay: null === P.pageFrom ?
                                1e3 : 0
                        })).isPlaying = !1,
                        document
                        .body
                        .classList
                        .add(
                            "video" === r[i].type ?
                            "video" :
                            "article"
                        ),
                        t
                }
                return t = o,
                    (i = [{
                        key: "selectors",
                        value: function() {
                            this.$el = this
                                ._parent
                                .querySelector(".inner"),
                                this.$scrollbar = this
                                ._parent
                                .querySelector(".scrollbar"),
                                this.$header = document.getElementById("header"),
                                this.$heroVideo = this
                                .$el
                                .querySelector(".journalSingle__heroVideo"),
                                this.$relatedVideo = this
                                .$el
                                .querySelector(".journalSingle__relatedVideo"),
                                this.$heroArticle = this
                                .$el
                                .querySelector(".journalSingle__heroArticle"),
                                this.$relatedArticle = this
                                .$el
                                .querySelector(".journalSingle__relatedArticle"),
                                this.$footer = this
                                .$el
                                .querySelector(".journalSingle__footer"),
                                this.$relatedVideo && (
                                    this.$relatedVideoSlider = this.$relatedVideo.querySelector(".related__inner"),
                                    this.$relatedVideoSliderItems = this.$relatedVideo.querySelectorAll(".related__inner__item")
                                ),
                                this.$relatedArticle && (
                                    this.$relatedArticleSlider = this.$relatedArticle.querySelector(".related__inner"),
                                    this.$relatedArticleSliderItems = this.$relatedArticle.querySelectorAll(".related__inner__item")
                                )
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var t = this;
                            if (
                                this.enterAnimation = S.a.timeline({
                                    paused: !0,
                                    delay: 0
                                }),
                                this.$heroVideo && this.events.add(
                                    this.$heroVideo.querySelector(".video__trigger"),
                                    "click",
                                    (function(e, i, r) {
                                        t
                                            .router
                                            .ui
                                            .openLightbox("video", t.$heroVideo.querySelector(".video--lightbox"))
                                    }),
                                    this
                                ),
                                this.$relatedVideoSliderItems && this.relatedVideoSliderInit(),
                                this.$relatedArticleSliderItems
                            ) {
                                this.relatedArticleSliderInit();
                                for (var i = 0; i < this.$relatedArticleSliderItems.length; i++) {
                                    var r = this
                                        .$relatedArticleSliderItems[0]
                                        .getBoundingClientRect()
                                        .height,
                                        n = this
                                        .$relatedArticleSliderItems[1]
                                        .getBoundingClientRect()
                                        .height;
                                    r > n ?
                                        S
                                        .a
                                        .set(this.$relatedArticleSlider, { height: r }) :
                                        S
                                        .a
                                        .set(this.$relatedArticleSlider, { height: n })
                                }
                            }
                            this.init()
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.observerSections = Object.values(this.$el.children),
                                this.observerItems = [{
                                    node: this
                                        .$footer
                                        .querySelector(".title--xlarge"),
                                    delay: 0,
                                    id: "titleExtraLarge"
                                }],
                                this.observerParallax = [],
                                this.superObserver = new Me({
                                    currentSection: this,
                                    observer: !0,
                                    observerTarget: this.router.isDesktop ?
                                        this.$el.parentNode : null,
                                    observerSections: this.observerSections,
                                    observerParallax: this.observerParallax,
                                    observerItems: this.observerItems
                                })
                        }
                    }, {
                        key: "relatedVideoSliderInit",
                        value: function() {
                            this.$relatedVideoSliderItems && (this.relatedVideoSlider = new ut({
                                target: this.$relatedVideoSlider,
                                nodes: this.$relatedVideoSliderItems,
                                enable: !0
                            }))
                        }
                    }, {
                        key: "relatedArticleSliderInit",
                        value: function() {
                            this.$relatedArticleSliderItems && (this.relatedArticleSlider = new ut({
                                target: this.$relatedArticleSlider,
                                nodes: this.$relatedArticleSliderItems,
                                enable: !0
                            }))
                        }
                    }, {
                        key: "observerAnimationInit",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    new Oe(t, {
                                        type: "lines, words",
                                        linesClass: "line line--++",
                                        wordsClass: "word word--++"
                                    });
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .set(t.querySelectorAll(".word")[i], {
                                            opacity: 1e-4,
                                            y: "100%"
                                        })
                            }
                        }
                    }, {
                        key: "observerAnimationTrigger",
                        value: function(e) {
                            var t = this
                                .observerItems[e]
                                .node;
                            switch (this.observerItems[e].id) {
                                case "titleExtraLarge":
                                    for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                        S
                                        .a
                                        .to(t.querySelectorAll(".word")[i], {
                                            opacity: 1,
                                            y: "0%",
                                            duration: .8,
                                            ease: "expo.inOut",
                                            delay: .1 + .05 * i
                                        })
                            }
                        }
                    }, {
                        key: "observerParallaxInit",
                        value: function(e, t) {
                            e.timeline = S
                                .a
                                .timeline({
                                    paused: !0,
                                    ease: "none",
                                    defaults: {
                                        duration: 1,
                                        ease: "none"
                                    }
                                }),
                                this
                                .observerParallax[t]
                                .id,
                                e
                                .timeline
                                .progress(.001)
                        }
                    }, {
                        key: "observerParallaxTrigger",
                        value: function(e, t, i) {
                            e
                                .timeline
                                .progress(i)
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            this.superObserver && this
                                .superObserver
                                .resize(),
                                this.relatedVideoSlider && this
                                .relatedVideoSlider
                                .resize(
                                    this.$relatedVideoSlider.offsetWidth + 15,
                                    this.$relatedVideoSlider.offsetHeight
                                ),
                                this.relatedArticleSlider && this
                                .relatedArticleSlider
                                .resize(
                                    this.$relatedArticleSlider.offsetWidth + 15,
                                    this.$relatedArticleSlider.offsetHeight
                                )
                        }
                    }, {
                        key: "enter",
                        value: function(e, t) {
                            this
                                .enterAnimation
                                .play(),
                                S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            S
                                .a
                                .delayedCall(1, e)
                        }
                    }, {
                        key: "afterLeave",
                        value: function() {
                            this.superObserver && this
                                .superObserver
                                .destroy()
                        }
                    }]) && pr(t.prototype, i),
                    r && pr(t, r),
                    o
            }(d),
            Dr = i(13),
            Sr = i.n(Dr);
        i(51);

        function $r(e) {
            return (
                $r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function wr(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function xr(e, t) {
            return (xr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function kr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = qr(e);
                if (t) {
                    var n = qr(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Cr(this, i)
            }
        }

        function Cr(e, t) {
            return !t || "object" !== $r(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function qr(e) {
            return (
                qr = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Ar = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && xr(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = kr(o);

            function o(e) {
                return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    void 0 === P
                    .appData
                    .pages[e.page] && (window.location.href = "/" + P.client.lang + "/404"),
                    n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: Sr.a,
                        templateData: {
                            data: P
                                .appData
                                .pages[e.page],
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = this
                            .$el
                            .querySelector(".page__header"),
                            this.$content = this
                            .$el
                            .querySelector(".page__content"),
                            this.$footer = this
                            .$el
                            .querySelector(".page__footer")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.superScroller = new Be({
                                currentSection: this,
                                scroll: !0,
                                enable: !this.showSplash,
                                scrollTarget: this.$el,
                                bar: !0,
                                barTarget: this
                                    .$scrollbar
                                    .children[0],
                                onRaf: function(t) {
                                    var i = t.livePosition.y;
                                    i < -window.innerHeight && i < t.position.y ?
                                        e
                                        .router
                                        .menu
                                        .showOpener() :
                                        e
                                        .router
                                        .menu
                                        .hideOpener()
                                }
                            }),
                            this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$footer
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: 1.4,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        e.timeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .observerParallax[t]
                            .id,
                            e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superScroller && this
                            .superScroller
                            .resize(),
                            this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        this.superScroller && this
                            .superScroller
                            .destroy(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && wr(t.prototype, i),
                r && wr(t, r),
                o
        }(d);
        i(52);

        function Ir(e) {
            return (
                Ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function Or(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Er(e, t) {
            return (Er = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Fr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = jr(e);
                if (t) {
                    var n = jr(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Pr(this, i)
            }
        }

        function Pr(e, t) {
            return !t || "object" !== Ir(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function jr(e) {
            return (
                jr = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Tr = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Er(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Fr(o);

            function o(e) {
                return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    void 0 === P
                    .appData
                    .pages[e.page] && (window.location.href = "/" + P.client.lang + "/404"),
                    n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        templateFunction: Sr.a,
                        templateData: {
                            data: P
                                .appData
                                .pages[e.page],
                            options: P.appData.options,
                            footer: Xe.a
                        },
                        insertPosition: "FIRST",
                        initialRenderDelay: null === P.pageFrom ?
                            1e3 : 0
                    })
            }
            return t = o,
                (i = [{
                    key: "selectors",
                    value: function() {
                        this.$el = this
                            ._parent
                            .querySelector(".inner"),
                            this.$scrollbar = this
                            ._parent
                            .querySelector(".scrollbar"),
                            this.$header = this
                            .$el
                            .querySelector(".page__header"),
                            this.$content = this
                            .$el
                            .querySelector(".page__content"),
                            this.$footer = this
                            .$el
                            .querySelector(".page__footer")
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        this.enterAnimation = S
                            .a
                            .timeline({
                                paused: !0,
                                delay: 0
                            }),
                            this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.observerSections = Object.values(this.$el.children),
                            this.observerItems = [{
                                node: this
                                    .$footer
                                    .querySelector(".title--xlarge"),
                                delay: 0,
                                id: "titleExtraLarge"
                            }],
                            this.observerParallax = [],
                            this.superObserver = new Me({
                                currentSection: this,
                                observer: !0,
                                observerTarget: this.router.isDesktop ?
                                    this.$el.parentNode : null,
                                observerSections: this.observerSections,
                                observerParallax: this.observerParallax,
                                observerItems: this.observerItems
                            })
                    }
                }, {
                    key: "observerAnimationInit",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                new Oe(t, {
                                    type: "lines, words",
                                    linesClass: "line line--++",
                                    wordsClass: "word word--++"
                                });
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .set(t.querySelectorAll(".word")[i], {
                                        opacity: 1e-4,
                                        y: "100%"
                                    })
                        }
                    }
                }, {
                    key: "observerAnimationTrigger",
                    value: function(e) {
                        var t = this
                            .observerItems[e]
                            .node;
                        switch (this.observerItems[e].id) {
                            case "titleExtraLarge":
                                for (var i = 0; i < t.querySelectorAll(".word").length; i++)
                                    S
                                    .a
                                    .to(t.querySelectorAll(".word")[i], {
                                        opacity: 1,
                                        y: "0%",
                                        duration: .8,
                                        ease: "expo.inOut",
                                        delay: .1 + .05 * i
                                    })
                        }
                    }
                }, {
                    key: "observerParallaxInit",
                    value: function(e, t) {
                        e.timeline = S
                            .a
                            .timeline({
                                paused: !0,
                                ease: "none",
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }),
                            this
                            .observerParallax[t]
                            .id,
                            e
                            .timeline
                            .progress(.001)
                    }
                }, {
                    key: "observerParallaxTrigger",
                    value: function(e, t, i) {
                        e
                            .timeline
                            .progress(i)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.superObserver && this
                            .superObserver
                            .resize()
                    }
                }, {
                    key: "enter",
                    value: function(e, t) {
                        this
                            .enterAnimation
                            .play(),
                            S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        S
                            .a
                            .delayedCall(1, e)
                    }
                }, {
                    key: "afterLeave",
                    value: function() {
                        this.superObserver && this
                            .superObserver
                            .destroy()
                    }
                }]) && Or(t.prototype, i),
                r && Or(t, r),
                o
        }(d);

        function Lr(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        var Rr = new(function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t,
                    i,
                    r;
                return t = e,
                    (i = [{
                        key: "init",
                        value: function() {
                            this.isDesktop = "desktop" === P.client.device,
                                this.isLaptop = window.innerWidth < 1681 && window.innerWidth >= 1366;
                            var e = [{
                                path: "/",
                                name: "home",
                                color: "white",
                                component: this.isDesktop ?
                                    it : yt
                            }, {
                                path: "/collections",
                                name: "collectionsFeatured",
                                color: this.isDesktop ?
                                    "black" : "white",
                                component: this.isDesktop ?
                                    xt : Et
                            }, {
                                path: "/experiences/:experience",
                                name: "collectionsCategory",
                                color: "black",
                                component: this.isDesktop ?
                                    Jt : ci
                            }, {
                                path: "/experiences/:experience/:destination",
                                name: "collectionsCategory",
                                color: "black",
                                component: this.isDesktop ?
                                    Jt : ci
                            }, {
                                path: "/destinations/:destination",
                                name: "collectionsCategory",
                                color: "white",
                                component: this.isDesktop ?
                                    Jt : ci
                            }, {
                                path: "/destinations/:destination/:experience",
                                name: "collectionsCategory",
                                color: "white",
                                component: this.isDesktop ?
                                    Jt : ci
                            }, {
                                path: "/collections/:collection",
                                name: "collectionsSingle",
                                color: "black",
                                component: this.isDesktop ?
                                    gi : ki
                            }, {
                                path: "/curators",
                                name: "curators",
                                color: "black",
                                component: this.isDesktop ?
                                    ji : zi
                            }, {
                                path: "/journal",
                                name: "journalArchive",
                                color: "white",
                                component: this.isDesktop ?
                                    Zi : nr
                            }, {
                                path: "/journal/:post",
                                name: "journalSingle",
                                color: "white",
                                component: this.isDesktop ?
                                    vr : br
                            }, {
                                path: "/:page",
                                name: "page",
                                color: "white",
                                component: this.isDesktop ?
                                    Ar : Tr
                            }];
                            this.firstNavigation = !0,
                                this.lastNavigation = null,
                                this.ui = null,
                                this.uiReady = !1,
                                this.menu = null,
                                this.menuReady = !1,
                                this.dragExplanation = !1,
                                this.instance = new F({
                                    eventHub: j,
                                    store: P,
                                    routes: e,
                                    allowNavigation: !0,
                                    allowSectionUpdate: !0,
                                    onSameRoute: function(e) {}
                                }),
                                this.addGuards(),
                                this.vh = .01 * window.innerHeight,
                                document
                                .documentElement
                                .style
                                .setProperty("--vh", "".concat(this.vh, "px")),
                                this
                                .instance
                                .init()
                        }
                    }, {
                        key: "addGuards",
                        value: function() {
                            var e = this;
                            this
                                .instance
                                .addGuard("preloadHide", (function(t, i, r, n) {
                                    if (e.firstNavigation) {
                                        var o = new $;
                                        return o.add(
                                                "appData",
                                                e.instance.store.rootUrl + "/wp-content/uploads/data.json?" + Math.round(1e10 * Math.random()).toString(), {
                                                    loadType: $.Resource.LOAD_TYPE.XHR,
                                                    xhrType: $.Resource.XHR_RESPONSE_TYPE.JSON
                                                }
                                            ),
                                            o
                                            .onComplete
                                            .once((function(t) {
                                                e.instance.store.appData = t.resources.appData.data,
                                                    n()
                                            }), e),
                                            void o.load()
                                    }
                                    n()
                                })),
                                this
                                .instance
                                .addGuard("preloadHide", (function(t, i, r, n) {
                                    document.body.className = "",
                                        document
                                        .body
                                        .classList
                                        .add(t.name),
                                        e.instance.store.currentPage = t.name,
                                        null === e.instance.currentSection ?
                                        (
                                            e.instance.store.pageFrom = null,
                                            e.instance.store.pageTo = t.name,
                                            e.ui = new H,
                                            e.ui.render((function() {
                                                e.uiReady = !0
                                            })),
                                            e.menu = new Q(t.name),
                                            e.menu.render((function() {
                                                e.menuReady = !0
                                            }))
                                        ) :
                                        (
                                            e.instance.store.pageFrom = e.instance.store.pageTo,
                                            e.instance.store.pageTo = t.name
                                        ),
                                        n()
                                })),
                                this
                                .instance
                                .addGuard("preloadHide", (function(t, i, r, n) {
                                    null !== e.menu && e.menu.menu.open && e
                                        .menu
                                        .closeMenu(),
                                        n()
                                })),
                                this
                                .instance
                                .addGuard("preloadHide", (function(t, i, r, n) {
                                    S
                                        .a
                                        .to(document.getElementById("content"), {
                                            y: .05 * window.innerWidth,
                                            willChange: "transform",
                                            ease: "expo.inOut",
                                            duration: 1,
                                            clearProps: "all"
                                        }),
                                        null === e.instance.store.pageFrom ?
                                        e
                                        .ui
                                        .initMask("home" === e.instance.store.currentPage) :
                                        e
                                        .ui
                                        .enterMask(),
                                        n()
                                })),
                                this
                                .instance
                                .addGuard("show", (function(t, i, r, n) {
                                    S
                                        .a
                                        .set(document.getElementById("content"), {
                                            y: .05 * -window.innerWidth
                                        }),
                                        S
                                        .a
                                        .to(document.getElementById("content"), {
                                            y: 0,
                                            willChange: "transform",
                                            ease: "expo.inOut",
                                            duration: 1,
                                            clearProps: "all"
                                        }),
                                        e.ui.cursor.isOpen && e
                                        .ui
                                        .openCursor(),
                                        null !== e.instance.store.pageFrom && e
                                        .ui
                                        .leaveMask(),
                                        n()
                                })),
                                this.isDesktop || this
                                .instance
                                .addGuard("show", (function(t, i, r, n) {
                                    document
                                        .getElementById("content")
                                        .scrollTop = 0,
                                        e.contentScroll = e.lerp(e.contentScroll, 0, .1),
                                        n()
                                })),
                                this
                                .instance
                                .addGuard("after", (function(t, i, r, n) {
                                    if (e.isDesktop) {
                                        var o = t.name,
                                            s = "white" === t.color ?
                                            "black" :
                                            "white",
                                            l = null === e.instance.store.pageFrom && "home" === e.instance.store.pageTo && e.isDesktop ?
                                            2e3 :
                                            0;
                                        e.header = new ae(o, s, l),
                                            e
                                            .header
                                            .render((function() {
                                                e.headerReady = !0
                                            }))
                                    }
                                    n()
                                })),
                                this
                                .instance
                                .addGuard("after", (function(t, i, r, n) {
                                    e.instance.store.currentPage = t.name,
                                        e.isDesktop && document.querySelector("#header .section-" + t.name) && document
                                        .querySelector(
                                            "#header .section-" + t.name
                                        )
                                        .classList
                                        .add("active"),
                                        document.querySelector("#menu .selected") && document
                                        .querySelector(
                                            "#menu .selected"
                                        )
                                        .classList
                                        .remove("selected"),
                                        document.querySelector("#menu .section-" + t.name) && document
                                        .querySelector(
                                            "#menu .section-" + t.name
                                        )
                                        .classList
                                        .add("selected"),
                                        n()
                                })),
                                this
                                .instance
                                .addGuard("after", (function(t, i, r, n) {
                                    e.lastNavigation = location.pathname,
                                        n()
                                }))
                        }
                    }, {
                        key: "lerp",
                        value: function(e, t, i) {
                            return e + (t - e) * (
                                i = (
                                    i = i < 0 ?
                                    0 :
                                    i
                                ) > 1 ?
                                1 :
                                i
                            )
                        }
                    }, {
                        key: "resize",
                        value: function(e, t) {
                            var i = this;
                            this.instance && this.instance.currentSection && this
                                .instance
                                .currentSection
                                .resize(e, t),
                                this.menuReady && this
                                .menu
                                .resize(e, t),
                                S
                                .a
                                .to(this, {
                                    vh: .01 * t,
                                    duration: 1,
                                    ease: "expo.out",
                                    overwrite: "all",
                                    onUpdate: function() {
                                        document
                                            .documentElement
                                            .style
                                            .setProperty("--vh", "".concat(i.vh, "px"))
                                    }
                                })
                        }
                    }]) && Lr(t.prototype, i),
                    r && Lr(t, r),
                    e
            }()),
            Br = i(22),
            Vr = i.n(Br);
        i(53);

        function Mr(e) {
            return (
                Mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" :
                        typeof e
                }
            )(e)
        }

        function zr(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }

        function Nr(e, t) {
            return (Nr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            })(e, t)
        }

        function Hr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i,
                    r = Gr(e);
                if (t) {
                    var n = Gr(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return Wr(this, i)
            }
        }

        function Wr(e, t) {
            return !t || "object" !== Mr(t) && "function" != typeof t ?

                function(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e
                }(e) :
                t
        }

        function Gr(e) {
            return (
                Gr = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var Ur = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Nr(e, t)
            }(o, e);
            var t,
                i,
                r,
                n = Hr(o);

            function o(e, t, i) {
                return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    n.call(this, {
                        eventHub: j,
                        store: P,
                        router: Rr,
                        appType: "DESKTOP",
                        templateFunction: Vr.a,
                        templateData: {}
                    })
            }
            return t = o,
                (i = [{
                    key: "preloadFonts",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "preloadCommon",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "enter",
                    value: function() {
                        var e = this;
                        this
                            .router
                            .init(),
                            this.router.isDesktop || this
                            .events
                            .add(document.getElementById("content"), "scroll", (function() {
                                var t = document
                                    .getElementById("content")
                                    .scrollTop;
                                e.contentScroll = e
                                    .router
                                    .lerp(e.contentScroll, t, .05)
                            }), this),
                            this.$guides = document.getElementById("guides"),
                            this.$guides && (
                                this.$guidesSwitcher = this.$guides.querySelector(".guides__switcher"),
                                this.$guidesHr = this.$guides.querySelector(".guides__horizontal"),
                                this.$guidesVr = this.$guides.querySelector(".guides__vertical"),
                                this.events.add(this.$guidesSwitcher, "click", (function() {
                                    e.guidesSwitcher()
                                }))
                            )
                    }
                }, {
                    key: "guidesSwitcher",
                    value: function() {
                        "block" === this.$guidesHr.style.display ?
                            (
                                S.a.set(this.$guidesHr, { display: "none" }),
                                S.a.set(this.$guidesVr, { display: "none" })
                            ) :
                            (
                                S.a.set(this.$guidesHr, { display: "block" }),
                                S.a.set(this.$guidesVr, { display: "block" })
                            )
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.$notice = document.querySelector("#notice"),
                            window.innerWidth < 1025 && (
                                e > t ?
                                S.a.set(this.$notice, { display: "block" }) :
                                S.a.set(this.$notice, { display: "none" })
                            )
                    }
                }]) && zr(t.prototype, i),
                r && zr(t, r),
                o
        }(D);
        "loading" !== document.readyState ?
            (new Ur).render() :
            document.addEventListener("DOMContentLoaded", (function() {
                (new Ur).render()
            }), !1)
    }
]);