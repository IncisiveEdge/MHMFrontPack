/*!
 * UEditor
 * version: ueditor
 * build: Sun Sep 25 2016 11:06:46 GMT+0800 (CST)
 */

(function(){

// editor.js
  UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};

  var baidu = window.baidu || {};

  window.baidu = baidu;

  window.UE = baidu.editor =  window.UE || {};

  UE.plugins = {};

  UE.commands = {};

  UE.instants = {};

  UE.I18N = {};

  UE._customizeUI = {};

  UE.version = "1.4.3";

  var dom = UE.dom = {};

// core/browser.js
  /**
   * 娴忚鍣ㄥ垽鏂ā鍧�
   * @file
   * @module UE.browser
   * @since 1.2.6.1
   */

  /**
   * 鎻愪緵娴忚鍣ㄦ娴嬬殑妯″潡
   * @unfile
   * @module UE.browser
   */
  var browser = UE.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
      opera = window.opera,
      browser = {
        /**
         * @property {boolean} ie 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁涓篒E
         * @example
         * ```javascript
         * if ( UE.browser.ie ) {
         *     console.log( '褰撳墠娴忚鍣ㄦ槸IE' );
         * }
         * ```
         */
        ie		:  /(msie\s|trident.*rv:)([\w.]+)/.test(agent),

        /**
         * @property {boolean} opera 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁涓篛pera
         * @example
         * ```javascript
         * if ( UE.browser.opera ) {
         *     console.log( '褰撳墠娴忚鍣ㄦ槸Opera' );
         * }
         * ```
         */
        opera	: ( !!opera && opera.version ),

        /**
         * @property {boolean} webkit 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁鏄痺ebkit鍐呮牳鐨勬祻瑙堝櫒
         * @example
         * ```javascript
         * if ( UE.browser.webkit ) {
         *     console.log( '褰撳墠娴忚鍣ㄦ槸webkit鍐呮牳娴忚鍣�' );
         * }
         * ```
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * @property {boolean} mac 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁鏄繍琛屽湪mac骞冲彴涓�
         * @example
         * ```javascript
         * if ( UE.browser.mac ) {
         *     console.log( '褰撳墠娴忚鍣ㄨ繍琛屽湪mac骞冲彴涓�' );
         * }
         * ```
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * @property {boolean} quirks 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁澶勪簬鈥滄€紓妯″紡鈥濅笅
         * @example
         * ```javascript
         * if ( UE.browser.quirks ) {
         *     console.log( '褰撳墠娴忚鍣ㄨ繍琛屽浜庘€滄€紓妯″紡鈥�' );
         * }
         * ```
         */
        quirks : ( document.compatMode == 'BackCompat' )
      };

    /**
     * @property {boolean} gecko 妫€娴嬪綋鍓嶆祻瑙堝櫒鍐呮牳鏄惁鏄痝ecko鍐呮牳
     * @example
     * ```javascript
     * if ( UE.browser.gecko ) {
    *     console.log( '褰撳墠娴忚鍣ㄥ唴鏍告槸gecko鍐呮牳' );
    * }
     * ```
     */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){

      var v1 =  agent.match(/(?:msie\s([\w.]+))/);
      var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
      if(v1 && v2 && v1[1] && v2[1]){
        version = Math.max(v1[1]*1,v2[1]*1);
      }else if(v1 && v1[1]){
        version = v1[1]*1;
      }else if(v2 && v2[1]){
        version = v2[1]*1;
      }else{
        version = 0;
      }

      browser.ie11Compat = document.documentMode == 11;
      /**
       * @property { boolean } ie9Compat 妫€娴嬫祻瑙堝櫒妯″紡鏄惁涓� IE9 鍏煎妯″紡
       * @warning 濡傛灉娴忚鍣ㄤ笉鏄疘E锛� 鍒欒鍊间负undefined
       * @example
       * ```javascript
       * if ( UE.browser.ie9Compat ) {
         *     console.log( '褰撳墠娴忚鍣ㄨ繍琛屽湪IE9鍏煎妯″紡涓�' );
         * }
       * ```
       */
      browser.ie9Compat = document.documentMode == 9;

      /**
       * @property { boolean } ie8 妫€娴嬫祻瑙堝櫒鏄惁鏄疘E8娴忚鍣�
       * @warning 濡傛灉娴忚鍣ㄤ笉鏄疘E锛� 鍒欒鍊间负undefined
       * @example
       * ```javascript
       * if ( UE.browser.ie8 ) {
         *     console.log( '褰撳墠娴忚鍣ㄦ槸IE8娴忚鍣�' );
         * }
       * ```
       */
      browser.ie8 = !!document.documentMode;

      /**
       * @property { boolean } ie8Compat 妫€娴嬫祻瑙堝櫒妯″紡鏄惁涓� IE8 鍏煎妯″紡
       * @warning 濡傛灉娴忚鍣ㄤ笉鏄疘E锛� 鍒欒鍊间负undefined
       * @example
       * ```javascript
       * if ( UE.browser.ie8Compat ) {
         *     console.log( '褰撳墠娴忚鍣ㄨ繍琛屽湪IE8鍏煎妯″紡涓�' );
         * }
       * ```
       */
      browser.ie8Compat = document.documentMode == 8;

      /**
       * @property { boolean } ie7Compat 妫€娴嬫祻瑙堝櫒妯″紡鏄惁涓� IE7 鍏煎妯″紡
       * @warning 濡傛灉娴忚鍣ㄤ笉鏄疘E锛� 鍒欒鍊间负undefined
       * @example
       * ```javascript
       * if ( UE.browser.ie7Compat ) {
         *     console.log( '褰撳墠娴忚鍣ㄨ繍琛屽湪IE7鍏煎妯″紡涓�' );
         * }
       * ```
       */
      browser.ie7Compat = ( ( version == 7 && !document.documentMode )
      || document.documentMode == 7 );

      /**
       * @property { boolean } ie6Compat 妫€娴嬫祻瑙堝櫒妯″紡鏄惁涓� IE6 妯″紡 鎴栬€呮€紓妯″紡
       * @warning 濡傛灉娴忚鍣ㄤ笉鏄疘E锛� 鍒欒鍊间负undefined
       * @example
       * ```javascript
       * if ( UE.browser.ie6Compat ) {
         *     console.log( '褰撳墠娴忚鍣ㄨ繍琛屽湪IE6妯″紡鎴栬€呮€紓妯″紡涓�' );
         * }
       * ```
       */
      browser.ie6Compat = ( version < 7 || browser.quirks );

      browser.ie9above = version > 8;

      browser.ie9below = version < 9;

      browser.ie11above = version > 10;

      browser.ie11below = version < 11;

    }

    // Gecko.
    if ( browser.gecko ){
      var geckoRelease = agent.match( /rv:([\d\.]+)/ );
      if ( geckoRelease )
      {
        geckoRelease = geckoRelease[1].split( '.' );
        version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
      }
    }

    /**
     * @property { Number } chrome 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁涓篊hrome, 濡傛灉鏄紝鍒欒繑鍥濩hrome鐨勫ぇ鐗堟湰鍙�
     * @warning 濡傛灉娴忚鍣ㄤ笉鏄痗hrome锛� 鍒欒鍊间负undefined
     * @example
     * ```javascript
     * if ( UE.browser.chrome ) {
     *     console.log( '褰撳墠娴忚鍣ㄦ槸Chrome' );
     * }
     * ```
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
      browser.chrome = + RegExp['\x241'];
    }

    /**
     * @property { Number } safari 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁涓篠afari, 濡傛灉鏄紝鍒欒繑鍥濻afari鐨勫ぇ鐗堟湰鍙�
     * @warning 濡傛灉娴忚鍣ㄤ笉鏄痵afari锛� 鍒欒鍊间负undefined
     * @example
     * ```javascript
     * if ( UE.browser.safari ) {
     *     console.log( '褰撳墠娴忚鍣ㄦ槸Safari' );
     * }
     * ```
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
      browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
      version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
      version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * @property { Number } version 妫€娴嬪綋鍓嶆祻瑙堝櫒鐗堟湰鍙�
     * @remind
     * <ul>
     *     <li>IE绯诲垪杩斿洖鍊间负5,6,7,8,9,10绛�</li>
     *     <li>gecko绯诲垪浼氳繑鍥�10900锛�158900绛�</li>
     *     <li>webkit绯诲垪浼氳繑鍥炲叾build鍙� (濡� 522绛�)</li>
     * </ul>
     * @example
     * ```javascript
     * console.log( '褰撳墠娴忚鍣ㄧ増鏈彿鏄細 ' + UE.browser.version );
     * ```
     */
    browser.version = version;

    /**
     * @property { boolean } isCompatible 妫€娴嬪綋鍓嶆祻瑙堝櫒鏄惁鑳藉涓嶶Editor鑹ソ鍏煎
     * @example
     * ```javascript
     * if ( UE.browser.isCompatible ) {
     *     console.log( '娴忚鍣ㄤ笌UEditor鑳藉鑹ソ鍏煎' );
     * }
     * ```
     */
    browser.isCompatible =
      !browser.mobile && (
      ( browser.ie && version >= 6 ) ||
      ( browser.gecko && version >= 10801 ) ||
      ( browser.opera && version >= 9.5 ) ||
      ( browser.air && version >= 1 ) ||
      ( browser.webkit && version >= 522 ) ||
      false );
    return browser;
  }();
//蹇嵎鏂瑰紡
  var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;

// core/utils.js
  /**
   * 宸ュ叿鍑芥暟鍖�
   * @file
   * @module UE.utils
   * @since 1.2.6.1
   */

  /**
   * UEditor灏佽浣跨敤鐨勯潤鎬佸伐鍏峰嚱鏁�
   * @module UE.utils
   * @unfile
   */

  var utils = UE.utils = {

    /**
     * 鐢ㄧ粰瀹氱殑杩唬鍣ㄩ亶鍘嗗璞�
     * @method each
     * @param { Object } obj 闇€瑕侀亶鍘嗙殑瀵硅薄
     * @param { Function } iterator 杩唬鍣紝 璇ユ柟娉曟帴鍙椾袱涓弬鏁帮紝 绗竴涓弬鏁版槸褰撳墠鎵€澶勭悊鐨剉alue锛� 绗簩涓弬鏁版槸褰撳墠閬嶅巻瀵硅薄鐨刱ey
     * @example
     * ```javascript
     * var demoObj = {
     *     key1: 1,
     *     key2: 2
     * };
     *
     * //output: key1: 1, key2: 2
     * UE.utils.each( demoObj, funciton ( value, key ) {
     *
     *     console.log( key + ":" + value );
     *
     * } );
     * ```
     */

    /**
     * 鐢ㄧ粰瀹氱殑杩唬鍣ㄩ亶鍘嗘暟缁勬垨绫绘暟缁勫璞�
     * @method each
     * @param { Array } array 闇€瑕侀亶鍘嗙殑鏁扮粍鎴栬€呯被鏁扮粍
     * @param { Function } iterator 杩唬鍣紝 璇ユ柟娉曟帴鍙椾袱涓弬鏁帮紝 绗竴涓弬鏁版槸褰撳墠鎵€澶勭悊鐨剉alue锛� 绗簩涓弬鏁版槸褰撳墠閬嶅巻瀵硅薄鐨刱ey
     * @example
     * ```javascript
     * var divs = document.getElmentByTagNames( "div" );
     *
     * //output: 0: DIV, 1: DIV ...
     * UE.utils.each( divs, funciton ( value, key ) {
     *
     *     console.log( key + ":" + value.tagName );
     *
     * } );
     * ```
     */
    each : function(obj, iterator, context) {
      if (obj == null) return;
      if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if(iterator.call(context, obj[i], i, obj) === false)
            return false;
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if(iterator.call(context, obj[key], key, obj) === false)
              return false;
          }
        }
      }
    },

    /**
     * 浠ョ粰瀹氬璞′綔涓哄師鍨嬪垱寤轰竴涓柊瀵硅薄
     * @method makeInstance
     * @param { Object } protoObject 璇ュ璞″皢浣滀负鏂板垱寤哄璞＄殑鍘熷瀷
     * @return { Object } 鏂扮殑瀵硅薄锛� 璇ュ璞＄殑鍘熷瀷鏄粰瀹氱殑protoObject瀵硅薄
     * @example
     * ```javascript
     *
     * var protoObject = { sayHello: function () { console.log('Hello UEditor!'); } };
     *
     * var newObject = UE.utils.makeInstance( protoObject );
     * //output: Hello UEditor!
     * newObject.sayHello();
     * ```
     */
    makeInstance:function (obj) {
      var noop = new Function();
      noop.prototype = obj;
      obj = new noop;
      noop.prototype = null;
      return obj;
    },

    /**
     * 灏唖ource瀵硅薄涓殑灞炴€ф墿灞曞埌target瀵硅薄涓�
     * @method extend
     * @remind 璇ユ柟娉曞皢寮哄埗鎶妔ource瀵硅薄涓婄殑灞炴€у鍒跺埌target瀵硅薄涓�
     * @see UE.utils.extend(Object,Object,Boolean)
     * @param { Object } target 鐩爣瀵硅薄锛� 鏂扮殑灞炴€у皢闄勫姞鍒拌瀵硅薄涓�
     * @param { Object } source 婧愬璞★紝 璇ュ璞＄殑灞炴€т細琚檮鍔犲埌target瀵硅薄涓�
     * @return { Object } 杩斿洖target瀵硅薄
     * @example
     * ```javascript
     *
     * var target = { name: 'target', sex: 1 },
     *      source = { name: 'source', age: 17 };
     *
     * UE.utils.extend( target, source );
     *
     * //output: { name: 'source', sex: 1, age: 17 }
     * console.log( target );
     *
     * ```
     */

    /**
     * 灏唖ource瀵硅薄涓殑灞炴€ф墿灞曞埌target瀵硅薄涓婏紝 鏍规嵁鎸囧畾鐨刬sKeepTarget鍊煎喅瀹氭槸鍚︿繚鐣欑洰鏍囧璞′腑涓�
     * 婧愬璞″睘鎬у悕鐩稿悓鐨勫睘鎬у€笺€�
     * @method extend
     * @param { Object } target 鐩爣瀵硅薄锛� 鏂扮殑灞炴€у皢闄勫姞鍒拌瀵硅薄涓�
     * @param { Object } source 婧愬璞★紝 璇ュ璞＄殑灞炴€т細琚檮鍔犲埌target瀵硅薄涓�
     * @param { Boolean } isKeepTarget 鏄惁淇濈暀鐩爣瀵硅薄涓笌婧愬璞′腑灞炴€у悕鐩稿悓鐨勫睘鎬�
     * @return { Object } 杩斿洖target瀵硅薄
     * @example
     * ```javascript
     *
     * var target = { name: 'target', sex: 1 },
     *      source = { name: 'source', age: 17 };
     *
     * UE.utils.extend( target, source, true );
     *
     * //output: { name: 'target', sex: 1, age: 17 }
     * console.log( target );
     *
     * ```
     */
    extend:function (t, s, b) {
      if (s) {
        for (var k in s) {
          if (!b || !t.hasOwnProperty(k)) {
            t[k] = s[k];
          }
        }
      }
      return t;
    },

    /**
     * 灏嗙粰瀹氱殑澶氫釜瀵硅薄鐨勫睘鎬у鍒跺埌鐩爣瀵硅薄target涓�
     * @method extend2
     * @remind 璇ユ柟娉曞皢寮哄埗鎶婃簮瀵硅薄涓婄殑灞炴€у鍒跺埌target瀵硅薄涓�
     * @remind 璇ユ柟娉曟敮鎸佷袱涓強浠ヤ笂鐨勫弬鏁帮紝 浠庣浜屼釜鍙傛暟寮€濮嬶紝 鍏跺睘鎬ч兘浼氳澶嶅埗鍒扮涓€涓弬鏁颁笂銆� 濡傛灉閬囧埌鍚屽悕鐨勫睘鎬э紝
     *          灏嗕細瑕嗙洊鎺変箣鍓嶇殑鍊笺€�
     * @param { Object } target 鐩爣瀵硅薄锛� 鏂扮殑灞炴€у皢闄勫姞鍒拌瀵硅薄涓�
     * @param { Object... } source 婧愬璞★紝 鏀寔澶氫釜瀵硅薄锛� 璇ュ璞＄殑灞炴€т細琚檮鍔犲埌target瀵硅薄涓�
     * @return { Object } 杩斿洖target瀵硅薄
     * @example
     * ```javascript
     *
     * var target = {},
     *     source1 = { name: 'source', age: 17 },
     *     source2 = { title: 'dev' };
     *
     * UE.utils.extend2( target, source1, source2 );
     *
     * //output: { name: 'source', age: 17, title: 'dev' }
     * console.log( target );
     *
     * ```
     */
    extend2:function (t) {
      var a = arguments;
      for (var i = 1; i < a.length; i++) {
        var x = a[i];
        for (var k in x) {
          if (!t.hasOwnProperty(k)) {
            t[k] = x[k];
          }
        }
      }
      return t;
    },

    /**
     * 妯℃嫙缁ф壙鏈哄埗锛� 浣垮緱subClass缁ф壙鑷猻uperClass
     * @method inherits
     * @param { Object } subClass 瀛愮被瀵硅薄
     * @param { Object } superClass 瓒呯被瀵硅薄
     * @warning 璇ユ柟娉曞彧鑳借subClass缁ф壙瓒呯被鐨勫師鍨嬶紝 subClass瀵硅薄鑷韩鐨勫睘鎬у拰鏂规硶涓嶄細琚户鎵�
     * @return { Object } 缁ф壙superClass鍚庣殑瀛愮被瀵硅薄
     * @example
     * ```javascript
     * function SuperClass(){
     *     this.name = "灏忔潕";
     * }
     *
     * SuperClass.prototype = {
     *     hello:function(str){
     *         console.log(this.name + str);
     *     }
     * }
     *
     * function SubClass(){
     *     this.name = "灏忓紶";
     * }
     *
     * UE.utils.inherits(SubClass,SuperClass);
     *
     * var sub = new SubClass();
     * //output: '灏忓紶鏃╀笂濂�!
     * sub.hello("鏃╀笂濂�!");
     * ```
     */
    inherits:function (subClass, superClass) {
      var oldP = subClass.prototype,
        newP = utils.makeInstance(superClass.prototype);
      utils.extend(newP, oldP, true);
      subClass.prototype = newP;
      return (newP.constructor = subClass);
    },

    /**
     * 鐢ㄦ寚瀹氱殑context瀵硅薄浣滀负鍑芥暟fn鐨勪笂涓嬫枃
     * @method bind
     * @param { Function } fn 闇€瑕佺粦瀹氫笂涓嬫枃鐨勫嚱鏁板璞�
     * @param { Object } content 鍑芥暟fn鏂扮殑涓婁笅鏂囧璞�
     * @return { Function } 涓€涓柊鐨勫嚱鏁帮紝 璇ュ嚱鏁颁綔涓哄師濮嬪嚱鏁癴n鐨勪唬鐞嗭紝 灏嗗畬鎴恌n鐨勪笂涓嬫枃璋冩崲宸ヤ綔銆�
     * @example
     * ```javascript
     *
     * var name = 'window',
     *     newTest = null;
     *
     * function test () {
     *     console.log( this.name );
     * }
     *
     * newTest = UE.utils.bind( test, { name: 'object' } );
     *
     * //output: object
     * newTest();
     *
     * //output: window
     * test();
     *
     * ```
     */
    bind:function (fn, context) {
      return function () {
        return fn.apply(context, arguments);
      };
    },

    /**
     * 鍒涘缓寤惰繜鎸囧畾鏃堕棿鍚庢墽琛岀殑鍑芥暟fn
     * @method defer
     * @param { Function } fn 闇€瑕佸欢杩熸墽琛岀殑鍑芥暟瀵硅薄
     * @param { int } delay 寤惰繜鐨勬椂闂达紝 鍗曚綅鏄绉�
     * @warning 璇ユ柟娉曠殑鏃堕棿鎺у埗鏄笉绮剧‘鐨勶紝浠呬粎鍙兘淇濊瘉鍑芥暟鐨勬墽琛屾槸鍦ㄧ粰瀹氱殑鏃堕棿涔嬪悗锛�
     *           鑰屼笉鑳戒繚璇佸垰濂藉埌杈惧欢杩熸椂闂存椂鎵ц銆�
     * @return { Function } 鐩爣鍑芥暟fn鐨勪唬鐞嗗嚱鏁帮紝 鍙湁鎵ц璇ュ嚱鏁版墠鑳借捣鍒板欢鏃舵晥鏋�
     * @example
     * ```javascript
     * var start = 0;
     *
     * function test(){
     *     console.log( new Date() - start );
     * }
     *
     * var testDefer = UE.utils.defer( test, 1000 );
     * //
     * start = new Date();
     * //output: (澶х害鍦�1000姣涔嬪悗杈撳嚭) 1000
     * testDefer();
     * ```
     */

    /**
     * 鍒涘缓寤惰繜鎸囧畾鏃堕棿鍚庢墽琛岀殑鍑芥暟fn, 濡傛灉鍦ㄥ欢杩熸椂闂村唴鍐嶆鎵ц璇ユ柟娉曪紝 灏嗕細鏍规嵁鎸囧畾鐨別xclusion鐨勫€硷紝
     * 鍐冲畾鏄惁鍙栨秷鍓嶄竴娆″嚱鏁扮殑鎵ц锛� 濡傛灉exclusion鐨勫€间负true锛� 鍒欏彇娑堟墽琛岋紝鍙嶄箣锛屽皢缁х画鎵ц鍓嶄竴涓柟娉曘€�
     * @method defer
     * @param { Function } fn 闇€瑕佸欢杩熸墽琛岀殑鍑芥暟瀵硅薄
     * @param { int } delay 寤惰繜鐨勬椂闂达紝 鍗曚綅鏄绉�
     * @param { Boolean } exclusion 濡傛灉鍦ㄥ欢杩熸椂闂村唴鍐嶆鎵ц璇ュ嚱鏁帮紝璇ュ€煎皢鍐冲畾鏄惁鍙栨秷鎵ц鍓嶄竴娆″嚱鏁扮殑鎵ц锛�
     *                     鍊间负true琛ㄧず鍙栨秷鎵ц锛� 鍙嶄箣鍒欏皢鍦ㄦ墽琛屽墠涓€娆″嚱鏁颁箣鍚庢墠鎵ц鏈鍑芥暟璋冪敤銆�
     * @warning 璇ユ柟娉曠殑鏃堕棿鎺у埗鏄笉绮剧‘鐨勶紝浠呬粎鍙兘淇濊瘉鍑芥暟鐨勬墽琛屾槸鍦ㄧ粰瀹氱殑鏃堕棿涔嬪悗锛�
     *           鑰屼笉鑳戒繚璇佸垰濂藉埌杈惧欢杩熸椂闂存椂鎵ц銆�
     * @return { Function } 鐩爣鍑芥暟fn鐨勪唬鐞嗗嚱鏁帮紝 鍙湁鎵ц璇ュ嚱鏁版墠鑳借捣鍒板欢鏃舵晥鏋�
     * @example
     * ```javascript
     *
     * function test(){
     *     console.log(1);
     * }
     *
     * var testDefer = UE.utils.defer( test, 1000, true );
     *
     * //output: (涓ゆ璋冪敤浠呮湁涓€娆¤緭鍑�) 1
     * testDefer();
     * testDefer();
     * ```
     */
    defer:function (fn, delay, exclusion) {
      var timerID;
      return function () {
        if (exclusion) {
          clearTimeout(timerID);
        }
        timerID = setTimeout(fn, delay);
      };
    },

    /**
     * 鑾峰彇鍏冪礌item鍦ㄦ暟缁刟rray涓娆″嚭鐜扮殑浣嶇疆, 濡傛灉鏈壘鍒癷tem锛� 鍒欒繑鍥�-1
     * @method indexOf
     * @remind 璇ユ柟娉曠殑鍖归厤杩囩▼浣跨敤鐨勬槸鎭掔瓑鈥�===鈥�
     * @param { Array } array 闇€瑕佹煡鎵剧殑鏁扮粍瀵硅薄
     * @param { * } item 闇€瑕佸湪鐩爣鏁扮粍涓煡鎵剧殑鍊�
     * @return { int } 杩斿洖item鍦ㄧ洰鏍囨暟缁刟rray涓娆″嚭鐜扮殑浣嶇疆锛� 濡傛灉鍦ㄦ暟缁勪腑鏈壘鍒癷tem锛� 鍒欒繑鍥�-1
     * @example
     * ```javascript
     * var item = 1,
     *     arr = [ 3, 4, 6, 8, 1, 1, 2 ];
     *
     * //output: 4
     * console.log( UE.utils.indexOf( arr, item ) );
     * ```
     */

    /**
     * 鑾峰彇鍏冪礌item鏁扮粍array涓娆″嚭鐜扮殑浣嶇疆, 濡傛灉鏈壘鍒癷tem锛� 鍒欒繑鍥�-1銆傞€氳繃start鐨勫€煎彲浠ユ寚瀹氭悳绱㈢殑璧峰浣嶇疆銆�
     * @method indexOf
     * @remind 璇ユ柟娉曠殑鍖归厤杩囩▼浣跨敤鐨勬槸鎭掔瓑鈥�===鈥�
     * @param { Array } array 闇€瑕佹煡鎵剧殑鏁扮粍瀵硅薄
     * @param { * } item 闇€瑕佸湪鐩爣鏁扮粍涓煡鎵剧殑鍊�
     * @param { int } start 鎼滅储鐨勮捣濮嬩綅缃�
     * @return { int } 杩斿洖item鍦ㄧ洰鏍囨暟缁刟rray涓殑start浣嶇疆涔嬪悗棣栨鍑虹幇鐨勪綅缃紝 濡傛灉鍦ㄦ暟缁勪腑鏈壘鍒癷tem锛� 鍒欒繑鍥�-1
     * @example
     * ```javascript
     * var item = 1,
     *     arr = [ 3, 4, 6, 8, 1, 2, 8, 3, 2, 1, 1, 4 ];
     *
     * //output: 9
     * console.log( UE.utils.indexOf( arr, item, 5 ) );
     * ```
     */
    indexOf:function (array, item, start) {
      var index = -1;
      start = this.isNumber(start) ? start : 0;
      this.each(array, function (v, i) {
        if (i >= start && v === item) {
          index = i;
          return false;
        }
      });
      return index;
    },

    /**
     * 绉婚櫎鏁扮粍array涓墍鏈夌殑鍏冪礌item
     * @method removeItem
     * @param { Array } array 瑕佺Щ闄ゅ厓绱犵殑鐩爣鏁扮粍
     * @param { * } item 灏嗚琚Щ闄ょ殑鍏冪礌
     * @remind 璇ユ柟娉曠殑鍖归厤杩囩▼浣跨敤鐨勬槸鎭掔瓑鈥�===鈥�
     * @example
     * ```javascript
     * var arr = [ 4, 5, 7, 1, 3, 4, 6 ];
     *
     * UE.utils.removeItem( arr, 4 );
     * //output: [ 5, 7, 1, 3, 6 ]
     * console.log( arr );
     *
     * ```
     */
    removeItem:function (array, item) {
      for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
          array.splice(i, 1);
          i--;
        }
      }
    },

    /**
     * 鍒犻櫎瀛楃涓瞫tr鐨勯灏剧┖鏍�
     * @method trim
     * @param { String } str 闇€瑕佸垹闄ら灏剧┖鏍肩殑瀛楃涓�
     * @return { String } 鍒犻櫎浜嗛灏剧殑绌烘牸鍚庣殑瀛楃涓�
     * @example
     * ```javascript
     *
     * var str = " UEdtior ";
     *
     * //output: 9
     * console.log( str.length );
     *
     * //output: 7
     * console.log( UE.utils.trim( " UEdtior " ).length );
     *
     * //output: 9
     * console.log( str.length );
     *
     *  ```
     */
    trim:function (str) {
      return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },

    /**
     * 灏嗗瓧绗︿覆str浠�','鍒嗛殧鎴愭暟缁勫悗锛屽皢璇ユ暟缁勮浆鎹㈡垚鍝堝笇瀵硅薄锛� 鍏剁敓鎴愮殑hash瀵硅薄鐨刱ey涓烘暟缁勪腑鐨勫厓绱狅紝 value涓�1
     * @method listToMap
     * @warning 璇ユ柟娉曞湪鐢熸垚鐨刪ash瀵硅薄涓紝浼氫负姣忎竴涓猭ey鍚屾椂鐢熸垚涓€涓彟涓€涓叏澶у啓鐨刱ey銆�
     * @param { String } str 璇ュ瓧绗︿覆灏嗚浠�','鍒嗗壊涓烘暟缁勶紝 鐒跺悗杩涜杞寲
     * @return { Object } 杞寲涔嬪悗鐨刪ash瀵硅薄
     * @example
     * ```javascript
     *
     * //output: Object {UEdtior: 1, UEDTIOR: 1, Hello: 1, HELLO: 1}
     * console.log( UE.utils.listToMap( 'UEdtior,Hello' ) );
     *
     * ```
     */

    /**
     * 灏嗗瓧绗︿覆鏁扮粍杞崲鎴愬搱甯屽璞★紝 鍏剁敓鎴愮殑hash瀵硅薄鐨刱ey涓烘暟缁勪腑鐨勫厓绱狅紝 value涓�1
     * @method listToMap
     * @warning 璇ユ柟娉曞湪鐢熸垚鐨刪ash瀵硅薄涓紝浼氫负姣忎竴涓猭ey鍚屾椂鐢熸垚涓€涓彟涓€涓叏澶у啓鐨刱ey銆�
     * @param { Array } arr 瀛楃涓叉暟缁�
     * @return { Object } 杞寲涔嬪悗鐨刪ash瀵硅薄
     * @example
     * ```javascript
     *
     * //output: Object {UEdtior: 1, UEDTIOR: 1, Hello: 1, HELLO: 1}
     * console.log( UE.utils.listToMap( [ 'UEdtior', 'Hello' ] ) );
     *
     * ```
     */
    listToMap:function (list) {
      if (!list)return {};
      list = utils.isArray(list) ? list : list.split(',');
      for (var i = 0, ci, obj = {}; ci = list[i++];) {
        obj[ci.toUpperCase()] = obj[ci] = 1;
      }
      return obj;
    },

    /**
     * 灏唖tr涓殑html绗﹀彿杞箟,灏嗚浆涔夆€�'锛�&锛�<锛�"锛�>鈥濅簲涓瓧绗�
     * @method unhtml
     * @param { String } str 闇€瑕佽浆涔夌殑瀛楃涓�
     * @return { String } 杞箟鍚庣殑瀛楃涓�
     * @example
     * ```javascript
     * var html = '<body>&</body>';
     *
     * //output: &lt;body&gt;&amp;&lt;/body&gt;
     * console.log( UE.utils.unhtml( html ) );
     *
     * ```
     */
    unhtml:function (str, reg) {
      return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function (a, b) {
        if (b) {
          return a;
        } else {
          return {
            '<':'&lt;',
            '&':'&amp;',
            '"':'&quot;',
            '>':'&gt;',
            "'":'&#39;'
          }[a]
        }

      }) : '';
    },
    /**
     * 灏唘rl涓殑html瀛楃杞箟锛� 浠呰浆涔�  ', ", <, > 鍥涗釜瀛楃
     * @param  { String } str 闇€瑕佽浆涔夌殑瀛楃涓�
     * @param  { RegExp } reg 鑷畾涔夌殑姝ｅ垯
     * @return { String }     杞箟鍚庣殑瀛楃涓�
     */
    unhtmlForUrl:function (str, reg) {
      return str ? str.replace(reg || /[<">']/g, function (a) {
        return {
          '<':'&lt;',
          '&':'&amp;',
          '"':'&quot;',
          '>':'&gt;',
          "'":'&#39;'
        }[a]

      }) : '';
    },

    /**
     * 灏唖tr涓殑杞箟瀛楃杩樺師鎴恏tml瀛楃
     * @see UE.utils.unhtml(String);
     * @method html
     * @param { String } str 闇€瑕侀€嗚浆涔夌殑瀛楃涓�
     * @return { String } 閫嗚浆涔夊悗鐨勫瓧绗︿覆
     * @example
     * ```javascript
     *
     * var str = '&lt;body&gt;&amp;&lt;/body&gt;';
     *
     * //output: <body>&</body>
     * console.log( UE.utils.html( str ) );
     *
     * ```
     */
    html:function (str) {
      return str ? str.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function (m) {
        return {
          '&lt;':'<',
          '&amp;':'&',
          '&quot;':'"',
          '&gt;':'>',
          '&#39;':"'",
          '&nbsp;':' '
        }[m]
      }) : '';
    },

    /**
     * 灏哻ss鏍峰紡杞崲涓洪┘宄扮殑褰㈠紡
     * @method cssStyleToDomStyle
     * @param { String } cssName 闇€瑕佽浆鎹㈢殑css鏍峰紡鍚�
     * @return { String } 杞崲鎴愰┘宄板舰寮忓悗鐨刢ss鏍峰紡鍚�
     * @example
     * ```javascript
     *
     * var str = 'border-top';
     *
     * //output: borderTop
     * console.log( UE.utils.cssStyleToDomStyle( str ) );
     *
     * ```
     */
    cssStyleToDomStyle:function () {
      var test = document.createElement('div').style,
        cache = {
          'float':test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat' : 'float'
        };

      return function (cssName) {
        return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function (match) {
            return match.charAt(1).toUpperCase();
          }));
      };
    }(),

    /**
     * 鍔ㄦ€佸姞杞芥枃浠跺埌doc涓�
     * @method loadFile
     * @param { DomDocument } document 闇€瑕佸姞杞借祫婧愭枃浠剁殑鏂囨。瀵硅薄
     * @param { Object } options 鍔犺浇璧勬簮鏂囦欢鐨勫睘鎬ч泦鍚堬紝 鍙栧€艰鍙傝€冧唬鐮佺ず渚�
     * @example
     * ```javascript
     *
     * UE.utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * } );
     *
     * ```
     */

    /**
     * 鍔ㄦ€佸姞杞芥枃浠跺埌doc涓紝鍔犺浇鎴愬姛鍚庢墽琛岀殑鍥炶皟鍑芥暟fn
     * @method loadFile
     * @param { DomDocument } document 闇€瑕佸姞杞借祫婧愭枃浠剁殑鏂囨。瀵硅薄
     * @param { Object } options 鍔犺浇璧勬簮鏂囦欢鐨勫睘鎬ч泦鍚堬紝 璇ラ泦鍚堟敮鎸佺殑鍊兼槸script鏍囩鍜宻tyle鏍囩鏀寔鐨勬墍鏈夊睘鎬с€�
     * @param { Function } fn 璧勬簮鏂囦欢鍔犺浇鎴愬姛涔嬪悗鎵ц鐨勫洖璋�
     * @warning 瀵逛簬鍦ㄥ悓涓€涓枃妗ｄ腑澶氭鍔犺浇鍚屼竴URL鐨勬枃浠讹紝 璇ユ柟娉曚細鍦ㄧ涓€娆″姞杞戒箣鍚庣紦瀛樿璇锋眰锛�
     *           鍦ㄦ涔嬪悗鐨勬墍鏈夊悓涓€URL鐨勮姹傦紝 灏嗕細鐩存帴瑙﹀彂鍥炶皟銆�
     * @example
     * ```javascript
     *
     * UE.utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * }, function () {
     *     console.log('鍔犺浇鎴愬姛');
     * } );
     *
     * ```
     */
    loadFile:function () {
      var tmpList = [];

      function getItem(doc, obj) {
        try {
          for (var i = 0, ci; ci = tmpList[i++];) {
            if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
              return ci;
            }
          }
        } catch (e) {
          return null;
        }

      }

      return function (doc, obj, fn) {
        var item = getItem(doc, obj);
        if (item) {
          if (item.ready) {
            fn && fn();
          } else {
            item.funs.push(fn)
          }
          return;
        }
        tmpList.push({
          doc:doc,
          url:obj.src || obj.href,
          funs:[fn]
        });
        if (!doc.body) {
          var html = [];
          for (var p in obj) {
            if (p == 'tag')continue;
            html.push(p + '="' + obj[p] + '"')
          }
          doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
          return;
        }
        if (obj.id && doc.getElementById(obj.id)) {
          return;
        }
        var element = doc.createElement(obj.tag);
        delete obj.tag;
        for (var p in obj) {
          element.setAttribute(p, obj[p]);
        }
        element.onload = element.onreadystatechange = function () {
          if (!this.readyState || /loaded|complete/.test(this.readyState)) {
            item = getItem(doc, obj);
            if (item.funs.length > 0) {
              item.ready = 1;
              for (var fi; fi = item.funs.pop();) {
                fi();
              }
            }
            element.onload = element.onreadystatechange = null;
          }
        };
        element.onerror = function () {
          throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file ueditor.config.js ')
        };
        doc.getElementsByTagName("head")[0].appendChild(element);
      }
    }(),

    /**
     * 鍒ゆ柇obj瀵硅薄鏄惁涓虹┖
     * @method isEmptyObject
     * @param { * } obj 闇€瑕佸垽鏂殑瀵硅薄
     * @remind 濡傛灉鍒ゆ柇鐨勫璞℃槸NULL锛� 灏嗙洿鎺ヨ繑鍥瀟rue锛� 濡傛灉鏄暟缁勪笖涓虹┖锛� 杩斿洖true锛� 濡傛灉鏄瓧绗︿覆锛� 涓斿瓧绗︿覆涓虹┖锛�
     *          杩斿洖true锛� 濡傛灉鏄櫘閫氬璞★紝 涓旇瀵硅薄娌℃湁浠讳綍瀹炰緥灞炴€э紝 杩斿洖true
     * @return { Boolean } 瀵硅薄鏄惁涓虹┖
     * @example
     * ```javascript
     *
     * //output: true
     * console.log( UE.utils.isEmptyObject( {} ) );
     *
     * //output: true
     * console.log( UE.utils.isEmptyObject( [] ) );
     *
     * //output: true
     * console.log( UE.utils.isEmptyObject( "" ) );
     *
     * //output: false
     * console.log( UE.utils.isEmptyObject( { key: 1 } ) );
     *
     * //output: false
     * console.log( UE.utils.isEmptyObject( [1] ) );
     *
     * //output: false
     * console.log( UE.utils.isEmptyObject( "1" ) );
     *
     * ```
     */
    isEmptyObject:function (obj) {
      if (obj == null) return true;
      if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
      for (var key in obj) if (obj.hasOwnProperty(key)) return false;
      return true;
    },

    /**
     * 鎶妑gb鏍煎紡鐨勯鑹插€艰浆鎹㈡垚16杩涘埗鏍煎紡
     * @method fixColor
     * @param { String } rgb鏍煎紡鐨勯鑹插€�
     * @param { String }
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    fixColor:function (name, value) {
      if (/color/i.test(name) && /rgba?/.test(value)) {
        var array = value.split(",");
        if (array.length > 3)
          return "";
        value = "#";
        for (var i = 0, color; color = array[i++];) {
          color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
          value += color.length == 1 ? "0" + color : color;
        }
        value = value.toUpperCase();
      }
      return  value;
    },
    /**
     * 鍙拡瀵筨order,padding,margin鍋氫簡澶勭悊锛屽洜涓烘€ц兘闂
     * @public
     * @function
     * @param {String}    val style瀛楃涓�
     */
    optCss:function (val) {
      var padding, margin, border;
      val = val.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function (str, key, name, val) {
        if (val.split(' ').length == 1) {
          switch (key) {
            case 'padding':
              !padding && (padding = {});
              padding[name] = val;
              return '';
            case 'margin':
              !margin && (margin = {});
              margin[name] = val;
              return '';
            case 'border':
              return val == 'initial' ? '' : str;
          }
        }
        return str;
      });

      function opt(obj, name) {
        if (!obj) {
          return '';
        }
        var t = obj.top , b = obj.bottom, l = obj.left, r = obj.right, val = '';
        if (!t || !l || !b || !r) {
          for (var p in obj) {
            val += ';' + name + '-' + p + ':' + obj[p] + ';';
          }
        } else {
          val += ';' + name + ':' +
            (t == b && b == l && l == r ? t :
              t == b && l == r ? (t + ' ' + l) :
                l == r ? (t + ' ' + l + ' ' + b) : (t + ' ' + r + ' ' + b + ' ' + l)) + ';'
        }
        return val;
      }

      val += opt(padding, 'padding') + opt(margin, 'margin');
      return val.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, '').replace(/;([ \n\r\t]+)|\1;/g, ';')
        .replace(/(&((l|g)t|quot|#39))?;{2,}/g, function (a, b) {
          return b ? b + ";;" : ';'
        });
    },

    /**
     * 鍏嬮殕瀵硅薄
     * @method clone
     * @param { Object } source 婧愬璞�
     * @return { Object } source鐨勪竴涓壇鏈�
     */

    /**
     * 娣卞害鍏嬮殕瀵硅薄锛屽皢source鐨勫睘鎬у厠闅嗗埌target瀵硅薄锛� 浼氳鐩杢arget閲嶅悕鐨勫睘鎬с€�
     * @method clone
     * @param { Object } source 婧愬璞�
     * @param { Object } target 鐩爣瀵硅薄
     * @return { Object } 闄勫姞浜唖ource瀵硅薄鎵€鏈夊睘鎬х殑target瀵硅薄
     */
    clone:function (source, target) {
      var tmp;
      target = target || {};
      for (var i in source) {
        if (source.hasOwnProperty(i)) {
          tmp = source[i];
          if (typeof tmp == 'object') {
            target[i] = utils.isArray(tmp) ? [] : {};
            utils.clone(source[i], target[i])
          } else {
            target[i] = tmp;
          }
        }
      }
      return target;
    },

    /**
     * 鎶奵m锛弍t涓哄崟浣嶇殑鍊艰浆鎹负px涓哄崟浣嶇殑鍊�
     * @method transUnitToPx
     * @param { String } 寰呰浆鎹㈢殑甯﹀崟浣嶇殑瀛楃涓�
     * @return { String } 杞崲涓簆x涓鸿閲忓崟浣嶇殑鍊肩殑瀛楃涓�
     * @example
     * ```javascript
     *
     * //output: 500px
     * console.log( UE.utils.transUnitToPx( '20cm' ) );
     *
     * //output: 27px
     * console.log( UE.utils.transUnitToPx( '20pt' ) );
     *
     * ```
     */
    transUnitToPx:function (val) {
      if (!/(pt|cm)/.test(val)) {
        return val
      }
      var unit;
      val.replace(/([\d.]+)(\w+)/, function (str, v, u) {
        val = v;
        unit = u;
      });
      switch (unit) {
        case 'cm':
          val = parseFloat(val) * 25;
          break;
        case 'pt':
          val = Math.round(parseFloat(val) * 96 / 72);
      }
      return val + (val ? 'px' : '');
    },

    /**
     * 鍦╠om鏍憆eady涔嬪悗鎵ц缁欏畾鐨勫洖璋冨嚱鏁�
     * @method domReady
     * @remind 濡傛灉鍦ㄦ墽琛岃鏂规硶鐨勬椂鍊欙紝 dom鏍戝凡缁弐eady锛� 閭ｄ箞鍥炶皟鍑芥暟灏嗙珛鍒绘墽琛�
     * @param { Function } fn dom鏍憆eady涔嬪悗鐨勫洖璋冨嚱鏁�
     * @example
     * ```javascript
     *
     * UE.utils.domReady( function () {
     *
     *     console.log('123');
     *
     * } );
     *
     * ```
     */
    domReady:function () {

      var fnArr = [];

      function doReady(doc) {
        //纭繚onready鍙墽琛屼竴娆�
        doc.isReady = true;
        for (var ci; ci = fnArr.pop(); ci()) {
        }
      }

      return function (onready, win) {
        win = win || window;
        var doc = win.document;
        onready && fnArr.push(onready);
        if (doc.readyState === "complete") {
          doReady(doc);
        } else {
          doc.isReady && doReady(doc);
          if (browser.ie && browser.version != 11) {
            (function () {
              if (doc.isReady) return;
              try {
                doc.documentElement.doScroll("left");
              } catch (error) {
                setTimeout(arguments.callee, 0);
                return;
              }
              doReady(doc);
            })();
            win.attachEvent('onload', function () {
              doReady(doc)
            });
          } else {
            doc.addEventListener("DOMContentLoaded", function () {
              doc.removeEventListener("DOMContentLoaded", arguments.callee, false);
              doReady(doc);
            }, false);
            win.addEventListener('load', function () {
              doReady(doc)
            }, false);
          }
        }

      }
    }(),

    /**
     * 鍔ㄦ€佹坊鍔燾ss鏍峰紡
     * @method cssRule
     * @param { String } 鑺傜偣鍚嶇О
     * @grammar UE.utils.cssRule('娣诲姞鐨勬牱寮忕殑鑺傜偣鍚嶇О',['鏍峰紡'锛�'鏀惧埌鍝釜document涓�'])
     * @grammar UE.utils.cssRule('body','body{background:#ccc}') => null  //缁檅ody娣诲姞鑳屾櫙棰滆壊
     * @grammar UE.utils.cssRule('body') =>鏍峰紡鐨勫瓧绗︿覆  //鍙栧緱key鍊间负body鐨勬牱寮忕殑鍐呭,濡傛灉娌℃湁鎵惧埌key鍊煎厛鍏崇殑鏍峰紡灏嗚繑鍥炵┖锛屼緥濡傚垰鎵嶉偅涓儗鏅鑹诧紝灏嗚繑鍥� body{background:#ccc}
     * @grammar UE.utils.cssRule('body',document) => 杩斿洖鎸囧畾key鐨勬牱寮忥紝骞朵笖鎸囧畾鏄摢涓猟ocument
     * @grammar UE.utils.cssRule('body','') =>null //娓呯┖缁欏畾鐨刱ey鍊肩殑鑳屾櫙棰滆壊
     */
    cssRule:browser.ie && browser.version != 11 ? function (key, style, doc) {
      var indexList, index;
      if(style === undefined || style && style.nodeType && style.nodeType == 9){
        //鑾峰彇鏍峰紡
        doc = style && style.nodeType && style.nodeType == 9 ? style : (doc || document);
        indexList = doc.indexList || (doc.indexList = {});
        index = indexList[key];
        if(index !==  undefined){
          return doc.styleSheets[index].cssText
        }
        return undefined;
      }
      doc = doc || document;
      indexList = doc.indexList || (doc.indexList = {});
      index = indexList[key];
      //娓呴櫎鏍峰紡
      if(style === ''){
        if(index!== undefined){
          doc.styleSheets[index].cssText = '';
          delete indexList[key];
          return true
        }
        return false;
      }

      //娣诲姞鏍峰紡
      if(index!== undefined){
        sheetStyle =  doc.styleSheets[index];
      }else{
        sheetStyle = doc.createStyleSheet('', index = doc.styleSheets.length);
        indexList[key] = index;
      }
      sheetStyle.cssText = style;
    }: function (key, style, doc) {
      var head, node;
      if(style === undefined || style && style.nodeType && style.nodeType == 9){
        //鑾峰彇鏍峰紡
        doc = style && style.nodeType && style.nodeType == 9 ? style : (doc || document);
        node = doc.getElementById(key);
        return node ? node.innerHTML : undefined;
      }
      doc = doc || document;
      node = doc.getElementById(key);

      //娓呴櫎鏍峰紡
      if(style === ''){
        if(node){
          node.parentNode.removeChild(node);
          return true
        }
        return false;
      }

      //娣诲姞鏍峰紡
      if(node){
        node.innerHTML = style;
      }else{
        node = doc.createElement('style');
        node.id = key;
        node.innerHTML = style;
        doc.getElementsByTagName('head')[0].appendChild(node);
      }
    },
    sort:function(array,compareFn){
      compareFn = compareFn || function(item1, item2){ return item1.localeCompare(item2);};
      for(var i= 0,len = array.length; i<len; i++){
        for(var j = i,length = array.length; j<length; j++){
          if(compareFn(array[i], array[j]) > 0){
            var t = array[i];
            array[i] = array[j];
            array[j] = t;
          }
        }
      }
      return array;
    },
    serializeParam:function (json) {
      var strArr = [];
      for (var i in json) {
        //蹇界暐榛樿鐨勫嚑涓弬鏁�
        if(i=="method" || i=="timeout" || i=="async") continue;
        //浼犻€掕繃鏉ョ殑瀵硅薄鍜屽嚱鏁颁笉鍦ㄦ彁浜や箣鍒�
        if (!((typeof json[i]).toLowerCase() == "function" || (typeof json[i]).toLowerCase() == "object")) {
          strArr.push( encodeURIComponent(i) + "="+encodeURIComponent(json[i]) );
        } else if (utils.isArray(json[i])) {
          //鏀寔浼犳暟缁勫唴瀹�
          for(var j = 0; j < json[i].length; j++) {
            strArr.push( encodeURIComponent(i) + "[]="+encodeURIComponent(json[i][j]) );
          }
        }
      }
      return strArr.join("&");
    },
    formatUrl:function (url) {
      var u = url.replace(/&&/g, '&');
      u = u.replace(/\?&/g, '?');
      u = u.replace(/&$/g, '');
      u = u.replace(/&#/g, '#');
      u = u.replace(/&+/g, '&');
      return u;
    },
    isCrossDomainUrl:function (url) {
      var a = document.createElement('a');
      a.href = url;
      if (browser.ie) {
        a.href = a.href;
      }
      return !(a.protocol == location.protocol && a.hostname == location.hostname &&
      (a.port == location.port || (a.port == '80' && location.port == '') || (a.port == '' && location.port == '80')));
    },
    clearEmptyAttrs : function(obj){
      for(var p in obj){
        if(obj[p] === ''){
          delete obj[p]
        }
      }
      return obj;
    },
    str2json : function(s){

      if (!utils.isString(s)) return null;
      if (window.JSON) {
        return JSON.parse(s);
      } else {
        return (new Function("return " + utils.trim(s || '')))();
      }

    },
    json2str : (function(){

      if (window.JSON) {

        return JSON.stringify;

      } else {

        var escapeMap = {
          "\b": '\\b',
          "\t": '\\t',
          "\n": '\\n',
          "\f": '\\f',
          "\r": '\\r',
          '"' : '\\"',
          "\\": '\\\\'
        };

        function encodeString(source) {
          if (/["\\\x00-\x1f]/.test(source)) {
            source = source.replace(
              /["\\\x00-\x1f]/g,
              function (match) {
                var c = escapeMap[match];
                if (c) {
                  return c;
                }
                c = match.charCodeAt();
                return "\\u00"
                  + Math.floor(c / 16).toString(16)
                  + (c % 16).toString(16);
              });
          }
          return '"' + source + '"';
        }

        function encodeArray(source) {
          var result = ["["],
            l = source.length,
            preComma, i, item;

          for (i = 0; i < l; i++) {
            item = source[i];

            switch (typeof item) {
              case "undefined":
              case "function":
              case "unknown":
                break;
              default:
                if(preComma) {
                  result.push(',');
                }
                result.push(utils.json2str(item));
                preComma = 1;
            }
          }
          result.push("]");
          return result.join("");
        }

        function pad(source) {
          return source < 10 ? '0' + source : source;
        }

        function encodeDate(source){
          return '"' + source.getFullYear() + "-"
            + pad(source.getMonth() + 1) + "-"
            + pad(source.getDate()) + "T"
            + pad(source.getHours()) + ":"
            + pad(source.getMinutes()) + ":"
            + pad(source.getSeconds()) + '"';
        }

        return function (value) {
          switch (typeof value) {
            case 'undefined':
              return 'undefined';

            case 'number':
              return isFinite(value) ? String(value) : "null";

            case 'string':
              return encodeString(value);

            case 'boolean':
              return String(value);

            default:
              if (value === null) {
                return 'null';
              } else if (utils.isArray(value)) {
                return encodeArray(value);
              } else if (utils.isDate(value)) {
                return encodeDate(value);
              } else {
                var result = ['{'],
                  encode = utils.json2str,
                  preComma,
                  item;

                for (var key in value) {
                  if (Object.prototype.hasOwnProperty.call(value, key)) {
                    item = value[key];
                    switch (typeof item) {
                      case 'undefined':
                      case 'unknown':
                      case 'function':
                        break;
                      default:
                        if (preComma) {
                          result.push(',');
                        }
                        preComma = 1;
                        result.push(encode(key) + ':' + encode(item));
                    }
                  }
                }
                result.push('}');
                return result.join('');
              }
          }
        };
      }

    })()

  };
  /**
   * 鍒ゆ柇缁欏畾鐨勫璞℃槸鍚︽槸瀛楃涓�
   * @method isString
   * @param { * } object 闇€瑕佸垽鏂殑瀵硅薄
   * @return { Boolean } 缁欏畾鐨勫璞℃槸鍚︽槸瀛楃涓�
   */

  /**
   * 鍒ゆ柇缁欏畾鐨勫璞℃槸鍚︽槸鏁扮粍
   * @method isArray
   * @param { * } object 闇€瑕佸垽鏂殑瀵硅薄
   * @return { Boolean } 缁欏畾鐨勫璞℃槸鍚︽槸鏁扮粍
   */

  /**
   * 鍒ゆ柇缁欏畾鐨勫璞℃槸鍚︽槸涓€涓狥unction
   * @method isFunction
   * @param { * } object 闇€瑕佸垽鏂殑瀵硅薄
   * @return { Boolean } 缁欏畾鐨勫璞℃槸鍚︽槸Function
   */

  /**
   * 鍒ゆ柇缁欏畾鐨勫璞℃槸鍚︽槸Number
   * @method isNumber
   * @param { * } object 闇€瑕佸垽鏂殑瀵硅薄
   * @return { Boolean } 缁欏畾鐨勫璞℃槸鍚︽槸Number
   */

  /**
   * 鍒ゆ柇缁欏畾鐨勫璞℃槸鍚︽槸涓€涓鍒欒〃杈惧紡
   * @method isRegExp
   * @param { * } object 闇€瑕佸垽鏂殑瀵硅薄
   * @return { Boolean } 缁欏畾鐨勫璞℃槸鍚︽槸姝ｅ垯琛ㄨ揪寮�
   */

  /**
   * 鍒ゆ柇缁欏畾鐨勫璞℃槸鍚︽槸涓€涓櫘閫氬璞�
   * @method isObject
   * @param { * } object 闇€瑕佸垽鏂殑瀵硅薄
   * @return { Boolean } 缁欏畾鐨勫璞℃槸鍚︽槸鏅€氬璞�
   */
  utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Date'], function (v) {
    UE.utils['is' + v] = function (obj) {
      return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
  });


// core/EventBase.js
  /**
   * UE閲囩敤鐨勪簨浠跺熀绫�
   * @file
   * @module UE
   * @class EventBase
   * @since 1.2.6.1
   */

  /**
   * UEditor鍏敤绌洪棿锛孶Editor鎵€鏈夌殑鍔熻兘閮芥寕杞藉湪璇ョ┖闂翠笅
   * @unfile
   * @module UE
   */

  /**
   * UE閲囩敤鐨勪簨浠跺熀绫伙紝缁ф壙姝ょ被鐨勫搴旂被灏嗚幏鍙朼ddListener,removeListener,fireEvent鏂规硶銆�
   * 鍦║E涓紝Editor浠ュ強鎵€鏈塽i瀹炰緥閮界户鎵夸簡璇ョ被锛屾晠鍙互鍦ㄥ搴旂殑ui瀵硅薄浠ュ強editor瀵硅薄涓婁娇鐢ㄤ笂杩版柟娉曘€�
   * @unfile
   * @module UE
   * @class EventBase
   */

  /**
   * 閫氳繃姝ゆ瀯閫犲櫒锛屽瓙绫诲彲浠ョ户鎵縀ventBase鑾峰彇浜嬩欢鐩戝惉鐨勬柟娉�
   * @constructor
   * @example
   * ```javascript
   * UE.EventBase.call(editor);
   * ```
   */
  var EventBase = UE.EventBase = function () {};

  EventBase.prototype = {

    /**
     * 娉ㄥ唽浜嬩欢鐩戝惉鍣�
     * @method addListener
     * @param { String } types 鐩戝惉鐨勪簨浠跺悕绉帮紝鍚屾椂鐩戝惉澶氫釜浜嬩欢浣跨敤绌烘牸鍒嗛殧
     * @param { Function } fn 鐩戝惉鐨勪簨浠惰瑙﹀彂鏃讹紝浼氭墽琛岃鍥炶皟鍑芥暟
     * @waining 浜嬩欢琚Е鍙戞椂锛岀洃鍚殑鍑芥暟鍋囧杩斿洖鐨勫€兼亽绛変簬true锛屽洖璋冨嚱鏁扮殑闃熷垪涓悗闈㈢殑鍑芥暟灏嗕笉鎵ц
     * @example
     * ```javascript
     * editor.addListener('selectionchange',function(){
     *      console.log("閫夊尯宸茬粡鍙樺寲锛�");
     * })
     * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // this鏄敞鍐岀殑浜嬩欢鐨勭紪杈戝櫒瀹炰緥
     * })
     * ```
     * @see UE.EventBase:fireEvent(String)
     */
    addListener:function (types, listener) {
      types = utils.trim(types).split(/\s+/);
      for (var i = 0, ti; ti = types[i++];) {
        getListener(this, ti, true).push(listener);
      }
    },

    on : function(types, listener){
      return this.addListener(types,listener);
    },
    off : function(types, listener){
      return this.removeListener(types, listener)
    },
    trigger:function(){
      return this.fireEvent.apply(this,arguments);
    },
    /**
     * 绉婚櫎浜嬩欢鐩戝惉鍣�
     * @method removeListener
     * @param { String } types 绉婚櫎鐨勪簨浠跺悕绉帮紝鍚屾椂绉婚櫎澶氫釜浜嬩欢浣跨敤绌烘牸鍒嗛殧
     * @param { Function } fn 绉婚櫎鐩戝惉浜嬩欢鐨勫嚱鏁板紩鐢�
     * @example
     * ```javascript
     * //changeCallback涓烘柟娉曚綋
     * editor.removeListener("selectionchange",changeCallback);
     * ```
     */
    removeListener:function (types, listener) {
      types = utils.trim(types).split(/\s+/);
      for (var i = 0, ti; ti = types[i++];) {
        utils.removeItem(getListener(this, ti) || [], listener);
      }
    },

    /**
     * 瑙﹀彂浜嬩欢
     * @method fireEvent
     * @param { String } types 瑙﹀彂鐨勪簨浠跺悕绉帮紝鍚屾椂瑙﹀彂澶氫釜浜嬩欢浣跨敤绌烘牸鍒嗛殧
     * @remind 璇ユ柟娉曚細瑙﹀彂addListener
     * @return { * } 杩斿洖瑙﹀彂浜嬩欢鐨勯槦鍒椾腑锛屾渶鍚庢墽琛岀殑鍥炶皟鍑芥暟鐨勮繑鍥炲€�
     * @example
     * ```javascript
     * editor.fireEvent("selectionchange");
     * ```
     */

    /**
     * 瑙﹀彂浜嬩欢
     * @method fireEvent
     * @param { String } types 瑙﹀彂鐨勪簨浠跺悕绉帮紝鍚屾椂瑙﹀彂澶氫釜浜嬩欢浣跨敤绌烘牸鍒嗛殧
     * @param { *... } options 鍙€夊弬鏁帮紝鍙互浼犲叆涓€涓垨澶氫釜鍙傛暟锛屼細浼犵粰浜嬩欢瑙﹀彂鐨勫洖璋冨嚱鏁�
     * @return { * } 杩斿洖瑙﹀彂浜嬩欢鐨勯槦鍒椾腑锛屾渶鍚庢墽琛岀殑鍥炶皟鍑芥暟鐨勮繑鍥炲€�
     * @example
     * ```javascript
     *
     * editor.addListener( "selectionchange", function ( type, arg1, arg2 ) {
     *
     *     console.log( arg1 + " " + arg2 );
     *
     * } );
     *
     * //瑙﹀彂selectionchange浜嬩欢锛� 浼氭墽琛屼笂闈㈢殑浜嬩欢鐩戝惉鍣�
     * //output: Hello World
     * editor.fireEvent("selectionchange", "Hello", "World");
     * ```
     */
    fireEvent:function () {
      var types = arguments[0];
      types = utils.trim(types).split(' ');
      for (var i = 0, ti; ti = types[i++];) {
        var listeners = getListener(this, ti),
          r, t, k;
        if (listeners) {
          k = listeners.length;
          while (k--) {
            if(!listeners[k])continue;
            t = listeners[k].apply(this, arguments);
            if(t === true){
              return t;
            }
            if (t !== undefined) {
              r = t;
            }
          }
        }
        if (t = this['on' + ti.toLowerCase()]) {
          r = t.apply(this, arguments);
        }
      }
      return r;
    }
  };
  /**
   * 鑾峰緱瀵硅薄鎵€鎷ユ湁鐩戝惉绫诲瀷鐨勬墍鏈夌洃鍚櫒
   * @unfile
   * @module UE
   * @since 1.2.6.1
   * @method getListener
   * @public
   * @param { Object } obj  鏌ヨ鐩戝惉鍣ㄧ殑瀵硅薄
   * @param { String } type 浜嬩欢绫诲瀷
   * @param { Boolean } force  涓簍rue涓斿綋鍓嶆墍鏈塼ype绫诲瀷鐨勪睛鍚櫒涓嶅瓨鍦ㄦ椂锛屽垱寤轰竴涓┖鐩戝惉鍣ㄦ暟缁�
   * @return { Array } 鐩戝惉鍣ㄦ暟缁�
   */
  function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
    && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
  }



// core/dtd.js
///import editor.js
///import core/dom/dom.js
///import core/utils.js
  /**
   * dtd html璇箟鍖栫殑浣撶幇绫�
   * @constructor
   * @namespace dtd
   */
  var dtd = dom.dtd = (function() {
    function _( s ) {
      for (var k in s) {
        s[k.toUpperCase()] = s[k];
      }
      return s;
    }
    var X = utils.extend2;
    var A = _({isindex:1,fieldset:1}),
      B = _({input:1,button:1,select:1,textarea:1,label:1}),
      C = X( _({a:1}), B ),
      D = X( {iframe:1}, C ),
      E = _({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),
      F = _({ins:1,del:1,script:1,style:1}),
      G = X( _({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}), F ),
      H = X( _({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}), G ),
      I = X( _({p:1}), H ),
      J = X( _({iframe:1}), H, B ),
      K = _({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),

      L = X( _({a:0}), J ),//a涓嶈兘琚垏寮€锛屾墍浠ユ妸浠�
      M = _({tr:1}),
      N = _({'#':1}),
      O = X( _({param:1}), K ),
      P = X( _({form:1}), A, D, E, I ),
      Q = _({li:1,ol:1,ul:1}),
      R = _({style:1,script:1}),
      S = _({base:1,link:1,meta:1,title:1}),
      T = X( S, R ),
      U = _({head:1,body:1}),
      V = _({html:1});

    var block = _({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),

      empty =  _({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});

    return  _({

      // $ 琛ㄧず鑷畾鐨勫睘鎬�

      // body澶栫殑鍏冪礌鍒楄〃.
      $nonBodyContent: X( V, U, S ),

      //鍧楃粨鏋勫厓绱犲垪琛�
      $block : block,

      //鍐呰仈鍏冪礌鍒楄〃
      $inline : L,

      $inlineWithA : X(_({a:1}),L),

      $body : X( _({script:1,style:1}), block ),

      $cdata : _({script:1,style:1}),

      //鑷棴鍜屽厓绱�
      $empty : empty,

      //涓嶆槸鑷棴鍚堬紝浣嗕笉鑳借range閫変腑閲岃竟
      $nonChild : _({iframe:1,textarea:1}),
      //鍒楄〃鍏冪礌鍒楄〃
      $listItem : _({dd:1,dt:1,li:1}),

      //鍒楄〃鏍瑰厓绱犲垪琛�
      $list: _({ul:1,ol:1,dl:1}),

      //涓嶈兘璁や负鏄┖鐨勫厓绱�
      $isNotEmpty : _({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),

      //濡傛灉娌℃湁瀛愯妭鐐瑰氨鍙互鍒犻櫎鐨勫厓绱犲垪琛紝鍍弒pan,a
      $removeEmpty : _({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),

      $removeEmptyBlock : _({'p':1,'div':1}),

      //鍦╰able鍏冪礌閲岀殑鍏冪礌鍒楄〃
      $tableContent : _({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),
      //涓嶈浆鎹㈢殑鏍囩
      $notTransContent : _({pre:1,script:1,style:1,textarea:1}),
      html: U,
      head: T,
      style: N,
      script: N,
      body: P,
      base: {},
      link: {},
      meta: {},
      title: N,
      col : {},
      tr : _({td:1,th:1}),
      img : {},
      embed: {},
      colgroup : _({thead:1,col:1,tbody:1,tr:1,tfoot:1}),
      noscript : P,
      td : P,
      br : {},
      th : P,
      center : P,
      kbd : L,
      button : X( I, E ),
      basefont : {},
      h5 : L,
      h4 : L,
      samp : L,
      h6 : L,
      ol : Q,
      h1 : L,
      h3 : L,
      option : N,
      h2 : L,
      form : X( A, D, E, I ),
      select : _({optgroup:1,option:1}),
      font : L,
      ins : L,
      menu : Q,
      abbr : L,
      label : L,
      table : _({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),
      code : L,
      tfoot : M,
      cite : L,
      li : P,
      input : {},
      iframe : P,
      strong : L,
      textarea : N,
      noframes : P,
      big : L,
      small : L,
      //trace:
      span :_({'#':1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),
      hr : L,
      dt : L,
      sub : L,
      optgroup : _({option:1}),
      param : {},
      bdo : L,
      'var' : L,
      div : P,
      object : O,
      sup : L,
      dd : P,
      strike : L,
      area : {},
      dir : Q,
      map : X( _({area:1,form:1,p:1}), A, F, E ),
      applet : O,
      dl : _({dt:1,dd:1}),
      del : L,
      isindex : {},
      fieldset : X( _({legend:1}), K ),
      thead : M,
      ul : Q,
      acronym : L,
      b : L,
      a : X( _({a:1}), J ),
      blockquote :X(_({td:1,tr:1,tbody:1,li:1}),P),
      caption : L,
      i : L,
      u : L,
      tbody : M,
      s : L,
      address : X( D, I ),
      tt : L,
      legend : L,
      q : L,
      pre : X( G, C ),
      p : X(_({'a':1}),L),
      em :L,
      dfn : L
    });
  })();


// core/domUtils.js
  /**
   * Dom鎿嶄綔宸ュ叿鍖�
   * @file
   * @module UE.dom.domUtils
   * @since 1.2.6.1
   */

  /**
   * Dom鎿嶄綔宸ュ叿鍖�
   * @unfile
   * @module UE.dom.domUtils
   */
  function getDomNode(node, start, ltr, startFromChild, fn, guard) {
    var tmpNode = startFromChild && node[start],
      parent;
    !tmpNode && (tmpNode = node[ltr]);
    while (!tmpNode && (parent = (parent || node).parentNode)) {
      if (parent.tagName == 'BODY' || guard && !guard(parent)) {
        return null;
      }
      tmpNode = parent[ltr];
    }
    if (tmpNode && fn && !fn(tmpNode)) {
      return  getDomNode(tmpNode, start, ltr, false, fn);
    }
    return tmpNode;
  }
  var attrFix = ie && browser.version < 9 ? {
      tabindex:"tabIndex",
      readonly:"readOnly",
      "for":"htmlFor",
      "class":"className",
      maxlength:"maxLength",
      cellspacing:"cellSpacing",
      cellpadding:"cellPadding",
      rowspan:"rowSpan",
      colspan:"colSpan",
      usemap:"useMap",
      frameborder:"frameBorder"
    } : {
      tabindex:"tabIndex",
      readonly:"readOnly"
    },
    styleBlock = utils.listToMap([
      '-webkit-box', '-moz-box', 'block' ,
      'list-item' , 'table' , 'table-row-group' ,
      'table-header-group', 'table-footer-group' ,
      'table-row' , 'table-column-group' , 'table-column' ,
      'table-cell' , 'table-caption'
    ]);
  var domUtils = dom.domUtils = {
    //鑺傜偣甯搁噺
    NODE_ELEMENT:1,
    NODE_DOCUMENT:9,
    NODE_TEXT:3,
    NODE_COMMENT:8,
    NODE_DOCUMENT_FRAGMENT:11,

    //浣嶇疆鍏崇郴
    POSITION_IDENTICAL:0,
    POSITION_DISCONNECTED:1,
    POSITION_FOLLOWING:2,
    POSITION_PRECEDING:4,
    POSITION_IS_CONTAINED:8,
    POSITION_CONTAINS:16,
    //ie6浣跨敤鍏朵粬鐨勪細鏈変竴娈电┖鐧藉嚭鐜�
    fillChar:ie && browser.version == '6' ? '\ufeff' : '\u200B',
    //-------------------------Node閮ㄥ垎--------------------------------
    keys:{
      /*Backspace*/ 8:1, /*Delete*/ 46:1,
      /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
      37:1, 38:1, 39:1, 40:1,
      13:1 /*enter*/
    },
    /**
     * 鑾峰彇鑺傜偣A鐩稿浜庤妭鐐笲鐨勪綅缃叧绯�
     * @method getPosition
     * @param { Node } nodeA 闇€瑕佹煡璇綅缃叧绯荤殑鑺傜偣A
     * @param { Node } nodeB 闇€瑕佹煡璇綅缃叧绯荤殑鑺傜偣B
     * @return { Number } 鑺傜偣A涓庤妭鐐笲鐨勫叧绯�
     * @example
     * ```javascript
     * //output: 20
     * var position = UE.dom.domUtils.getPosition( document.documentElement, document.body );
     *
     * switch ( position ) {
     *
     *      //0
     *      case UE.dom.domUtils.POSITION_IDENTICAL:
     *          console.log('鍏冪礌鐩稿悓');
     *          break;
     *      //1
     *      case UE.dom.domUtils.POSITION_DISCONNECTED:
     *          console.log('涓や釜鑺傜偣鍦ㄤ笉鍚岀殑鏂囨。涓�');
     *          break;
     *      //2
     *      case UE.dom.domUtils.POSITION_FOLLOWING:
     *          console.log('鑺傜偣A鍦ㄨ妭鐐笲涔嬪悗');
     *          break;
     *      //4
     *      case UE.dom.domUtils.POSITION_PRECEDING;
     *          console.log('鑺傜偣A鍦ㄨ妭鐐笲涔嬪墠');
     *          break;
     *      //8
     *      case UE.dom.domUtils.POSITION_IS_CONTAINED:
     *          console.log('鑺傜偣A琚妭鐐笲鍖呭惈');
     *          break;
     *      case 10:
     *          console.log('鑺傜偣A琚妭鐐笲鍖呭惈涓旇妭鐐笰鍦ㄨ妭鐐笲涔嬪悗');
     *          break;
     *      //16
     *      case UE.dom.domUtils.POSITION_CONTAINS:
     *          console.log('鑺傜偣A鍖呭惈鑺傜偣B');
     *          break;
     *      case 20:
     *          console.log('鑺傜偣A鍖呭惈鑺傜偣B涓旇妭鐐笰鍦ㄨ妭鐐笲涔嬪墠');
     *          break;
     *
     * }
     * ```
     */
    getPosition:function (nodeA, nodeB) {
      // 濡傛灉涓や釜鑺傜偣鏄悓涓€涓妭鐐�
      if (nodeA === nodeB) {
        // domUtils.POSITION_IDENTICAL
        return 0;
      }
      var node,
        parentsA = [nodeA],
        parentsB = [nodeB];
      node = nodeA;
      while (node = node.parentNode) {
        // 濡傛灉nodeB鏄痭odeA鐨勭鍏堣妭鐐�
        if (node === nodeB) {
          // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
          return 10;
        }
        parentsA.push(node);
      }
      node = nodeB;
      while (node = node.parentNode) {
        // 濡傛灉nodeA鏄痭odeB鐨勭鍏堣妭鐐�
        if (node === nodeA) {
          // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
          return 20;
        }
        parentsB.push(node);
      }
      parentsA.reverse();
      parentsB.reverse();
      if (parentsA[0] !== parentsB[0]) {
        // domUtils.POSITION_DISCONNECTED
        return 1;
      }
      var i = -1;
      while (i++, parentsA[i] === parentsB[i]) {
      }
      nodeA = parentsA[i];
      nodeB = parentsB[i];
      while (nodeA = nodeA.nextSibling) {
        if (nodeA === nodeB) {
          // domUtils.POSITION_PRECEDING
          return 4
        }
      }
      // domUtils.POSITION_FOLLOWING
      return  2;
    },

    /**
     * 妫€娴嬭妭鐐筺ode鍦ㄧ埗鑺傜偣涓殑绱㈠紩浣嶇疆
     * @method getNodeIndex
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Number } 璇ヨ妭鐐瑰湪鐖惰妭鐐逛腑鐨勪綅缃�
     * @see UE.dom.domUtils.getNodeIndex(Node,Boolean)
     */

    /**
     * 妫€娴嬭妭鐐筺ode鍦ㄧ埗鑺傜偣涓殑绱㈠紩浣嶇疆锛� 鏍规嵁缁欏畾鐨刴ergeTextNode鍙傛暟鍐冲畾鏄惁瑕佸悎骞跺涓繛缁殑鏂囨湰鑺傜偣涓轰竴涓妭鐐�
     * @method getNodeIndex
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @param { Boolean } mergeTextNode 鏄惁鍚堝苟澶氫釜杩炵画鐨勬枃鏈妭鐐逛负涓€涓妭鐐�
     * @return { Number } 璇ヨ妭鐐瑰湪鐖惰妭鐐逛腑鐨勪綅缃�
     * @example
     * ```javascript
     *
     *      var node = document.createElement("div");
     *
     *      node.appendChild( document.createTextNode( "hello" ) );
     *      node.appendChild( document.createTextNode( "world" ) );
     *      node.appendChild( node = document.createElement( "div" ) );
     *
     *      //output: 2
     *      console.log( UE.dom.domUtils.getNodeIndex( node ) );
     *
     *      //output: 1
     *      console.log( UE.dom.domUtils.getNodeIndex( node, true ) );
     *
     * ```
     */
    getNodeIndex:function (node, ignoreTextNode) {
      var preNode = node,
        i = 0;
      while (preNode = preNode.previousSibling) {
        if (ignoreTextNode && preNode.nodeType == 3) {
          if(preNode.nodeType != preNode.nextSibling.nodeType ){
            i++;
          }
          continue;
        }
        i++;
      }
      return i;
    },

    /**
     * 妫€娴嬭妭鐐筺ode鏄惁鍦ㄧ粰瀹氱殑document瀵硅薄涓�
     * @method inDoc
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @param { DomDocument } doc 闇€瑕佹娴嬬殑document瀵硅薄
     * @return { Boolean } 璇ヨ妭鐐筺ode鏄惁鍦ㄧ粰瀹氱殑document鐨刣om鏍戜笂
     * @example
     * ```javascript
     *
     * var node = document.createElement("div");
     *
     * //output: false
     * console.log( UE.do.domUtils.inDoc( node, document ) );
     *
     * document.body.appendChild( node );
     *
     * //output: true
     * console.log( UE.do.domUtils.inDoc( node, document ) );
     *
     * ```
     */
    inDoc:function (node, doc) {
      return domUtils.getPosition(node, doc) == 10;
    },
    /**
     * 鏍规嵁缁欏畾鐨勮繃婊よ鍒檉ilterFn锛� 鏌ユ壘绗﹀悎璇ヨ繃婊よ鍒欑殑node鑺傜偣鐨勭涓€涓鍏堣妭鐐癸紝
     * 鏌ユ壘鐨勮捣鐐规槸缁欏畾node鑺傜偣鐨勭埗鑺傜偣銆�
     * @method findParent
     * @param { Node } node 闇€瑕佹煡鎵剧殑鑺傜偣
     * @param { Function } filterFn 鑷畾涔夌殑杩囨护鏂规硶銆�
     * @warning 鏌ユ壘鐨勭粓鐐规槸鍒癰ody鑺傜偣涓烘
     * @remind 鑷畾涔夌殑杩囨护鏂规硶filterFn鎺ュ彈涓€涓狽ode瀵硅薄浣滀负鍙傛暟锛� 璇ュ璞′唬琛ㄥ綋鍓嶆墽琛屾娴嬬殑绁栧厛鑺傜偣銆� 濡傛灉璇�
     *          鑺傜偣婊¤冻杩囨护鏉′欢锛� 鍒欒姹傝繑鍥瀟rue锛� 杩欐椂灏嗙洿鎺ヨ繑鍥炶鑺傜偣浣滀负findParent()鐨勭粨鏋滐紝 鍚﹀垯锛� 璇疯繑鍥瀎alse銆�
     * @return { Node | Null } 濡傛灉鎵惧埌绗﹀悎杩囨护鏉′欢鐨勮妭鐐癸紝 灏辫繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```javascript
     * var filterNode = UE.dom.domUtils.findParent( document.body.firstChild, function ( node ) {
     *
     *     //鐢变簬鏌ユ壘鐨勭粓鐐规槸body鑺傜偣锛� 鎵€浠ユ案杩滀篃涓嶄細鍖归厤褰撳墠杩囨护鍣ㄧ殑鏉′欢锛� 鍗宠繖閲屾案杩滀細杩斿洖false
     *     return node.tagName === "HTML";
     *
     * } );
     *
     * //output: true
     * console.log( filterNode === null );
     * ```
     */

    /**
     * 鏍规嵁缁欏畾鐨勮繃婊よ鍒檉ilterFn锛� 鏌ユ壘绗﹀悎璇ヨ繃婊よ鍒欑殑node鑺傜偣鐨勭涓€涓鍏堣妭鐐癸紝
     * 濡傛灉includeSelf鐨勫€间负true锛屽垯鏌ユ壘鐨勮捣鐐规槸缁欏畾鐨勮妭鐐筺ode锛� 鍚﹀垯锛� 璧风偣鏄痭ode鐨勭埗鑺傜偣
     * @method findParent
     * @param { Node } node 闇€瑕佹煡鎵剧殑鑺傜偣
     * @param { Function } filterFn 鑷畾涔夌殑杩囨护鏂规硶銆�
     * @param { Boolean } includeSelf 鏌ユ壘杩囩▼鏄惁鍖呭惈鑷韩
     * @warning 鏌ユ壘鐨勭粓鐐规槸鍒癰ody鑺傜偣涓烘
     * @remind 鑷畾涔夌殑杩囨护鏂规硶filterFn鎺ュ彈涓€涓狽ode瀵硅薄浣滀负鍙傛暟锛� 璇ュ璞′唬琛ㄥ綋鍓嶆墽琛屾娴嬬殑绁栧厛鑺傜偣銆� 濡傛灉璇�
     *          鑺傜偣婊¤冻杩囨护鏉′欢锛� 鍒欒姹傝繑鍥瀟rue锛� 杩欐椂灏嗙洿鎺ヨ繑鍥炶鑺傜偣浣滀负findParent()鐨勭粨鏋滐紝 鍚﹀垯锛� 璇疯繑鍥瀎alse銆�
     * @remind 濡傛灉includeSelf涓簍rue锛� 鍒欒繃婊ゅ櫒绗竴娆℃墽琛屾椂鐨勫弬鏁颁細鏄妭鐐规湰韬€�
     *          鍙嶄箣锛� 杩囨护鍣ㄧ涓€娆℃墽琛屾椂鐨勫弬鏁板皢鏄鑺傜偣鐨勭埗鑺傜偣銆�
     * @return { Node | Null } 濡傛灉鎵惧埌绗﹀悎杩囨护鏉′欢鐨勮妭鐐癸紝 灏辫繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```html
     * <body>
     *
     *      <div id="test">
     *      </div>
     *
     *      <script type="text/javascript">
     *
     *          //output: DIV, BODY
     *          var filterNode = UE.dom.domUtils.findParent( document.getElementById( "test" ), function ( node ) {
     *
     *              console.log( node.tagName );
     *              return false;
     *
     *          }, true );
     *
     *      </script>
     * </body>
     * ```
     */
    findParent:function (node, filterFn, includeSelf) {
      if (node && !domUtils.isBody(node)) {
        node = includeSelf ? node : node.parentNode;
        while (node) {
          if (!filterFn || filterFn(node) || domUtils.isBody(node)) {
            return filterFn && !filterFn(node) && domUtils.isBody(node) ? null : node;
          }
          node = node.parentNode;
        }
      }
      return null;
    },
    /**
     * 鏌ユ壘node鐨勮妭鐐瑰悕涓簍agName鐨勭涓€涓鍏堣妭鐐癸紝 鏌ユ壘鐨勮捣鐐规槸node鑺傜偣鐨勭埗鑺傜偣銆�
     * @method findParentByTagName
     * @param { Node } node 闇€瑕佹煡鎵剧殑鑺傜偣瀵硅薄
     * @param { Array } tagNames 闇€瑕佹煡鎵剧殑鐖惰妭鐐圭殑鍚嶇О鏁扮粍
     * @warning 鏌ユ壘鐨勭粓鐐规槸鍒癰ody鑺傜偣涓烘
     * @return { Node | NULL } 濡傛灉鎵惧埌绗﹀悎鏉′欢鐨勮妭鐐癸紝 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```javascript
     * var node = UE.dom.domUtils.findParentByTagName( document.getElementsByTagName("div")[0], [ "BODY" ] );
     * //output: BODY
     * console.log( node.tagName );
     * ```
     */

    /**
     * 鏌ユ壘node鐨勮妭鐐瑰悕涓簍agName鐨勭鍏堣妭鐐癸紝 濡傛灉includeSelf鐨勫€间负true锛屽垯鏌ユ壘鐨勮捣鐐规槸缁欏畾鐨勮妭鐐筺ode锛�
     * 鍚﹀垯锛� 璧风偣鏄痭ode鐨勭埗鑺傜偣銆�
     * @method findParentByTagName
     * @param { Node } node 闇€瑕佹煡鎵剧殑鑺傜偣瀵硅薄
     * @param { Array } tagNames 闇€瑕佹煡鎵剧殑鐖惰妭鐐圭殑鍚嶇О鏁扮粍
     * @param { Boolean } includeSelf 鏌ユ壘杩囩▼鏄惁鍖呭惈node鑺傜偣鑷韩
     * @warning 鏌ユ壘鐨勭粓鐐规槸鍒癰ody鑺傜偣涓烘
     * @return { Node | NULL } 濡傛灉鎵惧埌绗﹀悎鏉′欢鐨勮妭鐐癸紝 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```javascript
     * var queryTarget = document.getElementsByTagName("div")[0];
     * var node = UE.dom.domUtils.findParentByTagName( queryTarget, [ "DIV" ], true );
     * //output: true
     * console.log( queryTarget === node );
     * ```
     */
    findParentByTagName:function (node, tagNames, includeSelf, excludeFn) {
      tagNames = utils.listToMap(utils.isArray(tagNames) ? tagNames : [tagNames]);
      return domUtils.findParent(node, function (node) {
        return tagNames[node.tagName] && !(excludeFn && excludeFn(node));
      }, includeSelf);
    },
    /**
     * 鏌ユ壘鑺傜偣node鐨勭鍏堣妭鐐归泦鍚堬紝 鏌ユ壘鐨勮捣鐐规槸缁欏畾鑺傜偣鐨勭埗鑺傜偣锛岀粨鏋滈泦涓笉鍖呭惈缁欏畾鐨勮妭鐐广€�
     * @method findParents
     * @param { Node } node 闇€瑕佹煡鎵剧殑鑺傜偣瀵硅薄
     * @return { Array } 缁欏畾鑺傜偣鐨勭鍏堣妭鐐规暟缁�
     * @grammar UE.dom.domUtils.findParents(node)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝涓嶅寘鍚嚜韬�
     * @grammar UE.dom.domUtils.findParents(node,includeSelf)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝includeSelf鎸囧畾鏄惁鍖呭惈鑷韩
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝filterFn鎸囧畾杩囨护鏉′欢锛岃繑鍥瀟rue鐨刵ode灏嗚閫夊彇
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn,closerFirst)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝closerFirst涓簍rue鐨勮瘽锛宯ode鐨勭洿鎺ョ埗浜茶妭鐐规槸鏁扮粍鐨勭0涓�
     */

    /**
     * 鏌ユ壘鑺傜偣node鐨勭鍏堣妭鐐归泦鍚堬紝 濡傛灉includeSelf鐨勫€间负true锛�
     * 鍒欒繑鍥炵殑缁撴灉闆嗕腑鍏佽鍑虹幇褰撳墠缁欏畾鐨勮妭鐐癸紝 鍚﹀垯锛� 璇ヨ妭鐐逛笉浼氬嚭鐜板湪鍏剁粨鏋滈泦涓€�
     * @method findParents
     * @param { Node } node 闇€瑕佹煡鎵剧殑鑺傜偣瀵硅薄
     * @param { Boolean } includeSelf 鏌ユ壘鐨勭粨鏋滀腑鏄惁鍏佽鍖呭惈褰撳墠鏌ユ壘鐨勮妭鐐瑰璞�
     * @return { Array } 缁欏畾鑺傜偣鐨勭鍏堣妭鐐规暟缁�
     */
    findParents:function (node, includeSelf, filterFn, closerFirst) {
      var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
      while (node = domUtils.findParent(node, filterFn)) {
        parents.push(node);
      }
      return closerFirst ? parents : parents.reverse();
    },

    /**
     * 鍦ㄨ妭鐐筺ode鍚庨潰鎻掑叆鏂拌妭鐐筺ewNode
     * @method insertAfter
     * @param { Node } node 鐩爣鑺傜偣
     * @param { Node } newNode 鏂版彃鍏ョ殑鑺傜偣锛� 璇ヨ妭鐐瑰皢缃簬鐩爣鑺傜偣涔嬪悗
     * @return { Node } 鏂版彃鍏ョ殑鑺傜偣
     */
    insertAfter:function (node, newNode) {
      return node.nextSibling ? node.parentNode.insertBefore(newNode, node.nextSibling):
        node.parentNode.appendChild(newNode);
    },

    /**
     * 鍒犻櫎鑺傜偣node鍙婂叾涓嬪睘鐨勬墍鏈夎妭鐐�
     * @method remove
     * @param { Node } node 闇€瑕佸垹闄ょ殑鑺傜偣瀵硅薄
     * @return { Node } 杩斿洖鍒氬垹闄ょ殑鑺傜偣瀵硅薄
     * @example
     * ```html
     * <div id="test">
     *     <div id="child">浣犲ソ</div>
     * </div>
     * <script>
     *     UE.dom.domUtils.remove( document.body, false );
     *     //output: false
     *     console.log( document.getElementById( "child" ) !== null );
     * </script>
     * ```
     */

    /**
     * 鍒犻櫎鑺傜偣node锛屽苟鏍规嵁keepChildren鐨勫€煎喅瀹氭槸鍚︿繚鐣欏瓙鑺傜偣
     * @method remove
     * @param { Node } node 闇€瑕佸垹闄ょ殑鑺傜偣瀵硅薄
     * @param { Boolean } keepChildren 鏄惁闇€瑕佷繚鐣欏瓙鑺傜偣
     * @return { Node } 杩斿洖鍒氬垹闄ょ殑鑺傜偣瀵硅薄
     * @example
     * ```html
     * <div id="test">
     *     <div id="child">浣犲ソ</div>
     * </div>
     * <script>
     *     UE.dom.domUtils.remove( document.body, true );
     *     //output: true
     *     console.log( document.getElementById( "child" ) !== null );
     * </script>
     * ```
     */
    remove:function (node, keepChildren) {
      var parent = node.parentNode,
        child;
      if (parent) {
        if (keepChildren && node.hasChildNodes()) {
          while (child = node.firstChild) {
            parent.insertBefore(child, node);
          }
        }
        parent.removeChild(node);
      }
      return node;
    },

    /**
     * 鍙栧緱node鑺傜偣鐨勪笅涓€涓厔寮熻妭鐐癸紝 濡傛灉璇ヨ妭鐐瑰叾鍚庢病鏈夊厔寮熻妭鐐癸紝 鍒欓€掑綊鏌ユ壘鍏剁埗鑺傜偣涔嬪悗鐨勭涓€涓厔寮熻妭鐐癸紝
     * 鐩村埌鎵惧埌婊¤冻鏉′欢鐨勮妭鐐规垨鑰呴€掑綊鍒癇ODY鑺傜偣涔嬪悗鎵嶄細缁撴潫銆�
     * @method getNextDomNode
     * @param { Node } node 闇€瑕佽幏鍙栧叾鍚庣殑鍏勫紵鑺傜偣鐨勮妭鐐瑰璞�
     * @return { Node | NULL } 濡傛灉鎵炬弧瓒虫潯浠剁殑鑺傜偣锛� 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```html
     *     <body>
     *      <div id="test">
     *          <span></span>
     *      </div>
     *      <i>xxx</i>
     * </body>
     * <script>
     *
     *     //output: i鑺傜偣
     *     console.log( UE.dom.domUtils.getNextDomNode( document.getElementById( "test" ) ) );
     *
     * </script>
     * ```
     * @example
     * ```html
     * <body>
     *      <div>
     *          <span></span>
     *          <i id="test">xxx</i>
     *      </div>
     *      <b>xxx</b>
     * </body>
     * <script>
     *
     *     //鐢变簬id涓簍est鐨刬鑺傜偣涔嬪悗娌℃湁鍏勫紵鑺傜偣锛� 鍒欐煡鎵惧叾鐖惰妭鐐癸紙div锛夊悗闈㈢殑鍏勫紵鑺傜偣
     *     //output: b鑺傜偣
     *     console.log( UE.dom.domUtils.getNextDomNode( document.getElementById( "test" ) ) );
     *
     * </script>
     * ```
     */

    /**
     * 鍙栧緱node鑺傜偣鐨勪笅涓€涓厔寮熻妭鐐癸紝 濡傛灉startFromChild鐨勫€间负ture锛屽垯鍏堣幏鍙栧叾瀛愯妭鐐癸紝
     * 濡傛灉鏈夊瓙鑺傜偣鍒欑洿鎺ヨ繑鍥炵涓€涓瓙鑺傜偣锛涘鏋滄病鏈夊瓙鑺傜偣鎴栬€卻tartFromChild鐨勫€间负false锛�
     * 鍒欐墽琛�<a href="#UE.dom.domUtils.getNextDomNode(Node)">getNextDomNode(Node node)</a>鐨勬煡鎵捐繃绋嬨€�
     * @method getNextDomNode
     * @param { Node } node 闇€瑕佽幏鍙栧叾鍚庣殑鍏勫紵鑺傜偣鐨勮妭鐐瑰璞�
     * @param { Boolean } startFromChild 鏌ユ壘杩囩▼鏄惁浠庡叾瀛愯妭鐐瑰紑濮�
     * @return { Node | NULL } 濡傛灉鎵炬弧瓒虫潯浠剁殑鑺傜偣锛� 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @see UE.dom.domUtils.getNextDomNode(Node)
     */
    getNextDomNode:function (node, startFromChild, filterFn, guard) {
      return getDomNode(node, 'firstChild', 'nextSibling', startFromChild, filterFn, guard);
    },
    getPreDomNode:function (node, startFromChild, filterFn, guard) {
      return getDomNode(node, 'lastChild', 'previousSibling', startFromChild, filterFn, guard);
    },
    /**
     * 妫€娴嬭妭鐐筺ode鏄惁灞炴槸UEditor瀹氫箟鐨刡ookmark鑺傜偣
     * @method isBookmarkNode
     * @private
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Boolean } 鏄惁鏄痓ookmark鑺傜偣
     * @example
     * ```html
     * <span id="_baidu_bookmark_1"></span>
     * <script>
     *      var bookmarkNode = document.getElementById("_baidu_bookmark_1");
     *      //output: true
     *      console.log( UE.dom.domUtils.isBookmarkNode( bookmarkNode ) );
     * </script>
     * ```
     */
    isBookmarkNode:function (node) {
      return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
    },
    /**
     * 鑾峰彇鑺傜偣node鎵€灞炵殑window瀵硅薄
     * @method  getWindow
     * @param { Node } node 鑺傜偣瀵硅薄
     * @return { Window } 褰撳墠鑺傜偣鎵€灞炵殑window瀵硅薄
     * @example
     * ```javascript
     * //output: true
     * console.log( UE.dom.domUtils.getWindow( document.body ) === window );
     * ```
     */
    getWindow:function (node) {
      var doc = node.ownerDocument || node;
      return doc.defaultView || doc.parentWindow;
    },
    /**
     * 鑾峰彇绂籲odeA涓巒odeB鏈€杩戠殑鍏叡鐨勭鍏堣妭鐐�
     * @method  getCommonAncestor
     * @param { Node } nodeA 绗竴涓妭鐐�
     * @param { Node } nodeB 绗簩涓妭鐐�
     * @remind 濡傛灉缁欏畾鐨勪袱涓妭鐐规槸鍚屼竴涓妭鐐癸紝 灏嗙洿鎺ヨ繑鍥炶鑺傜偣銆�
     * @return { Node | NULL } 濡傛灉鏈壘鍒板叕鍏辫妭鐐癸紝 杩斿洖NULL锛� 鍚﹀垯杩斿洖鏈€杩戠殑鍏叡绁栧厛鑺傜偣銆�
     * @example
     * ```javascript
     * var commonAncestor = UE.dom.domUtils.getCommonAncestor( document.body, document.body.firstChild );
     * //output: true
     * console.log( commonAncestor.tagName.toLowerCase() === 'body' );
     * ```
     */
    getCommonAncestor:function (nodeA, nodeB) {
      if (nodeA === nodeB)
        return nodeA;
      var parentsA = [nodeA] , parentsB = [nodeB], parent = nodeA, i = -1;
      while (parent = parent.parentNode) {
        if (parent === nodeB) {
          return parent;
        }
        parentsA.push(parent);
      }
      parent = nodeB;
      while (parent = parent.parentNode) {
        if (parent === nodeA)
          return parent;
        parentsB.push(parent);
      }
      parentsA.reverse();
      parentsB.reverse();
      while (i++, parentsA[i] === parentsB[i]) {
      }
      return i == 0 ? null : parentsA[i - 1];

    },
    /**
     * 娓呴櫎node鑺傜偣宸﹀彸杩炵画涓虹┖鐨勫厔寮焛nline鑺傜偣
     * @method clearEmptySibling
     * @param { Node } node 鎵ц鐨勮妭鐐瑰璞★紝 濡傛灉璇ヨ妭鐐圭殑宸﹀彸杩炵画鐨勫厔寮熻妭鐐规槸绌虹殑inline鑺傜偣锛�
     * 鍒欒繖浜涘厔寮熻妭鐐瑰皢琚垹闄�
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext)  //ignoreNext鎸囧畾鏄惁蹇界暐鍙宠竟绌鸿妭鐐�
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext,ignorePre)  //ignorePre鎸囧畾鏄惁蹇界暐宸﹁竟绌鸿妭鐐�
     * @example
     * ```html
     * <body>
     *     <div></div>
     *     <span id="test"></span>
     *     <i></i>
     *     <b></b>
     *     <em>xxx</em>
     *     <span></span>
     * </body>
     * <script>
     *
     *      UE.dom.domUtils.clearEmptySibling( document.getElementById( "test" ) );
     *
     *      //output: <div></div><span id="test"></span><em>xxx</em><span></span>
     *      console.log( document.body.innerHTML );
     *
     * </script>
     * ```
     */

    /**
     * 娓呴櫎node鑺傜偣宸﹀彸杩炵画涓虹┖鐨勫厔寮焛nline鑺傜偣锛� 濡傛灉ignoreNext鐨勫€间负true锛�
     * 鍒欏拷鐣ュ鍙宠竟鍏勫紵鑺傜偣鐨勬搷浣溿€�
     * @method clearEmptySibling
     * @param { Node } node 鎵ц鐨勮妭鐐瑰璞★紝 濡傛灉璇ヨ妭鐐圭殑宸﹀彸杩炵画鐨勫厔寮熻妭鐐规槸绌虹殑inline鑺傜偣锛�
     * @param { Boolean } ignoreNext 鏄惁蹇界暐蹇界暐瀵瑰彸杈圭殑鍏勫紵鑺傜偣鐨勬搷浣�
     * 鍒欒繖浜涘厔寮熻妭鐐瑰皢琚垹闄�
     * @see UE.dom.domUtils.clearEmptySibling(Node)
     */

    /**
     * 娓呴櫎node鑺傜偣宸﹀彸杩炵画涓虹┖鐨勫厔寮焛nline鑺傜偣锛� 濡傛灉ignoreNext鐨勫€间负true锛�
     * 鍒欏拷鐣ュ鍙宠竟鍏勫紵鑺傜偣鐨勬搷浣滐紝 濡傛灉ignorePre鐨勫€间负true锛屽垯蹇界暐瀵瑰乏杈瑰厔寮熻妭鐐圭殑鎿嶄綔銆�
     * @method clearEmptySibling
     * @param { Node } node 鎵ц鐨勮妭鐐瑰璞★紝 濡傛灉璇ヨ妭鐐圭殑宸﹀彸杩炵画鐨勫厔寮熻妭鐐规槸绌虹殑inline鑺傜偣锛�
     * @param { Boolean } ignoreNext 鏄惁蹇界暐蹇界暐瀵瑰彸杈圭殑鍏勫紵鑺傜偣鐨勬搷浣�
     * @param { Boolean } ignorePre 鏄惁蹇界暐蹇界暐瀵瑰乏杈圭殑鍏勫紵鑺傜偣鐨勬搷浣�
     * 鍒欒繖浜涘厔寮熻妭鐐瑰皢琚垹闄�
     * @see UE.dom.domUtils.clearEmptySibling(Node)
     */
    clearEmptySibling:function (node, ignoreNext, ignorePre) {
      function clear(next, dir) {
        var tmpNode;
        while (next && !domUtils.isBookmarkNode(next) && (domUtils.isEmptyInlineElement(next)
        //杩欓噷涓嶈兘鎶婄┖鏍肩畻杩涙潵浼氬惂绌烘牸骞叉帀锛屽嚭鐜版枃瀛楅棿鐨勭┖鏍间涪鎺変簡
        || !new RegExp('[^\t\n\r' + domUtils.fillChar + ']').test(next.nodeValue) )) {
          tmpNode = next[dir];
          domUtils.remove(next);
          next = tmpNode;
        }
      }
      !ignoreNext && clear(node.nextSibling, 'nextSibling');
      !ignorePre && clear(node.previousSibling, 'previousSibling');
    },
    /**
     * 灏嗕竴涓枃鏈妭鐐箃extNode鎷嗗垎鎴愪袱涓枃鏈妭鐐癸紝offset鎸囧畾鎷嗗垎浣嶇疆
     * @method split
     * @param { Node } textNode 闇€瑕佹媶鍒嗙殑鏂囨湰鑺傜偣瀵硅薄
     * @param { int } offset 闇€瑕佹媶鍒嗙殑浣嶇疆锛� 浣嶇疆璁＄畻浠�0寮€濮�
     * @return { Node } 鎷嗗垎鍚庡舰鎴愮殑鏂拌妭鐐�
     * @example
     * ```html
     * <div id="test">abcdef</div>
     * <script>
     *      var newNode = UE.dom.domUtils.split( document.getElementById( "test" ).firstChild, 3 );
     *      //output: def
     *      console.log( newNode.nodeValue );
     * </script>
     * ```
     */
    split:function (node, offset) {
      var doc = node.ownerDocument;
      if (browser.ie && offset == node.nodeValue.length) {
        var next = doc.createTextNode('');
        return domUtils.insertAfter(node, next);
      }
      var retval = node.splitText(offset);
      //ie8涓媠plitText涓嶄細璺熸柊childNodes,鎴戜滑鎵嬪姩瑙﹀彂浠栫殑鏇存柊
      if (browser.ie8) {
        var tmpNode = doc.createTextNode('');
        domUtils.insertAfter(retval, tmpNode);
        domUtils.remove(tmpNode);
      }
      return retval;
    },

    /**
     * 妫€娴嬫枃鏈妭鐐箃extNode鏄惁涓虹┖鑺傜偣锛堝寘鎷┖鏍笺€佹崲琛屻€佸崰浣嶇绛夊瓧绗︼級
     * @method  isWhitespace
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Boolean } 妫€娴嬬殑鑺傜偣鏄惁涓虹┖
     * @example
     * ```html
     * <div id="test">
     *
     * </div>
     * <script>
     *      //output: true
     *      console.log( UE.dom.domUtils.isWhitespace( document.getElementById("test").firstChild ) );
     * </script>
     * ```
     */
    isWhitespace:function (node) {
      return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
    },
    /**
     * 鑾峰彇鍏冪礌element鐩稿浜巚iewport鐨勪綅缃潗鏍�
     * @method getXY
     * @param { Node } element 闇€瑕佽绠椾綅缃殑鑺傜偣瀵硅薄
     * @return { Object } 杩斿洖褰㈠{x:left,y:top}鐨勪竴涓猭ey-value鏄犲皠瀵硅薄锛� 鍏朵腑閿畑浠ｈ〃姘村钩鍋忕Щ璺濈锛�
     *                          y浠ｈ〃鍨傜洿鍋忕Щ璺濈銆�
     *
     * @example
     * ```javascript
     * var location = UE.dom.domUtils.getXY( document.getElementById("test") );
     * //output: test鐨勫潗鏍囦负: 12, 24
     * console.log( 'test鐨勫潗鏍囦负锛� ', location.x, ',', location.y );
     * ```
     */
    getXY:function (element) {
      var x = 0, y = 0;
      while (element.offsetParent) {
        y += element.offsetTop;
        x += element.offsetLeft;
        element = element.offsetParent;
      }
      return { 'x':x, 'y':y};
    },
    /**
     * 涓哄厓绱爀lement缁戝畾鍘熺敓DOM浜嬩欢锛宼ype涓轰簨浠剁被鍨嬶紝handler涓哄鐞嗗嚱鏁�
     * @method on
     * @param { Node } element 闇€瑕佺粦瀹氫簨浠剁殑鑺傜偣瀵硅薄
     * @param { String } type 缁戝畾鐨勪簨浠剁被鍨�
     * @param { Function } handler 浜嬩欢澶勭悊鍣�
     * @example
     * ```javascript
     * UE.dom.domUtils.on(document.body,"click",function(e){
     *     //e涓轰簨浠跺璞★紝this涓鸿鐐瑰嚮鍏冪礌瀵规垙閭ｄ釜
     * });
     * ```
     */

    /**
     * 涓哄厓绱爀lement缁戝畾鍘熺敓DOM浜嬩欢锛宼ype涓轰簨浠剁被鍨嬶紝handler涓哄鐞嗗嚱鏁�
     * @method on
     * @param { Node } element 闇€瑕佺粦瀹氫簨浠剁殑鑺傜偣瀵硅薄
     * @param { Array } type 缁戝畾鐨勪簨浠剁被鍨嬫暟缁�
     * @param { Function } handler 浜嬩欢澶勭悊鍣�
     * @example
     * ```javascript
     * UE.dom.domUtils.on(document.body,["click","mousedown"],function(evt){
     *     //evt涓轰簨浠跺璞★紝this涓鸿鐐瑰嚮鍏冪礌瀵硅薄
     * });
     * ```
     */
    on:function (element, type, handler) {

      var types = utils.isArray(type) ? type : utils.trim(type).split(/\s+/),
        k = types.length;
      if (k) while (k--) {
        type = types[k];
        if (element.addEventListener) {
          element.addEventListener(type, handler, false);
        } else {
          if (!handler._d) {
            handler._d = {
              els : []
            };
          }
          var key = type + handler.toString(),index = utils.indexOf(handler._d.els,element);
          if (!handler._d[key] || index == -1) {
            if(index == -1){
              handler._d.els.push(element);
            }
            if(!handler._d[key]){
              handler._d[key] = function (evt) {
                return handler.call(evt.srcElement, evt || window.event);
              };
            }


            element.attachEvent('on' + type, handler._d[key]);
          }
        }
      }
      element = null;
    },
    /**
     * 瑙ｉ櫎DOM浜嬩欢缁戝畾
     * @method un
     * @param { Node } element 闇€瑕佽В闄や簨浠剁粦瀹氱殑鑺傜偣瀵硅薄
     * @param { String } type 闇€瑕佹帴瑙︾粦瀹氱殑浜嬩欢绫诲瀷
     * @param { Function } handler 瀵瑰簲鐨勪簨浠跺鐞嗗櫒
     * @example
     * ```javascript
     * UE.dom.domUtils.un(document.body,"click",function(evt){
     *     //evt涓轰簨浠跺璞★紝this涓鸿鐐瑰嚮鍏冪礌瀵硅薄
     * });
     * ```
     */

    /**
     * 瑙ｉ櫎DOM浜嬩欢缁戝畾
     * @method un
     * @param { Node } element 闇€瑕佽В闄や簨浠剁粦瀹氱殑鑺傜偣瀵硅薄
     * @param { Array } type 闇€瑕佹帴瑙︾粦瀹氱殑浜嬩欢绫诲瀷鏁扮粍
     * @param { Function } handler 瀵瑰簲鐨勪簨浠跺鐞嗗櫒
     * @example
     * ```javascript
     * UE.dom.domUtils.un(document.body, ["click","mousedown"],function(evt){
     *     //evt涓轰簨浠跺璞★紝this涓鸿鐐瑰嚮鍏冪礌瀵硅薄
     * });
     * ```
     */
    un:function (element, type, handler) {
      var types = utils.isArray(type) ? type : utils.trim(type).split(/\s+/),
        k = types.length;
      if (k) while (k--) {
        type = types[k];
        if (element.removeEventListener) {
          element.removeEventListener(type, handler, false);
        } else {
          var key = type + handler.toString();
          try{
            element.detachEvent('on' + type, handler._d ? handler._d[key] : handler);
          }catch(e){}
          if (handler._d && handler._d[key]) {
            var index = utils.indexOf(handler._d.els,element);
            if(index!=-1){
              handler._d.els.splice(index,1);
            }
            handler._d.els.length == 0 && delete handler._d[key];
          }
        }
      }
    },

    /**
     * 姣旇緝鑺傜偣nodeA涓庤妭鐐筺odeB鏄惁鍏锋湁鐩稿悓鐨勬爣绛惧悕銆佸睘鎬у悕浠ュ強灞炴€у€�
     * @method  isSameElement
     * @param { Node } nodeA 闇€瑕佹瘮杈冪殑鑺傜偣
     * @param { Node } nodeB 闇€瑕佹瘮杈冪殑鑺傜偣
     * @return { Boolean } 涓や釜鑺傜偣鏄惁鍏锋湁鐩稿悓鐨勬爣绛惧悕銆佸睘鎬у悕浠ュ強灞炴€у€�
     * @example
     * ```html
     * <span style="font-size:12px">ssss</span>
     * <span style="font-size:12px">bbbbb</span>
     * <span style="font-size:13px">ssss</span>
     * <span style="font-size:14px">bbbbb</span>
     *
     * <script>
     *
     *     var nodes = document.getElementsByTagName( "span" );
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.isSameElement( nodes[0], nodes[1] ) );
     *
     *     //output: false
     *     console.log( UE.dom.domUtils.isSameElement( nodes[2], nodes[3] ) );
     *
     * </script>
     * ```
     */
    isSameElement:function (nodeA, nodeB) {
      if (nodeA.tagName != nodeB.tagName) {
        return false;
      }
      var thisAttrs = nodeA.attributes,
        otherAttrs = nodeB.attributes;
      if (!ie && thisAttrs.length != otherAttrs.length) {
        return false;
      }
      var attrA, attrB, al = 0, bl = 0;
      for (var i = 0; attrA = thisAttrs[i++];) {
        if (attrA.nodeName == 'style') {
          if (attrA.specified) {
            al++;
          }
          if (domUtils.isSameStyle(nodeA, nodeB)) {
            continue;
          } else {
            return false;
          }
        }
        if (ie) {
          if (attrA.specified) {
            al++;
            attrB = otherAttrs.getNamedItem(attrA.nodeName);
          } else {
            continue;
          }
        } else {
          attrB = nodeB.attributes[attrA.nodeName];
        }
        if (!attrB.specified || attrA.nodeValue != attrB.nodeValue) {
          return false;
        }
      }
      // 鏈夊彲鑳絘ttrB鐨勫睘鎬у寘鍚簡attrA鐨勫睘鎬т箣澶栬繕鏈夎嚜宸辩殑灞炴€�
      if (ie) {
        for (i = 0; attrB = otherAttrs[i++];) {
          if (attrB.specified) {
            bl++;
          }
        }
        if (al != bl) {
          return false;
        }
      }
      return true;
    },

    /**
     * 鍒ゆ柇鑺傜偣nodeA涓庤妭鐐筺odeB鐨勫厓绱犵殑style灞炴€ф槸鍚︿竴鑷�
     * @method isSameStyle
     * @param { Node } nodeA 闇€瑕佹瘮杈冪殑鑺傜偣
     * @param { Node } nodeB 闇€瑕佹瘮杈冪殑鑺傜偣
     * @return { Boolean } 涓や釜鑺傜偣鏄惁鍏锋湁鐩稿悓鐨剆tyle灞炴€у€�
     * @example
     * ```html
     * <span style="font-size:12px">ssss</span>
     * <span style="font-size:12px">bbbbb</span>
     * <span style="font-size:13px">ssss</span>
     * <span style="font-size:14px">bbbbb</span>
     *
     * <script>
     *
     *     var nodes = document.getElementsByTagName( "span" );
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.isSameStyle( nodes[0], nodes[1] ) );
     *
     *     //output: false
     *     console.log( UE.dom.domUtils.isSameStyle( nodes[2], nodes[3] ) );
     *
     * </script>
     * ```
     */
    isSameStyle:function (nodeA, nodeB) {
      var styleA = nodeA.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':'),
        styleB = nodeB.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':');
      if (browser.opera) {
        styleA = nodeA.style;
        styleB = nodeB.style;
        if (styleA.length != styleB.length)
          return false;
        for (var p in styleA) {
          if (/^(\d+|csstext)$/i.test(p)) {
            continue;
          }
          if (styleA[p] != styleB[p]) {
            return false;
          }
        }
        return true;
      }
      if (!styleA || !styleB) {
        return styleA == styleB;
      }
      styleA = styleA.split(';');
      styleB = styleB.split(';');
      if (styleA.length != styleB.length) {
        return false;
      }
      for (var i = 0, ci; ci = styleA[i++];) {
        if (utils.indexOf(styleB, ci) == -1) {
          return false;
        }
      }
      return true;
    },
    /**
     * 妫€鏌ヨ妭鐐筺ode鏄惁涓篵lock鍏冪礌
     * @method isBlockElm
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Boolean } 鏄惁鏄痓lock鍏冪礌鑺傜偣
     * @warning 璇ユ柟娉曠殑鍒ゆ柇瑙勫垯濡備笅锛� 濡傛灉璇ュ厓绱犲師鏈槸block鍏冪礌锛� 鍒欎笉璁鸿鍏冪礌褰撳墠鐨刢ss鏍峰紡鏄粈涔堥兘浼氳繑鍥瀟rue锛�
     *          鍚﹀垯锛屾娴嬭鍏冪礌鐨刢ss鏍峰紡锛� 濡傛灉璇ュ厓绱犲綋鍓嶆槸block鍏冪礌锛� 鍒欒繑鍥瀟rue銆� 鍏朵綑鎯呭喌涓嬮兘杩斿洖false銆�
     * @example
     * ```html
     * <span id="test1" style="display: block"></span>
     * <span id="test2"></span>
     * <div id="test3" style="display: inline"></div>
     *
     * <script>
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.isBlockElm( document.getElementById("test1") ) );
     *
     *     //output: false
     *     console.log( UE.dom.domUtils.isBlockElm( document.getElementById("test2") ) );
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.isBlockElm( document.getElementById("test3") ) );
     *
     * </script>
     * ```
     */
    isBlockElm:function (node) {
      return node.nodeType == 1 && (dtd.$block[node.tagName] || styleBlock[domUtils.getComputedStyle(node, 'display')]) && !dtd.$nonChild[node.tagName];
    },
    /**
     * 妫€娴媙ode鑺傜偣鏄惁涓篵ody鑺傜偣
     * @method isBody
     * @param { Element } node 闇€瑕佹娴嬬殑dom鍏冪礌
     * @return { Boolean } 缁欏畾鐨勫厓绱犳槸鍚︽槸body鍏冪礌
     * @example
     * ```javascript
     * //output: true
     * console.log( UE.dom.domUtils.isBody( document.body ) );
     * ```
     */
    isBody:function (node) {
      return  node && node.nodeType == 1 && node.tagName.toLowerCase() == 'body';
    },
    /**
     * 浠ode鑺傜偣涓哄垎鐣岋紝灏嗚鑺傜偣鐨勬寚瀹氱鍏堣妭鐐筽arent鎷嗗垎鎴愪袱涓嫭绔嬬殑鑺傜偣锛�
     * 鎷嗗垎褰㈡垚鐨勪袱涓妭鐐逛箣闂存槸node鑺傜偣
     * @method breakParent
     * @param { Node } node 浣滀负鍒嗙晫鐨勮妭鐐瑰璞�
     * @param { Node } parent 璇ヨ妭鐐瑰繀椤绘槸node鑺傜偣鐨勭鍏堣妭鐐癸紝 涓旀槸block鑺傜偣銆�
     * @return { Node } 缁欏畾鐨刵ode鍒嗙晫鑺傜偣
     * @example
     * ```javascript
     *
     *      var node = document.createElement("span"),
     *          wrapNode = document.createElement( "div" ),
     *          parent = document.createElement("p");
     *
     *      parent.appendChild( node );
     *      wrapNode.appendChild( parent );
     *
     *      //鎷嗗垎鍓�
     *      //output: <p><span></span></p>
     *      console.log( wrapNode.innerHTML );
     *
     *
     *      UE.dom.domUtils.breakParent( node, parent );
     *      //鎷嗗垎鍚�
     *      //output: <p></p><span></span><p></p>
     *      console.log( wrapNode.innerHTML );
     *
     * ```
     */
    breakParent:function (node, parent) {
      var tmpNode,
        parentClone = node,
        clone = node,
        leftNodes,
        rightNodes;
      do {
        parentClone = parentClone.parentNode;
        if (leftNodes) {
          tmpNode = parentClone.cloneNode(false);
          tmpNode.appendChild(leftNodes);
          leftNodes = tmpNode;
          tmpNode = parentClone.cloneNode(false);
          tmpNode.appendChild(rightNodes);
          rightNodes = tmpNode;
        } else {
          leftNodes = parentClone.cloneNode(false);
          rightNodes = leftNodes.cloneNode(false);
        }
        while (tmpNode = clone.previousSibling) {
          leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
        }
        while (tmpNode = clone.nextSibling) {
          rightNodes.appendChild(tmpNode);
        }
        clone = parentClone;
      } while (parent !== parentClone);
      tmpNode = parent.parentNode;
      tmpNode.insertBefore(leftNodes, parent);
      tmpNode.insertBefore(rightNodes, parent);
      tmpNode.insertBefore(node, rightNodes);
      domUtils.remove(parent);
      return node;
    },
    /**
     * 妫€鏌ヨ妭鐐筺ode鏄惁鏄┖inline鑺傜偣
     * @method  isEmptyInlineElement
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Number }  濡傛灉缁欏畾鐨勮妭鐐规槸绌虹殑inline鑺傜偣锛� 鍒欒繑鍥�1, 鍚﹀垯杩斿洖0銆�
     * @example
     * ```html
     * <b><i></i></b> => 1
     * <b><i></i><u></u></b> => 1
     * <b></b> => 1
     * <b>xx<i></i></b> => 0
     * ```
     */
    isEmptyInlineElement:function (node) {
      if (node.nodeType != 1 || !dtd.$removeEmpty[ node.tagName ]) {
        return 0;
      }
      node = node.firstChild;
      while (node) {
        //濡傛灉鏄垱寤虹殑bookmark灏辫烦杩�
        if (domUtils.isBookmarkNode(node)) {
          return 0;
        }
        if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
          node.nodeType == 3 && !domUtils.isWhitespace(node)
        ) {
          return 0;
        }
        node = node.nextSibling;
      }
      return 1;

    },

    /**
     * 鍒犻櫎node鑺傜偣涓嬮灏句袱绔殑绌虹櫧鏂囨湰瀛愯妭鐐�
     * @method trimWhiteTextNode
     * @param { Element } node 闇€瑕佹墽琛屽垹闄ゆ搷浣滅殑鍏冪礌瀵硅薄
     * @example
     * ```javascript
     *      var node = document.createElement("div");
     *
     *      node.appendChild( document.createTextNode( "" ) );
     *
     *      node.appendChild( document.createElement("div") );
     *
     *      node.appendChild( document.createTextNode( "" ) );
     *
     *      //3
     *      console.log( node.childNodes.length );
     *
     *      UE.dom.domUtils.trimWhiteTextNode( node );
     *
     *      //1
     *      console.log( node.childNodes.length );
     * ```
     */
    trimWhiteTextNode:function (node) {
      function remove(dir) {
        var child;
        while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child)) {
          node.removeChild(child);
        }
      }
      remove('firstChild');
      remove('lastChild');
    },

    /**
     * 鍚堝苟node鑺傜偣涓嬬浉鍚岀殑瀛愯妭鐐�
     * @name mergeChild
     * @desc
     * UE.dom.domUtils.mergeChild(node,tagName) //tagName瑕佸悎骞剁殑瀛愯妭鐐圭殑鏍囩
     * @example
     * <p><span style="font-size:12px;">xx<span style="font-size:12px;">aa</span>xx</span></p>
     * ==> UE.dom.domUtils.mergeChild(node,'span')
     * <p><span style="font-size:12px;">xxaaxx</span></p>
     */
    mergeChild:function (node, tagName, attrs) {
      var list = domUtils.getElementsByTagName(node, node.tagName.toLowerCase());
      for (var i = 0, ci; ci = list[i++];) {
        if (!ci.parentNode || domUtils.isBookmarkNode(ci)) {
          continue;
        }
        //span鍗曠嫭澶勭悊
        if (ci.tagName.toLowerCase() == 'span') {
          if (node === ci.parentNode) {
            domUtils.trimWhiteTextNode(node);
            if (node.childNodes.length == 1) {
              node.style.cssText = ci.style.cssText + ";" + node.style.cssText;
              domUtils.remove(ci, true);
              continue;
            }
          }
          ci.style.cssText = node.style.cssText + ';' + ci.style.cssText;
          if (attrs) {
            var style = attrs.style;
            if (style) {
              style = style.split(';');
              for (var j = 0, s; s = style[j++];) {
                ci.style[utils.cssStyleToDomStyle(s.split(':')[0])] = s.split(':')[1];
              }
            }
          }
          if (domUtils.isSameStyle(ci, node)) {
            domUtils.remove(ci, true);
          }
          continue;
        }
        if (domUtils.isSameElement(node, ci)) {
          domUtils.remove(ci, true);
        }
      }
    },

    /**
     * 鍘熺敓鏂规硶getElementsByTagName鐨勫皝瑁�
     * @method getElementsByTagName
     * @param { Node } node 鐩爣鑺傜偣瀵硅薄
     * @param { String } tagName 闇€瑕佹煡鎵剧殑鑺傜偣鐨則agName锛� 澶氫釜tagName浠ョ┖鏍煎垎鍓�
     * @return { Array } 绗﹀悎鏉′欢鐨勮妭鐐归泦鍚�
     */
    getElementsByTagName:function (node, name,filter) {
      if(filter && utils.isString(filter)){
        var className = filter;
        filter =  function(node){return domUtils.hasClass(node,className)}
      }
      name = utils.trim(name).replace(/[ ]{2,}/g,' ').split(' ');
      var arr = [];
      for(var n = 0,ni;ni=name[n++];){
        var list = node.getElementsByTagName(ni);
        for (var i = 0, ci; ci = list[i++];) {
          if(!filter || filter(ci))
            arr.push(ci);
        }
      }

      return arr;
    },
    /**
     * 灏嗚妭鐐筺ode鎻愬彇鍒扮埗鑺傜偣涓�
     * @method mergeToParent
     * @param { Element } node 闇€瑕佹彁鍙栫殑鍏冪礌瀵硅薄
     * @example
     * ```html
     * <div id="parent">
     *     <div id="sub">
     *         <span id="child"></span>
     *     </div>
     * </div>
     *
     * <script>
     *
     *     var child = document.getElementById( "child" );
     *
     *     //output: sub
     *     console.log( child.parentNode.id );
     *
     *     UE.dom.domUtils.mergeToParent( child );
     *
     *     //output: parent
     *     console.log( child.parentNode.id );
     *
     * </script>
     * ```
     */
    mergeToParent:function (node) {
      var parent = node.parentNode;
      while (parent && dtd.$removeEmpty[parent.tagName]) {
        if (parent.tagName == node.tagName || parent.tagName == 'A') {//閽堝a鏍囩鍗曠嫭澶勭悊
          domUtils.trimWhiteTextNode(parent);
          //span闇€瑕佺壒娈婂鐞�  涓嶅鐞嗚繖鏍风殑鎯呭喌 <span stlye="color:#fff">xxx<span style="color:#ccc">xxx</span>xxx</span>
          if (parent.tagName == 'SPAN' && !domUtils.isSameStyle(parent, node)
            || (parent.tagName == 'A' && node.tagName == 'SPAN')) {
            if (parent.childNodes.length > 1 || parent !== node.parentNode) {
              node.style.cssText = parent.style.cssText + ";" + node.style.cssText;
              parent = parent.parentNode;
              continue;
            } else {
              parent.style.cssText += ";" + node.style.cssText;
              //trace:952 a鏍囩瑕佷繚鎸佷笅鍒掔嚎
              if (parent.tagName == 'A') {
                parent.style.textDecoration = 'underline';
              }
            }
          }
          if (parent.tagName != 'A') {
            parent === node.parentNode && domUtils.remove(node, true);
            break;
          }
        }
        parent = parent.parentNode;
      }
    },
    /**
     * 鍚堝苟鑺傜偣node鐨勫乏鍙冲厔寮熻妭鐐�
     * @method mergeSibling
     * @param { Element } node 闇€瑕佸悎骞剁殑鐩爣鑺傜偣
     * @example
     * ```html
     * <b>xxxx</b><b id="test">ooo</b><b>xxxx</b>
     *
     * <script>
     *     var demoNode = document.getElementById("test");
     *     UE.dom.domUtils.mergeSibling( demoNode );
     *     //output: xxxxoooxxxx
     *     console.log( demoNode.innerHTML );
     * </script>
     * ```
     */

    /**
     * 鍚堝苟鑺傜偣node鐨勫乏鍙冲厔寮熻妭鐐癸紝 鍙互鏍规嵁缁欏畾鐨勬潯浠堕€夋嫨鏄惁蹇界暐鍚堝苟宸﹁妭鐐广€�
     * @method mergeSibling
     * @param { Element } node 闇€瑕佸悎骞剁殑鐩爣鑺傜偣
     * @param { Boolean } ignorePre 鏄惁蹇界暐鍚堝苟宸﹁妭鐐�
     * @example
     * ```html
     * <b>xxxx</b><b id="test">ooo</b><b>xxxx</b>
     *
     * <script>
     *     var demoNode = document.getElementById("test");
     *     UE.dom.domUtils.mergeSibling( demoNode, true );
     *     //output: oooxxxx
     *     console.log( demoNode.innerHTML );
     * </script>
     * ```
     */

    /**
     * 鍚堝苟鑺傜偣node鐨勫乏鍙冲厔寮熻妭鐐癸紝鍙互鏍规嵁缁欏畾鐨勬潯浠堕€夋嫨鏄惁蹇界暐鍚堝苟宸﹀彸鑺傜偣銆�
     * @method mergeSibling
     * @param { Element } node 闇€瑕佸悎骞剁殑鐩爣鑺傜偣
     * @param { Boolean } ignorePre 鏄惁蹇界暐鍚堝苟宸﹁妭鐐�
     * @param { Boolean } ignoreNext 鏄惁蹇界暐鍚堝苟鍙宠妭鐐�
     * @remind 濡傛灉鍚屾椂蹇界暐宸﹀彸鑺傜偣锛� 鍒欒鎿嶄綔浠€涔堜篃涓嶄細鍋�
     * @example
     * ```html
     * <b>xxxx</b><b id="test">ooo</b><b>xxxx</b>
     *
     * <script>
     *     var demoNode = document.getElementById("test");
     *     UE.dom.domUtils.mergeSibling( demoNode, false, true );
     *     //output: xxxxooo
     *     console.log( demoNode.innerHTML );
     * </script>
     * ```
     */
    mergeSibling:function (node, ignorePre, ignoreNext) {
      function merge(rtl, start, node) {
        var next;
        if ((next = node[rtl]) && !domUtils.isBookmarkNode(next) && next.nodeType == 1 && domUtils.isSameElement(node, next)) {
          while (next.firstChild) {
            if (start == 'firstChild') {
              node.insertBefore(next.lastChild, node.firstChild);
            } else {
              node.appendChild(next.firstChild);
            }
          }
          domUtils.remove(next);
        }
      }
      !ignorePre && merge('previousSibling', 'firstChild', node);
      !ignoreNext && merge('nextSibling', 'lastChild', node);
    },

    /**
     * 璁剧疆鑺傜偣node鍙婂叾瀛愯妭鐐逛笉浼氳閫変腑
     * @method unSelectable
     * @param { Element } node 闇€瑕佹墽琛屾搷浣滅殑dom鍏冪礌
     * @remind 鎵ц璇ユ搷浣滃悗鐨勮妭鐐癸紝 灏嗕笉鑳借榧犳爣閫変腑
     * @example
     * ```javascript
     * UE.dom.domUtils.unSelectable( document.body );
     * ```
     */
    unSelectable:ie && browser.ie9below || browser.opera ? function (node) {
      //for ie9
      node.onselectstart = function () {
        return false;
      };
      node.onclick = node.onkeyup = node.onkeydown = function () {
        return false;
      };
      node.unselectable = 'on';
      node.setAttribute("unselectable", "on");
      for (var i = 0, ci; ci = node.all[i++];) {
        switch (ci.tagName.toLowerCase()) {
          case 'iframe' :
          case 'textarea' :
          case 'input' :
          case 'select' :
            break;
          default :
            ci.unselectable = 'on';
            node.setAttribute("unselectable", "on");
        }
      }
    } : function (node) {
      node.style.MozUserSelect =
        node.style.webkitUserSelect =
          node.style.msUserSelect =
            node.style.KhtmlUserSelect = 'none';
    },
    /**
     * 鍒犻櫎鑺傜偣node涓婄殑鎸囧畾灞炴€у悕绉扮殑灞炴€�
     * @method  removeAttributes
     * @param { Node } node 闇€瑕佸垹闄ゅ睘鎬х殑鑺傜偣瀵硅薄
     * @param { String } attrNames 鍙互鏄┖鏍奸殧寮€鐨勫涓睘鎬у悕绉帮紝璇ユ搷浣滃皢浼氫緷娆″垹闄ょ浉搴旂殑灞炴€�
     * @example
     * ```html
     * <div id="wrap">
     *      <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
     * </div>
     *
     * <script>
     *
     *     UE.dom.domUtils.removeAttributes( document.getElementById( "test" ), "id name" );
     *
     *     //output: <span style="font-size:14px;">xxxxx</span>
     *     console.log( document.getElementById("wrap").innerHTML );
     *
     * </script>
     * ```
     */

    /**
     * 鍒犻櫎鑺傜偣node涓婄殑鎸囧畾灞炴€у悕绉扮殑灞炴€�
     * @method  removeAttributes
     * @param { Node } node 闇€瑕佸垹闄ゅ睘鎬х殑鑺傜偣瀵硅薄
     * @param { Array } attrNames 闇€瑕佸垹闄ょ殑灞炴€у悕鏁扮粍
     * @example
     * ```html
     * <div id="wrap">
     *      <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
     * </div>
     *
     * <script>
     *
     *     UE.dom.domUtils.removeAttributes( document.getElementById( "test" ), ["id", "name"] );
     *
     *     //output: <span style="font-size:14px;">xxxxx</span>
     *     console.log( document.getElementById("wrap").innerHTML );
     *
     * </script>
     * ```
     */
    removeAttributes:function (node, attrNames) {
      attrNames = utils.isArray(attrNames) ? attrNames : utils.trim(attrNames).replace(/[ ]{2,}/g,' ').split(' ');
      for (var i = 0, ci; ci = attrNames[i++];) {
        ci = attrFix[ci] || ci;
        switch (ci) {
          case 'className':
            node[ci] = '';
            break;
          case 'style':
            node.style.cssText = '';
            var val = node.getAttributeNode('style');
            !browser.ie && val && node.removeAttributeNode(val);
        }
        node.removeAttribute(ci);
      }
    },
    /**
     * 鍦╠oc涓嬪垱寤轰竴涓爣绛惧悕涓簍ag锛屽睘鎬т负attrs鐨勫厓绱�
     * @method createElement
     * @param { DomDocument } doc 鏂板垱寤虹殑鍏冪礌灞炰簬璇ocument鑺傜偣鍒涘缓
     * @param { String } tagName 闇€瑕佸垱寤虹殑鍏冪礌鐨勬爣绛惧悕
     * @param { Object } attrs 鏂板垱寤虹殑鍏冪礌鐨勫睘鎬ey-value闆嗗悎
     * @return { Element } 鏂板垱寤虹殑鍏冪礌瀵硅薄
     * @example
     * ```javascript
     * var ele = UE.dom.domUtils.createElement( document, 'div', {
     *     id: 'test'
     * } );
     *
     * //output: DIV
     * console.log( ele.tagName );
     *
     * //output: test
     * console.log( ele.id );
     *
     * ```
     */
    createElement:function (doc, tag, attrs) {
      return domUtils.setAttributes(doc.createElement(tag), attrs)
    },
    /**
     * 涓鸿妭鐐筺ode娣诲姞灞炴€ttrs锛宎ttrs涓哄睘鎬ч敭鍊煎
     * @method setAttributes
     * @param { Element } node 闇€瑕佽缃睘鎬х殑鍏冪礌瀵硅薄
     * @param { Object } attrs 闇€瑕佽缃殑灞炴€у悕-鍊煎
     * @return { Element } 璁剧疆灞炴€х殑鍏冪礌瀵硅薄
     * @example
     * ```html
     * <span id="test"></span>
     *
     * <script>
     *
     *     var testNode = UE.dom.domUtils.setAttributes( document.getElementById( "test" ), {
     *         id: 'demo'
     *     } );
     *
     *     //output: demo
     *     console.log( testNode.id );
     *
     * </script>
     *
     */
    setAttributes:function (node, attrs) {
      for (var attr in attrs) {
        if(attrs.hasOwnProperty(attr)){
          var value = attrs[attr];
          switch (attr) {
            case 'class':
              //ie涓嬭杩欐牱璧嬪€硷紝setAttribute涓嶈捣浣滅敤
              node.className = value;
              break;
            case 'style' :
              node.style.cssText = node.style.cssText + ";" + value;
              break;
            case 'innerHTML':
              node[attr] = value;
              break;
            case 'value':
              node.value = value;
              break;
            default:
              node.setAttribute(attrFix[attr] || attr, value);
          }
        }
      }
      return node;
    },

    /**
     * 鑾峰彇鍏冪礌element缁忚繃璁＄畻鍚庣殑鏍峰紡鍊�
     * @method getComputedStyle
     * @param { Element } element 闇€瑕佽幏鍙栨牱寮忕殑鍏冪礌瀵硅薄
     * @param { String } styleName 闇€瑕佽幏鍙栫殑鏍峰紡鍚�
     * @return { String } 鑾峰彇鍒扮殑鏍峰紡鍊�
     * @example
     * ```html
     * <style type="text/css">
     *      #test {
     *          font-size: 15px;
     *      }
     * </style>
     *
     * <span id="test"></span>
     *
     * <script>
     *     //output: 15px
     *     console.log( UE.dom.domUtils.getComputedStyle( document.getElementById( "test" ), 'font-size' ) );
     * </script>
     * ```
     */
    getComputedStyle:function (element, styleName) {
      //涓€涓嬬殑灞炴€у崟鐙鐞�
      var pros = 'width height top left';

      if(pros.indexOf(styleName) > -1){
        return element['offset' + styleName.replace(/^\w/,function(s){return s.toUpperCase()})] + 'px';
      }
      //蹇界暐鏂囨湰鑺傜偣
      if (element.nodeType == 3) {
        element = element.parentNode;
      }
      //ie涓媐ont-size鑻ody涓嬪畾涔変簡font-size锛屽垯浠巆urrentStyle閲屼細鍙栧埌杩欎釜font-size. 鍙栦笉鍒板疄闄呭€硷紝鏁呮淇敼.
      if (browser.ie && browser.version < 9 && styleName == 'font-size' && !element.style.fontSize &&
        !dtd.$empty[element.tagName] && !dtd.$nonChild[element.tagName]) {
        var span = element.ownerDocument.createElement('span');
        span.style.cssText = 'padding:0;border:0;font-family:simsun;';
        span.innerHTML = '.';
        element.appendChild(span);
        var result = span.offsetHeight;
        element.removeChild(span);
        span = null;
        return result + 'px';
      }
      try {
        var value = domUtils.getStyle(element, styleName) ||
          (window.getComputedStyle ? domUtils.getWindow(element).getComputedStyle(element, '').getPropertyValue(styleName) :
            ( element.currentStyle || element.style )[utils.cssStyleToDomStyle(styleName)]);

      } catch (e) {
        return "";
      }
      return utils.transUnitToPx(utils.fixColor(styleName, value));
    },
    /**
     * 鍒犻櫎鍏冪礌element鎸囧畾鐨刢lassName
     * @method removeClasses
     * @param { Element } ele 闇€瑕佸垹闄lass鐨勫厓绱犺妭鐐�
     * @param { String } classNames 闇€瑕佸垹闄ょ殑className锛� 澶氫釜className涔嬮棿浠ョ┖鏍煎垎寮€
     * @example
     * ```html
     * <span id="test" class="test1 test2 test3">xxx</span>
     *
     * <script>
     *
     *     var testNode = document.getElementById( "test" );
     *     UE.dom.domUtils.removeClasses( testNode, "test1 test2" );
     *
     *     //output: test3
     *     console.log( testNode.className );
     *
     * </script>
     * ```
     */

    /**
     * 鍒犻櫎鍏冪礌element鎸囧畾鐨刢lassName
     * @method removeClasses
     * @param { Element } ele 闇€瑕佸垹闄lass鐨勫厓绱犺妭鐐�
     * @param { Array } classNames 闇€瑕佸垹闄ょ殑className鏁扮粍
     * @example
     * ```html
     * <span id="test" class="test1 test2 test3">xxx</span>
     *
     * <script>
     *
     *     var testNode = document.getElementById( "test" );
     *     UE.dom.domUtils.removeClasses( testNode, ["test1", "test2"] );
     *
     *     //output: test3
     *     console.log( testNode.className );
     *
     * </script>
     * ```
     */
    removeClasses:function (elm, classNames) {
      classNames = utils.isArray(classNames) ? classNames :
        utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
      for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
        cls = cls.replace(new RegExp('\\b' + ci + '\\b'),'')
      }
      cls = utils.trim(cls).replace(/[ ]{2,}/g,' ');
      if(cls){
        elm.className = cls;
      }else{
        domUtils.removeAttributes(elm,['class']);
      }
    },
    /**
     * 缁欏厓绱爀lement娣诲姞className
     * @method addClass
     * @param { Node } ele 闇€瑕佸鍔燾lassName鐨勫厓绱�
     * @param { String } classNames 闇€瑕佹坊鍔犵殑className锛� 澶氫釜className涔嬮棿浠ョ┖鏍煎垎鍓�
     * @remind 鐩稿悓鐨勭被鍚嶄笉浼氳閲嶅娣诲姞
     * @example
     * ```html
     * <span id="test" class="cls1 cls2"></span>
     *
     * <script>
     *     var testNode = document.getElementById("test");
     *
     *     UE.dom.domUtils.addClass( testNode, "cls2 cls3 cls4" );
     *
     *     //output: cl1 cls2 cls3 cls4
     *     console.log( testNode.className );
     *
     * <script>
     * ```
     */

    /**
     * 缁欏厓绱爀lement娣诲姞className
     * @method addClass
     * @param { Node } ele 闇€瑕佸鍔燾lassName鐨勫厓绱�
     * @param { Array } classNames 闇€瑕佹坊鍔犵殑className鐨勬暟缁�
     * @remind 鐩稿悓鐨勭被鍚嶄笉浼氳閲嶅娣诲姞
     * @example
     * ```html
     * <span id="test" class="cls1 cls2"></span>
     *
     * <script>
     *     var testNode = document.getElementById("test");
     *
     *     UE.dom.domUtils.addClass( testNode, ["cls2", "cls3", "cls4"] );
     *
     *     //output: cl1 cls2 cls3 cls4
     *     console.log( testNode.className );
     *
     * <script>
     * ```
     */
    addClass:function (elm, classNames) {
      if(!elm)return;
      classNames = utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
      for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
        if(!new RegExp('\\b' + ci + '\\b').test(cls)){
          cls += ' ' + ci;
        }
      }
      elm.className = utils.trim(cls);
    },
    /**
     * 鍒ゆ柇鍏冪礌element鏄惁鍖呭惈缁欏畾鐨勬牱寮忕被鍚峜lassName
     * @method hasClass
     * @param { Node } ele 闇€瑕佹娴嬬殑鍏冪礌
     * @param { String } classNames 闇€瑕佹娴嬬殑className锛� 澶氫釜className涔嬮棿鐢ㄧ┖鏍煎垎鍓�
     * @return { Boolean } 鍏冪礌鏄惁鍖呭惈鎵€鏈夌粰瀹氱殑className
     * @example
     * ```html
     * <span id="test1" class="cls1 cls2"></span>
     *
     * <script>
     *     var test1 = document.getElementById("test1");
     *
     *     //output: false
     *     console.log( UE.dom.domUtils.hasClass( test1, "cls2 cls1 cls3" ) );
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.hasClass( test1, "cls2 cls1" ) );
     * </script>
     * ```
     */

    /**
     * 鍒ゆ柇鍏冪礌element鏄惁鍖呭惈缁欏畾鐨勬牱寮忕被鍚峜lassName
     * @method hasClass
     * @param { Node } ele 闇€瑕佹娴嬬殑鍏冪礌
     * @param { Array } classNames 闇€瑕佹娴嬬殑className鏁扮粍
     * @return { Boolean } 鍏冪礌鏄惁鍖呭惈鎵€鏈夌粰瀹氱殑className
     * @example
     * ```html
     * <span id="test1" class="cls1 cls2"></span>
     *
     * <script>
     *     var test1 = document.getElementById("test1");
     *
     *     //output: false
     *     console.log( UE.dom.domUtils.hasClass( test1, [ "cls2", "cls1", "cls3" ] ) );
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.hasClass( test1, [ "cls2", "cls1" ]) );
     * </script>
     * ```
     */
    hasClass:function (element, className) {
      if(utils.isRegExp(className)){
        return className.test(element.className)
      }
      className = utils.trim(className).replace(/[ ]{2,}/g,' ').split(' ');
      for(var i = 0,ci,cls = element.className;ci=className[i++];){
        if(!new RegExp('\\b' + ci + '\\b','i').test(cls)){
          return false;
        }
      }
      return i - 1 == className.length;
    },

    /**
     * 闃绘浜嬩欢榛樿琛屼负
     * @method preventDefault
     * @param { Event } evt 闇€瑕侀樆姝㈤粯璁よ涓虹殑浜嬩欢瀵硅薄
     * @example
     * ```javascript
     * UE.dom.domUtils.preventDefault( evt );
     * ```
     */
    preventDefault:function (evt) {
      evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    },
    /**
     * 鍒犻櫎鍏冪礌element鎸囧畾鐨勬牱寮�
     * @method removeStyle
     * @param { Element } element 闇€瑕佸垹闄ゆ牱寮忕殑鍏冪礌
     * @param { String } styleName 闇€瑕佸垹闄ょ殑鏍峰紡鍚�
     * @example
     * ```html
     * <span id="test" style="color: red; background: blue;"></span>
     *
     * <script>
     *
     *     var testNode = document.getElementById("test");
     *
     *     UE.dom.domUtils.removeStyle( testNode, 'color' );
     *
     *     //output: background: blue;
     *     console.log( testNode.style.cssText );
     *
     * </script>
     * ```
     */
    removeStyle:function (element, name) {
      if(browser.ie ){
        //閽堝color鍏堝崟鐙鐞嗕竴涓�
        if(name == 'color'){
          name = '(^|;)' + name;
        }
        element.style.cssText = element.style.cssText.replace(new RegExp(name + '[^:]*:[^;]+;?','ig'),'')
      }else{
        if (element.style.removeProperty) {
          element.style.removeProperty (name);
        }else {
          element.style.removeAttribute (utils.cssStyleToDomStyle(name));
        }
      }


      if (!element.style.cssText) {
        domUtils.removeAttributes(element, ['style']);
      }
    },
    /**
     * 鑾峰彇鍏冪礌element鐨剆tyle灞炴€х殑鎸囧畾鍊�
     * @method getStyle
     * @param { Element } element 闇€瑕佽幏鍙栧睘鎬у€肩殑鍏冪礌
     * @param { String } styleName 闇€瑕佽幏鍙栫殑style鐨勫悕绉�
     * @warning 璇ユ柟娉曚粎鑾峰彇鍏冪礌style灞炴€т腑鎵€鏍囨槑鐨勫€�
     * @return { String } 璇ュ厓绱犲寘鍚寚瀹氱殑style灞炴€у€�
     * @example
     * ```html
     * <div id="test" style="color: red;"></div>
     *
     * <script>
     *
     *      var testNode = document.getElementById( "test" );
     *
     *      //output: red
     *      console.log( UE.dom.domUtils.getStyle( testNode, "color" ) );
     *
     *      //output: ""
     *      console.log( UE.dom.domUtils.getStyle( testNode, "background" ) );
     *
     * </script>
     * ```
     */
    getStyle:function (element, name) {
      var value = element.style[ utils.cssStyleToDomStyle(name) ];
      return utils.fixColor(name, value);
    },
    /**
     * 涓哄厓绱爀lement璁剧疆鏍峰紡灞炴€у€�
     * @method setStyle
     * @param { Element } element 闇€瑕佽缃牱寮忕殑鍏冪礌
     * @param { String } styleName 鏍峰紡鍚�
     * @param { String } styleValue 鏍峰紡鍊�
     * @example
     * ```html
     * <div id="test"></div>
     *
     * <script>
     *
     *      var testNode = document.getElementById( "test" );
     *
     *      //output: ""
     *      console.log( testNode.style.color );
     *
     *      UE.dom.domUtils.setStyle( testNode, 'color', 'red' );
     *      //output: "red"
     *      console.log( testNode.style.color );
     *
     * </script>
     * ```
     */
    setStyle:function (element, name, value) {
      element.style[utils.cssStyleToDomStyle(name)] = value;
      if(!utils.trim(element.style.cssText)){
        this.removeAttributes(element,'style')
      }
    },
    /**
     * 涓哄厓绱爀lement璁剧疆澶氫釜鏍峰紡灞炴€у€�
     * @method setStyles
     * @param { Element } element 闇€瑕佽缃牱寮忕殑鍏冪礌
     * @param { Object } styles 鏍峰紡鍚嶅€煎
     * @example
     * ```html
     * <div id="test"></div>
     *
     * <script>
     *
     *      var testNode = document.getElementById( "test" );
     *
     *      //output: ""
     *      console.log( testNode.style.color );
     *
     *      UE.dom.domUtils.setStyles( testNode, {
     *          'color': 'red'
     *      } );
     *      //output: "red"
     *      console.log( testNode.style.color );
     *
     * </script>
     * ```
     */
    setStyles:function (element, styles) {
      for (var name in styles) {
        if (styles.hasOwnProperty(name)) {
          domUtils.setStyle(element, name, styles[name]);
        }
      }
    },
    /**
     * 鍒犻櫎_moz_dirty灞炴€�
     * @private
     * @method removeDirtyAttr
     */
    removeDirtyAttr:function (node) {
      for (var i = 0, ci, nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
        ci.removeAttribute('_moz_dirty');
      }
      node.removeAttribute('_moz_dirty');
    },
    /**
     * 鑾峰彇瀛愯妭鐐圭殑鏁伴噺
     * @method getChildCount
     * @param { Element } node 闇€瑕佹娴嬬殑鍏冪礌
     * @return { Number } 缁欏畾鐨刵ode鍏冪礌鐨勫瓙鑺傜偣鏁伴噺
     * @example
     * ```html
     * <div id="test">
     *      <span></span>
     * </div>
     *
     * <script>
     *
     *     //output: 3
     *     console.log( UE.dom.domUtils.getChildCount( document.getElementById("test") ) );
     *
     * </script>
     * ```
     */

    /**
     * 鏍规嵁缁欏畾鐨勮繃婊よ鍒欙紝 鑾峰彇绗﹀悎鏉′欢鐨勫瓙鑺傜偣鐨勬暟閲�
     * @method getChildCount
     * @param { Element } node 闇€瑕佹娴嬬殑鍏冪礌
     * @param { Function } fn 杩囨护鍣紝 瑕佹眰瀵圭鍚堟潯浠剁殑瀛愯妭鐐硅繑鍥瀟rue锛� 鍙嶄箣鍒欒姹傝繑鍥瀎alse
     * @return { Number } 绗﹀悎杩囨护鏉′欢鐨刵ode鍏冪礌鐨勫瓙鑺傜偣鏁伴噺
     * @example
     * ```html
     * <div id="test">
     *      <span></span>
     * </div>
     *
     * <script>
     *
     *     //output: 1
     *     console.log( UE.dom.domUtils.getChildCount( document.getElementById("test"), function ( node ) {
     *
     *         return node.nodeType === 1;
     *
     *     } ) );
     *
     * </script>
     * ```
     */
    getChildCount:function (node, fn) {
      var count = 0, first = node.firstChild;
      fn = fn || function () {
          return 1;
        };
      while (first) {
        if (fn(first)) {
          count++;
        }
        first = first.nextSibling;
      }
      return count;
    },

    /**
     * 鍒ゆ柇缁欏畾鑺傜偣鏄惁涓虹┖鑺傜偣
     * @method isEmptyNode
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Boolean } 鑺傜偣鏄惁涓虹┖
     * @example
     * ```javascript
     * UE.dom.domUtils.isEmptyNode( document.body );
     * ```
     */
    isEmptyNode:function (node) {
      return !node.firstChild || domUtils.getChildCount(node, function (node) {
          return  !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
        }) == 0
    },
    clearSelectedArr:function (nodes) {
      var node;
      while (node = nodes.pop()) {
        domUtils.removeAttributes(node, ['class']);
      }
    },
    /**
     * 灏嗘樉绀哄尯鍩熸粴鍔ㄥ埌鎸囧畾鑺傜偣鐨勪綅缃�
     * @method scrollToView
     * @param    {Node}   node    鑺傜偣
     * @param    {window}   win      window瀵硅薄
     * @param    {Number}    offsetTop    璺濈涓婃柟鐨勫亸绉婚噺
     */
    scrollToView:function (node, win, offsetTop) {
      var getViewPaneSize = function () {
          var doc = win.document,
            mode = doc.compatMode == 'CSS1Compat';
          return {
            width:( mode ? doc.documentElement.clientWidth : doc.body.clientWidth ) || 0,
            height:( mode ? doc.documentElement.clientHeight : doc.body.clientHeight ) || 0
          };
        },
        getScrollPosition = function (win) {
          if ('pageXOffset' in win) {
            return {
              x:win.pageXOffset || 0,
              y:win.pageYOffset || 0
            };
          }
          else {
            var doc = win.document;
            return {
              x:doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
              y:doc.documentElement.scrollTop || doc.body.scrollTop || 0
            };
          }
        };
      var winHeight = getViewPaneSize().height, offset = winHeight * -1 + offsetTop;
      offset += (node.offsetHeight || 0);
      var elementPosition = domUtils.getXY(node);
      offset += elementPosition.y;
      var currentScroll = getScrollPosition(win).y;
      // offset += 50;
      if (offset > currentScroll || offset < currentScroll - winHeight) {
        win.scrollTo(0, offset + (offset < 0 ? -20 : 20));
      }
    },
    /**
     * 鍒ゆ柇缁欏畾鑺傜偣鏄惁涓篵r
     * @method isBr
     * @param { Node } node 闇€瑕佸垽鏂殑鑺傜偣瀵硅薄
     * @return { Boolean } 缁欏畾鐨勮妭鐐规槸鍚︽槸br鑺傜偣
     */
    isBr:function (node) {
      return node.nodeType == 1 && node.tagName == 'BR';
    },
    /**
     * 鍒ゆ柇缁欏畾鐨勮妭鐐规槸鍚︽槸涓€涓€滃～鍏呪€濊妭鐐�
     * @private
     * @method isFillChar
     * @param { Node } node 闇€瑕佸垽鏂殑鑺傜偣
     * @param { Boolean } isInStart 鏄惁浠庤妭鐐瑰唴瀹圭殑寮€濮嬩綅缃尮閰�
     * @returns { Boolean } 鑺傜偣鏄惁鏄～鍏呰妭鐐�
     */
    isFillChar:function (node,isInStart) {
      if(node.nodeType != 3)
        return false;
      var text = node.nodeValue;
      if(isInStart){
        return new RegExp('^' + domUtils.fillChar).test(text)
      }
      return !text.replace(new RegExp(domUtils.fillChar,'g'), '').length
    },
    isStartInblock:function (range) {
      var tmpRange = range.cloneRange(),
        flag = 0,
        start = tmpRange.startContainer,
        tmp;
      if(start.nodeType == 1 && start.childNodes[tmpRange.startOffset]){
        start = start.childNodes[tmpRange.startOffset];
        var pre = start.previousSibling;
        while(pre && domUtils.isFillChar(pre)){
          start = pre;
          pre = pre.previousSibling;
        }
      }
      if(this.isFillChar(start,true) && tmpRange.startOffset == 1){
        tmpRange.setStartBefore(start);
        start = tmpRange.startContainer;
      }

      while (start && domUtils.isFillChar(start)) {
        tmp = start;
        start = start.previousSibling
      }
      if (tmp) {
        tmpRange.setStartBefore(tmp);
        start = tmpRange.startContainer;
      }
      if (start.nodeType == 1 && domUtils.isEmptyNode(start) && tmpRange.startOffset == 1) {
        tmpRange.setStart(start, 0).collapse(true);
      }
      while (!tmpRange.startOffset) {
        start = tmpRange.startContainer;
        if (domUtils.isBlockElm(start) || domUtils.isBody(start)) {
          flag = 1;
          break;
        }
        var pre = tmpRange.startContainer.previousSibling,
          tmpNode;
        if (!pre) {
          tmpRange.setStartBefore(tmpRange.startContainer);
        } else {
          while (pre && domUtils.isFillChar(pre)) {
            tmpNode = pre;
            pre = pre.previousSibling;
          }
          if (tmpNode) {
            tmpRange.setStartBefore(tmpNode);
          } else {
            tmpRange.setStartBefore(tmpRange.startContainer);
          }
        }
      }
      return flag && !domUtils.isBody(tmpRange.startContainer) ? 1 : 0;
    },

    /**
     * 鍒ゆ柇缁欏畾鐨勫厓绱犳槸鍚︽槸涓€涓┖鍏冪礌
     * @method isEmptyBlock
     * @param { Element } node 闇€瑕佸垽鏂殑鍏冪礌
     * @return { Boolean } 鏄惁鏄┖鍏冪礌
     * @example
     * ```html
     * <div id="test"></div>
     *
     * <script>
     *     //output: true
     *     console.log( UE.dom.domUtils.isEmptyBlock( document.getElementById("test") ) );
     * </script>
     * ```
     */

    /**
     * 鏍规嵁鎸囧畾鐨勫垽鏂鍒欏垽鏂粰瀹氱殑鍏冪礌鏄惁鏄竴涓┖鍏冪礌
     * @method isEmptyBlock
     * @param { Element } node 闇€瑕佸垽鏂殑鍏冪礌
     * @param { RegExp } reg 瀵瑰唴瀹规墽琛屽垽鏂殑姝ｅ垯琛ㄨ揪寮忓璞�
     * @return { Boolean } 鏄惁鏄┖鍏冪礌
     */
    isEmptyBlock:function (node,reg) {
      if(node.nodeType != 1)
        return 0;
      reg = reg || new RegExp('[ \xa0\t\r\n' + domUtils.fillChar + ']', 'g');

      if (node[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').length > 0) {
        return 0;
      }
      for (var n in dtd.$isNotEmpty) {
        if (node.getElementsByTagName(n).length) {
          return 0;
        }
      }
      return 1;
    },

    /**
     * 绉诲姩鍏冪礌浣垮緱璇ュ厓绱犵殑浣嶇疆绉诲姩鎸囧畾鐨勫亸绉婚噺鐨勮窛绂�
     * @method setViewportOffset
     * @param { Element } element 闇€瑕佽缃亸绉婚噺鐨勫厓绱�
     * @param { Object } offset 鍋忕Щ閲忥紝 褰㈠{ left: 100, top: 50 }鐨勪竴涓敭鍊煎锛� 琛ㄧず璇ュ厓绱犲皢鍦�
     *                                  鐜版湁鐨勪綅缃笂鍚戞按骞虫柟鍚戝亸绉籵ffset.left鐨勮窛绂伙紝 鍦ㄧ珫鐩存柟鍚戜笂鍋忕Щ
     *                                  offset.top鐨勮窛绂�
     * @example
     * ```html
     * <div id="test" style="top: 100px; left: 50px; position: absolute;"></div>
     *
     * <script>
     *
     *     var testNode = document.getElementById("test");
     *
     *     UE.dom.domUtils.setViewportOffset( testNode, {
     *         left: 200,
     *         top: 50
     *     } );
     *
     *     //output: top: 300px; left: 100px; position: absolute;
     *     console.log( testNode.style.cssText );
     *
     * </script>
     * ```
     */
    setViewportOffset:function (element, offset) {
      var left = parseInt(element.style.left) | 0;
      var top = parseInt(element.style.top) | 0;
      var rect = element.getBoundingClientRect();
      var offsetLeft = offset.left - rect.left;
      var offsetTop = offset.top - rect.top;
      if (offsetLeft) {
        element.style.left = left + offsetLeft + 'px';
      }
      if (offsetTop) {
        element.style.top = top + offsetTop + 'px';
      }
    },

    /**
     * 鐢ㄢ€滃～鍏呭瓧绗︹€濆～鍏呰妭鐐�
     * @method fillNode
     * @private
     * @param { DomDocument } doc 濉厖鐨勮妭鐐规墍鍦ㄧ殑docment瀵硅薄
     * @param { Node } node 闇€瑕佸～鍏呯殑鑺傜偣瀵硅薄
     * @example
     * ```html
     * <div id="test"></div>
     *
     * <script>
     *     var testNode = document.getElementById("test");
     *
     *     //output: 0
     *     console.log( testNode.childNodes.length );
     *
     *     UE.dom.domUtils.fillNode( document, testNode );
     *
     *     //output: 1
     *     console.log( testNode.childNodes.length );
     *
     * </script>
     * ```
     */
    fillNode:function (doc, node) {
      var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
      node.innerHTML = '';
      node.appendChild(tmpNode);
    },

    /**
     * 鎶婅妭鐐箂rc鐨勬墍鏈夊瓙鑺傜偣杩藉姞鍒板彟涓€涓妭鐐箃ag涓婂幓
     * @method moveChild
     * @param { Node } src 婧愯妭鐐癸紝 璇ヨ妭鐐逛笅鐨勬墍鏈夊瓙鑺傜偣灏嗚绉婚櫎
     * @param { Node } tag 鐩爣鑺傜偣锛� 浠庢簮鑺傜偣绉婚櫎鐨勫瓙鑺傜偣灏嗚杩藉姞鍒拌鑺傜偣涓�
     * @example
     * ```html
     * <div id="test1">
     *      <span></span>
     * </div>
     * <div id="test2">
     *     <div></div>
     * </div>
     *
     * <script>
     *
     *     var test1 = document.getElementById("test1"),
     *         test2 = document.getElementById("test2");
     *
     *     UE.dom.domUtils.moveChild( test1, test2 );
     *
     *     //output: ""锛堢┖瀛楃涓诧級
     *     console.log( test1.innerHTML );
     *
     *     //output: "<div></div><span></span>"
     *     console.log( test2.innerHTML );
     *
     * </script>
     * ```
     */

    /**
     * 鎶婅妭鐐箂rc鐨勬墍鏈夊瓙鑺傜偣绉诲姩鍒板彟涓€涓妭鐐箃ag涓婂幓, 鍙互閫氳繃dir鍙傛暟鎺у埗闄勫姞鐨勮涓烘槸鈥滆拷鍔犫€濊繕鏄€滄彃鍏ラ《閮ㄢ€�
     * @method moveChild
     * @param { Node } src 婧愯妭鐐癸紝 璇ヨ妭鐐逛笅鐨勬墍鏈夊瓙鑺傜偣灏嗚绉婚櫎
     * @param { Node } tag 鐩爣鑺傜偣锛� 浠庢簮鑺傜偣绉婚櫎鐨勫瓙鑺傜偣灏嗚闄勫姞鍒拌鑺傜偣涓�
     * @param { Boolean } dir 闄勫姞鏂瑰紡锛� 濡傛灉涓簍rue锛� 鍒欓檮鍔犺繘鍘荤殑鑺傜偣灏嗚鏀惧埌鐩爣鑺傜偣鐨勯《閮紝 鍙嶄箣锛屽垯鏀惧埌鏈熬
     * @example
     * ```html
     * <div id="test1">
     *      <span></span>
     * </div>
     * <div id="test2">
     *     <div></div>
     * </div>
     *
     * <script>
     *
     *     var test1 = document.getElementById("test1"),
     *         test2 = document.getElementById("test2");
     *
     *     UE.dom.domUtils.moveChild( test1, test2, true );
     *
     *     //output: ""锛堢┖瀛楃涓诧級
     *     console.log( test1.innerHTML );
     *
     *     //output: "<span></span><div></div>"
     *     console.log( test2.innerHTML );
     *
     * </script>
     * ```
     */
    moveChild:function (src, tag, dir) {
      while (src.firstChild) {
        if (dir && tag.firstChild) {
          tag.insertBefore(src.lastChild, tag.firstChild);
        } else {
          tag.appendChild(src.firstChild);
        }
      }
    },

    /**
     * 鍒ゆ柇鑺傜偣鐨勬爣绛句笂鏄惁涓嶅瓨鍦ㄤ换浣曞睘鎬�
     * @method hasNoAttributes
     * @private
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Boolean } 鑺傜偣鏄惁涓嶅寘鍚换浣曞睘鎬�
     * @example
     * ```html
     * <div id="test"><span>xxxx</span></div>
     *
     * <script>
     *
     *     //output: false
     *     console.log( UE.dom.domUtils.hasNoAttributes( document.getElementById("test") ) );
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.hasNoAttributes( document.getElementById("test").firstChild ) );
     *
     * </script>
     * ```
     */
    hasNoAttributes:function (node) {
      return browser.ie ? /^<\w+\s*?>/.test(node.outerHTML) : node.attributes.length == 0;
    },

    /**
     * 妫€娴嬭妭鐐规槸鍚︽槸UEditor鎵€浣跨敤鐨勮緟鍔╄妭鐐�
     * @method isCustomeNode
     * @private
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣
     * @remind 杈呭姪鑺傜偣鏄寚缂栬緫鍣ㄨ瀹屾垚宸ヤ綔涓存椂娣诲姞鐨勮妭鐐癸紝 鍦ㄨ緭鍑虹殑鏃跺€欏皢浼氫粠缂栬緫鍣ㄥ唴绉婚櫎锛� 涓嶄細褰卞搷鏈€缁堢殑缁撴灉銆�
     * @return { Boolean } 缁欏畾鐨勮妭鐐规槸鍚︽槸涓€涓緟鍔╄妭鐐�
     */
    isCustomeNode:function (node) {
      return node.nodeType == 1 && node.getAttribute('_ue_custom_node_');
    },

    /**
     * 妫€娴嬭妭鐐圭殑鏍囩鏄惁鏄粰瀹氱殑鏍囩
     * @method isTagNode
     * @param { Node } node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @param { String } tagName 鏍囩
     * @return { Boolean } 鑺傜偣鐨勬爣绛炬槸鍚︽槸缁欏畾鐨勬爣绛�
     * @example
     * ```html
     * <div id="test"></div>
     *
     * <script>
     *
     *     //output: true
     *     console.log( UE.dom.domUtils.isTagNode( document.getElementById("test"), "div" ) );
     *
     * </script>
     * ```
     */
    isTagNode:function (node, tagNames) {
      return node.nodeType == 1 && new RegExp('\\b' + node.tagName + '\\b','i').test(tagNames)
    },

    /**
     * 缁欏畾涓€涓妭鐐规暟缁勶紝鍦ㄩ€氳繃鎸囧畾鐨勮繃婊ゅ櫒杩囨护鍚庯紝 鑾峰彇鍏朵腑婊¤冻杩囨护鏉′欢鐨勭涓€涓妭鐐�
     * @method filterNodeList
     * @param { Array } nodeList 闇€瑕佽繃婊ょ殑鑺傜偣鏁扮粍
     * @param { Function } fn 杩囨护鍣紝 瀵圭鍚堟潯浠剁殑鑺傜偣锛� 鎵ц缁撴灉杩斿洖true锛� 鍙嶄箣鍒欒繑鍥瀎alse
     * @return { Node | NULL } 濡傛灉鎵惧埌绗﹀悎杩囨护鏉′欢鐨勮妭鐐癸紝 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```javascript
     * var divNodes = document.getElementsByTagName("div");
     * divNodes = [].slice.call( divNodes, 0 );
     *
     * //output: null
     * console.log( UE.dom.domUtils.filterNodeList( divNodes, function ( node ) {
     *     return node.tagName.toLowerCase() !== 'div';
     * } ) );
     * ```
     */

    /**
     * 缁欏畾涓€涓妭鐐规暟缁刵odeList鍜屼竴缁勬爣绛惧悕tagNames锛� 鑾峰彇鍏朵腑鑳藉鍖归厤鏍囩鍚嶇殑鑺傜偣闆嗗悎涓殑绗竴涓妭鐐�
     * @method filterNodeList
     * @param { Array } nodeList 闇€瑕佽繃婊ょ殑鑺傜偣鏁扮粍
     * @param { String } tagNames 闇€瑕佸尮閰嶇殑鏍囩鍚嶏紝 澶氫釜鏍囩鍚嶄箣闂寸敤绌烘牸鍒嗗壊
     * @return { Node | NULL } 濡傛灉鎵惧埌鏍囩鍚嶅尮閰嶇殑鑺傜偣锛� 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
     * @example
     * ```javascript
     * var divNodes = document.getElementsByTagName("div");
     * divNodes = [].slice.call( divNodes, 0 );
     *
     * //output: null
     * console.log( UE.dom.domUtils.filterNodeList( divNodes, 'a span' ) );
     * ```
     */

    /**
     * 缁欏畾涓€涓妭鐐规暟缁勶紝鍦ㄩ€氳繃鎸囧畾鐨勮繃婊ゅ櫒杩囨护鍚庯紝 濡傛灉鍙傛暟forAll涓簍rue锛� 鍒欎細杩斿洖鎵€鏈夋弧瓒宠繃婊�
     * 鏉′欢鐨勮妭鐐归泦鍚堬紝 鍚﹀垯锛� 杩斿洖婊¤冻鏉′欢鐨勮妭鐐归泦鍚堜腑鐨勭涓€涓妭鐐�
     * @method filterNodeList
     * @param { Array } nodeList 闇€瑕佽繃婊ょ殑鑺傜偣鏁扮粍
     * @param { Function } fn 杩囨护鍣紝 瀵圭鍚堟潯浠剁殑鑺傜偣锛� 鎵ц缁撴灉杩斿洖true锛� 鍙嶄箣鍒欒繑鍥瀎alse
     * @param { Boolean } forAll 鏄惁杩斿洖鏁翠釜鑺傜偣鏁扮粍, 濡傛灉璇ュ弬鏁颁负false锛� 鍒欒繑鍥炶妭鐐归泦鍚堜腑鐨勭涓€涓妭鐐�
     * @return { Array | Node | NULL } 濡傛灉鎵惧埌绗﹀悎杩囨护鏉′欢鐨勮妭鐐癸紝 鍒欐牴鎹弬鏁癴orAll鐨勫€煎喅瀹氳繑鍥炴弧瓒�
     *                                      杩囨护鏉′欢鐨勮妭鐐规暟缁勬垨绗竴涓妭鐐癸紝 鍚﹀垯杩斿洖NULL
     * @example
     * ```javascript
     * var divNodes = document.getElementsByTagName("div");
     * divNodes = [].slice.call( divNodes, 0 );
     *
     * //output: 3锛堝亣瀹氭湁3涓猟iv锛�
     * console.log( divNodes.length );
     *
     * var nodes = UE.dom.domUtils.filterNodeList( divNodes, function ( node ) {
     *     return node.tagName.toLowerCase() === 'div';
     * }, true );
     *
     * //output: 3
     * console.log( nodes.length );
     *
     * var node = UE.dom.domUtils.filterNodeList( divNodes, function ( node ) {
     *     return node.tagName.toLowerCase() === 'div';
     * }, false );
     *
     * //output: div
     * console.log( node.nodeName );
     * ```
     */
    filterNodeList : function(nodelist,filter,forAll){
      var results = [];
      if(!utils .isFunction(filter)){
        var str = filter;
        filter = function(n){
          return utils.indexOf(utils.isArray(str) ? str:str.split(' '), n.tagName.toLowerCase()) != -1
        };
      }
      utils.each(nodelist,function(n){
        filter(n) && results.push(n)
      });
      return results.length  == 0 ? null : results.length == 1 || !forAll ? results[0] : results
    },

    /**
     * 鏌ヨ缁欏畾鐨剅ange閫夊尯鏄惁鍦ㄧ粰瀹氱殑node鑺傜偣鍐咃紝涓斿湪璇ヨ妭鐐圭殑鏈€鏈熬
     * @method isInNodeEndBoundary
     * @param { UE.dom.Range } rng 闇€瑕佸垽鏂殑range瀵硅薄锛� 璇ュ璞＄殑startContainer涓嶈兘涓篘ULL
     * @param node 闇€瑕佹娴嬬殑鑺傜偣瀵硅薄
     * @return { Number } 濡傛灉缁欏畾鐨勯€夊彇range瀵硅薄鏄湪node鍐呴儴鐨勬渶鏈锛� 鍒欒繑鍥�1, 鍚﹀垯杩斿洖0
     */
    isInNodeEndBoundary : function (rng,node){
      var start = rng.startContainer;
      if(start.nodeType == 3 && rng.startOffset != start.nodeValue.length){
        return 0;
      }
      if(start.nodeType == 1 && rng.startOffset != start.childNodes.length){
        return 0;
      }
      while(start !== node){
        if(start.nextSibling){
          return 0
        };
        start = start.parentNode;
      }
      return 1;
    },
    isBoundaryNode : function (node,dir){
      var tmp;
      while(!domUtils.isBody(node)){
        tmp = node;
        node = node.parentNode;
        if(tmp !== node[dir]){
          return false;
        }
      }
      return true;
    },
    fillHtml :  browser.ie11below ? '&nbsp;' : '<br/>'
  };
  var fillCharReg = new RegExp(domUtils.fillChar, 'g');

// core/Range.js
  /**
   * Range灏佽
   * @file
   * @module UE.dom
   * @class Range
   * @since 1.2.6.1
   */

  /**
   * dom鎿嶄綔灏佽
   * @unfile
   * @module UE.dom
   */

  /**
   * Range瀹炵幇绫伙紝鏈被鏄疷Editor搴曞眰鏍稿績绫伙紝灏佽涓嶅悓娴忚鍣ㄤ箣闂寸殑Range鎿嶄綔銆�
   * @unfile
   * @module UE.dom
   * @class Range
   */


  (function () {
    var guid = 0,
      fillChar = domUtils.fillChar,
      fillData;

    /**
     * 鏇存柊range鐨刢ollapse鐘舵€�
     * @param  {Range}   range    range瀵硅薄
     */
    function updateCollapse(range) {
      range.collapsed =
        range.startContainer && range.endContainer &&
        range.startContainer === range.endContainer &&
        range.startOffset == range.endOffset;
    }

    function selectOneNode(rng){
      return !rng.collapsed && rng.startContainer.nodeType == 1 && rng.startContainer === rng.endContainer && rng.endOffset - rng.startOffset == 1
    }
    function setEndPoint(toStart, node, offset, range) {
      //濡傛灉node鏄嚜闂悎鏍囩瑕佸鐞�
      if (node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
        offset = domUtils.getNodeIndex(node) + (toStart ? 0 : 1);
        node = node.parentNode;
      }
      if (toStart) {
        range.startContainer = node;
        range.startOffset = offset;
        if (!range.endContainer) {
          range.collapse(true);
        }
      } else {
        range.endContainer = node;
        range.endOffset = offset;
        if (!range.startContainer) {
          range.collapse(false);
        }
      }
      updateCollapse(range);
      return range;
    }

    function execContentsAction(range, action) {
      //璋冩暣杈圭晫
      //range.includeBookmark();
      var start = range.startContainer,
        end = range.endContainer,
        startOffset = range.startOffset,
        endOffset = range.endOffset,
        doc = range.document,
        frag = doc.createDocumentFragment(),
        tmpStart, tmpEnd;
      if (start.nodeType == 1) {
        start = start.childNodes[startOffset] || (tmpStart = start.appendChild(doc.createTextNode('')));
      }
      if (end.nodeType == 1) {
        end = end.childNodes[endOffset] || (tmpEnd = end.appendChild(doc.createTextNode('')));
      }
      if (start === end && start.nodeType == 3) {
        frag.appendChild(doc.createTextNode(start.substringData(startOffset, endOffset - startOffset)));
        //is not clone
        if (action) {
          start.deleteData(startOffset, endOffset - startOffset);
          range.collapse(true);
        }
        return frag;
      }
      var current, currentLevel, clone = frag,
        startParents = domUtils.findParents(start, true), endParents = domUtils.findParents(end, true);
      for (var i = 0; startParents[i] == endParents[i];) {
        i++;
      }
      for (var j = i, si; si = startParents[j]; j++) {
        current = si.nextSibling;
        if (si == start) {
          if (!tmpStart) {
            if (range.startContainer.nodeType == 3) {
              clone.appendChild(doc.createTextNode(start.nodeValue.slice(startOffset)));
              //is not clone
              if (action) {
                start.deleteData(startOffset, start.nodeValue.length - startOffset);
              }
            } else {
              clone.appendChild(!action ? start.cloneNode(true) : start);
            }
          }
        } else {
          currentLevel = si.cloneNode(false);
          clone.appendChild(currentLevel);
        }
        while (current) {
          if (current === end || current === endParents[j]) {
            break;
          }
          si = current.nextSibling;
          clone.appendChild(!action ? current.cloneNode(true) : current);
          current = si;
        }
        clone = currentLevel;
      }
      clone = frag;
      if (!startParents[i]) {
        clone.appendChild(startParents[i - 1].cloneNode(false));
        clone = clone.firstChild;
      }
      for (var j = i, ei; ei = endParents[j]; j++) {
        current = ei.previousSibling;
        if (ei == end) {
          if (!tmpEnd && range.endContainer.nodeType == 3) {
            clone.appendChild(doc.createTextNode(end.substringData(0, endOffset)));
            //is not clone
            if (action) {
              end.deleteData(0, endOffset);
            }
          }
        } else {
          currentLevel = ei.cloneNode(false);
          clone.appendChild(currentLevel);
        }
        //濡傛灉涓ょ鍚岀骇锛屽彸杈圭涓€娆″凡缁忚寮€濮嬪仛浜�
        if (j != i || !startParents[i]) {
          while (current) {
            if (current === start) {
              break;
            }
            ei = current.previousSibling;
            clone.insertBefore(!action ? current.cloneNode(true) : current, clone.firstChild);
            current = ei;
          }
        }
        clone = currentLevel;
      }
      if (action) {
        range.setStartBefore(!endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i]).collapse(true);
      }
      tmpStart && domUtils.remove(tmpStart);
      tmpEnd && domUtils.remove(tmpEnd);
      return frag;
    }

    /**
     * 鍒涘缓涓€涓窡document缁戝畾鐨勭┖鐨凴ange瀹炰緥
     * @constructor
     * @param { Document } document 鏂板缓鐨勯€夊尯鎵€灞炵殑鏂囨。瀵硅薄
     */

    /**
     * @property { Node } startContainer 褰撳墠Range鐨勫紑濮嬭竟鐣岀殑瀹瑰櫒鑺傜偣, 鍙互鏄竴涓厓绱犺妭鐐规垨鑰呮槸鏂囨湰鑺傜偣
     */

    /**
     * @property { Node } startOffset 褰撳墠Range鐨勫紑濮嬭竟鐣屽鍣ㄨ妭鐐圭殑鍋忕Щ閲�, 濡傛灉鏄厓绱犺妭鐐癸紝
     *                              璇ュ€煎氨鏄痗hildNodes涓殑绗嚑涓妭鐐癸紝 濡傛灉鏄枃鏈妭鐐瑰氨鏄枃鏈唴瀹圭殑绗嚑涓瓧绗�
     */

    /**
     * @property { Node } endContainer 褰撳墠Range鐨勭粨鏉熻竟鐣岀殑瀹瑰櫒鑺傜偣, 鍙互鏄竴涓厓绱犺妭鐐规垨鑰呮槸鏂囨湰鑺傜偣
     */

    /**
     * @property { Node } endOffset 褰撳墠Range鐨勭粨鏉熻竟鐣屽鍣ㄨ妭鐐圭殑鍋忕Щ閲�, 濡傛灉鏄厓绱犺妭鐐癸紝
     *                              璇ュ€煎氨鏄痗hildNodes涓殑绗嚑涓妭鐐癸紝 濡傛灉鏄枃鏈妭鐐瑰氨鏄枃鏈唴瀹圭殑绗嚑涓瓧绗�
     */

    /**
     * @property { Boolean } collapsed 褰撳墠Range鏄惁闂悎
     * @default true
     * @remind Range鏄棴鍚堢殑鏃跺€欙紝 startContainer === endContainer && startOffset === endOffset
     */

    /**
     * @property { Document } document 褰撳墠Range鎵€灞炵殑Document瀵硅薄
     * @remind 涓嶅悓range鐨勭殑document灞炴€у彲浠ユ槸涓嶅悓鐨�
     */
    var Range = dom.Range = function (document) {
      var me = this;
      me.startContainer =
        me.startOffset =
          me.endContainer =
            me.endOffset = null;
      me.document = document;
      me.collapsed = true;
    };

    /**
     * 鍒犻櫎fillData
     * @param doc
     * @param excludeNode
     */
    function removeFillData(doc, excludeNode) {
      try {
        if (fillData && domUtils.inDoc(fillData, doc)) {
          if (!fillData.nodeValue.replace(fillCharReg, '').length) {
            var tmpNode = fillData.parentNode;
            domUtils.remove(fillData);
            while (tmpNode && domUtils.isEmptyInlineElement(tmpNode) &&
            //safari鐨刢ontains鏈塨ug
            (browser.safari ? !(domUtils.getPosition(tmpNode,excludeNode) & domUtils.POSITION_CONTAINS) : !tmpNode.contains(excludeNode))
              ) {
              fillData = tmpNode.parentNode;
              domUtils.remove(tmpNode);
              tmpNode = fillData;
            }
          } else {
            fillData.nodeValue = fillData.nodeValue.replace(fillCharReg, '');
          }
        }
      } catch (e) {
      }
    }

    /**
     * @param node
     * @param dir
     */
    function mergeSibling(node, dir) {
      var tmpNode;
      node = node[dir];
      while (node && domUtils.isFillChar(node)) {
        tmpNode = node[dir];
        domUtils.remove(node);
        node = tmpNode;
      }
    }

    Range.prototype = {

      /**
       * 鍏嬮殕閫夊尯鐨勫唴瀹瑰埌涓€涓狣ocumentFragment閲�
       * @method cloneContents
       * @return { DocumentFragment | NULL } 濡傛灉閫夊尯鏄棴鍚堢殑灏嗚繑鍥瀗ull锛� 鍚﹀垯锛� 杩斿洖鍖呭惈鎵€clone鍐呭鐨凞ocumentFragment鍏冪礌
       * @example
       * ```html
       * <body>
       *      <!-- 涓嫭鍙疯〃绀洪€夊尯 -->
       *      <b>x<i>x[x</i>xx]x</b>
       *
       *      <script>
       *          //range鏄凡閫変腑鐨勯€夊尯
       *          var fragment = range.cloneContents(),
       *              node = document.createElement("div");
       *
       *          node.appendChild( fragment );
       *
       *          //output: <i>x</i>xx
       *          console.log( node.innerHTML );
       *
       *      </script>
       * </body>
       * ```
       */
      cloneContents:function () {
        return this.collapsed ? null : execContentsAction(this, 0);
      },

      /**
       * 鍒犻櫎褰撳墠閫夊尯鑼冨洿涓殑鎵€鏈夊唴瀹�
       * @method deleteContents
       * @remind 鎵ц瀹岃鎿嶄綔鍚庯紝 褰撳墠Range瀵硅薄鍙樻垚浜嗛棴鍚堢姸鎬�
       * @return { UE.dom.Range } 褰撳墠鎿嶄綔鐨凴ange瀵硅薄
       * @example
       * ```html
       * <body>
       *      <!-- 涓嫭鍙疯〃绀洪€夊尯 -->
       *      <b>x<i>x[x</i>xx]x</b>
       *
       *      <script>
       *          //range鏄凡閫変腑鐨勯€夊尯
       *          range.deleteContents();
       *
       *          //绔栫嚎琛ㄧず闂悎鍚庣殑閫夊尯浣嶇疆
       *          //output: <b>x<i>x</i>|x</b>
       *          console.log( document.body.innerHTML );
       *
       *          //姝ゆ椂锛� range鐨勫悇椤瑰睘鎬т负
       *          //output: B
       *          console.log( range.startContainer.tagName );
       *          //output: 2
       *          console.log( range.startOffset );
       *          //output: B
       *          console.log( range.endContainer.tagName );
       *          //output: 2
       *          console.log( range.endOffset );
       *          //output: true
       *          console.log( range.collapsed );
       *
       *      </script>
       * </body>
       * ```
       */
      deleteContents:function () {
        var txt;
        if (!this.collapsed) {
          execContentsAction(this, 1);
        }
        if (browser.webkit) {
          txt = this.startContainer;
          if (txt.nodeType == 3 && !txt.nodeValue.length) {
            this.setStartBefore(txt).collapse(true);
            domUtils.remove(txt);
          }
        }
        return this;
      },

      /**
       * 灏嗗綋鍓嶉€夊尯鐨勫唴瀹规彁鍙栧埌涓€涓狣ocumentFragment閲�
       * @method extractContents
       * @remind 鎵ц璇ユ搷浣滃悗锛� 閫夊尯灏嗗彉鎴愰棴鍚堢姸鎬�
       * @warning 鎵ц璇ユ搷浣滃悗锛� 鍘熸潵閫夊尯鎵€閫変腑鐨勫唴瀹瑰皢浠巇om鏍戜笂鍓ョ鍑烘潵
       * @return { DocumentFragment } 杩斿洖鍖呭惈鎵€鎻愬彇鍐呭鐨凞ocumentFragment瀵硅薄
       * @example
       * ```html
       * <body>
       *      <!-- 涓嫭鍙疯〃绀洪€夊尯 -->
       *      <b>x<i>x[x</i>xx]x</b>
       *
       *      <script>
       *          //range鏄凡閫変腑鐨勯€夊尯
       *          var fragment = range.extractContents(),
       *              node = document.createElement( "div" );
       *
       *          node.appendChild( fragment );
       *
       *          //绔栫嚎琛ㄧず闂悎鍚庣殑閫夊尯浣嶇疆
       *
       *          //output: <b>x<i>x</i>|x</b>
       *          console.log( document.body.innerHTML );
       *          //output: <i>x</i>xx
       *          console.log( node.innerHTML );
       *
       *          //姝ゆ椂锛� range鐨勫悇椤瑰睘鎬т负
       *          //output: B
       *          console.log( range.startContainer.tagName );
       *          //output: 2
       *          console.log( range.startOffset );
       *          //output: B
       *          console.log( range.endContainer.tagName );
       *          //output: 2
       *          console.log( range.endOffset );
       *          //output: true
       *          console.log( range.collapsed );
       *
       *      </script>
       * </body>
       */
      extractContents:function () {
        return this.collapsed ? null : execContentsAction(this, 2);
      },

      /**
       * 璁剧疆Range鐨勫紑濮嬪鍣ㄨ妭鐐瑰拰鍋忕Щ閲�
       * @method  setStart
       * @remind 濡傛灉缁欏畾鐨勮妭鐐规槸鍏冪礌鑺傜偣锛岄偅涔坥ffset鎸囩殑鏄叾瀛愬厓绱犱腑绱㈠紩涓簅ffset鐨勫厓绱狅紝
       *          濡傛灉鏄枃鏈妭鐐癸紝閭ｄ箞offset鎸囩殑鏄叾鏂囨湰鍐呭鐨勭offset涓瓧绗�
       * @remind 濡傛灉鎻愪緵鐨勫鍣ㄨ妭鐐规槸涓€涓笉鑳藉寘鍚瓙鍏冪礌鐨勮妭鐐癸紝 鍒欒閫夊尯鐨勫紑濮嬪鍣ㄥ皢琚缃�
       *          涓鸿鑺傜偣鐨勭埗鑺傜偣锛� 姝ゆ椂锛� 鍏惰窛绂诲紑濮嬪鍣ㄧ殑鍋忕Щ閲忎篃鍙樻垚浜嗚鑺傜偣鍦ㄥ叾鐖惰妭鐐�
       *          涓殑绱㈠紩
       * @param { Node } node 灏嗚璁句负褰撳墠閫夊尯寮€濮嬭竟鐣屽鍣ㄧ殑鑺傜偣瀵硅薄
       * @param { int } offset 閫夊尯鐨勫紑濮嬩綅缃亸绉婚噺
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       * <!-- 閫夊尯 -->
       * <b>xxx<i>x<span>xx</span>xx<em>xx</em>xxx</i>[xxx]</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.setStart( document.getElementsByTagName("i")[0], 1 );
       *
       *     //姝ゆ椂锛� 閫夊尯鍙樻垚浜�
       *     //<b>xxx<i>x[<span>xx</span>xx<em>xx</em>xxx</i>xxx]</b>
       *
       * </script>
       * ```
       * @example
       * ```html
       * <!-- 閫夊尯 -->
       * <b>xxx<img>[xx]x</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.setStart( document.getElementsByTagName("img")[0], 3 );
       *
       *     //姝ゆ椂锛� 閫夊尯鍙樻垚浜�
       *     //<b>xxx[<img>xx]x</b>
       *
       * </script>
       * ```
       */
      setStart:function (node, offset) {
        return setEndPoint(true, node, offset, this);
      },

      /**
       * 璁剧疆Range鐨勭粨鏉熷鍣ㄥ拰鍋忕Щ閲�
       * @method  setEnd
       * @param { Node } node 浣滀负褰撳墠閫夊尯缁撴潫杈圭晫瀹瑰櫒鐨勮妭鐐瑰璞�
       * @param { int } offset 缁撴潫杈圭晫鐨勫亸绉婚噺
       * @see UE.dom.Range:setStart(Node,int)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      setEnd:function (node, offset) {
        return setEndPoint(false, node, offset, this);
      },

      /**
       * 灏哛ange寮€濮嬩綅缃缃埌node鑺傜偣涔嬪悗
       * @method  setStartAfter
       * @remind 璇ユ搷浣滃皢浼氭妸缁欏畾鑺傜偣鐨勭埗鑺傜偣浣滀负range鐨勫紑濮嬪鍣紝 涓斿亸绉婚噺鏄鑺傜偣鍦ㄥ叾鐖惰妭鐐逛腑鐨勪綅缃储寮�+1
       * @param { Node } node 閫夊尯鐨勫紑濮嬭竟鐣屽皢绱ф帴鐫€璇ヨ妭鐐逛箣鍚�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>xx<i>xxx</i><span>xx[x</span>xxx]</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.setStartAfter( document.getElementsByTagName("i")[0] );
       *
       *     //缁撴灉閫夊尯
       *     //<b>xx<i>xxx</i>[<span>xxx</span>xxx]</b>
       *
       * </script>
       * ```
       */
      setStartAfter:function (node) {
        return this.setStart(node.parentNode, domUtils.getNodeIndex(node) + 1);
      },

      /**
       * 灏哛ange寮€濮嬩綅缃缃埌node鑺傜偣涔嬪墠
       * @method  setStartBefore
       * @remind 璇ユ搷浣滃皢浼氭妸缁欏畾鑺傜偣鐨勭埗鑺傜偣浣滀负range鐨勫紑濮嬪鍣紝 涓斿亸绉婚噺鏄鑺傜偣鍦ㄥ叾鐖惰妭鐐逛腑鐨勪綅缃储寮�
       * @param { Node } node 鏂扮殑閫夊尯寮€濮嬩綅缃湪璇ヨ妭鐐逛箣鍓�
       * @see UE.dom.Range:setStartAfter(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      setStartBefore:function (node) {
        return this.setStart(node.parentNode, domUtils.getNodeIndex(node));
      },

      /**
       * 灏哛ange缁撴潫浣嶇疆璁剧疆鍒皀ode鑺傜偣涔嬪悗
       * @method  setEndAfter
       * @remind 璇ユ搷浣滃皢浼氭妸缁欏畾鑺傜偣鐨勭埗鑺傜偣浣滀负range鐨勭粨鏉熷鍣紝 涓斿亸绉婚噺鏄鑺傜偣鍦ㄥ叾鐖惰妭鐐逛腑鐨勪綅缃储寮�+1
       * @param { Node } node 鐩爣鑺傜偣
       * @see UE.dom.Range:setStartAfter(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>[xx<i>xxx</i><span>xx]x</span>xxx</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.setStartAfter( document.getElementsByTagName("span")[0] );
       *
       *     //缁撴灉閫夊尯
       *     //<b>[xx<i>xxx</i><span>xxx</span>]xxx</b>
       *
       * </script>
       * ```
       */
      setEndAfter:function (node) {
        return this.setEnd(node.parentNode, domUtils.getNodeIndex(node) + 1);
      },

      /**
       * 灏哛ange缁撴潫浣嶇疆璁剧疆鍒皀ode鑺傜偣涔嬪墠
       * @method  setEndBefore
       * @remind 璇ユ搷浣滃皢浼氭妸缁欏畾鑺傜偣鐨勭埗鑺傜偣浣滀负range鐨勭粨鏉熷鍣紝 涓斿亸绉婚噺鏄鑺傜偣鍦ㄥ叾鐖惰妭鐐逛腑鐨勪綅缃储寮�
       * @param { Node } node 鐩爣鑺傜偣
       * @see UE.dom.Range:setEndAfter(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      setEndBefore:function (node) {
        return this.setEnd(node.parentNode, domUtils.getNodeIndex(node));
      },

      /**
       * 璁剧疆Range鐨勫紑濮嬩綅缃埌node鑺傜偣鍐呯殑绗竴涓瓙鑺傜偣涔嬪墠
       * @method  setStartAtFirst
       * @remind 閫夊尯鐨勫紑濮嬪鍣ㄥ皢鍙樻垚缁欏畾鐨勮妭鐐癸紝 涓斿亸绉婚噺涓�0
       * @remind 濡傛灉缁欏畾鐨勮妭鐐规槸鍏冪礌鑺傜偣锛� 鍒欒鑺傜偣蹇呴』鏄厑璁稿寘鍚瓙鑺傜偣鐨勫厓绱犮€�
       * @param { Node } node 鐩爣鑺傜偣
       * @see UE.dom.Range:setStartBefore(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>xx<i>xxx</i><span>[xx]x</span>xxx</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.setStartAtFirst( document.getElementsByTagName("i")[0] );
       *
       *     //缁撴灉閫夊尯
       *     //<b>xx<i>[xxx</i><span>xx]x</span>xxx</b>
       *
       * </script>
       * ```
       */
      setStartAtFirst:function (node) {
        return this.setStart(node, 0);
      },

      /**
       * 璁剧疆Range鐨勫紑濮嬩綅缃埌node鑺傜偣鍐呯殑鏈€鍚庝竴涓妭鐐逛箣鍚�
       * @method setStartAtLast
       * @remind 閫夊尯鐨勫紑濮嬪鍣ㄥ皢鍙樻垚缁欏畾鐨勮妭鐐癸紝 涓斿亸绉婚噺涓鸿鑺傜偣鐨勫瓙鑺傜偣鏁�
       * @remind 濡傛灉缁欏畾鐨勮妭鐐规槸鍏冪礌鑺傜偣锛� 鍒欒鑺傜偣蹇呴』鏄厑璁稿寘鍚瓙鑺傜偣鐨勫厓绱犮€�
       * @param { Node } node 鐩爣鑺傜偣
       * @see UE.dom.Range:setStartAtFirst(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      setStartAtLast:function (node) {
        return this.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
      },

      /**
       * 璁剧疆Range鐨勭粨鏉熶綅缃埌node鑺傜偣鍐呯殑绗竴涓妭鐐逛箣鍓�
       * @method  setEndAtFirst
       * @param { Node } node 鐩爣鑺傜偣
       * @remind 閫夊尯鐨勭粨鏉熷鍣ㄥ皢鍙樻垚缁欏畾鐨勮妭鐐癸紝 涓斿亸绉婚噺涓�0
       * @remind node蹇呴』鏄竴涓厓绱犺妭鐐癸紝 涓斿繀椤绘槸鍏佽鍖呭惈瀛愯妭鐐圭殑鍏冪礌銆�
       * @see UE.dom.Range:setStartAtFirst(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      setEndAtFirst:function (node) {
        return this.setEnd(node, 0);
      },

      /**
       * 璁剧疆Range鐨勭粨鏉熶綅缃埌node鑺傜偣鍐呯殑鏈€鍚庝竴涓妭鐐逛箣鍚�
       * @method  setEndAtLast
       * @param { Node } node 鐩爣鑺傜偣
       * @remind 閫夊尯鐨勭粨鏉熷鍣ㄥ皢鍙樻垚缁欏畾鐨勮妭鐐癸紝 涓斿亸绉婚噺涓鸿鑺傜偣鐨勫瓙鑺傜偣鏁伴噺
       * @remind node蹇呴』鏄竴涓厓绱犺妭鐐癸紝 涓斿繀椤绘槸鍏佽鍖呭惈瀛愯妭鐐圭殑鍏冪礌銆�
       * @see UE.dom.Range:setStartAtFirst(Node)
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      setEndAtLast:function (node) {
        return this.setEnd(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
      },

      /**
       * 閫変腑缁欏畾鑺傜偣
       * @method  selectNode
       * @remind 姝ゆ椂锛� 閫夊尯鐨勫紑濮嬪鍣ㄥ拰缁撴潫瀹瑰櫒閮芥槸璇ヨ妭鐐圭殑鐖惰妭鐐癸紝 鍏秙tartOffset鏄鑺傜偣鍦ㄧ埗鑺傜偣涓殑浣嶇疆绱㈠紩锛�
       *          鑰宔ndOffset涓簊tartOffset+1
       * @param { Node } node 闇€瑕侀€変腑鐨勮妭鐐�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄锛屾鏃剁殑range浠呭寘鍚綋鍓嶇粰瀹氱殑鑺傜偣瀵硅薄
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>xx<i>xxx</i><span>[xx]x</span>xxx</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.selectNode( document.getElementsByTagName("i")[0] );
       *
       *     //缁撴灉閫夊尯
       *     //<b>xx[<i>xxx</i>]<span>xxx</span>xxx</b>
       *
       * </script>
       * ```
       */
      selectNode:function (node) {
        return this.setStartBefore(node).setEndAfter(node);
      },

      /**
       * 閫変腑缁欏畾鑺傜偣鍐呴儴鐨勬墍鏈夎妭鐐�
       * @method  selectNodeContents
       * @remind 姝ゆ椂锛� 閫夊尯鐨勫紑濮嬪鍣ㄥ拰缁撴潫瀹瑰櫒閮芥槸璇ヨ妭鐐癸紝 鍏秙tartOffset涓�0锛�
       *          鑰宔ndOffset鏄鑺傜偣鐨勫瓙鑺傜偣鏁般€�
       * @param { Node } node 鐩爣鑺傜偣锛� 褰撳墠range灏嗗寘鍚鑺傜偣鍐呯殑鎵€鏈夎妭鐐�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄锛� 姝ゆ椂range浠呭寘鍚粰瀹氳妭鐐圭殑鎵€鏈夊瓙鑺傜偣
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>xx<i>xxx</i><span>[xx]x</span>xxx</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.selectNode( document.getElementsByTagName("b")[0] );
       *
       *     //缁撴灉閫夊尯
       *     //<b>[xx<i>xxx</i><span>xxx</span>xxx]</b>
       *
       * </script>
       * ```
       */
      selectNodeContents:function (node) {
        return this.setStart(node, 0).setEndAtLast(node);
      },

      /**
       * clone褰撳墠Range瀵硅薄
       * @method  cloneRange
       * @remind 杩斿洖鐨剅ange鏄竴涓叏鏂扮殑range瀵硅薄锛� 鍏跺唴閮ㄦ墍鏈夊睘鎬т笌褰撳墠琚玞lone鐨剅ange鐩稿悓銆�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄鐨勪竴涓壇鏈�
       */
      cloneRange:function () {
        var me = this;
        return new Range(me.document).setStart(me.startContainer, me.startOffset).setEnd(me.endContainer, me.endOffset);

      },

      /**
       * 鍚戝綋鍓嶉€夊尯鐨勭粨鏉熷闂悎閫夊尯
       * @method  collapse
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>xx<i>xxx</i><span>[xx]x</span>xxx</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.collapse();
       *
       *     //缁撴灉閫夊尯
       *     //鈥渱鈥濊〃绀洪€夊尯宸查棴鍚�
       *     //<b>xx<i>xxx</i><span>xx|x</span>xxx</b>
       *
       * </script>
       * ```
       */

      /**
       * 闂悎褰撳墠閫夊尯锛屾牴鎹粰瀹氱殑toStart鍙傛暟椤瑰喅瀹氭槸鍚戝綋鍓嶉€夊尯寮€濮嬪闂悎杩樻槸鍚戠粨鏉熷闂悎锛�
       * 濡傛灉toStart鐨勫€间负true锛屽垯鍚戝紑濮嬩綅缃棴鍚堬紝 鍙嶄箣锛屽悜缁撴潫浣嶇疆闂悎銆�
       * @method  collapse
       * @param { Boolean } toStart 鏄惁鍚戦€夊尯寮€濮嬪闂悎
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄锛屾鏃秗ange瀵硅薄澶勪簬闂悎鐘舵€�
       * @see UE.dom.Range:collapse()
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>xx<i>xxx</i><span>[xx]x</span>xxx</b>
       *
       * <script>
       *
       *     //鎵ц鎿嶄綔
       *     range.collapse( true );
       *
       *     //缁撴灉閫夊尯
       *     //鈥渱鈥濊〃绀洪€夊尯宸查棴鍚�
       *     //<b>xx<i>xxx</i><span>|xxx</span>xxx</b>
       *
       * </script>
       * ```
       */
      collapse:function (toStart) {
        var me = this;
        if (toStart) {
          me.endContainer = me.startContainer;
          me.endOffset = me.startOffset;
        } else {
          me.startContainer = me.endContainer;
          me.startOffset = me.endOffset;
        }
        me.collapsed = true;
        return me;
      },

      /**
       * 璋冩暣range鐨勫紑濮嬩綅缃拰缁撴潫浣嶇疆锛屼娇鍏�"鏀剁缉"鍒版渶灏忕殑浣嶇疆
       * @method  shrinkBoundary
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       * <span>xx<b>xx[</b>xxxxx]</span> => <span>xx<b>xx</b>[xxxxx]</span>
       * ```
       *
       * @example
       * ```html
       * <!-- 閫夊尯绀轰緥 -->
       * <b>x[xx</b><i>]xxx</i>
       *
       * <script>
       *
       *     //鎵ц鏀剁缉
       *     range.shrinkBoundary();
       *
       *     //缁撴灉閫夊尯
       *     //<b>x[xx]</b><i>xxx</i>
       * </script>
       * ```
       *
       * @example
       * ```html
       * [<b><i>xxxx</i>xxxxxxx</b>] => <b><i>[xxxx</i>xxxxxxx]</b>
       * ```
       */

      /**
       * 璋冩暣range鐨勫紑濮嬩綅缃拰缁撴潫浣嶇疆锛屼娇鍏�"鏀剁缉"鍒版渶灏忕殑浣嶇疆锛�
       * 濡傛灉ignoreEnd鐨勫€间负true锛屽垯蹇界暐瀵圭粨鏉熶綅缃殑璋冩暣
       * @method  shrinkBoundary
       * @param { Boolean } ignoreEnd 鏄惁蹇界暐瀵圭粨鏉熶綅缃殑璋冩暣
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @see UE.dom.domUtils.Range:shrinkBoundary()
       */
      shrinkBoundary:function (ignoreEnd) {
        var me = this, child,
          collapsed = me.collapsed;
        function check(node){
          return node.nodeType == 1 && !domUtils.isBookmarkNode(node) && !dtd.$empty[node.tagName] && !dtd.$nonChild[node.tagName]
        }
        while (me.startContainer.nodeType == 1 //鏄痚lement
        && (child = me.startContainer.childNodes[me.startOffset]) //瀛愯妭鐐逛篃鏄痚lement
        && check(child)) {
          me.setStart(child, 0);
        }
        if (collapsed) {
          return me.collapse(true);
        }
        if (!ignoreEnd) {
          while (me.endContainer.nodeType == 1//鏄痚lement
          && me.endOffset > 0 //濡傛灉鏄┖鍏冪礌灏遍€€鍑� endOffset=0閭ｄ箞endOffst-1涓鸿礋鍊硷紝childNodes[endOffset]鎶ラ敊
          && (child = me.endContainer.childNodes[me.endOffset - 1]) //瀛愯妭鐐逛篃鏄痚lement
          && check(child)) {
            me.setEnd(child, child.childNodes.length);
          }
        }
        return me;
      },

      /**
       * 鑾峰彇绂诲綋鍓嶉€夊尯鍐呭寘鍚殑鎵€鏈夎妭鐐规渶杩戠殑鍏叡绁栧厛鑺傜偣锛�
       * @method  getCommonAncestor
       * @remind 杩斿洖鐨勫叕鍏辩鍏堣妭鐐逛竴瀹氫笉鏄痳ange鑷韩鐨勫鍣ㄨ妭鐐癸紝 浣嗘湁鍙兘鏄竴涓枃鏈妭鐐�
       * @return { Node } 褰撳墠range瀵硅薄鍐呮墍鏈夎妭鐐圭殑鍏叡绁栧厛鑺傜偣
       * @example
       * ```html
       * //閫夊尯绀轰緥
       * <span>xxx<b>x[x<em>xx]x</em>xxx</b>xx</span>
       * <script>
       *
       *     var node = range.getCommonAncestor();
       *
       *     //鍏叡绁栧厛鑺傜偣鏄細 b鑺傜偣
       *     //杈撳嚭锛� B
       *     console.log(node.tagName);
       *
       * </script>
       * ```
       */

      /**
       * 鑾峰彇褰撳墠閫夊尯鎵€鍖呭惈鐨勬墍鏈夎妭鐐圭殑鍏叡绁栧厛鑺傜偣锛� 鍙互鏍规嵁缁欏畾鐨勫弬鏁� includeSelf 鍐冲畾鑾峰彇鍒�
       * 鐨勫叕鍏辩鍏堣妭鐐规槸鍚﹀彲浠ユ槸褰撳墠閫夊尯鐨剆tartContainer鎴杄ndContainer鑺傜偣锛� 濡傛灉 includeSelf
       * 鐨勫彇鍊间负true锛� 鍒欒繑鍥炵殑鑺傜偣鍙互鏄嚜韬殑瀹瑰櫒鑺傜偣锛� 鍚﹀垯锛� 鍒欎笉鑳芥槸瀹瑰櫒鑺傜偣
       * @method  getCommonAncestor
       * @param { Boolean } includeSelf 鏄惁鍏佽鑾峰彇鍒扮殑鍏叡绁栧厛鑺傜偣鏄綋鍓峳ange瀵硅薄鐨勫鍣ㄨ妭鐐�
       * @return { Node } 褰撳墠range瀵硅薄鍐呮墍鏈夎妭鐐圭殑鍏叡绁栧厛鑺傜偣
       * @see UE.dom.Range:getCommonAncestor()
       * @example
       * ```html
       * <body>
       *
       *     <!-- 閫夊尯绀轰緥 -->
       *     <b>xxx<i>xxxx<span>xx[x</span>xx]x</i>xxxxxxx</b>
       *
       *     <script>
       *
       *         var node = range.getCommonAncestor( false );
       *
       *         //杩欓噷鐨勫叕鍏辩鍏堣妭鐐规槸B鑰屼笉鏄疘锛� 鏄洜涓哄弬鏁伴檺鍒朵簡鑾峰彇鍒扮殑鑺傜偣涓嶈兘鏄鍣ㄨ妭鐐�
       *         //output: B
       *         console.log( node.tagName );
       *
       *     </script>
       *
       * </body>
       * ```
       */

      /**
       * 鑾峰彇褰撳墠閫夊尯鎵€鍖呭惈鐨勬墍鏈夎妭鐐圭殑鍏叡绁栧厛鑺傜偣锛� 鍙互鏍规嵁缁欏畾鐨勫弬鏁� includeSelf 鍐冲畾鑾峰彇鍒�
       * 鐨勫叕鍏辩鍏堣妭鐐规槸鍚﹀彲浠ユ槸褰撳墠閫夊尯鐨剆tartContainer鎴杄ndContainer鑺傜偣锛� 濡傛灉 includeSelf
       * 鐨勫彇鍊间负true锛� 鍒欒繑鍥炵殑鑺傜偣鍙互鏄嚜韬殑瀹瑰櫒鑺傜偣锛� 鍚﹀垯锛� 鍒欎笉鑳芥槸瀹瑰櫒鑺傜偣锛� 鍚屾椂鍙互鏍规嵁
       * ignoreTextNode 鍙傛暟鐨勫彇鍊煎喅瀹氭槸鍚﹀拷鐣ョ被鍨嬩负鏂囨湰鑺傜偣鐨勭鍏堣妭鐐广€�
       * @method  getCommonAncestor
       * @param { Boolean } includeSelf 鏄惁鍏佽鑾峰彇鍒扮殑鍏叡绁栧厛鑺傜偣鏄綋鍓峳ange瀵硅薄鐨勫鍣ㄨ妭鐐�
       * @param { Boolean } ignoreTextNode 鑾峰彇绁栧厛鑺傜偣鐨勮繃绋嬩腑鏄惁蹇界暐绫诲瀷涓烘枃鏈妭鐐圭殑绁栧厛鑺傜偣
       * @return { Node } 褰撳墠range瀵硅薄鍐呮墍鏈夎妭鐐圭殑鍏叡绁栧厛鑺傜偣
       * @see UE.dom.Range:getCommonAncestor()
       * @see UE.dom.Range:getCommonAncestor(Boolean)
       * @example
       * ```html
       * <body>
       *
       *     <!-- 閫夊尯绀轰緥 -->
       *     <b>xxx<i>xxxx<span>x[x]x</span>xxx</i>xxxxxxx</b>
       *
       *     <script>
       *
       *         var node = range.getCommonAncestor( true, false );
       *
       *         //output: SPAN
       *         console.log( node.tagName );
       *
       *     </script>
       *
       * </body>
       * ```
       */
      getCommonAncestor:function (includeSelf, ignoreTextNode) {
        var me = this,
          start = me.startContainer,
          end = me.endContainer;
        if (start === end) {
          if (includeSelf && selectOneNode(this)) {
            start = start.childNodes[me.startOffset];
            if(start.nodeType == 1)
              return start;
          }
          //鍙湁鍦ㄤ笂鏉ュ氨鐩哥瓑鐨勬儏鍐典笅鎵嶄細鍑虹幇鏄枃鏈殑鎯呭喌
          return ignoreTextNode && start.nodeType == 3 ? start.parentNode : start;
        }
        return domUtils.getCommonAncestor(start, end);
      },

      /**
       * 璋冩暣褰撳墠Range鐨勫紑濮嬪拰缁撴潫杈圭晫瀹瑰櫒锛屽鏋滄槸瀹瑰櫒鑺傜偣鏄枃鏈妭鐐�,灏辫皟鏁村埌鍖呭惈璇ユ枃鏈妭鐐圭殑鐖惰妭鐐逛笂
       * @method trimBoundary
       * @remind 璇ユ搷浣滄湁鍙兘浼氬紩璧锋枃鏈妭鐐硅鍒囧紑
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       *
       * //閫夊尯绀轰緥
       * <b>xxx<i>[xxxxx]</i>xxx</b>
       *
       * <script>
       *     //鏈皟鏁村墠锛� 閫夊尯鐨勫紑濮嬪鍣ㄥ拰缁撴潫閮芥槸鏂囨湰鑺傜偣
       *     //鎵ц璋冩暣
       *     range.trimBoundary();
       *
       *     //璋冩暣涔嬪悗锛� 瀹瑰櫒鑺傜偣鍙樻垚浜唅鑺傜偣
       *     //<b>xxx[<i>xxxxx</i>]xxx</b>
       * </script>
       * ```
       */

      /**
       * 璋冩暣褰撳墠Range鐨勫紑濮嬪拰缁撴潫杈圭晫瀹瑰櫒锛屽鏋滄槸瀹瑰櫒鑺傜偣鏄枃鏈妭鐐�,灏辫皟鏁村埌鍖呭惈璇ユ枃鏈妭鐐圭殑鐖惰妭鐐逛笂锛�
       * 鍙互鏍规嵁 ignoreEnd 鍙傛暟鐨勫€煎喅瀹氭槸鍚﹁皟鏁村缁撴潫杈圭晫鐨勮皟鏁�
       * @method trimBoundary
       * @param { Boolean } ignoreEnd 鏄惁蹇界暐瀵圭粨鏉熻竟鐣岀殑璋冩暣
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       *
       * //閫夊尯绀轰緥
       * <b>xxx<i>[xxxxx]</i>xxx</b>
       *
       * <script>
       *     //鏈皟鏁村墠锛� 閫夊尯鐨勫紑濮嬪鍣ㄥ拰缁撴潫閮芥槸鏂囨湰鑺傜偣
       *     //鎵ц璋冩暣
       *     range.trimBoundary( true );
       *
       *     //璋冩暣涔嬪悗锛� 寮€濮嬪鍣ㄨ妭鐐瑰彉鎴愪簡i鑺傜偣
       *     //浣嗘槸锛� 缁撴潫瀹瑰櫒娌℃湁鍙戠敓鍙樺寲
       *     //<b>xxx[<i>xxxxx]</i>xxx</b>
       * </script>
       * ```
       */
      trimBoundary:function (ignoreEnd) {
        this.txtToElmBoundary();
        var start = this.startContainer,
          offset = this.startOffset,
          collapsed = this.collapsed,
          end = this.endContainer;
        if (start.nodeType == 3) {
          if (offset == 0) {
            this.setStartBefore(start);
          } else {
            if (offset >= start.nodeValue.length) {
              this.setStartAfter(start);
            } else {
              var textNode = domUtils.split(start, offset);
              //璺熸柊缁撴潫杈圭晫
              if (start === end) {
                this.setEnd(textNode, this.endOffset - offset);
              } else if (start.parentNode === end) {
                this.endOffset += 1;
              }
              this.setStartBefore(textNode);
            }
          }
          if (collapsed) {
            return this.collapse(true);
          }
        }
        if (!ignoreEnd) {
          offset = this.endOffset;
          end = this.endContainer;
          if (end.nodeType == 3) {
            if (offset == 0) {
              this.setEndBefore(end);
            } else {
              offset < end.nodeValue.length && domUtils.split(end, offset);
              this.setEndAfter(end);
            }
          }
        }
        return this;
      },

      /**
       * 濡傛灉閫夊尯鍦ㄦ枃鏈殑杈圭晫涓婏紝灏辨墿灞曢€夊尯鍒版枃鏈殑鐖惰妭鐐逛笂, 濡傛灉褰撳墠閫夊尯鏄棴鍚堢殑锛� 鍒欎粈涔堜篃涓嶅仛
       * @method txtToElmBoundary
       * @remind 璇ユ搷浣滀笉浼氫慨鏀筪om鑺傜偣
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */

      /**
       * 濡傛灉閫夊尯鍦ㄦ枃鏈殑杈圭晫涓婏紝灏辨墿灞曢€夊尯鍒版枃鏈殑鐖惰妭鐐逛笂, 濡傛灉褰撳墠閫夊尯鏄棴鍚堢殑锛� 鍒欐牴鎹弬鏁伴」
       * ignoreCollapsed 鐨勫€煎喅瀹氭槸鍚︽墽琛岃璋冩暣
       * @method txtToElmBoundary
       * @param { Boolean } ignoreCollapsed 鏄惁蹇界暐閫夊尯鐨勯棴鍚堢姸鎬侊紝 濡傛灉璇ュ弬鏁板彇鍊间负true锛� 鍒�
       *                      涓嶈閫夊尯鏄惁闂悎锛� 閮戒細鎵ц璇ユ搷浣滐紝 鍙嶄箣锛� 鍒欎笉浼氬闂悎鐨勯€夊尯鎵ц璇ユ搷浣�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      txtToElmBoundary:function (ignoreCollapsed) {
        function adjust(r, c) {
          var container = r[c + 'Container'],
            offset = r[c + 'Offset'];
          if (container.nodeType == 3) {
            if (!offset) {
              r['set' + c.replace(/(\w)/, function (a) {
                return a.toUpperCase();
              }) + 'Before'](container);
            } else if (offset >= container.nodeValue.length) {
              r['set' + c.replace(/(\w)/, function (a) {
                return a.toUpperCase();
              }) + 'After' ](container);
            }
          }
        }

        if (ignoreCollapsed || !this.collapsed) {
          adjust(this, 'start');
          adjust(this, 'end');
        }
        return this;
      },

      /**
       * 鍦ㄥ綋鍓嶉€夊尯鐨勫紑濮嬩綅缃墠鎻掑叆鑺傜偣锛屾柊鎻掑叆鐨勮妭鐐逛細琚range鍖呭惈
       * @method  insertNode
       * @param { Node } node 闇€瑕佹彃鍏ョ殑鑺傜偣
       * @remind 鎻掑叆鐨勮妭鐐瑰彲浠ユ槸涓€涓狣ocumentFragment渚濇鎻掑叆澶氫釜鑺傜偣
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      insertNode:function (node) {
        var first = node, length = 1;
        if (node.nodeType == 11) {
          first = node.firstChild;
          length = node.childNodes.length;
        }
        this.trimBoundary(true);
        var start = this.startContainer,
          offset = this.startOffset;
        var nextNode = start.childNodes[ offset ];
        if (nextNode) {
          start.insertBefore(node, nextNode);
        } else {
          start.appendChild(node);
        }
        if (first.parentNode === this.endContainer) {
          this.endOffset = this.endOffset + length;
        }
        return this.setStartBefore(first);
      },

      /**
       * 闂悎閫夊尯鍒板綋鍓嶉€夊尯鐨勫紑濮嬩綅缃紝 骞朵笖瀹氫綅鍏夋爣鍒伴棴鍚堝悗鐨勪綅缃�
       * @method  setCursor
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @see UE.dom.Range:collapse()
       */

      /**
       * 闂悎閫夊尯锛屽彲浠ユ牴鎹弬鏁皌oEnd鐨勫€兼帶鍒堕€夊尯鏄悜鍓嶉棴鍚堣繕鏄悜鍚庨棴鍚堬紝 骞朵笖瀹氫綅鍏夋爣鍒伴棴鍚堝悗鐨勪綅缃€�
       * @method  setCursor
       * @param { Boolean } toEnd 鏄惁鍚戝悗闂悎锛� 濡傛灉涓簍rue锛� 鍒欓棴鍚堥€夊尯鏃讹紝 灏嗗悜缁撴潫瀹瑰櫒鏂瑰悜闂悎锛�
       *                      鍙嶄箣锛屽垯鍚戝紑濮嬪鍣ㄦ柟鍚戦棴鍚�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @see UE.dom.Range:collapse(Boolean)
       */
      setCursor:function (toEnd, noFillData) {
        return this.collapse(!toEnd).select(noFillData);
      },

      /**
       * 鍒涘缓褰撳墠range鐨勪竴涓功绛撅紝璁板綍涓嬪綋鍓峳ange鐨勪綅缃紝鏂逛究褰揹om鏍戞敼鍙樻椂锛岃繕鑳芥壘鍥炲師鏉ョ殑閫夊尯浣嶇疆
       * @method createBookmark
       * @param { Boolean } serialize 鎺у埗杩斿洖鐨勬爣璁颁綅缃槸瀵瑰綋鍓嶄綅缃殑寮曠敤杩樻槸ID锛屽鏋滆鍊间负true锛屽垯
       *                              杩斿洖鏍囪浣嶇疆鐨処D锛� 鍙嶄箣鍒欒繑鍥炴爣璁颁綅缃妭鐐圭殑寮曠敤
       * @return { Object } 杩斿洖涓€涓功绛捐褰曢敭鍊煎锛� 鍏跺寘鍚殑key鏈夛細 start => 寮€濮嬫爣璁扮殑ID鎴栬€呭紩鐢紝
       *                          end => 缁撴潫鏍囪鐨処D鎴栧紩鐢紝 id => 褰撳墠鏍囪鐨勭被鍨嬶紝 濡傛灉涓簍rue锛屽垯琛ㄧず
       *                          杩斿洖鐨勮褰曠殑绫诲瀷涓篒D锛� 鍙嶄箣鍒欎负寮曠敤
       */
      createBookmark:function (serialize, same) {
        var endNode,
          startNode = this.document.createElement('span');
        startNode.style.cssText = 'display:none;line-height:0px;';
        startNode.appendChild(this.document.createTextNode('\u200D'));
        startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

        if (!this.collapsed) {
          endNode = startNode.cloneNode(true);
          endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
        }
        this.insertNode(startNode);
        if (endNode) {
          this.collapse().insertNode(endNode).setEndBefore(endNode);
        }
        this.setStartAfter(startNode);
        return {
          start:serialize ? startNode.id : startNode,
          end:endNode ? serialize ? endNode.id : endNode : null,
          id:serialize
        }
      },

      /**
       *  璋冩暣褰撳墠range鐨勮竟鐣屽埌涔︾浣嶇疆锛屽苟鍒犻櫎璇ヤ功绛惧璞℃墍鏍囪鐨勪綅缃唴鐨勮妭鐐�
       *  @method  moveToBookmark
       *  @param { BookMark } bookmark createBookmark鎵€鍒涘缓鐨勬爣绛惧璞�
       *  @return { UE.dom.Range } 褰撳墠range瀵硅薄
       *  @see UE.dom.Range:createBookmark(Boolean)
       */
      moveToBookmark:function (bookmark) {
        var start = bookmark.id ? this.document.getElementById(bookmark.start) : bookmark.start,
          end = bookmark.end && bookmark.id ? this.document.getElementById(bookmark.end) : bookmark.end;
        this.setStartBefore(start);
        domUtils.remove(start);
        if (end) {
          this.setEndBefore(end);
          domUtils.remove(end);
        } else {
          this.collapse(true);
        }
        return this;
      },

      /**
       * 璋冩暣range鐨勮竟鐣岋紝浣垮叾"鏀惧ぇ"鍒版渶杩戠殑鐖惰妭鐐�
       * @method  enlarge
       * @remind 浼氬紩璧烽€夊尯鐨勫彉鍖�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */

      /**
       * 璋冩暣range鐨勮竟鐣岋紝浣垮叾"鏀惧ぇ"鍒版渶杩戠殑鐖惰妭鐐癸紝鏍规嵁鍙傛暟 toBlock 鐨勫彇鍊硷紝 鍙互
       * 瑕佹眰鎵╁ぇ涔嬪悗鐨勭埗鑺傜偣鏄痓lock鑺傜偣
       * @method  enlarge
       * @param { Boolean } toBlock 鏄惁瑕佹眰鎵╁ぇ涔嬪悗鐨勭埗鑺傜偣蹇呴』鏄痓lock鑺傜偣
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       */
      enlarge:function (toBlock, stopFn) {
        var isBody = domUtils.isBody,
          pre, node, tmp = this.document.createTextNode('');
        if (toBlock) {
          node = this.startContainer;
          if (node.nodeType == 1) {
            if (node.childNodes[this.startOffset]) {
              pre = node = node.childNodes[this.startOffset]
            } else {
              node.appendChild(tmp);
              pre = node = tmp;
            }
          } else {
            pre = node;
          }
          while (1) {
            if (domUtils.isBlockElm(node)) {
              node = pre;
              while ((pre = node.previousSibling) && !domUtils.isBlockElm(pre)) {
                node = pre;
              }
              this.setStartBefore(node);
              break;
            }
            pre = node;
            node = node.parentNode;
          }
          node = this.endContainer;
          if (node.nodeType == 1) {
            if (pre = node.childNodes[this.endOffset]) {
              node.insertBefore(tmp, pre);
            } else {
              node.appendChild(tmp);
            }
            pre = node = tmp;
          } else {
            pre = node;
          }
          while (1) {
            if (domUtils.isBlockElm(node)) {
              node = pre;
              while ((pre = node.nextSibling) && !domUtils.isBlockElm(pre)) {
                node = pre;
              }
              this.setEndAfter(node);
              break;
            }
            pre = node;
            node = node.parentNode;
          }
          if (tmp.parentNode === this.endContainer) {
            this.endOffset--;
          }
          domUtils.remove(tmp);
        }

        // 鎵╁睍杈圭晫鍒版渶澶�
        if (!this.collapsed) {
          while (this.startOffset == 0) {
            if (stopFn && stopFn(this.startContainer)) {
              break;
            }
            if (isBody(this.startContainer)) {
              break;
            }
            this.setStartBefore(this.startContainer);
          }
          while (this.endOffset == (this.endContainer.nodeType == 1 ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length)) {
            if (stopFn && stopFn(this.endContainer)) {
              break;
            }
            if (isBody(this.endContainer)) {
              break;
            }
            this.setEndAfter(this.endContainer);
          }
        }
        return this;
      },
      enlargeToBlockElm:function(ignoreEnd){
        while(!domUtils.isBlockElm(this.startContainer)){
          this.setStartBefore(this.startContainer);
        }
        if(!ignoreEnd){
          while(!domUtils.isBlockElm(this.endContainer)){
            this.setEndAfter(this.endContainer);
          }
        }
        return this;
      },
      /**
       * 璋冩暣Range鐨勮竟鐣岋紝浣垮叾"缂╁皬"鍒版渶鍚堥€傜殑浣嶇疆
       * @method adjustmentBoundary
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @see UE.dom.Range:shrinkBoundary()
       */
      adjustmentBoundary:function () {
        if (!this.collapsed) {
          while (!domUtils.isBody(this.startContainer) &&
          this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length &&
          this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
            ) {

            this.setStartAfter(this.startContainer);
          }
          while (!domUtils.isBody(this.endContainer) && !this.endOffset &&
          this.endContainer[this.endContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
            ) {
            this.setEndBefore(this.endContainer);
          }
        }
        return this;
      },

      /**
       * 缁檙ange閫夊尯涓殑鍐呭娣诲姞缁欏畾鐨刬nline鏍囩
       * @method applyInlineStyle
       * @param { String } tagName 闇€瑕佹坊鍔犵殑鏍囩鍚�
       * @example
       * ```html
       * <p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xxxx[<strong>xxxx</strong>]x</p>
       * ```
       */

      /**
       * 缁檙ange閫夊尯涓殑鍐呭娣诲姞缁欏畾鐨刬nline鏍囩锛� 骞朵笖涓烘爣绛鹃檮鍔犱笂涓€浜涘垵濮嬪寲灞炴€с€�
       * @method applyInlineStyle
       * @param { String } tagName 闇€瑕佹坊鍔犵殑鏍囩鍚�
       * @param { Object } attrs 璺熼殢鏂版坊鍔犵殑鏍囩鐨勫睘鎬�
       * @return { UE.dom.Range } 褰撳墠閫夊尯
       * @example
       * ```html
       * <p>xxxx[xxxx]x</p>
       *
       * ==>
       *
       * <!-- 鎵ц鎿嶄綔 -->
       * range.applyInlineStyle("strong",{"style":"font-size:12px"})
       *
       * ==>
       *
       * <p>xxxx[<strong style="font-size:12px">xxxx</strong>]x</p>
       * ```
       */
      applyInlineStyle:function (tagName, attrs, list) {
        if (this.collapsed)return this;
        this.trimBoundary().enlarge(false,
          function (node) {
            return node.nodeType == 1 && domUtils.isBlockElm(node)
          }).adjustmentBoundary();
        var bookmark = this.createBookmark(),
          end = bookmark.end,
          filterFn = function (node) {
            return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace(node);
          },
          current = domUtils.getNextDomNode(bookmark.start, false, filterFn),
          node,
          pre,
          range = this.cloneRange();
        while (current && (domUtils.getPosition(current, end) & domUtils.POSITION_PRECEDING)) {
          if (current.nodeType == 3 || dtd[tagName][current.tagName]) {
            range.setStartBefore(current);
            node = current;
            while (node && (node.nodeType == 3 || dtd[tagName][node.tagName]) && node !== end) {
              pre = node;
              node = domUtils.getNextDomNode(node, node.nodeType == 1, null, function (parent) {
                return dtd[tagName][parent.tagName];
              });
            }
            var frag = range.setEndAfter(pre).extractContents(), elm;
            if (list && list.length > 0) {
              var level, top;
              top = level = list[0].cloneNode(false);
              for (var i = 1, ci; ci = list[i++];) {
                level.appendChild(ci.cloneNode(false));
                level = level.firstChild;
              }
              elm = level;
            } else {
              elm = range.document.createElement(tagName);
            }
            if (attrs) {
              domUtils.setAttributes(elm, attrs);
            }
            elm.appendChild(frag);
            range.insertNode(list ? top : elm);
            //澶勭悊涓嬫粦绾垮湪a涓婄殑鎯呭喌
            var aNode;
            if (tagName == 'span' && attrs.style && /text\-decoration/.test(attrs.style) && (aNode = domUtils.findParentByTagName(elm, 'a', true))) {
              domUtils.setAttributes(aNode, attrs);
              domUtils.remove(elm, true);
              elm = aNode;
            } else {
              domUtils.mergeSibling(elm);
              domUtils.clearEmptySibling(elm);
            }
            //鍘婚櫎瀛愯妭鐐圭浉鍚岀殑
            domUtils.mergeChild(elm, attrs);
            current = domUtils.getNextDomNode(elm, false, filterFn);
            domUtils.mergeToParent(elm);
            if (node === end) {
              break;
            }
          } else {
            current = domUtils.getNextDomNode(current, true, filterFn);
          }
        }
        return this.moveToBookmark(bookmark);
      },

      /**
       * 绉婚櫎褰撳墠閫夊尯鍐呮寚瀹氱殑inline鏍囩锛屼絾淇濈暀鍏朵腑鐨勫唴瀹�
       * @method removeInlineStyle
       * @param { String } tagName 闇€瑕佺Щ闄ょ殑鏍囩鍚�
       * @return { UE.dom.Range } 褰撳墠鐨剅ange瀵硅薄
       * @example
       * ```html
       * xx[x<span>xxx<em>yyy</em>zz]z</span>  => range.removeInlineStyle(["em"])  => xx[x<span>xxxyyyzz]z</span>
       * ```
       */

      /**
       * 绉婚櫎褰撳墠閫夊尯鍐呮寚瀹氱殑涓€缁刬nline鏍囩锛屼絾淇濈暀鍏朵腑鐨勫唴瀹�
       * @method removeInlineStyle
       * @param { Array } tagNameArr 闇€瑕佺Щ闄ょ殑鏍囩鍚嶇殑鏁扮粍
       * @return { UE.dom.Range } 褰撳墠鐨剅ange瀵硅薄
       * @see UE.dom.Range:removeInlineStyle(String)
       */
      removeInlineStyle:function (tagNames) {
        if (this.collapsed)return this;
        tagNames = utils.isArray(tagNames) ? tagNames : [tagNames];
        this.shrinkBoundary().adjustmentBoundary();
        var start = this.startContainer, end = this.endContainer;
        while (1) {
          if (start.nodeType == 1) {
            if (utils.indexOf(tagNames, start.tagName.toLowerCase()) > -1) {
              break;
            }
            if (start.tagName.toLowerCase() == 'body') {
              start = null;
              break;
            }
          }
          start = start.parentNode;
        }
        while (1) {
          if (end.nodeType == 1) {
            if (utils.indexOf(tagNames, end.tagName.toLowerCase()) > -1) {
              break;
            }
            if (end.tagName.toLowerCase() == 'body') {
              end = null;
              break;
            }
          }
          end = end.parentNode;
        }
        var bookmark = this.createBookmark(),
          frag,
          tmpRange;
        if (start) {
          tmpRange = this.cloneRange().setEndBefore(bookmark.start).setStartBefore(start);
          frag = tmpRange.extractContents();
          tmpRange.insertNode(frag);
          domUtils.clearEmptySibling(start, true);
          start.parentNode.insertBefore(bookmark.start, start);
        }
        if (end) {
          tmpRange = this.cloneRange().setStartAfter(bookmark.end).setEndAfter(end);
          frag = tmpRange.extractContents();
          tmpRange.insertNode(frag);
          domUtils.clearEmptySibling(end, false, true);
          end.parentNode.insertBefore(bookmark.end, end.nextSibling);
        }
        var current = domUtils.getNextDomNode(bookmark.start, false, function (node) {
          return node.nodeType == 1;
        }), next;
        while (current && current !== bookmark.end) {
          next = domUtils.getNextDomNode(current, true, function (node) {
            return node.nodeType == 1;
          });
          if (utils.indexOf(tagNames, current.tagName.toLowerCase()) > -1) {
            domUtils.remove(current, true);
          }
          current = next;
        }
        return this.moveToBookmark(bookmark);
      },

      /**
       * 鑾峰彇褰撳墠閫変腑鐨勮嚜闂悎鐨勮妭鐐�
       * @method  getClosedNode
       * @return { Node | NULL } 濡傛灉褰撳墠閫変腑鐨勬槸鑷棴鍚堣妭鐐癸紝 鍒欒繑鍥炶鑺傜偣锛� 鍚﹀垯杩斿洖NULL
       */
      getClosedNode:function () {
        var node;
        if (!this.collapsed) {
          var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
          if (selectOneNode(range)) {
            var child = range.startContainer.childNodes[range.startOffset];
            if (child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
              node = child;
            }
          }
        }
        return node;
      },

      /**
       * 鍦ㄩ〉闈笂楂樹寒range鎵€琛ㄧず鐨勯€夊尯
       * @method select
       * @return { UE.dom.Range } 杩斿洖褰撳墠Range瀵硅薄
       */
      //杩欓噷涓嶅尯鍒唅e9浠ヤ笂锛宼race:3824
      select:browser.ie ? function (noFillData, textRange) {
        var nativeRange;
        if (!this.collapsed)
          this.shrinkBoundary();
        var node = this.getClosedNode();
        if (node && !textRange) {
          try {
            nativeRange = this.document.body.createControlRange();
            nativeRange.addElement(node);
            nativeRange.select();
          } catch (e) {}
          return this;
        }
        var bookmark = this.createBookmark(),
          start = bookmark.start,
          end;
        nativeRange = this.document.body.createTextRange();
        nativeRange.moveToElementText(start);
        nativeRange.moveStart('character', 1);
        if (!this.collapsed) {
          var nativeRangeEnd = this.document.body.createTextRange();
          end = bookmark.end;
          nativeRangeEnd.moveToElementText(end);
          nativeRange.setEndPoint('EndToEnd', nativeRangeEnd);
        } else {
          if (!noFillData && this.startContainer.nodeType != 3) {
            //浣跨敤<span>|x<span>鍥哄畾浣忓厜鏍�
            var tmpText = this.document.createTextNode(fillChar),
              tmp = this.document.createElement('span');
            tmp.appendChild(this.document.createTextNode(fillChar));
            start.parentNode.insertBefore(tmp, start);
            start.parentNode.insertBefore(tmpText, start);
            //褰撶偣b,i,u鏃讹紝涓嶈兘娓呴櫎i涓婅竟鐨刡
            removeFillData(this.document, tmpText);
            fillData = tmpText;
            mergeSibling(tmp, 'previousSibling');
            mergeSibling(start, 'nextSibling');
            nativeRange.moveStart('character', -1);
            nativeRange.collapse(true);
          }
        }
        this.moveToBookmark(bookmark);
        tmp && domUtils.remove(tmp);
        //IE鍦ㄩ殣钘忕姸鎬佷笅涓嶆敮鎸乺ange鎿嶄綔锛宑atch涓€涓�
        try {
          nativeRange.select();
        } catch (e) {
        }
        return this;
      } : function (notInsertFillData) {
        function checkOffset(rng){

          function check(node,offset,dir){
            if(node.nodeType == 3 && node.nodeValue.length < offset){
              rng[dir + 'Offset'] = node.nodeValue.length
            }
          }
          check(rng.startContainer,rng.startOffset,'start');
          check(rng.endContainer,rng.endOffset,'end');
        }
        var win = domUtils.getWindow(this.document),
          sel = win.getSelection(),
          txtNode;
        //FF涓嬪叧闂嚜鍔ㄩ暱楂樻椂婊氬姩鏉″湪鍏抽棴dialog鏃朵細璺�
        //ff涓嬪鏋滀笉body.focus灏嗕笉鑳藉畾浣嶉棴鍚堝厜鏍囧埌缂栬緫鍣ㄥ唴
        browser.gecko ? this.document.body.focus() : win.focus();
        if (sel) {
          sel.removeAllRanges();
          // trace:870 chrome/safari鍚庤竟鏄痓r瀵逛簬闂悎寰梤ange涓嶈兘瀹氫綅 鎵€浠ュ幓鎺変簡鍒ゆ柇
          // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
          if (this.collapsed && !notInsertFillData) {
//                    //opear濡傛灉娌℃湁鑺傜偣鎺ョ潃锛屽師鐢熺殑涓嶈兘澶熷畾浣�,涓嶈兘鍦╞ody鐨勭涓€绾ф彃鍏ョ┖鐧借妭鐐�
//                    if (notInsertFillData && browser.opera && !domUtils.isBody(this.startContainer) && this.startContainer.nodeType == 1) {
//                        var tmp = this.document.createTextNode('');
//                        this.insertNode(tmp).setStart(tmp, 0).collapse(true);
//                    }
//
            //澶勭悊鍏夋爣钀藉湪鏂囨湰鑺傜偣鐨勬儏鍐�
            //澶勭悊浠ヤ笅鐨勬儏鍐�
            //<b>|xxxx</b>
            //<b>xxxx</b>|xxxx
            //xxxx<b>|</b>
            var start = this.startContainer,child = start;
            if(start.nodeType == 1){
              child = start.childNodes[this.startOffset];

            }
            if( !(start.nodeType == 3 && this.startOffset)  &&
              (child ?
                  (!child.previousSibling || child.previousSibling.nodeType != 3)
                  :
                  (!start.lastChild || start.lastChild.nodeType != 3)
              )
            ){
              txtNode = this.document.createTextNode(fillChar);
              //璺熺潃鍓嶈竟璧�
              this.insertNode(txtNode);
              removeFillData(this.document, txtNode);
              mergeSibling(txtNode, 'previousSibling');
              mergeSibling(txtNode, 'nextSibling');
              fillData = txtNode;
              this.setStart(txtNode, browser.webkit ? 1 : 0).collapse(true);
            }
          }
          var nativeRange = this.document.createRange();
          if(this.collapsed && browser.opera && this.startContainer.nodeType == 1){
            var child = this.startContainer.childNodes[this.startOffset];
            if(!child){
              //寰€鍓嶉潬鎷�
              child = this.startContainer.lastChild;
              if( child && domUtils.isBr(child)){
                this.setStartBefore(child).collapse(true);
              }
            }else{
              //鍚戝悗闈犳嫝
              while(child && domUtils.isBlockElm(child)){
                if(child.nodeType == 1 && child.childNodes[0]){
                  child = child.childNodes[0]
                }else{
                  break;
                }
              }
              child && this.setStartBefore(child).collapse(true)
            }

          }
          //鏄痗reateAddress鏈€鍚庝竴浣嶇畻鐨勪笉鍑嗭紝鐜板湪杩欓噷杩涜寰皟
          checkOffset(this);
          nativeRange.setStart(this.startContainer, this.startOffset);
          nativeRange.setEnd(this.endContainer, this.endOffset);
          sel.addRange(nativeRange);
        }
        return this;
      },

      /**
       * 婊氬姩鍒板綋鍓峳ange寮€濮嬬殑浣嶇疆
       * @method scrollToView
       * @param { Window } win 褰撳墠range瀵硅薄鎵€灞炵殑window瀵硅薄
       * @return { UE.dom.Range } 褰撳墠Range瀵硅薄
       */

      /**
       * 婊氬姩鍒拌窛绂诲綋鍓峳ange寮€濮嬩綅缃� offset 鐨勪綅缃
       * @method scrollToView
       * @param { Window } win 褰撳墠range瀵硅薄鎵€灞炵殑window瀵硅薄
       * @param { Number } offset 璺濈range寮€濮嬩綅缃鐨勫亸绉婚噺锛� 濡傛灉涓烘鏁帮紝 鍒欏悜涓嬪亸绉伙紝 鍙嶄箣锛� 鍒欏悜涓婂亸绉�
       * @return { UE.dom.Range } 褰撳墠Range瀵硅薄
       */
      scrollToView:function (win, offset) {
        win = win ? window : domUtils.getWindow(this.document);
        var me = this,
          span = me.document.createElement('span');
        //trace:717
        span.innerHTML = '&nbsp;';
        me.cloneRange().insertNode(span);
        domUtils.scrollToView(span, win, offset);
        domUtils.remove(span);
        return me;
      },

      /**
       * 鍒ゆ柇褰撳墠閫夊尯鍐呭鏄惁鍗犱綅绗�
       * @private
       * @method inFillChar
       * @return { Boolean } 濡傛灉鏄崰浣嶇杩斿洖true锛屽惁鍒欒繑鍥瀎alse
       */
      inFillChar : function(){
        var start = this.startContainer;
        if(this.collapsed && start.nodeType == 3
          && start.nodeValue.replace(new RegExp('^' + domUtils.fillChar),'').length + 1 == start.nodeValue.length
        ){
          return true;
        }
        return false;
      },

      /**
       * 淇濆瓨
       * @method createAddress
       * @private
       * @return { Boolean } 杩斿洖寮€濮嬪拰缁撴潫鐨勪綅缃�
       * @example
       * ```html
       * <body>
       *     <p>
       *         aaaa
       *         <em>
       *             <!-- 閫夊尯寮€濮� -->
       *             bbbb
       *             <!-- 閫夊尯缁撴潫 -->
       *         </em>
       *     </p>
       *
       *     <script>
       *         //output: {startAddress:[0,1,0,0],endAddress:[0,1,0,4]}
       *         console.log( range.createAddress() );
       *     </script>
       * </body>
       * ```
       */
      createAddress : function(ignoreEnd,ignoreTxt){
        var addr = {},me = this;

        function getAddress(isStart){
          var node = isStart ? me.startContainer : me.endContainer;
          var parents = domUtils.findParents(node,true,function(node){return !domUtils.isBody(node)}),
            addrs = [];
          for(var i = 0,ci;ci = parents[i++];){
            addrs.push(domUtils.getNodeIndex(ci,ignoreTxt));
          }
          var firstIndex = 0;

          if(ignoreTxt){
            if(node.nodeType == 3){
              var tmpNode = node.previousSibling;
              while(tmpNode && tmpNode.nodeType == 3){
                firstIndex += tmpNode.nodeValue.replace(fillCharReg,'').length;
                tmpNode = tmpNode.previousSibling;
              }
              firstIndex +=  (isStart ? me.startOffset : me.endOffset)// - (fillCharReg.test(node.nodeValue) ? 1 : 0 )
            }else{
              node =  node.childNodes[ isStart ? me.startOffset : me.endOffset];
              if(node){
                firstIndex = domUtils.getNodeIndex(node,ignoreTxt);
              }else{
                node = isStart ? me.startContainer : me.endContainer;
                var first = node.firstChild;
                while(first){
                  if(domUtils.isFillChar(first)){
                    first = first.nextSibling;
                    continue;
                  }
                  firstIndex++;
                  if(first.nodeType == 3){
                    while( first && first.nodeType == 3){
                      first = first.nextSibling;
                    }
                  }else{
                    first = first.nextSibling;
                  }
                }
              }
            }

          }else{
            firstIndex = isStart ? domUtils.isFillChar(node) ? 0 : me.startOffset  : me.endOffset
          }
          if(firstIndex < 0){
            firstIndex = 0;
          }
          addrs.push(firstIndex);
          return addrs;
        }
        addr.startAddress = getAddress(true);
        if(!ignoreEnd){
          addr.endAddress = me.collapsed ? [].concat(addr.startAddress) : getAddress();
        }
        return addr;
      },

      /**
       * 淇濆瓨
       * @method createAddress
       * @private
       * @return { Boolean } 杩斿洖寮€濮嬪拰缁撴潫鐨勪綅缃�
       * @example
       * ```html
       * <body>
       *     <p>
       *         aaaa
       *         <em>
       *             <!-- 閫夊尯寮€濮� -->
       *             bbbb
       *             <!-- 閫夊尯缁撴潫 -->
       *         </em>
       *     </p>
       *
       *     <script>
       *         var range = editor.selection.getRange();
       *         range.moveToAddress({startAddress:[0,1,0,0],endAddress:[0,1,0,4]});
       *         range.select();
       *         //output: 'bbbb'
       *         console.log(editor.selection.getText());
       *     </script>
       * </body>
       * ```
       */
      moveToAddress : function(addr,ignoreEnd){
        var me = this;
        function getNode(address,isStart){
          var tmpNode = me.document.body,
            parentNode,offset;
          for(var i= 0,ci,l=address.length;i<l;i++){
            ci = address[i];
            parentNode = tmpNode;
            tmpNode = tmpNode.childNodes[ci];
            if(!tmpNode){
              offset = ci;
              break;
            }
          }
          if(isStart){
            if(tmpNode){
              me.setStartBefore(tmpNode)
            }else{
              me.setStart(parentNode,offset)
            }
          }else{
            if(tmpNode){
              me.setEndBefore(tmpNode)
            }else{
              me.setEnd(parentNode,offset)
            }
          }
        }
        getNode(addr.startAddress,true);
        !ignoreEnd && addr.endAddress &&  getNode(addr.endAddress);
        return me;
      },

      /**
       * 鍒ゆ柇缁欏畾鐨凴ange瀵硅薄鏄惁鍜屽綋鍓峈ange瀵硅薄琛ㄧず鐨勬槸鍚屼竴涓€夊尯
       * @method equals
       * @param { UE.dom.Range } 闇€瑕佸垽鏂殑Range瀵硅薄
       * @return { Boolean } 濡傛灉缁欏畾鐨凴ange瀵硅薄涓庡綋鍓峈ange瀵硅薄琛ㄧず鐨勬槸鍚屼竴涓€夊尯锛� 鍒欒繑鍥瀟rue锛� 鍚﹀垯杩斿洖false
       */
      equals : function(rng){
        for(var p in this){
          if(this.hasOwnProperty(p)){
            if(this[p] !== rng[p])
              return false
          }
        }
        return true;

      },

      /**
       * 閬嶅巻range鍐呯殑鑺傜偣銆傛瘡褰撻亶鍘嗕竴涓妭鐐规椂锛� 閮戒細鎵ц鍙傛暟椤� doFn 鎸囧畾鐨勫嚱鏁帮紝 璇ュ嚱鏁扮殑鎺ュ彈褰撳墠閬嶅巻鐨勮妭鐐�
       * 浣滀负鍏跺弬鏁般€�
       * @method traversal
       * @param { Function }  doFn 瀵规瘡涓亶鍘嗙殑鑺傜偣瑕佹墽琛岀殑鏂规硶锛� 璇ユ柟娉曟帴鍙楀綋鍓嶉亶鍘嗙殑鑺傜偣浣滀负鍏跺弬鏁�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @example
       * ```html
       *
       * <body>
       *
       *     <!-- 閫夊尯寮€濮� -->
       *     <span></span>
       *     <a></a>
       *     <!-- 閫夊尯缁撴潫 -->
       * </body>
       *
       * <script>
       *
       *     //output: <span></span><a></a>
       *     console.log( range.cloneContents() );
       *
       *     range.traversal( function ( node ) {
         *
         *         if ( node.nodeType === 1 ) {
         *             node.className = "test";
         *         }
         *
         *     } );
       *
       *     //output: <span class="test"></span><a class="test"></a>
       *     console.log( range.cloneContents() );
       *
       * </script>
       * ```
       */

      /**
       * 閬嶅巻range鍐呯殑鑺傜偣銆�
       * 姣忓綋閬嶅巻涓€涓妭鐐规椂锛� 閮戒細鎵ц鍙傛暟椤� doFn 鎸囧畾鐨勫嚱鏁帮紝 璇ュ嚱鏁扮殑鎺ュ彈褰撳墠閬嶅巻鐨勮妭鐐�
       * 浣滀负鍏跺弬鏁般€�
       * 鍙互閫氳繃鍙傛暟椤� filterFn 鏉ユ寚瀹氫竴涓繃婊ゅ櫒锛� 鍙湁绗﹀悎璇ヨ繃婊ゅ櫒杩囨护瑙勫垯鐨勮妭鐐规墠浼氳Е
       * 鍙慸oFn鍑芥暟鐨勬墽琛�
       * @method traversal
       * @param { Function } doFn 瀵规瘡涓亶鍘嗙殑鑺傜偣瑕佹墽琛岀殑鏂规硶锛� 璇ユ柟娉曟帴鍙楀綋鍓嶉亶鍘嗙殑鑺傜偣浣滀负鍏跺弬鏁�
       * @param { Function } filterFn 杩囨护鍣紝 璇ュ嚱鏁版帴鍙楀綋鍓嶉亶鍘嗙殑鑺傜偣浣滀负鍙傛暟锛� 濡傛灉璇ヨ妭鐐规弧瓒宠繃婊�
       *                      瑙勫垯锛� 璇疯繑鍥瀟rue锛� 璇ヨ妭鐐逛細瑙﹀彂doFn锛� 鍚﹀垯锛� 璇疯繑鍥瀎alse锛� 鍒欒鑺傜偣涓�
       *                      浼氳Е鍙慸oFn銆�
       * @return { UE.dom.Range } 褰撳墠range瀵硅薄
       * @see UE.dom.Range:traversal(Function)
       * @example
       * ```html
       *
       * <body>
       *
       *     <!-- 閫夊尯寮€濮� -->
       *     <span></span>
       *     <a></a>
       *     <!-- 閫夊尯缁撴潫 -->
       * </body>
       *
       * <script>
       *
       *     //output: <span></span><a></a>
       *     console.log( range.cloneContents() );
       *
       *     range.traversal( function ( node ) {
         *
         *         node.className = "test";
         *
         *     }, function ( node ) {
         *          return node.nodeType === 1;
         *     } );
       *
       *     //output: <span class="test"></span><a class="test"></a>
       *     console.log( range.cloneContents() );
       *
       * </script>
       * ```
       */
      traversal:function(doFn,filterFn){
        if (this.collapsed)
          return this;
        var bookmark = this.createBookmark(),
          end = bookmark.end,
          current = domUtils.getNextDomNode(bookmark.start, false, filterFn);
        while (current && current !== end && (domUtils.getPosition(current, end) & domUtils.POSITION_PRECEDING)) {
          var tmpNode = domUtils.getNextDomNode(current,false,filterFn);
          doFn(current);
          current = tmpNode;
        }
        return this.moveToBookmark(bookmark);
      }
    };
  })();

// core/Selection.js
  /**
   * 閫夐泦
   * @file
   * @module UE.dom
   * @class Selection
   * @since 1.2.6.1
   */

  /**
   * 閫夊尯闆嗗悎
   * @unfile
   * @module UE.dom
   * @class Selection
   */
  (function () {

    function getBoundaryInformation( range, start ) {
      var getIndex = domUtils.getNodeIndex;
      range = range.duplicate();
      range.collapse( start );
      var parent = range.parentElement();
      //濡傛灉鑺傜偣閲屾病鏈夊瓙鑺傜偣锛岀洿鎺ラ€€鍑�
      if ( !parent.hasChildNodes() ) {
        return  {container:parent, offset:0};
      }
      var siblings = parent.children,
        child,
        testRange = range.duplicate(),
        startIndex = 0, endIndex = siblings.length - 1, index = -1,
        distance;
      while ( startIndex <= endIndex ) {
        index = Math.floor( (startIndex + endIndex) / 2 );
        child = siblings[index];
        testRange.moveToElementText( child );
        var position = testRange.compareEndPoints( 'StartToStart', range );
        if ( position > 0 ) {
          endIndex = index - 1;
        } else if ( position < 0 ) {
          startIndex = index + 1;
        } else {
          //trace:1043
          return  {container:parent, offset:getIndex( child )};
        }
      }
      if ( index == -1 ) {
        testRange.moveToElementText( parent );
        testRange.setEndPoint( 'StartToStart', range );
        distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
        siblings = parent.childNodes;
        if ( !distance ) {
          child = siblings[siblings.length - 1];
          return  {container:child, offset:child.nodeValue.length};
        }

        var i = siblings.length;
        while ( distance > 0 ){
          distance -= siblings[ --i ].nodeValue.length;
        }
        return {container:siblings[i], offset:-distance};
      }
      testRange.collapse( position > 0 );
      testRange.setEndPoint( position > 0 ? 'StartToStart' : 'EndToStart', range );
      distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
      if ( !distance ) {
        return  dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName] ?
          {container:parent, offset:getIndex( child ) + (position > 0 ? 0 : 1)} :
          {container:child, offset:position > 0 ? 0 : child.childNodes.length}
      }
      while ( distance > 0 ) {
        try {
          var pre = child;
          child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
          distance -= child.nodeValue.length;
        } catch ( e ) {
          return {container:parent, offset:getIndex( pre )};
        }
      }
      return  {container:child, offset:position > 0 ? -distance : child.nodeValue.length + distance}
    }

    /**
     * 灏唅eRange杞崲涓篟ange瀵硅薄
     * @param {Range}   ieRange    ieRange瀵硅薄
     * @param {Range}   range      Range瀵硅薄
     * @return  {Range}  range       杩斿洖杞崲鍚庣殑Range瀵硅薄
     */
    function transformIERangeToRange( ieRange, range ) {
      if ( ieRange.item ) {
        range.selectNode( ieRange.item( 0 ) );
      } else {
        var bi = getBoundaryInformation( ieRange, true );
        range.setStart( bi.container, bi.offset );
        if ( ieRange.compareEndPoints( 'StartToEnd', ieRange ) != 0 ) {
          bi = getBoundaryInformation( ieRange, false );
          range.setEnd( bi.container, bi.offset );
        }
      }
      return range;
    }

    /**
     * 鑾峰緱ieRange
     * @param {Selection} sel    Selection瀵硅薄
     * @return {ieRange}    寰楀埌ieRange
     */
    function _getIERange( sel ) {
      var ieRange;
      //ie涓嬫湁鍙兘鎶ラ敊
      try {
        ieRange = sel.getNative().createRange();
      } catch ( e ) {
        return null;
      }
      var el = ieRange.item ? ieRange.item( 0 ) : ieRange.parentElement();
      if ( ( el.ownerDocument || el ) === sel.document ) {
        return ieRange;
      }
      return null;
    }

    var Selection = dom.Selection = function ( doc ) {
      var me = this, iframe;
      me.document = doc;
      if ( browser.ie9below ) {
        iframe = domUtils.getWindow( doc ).frameElement;
        domUtils.on( iframe, 'beforedeactivate', function () {
          me._bakIERange = me.getIERange();
        } );
        domUtils.on( iframe, 'activate', function () {
          try {
            if ( !_getIERange( me ) && me._bakIERange ) {
              me._bakIERange.select();
            }
          } catch ( ex ) {
          }
          me._bakIERange = null;
        } );
      }
      iframe = doc = null;
    };

    Selection.prototype = {

      rangeInBody : function(rng,txtRange){
        var node = browser.ie9below || txtRange ? rng.item ? rng.item() : rng.parentElement() : rng.startContainer;

        return node === this.document.body || domUtils.inDoc(node,this.document);
      },

      /**
       * 鑾峰彇鍘熺敓seleciton瀵硅薄
       * @method getNative
       * @return { Object } 鑾峰緱selection瀵硅薄
       * @example
       * ```javascript
       * editor.selection.getNative();
       * ```
       */
      getNative:function () {
        var doc = this.document;
        try {
          return !doc ? null : browser.ie9below ? doc.selection : domUtils.getWindow( doc ).getSelection();
        } catch ( e ) {
          return null;
        }
      },

      /**
       * 鑾峰緱ieRange
       * @method getIERange
       * @return { Object } 杩斿洖ie鍘熺敓鐨凴ange
       * @example
       * ```javascript
       * editor.selection.getIERange();
       * ```
       */
      getIERange:function () {
        var ieRange = _getIERange( this );
        if ( !ieRange ) {
          if ( this._bakIERange ) {
            return this._bakIERange;
          }
        }
        return ieRange;
      },

      /**
       * 缂撳瓨褰撳墠閫夊尯鐨剅ange鍜岄€夊尯鐨勫紑濮嬭妭鐐�
       * @method cache
       */
      cache:function () {
        this.clear();
        this._cachedRange = this.getRange();
        this._cachedStartElement = this.getStart();
        this._cachedStartElementPath = this.getStartElementPath();
      },

      /**
       * 鑾峰彇閫夊尯寮€濮嬩綅缃殑鐖惰妭鐐瑰埌body
       * @method getStartElementPath
       * @return { Array } 杩斿洖鐖惰妭鐐归泦鍚�
       * @example
       * ```javascript
       * editor.selection.getStartElementPath();
       * ```
       */
      getStartElementPath:function () {
        if ( this._cachedStartElementPath ) {
          return this._cachedStartElementPath;
        }
        var start = this.getStart();
        if ( start ) {
          return domUtils.findParents( start, true, null, true )
        }
        return [];
      },

      /**
       * 娓呯┖缂撳瓨
       * @method clear
       */
      clear:function () {
        this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
      },

      /**
       * 缂栬緫鍣ㄦ槸鍚﹀緱鍒颁簡閫夊尯
       * @method isFocus
       */
      isFocus:function () {
        try {
          if(browser.ie9below){

            var nativeRange = _getIERange(this);
            return !!(nativeRange && this.rangeInBody(nativeRange));
          }else{
            return !!this.getNative().rangeCount;
          }
        } catch ( e ) {
          return false;
        }

      },

      /**
       * 鑾峰彇閫夊尯瀵瑰簲鐨凴ange
       * @method getRange
       * @return { Object } 寰楀埌Range瀵硅薄
       * @example
       * ```javascript
       * editor.selection.getRange();
       * ```
       */
      getRange:function () {
        var me = this;
        function optimze( range ) {
          var child = me.document.body.firstChild,
            collapsed = range.collapsed;
          while ( child && child.firstChild ) {
            range.setStart( child, 0 );
            child = child.firstChild;
          }
          if ( !range.startContainer ) {
            range.setStart( me.document.body, 0 )
          }
          if ( collapsed ) {
            range.collapse( true );
          }
        }

        if ( me._cachedRange != null ) {
          return this._cachedRange;
        }
        var range = new baidu.editor.dom.Range( me.document );

        if ( browser.ie9below ) {
          var nativeRange = me.getIERange();
          if ( nativeRange ) {
            //澶囦唤鐨刜bakIERange鍙兘宸茬粡瀹炴晥浜嗭紝dom鏍戝彂鐢熶簡鍙樺寲姣斿浠庢簮鐮佹ā寮忓垏鍥炴潵锛屾墍浠ry涓€涓嬶紝瀹炴晥灏辨斁鍒癰ody寮€濮嬩綅缃�
            try{
              transformIERangeToRange( nativeRange, range );
            }catch(e){
              optimze( range );
            }

          } else {
            optimze( range );
          }
        } else {
          var sel = me.getNative();
          if ( sel && sel.rangeCount ) {
            var firstRange = sel.getRangeAt( 0 );
            var lastRange = sel.getRangeAt( sel.rangeCount - 1 );
            range.setStart( firstRange.startContainer, firstRange.startOffset ).setEnd( lastRange.endContainer, lastRange.endOffset );
            if ( range.collapsed && domUtils.isBody( range.startContainer ) && !range.startOffset ) {
              optimze( range );
            }
          } else {
            //trace:1734 鏈夊彲鑳藉凡缁忎笉鍦╠om鏍戜笂浜嗭紝鏍囪瘑鐨勮妭鐐�
            if ( this._bakRange && domUtils.inDoc( this._bakRange.startContainer, this.document ) ){
              return this._bakRange;
            }
            optimze( range );
          }
        }
        return this._bakRange = range;
      },

      /**
       * 鑾峰彇寮€濮嬪厓绱狅紝鐢ㄤ簬鐘舵€佸弽灏�
       * @method getStart
       * @return { Element } 鑾峰緱寮€濮嬪厓绱�
       * @example
       * ```javascript
       * editor.selection.getStart();
       * ```
       */
      getStart:function () {
        if ( this._cachedStartElement ) {
          return this._cachedStartElement;
        }
        var range = browser.ie9below ? this.getIERange() : this.getRange(),
          tmpRange,
          start, tmp, parent;
        if ( browser.ie9below ) {
          if ( !range ) {
            //todo 缁欑涓€涓€煎彲鑳戒細鏈夐棶棰�
            return this.document.body.firstChild;
          }
          //control鍏冪礌
          if ( range.item ){
            return range.item( 0 );
          }
          tmpRange = range.duplicate();
          //淇ie涓�<b>x</b>[xx] 闂悎鍚� <b>x|</b>xx
          tmpRange.text.length > 0 && tmpRange.moveStart( 'character', 1 );
          tmpRange.collapse( 1 );
          start = tmpRange.parentElement();
          parent = tmp = range.parentElement();
          while ( tmp = tmp.parentNode ) {
            if ( tmp == start ) {
              start = parent;
              break;
            }
          }
        } else {
          range.shrinkBoundary();
          start = range.startContainer;
          if ( start.nodeType == 1 && start.hasChildNodes() ){
            start = start.childNodes[Math.min( start.childNodes.length - 1, range.startOffset )];
          }
          if ( start.nodeType == 3 ){
            return start.parentNode;
          }
        }
        return start;
      },

      /**
       * 寰楀埌閫夊尯涓殑鏂囨湰
       * @method getText
       * @return { String } 閫夊尯涓寘鍚殑鏂囨湰
       * @example
       * ```javascript
       * editor.selection.getText();
       * ```
       */
      getText:function () {
        var nativeSel, nativeRange;
        if ( this.isFocus() && (nativeSel = this.getNative()) ) {
          nativeRange = browser.ie9below ? nativeSel.createRange() : nativeSel.getRangeAt( 0 );
          return browser.ie9below ? nativeRange.text : nativeRange.toString();
        }
        return '';
      },

      /**
       * 娓呴櫎閫夊尯
       * @method clearRange
       * @example
       * ```javascript
       * editor.selection.clearRange();
       * ```
       */
      clearRange : function(){
        this.getNative()[browser.ie9below ? 'empty' : 'removeAllRanges']();
      }
    };
  })();

// core/Editor.js
  /**
   * 缂栬緫鍣ㄤ富绫伙紝鍖呭惈缂栬緫鍣ㄦ彁渚涚殑澶ч儴鍒嗗叕鐢ㄦ帴鍙�
   * @file
   * @module UE
   * @class Editor
   * @since 1.2.6.1
   */

  /**
   * UEditor鍏敤绌洪棿锛孶Editor鎵€鏈夌殑鍔熻兘閮芥寕杞藉湪璇ョ┖闂翠笅
   * @unfile
   * @module UE
   */

  /**
   * UEditor鐨勬牳蹇冪被锛屼负鐢ㄦ埛鎻愪緵涓庣紪杈戝櫒浜や簰鐨勬帴鍙ｃ€�
   * @unfile
   * @module UE
   * @class Editor
   */

  (function () {
    var uid = 0, _selectionChangeTimer;

    /**
     * 鑾峰彇缂栬緫鍣ㄧ殑html鍐呭锛岃祴鍊煎埌缂栬緫鍣ㄦ墍鍦ㄨ〃鍗曠殑textarea鏂囨湰鍩熼噷闈�
     * @private
     * @method setValue
     * @param { UE.Editor } editor 缂栬緫鍣ㄤ簨渚�
     */
    function setValue(form, editor) {
      var textarea;
      if (editor.textarea) {
        if (utils.isString(editor.textarea)) {
          for (var i = 0, ti, tis = domUtils.getElementsByTagName(form, 'textarea'); ti = tis[i++];) {
            if (ti.id == 'ueditor_textarea_' + editor.options.textarea) {
              textarea = ti;
              break;
            }
          }
        } else {
          textarea = editor.textarea;
        }
      }
      if (!textarea) {
        form.appendChild(textarea = domUtils.createElement(document, 'textarea', {
          'name': editor.options.textarea,
          'id': 'ueditor_textarea_' + editor.options.textarea,
          'style': "display:none"
        }));
        //涓嶈浜х敓澶氫釜textarea
        editor.textarea = textarea;
      }
      !textarea.getAttribute('name') && textarea.setAttribute('name', editor.options.textarea );
      textarea.value = editor.hasContents() ?
        (editor.options.allHtmlEnabled ? editor.getAllHtml() : editor.getContent(null, null, true)) :
        ''
    }
    function loadPlugins(me){
      //鍒濆鍖栨彃浠�
      for (var pi in UE.plugins) {
        UE.plugins[pi].call(me);
      }

    }
    function checkCurLang(I18N){
      for(var lang in I18N){
        return lang
      }
    }

    function langReadied(me){
      me.langIsReady = true;

      me.fireEvent("langReady");
    }

    /**
     * 缂栬緫鍣ㄥ噯澶囧氨缁悗浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event ready
     * @remind render鏂规硶鎵ц瀹屾垚涔嬪悗,浼氳Е鍙戣浜嬩欢
     * @remind
     * @example
     * ```javascript
     * editor.addListener( 'ready', function( editor ) {
     *     editor.execCommand( 'focus' ); //缂栬緫鍣ㄥ鍦ㄥ畬鎴愬悗锛岃缂栬緫鍣ㄦ嬁鍒扮劍鐐�
     * } );
     * ```
     */
    /**
     * 鎵цdestroy鏂规硶,浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event destroy
     * @see UE.Editor:destroy()
     */
    /**
     * 鎵цreset鏂规硶,浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event reset
     * @see UE.Editor:reset()
     */
    /**
     * 鎵цfocus鏂规硶,浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event focus
     * @see UE.Editor:focus(Boolean)
     */
    /**
     * 璇█鍔犺浇瀹屾垚浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event langReady
     */
    /**
     * 杩愯鍛戒护涔嬪悗浼氳Е鍙戣鍛戒护
     * @module UE
     * @class Editor
     * @event beforeExecCommand
     */
    /**
     * 杩愯鍛戒护涔嬪悗浼氳Е鍙戣鍛戒护
     * @module UE
     * @class Editor
     * @event afterExecCommand
     */
    /**
     * 杩愯鍛戒护涔嬪墠浼氳Е鍙戣鍛戒护
     * @module UE
     * @class Editor
     * @event firstBeforeExecCommand
     */
    /**
     * 鍦╣etContent鏂规硶鎵ц涔嬪墠浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event beforeGetContent
     * @see UE.Editor:getContent()
     */
    /**
     * 鍦╣etContent鏂规硶鎵ц涔嬪悗浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event afterGetContent
     * @see UE.Editor:getContent()
     */
    /**
     * 鍦╣etAllHtml鏂规硶鎵ц鏃朵細瑙﹀彂璇ヤ簨浠�
     * @module UE
     * @class Editor
     * @event getAllHtml
     * @see UE.Editor:getAllHtml()
     */
    /**
     * 鍦╯etContent鏂规硶鎵ц涔嬪墠浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event beforeSetContent
     * @see UE.Editor:setContent(String)
     */
    /**
     * 鍦╯etContent鏂规硶鎵ц涔嬪悗浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event afterSetContent
     * @see UE.Editor:setContent(String)
     */
    /**
     * 姣忓綋缂栬緫鍣ㄥ唴閮ㄩ€夊尯鍙戠敓鏀瑰彉鏃讹紝灏嗚Е鍙戣浜嬩欢
     * @event selectionchange
     * @warning 璇ヤ簨浠剁殑瑙﹀彂闈炲父棰戠箒锛屼笉寤鸿鍦ㄨ浜嬩欢鐨勫鐞嗚繃绋嬩腑鍋氶噸閲忕骇鐨勫鐞�
     * @example
     * ```javascript
     * editor.addListener( 'selectionchange', function( editor ) {
     *     console.log('閫夊尯鍙戠敓鏀瑰彉');
     * }
     */
    /**
     * 鍦ㄦ墍鏈塻electionchange鐨勭洃鍚嚱鏁版墽琛屼箣鍓嶏紝浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event beforeSelectionChange
     * @see UE.Editor:selectionchange
     */
    /**
     * 鍦ㄦ墍鏈塻electionchange鐨勭洃鍚嚱鏁版墽琛屽畬涔嬪悗锛屼細瑙﹀彂璇ヤ簨浠�
     * @module UE
     * @class Editor
     * @event afterSelectionChange
     * @see UE.Editor:selectionchange
     */
    /**
     * 缂栬緫鍣ㄥ唴瀹瑰彂鐢熸敼鍙樻椂浼氳Е鍙戣浜嬩欢
     * @module UE
     * @class Editor
     * @event contentChange
     */


    /**
     * 浠ラ粯璁ゅ弬鏁版瀯寤轰竴涓紪杈戝櫒瀹炰緥
     * @constructor
     * @remind 閫氳繃 鏀规瀯閫犳柟娉曞疄渚嬪寲鐨勭紪杈戝櫒,涓嶅甫ui灞�.闇€瑕乺ender鍒颁竴涓鍣�,缂栬緫鍣ㄥ疄渚嬫墠鑳芥甯告覆鏌撳埌椤甸潰
     * @example
     * ```javascript
     * var editor = new UE.Editor();
     * editor.execCommand('blod');
     * ```
     * @see UE.Config
     */

    /**
     * 浠ョ粰瀹氱殑鍙傛暟闆嗗悎鍒涘缓涓€涓紪杈戝櫒瀹炰緥锛屽浜庢湭鎸囧畾鐨勫弬鏁帮紝灏嗗簲鐢ㄩ粯璁ゅ弬鏁般€�
     * @constructor
     * @remind 閫氳繃 鏀规瀯閫犳柟娉曞疄渚嬪寲鐨勭紪杈戝櫒,涓嶅甫ui灞�.闇€瑕乺ender鍒颁竴涓鍣�,缂栬緫鍣ㄥ疄渚嬫墠鑳芥甯告覆鏌撳埌椤甸潰
     * @param { Object } setting 鍒涘缓缂栬緫鍣ㄧ殑鍙傛暟
     * @example
     * ```javascript
     * var editor = new UE.Editor();
     * editor.execCommand('blod');
     * ```
     * @see UE.Config
     */
    var Editor = UE.Editor = function (options) {
      var me = this;
      me.uid = uid++;
      EventBase.call(me);
      me.commands = {};
      me.options = utils.extend(utils.clone(options || {}), UEDITOR_CONFIG, true);
      me.shortcutkeys = {};
      me.inputRules = [];
      me.outputRules = [];
      //璁剧疆榛樿鐨勫父鐢ㄥ睘鎬�
      me.setOpt(Editor.defaultOptions(me));

      /* 灏濊瘯寮傛鍔犺浇鍚庡彴閰嶇疆 */
      me.loadServerConfig();

      if(!utils.isEmptyObject(UE.I18N)){
        //淇敼榛樿鐨勮瑷€绫诲瀷
        me.options.lang = checkCurLang(UE.I18N);
        UE.plugin.load(me);
        langReadied(me);

      }else{
        utils.loadFile(document, {
          src: me.options.langPath + me.options.lang + "/" + me.options.lang + ".js",
          tag: "script",
          type: "text/javascript",
          defer: "defer"
        }, function () {
          UE.plugin.load(me);
          langReadied(me);
        });
      }

      UE.instants['ueditorInstant' + me.uid] = me;
    };
    Editor.prototype = {
      registerCommand : function(name,obj){
        this.commands[name] = obj;
      },
      /**
       * 缂栬緫鍣ㄥ澶栨彁渚涚殑鐩戝惉ready浜嬩欢鐨勬帴鍙ｏ紝 閫氳繃璋冪敤璇ユ柟娉曪紝杈惧埌鐨勬晥鏋滀笌鐩戝惉ready浜嬩欢鏄竴鑷寸殑
       * @method ready
       * @param { Function } fn 缂栬緫鍣╮eady涔嬪悗鎵€鎵ц鐨勫洖璋�, 濡傛灉鍦ㄦ敞鍐屼簨浠朵箣鍓嶇紪杈戝櫒宸茬粡ready锛屽皢浼�
       * 绔嬪嵆瑙﹀彂璇ュ洖璋冦€�
       * @remind 闇€瑕佺瓑寰呯紪杈戝櫒鍔犺浇瀹屾垚鍚庢墠鑳芥墽琛岀殑浠ｇ爜,鍙互浣跨敤璇ユ柟娉曚紶鍏�
       * @example
       * ```javascript
       * editor.ready( function( editor ) {
         *     editor.setContent('鍒濆鍖栧畬姣�');
         * } );
       * ```
       * @see UE.Editor.event:ready
       */
      ready: function (fn) {
        var me = this;
        if (fn) {
          me.isReady ? fn.apply(me) : me.addListener('ready', fn);
        }
      },

      /**
       * 璇ユ柟娉曟槸鎻愪緵缁欐彃浠堕噷闈娇鐢紝璁剧疆閰嶇疆椤归粯璁ゅ€�
       * @method setOpt
       * @warning 涓夊璁剧疆閰嶇疆椤圭殑浼樺厛绾�: 瀹炰緥鍖栨椂浼犲叆鍙傛暟 > setOpt()璁剧疆 > config鏂囦欢閲岃缃�
       * @warning 璇ユ柟娉曚粎渚涚紪杈戝櫒鎻掍欢鍐呴儴鍜岀紪杈戝櫒鍒濆鍖栨椂璋冪敤锛屽叾浠栧湴鏂逛笉鑳借皟鐢ㄣ€�
       * @param { String } key 缂栬緫鍣ㄧ殑鍙帴鍙楃殑閫夐」鍚嶇О
       * @param { * } val  璇ラ€夐」鍙帴鍙楃殑鍊�
       * @example
       * ```javascript
       * editor.setOpt( 'initContent', '娆㈣繋浣跨敤缂栬緫鍣�' );
       * ```
       */

      /**
       * 璇ユ柟娉曟槸鎻愪緵缁欐彃浠堕噷闈娇鐢紝浠key:value}闆嗗悎鐨勬柟寮忚缃彃浠跺唴鐢ㄥ埌鐨勯厤缃」榛樿鍊�
       * @method setOpt
       * @warning 涓夊璁剧疆閰嶇疆椤圭殑浼樺厛绾�: 瀹炰緥鍖栨椂浼犲叆鍙傛暟 > setOpt()璁剧疆 > config鏂囦欢閲岃缃�
       * @warning 璇ユ柟娉曚粎渚涚紪杈戝櫒鎻掍欢鍐呴儴鍜岀紪杈戝櫒鍒濆鍖栨椂璋冪敤锛屽叾浠栧湴鏂逛笉鑳借皟鐢ㄣ€�
       * @param { Object } options 灏嗚璁剧疆鐨勯€夐」鐨勯敭鍊煎瀵硅薄
       * @example
       * ```javascript
       * editor.setOpt( {
         *     'initContent': '娆㈣繋浣跨敤缂栬緫鍣�'
         * } );
       * ```
       */
      setOpt: function (key, val) {
        var obj = {};
        if (utils.isString(key)) {
          obj[key] = val
        } else {
          obj = key;
        }
        utils.extend(this.options, obj, true);
      },
      getOpt:function(key){
        return this.options[key]
      },
      /**
       * 閿€姣佺紪杈戝櫒瀹炰緥锛屼娇鐢╰extarea浠ｆ浛
       * @method destroy
       * @example
       * ```javascript
       * editor.destroy();
       * ```
       */
      destroy: function () {

        var me = this;
        me.fireEvent('destroy');
        var container = me.container.parentNode;
        var textarea = me.textarea;
        if (!textarea) {
          textarea = document.createElement('textarea');
          container.parentNode.insertBefore(textarea, container);
        } else {
          textarea.style.display = ''
        }

        textarea.style.width = me.iframe.offsetWidth + 'px';
        textarea.style.height = me.iframe.offsetHeight + 'px';
        textarea.value = me.getContent();
        textarea.id = me.key;
        container.innerHTML = '';
        domUtils.remove(container);
        var key = me.key;
        //trace:2004
        for (var p in me) {
          if (me.hasOwnProperty(p)) {
            delete this[p];
          }
        }
        UE.delEditor(key);
      },

      /**
       * 娓叉煋缂栬緫鍣ㄧ殑DOM鍒版寚瀹氬鍣�
       * @method render
       * @param { String } containerId 鎸囧畾涓€涓鍣↖D
       * @remind 鎵ц璇ユ柟娉�,浼氳Е鍙憆eady浜嬩欢
       * @warning 蹇呴』涓斿彧鑳借皟鐢ㄤ竴娆�
       */

      /**
       * 娓叉煋缂栬緫鍣ㄧ殑DOM鍒版寚瀹氬鍣�
       * @method render
       * @param { Element } containerDom 鐩存帴鎸囧畾瀹瑰櫒瀵硅薄
       * @remind 鎵ц璇ユ柟娉�,浼氳Е鍙憆eady浜嬩欢
       * @warning 蹇呴』涓斿彧鑳借皟鐢ㄤ竴娆�
       */
      render: function (container) {
        var me = this,
          options = me.options,
          getStyleValue=function(attr){
            return parseInt(domUtils.getComputedStyle(container,attr));
          };
        if (utils.isString(container)) {
          container = document.getElementById(container);
        }
        if (container) {
          if(options.initialFrameWidth){
            options.minFrameWidth = options.initialFrameWidth
          }else{
            options.minFrameWidth = options.initialFrameWidth = container.offsetWidth;
          }
          if(options.initialFrameHeight){
            options.minFrameHeight = options.initialFrameHeight
          }else{
            options.initialFrameHeight = options.minFrameHeight = container.offsetHeight;
          }

          container.style.width = /%$/.test(options.initialFrameWidth) ?  '100%' : options.initialFrameWidth-
          getStyleValue("padding-left")- getStyleValue("padding-right") +'px';
          container.style.height = /%$/.test(options.initialFrameHeight) ?  '100%' : options.initialFrameHeight -
          getStyleValue("padding-top")- getStyleValue("padding-bottom") +'px';

          container.style.zIndex = options.zIndex;

          var html = ( ie && browser.version < 9  ? '' : '<!DOCTYPE html>') +
            '<html xmlns=\'http://www.w3.org/1999/xhtml\' class=\'view\' ><head>' +
            '<style type=\'text/css\'>' +
            //璁剧疆鍥涘懆鐨勭暀杈�
            '.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}\n' +
            //璁剧疆榛樿瀛椾綋鍜屽瓧鍙�
            //font-family涓嶈兘鍛㈤殢渚挎敼锛屽湪safari涓媐illchar浼氭湁瑙ｆ瀽闂
            'body{margin:8px;font-family:sans-serif;font-size:16px;}' +
            //璁剧疆娈佃惤闂磋窛
            'p{margin:5px 0;}</style>' +
            ( options.iframeCssUrl ? '<link rel=\'stylesheet\' type=\'text/css\' href=\'' + utils.unhtml(options.iframeCssUrl) + '\'/>' : '' ) +
            (options.initialStyle ? '<style>' + options.initialStyle + '</style>' : '') +
            '</head><body class=\'view\' ></body>' +
            '<script type=\'text/javascript\' ' + (ie ? 'defer=\'defer\'' : '' ) +' id=\'_initialScript\'>' +
            'setTimeout(function(){editor = window.parent.UE.instants[\'ueditorInstant' + me.uid + '\'];editor._setup(document);},0);' +
            'var _tmpScript = document.getElementById(\'_initialScript\');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>';
          container.appendChild(domUtils.createElement(document, 'iframe', {
            id: 'ueditor_' + me.uid,
            width: "100%",
            height: "100%",
            frameborder: "0",
            //鍏堟敞閲婃帀浜嗭紝鍔犵殑鍘熷洜蹇樿浜嗭紝浣嗗紑鍚細鐩存帴瀵艰嚧鍏ㄥ睆妯″紡涓嬪唴瀹瑰鏃朵笉浼氬嚭鐜版粴鍔ㄦ潯
//                    scrolling :'no',
            src: 'javascript:void(function(){document.open();' + (options.customDomain && document.domain != location.hostname ?  'document.domain="' + document.domain + '";' : '') +
            'document.write("' + html + '");document.close();}())'
          }));
          container.style.overflow = 'hidden';
          //瑙ｅ喅濡傛灉鏄粰瀹氱殑鐧惧垎姣旓紝浼氬鑷撮珮搴︾畻涓嶅鐨勯棶棰�
          setTimeout(function(){
            if( /%$/.test(options.initialFrameWidth)){
              options.minFrameWidth = options.initialFrameWidth = container.offsetWidth;
              //濡傛灉杩欓噷缁欏畾瀹藉害锛屼細瀵艰嚧ie鍦ㄦ嫋鍔ㄧ獥鍙ｅぇ灏忔椂锛岀紪杈戝尯鍩熶笉闅忕潃鍙樺寲
//                        container.style.width = options.initialFrameWidth + 'px';
            }
            if(/%$/.test(options.initialFrameHeight)){
              options.minFrameHeight = options.initialFrameHeight = container.offsetHeight;
              container.style.height = options.initialFrameHeight + 'px';
            }
          })
        }
      },

      /**
       * 缂栬緫鍣ㄥ垵濮嬪寲
       * @method _setup
       * @private
       * @param { Element } doc 缂栬緫鍣↖frame涓殑鏂囨。瀵硅薄
       */
      _setup: function (doc) {

        var me = this,
          options = me.options;
        if (ie) {
          doc.body.disabled = true;
          doc.body.contentEditable = true;
          doc.body.disabled = false;
        } else {
          doc.body.contentEditable = true;
        }
        doc.body.spellcheck = false;
        me.document = doc;
        me.window = doc.defaultView || doc.parentWindow;
        me.iframe = me.window.frameElement;
        me.body = doc.body;
        me.selection = new dom.Selection(doc);
        //gecko鍒濆鍖栧氨鑳藉緱鍒皉ange,鏃犳硶鍒ゆ柇isFocus浜�
        var geckoSel;
        if (browser.gecko && (geckoSel = this.selection.getNative())) {
          geckoSel.removeAllRanges();
        }
        this._initEvents();
        //涓篺orm鎻愪氦鎻愪緵涓€涓殣钘忕殑textarea
        for (var form = this.iframe.parentNode; !domUtils.isBody(form); form = form.parentNode) {
          if (form.tagName == 'FORM') {
            me.form = form;
            if(me.options.autoSyncData){
              domUtils.on(me.window,'blur',function(){
                setValue(form,me);
              });
            }else{
              domUtils.on(form, 'submit', function () {
                setValue(this, me);
              });
            }
            break;
          }
        }
        if (options.initialContent) {
          if (options.autoClearinitialContent) {
            var oldExecCommand = me.execCommand;
            me.execCommand = function () {
              me.fireEvent('firstBeforeExecCommand');
              return oldExecCommand.apply(me, arguments);
            };
            this._setDefaultContent(options.initialContent);
          } else
            this.setContent(options.initialContent, false, true);
        }

        //缂栬緫鍣ㄤ笉鑳戒负绌哄唴瀹�

        if (domUtils.isEmptyNode(me.body)) {
          me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
        }
        //濡傛灉瑕佹眰focus, 灏辨妸鍏夋爣瀹氫綅鍒板唴瀹瑰紑濮�
        if (options.focus) {
          setTimeout(function () {
            me.focus(me.options.focusInEnd);
            //濡傛灉鑷姩娓呴櫎寮€鐫€锛屽氨涓嶉渶瑕佸仛selectionchange;
            !me.options.autoClearinitialContent && me._selectionChange();
          }, 0);
        }
        if (!me.container) {
          me.container = this.iframe.parentNode;
        }
        if (options.fullscreen && me.ui) {
          me.ui.setFullScreen(true);
        }

        try {
          me.document.execCommand('2D-position', false, false);
        } catch (e) {
        }
        try {
          me.document.execCommand('enableInlineTableEditing', false, false);
        } catch (e) {
        }
        try {
          me.document.execCommand('enableObjectResizing', false, false);
        } catch (e) {
        }

        //鎸傛帴蹇嵎閿�
        me._bindshortcutKeys();
        me.isReady = 1;
        me.fireEvent('ready');
        options.onready && options.onready.call(me);
        if (!browser.ie9below) {
          domUtils.on(me.window, ['blur', 'focus'], function (e) {
            //chrome涓嬩細鍑虹幇alt+tab鍒囨崲鏃讹紝瀵艰嚧閫夊尯浣嶇疆涓嶅
            if (e.type == 'blur') {
              me._bakRange = me.selection.getRange();
              try {
                me._bakNativeRange = me.selection.getNative().getRangeAt(0);
                me.selection.getNative().removeAllRanges();
              } catch (e) {
                me._bakNativeRange = null;
              }

            } else {
              try {
                me._bakRange && me._bakRange.select();
              } catch (e) {
              }
            }
          });
        }
        //trace:1518 ff3.6body涓嶅瀵涳紝浼氬鑷寸偣鍑荤┖鐧藉鏃犳硶鑾峰緱鐒︾偣
        if (browser.gecko && browser.version <= 10902) {
          //淇ff3.6鍒濆鍖栬繘鏉ワ紝涓嶈兘鐐瑰嚮鑾峰緱鐒︾偣
          me.body.contentEditable = false;
          setTimeout(function () {
            me.body.contentEditable = true;
          }, 100);
          setInterval(function () {
            me.body.style.height = me.iframe.offsetHeight - 20 + 'px'
          }, 100)
        }

        !options.isShow && me.setHide();
        options.readonly && me.setDisabled();
      },

      /**
       * 鍚屾鏁版嵁鍒扮紪杈戝櫒鎵€鍦ㄧ殑form
       * 浠庣紪杈戝櫒鐨勫鍣ㄨ妭鐐瑰悜涓婃煡鎵緁orm鍏冪礌锛岃嫢鎵惧埌锛屽氨鍚屾缂栬緫鍐呭鍒版壘鍒扮殑form閲岋紝涓烘彁浜ゆ暟鎹仛鍑嗗锛屼富瑕佺敤浜庢槸鎵嬪姩鎻愪氦鐨勬儏鍐�
       * 鍚庡彴鍙栧緱鏁版嵁鐨勯敭鍊硷紝浣跨敤浣犲鍣ㄤ笂鐨刵ame灞炴€э紝濡傛灉娌℃湁灏变娇鐢ㄥ弬鏁伴噷鐨則extarea椤�
       * @method sync
       * @example
       * ```javascript
       * editor.sync();
       * form.sumbit(); //form鍙橀噺宸茬粡鎸囧悜浜唂orm鍏冪礌
       * ```
       */

      /**
       * 鏍规嵁浼犲叆鐨刦ormId锛屽湪椤甸潰涓婃煡鎵捐鍚屾鏁版嵁鐨勮〃鍗曪紝鑻ユ壘鍒帮紝灏卞悓姝ョ紪杈戝唴瀹瑰埌鎵惧埌鐨刦orm閲岋紝涓烘彁浜ゆ暟鎹仛鍑嗗
       * 鍚庡彴鍙栧緱鏁版嵁鐨勯敭鍊硷紝璇ラ敭鍊奸粯璁や娇鐢ㄧ粰瀹氱殑缂栬緫鍣ㄥ鍣ㄧ殑name灞炴€э紝濡傛灉娌℃湁name灞炴€у垯浣跨敤鍙傛暟椤归噷缁欏畾鐨勨€渢extarea鈥濋」
       * @method sync
       * @param { String } formID 鎸囧畾涓€涓鍚屾鏁版嵁鐨刦orm鐨刬d,缂栬緫鍣ㄧ殑鏁版嵁浼氬悓姝ュ埌浣犳寚瀹歠orm涓�
       */
      sync: function (formId) {
        var me = this,
          form = formId ? document.getElementById(formId) :
            domUtils.findParent(me.iframe.parentNode, function (node) {
              return node.tagName == 'FORM'
            }, true);
        form && setValue(form, me);
      },

      /**
       * 璁剧疆缂栬緫鍣ㄩ珮搴�
       * @method setHeight
       * @remind 褰撻厤缃」autoHeightEnabled涓虹湡鏃�,璇ユ柟娉曟棤鏁�
       * @param { Number } number 璁剧疆鐨勯珮搴﹀€硷紝绾暟鍊硷紝涓嶅甫鍗曚綅
       * @example
       * ```javascript
       * editor.setHeight(number);
       * ```
       */
      setHeight: function (height,notSetHeight) {
        if (height !== parseInt(this.iframe.parentNode.style.height)) {
          this.iframe.parentNode.style.height = height + 'px';
        }
        !notSetHeight && (this.options.minFrameHeight = this.options.initialFrameHeight = height);
        this.body.style.height = height + 'px';
        !notSetHeight && this.trigger('setHeight')
      },

      /**
       * 涓虹紪杈戝櫒鐨勭紪杈戝懡浠ゆ彁渚涘揩鎹烽敭
       * 杩欎釜鎺ュ彛鏄负鎻掍欢鎵╁睍鎻愪緵鐨勬帴鍙�,涓昏鏄负鏂版坊鍔犵殑鎻掍欢锛屽鏋滈渶瑕佹坊鍔犲揩鎹烽敭锛屾墍鎻愪緵鐨勬帴鍙�
       * @method addshortcutkey
       * @param { Object } keyset 鍛戒护鍚嶅拰蹇嵎閿敭鍊煎瀵硅薄锛屽涓寜閽殑蹇嵎閿敤鈥滐紜鈥濆垎闅�
       * @example
       * ```javascript
       * editor.addshortcutkey({
         *     "Bold" : "ctrl+66",//^B
         *     "Italic" : "ctrl+73", //^I
         * });
       * ```
       */
      /**
       * 杩欎釜鎺ュ彛鏄负鎻掍欢鎵╁睍鎻愪緵鐨勬帴鍙�,涓昏鏄负鏂版坊鍔犵殑鎻掍欢锛屽鏋滈渶瑕佹坊鍔犲揩鎹烽敭锛屾墍鎻愪緵鐨勬帴鍙�
       * @method addshortcutkey
       * @param { String } cmd 瑙﹀彂蹇嵎閿椂锛屽搷搴旂殑鍛戒护
       * @param { String } keys 蹇嵎閿殑瀛楃涓诧紝澶氫釜鎸夐挳鐢ㄢ€滐紜鈥濆垎闅�
       * @example
       * ```javascript
       * editor.addshortcutkey("Underline", "ctrl+85"); //^U
       * ```
       */
      addshortcutkey: function (cmd, keys) {
        var obj = {};
        if (keys) {
          obj[cmd] = keys
        } else {
          obj = cmd;
        }
        utils.extend(this.shortcutkeys, obj)
      },

      /**
       * 瀵圭紪杈戝櫒璁剧疆keydown浜嬩欢鐩戝惉锛岀粦瀹氬揩鎹烽敭鍜屽懡浠わ紝褰撳揩鎹烽敭缁勫悎瑙﹀彂鎴愬姛锛屼細鍝嶅簲瀵瑰簲鐨勫懡浠�
       * @method _bindshortcutKeys
       * @private
       */
      _bindshortcutKeys: function () {
        var me = this, shortcutkeys = this.shortcutkeys;
        me.addListener('keydown', function (type, e) {
          var keyCode = e.keyCode || e.which;
          for (var i in shortcutkeys) {
            var tmp = shortcutkeys[i].split(',');
            for (var t = 0, ti; ti = tmp[t++];) {
              ti = ti.split(':');
              var key = ti[0], param = ti[1];
              if (/^(ctrl)(\+shift)?\+(\d+)$/.test(key.toLowerCase()) || /^(\d+)$/.test(key)) {
                if (( (RegExp.$1 == 'ctrl' ? (e.ctrlKey || e.metaKey) : 0)
                    && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                    && keyCode == RegExp.$3
                  ) ||
                  keyCode == RegExp.$1
                ) {
                  if (me.queryCommandState(i,param) != -1)
                    me.execCommand(i, param);
                  domUtils.preventDefault(e);
                }
              }
            }

          }
        });
      },

      /**
       * 鑾峰彇缂栬緫鍣ㄧ殑鍐呭
       * @method getContent
       * @warning 璇ユ柟娉曡幏鍙栧埌鐨勬槸缁忚繃缂栬緫鍣ㄥ唴缃殑杩囨护瑙勫垯杩涜杩囨护鍚庡緱鍒扮殑鍐呭
       * @return { String } 缂栬緫鍣ㄧ殑鍐呭瀛楃涓�, 濡傛灉缂栬緫鍣ㄧ殑鍐呭涓虹┖锛屾垨鑰呮槸绌虹殑鏍囩鍐呭锛堝:鈥�&lt;p&gt;&lt;br/&gt;&lt;/p&gt;鈥滐級锛� 鍒欒繑鍥炵┖瀛楃涓�
       * @example
       * ```javascript
       * //缂栬緫鍣╤tml鍐呭:<p>1<strong>2<em>34</em>5</strong>6</p>
       * var content = editor.getContent(); //杩斿洖鍊�:<p>1<strong>2<em>34</em>5</strong>6</p>
       * ```
       */

      /**
       * 鑾峰彇缂栬緫鍣ㄧ殑鍐呭銆� 鍙互閫氳繃鍙傛暟瀹氫箟缂栬緫鍣ㄥ唴缃殑鍒ょ┖瑙勫垯
       * @method getContent
       * @param { Function } fn 鑷畾鐨勫垽绌鸿鍒欙紝 瑕佹眰璇ユ柟娉曡繑鍥炰竴涓猙oolean绫诲瀷鐨勫€硷紝
       *                      浠ｈ〃褰撳墠缂栬緫鍣ㄧ殑鍐呭鏄惁绌猴紝
       *                      濡傛灉杩斿洖true锛� 鍒欒鏂规硶灏嗙洿鎺ヨ繑鍥炵┖瀛楃涓诧紱濡傛灉杩斿洖false锛屽垯缂栬緫鍣ㄥ皢杩斿洖
       *                      缁忚繃鍐呯疆杩囨护瑙勫垯澶勭悊鍚庣殑鍐呭銆�
       * @remind 璇ユ柟娉曞湪澶勭悊鍖呭惈鏈夊垵濮嬪寲鍐呭鐨勬椂鍊欒兘璧峰埌寰堝ソ鐨勪綔鐢ㄣ€�
       * @warning 璇ユ柟娉曡幏鍙栧埌鐨勬槸缁忚繃缂栬緫鍣ㄥ唴缃殑杩囨护瑙勫垯杩涜杩囨护鍚庡緱鍒扮殑鍐呭
       * @return { String } 缂栬緫鍣ㄧ殑鍐呭瀛楃涓�
       * @example
       * ```javascript
       * // editor 鏄竴涓紪杈戝櫒鐨勫疄渚�
       * var content = editor.getContent( function ( editor ) {
         *      return editor.body.innerHTML === '娆㈣繋浣跨敤UEditor'; //杩斿洖绌哄瓧绗︿覆
         * } );
       * ```
       */
      getContent: function (cmd, fn,notSetCursor,ignoreBlank,formatter) {
        var me = this;
        if (cmd && utils.isFunction(cmd)) {
          fn = cmd;
          cmd = '';
        }
        if (fn ? !fn() : !this.hasContents()) {
          return '';
        }
        me.fireEvent('beforegetcontent');
        var root = UE.htmlparser(me.body.innerHTML,ignoreBlank);
        me.filterOutputRule(root);
        me.fireEvent('aftergetcontent', cmd,root);
        return  root.toHtml(formatter);
      },

      /**
       * 鍙栧緱瀹屾暣鐨刪tml浠ｇ爜锛屽彲浠ョ洿鎺ユ樉绀烘垚瀹屾暣鐨刪tml鏂囨。
       * @method getAllHtml
       * @return { String } 缂栬緫鍣ㄧ殑鍐呭html鏂囨。瀛楃涓�
       * @eaxmple
       * ```javascript
       * editor.getAllHtml(); //杩斿洖鏍煎紡澶ц嚧鏄�: <html><head>...</head><body>...</body></html>
       * ```
       */
      getAllHtml: function () {
        var me = this,
          headHtml = [],
          html = '';
        me.fireEvent('getAllHtml', headHtml);
        if (browser.ie && browser.version > 8) {
          var headHtmlForIE9 = '';
          utils.each(me.document.styleSheets, function (si) {
            headHtmlForIE9 += ( si.href ? '<link rel="stylesheet" type="text/css" href="' + si.href + '" />' : '<style>' + si.cssText + '</style>');
          });
          utils.each(me.document.getElementsByTagName('script'), function (si) {
            headHtmlForIE9 += si.outerHTML;
          });

        }
        return '<html><head>' + (me.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + me.options.charset + '"/>' : '')
          + (headHtmlForIE9 || me.document.getElementsByTagName('head')[0].innerHTML) + headHtml.join('\n') + '</head>'
          + '<body ' + (ie && browser.version < 9 ? 'class="view"' : '') + '>' + me.getContent(null, null, true) + '</body></html>';
      },

      /**
       * 寰楀埌缂栬緫鍣ㄧ殑绾枃鏈唴瀹癸紝浣嗕細淇濈暀娈佃惤鏍煎紡
       * @method getPlainTxt
       * @return { String } 缂栬緫鍣ㄥ甫娈佃惤鏍煎紡鐨勭函鏂囨湰鍐呭瀛楃涓�
       * @example
       * ```javascript
       * //缂栬緫鍣╤tml鍐呭:<p><strong>1</strong></p><p><strong>2</strong></p>
       * console.log(editor.getPlainTxt()); //杈撳嚭:"1\n2\n
       * ```
       */
      getPlainTxt: function () {
        var reg = new RegExp(domUtils.fillChar, 'g'),
          html = this.body.innerHTML.replace(/[\n\r]/g, '');//ie瑕佸厛鍘讳簡\n鍦ㄥ鐞�
        html = html.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n')
          .replace(/<br\/?>/gi, '\n')
          .replace(/<[^>/]+>/g, '')
          .replace(/(\n)?<\/([^>]+)>/g, function (a, b, c) {
            return dtd.$block[c] ? '\n' : b ? b : '';
          });
        //鍙栧嚭鏉ョ殑绌烘牸浼氭湁c2a0浼氬彉鎴愪贡鐮侊紝澶勭悊杩欑鎯呭喌\u00a0
        return html.replace(reg, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
      },

      /**
       * 鑾峰彇缂栬緫鍣ㄤ腑鐨勭函鏂囨湰鍐呭,娌℃湁娈佃惤鏍煎紡
       * @method getContentTxt
       * @return { String } 缂栬緫鍣ㄤ笉甯︽钀芥牸寮忕殑绾枃鏈唴瀹瑰瓧绗︿覆
       * @example
       * ```javascript
       * //缂栬緫鍣╤tml鍐呭:<p><strong>1</strong></p><p><strong>2</strong></p>
       * console.log(editor.getPlainTxt()); //杈撳嚭:"12
       * ```
       */
      getContentTxt: function () {
        var reg = new RegExp(domUtils.fillChar, 'g');
        //鍙栧嚭鏉ョ殑绌烘牸浼氭湁c2a0浼氬彉鎴愪贡鐮侊紝澶勭悊杩欑鎯呭喌\u00a0
        return this.body[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').replace(/\u00a0/g, ' ');
      },

      /**
       * 璁剧疆缂栬緫鍣ㄧ殑鍐呭锛屽彲淇敼缂栬緫鍣ㄥ綋鍓嶇殑html鍐呭
       * @method setContent
       * @warning 閫氳繃璇ユ柟娉曟彃鍏ョ殑鍐呭锛屾槸缁忚繃缂栬緫鍣ㄥ唴缃殑杩囨护瑙勫垯杩涜杩囨护鍚庡緱鍒扮殑鍐呭
       * @warning 璇ユ柟娉曚細瑙﹀彂selectionchange浜嬩欢
       * @param { String } html 瑕佹彃鍏ョ殑html鍐呭
       * @example
       * ```javascript
       * editor.getContent('<p>test</p>');
       * ```
       */

      /**
       * 璁剧疆缂栬緫鍣ㄧ殑鍐呭锛屽彲淇敼缂栬緫鍣ㄥ綋鍓嶇殑html鍐呭
       * @method setContent
       * @warning 閫氳繃璇ユ柟娉曟彃鍏ョ殑鍐呭锛屾槸缁忚繃缂栬緫鍣ㄥ唴缃殑杩囨护瑙勫垯杩涜杩囨护鍚庡緱鍒扮殑鍐呭
       * @warning 璇ユ柟娉曚細瑙﹀彂selectionchange浜嬩欢
       * @param { String } html 瑕佹彃鍏ョ殑html鍐呭
       * @param { Boolean } isAppendTo 鑻ヤ紶鍏rue锛屼笉娓呯┖鍘熸潵鐨勫唴瀹癸紝鍦ㄦ渶鍚庢彃鍏ュ唴瀹癸紝鍚﹀垯锛屾竻绌哄唴瀹瑰啀鎻掑叆
       * @example
       * ```javascript
       * //鍋囪璁剧疆鍓嶇殑缂栬緫鍣ㄥ唴瀹规槸 <p>old text</p>
       * editor.setContent('<p>new text</p>', true); //鎻掑叆鐨勭粨鏋滄槸<p>old text</p><p>new text</p>
       * ```
       */
      setContent: function (html, isAppendTo, notFireSelectionchange) {
        var me = this;

        me.fireEvent('beforesetcontent', html);
        var root = UE.htmlparser(html);
        me.filterInputRule(root);
        html = root.toHtml();

        me.body.innerHTML = (isAppendTo ? me.body.innerHTML : '') + html;


        function isCdataDiv(node){
          return  node.tagName == 'DIV' && node.getAttribute('cdata_tag');
        }
        //缁欐枃鏈垨鑰卛nline鑺傜偣濂梡鏍囩
        if (me.options.enterTag == 'p') {

          var child = this.body.firstChild, tmpNode;
          if (!child || child.nodeType == 1 &&
            (dtd.$cdata[child.tagName] || isCdataDiv(child) ||
              domUtils.isCustomeNode(child)
            )
            && child === this.body.lastChild) {
            this.body.innerHTML = '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>' + this.body.innerHTML;

          } else {
            var p = me.document.createElement('p');
            while (child) {
              while (child && (child.nodeType == 3 || child.nodeType == 1 && dtd.p[child.tagName] && !dtd.$cdata[child.tagName])) {
                tmpNode = child.nextSibling;
                p.appendChild(child);
                child = tmpNode;
              }
              if (p.firstChild) {
                if (!child) {
                  me.body.appendChild(p);
                  break;
                } else {
                  child.parentNode.insertBefore(p, child);
                  p = me.document.createElement('p');
                }
              }
              child = child.nextSibling;
            }
          }
        }
        me.fireEvent('aftersetcontent');
        me.fireEvent('contentchange');

        !notFireSelectionchange && me._selectionChange();
        //娓呴櫎淇濆瓨鐨勯€夊尯
        me._bakRange = me._bakIERange = me._bakNativeRange = null;
        //trace:1742 setContent鍚巊ecko鑳藉緱鍒扮劍鐐归棶棰�
        var geckoSel;
        if (browser.gecko && (geckoSel = this.selection.getNative())) {
          geckoSel.removeAllRanges();
        }
        if(me.options.autoSyncData){
          me.form && setValue(me.form,me);
        }
      },

      /**
       * 璁╃紪杈戝櫒鑾峰緱鐒︾偣锛岄粯璁ocus鍒扮紪杈戝櫒澶撮儴
       * @method focus
       * @example
       * ```javascript
       * editor.focus()
       * ```
       */

      /**
       * 璁╃紪杈戝櫒鑾峰緱鐒︾偣锛宼oEnd纭畾focus浣嶇疆
       * @method focus
       * @param { Boolean } toEnd 榛樿focus鍒扮紪杈戝櫒澶撮儴锛宼oEnd涓簍rue鏃秄ocus鍒板唴瀹瑰熬閮�
       * @example
       * ```javascript
       * editor.focus(true)
       * ```
       */
      focus: function (toEnd) {
        try {
          var me = this,
            rng = me.selection.getRange();
          if (toEnd) {
            var node = me.body.lastChild;
            if(node && node.nodeType == 1 && !dtd.$empty[node.tagName]){
              if(domUtils.isEmptyBlock(node)){
                rng.setStartAtFirst(node)
              }else{
                rng.setStartAtLast(node)
              }
              rng.collapse(true);
            }
            rng.setCursor(true);
          } else {
            if(!rng.collapsed && domUtils.isBody(rng.startContainer) && rng.startOffset == 0){

              var node = me.body.firstChild;
              if(node && node.nodeType == 1 && !dtd.$empty[node.tagName]){
                rng.setStartAtFirst(node).collapse(true);
              }
            }

            rng.select(true);

          }
          this.fireEvent('focus selectionchange');
        } catch (e) {
        }

      },
      isFocus:function(){
        return this.selection.isFocus();
      },
      blur:function(){
        var sel = this.selection.getNative();
        if(sel.empty && browser.ie){
          var nativeRng = document.body.createTextRange();
          nativeRng.moveToElementText(document.body);
          nativeRng.collapse(true);
          nativeRng.select();
          sel.empty()
        }else{
          sel.removeAllRanges()
        }

        //this.fireEvent('blur selectionchange');
      },
      /**
       * 鍒濆鍖朥E浜嬩欢鍙婇儴鍒嗕簨浠朵唬鐞�
       * @method _initEvents
       * @private
       */
      _initEvents: function () {
        var me = this,
          doc = me.document,
          win = me.window;
        me._proxyDomEvent = utils.bind(me._proxyDomEvent, me);
        domUtils.on(doc, ['click', 'contextmenu', 'mousedown', 'keydown', 'keyup', 'keypress', 'mouseup', 'mouseover', 'mouseout', 'selectstart'], me._proxyDomEvent);
        domUtils.on(win, ['focus', 'blur'], me._proxyDomEvent);
        domUtils.on(me.body,'drop',function(e){
          //闃绘ff涓嬮粯璁ょ殑寮瑰嚭鏂伴〉闈㈡墦寮€鍥剧墖
          if(browser.gecko && e.stopPropagation) { e.stopPropagation(); }
          me.fireEvent('contentchange')
        });
        domUtils.on(doc, ['mouseup', 'keydown'], function (evt) {
          //鐗规畩閿笉瑙﹀彂selectionchange
          if (evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey)) {
            return;
          }
          if (evt.button == 2)return;
          me._selectionChange(250, evt);
        });
      },
      /**
       * 瑙﹀彂浜嬩欢浠ｇ悊
       * @method _proxyDomEvent
       * @private
       * @return { * } fireEvent鐨勮繑鍥炲€�
       * @see UE.EventBase:fireEvent(String)
       */
      _proxyDomEvent: function (evt) {
        if(this.fireEvent('before' + evt.type.replace(/^on/, '').toLowerCase()) === false){
          return false;
        }
        if(this.fireEvent(evt.type.replace(/^on/, ''), evt) === false){
          return false;
        }
        return this.fireEvent('after' + evt.type.replace(/^on/, '').toLowerCase())
      },
      /**
       * 鍙樺寲閫夊尯
       * @method _selectionChange
       * @private
       */
      _selectionChange: function (delay, evt) {
        var me = this;
        //鏈夊厜鏍囨墠鍋歴electionchange 涓轰簡瑙ｅ喅鏈猣ocus鏃剁偣鍑籹ource涓嶈兘瑙﹀彂鏇存敼宸ュ叿鏍忕姸鎬佺殑闂锛坰ource鍛戒护notNeedUndo=1锛�
//            if ( !me.selection.isFocus() ){
//                return;
//            }


        var hackForMouseUp = false;
        var mouseX, mouseY;
        if (browser.ie && browser.version < 9 && evt && evt.type == 'mouseup') {
          var range = this.selection.getRange();
          if (!range.collapsed) {
            hackForMouseUp = true;
            mouseX = evt.clientX;
            mouseY = evt.clientY;
          }
        }
        clearTimeout(_selectionChangeTimer);
        _selectionChangeTimer = setTimeout(function () {
          if (!me.selection || !me.selection.getNative()) {
            return;
          }
          //淇涓€涓狪E涓嬬殑bug: 榧犳爣鐐瑰嚮涓€娈靛凡閫夋嫨鐨勬枃鏈腑闂存椂锛屽彲鑳藉湪mouseup鍚庣殑涓€娈垫椂闂村唴鍙栧埌鐨剅ange鏄湪selection鐨則ype涓篘one涓嬬殑閿欒鍊�.
          //IE涓嬪鏋滅敤鎴锋槸鎷栨嫿涓€娈靛凡閫夋嫨鏂囨湰锛屽垯涓嶄細瑙﹀彂mouseup浜嬩欢锛屾墍浠ヨ繖閲岀殑鐗规畩澶勭悊涓嶄細瀵瑰叾鏈夊奖鍝�
          var ieRange;
          if (hackForMouseUp && me.selection.getNative().type == 'None') {
            ieRange = me.document.body.createTextRange();
            try {
              ieRange.moveToPoint(mouseX, mouseY);
            } catch (ex) {
              ieRange = null;
            }
          }
          var bakGetIERange;
          if (ieRange) {
            bakGetIERange = me.selection.getIERange;
            me.selection.getIERange = function () {
              return ieRange;
            };
          }
          me.selection.cache();
          if (bakGetIERange) {
            me.selection.getIERange = bakGetIERange;
          }
          if (me.selection._cachedRange && me.selection._cachedStartElement) {
            me.fireEvent('beforeselectionchange');
            // 绗簩涓弬鏁癱auseByUi涓簍rue浠ｈ〃鐢辩敤鎴蜂氦浜掗€犳垚鐨剆electionchange.
            me.fireEvent('selectionchange', !!evt);
            me.fireEvent('afterselectionchange');
            me.selection.clear();
          }
        }, delay || 50);
      },

      /**
       * 鎵ц缂栬緫鍛戒护
       * @method _callCmdFn
       * @private
       * @param { String } fnName 鍑芥暟鍚嶇О
       * @param { * } args 浼犵粰鍛戒护鍑芥暟鐨勫弬鏁�
       * @return { * } 杩斿洖鍛戒护鍑芥暟杩愯鐨勮繑鍥炲€�
       */
      _callCmdFn: function (fnName, args) {
        var cmdName = args[0].toLowerCase(),
          cmd, cmdFn;
        cmd = this.commands[cmdName] || UE.commands[cmdName];
        cmdFn = cmd && cmd[fnName];
        //娌℃湁querycommandstate鎴栬€呮病鏈塩ommand鐨勯兘榛樿杩斿洖0
        if ((!cmd || !cmdFn) && fnName == 'queryCommandState') {
          return 0;
        } else if (cmdFn) {
          return cmdFn.apply(this, args);
        }
      },

      /**
       * 鎵ц缂栬緫鍛戒护cmdName锛屽畬鎴愬瘜鏂囨湰缂栬緫鏁堟灉
       * @method execCommand
       * @param { String } cmdName 闇€瑕佹墽琛岀殑鍛戒护
       * @remind 鍏蜂綋鍛戒护鐨勪娇鐢ㄨ鍙傝€�<a href="#COMMAND.LIST">鍛戒护鍒楄〃</a>
       * @return { * } 杩斿洖鍛戒护鍑芥暟杩愯鐨勮繑鍥炲€�
       * @example
       * ```javascript
       * editor.execCommand(cmdName);
       * ```
       */
      execCommand: function (cmdName) {
        cmdName = cmdName.toLowerCase();
        var me = this,
          result,
          cmd = me.commands[cmdName] || UE.commands[cmdName];
        if (!cmd || !cmd.execCommand) {
          return null;
        }
        if (!cmd.notNeedUndo && !me.__hasEnterExecCommand) {
          me.__hasEnterExecCommand = true;
          if (me.queryCommandState.apply(me,arguments) != -1) {
            me.fireEvent('saveScene');
            me.fireEvent.apply(me, ['beforeexeccommand', cmdName].concat(arguments));
            result = this._callCmdFn('execCommand', arguments);
            //淇濆瓨鍦烘櫙鏃讹紝鍋氫簡鍐呭瀵规瘮锛屽啀鐪嬫槸鍚﹁繘琛宑ontentchange瑙﹀彂锛岃繖閲屽瑙﹀彂浜嗕竴娆★紝鍘绘帀
//                    (!cmd.ignoreContentChange && !me._ignoreContentChange) && me.fireEvent('contentchange');
            me.fireEvent.apply(me, ['afterexeccommand', cmdName].concat(arguments));
            me.fireEvent('saveScene');
          }
          me.__hasEnterExecCommand = false;
        } else {
          result = this._callCmdFn('execCommand', arguments);
          (!me.__hasEnterExecCommand && !cmd.ignoreContentChange && !me._ignoreContentChange) && me.fireEvent('contentchange')
        }
        (!me.__hasEnterExecCommand && !cmd.ignoreContentChange && !me._ignoreContentChange) && me._selectionChange();
        return result;
      },

      /**
       * 鏍规嵁浼犲叆鐨刢ommand鍛戒护锛屾煡閫夌紪杈戝櫒褰撳墠鐨勯€夊尯锛岃繑鍥炲懡浠ょ殑鐘舵€�
       * @method  queryCommandState
       * @param { String } cmdName 闇€瑕佹煡璇㈢殑鍛戒护鍚嶇О
       * @remind 鍏蜂綋鍛戒护鐨勪娇鐢ㄨ鍙傝€�<a href="#COMMAND.LIST">鍛戒护鍒楄〃</a>
       * @return { Number } number 杩斿洖鏀惧墠鍛戒护鐨勭姸鎬侊紝杩斿洖鍊间笁绉嶆儏鍐碉細(-1|0|1)
       * @example
       * ```javascript
       * editor.queryCommandState(cmdName)  => (-1|0|1)
       * ```
       * @see COMMAND.LIST
       */
      queryCommandState: function (cmdName) {
        return this._callCmdFn('queryCommandState', arguments);
      },

      /**
       * 鏍规嵁浼犲叆鐨刢ommand鍛戒护锛屾煡閫夌紪杈戝櫒褰撳墠鐨勯€夊尯锛屾牴鎹懡浠よ繑鍥炵浉鍏崇殑鍊�
       * @method queryCommandValue
       * @param { String } cmdName 闇€瑕佹煡璇㈢殑鍛戒护鍚嶇О
       * @remind 鍏蜂綋鍛戒护鐨勪娇鐢ㄨ鍙傝€�<a href="#COMMAND.LIST">鍛戒护鍒楄〃</a>
       * @remind 鍙湁閮ㄥ垎鎻掍欢鏈夋鏂规硶
       * @return { * } 杩斿洖姣忎釜鍛戒护鐗瑰畾鐨勫綋鍓嶇姸鎬佸€�
       * @grammar editor.queryCommandValue(cmdName)  =>  {*}
       * @see COMMAND.LIST
       */
      queryCommandValue: function (cmdName) {
        return this._callCmdFn('queryCommandValue', arguments);
      },

      /**
       * 妫€鏌ョ紪杈戝尯鍩熶腑鏄惁鏈夊唴瀹�
       * @method  hasContents
       * @remind 榛樿鏈夋枃鏈唴瀹癸紝鎴栬€呮湁浠ヤ笅鑺傜偣閮戒笉璁や负鏄┖
       * table,ul,ol,dl,iframe,area,base,col,hr,img,embed,input,link,meta,param
       * @return { Boolean } 妫€鏌ユ湁鍐呭杩斿洖true锛屽惁鍒欒繑鍥瀎alse
       * @example
       * ```javascript
       * editor.hasContents()
       * ```
       */

      /**
       * 妫€鏌ョ紪杈戝尯鍩熶腑鏄惁鏈夊唴瀹癸紝鑻ュ寘鍚弬鏁皌ags涓殑鑺傜偣绫诲瀷锛岀洿鎺ヨ繑鍥瀟rue
       * @method  hasContents
       * @param { Array } tags 浼犲叆鏁扮粍鍒ゆ柇鏃剁敤鍒扮殑鑺傜偣绫诲瀷
       * @return { Boolean } 鑻ユ枃妗ｄ腑鍖呭惈tags鏁扮粍閲屽搴旂殑tag锛岃繑鍥瀟rue锛屽惁鍒欒繑鍥瀎alse
       * @example
       * ```javascript
       * editor.hasContents(['span']);
       * ```
       */
      hasContents: function (tags) {
        if (tags) {
          for (var i = 0, ci; ci = tags[i++];) {
            if (this.document.getElementsByTagName(ci).length > 0) {
              return true;
            }
          }
        }
        if (!domUtils.isEmptyBlock(this.body)) {
          return true
        }
        //闅忔椂娣诲姞,瀹氫箟鐨勭壒娈婃爣绛惧鏋滃瓨鍦紝涓嶈兘璁や负鏄┖
        tags = ['div'];
        for (i = 0; ci = tags[i++];) {
          var nodes = domUtils.getElementsByTagName(this.document, ci);
          for (var n = 0, cn; cn = nodes[n++];) {
            if (domUtils.isCustomeNode(cn)) {
              return true;
            }
          }
        }
        return false;
      },

      /**
       * 閲嶇疆缂栬緫鍣紝鍙敤鏉ュ仛澶氫釜tab浣跨敤鍚屼竴涓紪杈戝櫒瀹炰緥
       * @method  reset
       * @remind 姝ゆ柟娉曚細娓呯┖缂栬緫鍣ㄥ唴瀹癸紝娓呯┖鍥為€€鍒楄〃锛屼細瑙﹀彂reset浜嬩欢
       * @example
       * ```javascript
       * editor.reset()
       * ```
       */
      reset: function () {
        this.fireEvent('reset');
      },

      /**
       * 璁剧疆褰撳墠缂栬緫鍖哄煙鍙互缂栬緫
       * @method setEnabled
       * @example
       * ```javascript
       * editor.setEnabled()
       * ```
       */
      setEnabled: function () {
        var me = this, range;
        if (me.body.contentEditable == 'false') {
          me.body.contentEditable = true;
          range = me.selection.getRange();
          //鏈夊彲鑳藉唴瀹逛涪澶变簡
          try {
            range.moveToBookmark(me.lastBk);
            delete me.lastBk
          } catch (e) {
            range.setStartAtFirst(me.body).collapse(true)
          }
          range.select(true);
          if (me.bkqueryCommandState) {
            me.queryCommandState = me.bkqueryCommandState;
            delete me.bkqueryCommandState;
          }
          if (me.bkqueryCommandValue) {
            me.queryCommandValue = me.bkqueryCommandValue;
            delete me.bkqueryCommandValue;
          }
          me.fireEvent('selectionchange');
        }
      },
      enable: function () {
        return this.setEnabled();
      },

      /** 璁剧疆褰撳墠缂栬緫鍖哄煙涓嶅彲缂栬緫
       * @method setDisabled
       */

      /** 璁剧疆褰撳墠缂栬緫鍖哄煙涓嶅彲缂栬緫,except涓殑鍛戒护闄ゅ
       * @method setDisabled
       * @param { String } except 渚嬪鍛戒护鐨勫瓧绗︿覆
       * @remind 鍗充娇璁剧疆浜哾isable锛屾澶勯厤缃殑渚嬪鍛戒护浠嶇劧鍙互鎵ц
       * @example
       * ```javascript
       * editor.setDisabled('bold'); //绂佺敤宸ュ叿鏍忎腑闄ゅ姞绮椾箣澶栫殑鎵€鏈夊姛鑳�
       * ```
       */

      /** 璁剧疆褰撳墠缂栬緫鍖哄煙涓嶅彲缂栬緫,except涓殑鍛戒护闄ゅ
       * @method setDisabled
       * @param { Array } except 渚嬪鍛戒护鐨勫瓧绗︿覆鏁扮粍锛屾暟缁勪腑鐨勫懡浠や粛鐒跺彲浠ユ墽琛�
       * @remind 鍗充娇璁剧疆浜哾isable锛屾澶勯厤缃殑渚嬪鍛戒护浠嶇劧鍙互鎵ц
       * @example
       * ```javascript
       * editor.setDisabled(['bold','insertimage']); //绂佺敤宸ュ叿鏍忎腑闄ゅ姞绮楀拰鎻掑叆鍥剧墖涔嬪鐨勬墍鏈夊姛鑳�
       * ```
       */
      setDisabled: function (except) {
        var me = this;
        except = except ? utils.isArray(except) ? except : [except] : [];
        if (me.body.contentEditable == 'true') {
          if (!me.lastBk) {
            me.lastBk = me.selection.getRange().createBookmark(true);
          }
          me.body.contentEditable = false;
          me.bkqueryCommandState = me.queryCommandState;
          me.bkqueryCommandValue = me.queryCommandValue;
          me.queryCommandState = function (type) {
            if (utils.indexOf(except, type) != -1) {
              return me.bkqueryCommandState.apply(me, arguments);
            }
            return -1;
          };
          me.queryCommandValue = function (type) {
            if (utils.indexOf(except, type) != -1) {
              return me.bkqueryCommandValue.apply(me, arguments);
            }
            return null;
          };
          me.fireEvent('selectionchange');
        }
      },
      disable: function (except) {
        return this.setDisabled(except);
      },

      /**
       * 璁剧疆榛樿鍐呭
       * @method _setDefaultContent
       * @private
       * @param  { String } cont 瑕佸瓨鍏ョ殑鍐呭
       */
      _setDefaultContent: function () {
        function clear() {
          var me = this;
          if (me.document.getElementById('initContent')) {
            me.body.innerHTML = '<p>' + (ie ? '' : '<br/>') + '</p>';
            me.removeListener('firstBeforeExecCommand focus', clear);
            setTimeout(function () {
              me.focus();
              me._selectionChange();
            }, 0)
          }
        }

        return function (cont) {
          var me = this;
          me.body.innerHTML = '<p id="initContent">' + cont + '</p>';

          me.addListener('firstBeforeExecCommand focus', clear);
        }
      }(),

      /**
       * 鏄剧ず缂栬緫鍣�
       * @method setShow
       * @example
       * ```javascript
       * editor.setShow()
       * ```
       */
      setShow: function () {
        var me = this, range = me.selection.getRange();
        if (me.container.style.display == 'none') {
          //鏈夊彲鑳藉唴瀹逛涪澶变簡
          try {
            range.moveToBookmark(me.lastBk);
            delete me.lastBk
          } catch (e) {
            range.setStartAtFirst(me.body).collapse(true)
          }
          //ie涓媐ocus瀹炴晥锛屾墍浠ュ仛浜嗕釜寤惰繜
          setTimeout(function () {
            range.select(true);
          }, 100);
          me.container.style.display = '';
        }

      },
      show: function () {
        return this.setShow();
      },
      /**
       * 闅愯棌缂栬緫鍣�
       * @method setHide
       * @example
       * ```javascript
       * editor.setHide()
       * ```
       */
      setHide: function () {
        var me = this;
        if (!me.lastBk) {
          me.lastBk = me.selection.getRange().createBookmark(true);
        }
        me.container.style.display = 'none'
      },
      hide: function () {
        return this.setHide();
      },

      /**
       * 鏍规嵁鎸囧畾鐨勮矾寰勶紝鑾峰彇瀵瑰簲鐨勮瑷€璧勬簮
       * @method getLang
       * @param { String } path 璺緞鏍规嵁鐨勬槸lang鐩綍涓嬬殑璇█鏂囦欢鐨勮矾寰勭粨鏋�
       * @return { Object | String } 鏍规嵁璺緞杩斿洖璇█璧勬簮鐨凧son鏍煎紡瀵硅薄鎴栬€呰瑷€瀛楃涓�
       * @example
       * ```javascript
       * editor.getLang('contextMenu.delete'); //濡傛灉褰撳墠鏄腑鏂囷紝閭ｈ繑鍥炴槸鐨勬槸'鍒犻櫎'
       * ```
       */
      getLang: function (path) {
        var lang = UE.I18N[this.options.lang];
        if (!lang) {
          throw Error("not import language file");
        }
        path = (path || "").split(".");
        for (var i = 0, ci; ci = path[i++];) {
          lang = lang[ci];
          if (!lang)break;
        }
        return lang;
      },

      /**
       * 璁＄畻缂栬緫鍣╤tml鍐呭瀛楃涓茬殑闀垮害
       * @method  getContentLength
       * @return { Number } 杩斿洖璁＄畻鐨勯暱搴�
       * @example
       * ```javascript
       * //缂栬緫鍣╤tml鍐呭<p><strong>132</strong></p>
       * editor.getContentLength() //杩斿洖27
       * ```
       */
      /**
       * 璁＄畻缂栬緫鍣ㄥ綋鍓嶇函鏂囨湰鍐呭鐨勯暱搴�
       * @method  getContentLength
       * @param { Boolean } ingoneHtml 浼犲叆true鏃讹紝鍙寜鐓х函鏂囨湰鏉ヨ绠�
       * @return { Number } 杩斿洖璁＄畻鐨勯暱搴︼紝鍐呭涓湁hr/img/iframe鏍囩锛岄暱搴﹀姞1
       * @example
       * ```javascript
       * //缂栬緫鍣╤tml鍐呭<p><strong>132</strong></p>
       * editor.getContentLength() //杩斿洖3
       * ```
       */
      getContentLength: function (ingoneHtml, tagNames) {
        var count = this.getContent(false,false,true).length;
        if (ingoneHtml) {
          tagNames = (tagNames || []).concat([ 'hr', 'img', 'iframe']);
          count = this.getContentTxt().replace(/[\t\r\n]+/g, '').length;
          for (var i = 0, ci; ci = tagNames[i++];) {
            count += this.document.getElementsByTagName(ci).length;
          }
        }
        return count;
      },

      /**
       * 娉ㄥ唽杈撳叆杩囨护瑙勫垯
       * @method  addInputRule
       * @param { Function } rule 瑕佹坊鍔犵殑杩囨护瑙勫垯
       * @example
       * ```javascript
       * editor.addInputRule(function(root){
         *   $.each(root.getNodesByTagName('div'),function(i,node){
         *       node.tagName="p";
         *   });
         * });
       * ```
       */
      addInputRule: function (rule) {
        this.inputRules.push(rule);
      },

      /**
       * 鎵ц娉ㄥ唽鐨勮繃婊よ鍒�
       * @method  filterInputRule
       * @param { UE.uNode } root 瑕佽繃婊ょ殑uNode鑺傜偣
       * @remind 鎵цeditor.setContent鏂规硶鍜屾墽琛�'inserthtml'鍛戒护鍚庯紝浼氳繍琛岃杩囨护鍑芥暟
       * @example
       * ```javascript
       * editor.filterInputRule(editor.body);
       * ```
       * @see UE.Editor:addInputRule
       */
      filterInputRule: function (root) {
        for (var i = 0, ci; ci = this.inputRules[i++];) {
          ci.call(this, root)
        }
      },

      /**
       * 娉ㄥ唽杈撳嚭杩囨护瑙勫垯
       * @method  addOutputRule
       * @param { Function } rule 瑕佹坊鍔犵殑杩囨护瑙勫垯
       * @example
       * ```javascript
       * editor.addOutputRule(function(root){
         *   $.each(root.getNodesByTagName('p'),function(i,node){
         *       node.tagName="div";
         *   });
         * });
       * ```
       */
      addOutputRule: function (rule) {
        this.outputRules.push(rule)
      },

      /**
       * 鏍规嵁杈撳嚭杩囨护瑙勫垯锛岃繃婊ょ紪杈戝櫒鍐呭
       * @method  filterOutputRule
       * @remind 鎵цeditor.getContent鏂规硶鐨勬椂鍊欙紝浼氬厛杩愯璇ヨ繃婊ゅ嚱鏁�
       * @param { UE.uNode } root 瑕佽繃婊ょ殑uNode鑺傜偣
       * @example
       * ```javascript
       * editor.filterOutputRule(editor.body);
       * ```
       * @see UE.Editor:addOutputRule
       */
      filterOutputRule: function (root) {
        for (var i = 0, ci; ci = this.outputRules[i++];) {
          ci.call(this, root)
        }
      },

      /**
       * 鏍规嵁action鍚嶇О鑾峰彇璇锋眰鐨勮矾寰�
       * @method  getActionUrl
       * @remind 鍋囧娌℃湁璁剧疆serverUrl,浼氭牴鎹甶mageUrl璁剧疆榛樿鐨刢ontroller璺緞
       * @param { String } action action鍚嶇О
       * @example
       * ```javascript
       * editor.getActionUrl('config'); //杩斿洖 "/ueditor/php/controller.php?action=config"
       * editor.getActionUrl('image'); //杩斿洖 "/ueditor/php/controller.php?action=uplaodimage"
       * editor.getActionUrl('scrawl'); //杩斿洖 "/ueditor/php/controller.php?action=uplaodscrawl"
       * editor.getActionUrl('imageManager'); //杩斿洖 "/ueditor/php/controller.php?action=listimage"
       * ```
       */
      getActionUrl: function(action){
        var actionName = this.getOpt(action) || action,
          imageUrl = this.getOpt('imageUrl'),
          serverUrl = this.getOpt('serverUrl');

        if(!serverUrl && imageUrl) {
          serverUrl = imageUrl.replace(/^(.*[\/]).+([\.].+)$/, '$1controller$2');
        }

        if(serverUrl) {
          serverUrl = serverUrl + (serverUrl.indexOf('?') == -1 ? '?':'&') + 'action=' + (actionName || '');
          return utils.formatUrl(serverUrl);
        } else {
          return '';
        }
      }
    };
    utils.inherits(Editor, EventBase);
  })();


// core/Editor.defaultoptions.js
//缁存姢缂栬緫鍣ㄤ竴涓嬮粯璁ょ殑涓嶅湪鎻掍欢涓殑閰嶇疆椤�
  UE.Editor.defaultOptions = function(editor){

    var _url = editor.options.UEDITOR_HOME_URL;
    return {
      isShow: true,
      initialContent: '',
      initialStyle:'',
      autoClearinitialContent: false,
      iframeCssUrl: _url + 'themes/iframe.css',
      textarea: 'editorValue',
      focus: false,
      focusInEnd: true,
      autoClearEmptyNode: true,
      fullscreen: false,
      readonly: false,
      zIndex: 999,
      imagePopup: true,
      enterTag: 'p',
      customDomain: false,
      lang: 'zh-cn',
      langPath: _url + 'lang/',
      theme: 'default',
      themePath: _url + 'themes/',
      allHtmlEnabled: false,
      scaleEnabled: false,
      tableNativeEditInFF: false,
      autoSyncData : true,
      fileNameFormat: '{time}{rand:6}'
    }
  };

// core/loadconfig.js
  (function(){

    UE.Editor.prototype.loadServerConfig = function(){
      var me = this;
      setTimeout(function(){
        try{
          me.options.imageUrl && me.setOpt('serverUrl', me.options.imageUrl.replace(/^(.*[\/]).+([\.].+)$/, '$1controller$2'));

          var configUrl = me.getActionUrl('config'),
            isJsonp = utils.isCrossDomainUrl(configUrl);

          /* 鍙戝嚭ajax璇锋眰 */
          me._serverConfigLoaded = false;

          configUrl && UE.ajax.request(configUrl,{
            'method': 'GET',
            'dataType': isJsonp ? 'jsonp':'',
            'onsuccess':function(r){
              try {
                var config = isJsonp ? r:eval("("+r.responseText+")");
                utils.extend(me.options, config);
                me.fireEvent('serverConfigLoaded');
                me._serverConfigLoaded = true;
              } catch (e) {
                showErrorMsg(me.getLang('loadconfigFormatError'));
              }
            },
            'onerror':function(){
              showErrorMsg(me.getLang('loadconfigHttpError'));
            }
          });
        } catch(e){
          showErrorMsg(me.getLang('loadconfigError'));
        }
      });

      function showErrorMsg(msg) {
        console && console.error(msg);
        //me.fireEvent('showMessage', {
        //    'title': msg,
        //    'type': 'error'
        //});
      }
    };

    UE.Editor.prototype.isServerConfigLoaded = function(){
      var me = this;
      return me._serverConfigLoaded || false;
    };

    UE.Editor.prototype.afterConfigReady = function(handler){
      if (!handler || !utils.isFunction(handler)) return;
      var me = this;
      var readyHandler = function(){
        handler.apply(me, arguments);
        me.removeListener('serverConfigLoaded', readyHandler);
      };

      if (me.isServerConfigLoaded()) {
        handler.call(me, 'serverConfigLoaded');
      } else {
        me.addListener('serverConfigLoaded', readyHandler);
      }
    };

  })();


// core/ajax.js
  /**
   * @file
   * @module UE.ajax
   * @since 1.2.6.1
   */

  /**
   * 鎻愪緵瀵筧jax璇锋眰鐨勬敮鎸�
   * @module UE.ajax
   */
  UE.ajax = function() {

    //鍒涘缓涓€涓猘jaxRequest瀵硅薄
    var fnStr = 'XMLHttpRequest()';
    try {
      new ActiveXObject("Msxml2.XMLHTTP");
      fnStr = 'ActiveXObject(\'Msxml2.XMLHTTP\')';
    } catch (e) {
      try {
        new ActiveXObject("Microsoft.XMLHTTP");
        fnStr = 'ActiveXObject(\'Microsoft.XMLHTTP\')'
      } catch (e) {
      }
    }
    var creatAjaxRequest = new Function('return new ' + fnStr);


    /**
     * 灏唈son鍙傛暟杞寲鎴愰€傚悎ajax鎻愪氦鐨勫弬鏁板垪琛�
     * @param json
     */
    function json2str(json) {
      var strArr = [];
      for (var i in json) {
        //蹇界暐榛樿鐨勫嚑涓弬鏁�
        if(i=="method" || i=="timeout" || i=="async" || i=="dataType" || i=="callback") continue;
        //蹇界暐鎺у埗
        if(json[i] == undefined || json[i] == null) continue;
        //浼犻€掕繃鏉ョ殑瀵硅薄鍜屽嚱鏁颁笉鍦ㄦ彁浜や箣鍒�
        if (!((typeof json[i]).toLowerCase() == "function" || (typeof json[i]).toLowerCase() == "object")) {
          strArr.push( encodeURIComponent(i) + "="+encodeURIComponent(json[i]) );
        } else if (utils.isArray(json[i])) {
          //鏀寔浼犳暟缁勫唴瀹�
          for(var j = 0; j < json[i].length; j++) {
            strArr.push( encodeURIComponent(i) + "[]="+encodeURIComponent(json[i][j]) );
          }
        }
      }
      return strArr.join("&");
    }

    function doAjax(url, ajaxOptions) {
      var xhr = creatAjaxRequest(),
        //鏄惁瓒呮椂
        timeIsOut = false,
        //榛樿鍙傛暟
        defaultAjaxOptions = {
          method:"POST",
          timeout:5000,
          async:true,
          data:{},//闇€瑕佷紶閫掑璞＄殑璇濆彧鑳借鐩�
          onsuccess:function() {
          },
          onerror:function() {
          }
        };

      if (typeof url === "object") {
        ajaxOptions = url;
        url = ajaxOptions.url;
      }
      if (!xhr || !url) return;
      var ajaxOpts = ajaxOptions ? utils.extend(defaultAjaxOptions,ajaxOptions) : defaultAjaxOptions;

      var submitStr = json2str(ajaxOpts);  // { name:"Jim",city:"Beijing" } --> "name=Jim&city=Beijing"
      //濡傛灉鐢ㄦ埛鐩存帴閫氳繃data鍙傛暟浼犻€抝son瀵硅薄杩囨潵锛屽垯涔熻灏嗘json瀵硅薄杞寲涓哄瓧绗︿覆
      if (!utils.isEmptyObject(ajaxOpts.data)){
        submitStr += (submitStr? "&":"") + json2str(ajaxOpts.data);
      }
      //瓒呮椂妫€娴�
      var timerID = setTimeout(function() {
        if (xhr.readyState != 4) {
          timeIsOut = true;
          xhr.abort();
          clearTimeout(timerID);
        }
      }, ajaxOpts.timeout);

      var method = ajaxOpts.method.toUpperCase();
      var str = url + (url.indexOf("?")==-1?"?":"&") + (method=="POST"?"":submitStr+ "&noCache=" + +new Date);
      xhr.open(method, str, ajaxOpts.async);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (!timeIsOut && xhr.status == 200) {
            ajaxOpts.onsuccess(xhr);
          } else {
            ajaxOpts.onerror(xhr);
          }
        }
      };
      if (method == "POST") {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(submitStr);
      } else {
        xhr.send(null);
      }
    }

    function doJsonp(url, opts) {

      var successhandler = opts.onsuccess || function(){},
        scr = document.createElement('SCRIPT'),
        options = opts || {},
        charset = options['charset'],
        callbackField = options['jsonp'] || 'callback',
        callbackFnName,
        timeOut = options['timeOut'] || 0,
        timer,
        reg = new RegExp('(\\?|&)' + callbackField + '=([^&]*)'),
        matches;

      if (utils.isFunction(successhandler)) {
        callbackFnName = 'bd__editor__' + Math.floor(Math.random() * 2147483648).toString(36);
        window[callbackFnName] = getCallBack(0);
      } else if(utils.isString(successhandler)){
        callbackFnName = successhandler;
      } else {
        if (matches = reg.exec(url)) {
          callbackFnName = matches[2];
        }
      }

      url = url.replace(reg, '\x241' + callbackField + '=' + callbackFnName);

      if (url.search(reg) < 0) {
        url += (url.indexOf('?') < 0 ? '?' : '&') + callbackField + '=' + callbackFnName;
      }

      var queryStr = json2str(opts);  // { name:"Jim",city:"Beijing" } --> "name=Jim&city=Beijing"
      //濡傛灉鐢ㄦ埛鐩存帴閫氳繃data鍙傛暟浼犻€抝son瀵硅薄杩囨潵锛屽垯涔熻灏嗘json瀵硅薄杞寲涓哄瓧绗︿覆
      if (!utils.isEmptyObject(opts.data)){
        queryStr += (queryStr? "&":"") + json2str(opts.data);
      }
      if (queryStr) {
        url = url.replace(/\?/, '?' + queryStr + '&');
      }

      scr.onerror = getCallBack(1);
      if( timeOut ){
        timer = setTimeout(getCallBack(1), timeOut);
      }
      createScriptTag(scr, url, charset);

      function createScriptTag(scr, url, charset) {
        scr.setAttribute('type', 'text/javascript');
        scr.setAttribute('defer', 'defer');
        charset && scr.setAttribute('charset', charset);
        scr.setAttribute('src', url);
        document.getElementsByTagName('head')[0].appendChild(scr);
      }

      function getCallBack(onTimeOut){
        return function(){
          try {
            if(onTimeOut){
              options.onerror && options.onerror();
            }else{
              try{
                clearTimeout(timer);
                successhandler.apply(window, arguments);
              } catch (e){}
            }
          } catch (exception) {
            options.onerror && options.onerror.call(window, exception);
          } finally {
            options.oncomplete && options.oncomplete.apply(window, arguments);
            scr.parentNode && scr.parentNode.removeChild(scr);
            window[callbackFnName] = null;
            try {
              delete window[callbackFnName];
            }catch(e){}
          }
        }
      }
    }

    return {
      /**
       * 鏍规嵁缁欏畾鐨勫弬鏁伴」锛屽悜鎸囧畾鐨剈rl鍙戣捣涓€涓猘jax璇锋眰銆� ajax璇锋眰瀹屾垚鍚庯紝浼氭牴鎹姹傜粨鏋滆皟鐢ㄧ浉搴斿洖璋冿細 濡傛灉璇锋眰
       * 鎴愬姛锛� 鍒欒皟鐢╫nsuccess鍥炶皟锛� 澶辫触鍒欒皟鐢� onerror 鍥炶皟
       * @method request
       * @param { URLString } url ajax璇锋眰鐨剈rl鍦板潃
       * @param { Object } ajaxOptions ajax璇锋眰閫夐」鐨勯敭鍊煎锛屾敮鎸佺殑閫夐」濡備笅锛�
       * @example
       * ```javascript
       * //鍚憇ayhello.php鍙戣捣涓€涓紓姝ョ殑Ajax GET璇锋眰, 璇锋眰瓒呮椂鏃堕棿涓�10s锛� 璇锋眰瀹屾垚鍚庢墽琛岀浉搴旂殑鍥炶皟銆�
       * UE.ajax.requeset( 'sayhello.php', {
         *
         *     //璇锋眰鏂规硶銆傚彲閫夊€硷細 'GET', 'POST'锛岄粯璁ゅ€兼槸'POST'
         *     method: 'GET',
         *
         *     //瓒呮椂鏃堕棿銆� 榛樿涓�5000锛� 鍗曚綅鏄痬s
         *     timeout: 10000,
         *
         *     //鏄惁鏄紓姝ヨ姹傘€� true涓哄紓姝ヨ姹傦紝 false涓哄悓姝ヨ姹�
         *     async: true,
         *
         *     //璇锋眰鎼哄甫鐨勬暟鎹€傚鏋滆姹備负GET璇锋眰锛� data浼氱粡杩噑tringify鍚庨檮鍔犲埌璇锋眰url涔嬪悗銆�
         *     data: {
         *         name: 'ueditor'
         *     },
         *
         *     //璇锋眰鎴愬姛鍚庣殑鍥炶皟锛� 璇ュ洖璋冩帴鍙楀綋鍓嶇殑XMLHttpRequest瀵硅薄浣滀负鍙傛暟銆�
         *     onsuccess: function ( xhr ) {
         *         console.log( xhr.responseText );
         *     },
         *
         *     //璇锋眰澶辫触鎴栬€呰秴鏃跺悗鐨勫洖璋冦€�
         *     onerror: function ( xhr ) {
         *          alert( 'Ajax璇锋眰澶辫触' );
         *     }
         *
         * } );
       * ```
       */

      /**
       * 鏍规嵁缁欏畾鐨勫弬鏁伴」鍙戣捣涓€涓猘jax璇锋眰锛� 鍙傛暟椤归噷蹇呴』鍖呭惈涓€涓猽rl鍦板潃銆� ajax璇锋眰瀹屾垚鍚庯紝浼氭牴鎹姹傜粨鏋滆皟鐢ㄧ浉搴斿洖璋冿細 濡傛灉璇锋眰
       * 鎴愬姛锛� 鍒欒皟鐢╫nsuccess鍥炶皟锛� 澶辫触鍒欒皟鐢� onerror 鍥炶皟銆�
       * @method request
       * @warning 濡傛灉鍦ㄥ弬鏁伴」閲屾湭鎻愪緵涓€涓猭ey涓衡€渦rl鈥濈殑鍦板潃鍊硷紝鍒欒璇锋眰灏嗙洿鎺ラ€€鍑恒€�
       * @param { Object } ajaxOptions ajax璇锋眰閫夐」鐨勯敭鍊煎锛屾敮鎸佺殑閫夐」濡備笅锛�
       * @example
       * ```javascript
       *
       * //鍚憇ayhello.php鍙戣捣涓€涓紓姝ョ殑Ajax POST璇锋眰, 璇锋眰瓒呮椂鏃堕棿涓�5s锛� 璇锋眰瀹屾垚鍚庝笉鎵ц浠讳綍鍥炶皟銆�
       * UE.ajax.requeset( 'sayhello.php', {
         *
         *     //璇锋眰鐨勫湴鍧€锛� 璇ラ」鏄繀椤荤殑銆�
         *     url: 'sayhello.php'
         *
         * } );
       * ```
       */
      request:function(url, opts) {
        if (opts && opts.dataType == 'jsonp') {
          doJsonp(url, opts);
        } else {
          doAjax(url, opts);
        }
      },
      getJSONP:function(url, data, fn) {
        var opts = {
          'data': data,
          'oncomplete': fn
        };
        doJsonp(url, opts);
      }
    };


  }();


// core/filterword.js
  /**
   * UE杩囨护word鐨勯潤鎬佹柟娉�
   * @file
   */

  /**
   * UEditor鍏敤绌洪棿锛孶Editor鎵€鏈夌殑鍔熻兘閮芥寕杞藉湪璇ョ┖闂翠笅
   * @module UE
   */


  /**
   * 鏍规嵁浼犲叆html瀛楃涓茶繃婊ord
   * @module UE
   * @since 1.2.6.1
   * @method filterWord
   * @param { String } html html瀛楃涓�
   * @return { String } 宸茶繃婊ゅ悗鐨勭粨鏋滃瓧绗︿覆
   * @example
   * ```javascript
   * UE.filterWord(html);
   * ```
   */
  var filterWord = UE.filterWord = function () {

    //鏄惁鏄痺ord杩囨潵鐨勫唴瀹�
    function isWordDocument( str ) {
      return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/ig.test( str );
    }
    //鍘绘帀灏忔暟
    function transUnit( v ) {
      v = v.replace( /[\d.]+\w+/g, function ( m ) {
        return utils.transUnitToPx(m);
      } );
      return v;
    }

    function filterPasteWord( str ) {
      return str.replace(/[\t\r\n]+/g,' ')
        .replace( /<!--[\s\S]*?-->/ig, "" )
        //杞崲鍥剧墖
        .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(str){
          //opera鑳借嚜宸辫В鏋愬嚭image鎵€杩欓噷鐩存帴杩斿洖绌�
          if(browser.opera){
            return '';
          }
          try{
            //鏈夊彲鑳芥槸bitmap鍗犱负鍥撅紝鏃犵敤锛岀洿鎺ヨ繃婊ゆ帀锛屼富瑕佷綋鐜板湪绮樿创excel琛ㄦ牸涓�
            if(/Bitmap/i.test(str)){
              return '';
            }
            var width = str.match(/width:([ \d.]*p[tx])/i)[1],
              height = str.match(/height:([ \d.]*p[tx])/i)[1],
              src =  str.match(/src=\s*"([^"]*)"/i)[1];
            return '<img width="'+ transUnit(width) +'" height="'+transUnit(height) +'" src="' + src + '" />';
          } catch(e){
            return '';
          }
        })
        //閽堝wps娣诲姞鐨勫浣欐爣绛惧鐞�
        .replace(/<\/?div[^>]*>/g,'')
        //鍘绘帀澶氫綑鐨勫睘鎬�
        .replace( /v:\w+=(["']?)[^'"]+\1/g, '' )
        .replace( /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "" )
        .replace( /<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>" )
        //鍘绘帀澶氫綑鐨勫睘鎬�
        .replace( /\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig, function(str,name,marks,val){
          //淇濈暀list鐨勬爣绀�
          return name == 'class' && val == 'MsoListParagraph' ? str : ''
        })
        //娓呴櫎澶氫綑鐨刦ont/span涓嶈兘鍖归厤&nbsp;鏈夊彲鑳芥槸绌烘牸
        .replace( /<(font|span)[^>]*>(\s*)<\/\1>/gi, function(a,b,c){
          return c.replace(/[\t\r\n ]+/g,' ')
        })
        //澶勭悊style鐨勯棶棰�
        .replace( /(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function( str, tag, tmp, style ) {
          var n = [],
            s = style.replace( /^\s+|\s+$/, '' )
              .replace(/&#39;/g,'\'')
              .replace( /&quot;/gi, "'" )
              .replace(/[\d.]+(cm|pt)/g,function(str){
                return utils.transUnitToPx(str)
              })
              .split( /;\s*/g );

          for ( var i = 0,v; v = s[i];i++ ) {

            var name, value,
              parts = v.split( ":" );

            if ( parts.length == 2 ) {
              name = parts[0].toLowerCase();
              value = parts[1].toLowerCase();
              if(/^(background)\w*/.test(name) && value.replace(/(initial|\s)/g,'').length == 0
                ||
                /^(margin)\w*/.test(name) && /^0\w+$/.test(value)
              ){
                continue;
              }

              switch ( name ) {
                case "mso-padding-alt":
                case "mso-padding-top-alt":
                case "mso-padding-right-alt":
                case "mso-padding-bottom-alt":
                case "mso-padding-left-alt":
                case "mso-margin-alt":
                case "mso-margin-top-alt":
                case "mso-margin-right-alt":
                case "mso-margin-bottom-alt":
                case "mso-margin-left-alt":
                //ie涓嬩細鍑虹幇鎸ゅ埌涓€璧风殑鎯呭喌
                //case "mso-table-layout-alt":
                case "mso-height":
                case "mso-width":
                case "mso-vertical-align-alt":
                  //trace:1819 ff涓嬩細瑙ｆ瀽鍑簆adding鍦╰able涓�
                  if(!/<table/.test(tag))
                    n[i] = name.replace( /^mso-|-alt$/g, "" ) + ":" + transUnit( value );
                  continue;
                case "horiz-align":
                  n[i] = "text-align:" + value;
                  continue;

                case "vert-align":
                  n[i] = "vertical-align:" + value;
                  continue;

                case "font-color":
                case "mso-foreground":
                  n[i] = "color:" + value;
                  continue;

                case "mso-background":
                case "mso-highlight":
                  n[i] = "background:" + value;
                  continue;

                case "mso-default-height":
                  n[i] = "min-height:" + transUnit( value );
                  continue;

                case "mso-default-width":
                  n[i] = "min-width:" + transUnit( value );
                  continue;

                case "mso-padding-between-alt":
                  n[i] = "border-collapse:separate;border-spacing:" + transUnit( value );
                  continue;

                case "text-line-through":
                  if ( (value == "single") || (value == "double") ) {
                    n[i] = "text-decoration:line-through";
                  }
                  continue;
                case "mso-zero-height":
                  if ( value == "yes" ) {
                    n[i] = "display:none";
                  }
                  continue;
//                                case 'background':
//                                    break;
                case 'margin':
                  if ( !/[1-9]/.test( value ) ) {
                    continue;
                  }

              }

              if ( /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test( name )
                ||
                /text\-indent|padding|margin/.test(name) && /\-[\d.]+/.test(value)
              ) {
                continue;
              }

              n[i] = name + ":" + parts[1];
            }
          }
          return tag + (n.length ? ' style="' + n.join( ';').replace(/;{2,}/g,';') + '"' : '');
        })


    }

    return function ( html ) {
      return (isWordDocument( html ) ? filterPasteWord( html ) : html);
    };
  }();

// core/node.js
  /**
   * 缂栬緫鍣ㄦā鎷熺殑鑺傜偣绫�
   * @file
   * @module UE
   * @class uNode
   * @since 1.2.6.1
   */

  /**
   * UEditor鍏敤绌洪棿锛孶Editor鎵€鏈夌殑鍔熻兘閮芥寕杞藉湪璇ョ┖闂翠笅
   * @unfile
   * @module UE
   */

  (function () {

    /**
     * 缂栬緫鍣ㄦā鎷熺殑鑺傜偣绫�
     * @unfile
     * @module UE
     * @class uNode
     */

    /**
     * 閫氳繃涓€涓敭鍊煎锛屽垱寤轰竴涓猽Node瀵硅薄
     * @constructor
     * @param { Object } attr 浼犲叆瑕佸垱寤虹殑uNode鐨勫垵濮嬪睘鎬�
     * @example
     * ```javascript
     * var node = new uNode({
     *     type:'element',
     *     tagName:'span',
     *     attrs:{style:'font-size:14px;'}
     * }
     * ```
     */
    var uNode = UE.uNode = function (obj) {
      this.type = obj.type;
      this.data = obj.data;
      this.tagName = obj.tagName;
      this.parentNode = obj.parentNode;
      this.attrs = obj.attrs || {};
      this.children = obj.children;
    };

    var notTransAttrs = {
      'href':1,
      'src':1,
      '_src':1,
      '_href':1,
      'cdata_data':1
    };

    var notTransTagName = {
      style:1,
      script:1
    };

    var indentChar = '    ',
      breakChar = '\n';

    function insertLine(arr, current, begin) {
      arr.push(breakChar);
      return current + (begin ? 1 : -1);
    }

    function insertIndent(arr, current) {
      //鎻掑叆缂╄繘
      for (var i = 0; i < current; i++) {
        arr.push(indentChar);
      }
    }

    //鍒涘缓uNode鐨勯潤鎬佹柟娉�
    //鏀寔鏍囩鍜宧tml
    uNode.createElement = function (html) {
      if (/[<>]/.test(html)) {
        return UE.htmlparser(html).children[0]
      } else {
        return new uNode({
          type:'element',
          children:[],
          tagName:html
        })
      }
    };
    uNode.createText = function (data,noTrans) {
      return new UE.uNode({
        type:'text',
        'data':noTrans ? data : utils.unhtml(data || '')
      })
    };
    function nodeToHtml(node, arr, formatter, current) {
      switch (node.type) {
        case 'root':
          for (var i = 0, ci; ci = node.children[i++];) {
            //鎻掑叆鏂拌
            if (formatter && ci.type == 'element' && !dtd.$inlineWithA[ci.tagName] && i > 1) {
              insertLine(arr, current, true);
              insertIndent(arr, current)
            }
            nodeToHtml(ci, arr, formatter, current)
          }
          break;
        case 'text':
          isText(node, arr);
          break;
        case 'element':
          isElement(node, arr, formatter, current);
          break;
        case 'comment':
          isComment(node, arr, formatter);
      }
      return arr;
    }

    function isText(node, arr) {
      if(node.parentNode.tagName == 'pre'){
        //婧愮爜妯″紡涓嬭緭鍏tml鏍囩锛屼笉鑳藉仛杞崲澶勭悊锛岀洿鎺ヨ緭鍑�
        arr.push(node.data)
      }else{
        arr.push(notTransTagName[node.parentNode.tagName] ? utils.html(node.data) : node.data.replace(/[ ]{2}/g,' &nbsp;'))
      }

    }

    function isElement(node, arr, formatter, current) {
      var attrhtml = '';
      if (node.attrs) {
        attrhtml = [];
        var attrs = node.attrs;
        for (var a in attrs) {
          //杩欓噷灏遍拡瀵�
          //<p>'<img src='http://nsclick.baidu.com/u.gif?&asdf=\"sdf&asdfasdfs;asdf'></p>
          //杩欓噷杈圭殑\"鍋氳浆鎹紝瑕佷笉鐢╥nnerHTML鐩存帴琚埅鏂簡锛屽睘鎬rc
          //鏈夊彲鑳藉仛鐨勪笉澶�
          attrhtml.push(a + (attrs[a] !== undefined ? '="' + (notTransAttrs[a] ? utils.html(attrs[a]).replace(/["]/g, function (a) {
              return '&quot;'
            }) : utils.unhtml(attrs[a])) + '"' : ''))
        }
        attrhtml = attrhtml.join(' ');
      }
      arr.push('<' + node.tagName +
        (attrhtml ? ' ' + attrhtml  : '') +
        (dtd.$empty[node.tagName] ? '\/' : '' ) + '>'
      );
      //鎻掑叆鏂拌
      if (formatter  &&  !dtd.$inlineWithA[node.tagName] && node.tagName != 'pre') {
        if(node.children && node.children.length){
          current = insertLine(arr, current, true);
          insertIndent(arr, current)
        }

      }
      if (node.children && node.children.length) {
        for (var i = 0, ci; ci = node.children[i++];) {
          if (formatter && ci.type == 'element' &&  !dtd.$inlineWithA[ci.tagName] && i > 1) {
            insertLine(arr, current);
            insertIndent(arr, current)
          }
          nodeToHtml(ci, arr, formatter, current)
        }
      }
      if (!dtd.$empty[node.tagName]) {
        if (formatter && !dtd.$inlineWithA[node.tagName]  && node.tagName != 'pre') {

          if(node.children && node.children.length){
            current = insertLine(arr, current);
            insertIndent(arr, current)
          }
        }
        arr.push('<\/' + node.tagName + '>');
      }

    }

    function isComment(node, arr) {
      arr.push('<!--' + node.data + '-->');
    }

    function getNodeById(root, id) {
      var node;
      if (root.type == 'element' && root.getAttr('id') == id) {
        return root;
      }
      if (root.children && root.children.length) {
        for (var i = 0, ci; ci = root.children[i++];) {
          if (node = getNodeById(ci, id)) {
            return node;
          }
        }
      }
    }

    function getNodesByTagName(node, tagName, arr) {
      if (node.type == 'element' && node.tagName == tagName) {
        arr.push(node);
      }
      if (node.children && node.children.length) {
        for (var i = 0, ci; ci = node.children[i++];) {
          getNodesByTagName(ci, tagName, arr)
        }
      }
    }
    function nodeTraversal(root,fn){
      if(root.children && root.children.length){
        for(var i= 0,ci;ci=root.children[i];){
          nodeTraversal(ci,fn);
          //ci琚浛鎹㈢殑鎯呭喌锛岃繖閲屽氨涓嶅啀璧� fn浜�
          if(ci.parentNode ){
            if(ci.children && ci.children.length){
              fn(ci)
            }
            if(ci.parentNode) i++
          }
        }
      }else{
        fn(root)
      }

    }
    uNode.prototype = {

      /**
       * 褰撳墠鑺傜偣瀵硅薄锛岃浆鎹㈡垚html鏂囨湰
       * @method toHtml
       * @return { String } 杩斿洖杞崲鍚庣殑html瀛楃涓�
       * @example
       * ```javascript
       * node.toHtml();
       * ```
       */

      /**
       * 褰撳墠鑺傜偣瀵硅薄锛岃浆鎹㈡垚html鏂囨湰
       * @method toHtml
       * @param { Boolean } formatter 鏄惁鏍煎紡鍖栬繑鍥炲€�
       * @return { String } 杩斿洖杞崲鍚庣殑html瀛楃涓�
       * @example
       * ```javascript
       * node.toHtml( true );
       * ```
       */
      toHtml:function (formatter) {
        var arr = [];
        nodeToHtml(this, arr, formatter, 0);
        return arr.join('')
      },

      /**
       * 鑾峰彇鑺傜偣鐨刪tml鍐呭
       * @method innerHTML
       * @warning 鍋囧鑺傜偣鐨則ype涓嶆槸'element'锛屾垨鑺傜偣鐨勬爣绛惧悕绉颁笉鍦╠td鍒楄〃閲岋紝鐩存帴杩斿洖褰撳墠鑺傜偣
       * @return { String } 杩斿洖鑺傜偣鐨刪tml鍐呭
       * @example
       * ```javascript
       * var htmlstr = node.innerHTML();
       * ```
       */

      /**
       * 璁剧疆鑺傜偣鐨刪tml鍐呭
       * @method innerHTML
       * @warning 鍋囧鑺傜偣鐨則ype涓嶆槸'element'锛屾垨鑺傜偣鐨勬爣绛惧悕绉颁笉鍦╠td鍒楄〃閲岋紝鐩存帴杩斿洖褰撳墠鑺傜偣
       * @param { String } htmlstr 浼犲叆瑕佽缃殑html鍐呭
       * @return { UE.uNode } 杩斿洖鑺傜偣鏈韩
       * @example
       * ```javascript
       * node.innerHTML('<span>text</span>');
       * ```
       */
      innerHTML:function (htmlstr) {
        if (this.type != 'element' || dtd.$empty[this.tagName]) {
          return this;
        }
        if (utils.isString(htmlstr)) {
          if(this.children){
            for (var i = 0, ci; ci = this.children[i++];) {
              ci.parentNode = null;
            }
          }
          this.children = [];
          var tmpRoot = UE.htmlparser(htmlstr);
          for (var i = 0, ci; ci = tmpRoot.children[i++];) {
            this.children.push(ci);
            ci.parentNode = this;
          }
          return this;
        } else {
          var tmpRoot = new UE.uNode({
            type:'root',
            children:this.children
          });
          return tmpRoot.toHtml();
        }
      },

      /**
       * 鑾峰彇鑺傜偣鐨勭函鏂囨湰鍐呭
       * @method innerText
       * @warning 鍋囧鑺傜偣鐨則ype涓嶆槸'element'锛屾垨鑺傜偣鐨勬爣绛惧悕绉颁笉鍦╠td鍒楄〃閲岋紝鐩存帴杩斿洖褰撳墠鑺傜偣
       * @return { String } 杩斿洖鑺傜偣鐨勫瓨鏂囨湰鍐呭
       * @example
       * ```javascript
       * var textStr = node.innerText();
       * ```
       */

      /**
       * 璁剧疆鑺傜偣鐨勭函鏂囨湰鍐呭
       * @method innerText
       * @warning 鍋囧鑺傜偣鐨則ype涓嶆槸'element'锛屾垨鑺傜偣鐨勬爣绛惧悕绉颁笉鍦╠td鍒楄〃閲岋紝鐩存帴杩斿洖褰撳墠鑺傜偣
       * @param { String } textStr 浼犲叆瑕佽缃殑鏂囨湰鍐呭
       * @return { UE.uNode } 杩斿洖鑺傜偣鏈韩
       * @example
       * ```javascript
       * node.innerText('<span>text</span>');
       * ```
       */
      innerText:function (textStr,noTrans) {
        if (this.type != 'element' || dtd.$empty[this.tagName]) {
          return this;
        }
        if (textStr) {
          if(this.children){
            for (var i = 0, ci; ci = this.children[i++];) {
              ci.parentNode = null;
            }
          }
          this.children = [];
          this.appendChild(uNode.createText(textStr,noTrans));
          return this;
        } else {
          return this.toHtml().replace(/<[^>]+>/g, '');
        }
      },

      /**
       * 鑾峰彇褰撳墠瀵硅薄鐨刣ata灞炴€�
       * @method getData
       * @return { Object } 鑻ヨ妭鐐圭殑type鍊兼槸elemenet锛岃繑鍥炵┖瀛楃涓诧紝鍚﹀垯杩斿洖鑺傜偣鐨刣ata灞炴€�
       * @example
       * ```javascript
       * node.getData();
       * ```
       */
      getData:function () {
        if (this.type == 'element')
          return '';
        return this.data
      },

      /**
       * 鑾峰彇褰撳墠鑺傜偣涓嬬殑绗竴涓瓙鑺傜偣
       * @method firstChild
       * @return { UE.uNode } 杩斿洖绗竴涓瓙鑺傜偣
       * @example
       * ```javascript
       * node.firstChild(); //杩斿洖绗竴涓瓙鑺傜偣
       * ```
       */
      firstChild:function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName]) {
//                return this;
//            }
        return this.children ? this.children[0] : null;
      },

      /**
       * 鑾峰彇褰撳墠鑺傜偣涓嬬殑鏈€鍚庝竴涓瓙鑺傜偣
       * @method lastChild
       * @return { UE.uNode } 杩斿洖鏈€鍚庝竴涓瓙鑺傜偣
       * @example
       * ```javascript
       * node.lastChild(); //杩斿洖鏈€鍚庝竴涓瓙鑺傜偣
       * ```
       */
      lastChild:function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName] ) {
//                return this;
//            }
        return this.children ? this.children[this.children.length - 1] : null;
      },

      /**
       * 鑾峰彇鍜屽綋鍓嶈妭鐐规湁鐩稿悓鐖朵翰鑺傜偣鐨勫墠涓€涓妭鐐�
       * @method previousSibling
       * @return { UE.uNode } 杩斿洖鍓嶄竴涓妭鐐�
       * @example
       * ```javascript
       * node.children[2].previousSibling(); //杩斿洖瀛愯妭鐐筺ode.children[1]
       * ```
       */
      previousSibling : function(){
        var parent = this.parentNode;
        for (var i = 0, ci; ci = parent.children[i]; i++) {
          if (ci === this) {
            return i == 0 ? null : parent.children[i-1];
          }
        }

      },

      /**
       * 鑾峰彇鍜屽綋鍓嶈妭鐐规湁鐩稿悓鐖朵翰鑺傜偣鐨勫悗涓€涓妭鐐�
       * @method nextSibling
       * @return { UE.uNode } 杩斿洖鍚庝竴涓妭鐐�,鎵句笉鍒拌繑鍥瀗ull
       * @example
       * ```javascript
       * node.children[2].nextSibling(); //濡傛灉鏈夛紝杩斿洖瀛愯妭鐐筺ode.children[3]
       * ```
       */
      nextSibling : function(){
        var parent = this.parentNode;
        for (var i = 0, ci; ci = parent.children[i++];) {
          if (ci === this) {
            return parent.children[i];
          }
        }
      },

      /**
       * 鐢ㄦ柊鐨勮妭鐐规浛鎹㈠綋鍓嶈妭鐐�
       * @method replaceChild
       * @param { UE.uNode } target 瑕佹浛鎹㈡垚璇ヨ妭鐐瑰弬鏁�
       * @param { UE.uNode } source 瑕佽鏇挎崲鎺夌殑鑺傜偣
       * @return { UE.uNode } 杩斿洖鏇挎崲涔嬪悗鐨勮妭鐐瑰璞�
       * @example
       * ```javascript
       * node.replaceChild(newNode, childNode); //鐢╪ewNode鏇挎崲childNode,childNode鏄痭ode鐨勫瓙鑺傜偣
       * ```
       */
      replaceChild:function (target, source) {
        if (this.children) {
          if(target.parentNode){
            target.parentNode.removeChild(target);
          }
          for (var i = 0, ci; ci = this.children[i]; i++) {
            if (ci === source) {
              this.children.splice(i, 1, target);
              source.parentNode = null;
              target.parentNode = this;
              return target;
            }
          }
        }
      },

      /**
       * 鍦ㄨ妭鐐圭殑瀛愯妭鐐瑰垪琛ㄦ渶鍚庝綅缃彃鍏ヤ竴涓妭鐐�
       * @method appendChild
       * @param { UE.uNode } node 瑕佹彃鍏ョ殑鑺傜偣
       * @return { UE.uNode } 杩斿洖鍒氭彃鍏ョ殑瀛愯妭鐐�
       * @example
       * ```javascript
       * node.appendChild( newNode ); //鍦╪ode鍐呮彃鍏ュ瓙鑺傜偣newNode
       * ```
       */
      appendChild:function (node) {
        if (this.type == 'root' || (this.type == 'element' && !dtd.$empty[this.tagName])) {
          if (!this.children) {
            this.children = []
          }
          if(node.parentNode){
            node.parentNode.removeChild(node);
          }
          for (var i = 0, ci; ci = this.children[i]; i++) {
            if (ci === node) {
              this.children.splice(i, 1);
              break;
            }
          }
          this.children.push(node);
          node.parentNode = this;
          return node;
        }


      },

      /**
       * 鍦ㄤ紶鍏ヨ妭鐐圭殑鍓嶉潰鎻掑叆涓€涓妭鐐�
       * @method insertBefore
       * @param { UE.uNode } target 瑕佹彃鍏ョ殑鑺傜偣
       * @param { UE.uNode } source 鍦ㄨ鍙傛暟鑺傜偣鍓嶉潰鎻掑叆
       * @return { UE.uNode } 杩斿洖鍒氭彃鍏ョ殑瀛愯妭鐐�
       * @example
       * ```javascript
       * node.parentNode.insertBefore(newNode, node); //鍦╪ode鑺傜偣鍚庨潰鎻掑叆newNode
       * ```
       */
      insertBefore:function (target, source) {
        if (this.children) {
          if(target.parentNode){
            target.parentNode.removeChild(target);
          }
          for (var i = 0, ci; ci = this.children[i]; i++) {
            if (ci === source) {
              this.children.splice(i, 0, target);
              target.parentNode = this;
              return target;
            }
          }

        }
      },

      /**
       * 鍦ㄤ紶鍏ヨ妭鐐圭殑鍚庨潰鎻掑叆涓€涓妭鐐�
       * @method insertAfter
       * @param { UE.uNode } target 瑕佹彃鍏ョ殑鑺傜偣
       * @param { UE.uNode } source 鍦ㄨ鍙傛暟鑺傜偣鍚庨潰鎻掑叆
       * @return { UE.uNode } 杩斿洖鍒氭彃鍏ョ殑瀛愯妭鐐�
       * @example
       * ```javascript
       * node.parentNode.insertAfter(newNode, node); //鍦╪ode鑺傜偣鍚庨潰鎻掑叆newNode
       * ```
       */
      insertAfter:function (target, source) {
        if (this.children) {
          if(target.parentNode){
            target.parentNode.removeChild(target);
          }
          for (var i = 0, ci; ci = this.children[i]; i++) {
            if (ci === source) {
              this.children.splice(i + 1, 0, target);
              target.parentNode = this;
              return target;
            }

          }
        }
      },

      /**
       * 浠庡綋鍓嶈妭鐐圭殑瀛愯妭鐐瑰垪琛ㄤ腑锛岀Щ闄よ妭鐐�
       * @method removeChild
       * @param { UE.uNode } node 瑕佺Щ闄ょ殑鑺傜偣寮曠敤
       * @param { Boolean } keepChildren 鏄惁淇濈暀绉婚櫎鑺傜偣鐨勫瓙鑺傜偣锛岃嫢浼犲叆true锛岃嚜鍔ㄦ妸绉婚櫎鑺傜偣鐨勫瓙鑺傜偣鎻掑叆鍒扮Щ闄ょ殑浣嶇疆
       * @return { * } 杩斿洖鍒氱Щ闄ょ殑瀛愯妭鐐�
       * @example
       * ```javascript
       * node.removeChild(childNode,true); //鍦╪ode鐨勫瓙鑺傜偣鍒楄〃涓Щ闄hild鑺傜偣锛屽苟涓斿惂child鐨勫瓙鑺傜偣鎻掑叆鍒扮Щ闄ょ殑浣嶇疆
       * ```
       */
      removeChild:function (node,keepChildren) {
        if (this.children) {
          for (var i = 0, ci; ci = this.children[i]; i++) {
            if (ci === node) {
              this.children.splice(i, 1);
              ci.parentNode = null;
              if(keepChildren && ci.children && ci.children.length){
                for(var j= 0,cj;cj=ci.children[j];j++){
                  this.children.splice(i+j,0,cj);
                  cj.parentNode = this;

                }
              }
              return ci;
            }
          }
        }
      },

      /**
       * 鑾峰彇褰撳墠鑺傜偣鎵€浠ｈ〃鐨勫厓绱犲睘鎬э紝鍗宠幏鍙朼ttrs瀵硅薄涓嬬殑灞炴€у€�
       * @method getAttr
       * @param { String } attrName 瑕佽幏鍙栫殑灞炴€у悕绉�
       * @return { * } 杩斿洖attrs瀵硅薄涓嬬殑灞炴€у€�
       * @example
       * ```javascript
       * node.getAttr('title');
       * ```
       */
      getAttr:function (attrName) {
        return this.attrs && this.attrs[attrName.toLowerCase()]
      },

      /**
       * 璁剧疆褰撳墠鑺傜偣鎵€浠ｈ〃鐨勫厓绱犲睘鎬э紝鍗宠缃產ttrs瀵硅薄涓嬬殑灞炴€у€�
       * @method setAttr
       * @param { String } attrName 瑕佽缃殑灞炴€у悕绉�
       * @param { * } attrVal 瑕佽缃殑灞炴€у€硷紝绫诲瀷瑙嗚缃殑灞炴€ц€屽畾
       * @return { * } 杩斿洖attrs瀵硅薄涓嬬殑灞炴€у€�
       * @example
       * ```javascript
       * node.setAttr('title','鏍囬');
       * ```
       */
      setAttr:function (attrName, attrVal) {
        if (!attrName) {
          delete this.attrs;
          return;
        }
        if(!this.attrs){
          this.attrs = {};
        }
        if (utils.isObject(attrName)) {
          for (var a in attrName) {
            if (!attrName[a]) {
              delete this.attrs[a]
            } else {
              this.attrs[a.toLowerCase()] = attrName[a];
            }
          }
        } else {
          if (!attrVal) {
            delete this.attrs[attrName]
          } else {
            this.attrs[attrName.toLowerCase()] = attrVal;
          }

        }
      },

      /**
       * 鑾峰彇褰撳墠鑺傜偣鍦ㄧ埗鑺傜偣涓嬬殑浣嶇疆绱㈠紩
       * @method getIndex
       * @return { Number } 杩斿洖绱㈠紩鏁板€硷紝濡傛灉娌℃湁鐖惰妭鐐癸紝杩斿洖-1
       * @example
       * ```javascript
       * node.getIndex();
       * ```
       */
      getIndex:function(){
        var parent = this.parentNode;
        for(var i= 0,ci;ci=parent.children[i];i++){
          if(ci === this){
            return i;
          }
        }
        return -1;
      },

      /**
       * 鍦ㄥ綋鍓嶈妭鐐逛笅锛屾牴鎹甶d鏌ユ壘鑺傜偣
       * @method getNodeById
       * @param { String } id 瑕佹煡鎵剧殑id
       * @return { UE.uNode } 杩斿洖鎵惧埌鐨勮妭鐐�
       * @example
       * ```javascript
       * node.getNodeById('textId');
       * ```
       */
      getNodeById:function (id) {
        var node;
        if (this.children && this.children.length) {
          for (var i = 0, ci; ci = this.children[i++];) {
            if (node = getNodeById(ci, id)) {
              return node;
            }
          }
        }
      },

      /**
       * 鍦ㄥ綋鍓嶈妭鐐逛笅锛屾牴鎹厓绱犲悕绉版煡鎵捐妭鐐瑰垪琛�
       * @method getNodesByTagName
       * @param { String } tagNames 瑕佹煡鎵剧殑鍏冪礌鍚嶇О
       * @return { Array } 杩斿洖鎵惧埌鐨勮妭鐐瑰垪琛�
       * @example
       * ```javascript
       * node.getNodesByTagName('span');
       * ```
       */
      getNodesByTagName:function (tagNames) {
        tagNames = utils.trim(tagNames).replace(/[ ]{2,}/g, ' ').split(' ');
        var arr = [], me = this;
        utils.each(tagNames, function (tagName) {
          if (me.children && me.children.length) {
            for (var i = 0, ci; ci = me.children[i++];) {
              getNodesByTagName(ci, tagName, arr)
            }
          }
        });
        return arr;
      },

      /**
       * 鏍规嵁鏍峰紡鍚嶇О锛岃幏鍙栬妭鐐圭殑鏍峰紡鍊�
       * @method getStyle
       * @param { String } name 瑕佽幏鍙栫殑鏍峰紡鍚嶇О
       * @return { String } 杩斿洖鏍峰紡鍊�
       * @example
       * ```javascript
       * node.getStyle('font-size');
       * ```
       */
      getStyle:function (name) {
        var cssStyle = this.getAttr('style');
        if (!cssStyle) {
          return ''
        }
        var reg = new RegExp('(^|;)\\s*' + name + ':([^;]+)','i');
        var match = cssStyle.match(reg);
        if (match && match[0]) {
          return match[2]
        }
        return '';
      },

      /**
       * 缁欒妭鐐硅缃牱寮�
       * @method setStyle
       * @param { String } name 瑕佽缃殑鐨勬牱寮忓悕绉�
       * @param { String } val 瑕佽缃殑鐨勬牱鍊�
       * @example
       * ```javascript
       * node.setStyle('font-size', '12px');
       * ```
       */
      setStyle:function (name, val) {
        function exec(name, val) {
          var reg = new RegExp('(^|;)\\s*' + name + ':([^;]+;?)', 'gi');
          cssStyle = cssStyle.replace(reg, '$1');
          if (val) {
            cssStyle = name + ':' + utils.unhtml(val) + ';' + cssStyle
          }

        }

        var cssStyle = this.getAttr('style');
        if (!cssStyle) {
          cssStyle = '';
        }
        if (utils.isObject(name)) {
          for (var a in name) {
            exec(a, name[a])
          }
        } else {
          exec(name, val)
        }
        this.setAttr('style', utils.trim(cssStyle))
      },

      /**
       * 浼犲叆涓€涓嚱鏁帮紝閫掑綊閬嶅巻褰撳墠鑺傜偣涓嬬殑鎵€鏈夎妭鐐�
       * @method traversal
       * @param { Function } fn 閬嶅巻鍒拌妭鐐圭殑鏃讹紝浼犲叆鑺傜偣浣滀负鍙傛暟锛岃繍琛屾鍑芥暟
       * @example
       * ```javascript
       * traversal(node, function(){
         *     console.log(node.type);
         * });
       * ```
       */
      traversal:function(fn){
        if(this.children && this.children.length){
          nodeTraversal(this,fn);
        }
        return this;
      }
    }
  })();


// core/htmlparser.js
  /**
   * html瀛楃涓茶浆鎹㈡垚uNode鑺傜偣
   * @file
   * @module UE
   * @since 1.2.6.1
   */

  /**
   * UEditor鍏敤绌洪棿锛孶Editor鎵€鏈夌殑鍔熻兘閮芥寕杞藉湪璇ョ┖闂翠笅
   * @unfile
   * @module UE
   */

  /**
   * html瀛楃涓茶浆鎹㈡垚uNode鑺傜偣鐨勯潤鎬佹柟娉�
   * @method htmlparser
   * @param { String } htmlstr 瑕佽浆鎹㈢殑html浠ｇ爜
   * @param { Boolean } ignoreBlank 鑻ヨ缃负true锛岃浆鎹㈢殑鏃跺€欏拷鐣n\r\t绛夌┖鐧藉瓧绗�
   * @return { uNode } 缁欏畾鐨刪tml鐗囨杞崲褰㈡垚鐨剈Node瀵硅薄
   * @example
   * ```javascript
   * var root = UE.htmlparser('<p><b>htmlparser</b></p>', true);
   * ```
   */

  var htmlparser = UE.htmlparser = function (htmlstr,ignoreBlank) {
    //todo 鍘熸潵鐨勬柟寮�  [^"'<>\/] 鏈塡/灏变笉鑳介厤瀵逛笂 <TD vAlign=top background=../AAA.JPG> 杩欐牱鐨勬爣绛句簡
    //鍏堝幓鎺変簡锛屽姞涓婄殑鍘熷洜蹇樹簡锛岃繖閲屽厛璁板綍
    var re_tag = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/<>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
      re_attr = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g;

    //ie涓嬪彇寰楃殑html鍙兘浼氭湁\n瀛樺湪锛岃鍘绘帀锛屽湪澶勭悊replace(/[\t\r\n]*/g,'');浠ｇ爜楂橀噺鐨刓n涓嶈兘鍘婚櫎
    var allowEmptyTags = {
      b:1,code:1,i:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,span:1,
      sub:1,img:1,sup:1,font:1,big:1,small:1,iframe:1,a:1,br:1,pre:1
    };
    htmlstr = htmlstr.replace(new RegExp(domUtils.fillChar, 'g'), '');
    if(!ignoreBlank){
      htmlstr = htmlstr.replace(new RegExp('[\\r\\t\\n'+(ignoreBlank?'':' ')+']*<\/?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n'+(ignoreBlank?'':' ')+']*','g'), function(a,b){
        //br鏆傛椂鍗曠嫭澶勭悊
        if(b && allowEmptyTags[b.toLowerCase()]){
          return a.replace(/(^[\n\r]+)|([\n\r]+$)/g,'');
        }
        return a.replace(new RegExp('^[\\r\\n'+(ignoreBlank?'':' ')+']+'),'').replace(new RegExp('[\\r\\n'+(ignoreBlank?'':' ')+']+$'),'');
      });
    }

    var notTransAttrs = {
      'href':1,
      'src':1
    };

    var uNode = UE.uNode,
      needParentNode = {
        'td':'tr',
        'tr':['tbody','thead','tfoot'],
        'tbody':'table',
        'th':'tr',
        'thead':'table',
        'tfoot':'table',
        'caption':'table',
        'li':['ul', 'ol'],
        'dt':'dl',
        'dd':'dl',
        'option':'select'
      },
      needChild = {
        'ol':'li',
        'ul':'li'
      };

    function text(parent, data) {

      if(needChild[parent.tagName]){
        var tmpNode = uNode.createElement(needChild[parent.tagName]);
        parent.appendChild(tmpNode);
        tmpNode.appendChild(uNode.createText(data));
        parent = tmpNode;
      }else{

        parent.appendChild(uNode.createText(data));
      }
    }

    function element(parent, tagName, htmlattr) {
      var needParentTag;
      if (needParentTag = needParentNode[tagName]) {
        var tmpParent = parent,hasParent;
        while(tmpParent.type != 'root'){
          if(utils.isArray(needParentTag) ? utils.indexOf(needParentTag, tmpParent.tagName) != -1 : needParentTag == tmpParent.tagName){
            parent = tmpParent;
            hasParent = true;
            break;
          }
          tmpParent = tmpParent.parentNode;
        }
        if(!hasParent){
          parent = element(parent, utils.isArray(needParentTag) ? needParentTag[0] : needParentTag)
        }
      }
      //鎸塪td澶勭悊宓屽
//        if(parent.type != 'root' && !dtd[parent.tagName][tagName])
//            parent = parent.parentNode;
      var elm = new uNode({
        parentNode:parent,
        type:'element',
        tagName:tagName.toLowerCase(),
        //鏄嚜闂悎鐨勫鐞嗕竴涓�
        children:dtd.$empty[tagName] ? null : []
      });
      //濡傛灉灞炴€у瓨鍦紝澶勭悊灞炴€�
      if (htmlattr) {
        var attrs = {}, match;
        while (match = re_attr.exec(htmlattr)) {
          attrs[match[1].toLowerCase()] = notTransAttrs[match[1].toLowerCase()] ? (match[2] || match[3] || match[4]) : utils.unhtml(match[2] || match[3] || match[4])
        }
        elm.attrs = attrs;
      }
      //trace:3970
//        //濡傛灉parent涓嬩笉鑳芥斁elm
//        if(dtd.$inline[parent.tagName] && dtd.$block[elm.tagName] && !dtd[parent.tagName][elm.tagName]){
//            parent = parent.parentNode;
//            elm.parentNode = parent;
//        }
      parent.children.push(elm);
      //濡傛灉鏄嚜闂悎鑺傜偣杩斿洖鐖朵翰鑺傜偣
      return  dtd.$empty[tagName] ? parent : elm
    }

    function comment(parent, data) {
      parent.children.push(new uNode({
        type:'comment',
        data:data,
        parentNode:parent
      }));
    }

    var match, currentIndex = 0, nextIndex = 0;
    //璁剧疆鏍硅妭鐐�
    var root = new uNode({
      type:'root',
      children:[]
    });
    var currentParent = root;

    while (match = re_tag.exec(htmlstr)) {
      currentIndex = match.index;
      try{
        if (currentIndex > nextIndex) {
          //text node
          text(currentParent, htmlstr.slice(nextIndex, currentIndex));
        }
        if (match[3]) {

          if(dtd.$cdata[currentParent.tagName]){
            text(currentParent, match[0]);
          }else{
            //start tag
            currentParent = element(currentParent, match[3].toLowerCase(), match[4]);
          }


        } else if (match[1]) {
          if(currentParent.type != 'root'){
            if(dtd.$cdata[currentParent.tagName] && !dtd.$cdata[match[1]]){
              text(currentParent, match[0]);
            }else{
              var tmpParent = currentParent;
              while(currentParent.type == 'element' && currentParent.tagName != match[1].toLowerCase()){
                currentParent = currentParent.parentNode;
                if(currentParent.type == 'root'){
                  currentParent = tmpParent;
                  throw 'break'
                }
              }
              //end tag
              currentParent = currentParent.parentNode;
            }

          }

        } else if (match[2]) {
          //comment
          comment(currentParent, match[2])
        }
      }catch(e){}

      nextIndex = re_tag.lastIndex;

    }
    //濡傛灉缁撴潫鏄枃鏈紝灏辨湁鍙兘涓㈡帀锛屾墍浠ヨ繖閲屾墜鍔ㄥ垽鏂竴涓�
    //渚嬪 <li>sdfsdfsdf<li>sdfsdfsdfsdf
    if (nextIndex < htmlstr.length) {
      text(currentParent, htmlstr.slice(nextIndex));
    }
    return root;
  };


// core/filternode.js
  /**
   * UE杩囨护鑺傜偣鐨勯潤鎬佹柟娉�
   * @file
   */

  /**
   * UEditor鍏敤绌洪棿锛孶Editor鎵€鏈夌殑鍔熻兘閮芥寕杞藉湪璇ョ┖闂翠笅
   * @module UE
   */


  /**
   * 鏍规嵁浼犲叆鑺傜偣鍜岃繃婊よ鍒欒繃婊ょ浉搴旇妭鐐�
   * @module UE
   * @since 1.2.6.1
   * @method filterNode
   * @param { Object } root 鎸囧畾root鑺傜偣
   * @param { Object } rules 杩囨护瑙勫垯json瀵硅薄
   * @example
   * ```javascript
   * UE.filterNode(root,editor.options.filterRules);
   * ```
   */
  var filterNode = UE.filterNode = function () {
    function filterNode(node,rules){
      switch (node.type) {
        case 'text':
          break;
        case 'element':
          var val;
          if(val = rules[node.tagName]){
            if(val === '-'){
              node.parentNode.removeChild(node)
            }else if(utils.isFunction(val)){
              var parentNode = node.parentNode,
                index = node.getIndex();
              val(node);
              if(node.parentNode){
                if(node.children){
                  for(var i = 0,ci;ci=node.children[i];){
                    filterNode(ci,rules);
                    if(ci.parentNode){
                      i++;
                    }
                  }
                }
              }else{
                for(var i = index,ci;ci=parentNode.children[i];){
                  filterNode(ci,rules);
                  if(ci.parentNode){
                    i++;
                  }
                }
              }


            }else{
              var attrs = val['$'];
              if(attrs && node.attrs){
                var tmpAttrs = {},tmpVal;
                for(var a in attrs){
                  tmpVal = node.getAttr(a);
                  //todo 鍙厛瀵箂tyle鍗曠嫭澶勭悊
                  if(a == 'style' && utils.isArray(attrs[a])){
                    var tmpCssStyle = [];
                    utils.each(attrs[a],function(v){
                      var tmp;
                      if(tmp = node.getStyle(v)){
                        tmpCssStyle.push(v + ':' + tmp);
                      }
                    });
                    tmpVal = tmpCssStyle.join(';')
                  }
                  if(tmpVal){
                    tmpAttrs[a] = tmpVal;
                  }

                }
                node.attrs = tmpAttrs;
              }
              if(node.children){
                for(var i = 0,ci;ci=node.children[i];){
                  filterNode(ci,rules);
                  if(ci.parentNode){
                    i++;
                  }
                }
              }
            }
          }else{
            //濡傛灉涓嶅湪鍚嶅崟閲屾墸鍑哄瓙鑺傜偣骞跺垹闄よ鑺傜偣,cdata闄ゅ
            if(dtd.$cdata[node.tagName]){
              node.parentNode.removeChild(node)
            }else{
              var parentNode = node.parentNode,
                index = node.getIndex();
              node.parentNode.removeChild(node,true);
              for(var i = index,ci;ci=parentNode.children[i];){
                filterNode(ci,rules);
                if(ci.parentNode){
                  i++;
                }
              }
            }
          }
          break;
        case 'comment':
          node.parentNode.removeChild(node)
      }

    }
    return function(root,rules){
      if(utils.isEmptyObject(rules)){
        return root;
      }
      var val;
      if(val = rules['-']){
        utils.each(val.split(' '),function(k){
          rules[k] = '-'
        })
      }
      for(var i= 0,ci;ci=root.children[i];){
        filterNode(ci,rules);
        if(ci.parentNode){
          i++;
        }
      }
      return root;
    }
  }();

// core/plugin.js
  /**
   * Created with JetBrains PhpStorm.
   * User: campaign
   * Date: 10/8/13
   * Time: 6:15 PM
   * To change this template use File | Settings | File Templates.
   */
  UE.plugin = function(){
    var _plugins = {};
    return {
      register : function(pluginName,fn,oldOptionName,afterDisabled){
        if(oldOptionName && utils.isFunction(oldOptionName)){
          afterDisabled = oldOptionName;
          oldOptionName = null
        }
        _plugins[pluginName] = {
          optionName : oldOptionName || pluginName,
          execFn : fn,
          //褰撴彃浠惰绂佺敤鏃舵墽琛�
          afterDisabled : afterDisabled
        }
      },
      load : function(editor){
        utils.each(_plugins,function(plugin){
          var _export = plugin.execFn.call(editor);
          if(editor.options[plugin.optionName] !== false){
            if(_export){
              //鍚庤竟闇€瑕佸啀鍋氭墿灞�
              utils.each(_export,function(v,k){
                switch(k.toLowerCase()){
                  case 'shortcutkey':
                    editor.addshortcutkey(v);
                    break;
                  case 'bindevents':
                    utils.each(v,function(fn,eventName){
                      editor.addListener(eventName,fn);
                    });
                    break;
                  case 'bindmultievents':
                    utils.each(utils.isArray(v) ? v:[v],function(event){
                      var types = utils.trim(event.type).split(/\s+/);
                      utils.each(types,function(eventName){
                        editor.addListener(eventName, event.handler);
                      });
                    });
                    break;
                  case 'commands':
                    utils.each(v,function(execFn,execName){
                      editor.commands[execName] = execFn
                    });
                    break;
                  case 'outputrule':
                    editor.addOutputRule(v);
                    break;
                  case 'inputrule':
                    editor.addInputRule(v);
                    break;
                  case 'defaultoptions':
                    editor.setOpt(v)
                }
              })
            }

          }else if(plugin.afterDisabled){
            plugin.afterDisabled.call(editor)
          }

        });
        //鍚戜笅鍏煎
        utils.each(UE.plugins,function(plugin){
          plugin.call(editor);
        });
      },
      run : function(pluginName,editor){
        var plugin = _plugins[pluginName];
        if(plugin){
          plugin.exeFn.call(editor)
        }
      }
    }
  }();

// core/keymap.js
  var keymap = UE.keymap  = {
    'Backspace' : 8,
    'Tab' : 9,
    'Enter' : 13,

    'Shift':16,
    'Control':17,
    'Alt':18,
    'CapsLock':20,

    'Esc':27,

    'Spacebar':32,

    'PageUp':33,
    'PageDown':34,
    'End':35,
    'Home':36,

    'Left':37,
    'Up':38,
    'Right':39,
    'Down':40,

    'Insert':45,

    'Del':46,

    'NumLock':144,

    'Cmd':91,

    '=':187,
    '-':189,

    "b":66,
    'i':73,
    //鍥為€€
    'z':90,
    'y':89,
    //绮樿创
    'v' : 86,
    'x' : 88,

    's' : 83,

    'n' : 78
  };

// core/localstorage.js
//瀛樺偍濯掍粙灏佽
  var LocalStorage = UE.LocalStorage = (function () {

    var storage = window.localStorage || getUserData() || null,
      LOCAL_FILE = 'localStorage';

    return {

      saveLocalData: function (key, data) {

        if (storage && data) {
          storage.setItem(key, data);
          return true;
        }

        return false;

      },

      getLocalData: function (key) {

        if (storage) {
          return storage.getItem(key);
        }

        return null;

      },

      removeItem: function (key) {

        storage && storage.removeItem(key);

      }

    };

    function getUserData() {

      var container = document.createElement("div");
      container.style.display = "none";

      if (!container.addBehavior) {
        return null;
      }

      container.addBehavior("#default#userdata");

      return {

        getItem: function (key) {

          var result = null;

          try {
            document.body.appendChild(container);
            container.load(LOCAL_FILE);
            result = container.getAttribute(key);
            document.body.removeChild(container);
          } catch (e) {
          }

          return result;

        },

        setItem: function (key, value) {

          document.body.appendChild(container);
          container.setAttribute(key, value);
          container.save(LOCAL_FILE);
          document.body.removeChild(container);

        },

        //// 鏆傛椂娌℃湁鐢ㄥ埌
        //clear: function () {
        //
        //    var expiresTime = new Date();
        //    expiresTime.setFullYear(expiresTime.getFullYear() - 1);
        //    document.body.appendChild(container);
        //    container.expires = expiresTime.toUTCString();
        //    container.save(LOCAL_FILE);
        //    document.body.removeChild(container);
        //
        //},

        removeItem: function (key) {

          document.body.appendChild(container);
          container.removeAttribute(key);
          container.save(LOCAL_FILE);
          document.body.removeChild(container);

        }

      };

    }

  })();

  (function () {

    var ROOTKEY = 'ueditor_preference';

    UE.Editor.prototype.setPreferences = function(key,value){
      var obj = {};
      if (utils.isString(key)) {
        obj[ key ] = value;
      } else {
        obj = key;
      }
      var data = LocalStorage.getLocalData(ROOTKEY);
      if (data && (data = utils.str2json(data))) {
        utils.extend(data, obj);
      } else {
        data = obj;
      }
      data && LocalStorage.saveLocalData(ROOTKEY, utils.json2str(data));
    };

    UE.Editor.prototype.getPreferences = function(key){
      var data = LocalStorage.getLocalData(ROOTKEY);
      if (data && (data = utils.str2json(data))) {
        return key ? data[key] : data
      }
      return null;
    };

    UE.Editor.prototype.removePreferences = function (key) {
      var data = LocalStorage.getLocalData(ROOTKEY);
      if (data && (data = utils.str2json(data))) {
        data[key] = undefined;
        delete data[key]
      }
      data && LocalStorage.saveLocalData(ROOTKEY, utils.json2str(data));
    };

  })();


// plugins/defaultfilter.js
///import core
///plugin 缂栬緫鍣ㄩ粯璁ょ殑杩囨护杞崲鏈哄埗

  UE.plugins['defaultfilter'] = function () {
    var me = this;
    me.setOpt({
      'allowDivTransToP':true,
      'disabledTableInTable':true
    });
    //榛樿鐨勮繃婊ゅ鐞�
    //杩涘叆缂栬緫鍣ㄧ殑鍐呭澶勭悊
    me.addInputRule(function (root) {
      var allowDivTransToP = this.options.allowDivTransToP;
      var val;
      function tdParent(node){
        while(node && node.type == 'element'){
          if(node.tagName == 'td'){
            return true;
          }
          node = node.parentNode;
        }
        return false;
      }
      //杩涜榛樿鐨勫鐞�
      root.traversal(function (node) {
        if (node.type == 'element') {
          if (!dtd.$cdata[node.tagName] && me.options.autoClearEmptyNode && dtd.$inline[node.tagName] && !dtd.$empty[node.tagName] && (!node.attrs || utils.isEmptyObject(node.attrs))) {
            if (!node.firstChild()) node.parentNode.removeChild(node);
            else if (node.tagName == 'span' && (!node.attrs || utils.isEmptyObject(node.attrs))) {
              node.parentNode.removeChild(node, true)
            }
            return;
          }
          switch (node.tagName) {
            case 'style':
            case 'script':
              node.setAttr({
                cdata_tag: node.tagName,
                cdata_data: (node.innerHTML() || ''),
                '_ue_custom_node_':'true'
              });
              node.tagName = 'div';
              node.innerHTML('');
              break;
            case 'a':
              if (val = node.getAttr('href')) {
                node.setAttr('_href', val)
              }
              break;
            case 'img':
              //todo base64鏆傛椂鍘绘帀锛屽悗杈瑰仛杩滅▼鍥剧墖涓婁紶鍚庯紝骞叉帀杩欎釜
              if (val = node.getAttr('src')) {
                if (/^data:/.test(val)) {
                  node.parentNode.removeChild(node);
                  break;
                }
              }
              node.setAttr('_src', node.getAttr('src'));
              break;
            case 'span':
              if (browser.webkit && (val = node.getStyle('white-space'))) {
                if (/nowrap|normal/.test(val)) {
                  node.setStyle('white-space', '');
                  if (me.options.autoClearEmptyNode && utils.isEmptyObject(node.attrs)) {
                    node.parentNode.removeChild(node, true)
                  }
                }
              }
              val = node.getAttr('id');
              if(val && /^_baidu_bookmark_/i.test(val)){
                node.parentNode.removeChild(node)
              }
              break;
            case 'p':
              if (val = node.getAttr('align')) {
                node.setAttr('align');
                node.setStyle('text-align', val)
              }
              //trace:3431
//                        var cssStyle = node.getAttr('style');
//                        if (cssStyle) {
//                            cssStyle = cssStyle.replace(/(margin|padding)[^;]+/g, '');
//                            node.setAttr('style', cssStyle)
//
//                        }
              //p鏍囩涓嶅厑璁稿祵濂�
              utils.each(node.children,function(n){
                if(n.type == 'element' && n.tagName == 'p'){
                  var next = n.nextSibling();
                  node.parentNode.insertAfter(n,node);
                  var last = n;
                  while(next){
                    var tmp = next.nextSibling();
                    node.parentNode.insertAfter(next,last);
                    last = next;
                    next = tmp;
                  }
                  return false;
                }
              });
              if (!node.firstChild()) {
                node.innerHTML(browser.ie ? '&nbsp;' : '<br/>')
              }
              break;
            case 'div':
              if(node.getAttr('cdata_tag')){
                break;
              }
              //閽堝浠ｇ爜杩欓噷涓嶅鐞嗘彃鍏ヤ唬鐮佺殑div
              val = node.getAttr('class');
              if(val && /^line number\d+/.test(val)){
                break;
              }
              if(!allowDivTransToP){
                break;
              }
              var tmpNode, p = UE.uNode.createElement('p');
              while (tmpNode = node.firstChild()) {
                if (tmpNode.type == 'text' || !UE.dom.dtd.$block[tmpNode.tagName]) {
                  p.appendChild(tmpNode);
                } else {
                  if (p.firstChild()) {
                    node.parentNode.insertBefore(p, node);
                    p = UE.uNode.createElement('p');
                  } else {
                    node.parentNode.insertBefore(tmpNode, node);
                  }
                }
              }
              if (p.firstChild()) {
                node.parentNode.insertBefore(p, node);
              }
              node.parentNode.removeChild(node);
              break;
            case 'dl':
              node.tagName = 'ul';
              break;
            case 'dt':
            case 'dd':
              node.tagName = 'li';
              break;
            case 'li':
              var className = node.getAttr('class');
              if (!className || !/list\-/.test(className)) {
                node.setAttr()
              }
              var tmpNodes = node.getNodesByTagName('ol ul');
              UE.utils.each(tmpNodes, function (n) {
                node.parentNode.insertAfter(n, node);
              });
              break;
            case 'td':
            case 'th':
            case 'caption':
              if(!node.children || !node.children.length){
                node.appendChild(browser.ie11below ? UE.uNode.createText(' ') : UE.uNode.createElement('br'))
              }
              break;
            case 'table':
              if(me.options.disabledTableInTable && tdParent(node)){
                node.parentNode.insertBefore(UE.uNode.createText(node.innerText()),node);
                node.parentNode.removeChild(node)
              }
          }

        }
//            if(node.type == 'comment'){
//                node.parentNode.removeChild(node);
//            }
      })

    });

    //浠庣紪杈戝櫒鍑哄幓鐨勫唴瀹瑰鐞�
    me.addOutputRule(function (root) {

      var val;
      root.traversal(function (node) {
        if (node.type == 'element') {

          if (me.options.autoClearEmptyNode && dtd.$inline[node.tagName] && !dtd.$empty[node.tagName] && (!node.attrs || utils.isEmptyObject(node.attrs))) {

            if (!node.firstChild()) node.parentNode.removeChild(node);
            else if (node.tagName == 'span' && (!node.attrs || utils.isEmptyObject(node.attrs))) {
              node.parentNode.removeChild(node, true)
            }
            return;
          }
          switch (node.tagName) {
            case 'div':
              if (val = node.getAttr('cdata_tag')) {
                node.tagName = val;
                node.appendChild(UE.uNode.createText(node.getAttr('cdata_data')));
                node.setAttr({cdata_tag: '', cdata_data: '','_ue_custom_node_':''});
              }
              break;
            case 'a':
              if (val = node.getAttr('_href')) {
                node.setAttr({
                  'href': utils.html(val),
                  '_href': ''
                })
              }
              break;
              break;
            case 'span':
              val = node.getAttr('id');
              if(val && /^_baidu_bookmark_/i.test(val)){
                node.parentNode.removeChild(node)
              }
              break;
            case 'img':
              if (val = node.getAttr('_src')) {
                node.setAttr({
                  'src': node.getAttr('_src'),
                  '_src': ''
                })
              }


          }
        }

      })


    });
  };


// plugins/inserthtml.js
  /**
   * 鎻掑叆html瀛楃涓叉彃浠�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎻掑叆html浠ｇ爜
   * @command inserthtml
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } html 鎻掑叆鐨刪tml瀛楃涓�
   * @remaind 鎻掑叆鐨勬爣绛惧唴瀹规槸鍦ㄥ綋鍓嶇殑閫夊尯浣嶇疆涓婃彃鍏ワ紝濡傛灉褰撳墠鏄棴鍚堢姸鎬侊紝閭ｇ洿鎺ユ彃鍏ュ唴瀹癸紝 濡傛灉褰撳墠鏄€変腑鐘舵€侊紝灏嗗厛娓呴櫎褰撳墠閫変腑鍐呭鍚庯紝鍐嶅仛鎻掑叆
   * @warning 娉ㄦ剰:璇ュ懡浠や細瀵瑰綋鍓嶉€夊尯鐨勪綅缃紝瀵规彃鍏ョ殑鍐呭杩涜杩囨护杞崲澶勭悊銆� 杩囨护鐨勮鍒欓伒寰猦tml璇剰鍖栫殑鍘熷垯銆�
   * @example
   * ```javascript
   * //xxx[BB]xxx 褰撳墠閫夊尯涓洪潪闂悎閫夊尯锛岄€変腑BB杩欎袱涓枃鏈�
   * //鎵ц鍛戒护锛屾彃鍏�<b>CC</b>
   * //鎻掑叆鍚庣殑鏁堟灉 xxx<b>CC</b>xxx
   * //<p>xx|xxx</p> 褰撳墠閫夊尯涓洪棴鍚堢姸鎬�
   * //鎻掑叆<p>CC</p>
   * //缁撴灉 <p>xx</p><p>CC</p><p>xxx</p>
   * //<p>xxxx</p>|</p>xxx</p> 褰撳墠閫夊尯鍦ㄤ袱涓猵鏍囩涔嬮棿
   * //鎻掑叆 xxxx
   * //缁撴灉 <p>xxxx</p><p>xxxx</p></p>xxx</p>
   * ```
   */

  UE.commands['inserthtml'] = {
    execCommand: function (command,html,notNeedFilter){
      var me = this,
        range,
        div;
      if(!html){
        return;
      }
      if(me.fireEvent('beforeinserthtml',html) === true){
        return;
      }
      range = me.selection.getRange();
      div = range.document.createElement( 'div' );
      div.style.display = 'inline';

      if (!notNeedFilter) {
        var root = UE.htmlparser(html);
        //濡傛灉缁欎簡杩囨护瑙勫垯灏卞厛杩涜杩囨护
        if(me.options.filterRules){
          UE.filterNode(root,me.options.filterRules);
        }
        //鎵ц榛樿鐨勫鐞�
        me.filterInputRule(root);
        html = root.toHtml()
      }
      div.innerHTML = utils.trim( html );

      if ( !range.collapsed ) {
        var tmpNode = range.startContainer;
        if(domUtils.isFillChar(tmpNode)){
          range.setStartBefore(tmpNode)
        }
        tmpNode = range.endContainer;
        if(domUtils.isFillChar(tmpNode)){
          range.setEndAfter(tmpNode)
        }
        range.txtToElmBoundary();
        //缁撴潫杈圭晫鍙兘鏀惧埌浜哹r鐨勫墠杈癸紝瑕佹妸br鍖呭惈杩涙潵
        // x[xxx]<br/>
        if(range.endContainer && range.endContainer.nodeType == 1){
          tmpNode = range.endContainer.childNodes[range.endOffset];
          if(tmpNode && domUtils.isBr(tmpNode)){
            range.setEndAfter(tmpNode);
          }
        }
        if(range.startOffset == 0){
          tmpNode = range.startContainer;
          if(domUtils.isBoundaryNode(tmpNode,'firstChild') ){
            tmpNode = range.endContainer;
            if(range.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode,'lastChild')){
              me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';
              range.setStart(me.body.firstChild,0).collapse(true)

            }
          }
        }
        !range.collapsed && range.deleteContents();
        if(range.startContainer.nodeType == 1){
          var child = range.startContainer.childNodes[range.startOffset],pre;
          if(child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)){
            range.setEnd(pre,pre.childNodes.length).collapse();
            while(child.firstChild){
              pre.appendChild(child.firstChild);
            }
            domUtils.remove(child);
          }
        }

      }


      var child,parent,pre,tmp,hadBreak = 0, nextNode;
      //濡傛灉褰撳墠浣嶇疆閫変腑浜唂illchar瑕佸共鎺夛紝瑕佷笉浼氫骇鐢熺┖琛�
      if(range.inFillChar()){
        child = range.startContainer;
        if(domUtils.isFillChar(child)){
          range.setStartBefore(child).collapse(true);
          domUtils.remove(child);
        }else if(domUtils.isFillChar(child,true)){
          child.nodeValue = child.nodeValue.replace(fillCharReg,'');
          range.startOffset--;
          range.collapsed && range.collapse(true)
        }
      }
      //鍒楄〃鍗曠嫭澶勭悊
      var li = domUtils.findParentByTagName(range.startContainer,'li',true);
      if(li){
        var next,last;
        while(child = div.firstChild){
          //閽堝hr鍗曠嫭澶勭悊涓€涓嬪厛
          while(child && (child.nodeType == 3 || !domUtils.isBlockElm(child) || child.tagName=='HR' )){
            next = child.nextSibling;
            range.insertNode( child).collapse();
            last = child;
            child = next;

          }
          if(child){
            if(/^(ol|ul)$/i.test(child.tagName)){
              while(child.firstChild){
                last = child.firstChild;
                domUtils.insertAfter(li,child.firstChild);
                li = li.nextSibling;
              }
              domUtils.remove(child)
            }else{
              var tmpLi;
              next = child.nextSibling;
              tmpLi = me.document.createElement('li');
              domUtils.insertAfter(li,tmpLi);
              tmpLi.appendChild(child);
              last = child;
              child = next;
              li = tmpLi;
            }
          }
        }
        li = domUtils.findParentByTagName(range.startContainer,'li',true);
        if(domUtils.isEmptyBlock(li)){
          domUtils.remove(li)
        }
        if(last){

          range.setStartAfter(last).collapse(true).select(true)
        }
      }else{
        while ( child = div.firstChild ) {
          if(hadBreak){
            var p = me.document.createElement('p');
            while(child && (child.nodeType == 3 || !dtd.$block[child.tagName])){
              nextNode = child.nextSibling;
              p.appendChild(child);
              child = nextNode;
            }
            if(p.firstChild){

              child = p
            }
          }
          range.insertNode( child );
          nextNode = child.nextSibling;
          if ( !hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm( child ) ){

            parent = domUtils.findParent( child,function ( node ){ return domUtils.isBlockElm( node ); } );
            if ( parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)){
              if(!dtd[parent.tagName][child.nodeName]){
                pre = parent;
              }else{
                tmp = child.parentNode;
                while (tmp !== parent){
                  pre = tmp;
                  tmp = tmp.parentNode;

                }
              }


              domUtils.breakParent( child, pre || tmp );
              //鍘绘帀break鍚庡墠涓€涓浣欑殑鑺傜偣  <p>|<[p> ==> <p></p><div></div><p>|</p>
              var pre = child.previousSibling;
              domUtils.trimWhiteTextNode(pre);
              if(!pre.childNodes.length){
                domUtils.remove(pre);
              }
              //trace:2012,鍦ㄩ潪ie鐨勬儏鍐碉紝鍒囧紑鍚庡墿涓嬬殑鑺傜偣鏈夊彲鑳戒笉鑳界偣鍏ュ厜鏍囨坊鍔燽r鍗犱綅

              if(!browser.ie &&
                (next = child.nextSibling) &&
                domUtils.isBlockElm(next) &&
                next.lastChild &&
                !domUtils.isBr(next.lastChild)){
                next.appendChild(me.document.createElement('br'));
              }
              hadBreak = 1;
            }
          }
          var next = child.nextSibling;
          if(!div.firstChild && next && domUtils.isBlockElm(next)){

            range.setStart(next,0).collapse(true);
            break;
          }
          range.setEndAfter( child ).collapse();

        }

        child = range.startContainer;

        if(nextNode && domUtils.isBr(nextNode)){
          domUtils.remove(nextNode)
        }
        //鐢╟hrome鍙兘鏈夌┖鐧藉睍浣嶇
        if(domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)){
          if(nextNode = child.nextSibling){
            domUtils.remove(child);
            if(nextNode.nodeType == 1 && dtd.$block[nextNode.tagName]){

              range.setStart(nextNode,0).collapse(true).shrinkBoundary()
            }
          }else{

            try{
              child.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
            }catch(e){
              range.setStartBefore(child);
              domUtils.remove(child)
            }

          }

        }
        //鍔犱笂true鍥犱负鍦ㄥ垹闄よ〃鎯呯瓑鏃朵細鍒犱袱娆★紝绗竴娆℃槸鍒犵殑fillData
        try{
          range.select(true);
        }catch(e){}

      }



      setTimeout(function(){
        range = me.selection.getRange();
        range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
        me.fireEvent('afterinserthtml', html);
      },200);
    }
  };


// plugins/autotypeset.js
  /**
   * 鑷姩鎺掔増
   * @file
   * @since 1.2.6.1
   */

  /**
   * 瀵瑰綋鍓嶇紪杈戝櫒鐨勫唴瀹规墽琛岃嚜鍔ㄦ帓鐗堬紝 鎺掔増鐨勮涓烘牴鎹甤onfig閰嶇疆鏂囦欢閲岀殑鈥渁utotypeset鈥濋€夐」杩涜鎺у埗銆�
   * @command autotypeset
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'autotypeset' );
   * ```
   */

  UE.plugins['autotypeset'] = function(){

    this.setOpt({'autotypeset': {
      mergeEmptyline: true,           //鍚堝苟绌鸿
      removeClass: true,              //鍘绘帀鍐椾綑鐨刢lass
      removeEmptyline: false,         //鍘绘帀绌鸿
      textAlign:"left",               //娈佃惤鐨勬帓鐗堟柟寮忥紝鍙互鏄� left,right,center,justify 鍘绘帀杩欎釜灞炴€ц〃绀轰笉鎵ц鎺掔増
      imageBlockLine: 'center',       //鍥剧墖鐨勬诞鍔ㄦ柟寮忥紝鐙崰涓€琛屽墽涓�,宸﹀彸娴姩锛岄粯璁�: center,left,right,none 鍘绘帀杩欎釜灞炴€ц〃绀轰笉鎵ц鎺掔増
      pasteFilter: false,             //鏍规嵁瑙勫垯杩囨护娌′簨绮樿创杩涙潵鐨勫唴瀹�
      clearFontSize: false,           //鍘绘帀鎵€鏈夌殑鍐呭祵瀛楀彿锛屼娇鐢ㄧ紪杈戝櫒榛樿鐨勫瓧鍙�
      clearFontFamily: false,         //鍘绘帀鎵€鏈夌殑鍐呭祵瀛椾綋锛屼娇鐢ㄧ紪杈戝櫒榛樿鐨勫瓧浣�
      removeEmptyNode: false,         // 鍘绘帀绌鸿妭鐐�
      //鍙互鍘绘帀鐨勬爣绛�
      removeTagNames: utils.extend({div:1},dtd.$removeEmpty),
      indent: false,                  // 琛岄缂╄繘
      indentValue : '2em',            //琛岄缂╄繘鐨勫ぇ灏�
      bdc2sb: false,
      tobdc: false
    }});

    var me = this,
      opt = me.options.autotypeset,
      remainClass = {
        'selectTdClass':1,
        'pagebreak':1,
        'anchorclass':1
      },
      remainTag = {
        'li':1
      },
      tags = {
        div:1,
        p:1,
        //trace:2183 杩欎簺涔熻涓烘槸琛�
        blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,
        span:1
      },
      highlightCont;
    //鍗囩骇浜嗙増鏈紝浣嗛厤缃」鐩噷娌℃湁autotypeset
    if(!opt){
      return;
    }

    readLocalOpts();

    function isLine(node,notEmpty){
      if(!node || node.nodeType == 3)
        return 0;
      if(domUtils.isBr(node))
        return 1;
      if(node && node.parentNode && tags[node.tagName.toLowerCase()]){
        if(highlightCont && highlightCont.contains(node)
          ||
          node.getAttribute('pagebreak')
        ){
          return 0;
        }

        return notEmpty ? !domUtils.isEmptyBlock(node) : domUtils.isEmptyBlock(node,new RegExp('[\\s'+domUtils.fillChar
          +']','g'));
      }
    }

    function removeNotAttributeSpan(node){
      if(!node.style.cssText){
        domUtils.removeAttributes(node,['style']);
        if(node.tagName.toLowerCase() == 'span' && domUtils.hasNoAttributes(node)){
          domUtils.remove(node,true);
        }
      }
    }
    function autotype(type,html){

      var me = this,cont;
      if(html){
        if(!opt.pasteFilter){
          return;
        }
        cont = me.document.createElement('div');
        cont.innerHTML = html.html;
      }else{
        cont = me.document.body;
      }
      var nodes = domUtils.getElementsByTagName(cont,'*');

      // 琛岄缂╄繘锛屾钀芥柟鍚戯紝娈甸棿璺濓紝娈靛唴闂磋窛
      for(var i=0,ci;ci=nodes[i++];){

        if(me.fireEvent('excludeNodeinautotype',ci) === true){
          continue;
        }
        //font-size
        if(opt.clearFontSize && ci.style.fontSize){
          domUtils.removeStyle(ci,'font-size');

          removeNotAttributeSpan(ci);

        }
        //font-family
        if(opt.clearFontFamily && ci.style.fontFamily){
          domUtils.removeStyle(ci,'font-family');
          removeNotAttributeSpan(ci);
        }

        if(isLine(ci)){
          //鍚堝苟绌鸿
          if(opt.mergeEmptyline ){
            var next = ci.nextSibling,tmpNode,isBr = domUtils.isBr(ci);
            while(isLine(next)){
              tmpNode = next;
              next = tmpNode.nextSibling;
              if(isBr && (!next || next && !domUtils.isBr(next))){
                break;
              }
              domUtils.remove(tmpNode);
            }

          }
          //鍘绘帀绌鸿锛屼繚鐣欏崰浣嶇殑绌鸿
          if(opt.removeEmptyline && domUtils.inDoc(ci,cont) && !remainTag[ci.parentNode.tagName.toLowerCase()] ){
            if(domUtils.isBr(ci)){
              next = ci.nextSibling;
              if(next && !domUtils.isBr(next)){
                continue;
              }
            }
            domUtils.remove(ci);
            continue;

          }

        }
        if(isLine(ci,true) && ci.tagName != 'SPAN'){
          if(opt.indent){
            ci.style.textIndent = opt.indentValue;
          }
          if(opt.textAlign){
            ci.style.textAlign = opt.textAlign;
          }
          // if(opt.lineHeight)
          //     ci.style.lineHeight = opt.lineHeight + 'cm';

        }

        //鍘绘帀class,淇濈暀鐨刢lass涓嶅幓鎺�
        if(opt.removeClass && ci.className && !remainClass[ci.className.toLowerCase()]){

          if(highlightCont && highlightCont.contains(ci)){
            continue;
          }
          domUtils.removeAttributes(ci,['class']);
        }

        //琛ㄦ儏涓嶅鐞�
        if(opt.imageBlockLine && ci.tagName.toLowerCase() == 'img' && !ci.getAttribute('emotion')){
          if(html){
            var img = ci;
            switch (opt.imageBlockLine){
              case 'left':
              case 'right':
              case 'none':
                var pN = img.parentNode,tmpNode,pre,next;
                while(dtd.$inline[pN.tagName] || pN.tagName == 'A'){
                  pN = pN.parentNode;
                }
                tmpNode = pN;
                if(tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode,'text-align') == 'center'){
                  if(!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1){
                    pre = tmpNode.previousSibling;
                    next = tmpNode.nextSibling;
                    if(pre && next && pre.nodeType == 1 &&  next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)){
                      pre.appendChild(tmpNode.firstChild);
                      while(next.firstChild){
                        pre.appendChild(next.firstChild);
                      }
                      domUtils.remove(tmpNode);
                      domUtils.remove(next);
                    }else{
                      domUtils.setStyle(tmpNode,'text-align','');
                    }


                  }


                }
                domUtils.setStyle(img,'float', opt.imageBlockLine);
                break;
              case 'center':
                if(me.queryCommandValue('imagefloat') != 'center'){
                  pN = img.parentNode;
                  domUtils.setStyle(img,'float','none');
                  tmpNode = img;
                  while(pN && domUtils.getChildCount(pN,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1
                  && (dtd.$inline[pN.tagName] || pN.tagName == 'A')){
                    tmpNode = pN;
                    pN = pN.parentNode;
                  }
                  var pNode = me.document.createElement('p');
                  domUtils.setAttributes(pNode,{

                    style:'text-align:center'
                  });
                  tmpNode.parentNode.insertBefore(pNode,tmpNode);
                  pNode.appendChild(tmpNode);
                  domUtils.setStyle(tmpNode,'float','');

                }


            }
          } else {
            var range = me.selection.getRange();
            range.selectNode(ci).select();
            me.execCommand('imagefloat', opt.imageBlockLine);
          }

        }

        //鍘绘帀鍐椾綑鐨勬爣绛�
        if(opt.removeEmptyNode){
          if(opt.removeTagNames[ci.tagName.toLowerCase()] && domUtils.hasNoAttributes(ci) && domUtils.isEmptyBlock(ci)){
            domUtils.remove(ci);
          }
        }
      }
      if(opt.tobdc){
        var root = UE.htmlparser(cont.innerHTML);
        root.traversal(function(node){
          if(node.type == 'text'){
            node.data = ToDBC(node.data)
          }
        });
        cont.innerHTML = root.toHtml()
      }
      if(opt.bdc2sb){
        var root = UE.htmlparser(cont.innerHTML);
        root.traversal(function(node){
          if(node.type == 'text'){
            node.data = DBC2SB(node.data)
          }
        });
        cont.innerHTML = root.toHtml()
      }
      if(html){
        html.html = cont.innerHTML;
      }
    }
    if(opt.pasteFilter){
      me.addListener('beforepaste',autotype);
    }

    function DBC2SB(str) {
      var result = '';
      for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i); //鑾峰彇褰撳墠瀛楃鐨剈nicode缂栫爜
        if (code >= 65281 && code <= 65373)//鍦ㄨ繖涓猽nicode缂栫爜鑼冨洿涓殑鏄墍鏈夌殑鑻辨枃瀛楁瘝宸茬粡鍚勭瀛楃
        {
          result += String.fromCharCode(str.charCodeAt(i) - 65248); //鎶婂叏瑙掑瓧绗︾殑unicode缂栫爜杞崲涓哄搴斿崐瑙掑瓧绗︾殑unicode鐮�
        } else if (code == 12288)//绌烘牸
        {
          result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        } else {
          result += str.charAt(i);
        }
      }
      return result;
    }
    function ToDBC(txtstring) {
      txtstring = utils.html(txtstring);
      var tmp = "";
      var mark = "";/*鐢ㄤ簬鍒ゆ柇,濡傛灉鏄痟tml灏栨嫭閲岀殑鏍囪,鍒欎笉杩涜鍏ㄨ鐨勮浆鎹�*/
      for (var i = 0; i < txtstring.length; i++) {
        if (txtstring.charCodeAt(i) == 32) {
          tmp = tmp + String.fromCharCode(12288);
        }
        else if (txtstring.charCodeAt(i) < 127) {
          tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248);
        }
        else {
          tmp += txtstring.charAt(i);
        }
      }
      return tmp;
    }

    function readLocalOpts() {
      var cookieOpt = me.getPreferences('autotypeset');
      utils.extend(me.options.autotypeset, cookieOpt);
    }

    me.commands['autotypeset'] = {
      execCommand:function () {
        me.removeListener('beforepaste',autotype);
        if(opt.pasteFilter){
          me.addListener('beforepaste',autotype);
        }
        autotype.call(me)
      }

    };

  };



// plugins/autosubmit.js
  /**
   * 蹇嵎閿彁浜�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎻愪氦琛ㄥ崟
   * @command autosubmit
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'autosubmit' );
   * ```
   */

  UE.plugin.register('autosubmit',function(){
    return {
      shortcutkey:{
        "autosubmit":"ctrl+13" //鎵嬪姩鎻愪氦
      },
      commands:{
        'autosubmit':{
          execCommand:function () {
            var me=this,
              form = domUtils.findParentByTagName(me.iframe,"form", false);
            if (form){
              if(me.fireEvent("beforesubmit")===false){
                return;
              }
              me.sync();
              form.submit();
            }
          }
        }
      }
    }
  });

// plugins/background.js
  /**
   * 鑳屾櫙鎻掍欢锛屼负UEditor鎻愪緵璁剧疆鑳屾櫙鍔熻兘
   * @file
   * @since 1.2.6.1
   */
  UE.plugin.register('background', function () {
    var me = this,
      cssRuleId = 'editor_background',
      isSetColored,
      reg = new RegExp('body[\\s]*\\{(.+)\\}', 'i');

    function stringToObj(str) {
      var obj = {}, styles = str.split(';');
      utils.each(styles, function (v) {
        var index = v.indexOf(':'),
          key = utils.trim(v.substr(0, index)).toLowerCase();
        key && (obj[key] = utils.trim(v.substr(index + 1) || ''));
      });
      return obj;
    }

    function setBackground(obj) {
      if (obj) {
        var styles = [];
        for (var name in obj) {
          if (obj.hasOwnProperty(name)) {
            styles.push(name + ":" + obj[name] + '; ');
          }
        }
        utils.cssRule(cssRuleId, styles.length ? ('body{' + styles.join("") + '}') : '', me.document);
      } else {
        utils.cssRule(cssRuleId, '', me.document)
      }
    }
    //閲嶅啓editor.hasContent鏂规硶

    var orgFn = me.hasContents;
    me.hasContents = function(){
      if(me.queryCommandValue('background')){
        return true
      }
      return orgFn.apply(me,arguments);
    };
    return {
      bindEvents: {
        'getAllHtml': function (type, headHtml) {
          var body = this.body,
            su = domUtils.getComputedStyle(body, "background-image"),
            url = "";
          if (su.indexOf(me.options.imagePath) > 0) {
            url = su.substring(su.indexOf(me.options.imagePath), su.length - 1).replace(/"|\(|\)/ig, "");
          } else {
            url = su != "none" ? su.replace(/url\("?|"?\)/ig, "") : "";
          }
          var html = '<style type="text/css">body{';
          var bgObj = {
            "background-color": domUtils.getComputedStyle(body, "background-color") || "#ffffff",
            'background-image': url ? 'url(' + url + ')' : '',
            'background-repeat': domUtils.getComputedStyle(body, "background-repeat") || "",
            'background-position': browser.ie ? (domUtils.getComputedStyle(body, "background-position-x") + " " + domUtils.getComputedStyle(body, "background-position-y")) : domUtils.getComputedStyle(body, "background-position"),
            'height': domUtils.getComputedStyle(body, "height")
          };
          for (var name in bgObj) {
            if (bgObj.hasOwnProperty(name)) {
              html += name + ":" + bgObj[name] + "; ";
            }
          }
          html += '}</style> ';
          headHtml.push(html);
        },
        'aftersetcontent': function () {
          if(isSetColored == false) setBackground();
        }
      },
      inputRule: function (root) {
        isSetColored = false;
        utils.each(root.getNodesByTagName('p'), function (p) {
          var styles = p.getAttr('data-background');
          if (styles) {
            isSetColored = true;
            setBackground(stringToObj(styles));
            p.parentNode.removeChild(p);
          }
        })
      },
      outputRule: function (root) {
        var me = this,
          styles = (utils.cssRule(cssRuleId, me.document) || '').replace(/[\n\r]+/g, '').match(reg);
        if (styles) {
          root.appendChild(UE.uNode.createElement('<p style="display:none;" data-background="' + utils.trim(styles[1].replace(/"/g, '').replace(/[\s]+/g, ' ')) + '"><br/></p>'));
        }
      },
      commands: {
        'background': {
          execCommand: function (cmd, obj) {
            setBackground(obj);
          },
          queryCommandValue: function () {
            var me = this,
              styles = (utils.cssRule(cssRuleId, me.document) || '').replace(/[\n\r]+/g, '').match(reg);
            return styles ? stringToObj(styles[1]) : null;
          },
          notNeedUndo: true
        }
      }
    }
  });

// plugins/image.js
  /**
   * 鍥剧墖鎻掑叆銆佹帓鐗堟彃浠�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鍥剧墖瀵归綈鏂瑰紡
   * @command imagefloat
   * @method execCommand
   * @remind 鍊糲enter涓虹嫭鍗犱竴琛屽眳涓�
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } align 瀵归綈鏂瑰紡锛屽彲浼爈eft銆乺ight銆乶one銆乧enter
   * @remaind center琛ㄧず鍥剧墖鐙崰涓€琛�
   * @example
   * ```javascript
   * editor.execCommand( 'imagefloat', 'center' );
   * ```
   */

  /**
   * 濡傛灉閫夊尯鎵€鍦ㄤ綅缃槸鍥剧墖鍖哄煙
   * @command imagefloat
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 杩斿洖鍥剧墖瀵归綈鏂瑰紡
   * @example
   * ```javascript
   * editor.queryCommandValue( 'imagefloat' );
   * ```
   */

  UE.commands['imagefloat'] = {
    execCommand:function (cmd, align) {
      var me = this,
        range = me.selection.getRange();
      if (!range.collapsed) {
        var img = range.getClosedNode();
        if (img && img.tagName == 'IMG') {
          switch (align) {
            case 'left':
            case 'right':
            case 'none':
              var pN = img.parentNode, tmpNode, pre, next;
              while (dtd.$inline[pN.tagName] || pN.tagName == 'A') {
                pN = pN.parentNode;
              }
              tmpNode = pN;
              if (tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode, 'text-align') == 'center') {
                if (!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode, function (node) {
                    return !domUtils.isBr(node) && !domUtils.isWhitespace(node);
                  }) == 1) {
                  pre = tmpNode.previousSibling;
                  next = tmpNode.nextSibling;
                  if (pre && next && pre.nodeType == 1 && next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)) {
                    pre.appendChild(tmpNode.firstChild);
                    while (next.firstChild) {
                      pre.appendChild(next.firstChild);
                    }
                    domUtils.remove(tmpNode);
                    domUtils.remove(next);
                  } else {
                    domUtils.setStyle(tmpNode, 'text-align', '');
                  }


                }

                range.selectNode(img).select();
              }
              domUtils.setStyle(img, 'float', align == 'none' ? '' : align);
              if(align == 'none'){
                domUtils.removeAttributes(img,'align');
              }

              break;
            case 'center':
              if (me.queryCommandValue('imagefloat') != 'center') {
                pN = img.parentNode;
                domUtils.setStyle(img, 'float', '');
                domUtils.removeAttributes(img,'align');
                tmpNode = img;
                while (pN && domUtils.getChildCount(pN, function (node) {
                  return !domUtils.isBr(node) && !domUtils.isWhitespace(node);
                }) == 1
                && (dtd.$inline[pN.tagName] || pN.tagName == 'A')) {
                  tmpNode = pN;
                  pN = pN.parentNode;
                }
                range.setStartBefore(tmpNode).setCursor(false);
                pN = me.document.createElement('div');
                pN.appendChild(tmpNode);
                domUtils.setStyle(tmpNode, 'float', '');

                me.execCommand('insertHtml', '<p id="_img_parent_tmp" style="text-align:center">' + pN.innerHTML + '</p>');

                tmpNode = me.document.getElementById('_img_parent_tmp');
                tmpNode.removeAttribute('id');
                tmpNode = tmpNode.firstChild;
                range.selectNode(tmpNode).select();
                //鍘绘帀鍚庤竟澶氫綑鐨勫厓绱�
                next = tmpNode.parentNode.nextSibling;
                if (next && domUtils.isEmptyNode(next)) {
                  domUtils.remove(next);
                }

              }

              break;
          }

        }
      }
    },
    queryCommandValue:function () {
      var range = this.selection.getRange(),
        startNode, floatStyle;
      if (range.collapsed) {
        return 'none';
      }
      startNode = range.getClosedNode();
      if (startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG') {
        floatStyle = domUtils.getComputedStyle(startNode, 'float') || startNode.getAttribute('align');

        if (floatStyle == 'none') {
          floatStyle = domUtils.getComputedStyle(startNode.parentNode, 'text-align') == 'center' ? 'center' : floatStyle;
        }
        return {
          left:1,
          right:1,
          center:1
        }[floatStyle] ? floatStyle : 'none';
      }
      return 'none';


    },
    queryCommandState:function () {
      var range = this.selection.getRange(),
        startNode;

      if (range.collapsed)  return -1;

      startNode = range.getClosedNode();
      if (startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG') {
        return 0;
      }
      return -1;
    }
  };


  /**
   * 鎻掑叆鍥剧墖
   * @command insertimage
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { Object } opt 灞炴€ч敭鍊煎锛岃繖浜涘睘鎬ч兘灏嗚澶嶅埗鍒板綋鍓嶆彃鍏ュ浘鐗�
   * @remind 璇ュ懡浠ょ浜屼釜鍙傛暟鍙帴鍙椾竴涓浘鐗囬厤缃」瀵硅薄鐨勬暟缁勶紝鍙互鎻掑叆澶氬紶鍥剧墖锛�
   * 姝ゆ椂鏁扮粍鐨勬瘡涓€涓厓绱犻兘鏄竴涓狾bject绫诲瀷鐨勫浘鐗囧睘鎬ч泦鍚堛€�
   * @example
   * ```javascript
   * editor.execCommand( 'insertimage', {
 *     src:'a/b/c.jpg',
 *     width:'100',
 *     height:'100'
 * } );
   * ```
   * @example
   * ```javascript
   * editor.execCommand( 'insertimage', [{
 *     src:'a/b/c.jpg',
 *     width:'100',
 *     height:'100'
 * },{
 *     src:'a/b/d.jpg',
 *     width:'100',
 *     height:'100'
 * }] );
   * ```
   */

  UE.commands['insertimage'] = {
    execCommand:function (cmd, opt) {

      opt = utils.isArray(opt) ? opt : [opt];
      if (!opt.length) {
        return;
      }
      var me = this,
        range = me.selection.getRange(),
        img = range.getClosedNode();

      if(me.fireEvent('beforeinsertimage', opt) === true){
        return;
      }

      function unhtmlData(imgCi) {

        utils.each('width,height,border,hspace,vspace'.split(','), function (item) {

          if (imgCi[item]) {
            imgCi[item] = parseInt(imgCi[item], 10) || 0;
          }
        });

        utils.each('src,_src'.split(','), function (item) {

          if (imgCi[item]) {
            imgCi[item] = utils.unhtmlForUrl(imgCi[item]);
          }
        });
        utils.each('title,alt'.split(','), function (item) {

          if (imgCi[item]) {
            imgCi[item] = utils.unhtml(imgCi[item]);
          }
        });
      }

      if (img && /img/i.test(img.tagName) && (img.className != "edui-faked-video" || img.className.indexOf("edui-upload-video")!=-1) && !img.getAttribute("word_img")) {
        var first = opt.shift();
        var floatStyle = first['floatStyle'];
        delete first['floatStyle'];
////                img.style.border = (first.border||0) +"px solid #000";
////                img.style.margin = (first.margin||0) +"px";
//                img.style.cssText += ';margin:' + (first.margin||0) +"px;" + 'border:' + (first.border||0) +"px solid #000";
        domUtils.setAttributes(img, first);
        me.execCommand('imagefloat', floatStyle);
        if (opt.length > 0) {
          range.setStartAfter(img).setCursor(false, true);
          me.execCommand('insertimage', opt);
        }

      } else {
        var html = [], str = '', ci;
        ci = opt[0];
        if (opt.length == 1) {
          unhtmlData(ci);

          str = '<img src="' + ci.src + '" ' + (ci._src ? ' _src="' + ci._src + '" ' : '') +
            (ci.width ? 'width="' + ci.width + '" ' : '') +
            (ci.height ? ' height="' + ci.height + '" ' : '') +
            (ci['floatStyle'] == 'left' || ci['floatStyle'] == 'right' ? ' style="float:' + ci['floatStyle'] + ';"' : '') +
            (ci.title && ci.title != "" ? ' title="' + ci.title + '"' : '') +
            (ci.border && ci.border != "0" ? ' border="' + ci.border + '"' : '') +
            (ci.alt && ci.alt != "" ? ' alt="' + ci.alt + '"' : '') +
            (ci.hspace && ci.hspace != "0" ? ' hspace = "' + ci.hspace + '"' : '') +
            (ci.vspace && ci.vspace != "0" ? ' vspace = "' + ci.vspace + '"' : '') + '/>';
          if (ci['floatStyle'] == 'center') {
            str = '<p style="text-align: center">' + str + '</p>';
          }
          html.push(str);

        } else {
          for (var i = 0; ci = opt[i++];) {
            unhtmlData(ci);
            str = '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="' + ci.src + '" ' +
              (ci.width ? 'width="' + ci.width + '" ' : '') + (ci._src ? ' _src="' + ci._src + '" ' : '') +
              (ci.height ? ' height="' + ci.height + '" ' : '') +
              ' style="' + (ci['floatStyle'] && ci['floatStyle'] != 'center' ? 'float:' + ci['floatStyle'] + ';' : '') +
              (ci.border || '') + '" ' +
              (ci.title ? ' title="' + ci.title + '"' : '') + ' /></p>';
            html.push(str);
          }
        }

        me.execCommand('insertHtml', html.join(''));
      }

      me.fireEvent('afterinsertimage', opt)
    }
  };


// plugins/justify.js
  /**
   * 娈佃惤鏍煎紡
   * @file
   * @since 1.2.6.1
   */

  /**
   * 娈佃惤瀵归綈鏂瑰紡
   * @command justify
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } align 瀵归綈鏂瑰紡锛歭eft => 灞呭乏锛宺ight => 灞呭彸锛宑enter => 灞呬腑锛宩ustify => 涓ょ瀵归綈
   * @example
   * ```javascript
   * editor.execCommand( 'justify', 'center' );
   * ```
   */
  /**
   * 濡傛灉閫夊尯鎵€鍦ㄤ綅缃槸娈佃惤鍖哄煙锛岃繑鍥炲綋鍓嶆钀藉榻愭柟寮�
   * @command justify
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 杩斿洖娈佃惤瀵归綈鏂瑰紡
   * @example
   * ```javascript
   * editor.queryCommandValue( 'justify' );
   * ```
   */

  UE.plugins['justify']=function(){
    var me=this,
      block = domUtils.isBlockElm,
      defaultValue = {
        left:1,
        right:1,
        center:1,
        justify:1
      },
      doJustify = function (range, style) {
        var bookmark = range.createBookmark(),
          filterFn = function (node) {
            return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' && !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node);
          };

        range.enlarge(true);
        var bookmark2 = range.createBookmark(),
          current = domUtils.getNextDomNode(bookmark2.start, false, filterFn),
          tmpRange = range.cloneRange(),
          tmpNode;
        while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {
          if (current.nodeType == 3 || !block(current)) {
            tmpRange.setStartBefore(current);
            while (current && current !== bookmark2.end && !block(current)) {
              tmpNode = current;
              current = domUtils.getNextDomNode(current, false, null, function (node) {
                return !block(node);
              });
            }
            tmpRange.setEndAfter(tmpNode);
            var common = tmpRange.getCommonAncestor();
            if (!domUtils.isBody(common) && block(common)) {
              domUtils.setStyles(common, utils.isString(style) ? {'text-align':style} : style);
              current = common;
            } else {
              var p = range.document.createElement('p');
              domUtils.setStyles(p, utils.isString(style) ? {'text-align':style} : style);
              var frag = tmpRange.extractContents();
              p.appendChild(frag);
              tmpRange.insertNode(p);
              current = p;
            }
            current = domUtils.getNextDomNode(current, false, filterFn);
          } else {
            current = domUtils.getNextDomNode(current, true, filterFn);
          }
        }
        return range.moveToBookmark(bookmark2).moveToBookmark(bookmark);
      };

    UE.commands['justify'] = {
      execCommand:function (cmdName, align) {
        var range = this.selection.getRange(),
          txt;

        //闂悎鏃跺崟鐙鐞�
        if (range.collapsed) {
          txt = this.document.createTextNode('p');
          range.insertNode(txt);
        }
        doJustify(range, align);
        if (txt) {
          range.setStartBefore(txt).collapse(true);
          domUtils.remove(txt);
        }

        range.select();


        return true;
      },
      queryCommandValue:function () {
        var startNode = this.selection.getStart(),
          value = domUtils.getComputedStyle(startNode, 'text-align');
        return defaultValue[value] ? value : 'left';
      },
      queryCommandState:function () {
        var start = this.selection.getStart(),
          cell = start && domUtils.findParentByTagName(start, ["td", "th","caption"], true);

        return cell? -1:0;
      }

    };
  };


// plugins/font.js
  /**
   * 瀛椾綋棰滆壊,鑳屾櫙鑹�,瀛楀彿,瀛椾綋,涓嬪垝绾�,鍒犻櫎绾�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 瀛椾綋棰滆壊
   * @command forecolor
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } value 鑹插€�(蹇呴』鍗佸叚杩涘埗)
   * @example
   * ```javascript
   * editor.execCommand( 'forecolor', '#000' );
   * ```
   */
  /**
   * 杩斿洖閫夊尯瀛椾綋棰滆壊
   * @command forecolor
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 杩斿洖瀛椾綋棰滆壊
   * @example
   * ```javascript
   * editor.queryCommandValue( 'forecolor' );
   * ```
   */

  /**
   * 瀛椾綋鑳屾櫙棰滆壊
   * @command backcolor
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } value 鑹插€�(蹇呴』鍗佸叚杩涘埗)
   * @example
   * ```javascript
   * editor.execCommand( 'backcolor', '#000' );
   * ```
   */
  /**
   * 杩斿洖閫夊尯瀛椾綋棰滆壊
   * @command backcolor
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 杩斿洖瀛椾綋鑳屾櫙棰滆壊
   * @example
   * ```javascript
   * editor.queryCommandValue( 'backcolor' );
   * ```
   */

  /**
   * 瀛椾綋澶у皬
   * @command fontsize
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } value 瀛椾綋澶у皬
   * @example
   * ```javascript
   * editor.execCommand( 'fontsize', '14px' );
   * ```
   */
  /**
   * 杩斿洖閫夊尯瀛椾綋澶у皬
   * @command fontsize
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 杩斿洖瀛椾綋澶у皬
   * @example
   * ```javascript
   * editor.queryCommandValue( 'fontsize' );
   * ```
   */

  /**
   * 瀛椾綋鏍峰紡
   * @command fontfamily
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } value 瀛椾綋鏍峰紡
   * @example
   * ```javascript
   * editor.execCommand( 'fontfamily', '寰蒋闆呴粦' );
   * ```
   */
  /**
   * 杩斿洖閫夊尯瀛椾綋鏍峰紡
   * @command fontfamily
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 杩斿洖瀛椾綋鏍峰紡
   * @example
   * ```javascript
   * editor.queryCommandValue( 'fontfamily' );
   * ```
   */

  /**
   * 瀛椾綋涓嬪垝绾�,涓庡垹闄ょ嚎浜掓枼
   * @command underline
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'underline' );
   * ```
   */

  /**
   * 瀛椾綋鍒犻櫎绾�,涓庝笅鍒掔嚎浜掓枼
   * @command strikethrough
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'strikethrough' );
   * ```
   */

  /**
   * 瀛椾綋杈规
   * @command fontborder
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'fontborder' );
   * ```
   */

  UE.plugins['font'] = function () {
    var me = this,
      fonts = {
        'forecolor': 'color',
        'backcolor': 'background-color',
        'fontsize': 'font-size',
        'fontfamily': 'font-family',
        'underline': 'text-decoration',
        'strikethrough': 'text-decoration',
        'fontborder': 'border'
      },
      needCmd = {'underline': 1, 'strikethrough': 1, 'fontborder': 1},
      needSetChild = {
        'forecolor': 'color',
        'backcolor': 'background-color',
        'fontsize': 'font-size',
        'fontfamily': 'font-family'

      };
    me.setOpt({
      'fontfamily': [
        { name: 'songti', val: '瀹嬩綋,SimSun'},
        { name: 'yahei', val: '寰蒋闆呴粦,Microsoft YaHei'},
        { name: 'kaiti', val: '妤蜂綋,妤蜂綋_GB2312, SimKai'},
        { name: 'heiti', val: '榛戜綋, SimHei'},
        { name: 'lishu', val: '闅朵功, SimLi'},
        { name: 'andaleMono', val: 'andale mono'},
        { name: 'arial', val: 'arial, helvetica,sans-serif'},
        { name: 'arialBlack', val: 'arial black,avant garde'},
        { name: 'comicSansMs', val: 'comic sans ms'},
        { name: 'impact', val: 'impact,chicago'},
        { name: 'timesNewRoman', val: 'times new roman'}
      ],
      'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36]
    });

    function mergeWithParent(node){
      var parent;
      while(parent = node.parentNode){
        if(parent.tagName == 'SPAN' && domUtils.getChildCount(parent,function(child){
            return !domUtils.isBookmarkNode(child) && !domUtils.isBr(child)
          }) == 1) {
          parent.style.cssText += node.style.cssText;
          domUtils.remove(node,true);
          node = parent;

        }else{
          break;
        }
      }

    }
    function mergeChild(rng,cmdName,value){
      if(needSetChild[cmdName]){
        rng.adjustmentBoundary();
        if(!rng.collapsed && rng.startContainer.nodeType == 1){
          var start = rng.startContainer.childNodes[rng.startOffset];
          if(start && domUtils.isTagNode(start,'span')){
            var bk = rng.createBookmark();
            utils.each(domUtils.getElementsByTagName(start, 'span'), function (span) {
              if (!span.parentNode || domUtils.isBookmarkNode(span))return;
              if(cmdName == 'backcolor' && domUtils.getComputedStyle(span,'background-color').toLowerCase() === value){
                return;
              }
              domUtils.removeStyle(span,needSetChild[cmdName]);
              if(span.style.cssText.replace(/^\s+$/,'').length == 0){
                domUtils.remove(span,true)
              }
            });
            rng.moveToBookmark(bk)
          }
        }
      }

    }
    function mergesibling(rng,cmdName,value) {
      var collapsed = rng.collapsed,
        bk = rng.createBookmark(), common;
      if (collapsed) {
        common = bk.start.parentNode;
        while (dtd.$inline[common.tagName]) {
          common = common.parentNode;
        }
      } else {
        common = domUtils.getCommonAncestor(bk.start, bk.end);
      }
      utils.each(domUtils.getElementsByTagName(common, 'span'), function (span) {
        if (!span.parentNode || domUtils.isBookmarkNode(span))return;
        if (/\s*border\s*:\s*none;?\s*/i.test(span.style.cssText)) {
          if(/^\s*border\s*:\s*none;?\s*$/.test(span.style.cssText)){
            domUtils.remove(span, true);
          }else{
            domUtils.removeStyle(span,'border');
          }
          return
        }
        if (/border/i.test(span.style.cssText) && span.parentNode.tagName == 'SPAN' && /border/i.test(span.parentNode.style.cssText)) {
          span.style.cssText = span.style.cssText.replace(/border[^:]*:[^;]+;?/gi, '');
        }
        if(!(cmdName=='fontborder' && value=='none')){
          var next = span.nextSibling;
          while (next && next.nodeType == 1 && next.tagName == 'SPAN' ) {
            if(domUtils.isBookmarkNode(next) && cmdName == 'fontborder') {
              span.appendChild(next);
              next = span.nextSibling;
              continue;
            }
            if (next.style.cssText == span.style.cssText) {
              domUtils.moveChild(next, span);
              domUtils.remove(next);
            }
            if (span.nextSibling === next)
              break;
            next = span.nextSibling;
          }
        }


        mergeWithParent(span);
        if(browser.ie && browser.version > 8 ){
          //鎷疯礉鐖朵翰浠殑鐗瑰埆鐨勫睘鎬�,杩欓噷鍙仛鑳屾櫙棰滆壊鐨勫鐞�
          var parent = domUtils.findParent(span,function(n){return n.tagName == 'SPAN' && /background-color/.test(n.style.cssText)});
          if(parent && !/background-color/.test(span.style.cssText)){
            span.style.backgroundColor = parent.style.backgroundColor;
          }
        }

      });
      rng.moveToBookmark(bk);
      mergeChild(rng,cmdName,value)
    }

    me.addInputRule(function (root) {
      utils.each(root.getNodesByTagName('u s del font strike'), function (node) {
        if (node.tagName == 'font') {
          var cssStyle = [];
          for (var p in node.attrs) {
            switch (p) {
              case 'size':
                cssStyle.push('font-size:' +
                  ({
                    '1':'10',
                    '2':'12',
                    '3':'16',
                    '4':'18',
                    '5':'24',
                    '6':'32',
                    '7':'48'
                  }[node.attrs[p]] || node.attrs[p]) + 'px');
                break;
              case 'color':
                cssStyle.push('color:' + node.attrs[p]);
                break;
              case 'face':
                cssStyle.push('font-family:' + node.attrs[p]);
                break;
              case 'style':
                cssStyle.push(node.attrs[p]);
            }
          }
          node.attrs = {
            'style': cssStyle.join(';')
          };
        } else {
          var val = node.tagName == 'u' ? 'underline' : 'line-through';
          node.attrs = {
            'style': (node.getAttr('style') || '') + 'text-decoration:' + val + ';'
          }
        }
        node.tagName = 'span';
      });
//        utils.each(root.getNodesByTagName('span'), function (node) {
//            var val;
//            if(val = node.getAttr('class')){
//                if(/fontstrikethrough/.test(val)){
//                    node.setStyle('text-decoration','line-through');
//                    if(node.attrs['class']){
//                        node.attrs['class'] = node.attrs['class'].replace(/fontstrikethrough/,'');
//                    }else{
//                        node.setAttr('class')
//                    }
//                }
//                if(/fontborder/.test(val)){
//                    node.setStyle('border','1px solid #000');
//                    if(node.attrs['class']){
//                        node.attrs['class'] = node.attrs['class'].replace(/fontborder/,'');
//                    }else{
//                        node.setAttr('class')
//                    }
//                }
//            }
//        });
    });
//    me.addOutputRule(function(root){
//        utils.each(root.getNodesByTagName('span'), function (node) {
//            var val;
//            if(val = node.getStyle('text-decoration')){
//                if(/line-through/.test(val)){
//                    if(node.attrs['class']){
//                        node.attrs['class'] += ' fontstrikethrough';
//                    }else{
//                        node.setAttr('class','fontstrikethrough')
//                    }
//                }
//
//                node.setStyle('text-decoration')
//            }
//            if(val = node.getStyle('border')){
//                if(/1px/.test(val) && /solid/.test(val)){
//                    if(node.attrs['class']){
//                        node.attrs['class'] += ' fontborder';
//
//                    }else{
//                        node.setAttr('class','fontborder')
//                    }
//                }
//                node.setStyle('border')
//
//            }
//        });
//    });
    for (var p in fonts) {
      (function (cmd, style) {
        UE.commands[cmd] = {
          execCommand: function (cmdName, value) {
            value = value || (this.queryCommandState(cmdName) ? 'none' : cmdName == 'underline' ? 'underline' :
                cmdName == 'fontborder' ? '1px solid #000' :
                  'line-through');
            var me = this,
              range = this.selection.getRange(),
              text;

            if (value == 'default') {

              if (range.collapsed) {
                text = me.document.createTextNode('font');
                range.insertNode(text).select();

              }
              me.execCommand('removeFormat', 'span,a', style);
              if (text) {
                range.setStartBefore(text).collapse(true);
                domUtils.remove(text);
              }
              mergesibling(range,cmdName,value);
              range.select()
            } else {
              if (!range.collapsed) {
                if (needCmd[cmd] && me.queryCommandValue(cmd)) {
                  me.execCommand('removeFormat', 'span,a', style);
                }
                range = me.selection.getRange();

                range.applyInlineStyle('span', {'style': style + ':' + value});
                mergesibling(range, cmdName,value);
                range.select();
              } else {

                var span = domUtils.findParentByTagName(range.startContainer, 'span', true);
                text = me.document.createTextNode('font');
                if (span && !span.children.length && !span[browser.ie ? 'innerText' : 'textContent'].replace(fillCharReg, '').length) {
                  //for ie hack when enter
                  range.insertNode(text);
                  if (needCmd[cmd]) {
                    range.selectNode(text).select();
                    me.execCommand('removeFormat', 'span,a', style, null);

                    span = domUtils.findParentByTagName(text, 'span', true);
                    range.setStartBefore(text);

                  }
                  span && (span.style.cssText += ';' + style + ':' + value);
                  range.collapse(true).select();


                } else {
                  range.insertNode(text);
                  range.selectNode(text).select();
                  span = range.document.createElement('span');

                  if (needCmd[cmd]) {
                    //a鏍囩鍐呯殑涓嶅鐞嗚烦杩�
                    if (domUtils.findParentByTagName(text, 'a', true)) {
                      range.setStartBefore(text).setCursor();
                      domUtils.remove(text);
                      return;
                    }
                    me.execCommand('removeFormat', 'span,a', style);
                  }

                  span.style.cssText = style + ':' + value;


                  text.parentNode.insertBefore(span, text);
                  //淇锛宻pan濂梥pan 浣嗘牱寮忎笉缁ф壙鐨勯棶棰�
                  if (!browser.ie || browser.ie && browser.version == 9) {
                    var spanParent = span.parentNode;
                    while (!domUtils.isBlockElm(spanParent)) {
                      if (spanParent.tagName == 'SPAN') {
                        //opera鍚堝苟style涓嶄細鍔犲叆";"
                        span.style.cssText = spanParent.style.cssText + ";" + span.style.cssText;
                      }
                      spanParent = spanParent.parentNode;
                    }
                  }


                  if (opera) {
                    setTimeout(function () {
                      range.setStart(span, 0).collapse(true);
                      mergesibling(range, cmdName,value);
                      range.select();
                    });
                  } else {
                    range.setStart(span, 0).collapse(true);
                    mergesibling(range,cmdName,value);
                    range.select();
                  }

                  //trace:981
                  //domUtils.mergeToParent(span)
                }
                domUtils.remove(text);
              }


            }
            return true;
          },
          queryCommandValue: function (cmdName) {
            var startNode = this.selection.getStart();

            //trace:946
            if (cmdName == 'underline' || cmdName == 'strikethrough') {
              var tmpNode = startNode, value;
              while (tmpNode && !domUtils.isBlockElm(tmpNode) && !domUtils.isBody(tmpNode)) {
                if (tmpNode.nodeType == 1) {
                  value = domUtils.getComputedStyle(tmpNode, style);
                  if (value != 'none') {
                    return value;
                  }
                }

                tmpNode = tmpNode.parentNode;
              }
              return 'none';
            }
            if (cmdName == 'fontborder') {
              var tmp = startNode, val;
              while (tmp && dtd.$inline[tmp.tagName]) {
                if (val = domUtils.getComputedStyle(tmp, 'border')) {

                  if (/1px/.test(val) && /solid/.test(val)) {
                    return val;
                  }
                }
                tmp = tmp.parentNode;
              }
              return ''
            }

            if( cmdName == 'FontSize' ) {
              var styleVal = domUtils.getComputedStyle(startNode, style),
                tmp = /^([\d\.]+)(\w+)$/.exec( styleVal );

              if( tmp ) {

                return Math.floor( tmp[1] ) + tmp[2];

              }

              return styleVal;

            }

            return  domUtils.getComputedStyle(startNode, style);
          },
          queryCommandState: function (cmdName) {
            if (!needCmd[cmdName])
              return 0;
            var val = this.queryCommandValue(cmdName);
            if (cmdName == 'fontborder') {
              return /1px/.test(val) && /solid/.test(val)
            } else {
              return  cmdName == 'underline' ? /underline/.test(val) : /line\-through/.test(val);

            }

          }
        };
      })(p, fonts[p]);
    }
  };

// plugins/link.js
  /**
   * 瓒呴摼鎺�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎻掑叆瓒呴摼鎺�
   * @command link
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { Object } options   璁剧疆鑷畾涔夊睘鎬э紝渚嬪锛歶rl銆乼itle銆乼arget
   * @example
   * ```javascript
   * editor.execCommand( 'link', '{
 *     url:'ueditor.baidu.com',
 *     title:'ueditor',
 *     target:'_blank'
 * }' );
   * ```
   */
  /**
   * 杩斿洖褰撳墠閫変腑鐨勭涓€涓秴閾炬帴鑺傜偣
   * @command link
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { Element } 瓒呴摼鎺ヨ妭鐐�
   * @example
   * ```javascript
   * editor.queryCommandValue( 'link' );
   * ```
   */

  /**
   * 鍙栨秷瓒呴摼鎺�
   * @command unlink
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'unlink');
   * ```
   */

  UE.plugins['link'] = function(){
    function optimize( range ) {
      var start = range.startContainer,end = range.endContainer;

      if ( start = domUtils.findParentByTagName( start, 'a', true ) ) {
        range.setStartBefore( start );
      }
      if ( end = domUtils.findParentByTagName( end, 'a', true ) ) {
        range.setEndAfter( end );
      }
    }


    UE.commands['unlink'] = {
      execCommand : function() {
        var range = this.selection.getRange(),
          bookmark;
        if(range.collapsed && !domUtils.findParentByTagName( range.startContainer, 'a', true )){
          return;
        }
        bookmark = range.createBookmark();
        optimize( range );
        range.removeInlineStyle( 'a' ).moveToBookmark( bookmark ).select();
      },
      queryCommandState : function(){
        return !this.highlight && this.queryCommandValue('link') ?  0 : -1;
      }

    };
    function doLink(range,opt,me){
      var rngClone = range.cloneRange(),
        link = me.queryCommandValue('link');
      optimize( range = range.adjustmentBoundary() );
      var start = range.startContainer;
      if(start.nodeType == 1 && link){
        start = start.childNodes[range.startOffset];
        if(start && start.nodeType == 1 && start.tagName == 'A' && /^(?:https?|ftp|file)\s*:\s*\/\//.test(start[browser.ie?'innerText':'textContent'])){
          start[browser.ie ? 'innerText' : 'textContent'] =  utils.html(opt.textValue||opt.href);

        }
      }
      if( !rngClone.collapsed || link){
        range.removeInlineStyle( 'a' );
        rngClone = range.cloneRange();
      }

      if ( rngClone.collapsed ) {
        var a = range.document.createElement( 'a'),
          text = '';
        if(opt.textValue){

          text =   utils.html(opt.textValue);
          delete opt.textValue;
        }else{
          text =   utils.html(opt.href);

        }
        domUtils.setAttributes( a, opt );
        start =  domUtils.findParentByTagName( rngClone.startContainer, 'a', true );
        if(start && domUtils.isInNodeEndBoundary(rngClone,start)){
          range.setStartAfter(start).collapse(true);

        }
        a[browser.ie ? 'innerText' : 'textContent'] = text;
        range.insertNode(a).selectNode( a );
      } else {
        range.applyInlineStyle( 'a', opt );

      }
    }
    UE.commands['link'] = {
      execCommand : function( cmdName, opt ) {
        var range;
        opt._href && (opt._href = utils.unhtml(opt._href,/[<">]/g));
        opt.href && (opt.href = utils.unhtml(opt.href,/[<">]/g));
        opt.textValue && (opt.textValue = utils.unhtml(opt.textValue,/[<">]/g));
        doLink(range=this.selection.getRange(),opt,this);
        //闂悎閮戒笉鍔犲崰浣嶇锛屽鏋滃姞浜嗕細鍦╝鍚庤竟澶氫釜鍗犱綅绗﹁妭鐐癸紝瀵艰嚧a鏄浘鐗囪儗鏅粍鎴愮殑鍒楄〃锛屽嚭鐜扮┖鐧介棶棰�
        range.collapse().select(true);

      },
      queryCommandValue : function() {
        var range = this.selection.getRange(),
          node;
        if ( range.collapsed ) {
//                    node = this.selection.getStart();
          //鍦╥e涓媑etstart()鍙栧€煎亸涓婁簡
          node = range.startContainer;
          node = node.nodeType == 1 ? node : node.parentNode;

          if ( node && (node = domUtils.findParentByTagName( node, 'a', true )) && ! domUtils.isInNodeEndBoundary(range,node)) {

            return node;
          }
        } else {
          //trace:1111  濡傛灉鏄�<p><a>xx</a></p> startContainer鏄痯灏变細鎵句笉鍒癮
          range.shrinkBoundary();
          var start = range.startContainer.nodeType  == 3 || !range.startContainer.childNodes[range.startOffset] ? range.startContainer : range.startContainer.childNodes[range.startOffset],
            end =  range.endContainer.nodeType == 3 || range.endOffset == 0 ? range.endContainer : range.endContainer.childNodes[range.endOffset-1],
            common = range.getCommonAncestor();
          node = domUtils.findParentByTagName( common, 'a', true );
          if ( !node && common.nodeType == 1){

            var as = common.getElementsByTagName( 'a' ),
              ps,pe;

            for ( var i = 0,ci; ci = as[i++]; ) {
              ps = domUtils.getPosition( ci, start ),pe = domUtils.getPosition( ci,end);
              if ( (ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                &&
                (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
              ) {
                node = ci;
                break;
              }
            }
          }
          return node;
        }

      },
      queryCommandState : function() {
        //鍒ゆ柇濡傛灉鏄棰戠殑璇濊繛鎺ヤ笉鍙敤
        //fix 853
        var img = this.selection.getRange().getClosedNode(),
          flag = img && (img.className == "edui-faked-video" || img.className.indexOf("edui-upload-video")!=-1);
        return flag ? -1 : 0;
      }
    };
  };

// plugins/iframe.js
///import core
///import plugins\inserthtml.js
///commands 鎻掑叆妗嗘灦
///commandsName  InsertFrame
///commandsTitle  鎻掑叆Iframe
///commandsDialog  dialogs\insertframe

  UE.plugins['insertframe'] = function() {
    var me =this;
    function deleteIframe(){
      me._iframe && delete me._iframe;
    }

    me.addListener("selectionchange",function(){
      deleteIframe();
    });

  };



// plugins/scrawl.js
///import core
///commands 娑傞甫
///commandsName  Scrawl
///commandsTitle  娑傞甫
///commandsDialog  dialogs\scrawl
  UE.commands['scrawl'] = {
    queryCommandState : function(){
      return ( browser.ie && browser.version  <= 8 ) ? -1 :0;
    }
  };


// plugins/removeformat.js
  /**
   * 娓呴櫎鏍煎紡
   * @file
   * @since 1.2.6.1
   */

  /**
   * 娓呴櫎鏂囧瓧鏍峰紡
   * @command removeformat
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param   {String}   tags     浠ラ€楀彿闅斿紑鐨勬爣绛俱€傚锛歴trong
   * @param   {String}   style    鏍峰紡濡傦細color
   * @param   {String}   attrs    灞炴€у:width
   * @example
   * ```javascript
   * editor.execCommand( 'removeformat', 'strong','color','width' );
   * ```
   */

  UE.plugins['removeformat'] = function(){
    var me = this;
    me.setOpt({
      'removeFormatTags': 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var',
      'removeFormatAttributes':'class,style,lang,width,height,align,hspace,valign'
    });
    me.commands['removeformat'] = {
      execCommand : function( cmdName, tags, style, attrs,notIncludeA ) {

        var tagReg = new RegExp( '^(?:' + (tags || this.options.removeFormatTags).replace( /,/g, '|' ) + ')$', 'i' ) ,
          removeFormatAttributes = style ? [] : (attrs || this.options.removeFormatAttributes).split( ',' ),
          range = new dom.Range( this.document ),
          bookmark,node,parent,
          filter = function( node ) {
            return node.nodeType == 1;
          };

        function isRedundantSpan (node) {
          if (node.nodeType == 3 || node.tagName.toLowerCase() != 'span'){
            return 0;
          }
          if (browser.ie) {
            //ie 涓嬪垽鏂疄鏁堬紝鎵€浠ュ彧鑳界畝鍗曠敤style鏉ュ垽鏂�
            //return node.style.cssText == '' ? 1 : 0;
            var attrs = node.attributes;
            if ( attrs.length ) {
              for ( var i = 0,l = attrs.length; i<l; i++ ) {
                if ( attrs[i].specified ) {
                  return 0;
                }
              }
              return 1;
            }
          }
          return !node.attributes.length;
        }
        function doRemove( range ) {

          var bookmark1 = range.createBookmark();
          if ( range.collapsed ) {
            range.enlarge( true );
          }

          //涓嶈兘鎶奱鏍囩鍒囦簡
          if(!notIncludeA){
            var aNode = domUtils.findParentByTagName(range.startContainer,'a',true);
            if(aNode){
              range.setStartBefore(aNode);
            }

            aNode = domUtils.findParentByTagName(range.endContainer,'a',true);
            if(aNode){
              range.setEndAfter(aNode);
            }

          }


          bookmark = range.createBookmark();

          node = bookmark.start;

          //鍒囧紑濮�
          while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
            domUtils.breakParent( node, parent );

            domUtils.clearEmptySibling( node );
          }
          if ( bookmark.end ) {
            //鍒囩粨鏉�
            node = bookmark.end;
            while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
              domUtils.breakParent( node, parent );
              domUtils.clearEmptySibling( node );
            }

            //寮€濮嬪幓闄ゆ牱寮�
            var current = domUtils.getNextDomNode( bookmark.start, false, filter ),
              next;
            while ( current ) {
              if ( current == bookmark.end ) {
                break;
              }

              next = domUtils.getNextDomNode( current, true, filter );

              if ( !dtd.$empty[current.tagName.toLowerCase()] && !domUtils.isBookmarkNode( current ) ) {
                if ( tagReg.test( current.tagName ) ) {
                  if ( style ) {
                    domUtils.removeStyle( current, style );
                    if ( isRedundantSpan( current ) && style != 'text-decoration'){
                      domUtils.remove( current, true );
                    }
                  } else {
                    domUtils.remove( current, true );
                  }
                } else {
                  //trace:939  涓嶈兘鎶妉ist涓婄殑鏍峰紡鍘绘帀
                  if(!dtd.$tableContent[current.tagName] && !dtd.$list[current.tagName]){
                    domUtils.removeAttributes( current, removeFormatAttributes );
                    if ( isRedundantSpan( current ) ){
                      domUtils.remove( current, true );
                    }
                  }

                }
              }
              current = next;
            }
          }
          //trace:1035
          //trace:1096 涓嶈兘鎶妕d涓婄殑鏍峰紡鍘绘帀锛屾瘮濡傝竟妗�
          var pN = bookmark.start.parentNode;
          if(domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]){
            domUtils.removeAttributes(  pN,removeFormatAttributes );
          }
          pN = bookmark.end.parentNode;
          if(bookmark.end && domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName]&& !dtd.$list[pN.tagName]){
            domUtils.removeAttributes(  pN,removeFormatAttributes );
          }
          range.moveToBookmark( bookmark ).moveToBookmark(bookmark1);
          //娓呴櫎鍐椾綑鐨勪唬鐮� <b><bookmark></b>
          var node = range.startContainer,
            tmp,
            collapsed = range.collapsed;
          while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
            tmp = node.parentNode;
            range.setStartBefore(node);
            //trace:937
            //鏇存柊缁撴潫杈圭晫
            if(range.startContainer === range.endContainer){
              range.endOffset--;
            }
            domUtils.remove(node);
            node = tmp;
          }

          if(!collapsed){
            node = range.endContainer;
            while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
              tmp = node.parentNode;
              range.setEndBefore(node);
              domUtils.remove(node);

              node = tmp;
            }


          }
        }



        range = this.selection.getRange();
        doRemove( range );
        range.select();

      }

    };

  };


// plugins/blockquote.js
  /**
   * 娣诲姞寮曠敤
   * @file
   * @since 1.2.6.1
   */

  /**
   * 娣诲姞寮曠敤
   * @command blockquote
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'blockquote' );
   * ```
   */

  /**
   * 娣诲姞寮曠敤
   * @command blockquote
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { Object } attrs 鑺傜偣灞炴€�
   * @example
   * ```javascript
   * editor.execCommand( 'blockquote',{
 *     style: "color: red;"
 * } );
   * ```
   */


  UE.plugins['blockquote'] = function(){
    var me = this;
    function getObj(editor){
      return domUtils.filterNodeList(editor.selection.getStartElementPath(),'blockquote');
    }
    me.commands['blockquote'] = {
      execCommand : function( cmdName, attrs ) {
        var range = this.selection.getRange(),
          obj = getObj(this),
          blockquote = dtd.blockquote,
          bookmark = range.createBookmark();

        if ( obj ) {

          var start = range.startContainer,
            startBlock = domUtils.isBlockElm(start) ? start : domUtils.findParent(start,function(node){return domUtils.isBlockElm(node)}),

            end = range.endContainer,
            endBlock = domUtils.isBlockElm(end) ? end :  domUtils.findParent(end,function(node){return domUtils.isBlockElm(node)});

          //澶勭悊涓€涓媗i
          startBlock = domUtils.findParentByTagName(startBlock,'li',true) || startBlock;
          endBlock = domUtils.findParentByTagName(endBlock,'li',true) || endBlock;


          if(startBlock.tagName == 'LI' || startBlock.tagName == 'TD' || startBlock === obj || domUtils.isBody(startBlock)){
            domUtils.remove(obj,true);
          }else{
            domUtils.breakParent(startBlock,obj);
          }

          if(startBlock !== endBlock){
            obj = domUtils.findParentByTagName(endBlock,'blockquote');
            if(obj){
              if(endBlock.tagName == 'LI' || endBlock.tagName == 'TD'|| domUtils.isBody(endBlock)){
                obj.parentNode && domUtils.remove(obj,true);
              }else{
                domUtils.breakParent(endBlock,obj);
              }

            }
          }

          var blockquotes = domUtils.getElementsByTagName(this.document,'blockquote');
          for(var i=0,bi;bi=blockquotes[i++];){
            if(!bi.childNodes.length){
              domUtils.remove(bi);
            }else if(domUtils.getPosition(bi,startBlock)&domUtils.POSITION_FOLLOWING && domUtils.getPosition(bi,endBlock)&domUtils.POSITION_PRECEDING){
              domUtils.remove(bi,true);
            }
          }




        } else {

          var tmpRange = range.cloneRange(),
            node = tmpRange.startContainer.nodeType == 1 ? tmpRange.startContainer : tmpRange.startContainer.parentNode,
            preNode = node,
            doEnd = 1;

          //璋冩暣寮€濮�
          while ( 1 ) {
            if ( domUtils.isBody(node) ) {
              if ( preNode !== node ) {
                if ( range.collapsed ) {
                  tmpRange.selectNode( preNode );
                  doEnd = 0;
                } else {
                  tmpRange.setStartBefore( preNode );
                }
              }else{
                tmpRange.setStart(node,0);
              }

              break;
            }
            if ( !blockquote[node.tagName] ) {
              if ( range.collapsed ) {
                tmpRange.selectNode( preNode );
              } else{
                tmpRange.setStartBefore( preNode);
              }
              break;
            }

            preNode = node;
            node = node.parentNode;
          }

          //璋冩暣缁撴潫
          if ( doEnd ) {
            preNode = node =  node = tmpRange.endContainer.nodeType == 1 ? tmpRange.endContainer : tmpRange.endContainer.parentNode;
            while ( 1 ) {

              if ( domUtils.isBody( node ) ) {
                if ( preNode !== node ) {

                  tmpRange.setEndAfter( preNode );

                } else {
                  tmpRange.setEnd( node, node.childNodes.length );
                }

                break;
              }
              if ( !blockquote[node.tagName] ) {
                tmpRange.setEndAfter( preNode );
                break;
              }

              preNode = node;
              node = node.parentNode;
            }

          }


          node = range.document.createElement( 'blockquote' );
          domUtils.setAttributes( node, attrs );
          node.appendChild( tmpRange.extractContents() );
          tmpRange.insertNode( node );
          //鍘婚櫎閲嶅鐨�
          var childs = domUtils.getElementsByTagName(node,'blockquote');
          for(var i=0,ci;ci=childs[i++];){
            if(ci.parentNode){
              domUtils.remove(ci,true);
            }
          }

        }
        range.moveToBookmark( bookmark ).select();
      },
      queryCommandState : function() {
        return getObj(this) ? 1 : 0;
      }
    };
  };



// plugins/convertcase.js
  /**
   * 澶у皬鍐欒浆鎹�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎶婇€夊尯鍐呮枃鏈彉澶у啓锛屼笌鈥渢olowercase鈥濆懡浠や簰鏂�
   * @command touppercase
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'touppercase' );
   * ```
   */

  /**
   * 鎶婇€夊尯鍐呮枃鏈彉灏忓啓锛屼笌鈥渢ouppercase鈥濆懡浠や簰鏂�
   * @command tolowercase
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'tolowercase' );
   * ```
   */
  UE.commands['touppercase'] =
    UE.commands['tolowercase'] = {
      execCommand:function (cmd) {
        var me = this;
        var rng = me.selection.getRange();
        if(rng.collapsed){
          return rng;
        }
        var bk = rng.createBookmark(),
          bkEnd = bk.end,
          filterFn = function( node ) {
            return !domUtils.isBr(node) && !domUtils.isWhitespace( node );
          },
          curNode = domUtils.getNextDomNode( bk.start, false, filterFn );
        while ( curNode && (domUtils.getPosition( curNode, bkEnd ) & domUtils.POSITION_PRECEDING) ) {

          if ( curNode.nodeType == 3 ) {
            curNode.nodeValue = curNode.nodeValue[cmd == 'touppercase' ? 'toUpperCase' : 'toLowerCase']();
          }
          curNode = domUtils.getNextDomNode( curNode, true, filterFn );
          if(curNode === bkEnd){
            break;
          }

        }
        rng.moveToBookmark(bk).select();
      }
    };



// plugins/indent.js
  /**
   * 棣栬缂╄繘
   * @file
   * @since 1.2.6.1
   */

  /**
   * 缂╄繘
   * @command indent
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'indent' );
   * ```
   */
  UE.commands['indent'] = {
    execCommand : function() {
      var me = this,value = me.queryCommandState("indent") ? "0em" : (me.options.indentValue || '2em');
      me.execCommand('Paragraph','p',{style:'text-indent:'+ value});
    },
    queryCommandState : function() {
      var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
      return pN && pN.style.textIndent && parseInt(pN.style.textIndent) ?  1 : 0;
    }

  };


// plugins/print.js
  /**
   * 鎵撳嵃
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎵撳嵃
   * @command print
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'print' );
   * ```
   */
  UE.commands['print'] = {
    execCommand : function(){
      this.window.print();
    },
    notNeedUndo : 1
  };



// plugins/preview.js
  /**
   * 棰勮
   * @file
   * @since 1.2.6.1
   */

  /**
   * 棰勮
   * @command preview
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'preview' );
   * ```
   */
  UE.commands['preview'] = {
    execCommand : function(){
      var w = window.open('', '_blank', ''),
        d = w.document;
      d.open();
      d.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="'+this.options.UEDITOR_HOME_URL+'ueditor.parse.js"></script><script>' +
        "setTimeout(function(){uParse('div',{rootPath: '"+ this.options.UEDITOR_HOME_URL +"'})},300)" +
        '</script></head><body><div>'+this.getContent(null,null,true)+'</div></body></html>');
      d.close();
    },
    notNeedUndo : 1
  };


// plugins/selectall.js
  /**
   * 鍏ㄩ€�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 閫変腑鎵€鏈夊唴瀹�
   * @command selectall
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'selectall' );
   * ```
   */
  UE.plugins['selectall'] = function(){
    var me = this;
    me.commands['selectall'] = {
      execCommand : function(){
        //鍘绘帀浜嗗師鐢熺殑selectAll,鍥犱负浼氬嚭鐜版姤閿欏拰褰撳唴瀹逛负绌烘椂锛屼笉鑳藉嚭鐜伴棴鍚堢姸鎬佺殑鍏夋爣
        var me = this,body = me.body,
          range = me.selection.getRange();
        range.selectNodeContents(body);
        if(domUtils.isEmptyBlock(body)){
          //opera涓嶈兘鑷姩鍚堝苟鍒板厓绱犵殑閲岃竟锛岃鎵嬪姩澶勭悊涓€涓�
          if(browser.opera && body.firstChild && body.firstChild.nodeType == 1){
            range.setStartAtFirst(body.firstChild);
          }
          range.collapse(true);
        }
        range.select(true);
      },
      notNeedUndo : 1
    };


    //蹇嵎閿�
    me.addshortcutkey({
      "selectAll" : "ctrl+65"
    });
  };


// plugins/paragraph.js
  /**
   * 娈佃惤鏍峰紡
   * @file
   * @since 1.2.6.1
   */

  /**
   * 娈佃惤鏍煎紡
   * @command paragraph
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param {String}   style               鏍囩鍊间负锛�'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
   * @param {Object}   attrs               鏍囩鐨勫睘鎬�
   * @example
   * ```javascript
   * editor.execCommand( 'Paragraph','h1','{
 *     class:'test'
 * }' );
   * ```
   */

  /**
   * 杩斿洖閫夊尯鍐呰妭鐐规爣绛惧悕
   * @command paragraph
   * @method queryCommandValue
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @return { String } 鑺傜偣鏍囩鍚�
   * @example
   * ```javascript
   * editor.queryCommandValue( 'Paragraph' );
   * ```
   */

  UE.plugins['paragraph'] = function() {
    var me = this,
      block = domUtils.isBlockElm,
      notExchange = ['TD','LI','PRE'],

      doParagraph = function(range,style,attrs,sourceCmdName){
        var bookmark = range.createBookmark(),
          filterFn = function( node ) {
            return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node );
          },
          para;

        range.enlarge( true );
        var bookmark2 = range.createBookmark(),
          current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
          tmpRange = range.cloneRange(),
          tmpNode;
        while ( current && !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
          if ( current.nodeType == 3 || !block( current ) ) {
            tmpRange.setStartBefore( current );
            while ( current && current !== bookmark2.end && !block( current ) ) {
              tmpNode = current;
              current = domUtils.getNextDomNode( current, false, null, function( node ) {
                return !block( node );
              } );
            }
            tmpRange.setEndAfter( tmpNode );

            para = range.document.createElement( style );
            if(attrs){
              domUtils.setAttributes(para,attrs);
              if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                para.style.cssText = attrs.style;
              }
            }
            para.appendChild( tmpRange.extractContents() );
            //闇€瑕佸唴瀹瑰崰浣�
            if(domUtils.isEmptyNode(para)){
              domUtils.fillChar(range.document,para);

            }

            tmpRange.insertNode( para );

            var parent = para.parentNode;
            //濡傛灉para涓婁竴绾ф槸涓€涓猙lock鍏冪礌涓斾笉鏄痓ody,td灏卞垹闄ゅ畠
            if ( block( parent ) && !domUtils.isBody( para.parentNode ) && utils.indexOf(notExchange,parent.tagName)==-1) {
              //瀛樺偍dir,style
              if(!(sourceCmdName && sourceCmdName == 'customstyle')){
                parent.getAttribute('dir') && para.setAttribute('dir',parent.getAttribute('dir'));
                //trace:1070
                parent.style.cssText && (para.style.cssText = parent.style.cssText + ';' + para.style.cssText);
                //trace:1030
                parent.style.textAlign && !para.style.textAlign && (para.style.textAlign = parent.style.textAlign);
                parent.style.textIndent && !para.style.textIndent && (para.style.textIndent = parent.style.textIndent);
                parent.style.padding && !para.style.padding && (para.style.padding = parent.style.padding);
              }

              //trace:1706 閫夋嫨鐨勫氨鏄痟1-6瑕佸垹闄�
              if(attrs && /h\d/i.test(parent.tagName) && !/h\d/i.test(para.tagName) ){
                domUtils.setAttributes(parent,attrs);
                if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                  parent.style.cssText = attrs.style;
                }
                domUtils.remove(para,true);
                para = parent;
              }else{
                domUtils.remove( para.parentNode, true );
              }

            }
            if(  utils.indexOf(notExchange,parent.tagName)!=-1){
              current = parent;
            }else{
              current = para;
            }


            current = domUtils.getNextDomNode( current, false, filterFn );
          } else {
            current = domUtils.getNextDomNode( current, true, filterFn );
          }
        }
        return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
      };
    me.setOpt('paragraph',{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''});
    me.commands['paragraph'] = {
      execCommand : function( cmdName, style,attrs,sourceCmdName ) {
        var range = this.selection.getRange();
        //闂悎鏃跺崟鐙鐞�
        if(range.collapsed){
          var txt = this.document.createTextNode('p');
          range.insertNode(txt);
          //鍘绘帀鍐椾綑鐨刦illchar
          if(browser.ie){
            var node = txt.previousSibling;
            if(node && domUtils.isWhitespace(node)){
              domUtils.remove(node);
            }
            node = txt.nextSibling;
            if(node && domUtils.isWhitespace(node)){
              domUtils.remove(node);
            }
          }

        }
        range = doParagraph(range,style,attrs,sourceCmdName);
        if(txt){
          range.setStartBefore(txt).collapse(true);
          pN = txt.parentNode;

          domUtils.remove(txt);

          if(domUtils.isBlockElm(pN)&&domUtils.isEmptyNode(pN)){
            domUtils.fillNode(this.document,pN);
          }

        }

        if(browser.gecko && range.collapsed && range.startContainer.nodeType == 1){
          var child = range.startContainer.childNodes[range.startOffset];
          if(child && child.nodeType == 1 && child.tagName.toLowerCase() == style){
            range.setStart(child,0).collapse(true);
          }
        }
        //trace:1097 鍘熸潵鏈塼rue锛屽師鍥犲繕浜嗭紝浣嗗幓浜嗗氨涓嶈兘娓呴櫎澶氫綑鐨勫崰浣嶇浜�
        range.select();


        return true;
      },
      queryCommandValue : function() {
        var node = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
        return node ? node.tagName.toLowerCase() : '';
      }
    };
  };


// plugins/directionality.js
  /**
   * 璁剧疆鏂囧瓧杈撳叆鐨勬柟鍚戠殑鎻掍欢
   * @file
   * @since 1.2.6.1
   */
  (function() {
    var block = domUtils.isBlockElm ,
      getObj = function(editor){
//            var startNode = editor.selection.getStart(),
//                parents;
//            if ( startNode ) {
//                //鏌ユ壘鎵€鏈夌殑鏄痓lock鐨勭埗浜茶妭鐐�
//                parents = domUtils.findParents( startNode, true, block, true );
//                for ( var i = 0,ci; ci = parents[i++]; ) {
//                    if ( ci.getAttribute( 'dir' ) ) {
//                        return ci;
//                    }
//                }
//            }
        return domUtils.filterNodeList(editor.selection.getStartElementPath(),function(n){return n && n.nodeType == 1 && n.getAttribute('dir')});

      },
      doDirectionality = function(range,editor,forward){

        var bookmark,
          filterFn = function( node ) {
            return   node.nodeType == 1 ? !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node);
          },

          obj = getObj( editor );

        if ( obj && range.collapsed ) {
          obj.setAttribute( 'dir', forward );
          return range;
        }
        bookmark = range.createBookmark();
        range.enlarge( true );
        var bookmark2 = range.createBookmark(),
          current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
          tmpRange = range.cloneRange(),
          tmpNode;
        while ( current &&  !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
          if ( current.nodeType == 3 || !block( current ) ) {
            tmpRange.setStartBefore( current );
            while ( current && current !== bookmark2.end && !block( current ) ) {
              tmpNode = current;
              current = domUtils.getNextDomNode( current, false, null, function( node ) {
                return !block( node );
              } );
            }
            tmpRange.setEndAfter( tmpNode );
            var common = tmpRange.getCommonAncestor();
            if ( !domUtils.isBody( common ) && block( common ) ) {
              //閬嶅巻鍒颁簡block鑺傜偣
              common.setAttribute( 'dir', forward );
              current = common;
            } else {
              //娌℃湁閬嶅巻鍒帮紝娣诲姞涓€涓猙lock鑺傜偣
              var p = range.document.createElement( 'p' );
              p.setAttribute( 'dir', forward );
              var frag = tmpRange.extractContents();
              p.appendChild( frag );
              tmpRange.insertNode( p );
              current = p;
            }

            current = domUtils.getNextDomNode( current, false, filterFn );
          } else {
            current = domUtils.getNextDomNode( current, true, filterFn );
          }
        }
        return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
      };

    /**
     * 鏂囧瓧杈撳叆鏂瑰悜
     * @command directionality
     * @method execCommand
     * @param { String } cmdName 鍛戒护瀛楃涓�
     * @param { String } forward 浼犲叆'ltr'琛ㄧず浠庡乏鍚戝彸杈撳叆锛屼紶鍏�'rtl'琛ㄧず浠庡彸鍚戝乏杈撳叆
     * @example
     * ```javascript
     * editor.execCommand( 'directionality', 'ltr');
     * ```
     */

    /**
     * 鏌ヨ褰撳墠閫夊尯鐨勬枃瀛楄緭鍏ユ柟鍚�
     * @command directionality
     * @method queryCommandValue
     * @param { String } cmdName 鍛戒护瀛楃涓�
     * @return { String } 杩斿洖'ltr'琛ㄧず浠庡乏鍚戝彸杈撳叆锛岃繑鍥�'rtl'琛ㄧず浠庡彸鍚戝乏杈撳叆
     * @example
     * ```javascript
     * editor.queryCommandValue( 'directionality');
     * ```
     */
    UE.commands['directionality'] = {
      execCommand : function( cmdName,forward ) {
        var range = this.selection.getRange();
        //闂悎鏃跺崟鐙鐞�
        if(range.collapsed){
          var txt = this.document.createTextNode('d');
          range.insertNode(txt);
        }
        doDirectionality(range,this,forward);
        if(txt){
          range.setStartBefore(txt).collapse(true);
          domUtils.remove(txt);
        }

        range.select();
        return true;
      },
      queryCommandValue : function() {
        var node = getObj(this);
        return node ? node.getAttribute('dir') : 'ltr';
      }
    };
  })();



// plugins/horizontal.js
  /**
   * 鎻掑叆鍒嗗壊绾挎彃浠�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎻掑叆鍒嗗壊绾�
   * @command horizontal
   * @method execCommand
   * @param { String } cmdName 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'horizontal' );
   * ```
   */
  UE.plugins['horizontal'] = function(){
    var me = this;
    me.commands['horizontal'] = {
      execCommand : function( cmdName ) {
        var me = this;
        if(me.queryCommandState(cmdName)!==-1){
          me.execCommand('insertHtml','<hr>');
          var range = me.selection.getRange(),
            start = range.startContainer;
          if(start.nodeType == 1 && !start.childNodes[range.startOffset] ){

            var tmp;
            if(tmp = start.childNodes[range.startOffset - 1]){
              if(tmp.nodeType == 1 && tmp.tagName == 'HR'){
                if(me.options.enterTag == 'p'){
                  tmp = me.document.createElement('p');
                  range.insertNode(tmp);
                  range.setStart(tmp,0).setCursor();

                }else{
                  tmp = me.document.createElement('br');
                  range.insertNode(tmp);
                  range.setStartBefore(tmp).setCursor();
                }
              }
            }

          }
          return true;
        }

      },
      //杈圭晫鍦╰able閲屼笉鑳藉姞鍒嗛殧绾�
      queryCommandState : function() {
        return domUtils.filterNodeList(this.selection.getStartElementPath(),'table') ? -1 : 0;
      }
    };
//    me.addListener('delkeyup',function(){
//        var rng = this.selection.getRange();
//        if(browser.ie && browser.version > 8){
//            rng.txtToElmBoundary(true);
//            if(domUtils.isStartInblock(rng)){
//                var tmpNode = rng.startContainer;
//                var pre = tmpNode.previousSibling;
//                if(pre && domUtils.isTagNode(pre,'hr')){
//                    domUtils.remove(pre);
//                    rng.select();
//                    return;
//                }
//            }
//        }
//        if(domUtils.isBody(rng.startContainer)){
//            var hr = rng.startContainer.childNodes[rng.startOffset -1];
//            if(hr && hr.nodeName == 'HR'){
//                var next = hr.nextSibling;
//                if(next){
//                    rng.setStart(next,0)
//                }else if(hr.previousSibling){
//                    rng.setStartAtLast(hr.previousSibling)
//                }else{
//                    var p = this.document.createElement('p');
//                    hr.parentNode.insertBefore(p,hr);
//                    domUtils.fillNode(this.document,p);
//                    rng.setStart(p,0);
//                }
//                domUtils.remove(hr);
//                rng.setCursor(false,true);
//            }
//        }
//    })
    me.addListener('delkeydown',function(name,evt){
      var rng = this.selection.getRange();
      rng.txtToElmBoundary(true);
      if(domUtils.isStartInblock(rng)){
        var tmpNode = rng.startContainer;
        var pre = tmpNode.previousSibling;
        if(pre && domUtils.isTagNode(pre,'hr')){
          domUtils.remove(pre);
          rng.select();
          domUtils.preventDefault(evt);
          return true;

        }
      }

    })
  };



// plugins/time.js
  /**
   * 鎻掑叆鏃堕棿鍜屾棩鏈�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎻掑叆鏃堕棿锛岄粯璁ゆ牸寮忥細12:59:59
   * @command time
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'time');
   * ```
   */

  /**
   * 鎻掑叆鏃ユ湡锛岄粯璁ゆ牸寮忥細2013-08-30
   * @command date
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'date');
   * ```
   */
  UE.commands['time'] = UE.commands["date"] = {
    execCommand : function(cmd, format){
      var date = new Date;

      function formatTime(date, format) {
        var hh = ('0' + date.getHours()).slice(-2),
          ii = ('0' + date.getMinutes()).slice(-2),
          ss = ('0' + date.getSeconds()).slice(-2);
        format = format || 'hh:ii:ss';
        return format.replace(/hh/ig, hh).replace(/ii/ig, ii).replace(/ss/ig, ss);
      }
      function formatDate(date, format) {
        var yyyy = ('000' + date.getFullYear()).slice(-4),
          yy = yyyy.slice(-2),
          mm = ('0' + (date.getMonth()+1)).slice(-2),
          dd = ('0' + date.getDate()).slice(-2);
        format = format || 'yyyy-mm-dd';
        return format.replace(/yyyy/ig, yyyy).replace(/yy/ig, yy).replace(/mm/ig, mm).replace(/dd/ig, dd);
      }

      this.execCommand('insertHtml',cmd == "time" ? formatTime(date, format):formatDate(date, format) );
    }
  };


// plugins/rowspacing.js
  /**
   * 娈靛墠娈靛悗闂磋窛鎻掍欢
   * @file
   * @since 1.2.6.1
   */

  /**
   * 璁剧疆娈甸棿璺�
   * @command rowspacing
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @param { String } value 娈甸棿璺濈殑鍊硷紝浠x涓哄崟浣�
   * @param { String } dir 闂磋窛浣嶇疆锛宼op鎴朾ottom锛屽垎鍒〃绀烘鍓嶅拰娈靛悗
   * @example
   * ```javascript
   * editor.execCommand( 'rowspacing', '10', 'top' );
   * ```
   */

  UE.plugins['rowspacing'] = function(){
    var me = this;
    me.setOpt({
      'rowspacingtop':['5', '10', '15', '20', '25'],
      'rowspacingbottom':['5', '10', '15', '20', '25']

    });
    me.commands['rowspacing'] =  {
      execCommand : function( cmdName,value,dir ) {
        this.execCommand('paragraph','p',{style:'margin-'+dir+':'+value + 'px'});
        return true;
      },
      queryCommandValue : function(cmdName,dir) {
        var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node) }),
          value;
        //trace:1026
        if(pN){
          value = domUtils.getComputedStyle(pN,'margin-'+dir).replace(/[^\d]/g,'');
          return !value ? 0 : value;
        }
        return 0;

      }
    };
  };




// plugins/lineheight.js
  /**
   * 璁剧疆琛屽唴闂磋窛
   * @file
   * @since 1.2.6.1
   */
  UE.plugins['lineheight'] = function(){
    var me = this;
    me.setOpt({'lineheight':['1', '1.5','1.75','2', '3', '4', '5']});

    /**
     * 琛岃窛
     * @command lineheight
     * @method execCommand
     * @param { String } cmdName 鍛戒护瀛楃涓�
     * @param { String } value 浼犲叆鐨勮楂樺€硷紝 璇ュ€兼槸褰撳墠瀛椾綋鐨勫€嶆暟锛� 渚嬪锛� 1.5, 1.75
     * @example
     * ```javascript
     * editor.execCommand( 'lineheight', 1.5);
     * ```
     */
    /**
     * 鏌ヨ褰撳墠閫夊尯鍐呭鐨勮楂樺ぇ灏�
     * @command lineheight
     * @method queryCommandValue
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @return { String } 杩斿洖褰撳墠琛岄珮澶у皬
     * @example
     * ```javascript
     * editor.queryCommandValue( 'lineheight' );
     * ```
     */

    me.commands['lineheight'] =  {
      execCommand : function( cmdName,value ) {
        this.execCommand('paragraph','p',{style:'line-height:'+ (value == "1" ? "normal" : value + 'em') });
        return true;
      },
      queryCommandValue : function() {
        var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node)});
        if(pN){
          var value = domUtils.getComputedStyle(pN,'line-height');
          return value == 'normal' ? 1 : value.replace(/[^\d.]*/ig,"");
        }
      }
    };
  };




// plugins/insertcode.js
  /**
   * 鎻掑叆浠ｇ爜鎻掍欢
   * @file
   * @since 1.2.6.1
   */

  UE.plugins['insertcode'] = function() {
    var me = this;
    me.ready(function(){
      utils.cssRule('pre','pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}',
        me.document)
    });
    me.setOpt('insertcode',{
      'as3':'ActionScript3',
      'bash':'Bash/Shell',
      'cpp':'C/C++',
      'css':'Css',
      'cf':'CodeFunction',
      'c#':'C#',
      'delphi':'Delphi',
      'diff':'Diff',
      'erlang':'Erlang',
      'groovy':'Groovy',
      'html':'Html',
      'java':'Java',
      'jfx':'JavaFx',
      'js':'Javascript',
      'pl':'Perl',
      'php':'Php',
      'plain':'Plain Text',
      'ps':'PowerShell',
      'python':'Python',
      'ruby':'Ruby',
      'scala':'Scala',
      'sql':'Sql',
      'vb':'Vb',
      'xml':'Xml'
    });

    /**
     * 鎻掑叆浠ｇ爜
     * @command insertcode
     * @method execCommand
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @param { String } lang 鎻掑叆浠ｇ爜鐨勮瑷€
     * @example
     * ```javascript
     * editor.execCommand( 'insertcode', 'javascript' );
     * ```
     */

    /**
     * 濡傛灉閫夊尯鎵€鍦ㄤ綅缃槸鎻掑叆鎻掑叆浠ｇ爜鍖哄煙锛岃繑鍥炰唬鐮佺殑璇█
     * @command insertcode
     * @method queryCommandValue
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @return { String } 杩斿洖浠ｇ爜鐨勮瑷€
     * @example
     * ```javascript
     * editor.queryCommandValue( 'insertcode' );
     * ```
     */

    me.commands['insertcode'] = {
      execCommand : function(cmd,lang){
        var me = this,
          rng = me.selection.getRange(),
          pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
        if(pre){
          pre.className = 'brush:'+lang+';toolbar:false;';
        }else{
          var code = '';
          if(rng.collapsed){
            code = browser.ie && browser.ie11below ? (browser.version <= 8 ? '&nbsp;':''):'<br/>';
          }else{
            var frag = rng.extractContents();
            var div = me.document.createElement('div');
            div.appendChild(frag);

            utils.each(UE.filterNode(UE.htmlparser(div.innerHTML.replace(/[\r\t]/g,'')),me.options.filterTxtRules).children,function(node){
              if(browser.ie && browser.ie11below && browser.version > 8){

                if(node.type =='element'){
                  if(node.tagName == 'br'){
                    code += '\n'
                  }else if(!dtd.$empty[node.tagName]){
                    utils.each(node.children,function(cn){
                      if(cn.type =='element'){
                        if(cn.tagName == 'br'){
                          code += '\n'
                        }else if(!dtd.$empty[node.tagName]){
                          code += cn.innerText();
                        }
                      }else{
                        code += cn.data
                      }
                    })
                    if(!/\n$/.test(code)){
                      code += '\n';
                    }
                  }
                }else{
                  code += node.data + '\n'
                }
                if(!node.nextSibling() && /\n$/.test(code)){
                  code = code.replace(/\n$/,'');
                }
              }else{
                if(browser.ie && browser.ie11below){

                  if(node.type =='element'){
                    if(node.tagName == 'br'){
                      code += '<br>'
                    }else if(!dtd.$empty[node.tagName]){
                      utils.each(node.children,function(cn){
                        if(cn.type =='element'){
                          if(cn.tagName == 'br'){
                            code += '<br>'
                          }else if(!dtd.$empty[node.tagName]){
                            code += cn.innerText();
                          }
                        }else{
                          code += cn.data
                        }
                      });
                      if(!/br>$/.test(code)){
                        code += '<br>';
                      }
                    }
                  }else{
                    code += node.data + '<br>'
                  }
                  if(!node.nextSibling() && /<br>$/.test(code)){
                    code = code.replace(/<br>$/,'');
                  }

                }else{
                  code += (node.type == 'element' ? (dtd.$empty[node.tagName] ?  '' : node.innerText()) : node.data);
                  if(!/br\/?\s*>$/.test(code)){
                    if(!node.nextSibling())
                      return;
                    code += '<br>'
                  }
                }

              }

            });
          }
          me.execCommand('inserthtml','<pre id="coder"class="brush:'+lang+';toolbar:false">'+code+'</pre>',true);

          pre = me.document.getElementById('coder');
          domUtils.removeAttributes(pre,'id');
          var tmpNode = pre.previousSibling;

          if(tmpNode && (tmpNode.nodeType == 3 && tmpNode.nodeValue.length == 1 && browser.ie && browser.version == 6 ||  domUtils.isEmptyBlock(tmpNode))){

            domUtils.remove(tmpNode)
          }
          var rng = me.selection.getRange();
          if(domUtils.isEmptyBlock(pre)){
            rng.setStart(pre,0).setCursor(false,true)
          }else{
            rng.selectNodeContents(pre).select()
          }
        }



      },
      queryCommandValue : function(){
        var path = this.selection.getStartElementPath();
        var lang = '';
        utils.each(path,function(node){
          if(node.nodeName =='PRE'){
            var match = node.className.match(/brush:([^;]+)/);
            lang = match && match[1] ? match[1] : '';
            return false;
          }
        });
        return lang;
      }
    };

    me.addInputRule(function(root){
      utils.each(root.getNodesByTagName('pre'),function(pre){
        var brs = pre.getNodesByTagName('br');
        if(brs.length){
          browser.ie && browser.ie11below && browser.version > 8 && utils.each(brs,function(br){
            var txt = UE.uNode.createText('\n');
            br.parentNode.insertBefore(txt,br);
            br.parentNode.removeChild(br);
          });
          return;
        }
        if(browser.ie && browser.ie11below && browser.version > 8)
          return;
        var code = pre.innerText().split(/\n/);
        pre.innerHTML('');
        utils.each(code,function(c){
          if(c.length){
            pre.appendChild(UE.uNode.createText(c));
          }
          pre.appendChild(UE.uNode.createElement('br'))
        })
      })
    });
    me.addOutputRule(function(root){
      utils.each(root.getNodesByTagName('pre'),function(pre){
        var code = '';
        utils.each(pre.children,function(n){
          if(n.type == 'text'){
            //鍦╥e涓嬫枃鏈唴瀹规湁鍙兘鏈熬甯︽湁\n瑕佸幓鎺�
            //trace:3396
            code += n.data.replace(/[ ]/g,'&nbsp;').replace(/\n$/,'');
          }else{
            if(n.tagName == 'br'){
              code  += '\n'
            }else{
              code += (!dtd.$empty[n.tagName] ? '' : n.innerText());
            }

          }

        });

        pre.innerText(code.replace(/(&nbsp;|\n)+$/,''))
      })
    });
    //涓嶉渶瑕佸垽鏂環ighlight鐨刢ommand鍒楄〃
    me.notNeedCodeQuery ={
      help:1,
      undo:1,
      redo:1,
      source:1,
      print:1,
      searchreplace:1,
      fullscreen:1,
      preview:1,
      insertparagraph:1,
      elementpath:1,
      insertcode:1,
      inserthtml:1,
      selectall:1
    };
    //灏唓ueyCommamndState閲嶇疆
    var orgQuery = me.queryCommandState;
    me.queryCommandState = function(cmd){
      var me = this;

      if(!me.notNeedCodeQuery[cmd.toLowerCase()] && me.selection && me.queryCommandValue('insertcode')){
        return -1;
      }
      return UE.Editor.prototype.queryCommandState.apply(this,arguments)
    };
    me.addListener('beforeenterkeydown',function(){
      var rng = me.selection.getRange();
      var pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
      if(pre){
        me.fireEvent('saveScene');
        if(!rng.collapsed){
          rng.deleteContents();
        }
        if(!browser.ie || browser.ie9above){
          var tmpNode = me.document.createElement('br'),pre;
          rng.insertNode(tmpNode).setStartAfter(tmpNode).collapse(true);
          var next = tmpNode.nextSibling;
          if(!next && (!browser.ie || browser.version > 10)){
            rng.insertNode(tmpNode.cloneNode(false));
          }else{
            rng.setStartAfter(tmpNode);
          }
          pre = tmpNode.previousSibling;
          var tmp;
          while(pre ){
            tmp = pre;
            pre = pre.previousSibling;
            if(!pre || pre.nodeName == 'BR'){
              pre = tmp;
              break;
            }
          }
          if(pre){
            var str = '';
            while(pre && pre.nodeName != 'BR' &&  new RegExp('^[\\s'+domUtils.fillChar+']*$').test(pre.nodeValue)){
              str += pre.nodeValue;
              pre = pre.nextSibling;
            }
            if(pre.nodeName != 'BR'){
              var match = pre.nodeValue.match(new RegExp('^([\\s'+domUtils.fillChar+']+)'));
              if(match && match[1]){
                str += match[1]
              }

            }
            if(str){
              str = me.document.createTextNode(str);
              rng.insertNode(str).setStartAfter(str);
            }
          }
          rng.collapse(true).select(true);
        }else{
          if(browser.version > 8){

            var txt = me.document.createTextNode('\n');
            var start = rng.startContainer;
            if(rng.startOffset == 0){
              var preNode = start.previousSibling;
              if(preNode){
                rng.insertNode(txt);
                var fillchar = me.document.createTextNode(' ');
                rng.setStartAfter(txt).insertNode(fillchar).setStart(fillchar,0).collapse(true).select(true)
              }
            }else{
              rng.insertNode(txt).setStartAfter(txt);
              var fillchar = me.document.createTextNode(' ');
              start = rng.startContainer.childNodes[rng.startOffset];
              if(start && !/^\n/.test(start.nodeValue)){
                rng.setStartBefore(txt)
              }
              rng.insertNode(fillchar).setStart(fillchar,0).collapse(true).select(true)
            }

          }else{
            var tmpNode = me.document.createElement('br');
            rng.insertNode(tmpNode);
            rng.insertNode(me.document.createTextNode(domUtils.fillChar));
            rng.setStartAfter(tmpNode);
            pre = tmpNode.previousSibling;
            var tmp;
            while(pre ){
              tmp = pre;
              pre = pre.previousSibling;
              if(!pre || pre.nodeName == 'BR'){
                pre = tmp;
                break;
              }
            }
            if(pre){
              var str = '';
              while(pre && pre.nodeName != 'BR' &&  new RegExp('^[ '+domUtils.fillChar+']*$').test(pre.nodeValue)){
                str += pre.nodeValue;
                pre = pre.nextSibling;
              }
              if(pre.nodeName != 'BR'){
                var match = pre.nodeValue.match(new RegExp('^([ '+domUtils.fillChar+']+)'));
                if(match && match[1]){
                  str += match[1]
                }

              }

              str = me.document.createTextNode(str);
              rng.insertNode(str).setStartAfter(str);
            }
            rng.collapse(true).select();
          }


        }
        me.fireEvent('saveScene');
        return true;
      }


    });

    me.addListener('tabkeydown',function(cmd,evt){
      var rng = me.selection.getRange();
      var pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
      if(pre){
        me.fireEvent('saveScene');
        if(evt.shiftKey){

        }else{
          if(!rng.collapsed){
            var bk = rng.createBookmark();
            var start = bk.start.previousSibling;

            while(start){
              if(pre.firstChild === start && !domUtils.isBr(start)){
                pre.insertBefore(me.document.createTextNode('    '),start);

                break;
              }
              if(domUtils.isBr(start)){
                pre.insertBefore(me.document.createTextNode('    '),start.nextSibling);

                break;
              }
              start = start.previousSibling;
            }
            var end = bk.end;
            start = bk.start.nextSibling;
            if(pre.firstChild === bk.start){
              pre.insertBefore(me.document.createTextNode('    '),start.nextSibling)

            }
            while(start && start !== end){
              if(domUtils.isBr(start) && start.nextSibling){
                if(start.nextSibling === end){
                  break;
                }
                pre.insertBefore(me.document.createTextNode('    '),start.nextSibling)
              }

              start = start.nextSibling;
            }
            rng.moveToBookmark(bk).select();
          }else{
            var tmpNode = me.document.createTextNode('    ');
            rng.insertNode(tmpNode).setStartAfter(tmpNode).collapse(true).select(true);
          }
        }


        me.fireEvent('saveScene');
        return true;
      }


    });


    me.addListener('beforeinserthtml',function(evtName,html){
      var me = this,
        rng = me.selection.getRange(),
        pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
      if(pre){
        if(!rng.collapsed){
          rng.deleteContents()
        }
        var htmlstr = '';
        if(browser.ie && browser.version > 8){

          utils.each(UE.filterNode(UE.htmlparser(html),me.options.filterTxtRules).children,function(node){
            if(node.type =='element'){
              if(node.tagName == 'br'){
                htmlstr += '\n'
              }else if(!dtd.$empty[node.tagName]){
                utils.each(node.children,function(cn){
                  if(cn.type =='element'){
                    if(cn.tagName == 'br'){
                      htmlstr += '\n'
                    }else if(!dtd.$empty[node.tagName]){
                      htmlstr += cn.innerText();
                    }
                  }else{
                    htmlstr += cn.data
                  }
                })
                if(!/\n$/.test(htmlstr)){
                  htmlstr += '\n';
                }
              }
            }else{
              htmlstr += node.data + '\n'
            }
            if(!node.nextSibling() && /\n$/.test(htmlstr)){
              htmlstr = htmlstr.replace(/\n$/,'');
            }
          });
          var tmpNode = me.document.createTextNode(utils.html(htmlstr.replace(/&nbsp;/g,' ')));
          rng.insertNode(tmpNode).selectNode(tmpNode).select();
        }else{
          var frag = me.document.createDocumentFragment();

          utils.each(UE.filterNode(UE.htmlparser(html),me.options.filterTxtRules).children,function(node){
            if(node.type =='element'){
              if(node.tagName == 'br'){
                frag.appendChild(me.document.createElement('br'))
              }else if(!dtd.$empty[node.tagName]){
                utils.each(node.children,function(cn){
                  if(cn.type =='element'){
                    if(cn.tagName == 'br'){

                      frag.appendChild(me.document.createElement('br'))
                    }else if(!dtd.$empty[node.tagName]){
                      frag.appendChild(me.document.createTextNode(utils.html(cn.innerText().replace(/&nbsp;/g,' '))));

                    }
                  }else{
                    frag.appendChild(me.document.createTextNode(utils.html( cn.data.replace(/&nbsp;/g,' '))));

                  }
                })
                if(frag.lastChild.nodeName != 'BR'){
                  frag.appendChild(me.document.createElement('br'))
                }
              }
            }else{
              frag.appendChild(me.document.createTextNode(utils.html( node.data.replace(/&nbsp;/g,' '))));
            }
            if(!node.nextSibling() && frag.lastChild.nodeName == 'BR'){
              frag.removeChild(frag.lastChild)
            }


          });
          rng.insertNode(frag).select();

        }

        return true;
      }
    });
    //鏂瑰悜閿殑澶勭悊
    me.addListener('keydown',function(cmd,evt){
      var me = this,keyCode = evt.keyCode || evt.which;
      if(keyCode == 40){
        var rng = me.selection.getRange(),pre,start = rng.startContainer;
        if(rng.collapsed && (pre = domUtils.findParentByTagName(rng.startContainer,'pre',true)) && !pre.nextSibling){
          var last = pre.lastChild
          while(last && last.nodeName == 'BR'){
            last = last.previousSibling;
          }
          if(last === start || rng.startContainer === pre && rng.startOffset == pre.childNodes.length){
            me.execCommand('insertparagraph');
            domUtils.preventDefault(evt)
          }

        }
      }
    });
    //trace:3395
    me.addListener('delkeydown',function(type,evt){
      var rng = this.selection.getRange();
      rng.txtToElmBoundary(true);
      var start = rng.startContainer;
      if(domUtils.isTagNode(start,'pre') && rng.collapsed && domUtils.isStartInblock(rng)){
        var p = me.document.createElement('p');
        domUtils.fillNode(me.document,p);
        start.parentNode.insertBefore(p,start);
        domUtils.remove(start);
        rng.setStart(p,0).setCursor(false,true);
        domUtils.preventDefault(evt);
        return true;
      }
    })
  };


// plugins/cleardoc.js
  /**
   * 娓呯┖鏂囨。鎻掍欢
   * @file
   * @since 1.2.6.1
   */

  /**
   * 娓呯┖鏂囨。
   * @command cleardoc
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * //editor 鏄紪杈戝櫒瀹炰緥
   * editor.execCommand('cleardoc');
   * ```
   */

  UE.commands['cleardoc'] = {
    execCommand : function( cmdName) {
      var me = this,
        enterTag = me.options.enterTag,
        range = me.selection.getRange();
      if(enterTag == "br"){
        me.body.innerHTML = "<br/>";
        range.setStart(me.body,0).setCursor();
      }else{
        me.body.innerHTML = "<p>"+(ie ? "" : "<br/>")+"</p>";
        range.setStart(me.body.firstChild,0).setCursor(false,true);
      }
      setTimeout(function(){
        me.fireEvent("clearDoc");
      },0);

    }
  };



// plugins/anchor.js
  /**
   * 閿氱偣鎻掍欢锛屼负UEditor鎻愪緵鎻掑叆閿氱偣鏀寔
   * @file
   * @since 1.2.6.1
   */
  UE.plugin.register('anchor', function (){

    return {
      bindEvents:{
        'ready':function(){
          utils.cssRule('anchor',
            '.anchorclass{background: url(\''
            + this.options.themePath
            + this.options.theme +'/images/anchor.gif\') no-repeat scroll left center transparent;cursor: auto;display: inline-block;height: 16px;width: 15px;}',
            this.document);
        }
      },
      outputRule: function(root){
        utils.each(root.getNodesByTagName('img'),function(a){
          var val;
          if(val = a.getAttr('anchorname')){
            a.tagName = 'a';
            a.setAttr({
              anchorname : '',
              name : val,
              'class' : ''
            })
          }
        })
      },
      inputRule:function(root){
        utils.each(root.getNodesByTagName('a'),function(a){
          var val;
          if((val = a.getAttr('name')) && !a.getAttr('href')){
            a.tagName = 'img';
            a.setAttr({
              anchorname :a.getAttr('name'),
              'class' : 'anchorclass'
            });
            a.setAttr('name')

          }
        })

      },
      commands:{
        /**
         * 鎻掑叆閿氱偣
         * @command anchor
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @param { String } name 閿氱偣鍚嶇О瀛楃涓�
         * @example
         * ```javascript
         * //editor 鏄紪杈戝櫒瀹炰緥
         * editor.execCommand('anchor', 'anchor1');
         * ```
         */
        'anchor':{
          execCommand:function (cmd, name) {
            var range = this.selection.getRange(),img = range.getClosedNode();
            if (img && img.getAttribute('anchorname')) {
              if (name) {
                img.setAttribute('anchorname', name);
              } else {
                range.setStartBefore(img).setCursor();
                domUtils.remove(img);
              }
            } else {
              if (name) {
                //鍙湪閫夊尯鐨勫紑濮嬫彃鍏�
                var anchor = this.document.createElement('img');
                range.collapse(true);
                domUtils.setAttributes(anchor,{
                  'anchorname':name,
                  'class':'anchorclass'
                });
                range.insertNode(anchor).setStartAfter(anchor).setCursor(false,true);
              }
            }
          }
        }
      }
    }
  });


// plugins/wordcount.js
///import core
///commands 瀛楁暟缁熻
///commandsName  WordCount,wordCount
///commandsTitle  瀛楁暟缁熻
  /*
   * Created by JetBrains WebStorm.
   * User: taoqili
   * Date: 11-9-7
   * Time: 涓嬪崍8:18
   * To change this template use File | Settings | File Templates.
   */

  UE.plugins['wordcount'] = function(){
    var me = this;
    me.setOpt('wordCount',true);
    me.addListener('contentchange',function(){
      me.fireEvent('wordcount');
    });
    var timer;
    me.addListener('ready',function(){
      var me = this;
      domUtils.on(me.body,"keyup",function(evt){
        var code = evt.keyCode||evt.which,
          //蹇界暐鐨勬寜閿�,ctr,alt,shift,鏂瑰悜閿�
          ignores = {"16":1,"18":1,"20":1,"37":1,"38":1,"39":1,"40":1};
        if(code in ignores) return;
        clearTimeout(timer);
        timer = setTimeout(function(){
          me.fireEvent('wordcount');
        },200)
      })
    });
  };


// plugins/pagebreak.js
  /**
   * 鍒嗛〉鍔熻兘鎻掍欢
   * @file
   * @since 1.2.6.1
   */
  UE.plugins['pagebreak'] = function () {
    var me = this,
      notBreakTags = ['td'];
    me.setOpt('pageBreakTag','_ueditor_page_break_tag_');

    function fillNode(node){
      if(domUtils.isEmptyBlock(node)){
        var firstChild = node.firstChild,tmpNode;

        while(firstChild && firstChild.nodeType == 1 && domUtils.isEmptyBlock(firstChild)){
          tmpNode = firstChild;
          firstChild = firstChild.firstChild;
        }
        !tmpNode && (tmpNode = node);
        domUtils.fillNode(me.document,tmpNode);
      }
    }
    //鍒嗛〉绗︽牱寮忔坊鍔�

    me.ready(function(){
      utils.cssRule('pagebreak','.pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}',me.document);
    });
    function isHr(node){
      return node && node.nodeType == 1 && node.tagName == 'HR' && node.className == 'pagebreak';
    }
    me.addInputRule(function(root){
      root.traversal(function(node){
        if(node.type == 'text' && node.data == me.options.pageBreakTag){
          var hr = UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');
          node.parentNode.insertBefore(hr,node);
          node.parentNode.removeChild(node)
        }
      })
    });
    me.addOutputRule(function(node){
      utils.each(node.getNodesByTagName('hr'),function(n){
        if(n.getAttr('class') == 'pagebreak'){
          var txt = UE.uNode.createText(me.options.pageBreakTag);
          n.parentNode.insertBefore(txt,n);
          n.parentNode.removeChild(n);
        }
      })

    });

    /**
     * 鎻掑叆鍒嗛〉绗�
     * @command pagebreak
     * @method execCommand
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @remind 鍦ㄨ〃鏍间腑鎻掑叆鍒嗛〉绗︿細鎶婅〃鏍煎垏鍒嗘垚涓ら儴鍒�
     * @remind 鑾峰彇缂栬緫鍣ㄥ唴鐨勬暟鎹椂锛� 缂栬緫鍣ㄤ細鎶婂垎椤电杞崲鎴愨€淿ueditor_page_break_tag_鈥濆瓧绗︿覆锛�
     *          浠ヤ究浜庢彁浜ゆ暟鎹埌鏈嶅姟鍣ㄧ鍚庡鐞嗗垎椤点€�
     * @example
     * ```javascript
     * editor.execCommand( 'pagebreak'); //鎻掑叆涓€涓猦r鏍囩锛屽甫鏈夋牱寮忕被鍚峱agebreak
     * ```
     */

    me.commands['pagebreak'] = {
      execCommand:function () {
        var range = me.selection.getRange(),hr = me.document.createElement('hr');
        domUtils.setAttributes(hr,{
          'class' : 'pagebreak',
          noshade:"noshade",
          size:"5"
        });
        domUtils.unSelectable(hr);
        //table鍗曠嫭澶勭悊
        var node = domUtils.findParentByTagName(range.startContainer, notBreakTags, true),

          parents = [], pN;
        if (node) {
          switch (node.tagName) {
            case 'TD':
              pN = node.parentNode;
              if (!pN.previousSibling) {
                var table = domUtils.findParentByTagName(pN, 'table');
//                            var tableWrapDiv = table.parentNode;
//                            if(tableWrapDiv && tableWrapDiv.nodeType == 1
//                                && tableWrapDiv.tagName == 'DIV'
//                                && tableWrapDiv.getAttribute('dropdrag')
//                                ){
//                                domUtils.remove(tableWrapDiv,true);
//                            }
                table.parentNode.insertBefore(hr, table);
                parents = domUtils.findParents(hr, true);

              } else {
                pN.parentNode.insertBefore(hr, pN);
                parents = domUtils.findParents(hr);

              }
              pN = parents[1];
              if (hr !== pN) {
                domUtils.breakParent(hr, pN);

              }
              //table瑕侀噸鍐欑粦瀹氫竴涓嬫嫋鎷�
              me.fireEvent('afteradjusttable',me.document);
          }

        } else {

          if (!range.collapsed) {
            range.deleteContents();
            var start = range.startContainer;
            while ( !domUtils.isBody(start) && domUtils.isBlockElm(start) && domUtils.isEmptyNode(start)) {
              range.setStartBefore(start).collapse(true);
              domUtils.remove(start);
              start = range.startContainer;
            }

          }
          range.insertNode(hr);

          var pN = hr.parentNode, nextNode;
          while (!domUtils.isBody(pN)) {
            domUtils.breakParent(hr, pN);
            nextNode = hr.nextSibling;
            if (nextNode && domUtils.isEmptyBlock(nextNode)) {
              domUtils.remove(nextNode);
            }
            pN = hr.parentNode;
          }
          nextNode = hr.nextSibling;
          var pre = hr.previousSibling;
          if(isHr(pre)){
            domUtils.remove(pre);
          }else{
            pre && fillNode(pre);
          }

          if(!nextNode){
            var p = me.document.createElement('p');

            hr.parentNode.appendChild(p);
            domUtils.fillNode(me.document,p);
            range.setStart(p,0).collapse(true);
          }else{
            if(isHr(nextNode)){
              domUtils.remove(nextNode);
            }else{
              fillNode(nextNode);
            }
            range.setEndAfter(hr).collapse(false);
          }

          range.select(true);

        }

      }
    };
  };

// plugins/wordimage.js
///import core
///commands 鏈湴鍥剧墖寮曞涓婁紶
///commandsName  WordImage
///commandsTitle  鏈湴鍥剧墖寮曞涓婁紶
///commandsDialog  dialogs\wordimage

  UE.plugin.register('wordimage',function(){
    var me = this,
      images = [];
    return {
      commands : {
        'wordimage':{
          execCommand:function () {
            var images = domUtils.getElementsByTagName(me.body, "img");
            var urlList = [];
            for (var i = 0, ci; ci = images[i++];) {
              var url = ci.getAttribute("word_img");
              url && urlList.push(url);
            }
            return urlList;
          },
          queryCommandState:function () {
            images = domUtils.getElementsByTagName(me.body, "img");
            for (var i = 0, ci; ci = images[i++];) {
              if (ci.getAttribute("word_img")) {
                return 1;
              }
            }
            return -1;
          },
          notNeedUndo:true
        }
      },
      inputRule : function (root) {
        utils.each(root.getNodesByTagName('img'), function (img) {
          var attrs = img.attrs,
            flag = parseInt(attrs.width) < 128 || parseInt(attrs.height) < 43,
            opt = me.options,
            src = opt.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif';
          if (attrs['src'] && /^(?:(file:\/+))/.test(attrs['src'])) {
            img.setAttr({
              width:attrs.width,
              height:attrs.height,
              alt:attrs.alt,
              word_img: attrs.src,
              src:src,
              'style':'background:url(' + ( flag ? opt.themePath + opt.theme + '/images/word.gif' : opt.langPath + opt.lang + '/images/localimage.png') + ') no-repeat center center;border:1px solid #ddd'
            })
          }
        })
      }
    }
  });

// plugins/dragdrop.js
  UE.plugins['dragdrop'] = function (){

    var me = this;
    me.ready(function(){
      domUtils.on(this.body,'dragend',function(){
        var rng = me.selection.getRange();
        var node = rng.getClosedNode()||me.selection.getStart();

        if(node && node.tagName == 'IMG'){

          var pre = node.previousSibling,next;
          while(next = node.nextSibling){
            if(next.nodeType == 1 && next.tagName == 'SPAN' && !next.firstChild){
              domUtils.remove(next)
            }else{
              break;
            }
          }


          if((pre && pre.nodeType == 1 && !domUtils.isEmptyBlock(pre) || !pre) && (!next || next && !domUtils.isEmptyBlock(next))){
            if(pre && pre.tagName == 'P' && !domUtils.isEmptyBlock(pre)){
              pre.appendChild(node);
              domUtils.moveChild(next,pre);
              domUtils.remove(next);
            }else  if(next && next.tagName == 'P' && !domUtils.isEmptyBlock(next)){
              next.insertBefore(node,next.firstChild);
            }

            if(pre && pre.tagName == 'P' && domUtils.isEmptyBlock(pre)){
              domUtils.remove(pre)
            }
            if(next && next.tagName == 'P' && domUtils.isEmptyBlock(next)){
              domUtils.remove(next)
            }
            rng.selectNode(node).select();
            me.fireEvent('saveScene');

          }

        }

      })
    });
    me.addListener('keyup', function(type, evt) {
      var keyCode = evt.keyCode || evt.which;
      if (keyCode == 13) {
        var rng = me.selection.getRange(),node;
        if(node = domUtils.findParentByTagName(rng.startContainer,'p',true)){
          if(domUtils.getComputedStyle(node,'text-align') == 'center'){
            domUtils.removeStyle(node,'text-align')
          }
        }
      }
    })
  };


// plugins/undo.js
  /**
   * undo redo
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鎾ら攢涓婁竴娆℃墽琛岀殑鍛戒护
   * @command undo
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'undo' );
   * ```
   */

  /**
   * 閲嶅仛涓婁竴娆℃墽琛岀殑鍛戒护
   * @command redo
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'redo' );
   * ```
   */

  UE.plugins['undo'] = function () {
    var saveSceneTimer;
    var me = this,
      maxUndoCount = me.options.maxUndoCount || 20,
      maxInputCount = me.options.maxInputCount || 20,
      fillchar = new RegExp(domUtils.fillChar + '|<\/hr>', 'gi');// ie浼氫骇鐢熷浣欑殑</hr>
    var noNeedFillCharTags = {
      ol:1,ul:1,table:1,tbody:1,tr:1,body:1
    };
    var orgState = me.options.autoClearEmptyNode;
    function compareAddr(indexA, indexB) {
      if (indexA.length != indexB.length)
        return 0;
      for (var i = 0, l = indexA.length; i < l; i++) {
        if (indexA[i] != indexB[i])
          return 0
      }
      return 1;
    }

    function compareRangeAddress(rngAddrA, rngAddrB) {
      if (rngAddrA.collapsed != rngAddrB.collapsed) {
        return 0;
      }
      if (!compareAddr(rngAddrA.startAddress, rngAddrB.startAddress) || !compareAddr(rngAddrA.endAddress, rngAddrB.endAddress)) {
        return 0;
      }
      return 1;
    }

    function UndoManager() {
      this.list = [];
      this.index = 0;
      this.hasUndo = false;
      this.hasRedo = false;
      this.undo = function () {
        if (this.hasUndo) {
          if (!this.list[this.index - 1] && this.list.length == 1) {
            this.reset();
            return;
          }
          while (this.list[this.index].content == this.list[this.index - 1].content) {
            this.index--;
            if (this.index == 0) {
              return this.restore(0);
            }
          }
          this.restore(--this.index);
        }
      };
      this.redo = function () {
        if (this.hasRedo) {
          while (this.list[this.index].content == this.list[this.index + 1].content) {
            this.index++;
            if (this.index == this.list.length - 1) {
              return this.restore(this.index);
            }
          }
          this.restore(++this.index);
        }
      };

      this.restore = function () {
        var me = this.editor;
        var scene = this.list[this.index];
        var root = UE.htmlparser(scene.content.replace(fillchar, ''));
        me.options.autoClearEmptyNode = false;
        me.filterInputRule(root);
        me.options.autoClearEmptyNode = orgState;
        //trace:873
        //鍘绘帀灞曚綅绗�
        me.document.body.innerHTML = root.toHtml();
        me.fireEvent('afterscencerestore');
        //澶勭悊undo鍚庣┖鏍间笉灞曚綅鐨勯棶棰�
        if (browser.ie) {
          utils.each(domUtils.getElementsByTagName(me.document,'td th caption p'),function(node){
            if(domUtils.isEmptyNode(node)){
              domUtils.fillNode(me.document, node);
            }
          })
        }

        try{
          var rng = new dom.Range(me.document).moveToAddress(scene.address);
          rng.select(noNeedFillCharTags[rng.startContainer.nodeName.toLowerCase()]);
        }catch(e){}

        this.update();
        this.clearKey();
        //涓嶈兘鎶婅嚜宸眗eset浜�
        me.fireEvent('reset', true);
      };

      this.getScene = function () {
        var me = this.editor;
        var rng = me.selection.getRange(),
          rngAddress = rng.createAddress(false,true);
        me.fireEvent('beforegetscene');
        var root = UE.htmlparser(me.body.innerHTML);
        me.options.autoClearEmptyNode = false;
        me.filterOutputRule(root);
        me.options.autoClearEmptyNode = orgState;
        var cont = root.toHtml();
        //trace:3461
        //杩欎釜浼氬紩璧峰洖閫€鏃跺鑷寸┖鏍间涪澶辩殑鎯呭喌
//            browser.ie && (cont = cont.replace(/>&nbsp;</g, '><').replace(/\s*</g, '<').replace(/>\s*/g, '>'));
        me.fireEvent('aftergetscene');

        return {
          address:rngAddress,
          content:cont
        }
      };
      this.save = function (notCompareRange,notSetCursor) {
        clearTimeout(saveSceneTimer);
        var currentScene = this.getScene(notSetCursor),
          lastScene = this.list[this.index];

        if(lastScene && lastScene.content != currentScene.content){
          me.trigger('contentchange')
        }
        //鍐呭鐩稿悓浣嶇疆鐩稿悓涓嶅瓨
        if (lastScene && lastScene.content == currentScene.content &&
          ( notCompareRange ? 1 : compareRangeAddress(lastScene.address, currentScene.address) )
        ) {
          return;
        }
        this.list = this.list.slice(0, this.index + 1);
        this.list.push(currentScene);
        //濡傛灉澶т簬鏈€澶ф暟閲忎簡锛屽氨鎶婃渶鍓嶇殑鍓旈櫎
        if (this.list.length > maxUndoCount) {
          this.list.shift();
        }
        this.index = this.list.length - 1;
        this.clearKey();
        //璺熸柊undo/redo鐘舵€�
        this.update();

      };
      this.update = function () {
        this.hasRedo = !!this.list[this.index + 1];
        this.hasUndo = !!this.list[this.index - 1];
      };
      this.reset = function () {
        this.list = [];
        this.index = 0;
        this.hasUndo = false;
        this.hasRedo = false;
        this.clearKey();
      };
      this.clearKey = function () {
        keycont = 0;
        lastKeyCode = null;
      };
    }

    me.undoManger = new UndoManager();
    me.undoManger.editor = me;
    function saveScene() {
      this.undoManger.save();
    }

    me.addListener('saveScene', function () {
      var args = Array.prototype.splice.call(arguments,1);
      this.undoManger.save.apply(this.undoManger,args);
    });

//    me.addListener('beforeexeccommand', saveScene);
//    me.addListener('afterexeccommand', saveScene);

    me.addListener('reset', function (type, exclude) {
      if (!exclude) {
        this.undoManger.reset();
      }
    });
    me.commands['redo'] = me.commands['undo'] = {
      execCommand:function (cmdName) {
        this.undoManger[cmdName]();
      },
      queryCommandState:function (cmdName) {
        return this.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
      },
      notNeedUndo:1
    };

    var keys = {
        //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
        /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
        37:1, 38:1, 39:1, 40:1

      },
      keycont = 0,
      lastKeyCode;
    //杈撳叆娉曠姸鎬佷笅涓嶈绠楀瓧绗︽暟
    var inputType = false;
    me.addListener('ready', function () {
      domUtils.on(this.body, 'compositionstart', function () {
        inputType = true;
      });
      domUtils.on(this.body, 'compositionend', function () {
        inputType = false;
      })
    });
    //蹇嵎閿�
    me.addshortcutkey({
      "Undo":"ctrl+90", //undo
      "Redo":"ctrl+89" //redo

    });
    var isCollapsed = true;
    me.addListener('keydown', function (type, evt) {

      var me = this;
      var keyCode = evt.keyCode || evt.which;
      if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
        if (inputType)
          return;

        if(!me.selection.getRange().collapsed){
          me.undoManger.save(false,true);
          isCollapsed = false;
          return;
        }
        if (me.undoManger.list.length == 0) {
          me.undoManger.save(true);
        }
        clearTimeout(saveSceneTimer);
        function save(cont){
          cont.undoManger.save(false,true);
          cont.fireEvent('selectionchange');
        }
        saveSceneTimer = setTimeout(function(){
          if(inputType){
            var interalTimer = setInterval(function(){
              if(!inputType){
                save(me);
                clearInterval(interalTimer)
              }
            },300)
            return;
          }
          save(me);
        },200);

        lastKeyCode = keyCode;
        keycont++;
        if (keycont >= maxInputCount ) {
          save(me)
        }
      }
    });
    me.addListener('keyup', function (type, evt) {
      var keyCode = evt.keyCode || evt.which;
      if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
        if (inputType)
          return;
        if(!isCollapsed){
          this.undoManger.save(false,true);
          isCollapsed = true;
        }
      }
    });
    //鎵╁睍瀹炰緥锛屾坊鍔犲叧闂拰寮€鍚懡浠ndo
    me.stopCmdUndo = function(){
      me.__hasEnterExecCommand = true;
    };
    me.startCmdUndo = function(){
      me.__hasEnterExecCommand = false;
    }
  };


// plugins/copy.js
  UE.plugin.register('copy', function () {

    var me = this;

    function initZeroClipboard() {

      ZeroClipboard.config({
        debug: false,
        swfPath: me.options.UEDITOR_HOME_URL + 'third-party/zeroclipboard/ZeroClipboard.swf'
      });

      var client = me.zeroclipboard = new ZeroClipboard();

      // 澶嶅埗鍐呭
      client.on('copy', function (e) {
        var client = e.client,
          rng = me.selection.getRange(),
          div = document.createElement('div');

        div.appendChild(rng.cloneContents());
        client.setText(div.innerText || div.textContent);
        client.setHtml(div.innerHTML);
        rng.select();
      });
      // hover浜嬩欢浼犻€掑埌target
      client.on('mouseover mouseout', function (e) {
        var target = e.target;
        if (e.type == 'mouseover') {
          domUtils.addClass(target, 'edui-state-hover');
        } else if (e.type == 'mouseout') {
          domUtils.removeClasses(target, 'edui-state-hover');
        }
      });
      // flash鍔犺浇涓嶆垚鍔�
      client.on('wrongflash noflash', function () {
        ZeroClipboard.destroy();
      });
    }

    return {
      bindEvents: {
        'ready': function () {
          if (!browser.ie) {
            if (window.ZeroClipboard) {
              initZeroClipboard();
            } else {
              utils.loadFile(document, {
                src: me.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.js",
                tag: "script",
                type: "text/javascript",
                defer: "defer"
              }, function () {
                initZeroClipboard();
              });
            }
          }
        }
      },
      commands: {
        'copy': {
          execCommand: function (cmd) {
            if (!me.document.execCommand('copy')) {
              alert(me.getLang('copymsg'));
            }
          }
        }
      }
    }
  });


// plugins/paste.js
///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands 绮樿创
///commandsName  PastePlain
///commandsTitle  绾枃鏈矘璐存ā寮�
  /**
   * @description 绮樿创
   * @author zhanyi
   */
  UE.plugins['paste'] = function () {
    function getClipboardData(callback) {
      var doc = this.document;
      if (doc.getElementById('baidu_pastebin')) {
        return;
      }
      var range = this.selection.getRange(),
        bk = range.createBookmark(),
        //鍒涘缓鍓创鐨勫鍣╠iv
        pastebin = doc.createElement('div');
      pastebin.id = 'baidu_pastebin';
      // Safari 瑕佹眰div蹇呴』鏈夊唴瀹癸紝鎵嶈兘绮樿创鍐呭杩涙潵
      browser.webkit && pastebin.appendChild(doc.createTextNode(domUtils.fillChar + domUtils.fillChar));
      doc.body.appendChild(pastebin);
      //trace:717 闅愯棌鐨剆pan涓嶈兘寰楀埌top
      //bk.start.innerHTML = '&nbsp;';
      bk.start.style.display = '';
      pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
        //瑕佸湪鐜板湪鍏夋爣骞宠鐨勪綅缃姞鍏ワ紝鍚﹀垯浼氬嚭鐜拌烦鍔ㄧ殑闂
        domUtils.getXY(bk.start).y + 'px';

      range.selectNodeContents(pastebin).select(true);

      setTimeout(function () {
        if (browser.webkit) {
          for (var i = 0, pastebins = doc.querySelectorAll('#baidu_pastebin'), pi; pi = pastebins[i++];) {
            if (domUtils.isEmptyNode(pi)) {
              domUtils.remove(pi);
            } else {
              pastebin = pi;
              break;
            }
          }
        }
        try {
          pastebin.parentNode.removeChild(pastebin);
        } catch (e) {
        }
        range.moveToBookmark(bk).select(true);
        callback(pastebin);
      }, 0);
    }

    var me = this;

    me.setOpt({
      retainOnlyLabelPasted : false
    });

    var txtContent, htmlContent, address;

    function getPureHtml(html){
      return html.replace(/<(\/?)([\w\-]+)([^>]*)>/gi, function (a, b, tagName, attrs) {
        tagName = tagName.toLowerCase();
        if ({img: 1}[tagName]) {
          return a;
        }
        attrs = attrs.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi, function (str, atr, val) {
          if ({
              'src': 1,
              'href': 1,
              'name': 1
            }[atr.toLowerCase()]) {
            return atr + '=' + val + ' '
          }
          return ''
        });
        if ({
            'span': 1,
            'div': 1
          }[tagName]) {
          return ''
        } else {

          return '<' + b + tagName + ' ' + utils.trim(attrs) + '>'
        }

      });
    }
    function filter(div) {
      var html;
      if (div.firstChild) {
        //鍘绘帀cut涓坊鍔犵殑杈圭晫鍊�
        var nodes = domUtils.getElementsByTagName(div, 'span');
        for (var i = 0, ni; ni = nodes[i++];) {
          if (ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end') {
            domUtils.remove(ni);
          }
        }

        if (browser.webkit) {

          var brs = div.querySelectorAll('div br');
          for (var i = 0, bi; bi = brs[i++];) {
            var pN = bi.parentNode;
            if (pN.tagName == 'DIV' && pN.childNodes.length == 1) {
              pN.innerHTML = '<p><br/></p>';
              domUtils.remove(pN);
            }
          }
          var divs = div.querySelectorAll('#baidu_pastebin');
          for (var i = 0, di; di = divs[i++];) {
            var tmpP = me.document.createElement('p');
            di.parentNode.insertBefore(tmpP, di);
            while (di.firstChild) {
              tmpP.appendChild(di.firstChild);
            }
            domUtils.remove(di);
          }

          var metas = div.querySelectorAll('meta');
          for (var i = 0, ci; ci = metas[i++];) {
            domUtils.remove(ci);
          }

          var brs = div.querySelectorAll('br');
          for (i = 0; ci = brs[i++];) {
            if (/^apple-/i.test(ci.className)) {
              domUtils.remove(ci);
            }
          }
        }
        if (browser.gecko) {
          var dirtyNodes = div.querySelectorAll('[_moz_dirty]');
          for (i = 0; ci = dirtyNodes[i++];) {
            ci.removeAttribute('_moz_dirty');
          }
        }
        if (!browser.ie) {
          var spans = div.querySelectorAll('span.Apple-style-span');
          for (var i = 0, ci; ci = spans[i++];) {
            domUtils.remove(ci, true);
          }
        }

        //ie涓嬩娇鐢╥nnerHTML浼氫骇鐢熷浣欑殑\r\n瀛楃锛屼篃浼氫骇鐢�&nbsp;杩欓噷杩囨护鎺�
        html = div.innerHTML;//.replace(/>(?:(\s|&nbsp;)*?)</g,'><');

        //杩囨护word绮樿创杩囨潵鐨勫啑浣欏睘鎬�
        html = UE.filterWord(html);
        //鍙栨秷浜嗗拷鐣ョ┖鐧界殑绗簩涓弬鏁帮紝绮樿创杩囨潵鐨勬湁浜涙槸鏈夌┖鐧界殑锛屼細琚涓婄浉鍏崇殑鏍囩
        var root = UE.htmlparser(html);
        //濡傛灉缁欎簡杩囨护瑙勫垯灏卞厛杩涜杩囨护
        if (me.options.filterRules) {
          UE.filterNode(root, me.options.filterRules);
        }
        //鎵ц榛樿鐨勫鐞�
        me.filterInputRule(root);
        //閽堝chrome鐨勫鐞�
        if (browser.webkit) {
          var br = root.lastChild();
          if (br && br.type == 'element' && br.tagName == 'br') {
            root.removeChild(br)
          }
          utils.each(me.body.querySelectorAll('div'), function (node) {
            if (domUtils.isEmptyBlock(node)) {
              domUtils.remove(node,true)
            }
          })
        }
        html = {'html': root.toHtml()};
        me.fireEvent('beforepaste', html, root);
        //鎶簡榛樿鐨勭矘璐达紝閭ｅ悗杈圭殑鍐呭灏变笉鎵ц浜嗭紝姣斿琛ㄦ牸绮樿创
        if(!html.html){
          return;
        }
        root = UE.htmlparser(html.html,true);
        //濡傛灉寮€鍚簡绾枃鏈ā寮�
        if (me.queryCommandState('pasteplain') === 1) {
          me.execCommand('insertHtml', UE.filterNode(root, me.options.filterTxtRules).toHtml(), true);
        } else {
          //鏂囨湰妯″紡
          UE.filterNode(root, me.options.filterTxtRules);
          txtContent = root.toHtml();
          //瀹屽叏妯″紡
          htmlContent = html.html;

          address = me.selection.getRange().createAddress(true);
          me.execCommand('insertHtml', me.getOpt('retainOnlyLabelPasted') === true ?  getPureHtml(htmlContent) : htmlContent, true);
        }
        me.fireEvent("afterpaste", html);
      }
    }

    me.addListener('pasteTransfer', function (cmd, plainType) {

      if (address && txtContent && htmlContent && txtContent != htmlContent) {
        var range = me.selection.getRange();
        range.moveToAddress(address, true);

        if (!range.collapsed) {

          while (!domUtils.isBody(range.startContainer)
            ) {
            var start = range.startContainer;
            if(start.nodeType == 1){
              start = start.childNodes[range.startOffset];
              if(!start){
                range.setStartBefore(range.startContainer);
                continue;
              }
              var pre = start.previousSibling;

              if(pre && pre.nodeType == 3 && new RegExp('^[\n\r\t '+domUtils.fillChar+']*$').test(pre.nodeValue)){
                range.setStartBefore(pre)
              }
            }
            if(range.startOffset == 0){
              range.setStartBefore(range.startContainer);
            }else{
              break;
            }

          }
          while (!domUtils.isBody(range.endContainer)
            ) {
            var end = range.endContainer;
            if(end.nodeType == 1){
              end = end.childNodes[range.endOffset];
              if(!end){
                range.setEndAfter(range.endContainer);
                continue;
              }
              var next = end.nextSibling;
              if(next && next.nodeType == 3 && new RegExp('^[\n\r\t'+domUtils.fillChar+']*$').test(next.nodeValue)){
                range.setEndAfter(next)
              }
            }
            if(range.endOffset == range.endContainer[range.endContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length){
              range.setEndAfter(range.endContainer);
            }else{
              break;
            }

          }

        }

        range.deleteContents();
        range.select(true);
        me.__hasEnterExecCommand = true;
        var html = htmlContent;
        if (plainType === 2 ) {
          html = getPureHtml(html);
        } else if (plainType) {
          html = txtContent;
        }
        me.execCommand('inserthtml', html, true);
        me.__hasEnterExecCommand = false;
        var rng = me.selection.getRange();
        while (!domUtils.isBody(rng.startContainer) && !rng.startOffset &&
        rng.startContainer[rng.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
          ) {
          rng.setStartBefore(rng.startContainer);
        }
        var tmpAddress = rng.createAddress(true);
        address.endAddress = tmpAddress.startAddress;
      }
    });

    me.addListener('ready', function () {
      domUtils.on(me.body, 'cut', function () {
        var range = me.selection.getRange();
        if (!range.collapsed && me.undoManger) {
          me.undoManger.save();
        }
      });

      //ie涓媌eforepaste鍦ㄧ偣鍑诲彸閿椂涔熶細瑙﹀彂锛屾墍浠ョ敤鐩戞帶閿洏鎵嶅鐞�
      domUtils.on(me.body, browser.ie || browser.opera ? 'keydown' : 'paste', function (e) {
        if ((browser.ie || browser.opera) && ((!e.ctrlKey && !e.metaKey) || e.keyCode != '86')) {
          return;
        }
        getClipboardData.call(me, function (div) {
          filter(div);
        });
      });

    });

    me.commands['paste'] = {
      execCommand: function (cmd) {
        if (browser.ie) {
          getClipboardData.call(me, function (div) {
            filter(div);
          });
          me.document.execCommand('paste');
        } else {
          alert(me.getLang('pastemsg'));
        }
      }
    }
  };



// plugins/puretxtpaste.js
  /**
   * 绾枃鏈矘璐存彃浠�
   * @file
   * @since 1.2.6.1
   */

  UE.plugins['pasteplain'] = function(){
    var me = this;
    me.setOpt({
      'pasteplain':false,
      'filterTxtRules' : function(){
        function transP(node){
          node.tagName = 'p';
          node.setStyle();
        }
        function removeNode(node){
          node.parentNode.removeChild(node,true)
        }
        return {
          //鐩存帴鍒犻櫎鍙婂叾瀛楄妭鐐瑰唴瀹�
          '-' : 'script style object iframe embed input select',
          'p': {$:{}},
          'br':{$:{}},
          div: function (node) {
            var tmpNode, p = UE.uNode.createElement('p');
            while (tmpNode = node.firstChild()) {
              if (tmpNode.type == 'text' || !UE.dom.dtd.$block[tmpNode.tagName]) {
                p.appendChild(tmpNode);
              } else {
                if (p.firstChild()) {
                  node.parentNode.insertBefore(p, node);
                  p = UE.uNode.createElement('p');
                } else {
                  node.parentNode.insertBefore(tmpNode, node);
                }
              }
            }
            if (p.firstChild()) {
              node.parentNode.insertBefore(p, node);
            }
            node.parentNode.removeChild(node);
          },
          ol: removeNode,
          ul: removeNode,
          dl:removeNode,
          dt:removeNode,
          dd:removeNode,
          'li':removeNode,
          'caption':transP,
          'th':transP,
          'tr':transP,
          'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
          'td':function(node){
            //娌℃湁鍐呭鐨則d鐩存帴鍒犳帀
            var txt = !!node.innerText();
            if(txt){
              node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
            }
            node.parentNode.removeChild(node,node.innerText())
          }
        }
      }()
    });
    //鏆傛椂杩欓噷鏀寔涓€涓嬭€佺増鏈殑灞炴€�
    var pasteplain = me.options.pasteplain;

    /**
     * 鍚敤鎴栧彇娑堢函鏂囨湰绮樿创妯″紡
     * @command pasteplain
     * @method execCommand
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @example
     * ```javascript
     * editor.queryCommandState( 'pasteplain' );
     * ```
     */

    /**
     * 鏌ヨ褰撳墠鏄惁澶勪簬绾枃鏈矘璐存ā寮�
     * @command pasteplain
     * @method queryCommandState
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @return { int } 濡傛灉澶勪簬绾枃鏈ā寮忥紝杩斿洖1锛屽惁鍒欙紝杩斿洖0
     * @example
     * ```javascript
     * editor.queryCommandState( 'pasteplain' );
     * ```
     */
    me.commands['pasteplain'] = {
      queryCommandState: function (){
        return pasteplain ? 1 : 0;
      },
      execCommand: function (){
        pasteplain = !pasteplain|0;
      },
      notNeedUndo : 1
    };
  };

// plugins/list.js
  /**
   * 鏈夊簭鍒楄〃,鏃犲簭鍒楄〃鎻掍欢
   * @file
   * @since 1.2.6.1
   */

  UE.plugins['list'] = function () {
    var me = this,
      notExchange = {
        'TD':1,
        'PRE':1,
        'BLOCKQUOTE':1
      };
    var customStyle = {
      'cn' : 'cn-1-',
      'cn1' : 'cn-2-',
      'cn2' : 'cn-3-',
      'num':  'num-1-',
      'num1' : 'num-2-',
      'num2' : 'num-3-',
      'dash'  : 'dash',
      'dot':'dot'
    };

    me.setOpt( {
      'autoTransWordToList':false,
      'insertorderedlist':{
        'num':'',
        'num1':'',
        'num2':'',
        'cn':'',
        'cn1':'',
        'cn2':'',
        'decimal':'',
        'lower-alpha':'',
        'lower-roman':'',
        'upper-alpha':'',
        'upper-roman':''
      },
      'insertunorderedlist':{
        'circle':'',
        'disc':'',
        'square':'',
        'dash' : '',
        'dot':''
      },
      listDefaultPaddingLeft : '30',
      listiconpath : 'http://bs.baidu.com/listicon/',
      maxListLevel : -1,//-1涓嶉檺鍒�
      disablePInList:false
    } );
    function listToArray(list){
      var arr = [];
      for(var p in list){
        arr.push(p)
      }
      return arr;
    }
    var listStyle = {
      'OL':listToArray(me.options.insertorderedlist),
      'UL':listToArray(me.options.insertunorderedlist)
    };
    var liiconpath = me.options.listiconpath;

    //鏍规嵁鐢ㄦ埛閰嶇疆锛岃皟鏁碿ustomStyle
    for(var s in customStyle){
      if(!me.options.insertorderedlist.hasOwnProperty(s) && !me.options.insertunorderedlist.hasOwnProperty(s)){
        delete customStyle[s];
      }
    }

    me.ready(function () {
      var customCss = [];
      for(var p in customStyle){
        if(p == 'dash' || p == 'dot'){
          customCss.push('li.list-' + customStyle[p] + '{background-image:url(' + liiconpath +customStyle[p]+'.gif)}');
          customCss.push('ul.custom_'+p+'{list-style:none;}ul.custom_'+p+' li{background-position:0 3px;background-repeat:no-repeat}');
        }else{
          for(var i= 0;i<99;i++){
            customCss.push('li.list-' + customStyle[p] + i + '{background-image:url(' + liiconpath + 'list-'+customStyle[p] + i + '.gif)}')
          }
          customCss.push('ol.custom_'+p+'{list-style:none;}ol.custom_'+p+' li{background-position:0 3px;background-repeat:no-repeat}');
        }
        switch(p){
          case 'cn':
            customCss.push('li.list-'+p+'-paddingleft-1{padding-left:25px}');
            customCss.push('li.list-'+p+'-paddingleft-2{padding-left:40px}');
            customCss.push('li.list-'+p+'-paddingleft-3{padding-left:55px}');
            break;
          case 'cn1':
            customCss.push('li.list-'+p+'-paddingleft-1{padding-left:30px}');
            customCss.push('li.list-'+p+'-paddingleft-2{padding-left:40px}');
            customCss.push('li.list-'+p+'-paddingleft-3{padding-left:55px}');
            break;
          case 'cn2':
            customCss.push('li.list-'+p+'-paddingleft-1{padding-left:40px}');
            customCss.push('li.list-'+p+'-paddingleft-2{padding-left:55px}');
            customCss.push('li.list-'+p+'-paddingleft-3{padding-left:68px}');
            break;
          case 'num':
          case 'num1':
            customCss.push('li.list-'+p+'-paddingleft-1{padding-left:25px}');
            break;
          case 'num2':
            customCss.push('li.list-'+p+'-paddingleft-1{padding-left:35px}');
            customCss.push('li.list-'+p+'-paddingleft-2{padding-left:40px}');
            break;
          case 'dash':
            customCss.push('li.list-'+p+'-paddingleft{padding-left:35px}');
            break;
          case 'dot':
            customCss.push('li.list-'+p+'-paddingleft{padding-left:20px}');
        }
      }
      customCss.push('.list-paddingleft-1{padding-left:0}');
      customCss.push('.list-paddingleft-2{padding-left:'+me.options.listDefaultPaddingLeft+'px}');
      customCss.push('.list-paddingleft-3{padding-left:'+me.options.listDefaultPaddingLeft*2+'px}');
      //濡傛灉涓嶇粰瀹藉害浼氬湪鑷畾搴旀牱寮忛噷鍑虹幇婊氬姩鏉�
      utils.cssRule('list', 'ol,ul{margin:0;pading:0;'+(browser.ie ? '' : 'width:95%')+'}li{clear:both;}'+customCss.join('\n'), me.document);
    });
    //鍗曠嫭澶勭悊鍓垏鐨勯棶棰�
    me.ready(function(){
      domUtils.on(me.body,'cut',function(){
        setTimeout(function(){
          var rng = me.selection.getRange(),li;
          //trace:3416
          if(!rng.collapsed){
            if(li = domUtils.findParentByTagName(rng.startContainer,'li',true)){
              if(!li.nextSibling && domUtils.isEmptyBlock(li)){
                var pn = li.parentNode,node;
                if(node = pn.previousSibling){
                  domUtils.remove(pn);
                  rng.setStartAtLast(node).collapse(true);
                  rng.select(true);
                }else if(node = pn.nextSibling){
                  domUtils.remove(pn);
                  rng.setStartAtFirst(node).collapse(true);
                  rng.select(true);
                }else{
                  var tmpNode = me.document.createElement('p');
                  domUtils.fillNode(me.document,tmpNode);
                  pn.parentNode.insertBefore(tmpNode,pn);
                  domUtils.remove(pn);
                  rng.setStart(tmpNode,0).collapse(true);
                  rng.select(true);
                }
              }
            }
          }

        })
      })
    });

    function getStyle(node){
      var cls = node.className;
      if(domUtils.hasClass(node,/custom_/)){
        return cls.match(/custom_(\w+)/)[1]
      }
      return domUtils.getStyle(node, 'list-style-type')

    }

    me.addListener('beforepaste',function(type,html){
      var me = this,
        rng = me.selection.getRange(),li;
      var root = UE.htmlparser(html.html,true);
      if(li = domUtils.findParentByTagName(rng.startContainer,'li',true)){
        var list = li.parentNode,tagName = list.tagName == 'OL' ? 'ul':'ol';
        utils.each(root.getNodesByTagName(tagName),function(n){
          n.tagName = list.tagName;
          n.setAttr();
          if(n.parentNode === root){
            type = getStyle(list) || (list.tagName == 'OL' ? 'decimal' : 'disc')
          }else{
            var className = n.parentNode.getAttr('class');
            if(className && /custom_/.test(className)){
              type = className.match(/custom_(\w+)/)[1]
            }else{
              type = n.parentNode.getStyle('list-style-type');
            }
            if(!type){
              type = list.tagName == 'OL' ? 'decimal' : 'disc';
            }
          }
          var index = utils.indexOf(listStyle[list.tagName], type);
          if(n.parentNode !== root)
            index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
          var currentStyle = listStyle[list.tagName][index];
          if(customStyle[currentStyle]){
            n.setAttr('class', 'custom_' + currentStyle)

          }else{
            n.setStyle('list-style-type',currentStyle)
          }
        })

      }

      html.html = root.toHtml();
    });
    //瀵煎嚭鏃讹紝鍘绘帀p鏍囩
    me.getOpt('disablePInList') === true && me.addOutputRule(function(root){
      utils.each(root.getNodesByTagName('li'),function(li){
        var newChildrens = [],index=0;
        utils.each(li.children,function(n){
          if(n.tagName == 'p'){
            var tmpNode;
            while(tmpNode = n.children.pop()) {
              newChildrens.splice(index,0,tmpNode);
              tmpNode.parentNode = li;
              lastNode = tmpNode;
            }
            tmpNode = newChildrens[newChildrens.length-1];
            if(!tmpNode || tmpNode.type != 'element' || tmpNode.tagName != 'br'){
              var br = UE.uNode.createElement('br');
              br.parentNode = li;
              newChildrens.push(br);
            }

            index = newChildrens.length;
          }
        });
        if(newChildrens.length){
          li.children = newChildrens;
        }
      });
    });
    //杩涘叆缂栬緫鍣ㄧ殑li瑕佸p鏍囩
    me.addInputRule(function(root){
      utils.each(root.getNodesByTagName('li'),function(li){
        var tmpP = UE.uNode.createElement('p');
        for(var i= 0,ci;ci=li.children[i];){
          if(ci.type == 'text' || dtd.p[ci.tagName]){
            tmpP.appendChild(ci);
          }else{
            if(tmpP.firstChild()){
              li.insertBefore(tmpP,ci);
              tmpP = UE.uNode.createElement('p');
              i = i + 2;
            }else{
              i++;
            }

          }
        }
        if(tmpP.firstChild() && !tmpP.parentNode || !li.firstChild()){
          li.appendChild(tmpP);
        }
        //trace:3357
        //p涓嶈兘涓虹┖
        if (!tmpP.firstChild()) {
          tmpP.innerHTML(browser.ie ? '&nbsp;' : '<br/>')
        }
        //鍘绘帀鏈熬鐨勭┖鐧�
        var p = li.firstChild();
        var lastChild = p.lastChild();
        if(lastChild && lastChild.type == 'text' && /^\s*$/.test(lastChild.data)){
          p.removeChild(lastChild)
        }
      });
      if(me.options.autoTransWordToList){
        var orderlisttype = {
            'num1':/^\d+\)/,
            'decimal':/^\d+\./,
            'lower-alpha':/^[a-z]+\)/,
            'upper-alpha':/^[A-Z]+\./,
            'cn':/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,
            'cn2':/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/
          },
          unorderlisttype = {
            'square':'n'
          };
        function checkListType(content,container){
          var span = container.firstChild();
          if(span &&  span.type == 'element' && span.tagName == 'span' && /Wingdings|Symbol/.test(span.getStyle('font-family'))){
            for(var p in unorderlisttype){
              if(unorderlisttype[p] == span.data){
                return p
              }
            }
            return 'disc'
          }
          for(var p in orderlisttype){
            if(orderlisttype[p].test(content)){
              return p;
            }
          }

        }
        utils.each(root.getNodesByTagName('p'),function(node){
          if(node.getAttr('class') != 'MsoListParagraph'){
            return
          }

          //word绮樿创杩囨潵鐨勪細甯︽湁margin瑕佸幓鎺�,浣嗚繖鏍蜂篃鍙兘浼氳鍛戒腑涓€浜涘ぎ瑙�
          node.setStyle('margin','');
          node.setStyle('margin-left','');
          node.setAttr('class','');

          function appendLi(list,p,type){
            if(list.tagName == 'ol'){
              if(browser.ie){
                var first = p.firstChild();
                if(first.type =='element' && first.tagName == 'span' && orderlisttype[type].test(first.innerText())){
                  p.removeChild(first);
                }
              }else{
                p.innerHTML(p.innerHTML().replace(orderlisttype[type],''));
              }
            }else{
              p.removeChild(p.firstChild())
            }

            var li = UE.uNode.createElement('li');
            li.appendChild(p);
            list.appendChild(li);
          }
          var tmp = node,type,cacheNode = node;

          if(node.parentNode.tagName != 'li' && (type = checkListType(node.innerText(),node))){

            var list = UE.uNode.createElement(me.options.insertorderedlist.hasOwnProperty(type) ? 'ol' : 'ul');
            if(customStyle[type]){
              list.setAttr('class','custom_'+type)
            }else{
              list.setStyle('list-style-type',type)
            }
            while(node && node.parentNode.tagName != 'li' && checkListType(node.innerText(),node)){
              tmp = node.nextSibling();
              if(!tmp){
                node.parentNode.insertBefore(list,node)
              }
              appendLi(list,node,type);
              node = tmp;
            }
            if(!list.parentNode && node && node.parentNode){
              node.parentNode.insertBefore(list,node)
            }
          }
          var span = cacheNode.firstChild();
          if(span && span.type == 'element' && span.tagName == 'span' && /^\s*(&nbsp;)+\s*$/.test(span.innerText())){
            span.parentNode.removeChild(span)
          }
        })
      }

    });

    //璋冩暣绱㈠紩鏍囩
    me.addListener('contentchange',function(){
      adjustListStyle(me.document)
    });

    function adjustListStyle(doc,ignore){
      utils.each(domUtils.getElementsByTagName(doc,'ol ul'),function(node){

        if(!domUtils.inDoc(node,doc))
          return;

        var parent = node.parentNode;
        if(parent.tagName == node.tagName){
          var nodeStyleType = getStyle(node) || (node.tagName == 'OL' ? 'decimal' : 'disc'),
            parentStyleType = getStyle(parent) || (parent.tagName == 'OL' ? 'decimal' : 'disc');
          if(nodeStyleType == parentStyleType){
            var styleIndex = utils.indexOf(listStyle[node.tagName], nodeStyleType);
            styleIndex = styleIndex + 1 == listStyle[node.tagName].length ? 0 : styleIndex + 1;
            setListStyle(node,listStyle[node.tagName][styleIndex])
          }

        }
        var index = 0,type = 2;
        if( domUtils.hasClass(node,/custom_/)){
          if(!(/[ou]l/i.test(parent.tagName) && domUtils.hasClass(parent,/custom_/))){
            type = 1;
          }
        }else{
          if(/[ou]l/i.test(parent.tagName) && domUtils.hasClass(parent,/custom_/)){
            type = 3;
          }
        }

        var style = domUtils.getStyle(node, 'list-style-type');
        style && (node.style.cssText = 'list-style-type:' + style);
        node.className = utils.trim(node.className.replace(/list-paddingleft-\w+/,'')) + ' list-paddingleft-' + type;
        utils.each(domUtils.getElementsByTagName(node,'li'),function(li){
          li.style.cssText && (li.style.cssText = '');
          if(!li.firstChild){
            domUtils.remove(li);
            return;
          }
          if(li.parentNode !== node){
            return;
          }
          index++;
          if(domUtils.hasClass(node,/custom_/) ){
            var paddingLeft = 1,currentStyle = getStyle(node);
            if(node.tagName == 'OL'){
              if(currentStyle){
                switch(currentStyle){
                  case 'cn' :
                  case 'cn1':
                  case 'cn2':
                    if(index > 10 && (index % 10 == 0 || index > 10 && index < 20)){
                      paddingLeft = 2
                    }else if(index > 20){
                      paddingLeft = 3
                    }
                    break;
                  case 'num2' :
                    if(index > 9){
                      paddingLeft = 2
                    }
                }
              }
              li.className = 'list-'+customStyle[currentStyle]+ index + ' ' + 'list-'+currentStyle+'-paddingleft-' + paddingLeft;
            }else{
              li.className = 'list-'+customStyle[currentStyle]  + ' ' + 'list-'+currentStyle+'-paddingleft';
            }
          }else{
            li.className = li.className.replace(/list-[\w\-]+/gi,'');
          }
          var className = li.getAttribute('class');
          if(className !== null && !className.replace(/\s/g,'')){
            domUtils.removeAttributes(li,'class')
          }
        });
        !ignore && adjustList(node,node.tagName.toLowerCase(),getStyle(node)||domUtils.getStyle(node, 'list-style-type'),true);
      })
    }
    function adjustList(list, tag, style,ignoreEmpty) {
      var nextList = list.nextSibling;
      if (nextList && nextList.nodeType == 1 && nextList.tagName.toLowerCase() == tag && (getStyle(nextList) || domUtils.getStyle(nextList, 'list-style-type') || (tag == 'ol' ? 'decimal' : 'disc')) == style) {
        domUtils.moveChild(nextList, list);
        if (nextList.childNodes.length == 0) {
          domUtils.remove(nextList);
        }
      }
      if(nextList && domUtils.isFillChar(nextList)){
        domUtils.remove(nextList);
      }
      var preList = list.previousSibling;
      if (preList && preList.nodeType == 1 && preList.tagName.toLowerCase() == tag && (getStyle(preList) || domUtils.getStyle(preList, 'list-style-type') || (tag == 'ol' ? 'decimal' : 'disc')) == style) {
        domUtils.moveChild(list, preList);
      }
      if(preList && domUtils.isFillChar(preList)){
        domUtils.remove(preList);
      }
      !ignoreEmpty && domUtils.isEmptyBlock(list) && domUtils.remove(list);
      if(getStyle(list)){
        adjustListStyle(list.ownerDocument,true)
      }
    }

    function setListStyle(list,style){
      if(customStyle[style]){
        list.className = 'custom_' + style;
      }
      try{
        domUtils.setStyle(list, 'list-style-type', style);
      }catch(e){}
    }
    function clearEmptySibling(node) {
      var tmpNode = node.previousSibling;
      if (tmpNode && domUtils.isEmptyBlock(tmpNode)) {
        domUtils.remove(tmpNode);
      }
      tmpNode = node.nextSibling;
      if (tmpNode && domUtils.isEmptyBlock(tmpNode)) {
        domUtils.remove(tmpNode);
      }
    }

    me.addListener('keydown', function (type, evt) {
      function preventAndSave() {
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        me.fireEvent('contentchange');
        me.undoManger && me.undoManger.save();
      }
      function findList(node,filterFn){
        while(node && !domUtils.isBody(node)){
          if(filterFn(node)){
            return null
          }
          if(node.nodeType == 1 && /[ou]l/i.test(node.tagName)){
            return node;
          }
          node = node.parentNode;
        }
        return null;
      }
      var keyCode = evt.keyCode || evt.which;
      if (keyCode == 13 && !evt.shiftKey) {//鍥炶溅
        var rng = me.selection.getRange(),
          parent = domUtils.findParent(rng.startContainer,function(node){return domUtils.isBlockElm(node)},true),
          li = domUtils.findParentByTagName(rng.startContainer,'li',true);
        if(parent && parent.tagName != 'PRE' && !li){
          var html = parent.innerHTML.replace(new RegExp(domUtils.fillChar, 'g'),'');
          if(/^\s*1\s*\.[^\d]/.test(html)){
            parent.innerHTML = html.replace(/^\s*1\s*\./,'');
            rng.setStartAtLast(parent).collapse(true).select();
            me.__hasEnterExecCommand = true;
            me.execCommand('insertorderedlist');
            me.__hasEnterExecCommand = false;
          }
        }
        var range = me.selection.getRange(),
          start = findList(range.startContainer,function (node) {
            return node.tagName == 'TABLE';
          }),
          end = range.collapsed ? start : findList(range.endContainer,function (node) {
            return node.tagName == 'TABLE';
          });

        if (start && end && start === end) {

          if (!range.collapsed) {
            start = domUtils.findParentByTagName(range.startContainer, 'li', true);
            end = domUtils.findParentByTagName(range.endContainer, 'li', true);
            if (start && end && start === end) {
              range.deleteContents();
              li = domUtils.findParentByTagName(range.startContainer, 'li', true);
              if (li && domUtils.isEmptyBlock(li)) {

                pre = li.previousSibling;
                next = li.nextSibling;
                p = me.document.createElement('p');

                domUtils.fillNode(me.document, p);
                parentList = li.parentNode;
                if (pre && next) {
                  range.setStart(next, 0).collapse(true).select(true);
                  domUtils.remove(li);

                } else {
                  if (!pre && !next || !pre) {

                    parentList.parentNode.insertBefore(p, parentList);


                  } else {
                    li.parentNode.parentNode.insertBefore(p, parentList.nextSibling);
                  }
                  domUtils.remove(li);
                  if (!parentList.firstChild) {
                    domUtils.remove(parentList);
                  }
                  range.setStart(p, 0).setCursor();


                }
                preventAndSave();
                return;

              }
            } else {
              var tmpRange = range.cloneRange(),
                bk = tmpRange.collapse(false).createBookmark();

              range.deleteContents();
              tmpRange.moveToBookmark(bk);
              var li = domUtils.findParentByTagName(tmpRange.startContainer, 'li', true);

              clearEmptySibling(li);
              tmpRange.select();
              preventAndSave();
              return;
            }
          }


          li = domUtils.findParentByTagName(range.startContainer, 'li', true);

          if (li) {
            if (domUtils.isEmptyBlock(li)) {
              bk = range.createBookmark();
              var parentList = li.parentNode;
              if (li !== parentList.lastChild) {
                domUtils.breakParent(li, parentList);
                clearEmptySibling(li);
              } else {

                parentList.parentNode.insertBefore(li, parentList.nextSibling);
                if (domUtils.isEmptyNode(parentList)) {
                  domUtils.remove(parentList);
                }
              }
              //宓屽涓嶅鐞�
              if (!dtd.$list[li.parentNode.tagName]) {

                if (!domUtils.isBlockElm(li.firstChild)) {
                  p = me.document.createElement('p');
                  li.parentNode.insertBefore(p, li);
                  while (li.firstChild) {
                    p.appendChild(li.firstChild);
                  }
                  domUtils.remove(li);
                } else {
                  domUtils.remove(li, true);
                }
              }
              range.moveToBookmark(bk).select();


            } else {
              var first = li.firstChild;
              if (!first || !domUtils.isBlockElm(first)) {
                var p = me.document.createElement('p');

                !li.firstChild && domUtils.fillNode(me.document, p);
                while (li.firstChild) {

                  p.appendChild(li.firstChild);
                }
                li.appendChild(p);
                first = p;
              }

              var span = me.document.createElement('span');

              range.insertNode(span);
              domUtils.breakParent(span, li);

              var nextLi = span.nextSibling;
              first = nextLi.firstChild;

              if (!first) {
                p = me.document.createElement('p');

                domUtils.fillNode(me.document, p);
                nextLi.appendChild(p);
                first = p;
              }
              if (domUtils.isEmptyNode(first)) {
                first.innerHTML = '';
                domUtils.fillNode(me.document, first);
              }

              range.setStart(first, 0).collapse(true).shrinkBoundary().select();
              domUtils.remove(span);
              var pre = nextLi.previousSibling;
              if (pre && domUtils.isEmptyBlock(pre)) {
                pre.innerHTML = '<p></p>';
                domUtils.fillNode(me.document, pre.firstChild);
              }

            }
//                        }
            preventAndSave();
          }


        }


      }
      if (keyCode == 8) {
        //淇腑ie涓璴i涓嬬殑闂
        range = me.selection.getRange();
        if (range.collapsed && domUtils.isStartInblock(range)) {
          tmpRange = range.cloneRange().trimBoundary();
          li = domUtils.findParentByTagName(range.startContainer, 'li', true);
          //瑕佸湪li鐨勬渶宸﹁竟锛屾墠鑳藉鐞�
          if (li && domUtils.isStartInblock(tmpRange)) {
            start = domUtils.findParentByTagName(range.startContainer, 'p', true);
            if (start && start !== li.firstChild) {
              var parentList = domUtils.findParentByTagName(start,['ol','ul']);
              domUtils.breakParent(start,parentList);
              clearEmptySibling(start);
              me.fireEvent('contentchange');
              range.setStart(start,0).setCursor(false,true);
              me.fireEvent('saveScene');
              domUtils.preventDefault(evt);
              return;
            }

            if (li && (pre = li.previousSibling)) {
              if (keyCode == 46 && li.childNodes.length) {
                return;
              }
              //鏈夊彲鑳戒笂杈圭殑鍏勫紵鑺傜偣鏄釜2绾ц彍鍗曪紝瑕佽拷鍔犲埌2绾ц彍鍗曠殑鏈€鍚庣殑li
              if (dtd.$list[pre.tagName]) {
                pre = pre.lastChild;
              }
              me.undoManger && me.undoManger.save();
              first = li.firstChild;
              if (domUtils.isBlockElm(first)) {
                if (domUtils.isEmptyNode(first)) {
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                  pre.appendChild(first);
                  range.setStart(first, 0).setCursor(false, true);
                  //first涓嶆槸鍞竴鐨勮妭鐐�
                  while (li.firstChild) {
                    pre.appendChild(li.firstChild);
                  }
                } else {

                  span = me.document.createElement('span');
                  range.insertNode(span);
                  //鍒ゆ柇pre鏄惁鏄┖鐨勮妭鐐�,濡傛灉鏄�<p><br/></p>绫诲瀷鐨勭┖鑺傜偣锛屽共鎺塸鏍囩闃叉瀹冨崰浣�
                  if (domUtils.isEmptyBlock(pre)) {
                    pre.innerHTML = '';
                  }
                  domUtils.moveChild(li, pre);
                  range.setStartBefore(span).collapse(true).select(true);

                  domUtils.remove(span);

                }
              } else {
                if (domUtils.isEmptyNode(li)) {
                  var p = me.document.createElement('p');
                  pre.appendChild(p);
                  range.setStart(p, 0).setCursor();
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                } else {
                  range.setEnd(pre, pre.childNodes.length).collapse().select(true);
                  while (li.firstChild) {
                    pre.appendChild(li.firstChild);
                  }
                }
              }
              domUtils.remove(li);
              me.fireEvent('contentchange');
              me.fireEvent('saveScene');
              domUtils.preventDefault(evt);
              return;

            }
            //trace:980

            if (li && !li.previousSibling) {
              var parentList = li.parentNode;
              var bk = range.createBookmark();
              if(domUtils.isTagNode(parentList.parentNode,'ol ul')){
                parentList.parentNode.insertBefore(li,parentList);
                if(domUtils.isEmptyNode(parentList)){
                  domUtils.remove(parentList)
                }
              }else{

                while(li.firstChild){
                  parentList.parentNode.insertBefore(li.firstChild,parentList);
                }

                domUtils.remove(li);
                if(domUtils.isEmptyNode(parentList)){
                  domUtils.remove(parentList)
                }

              }
              range.moveToBookmark(bk).setCursor(false,true);
              me.fireEvent('contentchange');
              me.fireEvent('saveScene');
              domUtils.preventDefault(evt);
              return;

            }


          }


        }

      }
    });

    me.addListener('keyup',function(type, evt){
      var keyCode = evt.keyCode || evt.which;
      if (keyCode == 8) {
        var rng = me.selection.getRange(),list;
        if(list = domUtils.findParentByTagName(rng.startContainer,['ol', 'ul'],true)){
          adjustList(list,list.tagName.toLowerCase(),getStyle(list)||domUtils.getComputedStyle(list,'list-style-type'),true)
        }
      }
    });
    //澶勭悊tab閿�
    me.addListener('tabkeydown',function(){

      var range = me.selection.getRange();

      //鎺у埗绾ф暟
      function checkLevel(li){
        if(me.options.maxListLevel != -1){
          var level = li.parentNode,levelNum = 0;
          while(/[ou]l/i.test(level.tagName)){
            levelNum++;
            level = level.parentNode;
          }
          if(levelNum >= me.options.maxListLevel){
            return true;
          }
        }
      }
      //鍙互寮€濮嬩负鍑�
      //todo 鍚庣画鏀硅繘
      var li = domUtils.findParentByTagName(range.startContainer, 'li', true);
      if(li){

        var bk;
        if(range.collapsed){
          if(checkLevel(li))
            return true;
          var parentLi = li.parentNode,
            list = me.document.createElement(parentLi.tagName),
            index = utils.indexOf(listStyle[list.tagName], getStyle(parentLi)||domUtils.getComputedStyle(parentLi, 'list-style-type'));
          index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
          var currentStyle = listStyle[list.tagName][index];
          setListStyle(list,currentStyle);
          if(domUtils.isStartInblock(range)){
            me.fireEvent('saveScene');
            bk = range.createBookmark();
            parentLi.insertBefore(list, li);
            list.appendChild(li);
            adjustList(list,list.tagName.toLowerCase(),currentStyle);
            me.fireEvent('contentchange');
            range.moveToBookmark(bk).select(true);
            return true;
          }
        }else{
          me.fireEvent('saveScene');
          bk = range.createBookmark();
          for(var i= 0,closeList,parents = domUtils.findParents(li),ci;ci=parents[i++];){
            if(domUtils.isTagNode(ci,'ol ul')){
              closeList = ci;
              break;
            }
          }
          var current = li;
          if(bk.end){
            while(current && !(domUtils.getPosition(current, bk.end) & domUtils.POSITION_FOLLOWING)){
              if(checkLevel(current)){
                current = domUtils.getNextDomNode(current,false,null,function(node){return node !== closeList});
                continue;
              }
              var parentLi = current.parentNode,
                list = me.document.createElement(parentLi.tagName),
                index = utils.indexOf(listStyle[list.tagName], getStyle(parentLi)||domUtils.getComputedStyle(parentLi, 'list-style-type'));
              var currentIndex = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
              var currentStyle = listStyle[list.tagName][currentIndex];
              setListStyle(list,currentStyle);
              parentLi.insertBefore(list, current);
              while(current && !(domUtils.getPosition(current, bk.end) & domUtils.POSITION_FOLLOWING)){
                li = current.nextSibling;
                list.appendChild(current);
                if(!li || domUtils.isTagNode(li,'ol ul')){
                  if(li){
                    while(li = li.firstChild){
                      if(li.tagName == 'LI'){
                        break;
                      }
                    }
                  }else{
                    li = domUtils.getNextDomNode(current,false,null,function(node){return node !== closeList});
                  }
                  break;
                }
                current = li;
              }
              adjustList(list,list.tagName.toLowerCase(),currentStyle);
              current = li;
            }
          }
          me.fireEvent('contentchange');
          range.moveToBookmark(bk).select();
          return true;
        }
      }

    });
    function getLi(start){
      while(start && !domUtils.isBody(start)){
        if(start.nodeName == 'TABLE'){
          return null;
        }
        if(start.nodeName == 'LI'){
          return start
        }
        start = start.parentNode;
      }
    }

    /**
     * 鏈夊簭鍒楄〃锛屼笌鈥渋nsertunorderedlist鈥濆懡浠や簰鏂�
     * @command insertorderedlist
     * @method execCommand
     * @param { String } command 鍛戒护瀛楃涓�
     * @param { String } style 鎻掑叆鐨勬湁搴忓垪琛ㄧ被鍨嬶紝鍊间负锛歞ecimal,lower-alpha,lower-roman,upper-alpha,upper-roman,cn,cn1,cn2,num,num1,num2
     * @example
     * ```javascript
     * editor.execCommand( 'insertorderedlist','decimal');
     * ```
     */
    /**
     * 鏌ヨ褰撳墠閫夊尯鍐呭鏄惁鏈夊簭鍒楄〃
     * @command insertorderedlist
     * @method queryCommandState
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @return { int } 濡傛灉褰撳墠閫夊尯鏄湁搴忓垪琛ㄨ繑鍥�1锛屽惁鍒欒繑鍥�0
     * @example
     * ```javascript
     * editor.queryCommandState( 'insertorderedlist' );
     * ```
     */
    /**
     * 鏌ヨ褰撳墠閫夊尯鍐呭鏄惁鏈夊簭鍒楄〃
     * @command insertorderedlist
     * @method queryCommandValue
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @return { String } 杩斿洖褰撳墠鏈夊簭鍒楄〃鐨勭被鍨嬶紝鍊间负null鎴杁ecimal,lower-alpha,lower-roman,upper-alpha,upper-roman,cn,cn1,cn2,num,num1,num2
     * @example
     * ```javascript
     * editor.queryCommandValue( 'insertorderedlist' );
     * ```
     */

    /**
     * 鏃犲簭鍒楄〃锛屼笌鈥渋nsertorderedlist鈥濆懡浠や簰鏂�
     * @command insertunorderedlist
     * @method execCommand
     * @param { String } command 鍛戒护瀛楃涓�
     * @param { String } style 鎻掑叆鐨勬棤搴忓垪琛ㄧ被鍨嬶紝鍊间负锛歝ircle,disc,square,dash,dot
     * @example
     * ```javascript
     * editor.execCommand( 'insertunorderedlist','circle');
     * ```
     */
    /**
     * 鏌ヨ褰撳墠鏄惁鏈墂ord鏂囨。绮樿创杩涙潵鐨勫浘鐗�
     * @command insertunorderedlist
     * @method insertunorderedlist
     * @param { String } command 鍛戒护瀛楃涓�
     * @return { int } 濡傛灉褰撳墠閫夊尯鏄棤搴忓垪琛ㄨ繑鍥�1锛屽惁鍒欒繑鍥�0
     * @example
     * ```javascript
     * editor.queryCommandState( 'insertunorderedlist' );
     * ```
     */
    /**
     * 鏌ヨ褰撳墠閫夊尯鍐呭鏄惁鏈夊簭鍒楄〃
     * @command insertunorderedlist
     * @method queryCommandValue
     * @param { String } command 鍛戒护瀛楃涓�
     * @return { String } 杩斿洖褰撳墠鏃犲簭鍒楄〃鐨勭被鍨嬶紝鍊间负null鎴朿ircle,disc,square,dash,dot
     * @example
     * ```javascript
     * editor.queryCommandValue( 'insertunorderedlist' );
     * ```
     */

    me.commands['insertorderedlist'] =
      me.commands['insertunorderedlist'] = {
        execCommand:function (command, style) {

          if (!style) {
            style = command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc';
          }
          var me = this,
            range = this.selection.getRange(),
            filterFn = function (node) {
              return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace(node);
            },
            tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul',
            frag = me.document.createDocumentFragment();
          //鍘绘帀鏄洜涓轰細鍑虹幇閫夊埌鏈熬锛屽鑷碼djustmentBoundary缂╁埌ol/ul鐨勪綅缃�
          //range.shrinkBoundary();//.adjustmentBoundary();
          range.adjustmentBoundary().shrinkBoundary();
          var bko = range.createBookmark(true),
            start = getLi(me.document.getElementById(bko.start)),
            modifyStart = 0,
            end =  getLi(me.document.getElementById(bko.end)),
            modifyEnd = 0,
            startParent, endParent,
            list, tmp;

          if (start || end) {
            start && (startParent = start.parentNode);
            if (!bko.end) {
              end = start;
            }
            end && (endParent = end.parentNode);

            if (startParent === endParent) {
              while (start !== end) {
                tmp = start;
                start = start.nextSibling;
                if (!domUtils.isBlockElm(tmp.firstChild)) {
                  var p = me.document.createElement('p');
                  while (tmp.firstChild) {
                    p.appendChild(tmp.firstChild);
                  }
                  tmp.appendChild(p);
                }
                frag.appendChild(tmp);
              }
              tmp = me.document.createElement('span');
              startParent.insertBefore(tmp, end);
              if (!domUtils.isBlockElm(end.firstChild)) {
                p = me.document.createElement('p');
                while (end.firstChild) {
                  p.appendChild(end.firstChild);
                }
                end.appendChild(p);
              }
              frag.appendChild(end);
              domUtils.breakParent(tmp, startParent);
              if (domUtils.isEmptyNode(tmp.previousSibling)) {
                domUtils.remove(tmp.previousSibling);
              }
              if (domUtils.isEmptyNode(tmp.nextSibling)) {
                domUtils.remove(tmp.nextSibling)
              }
              var nodeStyle = getStyle(startParent) || domUtils.getComputedStyle(startParent, 'list-style-type') || (command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc');
              if (startParent.tagName.toLowerCase() == tag && nodeStyle == style) {
                for (var i = 0, ci, tmpFrag = me.document.createDocumentFragment(); ci = frag.firstChild;) {
                  if(domUtils.isTagNode(ci,'ol ul')){
//                                  鍒犻櫎鏃讹紝瀛愬垪琛ㄤ笉澶勭悊
//                                  utils.each(domUtils.getElementsByTagName(ci,'li'),function(li){
//                                        while(li.firstChild){
//                                            tmpFrag.appendChild(li.firstChild);
//                                        }
//
//                                    });
                    tmpFrag.appendChild(ci);
                  }else{
                    while (ci.firstChild) {

                      tmpFrag.appendChild(ci.firstChild);
                      domUtils.remove(ci);
                    }
                  }

                }
                tmp.parentNode.insertBefore(tmpFrag, tmp);
              } else {
                list = me.document.createElement(tag);
                setListStyle(list,style);
                list.appendChild(frag);
                tmp.parentNode.insertBefore(list, tmp);
              }

              domUtils.remove(tmp);
              list && adjustList(list, tag, style);
              range.moveToBookmark(bko).select();
              return;
            }
            //寮€濮�
            if (start) {
              while (start) {
                tmp = start.nextSibling;
                if (domUtils.isTagNode(start, 'ol ul')) {
                  frag.appendChild(start);
                } else {
                  var tmpfrag = me.document.createDocumentFragment(),
                    hasBlock = 0;
                  while (start.firstChild) {
                    if (domUtils.isBlockElm(start.firstChild)) {
                      hasBlock = 1;
                    }
                    tmpfrag.appendChild(start.firstChild);
                  }
                  if (!hasBlock) {
                    var tmpP = me.document.createElement('p');
                    tmpP.appendChild(tmpfrag);
                    frag.appendChild(tmpP);
                  } else {
                    frag.appendChild(tmpfrag);
                  }
                  domUtils.remove(start);
                }

                start = tmp;
              }
              startParent.parentNode.insertBefore(frag, startParent.nextSibling);
              if (domUtils.isEmptyNode(startParent)) {
                range.setStartBefore(startParent);
                domUtils.remove(startParent);
              } else {
                range.setStartAfter(startParent);
              }
              modifyStart = 1;
            }

            if (end && domUtils.inDoc(endParent, me.document)) {
              //缁撴潫
              start = endParent.firstChild;
              while (start && start !== end) {
                tmp = start.nextSibling;
                if (domUtils.isTagNode(start, 'ol ul')) {
                  frag.appendChild(start);
                } else {
                  tmpfrag = me.document.createDocumentFragment();
                  hasBlock = 0;
                  while (start.firstChild) {
                    if (domUtils.isBlockElm(start.firstChild)) {
                      hasBlock = 1;
                    }
                    tmpfrag.appendChild(start.firstChild);
                  }
                  if (!hasBlock) {
                    tmpP = me.document.createElement('p');
                    tmpP.appendChild(tmpfrag);
                    frag.appendChild(tmpP);
                  } else {
                    frag.appendChild(tmpfrag);
                  }
                  domUtils.remove(start);
                }
                start = tmp;
              }
              var tmpDiv = domUtils.createElement(me.document, 'div', {
                'tmpDiv':1
              });
              domUtils.moveChild(end, tmpDiv);

              frag.appendChild(tmpDiv);
              domUtils.remove(end);
              endParent.parentNode.insertBefore(frag, endParent);
              range.setEndBefore(endParent);
              if (domUtils.isEmptyNode(endParent)) {
                domUtils.remove(endParent);
              }

              modifyEnd = 1;
            }


          }

          if (!modifyStart) {
            range.setStartBefore(me.document.getElementById(bko.start));
          }
          if (bko.end && !modifyEnd) {
            range.setEndAfter(me.document.getElementById(bko.end));
          }
          range.enlarge(true, function (node) {
            return notExchange[node.tagName];
          });

          frag = me.document.createDocumentFragment();

          var bk = range.createBookmark(),
            current = domUtils.getNextDomNode(bk.start, false, filterFn),
            tmpRange = range.cloneRange(),
            tmpNode,
            block = domUtils.isBlockElm;

          while (current && current !== bk.end && (domUtils.getPosition(current, bk.end) & domUtils.POSITION_PRECEDING)) {

            if (current.nodeType == 3 || dtd.li[current.tagName]) {
              if (current.nodeType == 1 && dtd.$list[current.tagName]) {
                while (current.firstChild) {
                  frag.appendChild(current.firstChild);
                }
                tmpNode = domUtils.getNextDomNode(current, false, filterFn);
                domUtils.remove(current);
                current = tmpNode;
                continue;

              }
              tmpNode = current;
              tmpRange.setStartBefore(current);

              while (current && current !== bk.end && (!block(current) || domUtils.isBookmarkNode(current) )) {
                tmpNode = current;
                current = domUtils.getNextDomNode(current, false, null, function (node) {
                  return !notExchange[node.tagName];
                });
              }

              if (current && block(current)) {
                tmp = domUtils.getNextDomNode(tmpNode, false, filterFn);
                if (tmp && domUtils.isBookmarkNode(tmp)) {
                  current = domUtils.getNextDomNode(tmp, false, filterFn);
                  tmpNode = tmp;
                }
              }
              tmpRange.setEndAfter(tmpNode);

              current = domUtils.getNextDomNode(tmpNode, false, filterFn);

              var li = range.document.createElement('li');

              li.appendChild(tmpRange.extractContents());
              if(domUtils.isEmptyNode(li)){
                var tmpNode = range.document.createElement('p');
                while(li.firstChild){
                  tmpNode.appendChild(li.firstChild)
                }
                li.appendChild(tmpNode);
              }
              frag.appendChild(li);
            } else {
              current = domUtils.getNextDomNode(current, true, filterFn);
            }
          }
          range.moveToBookmark(bk).collapse(true);
          list = me.document.createElement(tag);
          setListStyle(list,style);
          list.appendChild(frag);
          range.insertNode(list);
          //褰撳墠list涓婁笅鐪嬭兘鍚﹀悎骞�
          adjustList(list, tag, style);
          //鍘绘帀鍐椾綑鐨則mpDiv
          for (var i = 0, ci, tmpDivs = domUtils.getElementsByTagName(list, 'div'); ci = tmpDivs[i++];) {
            if (ci.getAttribute('tmpDiv')) {
              domUtils.remove(ci, true)
            }
          }
          range.moveToBookmark(bko).select();

        },
        queryCommandState:function (command) {
          var tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul';
          var path = this.selection.getStartElementPath();
          for(var i= 0,ci;ci = path[i++];){
            if(ci.nodeName == 'TABLE'){
              return 0
            }
            if(tag == ci.nodeName.toLowerCase()){
              return 1
            };
          }
          return 0;

        },
        queryCommandValue:function (command) {
          var tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul';
          var path = this.selection.getStartElementPath(),
            node;
          for(var i= 0,ci;ci = path[i++];){
            if(ci.nodeName == 'TABLE'){
              node = null;
              break;
            }
            if(tag == ci.nodeName.toLowerCase()){
              node = ci;
              break;
            };
          }
          return node ? getStyle(node) || domUtils.getComputedStyle(node, 'list-style-type') : null;
        }
      };
  };



// plugins/source.js
  /**
   * 婧愮爜缂栬緫鎻掍欢
   * @file
   * @since 1.2.6.1
   */

  (function (){
    var sourceEditors = {
      textarea: function (editor, holder){
        var textarea = holder.ownerDocument.createElement('textarea');
        textarea.style.cssText = 'position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;';
        // todo: IE涓嬪彧鏈塷nresize灞炴€у彲鐢�... 寰堢籂缁�
        if (browser.ie && browser.version < 8) {
          textarea.style.width = holder.offsetWidth + 'px';
          textarea.style.height = holder.offsetHeight + 'px';
          holder.onresize = function (){
            textarea.style.width = holder.offsetWidth + 'px';
            textarea.style.height = holder.offsetHeight + 'px';
          };
        }
        holder.appendChild(textarea);
        return {
          setContent: function (content){
            textarea.value = content;
          },
          getContent: function (){
            return textarea.value;
          },
          select: function (){
            var range;
            if (browser.ie) {
              range = textarea.createTextRange();
              range.collapse(true);
              range.select();
            } else {
              //todo: chrome涓嬫棤娉曡缃劍鐐�
              textarea.setSelectionRange(0, 0);
              textarea.focus();
            }
          },
          dispose: function (){
            holder.removeChild(textarea);
            // todo
            holder.onresize = null;
            textarea = null;
            holder = null;
          }
        };
      },
      codemirror: function (editor, holder){

        var codeEditor = window.CodeMirror(holder, {
          mode: "text/html",
          tabMode: "indent",
          lineNumbers: true,
          lineWrapping:true
        });
        var dom = codeEditor.getWrapperElement();
        dom.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';
        codeEditor.getScrollerElement().style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
        codeEditor.refresh();
        return {
          getCodeMirror:function(){
            return codeEditor;
          },
          setContent: function (content){
            codeEditor.setValue(content);
          },
          getContent: function (){
            return codeEditor.getValue();
          },
          select: function (){
            codeEditor.focus();
          },
          dispose: function (){
            holder.removeChild(dom);
            dom = null;
            codeEditor = null;
          }
        };
      }
    };

    UE.plugins['source'] = function (){
      var me = this;
      var opt = this.options;
      var sourceMode = false;
      var sourceEditor;
      var orgSetContent;
      opt.sourceEditor = browser.ie  ? 'textarea' : (opt.sourceEditor || 'codemirror');

      me.setOpt({
        sourceEditorFirst:false
      });
      function createSourceEditor(holder){
        return sourceEditors[opt.sourceEditor == 'codemirror' && window.CodeMirror ? 'codemirror' : 'textarea'](me, holder);
      }

      var bakCssText;
      //瑙ｅ喅鍦ㄦ簮鐮佹ā寮忎笅getContent涓嶈兘寰楀埌鏈€鏂扮殑鍐呭闂
      var oldGetContent,
        bakAddress;

      /**
       * 鍒囨崲婧愮爜妯″紡鍜岀紪杈戞ā寮�
       * @command source
       * @method execCommand
       * @param { String } cmd 鍛戒护瀛楃涓�
       * @example
       * ```javascript
       * editor.execCommand( 'source');
       * ```
       */

      /**
       * 鏌ヨ褰撳墠缂栬緫鍖哄煙鐨勭姸鎬佹槸婧愮爜妯″紡杩樻槸鍙鍖栨ā寮�
       * @command source
       * @method queryCommandState
       * @param { String } cmd 鍛戒护瀛楃涓�
       * @return { int } 濡傛灉褰撳墠鏄簮鐮佺紪杈戞ā寮忥紝杩斿洖1锛屽惁鍒欒繑鍥�0
       * @example
       * ```javascript
       * editor.queryCommandState( 'source' );
       * ```
       */

      me.commands['source'] = {
        execCommand: function (){

          sourceMode = !sourceMode;
          if (sourceMode) {
            bakAddress = me.selection.getRange().createAddress(false,true);
            me.undoManger && me.undoManger.save(true);
            if(browser.gecko){
              me.body.contentEditable = false;
            }

            bakCssText = me.iframe.style.cssText;
            me.iframe.style.cssText += 'position:absolute;left:-32768px;top:-32768px;';


            me.fireEvent('beforegetcontent');
            var root = UE.htmlparser(me.body.innerHTML);
            me.filterOutputRule(root);
            root.traversal(function (node) {
              if (node.type == 'element') {
                switch (node.tagName) {
                  case 'td':
                  case 'th':
                  case 'caption':
                    if(node.children && node.children.length == 1){
                      if(node.firstChild().tagName == 'br' ){
                        node.removeChild(node.firstChild())
                      }
                    };
                    break;
                  case 'pre':
                    node.innerText(node.innerText().replace(/&nbsp;/g,' '))

                }
              }
            });

            me.fireEvent('aftergetcontent');

            var content = root.toHtml(true);

            sourceEditor = createSourceEditor(me.iframe.parentNode);

            sourceEditor.setContent(content);

            orgSetContent = me.setContent;

            me.setContent = function(html){
              //杩欓噷鏆傛椂涓嶈Е鍙戜簨浠讹紝闃叉鎶ラ敊
              var root = UE.htmlparser(html);
              me.filterInputRule(root);
              html = root.toHtml();
              sourceEditor.setContent(html);
            };

            setTimeout(function (){
              sourceEditor.select();
              me.addListener('fullscreenchanged', function(){
                try{
                  sourceEditor.getCodeMirror().refresh()
                }catch(e){}
              });
            });

            //閲嶇疆getContent锛屾簮鐮佹ā寮忎笅鍙栧€间篃鑳芥槸鏈€鏂扮殑鏁版嵁
            oldGetContent = me.getContent;
            me.getContent = function (){
              return sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
            };
          } else {
            me.iframe.style.cssText = bakCssText;
            var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
            //澶勭悊鎺塨lock鑺傜偣鍓嶅悗鐨勭┖鏍�,鏈夊彲鑳戒細璇懡涓紝鏆傛椂涓嶈€冭檻
            cont = cont.replace(new RegExp('[\\r\\t\\n ]*<\/?(\\w+)\\s*(?:[^>]*)>','g'), function(a,b){
              if(b && !dtd.$inlineWithA[b.toLowerCase()]){
                return a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,'');
              }
              return a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,'')
            });

            me.setContent = orgSetContent;

            me.setContent(cont);
            sourceEditor.dispose();
            sourceEditor = null;
            //杩樺師getContent鏂规硶
            me.getContent = oldGetContent;
            var first = me.body.firstChild;
            //trace:1106 閮藉垹闄ょ┖浜嗭紝涓嬭竟浼氭姤閿欙紝鎵€浠ヨˉ鍏呬竴涓猵鍗犱綅
            if(!first){
              me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
              first = me.body.firstChild;
            }


            //瑕佸湪ifm涓烘樉绀烘椂ff鎵嶈兘鍙栧埌selection,鍚﹀垯鎶ラ敊
            //杩欓噷涓嶈兘姣旇緝浣嶇疆浜�
            me.undoManger && me.undoManger.save(true);

            if(browser.gecko){

              var input = document.createElement('input');
              input.style.cssText = 'position:absolute;left:0;top:-32768px';

              document.body.appendChild(input);

              me.body.contentEditable = false;
              setTimeout(function(){
                domUtils.setViewportOffset(input, { left: -32768, top: 0 });
                input.focus();
                setTimeout(function(){
                  me.body.contentEditable = true;
                  me.selection.getRange().moveToAddress(bakAddress).select(true);
                  domUtils.remove(input);
                });

              });
            }else{
              //ie涓嬫湁鍙兘鎶ラ敊锛屾瘮濡傚湪浠ｇ爜椤跺ご鐨勬儏鍐�
              try{
                me.selection.getRange().moveToAddress(bakAddress).select(true);
              }catch(e){}

            }
          }
          this.fireEvent('sourcemodechanged', sourceMode);
        },
        queryCommandState: function (){
          return sourceMode|0;
        },
        notNeedUndo : 1
      };
      var oldQueryCommandState = me.queryCommandState;

      me.queryCommandState = function (cmdName){
        cmdName = cmdName.toLowerCase();
        if (sourceMode) {
          //婧愮爜妯″紡涓嬪彲浠ュ紑鍚殑鍛戒护
          return cmdName in {
            'source' : 1,
            'fullscreen' : 1
          } ? 1 : -1
        }
        return oldQueryCommandState.apply(this, arguments);
      };

      if(opt.sourceEditor == "codemirror"){

        me.addListener("ready",function(){
          utils.loadFile(document,{
            src : opt.codeMirrorJsUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.js",
            tag : "script",
            type : "text/javascript",
            defer : "defer"
          },function(){
            if(opt.sourceEditorFirst){
              setTimeout(function(){
                me.execCommand("source");
              },0);
            }
          });
          utils.loadFile(document,{
            tag : "link",
            rel : "stylesheet",
            type : "text/css",
            href : opt.codeMirrorCssUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.css"
          });

        });
      }

    };

  })();

// plugins/enterkey.js
///import core
///import plugins/undo.js
///commands 璁剧疆鍥炶溅鏍囩p鎴朾r
///commandsName  EnterKey
///commandsTitle  璁剧疆鍥炶溅鏍囩p鎴朾r
  /**
   * @description 澶勭悊鍥炶溅
   * @author zhanyi
   */
  UE.plugins['enterkey'] = function() {
    var hTag,
      me = this,
      tag = me.options.enterTag;
    me.addListener('keyup', function(type, evt) {

      var keyCode = evt.keyCode || evt.which;
      if (keyCode == 13) {
        var range = me.selection.getRange(),
          start = range.startContainer,
          doSave;

        //淇鍦╤1-h6閲岃竟鍥炶溅鍚庝笉鑳藉祵濂梡鐨勯棶棰�
        if (!browser.ie) {

          if (/h\d/i.test(hTag)) {
            if (browser.gecko) {
              var h = domUtils.findParentByTagName(start, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote','caption','table'], true);
              if (!h) {
                me.document.execCommand('formatBlock', false, '<p>');
                doSave = 1;
              }
            } else {
              //chrome remove div
              if (start.nodeType == 1) {
                var tmp = me.document.createTextNode(''),div;
                range.insertNode(tmp);
                div = domUtils.findParentByTagName(tmp, 'div', true);
                if (div) {
                  var p = me.document.createElement('p');
                  while (div.firstChild) {
                    p.appendChild(div.firstChild);
                  }
                  div.parentNode.insertBefore(p, div);
                  domUtils.remove(div);
                  range.setStartBefore(tmp).setCursor();
                  doSave = 1;
                }
                domUtils.remove(tmp);

              }
            }

            if (me.undoManger && doSave) {
              me.undoManger.save();
            }
          }
          //娌℃湁绔欎綅绗︼紝浼氬嚭鐜板琛岀殑闂
          browser.opera &&  range.select();
        }else{
          me.fireEvent('saveScene',true,true)
        }
      }
    });

    me.addListener('keydown', function(type, evt) {
      var keyCode = evt.keyCode || evt.which;
      if (keyCode == 13) {//鍥炶溅
        if(me.fireEvent('beforeenterkeydown')){
          domUtils.preventDefault(evt);
          return;
        }
        me.fireEvent('saveScene',true,true);
        hTag = '';


        var range = me.selection.getRange();

        if (!range.collapsed) {
          //璺╰d涓嶈兘鍒�
          var start = range.startContainer,
            end = range.endContainer,
            startTd = domUtils.findParentByTagName(start, 'td', true),
            endTd = domUtils.findParentByTagName(end, 'td', true);
          if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
            evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
            return;
          }
        }
        if (tag == 'p') {


          if (!browser.ie) {

            start = domUtils.findParentByTagName(range.startContainer, ['ol','ul','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote','caption'], true);

            //opera涓嬫墽琛宖ormatblock浼氬湪table鐨勫満鏅笅鏈夐棶棰橈紝鍥炶溅鍦╫pera鍘熺敓鏀寔寰堝ソ锛屾墍浠ユ殏鏃跺湪opera鍘绘帀璋冪敤杩欎釜鍘熺敓鐨刢ommand
            //trace:2431
            if (!start && !browser.opera) {

              me.document.execCommand('formatBlock', false, '<p>');

              if (browser.gecko) {
                range = me.selection.getRange();
                start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                start && domUtils.removeDirtyAttr(start);
              }


            } else {
              hTag = start.tagName;
              start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
            }

          }

        } else {
          evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);

          if (!range.collapsed) {
            range.deleteContents();
            start = range.startContainer;
            if (start.nodeType == 1 && (start = start.childNodes[range.startOffset])) {
              while (start.nodeType == 1) {
                if (dtd.$empty[start.tagName]) {
                  range.setStartBefore(start).setCursor();
                  if (me.undoManger) {
                    me.undoManger.save();
                  }
                  return false;
                }
                if (!start.firstChild) {
                  var br = range.document.createElement('br');
                  start.appendChild(br);
                  range.setStart(start, 0).setCursor();
                  if (me.undoManger) {
                    me.undoManger.save();
                  }
                  return false;
                }
                start = start.firstChild;
              }
              if (start === range.startContainer.childNodes[range.startOffset]) {
                br = range.document.createElement('br');
                range.insertNode(br).setCursor();

              } else {
                range.setStart(start, 0).setCursor();
              }


            } else {
              br = range.document.createElement('br');
              range.insertNode(br).setStartAfter(br).setCursor();
            }


          } else {
            br = range.document.createElement('br');
            range.insertNode(br);
            var parent = br.parentNode;
            if (parent.lastChild === br) {
              br.parentNode.insertBefore(br.cloneNode(true), br);
              range.setStartBefore(br);
            } else {
              range.setStartAfter(br);
            }
            range.setCursor();

          }

        }

      }
    });
  };


// plugins/keystrokes.js
  /* 澶勭悊鐗规畩閿殑鍏煎鎬ч棶棰� */
  UE.plugins['keystrokes'] = function() {
    var me = this;
    var collapsed = true;
    me.addListener('keydown', function(type, evt) {
      var keyCode = evt.keyCode || evt.which,
        rng = me.selection.getRange();

      //澶勭悊鍏ㄩ€夌殑鎯呭喌
      if(!rng.collapsed && !(evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) && (keyCode >= 65 && keyCode <=90
        || keyCode >= 48 && keyCode <= 57 ||
        keyCode >= 96 && keyCode <= 111 || {
          13:1,
          8:1,
          46:1
        }[keyCode])
      ){

        var tmpNode = rng.startContainer;
        if(domUtils.isFillChar(tmpNode)){
          rng.setStartBefore(tmpNode)
        }
        tmpNode = rng.endContainer;
        if(domUtils.isFillChar(tmpNode)){
          rng.setEndAfter(tmpNode)
        }
        rng.txtToElmBoundary();
        //缁撴潫杈圭晫鍙兘鏀惧埌浜哹r鐨勫墠杈癸紝瑕佹妸br鍖呭惈杩涙潵
        // x[xxx]<br/>
        if(rng.endContainer && rng.endContainer.nodeType == 1){
          tmpNode = rng.endContainer.childNodes[rng.endOffset];
          if(tmpNode && domUtils.isBr(tmpNode)){
            rng.setEndAfter(tmpNode);
          }
        }
        if(rng.startOffset == 0){
          tmpNode = rng.startContainer;
          if(domUtils.isBoundaryNode(tmpNode,'firstChild') ){
            tmpNode = rng.endContainer;
            if(rng.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode,'lastChild')){
              me.fireEvent('saveScene');
              me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';
              rng.setStart(me.body.firstChild,0).setCursor(false,true);
              me._selectionChange();
              return;
            }
          }
        }
      }

      //澶勭悊backspace
      if (keyCode == keymap.Backspace) {
        rng = me.selection.getRange();
        collapsed = rng.collapsed;
        if(me.fireEvent('delkeydown',evt)){
          return;
        }
        var start,end;
        //閬垮厤鎸変袱娆″垹闄ゆ墠鑳界敓鏁堢殑闂
        if(rng.collapsed && rng.inFillChar()){
          start = rng.startContainer;

          if(domUtils.isFillChar(start)){
            rng.setStartBefore(start).shrinkBoundary(true).collapse(true);
            domUtils.remove(start)
          }else{
            start.nodeValue = start.nodeValue.replace(new RegExp('^' + domUtils.fillChar ),'');
            rng.startOffset--;
            rng.collapse(true).select(true)
          }
        }

        //瑙ｅ喅閫変腑control鍏冪礌涓嶈兘鍒犻櫎鐨勯棶棰�
        if (start = rng.getClosedNode()) {
          me.fireEvent('saveScene');
          rng.setStartBefore(start);
          domUtils.remove(start);
          rng.setCursor();
          me.fireEvent('saveScene');
          domUtils.preventDefault(evt);
          return;
        }
        //闃绘鍦╰able涓婄殑鍒犻櫎
        if (!browser.ie) {
          start = domUtils.findParentByTagName(rng.startContainer, 'table', true);
          end = domUtils.findParentByTagName(rng.endContainer, 'table', true);
          if (start && !end || !start && end || start !== end) {
            evt.preventDefault();
            return;
          }
        }

      }
      //澶勭悊tab閿殑閫昏緫
      if (keyCode == keymap.Tab) {
        //涓嶅鐞嗕互涓嬫爣绛�
        var excludeTagNameForTabKey = {
          'ol' : 1,
          'ul' : 1,
          'table':1
        };
        //澶勭悊缁勪欢閲岀殑tab鎸変笅浜嬩欢
        if(me.fireEvent('tabkeydown',evt)){
          domUtils.preventDefault(evt);
          return;
        }
        var range = me.selection.getRange();
        me.fireEvent('saveScene');
        for (var i = 0,txt = '',tabSize = me.options.tabSize|| 4,tabNode =  me.options.tabNode || '&nbsp;'; i < tabSize; i++) {
          txt += tabNode;
        }
        var span = me.document.createElement('span');
        span.innerHTML = txt + domUtils.fillChar;
        if (range.collapsed) {
          range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
        } else {
          var filterFn = function(node) {
            return domUtils.isBlockElm(node) && !excludeTagNameForTabKey[node.tagName.toLowerCase()]

          };
          //鏅€氱殑鎯呭喌
          start = domUtils.findParent(range.startContainer, filterFn,true);
          end = domUtils.findParent(range.endContainer, filterFn,true);
          if (start && end && start === end) {
            range.deleteContents();
            range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
          } else {
            var bookmark = range.createBookmark();
            range.enlarge(true);
            var bookmark2 = range.createBookmark(),
              current = domUtils.getNextDomNode(bookmark2.start, false, filterFn);
            while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {
              current.insertBefore(span.cloneNode(true).firstChild, current.firstChild);
              current = domUtils.getNextDomNode(current, false, filterFn);
            }
            range.moveToBookmark(bookmark2).moveToBookmark(bookmark).select();
          }
        }
        domUtils.preventDefault(evt)
      }
      //trace:1634
      //ff鐨刣el閿湪瀹瑰櫒绌虹殑鏃跺€欙紝涔熶細鍒犻櫎
      if(browser.gecko && keyCode == 46){
        range = me.selection.getRange();
        if(range.collapsed){
          start = range.startContainer;
          if(domUtils.isEmptyBlock(start)){
            var parent = start.parentNode;
            while(domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)){
              start = parent;
              parent = parent.parentNode;
            }
            if(start === parent.lastChild)
              evt.preventDefault();
            return;
          }
        }
      }
    });
    me.addListener('keyup', function(type, evt) {
      var keyCode = evt.keyCode || evt.which,
        rng,me = this;
      if(keyCode == keymap.Backspace){
        if(me.fireEvent('delkeyup')){
          return;
        }
        rng = me.selection.getRange();
        if(rng.collapsed){
          var tmpNode,
            autoClearTagName = ['h1','h2','h3','h4','h5','h6'];
          if(tmpNode = domUtils.findParentByTagName(rng.startContainer,autoClearTagName,true)){
            if(domUtils.isEmptyBlock(tmpNode)){
              var pre = tmpNode.previousSibling;
              if(pre && pre.nodeName != 'TABLE'){
                domUtils.remove(tmpNode);
                rng.setStartAtLast(pre).setCursor(false,true);
                return;
              }else{
                var next = tmpNode.nextSibling;
                if(next && next.nodeName != 'TABLE'){
                  domUtils.remove(tmpNode);
                  rng.setStartAtFirst(next).setCursor(false,true);
                  return;
                }
              }
            }
          }
          //澶勭悊褰撳垹闄ゅ埌body鏃讹紝瑕侀噸鏂扮粰p鏍囩灞曚綅
          if(domUtils.isBody(rng.startContainer)){
            var tmpNode = domUtils.createElement(me.document,'p',{
              'innerHTML' : browser.ie ? domUtils.fillChar : '<br/>'
            });
            rng.insertNode(tmpNode).setStart(tmpNode,0).setCursor(false,true);
          }
        }


        //chrome涓嬪鏋滃垹闄や簡inline鏍囩锛屾祻瑙堝櫒浼氭湁璁板繂锛屽湪杈撳叆鏂囧瓧杩樻槸浼氬涓婂垰鎵嶅垹闄ょ殑鏍囩锛屾墍浠ヨ繖閲屽啀閫変竴娆″氨涓嶄細浜�
        if( !collapsed && (rng.startContainer.nodeType == 3 || rng.startContainer.nodeType == 1 && domUtils.isEmptyBlock(rng.startContainer))){
          if(browser.ie){
            var span = rng.document.createElement('span');
            rng.insertNode(span).setStartBefore(span).collapse(true);
            rng.select();
            domUtils.remove(span)
          }else{
            rng.select()
          }

        }
      }


    })
  };

// plugins/fiximgclick.js
///import core
///commands 淇chrome涓嬪浘鐗囦笉鑳界偣鍑荤殑闂锛屽嚭鐜板叓涓鍙敼鍙樺ぇ灏�
///commandsName  FixImgClick
///commandsTitle  淇chrome涓嬪浘鐗囦笉鑳界偣鍑荤殑闂锛屽嚭鐜板叓涓鍙敼鍙樺ぇ灏�
//淇chrome涓嬪浘鐗囦笉鑳界偣鍑荤殑闂锛屽嚭鐜板叓涓鍙敼鍙樺ぇ灏�

  UE.plugins['fiximgclick'] = (function () {

    var elementUpdated = false;
    function Scale() {
      this.editor = null;
      this.resizer = null;
      this.cover = null;
      this.doc = document;
      this.prePos = {x: 0, y: 0};
      this.startPos = {x: 0, y: 0};
    }

    (function () {
      var rect = [
        //[left, top, width, height]
        [0, 0, -1, -1],
        [0, 0, 0, -1],
        [0, 0, 1, -1],
        [0, 0, -1, 0],
        [0, 0, 1, 0],
        [0, 0, -1, 1],
        [0, 0, 0, 1],
        [0, 0, 1, 1]
      ];

      Scale.prototype = {
        init: function (editor) {
          var me = this;
          me.editor = editor;
          me.startPos = this.prePos = {x: 0, y: 0};
          me.dragId = -1;

          var hands = [],
            cover = me.cover = document.createElement('div'),
            resizer = me.resizer = document.createElement('div');

          cover.id = me.editor.ui.id + '_imagescale_cover';
          cover.style.cssText = 'position:absolute;display:none;z-index:' + (me.editor.options.zIndex) + ';filter:alpha(opacity=0); opacity:0;background:#CCC;';
          domUtils.on(cover, 'mousedown click', function () {
            me.hide();
          });

          for (i = 0; i < 8; i++) {
            hands.push('<span class="edui-editor-imagescale-hand' + i + '"></span>');
          }
          resizer.id = me.editor.ui.id + '_imagescale';
          resizer.className = 'edui-editor-imagescale';
          resizer.innerHTML = hands.join('');
          resizer.style.cssText += ';display:none;border:1px solid #3b77ff;z-index:' + (me.editor.options.zIndex) + ';';

          me.editor.ui.getDom().appendChild(cover);
          me.editor.ui.getDom().appendChild(resizer);

          me.initStyle();
          me.initEvents();
        },
        initStyle: function () {
          utils.cssRule('imagescale', '.edui-editor-imagescale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}' +
            '.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}'
            + '.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}');
        },
        initEvents: function () {
          var me = this;

          me.startPos.x = me.startPos.y = 0;
          me.isDraging = false;
        },
        _eventHandler: function (e) {
          var me = this;
          switch (e.type) {
            case 'mousedown':
              var hand = e.target || e.srcElement, hand;
              if (hand.className.indexOf('edui-editor-imagescale-hand') != -1 && me.dragId == -1) {
                me.dragId = hand.className.slice(-1);
                me.startPos.x = me.prePos.x = e.clientX;
                me.startPos.y = me.prePos.y = e.clientY;
                domUtils.on(me.doc,'mousemove', me.proxy(me._eventHandler, me));
              }
              break;
            case 'mousemove':
              if (me.dragId != -1) {
                me.updateContainerStyle(me.dragId, {x: e.clientX - me.prePos.x, y: e.clientY - me.prePos.y});
                me.prePos.x = e.clientX;
                me.prePos.y = e.clientY;
                elementUpdated = true;
                me.updateTargetElement();

              }
              break;
            case 'mouseup':
              if (me.dragId != -1) {
                me.updateContainerStyle(me.dragId, {x: e.clientX - me.prePos.x, y: e.clientY - me.prePos.y});
                me.updateTargetElement();
                if (me.target.parentNode) me.attachTo(me.target);
                me.dragId = -1;
              }
              domUtils.un(me.doc,'mousemove', me.proxy(me._eventHandler, me));
              //淇鍙槸鐐瑰嚮鎸姩鐐癸紝浣嗘病鏈夋敼鍙樺ぇ灏忥紝涓嶅簲璇ヨЕ鍙慶ontentchange
              if(elementUpdated){
                elementUpdated = false;
                me.editor.fireEvent('contentchange');
              }

              break;
            default:
              break;
          }
        },
        updateTargetElement: function () {
          var me = this;
          domUtils.setStyles(me.target, {
            'width': me.resizer.style.width,
            'height': me.resizer.style.height
          });
          me.target.width = parseInt(me.resizer.style.width);
          me.target.height = parseInt(me.resizer.style.height);
          me.attachTo(me.target);
        },
        updateContainerStyle: function (dir, offset) {
          var me = this,
            dom = me.resizer, tmp;

          if (rect[dir][0] != 0) {
            tmp = parseInt(dom.style.left) + offset.x;
            dom.style.left = me._validScaledProp('left', tmp) + 'px';
          }
          if (rect[dir][1] != 0) {
            tmp = parseInt(dom.style.top) + offset.y;
            dom.style.top = me._validScaledProp('top', tmp) + 'px';
          }
          if (rect[dir][2] != 0) {
            tmp = dom.clientWidth + rect[dir][2] * offset.x;
            dom.style.width = me._validScaledProp('width', tmp) + 'px';
          }
          if (rect[dir][3] != 0) {
            tmp = dom.clientHeight + rect[dir][3] * offset.y;
            dom.style.height = me._validScaledProp('height', tmp) + 'px';
          }
        },
        _validScaledProp: function (prop, value) {
          var ele = this.resizer,
            wrap = document;

          value = isNaN(value) ? 0 : value;
          switch (prop) {
            case 'left':
              return value < 0 ? 0 : (value + ele.clientWidth) > wrap.clientWidth ? wrap.clientWidth - ele.clientWidth : value;
            case 'top':
              return value < 0 ? 0 : (value + ele.clientHeight) > wrap.clientHeight ? wrap.clientHeight - ele.clientHeight : value;
            case 'width':
              return value <= 0 ? 1 : (value + ele.offsetLeft) > wrap.clientWidth ? wrap.clientWidth - ele.offsetLeft : value;
            case 'height':
              return value <= 0 ? 1 : (value + ele.offsetTop) > wrap.clientHeight ? wrap.clientHeight - ele.offsetTop : value;
          }
        },
        hideCover: function () {
          this.cover.style.display = 'none';
        },
        showCover: function () {
          var me = this,
            editorPos = domUtils.getXY(me.editor.ui.getDom()),
            iframePos = domUtils.getXY(me.editor.iframe);

          domUtils.setStyles(me.cover, {
            'width': me.editor.iframe.offsetWidth + 'px',
            'height': me.editor.iframe.offsetHeight + 'px',
            'top': iframePos.y - editorPos.y + 'px',
            'left': iframePos.x - editorPos.x + 'px',
            'position': 'absolute',
            'display': ''
          })
        },
        show: function (targetObj) {
          var me = this;
          me.resizer.style.display = 'block';
          if(targetObj) me.attachTo(targetObj);

          domUtils.on(this.resizer, 'mousedown', me.proxy(me._eventHandler, me));
          domUtils.on(me.doc, 'mouseup', me.proxy(me._eventHandler, me));

          me.showCover();
          me.editor.fireEvent('afterscaleshow', me);
          me.editor.fireEvent('saveScene');
        },
        hide: function () {
          var me = this;
          me.hideCover();
          me.resizer.style.display = 'none';

          domUtils.un(me.resizer, 'mousedown', me.proxy(me._eventHandler, me));
          domUtils.un(me.doc, 'mouseup', me.proxy(me._eventHandler, me));
          me.editor.fireEvent('afterscalehide', me);
        },
        proxy: function( fn, context ) {
          return function(e) {
            return fn.apply( context || this, arguments);
          };
        },
        attachTo: function (targetObj) {
          var me = this,
            target = me.target = targetObj,
            resizer = this.resizer,
            imgPos = domUtils.getXY(target),
            iframePos = domUtils.getXY(me.editor.iframe),
            editorPos = domUtils.getXY(resizer.parentNode);

          domUtils.setStyles(resizer, {
            'width': target.width + 'px',
            'height': target.height + 'px',
            'left': iframePos.x + imgPos.x - me.editor.document.body.scrollLeft - editorPos.x - parseInt(resizer.style.borderLeftWidth) + 'px',
            'top': iframePos.y + imgPos.y - me.editor.document.body.scrollTop - editorPos.y - parseInt(resizer.style.borderTopWidth) + 'px'
          });
        }
      }
    })();

    return function () {
      var me = this,
        imageScale;

      me.setOpt('imageScaleEnabled', true);

      if ( !browser.ie && me.options.imageScaleEnabled) {
        me.addListener('click', function (type, e) {

          var range = me.selection.getRange(),
            img = range.getClosedNode();

          if (img && img.tagName == 'IMG' && me.body.contentEditable!="false") {

            if (img.className.indexOf("edui-faked-music") != -1 ||
              img.getAttribute("anchorname") ||
              domUtils.hasClass(img, 'loadingclass') ||
              domUtils.hasClass(img, 'loaderrorclass')) { return }

            if (!imageScale) {
              imageScale = new Scale();
              imageScale.init(me);
              me.ui.getDom().appendChild(imageScale.resizer);

              var _keyDownHandler = function (e) {
                imageScale.hide();
                if(imageScale.target) me.selection.getRange().selectNode(imageScale.target).select();
              }, _mouseDownHandler = function (e) {
                var ele = e.target || e.srcElement;
                if (ele && (ele.className===undefined || ele.className.indexOf('edui-editor-imagescale') == -1)) {
                  _keyDownHandler(e);
                }
              }, timer;

              me.addListener('afterscaleshow', function (e) {
                me.addListener('beforekeydown', _keyDownHandler);
                me.addListener('beforemousedown', _mouseDownHandler);
                domUtils.on(document, 'keydown', _keyDownHandler);
                domUtils.on(document,'mousedown', _mouseDownHandler);
                me.selection.getNative().removeAllRanges();
              });
              me.addListener('afterscalehide', function (e) {
                me.removeListener('beforekeydown', _keyDownHandler);
                me.removeListener('beforemousedown', _mouseDownHandler);
                domUtils.un(document, 'keydown', _keyDownHandler);
                domUtils.un(document,'mousedown', _mouseDownHandler);
                var target = imageScale.target;
                if (target.parentNode) {
                  me.selection.getRange().selectNode(target).select();
                }
              });
              //TODO 鏈塱frame鐨勬儏鍐碉紝mousedown涓嶈兘寰€涓嬩紶銆傘€�
              domUtils.on(imageScale.resizer, 'mousedown', function (e) {
                me.selection.getNative().removeAllRanges();
                var ele = e.target || e.srcElement;
                if (ele && ele.className.indexOf('edui-editor-imagescale-hand') == -1) {
                  timer = setTimeout(function () {
                    imageScale.hide();
                    if(imageScale.target) me.selection.getRange().selectNode(ele).select();
                  }, 200);
                }
              });
              domUtils.on(imageScale.resizer, 'mouseup', function (e) {
                var ele = e.target || e.srcElement;
                if (ele && ele.className.indexOf('edui-editor-imagescale-hand') == -1) {
                  clearTimeout(timer);
                }
              });
            }
            imageScale.show(img);
          } else {
            if (imageScale && imageScale.resizer.style.display != 'none') imageScale.hide();
          }
        });
      }

      if (browser.webkit) {
        me.addListener('click', function (type, e) {
          if (e.target.tagName == 'IMG' && me.body.contentEditable!="false") {
            var range = new dom.Range(me.document);
            range.selectNode(e.target).select();
          }
        });
      }
    }
  })();

// plugins/autolink.js
///import core
///commands 涓洪潪ie娴忚鍣ㄨ嚜鍔ㄦ坊鍔燼鏍囩
///commandsName  AutoLink
///commandsTitle  鑷姩澧炲姞閾炬帴
  /**
   * @description 涓洪潪ie娴忚鍣ㄨ嚜鍔ㄦ坊鍔燼鏍囩
   * @author zhanyi
   */

  UE.plugin.register('autolink',function(){
      var cont = 0;

      return !browser.ie ? {

        bindEvents:{
          'reset' : function(){
            cont = 0;
          },
          'keydown':function(type, evt) {
            var me = this;
            var keyCode = evt.keyCode || evt.which;

            if (keyCode == 32 || keyCode == 13) {

              var sel = me.selection.getNative(),
                range = sel.getRangeAt(0).cloneRange(),
                offset,
                charCode;

              var start = range.startContainer;
              while (start.nodeType == 1 && range.startOffset > 0) {
                start = range.startContainer.childNodes[range.startOffset - 1];
                if (!start){
                  break;
                }
                range.setStart(start, start.nodeType == 1 ? start.childNodes.length : start.nodeValue.length);
                range.collapse(true);
                start = range.startContainer;
              }

              do{
                if (range.startOffset == 0) {
                  start = range.startContainer.previousSibling;

                  while (start && start.nodeType == 1) {
                    start = start.lastChild;
                  }
                  if (!start || domUtils.isFillChar(start)){
                    break;
                  }
                  offset = start.nodeValue.length;
                } else {
                  start = range.startContainer;
                  offset = range.startOffset;
                }
                range.setStart(start, offset - 1);
                charCode = range.toString().charCodeAt(0);
              } while (charCode != 160 && charCode != 32);

              if (range.toString().replace(new RegExp(domUtils.fillChar, 'g'), '').match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                while(range.toString().length){
                  if(/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(range.toString())){
                    break;
                  }
                  try{
                    range.setStart(range.startContainer,range.startOffset+1);
                  }catch(e){
                    //trace:2121
                    var start = range.startContainer;
                    while(!(next = start.nextSibling)){
                      if(domUtils.isBody(start)){
                        return;
                      }
                      start = start.parentNode;

                    }
                    range.setStart(next,0);

                  }

                }
                //range鐨勫紑濮嬭竟鐣屽凡缁忓湪a鏍囩閲岀殑涓嶅啀澶勭悊
                if(domUtils.findParentByTagName(range.startContainer,'a',true)){
                  return;
                }
                var a = me.document.createElement('a'),text = me.document.createTextNode(' '),href;

                me.undoManger && me.undoManger.save();
                a.appendChild(range.extractContents());
                a.href = a.innerHTML = a.innerHTML.replace(/<[^>]+>/g,'');
                href = a.getAttribute("href").replace(new RegExp(domUtils.fillChar,'g'),'');
                href = /^(?:https?:\/\/)/ig.test(href) ? href : "http://"+ href;
                a.setAttribute('_src',utils.html(href));
                a.href = utils.html(href);

                range.insertNode(a);
                a.parentNode.insertBefore(text, a.nextSibling);
                range.setStart(text, 0);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                me.undoManger && me.undoManger.save();
              }
            }
          }
        }
      }:{}
    },function(){
      var keyCodes = {
        37:1, 38:1, 39:1, 40:1,
        13:1,32:1
      };
      function checkIsCludeLink(node){
        if(node.nodeType == 3){
          return null
        }
        if(node.nodeName == 'A'){
          return node;
        }
        var lastChild = node.lastChild;

        while(lastChild){
          if(lastChild.nodeName == 'A'){
            return lastChild;
          }
          if(lastChild.nodeType == 3){
            if(domUtils.isWhitespace(lastChild)){
              lastChild = lastChild.previousSibling;
              continue;
            }
            return null
          }
          lastChild = lastChild.lastChild;
        }
      }
      browser.ie && this.addListener('keyup',function(cmd,evt){
        var me = this,keyCode = evt.keyCode;
        if(keyCodes[keyCode]){
          var rng = me.selection.getRange();
          var start = rng.startContainer;

          if(keyCode == 13){
            while(start && !domUtils.isBody(start) && !domUtils.isBlockElm(start)){
              start = start.parentNode;
            }
            if(start && !domUtils.isBody(start) && start.nodeName == 'P'){
              var pre = start.previousSibling;
              if(pre && pre.nodeType == 1){
                var pre = checkIsCludeLink(pre);
                if(pre && !pre.getAttribute('_href')){
                  domUtils.remove(pre,true);
                }
              }
            }
          }else if(keyCode == 32 ){
            if(start.nodeType == 3 && /^\s$/.test(start.nodeValue)){
              start = start.previousSibling;
              if(start && start.nodeName == 'A' && !start.getAttribute('_href')){
                domUtils.remove(start,true);
              }
            }
          }else {
            start = domUtils.findParentByTagName(start,'a',true);
            if(start && !start.getAttribute('_href')){
              var bk = rng.createBookmark();

              domUtils.remove(start,true);
              rng.moveToBookmark(bk).select(true)
            }
          }

        }


      });
    }
  );

// plugins/autoheight.js
///import core
///commands 褰撹緭鍏ュ唴瀹硅秴杩囩紪杈戝櫒楂樺害鏃讹紝缂栬緫鍣ㄨ嚜鍔ㄥ楂�
///commandsName  AutoHeight,autoHeightEnabled
///commandsTitle  鑷姩澧為珮
  /**
   * @description 鑷姩浼稿睍
   * @author zhanyi
   */
  UE.plugins['autoheight'] = function () {
    var me = this;
    //鎻愪緵寮€鍏筹紝灏辩畻鍔犺浇涔熷彲浠ュ叧闂�
    me.autoHeightEnabled = me.options.autoHeightEnabled !== false;
    if (!me.autoHeightEnabled) {
      return;
    }

    var bakOverflow,
      lastHeight = 0,
      options = me.options,
      currentHeight,
      timer;

    function adjustHeight() {
      var me = this;
      clearTimeout(timer);
      if(isFullscreen)return;
      if (!me.queryCommandState || me.queryCommandState && me.queryCommandState('source') != 1) {
        timer = setTimeout(function(){

          var node = me.body.lastChild;
          while(node && node.nodeType != 1){
            node = node.previousSibling;
          }
          if(node && node.nodeType == 1){
            node.style.clear = 'both';
            currentHeight = Math.max(domUtils.getXY(node).y + node.offsetHeight + 25 ,Math.max(options.minFrameHeight, options.initialFrameHeight)) ;
            if (currentHeight != lastHeight) {
              if (currentHeight !== parseInt(me.iframe.parentNode.style.height)) {
                me.iframe.parentNode.style.height = currentHeight + 'px';
              }
              me.body.style.height = currentHeight + 'px';
              lastHeight = currentHeight;
            }
            domUtils.removeStyle(node,'clear');
          }


        },50)
      }
    }
    var isFullscreen;
    me.addListener('fullscreenchanged',function(cmd,f){
      isFullscreen = f
    });
    me.addListener('destroy', function () {
      me.removeListener('contentchange afterinserthtml keyup mouseup',adjustHeight)
    });
    me.enableAutoHeight = function () {
      var me = this;
      if (!me.autoHeightEnabled) {
        return;
      }
      var doc = me.document;
      me.autoHeightEnabled = true;
      bakOverflow = doc.body.style.overflowY;
      doc.body.style.overflowY = 'hidden';
      me.addListener('contentchange afterinserthtml keyup mouseup',adjustHeight);
      //ff涓嶇粰浜嬩欢绠楀緱涓嶅

      setTimeout(function () {
        adjustHeight.call(me);
      }, browser.gecko ? 100 : 0);
      me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.disableAutoHeight = function () {

      me.body.style.overflowY = bakOverflow || '';

      me.removeListener('contentchange', adjustHeight);
      me.removeListener('keyup', adjustHeight);
      me.removeListener('mouseup', adjustHeight);
      me.autoHeightEnabled = false;
      me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };

    me.on('setHeight',function(){
      me.disableAutoHeight()
    });
    me.addListener('ready', function () {
      me.enableAutoHeight();
      //trace:1764
      var timer;
      domUtils.on(browser.ie ? me.body : me.document, browser.webkit ? 'dragover' : 'drop', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          //trace:3681
          adjustHeight.call(me);
        }, 100);

      });
      //淇鍐呭杩囧鏃讹紝鍥炲埌椤堕儴锛岄《閮ㄥ唴瀹硅宸ュ叿鏍忛伄鎸￠棶棰�
      var lastScrollY;
      window.onscroll = function(){
        if(lastScrollY === null){
          lastScrollY = this.scrollY
        }else if(this.scrollY == 0 && lastScrollY != 0){
          me.window.scrollTo(0,0);
          lastScrollY = null;
        }
      }
    });


  };



// plugins/autofloat.js
///import core
///commands 鎮诞宸ュ叿鏍�
///commandsName  AutoFloat,autoFloatEnabled
///commandsTitle  鎮诞宸ュ叿鏍�
  /**
   *  modified by chengchao01
   *  娉ㄦ剰锛� 寮曞叆姝ゅ姛鑳藉悗锛屽湪IE6涓嬩細灏哹ody鐨勮儗鏅浘鐗囪鐩栨帀锛�
   */
  UE.plugins['autofloat'] = function() {
    var me = this,
      lang = me.getLang();
    me.setOpt({
      topOffset:0
    });
    var optsAutoFloatEnabled = me.options.autoFloatEnabled !== false,
      topOffset = me.options.topOffset;


    //濡傛灉涓嶅浐瀹歵oolbar鐨勪綅缃紝鍒欑洿鎺ラ€€鍑�
    if(!optsAutoFloatEnabled){
      return;
    }
    var uiUtils = UE.ui.uiUtils,
      LteIE6 = browser.ie && browser.version <= 6,
      quirks = browser.quirks;

    function checkHasUI(){
      if(!UE.ui){
        alert(lang.autofloatMsg);
        return 0;
      }
      return 1;
    }
    function fixIE6FixedPos(){
      var docStyle = document.body.style;
      docStyle.backgroundImage = 'url("about:blank")';
      docStyle.backgroundAttachment = 'fixed';
    }
    var	bakCssText,
      placeHolder = document.createElement('div'),
      toolbarBox,orgTop,
      getPosition,
      flag =true;   //ie7妯″紡涓嬮渶瑕佸亸绉�
    function setFloating(){
      var toobarBoxPos = domUtils.getXY(toolbarBox),
        origalFloat = domUtils.getComputedStyle(toolbarBox,'position'),
        origalLeft = domUtils.getComputedStyle(toolbarBox,'left');
      toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
      toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
      toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
      if (LteIE6 || (quirks && browser.ie)) {
        if(toolbarBox.style.position != 'absolute'){
          toolbarBox.style.position = 'absolute';
        }
        toolbarBox.style.top = (document.body.scrollTop||document.documentElement.scrollTop) - orgTop + topOffset  + 'px';
      } else {
        if (browser.ie7Compat && flag) {
          flag = false;
          toolbarBox.style.left =  domUtils.getXY(toolbarBox).x - document.documentElement.getBoundingClientRect().left+2  + 'px';
        }
        if(toolbarBox.style.position != 'fixed'){
          toolbarBox.style.position = 'fixed';
          toolbarBox.style.top = topOffset +"px";
          ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
        }
      }
    }
    function unsetFloating(){
      flag = true;
      if(placeHolder.parentNode){
        placeHolder.parentNode.removeChild(placeHolder);
      }

      toolbarBox.style.cssText = bakCssText;
    }

    function updateFloating(){
      var rect3 = getPosition(me.container);
      var offset=me.options.toolbarTopOffset||0;
      if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > offset) {
        setFloating();
      }else{
        unsetFloating();
      }
    }
    var defer_updateFloating = utils.defer(function(){
      updateFloating();
    },browser.ie ? 200 : 100,true);

    me.addListener('destroy',function(){
      domUtils.un(window, ['scroll','resize'], updateFloating);
      me.removeListener('keydown', defer_updateFloating);
    });

    me.addListener('ready', function(){
      if(checkHasUI(me)){
        //鍔犺浇浜唘i缁勪欢锛屼絾鍦╪ew鏃讹紝娌℃湁鍔犺浇ui锛屽鑷寸紪杈戝櫒瀹炰緥涓婃病鏈塽i绫伙紝鎵€浠ヨ繖閲屽仛鍒ゆ柇
        if(!me.ui){
          return;
        }
        getPosition = uiUtils.getClientRect;
        toolbarBox = me.ui.getDom('toolbarbox');
        orgTop = getPosition(toolbarBox).top;
        bakCssText = toolbarBox.style.cssText;
        placeHolder.style.height = toolbarBox.offsetHeight + 'px';
        if(LteIE6){
          fixIE6FixedPos();
        }
        domUtils.on(window, ['scroll','resize'], updateFloating);
        me.addListener('keydown', defer_updateFloating);

        me.addListener('beforefullscreenchange', function (t, enabled){
          if (enabled) {
            unsetFloating();
          }
        });
        me.addListener('fullscreenchanged', function (t, enabled){
          if (!enabled) {
            updateFloating();
          }
        });
        me.addListener('sourcemodechanged', function (t, enabled){
          setTimeout(function (){
            updateFloating();
          },0);
        });
        me.addListener("clearDoc",function(){
          setTimeout(function(){
            updateFloating();
          },0);

        })
      }
    });
  };


// plugins/video.js
  /**
   * video鎻掍欢锛� 涓篣Editor鎻愪緵瑙嗛鎻掑叆鏀寔
   * @file
   * @since 1.2.6.1
   */

  UE.plugins['video'] = function (){
    var me =this;

    /**
     * 鍒涘缓鎻掑叆瑙嗛瀛楃绐�
     * @param url 瑙嗛鍦板潃
     * @param width 瑙嗛瀹藉害
     * @param height 瑙嗛楂樺害
     * @param align 瑙嗛瀵归綈
     * @param toEmbed 鏄惁浠lash浠ｆ浛鏄剧ず
     * @param addParagraph  鏄惁闇€瑕佹坊鍔燩 鏍囩
     */
    function creatInsertStr(url,width,height,id,align,classname,type){

      url = utils.unhtmlForUrl(url);
      align = utils.unhtml(align);
      classname = utils.unhtml(classname);

      width = parseInt(width, 10) || 0;
      height = parseInt(height, 10) || 0;

      var str;
      switch (type){
        case 'image':
          str = '<img ' + (id ? 'id="' + id+'"' : '') + ' width="'+ width +'" height="' + height + '" _url="'+url+'" class="' + classname.replace(/\bvideo-js\b/, '') + '"'  +
            ' src="' + me.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+me.options.UEDITOR_HOME_URL+'themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;'+(align ? 'float:' + align + ';': '')+'" />'
          break;
        case 'embed':
          str = '<embed type="application/x-shockwave-flash" class="' + classname + '" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
            ' src="' +  utils.html(url) + '" width="' + width  + '" height="' + height  + '"'  + (align ? ' style="float:' + align + '"': '') +
            ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
          break;
        case 'video':
          var ext = url.substr(url.lastIndexOf('.') + 1);
          if(ext == 'ogv') ext = 'ogg';
          str = '<video' + (id ? ' id="' + id + '"' : '') + ' class="' + classname + ' video-js" ' + (align ? ' style="float:' + align + '"': '') +
            ' controls preload="none" width="' + width + '" height="' + height + '" src="' + url + '" data-setup="{}">' +
            '<source src="' + url + '" type="video/' + ext + '" /></video>';
          break;
      }
      return str;
    }

    function switchImgAndVideo(root,img2video){
      utils.each(root.getNodesByTagName(img2video ? 'img' : 'embed video'),function(node){
        var className = node.getAttr('class');
        if(className && className.indexOf('edui-faked-video') != -1){
          var html = creatInsertStr( img2video ? node.getAttr('_url') : node.getAttr('src'),node.getAttr('width'),node.getAttr('height'),null,node.getStyle('float') || '',className,img2video ? 'embed':'image');
          node.parentNode.replaceChild(UE.uNode.createElement(html),node);
        }
        if(className && className.indexOf('edui-upload-video') != -1){
          var html = creatInsertStr( img2video ? node.getAttr('_url') : node.getAttr('src'),node.getAttr('width'),node.getAttr('height'),null,node.getStyle('float') || '',className,img2video ? 'video':'image');
          node.parentNode.replaceChild(UE.uNode.createElement(html),node);
        }
      })
    }

    me.addOutputRule(function(root){
      switchImgAndVideo(root,true)
    });
    me.addInputRule(function(root){
      switchImgAndVideo(root)
    });

    /**
     * 鎻掑叆瑙嗛
     * @command insertvideo
     * @method execCommand
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @param { Object } videoAttr 閿€煎瀵硅薄锛� 鎻忚堪涓€涓棰戠殑鎵€鏈夊睘鎬�
     * @example
     * ```javascript
     *
     * var videoAttr = {
     *      //瑙嗛鍦板潃
     *      url: 'http://www.youku.com/xxx',
     *      //瑙嗛瀹介珮鍊硷紝 鍗曚綅px
     *      width: 200,
     *      height: 100
     * };
     *
     * //editor 鏄紪杈戝櫒瀹炰緥
     * //鍚戠紪杈戝櫒鎻掑叆鍗曚釜瑙嗛
     * editor.execCommand( 'insertvideo', videoAttr );
     * ```
     */

    /**
     * 鎻掑叆瑙嗛
     * @command insertvideo
     * @method execCommand
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @param { Array } videoArr 闇€瑕佹彃鍏ョ殑瑙嗛鐨勬暟缁勶紝 鍏朵腑鐨勬瘡涓€涓厓绱犻兘鏄竴涓敭鍊煎瀵硅薄锛� 鎻忚堪浜嗕竴涓棰戠殑鎵€鏈夊睘鎬�
     * @example
     * ```javascript
     *
     * var videoAttr1 = {
     *      //瑙嗛鍦板潃
     *      url: 'http://www.youku.com/xxx',
     *      //瑙嗛瀹介珮鍊硷紝 鍗曚綅px
     *      width: 200,
     *      height: 100
     * },
     * videoAttr2 = {
     *      //瑙嗛鍦板潃
     *      url: 'http://www.youku.com/xxx',
     *      //瑙嗛瀹介珮鍊硷紝 鍗曚綅px
     *      width: 200,
     *      height: 100
     * }
     *
     * //editor 鏄紪杈戝櫒瀹炰緥
     * //璇ユ柟娉曞皢浼氬悜缂栬緫鍣ㄥ唴鎻掑叆涓や釜瑙嗛
     * editor.execCommand( 'insertvideo', [ videoAttr1, videoAttr2 ] );
     * ```
     */

    /**
     * 鏌ヨ褰撳墠鍏夋爣鎵€鍦ㄥ鏄惁鏄竴涓棰�
     * @command insertvideo
     * @method queryCommandState
     * @param { String } cmd 闇€瑕佹煡璇㈢殑鍛戒护瀛楃涓�
     * @return { int } 濡傛灉褰撳墠鍏夋爣鎵€鍦ㄥ鐨勫厓绱犳槸涓€涓棰戝璞★紝 鍒欒繑鍥�1锛屽惁鍒欒繑鍥�0
     * @example
     * ```javascript
     *
     * //editor 鏄紪杈戝櫒瀹炰緥
     * editor.queryCommandState( 'insertvideo' );
     * ```
     */
    me.commands["insertvideo"] = {
      execCommand: function (cmd, videoObjs, type){
        videoObjs = utils.isArray(videoObjs)?videoObjs:[videoObjs];
        var html = [],id = 'tmpVedio', cl;
        for(var i=0,vi,len = videoObjs.length;i<len;i++){
          vi = videoObjs[i];
          cl = (type == 'upload' ? 'edui-upload-video video-js vjs-default-skin':'edui-faked-video');
          html.push(creatInsertStr( vi.url, vi.width || 420,  vi.height || 280, id + i, null, cl, 'image'));
        }
        me.execCommand("inserthtml",html.join(""),true);
        var rng = this.selection.getRange();
        for(var i= 0,len=videoObjs.length;i<len;i++){
          var img = this.document.getElementById('tmpVedio'+i);
          domUtils.removeAttributes(img,'id');
          rng.selectNode(img).select();
          me.execCommand('imagefloat',videoObjs[i].align)
        }
      },
      queryCommandState : function(){
        var img = me.selection.getRange().getClosedNode(),
          flag = img && (img.className == "edui-faked-video" || img.className.indexOf("edui-upload-video")!=-1);
        return flag ? 1 : 0;
      }
    };
  };


// plugins/table.core.js
  /**
   * Created with JetBrains WebStorm.
   * User: taoqili
   * Date: 13-1-18
   * Time: 涓婂崍11:09
   * To change this template use File | Settings | File Templates.
   */
  /**
   * UE琛ㄦ牸鎿嶄綔绫�
   * @param table
   * @constructor
   */
  (function () {
    var UETable = UE.UETable = function (table) {
      this.table = table;
      this.indexTable = [];
      this.selectedTds = [];
      this.cellsRange = {};
      this.update(table);
    };

    //===浠ヤ笅涓洪潤鎬佸伐鍏锋柟娉�===
    UETable.removeSelectedClass = function (cells) {
      utils.each(cells, function (cell) {
        domUtils.removeClasses(cell, "selectTdClass");
      })
    };
    UETable.addSelectedClass = function (cells) {
      utils.each(cells, function (cell) {
        domUtils.addClass(cell, "selectTdClass");
      })
    };
    UETable.isEmptyBlock = function (node) {
      var reg = new RegExp(domUtils.fillChar, 'g');
      if (node[browser.ie ? 'innerText' : 'textContent'].replace(/^\s*$/, '').replace(reg, '').length > 0) {
        return 0;
      }
      for (var i in dtd.$isNotEmpty) if (dtd.$isNotEmpty.hasOwnProperty(i)) {
        if (node.getElementsByTagName(i).length) {
          return 0;
        }
      }
      return 1;
    };
    UETable.getWidth = function (cell) {
      if (!cell)return 0;
      return parseInt(domUtils.getComputedStyle(cell, "width"), 10);
    };

    /**
     * 鑾峰彇鍗曞厓鏍兼垨鑰呭崟鍏冩牸缁勭殑鈥滃榻愨€濈姸鎬併€� 濡傛灉褰撳墠鐨勬娴嬪璞℃槸涓€涓崟鍏冩牸缁勶紝 鍙湁鍦ㄦ弧瓒虫墍鏈夊崟鍏冩牸鐨� 姘村钩鍜岀珫鐩� 瀵归綈灞炴€ч兘鐩稿悓鐨�
     * 鏉′欢鏃舵墠浼氳繑鍥炲叾鐘舵€佸€硷紝鍚﹀垯灏嗚繑鍥瀗ull锛� 濡傛灉褰撳墠鍙娴嬩簡涓€涓崟鍏冩牸锛� 鍒欑洿鎺ヨ繑鍥炲綋鍓嶅崟鍏冩牸鐨勫榻愮姸鎬侊紱
     * @param table cell or table cells , 鏀寔鍗曚釜鍗曞厓鏍糳om瀵硅薄 鎴栬€� 鍗曞厓鏍糳om瀵硅薄鏁扮粍
     * @return { align: 'left' || 'right' || 'center', valign: 'top' || 'middle' || 'bottom' } 鎴栬€� null
     */
    UETable.getTableCellAlignState = function ( cells ) {

      !utils.isArray( cells ) && ( cells = [cells] );

      var result = {},
        status = ['align', 'valign'],
        tempStatus = null,
        isSame = true;//鐘舵€佹槸鍚︾浉鍚�

      utils.each( cells, function( cellNode ){

        utils.each( status, function( currentState ){

          tempStatus = cellNode.getAttribute( currentState );

          if( !result[ currentState ] && tempStatus ) {
            result[ currentState ] = tempStatus;
          } else if( !result[ currentState ] || ( tempStatus !== result[ currentState ] ) ) {
            isSame = false;
            return false;
          }

        } );

        return isSame;

      });

      return isSame ? result : null;

    };

    /**
     * 鏍规嵁褰撳墠閫夊尯鑾峰彇鐩稿叧鐨則able淇℃伅
     * @return {Object}
     */
    UETable.getTableItemsByRange = function (editor) {
      var start = editor.selection.getStart();

      //ff涓嬩細閫変腑bookmark
      if( start && start.id && start.id.indexOf('_baidu_bookmark_start_') === 0 && start.nextSibling) {
        start = start.nextSibling;
      }

      //鍦╰able鎴栬€卼d杈圭紭鏈夊彲鑳藉瓨鍦ㄩ€変腑tr鐨勬儏鍐�
      var cell = start && domUtils.findParentByTagName(start, ["td", "th"], true),
        tr = cell && cell.parentNode,
        caption = start && domUtils.findParentByTagName(start, 'caption', true),
        table = caption ? caption.parentNode : tr && tr.parentNode.parentNode;

      return {
        cell:cell,
        tr:tr,
        table:table,
        caption:caption
      }
    };
    UETable.getUETableBySelected = function (editor) {
      var table = UETable.getTableItemsByRange(editor).table;
      if (table && table.ueTable && table.ueTable.selectedTds.length) {
        return table.ueTable;
      }
      return null;
    };

    UETable.getDefaultValue = function (editor, table) {
      var borderMap = {
          thin:'0px',
          medium:'1px',
          thick:'2px'
        },
        tableBorder, tdPadding, tdBorder, tmpValue;
      if (!table) {
        table = editor.document.createElement('table');
        table.insertRow(0).insertCell(0).innerHTML = 'xxx';
        editor.body.appendChild(table);
        var td = table.getElementsByTagName('td')[0];
        tmpValue = domUtils.getComputedStyle(table, 'border-left-width');
        tableBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
        tmpValue = domUtils.getComputedStyle(td, 'padding-left');
        tdPadding = parseInt(borderMap[tmpValue] || tmpValue, 10);
        tmpValue = domUtils.getComputedStyle(td, 'border-left-width');
        tdBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
        domUtils.remove(table);
        return {
          tableBorder:tableBorder,
          tdPadding:tdPadding,
          tdBorder:tdBorder
        };
      } else {
        td = table.getElementsByTagName('td')[0];
        tmpValue = domUtils.getComputedStyle(table, 'border-left-width');
        tableBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
        tmpValue = domUtils.getComputedStyle(td, 'padding-left');
        tdPadding = parseInt(borderMap[tmpValue] || tmpValue, 10);
        tmpValue = domUtils.getComputedStyle(td, 'border-left-width');
        tdBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
        return {
          tableBorder:tableBorder,
          tdPadding:tdPadding,
          tdBorder:tdBorder
        };
      }
    };
    /**
     * 鏍规嵁褰撳墠鐐瑰嚮鐨則d鎴栬€卼able鑾峰彇绱㈠紩瀵硅薄
     * @param tdOrTable
     */
    UETable.getUETable = function (tdOrTable) {
      var tag = tdOrTable.tagName.toLowerCase();
      tdOrTable = (tag == "td" || tag == "th" || tag == 'caption') ? domUtils.findParentByTagName(tdOrTable, "table", true) : tdOrTable;
      if (!tdOrTable.ueTable) {
        tdOrTable.ueTable = new UETable(tdOrTable);
      }
      return tdOrTable.ueTable;
    };

    UETable.cloneCell = function(cell,ignoreMerge,keepPro){
      if (!cell || utils.isString(cell)) {
        return this.table.ownerDocument.createElement(cell || 'td');
      }
      var flag = domUtils.hasClass(cell, "selectTdClass");
      flag && domUtils.removeClasses(cell, "selectTdClass");
      var tmpCell = cell.cloneNode(true);
      if (ignoreMerge) {
        tmpCell.rowSpan = tmpCell.colSpan = 1;
      }
      //鍘绘帀瀹介珮
      !keepPro && domUtils.removeAttributes(tmpCell,'width height');
      !keepPro && domUtils.removeAttributes(tmpCell,'style');

      tmpCell.style.borderLeftStyle = "";
      tmpCell.style.borderTopStyle = "";
      tmpCell.style.borderLeftColor = cell.style.borderRightColor;
      tmpCell.style.borderLeftWidth = cell.style.borderRightWidth;
      tmpCell.style.borderTopColor = cell.style.borderBottomColor;
      tmpCell.style.borderTopWidth = cell.style.borderBottomWidth;
      flag && domUtils.addClass(cell, "selectTdClass");
      return tmpCell;
    }

    UETable.prototype = {
      getMaxRows:function () {
        var rows = this.table.rows, maxLen = 1;
        for (var i = 0, row; row = rows[i]; i++) {
          var currentMax = 1;
          for (var j = 0, cj; cj = row.cells[j++];) {
            currentMax = Math.max(cj.rowSpan || 1, currentMax);
          }
          maxLen = Math.max(currentMax + i, maxLen);
        }
        return maxLen;
      },
      /**
       * 鑾峰彇褰撳墠琛ㄦ牸鐨勬渶澶у垪鏁�
       */
      getMaxCols:function () {
        var rows = this.table.rows, maxLen = 0, cellRows = {};
        for (var i = 0, row; row = rows[i]; i++) {
          var cellsNum = 0;
          for (var j = 0, cj; cj = row.cells[j++];) {
            cellsNum += (cj.colSpan || 1);
            if (cj.rowSpan && cj.rowSpan > 1) {
              for (var k = 1; k < cj.rowSpan; k++) {
                if (!cellRows['row_' + (i + k)]) {
                  cellRows['row_' + (i + k)] = (cj.colSpan || 1);
                } else {
                  cellRows['row_' + (i + k)]++
                }
              }

            }
          }
          cellsNum += cellRows['row_' + i] || 0;
          maxLen = Math.max(cellsNum, maxLen);
        }
        return maxLen;
      },
      getCellColIndex:function (cell) {

      },
      /**
       * 鑾峰彇褰撳墠cell鏃佽竟鐨勫崟鍏冩牸锛�
       * @param cell
       * @param right
       */
      getHSideCell:function (cell, right) {
        try {
          var cellInfo = this.getCellInfo(cell),
            previewRowIndex, previewColIndex;
          var len = this.selectedTds.length,
            range = this.cellsRange;
          //棣栬鎴栬€呴鍒楁病鏈夊墠缃崟鍏冩牸
          if ((!right && (!len ? !cellInfo.colIndex : !range.beginColIndex)) || (right && (!len ? (cellInfo.colIndex == (this.colsNum - 1)) : (range.endColIndex == this.colsNum - 1)))) return null;

          previewRowIndex = !len ? cellInfo.rowIndex : range.beginRowIndex;
          previewColIndex = !right ? ( !len ? (cellInfo.colIndex < 1 ? 0 : (cellInfo.colIndex - 1)) : range.beginColIndex - 1)
            : ( !len ? cellInfo.colIndex + 1 : range.endColIndex + 1);
          return this.getCell(this.indexTable[previewRowIndex][previewColIndex].rowIndex, this.indexTable[previewRowIndex][previewColIndex].cellIndex);
        } catch (e) {
          showError(e);
        }
      },
      getTabNextCell:function (cell, preRowIndex) {
        var cellInfo = this.getCellInfo(cell),
          rowIndex = preRowIndex || cellInfo.rowIndex,
          colIndex = cellInfo.colIndex + 1 + (cellInfo.colSpan - 1),
          nextCell;
        try {
          nextCell = this.getCell(this.indexTable[rowIndex][colIndex].rowIndex, this.indexTable[rowIndex][colIndex].cellIndex);
        } catch (e) {
          try {
            rowIndex = rowIndex * 1 + 1;
            colIndex = 0;
            nextCell = this.getCell(this.indexTable[rowIndex][colIndex].rowIndex, this.indexTable[rowIndex][colIndex].cellIndex);
          } catch (e) {
          }
        }
        return nextCell;

      },
      /**
       * 鑾峰彇瑙嗚涓婄殑鍚庣疆鍗曞厓鏍�
       * @param cell
       * @param bottom
       */
      getVSideCell:function (cell, bottom, ignoreRange) {
        try {
          var cellInfo = this.getCellInfo(cell),
            nextRowIndex, nextColIndex;
          var len = this.selectedTds.length && !ignoreRange,
            range = this.cellsRange;
          //鏈鎴栬€呮湯鍒楁病鏈夊悗缃崟鍏冩牸
          if ((!bottom && (cellInfo.rowIndex == 0)) || (bottom && (!len ? (cellInfo.rowIndex + cellInfo.rowSpan > this.rowsNum - 1) : (range.endRowIndex == this.rowsNum - 1)))) return null;

          nextRowIndex = !bottom ? ( !len ? cellInfo.rowIndex - 1 : range.beginRowIndex - 1)
            : ( !len ? (cellInfo.rowIndex + cellInfo.rowSpan) : range.endRowIndex + 1);
          nextColIndex = !len ? cellInfo.colIndex : range.beginColIndex;
          return this.getCell(this.indexTable[nextRowIndex][nextColIndex].rowIndex, this.indexTable[nextRowIndex][nextColIndex].cellIndex);
        } catch (e) {
          showError(e);
        }
      },
      /**
       * 鑾峰彇鐩稿悓缁撴潫浣嶇疆鐨勫崟鍏冩牸锛寈OrY鎸囦唬浜嗘槸鑾峰彇x杞寸浉鍚岃繕鏄痽杞寸浉鍚�
       */
      getSameEndPosCells:function (cell, xOrY) {
        try {
          var flag = (xOrY.toLowerCase() === "x"),
            end = domUtils.getXY(cell)[flag ? 'x' : 'y'] + cell["offset" + (flag ? 'Width' : 'Height')],
            rows = this.table.rows,
            cells = null, returns = [];
          for (var i = 0; i < this.rowsNum; i++) {
            cells = rows[i].cells;
            for (var j = 0, tmpCell; tmpCell = cells[j++];) {
              var tmpEnd = domUtils.getXY(tmpCell)[flag ? 'x' : 'y'] + tmpCell["offset" + (flag ? 'Width' : 'Height')];
              //瀵瑰簲琛岀殑td宸茬粡琚笂闈㈣rowSpan浜�
              if (tmpEnd > end && flag) break;
              if (cell == tmpCell || end == tmpEnd) {
                //鍙幏鍙栧崟涓€鐨勫崟鍏冩牸
                //todo 浠呰幏鍙栧崟涓€鍗曞厓鏍煎湪鐗瑰畾鎯呭喌涓嬩細閫犳垚returns涓虹┖锛屼粠鑰屽奖鍝嶅悗缁殑鎷栨嫿瀹炵幇锛屼慨姝ｈ繖涓€傞渶鑰冭檻鎬ц兘
                if (tmpCell[flag ? "colSpan" : "rowSpan"] == 1) {
                  returns.push(tmpCell);
                }
                if (flag) break;
              }
            }
          }
          return returns;
        } catch (e) {
          showError(e);
        }
      },
      setCellContent:function (cell, content) {
        cell.innerHTML = content || (browser.ie ? domUtils.fillChar : "<br />");
      },
      cloneCell:UETable.cloneCell,
      /**
       * 鑾峰彇璺熷綋鍓嶅崟鍏冩牸鐨勫彸杈圭珫绾夸负宸﹁竟鐨勬墍鏈夋湭鍚堝苟鍗曞厓鏍�
       */
      getSameStartPosXCells:function (cell) {
        try {
          var start = domUtils.getXY(cell).x + cell.offsetWidth,
            rows = this.table.rows, cells , returns = [];
          for (var i = 0; i < this.rowsNum; i++) {
            cells = rows[i].cells;
            for (var j = 0, tmpCell; tmpCell = cells[j++];) {
              var tmpStart = domUtils.getXY(tmpCell).x;
              if (tmpStart > start) break;
              if (tmpStart == start && tmpCell.colSpan == 1) {
                returns.push(tmpCell);
                break;
              }
            }
          }
          return returns;
        } catch (e) {
          showError(e);
        }
      },
      /**
       * 鏇存柊table瀵瑰簲鐨勭储寮曡〃
       */
      update:function (table) {
        this.table = table || this.table;
        this.selectedTds = [];
        this.cellsRange = {};
        this.indexTable = [];
        var rows = this.table.rows,
          rowsNum = this.getMaxRows(),
          dNum = rowsNum - rows.length,
          colsNum = this.getMaxCols();
        while (dNum--) {
          this.table.insertRow(rows.length);
        }
        this.rowsNum = rowsNum;
        this.colsNum = colsNum;
        for (var i = 0, len = rows.length; i < len; i++) {
          this.indexTable[i] = new Array(colsNum);
        }
        //濉厖绱㈠紩琛�
        for (var rowIndex = 0, row; row = rows[rowIndex]; rowIndex++) {
          for (var cellIndex = 0, cell, cells = row.cells; cell = cells[cellIndex]; cellIndex++) {
            //淇鏁磋琚玶owSpan鏃跺鑷寸殑琛屾暟璁＄畻閿欒
            if (cell.rowSpan > rowsNum) {
              cell.rowSpan = rowsNum;
            }
            var colIndex = cellIndex,
              rowSpan = cell.rowSpan || 1,
              colSpan = cell.colSpan || 1;
            //褰撳凡缁忚涓婁竴琛宺owSpan鎴栬€呰鍓嶄竴鍒梒olSpan浜嗭紝鍒欒烦鍒颁笅涓€涓崟鍏冩牸杩涜
            while (this.indexTable[rowIndex][colIndex]) colIndex++;
            for (var j = 0; j < rowSpan; j++) {
              for (var k = 0; k < colSpan; k++) {
                this.indexTable[rowIndex + j][colIndex + k] = {
                  rowIndex:rowIndex,
                  cellIndex:cellIndex,
                  colIndex:colIndex,
                  rowSpan:rowSpan,
                  colSpan:colSpan
                }
              }
            }
          }
        }
        //淇娈嬬己td
        for (j = 0; j < rowsNum; j++) {
          for (k = 0; k < colsNum; k++) {
            if (this.indexTable[j][k] === undefined) {
              row = rows[j];
              cell = row.cells[row.cells.length - 1];
              cell = cell ? cell.cloneNode(true) : this.table.ownerDocument.createElement("td");
              this.setCellContent(cell);
              if (cell.colSpan !== 1)cell.colSpan = 1;
              if (cell.rowSpan !== 1)cell.rowSpan = 1;
              row.appendChild(cell);
              this.indexTable[j][k] = {
                rowIndex:j,
                cellIndex:cell.cellIndex,
                colIndex:k,
                rowSpan:1,
                colSpan:1
              }
            }
          }
        }
        //褰撴閫夊悗鍒犻櫎琛屾垨鑰呭垪鍚庢挙閿€锛岄渶瑕侀噸寤洪€夊尯銆�
        var tds = domUtils.getElementsByTagName(this.table, "td"),
          selectTds = [];
        utils.each(tds, function (td) {
          if (domUtils.hasClass(td, "selectTdClass")) {
            selectTds.push(td);
          }
        });
        if (selectTds.length) {
          var start = selectTds[0],
            end = selectTds[selectTds.length - 1],
            startInfo = this.getCellInfo(start),
            endInfo = this.getCellInfo(end);
          this.selectedTds = selectTds;
          this.cellsRange = {
            beginRowIndex:startInfo.rowIndex,
            beginColIndex:startInfo.colIndex,
            endRowIndex:endInfo.rowIndex + endInfo.rowSpan - 1,
            endColIndex:endInfo.colIndex + endInfo.colSpan - 1
          };
        }
        //缁欑涓€琛岃缃甪irstRow鐨勬牱寮忓悕绉�,鍦ㄦ帓搴忓浘鏍囩殑鏍峰紡涓婁娇鐢ㄥ埌
        if(!domUtils.hasClass(this.table.rows[0], "firstRow")) {
          domUtils.addClass(this.table.rows[0], "firstRow");
          for(var i = 1; i< this.table.rows.length; i++) {
            domUtils.removeClasses(this.table.rows[i], "firstRow");
          }
        }
      },
      /**
       * 鑾峰彇鍗曞厓鏍肩殑绱㈠紩淇℃伅
       */
      getCellInfo:function (cell) {
        if (!cell) return;
        var cellIndex = cell.cellIndex,
          rowIndex = cell.parentNode.rowIndex,
          rowInfo = this.indexTable[rowIndex],
          numCols = this.colsNum;
        for (var colIndex = cellIndex; colIndex < numCols; colIndex++) {
          var cellInfo = rowInfo[colIndex];
          if (cellInfo.rowIndex === rowIndex && cellInfo.cellIndex === cellIndex) {
            return cellInfo;
          }
        }
      },
      /**
       * 鏍规嵁琛屽垪鍙疯幏鍙栧崟鍏冩牸
       */
      getCell:function (rowIndex, cellIndex) {
        return rowIndex < this.rowsNum && this.table.rows[rowIndex].cells[cellIndex] || null;
      },
      /**
       * 鍒犻櫎鍗曞厓鏍�
       */
      deleteCell:function (cell, rowIndex) {
        rowIndex = typeof rowIndex == 'number' ? rowIndex : cell.parentNode.rowIndex;
        var row = this.table.rows[rowIndex];
        row.deleteCell(cell.cellIndex);
      },
      /**
       * 鏍规嵁濮嬫湯涓や釜鍗曞厓鏍艰幏鍙栬妗嗛€夌殑鎵€鏈夊崟鍏冩牸鑼冨洿
       */
      getCellsRange:function (cellA, cellB) {
        function checkRange(beginRowIndex, beginColIndex, endRowIndex, endColIndex) {
          var tmpBeginRowIndex = beginRowIndex,
            tmpBeginColIndex = beginColIndex,
            tmpEndRowIndex = endRowIndex,
            tmpEndColIndex = endColIndex,
            cellInfo, colIndex, rowIndex;
          // 閫氳繃indexTable妫€鏌ユ槸鍚﹀瓨鍦ㄨ秴鍑篢ableRange涓婅竟鐣岀殑鎯呭喌
          if (beginRowIndex > 0) {
            for (colIndex = beginColIndex; colIndex < endColIndex; colIndex++) {
              cellInfo = me.indexTable[beginRowIndex][colIndex];
              rowIndex = cellInfo.rowIndex;
              if (rowIndex < beginRowIndex) {
                tmpBeginRowIndex = Math.min(rowIndex, tmpBeginRowIndex);
              }
            }
          }
          // 閫氳繃indexTable妫€鏌ユ槸鍚﹀瓨鍦ㄨ秴鍑篢ableRange鍙宠竟鐣岀殑鎯呭喌
          if (endColIndex < me.colsNum) {
            for (rowIndex = beginRowIndex; rowIndex < endRowIndex; rowIndex++) {
              cellInfo = me.indexTable[rowIndex][endColIndex];
              colIndex = cellInfo.colIndex + cellInfo.colSpan - 1;
              if (colIndex > endColIndex) {
                tmpEndColIndex = Math.max(colIndex, tmpEndColIndex);
              }
            }
          }
          // 妫€鏌ユ槸鍚︽湁瓒呭嚭TableRange涓嬭竟鐣岀殑鎯呭喌
          if (endRowIndex < me.rowsNum) {
            for (colIndex = beginColIndex; colIndex < endColIndex; colIndex++) {
              cellInfo = me.indexTable[endRowIndex][colIndex];
              rowIndex = cellInfo.rowIndex + cellInfo.rowSpan - 1;
              if (rowIndex > endRowIndex) {
                tmpEndRowIndex = Math.max(rowIndex, tmpEndRowIndex);
              }
            }
          }
          // 妫€鏌ユ槸鍚︽湁瓒呭嚭TableRange宸﹁竟鐣岀殑鎯呭喌
          if (beginColIndex > 0) {
            for (rowIndex = beginRowIndex; rowIndex < endRowIndex; rowIndex++) {
              cellInfo = me.indexTable[rowIndex][beginColIndex];
              colIndex = cellInfo.colIndex;
              if (colIndex < beginColIndex) {
                tmpBeginColIndex = Math.min(cellInfo.colIndex, tmpBeginColIndex);
              }
            }
          }
          //閫掑綊璋冪敤鐩磋嚦鎵€鏈夊畬鎴愭墍鏈夋閫夊崟鍏冩牸鐨勬墿灞�
          if (tmpBeginRowIndex != beginRowIndex || tmpBeginColIndex != beginColIndex || tmpEndRowIndex != endRowIndex || tmpEndColIndex != endColIndex) {
            return checkRange(tmpBeginRowIndex, tmpBeginColIndex, tmpEndRowIndex, tmpEndColIndex);
          } else {
            // 涓嶉渶瑕佹墿灞昑ableRange鐨勬儏鍐�
            return {
              beginRowIndex:beginRowIndex,
              beginColIndex:beginColIndex,
              endRowIndex:endRowIndex,
              endColIndex:endColIndex
            };
          }
        }

        try {
          var me = this,
            cellAInfo = me.getCellInfo(cellA);
          if (cellA === cellB) {
            return {
              beginRowIndex:cellAInfo.rowIndex,
              beginColIndex:cellAInfo.colIndex,
              endRowIndex:cellAInfo.rowIndex + cellAInfo.rowSpan - 1,
              endColIndex:cellAInfo.colIndex + cellAInfo.colSpan - 1
            };
          }
          var cellBInfo = me.getCellInfo(cellB);
          // 璁＄畻TableRange鐨勫洓涓竟
          var beginRowIndex = Math.min(cellAInfo.rowIndex, cellBInfo.rowIndex),
            beginColIndex = Math.min(cellAInfo.colIndex, cellBInfo.colIndex),
            endRowIndex = Math.max(cellAInfo.rowIndex + cellAInfo.rowSpan - 1, cellBInfo.rowIndex + cellBInfo.rowSpan - 1),
            endColIndex = Math.max(cellAInfo.colIndex + cellAInfo.colSpan - 1, cellBInfo.colIndex + cellBInfo.colSpan - 1);

          return checkRange(beginRowIndex, beginColIndex, endRowIndex, endColIndex);
        } catch (e) {
          //throw e;
        }
      },
      /**
       * 渚濇嵁cellsRange鑾峰彇瀵瑰簲鐨勫崟鍏冩牸闆嗗悎
       */
      getCells:function (range) {
        //姣忔鑾峰彇cells涔嬪墠蹇呴』鍏堟竻闄や笂娆＄殑閫夋嫨锛屽惁鍒欎細瀵瑰悗缁幏鍙栨搷浣滈€犳垚褰卞搷
        this.clearSelected();
        var beginRowIndex = range.beginRowIndex,
          beginColIndex = range.beginColIndex,
          endRowIndex = range.endRowIndex,
          endColIndex = range.endColIndex,
          cellInfo, rowIndex, colIndex, tdHash = {}, returnTds = [];
        for (var i = beginRowIndex; i <= endRowIndex; i++) {
          for (var j = beginColIndex; j <= endColIndex; j++) {
            cellInfo = this.indexTable[i][j];
            rowIndex = cellInfo.rowIndex;
            colIndex = cellInfo.colIndex;
            // 濡傛灉Cells閲屽凡缁忓寘鍚簡姝ell鍒欒烦杩�
            var key = rowIndex + '|' + colIndex;
            if (tdHash[key]) continue;
            tdHash[key] = 1;
            if (rowIndex < i || colIndex < j || rowIndex + cellInfo.rowSpan - 1 > endRowIndex || colIndex + cellInfo.colSpan - 1 > endColIndex) {
              return null;
            }
            returnTds.push(this.getCell(rowIndex, cellInfo.cellIndex));
          }
        }
        return returnTds;
      },
      /**
       * 娓呯悊宸茬粡閫変腑鐨勫崟鍏冩牸
       */
      clearSelected:function () {
        UETable.removeSelectedClass(this.selectedTds);
        this.selectedTds = [];
        this.cellsRange = {};
      },
      /**
       * 鏍规嵁range璁剧疆宸茬粡閫変腑鐨勫崟鍏冩牸
       */
      setSelected:function (range) {
        var cells = this.getCells(range);
        UETable.addSelectedClass(cells);
        this.selectedTds = cells;
        this.cellsRange = range;
      },
      isFullRow:function () {
        var range = this.cellsRange;
        return (range.endColIndex - range.beginColIndex + 1) == this.colsNum;
      },
      isFullCol:function () {
        var range = this.cellsRange,
          table = this.table,
          ths = table.getElementsByTagName("th"),
          rows = range.endRowIndex - range.beginRowIndex + 1;
        return  !ths.length ? rows == this.rowsNum : rows == this.rowsNum || (rows == this.rowsNum - 1);

      },
      /**
       * 鑾峰彇瑙嗚涓婄殑鍓嶇疆鍗曞厓鏍硷紝榛樿鏄乏杈癸紝top浼犲叆鏃�
       * @param cell
       * @param top
       */
      getNextCell:function (cell, bottom, ignoreRange) {
        try {
          var cellInfo = this.getCellInfo(cell),
            nextRowIndex, nextColIndex;
          var len = this.selectedTds.length && !ignoreRange,
            range = this.cellsRange;
          //鏈鎴栬€呮湯鍒楁病鏈夊悗缃崟鍏冩牸
          if ((!bottom && (cellInfo.rowIndex == 0)) || (bottom && (!len ? (cellInfo.rowIndex + cellInfo.rowSpan > this.rowsNum - 1) : (range.endRowIndex == this.rowsNum - 1)))) return null;

          nextRowIndex = !bottom ? ( !len ? cellInfo.rowIndex - 1 : range.beginRowIndex - 1)
            : ( !len ? (cellInfo.rowIndex + cellInfo.rowSpan) : range.endRowIndex + 1);
          nextColIndex = !len ? cellInfo.colIndex : range.beginColIndex;
          return this.getCell(this.indexTable[nextRowIndex][nextColIndex].rowIndex, this.indexTable[nextRowIndex][nextColIndex].cellIndex);
        } catch (e) {
          showError(e);
        }
      },
      getPreviewCell:function (cell, top) {
        try {
          var cellInfo = this.getCellInfo(cell),
            previewRowIndex, previewColIndex;
          var len = this.selectedTds.length,
            range = this.cellsRange;
          //棣栬鎴栬€呴鍒楁病鏈夊墠缃崟鍏冩牸
          if ((!top && (!len ? !cellInfo.colIndex : !range.beginColIndex)) || (top && (!len ? (cellInfo.rowIndex > (this.colsNum - 1)) : (range.endColIndex == this.colsNum - 1)))) return null;

          previewRowIndex = !top ? ( !len ? cellInfo.rowIndex : range.beginRowIndex )
            : ( !len ? (cellInfo.rowIndex < 1 ? 0 : (cellInfo.rowIndex - 1)) : range.beginRowIndex);
          previewColIndex = !top ? ( !len ? (cellInfo.colIndex < 1 ? 0 : (cellInfo.colIndex - 1)) : range.beginColIndex - 1)
            : ( !len ? cellInfo.colIndex : range.endColIndex + 1);
          return this.getCell(this.indexTable[previewRowIndex][previewColIndex].rowIndex, this.indexTable[previewRowIndex][previewColIndex].cellIndex);
        } catch (e) {
          showError(e);
        }
      },
      /**
       * 绉诲姩鍗曞厓鏍间腑鐨勫唴瀹�
       */
      moveContent:function (cellTo, cellFrom) {
        if (UETable.isEmptyBlock(cellFrom)) return;
        if (UETable.isEmptyBlock(cellTo)) {
          cellTo.innerHTML = cellFrom.innerHTML;
          return;
        }
        var child = cellTo.lastChild;
        if (child.nodeType == 3 || !dtd.$block[child.tagName]) {
          cellTo.appendChild(cellTo.ownerDocument.createElement('br'))
        }
        while (child = cellFrom.firstChild) {
          cellTo.appendChild(child);
        }
      },
      /**
       * 鍚戝彸鍚堝苟鍗曞厓鏍�
       */
      mergeRight:function (cell) {
        var cellInfo = this.getCellInfo(cell),
          rightColIndex = cellInfo.colIndex + cellInfo.colSpan,
          rightCellInfo = this.indexTable[cellInfo.rowIndex][rightColIndex],
          rightCell = this.getCell(rightCellInfo.rowIndex, rightCellInfo.cellIndex);
        //鍚堝苟
        cell.colSpan = cellInfo.colSpan + rightCellInfo.colSpan;
        //琚悎骞剁殑鍗曞厓鏍间笉搴斿瓨鍦ㄥ搴﹀睘鎬�
        cell.removeAttribute("width");
        //绉诲姩鍐呭
        this.moveContent(cell, rightCell);
        //鍒犳帀琚悎骞剁殑Cell
        this.deleteCell(rightCell, rightCellInfo.rowIndex);
        this.update();
      },
      /**
       * 鍚戜笅鍚堝苟鍗曞厓鏍�
       */
      mergeDown:function (cell) {
        var cellInfo = this.getCellInfo(cell),
          downRowIndex = cellInfo.rowIndex + cellInfo.rowSpan,
          downCellInfo = this.indexTable[downRowIndex][cellInfo.colIndex],
          downCell = this.getCell(downCellInfo.rowIndex, downCellInfo.cellIndex);
        cell.rowSpan = cellInfo.rowSpan + downCellInfo.rowSpan;
        cell.removeAttribute("height");
        this.moveContent(cell, downCell);
        this.deleteCell(downCell, downCellInfo.rowIndex);
        this.update();
      },
      /**
       * 鍚堝苟鏁翠釜range涓殑鍐呭
       */
      mergeRange:function () {
        //鐢变簬鍚堝苟鎿嶄綔鍙互鍦ㄤ换鎰忔椂鍒昏繘琛岋紝鎵€浠ユ棤娉曢€氳繃榧犳爣浣嶇疆绛変俊鎭疄鏃剁敓鎴恟ange锛屽彧鑳介€氳繃缂撳瓨瀹炰緥涓殑cellsRange瀵硅薄鏉ヨ闂�
        var range = this.cellsRange,
          leftTopCell = this.getCell(range.beginRowIndex, this.indexTable[range.beginRowIndex][range.beginColIndex].cellIndex);

        if (leftTopCell.tagName == "TH" && range.endRowIndex !== range.beginRowIndex) {
          var index = this.indexTable,
            info = this.getCellInfo(leftTopCell);
          leftTopCell = this.getCell(1, index[1][info.colIndex].cellIndex);
          range = this.getCellsRange(leftTopCell, this.getCell(index[this.rowsNum - 1][info.colIndex].rowIndex, index[this.rowsNum - 1][info.colIndex].cellIndex));
        }

        // 鍒犻櫎鍓╀綑鐨凜ells
        var cells = this.getCells(range);
        for(var i= 0,ci;ci=cells[i++];){
          if (ci !== leftTopCell) {
            this.moveContent(leftTopCell, ci);
            this.deleteCell(ci);
          }
        }
        // 淇敼宸︿笂瑙扖ell鐨剅owSpan鍜宑olSpan锛屽苟璋冩暣瀹藉害灞炴€ц缃�
        leftTopCell.rowSpan = range.endRowIndex - range.beginRowIndex + 1;
        leftTopCell.rowSpan > 1 && leftTopCell.removeAttribute("height");
        leftTopCell.colSpan = range.endColIndex - range.beginColIndex + 1;
        leftTopCell.colSpan > 1 && leftTopCell.removeAttribute("width");
        if (leftTopCell.rowSpan == this.rowsNum && leftTopCell.colSpan != 1) {
          leftTopCell.colSpan = 1;
        }

        if (leftTopCell.colSpan == this.colsNum && leftTopCell.rowSpan != 1) {
          var rowIndex = leftTopCell.parentNode.rowIndex;
          //瑙ｅ喅IE涓嬬殑琛ㄦ牸鎿嶄綔闂
          if( this.table.deleteRow ) {
            for (var i = rowIndex+ 1, curIndex=rowIndex+ 1, len=leftTopCell.rowSpan; i < len; i++) {
              this.table.deleteRow(curIndex);
            }
          } else {
            for (var i = 0, len=leftTopCell.rowSpan - 1; i < len; i++) {
              var row = this.table.rows[rowIndex + 1];
              row.parentNode.removeChild(row);
            }
          }
          leftTopCell.rowSpan = 1;
        }
        this.update();
      },
      /**
       * 鎻掑叆涓€琛屽崟鍏冩牸
       */
      insertRow:function (rowIndex, sourceCell) {
        var numCols = this.colsNum,
          table = this.table,
          row = table.insertRow(rowIndex), cell,
          isInsertTitle = typeof sourceCell == 'string' && sourceCell.toUpperCase() == 'TH';

        function replaceTdToTh(colIndex, cell, tableRow) {
          if (colIndex == 0) {
            var tr = tableRow.nextSibling || tableRow.previousSibling,
              th = tr.cells[colIndex];
            if (th.tagName == 'TH') {
              th = cell.ownerDocument.createElement("th");
              th.appendChild(cell.firstChild);
              tableRow.insertBefore(th, cell);
              domUtils.remove(cell)
            }
          }else{
            if (cell.tagName == 'TH') {
              var td = cell.ownerDocument.createElement("td");
              td.appendChild(cell.firstChild);
              tableRow.insertBefore(td, cell);
              domUtils.remove(cell)
            }
          }
        }

        //棣栬鐩存帴鎻掑叆,鏃犻渶鑰冭檻閮ㄥ垎鍗曞厓鏍艰rowspan鐨勬儏鍐�
        if (rowIndex == 0 || rowIndex == this.rowsNum) {
          for (var colIndex = 0; colIndex < numCols; colIndex++) {
            cell = this.cloneCell(sourceCell, true);
            this.setCellContent(cell);
            cell.getAttribute('vAlign') && cell.setAttribute('vAlign', cell.getAttribute('vAlign'));
            row.appendChild(cell);
            if(!isInsertTitle) replaceTdToTh(colIndex, cell, row);
          }
        } else {
          var infoRow = this.indexTable[rowIndex],
            cellIndex = 0;
          for (colIndex = 0; colIndex < numCols; colIndex++) {
            var cellInfo = infoRow[colIndex];
            //濡傛灉瀛樺湪鏌愪釜鍗曞厓鏍肩殑rowspan绌胯繃寰呮彃鍏ヨ鐨勪綅缃紝鍒欎慨鏀硅鍗曞厓鏍肩殑rowspan鍗冲彲锛屾棤闇€鎻掑叆鍗曞厓鏍�
            if (cellInfo.rowIndex < rowIndex) {
              cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
              cell.rowSpan = cellInfo.rowSpan + 1;
            } else {
              cell = this.cloneCell(sourceCell, true);
              this.setCellContent(cell);
              row.appendChild(cell);
            }
            if(!isInsertTitle) replaceTdToTh(colIndex, cell, row);
          }
        }
        //妗嗛€夋椂鎻掑叆涓嶈Е鍙慶ontentchange锛岄渶瑕佹墜鍔ㄦ洿鏂扮储寮曘€�
        this.update();
        return row;
      },
      /**
       * 鍒犻櫎涓€琛屽崟鍏冩牸
       * @param rowIndex
       */
      deleteRow:function (rowIndex) {
        var row = this.table.rows[rowIndex],
          infoRow = this.indexTable[rowIndex],
          colsNum = this.colsNum,
          count = 0;     //澶勭悊璁℃暟
        for (var colIndex = 0; colIndex < colsNum;) {
          var cellInfo = infoRow[colIndex],
            cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
          if (cell.rowSpan > 1) {
            if (cellInfo.rowIndex == rowIndex) {
              var clone = cell.cloneNode(true);
              clone.rowSpan = cell.rowSpan - 1;
              clone.innerHTML = "";
              cell.rowSpan = 1;
              var nextRowIndex = rowIndex + 1,
                nextRow = this.table.rows[nextRowIndex],
                insertCellIndex,
                preMerged = this.getPreviewMergedCellsNum(nextRowIndex, colIndex) - count;
              if (preMerged < colIndex) {
                insertCellIndex = colIndex - preMerged - 1;
                //nextRow.insertCell(insertCellIndex);
                domUtils.insertAfter(nextRow.cells[insertCellIndex], clone);
              } else {
                if (nextRow.cells.length) nextRow.insertBefore(clone, nextRow.cells[0])
              }
              count += 1;
              //cell.parentNode.removeChild(cell);
            }
          }
          colIndex += cell.colSpan || 1;
        }
        var deleteTds = [], cacheMap = {};
        for (colIndex = 0; colIndex < colsNum; colIndex++) {
          var tmpRowIndex = infoRow[colIndex].rowIndex,
            tmpCellIndex = infoRow[colIndex].cellIndex,
            key = tmpRowIndex + "_" + tmpCellIndex;
          if (cacheMap[key])continue;
          cacheMap[key] = 1;
          cell = this.getCell(tmpRowIndex, tmpCellIndex);
          deleteTds.push(cell);
        }
        var mergeTds = [];
        utils.each(deleteTds, function (td) {
          if (td.rowSpan == 1) {
            td.parentNode.removeChild(td);
          } else {
            mergeTds.push(td);
          }
        });
        utils.each(mergeTds, function (td) {
          td.rowSpan--;
        });
        row.parentNode.removeChild(row);
        //娴忚鍣ㄦ柟娉曟湰韬瓨鍦╞ug,閲囩敤鑷畾涔夋柟娉曞垹闄�
        //this.table.deleteRow(rowIndex);
        this.update();
      },
      insertCol:function (colIndex, sourceCell, defaultValue) {
        var rowsNum = this.rowsNum,
          rowIndex = 0,
          tableRow, cell,
          backWidth = parseInt((this.table.offsetWidth - (this.colsNum + 1) * 20 - (this.colsNum + 1)) / (this.colsNum + 1), 10),
          isInsertTitleCol = typeof sourceCell == 'string' && sourceCell.toUpperCase() == 'TH';

        function replaceTdToTh(rowIndex, cell, tableRow) {
          if (rowIndex == 0) {
            var th = cell.nextSibling || cell.previousSibling;
            if (th.tagName == 'TH') {
              th = cell.ownerDocument.createElement("th");
              th.appendChild(cell.firstChild);
              tableRow.insertBefore(th, cell);
              domUtils.remove(cell)
            }
          }else{
            if (cell.tagName == 'TH') {
              var td = cell.ownerDocument.createElement("td");
              td.appendChild(cell.firstChild);
              tableRow.insertBefore(td, cell);
              domUtils.remove(cell)
            }
          }
        }

        var preCell;
        if (colIndex == 0 || colIndex == this.colsNum) {
          for (; rowIndex < rowsNum; rowIndex++) {
            tableRow = this.table.rows[rowIndex];
            preCell = tableRow.cells[colIndex == 0 ? colIndex : tableRow.cells.length];
            cell = this.cloneCell(sourceCell, true); //tableRow.insertCell(colIndex == 0 ? colIndex : tableRow.cells.length);
            this.setCellContent(cell);
            cell.setAttribute('vAlign', cell.getAttribute('vAlign'));
            preCell && cell.setAttribute('width', preCell.getAttribute('width'));
            if (!colIndex) {
              tableRow.insertBefore(cell, tableRow.cells[0]);
            } else {
              domUtils.insertAfter(tableRow.cells[tableRow.cells.length - 1], cell);
            }
            if(!isInsertTitleCol) replaceTdToTh(rowIndex, cell, tableRow)
          }
        } else {
          for (; rowIndex < rowsNum; rowIndex++) {
            var cellInfo = this.indexTable[rowIndex][colIndex];
            if (cellInfo.colIndex < colIndex) {
              cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
              cell.colSpan = cellInfo.colSpan + 1;
            } else {
              tableRow = this.table.rows[rowIndex];
              preCell = tableRow.cells[cellInfo.cellIndex];

              cell = this.cloneCell(sourceCell, true);//tableRow.insertCell(cellInfo.cellIndex);
              this.setCellContent(cell);
              cell.setAttribute('vAlign', cell.getAttribute('vAlign'));
              preCell && cell.setAttribute('width', preCell.getAttribute('width'));
              //闃叉IE涓嬫姤閿�
              preCell ? tableRow.insertBefore(cell, preCell) : tableRow.appendChild(cell);
            }
            if(!isInsertTitleCol) replaceTdToTh(rowIndex, cell, tableRow);
          }
        }
        //妗嗛€夋椂鎻掑叆涓嶈Е鍙慶ontentchange锛岄渶瑕佹墜鍔ㄦ洿鏂扮储寮�
        this.update();
        this.updateWidth(backWidth, defaultValue || {tdPadding:10, tdBorder:1});
      },
      updateWidth:function (width, defaultValue) {
        var table = this.table,
          tmpWidth = UETable.getWidth(table) - defaultValue.tdPadding * 2 - defaultValue.tdBorder + width;
        if (tmpWidth < table.ownerDocument.body.offsetWidth) {
          table.setAttribute("width", tmpWidth);
          return;
        }
        var tds = domUtils.getElementsByTagName(this.table, "td th");
        utils.each(tds, function (td) {
          td.setAttribute("width", width);
        })
      },
      deleteCol:function (colIndex) {
        var indexTable = this.indexTable,
          tableRows = this.table.rows,
          backTableWidth = this.table.getAttribute("width"),
          backTdWidth = 0,
          rowsNum = this.rowsNum,
          cacheMap = {};
        for (var rowIndex = 0; rowIndex < rowsNum;) {
          var infoRow = indexTable[rowIndex],
            cellInfo = infoRow[colIndex],
            key = cellInfo.rowIndex + '_' + cellInfo.colIndex;
          // 璺宠繃宸茬粡澶勭悊杩囩殑Cell
          if (cacheMap[key])continue;
          cacheMap[key] = 1;
          var cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
          if (!backTdWidth) backTdWidth = cell && parseInt(cell.offsetWidth / cell.colSpan, 10).toFixed(0);
          // 濡傛灉Cell鐨刢olSpan澶т簬1, 灏变慨鏀筩olSpan, 鍚﹀垯灏卞垹鎺夎繖涓狢ell
          if (cell.colSpan > 1) {
            cell.colSpan--;
          } else {
            tableRows[rowIndex].deleteCell(cellInfo.cellIndex);
          }
          rowIndex += cellInfo.rowSpan || 1;
        }
        this.table.setAttribute("width", backTableWidth - backTdWidth);
        this.update();
      },
      splitToCells:function (cell) {
        var me = this,
          cells = this.splitToRows(cell);
        utils.each(cells, function (cell) {
          me.splitToCols(cell);
        })
      },
      splitToRows:function (cell) {
        var cellInfo = this.getCellInfo(cell),
          rowIndex = cellInfo.rowIndex,
          colIndex = cellInfo.colIndex,
          results = [];
        // 淇敼Cell鐨剅owSpan
        cell.rowSpan = 1;
        results.push(cell);
        // 琛ラ綈鍗曞厓鏍�
        for (var i = rowIndex, endRow = rowIndex + cellInfo.rowSpan; i < endRow; i++) {
          if (i == rowIndex)continue;
          var tableRow = this.table.rows[i],
            tmpCell = tableRow.insertCell(colIndex - this.getPreviewMergedCellsNum(i, colIndex));
          tmpCell.colSpan = cellInfo.colSpan;
          this.setCellContent(tmpCell);
          tmpCell.setAttribute('vAlign', cell.getAttribute('vAlign'));
          tmpCell.setAttribute('align', cell.getAttribute('align'));
          if (cell.style.cssText) {
            tmpCell.style.cssText = cell.style.cssText;
          }
          results.push(tmpCell);
        }
        this.update();
        return results;
      },
      getPreviewMergedCellsNum:function (rowIndex, colIndex) {
        var indexRow = this.indexTable[rowIndex],
          num = 0;
        for (var i = 0; i < colIndex;) {
          var colSpan = indexRow[i].colSpan,
            tmpRowIndex = indexRow[i].rowIndex;
          num += (colSpan - (tmpRowIndex == rowIndex ? 1 : 0));
          i += colSpan;
        }
        return num;
      },
      splitToCols:function (cell) {
        var backWidth = (cell.offsetWidth / cell.colSpan - 22).toFixed(0),

          cellInfo = this.getCellInfo(cell),
          rowIndex = cellInfo.rowIndex,
          colIndex = cellInfo.colIndex,
          results = [];
        // 淇敼Cell鐨剅owSpan
        cell.colSpan = 1;
        cell.setAttribute("width", backWidth);
        results.push(cell);
        // 琛ラ綈鍗曞厓鏍�
        for (var j = colIndex, endCol = colIndex + cellInfo.colSpan; j < endCol; j++) {
          if (j == colIndex)continue;
          var tableRow = this.table.rows[rowIndex],
            tmpCell = tableRow.insertCell(this.indexTable[rowIndex][j].cellIndex + 1);
          tmpCell.rowSpan = cellInfo.rowSpan;
          this.setCellContent(tmpCell);
          tmpCell.setAttribute('vAlign', cell.getAttribute('vAlign'));
          tmpCell.setAttribute('align', cell.getAttribute('align'));
          tmpCell.setAttribute('width', backWidth);
          if (cell.style.cssText) {
            tmpCell.style.cssText = cell.style.cssText;
          }
          //澶勭悊th鐨勬儏鍐�
          if (cell.tagName == 'TH') {
            var th = cell.ownerDocument.createElement('th');
            th.appendChild(tmpCell.firstChild);
            th.setAttribute('vAlign', cell.getAttribute('vAlign'));
            th.rowSpan = tmpCell.rowSpan;
            tableRow.insertBefore(th, tmpCell);
            domUtils.remove(tmpCell);
          }
          results.push(tmpCell);
        }
        this.update();
        return results;
      },
      isLastCell:function (cell, rowsNum, colsNum) {
        rowsNum = rowsNum || this.rowsNum;
        colsNum = colsNum || this.colsNum;
        var cellInfo = this.getCellInfo(cell);
        return ((cellInfo.rowIndex + cellInfo.rowSpan) == rowsNum) &&
          ((cellInfo.colIndex + cellInfo.colSpan) == colsNum);
      },
      getLastCell:function (cells) {
        cells = cells || this.table.getElementsByTagName("td");
        var firstInfo = this.getCellInfo(cells[0]);
        var me = this, last = cells[0],
          tr = last.parentNode,
          cellsNum = 0, cols = 0, rows;
        utils.each(cells, function (cell) {
          if (cell.parentNode == tr)cols += cell.colSpan || 1;
          cellsNum += cell.rowSpan * cell.colSpan || 1;
        });
        rows = cellsNum / cols;
        utils.each(cells, function (cell) {
          if (me.isLastCell(cell, rows, cols)) {
            last = cell;
            return false;
          }
        });
        return last;

      },
      selectRow:function (rowIndex) {
        var indexRow = this.indexTable[rowIndex],
          start = this.getCell(indexRow[0].rowIndex, indexRow[0].cellIndex),
          end = this.getCell(indexRow[this.colsNum - 1].rowIndex, indexRow[this.colsNum - 1].cellIndex),
          range = this.getCellsRange(start, end);
        this.setSelected(range);
      },
      selectTable:function () {
        var tds = this.table.getElementsByTagName("td"),
          range = this.getCellsRange(tds[0], tds[tds.length - 1]);
        this.setSelected(range);
      },
      setBackground:function (cells, value) {
        if (typeof value === "string") {
          utils.each(cells, function (cell) {
            cell.style.backgroundColor = value;
          })
        } else if (typeof value === "object") {
          value = utils.extend({
            repeat:true,
            colorList:["#ddd", "#fff"]
          }, value);
          var rowIndex = this.getCellInfo(cells[0]).rowIndex,
            count = 0,
            colors = value.colorList,
            getColor = function (list, index, repeat) {
              return list[index] ? list[index] : repeat ? list[index % list.length] : "";
            };
          for (var i = 0, cell; cell = cells[i++];) {
            var cellInfo = this.getCellInfo(cell);
            cell.style.backgroundColor = getColor(colors, ((rowIndex + count) == cellInfo.rowIndex) ? count : ++count, value.repeat);
          }
        }
      },
      removeBackground:function (cells) {
        utils.each(cells, function (cell) {
          cell.style.backgroundColor = "";
        })
      }


    };
    function showError(e) {
    }
  })();

// plugins/table.cmds.js
  /**
   * Created with JetBrains PhpStorm.
   * User: taoqili
   * Date: 13-2-20
   * Time: 涓嬪崍6:25
   * To change this template use File | Settings | File Templates.
   */
  ;
  (function () {
    var UT = UE.UETable,
      getTableItemsByRange = function (editor) {
        return UT.getTableItemsByRange(editor);
      },
      getUETableBySelected = function (editor) {
        return UT.getUETableBySelected(editor)
      },
      getDefaultValue = function (editor, table) {
        return UT.getDefaultValue(editor, table);
      },
      getUETable = function (tdOrTable) {
        return UT.getUETable(tdOrTable);
      };


    UE.commands['inserttable'] = {
      queryCommandState: function () {
        return getTableItemsByRange(this).table ? -1 : 0;
      },
      execCommand: function (cmd, opt) {
        function createTable(opt, tdWidth) {
          var html = [],
            rowsNum = opt.numRows,
            colsNum = opt.numCols;
          for (var r = 0; r < rowsNum; r++) {
            html.push('<tr' + (r == 0 ? ' class="firstRow"':'') + '>');
            for (var c = 0; c < colsNum; c++) {
              html.push('<td width="' + tdWidth + '"  vAlign="' + opt.tdvalign + '" >' + (browser.ie && browser.version < 11 ? domUtils.fillChar : '<br/>') + '</td>')
            }
            html.push('</tr>')
          }
          //绂佹鎸囧畾table-width
          return '<table><tbody>' + html.join('') + '</tbody></table>'
        }

        if (!opt) {
          opt = utils.extend({}, {
            numCols: this.options.defaultCols,
            numRows: this.options.defaultRows,
            tdvalign: this.options.tdvalign
          })
        }
        var me = this;
        var range = this.selection.getRange(),
          start = range.startContainer,
          firstParentBlock = domUtils.findParent(start, function (node) {
              return domUtils.isBlockElm(node);
            }, true) || me.body;

        var defaultValue = getDefaultValue(me),
          tableWidth = firstParentBlock.offsetWidth,
          tdWidth = Math.floor(tableWidth / opt.numCols - defaultValue.tdPadding * 2 - defaultValue.tdBorder);

        //todo鍏朵粬灞炴€�
        !opt.tdvalign && (opt.tdvalign = me.options.tdvalign);
        me.execCommand("inserthtml", createTable(opt, tdWidth));
      }
    };

    UE.commands['insertparagraphbeforetable'] = {
      queryCommandState: function () {
        return getTableItemsByRange(this).cell ? 0 : -1;
      },
      execCommand: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          var p = this.document.createElement("p");
          p.innerHTML = browser.ie ? '&nbsp;' : '<br />';
          table.parentNode.insertBefore(p, table);
          this.selection.getRange().setStart(p, 0).setCursor();
        }
      }
    };

    UE.commands['deletetable'] = {
      queryCommandState: function () {
        var rng = this.selection.getRange();
        return domUtils.findParentByTagName(rng.startContainer, 'table', true) ? 0 : -1;
      },
      execCommand: function (cmd, table) {
        var rng = this.selection.getRange();
        table = table || domUtils.findParentByTagName(rng.startContainer, 'table', true);
        if (table) {
          var next = table.nextSibling;
          if (!next) {
            next = domUtils.createElement(this.document, 'p', {
              'innerHTML': browser.ie ? domUtils.fillChar : '<br/>'
            });
            table.parentNode.insertBefore(next, table);
          }
          domUtils.remove(table);
          rng = this.selection.getRange();
          if (next.nodeType == 3) {
            rng.setStartBefore(next)
          } else {
            rng.setStart(next, 0)
          }
          rng.setCursor(false, true)
          this.fireEvent("tablehasdeleted")

        }

      }
    };
    UE.commands['cellalign'] = {
      queryCommandState: function () {
        return getSelectedArr(this).length ? 0 : -1
      },
      execCommand: function (cmd, align) {
        var selectedTds = getSelectedArr(this);
        if (selectedTds.length) {
          for (var i = 0, ci; ci = selectedTds[i++];) {
            ci.setAttribute('align', align);
          }
        }
      }
    };
    UE.commands['cellvalign'] = {
      queryCommandState: function () {
        return getSelectedArr(this).length ? 0 : -1;
      },
      execCommand: function (cmd, valign) {
        var selectedTds = getSelectedArr(this);
        if (selectedTds.length) {
          for (var i = 0, ci; ci = selectedTds[i++];) {
            ci.setAttribute('vAlign', valign);
          }
        }
      }
    };
    UE.commands['insertcaption'] = {
      queryCommandState: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          return table.getElementsByTagName('caption').length == 0 ? 1 : -1;
        }
        return -1;
      },
      execCommand: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          var caption = this.document.createElement('caption');
          caption.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
          table.insertBefore(caption, table.firstChild);
          var range = this.selection.getRange();
          range.setStart(caption, 0).setCursor();
        }

      }
    };
    UE.commands['deletecaption'] = {
      queryCommandState: function () {
        var rng = this.selection.getRange(),
          table = domUtils.findParentByTagName(rng.startContainer, 'table');
        if (table) {
          return table.getElementsByTagName('caption').length == 0 ? -1 : 1;
        }
        return -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          table = domUtils.findParentByTagName(rng.startContainer, 'table');
        if (table) {
          domUtils.remove(table.getElementsByTagName('caption')[0]);
          var range = this.selection.getRange();
          range.setStart(table.rows[0].cells[0], 0).setCursor();
        }

      }
    };
    UE.commands['inserttitle'] = {
      queryCommandState: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          var firstRow = table.rows[0];
          return firstRow.cells[firstRow.cells.length-1].tagName.toLowerCase() != 'th' ? 0 : -1
        }
        return -1;
      },
      execCommand: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          getUETable(table).insertRow(0, 'th');
        }
        var th = table.getElementsByTagName('th')[0];
        this.selection.getRange().setStart(th, 0).setCursor(false, true);
      }
    };
    UE.commands['deletetitle'] = {
      queryCommandState: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          var firstRow = table.rows[0];
          return firstRow.cells[firstRow.cells.length-1].tagName.toLowerCase() == 'th' ? 0 : -1
        }
        return -1;
      },
      execCommand: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          domUtils.remove(table.rows[0])
        }
        var td = table.getElementsByTagName('td')[0];
        this.selection.getRange().setStart(td, 0).setCursor(false, true);
      }
    };
    UE.commands['inserttitlecol'] = {
      queryCommandState: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          var lastRow = table.rows[table.rows.length-1];
          return lastRow.getElementsByTagName('th').length ? -1 : 0;
        }
        return -1;
      },
      execCommand: function (cmd) {
        var table = getTableItemsByRange(this).table;
        if (table) {
          getUETable(table).insertCol(0, 'th');
        }
        resetTdWidth(table, this);
        var th = table.getElementsByTagName('th')[0];
        this.selection.getRange().setStart(th, 0).setCursor(false, true);
      }
    };
    UE.commands['deletetitlecol'] = {
      queryCommandState: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          var lastRow = table.rows[table.rows.length-1];
          return lastRow.getElementsByTagName('th').length ? 0 : -1;
        }
        return -1;
      },
      execCommand: function () {
        var table = getTableItemsByRange(this).table;
        if (table) {
          for(var i = 0; i< table.rows.length; i++ ){
            domUtils.remove(table.rows[i].children[0])
          }
        }
        resetTdWidth(table, this);
        var td = table.getElementsByTagName('td')[0];
        this.selection.getRange().setStart(td, 0).setCursor(false, true);
      }
    };

    UE.commands["mergeright"] = {
      queryCommandState: function (cmd) {
        var tableItems = getTableItemsByRange(this),
          table = tableItems.table,
          cell = tableItems.cell;

        if (!table || !cell) return -1;
        var ut = getUETable(table);
        if (ut.selectedTds.length) return -1;

        var cellInfo = ut.getCellInfo(cell),
          rightColIndex = cellInfo.colIndex + cellInfo.colSpan;
        if (rightColIndex >= ut.colsNum) return -1; // 濡傛灉澶勪簬鏈€鍙宠竟鍒欎笉鑳藉悜鍙冲悎骞�

        var rightCellInfo = ut.indexTable[cellInfo.rowIndex][rightColIndex],
          rightCell = table.rows[rightCellInfo.rowIndex].cells[rightCellInfo.cellIndex];
        if (!rightCell || cell.tagName != rightCell.tagName) return -1; // TH鍜孴D涓嶈兘鐩镐簰鍚堝苟

        // 褰撲笖浠呭綋涓や釜Cell鐨勫紑濮嬪垪鍙峰拰缁撴潫鍒楀彿涓€鑷存椂鑳借繘琛屽悎骞�
        return (rightCellInfo.rowIndex == cellInfo.rowIndex && rightCellInfo.rowSpan == cellInfo.rowSpan) ? 0 : -1;
      },
      execCommand: function (cmd) {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell);
        ut.mergeRight(cell);
        rng.moveToBookmark(bk).select();
      }
    };
    UE.commands["mergedown"] = {
      queryCommandState: function (cmd) {
        var tableItems = getTableItemsByRange(this),
          table = tableItems.table,
          cell = tableItems.cell;

        if (!table || !cell) return -1;
        var ut = getUETable(table);
        if (ut.selectedTds.length)return -1;

        var cellInfo = ut.getCellInfo(cell),
          downRowIndex = cellInfo.rowIndex + cellInfo.rowSpan;
        if (downRowIndex >= ut.rowsNum) return -1; // 濡傛灉澶勪簬鏈€涓嬭竟鍒欎笉鑳藉悜涓嬪悎骞�

        var downCellInfo = ut.indexTable[downRowIndex][cellInfo.colIndex],
          downCell = table.rows[downCellInfo.rowIndex].cells[downCellInfo.cellIndex];
        if (!downCell || cell.tagName != downCell.tagName) return -1; // TH鍜孴D涓嶈兘鐩镐簰鍚堝苟

        // 褰撲笖浠呭綋涓や釜Cell鐨勫紑濮嬪垪鍙峰拰缁撴潫鍒楀彿涓€鑷存椂鑳借繘琛屽悎骞�
        return (downCellInfo.colIndex == cellInfo.colIndex && downCellInfo.colSpan == cellInfo.colSpan) ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell);
        ut.mergeDown(cell);
        rng.moveToBookmark(bk).select();
      }
    };
    UE.commands["mergecells"] = {
      queryCommandState: function () {
        return getUETableBySelected(this) ? 0 : -1;
      },
      execCommand: function () {
        var ut = getUETableBySelected(this);
        if (ut && ut.selectedTds.length) {
          var cell = ut.selectedTds[0];
          ut.mergeRange();
          var rng = this.selection.getRange();
          if (domUtils.isEmptyBlock(cell)) {
            rng.setStart(cell, 0).collapse(true)
          } else {
            rng.selectNodeContents(cell)
          }
          rng.select();
        }


      }
    };
    UE.commands["insertrow"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        return cell && (cell.tagName == "TD" || (cell.tagName == 'TH' && tableItems.tr !== tableItems.table.rows[0])) &&
        getUETable(tableItems.table).rowsNum < this.options.maxRowNum ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell,
          table = tableItems.table,
          ut = getUETable(table),
          cellInfo = ut.getCellInfo(cell);
        //ut.insertRow(!ut.selectedTds.length ? cellInfo.rowIndex:ut.cellsRange.beginRowIndex,'');
        if (!ut.selectedTds.length) {
          ut.insertRow(cellInfo.rowIndex, cell);
        } else {
          var range = ut.cellsRange;
          for (var i = 0, len = range.endRowIndex - range.beginRowIndex + 1; i < len; i++) {
            ut.insertRow(range.beginRowIndex, cell);
          }
        }
        rng.moveToBookmark(bk).select();
        if (table.getAttribute("interlaced") === "enabled")this.fireEvent("interlacetable", table);
      }
    };
    //鍚庢彃鍏ヨ
    UE.commands["insertrownext"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        return cell && (cell.tagName == "TD") && getUETable(tableItems.table).rowsNum < this.options.maxRowNum ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell,
          table = tableItems.table,
          ut = getUETable(table),
          cellInfo = ut.getCellInfo(cell);
        //ut.insertRow(!ut.selectedTds.length? cellInfo.rowIndex + cellInfo.rowSpan : ut.cellsRange.endRowIndex + 1,'');
        if (!ut.selectedTds.length) {
          ut.insertRow(cellInfo.rowIndex + cellInfo.rowSpan, cell);
        } else {
          var range = ut.cellsRange;
          for (var i = 0, len = range.endRowIndex - range.beginRowIndex + 1; i < len; i++) {
            ut.insertRow(range.endRowIndex + 1, cell);
          }
        }
        rng.moveToBookmark(bk).select();
        if (table.getAttribute("interlaced") === "enabled")this.fireEvent("interlacetable", table);
      }
    };
    UE.commands["deleterow"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this);
        return tableItems.cell ? 0 : -1;
      },
      execCommand: function () {
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell),
          cellsRange = ut.cellsRange,
          cellInfo = ut.getCellInfo(cell),
          preCell = ut.getVSideCell(cell),
          nextCell = ut.getVSideCell(cell, true),
          rng = this.selection.getRange();
        if (utils.isEmptyObject(cellsRange)) {
          ut.deleteRow(cellInfo.rowIndex);
        } else {
          for (var i = cellsRange.beginRowIndex; i < cellsRange.endRowIndex + 1; i++) {
            ut.deleteRow(cellsRange.beginRowIndex);
          }
        }
        var table = ut.table;
        if (!table.getElementsByTagName('td').length) {
          var nextSibling = table.nextSibling;
          domUtils.remove(table);
          if (nextSibling) {
            rng.setStart(nextSibling, 0).setCursor(false, true);
          }
        } else {
          if (cellInfo.rowSpan == 1 || cellInfo.rowSpan == cellsRange.endRowIndex - cellsRange.beginRowIndex + 1) {
            if (nextCell || preCell) rng.selectNodeContents(nextCell || preCell).setCursor(false, true);
          } else {
            var newCell = ut.getCell(cellInfo.rowIndex, ut.indexTable[cellInfo.rowIndex][cellInfo.colIndex].cellIndex);
            if (newCell) rng.selectNodeContents(newCell).setCursor(false, true);
          }
        }
        if (table.getAttribute("interlaced") === "enabled")this.fireEvent("interlacetable", table);
      }
    };
    UE.commands["insertcol"] = {
      queryCommandState: function (cmd) {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        return cell && (cell.tagName == "TD" || (cell.tagName == 'TH' && cell !== tableItems.tr.cells[0])) &&
        getUETable(tableItems.table).colsNum < this.options.maxColNum ? 0 : -1;
      },
      execCommand: function (cmd) {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        if (this.queryCommandState(cmd) == -1)return;
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell),
          cellInfo = ut.getCellInfo(cell);

        //ut.insertCol(!ut.selectedTds.length ? cellInfo.colIndex:ut.cellsRange.beginColIndex);
        if (!ut.selectedTds.length) {
          ut.insertCol(cellInfo.colIndex, cell);
        } else {
          var range = ut.cellsRange;
          for (var i = 0, len = range.endColIndex - range.beginColIndex + 1; i < len; i++) {
            ut.insertCol(range.beginColIndex, cell);
          }
        }
        rng.moveToBookmark(bk).select(true);
      }
    };
    UE.commands["insertcolnext"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        return cell && getUETable(tableItems.table).colsNum < this.options.maxColNum ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell),
          cellInfo = ut.getCellInfo(cell);
        //ut.insertCol(!ut.selectedTds.length ? cellInfo.colIndex + cellInfo.colSpan:ut.cellsRange.endColIndex +1);
        if (!ut.selectedTds.length) {
          ut.insertCol(cellInfo.colIndex + cellInfo.colSpan, cell);
        } else {
          var range = ut.cellsRange;
          for (var i = 0, len = range.endColIndex - range.beginColIndex + 1; i < len; i++) {
            ut.insertCol(range.endColIndex + 1, cell);
          }
        }
        rng.moveToBookmark(bk).select();
      }
    };

    UE.commands["deletecol"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this);
        return tableItems.cell ? 0 : -1;
      },
      execCommand: function () {
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell),
          range = ut.cellsRange,
          cellInfo = ut.getCellInfo(cell),
          preCell = ut.getHSideCell(cell),
          nextCell = ut.getHSideCell(cell, true);
        if (utils.isEmptyObject(range)) {
          ut.deleteCol(cellInfo.colIndex);
        } else {
          for (var i = range.beginColIndex; i < range.endColIndex + 1; i++) {
            ut.deleteCol(range.beginColIndex);
          }
        }
        var table = ut.table,
          rng = this.selection.getRange();

        if (!table.getElementsByTagName('td').length) {
          var nextSibling = table.nextSibling;
          domUtils.remove(table);
          if (nextSibling) {
            rng.setStart(nextSibling, 0).setCursor(false, true);
          }
        } else {
          if (domUtils.inDoc(cell, this.document)) {
            rng.setStart(cell, 0).setCursor(false, true);
          } else {
            if (nextCell && domUtils.inDoc(nextCell, this.document)) {
              rng.selectNodeContents(nextCell).setCursor(false, true);
            } else {
              if (preCell && domUtils.inDoc(preCell, this.document)) {
                rng.selectNodeContents(preCell).setCursor(true, true);
              }
            }
          }
        }
      }
    };
    UE.commands["splittocells"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        if (!cell) return -1;
        var ut = getUETable(tableItems.table);
        if (ut.selectedTds.length > 0) return -1;
        return cell && (cell.colSpan > 1 || cell.rowSpan > 1) ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell);
        ut.splitToCells(cell);
        rng.moveToBookmark(bk).select();
      }
    };
    UE.commands["splittorows"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        if (!cell) return -1;
        var ut = getUETable(tableItems.table);
        if (ut.selectedTds.length > 0) return -1;
        return cell && cell.rowSpan > 1 ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell);
        ut.splitToRows(cell);
        rng.moveToBookmark(bk).select();
      }
    };
    UE.commands["splittocols"] = {
      queryCommandState: function () {
        var tableItems = getTableItemsByRange(this),
          cell = tableItems.cell;
        if (!cell) return -1;
        var ut = getUETable(tableItems.table);
        if (ut.selectedTds.length > 0) return -1;
        return cell && cell.colSpan > 1 ? 0 : -1;
      },
      execCommand: function () {
        var rng = this.selection.getRange(),
          bk = rng.createBookmark(true);
        var cell = getTableItemsByRange(this).cell,
          ut = getUETable(cell);
        ut.splitToCols(cell);
        rng.moveToBookmark(bk).select();

      }
    };

    UE.commands["adaptbytext"] =
      UE.commands["adaptbywindow"] = {
        queryCommandState: function () {
          return getTableItemsByRange(this).table ? 0 : -1
        },
        execCommand: function (cmd) {
          var tableItems = getTableItemsByRange(this),
            table = tableItems.table;
          if (table) {
            if (cmd == 'adaptbywindow') {
              resetTdWidth(table, this);
            } else {
              var cells = domUtils.getElementsByTagName(table, "td th");
              utils.each(cells, function (cell) {
                cell.removeAttribute("width");
              });
              table.removeAttribute("width");
            }
          }
        }
      };

    //骞冲潎鍒嗛厤鍚勫垪
    UE.commands['averagedistributecol'] = {
      queryCommandState: function () {
        var ut = getUETableBySelected(this);
        if (!ut) return -1;
        return ut.isFullRow() || ut.isFullCol() ? 0 : -1;
      },
      execCommand: function (cmd) {
        var me = this,
          ut = getUETableBySelected(me);

        function getAverageWidth() {
          var tb = ut.table,
            averageWidth, sumWidth = 0, colsNum = 0,
            tbAttr = getDefaultValue(me, tb);

          if (ut.isFullRow()) {
            sumWidth = tb.offsetWidth;
            colsNum = ut.colsNum;
          } else {
            var begin = ut.cellsRange.beginColIndex,
              end = ut.cellsRange.endColIndex,
              node;
            for (var i = begin; i <= end;) {
              node = ut.selectedTds[i];
              sumWidth += node.offsetWidth;
              i += node.colSpan;
              colsNum += 1;
            }
          }
          averageWidth = Math.ceil(sumWidth / colsNum) - tbAttr.tdBorder * 2 - tbAttr.tdPadding * 2;
          return averageWidth;
        }

        function setAverageWidth(averageWidth) {
          utils.each(domUtils.getElementsByTagName(ut.table, "th"), function (node) {
            node.setAttribute("width", "");
          });
          var cells = ut.isFullRow() ? domUtils.getElementsByTagName(ut.table, "td") : ut.selectedTds;

          utils.each(cells, function (node) {
            if (node.colSpan == 1) {
              node.setAttribute("width", averageWidth);
            }
          });
        }

        if (ut && ut.selectedTds.length) {
          setAverageWidth(getAverageWidth());
        }
      }
    };
    //骞冲潎鍒嗛厤鍚勮
    UE.commands['averagedistributerow'] = {
      queryCommandState: function () {
        var ut = getUETableBySelected(this);
        if (!ut) return -1;
        if (ut.selectedTds && /th/ig.test(ut.selectedTds[0].tagName)) return -1;
        return ut.isFullRow() || ut.isFullCol() ? 0 : -1;
      },
      execCommand: function (cmd) {
        var me = this,
          ut = getUETableBySelected(me);

        function getAverageHeight() {
          var averageHeight, rowNum, sumHeight = 0,
            tb = ut.table,
            tbAttr = getDefaultValue(me, tb),
            tdpadding = parseInt(domUtils.getComputedStyle(tb.getElementsByTagName('td')[0], "padding-top"));

          if (ut.isFullCol()) {
            var captionArr = domUtils.getElementsByTagName(tb, "caption"),
              thArr = domUtils.getElementsByTagName(tb, "th"),
              captionHeight, thHeight;

            if (captionArr.length > 0) {
              captionHeight = captionArr[0].offsetHeight;
            }
            if (thArr.length > 0) {
              thHeight = thArr[0].offsetHeight;
            }

            sumHeight = tb.offsetHeight - (captionHeight || 0) - (thHeight || 0);
            rowNum = thArr.length == 0 ? ut.rowsNum : (ut.rowsNum - 1);
          } else {
            var begin = ut.cellsRange.beginRowIndex,
              end = ut.cellsRange.endRowIndex,
              count = 0,
              trs = domUtils.getElementsByTagName(tb, "tr");
            for (var i = begin; i <= end; i++) {
              sumHeight += trs[i].offsetHeight;
              count += 1;
            }
            rowNum = count;
          }
          //ie8涓嬫槸娣锋潅妯″紡
          if (browser.ie && browser.version < 9) {
            averageHeight = Math.ceil(sumHeight / rowNum);
          } else {
            averageHeight = Math.ceil(sumHeight / rowNum) - tbAttr.tdBorder * 2 - tdpadding * 2;
          }
          return averageHeight;
        }

        function setAverageHeight(averageHeight) {
          var cells = ut.isFullCol() ? domUtils.getElementsByTagName(ut.table, "td") : ut.selectedTds;
          utils.each(cells, function (node) {
            if (node.rowSpan == 1) {
              node.setAttribute("height", averageHeight);
            }
          });
        }

        if (ut && ut.selectedTds.length) {
          setAverageHeight(getAverageHeight());
        }
      }
    };

    //鍗曞厓鏍煎榻愭柟寮�
    UE.commands['cellalignment'] = {
      queryCommandState: function () {
        return getTableItemsByRange(this).table ? 0 : -1
      },
      execCommand: function (cmd, data) {
        var me = this,
          ut = getUETableBySelected(me);

        if (!ut) {
          var start = me.selection.getStart(),
            cell = start && domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
          if (!/caption/ig.test(cell.tagName)) {
            domUtils.setAttributes(cell, data);
          } else {
            cell.style.textAlign = data.align;
            cell.style.verticalAlign = data.vAlign;
          }
          me.selection.getRange().setCursor(true);
        } else {
          utils.each(ut.selectedTds, function (cell) {
            domUtils.setAttributes(cell, data);
          });
        }
      },
      /**
       * 鏌ヨ褰撳墠鐐瑰嚮鐨勫崟鍏冩牸鐨勫榻愮姸鎬侊紝 濡傛灉褰撳墠宸茬粡閫夋嫨浜嗗涓崟鍏冩牸锛� 鍒欎細杩斿洖鎵€鏈夊崟鍏冩牸缁忚繃缁熶竴鍗忚皟杩囧悗鐨勭姸鎬�
       * @see UE.UETable.getTableCellAlignState
       */
      queryCommandValue: function (cmd) {

        var activeMenuCell = getTableItemsByRange( this).cell;

        if( !activeMenuCell ) {
          activeMenuCell = getSelectedArr(this)[0];
        }

        if (!activeMenuCell) {

          return null;

        } else {

          //鑾峰彇鍚屾椂閫変腑鐨勫叾浠栧崟鍏冩牸
          var cells = UE.UETable.getUETable(activeMenuCell).selectedTds;

          !cells.length && ( cells = activeMenuCell );

          return UE.UETable.getTableCellAlignState(cells);

        }

      }
    };
    //琛ㄦ牸瀵归綈鏂瑰紡
    UE.commands['tablealignment'] = {
      queryCommandState: function () {
        if (browser.ie && browser.version < 8) {
          return -1;
        }
        return getTableItemsByRange(this).table ? 0 : -1
      },
      execCommand: function (cmd, value) {
        var me = this,
          start = me.selection.getStart(),
          table = start && domUtils.findParentByTagName(start, ["table"], true);

        if (table) {
          table.setAttribute("align",value);
        }
      }
    };

    //琛ㄦ牸灞炴€�
    UE.commands['edittable'] = {
      queryCommandState: function () {
        return getTableItemsByRange(this).table ? 0 : -1
      },
      execCommand: function (cmd, color) {
        var rng = this.selection.getRange(),
          table = domUtils.findParentByTagName(rng.startContainer, 'table');
        if (table) {
          var arr = domUtils.getElementsByTagName(table, "td").concat(
            domUtils.getElementsByTagName(table, "th"),
            domUtils.getElementsByTagName(table, "caption")
          );
          utils.each(arr, function (node) {
            node.style.borderColor = color;
          });
        }
      }
    };
    //鍗曞厓鏍煎睘鎬�
    UE.commands['edittd'] = {
      queryCommandState: function () {
        return getTableItemsByRange(this).table ? 0 : -1
      },
      execCommand: function (cmd, bkColor) {
        var me = this,
          ut = getUETableBySelected(me);

        if (!ut) {
          var start = me.selection.getStart(),
            cell = start && domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
          if (cell) {
            cell.style.backgroundColor = bkColor;
          }
        } else {
          utils.each(ut.selectedTds, function (cell) {
            cell.style.backgroundColor = bkColor;
          });
        }
      }
    };

    UE.commands["settablebackground"] = {
      queryCommandState: function () {
        return getSelectedArr(this).length > 1 ? 0 : -1;
      },
      execCommand: function (cmd, value) {
        var cells, ut;
        cells = getSelectedArr(this);
        ut = getUETable(cells[0]);
        ut.setBackground(cells, value);
      }
    };

    UE.commands["cleartablebackground"] = {
      queryCommandState: function () {
        var cells = getSelectedArr(this);
        if (!cells.length)return -1;
        for (var i = 0, cell; cell = cells[i++];) {
          if (cell.style.backgroundColor !== "") return 0;
        }
        return -1;
      },
      execCommand: function () {
        var cells = getSelectedArr(this),
          ut = getUETable(cells[0]);
        ut.removeBackground(cells);
      }
    };

    UE.commands["interlacetable"] = UE.commands["uninterlacetable"] = {
      queryCommandState: function (cmd) {
        var table = getTableItemsByRange(this).table;
        if (!table) return -1;
        var interlaced = table.getAttribute("interlaced");
        if (cmd == "interlacetable") {
          //TODO 寰呭畾
          //鏄惁闇€瑕佸緟瀹氾紝濡傛灉璁剧疆锛屽垯鍛戒护鍙兘鍗曟鎵ц鎴愬姛锛屼絾鍙嶅皠鍏峰toggle鏁堟灉锛涘惁鍒欏彲浠ヨ鐩栧墠娆″懡浠わ紝浣嗗弽灏勫皢涓嶅瓨鍦╰oggle鏁堟灉
          return (interlaced === "enabled") ? -1 : 0;
        } else {
          return (!interlaced || interlaced === "disabled") ? -1 : 0;
        }
      },
      execCommand: function (cmd, classList) {
        var table = getTableItemsByRange(this).table;
        if (cmd == "interlacetable") {
          table.setAttribute("interlaced", "enabled");
          this.fireEvent("interlacetable", table, classList);
        } else {
          table.setAttribute("interlaced", "disabled");
          this.fireEvent("uninterlacetable", table);
        }
      }
    };
    UE.commands["setbordervisible"] = {
      queryCommandState: function (cmd) {
        var table = getTableItemsByRange(this).table;
        if (!table) return -1;
        return 0;
      },
      execCommand: function () {
        var table = getTableItemsByRange(this).table;
        utils.each(domUtils.getElementsByTagName(table,'td'),function(td){
          td.style.borderWidth = '1px';
          td.style.borderStyle = 'solid';
        })
      }
    };
    function resetTdWidth(table, editor) {
      var tds = domUtils.getElementsByTagName(table,'td th');
      utils.each(tds, function (td) {
        td.removeAttribute("width");
      });
      table.setAttribute('width', getTableWidth(editor, true, getDefaultValue(editor, table)));
      var tdsWidths = [];
      setTimeout(function () {
        utils.each(tds, function (td) {
          (td.colSpan == 1) && tdsWidths.push(td.offsetWidth)
        })
        utils.each(tds, function (td,i) {
          (td.colSpan == 1) && td.setAttribute("width", tdsWidths[i] + "");
        })
      }, 0);
    }

    function getTableWidth(editor, needIEHack, defaultValue) {
      var body = editor.body;
      return body.offsetWidth - (needIEHack ? parseInt(domUtils.getComputedStyle(body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (editor.options.offsetWidth || 0);
    }

    function getSelectedArr(editor) {
      var cell = getTableItemsByRange(editor).cell;
      if (cell) {
        var ut = getUETable(cell);
        return ut.selectedTds.length ? ut.selectedTds : [cell];
      } else {
        return [];
      }
    }
  })();


// plugins/table.action.js
  /**
   * Created with JetBrains PhpStorm.
   * User: taoqili
   * Date: 12-10-12
   * Time: 涓婂崍10:05
   * To change this template use File | Settings | File Templates.
   */
  UE.plugins['table'] = function () {
    var me = this,
      tabTimer = null,
      //鎷栧姩璁℃椂鍣�
      tableDragTimer = null,
      //鍙屽嚮璁℃椂鍣�
      tableResizeTimer = null,
      //鍗曞厓鏍兼渶灏忓搴�
      cellMinWidth = 5,
      isInResizeBuffer = false,
      //鍗曞厓鏍艰竟妗嗗ぇ灏�
      cellBorderWidth = 5,
      //榧犳爣鍋忕Щ璺濈
      offsetOfTableCell = 10,
      //璁板綍鍦ㄦ湁闄愭椂闂村唴鐨勭偣鍑荤姸鎬侊紝 鍏辨湁3涓彇鍊硷紝 0, 1, 2銆� 0浠ｈ〃鏈垵濮嬪寲锛� 1浠ｈ〃鍗曞嚮浜�1娆★紝2浠ｈ〃2娆�
      singleClickState = 0,
      userActionStatus = null,
      //鍙屽嚮鍏佽鐨勬椂闂磋寖鍥�
      dblclickTime = 360,
      UT = UE.UETable,
      getUETable = function (tdOrTable) {
        return UT.getUETable(tdOrTable);
      },
      getUETableBySelected = function (editor) {
        return UT.getUETableBySelected(editor);
      },
      getDefaultValue = function (editor, table) {
        return UT.getDefaultValue(editor, table);
      },
      removeSelectedClass = function (cells) {
        return UT.removeSelectedClass(cells);
      };

    function showError(e) {
//        throw e;
    }
    me.ready(function(){
      var me = this;
      var orgGetText = me.selection.getText;
      me.selection.getText = function(){
        var table = getUETableBySelected(me);
        if(table){
          var str = '';
          utils.each(table.selectedTds,function(td){
            str += td[browser.ie?'innerText':'textContent'];
          })
          return str;
        }else{
          return orgGetText.call(me.selection)
        }

      }
    })

    //澶勭悊鎷栧姩鍙婃閫夌浉鍏虫柟娉�
    var startTd = null, //榧犳爣鎸変笅鏃剁殑閿氱偣td
      currentTd = null, //褰撳墠榧犳爣缁忚繃鏃剁殑td
      onDrag = "", //鎸囩ず褰撳墠鎷栧姩鐘舵€侊紝鍏跺€煎彲涓�"","h","v" ,鍒嗗埆琛ㄧず鏈嫋鍔ㄧ姸鎬侊紝妯悜鎷栧姩鐘舵€侊紝绾靛悜鎷栧姩鐘舵€侊紝鐢ㄤ簬榧犳爣绉诲姩杩囩▼涓殑鍒ゆ柇
      onBorder = false, //妫€娴嬮紶鏍囨寜涓嬫椂鏄惁澶勫湪鍗曞厓鏍艰竟缂樹綅缃�
      dragButton = null,
      dragOver = false,
      dragLine = null, //妯℃嫙鐨勬嫋鍔ㄧ嚎
      dragTd = null;    //鍙戠敓鎷栧姩鐨勭洰鏍噒d

    var mousedown = false,
      //todo 鍒ゆ柇娣蜂贡妯″紡
      needIEHack = true;

    me.setOpt({
      'maxColNum':20,
      'maxRowNum':100,
      'defaultCols':5,
      'defaultRows':5,
      'tdvalign':'top',
      'cursorpath':me.options.UEDITOR_HOME_URL + "themes/default/images/cursor_",
      'tableDragable':false,
      'classList':["ue-table-interlace-color-single","ue-table-interlace-color-double"]
    });
    me.getUETable = getUETable;
    var commands = {
      'deletetable':1,
      'inserttable':1,
      'cellvalign':1,
      'insertcaption':1,
      'deletecaption':1,
      'inserttitle':1,
      'deletetitle':1,
      "mergeright":1,
      "mergedown":1,
      "mergecells":1,
      "insertrow":1,
      "insertrownext":1,
      "deleterow":1,
      "insertcol":1,
      "insertcolnext":1,
      "deletecol":1,
      "splittocells":1,
      "splittorows":1,
      "splittocols":1,
      "adaptbytext":1,
      "adaptbywindow":1,
      "adaptbycustomer":1,
      "insertparagraph":1,
      "insertparagraphbeforetable":1,
      "averagedistributecol":1,
      "averagedistributerow":1
    };
    me.ready(function () {
      utils.cssRule('table',
        //閫変腑鐨則d涓婄殑鏍峰紡
        '.selectTdClass{background-color:#edf5fa !important}' +
        'table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}' +
        //鎻掑叆鐨勮〃鏍肩殑榛樿鏍峰紡
        'table{margin-bottom:10px;border-collapse:collapse;display:table;}' +
        'td,th{padding: 5px 10px;border: 1px solid #DDD;}' +
        'caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}' +
        'th{border-top:1px solid #BBB;background-color:#F7F7F7;}' +
        'table tr.firstRow th{border-top-width:2px;}' +
        '.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }' +
        'td p{margin:0;padding:0;}', me.document);

      var tableCopyList, isFullCol, isFullRow;
      //娉ㄥ唽del/backspace浜嬩欢
      me.addListener('keydown', function (cmd, evt) {
        var me = this;
        var keyCode = evt.keyCode || evt.which;

        if (keyCode == 8) {

          var ut = getUETableBySelected(me);
          if (ut && ut.selectedTds.length) {

            if (ut.isFullCol()) {
              me.execCommand('deletecol')
            } else if (ut.isFullRow()) {
              me.execCommand('deleterow')
            } else {
              me.fireEvent('delcells');
            }
            domUtils.preventDefault(evt);
          }

          var caption = domUtils.findParentByTagName(me.selection.getStart(), 'caption', true),
            range = me.selection.getRange();
          if (range.collapsed && caption && isEmptyBlock(caption)) {
            me.fireEvent('saveScene');
            var table = caption.parentNode;
            domUtils.remove(caption);
            if (table) {
              range.setStart(table.rows[0].cells[0], 0).setCursor(false, true);
            }
            me.fireEvent('saveScene');
          }

        }

        if (keyCode == 46) {

          ut = getUETableBySelected(me);
          if (ut) {
            me.fireEvent('saveScene');
            for (var i = 0, ci; ci = ut.selectedTds[i++];) {
              domUtils.fillNode(me.document, ci)
            }
            me.fireEvent('saveScene');
            domUtils.preventDefault(evt);

          }

        }
        if (keyCode == 13) {

          var rng = me.selection.getRange(),
            caption = domUtils.findParentByTagName(rng.startContainer, 'caption', true);
          if (caption) {
            var table = domUtils.findParentByTagName(caption, 'table');
            if (!rng.collapsed) {

              rng.deleteContents();
              me.fireEvent('saveScene');
            } else {
              if (caption) {
                rng.setStart(table.rows[0].cells[0], 0).setCursor(false, true);
              }
            }
            domUtils.preventDefault(evt);
            return;
          }
          if (rng.collapsed) {
            var table = domUtils.findParentByTagName(rng.startContainer, 'table');
            if (table) {
              var cell = table.rows[0].cells[0],
                start = domUtils.findParentByTagName(me.selection.getStart(), ['td', 'th'], true),
                preNode = table.previousSibling;
              if (cell === start && (!preNode || preNode.nodeType == 1 && preNode.tagName == 'TABLE' ) && domUtils.isStartInblock(rng)) {
                var first = domUtils.findParent(me.selection.getStart(), function(n){return domUtils.isBlockElm(n)}, true);
                if(first && ( /t(h|d)/i.test(first.tagName) || first ===  start.firstChild )){
                  me.execCommand('insertparagraphbeforetable');
                  domUtils.preventDefault(evt);
                }

              }
            }
          }
        }

        if ((evt.ctrlKey || evt.metaKey) && evt.keyCode == '67') {
          tableCopyList = null;
          var ut = getUETableBySelected(me);
          if (ut) {
            var tds = ut.selectedTds;
            isFullCol = ut.isFullCol();
            isFullRow = ut.isFullRow();
            tableCopyList = [
              [ut.cloneCell(tds[0],null,true)]
            ];
            for (var i = 1, ci; ci = tds[i]; i++) {
              if (ci.parentNode !== tds[i - 1].parentNode) {
                tableCopyList.push([ut.cloneCell(ci,null,true)]);
              } else {
                tableCopyList[tableCopyList.length - 1].push(ut.cloneCell(ci,null,true));
              }

            }
          }
        }
      });
      me.addListener("tablehasdeleted",function(){
        toggleDraggableState(this, false, "", null);
        if (dragButton)domUtils.remove(dragButton);
      });

      me.addListener('beforepaste', function (cmd, html) {
        var me = this;
        var rng = me.selection.getRange();
        if (domUtils.findParentByTagName(rng.startContainer, 'caption', true)) {
          var div = me.document.createElement("div");
          div.innerHTML = html.html;
          //trace:3729
          html.html = div[browser.ie9below ? 'innerText' : 'textContent'];
          return;
        }
        var table = getUETableBySelected(me);
        if (tableCopyList) {
          me.fireEvent('saveScene');
          var rng = me.selection.getRange();
          var td = domUtils.findParentByTagName(rng.startContainer, ['td', 'th'], true), tmpNode, preNode;
          if (td) {
            var ut = getUETable(td);
            if (isFullRow) {
              var rowIndex = ut.getCellInfo(td).rowIndex;
              if (td.tagName == 'TH') {
                rowIndex++;
              }
              for (var i = 0, ci; ci = tableCopyList[i++];) {
                var tr = ut.insertRow(rowIndex++, "td");
                for (var j = 0, cj; cj = ci[j]; j++) {
                  var cell = tr.cells[j];
                  if (!cell) {
                    cell = tr.insertCell(j)
                  }
                  cell.innerHTML = cj.innerHTML;
                  cj.getAttribute('width') && cell.setAttribute('width', cj.getAttribute('width'));
                  cj.getAttribute('vAlign') && cell.setAttribute('vAlign', cj.getAttribute('vAlign'));
                  cj.getAttribute('align') && cell.setAttribute('align', cj.getAttribute('align'));
                  cj.style.cssText && (cell.style.cssText = cj.style.cssText)
                }
                for (var j = 0, cj; cj = tr.cells[j]; j++) {
                  if (!ci[j])
                    break;
                  cj.innerHTML = ci[j].innerHTML;
                  ci[j].getAttribute('width') && cj.setAttribute('width', ci[j].getAttribute('width'));
                  ci[j].getAttribute('vAlign') && cj.setAttribute('vAlign', ci[j].getAttribute('vAlign'));
                  ci[j].getAttribute('align') && cj.setAttribute('align', ci[j].getAttribute('align'));
                  ci[j].style.cssText && (cj.style.cssText = ci[j].style.cssText)
                }
              }
            } else {
              if (isFullCol) {
                cellInfo = ut.getCellInfo(td);
                var maxColNum = 0;
                for (var j = 0, ci = tableCopyList[0], cj; cj = ci[j++];) {
                  maxColNum += cj.colSpan || 1;
                }
                me.__hasEnterExecCommand = true;
                for (i = 0; i < maxColNum; i++) {
                  me.execCommand('insertcol');
                }
                me.__hasEnterExecCommand = false;
                td = ut.table.rows[0].cells[cellInfo.cellIndex];
                if (td.tagName == 'TH') {
                  td = ut.table.rows[1].cells[cellInfo.cellIndex];
                }
              }
              for (var i = 0, ci; ci = tableCopyList[i++];) {
                tmpNode = td;
                for (var j = 0, cj; cj = ci[j++];) {
                  if (td) {
                    td.innerHTML = cj.innerHTML;
                    //todo 瀹氬埗澶勭悊
                    cj.getAttribute('width') && td.setAttribute('width', cj.getAttribute('width'));
                    cj.getAttribute('vAlign') && td.setAttribute('vAlign', cj.getAttribute('vAlign'));
                    cj.getAttribute('align') && td.setAttribute('align', cj.getAttribute('align'));
                    cj.style.cssText && (td.style.cssText = cj.style.cssText);
                    preNode = td;
                    td = td.nextSibling;
                  } else {
                    var cloneTd = cj.cloneNode(true);
                    domUtils.removeAttributes(cloneTd, ['class', 'rowSpan', 'colSpan']);

                    preNode.parentNode.appendChild(cloneTd)
                  }
                }
                td = ut.getNextCell(tmpNode, true, true);
                if (!tableCopyList[i])
                  break;
                if (!td) {
                  var cellInfo = ut.getCellInfo(tmpNode);
                  ut.table.insertRow(ut.table.rows.length);
                  ut.update();
                  td = ut.getVSideCell(tmpNode, true);
                }
              }
            }
            ut.update();
          } else {
            table = me.document.createElement('table');
            for (var i = 0, ci; ci = tableCopyList[i++];) {
              var tr = table.insertRow(table.rows.length);
              for (var j = 0, cj; cj = ci[j++];) {
                cloneTd = UT.cloneCell(cj,null,true);
                domUtils.removeAttributes(cloneTd, ['class']);
                tr.appendChild(cloneTd)
              }
              if (j == 2 && cloneTd.rowSpan > 1) {
                cloneTd.rowSpan = 1;
              }
            }

            var defaultValue = getDefaultValue(me),
              width = me.body.offsetWidth -
                (needIEHack ? parseInt(domUtils.getComputedStyle(me.body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (me.options.offsetWidth || 0);
            me.execCommand('insertHTML', '<table  ' +
              ( isFullCol && isFullRow ? 'width="' + width + '"' : '') +
              '>' + table.innerHTML.replace(/>\s*</g, '><').replace(/\bth\b/gi, "td") + '</table>')
          }
          me.fireEvent('contentchange');
          me.fireEvent('saveScene');
          html.html = '';
          return true;
        } else {
          var div = me.document.createElement("div"), tables;
          div.innerHTML = html.html;
          tables = div.getElementsByTagName("table");
          if (domUtils.findParentByTagName(me.selection.getStart(), 'table')) {
            utils.each(tables, function (t) {
              domUtils.remove(t)
            });
            if (domUtils.findParentByTagName(me.selection.getStart(), 'caption', true)) {
              div.innerHTML = div[browser.ie ? 'innerText' : 'textContent'];
            }
          } else {
            utils.each(tables, function (table) {
              removeStyleSize(table, true);
              domUtils.removeAttributes(table, ['style', 'border']);
              utils.each(domUtils.getElementsByTagName(table, "td"), function (td) {
                if (isEmptyBlock(td)) {
                  domUtils.fillNode(me.document, td);
                }
                removeStyleSize(td, true);
//                            domUtils.removeAttributes(td, ['style'])
              });
            });
          }
          html.html = div.innerHTML;
        }
      });

      me.addListener('afterpaste', function () {
        utils.each(domUtils.getElementsByTagName(me.body, "table"), function (table) {
          if (table.offsetWidth > me.body.offsetWidth) {
            var defaultValue = getDefaultValue(me, table);
            table.style.width = me.body.offsetWidth - (needIEHack ? parseInt(domUtils.getComputedStyle(me.body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (me.options.offsetWidth || 0) + 'px'
          }
        })
      });
      me.addListener('blur', function () {
        tableCopyList = null;
      });
      var timer;
      me.addListener('keydown', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          var rng = me.selection.getRange(),
            cell = domUtils.findParentByTagName(rng.startContainer, ['th', 'td'], true);
          if (cell) {
            var table = cell.parentNode.parentNode.parentNode;
            if (table.offsetWidth > table.getAttribute("width")) {
              cell.style.wordBreak = "break-all";
            }
          }

        }, 100);
      });
      me.addListener("selectionchange", function () {
        toggleDraggableState(me, false, "", null);
      });


      //鍐呭鍙樺寲鏃惰Е鍙戠储寮曟洿鏂�
      //todo 鍙惁鑰冭檻鏍囪妫€娴嬶紝濡傛灉涓嶆秹鍙婅〃鏍肩殑鍙樺寲灏变笉杩涜绱㈠紩閲嶅缓鍜屾洿鏂�
      me.addListener("contentchange", function () {
        var me = this;
        //灏藉彲鑳芥帓闄や竴浜涗笉闇€瑕佹洿鏂扮殑鐘跺喌
        hideDragLine(me);
        if (getUETableBySelected(me))return;
        var rng = me.selection.getRange();
        var start = rng.startContainer;
        start = domUtils.findParentByTagName(start, ['td', 'th'], true);
        utils.each(domUtils.getElementsByTagName(me.document, 'table'), function (table) {
          if (me.fireEvent("excludetable", table) === true) return;
          table.ueTable = new UT(table);
          //trace:3742
//                utils.each(domUtils.getElementsByTagName(me.document, 'td'), function (td) {
//
//                    if (domUtils.isEmptyBlock(td) && td !== start) {
//                        domUtils.fillNode(me.document, td);
//                        if (browser.ie && browser.version == 6) {
//                            td.innerHTML = '&nbsp;'
//                        }
//                    }
//                });
//                utils.each(domUtils.getElementsByTagName(me.document, 'th'), function (th) {
//                    if (domUtils.isEmptyBlock(th) && th !== start) {
//                        domUtils.fillNode(me.document, th);
//                        if (browser.ie && browser.version == 6) {
//                            th.innerHTML = '&nbsp;'
//                        }
//                    }
//                });
          table.onmouseover = function () {
            me.fireEvent('tablemouseover', table);
          };
          table.onmousemove = function () {
            me.fireEvent('tablemousemove', table);
            me.options.tableDragable && toggleDragButton(true, this, me);
            utils.defer(function(){
              me.fireEvent('contentchange',50)
            },true)
          };
          table.onmouseout = function () {
            me.fireEvent('tablemouseout', table);
            toggleDraggableState(me, false, "", null);
            hideDragLine(me);
          };
          table.onclick = function (evt) {
            evt = me.window.event || evt;
            var target = getParentTdOrTh(evt.target || evt.srcElement);
            if (!target)return;
            var ut = getUETable(target),
              table = ut.table,
              cellInfo = ut.getCellInfo(target),
              cellsRange,
              rng = me.selection.getRange();
//                    if ("topLeft" == inPosition(table, mouseCoords(evt))) {
//                        cellsRange = ut.getCellsRange(ut.table.rows[0].cells[0], ut.getLastCell());
//                        ut.setSelected(cellsRange);
//                        return;
//                    }
//                    if ("bottomRight" == inPosition(table, mouseCoords(evt))) {
//
//                        return;
//                    }
            if (inTableSide(table, target, evt, true)) {
              var endTdCol = ut.getCell(ut.indexTable[ut.rowsNum - 1][cellInfo.colIndex].rowIndex, ut.indexTable[ut.rowsNum - 1][cellInfo.colIndex].cellIndex);
              if (evt.shiftKey && ut.selectedTds.length) {
                if (ut.selectedTds[0] !== endTdCol) {
                  cellsRange = ut.getCellsRange(ut.selectedTds[0], endTdCol);
                  ut.setSelected(cellsRange);
                } else {
                  rng && rng.selectNodeContents(endTdCol).select();
                }
              } else {
                if (target !== endTdCol) {
                  cellsRange = ut.getCellsRange(target, endTdCol);
                  ut.setSelected(cellsRange);
                } else {
                  rng && rng.selectNodeContents(endTdCol).select();
                }
              }
              return;
            }
            if (inTableSide(table, target, evt)) {
              var endTdRow = ut.getCell(ut.indexTable[cellInfo.rowIndex][ut.colsNum - 1].rowIndex, ut.indexTable[cellInfo.rowIndex][ut.colsNum - 1].cellIndex);
              if (evt.shiftKey && ut.selectedTds.length) {
                if (ut.selectedTds[0] !== endTdRow) {
                  cellsRange = ut.getCellsRange(ut.selectedTds[0], endTdRow);
                  ut.setSelected(cellsRange);
                } else {
                  rng && rng.selectNodeContents(endTdRow).select();
                }
              } else {
                if (target !== endTdRow) {
                  cellsRange = ut.getCellsRange(target, endTdRow);
                  ut.setSelected(cellsRange);
                } else {
                  rng && rng.selectNodeContents(endTdRow).select();
                }
              }
            }
          };
        });

        switchBorderColor(me, true);
      });

      domUtils.on(me.document, "mousemove", mouseMoveEvent);

      domUtils.on(me.document, "mouseout", function (evt) {
        var target = evt.target || evt.srcElement;
        if (target.tagName == "TABLE") {
          toggleDraggableState(me, false, "", null);
        }
      });
      /**
       * 琛ㄦ牸闅旇鍙樿壊
       */
      me.addListener("interlacetable",function(type,table,classList){
        if(!table) return;
        var me = this,
          rows = table.rows,
          len = rows.length,
          getClass = function(list,index,repeat){
            return list[index] ? list[index] : repeat ? list[index % list.length]: "";
          };
        for(var i = 0;i<len;i++){
          rows[i].className = getClass( classList|| me.options.classList,i,true);
        }
      });
      me.addListener("uninterlacetable",function(type,table){
        if(!table) return;
        var me = this,
          rows = table.rows,
          classList = me.options.classList,
          len = rows.length;
        for(var i = 0;i<len;i++){
          domUtils.removeClasses( rows[i], classList );
        }
      });

      me.addListener("mousedown", mouseDownEvent);
      me.addListener("mouseup", mouseUpEvent);
      //鎷栧姩鐨勬椂鍊欒Е鍙憁ouseup
      domUtils.on( me.body, 'dragstart', function( evt ){
        mouseUpEvent.call( me, 'dragstart', evt );
      });
      me.addOutputRule(function(root){
        utils.each(root.getNodesByTagName('div'),function(n){
          if (n.getAttr('id') == 'ue_tableDragLine') {
            n.parentNode.removeChild(n);
          }
        });
      });

      var currentRowIndex = 0;
      me.addListener("mousedown", function () {
        currentRowIndex = 0;
      });
      me.addListener('tabkeydown', function () {
        var range = this.selection.getRange(),
          common = range.getCommonAncestor(true, true),
          table = domUtils.findParentByTagName(common, 'table');
        if (table) {
          if (domUtils.findParentByTagName(common, 'caption', true)) {
            var cell = domUtils.getElementsByTagName(table, 'th td');
            if (cell && cell.length) {
              range.setStart(cell[0], 0).setCursor(false, true)
            }
          } else {
            var cell = domUtils.findParentByTagName(common, ['td', 'th'], true),
              ua = getUETable(cell);
            currentRowIndex = cell.rowSpan > 1 ? currentRowIndex : ua.getCellInfo(cell).rowIndex;
            var nextCell = ua.getTabNextCell(cell, currentRowIndex);
            if (nextCell) {
              if (isEmptyBlock(nextCell)) {
                range.setStart(nextCell, 0).setCursor(false, true)
              } else {
                range.selectNodeContents(nextCell).select()
              }
            } else {
              me.fireEvent('saveScene');
              me.__hasEnterExecCommand = true;
              this.execCommand('insertrownext');
              me.__hasEnterExecCommand = false;
              range = this.selection.getRange();
              range.setStart(table.rows[table.rows.length - 1].cells[0], 0).setCursor();
              me.fireEvent('saveScene');
            }
          }
          return true;
        }

      });
      browser.ie && me.addListener('selectionchange', function () {
        toggleDraggableState(this, false, "", null);
      });
      me.addListener("keydown", function (type, evt) {
        var me = this;
        //澶勭悊鍦ㄨ〃鏍肩殑鏈€鍚庝竴涓緭鍏ab浜х敓鏂扮殑琛ㄦ牸
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 8 || keyCode == 46) {
          return;
        }
        var notCtrlKey = !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey;
        notCtrlKey && removeSelectedClass(domUtils.getElementsByTagName(me.body, "td"));
        var ut = getUETableBySelected(me);
        if (!ut) return;
        notCtrlKey && ut.clearSelected();
      });

      me.addListener("beforegetcontent", function () {
        switchBorderColor(this, false);
        browser.ie && utils.each(this.document.getElementsByTagName('caption'), function (ci) {
          if (domUtils.isEmptyNode(ci)) {
            ci.innerHTML = '&nbsp;'
          }
        });
      });
      me.addListener("aftergetcontent", function () {
        switchBorderColor(this, true);
      });
      me.addListener("getAllHtml", function () {
        removeSelectedClass(me.document.getElementsByTagName("td"));
      });
      //淇鍏ㄥ睆鐘舵€佷笅鎻掑叆鐨勮〃鏍煎搴﹀湪闈炲叏灞忕姸鎬佷笅鎾戝紑缂栬緫鍣ㄧ殑鎯呭喌
      me.addListener("fullscreenchanged", function (type, fullscreen) {
        if (!fullscreen) {
          var ratio = this.body.offsetWidth / document.body.offsetWidth,
            tables = domUtils.getElementsByTagName(this.body, "table");
          utils.each(tables, function (table) {
            if (table.offsetWidth < me.body.offsetWidth) return false;
            var tds = domUtils.getElementsByTagName(table, "td"),
              backWidths = [];
            utils.each(tds, function (td) {
              backWidths.push(td.offsetWidth);
            });
            for (var i = 0, td; td = tds[i]; i++) {
              td.setAttribute("width", Math.floor(backWidths[i] * ratio));
            }
            table.setAttribute("width", Math.floor(getTableWidth(me, needIEHack, getDefaultValue(me))))
          });
        }
      });

      //閲嶅啓execCommand鍛戒护锛岀敤浜庡鐞嗘閫夋椂鐨勫鐞�
      var oldExecCommand = me.execCommand;
      me.execCommand = function (cmd, datatat) {

        var me = this,
          args = arguments;

        cmd = cmd.toLowerCase();
        var ut = getUETableBySelected(me), tds,
          range = new dom.Range(me.document),
          cmdFun = me.commands[cmd] || UE.commands[cmd],
          result;
        if (!cmdFun) return;
        if (ut && !commands[cmd] && !cmdFun.notNeedUndo && !me.__hasEnterExecCommand) {
          me.__hasEnterExecCommand = true;
          me.fireEvent("beforeexeccommand", cmd);
          tds = ut.selectedTds;
          var lastState = -2, lastValue = -2, value, state;
          for (var i = 0, td; td = tds[i]; i++) {
            if (isEmptyBlock(td)) {
              range.setStart(td, 0).setCursor(false, true)
            } else {
              range.selectNode(td).select(true);
            }
            state = me.queryCommandState(cmd);
            value = me.queryCommandValue(cmd);
            if (state != -1) {
              if (lastState !== state || lastValue !== value) {
                me._ignoreContentChange = true;
                result = oldExecCommand.apply(me, arguments);
                me._ignoreContentChange = false;

              }
              lastState = me.queryCommandState(cmd);
              lastValue = me.queryCommandValue(cmd);
              if (domUtils.isEmptyBlock(td)) {
                domUtils.fillNode(me.document, td)
              }
            }
          }
          range.setStart(tds[0], 0).shrinkBoundary(true).setCursor(false, true);
          me.fireEvent('contentchange');
          me.fireEvent("afterexeccommand", cmd);
          me.__hasEnterExecCommand = false;
          me._selectionChange();
        } else {
          result = oldExecCommand.apply(me, arguments);
        }
        return result;
      };


    });
    /**
     * 鍒犻櫎obj鐨勫楂榮tyle锛屾敼鎴愬睘鎬у楂�
     * @param obj
     * @param replaceToProperty
     */
    function removeStyleSize(obj, replaceToProperty) {
      removeStyle(obj, "width", true);
      removeStyle(obj, "height", true);
    }

    function removeStyle(obj, styleName, replaceToProperty) {
      if (obj.style[styleName]) {
        replaceToProperty && obj.setAttribute(styleName, parseInt(obj.style[styleName], 10));
        obj.style[styleName] = "";
      }
    }

    function getParentTdOrTh(ele) {
      if (ele.tagName == "TD" || ele.tagName == "TH") return ele;
      var td;
      if (td = domUtils.findParentByTagName(ele, "td", true) || domUtils.findParentByTagName(ele, "th", true)) return td;
      return null;
    }

    function isEmptyBlock(node) {
      var reg = new RegExp(domUtils.fillChar, 'g');
      if (node[browser.ie ? 'innerText' : 'textContent'].replace(/^\s*$/, '').replace(reg, '').length > 0) {
        return 0;
      }
      for (var n in dtd.$isNotEmpty) {
        if (node.getElementsByTagName(n).length) {
          return 0;
        }
      }
      return 1;
    }


    function mouseCoords(evt) {
      if (evt.pageX || evt.pageY) {
        return { x:evt.pageX, y:evt.pageY };
      }
      return {
        x:evt.clientX + me.document.body.scrollLeft - me.document.body.clientLeft,
        y:evt.clientY + me.document.body.scrollTop - me.document.body.clientTop
      };
    }

    function mouseMoveEvent(evt) {

      if( isEditorDisabled() ) {
        return;
      }

      try {

        //鏅€氱姸鎬佷笅榧犳爣绉诲姩
        var target = getParentTdOrTh(evt.target || evt.srcElement),
          pos;

        //鍖哄垎鐢ㄦ埛鐨勮涓烘槸鎷栧姩杩樻槸鍙屽嚮
        if( isInResizeBuffer  ) {

          me.body.style.webkitUserSelect = 'none';

          if( Math.abs( userActionStatus.x - evt.clientX ) > offsetOfTableCell || Math.abs( userActionStatus.y - evt.clientY ) > offsetOfTableCell ) {
            clearTableDragTimer();
            isInResizeBuffer = false;
            singleClickState = 0;
            //drag action
            tableBorderDrag(evt);
          }
        }

        //淇敼鍗曞厓鏍煎ぇ灏忔椂鐨勯紶鏍囩Щ鍔�
        if (onDrag && dragTd) {
          singleClickState = 0;
          me.body.style.webkitUserSelect = 'none';
          me.selection.getNative()[browser.ie9below ? 'empty' : 'removeAllRanges']();
          pos = mouseCoords(evt);
          toggleDraggableState(me, true, onDrag, pos, target);
          if (onDrag == "h") {
            dragLine.style.left = getPermissionX(dragTd, evt) + "px";
          } else if (onDrag == "v") {
            dragLine.style.top = getPermissionY(dragTd, evt) + "px";
          }
          return;
        }
        //褰撻紶鏍囧浜巘able涓婃椂锛屼慨鏀圭Щ鍔ㄨ繃绋嬩腑鐨勫厜鏍囩姸鎬�
        if (target) {
          //閽堝浣跨敤table浣滀负瀹瑰櫒鐨勭粍浠朵笉瑙﹀彂鎷栨嫿鏁堟灉
          if (me.fireEvent('excludetable', target) === true)
            return;
          pos = mouseCoords(evt);
          var state = getRelation(target, pos),
            table = domUtils.findParentByTagName(target, "table", true);

          if (inTableSide(table, target, evt, true)) {
            if (me.fireEvent("excludetable", table) === true) return;
            me.body.style.cursor = "url(" + me.options.cursorpath + "h.png),pointer";
          } else if (inTableSide(table, target, evt)) {
            if (me.fireEvent("excludetable", table) === true) return;
            me.body.style.cursor = "url(" + me.options.cursorpath + "v.png),pointer";
          } else {
            me.body.style.cursor = "text";
            var curCell = target;
            if (/\d/.test(state)) {
              state = state.replace(/\d/, '');
              target = getUETable(target).getPreviewCell(target, state == "v");
            }
            //浣嶄簬绗竴琛岀殑椤堕儴鎴栬€呯涓€鍒楃殑宸﹁竟鏃朵笉鍙嫋鍔�
            toggleDraggableState(me, target ? !!state : false, target ? state : '', pos, target);

          }
        } else {
          toggleDragButton(false, table, me);
        }

      } catch (e) {
        showError(e);
      }
    }

    var dragButtonTimer;

    function toggleDragButton(show, table, editor) {
      if (!show) {
        if (dragOver)return;
        dragButtonTimer = setTimeout(function () {
          !dragOver && dragButton && dragButton.parentNode && dragButton.parentNode.removeChild(dragButton);
        }, 2000);
      } else {
        createDragButton(table, editor);
      }
    }

    function createDragButton(table, editor) {
      var pos = domUtils.getXY(table),
        doc = table.ownerDocument;
      if (dragButton && dragButton.parentNode)return dragButton;
      dragButton = doc.createElement("div");
      dragButton.contentEditable = false;
      dragButton.innerHTML = "";
      dragButton.style.cssText = "width:15px;height:15px;background-image:url(" + editor.options.UEDITOR_HOME_URL + "dialogs/table/dragicon.png);position: absolute;cursor:move;top:" + (pos.y - 15) + "px;left:" + (pos.x) + "px;";
      domUtils.unSelectable(dragButton);
      dragButton.onmouseover = function (evt) {
        dragOver = true;
      };
      dragButton.onmouseout = function (evt) {
        dragOver = false;
      };
      domUtils.on(dragButton, 'click', function (type, evt) {
        doClick(evt, this);
      });
      domUtils.on(dragButton, 'dblclick', function (type, evt) {
        doDblClick(evt);
      });
      domUtils.on(dragButton, 'dragstart', function (type, evt) {
        domUtils.preventDefault(evt);
      });
      var timer;

      function doClick(evt, button) {
        // 閮ㄥ垎娴忚鍣ㄤ笅闇€瑕佹竻鐞�
        clearTimeout(timer);
        timer = setTimeout(function () {
          editor.fireEvent("tableClicked", table, button);
        }, 300);
      }

      function doDblClick(evt) {
        clearTimeout(timer);
        var ut = getUETable(table),
          start = table.rows[0].cells[0],
          end = ut.getLastCell(),
          range = ut.getCellsRange(start, end);
        editor.selection.getRange().setStart(start, 0).setCursor(false, true);
        ut.setSelected(range);
      }

      doc.body.appendChild(dragButton);
    }


//    function inPosition(table, pos) {
//        var tablePos = domUtils.getXY(table),
//            width = table.offsetWidth,
//            height = table.offsetHeight;
//        if (pos.x - tablePos.x < 5 && pos.y - tablePos.y < 5) {
//            return "topLeft";
//        } else if (tablePos.x + width - pos.x < 5 && tablePos.y + height - pos.y < 5) {
//            return "bottomRight";
//        }
//    }

    function inTableSide(table, cell, evt, top) {
      var pos = mouseCoords(evt),
        state = getRelation(cell, pos);

      if (top) {
        var caption = table.getElementsByTagName("caption")[0],
          capHeight = caption ? caption.offsetHeight : 0;
        return (state == "v1") && ((pos.y - domUtils.getXY(table).y - capHeight) < 8);
      } else {
        return (state == "h1") && ((pos.x - domUtils.getXY(table).x) < 8);
      }
    }

    /**
     * 鑾峰彇鎷栧姩鏃跺厑璁哥殑X杞村潗鏍�
     * @param dragTd
     * @param evt
     */
    function getPermissionX(dragTd, evt) {
      var ut = getUETable(dragTd);
      if (ut) {
        var preTd = ut.getSameEndPosCells(dragTd, "x")[0],
          nextTd = ut.getSameStartPosXCells(dragTd)[0],
          mouseX = mouseCoords(evt).x,
          left = (preTd ? domUtils.getXY(preTd).x : domUtils.getXY(ut.table).x) + 20 ,
          right = nextTd ? domUtils.getXY(nextTd).x + nextTd.offsetWidth - 20 : (me.body.offsetWidth + 5 || parseInt(domUtils.getComputedStyle(me.body, "width"), 10));

        left += cellMinWidth;
        right -= cellMinWidth;

        return mouseX < left ? left : mouseX > right ? right : mouseX;
      }
    }

    /**
     * 鑾峰彇鎷栧姩鏃跺厑璁哥殑Y杞村潗鏍�
     */
    function getPermissionY(dragTd, evt) {
      try {
        var top = domUtils.getXY(dragTd).y,
          mousePosY = mouseCoords(evt).y;
        return mousePosY < top ? top : mousePosY;
      } catch (e) {
        showError(e);
      }
    }

    /**
     * 绉诲姩鐘舵€佸垏鎹�
     */
    function toggleDraggableState(editor, draggable, dir, mousePos, cell) {
      try {
        editor.body.style.cursor = dir == "h" ? "col-resize" : dir == "v" ? "row-resize" : "text";
        if (browser.ie) {
          if (dir && !mousedown && !getUETableBySelected(editor)) {
            getDragLine(editor, editor.document);
            showDragLineAt(dir, cell);
          } else {
            hideDragLine(editor)
          }
        }
        onBorder = draggable;
      } catch (e) {
        showError(e);
      }
    }

    /**
     * 鑾峰彇涓嶶ETable鐩稿叧鐨剅esize line
     * @param uetable UETable瀵硅薄
     */
    function getResizeLineByUETable() {

      var lineId = '_UETableResizeLine',
        line = this.document.getElementById( lineId );

      if( !line ) {
        line = this.document.createElement("div");
        line.id = lineId;
        line.contnetEditable = false;
        line.setAttribute("unselectable", "on");

        var styles = {
          width: 2*cellBorderWidth + 1 + 'px',
          position: 'absolute',
          'z-index': 100000,
          cursor: 'col-resize',
          background: 'red',
          display: 'none'
        };

        //鍒囨崲鐘舵€�
        line.onmouseout = function(){
          this.style.display = 'none';
        };

        utils.extend( line.style, styles );

        this.document.body.appendChild( line );

      }

      return line;

    }

    /**
     * 鏇存柊resize-line
     */
    function updateResizeLine( cell, uetable ) {

      var line = getResizeLineByUETable.call( this ),
        table = uetable.table,
        styles = {
          top: domUtils.getXY( table ).y + 'px',
          left: domUtils.getXY( cell).x + cell.offsetWidth - cellBorderWidth + 'px',
          display: 'block',
          height: table.offsetHeight + 'px'
        };

      utils.extend( line.style, styles );

    }

    /**
     * 鏄剧ずresize-line
     */
    function showResizeLine( cell ) {

      var uetable = getUETable( cell );

      updateResizeLine.call( this, cell, uetable );

    }

    /**
     * 鑾峰彇榧犳爣涓庡綋鍓嶅崟鍏冩牸鐨勭浉瀵逛綅缃�
     * @param ele
     * @param mousePos
     */
    function getRelation(ele, mousePos) {
      var elePos = domUtils.getXY(ele);

      if( !elePos ) {
        return '';
      }

      if (elePos.x + ele.offsetWidth - mousePos.x < cellBorderWidth) {
        return "h";
      }
      if (mousePos.x - elePos.x < cellBorderWidth) {
        return 'h1'
      }
      if (elePos.y + ele.offsetHeight - mousePos.y < cellBorderWidth) {
        return "v";
      }
      if (mousePos.y - elePos.y < cellBorderWidth) {
        return 'v1'
      }
      return '';
    }

    function mouseDownEvent(type, evt) {

      if( isEditorDisabled() ) {
        return ;
      }

      userActionStatus = {
        x: evt.clientX,
        y: evt.clientY
      };

      //鍙抽敭鑿滃崟鍗曠嫭澶勭悊
      if (evt.button == 2) {
        var ut = getUETableBySelected(me),
          flag = false;

        if (ut) {
          var td = getTargetTd(me, evt);
          utils.each(ut.selectedTds, function (ti) {
            if (ti === td) {
              flag = true;
            }
          });
          if (!flag) {
            removeSelectedClass(domUtils.getElementsByTagName(me.body, "th td"));
            ut.clearSelected()
          } else {
            td = ut.selectedTds[0];
            setTimeout(function () {
              me.selection.getRange().setStart(td, 0).setCursor(false, true);
            }, 0);

          }
        }
      } else {
        tableClickHander( evt );
      }

    }

    //娓呴櫎琛ㄦ牸鐨勮鏃跺櫒
    function clearTableTimer() {
      tabTimer && clearTimeout( tabTimer );
      tabTimer = null;
    }

    //鍙屽嚮鏀剁缉
    function tableDbclickHandler(evt) {
      singleClickState = 0;
      evt = evt || me.window.event;
      var target = getParentTdOrTh(evt.target || evt.srcElement);
      if (target) {
        var h;
        if (h = getRelation(target, mouseCoords(evt))) {

          hideDragLine( me );

          if (h == 'h1') {
            h = 'h';
            if (inTableSide(domUtils.findParentByTagName(target, "table"), target, evt)) {
              me.execCommand('adaptbywindow');
            } else {
              target = getUETable(target).getPreviewCell(target);
              if (target) {
                var rng = me.selection.getRange();
                rng.selectNodeContents(target).setCursor(true, true)
              }
            }
          }
          if (h == 'h') {
            var ut = getUETable(target),
              table = ut.table,
              cells = getCellsByMoveBorder( target, table, true );

            cells = extractArray( cells, 'left' );

            ut.width = ut.offsetWidth;

            var oldWidth = [],
              newWidth = [];

            utils.each( cells, function( cell ){

              oldWidth.push( cell.offsetWidth );

            } );

            utils.each( cells, function( cell ){

              cell.removeAttribute("width");

            } );

            window.setTimeout( function(){

              //鏄惁鍏佽鏀瑰彉
              var changeable = true;

              utils.each( cells, function( cell, index ){

                var width = cell.offsetWidth;

                if( width > oldWidth[index] ) {
                  changeable = false;
                  return false;
                }

                newWidth.push( width );

              } );

              var change = changeable ? newWidth : oldWidth;

              utils.each( cells, function( cell, index ){

                cell.width = change[index] - getTabcellSpace();

              } );


            }, 0 );

//                    minWidth -= cellMinWidth;
//
//                    table.removeAttribute("width");
//                    utils.each(cells, function (cell) {
//                        cell.style.width = "";
//                        cell.width -= minWidth;
//                    });

          }
        }
      }
    }

    function tableClickHander( evt ) {

      removeSelectedClass(domUtils.getElementsByTagName(me.body, "td th"));
      //trace:3113
      //閫変腑鍗曞厓鏍硷紝鐐瑰嚮table澶栭儴锛屼笉浼氭竻鎺塼able涓婃寕鐨剈eTable,浼氬紩璧穏etUETableBySelected鏂规硶杩斿洖鍊�
      utils.each(me.document.getElementsByTagName('table'), function (t) {
        t.ueTable = null;
      });
      startTd = getTargetTd(me, evt);
      if( !startTd ) return;
      var table = domUtils.findParentByTagName(startTd, "table", true);
      ut = getUETable(table);
      ut && ut.clearSelected();

      //鍒ゆ柇褰撳墠榧犳爣鐘舵€�
      if (!onBorder) {
        me.document.body.style.webkitUserSelect = '';
        mousedown = true;
        me.addListener('mouseover', mouseOverEvent);
      } else {
        //杈规涓婄殑鍔ㄤ綔澶勭悊
        borderActionHandler( evt );
      }


    }

    //澶勭悊琛ㄦ牸杈规涓婄殑鍔ㄤ綔, 杩欓噷鍋氬欢鏃跺鐞嗭紝閬垮厤涓ょ鍔ㄤ綔浜掔浉褰卞搷
    function borderActionHandler( evt ) {

      if ( browser.ie ) {
        evt = reconstruct(evt );
      }

      clearTableDragTimer();

      //鏄惁姝ｅ湪绛夊緟resize鐨勭紦鍐蹭腑
      isInResizeBuffer = true;

      tableDragTimer = setTimeout(function(){
        tableBorderDrag( evt );
      }, dblclickTime);

    }

    function extractArray( originArr, key ) {

      var result = [],
        tmp = null;

      for( var i = 0, len = originArr.length; i<len; i++ ) {

        tmp = originArr[ i ][ key ];

        if( tmp ) {
          result.push( tmp );
        }

      }

      return result;

    }

    function clearTableDragTimer() {
      tableDragTimer && clearTimeout(tableDragTimer);
      tableDragTimer = null;
    }

    function reconstruct( obj ) {

      var attrs = ['pageX', 'pageY', 'clientX', 'clientY', 'srcElement', 'target'],
        newObj = {};

      if( obj ) {

        for( var i = 0, key, val; key = attrs[i]; i++ ) {
          val=obj[ key ];
          val && (newObj[ key ] = val);
        }

      }

      return newObj;

    }

    //杈规鎷栧姩
    function tableBorderDrag( evt ) {

      isInResizeBuffer = false;

      startTd = evt.target || evt.srcElement;
      if( !startTd ) return;
      var state = getRelation(startTd, mouseCoords(evt));
      if (/\d/.test(state)) {
        state = state.replace(/\d/, '');
        startTd = getUETable(startTd).getPreviewCell(startTd, state == 'v');
      }
      hideDragLine(me);
      getDragLine(me, me.document);
      me.fireEvent('saveScene');
      showDragLineAt(state, startTd);
      mousedown = true;
      //鎷栧姩寮€濮�
      onDrag = state;
      dragTd = startTd;
    }

    function mouseUpEvent(type, evt) {

      if( isEditorDisabled() ) {
        return ;
      }

      clearTableDragTimer();

      isInResizeBuffer = false;

      if( onBorder ) {
        singleClickState = ++singleClickState % 3;

        userActionStatus = {
          x: evt.clientX,
          y: evt.clientY
        };

        tableResizeTimer = setTimeout(function(){
          singleClickState > 0 && singleClickState--;
        }, dblclickTime );

        if( singleClickState === 2 ) {

          singleClickState = 0;
          tableDbclickHandler(evt);
          return;

        }

      }

      if (evt.button == 2)return;
      var me = this;
      //娓呴櫎琛ㄦ牸涓婂師鐢熻法閫夐棶棰�
      var range = me.selection.getRange(),
        start = domUtils.findParentByTagName(range.startContainer, 'table', true),
        end = domUtils.findParentByTagName(range.endContainer, 'table', true);

      if (start || end) {
        if (start === end) {
          start = domUtils.findParentByTagName(range.startContainer, ['td', 'th', 'caption'], true);
          end = domUtils.findParentByTagName(range.endContainer, ['td', 'th', 'caption'], true);
          if (start !== end) {
            me.selection.clearRange()
          }
        } else {
          me.selection.clearRange()
        }
      }
      mousedown = false;
      me.document.body.style.webkitUserSelect = '';
      //鎷栨嫿鐘舵€佷笅鐨刴ouseUP
      if ( onDrag && dragTd ) {

        me.selection.getNative()[browser.ie9below ? 'empty' : 'removeAllRanges']();

        singleClickState = 0;
        dragLine = me.document.getElementById('ue_tableDragLine');

        // trace 3973
        if (dragLine) {
          var dragTdPos = domUtils.getXY(dragTd),
            dragLinePos = domUtils.getXY(dragLine);

          switch (onDrag) {
            case "h":
              changeColWidth(dragTd, dragLinePos.x - dragTdPos.x);
              break;
            case "v":
              changeRowHeight(dragTd, dragLinePos.y - dragTdPos.y - dragTd.offsetHeight);
              break;
            default:
          }
          onDrag = "";
          dragTd = null;

          hideDragLine(me);
          me.fireEvent('saveScene');
          return;
        }
      }
      //姝ｅ父鐘舵€佷笅鐨刴ouseup
      if (!startTd) {
        var target = domUtils.findParentByTagName(evt.target || evt.srcElement, "td", true);
        if (!target) target = domUtils.findParentByTagName(evt.target || evt.srcElement, "th", true);
        if (target && (target.tagName == "TD" || target.tagName == "TH")) {
          if (me.fireEvent("excludetable", target) === true) return;
          range = new dom.Range(me.document);
          range.setStart(target, 0).setCursor(false, true);
        }
      } else {
        var ut = getUETable(startTd),
          cell = ut ? ut.selectedTds[0] : null;
        if (cell) {
          range = new dom.Range(me.document);
          if (domUtils.isEmptyBlock(cell)) {
            range.setStart(cell, 0).setCursor(false, true);
          } else {
            range.selectNodeContents(cell).shrinkBoundary().setCursor(false, true);
          }
        } else {
          range = me.selection.getRange().shrinkBoundary();
          if (!range.collapsed) {
            var start = domUtils.findParentByTagName(range.startContainer, ['td', 'th'], true),
              end = domUtils.findParentByTagName(range.endContainer, ['td', 'th'], true);
            //鍦╰able閲岃竟鐨勪笉鑳芥竻闄�
            if (start && !end || !start && end || start && end && start !== end) {
              range.setCursor(false, true);
            }
          }
        }
        startTd = null;
        me.removeListener('mouseover', mouseOverEvent);
      }
      me._selectionChange(250, evt);
    }

    function mouseOverEvent(type, evt) {

      if( isEditorDisabled() ) {
        return;
      }

      var me = this,
        tar = evt.target || evt.srcElement;
      currentTd = domUtils.findParentByTagName(tar, "td", true) || domUtils.findParentByTagName(tar, "th", true);
      //闇€瑕佸垽鏂袱涓猅D鏄惁浣嶄簬鍚屼竴涓〃鏍煎唴
      if (startTd && currentTd &&
        ((startTd.tagName == "TD" && currentTd.tagName == "TD") || (startTd.tagName == "TH" && currentTd.tagName == "TH")) &&
        domUtils.findParentByTagName(startTd, 'table') == domUtils.findParentByTagName(currentTd, 'table')) {
        var ut = getUETable(currentTd);
        if (startTd != currentTd) {
          me.document.body.style.webkitUserSelect = 'none';
          me.selection.getNative()[browser.ie9below ? 'empty' : 'removeAllRanges']();
          var range = ut.getCellsRange(startTd, currentTd);
          ut.setSelected(range);
        } else {
          me.document.body.style.webkitUserSelect = '';
          ut.clearSelected();
        }

      }
      evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    }

    function setCellHeight(cell, height, backHeight) {
      var lineHight = parseInt(domUtils.getComputedStyle(cell, "line-height"), 10),
        tmpHeight = backHeight + height;
      height = tmpHeight < lineHight ? lineHight : tmpHeight;
      if (cell.style.height) cell.style.height = "";
      cell.rowSpan == 1 ? cell.setAttribute("height", height) : (cell.removeAttribute && cell.removeAttribute("height"));
    }

    function getWidth(cell) {
      if (!cell)return 0;
      return parseInt(domUtils.getComputedStyle(cell, "width"), 10);
    }

    function changeColWidth(cell, changeValue) {

      var ut = getUETable(cell);
      if (ut) {

        //鏍规嵁褰撳墠绉诲姩鐨勮竟妗嗚幏鍙栫浉鍏崇殑鍗曞厓鏍�
        var table = ut.table,
          cells = getCellsByMoveBorder( cell, table );

        table.style.width = "";
        table.removeAttribute("width");

        //淇鏀瑰彉閲�
        changeValue = correctChangeValue( changeValue, cell, cells );

        if (cell.nextSibling) {

          var i=0;

          utils.each( cells, function( cellGroup ){

            cellGroup.left.width = (+cellGroup.left.width)+changeValue;
            cellGroup.right && ( cellGroup.right.width = (+cellGroup.right.width)-changeValue );

          } );

        } else {

          utils.each( cells, function( cellGroup ){
            cellGroup.left.width -= -changeValue;
          } );

        }
      }

    }

    function isEditorDisabled() {
      return me.body.contentEditable === "false";
    }

    function changeRowHeight(td, changeValue) {
      if (Math.abs(changeValue) < 10) return;
      var ut = getUETable(td);
      if (ut) {
        var cells = ut.getSameEndPosCells(td, "y"),
          //澶囦唤闇€瑕佽繛甯﹀彉鍖栫殑td鐨勫師濮嬮珮搴︼紝鍚﹀垯鍚庢湡鏃犳硶鑾峰彇姝ｇ‘鐨勫€�
          backHeight = cells[0] ? cells[0].offsetHeight : 0;
        for (var i = 0, cell; cell = cells[i++];) {
          setCellHeight(cell, changeValue, backHeight);
        }
      }

    }

    /**
     * 鑾峰彇璋冩暣鍗曞厓鏍煎ぇ灏忕殑鐩稿叧鍗曞厓鏍�
     * @isContainMergeCell 杩斿洖鐨勭粨鏋滀腑鏄惁鍖呭惈鍙戠敓鍚堝苟鍚庣殑鍗曞厓鏍�
     */
    function getCellsByMoveBorder( cell, table, isContainMergeCell ) {

      if( !table ) {
        table = domUtils.findParentByTagName( cell, 'table' );
      }

      if( !table ) {
        return null;
      }

      //鑾峰彇鍒拌鍗曞厓鏍兼墍鍦ㄨ鐨勫簭鍒楀彿
      var index = domUtils.getNodeIndex( cell ),
        temp = cell,
        rows = table.rows,
        colIndex = 0;

      while( temp ) {
        //鑾峰彇鍒板綋鍓嶅崟鍏冩牸鍦ㄦ湭鍙戠敓鍗曞厓鏍煎悎骞舵椂鐨勫簭鍒�
        if( temp.nodeType === 1 ) {
          colIndex += (temp.colSpan || 1);
        }
        temp = temp.previousSibling;
      }

      temp = null;

      //璁板綍鎯冲叧鐨勫崟鍏冩牸
      var borderCells = [];

      utils.each(rows, function( tabRow ){

        var cells = tabRow.cells,
          currIndex = 0;

        utils.each( cells, function( tabCell ){

          currIndex += (tabCell.colSpan || 1);

          if( currIndex === colIndex ) {

            borderCells.push({
              left: tabCell,
              right: tabCell.nextSibling || null
            });

            return false;

          } else if( currIndex > colIndex ) {

            if( isContainMergeCell ) {
              borderCells.push({
                left: tabCell
              });
            }

            return false;
          }


        } );

      });

      return borderCells;

    }


    /**
     * 閫氳繃缁欏畾鐨勫崟鍏冩牸闆嗗悎鑾峰彇鏈€灏忕殑鍗曞厓鏍紈idth
     */
    function getMinWidthByTableCells( cells ) {

      var minWidth = Number.MAX_VALUE;

      for( var i = 0, curCell; curCell = cells[ i ] ; i++ ) {

        minWidth = Math.min( minWidth, curCell.width || getTableCellWidth( curCell ) );

      }

      return minWidth;

    }

    function correctChangeValue( changeValue, relatedCell, cells ) {

      //涓哄崟鍏冩牸鐨刾aading棰勭暀绌洪棿
      changeValue -= getTabcellSpace();

      if( changeValue < 0 ) {
        return 0;
      }

      changeValue -= getTableCellWidth( relatedCell );

      //纭畾鏂瑰悜
      var direction = changeValue < 0 ? 'left':'right';

      changeValue = Math.abs(changeValue);

      //鍙叧蹇冮潪鏈€鍚庝竴涓崟鍏冩牸灏卞彲浠�
      utils.each( cells, function( cellGroup ){

        var curCell = cellGroup[direction];

        //涓哄崟鍏冩牸淇濈暀鏈€灏忕┖闂�
        if( curCell ) {
          changeValue = Math.min( changeValue, getTableCellWidth( curCell )-cellMinWidth );
        }


      } );


      //淇瓒婄晫
      changeValue = changeValue < 0 ? 0 : changeValue;

      return direction === 'left' ? -changeValue : changeValue;

    }

    function getTableCellWidth( cell ) {

      var width = 0,
        //鍋忕Щ绾犳閲�
        offset = 0,
        width = cell.offsetWidth - getTabcellSpace();

      //鏈€鍚庝竴涓妭鐐圭籂姝ｄ竴涓�
      if( !cell.nextSibling ) {

        width -= getTableCellOffset( cell );

      }

      width = width < 0 ? 0 : width;

      try {
        cell.width = width;
      } catch(e) {
      }

      return width;

    }

    /**
     * 鑾峰彇鍗曞厓鏍兼墍鍦ㄨ〃鏍肩殑鏈€鏈崟鍏冩牸鐨勫亸绉婚噺
     */
    function getTableCellOffset( cell ) {

      tab = domUtils.findParentByTagName( cell, "table", false);

      if( tab.offsetVal === undefined ) {

        var prev = cell.previousSibling;

        if( prev ) {

          //鏈€鍚庝竴涓崟鍏冩牸鍜屽墠涓€涓崟鍏冩牸鐨剋idth diff缁撴灉 濡傛灉鎭板ソ涓轰竴涓猙order width锛� 鍒欐潯浠舵垚绔�
          tab.offsetVal = cell.offsetWidth - prev.offsetWidth === UT.borderWidth ? UT.borderWidth : 0;

        } else {
          tab.offsetVal = 0;
        }

      }

      return tab.offsetVal;

    }

    function getTabcellSpace() {

      if( UT.tabcellSpace === undefined ) {

        var cell = null,
          tab = me.document.createElement("table"),
          tbody = me.document.createElement("tbody"),
          trow = me.document.createElement("tr"),
          tabcell = me.document.createElement("td"),
          mirror = null;

        tabcell.style.cssText = 'border: 0;';
        tabcell.width = 1;

        trow.appendChild( tabcell );
        trow.appendChild( mirror = tabcell.cloneNode( false ) );

        tbody.appendChild( trow );

        tab.appendChild( tbody );

        tab.style.cssText = "visibility: hidden;";

        me.body.appendChild( tab );

        UT.paddingSpace = tabcell.offsetWidth - 1;

        var tmpTabWidth = tab.offsetWidth;

        tabcell.style.cssText = '';
        mirror.style.cssText = '';

        UT.borderWidth = ( tab.offsetWidth - tmpTabWidth ) / 3;

        UT.tabcellSpace = UT.paddingSpace + UT.borderWidth;

        me.body.removeChild( tab );

      }

      getTabcellSpace = function(){ return UT.tabcellSpace; };

      return UT.tabcellSpace;

    }

    function getDragLine(editor, doc) {
      if (mousedown)return;
      dragLine = editor.document.createElement("div");
      domUtils.setAttributes(dragLine, {
        id:"ue_tableDragLine",
        unselectable:'on',
        contenteditable:false,
        'onresizestart':'return false',
        'ondragstart':'return false',
        'onselectstart':'return false',
        style:"background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"
      });
      editor.body.appendChild(dragLine);
    }

    function hideDragLine(editor) {
      if (mousedown)return;
      var line;
      while (line = editor.document.getElementById('ue_tableDragLine')) {
        domUtils.remove(line)
      }
    }

    /**
     * 渚濇嵁state锛坴|h锛夊湪cell浣嶇疆鏄剧ず妯嚎
     * @param state
     * @param cell
     */
    function showDragLineAt(state, cell) {
      if (!cell) return;
      var table = domUtils.findParentByTagName(cell, "table"),
        caption = table.getElementsByTagName('caption'),
        width = table.offsetWidth,
        height = table.offsetHeight - (caption.length > 0 ? caption[0].offsetHeight : 0),
        tablePos = domUtils.getXY(table),
        cellPos = domUtils.getXY(cell), css;
      switch (state) {
        case "h":
          css = 'height:' + height + 'px;top:' + (tablePos.y + (caption.length > 0 ? caption[0].offsetHeight : 0)) + 'px;left:' + (cellPos.x + cell.offsetWidth);
          dragLine.style.cssText = css + 'px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)';
          break;
        case "v":
          css = 'width:' + width + 'px;left:' + tablePos.x + 'px;top:' + (cellPos.y + cell.offsetHeight );
          //蹇呴』鍔犱笂border:0鍜宑olor:blue锛屽惁鍒欎綆鐗坕e涓嶆敮鎸佽儗鏅壊鏄剧ず
          dragLine.style.cssText = css + 'px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)';
          break;
        default:
      }
    }

    /**
     * 褰撹〃鏍艰竟妗嗛鑹蹭负鐧借壊鏃惰缃负铏氱嚎,true涓烘坊鍔犺櫄绾�
     * @param editor
     * @param flag
     */
    function switchBorderColor(editor, flag) {
      var tableArr = domUtils.getElementsByTagName(editor.body, "table"), color;
      for (var i = 0, node; node = tableArr[i++];) {
        var td = domUtils.getElementsByTagName(node, "td");
        if (td[0]) {
          if (flag) {
            color = (td[0].style.borderColor).replace(/\s/g, "");
            if (/(#ffffff)|(rgb\(255,255,255\))/ig.test(color))
              domUtils.addClass(node, "noBorderTable")
          } else {
            domUtils.removeClasses(node, "noBorderTable")
          }
        }

      }
    }

    function getTableWidth(editor, needIEHack, defaultValue) {
      var body = editor.body;
      return body.offsetWidth - (needIEHack ? parseInt(domUtils.getComputedStyle(body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (editor.options.offsetWidth || 0);
    }

    /**
     * 鑾峰彇褰撳墠鎷栧姩鐨勫崟鍏冩牸
     */
    function getTargetTd(editor, evt) {

      var target = domUtils.findParentByTagName(evt.target || evt.srcElement, ["td", "th"], true),
        dir = null;

      if( !target ) {
        return null;
      }

      dir = getRelation( target, mouseCoords( evt ) );

      //濡傛灉鏈夊墠涓€涓妭鐐癸紝 闇€瑕佸仛涓€涓慨姝ｏ紝 鍚﹀垯鍙兘浼氬緱鍒颁竴涓敊璇殑td

      if( !target ) {
        return null;
      }

      if( dir === 'h1' && target.previousSibling ) {

        var position = domUtils.getXY( target),
          cellWidth = target.offsetWidth;

        if( Math.abs( position.x + cellWidth - evt.clientX ) > cellWidth / 3 ) {
          target = target.previousSibling;
        }

      } else if( dir === 'v1' && target.parentNode.previousSibling ) {

        var position = domUtils.getXY( target),
          cellHeight = target.offsetHeight;

        if( Math.abs( position.y + cellHeight - evt.clientY ) > cellHeight / 3 ) {
          target = target.parentNode.previousSibling.firstChild;
        }

      }


      //鎺掗櫎浜嗛潪td鍐呴儴浠ュ強鐢ㄤ簬浠ｇ爜楂樹寒閮ㄥ垎鐨則d
      return target && !(editor.fireEvent("excludetable", target) === true) ? target : null;
    }

  };


// plugins/table.sort.js
  /**
   * Created with JetBrains PhpStorm.
   * User: Jinqn
   * Date: 13-10-12
   * Time: 涓婂崍10:20
   * To change this template use File | Settings | File Templates.
   */

  UE.UETable.prototype.sortTable = function (sortByCellIndex, compareFn) {
    var table = this.table,
      rows = table.rows,
      trArray = [],
      flag = rows[0].cells[0].tagName === "TH",
      lastRowIndex = 0;
    if(this.selectedTds.length){
      var range = this.cellsRange,
        len = range.endRowIndex + 1;
      for (var i = range.beginRowIndex; i < len; i++) {
        trArray[i] = rows[i];
      }
      trArray.splice(0,range.beginRowIndex);
      lastRowIndex = (range.endRowIndex +1) === this.rowsNum ? 0 : range.endRowIndex +1;
    }else{
      for (var i = 0,len = rows.length; i < len; i++) {
        trArray[i] = rows[i];
      }
    }

    var Fn = {
      'reversecurrent': function(td1,td2){
        return 1;
      },
      'orderbyasc': function(td1,td2){
        var value1 = td1.innerText||td1.textContent,
          value2 = td2.innerText||td2.textContent;
        return value1.localeCompare(value2);
      },
      'reversebyasc': function(td1,td2){
        var value1 = td1.innerHTML,
          value2 = td2.innerHTML;
        return value2.localeCompare(value1);
      },
      'orderbynum': function(td1,td2){
        var value1 = td1[browser.ie ? 'innerText':'textContent'].match(/\d+/),
          value2 = td2[browser.ie ? 'innerText':'textContent'].match(/\d+/);
        if(value1) value1 = +value1[0];
        if(value2) value2 = +value2[0];
        return (value1||0) - (value2||0);
      },
      'reversebynum': function(td1,td2){
        var value1 = td1[browser.ie ? 'innerText':'textContent'].match(/\d+/),
          value2 = td2[browser.ie ? 'innerText':'textContent'].match(/\d+/);
        if(value1) value1 = +value1[0];
        if(value2) value2 = +value2[0];
        return (value2||0) - (value1||0);
      }
    };

    //瀵硅〃鏍艰缃帓搴忕殑鏍囪data-sort-type
    table.setAttribute('data-sort-type', compareFn && typeof compareFn === "string" && Fn[compareFn] ? compareFn:'');

    //th涓嶅弬涓庢帓搴�
    flag && trArray.splice(0, 1);
    trArray = utils.sort(trArray,function (tr1, tr2) {
      var result;
      if (compareFn && typeof compareFn === "function") {
        result = compareFn.call(this, tr1.cells[sortByCellIndex], tr2.cells[sortByCellIndex]);
      } else if (compareFn && typeof compareFn === "number") {
        result = 1;
      } else if (compareFn && typeof compareFn === "string" && Fn[compareFn]) {
        result = Fn[compareFn].call(this, tr1.cells[sortByCellIndex], tr2.cells[sortByCellIndex]);
      } else {
        result = Fn['orderbyasc'].call(this, tr1.cells[sortByCellIndex], tr2.cells[sortByCellIndex]);
      }
      return result;
    });
    var fragment = table.ownerDocument.createDocumentFragment();
    for (var j = 0, len = trArray.length; j < len; j++) {
      fragment.appendChild(trArray[j]);
    }
    var tbody = table.getElementsByTagName("tbody")[0];
    if(!lastRowIndex){
      tbody.appendChild(fragment);
    }else{
      tbody.insertBefore(fragment,rows[lastRowIndex- range.endRowIndex + range.beginRowIndex - 1])
    }
  };

  UE.plugins['tablesort'] = function () {
    var me = this,
      UT = UE.UETable,
      getUETable = function (tdOrTable) {
        return UT.getUETable(tdOrTable);
      },
      getTableItemsByRange = function (editor) {
        return UT.getTableItemsByRange(editor);
      };


    me.ready(function () {
      //娣诲姞琛ㄦ牸鍙帓搴忕殑鏍峰紡
      utils.cssRule('tablesort',
        'table.sortEnabled tr.firstRow th,table.sortEnabled tr.firstRow td{padding-right:20px;background-repeat: no-repeat;background-position: center right;' +
        '   background-image:url(' + me.options.themePath + me.options.theme + '/images/sortable.png);}',
        me.document);

      //鍋氬崟鍏冩牸鍚堝苟鎿嶄綔鏃�,娓呴櫎鍙帓搴忔爣璇�
      me.addListener("afterexeccommand", function (type, cmd) {
        if( cmd == 'mergeright' || cmd == 'mergedown' || cmd == 'mergecells') {
          this.execCommand('disablesort');
        }
      });
    });



    //琛ㄦ牸鎺掑簭
    UE.commands['sorttable'] = {
      queryCommandState: function () {
        var me = this,
          tableItems = getTableItemsByRange(me);
        if (!tableItems.cell) return -1;
        var table = tableItems.table,
          cells = table.getElementsByTagName("td");
        for (var i = 0, cell; cell = cells[i++];) {
          if (cell.rowSpan != 1 || cell.colSpan != 1) return -1;
        }
        return 0;
      },
      execCommand: function (cmd, fn) {
        var me = this,
          range = me.selection.getRange(),
          bk = range.createBookmark(true),
          tableItems = getTableItemsByRange(me),
          cell = tableItems.cell,
          ut = getUETable(tableItems.table),
          cellInfo = ut.getCellInfo(cell);
        ut.sortTable(cellInfo.cellIndex, fn);
        range.moveToBookmark(bk);
        try{
          range.select();
        }catch(e){}
      }
    };

    //璁剧疆琛ㄦ牸鍙帓搴�,娓呴櫎琛ㄦ牸鍙帓搴�
    UE.commands["enablesort"] = UE.commands["disablesort"] = {
      queryCommandState: function (cmd) {
        var table = getTableItemsByRange(this).table;
        if(table && cmd=='enablesort') {
          var cells = domUtils.getElementsByTagName(table, 'th td');
          for(var i = 0; i<cells.length; i++) {
            if(cells[i].getAttribute('colspan')>1 || cells[i].getAttribute('rowspan')>1) return -1;
          }
        }

        return !table ? -1: cmd=='enablesort' ^ table.getAttribute('data-sort')!='sortEnabled' ? -1:0;
      },
      execCommand: function (cmd) {
        var table = getTableItemsByRange(this).table;
        table.setAttribute("data-sort", cmd == "enablesort" ? "sortEnabled" : "sortDisabled");
        cmd == "enablesort" ? domUtils.addClass(table,"sortEnabled"):domUtils.removeClasses(table,"sortEnabled");
      }
    };
  };


// plugins/contextmenu.js
///import core
///commands 鍙抽敭鑿滃崟
///commandsName  ContextMenu
///commandsTitle  鍙抽敭鑿滃崟
  /**
   * 鍙抽敭鑿滃崟
   * @function
   * @name baidu.editor.plugins.contextmenu
   * @author zhanyi
   */

  UE.plugins['contextmenu'] = function () {
    var me = this;
    me.setOpt('enableContextMenu',true);
    if(me.getOpt('enableContextMenu') === false){
      return;
    }
    var lang = me.getLang( "contextMenu" ),
      menu,
      items = me.options.contextMenu || [
          {label:lang['selectall'], cmdName:'selectall'},
          {
            label:lang.cleardoc,
            cmdName:'cleardoc',
            exec:function () {
              if ( confirm( lang.confirmclear ) ) {
                this.execCommand( 'cleardoc' );
              }
            }
          },
          '-',
          {
            label:lang.unlink,
            cmdName:'unlink'
          },
          '-',
          {
            group:lang.paragraph,
            icon:'justifyjustify',
            subMenu:[
              {
                label:lang.justifyleft,
                cmdName:'justify',
                value:'left'
              },
              {
                label:lang.justifyright,
                cmdName:'justify',
                value:'right'
              },
              {
                label:lang.justifycenter,
                cmdName:'justify',
                value:'center'
              },
              {
                label:lang.justifyjustify,
                cmdName:'justify',
                value:'justify'
              }
            ]
          },
          '-',
          {
            group:lang.table,
            icon:'table',
            subMenu:[
              {
                label:lang.inserttable,
                cmdName:'inserttable'
              },
              {
                label:lang.deletetable,
                cmdName:'deletetable'
              },
              '-',
              {
                label:lang.deleterow,
                cmdName:'deleterow'
              },
              {
                label:lang.deletecol,
                cmdName:'deletecol'
              },
              {
                label:lang.insertcol,
                cmdName:'insertcol'
              },
              {
                label:lang.insertcolnext,
                cmdName:'insertcolnext'
              },
              {
                label:lang.insertrow,
                cmdName:'insertrow'
              },
              {
                label:lang.insertrownext,
                cmdName:'insertrownext'
              },
              '-',
              {
                label:lang.insertcaption,
                cmdName:'insertcaption'
              },
              {
                label:lang.deletecaption,
                cmdName:'deletecaption'
              },
              {
                label:lang.inserttitle,
                cmdName:'inserttitle'
              },
              {
                label:lang.deletetitle,
                cmdName:'deletetitle'
              },
              {
                label:lang.inserttitlecol,
                cmdName:'inserttitlecol'
              },
              {
                label:lang.deletetitlecol,
                cmdName:'deletetitlecol'
              },
              '-',
              {
                label:lang.mergecells,
                cmdName:'mergecells'
              },
              {
                label:lang.mergeright,
                cmdName:'mergeright'
              },
              {
                label:lang.mergedown,
                cmdName:'mergedown'
              },
              '-',
              {
                label:lang.splittorows,
                cmdName:'splittorows'
              },
              {
                label:lang.splittocols,
                cmdName:'splittocols'
              },
              {
                label:lang.splittocells,
                cmdName:'splittocells'
              },
              '-',
              {
                label:lang.averageDiseRow,
                cmdName:'averagedistributerow'
              },
              {
                label:lang.averageDisCol,
                cmdName:'averagedistributecol'
              },
              '-',
              {
                label:lang.edittd,
                cmdName:'edittd',
                exec:function () {
                  if ( UE.ui['edittd'] ) {
                    new UE.ui['edittd']( this );
                  }
                  this.getDialog('edittd').open();
                }
              },
              {
                label:lang.edittable,
                cmdName:'edittable',
                exec:function () {
                  if ( UE.ui['edittable'] ) {
                    new UE.ui['edittable']( this );
                  }
                  this.getDialog('edittable').open();
                }
              },
              {
                label:lang.setbordervisible,
                cmdName:'setbordervisible'
              }
            ]
          },
          {
            group:lang.tablesort,
            icon:'tablesort',
            subMenu:[
              {
                label:lang.enablesort,
                cmdName:'enablesort'
              },
              {
                label:lang.disablesort,
                cmdName:'disablesort'
              },
              '-',
              {
                label:lang.reversecurrent,
                cmdName:'sorttable',
                value:'reversecurrent'
              },
              {
                label:lang.orderbyasc,
                cmdName:'sorttable',
                value:'orderbyasc'
              },
              {
                label:lang.reversebyasc,
                cmdName:'sorttable',
                value:'reversebyasc'
              },
              {
                label:lang.orderbynum,
                cmdName:'sorttable',
                value:'orderbynum'
              },
              {
                label:lang.reversebynum,
                cmdName:'sorttable',
                value:'reversebynum'
              }
            ]
          },
          {
            group:lang.borderbk,
            icon:'borderBack',
            subMenu:[
              {
                label:lang.setcolor,
                cmdName:"interlacetable",
                exec:function(){
                  this.execCommand("interlacetable");
                }
              },
              {
                label:lang.unsetcolor,
                cmdName:"uninterlacetable",
                exec:function(){
                  this.execCommand("uninterlacetable");
                }
              },
              {
                label:lang.setbackground,
                cmdName:"settablebackground",
                exec:function(){
                  this.execCommand("settablebackground",{repeat:true,colorList:["#bbb","#ccc"]});
                }
              },
              {
                label:lang.unsetbackground,
                cmdName:"cleartablebackground",
                exec:function(){
                  this.execCommand("cleartablebackground");
                }
              },
              {
                label:lang.redandblue,
                cmdName:"settablebackground",
                exec:function(){
                  this.execCommand("settablebackground",{repeat:true,colorList:["red","blue"]});
                }
              },
              {
                label:lang.threecolorgradient,
                cmdName:"settablebackground",
                exec:function(){
                  this.execCommand("settablebackground",{repeat:true,colorList:["#aaa","#bbb","#ccc"]});
                }
              }
            ]
          },
          {
            group:lang.aligntd,
            icon:'aligntd',
            subMenu:[
              {
                cmdName:'cellalignment',
                value:{align:'left',vAlign:'top'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'center',vAlign:'top'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'right',vAlign:'top'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'left',vAlign:'middle'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'center',vAlign:'middle'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'right',vAlign:'middle'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'left',vAlign:'bottom'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'center',vAlign:'bottom'}
              },
              {
                cmdName:'cellalignment',
                value:{align:'right',vAlign:'bottom'}
              }
            ]
          },
          {
            group:lang.aligntable,
            icon:'aligntable',
            subMenu:[
              {
                cmdName:'tablealignment',
                className: 'left',
                label:lang.tableleft,
                value:"left"
              },
              {
                cmdName:'tablealignment',
                className: 'center',
                label:lang.tablecenter,
                value:"center"
              },
              {
                cmdName:'tablealignment',
                className: 'right',
                label:lang.tableright,
                value:"right"
              }
            ]
          },
          '-',
          {
            label:lang.insertparagraphbefore,
            cmdName:'insertparagraph',
            value:true
          },
          {
            label:lang.insertparagraphafter,
            cmdName:'insertparagraph'
          },
          {
            label:lang['copy'],
            cmdName:'copy'
          },
          {
            label:lang['paste'],
            cmdName:'paste'
          }
        ];
    if ( !items.length ) {
      return;
    }
    var uiUtils = UE.ui.uiUtils;

    me.addListener( 'contextmenu', function ( type, evt ) {

      var offset = uiUtils.getViewportOffsetByEvent( evt );
      me.fireEvent( 'beforeselectionchange' );
      if ( menu ) {
        menu.destroy();
      }
      for ( var i = 0, ti, contextItems = []; ti = items[i]; i++ ) {
        var last;
        (function ( item ) {
          if ( item == '-' ) {
            if ( (last = contextItems[contextItems.length - 1 ] ) && last !== '-' ) {
              contextItems.push( '-' );
            }
          } else if ( item.hasOwnProperty( "group" ) ) {
            for ( var j = 0, cj, subMenu = []; cj = item.subMenu[j]; j++ ) {
              (function ( subItem ) {
                if ( subItem == '-' ) {
                  if ( (last = subMenu[subMenu.length - 1 ] ) && last !== '-' ) {
                    subMenu.push( '-' );
                  }else{
                    subMenu.splice(subMenu.length-1);
                  }
                } else {
                  if ( (me.commands[subItem.cmdName] || UE.commands[subItem.cmdName] || subItem.query) &&
                    (subItem.query ? subItem.query() : me.queryCommandState( subItem.cmdName )) > -1 ) {
                    subMenu.push( {
                      'label':subItem.label || me.getLang( "contextMenu." + subItem.cmdName + (subItem.value || '') )||"",
                      'className':'edui-for-' +subItem.cmdName + ( subItem.className ? ( ' edui-for-' + subItem.cmdName + '-' + subItem.className ) : '' ),
                      onclick:subItem.exec ? function () {
                        subItem.exec.call( me );
                      } : function () {
                        me.execCommand( subItem.cmdName, subItem.value );
                      }
                    } );
                  }
                }
              })( cj );
            }
            if ( subMenu.length ) {
              function getLabel(){
                switch (item.icon){
                  case "table":
                    return me.getLang( "contextMenu.table" );
                  case "justifyjustify":
                    return me.getLang( "contextMenu.paragraph" );
                  case "aligntd":
                    return me.getLang("contextMenu.aligntd");
                  case "aligntable":
                    return me.getLang("contextMenu.aligntable");
                  case "tablesort":
                    return lang.tablesort;
                  case "borderBack":
                    return lang.borderbk;
                  default :
                    return '';
                }
              }
              contextItems.push( {
                //todo 淇鎴愯嚜鍔ㄨ幏鍙栨柟寮�
                'label':getLabel(),
                className:'edui-for-' + item.icon,
                'subMenu':{
                  items:subMenu,
                  editor:me
                }
              } );
            }

          } else {
            //鏈夊彲鑳絚ommmand娌℃湁鍔犺浇鍙抽敭涓嶈兘鍑烘潵锛屾垨鑰呮病鏈塩ommand涔熸兂鑳藉睍绀哄嚭鏉ユ坊鍔爍uery鏂规硶
            if ( (me.commands[item.cmdName] || UE.commands[item.cmdName] || item.query) &&
              (item.query ? item.query.call(me) : me.queryCommandState( item.cmdName )) > -1 ) {

              contextItems.push( {
                'label':item.label || me.getLang( "contextMenu." + item.cmdName ),
                className:'edui-for-' + (item.icon ? item.icon : item.cmdName + (item.value || '')),
                onclick:item.exec ? function () {
                  item.exec.call( me );
                } : function () {
                  me.execCommand( item.cmdName, item.value );
                }
              } );
            }

          }

        })( ti );
      }
      if ( contextItems[contextItems.length - 1] == '-' ) {
        contextItems.pop();
      }

      menu = new UE.ui.Menu( {
        items:contextItems,
        className:"edui-contextmenu",
        editor:me
      } );
      menu.render();
      menu.showAt( offset );

      me.fireEvent("aftershowcontextmenu",menu);

      domUtils.preventDefault( evt );
      if ( browser.ie ) {
        var ieRange;
        try {
          ieRange = me.selection.getNative().createRange();
        } catch ( e ) {
          return;
        }
        if ( ieRange.item ) {
          var range = new dom.Range( me.document );
          range.selectNode( ieRange.item( 0 ) ).select( true, true );
        }
      }
    });

    // 娣诲姞澶嶅埗鐨刦lash鎸夐挳
    me.addListener('aftershowcontextmenu', function(type, menu) {
      if (me.zeroclipboard) {
        var items = menu.items;
        for (var key in items) {
          if (items[key].className == 'edui-for-copy') {
            me.zeroclipboard.clip(items[key].getDom());
          }
        }
      }
    });

  };


// plugins/shortcutmenu.js
///import core
///commands       寮瑰嚭鑿滃崟
// commandsName  popupmenu
///commandsTitle  寮瑰嚭鑿滃崟
  /**
   * 寮瑰嚭鑿滃崟
   * @function
   * @name baidu.editor.plugins.popupmenu
   * @author xuheng
   */

  UE.plugins['shortcutmenu'] = function () {
    var me = this,
      menu,
      items = me.options.shortcutMenu || [];

    if (!items.length) {
      return;
    }

    me.addListener ('contextmenu mouseup' , function (type , e) {
      var me = this,
        customEvt = {
          type : type ,
          target : e.target || e.srcElement ,
          screenX : e.screenX ,
          screenY : e.screenY ,
          clientX : e.clientX ,
          clientY : e.clientY
        };

      setTimeout (function () {
        var rng = me.selection.getRange ();
        if (rng.collapsed === false || type == "contextmenu") {

          if (!menu) {
            menu = new baidu.editor.ui.ShortCutMenu ({
              editor : me ,
              items : items ,
              theme : me.options.theme ,
              className : 'edui-shortcutmenu'
            });

            menu.render ();
            me.fireEvent ("afterrendershortcutmenu" , menu);
          }

          menu.show (customEvt , !!UE.plugins['contextmenu']);
        }
      });

      if (type == 'contextmenu') {
        domUtils.preventDefault (e);
        if (browser.ie9below) {
          var ieRange;
          try {
            ieRange = me.selection.getNative().createRange();
          } catch (e) {
            return;
          }
          if (ieRange.item) {
            var range = new dom.Range (me.document);
            range.selectNode (ieRange.item (0)).select (true , true);

          }
        }
      }
    });

    me.addListener ('keydown' , function (type) {
      if (type == "keydown") {
        menu && !menu.isHidden && menu.hide ();
      }

    });

  };




// plugins/basestyle.js
  /**
   * B銆両銆乻ub銆乻uper鍛戒护鏀寔
   * @file
   * @since 1.2.6.1
   */

  UE.plugins['basestyle'] = function(){

    /**
     * 瀛椾綋鍔犵矖
     * @command bold
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @remind 瀵瑰凡鍔犵矖鐨勬枃鏈唴瀹规墽琛岃鍛戒护锛� 灏嗗彇娑堝姞绮�
     * @method execCommand
     * @example
     * ```javascript
     * //editor鏄紪杈戝櫒瀹炰緥
     * //瀵瑰綋鍓嶉€変腑鐨勬枃鏈唴瀹规墽琛屽姞绮楁搷浣�
     * //绗竴娆℃墽琛岋紝 鏂囨湰鍐呭鍔犵矖
     * editor.execCommand( 'bold' );
     *
     * //绗簩娆℃墽琛岋紝 鏂囨湰鍐呭鍙栨秷鍔犵矖
     * editor.execCommand( 'bold' );
     * ```
     */


    /**
     * 瀛椾綋鍊炬枩
     * @command italic
     * @method execCommand
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @remind 瀵瑰凡鍊炬枩鐨勬枃鏈唴瀹规墽琛岃鍛戒护锛� 灏嗗彇娑堝€炬枩
     * @example
     * ```javascript
     * //editor鏄紪杈戝櫒瀹炰緥
     * //瀵瑰綋鍓嶉€変腑鐨勬枃鏈唴瀹规墽琛屾枩浣撴搷浣�
     * //绗竴娆℃搷浣滐紝 鏂囨湰鍐呭灏嗗彉鎴愭枩浣�
     * editor.execCommand( 'italic' );
     *
     * //鍐嶆瀵瑰悓涓€鏂囨湰鍐呭鎵ц锛� 鍒欐枃鏈唴瀹瑰皢鎭㈠姝ｅ父
     * editor.execCommand( 'italic' );
     * ```
     */

    /**
     * 涓嬫爣鏂囨湰锛屼笌鈥渟uperscript鈥濆懡浠や簰鏂�
     * @command subscript
     * @method execCommand
     * @remind  鎶婇€変腑鐨勬枃鏈唴瀹瑰垏鎹㈡垚涓嬫爣鏂囨湰锛� 濡傛灉褰撳墠閫変腑鐨勬枃鏈凡缁忔槸涓嬫爣锛� 鍒欒鎿嶄綔浼氭妸鏂囨湰鍐呭杩樺師鎴愭甯告枃鏈�
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @example
     * ```javascript
     * //editor鏄紪杈戝櫒瀹炰緥
     * //瀵瑰綋鍓嶉€変腑鐨勬枃鏈唴瀹规墽琛屼笅鏍囨搷浣�
     * //绗竴娆℃搷浣滐紝 鏂囨湰鍐呭灏嗗彉鎴愪笅鏍囨枃鏈�
     * editor.execCommand( 'subscript' );
     *
     * //鍐嶆瀵瑰悓涓€鏂囨湰鍐呭鎵ц锛� 鍒欐枃鏈唴瀹瑰皢鎭㈠姝ｅ父
     * editor.execCommand( 'subscript' );
     * ```
     */

    /**
     * 涓婃爣鏂囨湰锛屼笌鈥渟ubscript鈥濆懡浠や簰鏂�
     * @command superscript
     * @method execCommand
     * @remind 鎶婇€変腑鐨勬枃鏈唴瀹瑰垏鎹㈡垚涓婃爣鏂囨湰锛� 濡傛灉褰撳墠閫変腑鐨勬枃鏈凡缁忔槸涓婃爣锛� 鍒欒鎿嶄綔浼氭妸鏂囨湰鍐呭杩樺師鎴愭甯告枃鏈�
     * @param { String } cmd 鍛戒护瀛楃涓�
     * @example
     * ```javascript
     * //editor鏄紪杈戝櫒瀹炰緥
     * //瀵瑰綋鍓嶉€変腑鐨勬枃鏈唴瀹规墽琛屼笂鏍囨搷浣�
     * //绗竴娆℃搷浣滐紝 鏂囨湰鍐呭灏嗗彉鎴愪笂鏍囨枃鏈�
     * editor.execCommand( 'superscript' );
     *
     * //鍐嶆瀵瑰悓涓€鏂囨湰鍐呭鎵ц锛� 鍒欐枃鏈唴瀹瑰皢鎭㈠姝ｅ父
     * editor.execCommand( 'superscript' );
     * ```
     */
    var basestyles = {
        'bold':['strong','b'],
        'italic':['em','i'],
        'subscript':['sub'],
        'superscript':['sup']
      },
      getObj = function(editor,tagNames){
        return domUtils.filterNodeList(editor.selection.getStartElementPath(),tagNames);
      },
      me = this;
    //娣诲姞蹇嵎閿�
    me.addshortcutkey({
      "Bold" : "ctrl+66",//^B
      "Italic" : "ctrl+73", //^I
      "Underline" : "ctrl+85"//^U
    });
    me.addInputRule(function(root){
      utils.each(root.getNodesByTagName('b i'),function(node){
        switch (node.tagName){
          case 'b':
            node.tagName = 'strong';
            break;
          case 'i':
            node.tagName = 'em';
        }
      });
    });
    for ( var style in basestyles ) {
      (function( cmd, tagNames ) {
        me.commands[cmd] = {
          execCommand : function( cmdName ) {
            var range = me.selection.getRange(),obj = getObj(this,tagNames);
            if ( range.collapsed ) {
              if ( obj ) {
                var tmpText =  me.document.createTextNode('');
                range.insertNode( tmpText ).removeInlineStyle( tagNames );
                range.setStartBefore(tmpText);
                domUtils.remove(tmpText);
              } else {
                var tmpNode = range.document.createElement( tagNames[0] );
                if(cmdName == 'superscript' || cmdName == 'subscript'){
                  tmpText = me.document.createTextNode('');
                  range.insertNode(tmpText)
                    .removeInlineStyle(['sub','sup'])
                    .setStartBefore(tmpText)
                    .collapse(true);
                }
                range.insertNode( tmpNode ).setStart( tmpNode, 0 );
              }
              range.collapse( true );
            } else {
              if(cmdName == 'superscript' || cmdName == 'subscript'){
                if(!obj || obj.tagName.toLowerCase() != cmdName){
                  range.removeInlineStyle(['sub','sup']);
                }
              }
              obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] );
            }
            range.select();
          },
          queryCommandState : function() {
            return getObj(this,tagNames) ? 1 : 0;
          }
        };
      })( style, basestyles[style] );
    }
  };



// plugins/elementpath.js
  /**
   * 閫夊彇璺緞鍛戒护
   * @file
   */
  UE.plugins['elementpath'] = function(){
    var currentLevel,
      tagNames,
      me = this;
    me.setOpt('elementPathEnabled',true);
    if(!me.options.elementPathEnabled){
      return;
    }
    me.commands['elementpath'] = {
      execCommand : function( cmdName, level ) {
        var start = tagNames[level],
          range = me.selection.getRange();
        currentLevel = level*1;
        range.selectNode(start).select();
      },
      queryCommandValue : function() {
        //浜х敓涓€涓壇鏈紝涓嶈兘淇敼鍘熸潵鐨剆tartElementPath;
        var parents = [].concat(this.selection.getStartElementPath()).reverse(),
          names = [];
        tagNames = parents;
        for(var i=0,ci;ci=parents[i];i++){
          if(ci.nodeType == 3) {
            continue;
          }
          var name = ci.tagName.toLowerCase();
          if(name == 'img' && ci.getAttribute('anchorname')){
            name = 'anchor';
          }
          names[i] = name;
          if(currentLevel == i){
            currentLevel = -1;
            break;
          }
        }
        return names;
      }
    };
  };



// plugins/formatmatch.js
  /**
   * 鏍煎紡鍒凤紝鍙牸寮廼nline鐨�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鏍煎紡鍒�
   * @command formatmatch
   * @method execCommand
   * @remind 璇ユ搷浣滀笉鑳藉鍒舵钀芥牸寮�
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * //editor鏄紪杈戝櫒瀹炰緥
   * //鑾峰彇鏍煎紡鍒�
   * editor.execCommand( 'formatmatch' );
   * ```
   */
  UE.plugins['formatmatch'] = function(){

    var me = this,
      list = [],img,
      flag = 0;

    me.addListener('reset',function(){
      list = [];
      flag = 0;
    });

    function addList(type,evt){

      if(browser.webkit){
        var target = evt.target.tagName == 'IMG' ? evt.target : null;
      }

      function addFormat(range){

        if(text){
          range.selectNode(text);
        }
        return range.applyInlineStyle(list[list.length-1].tagName,null,list);

      }

      me.undoManger && me.undoManger.save();

      var range = me.selection.getRange(),
        imgT = target || range.getClosedNode();
      if(img && imgT && imgT.tagName == 'IMG'){
        //trace:964

        imgT.style.cssText += ';float:' + (img.style.cssFloat || img.style.styleFloat ||'none') + ';display:' + (img.style.display||'inline');

        img = null;
      }else{
        if(!img){
          var collapsed = range.collapsed;
          if(collapsed){
            var text = me.document.createTextNode('match');
            range.insertNode(text).select();


          }
          me.__hasEnterExecCommand = true;
          //涓嶈兘鎶奲lock涓婄殑灞炴€у共鎺�
          //trace:1553
          var removeFormatAttributes = me.options.removeFormatAttributes;
          me.options.removeFormatAttributes = '';
          me.execCommand('removeformat');
          me.options.removeFormatAttributes = removeFormatAttributes;
          me.__hasEnterExecCommand = false;
          //trace:969
          range = me.selection.getRange();
          if(list.length){
            addFormat(range);
          }
          if(text){
            range.setStartBefore(text).collapse(true);

          }
          range.select();
          text && domUtils.remove(text);
        }

      }




      me.undoManger && me.undoManger.save();
      me.removeListener('mouseup',addList);
      flag = 0;
    }

    me.commands['formatmatch'] = {
      execCommand : function( cmdName ) {

        if(flag){
          flag = 0;
          list = [];
          me.removeListener('mouseup',addList);
          return;
        }



        var range = me.selection.getRange();
        img = range.getClosedNode();
        if(!img || img.tagName != 'IMG'){
          range.collapse(true).shrinkBoundary();
          var start = range.startContainer;
          list = domUtils.findParents(start,true,function(node){
            return !domUtils.isBlockElm(node) && node.nodeType == 1;
          });
          //a涓嶈兘鍔犲叆鏍煎紡鍒�, 骞朵笖鍏嬮殕鑺傜偣
          for(var i=0,ci;ci=list[i];i++){
            if(ci.tagName == 'A'){
              list.splice(i,1);
              break;
            }
          }

        }

        me.addListener('mouseup',addList);
        flag = 1;


      },
      queryCommandState : function() {
        return flag;
      },
      notNeedUndo : 1
    };
  };



// plugins/searchreplace.js
///import core
///commands 鏌ユ壘鏇挎崲
///commandsName  SearchReplace
///commandsTitle  鏌ヨ鏇挎崲
///commandsDialog  dialogs\searchreplace
  /**
   * @description 鏌ユ壘鏇挎崲
   * @author zhanyi
   */

  UE.plugin.register('searchreplace',function(){
    var me = this;

    var _blockElm = {'table':1,'tbody':1,'tr':1,'ol':1,'ul':1};

    function findTextInString(textContent,opt,currentIndex){
      var str = opt.searchStr;
      if(opt.dir == -1){
        textContent = textContent.split('').reverse().join('');
        str = str.split('').reverse().join('');
        currentIndex = textContent.length - currentIndex;

      }
      var reg = new RegExp(str,'g' + (opt.casesensitive ? '' : 'i')),match;

      while(match = reg.exec(textContent)){
        if(match.index >= currentIndex){
          return opt.dir == -1 ? textContent.length - match.index - opt.searchStr.length : match.index;
        }
      }
      return  -1
    }
    function findTextBlockElm(node,currentIndex,opt){
      var textContent,index,methodName = opt.all || opt.dir == 1 ? 'getNextDomNode' : 'getPreDomNode';
      if(domUtils.isBody(node)){
        node = node.firstChild;
      }
      var first = 1;
      while(node){
        textContent = node.nodeType == 3 ? node.nodeValue : node[browser.ie ? 'innerText' : 'textContent'];
        index = findTextInString(textContent,opt,currentIndex );
        first = 0;
        if(index!=-1){
          return {
            'node':node,
            'index':index
          }
        }
        node = domUtils[methodName](node);
        while(node && _blockElm[node.nodeName.toLowerCase()]){
          node = domUtils[methodName](node,true);
        }
        if(node){
          currentIndex = opt.dir == -1 ? (node.nodeType == 3 ? node.nodeValue : node[browser.ie ? 'innerText' : 'textContent']).length : 0;
        }

      }
    }
    function findNTextInBlockElm(node,index,str){
      var currentIndex = 0,
        currentNode = node.firstChild,
        currentNodeLength = 0,
        result;
      while(currentNode){
        if(currentNode.nodeType == 3){
          currentNodeLength = currentNode.nodeValue.replace(/(^[\t\r\n]+)|([\t\r\n]+$)/,'').length;
          currentIndex += currentNodeLength;
          if(currentIndex >= index){
            return {
              'node':currentNode,
              'index': currentNodeLength - (currentIndex - index)
            }
          }
        }else if(!dtd.$empty[currentNode.tagName]){
          currentNodeLength = currentNode[browser.ie ? 'innerText' : 'textContent'].replace(/(^[\t\r\n]+)|([\t\r\n]+$)/,'').length
          currentIndex += currentNodeLength;
          if(currentIndex >= index){
            result = findNTextInBlockElm(currentNode,currentNodeLength - (currentIndex - index),str);
            if(result){
              return result;
            }
          }
        }
        currentNode = domUtils.getNextDomNode(currentNode);

      }
    }

    function searchReplace(me,opt){

      var rng = me.selection.getRange(),
        startBlockNode,
        searchStr = opt.searchStr,
        span = me.document.createElement('span');
      span.innerHTML = '$$ueditor_searchreplace_key$$';

      rng.shrinkBoundary(true);

      //鍒ゆ柇鏄笉鏄涓€娆￠€変腑
      if(!rng.collapsed){
        rng.select();
        var rngText = me.selection.getText();
        if(new RegExp('^' + opt.searchStr + '$',(opt.casesensitive ? '' : 'i')).test(rngText)){
          if(opt.replaceStr != undefined){
            replaceText(rng,opt.replaceStr);
            rng.select();
            return true;
          }else{
            rng.collapse(opt.dir == -1)
          }

        }
      }


      rng.insertNode(span);
      rng.enlargeToBlockElm(true);
      startBlockNode = rng.startContainer;
      var currentIndex = startBlockNode[browser.ie ? 'innerText' : 'textContent'].indexOf('$$ueditor_searchreplace_key$$');
      rng.setStartBefore(span);
      domUtils.remove(span);
      var result = findTextBlockElm(startBlockNode,currentIndex,opt);
      if(result){
        var rngStart = findNTextInBlockElm(result.node,result.index,searchStr);
        var rngEnd = findNTextInBlockElm(result.node,result.index + searchStr.length,searchStr);
        rng.setStart(rngStart.node,rngStart.index).setEnd(rngEnd.node,rngEnd.index);

        if(opt.replaceStr !== undefined){
          replaceText(rng,opt.replaceStr)
        }
        rng.select();
        return true;
      }else{
        rng.setCursor()
      }

    }
    function replaceText(rng,str){

      str = me.document.createTextNode(str);
      rng.deleteContents().insertNode(str);

    }
    return {
      commands:{
        'searchreplace':{
          execCommand:function(cmdName,opt){
            utils.extend(opt,{
              all : false,
              casesensitive : false,
              dir : 1
            },true);
            var num = 0;
            if(opt.all){

              var rng = me.selection.getRange(),
                first = me.body.firstChild;
              if(first && first.nodeType == 1){
                rng.setStart(first,0);
                rng.shrinkBoundary(true);
              }else if(first.nodeType == 3){
                rng.setStartBefore(first)
              }
              rng.collapse(true).select(true);
              if(opt.replaceStr !== undefined){
                me.fireEvent('saveScene');
              }
              while(searchReplace(this,opt)){
                num++;
              }
              if(num){
                me.fireEvent('saveScene');
              }
            }else{
              if(opt.replaceStr !== undefined){
                me.fireEvent('saveScene');
              }
              if(searchReplace(this,opt)){
                num++
              }
              if(num){
                me.fireEvent('saveScene');
              }

            }

            return num;
          },
          notNeedUndo:1
        }
      }
    }
  });

// plugins/customstyle.js
  /**
   * 鑷畾涔夋牱寮�
   * @file
   * @since 1.2.6.1
   */

  /**
   * 鏍规嵁config閰嶇疆鏂囦欢閲屸€渃ustomstyle鈥濋€夐」鐨勫€煎鍖归厤鐨勬爣绛炬墽琛屾牱寮忔浛鎹€�
   * @command customstyle
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * editor.execCommand( 'customstyle' );
   * ```
   */
  UE.plugins['customstyle'] = function() {
    var me = this;
    me.setOpt({ 'customstyle':[
      {tag:'h1',name:'tc', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
      {tag:'h1',name:'tl', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;'},
      {tag:'span',name:'im', style:'font-size:16px;font-style:italic;font-weight:bold;line-height:18px;'},
      {tag:'span',name:'hi', style:'font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;'}
    ]});
    me.commands['customstyle'] = {
      execCommand : function(cmdName, obj) {
        var me = this,
          tagName = obj.tag,
          node = domUtils.findParent(me.selection.getStart(), function(node) {
            return node.getAttribute('label');
          }, true),
          range,bk,tmpObj = {};
        for (var p in obj) {
          if(obj[p]!==undefined)
            tmpObj[p] = obj[p];
        }
        delete tmpObj.tag;
        if (node && node.getAttribute('label') == obj.label) {
          range = this.selection.getRange();
          bk = range.createBookmark();
          if (range.collapsed) {
            //trace:1732 鍒犳帀鑷畾涔夋爣绛撅紝瑕佹湁p鏉ュ洖濉珯浣�
            if(dtd.$block[node.tagName]){
              var fillNode = me.document.createElement('p');
              domUtils.moveChild(node, fillNode);
              node.parentNode.insertBefore(fillNode, node);
              domUtils.remove(node);
            }else{
              domUtils.remove(node,true);
            }

          } else {

            var common = domUtils.getCommonAncestor(bk.start, bk.end),
              nodes = domUtils.getElementsByTagName(common, tagName);
            if(new RegExp(tagName,'i').test(common.tagName)){
              nodes.push(common);
            }
            for (var i = 0,ni; ni = nodes[i++];) {
              if (ni.getAttribute('label') == obj.label) {
                var ps = domUtils.getPosition(ni, bk.start),pe = domUtils.getPosition(ni, bk.end);
                if ((ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                  &&
                  (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                )
                  if (dtd.$block[tagName]) {
                    var fillNode = me.document.createElement('p');
                    domUtils.moveChild(ni, fillNode);
                    ni.parentNode.insertBefore(fillNode, ni);
                  }
                domUtils.remove(ni, true);
              }
            }
            node = domUtils.findParent(common, function(node) {
              return node.getAttribute('label') == obj.label;
            }, true);
            if (node) {

              domUtils.remove(node, true);

            }

          }
          range.moveToBookmark(bk).select();
        } else {
          if (dtd.$block[tagName]) {
            this.execCommand('paragraph', tagName, tmpObj,'customstyle');
            range = me.selection.getRange();
            if (!range.collapsed) {
              range.collapse();
              node = domUtils.findParent(me.selection.getStart(), function(node) {
                return node.getAttribute('label') == obj.label;
              }, true);
              var pNode = me.document.createElement('p');
              domUtils.insertAfter(node, pNode);
              domUtils.fillNode(me.document, pNode);
              range.setStart(pNode, 0).setCursor();
            }
          } else {

            range = me.selection.getRange();
            if (range.collapsed) {
              node = me.document.createElement(tagName);
              domUtils.setAttributes(node, tmpObj);
              range.insertNode(node).setStart(node, 0).setCursor();

              return;
            }

            bk = range.createBookmark();
            range.applyInlineStyle(tagName, tmpObj).moveToBookmark(bk).select();
          }
        }

      },
      queryCommandValue : function() {
        var parent = domUtils.filterNodeList(
          this.selection.getStartElementPath(),
          function(node){return node.getAttribute('label')}
        );
        return  parent ? parent.getAttribute('label') : '';
      }
    };
    //褰撳幓鎺塩ustomstyle鏄紝濡傛灉鏄潡鍏冪礌锛岀敤p浠ｆ浛
    me.addListener('keyup', function(type, evt) {
      var keyCode = evt.keyCode || evt.which;

      if (keyCode == 32 || keyCode == 13) {
        var range = me.selection.getRange();
        if (range.collapsed) {
          var node = domUtils.findParent(me.selection.getStart(), function(node) {
            return node.getAttribute('label');
          }, true);
          if (node && dtd.$block[node.tagName] && domUtils.isEmptyNode(node)) {
            var p = me.document.createElement('p');
            domUtils.insertAfter(node, p);
            domUtils.fillNode(me.document, p);
            domUtils.remove(node);
            range.setStart(p, 0).setCursor();


          }
        }
      }
    });
  };

// plugins/catchremoteimage.js
///import core
///commands 杩滅▼鍥剧墖鎶撳彇
///commandsName  catchRemoteImage,catchremoteimageenable
///commandsTitle  杩滅▼鍥剧墖鎶撳彇
  /**
   * 杩滅▼鍥剧墖鎶撳彇,褰撳紑鍚湰鎻掍欢鏃舵墍鏈変笉绗﹀悎鏈湴鍩熷悕鐨勫浘鐗囬兘灏嗚鎶撳彇鎴愪负鏈湴鏈嶅姟鍣ㄤ笂鐨勫浘鐗�
   */
  UE.plugins['catchremoteimage'] = function () {
    var me = this,
      ajax = UE.ajax;

    /* 璁剧疆榛樿鍊� */
    if (me.options.catchRemoteImageEnable === false) return;
    me.setOpt({
      catchRemoteImageEnable: false
    });

    me.addListener("afterpaste", function () {
      me.fireEvent("catchRemoteImage");
    });

    me.addListener("catchRemoteImage", function () {

      var catcherLocalDomain = me.getOpt('catcherLocalDomain'),
        catcherActionUrl = me.getActionUrl(me.getOpt('catcherActionName')),
        catcherUrlPrefix = me.getOpt('catcherUrlPrefix'),
        catcherFieldName = me.getOpt('catcherFieldName');

      var remoteImages = [],
        imgs = domUtils.getElementsByTagName(me.document, "img"),
        test = function (src, urls) {
          if (src.indexOf(location.host) != -1 || /(^\.)|(^\/)/.test(src)) {
            return true;
          }
          if (urls) {
            for (var j = 0, url; url = urls[j++];) {
              if (src.indexOf(url) !== -1) {
                return true;
              }
            }
          }
          return false;
        };

      for (var i = 0, ci; ci = imgs[i++];) {
        if (ci.getAttribute("word_img")) {
          continue;
        }
        var src = ci.getAttribute("_src") || ci.src || "";
        if (/^(https?|ftp):/i.test(src) && !test(src, catcherLocalDomain)) {
          remoteImages.push(src);
        }
      }

      if (remoteImages.length) {
        catchremoteimage(remoteImages, {
          //鎴愬姛鎶撳彇
          success: function (r) {
            try {
              var info = r.state !== undefined ? r:eval("(" + r.responseText + ")");
            } catch (e) {
              return;
            }

            /* 鑾峰彇婧愯矾寰勫拰鏂拌矾寰� */
            var i, j, ci, cj, oldSrc, newSrc, list = info.list;

            for (i = 0; ci = imgs[i++];) {
              oldSrc = ci.getAttribute("_src") || ci.src || "";
              for (j = 0; cj = list[j++];) {
                if (oldSrc == cj.source && cj.state == "SUCCESS") {  //鎶撳彇澶辫触鏃朵笉鍋氭浛鎹㈠鐞�
                  newSrc = catcherUrlPrefix + cj.url;
                  domUtils.setAttributes(ci, {
                    "src": newSrc,
                    "_src": newSrc
                  });
                  break;
                }
              }
            }
            me.fireEvent('catchremotesuccess')
          },
          //鍥炶皟澶辫触锛屾湰娆¤姹傝秴鏃�
          error: function () {
            me.fireEvent("catchremoteerror");
          }
        });
      }

      function catchremoteimage(imgs, callbacks) {
        var params = utils.serializeParam(me.queryCommandValue('serverparam')) || '',
          url = utils.formatUrl(catcherActionUrl + (catcherActionUrl.indexOf('?') == -1 ? '?':'&') + params),
          isJsonp = utils.isCrossDomainUrl(url),
          opt = {
            'method': 'POST',
            'dataType': isJsonp ? 'jsonp':'',
            'timeout': 60000, //鍗曚綅锛氭绉掞紝鍥炶皟璇锋眰瓒呮椂璁剧疆銆傜洰鏍囩敤鎴峰鏋滅綉閫熶笉鏄緢蹇殑璇濇澶勫缓璁缃竴涓緝澶х殑鏁板€�
            'onsuccess': callbacks["success"],
            'onerror': callbacks["error"]
          };
        opt[catcherFieldName] = imgs;
        ajax.request(url, opt);
      }

    });
  };

// plugins/snapscreen.js
  /**
   * 鎴睆鎻掍欢锛屼负UEditor鎻愪緵鎻掑叆鏀寔
   * @file
   * @since 1.4.2
   */
  UE.plugin.register('snapscreen', function (){

    var me = this;
    var snapplugin;

    function getLocation(url){
      var search,
        a = document.createElement('a'),
        params = utils.serializeParam(me.queryCommandValue('serverparam')) || '';

      a.href = url;
      if (browser.ie) {
        a.href = a.href;
      }


      search = a.search;
      if (params) {
        search = search + (search.indexOf('?') == -1 ? '?':'&')+ params;
        search = search.replace(/[&]+/ig, '&');
      }
      return {
        'port': a.port,
        'hostname': a.hostname,
        'path': a.pathname + search ||  + a.hash
      }
    }

    return {
      commands:{
        /**
         * 瀛椾綋鑳屾櫙棰滆壊
         * @command snapscreen
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @example
         * ```javascript
         * editor.execCommand('snapscreen');
         * ```
         */
        'snapscreen':{
          execCommand:function (cmd) {
            var url, local, res;
            var lang = me.getLang("snapScreen_plugin");

            if(!snapplugin){
              var container = me.container;
              var doc = me.container.ownerDocument || me.container.document;
              snapplugin = doc.createElement("object");
              try{snapplugin.type = "application/x-pluginbaidusnap";}catch(e){
                return;
              }
              snapplugin.style.cssText = "position:absolute;left:-9999px;width:0;height:0;";
              snapplugin.setAttribute("width","0");
              snapplugin.setAttribute("height","0");
              container.appendChild(snapplugin);
            }

            function onSuccess(rs){
              try{
                rs = eval("("+ rs +")");
                if(rs.state == 'SUCCESS'){
                  var opt = me.options;
                  me.execCommand('insertimage', {
                    src: opt.snapscreenUrlPrefix + rs.url,
                    _src: opt.snapscreenUrlPrefix + rs.url,
                    alt: rs.title || '',
                    floatStyle: opt.snapscreenImgAlign
                  });
                } else {
                  alert(rs.state);
                }
              }catch(e){
                alert(lang.callBackErrorMsg);
              }
            }
            url = me.getActionUrl(me.getOpt('snapscreenActionName'));
            local = getLocation(url);
            setTimeout(function () {
              try{
                res =snapplugin.saveSnapshot(local.hostname, local.path, local.port);
              }catch(e){
                me.ui._dialogs['snapscreenDialog'].open();
                return;
              }

              onSuccess(res);
            }, 50);
          },
          queryCommandState: function(){
            return (navigator.userAgent.indexOf("Windows",0) != -1) ? 0:-1;
          }
        }
      }
    }
  });


// plugins/insertparagraph.js
  /**
   * 鎻掑叆娈佃惤
   * @file
   * @since 1.2.6.1
   */


  /**
   * 鎻掑叆娈佃惤
   * @command insertparagraph
   * @method execCommand
   * @param { String } cmd 鍛戒护瀛楃涓�
   * @example
   * ```javascript
   * //editor鏄紪杈戝櫒瀹炰緥
   * editor.execCommand( 'insertparagraph' );
   * ```
   */

  UE.commands['insertparagraph'] = {
    execCommand : function( cmdName,front) {
      var me = this,
        range = me.selection.getRange(),
        start = range.startContainer,tmpNode;
      while(start ){
        if(domUtils.isBody(start)){
          break;
        }
        tmpNode = start;
        start = start.parentNode;
      }
      if(tmpNode){
        var p = me.document.createElement('p');
        if(front){
          tmpNode.parentNode.insertBefore(p,tmpNode)
        }else{
          tmpNode.parentNode.insertBefore(p,tmpNode.nextSibling)
        }
        domUtils.fillNode(me.document,p);
        range.setStart(p,0).setCursor(false,true);
      }
    }
  };



// plugins/webapp.js
  /**
   * 鐧惧害搴旂敤
   * @file
   * @since 1.2.6.1
   */


  /**
   * 鎻掑叆鐧惧害搴旂敤
   * @command webapp
   * @method execCommand
   * @remind 闇€瑕佺櫨搴PPKey
   * @remind 鐧惧害搴旂敤涓婚〉锛� <a href="http://app.baidu.com/" target="_blank">http://app.baidu.com/</a>
   * @param { Object } appOptions 搴旂敤鎵€闇€鐨勫弬鏁伴」锛� 鏀寔鐨刱ey鏈夛細 title=>搴旂敤鏍囬锛� width=>搴旂敤瀹瑰櫒瀹藉害锛�
   * height=>搴旂敤瀹瑰櫒楂樺害锛宭ogo=>搴旂敤logo锛寀rl=>搴旂敤鍦板潃
   * @example
   * ```javascript
   * //editor鏄紪杈戝櫒瀹炰緥
   * //鍦ㄧ紪杈戝櫒閲屾彃鍏ヤ竴涓€滄鐗╁ぇ鎴樺兊灏糕€濈殑APP
   * editor.execCommand( 'webapp' , {
 *     title: '妞嶇墿澶ф垬鍍靛案',
 *     width: 560,
 *     height: 465,
 *     logo: '搴旂敤灞曠ず鐨勫浘鐗�',
 *     url: '鐧惧害搴旂敤鐨勫湴鍧€'
 * } );
   * ```
   */

//UE.plugins['webapp'] = function () {
//    var me = this;
//    function createInsertStr( obj, toIframe, addParagraph ) {
//        return !toIframe ?
//                (addParagraph ? '<p>' : '') + '<img title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"' +
//                        ' src="' + me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" style="background:url(' + obj.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="' + obj.url + '" />' +
//                        (addParagraph ? '</p>' : '')
//                :
//                '<iframe class="edui-faked-webapp" title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"  scrolling="no" frameborder="0" src="' + obj.url + '" logo_url = '+obj.logo+'></iframe>';
//    }
//
//    function switchImgAndIframe( img2frame ) {
//        var tmpdiv,
//                nodes = domUtils.getElementsByTagName( me.document, !img2frame ? "iframe" : "img" );
//        for ( var i = 0, node; node = nodes[i++]; ) {
//            if ( node.className != "edui-faked-webapp" ){
//                continue;
//            }
//            tmpdiv = me.document.createElement( "div" );
//            tmpdiv.innerHTML = createInsertStr( img2frame ? {url:node.getAttribute( "_url" ), width:node.width, height:node.height,title:node.title,logo:node.style.backgroundImage.replace("url(","").replace(")","")} : {url:node.getAttribute( "src", 2 ),title:node.title, width:node.width, height:node.height,logo:node.getAttribute("logo_url")}, img2frame ? true : false,false );
//            node.parentNode.replaceChild( tmpdiv.firstChild, node );
//        }
//    }
//
//    me.addListener( "beforegetcontent", function () {
//        switchImgAndIframe( true );
//    } );
//    me.addListener( 'aftersetcontent', function () {
//        switchImgAndIframe( false );
//    } );
//    me.addListener( 'aftergetcontent', function ( cmdName ) {
//        if ( cmdName == 'aftergetcontent' && me.queryCommandState( 'source' ) ){
//            return;
//        }
//        switchImgAndIframe( false );
//    } );
//
//    me.commands['webapp'] = {
//        execCommand:function ( cmd, obj ) {
//            me.execCommand( "inserthtml", createInsertStr( obj, false,true ) );
//        }
//    };
//};

  UE.plugin.register('webapp', function (){
    var me = this;
    function createInsertStr(obj,toEmbed){
      return  !toEmbed ?
      '<img title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"' +
      ' src="' + me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" _logo_url="'+obj.logo+'" style="background:url(' + obj.logo
      +') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="' + obj.url + '" ' +
      (obj.align && !obj.cssfloat? 'align="' + obj.align + '"' : '') +
      (obj.cssfloat ? 'style="float:' + obj.cssfloat + '"' : '') +
      '/>'
        :
      '<iframe class="edui-faked-webapp" title="'+obj.title+'" ' +
      (obj.align && !obj.cssfloat? 'align="' + obj.align + '"' : '') +
      (obj.cssfloat ? 'style="float:' + obj.cssfloat + '"' : '') +
      'width="' + obj.width + '" height="' + obj.height + '"  scrolling="no" frameborder="0" src="' + obj.url + '" logo_url = "'+obj.logo+'"></iframe>'

    }
    return {
      outputRule: function(root){
        utils.each(root.getNodesByTagName('img'),function(node){
          var html;
          if(node.getAttr('class') == 'edui-faked-webapp'){
            html =  createInsertStr({
              title:node.getAttr('title'),
              'width':node.getAttr('width'),
              'height':node.getAttr('height'),
              'align':node.getAttr('align'),
              'cssfloat':node.getStyle('float'),
              'url':node.getAttr("_url"),
              'logo':node.getAttr('_logo_url')
            },true);
            var embed = UE.uNode.createElement(html);
            node.parentNode.replaceChild(embed,node);
          }
        })
      },
      inputRule:function(root){
        utils.each(root.getNodesByTagName('iframe'),function(node){
          if(node.getAttr('class') == 'edui-faked-webapp'){
            var img = UE.uNode.createElement(createInsertStr({
              title:node.getAttr('title'),
              'width':node.getAttr('width'),
              'height':node.getAttr('height'),
              'align':node.getAttr('align'),
              'cssfloat':node.getStyle('float'),
              'url':node.getAttr("src"),
              'logo':node.getAttr('logo_url')
            }));
            node.parentNode.replaceChild(img,node);
          }
        })

      },
      commands:{
        /**
         * 鎻掑叆鐧惧害搴旂敤
         * @command webapp
         * @method execCommand
         * @remind 闇€瑕佺櫨搴PPKey
         * @remind 鐧惧害搴旂敤涓婚〉锛� <a href="http://app.baidu.com/" target="_blank">http://app.baidu.com/</a>
         * @param { Object } appOptions 搴旂敤鎵€闇€鐨勫弬鏁伴」锛� 鏀寔鐨刱ey鏈夛細 title=>搴旂敤鏍囬锛� width=>搴旂敤瀹瑰櫒瀹藉害锛�
         * height=>搴旂敤瀹瑰櫒楂樺害锛宭ogo=>搴旂敤logo锛寀rl=>搴旂敤鍦板潃
         * @example
         * ```javascript
         * //editor鏄紪杈戝櫒瀹炰緥
         * //鍦ㄧ紪杈戝櫒閲屾彃鍏ヤ竴涓€滄鐗╁ぇ鎴樺兊灏糕€濈殑APP
         * editor.execCommand( 'webapp' , {
             *     title: '妞嶇墿澶ф垬鍍靛案',
             *     width: 560,
             *     height: 465,
             *     logo: '搴旂敤灞曠ず鐨勫浘鐗�',
             *     url: '鐧惧害搴旂敤鐨勫湴鍧€'
             * } );
         * ```
         */
        'webapp':{
          execCommand:function (cmd, obj) {

            var me = this,
              str = createInsertStr(utils.extend(obj,{
                align:'none'
              }), false);
            me.execCommand("inserthtml",str);
          },
          queryCommandState:function () {
            var me = this,
              img = me.selection.getRange().getClosedNode(),
              flag = img && (img.className == "edui-faked-webapp");
            return flag ? 1 : 0;
          }
        }
      }
    }
  });

// plugins/template.js
///import core
///import plugins\inserthtml.js
///import plugins\cleardoc.js
///commands 妯℃澘
///commandsName  template
///commandsTitle  妯℃澘
///commandsDialog  dialogs\template
  UE.plugins['template'] = function () {
    UE.commands['template'] = {
      execCommand:function (cmd, obj) {
        obj.html && this.execCommand("inserthtml", obj.html);
      }
    };
    this.addListener("click", function (type, evt) {
      var el = evt.target || evt.srcElement,
        range = this.selection.getRange();
      var tnode = domUtils.findParent(el, function (node) {
        if (node.className && domUtils.hasClass(node, "ue_t")) {
          return node;
        }
      }, true);
      tnode && range.selectNode(tnode).shrinkBoundary().select();
    });
    this.addListener("keydown", function (type, evt) {
      var range = this.selection.getRange();
      if (!range.collapsed) {
        if (!evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
          var tnode = domUtils.findParent(range.startContainer, function (node) {
            if (node.className && domUtils.hasClass(node, "ue_t")) {
              return node;
            }
          }, true);
          if (tnode) {
            domUtils.removeClasses(tnode, ["ue_t"]);
          }
        }
      }
    });
  };


// plugins/music.js
  /**
   * 鎻掑叆闊充箰鍛戒护
   * @file
   */
  UE.plugin.register('music', function (){
    var me = this;
    function creatInsertStr(url,width,height,align,cssfloat,toEmbed){
      return  !toEmbed ?
      '<img ' +
      (align && !cssfloat? 'align="' + align + '"' : '') +
      (cssfloat ? 'style="float:' + cssfloat + '"' : '') +
      ' width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-music"' +
      ' src="'+me.options.langPath+me.options.lang+'/images/music.png" />'
        :
      '<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
      ' src="' + url + '" width="' + width  + '" height="' + height  + '" '+ (align && !cssfloat? 'align="' + align + '"' : '') +
      (cssfloat ? 'style="float:' + cssfloat + '"' : '') +
      ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }
    return {
      outputRule: function(root){
        utils.each(root.getNodesByTagName('img'),function(node){
          var html;
          if(node.getAttr('class') == 'edui-faked-music'){
            var cssfloat = node.getStyle('float');
            var align = node.getAttr('align');
            html =  creatInsertStr(node.getAttr("_url"), node.getAttr('width'), node.getAttr('height'), align, cssfloat, true);
            var embed = UE.uNode.createElement(html);
            node.parentNode.replaceChild(embed,node);
          }
        })
      },
      inputRule:function(root){
        utils.each(root.getNodesByTagName('embed'),function(node){
          if(node.getAttr('class') == 'edui-faked-music'){
            var cssfloat = node.getStyle('float');
            var align = node.getAttr('align');
            html =  creatInsertStr(node.getAttr("src"), node.getAttr('width'), node.getAttr('height'), align, cssfloat,false);
            var img = UE.uNode.createElement(html);
            node.parentNode.replaceChild(img,node);
          }
        })

      },
      commands:{
        /**
         * 鎻掑叆闊充箰
         * @command music
         * @method execCommand
         * @param { Object } musicOptions 鎻掑叆闊充箰鐨勫弬鏁伴」锛� 鏀寔鐨刱ey鏈夛細 url=>闊充箰鍦板潃锛�
         * width=>闊充箰瀹瑰櫒瀹藉害锛沨eight=>闊充箰瀹瑰櫒楂樺害锛沘lign=>闊充箰鏂囦欢鐨勫榻愭柟寮忥紝 鍙€夊€兼湁: left, center, right, none
         * @example
         * ```javascript
         * //editor鏄紪杈戝櫒瀹炰緥
         * //鍦ㄧ紪杈戝櫒閲屾彃鍏ヤ竴涓€滄鐗╁ぇ鎴樺兊灏糕€濈殑APP
         * editor.execCommand( 'music' , {
             *     width: 400,
             *     height: 95,
             *     align: "center",
             *     url: "闊充箰鍦板潃"
             * } );
         * ```
         */
        'music':{
          execCommand:function (cmd, musicObj) {
            var me = this,
              str = creatInsertStr(musicObj.url, musicObj.width || 400, musicObj.height || 95, "none", false);
            me.execCommand("inserthtml",str);
          },
          queryCommandState:function () {
            var me = this,
              img = me.selection.getRange().getClosedNode(),
              flag = img && (img.className == "edui-faked-music");
            return flag ? 1 : 0;
          }
        }
      }
    }
  });

// plugins/autoupload.js
  /**
   * @description
   * 1.鎷栨斁鏂囦欢鍒扮紪杈戝尯鍩燂紝鑷姩涓婁紶骞舵彃鍏ュ埌閫夊尯
   * 2.鎻掑叆绮樿创鏉跨殑鍥剧墖锛岃嚜鍔ㄤ笂浼犲苟鎻掑叆鍒伴€夊尯
   * @author Jinqn
   * @date 2013-10-14
   */
  UE.plugin.register('autoupload', function (){

    function sendAndInsertFile(file, editor) {
      var me  = editor;
      //妯℃嫙鏁版嵁
      var fieldName, urlPrefix, maxSize, allowFiles, actionUrl,
        loadingHtml, errorHandler, successHandler,
        filetype = /image\/\w+/i.test(file.type) ? 'image':'file',
        loadingId = 'loading_' + (+new Date()).toString(36);

      fieldName = me.getOpt(filetype + 'FieldName');
      urlPrefix = me.getOpt(filetype + 'UrlPrefix');
      maxSize = me.getOpt(filetype + 'MaxSize');
      allowFiles = me.getOpt(filetype + 'AllowFiles');
      actionUrl = me.getActionUrl(me.getOpt(filetype + 'ActionName'));
      errorHandler = function(title) {
        var loader = me.document.getElementById(loadingId);
        loader && domUtils.remove(loader);
        me.fireEvent('showmessage', {
          'id': loadingId,
          'content': title,
          'type': 'error',
          'timeout': 4000
        });
      };

      if (filetype == 'image') {
        loadingHtml = '<img class="loadingclass" id="' + loadingId + '" src="' +
          me.options.themePath + me.options.theme +
          '/images/spacer.gif" title="' + (me.getLang('autoupload.loading') || '') + '" >';
        successHandler = function(data) {
          var link = urlPrefix + data.url,
            loader = me.document.getElementById(loadingId);
          if (loader) {
            loader.setAttribute('src', link);
            loader.setAttribute('_src', link);
            loader.setAttribute('title', data.title || '');
            loader.setAttribute('alt', data.original || '');
            loader.removeAttribute('id');
            domUtils.removeClasses(loader, 'loadingclass');
          }
        };
      } else {
        loadingHtml = '<p>' +
          '<img class="loadingclass" id="' + loadingId + '" src="' +
          me.options.themePath + me.options.theme +
          '/images/spacer.gif" title="' + (me.getLang('autoupload.loading') || '') + '" >' +
          '</p>';
        successHandler = function(data) {
          var link = urlPrefix + data.url,
            loader = me.document.getElementById(loadingId);

          var rng = me.selection.getRange(),
            bk = rng.createBookmark();
          rng.selectNode(loader).select();
          me.execCommand('insertfile', {'url': link});
          rng.moveToBookmark(bk).select();
        };
      }

      /* 鎻掑叆loading鐨勫崰浣嶇 */
      me.execCommand('inserthtml', loadingHtml);

      /* 鍒ゆ柇鍚庣閰嶇疆鏄惁娌℃湁鍔犺浇鎴愬姛 */
      if (!me.getOpt(filetype + 'ActionName')) {
        errorHandler(me.getLang('autoupload.errorLoadConfig'));
        return;
      }
      /* 鍒ゆ柇鏂囦欢澶у皬鏄惁瓒呭嚭闄愬埗 */
      if(file.size > maxSize) {
        errorHandler(me.getLang('autoupload.exceedSizeError'));
        return;
      }
      /* 鍒ゆ柇鏂囦欢鏍煎紡鏄惁瓒呭嚭鍏佽 */
      var fileext = file.name ? file.name.substr(file.name.lastIndexOf('.')):'';
      if ((fileext && filetype != 'image') || (allowFiles && (allowFiles.join('') + '.').indexOf(fileext.toLowerCase() + '.') == -1)) {
        errorHandler(me.getLang('autoupload.exceedTypeError'));
        return;
      }

      /* 鍒涘缓Ajax骞舵彁浜� */
      var xhr = new XMLHttpRequest(),
        fd = new FormData(),
        params = utils.serializeParam(me.queryCommandValue('serverparam')) || '',
        url = utils.formatUrl(actionUrl + (actionUrl.indexOf('?') == -1 ? '?':'&') + params);

      fd.append(fieldName, file, file.name || ('blob.' + file.type.substr('image/'.length)));
      fd.append('type', 'ajax');
      xhr.open("post", url, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.addEventListener('load', function (e) {
        try{
          var json = (new Function("return " + utils.trim(e.target.response)))();
          if (json.state == 'SUCCESS' && json.url) {
            successHandler(json);
          } else {
            errorHandler(json.state);
          }
        }catch(er){
          errorHandler(me.getLang('autoupload.loadError'));
        }
      });
      xhr.send(fd);
    }

    function getPasteImage(e){
      return e.clipboardData && e.clipboardData.items && e.clipboardData.items.length == 1 && /^image\//.test(e.clipboardData.items[0].type) ? e.clipboardData.items:null;
    }
    function getDropImage(e){
      return  e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files:null;
    }

    return {
      outputRule: function(root){
        utils.each(root.getNodesByTagName('img'),function(n){
          if (/\b(loaderrorclass)|(bloaderrorclass)\b/.test(n.getAttr('class'))) {
            n.parentNode.removeChild(n);
          }
        });
        utils.each(root.getNodesByTagName('p'),function(n){
          if (/\bloadpara\b/.test(n.getAttr('class'))) {
            n.parentNode.removeChild(n);
          }
        });
      },
      bindEvents:{
        //鎻掑叆绮樿创鏉跨殑鍥剧墖锛屾嫋鏀炬彃鍏ュ浘鐗�
        'ready':function(e){
          var me = this;
          if(window.FormData && window.FileReader) {
            domUtils.on(me.body, 'paste drop', function(e){
              var hasImg = false,
                items;
              //鑾峰彇绮樿创鏉挎枃浠跺垪琛ㄦ垨鑰呮嫋鏀炬枃浠跺垪琛�
              items = e.type == 'paste' ? getPasteImage(e):getDropImage(e);
              if(items){
                var len = items.length,
                  file;
                while (len--){
                  file = items[len];
                  if(file.getAsFile) file = file.getAsFile();
                  if(file && file.size > 0) {
                    sendAndInsertFile(file, me);
                    hasImg = true;
                  }
                }
                hasImg && e.preventDefault();
              }

            });
            //鍙栨秷鎷栨斁鍥剧墖鏃跺嚭鐜扮殑鏂囧瓧鍏夋爣浣嶇疆鎻愮ず
            domUtils.on(me.body, 'dragover', function (e) {
              if(e.dataTransfer.types[0] == 'Files') {
                e.preventDefault();
              }
            });

            //璁剧疆loading鐨勬牱寮�
            utils.cssRule('loading',
              '.loadingclass{display:inline-block;cursor:default;background: url(\''
              + this.options.themePath
              + this.options.theme +'/images/loading.gif\') no-repeat center center transparent;border:1px solid #cccccc;margin-left:1px;height: 22px;width: 22px;}\n' +
              '.loaderrorclass{display:inline-block;cursor:default;background: url(\''
              + this.options.themePath
              + this.options.theme +'/images/loaderror.png\') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;' +
              '}',
              this.document);
          }
        }
      }
    }
  });

// plugins/autosave.js
  UE.plugin.register('autosave', function (){

    var me = this,
      //鏃犻檺寰幆淇濇姢
      lastSaveTime = new Date(),
      //鏈€灏忎繚瀛橀棿闅旀椂闂�
      MIN_TIME = 20,
      //auto save key
      saveKey = null;

    function save ( editor ) {

      var saveData;

      if ( new Date() - lastSaveTime < MIN_TIME ) {
        return;
      }

      if ( !editor.hasContents() ) {
        //杩欓噷涓嶈兘璋冪敤鍛戒护鏉ュ垹闄わ紝 浼氶€犳垚浜嬩欢姝诲惊鐜�
        saveKey && me.removePreferences( saveKey );
        return;
      }

      lastSaveTime = new Date();

      editor._saveFlag = null;

      saveData = me.body.innerHTML;

      if ( editor.fireEvent( "beforeautosave", {
          content: saveData
        } ) === false ) {
        return;
      }

      me.setPreferences( saveKey, saveData );

      editor.fireEvent( "afterautosave", {
        content: saveData
      } );

    }

    return {
      defaultOptions: {
        //榛樿闂撮殧鏃堕棿
        saveInterval: 500
      },
      bindEvents:{
        'ready':function(){

          var _suffix = "-drafts-data",
            key = null;

          if ( me.key ) {
            key = me.key + _suffix;
          } else {
            key = ( me.container.parentNode.id || 'ue-common' ) + _suffix;
          }

          //椤甸潰鍦板潃+缂栬緫鍣↖D 淇濇寔鍞竴
          saveKey = ( location.protocol + location.host + location.pathname ).replace( /[.:\/]/g, '_' ) + key;

        },

        'contentchange': function () {

          if ( !saveKey ) {
            return;
          }

          if ( me._saveFlag ) {
            window.clearTimeout( me._saveFlag );
          }

          if ( me.options.saveInterval > 0 ) {

            me._saveFlag = window.setTimeout( function () {

              save( me );

            }, me.options.saveInterval );

          } else {

            save(me);

          }


        }
      },
      commands:{
        'clearlocaldata':{
          execCommand:function (cmd, name) {
            if ( saveKey && me.getPreferences( saveKey ) ) {
              me.removePreferences( saveKey )
            }
          },
          notNeedUndo: true,
          ignoreContentChange:true
        },

        'getlocaldata':{
          execCommand:function (cmd, name) {
            return saveKey ? me.getPreferences( saveKey ) || '' : '';
          },
          notNeedUndo: true,
          ignoreContentChange:true
        },

        'drafts':{
          execCommand:function (cmd, name) {
            if ( saveKey ) {
              me.body.innerHTML = me.getPreferences( saveKey ) || '<p>'+domUtils.fillHtml+'</p>';
              me.focus(true);
            }
          },
          queryCommandState: function () {
            return saveKey ? ( me.getPreferences( saveKey ) === null ? -1 : 0 ) : -1;
          },
          notNeedUndo: true,
          ignoreContentChange:true
        }
      }
    }

  });

// plugins/charts.js
  UE.plugin.register('charts', function (){

    var me = this;

    return {
      bindEvents: {
        'chartserror': function () {
        }
      },
      commands:{
        'charts': {
          execCommand: function ( cmd, data ) {

            var tableNode = domUtils.findParentByTagName(this.selection.getRange().startContainer, 'table', true),
              flagText = [],
              config = {};

            if ( !tableNode ) {
              return false;
            }

            if ( !validData( tableNode ) ) {
              me.fireEvent( "chartserror" );
              return false;
            }

            config.title = data.title || '';
            config.subTitle = data.subTitle || '';
            config.xTitle = data.xTitle || '';
            config.yTitle = data.yTitle || '';
            config.suffix = data.suffix || '';
            config.tip = data.tip || '';
            //鏁版嵁瀵归綈鏂瑰紡
            config.dataFormat = data.tableDataFormat || '';
            //鍥捐〃绫诲瀷
            config.chartType = data.chartType || 0;

            for ( var key in config ) {

              if ( !config.hasOwnProperty( key ) ) {
                continue;
              }

              flagText.push( key+":"+config[ key ] );

            }

            tableNode.setAttribute( "data-chart", flagText.join( ";" ) );
            domUtils.addClass( tableNode, "edui-charts-table" );



          },
          queryCommandState: function ( cmd, name ) {

            var tableNode = domUtils.findParentByTagName(this.selection.getRange().startContainer, 'table', true);
            return tableNode && validData( tableNode ) ? 0 : -1;

          }
        }
      },
      inputRule:function(root){
        utils.each(root.getNodesByTagName('table'),function( tableNode ){

          if ( tableNode.getAttr("data-chart") !== undefined ) {
            tableNode.setAttr("style");
          }

        })

      },
      outputRule:function(root){
        utils.each(root.getNodesByTagName('table'),function( tableNode ){

          if ( tableNode.getAttr("data-chart") !== undefined ) {
            tableNode.setAttr("style", "display: none;");
          }

        })

      }
    }

    function validData ( table ) {

      var firstRows = null,
        cellCount = 0;

      //琛屾暟涓嶅
      if ( table.rows.length < 2 ) {
        return false;
      }

      //鍒楁暟涓嶅
      if ( table.rows[0].cells.length < 2 ) {
        return false;
      }

      //绗竴琛屾墍鏈塩ell蹇呴』鏄痶h
      firstRows = table.rows[ 0 ].cells;
      cellCount = firstRows.length;

      for ( var i = 0, cell; cell = firstRows[ i ]; i++ ) {

        if ( cell.tagName.toLowerCase() !== 'th' ) {
          return false;
        }

      }

      for ( var i = 1, row; row = table.rows[ i ]; i++ ) {

        //姣忚鍗曞厓鏍兼暟涓嶅尮閰嶏紝 杩斿洖false
        if ( row.cells.length != cellCount ) {
          return false;
        }

        //绗竴鍒椾笉鏄痶h涔熻繑鍥瀎alse
        if ( row.cells[0].tagName.toLowerCase() !== 'th' ) {
          return false;
        }

        for ( var j = 1, cell; cell = row.cells[ j ]; j++ ) {

          var value = utils.trim( ( cell.innerText || cell.textContent || '' ) );

          value = value.replace( new RegExp( UE.dom.domUtils.fillChar, 'g' ), '' ).replace( /^\s+|\s+$/g, '' );

          //蹇呴』鏄暟瀛�
          if ( !/^\d*\.?\d+$/.test( value ) ) {
            return false;
          }

        }

      }

      return true;

    }

  });

// plugins/section.js
  /**
   * 鐩綍澶х翰鏀寔鎻掍欢
   * @file
   * @since 1.3.0
   */
  UE.plugin.register('section', function (){
    /* 鐩綍鑺傜偣瀵硅薄 */
    function Section(option){
      this.tag = '';
      this.level = -1,
        this.dom = null;
      this.nextSection = null;
      this.previousSection = null;
      this.parentSection = null;
      this.startAddress = [];
      this.endAddress = [];
      this.children = [];
    }
    function getSection(option) {
      var section = new Section();
      return utils.extend(section, option);
    }
    function getNodeFromAddress(startAddress, root) {
      var current = root;
      for(var i = 0;i < startAddress.length; i++) {
        if(!current.childNodes) return null;
        current = current.childNodes[startAddress[i]];
      }
      return current;
    }

    var me = this;

    return {
      bindMultiEvents:{
        type: 'aftersetcontent afterscencerestore',
        handler: function(){
          me.fireEvent('updateSections');
        }
      },
      bindEvents:{
        /* 鍒濆鍖栥€佹嫋鎷姐€佺矘璐淬€佹墽琛宻etcontent涔嬪悗 */
        'ready': function (){
          me.fireEvent('updateSections');
          domUtils.on(me.body, 'drop paste', function(){
            me.fireEvent('updateSections');
          });
        },
        /* 鎵цparagraph鍛戒护涔嬪悗 */
        'afterexeccommand': function (type, cmd) {
          if(cmd == 'paragraph') {
            me.fireEvent('updateSections');
          }
        },
        /* 閮ㄥ垎閿洏鎿嶄綔锛岃Е鍙憉pdateSections浜嬩欢 */
        'keyup': function (type, e) {
          var me = this,
            range = me.selection.getRange();
          if(range.collapsed != true) {
            me.fireEvent('updateSections');
          } else {
            var keyCode = e.keyCode || e.which;
            if(keyCode == 13 || keyCode == 8 || keyCode == 46) {
              me.fireEvent('updateSections');
            }
          }
        }
      },
      commands:{
        'getsections': {
          execCommand: function (cmd, levels) {
            var levelFn = levels || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

            for (var i = 0; i < levelFn.length; i++) {
              if (typeof levelFn[i] == 'string') {
                levelFn[i] = function(fn){
                  return function(node){
                    return node.tagName == fn.toUpperCase()
                  };
                }(levelFn[i]);
              } else if (typeof levelFn[i] != 'function') {
                levelFn[i] = function (node) {
                  return null;
                }
              }
            }
            function getSectionLevel(node) {
              for (var i = 0; i < levelFn.length; i++) {
                if (levelFn[i](node)) return i;
              }
              return -1;
            }

            var me = this,
              Directory = getSection({'level':-1, 'title':'root'}),
              previous = Directory;

            function traversal(node, Directory) {
              var level,
                tmpSection = null,
                parent,
                child,
                children = node.childNodes;
              for (var i = 0, len = children.length; i < len; i++) {
                child = children[i];
                level = getSectionLevel(child);
                if (level >= 0) {
                  var address = me.selection.getRange().selectNode(child).createAddress(true).startAddress,
                    current = getSection({
                      'tag': child.tagName,
                      'title': child.innerText || child.textContent || '',
                      'level': level,
                      'dom': child,
                      'startAddress': utils.clone(address, []),
                      'endAddress': utils.clone(address, []),
                      'children': []
                    });
                  previous.nextSection = current;
                  current.previousSection = previous;
                  parent = previous;
                  while(level <= parent.level){
                    parent = parent.parentSection;
                  }
                  current.parentSection = parent;
                  parent.children.push(current);
                  tmpSection = previous = current;
                } else {
                  child.nodeType === 1 && traversal(child, Directory);
                  tmpSection && tmpSection.endAddress[tmpSection.endAddress.length - 1] ++;
                }
              }
            }
            traversal(me.body, Directory);
            return Directory;
          },
          notNeedUndo: true
        },
        'movesection': {
          execCommand: function (cmd, sourceSection, targetSection, isAfter) {

            var me = this,
              targetAddress,
              target;

            if(!sourceSection || !targetSection || targetSection.level == -1) return;

            targetAddress = isAfter ? targetSection.endAddress:targetSection.startAddress;
            target = getNodeFromAddress(targetAddress, me.body);

            /* 鍒ゆ柇鐩爣鍦板潃鏄惁琚簮绔犺妭鍖呭惈 */
            if(!targetAddress || !target || isContainsAddress(sourceSection.startAddress, sourceSection.endAddress, targetAddress)) return;

            var startNode = getNodeFromAddress(sourceSection.startAddress, me.body),
              endNode = getNodeFromAddress(sourceSection.endAddress, me.body),
              current,
              nextNode;

            if(isAfter) {
              current = endNode;
              while ( current && !(domUtils.getPosition( startNode, current ) & domUtils.POSITION_FOLLOWING) ) {
                nextNode = current.previousSibling;
                domUtils.insertAfter(target, current);
                if(current == startNode) break;
                current = nextNode;
              }
            } else {
              current = startNode;
              while ( current && !(domUtils.getPosition( current, endNode ) & domUtils.POSITION_FOLLOWING) ) {
                nextNode = current.nextSibling;
                target.parentNode.insertBefore(current, target);
                if(current == endNode) break;
                current = nextNode;
              }
            }

            me.fireEvent('updateSections');

            /* 鑾峰彇鍦板潃鐨勫寘鍚叧绯� */
            function isContainsAddress(startAddress, endAddress, addressTarget){
              var isAfterStartAddress = false,
                isBeforeEndAddress = false;
              for(var i = 0; i< startAddress.length; i++){
                if(i >= addressTarget.length) break;
                if(addressTarget[i] > startAddress[i]) {
                  isAfterStartAddress = true;
                  break;
                } else if(addressTarget[i] < startAddress[i]) {
                  break;
                }
              }
              for(var i = 0; i< endAddress.length; i++){
                if(i >= addressTarget.length) break;
                if(addressTarget[i] < startAddress[i]) {
                  isBeforeEndAddress = true;
                  break;
                } else if(addressTarget[i] > startAddress[i]) {
                  break;
                }
              }
              return isAfterStartAddress && isBeforeEndAddress;
            }
          }
        },
        'deletesection': {
          execCommand: function (cmd, section, keepChildren) {
            var me = this;

            if(!section) return;

            function getNodeFromAddress(startAddress) {
              var current = me.body;
              for(var i = 0;i < startAddress.length; i++) {
                if(!current.childNodes) return null;
                current = current.childNodes[startAddress[i]];
              }
              return current;
            }

            var startNode = getNodeFromAddress(section.startAddress),
              endNode = getNodeFromAddress(section.endAddress),
              current = startNode,
              nextNode;

            if(!keepChildren) {
              while ( current && domUtils.inDoc(endNode, me.document) && !(domUtils.getPosition( current, endNode ) & domUtils.POSITION_FOLLOWING) ) {
                nextNode = current.nextSibling;
                domUtils.remove(current);
                current = nextNode;
              }
            } else {
              domUtils.remove(current);
            }

            me.fireEvent('updateSections');
          }
        },
        'selectsection': {
          execCommand: function (cmd, section) {
            if(!section && !section.dom) return false;
            var me = this,
              range = me.selection.getRange(),
              address = {
                'startAddress':utils.clone(section.startAddress, []),
                'endAddress':utils.clone(section.endAddress, [])
              };
            address.endAddress[address.endAddress.length - 1]++;
            range.moveToAddress(address).select().scrollToView();
            return true;
          },
          notNeedUndo: true
        },
        'scrolltosection': {
          execCommand: function (cmd, section) {
            if(!section && !section.dom) return false;
            var me = this,
              range = me.selection.getRange(),
              address = {
                'startAddress':section.startAddress,
                'endAddress':section.endAddress
              };
            address.endAddress[address.endAddress.length - 1]++;
            range.moveToAddress(address).scrollToView();
            return true;
          },
          notNeedUndo: true
        }
      }
    }
  });

// plugins/simpleupload.js
  /**
   * @description
   * 绠€鍗曚笂浼�:鐐瑰嚮鎸夐挳,鐩存帴閫夋嫨鏂囦欢涓婁紶
   * @author Jinqn
   * @date 2014-03-31
   */
  UE.plugin.register('simpleupload', function (){
    var me = this,
      isLoaded = false,
      containerBtn;

    function initUploadBtn(){
      var w = containerBtn.offsetWidth || 20,
        h = containerBtn.offsetHeight || 20,
        btnIframe = document.createElement('iframe'),
        btnStyle = 'display:block;width:' + w + 'px;height:' + h + 'px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;';

      domUtils.on(btnIframe, 'load', function(){

        var timestrap = (+new Date()).toString(36),
          wrapper,
          btnIframeDoc,
          btnIframeBody;

        btnIframeDoc = (btnIframe.contentDocument || btnIframe.contentWindow.document);
        btnIframeBody = btnIframeDoc.body;
        wrapper = btnIframeDoc.createElement('div');

        wrapper.innerHTML = '<form id="edui_form_' + timestrap + '" target="edui_iframe_' + timestrap + '" method="POST" enctype="multipart/form-data" action="' + me.getOpt('serverUrl') + '" ' +
          'style="' + btnStyle + '">' +
          '<input id="edui_input_' + timestrap + '" type="file" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp" name="' + me.options.imageFieldName + '" ' +
          'style="' + btnStyle + '">' +
          '</form>' +
          '<iframe id="edui_iframe_' + timestrap + '" name="edui_iframe_' + timestrap + '" style="display:none;width:0;height:0;border:0;margin:0;padding:0;position:absolute;"></iframe>';

        wrapper.className = 'edui-' + me.options.theme;
        wrapper.id = me.ui.id + '_iframeupload';
        btnIframeBody.style.cssText = btnStyle;
        btnIframeBody.style.width = w + 'px';
        btnIframeBody.style.height = h + 'px';
        btnIframeBody.appendChild(wrapper);

        if (btnIframeBody.parentNode) {
          btnIframeBody.parentNode.style.width = w + 'px';
          btnIframeBody.parentNode.style.height = w + 'px';
        }

        var form = btnIframeDoc.getElementById('edui_form_' + timestrap);
        var input = btnIframeDoc.getElementById('edui_input_' + timestrap);
        var iframe = btnIframeDoc.getElementById('edui_iframe_' + timestrap);

        domUtils.on(input, 'change', function(){
          if(!input.value) return;
          var loadingId = 'loading_' + (+new Date()).toString(36);
          var params = utils.serializeParam(me.queryCommandValue('serverparam')) || '';

          var imageActionUrl = me.getActionUrl(me.getOpt('imageActionName'));
          var allowFiles = me.getOpt('imageAllowFiles');

          me.focus();
          me.execCommand('inserthtml', '<img class="loadingclass" id="' + loadingId + '" src="' + me.options.themePath + me.options.theme +'/images/spacer.gif" title="' + (me.getLang('simpleupload.loading') || '') + '" >');

          function callback(){
            try{
              var link, json, loader,
                body = (iframe.contentDocument || iframe.contentWindow.document).body,
                result = body.innerText || body.textContent || '';
              json = (new Function("return " + result))();
              link = me.options.imageUrlPrefix + json.url;
              if(json.state == 'SUCCESS' && json.url) {
                loader = me.document.getElementById(loadingId);
                loader.setAttribute('src', link);
                loader.setAttribute('_src', link);
                loader.setAttribute('title', json.title || '');
                loader.setAttribute('alt', json.original || '');
                loader.removeAttribute('id');
                domUtils.removeClasses(loader, 'loadingclass');
              } else {
                showErrorLoader && showErrorLoader(json.state);
              }
            }catch(er){
              showErrorLoader && showErrorLoader(me.getLang('simpleupload.loadError'));
            }
            form.reset();
            domUtils.un(iframe, 'load', callback);
          }
          function showErrorLoader(title){
            if(loadingId) {
              var loader = me.document.getElementById(loadingId);
              loader && domUtils.remove(loader);
              me.fireEvent('showmessage', {
                'id': loadingId,
                'content': title,
                'type': 'error',
                'timeout': 4000
              });
            }
          }

          /* 鍒ゆ柇鍚庣閰嶇疆鏄惁娌℃湁鍔犺浇鎴愬姛 */
          if (!me.getOpt('imageActionName')) {
            errorHandler(me.getLang('autoupload.errorLoadConfig'));
            return;
          }
          // 鍒ゆ柇鏂囦欢鏍煎紡鏄惁閿欒
          var filename = input.value,
            fileext = filename ? filename.substr(filename.lastIndexOf('.')):'';
          if (!fileext || (allowFiles && (allowFiles.join('') + '.').indexOf(fileext.toLowerCase() + '.') == -1)) {
            showErrorLoader(me.getLang('simpleupload.exceedTypeError'));
            return;
          }

          domUtils.on(iframe, 'load', callback);
          form.action = utils.formatUrl(imageActionUrl + (imageActionUrl.indexOf('?') == -1 ? '?':'&') + params);
          form.submit();
        });

        var stateTimer;
        me.addListener('selectionchange', function () {
          clearTimeout(stateTimer);
          stateTimer = setTimeout(function() {
            var state = me.queryCommandState('simpleupload');
            if (state == -1) {
              input.disabled = 'disabled';
            } else {
              input.disabled = false;
            }
          }, 400);
        });
        isLoaded = true;
      });

      btnIframe.style.cssText = btnStyle;
      containerBtn.appendChild(btnIframe);
    }

    return {
      bindEvents:{
        'ready': function() {
          //璁剧疆loading鐨勬牱寮�
          utils.cssRule('loading',
            '.loadingclass{display:inline-block;cursor:default;background: url(\''
            + this.options.themePath
            + this.options.theme +'/images/loading.gif\') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}\n' +
            '.loaderrorclass{display:inline-block;cursor:default;background: url(\''
            + this.options.themePath
            + this.options.theme +'/images/loaderror.png\') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;' +
            '}',
            this.document);
        },
        /* 鍒濆鍖栫畝鍗曚笂浼犳寜閽� */
        'simpleuploadbtnready': function(type, container) {
          containerBtn = container;
          me.afterConfigReady(initUploadBtn);
        }
      },
      outputRule: function(root){
        utils.each(root.getNodesByTagName('img'),function(n){
          if (/\b(loaderrorclass)|(bloaderrorclass)\b/.test(n.getAttr('class'))) {
            n.parentNode.removeChild(n);
          }
        });
      },
      commands: {
        'simpleupload': {
          queryCommandState: function () {
            return isLoaded ? 0:-1;
          }
        }
      }
    }
  });


// plugins/serverparam.js
  /**
   * 鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃璁剧疆鎻掍欢
   * @file
   * @since 1.2.6.1
   */
  UE.plugin.register('serverparam', function (){

    var me = this,
      serverParam = {};

    return {
      commands:{
        /**
         * 淇敼鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃,娓呴櫎鎵€鏈夐」
         * @command serverparam
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @example
         * ```javascript
         * editor.execCommand('serverparam');
         * editor.queryCommandValue('serverparam'); //杩斿洖绌�
         * ```
         */
        /**
         * 淇敼鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃,鍒犻櫎鎸囧畾椤�
         * @command serverparam
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @param { String } key 瑕佹竻闄ょ殑灞炴€�
         * @example
         * ```javascript
         * editor.execCommand('serverparam', 'name'); //鍒犻櫎灞炴€ame
         * ```
         */
        /**
         * 淇敼鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃,浣跨敤閿€兼坊鍔犻」
         * @command serverparam
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @param { String } key 瑕佹坊鍔犵殑灞炴€�
         * @param { String } value 瑕佹坊鍔犲睘鎬х殑鍊�
         * @example
         * ```javascript
         * editor.execCommand('serverparam', 'name', 'hello');
         * editor.queryCommandValue('serverparam'); //杩斿洖瀵硅薄 {'name': 'hello'}
         * ```
         */
        /**
         * 淇敼鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃,浼犲叆閿€煎瀵硅薄娣诲姞澶氶」
         * @command serverparam
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @param { Object } key 浼犲叆鐨勯敭鍊煎瀵硅薄
         * @example
         * ```javascript
         * editor.execCommand('serverparam', {'name': 'hello'});
         * editor.queryCommandValue('serverparam'); //杩斿洖瀵硅薄 {'name': 'hello'}
         * ```
         */
        /**
         * 淇敼鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃,浣跨敤鑷畾涔夊嚱鏁版坊鍔犲椤�
         * @command serverparam
         * @method execCommand
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @param { Function } key 鑷畾涔夎幏鍙栧弬鏁扮殑鍑芥暟
         * @example
         * ```javascript
         * editor.execCommand('serverparam', function(editor){
             *     return {'key': 'value'};
             * });
         * editor.queryCommandValue('serverparam'); //杩斿洖瀵硅薄 {'key': 'value'}
         * ```
         */

        /**
         * 鑾峰彇鏈嶅姟鍣ㄦ彁浜ょ殑棰濆鍙傛暟鍒楄〃
         * @command serverparam
         * @method queryCommandValue
         * @param { String } cmd 鍛戒护瀛楃涓�
         * @example
         * ```javascript
         * editor.queryCommandValue( 'serverparam' ); //杩斿洖瀵硅薄 {'key': 'value'}
         * ```
         */
        'serverparam':{
          execCommand:function (cmd, key, value) {
            if (key === undefined || key === null) { //涓嶄紶鍙傛暟,娓呯┖鍒楄〃
              serverParam = {};
            } else if (utils.isString(key)) { //浼犲叆閿€�
              if(value === undefined || value === null) {
                delete serverParam[key];
              } else {
                serverParam[key] = value;
              }
            } else if (utils.isObject(key)) { //浼犲叆瀵硅薄,瑕嗙洊鍒楄〃椤�
              utils.extend(serverParam, key, true);
            } else if (utils.isFunction(key)){ //浼犲叆鍑芥暟,娣诲姞鍒楄〃椤�
              utils.extend(serverParam, key(), true);
            }
          },
          queryCommandValue: function(){
            return serverParam || {};
          }
        }
      }
    }
  });


// plugins/insertfile.js
  /**
   * 鎻掑叆闄勪欢
   */
  UE.plugin.register('insertfile', function (){

    var me = this;

    function getFileIcon(url){
      var ext = url.substr(url.lastIndexOf('.') + 1).toLowerCase(),
        maps = {
          "rar":"icon_rar.gif",
          "zip":"icon_rar.gif",
          "tar":"icon_rar.gif",
          "gz":"icon_rar.gif",
          "bz2":"icon_rar.gif",
          "doc":"icon_doc.gif",
          "docx":"icon_doc.gif",
          "pdf":"icon_pdf.gif",
          "mp3":"icon_mp3.gif",
          "xls":"icon_xls.gif",
          "chm":"icon_chm.gif",
          "ppt":"icon_ppt.gif",
          "pptx":"icon_ppt.gif",
          "avi":"icon_mv.gif",
          "rmvb":"icon_mv.gif",
          "wmv":"icon_mv.gif",
          "flv":"icon_mv.gif",
          "swf":"icon_mv.gif",
          "rm":"icon_mv.gif",
          "exe":"icon_exe.gif",
          "psd":"icon_psd.gif",
          "txt":"icon_txt.gif",
          "jpg":"icon_jpg.gif",
          "png":"icon_jpg.gif",
          "jpeg":"icon_jpg.gif",
          "gif":"icon_jpg.gif",
          "ico":"icon_jpg.gif",
          "bmp":"icon_jpg.gif"
        };
      return maps[ext] ? maps[ext]:maps['txt'];
    }

    return {
      commands:{
        'insertfile': {
          execCommand: function (command, filelist){
            filelist = utils.isArray(filelist) ? filelist : [filelist];

            var i, item, icon, title,
              html = '',
              URL = me.getOpt('UEDITOR_HOME_URL'),
              iconDir = URL + (URL.substr(URL.length - 1) == '/' ? '':'/') + 'dialogs/attachment/fileTypeImages/';
            for (i = 0; i < filelist.length; i++) {
              item = filelist[i];
              icon = iconDir + getFileIcon(item.url);
              title = item.title || item.url.substr(item.url.lastIndexOf('/') + 1);
              html += '<p style="line-height: 16px;">' +
                '<img style="vertical-align: middle; margin-right: 2px;" src="'+ icon + '" _src="' + icon + '" />' +
                '<a style="font-size:12px; color:#0066cc;" href="' + item.url +'" title="' + title + '">' + title + '</a>' +
                '</p>';
            }
            me.execCommand('insertHtml', html);
            me.fireEvent('afterUpfile', filelist);
          }
        }
      }
    }
  });




// plugins/xssFilter.js
  /**
   * @file xssFilter.js
   * @desc xss杩囨护鍣�
   * @author robbenmu
   */

  UE.plugins.xssFilter = function() {

    var config = UEDITOR_CONFIG;
    var whitList = config.whitList;

    function filter(node) {

      var tagName = node.tagName;
      var attrs = node.attrs;

      if (!whitList.hasOwnProperty(tagName)) {
        node.parentNode.removeChild(node);
        return false;
      }

      UE.utils.each(attrs, function (val, key) {

        if (whitList[tagName].indexOf(key) === -1) {
          node.setAttr(key);
        }
      });
    }

    // 娣诲姞inserthtml\paste绛夋搷浣滅敤鐨勮繃婊よ鍒�
    if (whitList && config.xssFilterRules) {
      this.options.filterRules = function () {

        var result = {};

        UE.utils.each(whitList, function(val, key) {
          result[key] = function (node) {
            return filter(node);
          };
        });

        return result;
      }();
    }

    var tagList = [];

    UE.utils.each(whitList, function (val, key) {
      tagList.push(key);
    });

    // 娣诲姞input杩囨护瑙勫垯
    //
    if (whitList && config.inputXssFilter) {
      this.addInputRule(function (root) {

        root.traversal(function(node) {
          if (node.type !== 'element') {
            return false;
          }
          filter(node);
        });
      });
    }
    // 娣诲姞output杩囨护瑙勫垯
    //
    if (whitList && config.outputXssFilter) {
      this.addOutputRule(function (root) {

        root.traversal(function(node) {
          if (node.type !== 'element') {
            return false;
          }
          filter(node);
        });
      });
    }

  };


// ui/ui.js
  var baidu = baidu || {};
  baidu.editor = baidu.editor || {};
  UE.ui = baidu.editor.ui = {};

// ui/uiutils.js
  (function (){
    var browser = baidu.editor.browser,
      domUtils = baidu.editor.dom.domUtils;

    var magic = '$EDITORUI';
    var root = window[magic] = {};
    var uidMagic = 'ID' + magic;
    var uidCount = 0;

    var uiUtils = baidu.editor.ui.uiUtils = {
      uid: function (obj){
        return (obj ? obj[uidMagic] || (obj[uidMagic] = ++ uidCount) : ++ uidCount);
      },
      hook: function ( fn, callback ) {
        var dg;
        if (fn && fn._callbacks) {
          dg = fn;
        } else {
          dg = function (){
            var q;
            if (fn) {
              q = fn.apply(this, arguments);
            }
            var callbacks = dg._callbacks;
            var k = callbacks.length;
            while (k --) {
              var r = callbacks[k].apply(this, arguments);
              if (q === undefined) {
                q = r;
              }
            }
            return q;
          };
          dg._callbacks = [];
        }
        dg._callbacks.push(callback);
        return dg;
      },
      createElementByHtml: function (html){
        var el = document.createElement('div');
        el.innerHTML = html;
        el = el.firstChild;
        el.parentNode.removeChild(el);
        return el;
      },
      getViewportElement: function (){
        return (browser.ie && browser.quirks) ?
          document.body : document.documentElement;
      },
      getClientRect: function (element){
        var bcr;
        //trace  IE6涓嬪湪鎺у埗缂栬緫鍣ㄦ樉闅愭椂鍙兘浼氭姤閿欙紝catch涓€涓�
        try{
          bcr = element.getBoundingClientRect();
        }catch(e){
          bcr={left:0,top:0,height:0,width:0}
        }
        var rect = {
          left: Math.round(bcr.left),
          top: Math.round(bcr.top),
          height: Math.round(bcr.bottom - bcr.top),
          width: Math.round(bcr.right - bcr.left)
        };
        var doc;
        while ((doc = element.ownerDocument) !== document &&
        (element = domUtils.getWindow(doc).frameElement)) {
          bcr = element.getBoundingClientRect();
          rect.left += bcr.left;
          rect.top += bcr.top;
        }
        rect.bottom = rect.top + rect.height;
        rect.right = rect.left + rect.width;
        return rect;
      },
      getViewportRect: function (){
        var viewportEl = uiUtils.getViewportElement();
        var width = (window.innerWidth || viewportEl.clientWidth) | 0;
        var height = (window.innerHeight ||viewportEl.clientHeight) | 0;
        return {
          left: 0,
          top: 0,
          height: height,
          width: width,
          bottom: height,
          right: width
        };
      },
      setViewportOffset: function (element, offset){
        var rect;
        var fixedLayer = uiUtils.getFixedLayer();
        if (element.parentNode === fixedLayer) {
          element.style.left = offset.left + 'px';
          element.style.top = offset.top + 'px';
        } else {
          domUtils.setViewportOffset(element, offset);
        }
      },
      getEventOffset: function (evt){
        var el = evt.target || evt.srcElement;
        var rect = uiUtils.getClientRect(el);
        var offset = uiUtils.getViewportOffsetByEvent(evt);
        return {
          left: offset.left - rect.left,
          top: offset.top - rect.top
        };
      },
      getViewportOffsetByEvent: function (evt){
        var el = evt.target || evt.srcElement;
        var frameEl = domUtils.getWindow(el).frameElement;
        var offset = {
          left: evt.clientX,
          top: evt.clientY
        };
        if (frameEl && el.ownerDocument !== document) {
          var rect = uiUtils.getClientRect(frameEl);
          offset.left += rect.left;
          offset.top += rect.top;
        }
        return offset;
      },
      setGlobal: function (id, obj){
        root[id] = obj;
        return magic + '["' + id  + '"]';
      },
      unsetGlobal: function (id){
        delete root[id];
      },
      copyAttributes: function (tgt, src){
        var attributes = src.attributes;
        var k = attributes.length;
        while (k --) {
          var attrNode = attributes[k];
          if ( attrNode.nodeName != 'style' && attrNode.nodeName != 'class' && (!browser.ie || attrNode.specified) ) {
            tgt.setAttribute(attrNode.nodeName, attrNode.nodeValue);
          }
        }
        if (src.className) {
          domUtils.addClass(tgt,src.className);
        }
        if (src.style.cssText) {
          tgt.style.cssText += ';' + src.style.cssText;
        }
      },
      removeStyle: function (el, styleName){
        if (el.style.removeProperty) {
          el.style.removeProperty(styleName);
        } else if (el.style.removeAttribute) {
          el.style.removeAttribute(styleName);
        } else throw '';
      },
      contains: function (elA, elB){
        return elA && elB && (elA === elB ? false : (
            elA.contains ? elA.contains(elB) :
            elA.compareDocumentPosition(elB) & 16
          ));
      },
      startDrag: function (evt, callbacks,doc){
        var doc = doc || document;
        var startX = evt.clientX;
        var startY = evt.clientY;
        function handleMouseMove(evt){
          var x = evt.clientX - startX;
          var y = evt.clientY - startY;
          callbacks.ondragmove(x, y,evt);
          if (evt.stopPropagation) {
            evt.stopPropagation();
          } else {
            evt.cancelBubble = true;
          }
        }
        if (doc.addEventListener) {
          function handleMouseUp(evt){
            doc.removeEventListener('mousemove', handleMouseMove, true);
            doc.removeEventListener('mouseup', handleMouseUp, true);
            window.removeEventListener('mouseup', handleMouseUp, true);
            callbacks.ondragstop();
          }
          doc.addEventListener('mousemove', handleMouseMove, true);
          doc.addEventListener('mouseup', handleMouseUp, true);
          window.addEventListener('mouseup', handleMouseUp, true);

          evt.preventDefault();
        } else {
          var elm = evt.srcElement;
          elm.setCapture();
          function releaseCaptrue(){
            elm.releaseCapture();
            elm.detachEvent('onmousemove', handleMouseMove);
            elm.detachEvent('onmouseup', releaseCaptrue);
            elm.detachEvent('onlosecaptrue', releaseCaptrue);
            callbacks.ondragstop();
          }
          elm.attachEvent('onmousemove', handleMouseMove);
          elm.attachEvent('onmouseup', releaseCaptrue);
          elm.attachEvent('onlosecaptrue', releaseCaptrue);
          evt.returnValue = false;
        }
        callbacks.ondragstart();
      },
      getFixedLayer: function (){
        var layer = document.getElementById('edui_fixedlayer');
        if (layer == null) {
          layer = document.createElement('div');
          layer.id = 'edui_fixedlayer';
          document.body.appendChild(layer);
          if (browser.ie && browser.version <= 8) {
            layer.style.position = 'absolute';
            bindFixedLayer();
            setTimeout(updateFixedOffset);
          } else {
            layer.style.position = 'fixed';
          }
          layer.style.left = '0';
          layer.style.top = '0';
          layer.style.width = '0';
          layer.style.height = '0';
        }
        return layer;
      },
      makeUnselectable: function (element){
        if (browser.opera || (browser.ie && browser.version < 9)) {
          element.unselectable = 'on';
          if (element.hasChildNodes()) {
            for (var i=0; i<element.childNodes.length; i++) {
              if (element.childNodes[i].nodeType == 1) {
                uiUtils.makeUnselectable(element.childNodes[i]);
              }
            }
          }
        } else {
          if (element.style.MozUserSelect !== undefined) {
            element.style.MozUserSelect = 'none';
          } else if (element.style.WebkitUserSelect !== undefined) {
            element.style.WebkitUserSelect = 'none';
          } else if (element.style.KhtmlUserSelect !== undefined) {
            element.style.KhtmlUserSelect = 'none';
          }
        }
      }
    };
    function updateFixedOffset(){
      var layer = document.getElementById('edui_fixedlayer');
      uiUtils.setViewportOffset(layer, {
        left: 0,
        top: 0
      });
//        layer.style.display = 'none';
//        layer.style.display = 'block';

      //#trace: 1354
//        setTimeout(updateFixedOffset);
    }
    function bindFixedLayer(adjOffset){
      domUtils.on(window, 'scroll', updateFixedOffset);
      domUtils.on(window, 'resize', baidu.editor.utils.defer(updateFixedOffset, 0, true));
    }
  })();


// ui/uibase.js
  (function () {
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      EventBase = baidu.editor.EventBase,
      UIBase = baidu.editor.ui.UIBase = function () {
      };

    UIBase.prototype = {
      className:'',
      uiName:'',
      initOptions:function (options) {
        var me = this;
        for (var k in options) {
          me[k] = options[k];
        }
        this.id = this.id || 'edui' + uiUtils.uid();
      },
      initUIBase:function () {
        this._globalKey = utils.unhtml(uiUtils.setGlobal(this.id, this));
      },
      render:function (holder) {
        var html = this.renderHtml();
        var el = uiUtils.createElementByHtml(html);

        //by xuheng 缁欐瘡涓猲ode娣诲姞class
        var list = domUtils.getElementsByTagName(el, "*");
        var theme = "edui-" + (this.theme || this.editor.options.theme);
        var layer = document.getElementById('edui_fixedlayer');
        for (var i = 0, node; node = list[i++];) {
          domUtils.addClass(node, theme);
        }
        domUtils.addClass(el, theme);
        if(layer){
          layer.className="";
          domUtils.addClass(layer,theme);
        }

        var seatEl = this.getDom();
        if (seatEl != null) {
          seatEl.parentNode.replaceChild(el, seatEl);
          uiUtils.copyAttributes(el, seatEl);
        } else {
          if (typeof holder == 'string') {
            holder = document.getElementById(holder);
          }
          holder = holder || uiUtils.getFixedLayer();
          domUtils.addClass(holder, theme);
          holder.appendChild(el);
        }
        this.postRender();
      },
      getDom:function (name) {
        if (!name) {
          return document.getElementById(this.id);
        } else {
          return document.getElementById(this.id + '_' + name);
        }
      },
      postRender:function () {
        this.fireEvent('postrender');
      },
      getHtmlTpl:function () {
        return '';
      },
      formatHtml:function (tpl) {
        var prefix = 'edui-' + this.uiName;
        return (tpl
          .replace(/##/g, this.id)
          .replace(/%%-/g, this.uiName ? prefix + '-' : '')
          .replace(/%%/g, (this.uiName ? prefix : '') + ' ' + this.className)
          .replace(/\$\$/g, this._globalKey));
      },
      renderHtml:function () {
        return this.formatHtml(this.getHtmlTpl());
      },
      dispose:function () {
        var box = this.getDom();
        if (box) baidu.editor.dom.domUtils.remove(box);
        uiUtils.unsetGlobal(this.id);
      }
    };
    utils.inherits(UIBase, EventBase);
  })();


// ui/separator.js
  (function (){
    var utils = baidu.editor.utils,
      UIBase = baidu.editor.ui.UIBase,
      Separator = baidu.editor.ui.Separator = function (options){
        this.initOptions(options);
        this.initSeparator();
      };
    Separator.prototype = {
      uiName: 'separator',
      initSeparator: function (){
        this.initUIBase();
      },
      getHtmlTpl: function (){
        return '<div id="##" class="edui-box %%"></div>';
      }
    };
    utils.inherits(Separator, UIBase);

  })();


// ui/mask.js
///import core
///import uicore
  (function (){
    var utils = baidu.editor.utils,
      domUtils = baidu.editor.dom.domUtils,
      UIBase = baidu.editor.ui.UIBase,
      uiUtils = baidu.editor.ui.uiUtils;

    var Mask = baidu.editor.ui.Mask = function (options){
      this.initOptions(options);
      this.initUIBase();
    };
    Mask.prototype = {
      getHtmlTpl: function (){
        return '<div id="##" class="edui-mask %%" onclick="return $$._onClick(event, this);" onmousedown="return $$._onMouseDown(event, this);"></div>';
      },
      postRender: function (){
        var me = this;
        domUtils.on(window, 'resize', function (){
          setTimeout(function (){
            if (!me.isHidden()) {
              me._fill();
            }
          });
        });
      },
      show: function (zIndex){
        this._fill();
        this.getDom().style.display = '';
        this.getDom().style.zIndex = zIndex;
      },
      hide: function (){
        this.getDom().style.display = 'none';
        this.getDom().style.zIndex = '';
      },
      isHidden: function (){
        return this.getDom().style.display == 'none';
      },
      _onMouseDown: function (){
        return false;
      },
      _onClick: function (e, target){
        this.fireEvent('click', e, target);
      },
      _fill: function (){
        var el = this.getDom();
        var vpRect = uiUtils.getViewportRect();
        el.style.width = vpRect.width + 'px';
        el.style.height = vpRect.height + 'px';
      }
    };
    utils.inherits(Mask, UIBase);
  })();


// ui/popup.js
///import core
///import uicore
  (function () {
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      domUtils = baidu.editor.dom.domUtils,
      UIBase = baidu.editor.ui.UIBase,
      Popup = baidu.editor.ui.Popup = function (options){
        this.initOptions(options);
        this.initPopup();
      };

    var allPopups = [];
    function closeAllPopup( evt,el ){
      for ( var i = 0; i < allPopups.length; i++ ) {
        var pop = allPopups[i];
        if (!pop.isHidden()) {
          if (pop.queryAutoHide(el) !== false) {
            if(evt&&/scroll/ig.test(evt.type)&&pop.className=="edui-wordpastepop")   return;
            pop.hide();
          }
        }
      }

      if(allPopups.length)
        pop.editor.fireEvent("afterhidepop");
    }

    Popup.postHide = closeAllPopup;

    var ANCHOR_CLASSES = ['edui-anchor-topleft','edui-anchor-topright',
      'edui-anchor-bottomleft','edui-anchor-bottomright'];
    Popup.prototype = {
      SHADOW_RADIUS: 5,
      content: null,
      _hidden: false,
      autoRender: true,
      canSideLeft: true,
      canSideUp: true,
      initPopup: function (){
        this.initUIBase();
        allPopups.push( this );
      },
      getHtmlTpl: function (){
        return '<div id="##" class="edui-popup %%" onmousedown="return false;">' +
          ' <div id="##_body" class="edui-popup-body">' +
          ' <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe>' +
          ' <div class="edui-shadow"></div>' +
          ' <div id="##_content" class="edui-popup-content">' +
          this.getContentHtmlTpl() +
          '  </div>' +
          ' </div>' +
          '</div>';
      },
      getContentHtmlTpl: function (){
        if(this.content){
          if (typeof this.content == 'string') {
            return this.content;
          }
          return this.content.renderHtml();
        }else{
          return ''
        }

      },
      _UIBase_postRender: UIBase.prototype.postRender,
      postRender: function (){


        if (this.content instanceof UIBase) {
          this.content.postRender();
        }

        //鎹曡幏榧犳爣婊氳疆
        if( this.captureWheel && !this.captured ) {

          this.captured = true;

          var winHeight = ( document.documentElement.clientHeight || document.body.clientHeight )  - 80,
            _height = this.getDom().offsetHeight,
            _top = uiUtils.getClientRect( this.combox.getDom() ).top,
            content = this.getDom('content'),
            ifr = this.getDom('body').getElementsByTagName('iframe'),
            me = this;

          ifr.length && ( ifr = ifr[0] );

          while( _top + _height > winHeight ) {
            _height -= 30;
          }
          content.style.height = _height + 'px';
          //鍚屾鏇存敼iframe楂樺害
          ifr && ( ifr.style.height = _height + 'px' );

          //闃绘鍦╟ombox涓婄殑榧犳爣婊氳疆浜嬩欢, 闃叉鐢ㄦ埛鐨勬甯告搷浣滆璇В
          if( window.XMLHttpRequest ) {

            domUtils.on( content, ( 'onmousewheel' in document.body ) ? 'mousewheel' :'DOMMouseScroll' , function(e){

              if(e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }

              if( e.wheelDelta ) {

                content.scrollTop -= ( e.wheelDelta / 120 )*60;

              } else {

                content.scrollTop -= ( e.detail / -3 )*60;

              }

            });

          } else {

            //ie6
            domUtils.on( this.getDom(), 'mousewheel' , function(e){

              e.returnValue = false;

              me.getDom('content').scrollTop -= ( e.wheelDelta / 120 )*60;

            });

          }

        }
        this.fireEvent('postRenderAfter');
        this.hide(true);
        this._UIBase_postRender();
      },
      _doAutoRender: function (){
        if (!this.getDom() && this.autoRender) {
          this.render();
        }
      },
      mesureSize: function (){
        var box = this.getDom('content');
        return uiUtils.getClientRect(box);
      },
      fitSize: function (){
        if( this.captureWheel && this.sized ) {
          return this.__size;
        }
        this.sized = true;
        var popBodyEl = this.getDom('body');
        popBodyEl.style.width = '';
        popBodyEl.style.height = '';
        var size = this.mesureSize();
        if( this.captureWheel ) {
          popBodyEl.style.width =  -(-20 -size.width) + 'px';
          var height = parseInt( this.getDom('content').style.height, 10 );
          !window.isNaN( height ) && ( size.height = height );
        } else {
          popBodyEl.style.width =  size.width + 'px';
        }
        popBodyEl.style.height = size.height + 'px';
        this.__size = size;
        this.captureWheel && (this.getDom('content').style.overflow = 'auto');
        return size;
      },
      showAnchor: function ( element, hoz ){
        this.showAnchorRect( uiUtils.getClientRect( element ), hoz );
      },
      showAnchorRect: function ( rect, hoz, adj ){
        this._doAutoRender();
        var vpRect = uiUtils.getViewportRect();
        this.getDom().style.visibility = 'hidden';
        this._show();
        var popSize = this.fitSize();

        var sideLeft, sideUp, left, top;
        if (hoz) {
          sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
          sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
          left = (sideLeft ? rect.left - popSize.width : rect.right);
          top = (sideUp ? rect.bottom - popSize.height : rect.top);
        } else {
          sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
          sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
          left = (sideLeft ? rect.right - popSize.width : rect.left);
          top = (sideUp ? rect.top - popSize.height : rect.bottom);
        }

        var popEl = this.getDom();
        uiUtils.setViewportOffset(popEl, {
          left: left,
          top: top
        });
        domUtils.removeClasses(popEl, ANCHOR_CLASSES);
        popEl.className += ' ' + ANCHOR_CLASSES[(sideUp ? 1 : 0) * 2 + (sideLeft ? 1 : 0)];
        if(this.editor){
          popEl.style.zIndex = this.editor.container.style.zIndex * 1 + 10;
          baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = popEl.style.zIndex - 1;
        }
        this.getDom().style.visibility = 'visible';

      },
      showAt: function (offset) {
        var left = offset.left;
        var top = offset.top;
        var rect = {
          left: left,
          top: top,
          right: left,
          bottom: top,
          height: 0,
          width: 0
        };
        this.showAnchorRect(rect, false, true);
      },
      _show: function (){
        if (this._hidden) {
          var box = this.getDom();
          box.style.display = '';
          this._hidden = false;
//                if (box.setActive) {
//                    box.setActive();
//                }
          this.fireEvent('show');
        }
      },
      isHidden: function (){
        return this._hidden;
      },
      show: function (){
        this._doAutoRender();
        this._show();
      },
      hide: function (notNofity){
        if (!this._hidden && this.getDom()) {
          this.getDom().style.display = 'none';
          this._hidden = true;
          if (!notNofity) {
            this.fireEvent('hide');
          }
        }
      },
      queryAutoHide: function (el){
        return !el || !uiUtils.contains(this.getDom(), el);
      }
    };
    utils.inherits(Popup, UIBase);

    domUtils.on( document, 'mousedown', function ( evt ) {
      var el = evt.target || evt.srcElement;
      closeAllPopup( evt,el );
    } );
    domUtils.on( window, 'scroll', function (evt,el) {
      closeAllPopup( evt,el );
    } );

  })();


// ui/colorpicker.js
///import core
///import uicore
  (function (){
    var utils = baidu.editor.utils,
      UIBase = baidu.editor.ui.UIBase,
      ColorPicker = baidu.editor.ui.ColorPicker = function (options){
        this.initOptions(options);
        this.noColorText = this.noColorText || this.editor.getLang("clearColor");
        this.initUIBase();
      };

    ColorPicker.prototype = {
      getHtmlTpl: function (){
        return genColorPicker(this.noColorText,this.editor);
      },
      _onTableClick: function (evt){
        var tgt = evt.target || evt.srcElement;
        var color = tgt.getAttribute('data-color');
        if (color) {
          this.fireEvent('pickcolor', color);
        }
      },
      _onTableOver: function (evt){
        var tgt = evt.target || evt.srcElement;
        var color = tgt.getAttribute('data-color');
        if (color) {
          this.getDom('preview').style.backgroundColor = color;
        }
      },
      _onTableOut: function (){
        this.getDom('preview').style.backgroundColor = '';
      },
      _onPickNoColor: function (){
        this.fireEvent('picknocolor');
      }
    };
    utils.inherits(ColorPicker, UIBase);

    var COLORS = (
    'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
    'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
    'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
    'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
    'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
    '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
    'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

    function genColorPicker(noColorText,editor){
      var html = '<div id="##" class="edui-colorpicker %%">' +
        '<div class="edui-colorpicker-topbar edui-clearfix">' +
        '<div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div>' +
        '<div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+ noColorText +'</div>' +
        '</div>' +
        '<table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0">' +
        '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+editor.getLang("themeColor")+'</td> </tr>'+
        '<tr class="edui-colorpicker-tablefirstrow" >';
      for (var i=0; i<COLORS.length; i++) {
        if (i && i%10 === 0) {
          html += '</tr>'+(i==60?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+editor.getLang("standardColor")+'</td></tr>':'')+'<tr'+(i==60?' class="edui-colorpicker-tablefirstrow"':'')+'>';
        }
        html += i<70 ? '<td style="padding: 0 2px;"><a hidefocus title="'+COLORS[i]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell"' +
        ' data-color="#'+ COLORS[i] +'"'+
        ' style="background-color:#'+ COLORS[i] +';border:solid #ccc;'+
        (i<10 || i>=60?'border-width:1px;':
          i>=10&&i<20?'border-width:1px 1px 0 1px;':

            'border-width:0 1px 0 1px;')+
        '"' +
        '></a></td>':'';
      }
      html += '</tr></table></div>';
      return html;
    }
  })();


// ui/tablepicker.js
///import core
///import uicore
  (function (){
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      UIBase = baidu.editor.ui.UIBase;

    var TablePicker = baidu.editor.ui.TablePicker = function (options){
      this.initOptions(options);
      this.initTablePicker();
    };
    TablePicker.prototype = {
      defaultNumRows: 10,
      defaultNumCols: 10,
      maxNumRows: 20,
      maxNumCols: 20,
      numRows: 10,
      numCols: 10,
      lengthOfCellSide: 22,
      initTablePicker: function (){
        this.initUIBase();
      },
      getHtmlTpl: function (){
        var me = this;
        return '<div id="##" class="edui-tablepicker %%">' +
          '<div class="edui-tablepicker-body">' +
          '<div class="edui-infoarea">' +
          '<span id="##_label" class="edui-label"></span>' +
          '</div>' +
          '<div class="edui-pickarea"' +
          ' onmousemove="$$._onMouseMove(event, this);"' +
          ' onmouseover="$$._onMouseOver(event, this);"' +
          ' onmouseout="$$._onMouseOut(event, this);"' +
          ' onclick="$$._onClick(event, this);"' +
          '>' +
          '<div id="##_overlay" class="edui-overlay"></div>' +
          '</div>' +
          '</div>' +
          '</div>';
      },
      _UIBase_render: UIBase.prototype.render,
      render: function (holder){
        this._UIBase_render(holder);
        this.getDom('label').innerHTML = '0'+this.editor.getLang("t_row")+' x 0'+this.editor.getLang("t_col");
      },
      _track: function (numCols, numRows){
        var style = this.getDom('overlay').style;
        var sideLen = this.lengthOfCellSide;
        style.width = numCols * sideLen + 'px';
        style.height = numRows * sideLen + 'px';
        var label = this.getDom('label');
        label.innerHTML = numCols +this.editor.getLang("t_col")+' x ' + numRows + this.editor.getLang("t_row");
        this.numCols = numCols;
        this.numRows = numRows;
      },
      _onMouseOver: function (evt, el){
        var rel = evt.relatedTarget || evt.fromElement;
        if (!uiUtils.contains(el, rel) && el !== rel) {
          this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
          this.getDom('overlay').style.visibility = '';
        }
      },
      _onMouseOut: function (evt, el){
        var rel = evt.relatedTarget || evt.toElement;
        if (!uiUtils.contains(el, rel) && el !== rel) {
          this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
          this.getDom('overlay').style.visibility = 'hidden';
        }
      },
      _onMouseMove: function (evt, el){
        var style = this.getDom('overlay').style;
        var offset = uiUtils.getEventOffset(evt);
        var sideLen = this.lengthOfCellSide;
        var numCols = Math.ceil(offset.left / sideLen);
        var numRows = Math.ceil(offset.top / sideLen);
        this._track(numCols, numRows);
      },
      _onClick: function (){
        this.fireEvent('picktable', this.numCols, this.numRows);
      }
    };
    utils.inherits(TablePicker, UIBase);
  })();


// ui/stateful.js
  (function (){
    var browser = baidu.editor.browser,
      domUtils = baidu.editor.dom.domUtils,
      uiUtils = baidu.editor.ui.uiUtils;

    var TPL_STATEFUL = 'onmousedown="$$.Stateful_onMouseDown(event, this);"' +
      ' onmouseup="$$.Stateful_onMouseUp(event, this);"' +
      ( browser.ie ? (
      ' onmouseenter="$$.Stateful_onMouseEnter(event, this);"' +
      ' onmouseleave="$$.Stateful_onMouseLeave(event, this);"' )
        : (
      ' onmouseover="$$.Stateful_onMouseOver(event, this);"' +
      ' onmouseout="$$.Stateful_onMouseOut(event, this);"' ));

    baidu.editor.ui.Stateful = {
      alwalysHoverable: false,
      target:null,//鐩爣鍏冪礌鍜宼his鎸囧悜dom涓嶄竴鏍�
      Stateful_init: function (){
        this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
        this.getHtmlTpl = this.Stateful_getHtmlTpl;
      },
      Stateful_getHtmlTpl: function (){
        var tpl = this._Stateful_dGetHtmlTpl();
        // 浣跨敤function閬垮厤$杞箟
        return tpl.replace(/stateful/g, function (){ return TPL_STATEFUL; });
      },
      Stateful_onMouseEnter: function (evt, el){
        this.target=el;
        if (!this.isDisabled() || this.alwalysHoverable) {
          this.addState('hover');
          this.fireEvent('over');
        }
      },
      Stateful_onMouseLeave: function (evt, el){
        if (!this.isDisabled() || this.alwalysHoverable) {
          this.removeState('hover');
          this.removeState('active');
          this.fireEvent('out');
        }
      },
      Stateful_onMouseOver: function (evt, el){
        var rel = evt.relatedTarget;
        if (!uiUtils.contains(el, rel) && el !== rel) {
          this.Stateful_onMouseEnter(evt, el);
        }
      },
      Stateful_onMouseOut: function (evt, el){
        var rel = evt.relatedTarget;
        if (!uiUtils.contains(el, rel) && el !== rel) {
          this.Stateful_onMouseLeave(evt, el);
        }
      },
      Stateful_onMouseDown: function (evt, el){
        if (!this.isDisabled()) {
          this.addState('active');
        }
      },
      Stateful_onMouseUp: function (evt, el){
        if (!this.isDisabled()) {
          this.removeState('active');
        }
      },
      Stateful_postRender: function (){
        if (this.disabled && !this.hasState('disabled')) {
          this.addState('disabled');
        }
      },
      hasState: function (state){
        return domUtils.hasClass(this.getStateDom(), 'edui-state-' + state);
      },
      addState: function (state){
        if (!this.hasState(state)) {
          this.getStateDom().className += ' edui-state-' + state;
        }
      },
      removeState: function (state){
        if (this.hasState(state)) {
          domUtils.removeClasses(this.getStateDom(), ['edui-state-' + state]);
        }
      },
      getStateDom: function (){
        return this.getDom('state');
      },
      isChecked: function (){
        return this.hasState('checked');
      },
      setChecked: function (checked){
        if (!this.isDisabled() && checked) {
          this.addState('checked');
        } else {
          this.removeState('checked');
        }
      },
      isDisabled: function (){
        return this.hasState('disabled');
      },
      setDisabled: function (disabled){
        if (disabled) {
          this.removeState('hover');
          this.removeState('checked');
          this.removeState('active');
          this.addState('disabled');
        } else {
          this.removeState('disabled');
        }
      }
    };
  })();


// ui/button.js
///import core
///import uicore
///import ui/stateful.js
  (function (){
    var utils = baidu.editor.utils,
      UIBase = baidu.editor.ui.UIBase,
      Stateful = baidu.editor.ui.Stateful,
      Button = baidu.editor.ui.Button = function (options){
        if(options.name){
          var btnName = options.name;
          var cssRules = options.cssRules;
          if(!options.className){
            options.className =  'edui-for-' + btnName;
          }
          options.cssRules = '.edui-default  .edui-for-'+ btnName +' .edui-icon {'+ cssRules +'}'
        }
        this.initOptions(options);
        this.initButton();
      };
    Button.prototype = {
      uiName: 'button',
      label: '',
      title: '',
      showIcon: true,
      showText: true,
      cssRules:'',
      initButton: function (){
        this.initUIBase();
        this.Stateful_init();
        if(this.cssRules){
          utils.cssRule('edui-customize-'+this.name+'-style',this.cssRules);
        }
      },
      getHtmlTpl: function (){
        return '<div id="##" class="edui-box %%">' +
          '<div id="##_state" stateful>' +
          '<div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : '') +
          ' class="%%-body" onmousedown="return $$._onMouseDown(event, this);" onclick="return $$._onClick(event, this);">' +
          (this.showIcon ? '<div class="edui-box edui-icon"></div>' : '') +
          (this.showText ? '<div class="edui-box edui-label">' + this.label + '</div>' : '') +
          '</div>' +
          '</div>' +
          '</div></div>';
      },
      postRender: function (){
        this.Stateful_postRender();
        this.setDisabled(this.disabled)
      },
      _onMouseDown: function (e){
        var target = e.target || e.srcElement,
          tagName = target && target.tagName && target.tagName.toLowerCase();
        if (tagName == 'input' || tagName == 'object' || tagName == 'object') {
          return false;
        }
      },
      _onClick: function (){
        if (!this.isDisabled()) {
          this.fireEvent('click');
        }
      },
      setTitle: function(text){
        var label = this.getDom('label');
        label.innerHTML = text;
      }
    };
    utils.inherits(Button, UIBase);
    utils.extend(Button.prototype, Stateful);

  })();


// ui/splitbutton.js
///import core
///import uicore
///import ui/stateful.js
  (function (){
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      domUtils = baidu.editor.dom.domUtils,
      UIBase = baidu.editor.ui.UIBase,
      Stateful = baidu.editor.ui.Stateful,
      SplitButton = baidu.editor.ui.SplitButton = function (options){
        this.initOptions(options);
        this.initSplitButton();
      };
    SplitButton.prototype = {
      popup: null,
      uiName: 'splitbutton',
      title: '',
      initSplitButton: function (){
        this.initUIBase();
        this.Stateful_init();
        var me = this;
        if (this.popup != null) {
          var popup = this.popup;
          this.popup = null;
          this.setPopup(popup);
        }
      },
      _UIBase_postRender: UIBase.prototype.postRender,
      postRender: function (){
        this.Stateful_postRender();
        this._UIBase_postRender();
      },
      setPopup: function (popup){
        if (this.popup === popup) return;
        if (this.popup != null) {
          this.popup.dispose();
        }
        popup.addListener('show', utils.bind(this._onPopupShow, this));
        popup.addListener('hide', utils.bind(this._onPopupHide, this));
        popup.addListener('postrender', utils.bind(function (){
          popup.getDom('body').appendChild(
            uiUtils.createElementByHtml('<div id="' +
              this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' +
              (uiUtils.getClientRect(this.getDom()).width + 20) + 'px"></div>')
          );
          popup.getDom().className += ' ' + this.className;
        }, this));
        this.popup = popup;
      },
      _onPopupShow: function (){
        this.addState('opened');
      },
      _onPopupHide: function (){
        this.removeState('opened');
      },
      getHtmlTpl: function (){
        return '<div id="##" class="edui-box %%">' +
          '<div '+ (this.title ? 'title="' + this.title + '"' : '') +' id="##_state" stateful><div class="%%-body">' +
          '<div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);">' +
          '<div class="edui-box edui-icon"></div>' +
          '</div>' +
          '<div class="edui-box edui-splitborder"></div>' +
          '<div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div>' +
          '</div></div></div>';
      },
      showPopup: function (){
        // 褰損opup寰€涓婂脊鍑虹殑鏃跺€欙紝鍋氱壒娈婂鐞�
        var rect = uiUtils.getClientRect(this.getDom());
        rect.top -= this.popup.SHADOW_RADIUS;
        rect.height += this.popup.SHADOW_RADIUS;
        this.popup.showAnchorRect(rect);
      },
      _onArrowClick: function (event, el){
        if (!this.isDisabled()) {
          this.showPopup();
        }
      },
      _onButtonClick: function (){
        if (!this.isDisabled()) {
          this.fireEvent('buttonclick');
        }
      }
    };
    utils.inherits(SplitButton, UIBase);
    utils.extend(SplitButton.prototype, Stateful, true);

  })();


// ui/colorbutton.js
///import core
///import uicore
///import ui/colorpicker.js
///import ui/popup.js
///import ui/splitbutton.js
  (function (){
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      ColorPicker = baidu.editor.ui.ColorPicker,
      Popup = baidu.editor.ui.Popup,
      SplitButton = baidu.editor.ui.SplitButton,
      ColorButton = baidu.editor.ui.ColorButton = function (options){
        this.initOptions(options);
        this.initColorButton();
      };
    ColorButton.prototype = {
      initColorButton: function (){
        var me = this;
        this.popup = new Popup({
          content: new ColorPicker({
            noColorText: me.editor.getLang("clearColor"),
            editor:me.editor,
            onpickcolor: function (t, color){
              me._onPickColor(color);
            },
            onpicknocolor: function (t, color){
              me._onPickNoColor(color);
            }
          }),
          editor:me.editor
        });
        this.initSplitButton();
      },
      _SplitButton_postRender: SplitButton.prototype.postRender,
      postRender: function (){
        this._SplitButton_postRender();
        this.getDom('button_body').appendChild(
          uiUtils.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>')
        );
        this.getDom().className += ' edui-colorbutton';
      },
      setColor: function (color){
        this.getDom('colorlump').style.backgroundColor = color;
        this.color = color;
      },
      _onPickColor: function (color){
        if (this.fireEvent('pickcolor', color) !== false) {
          this.setColor(color);
          this.popup.hide();
        }
      },
      _onPickNoColor: function (color){
        if (this.fireEvent('picknocolor') !== false) {
          this.popup.hide();
        }
      }
    };
    utils.inherits(ColorButton, SplitButton);

  })();


// ui/tablebutton.js
///import core
///import uicore
///import ui/popup.js
///import ui/tablepicker.js
///import ui/splitbutton.js
  (function (){
    var utils = baidu.editor.utils,
      Popup = baidu.editor.ui.Popup,
      TablePicker = baidu.editor.ui.TablePicker,
      SplitButton = baidu.editor.ui.SplitButton,
      TableButton = baidu.editor.ui.TableButton = function (options){
        this.initOptions(options);
        this.initTableButton();
      };
    TableButton.prototype = {
      initTableButton: function (){
        var me = this;
        this.popup = new Popup({
          content: new TablePicker({
            editor:me.editor,
            onpicktable: function (t, numCols, numRows){
              me._onPickTable(numCols, numRows);
            }
          }),
          'editor':me.editor
        });
        this.initSplitButton();
      },
      _onPickTable: function (numCols, numRows){
        if (this.fireEvent('picktable', numCols, numRows) !== false) {
          this.popup.hide();
        }
      }
    };
    utils.inherits(TableButton, SplitButton);

  })();


// ui/autotypesetpicker.js
///import core
///import uicore
  (function () {
    var utils = baidu.editor.utils,
      UIBase = baidu.editor.ui.UIBase;

    var AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker = function (options) {
      this.initOptions(options);
      this.initAutoTypeSetPicker();
    };
    AutoTypeSetPicker.prototype = {
      initAutoTypeSetPicker:function () {
        this.initUIBase();
      },
      getHtmlTpl:function () {
        var me = this.editor,
          opt = me.options.autotypeset,
          lang = me.getLang("autoTypeSet");

        var textAlignInputName = 'textAlignValue' + me.uid,
          imageBlockInputName = 'imageBlockLineValue' + me.uid,
          symbolConverInputName = 'symbolConverValue' + me.uid;

        return '<div id="##" class="edui-autotypesetpicker %%">' +
          '<div class="edui-autotypesetpicker-body">' +
          '<table >' +
          '<tr><td nowrap><input type="checkbox" name="mergeEmptyline" ' + (opt["mergeEmptyline"] ? "checked" : "" ) + '>' + lang.mergeLine + '</td><td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (opt["removeEmptyline"] ? "checked" : "" ) + '>' + lang.delLine + '</td></tr>' +
          '<tr><td nowrap><input type="checkbox" name="removeClass" ' + (opt["removeClass"] ? "checked" : "" ) + '>' + lang.removeFormat + '</td><td colspan="2"><input type="checkbox" name="indent" ' + (opt["indent"] ? "checked" : "" ) + '>' + lang.indent + '</td></tr>' +
          '<tr>' +
          '<td nowrap><input type="checkbox" name="textAlign" ' + (opt["textAlign"] ? "checked" : "" ) + '>' + lang.alignment + '</td>' +
          '<td colspan="2" id="' + textAlignInputName + '">' +
          '<input type="radio" name="'+ textAlignInputName +'" value="left" ' + ((opt["textAlign"] && opt["textAlign"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") +
          '<input type="radio" name="'+ textAlignInputName +'" value="center" ' + ((opt["textAlign"] && opt["textAlign"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") +
          '<input type="radio" name="'+ textAlignInputName +'" value="right" ' + ((opt["textAlign"] && opt["textAlign"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") +
          '</td>' +
          '</tr>' +
          '<tr>' +
          '<td nowrap><input type="checkbox" name="imageBlockLine" ' + (opt["imageBlockLine"] ? "checked" : "" ) + '>' + lang.imageFloat + '</td>' +
          '<td nowrap id="'+ imageBlockInputName +'">' +
          '<input type="radio" name="'+ imageBlockInputName +'" value="none" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "none") ? "checked" : "") + '>' + me.getLang("default") +
          '<input type="radio" name="'+ imageBlockInputName +'" value="left" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") +
          '<input type="radio" name="'+ imageBlockInputName +'" value="center" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") +
          '<input type="radio" name="'+ imageBlockInputName +'" value="right" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") +
          '</td>' +
          '</tr>' +
          '<tr><td nowrap><input type="checkbox" name="clearFontSize" ' + (opt["clearFontSize"] ? "checked" : "" ) + '>' + lang.removeFontsize + '</td><td colspan="2"><input type="checkbox" name="clearFontFamily" ' + (opt["clearFontFamily"] ? "checked" : "" ) + '>' + lang.removeFontFamily + '</td></tr>' +
          '<tr><td nowrap colspan="3"><input type="checkbox" name="removeEmptyNode" ' + (opt["removeEmptyNode"] ? "checked" : "" ) + '>' + lang.removeHtml + '</td></tr>' +
          '<tr><td nowrap colspan="3"><input type="checkbox" name="pasteFilter" ' + (opt["pasteFilter"] ? "checked" : "" ) + '>' + lang.pasteFilter + '</td></tr>' +
          '<tr>' +
          '<td nowrap><input type="checkbox" name="symbolConver" ' + (opt["bdc2sb"] || opt["tobdc"] ? "checked" : "" ) + '>' + lang.symbol + '</td>' +
          '<td id="' + symbolConverInputName + '">' +
          '<input type="radio" name="bdc" value="bdc2sb" ' + (opt["bdc2sb"] ? "checked" : "" ) + '>' + lang.bdc2sb +
          '<input type="radio" name="bdc" value="tobdc" ' + (opt["tobdc"] ? "checked" : "" ) + '>' + lang.tobdc + '' +
          '</td>' +
          '<td nowrap align="right"><button >' + lang.run + '</button></td>' +
          '</tr>' +
          '</table>' +
          '</div>' +
          '</div>';


      },
      _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(AutoTypeSetPicker, UIBase);
  })();


// ui/autotypesetbutton.js
///import core
///import uicore
///import ui/popup.js
///import ui/autotypesetpicker.js
///import ui/splitbutton.js
  (function (){
    var utils = baidu.editor.utils,
      Popup = baidu.editor.ui.Popup,
      AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker,
      SplitButton = baidu.editor.ui.SplitButton,
      AutoTypeSetButton = baidu.editor.ui.AutoTypeSetButton = function (options){
        this.initOptions(options);
        this.initAutoTypeSetButton();
      };
    function getPara(me){

      var opt = {},
        cont = me.getDom(),
        editorId = me.editor.uid,
        inputType = null,
        attrName = null,
        ipts = domUtils.getElementsByTagName(cont,"input");
      for(var i=ipts.length-1,ipt;ipt=ipts[i--];){
        inputType = ipt.getAttribute("type");
        if(inputType=="checkbox"){
          attrName = ipt.getAttribute("name");
          opt[attrName] && delete opt[attrName];
          if(ipt.checked){
            var attrValue = document.getElementById( attrName + "Value" + editorId );
            if(attrValue){
              if(/input/ig.test(attrValue.tagName)){
                opt[attrName] = attrValue.value;
              } else {
                var iptChilds = attrValue.getElementsByTagName("input");
                for(var j=iptChilds.length-1,iptchild;iptchild=iptChilds[j--];){
                  if(iptchild.checked){
                    opt[attrName] = iptchild.value;
                    break;
                  }
                }
              }
            } else {
              opt[attrName] = true;
            }
          } else {
            opt[attrName] = false;
          }
        } else {
          opt[ipt.getAttribute("value")] = ipt.checked;
        }

      }

      var selects = domUtils.getElementsByTagName(cont,"select");
      for(var i=0,si;si=selects[i++];){
        var attr = si.getAttribute('name');
        opt[attr] = opt[attr] ? si.value : '';
      }

      utils.extend(me.editor.options.autotypeset,opt);

      me.editor.setPreferences('autotypeset', opt);
    }

    AutoTypeSetButton.prototype = {
      initAutoTypeSetButton: function (){

        var me = this;
        this.popup = new Popup({
          //浼犲叆閰嶇疆鍙傛暟
          content: new AutoTypeSetPicker({editor:me.editor}),
          'editor':me.editor,
          hide : function(){
            if (!this._hidden && this.getDom()) {
              getPara(this);
              this.getDom().style.display = 'none';
              this._hidden = true;
              this.fireEvent('hide');
            }
          }
        });
        var flag = 0;
        this.popup.addListener('postRenderAfter',function(){
          var popupUI = this;
          if(flag)return;
          var cont = this.getDom(),
            btn = cont.getElementsByTagName('button')[0];

          btn.onclick = function(){
            getPara(popupUI);
            me.editor.execCommand('autotypeset');
            popupUI.hide()
          };

          domUtils.on(cont, 'click', function(e) {
            var target = e.target || e.srcElement,
              editorId = me.editor.uid;
            if (target && target.tagName == 'INPUT') {

              // 鐐瑰嚮鍥剧墖娴姩鐨刢heckbox,鍘婚櫎瀵瑰簲鐨剅adio
              if (target.name == 'imageBlockLine' || target.name == 'textAlign' || target.name == 'symbolConver') {
                var checked = target.checked,
                  radioTd = document.getElementById( target.name + 'Value' + editorId),
                  radios = radioTd.getElementsByTagName('input'),
                  defalutSelect = {
                    'imageBlockLine': 'none',
                    'textAlign': 'left',
                    'symbolConver': 'tobdc'
                  };

                for (var i = 0; i < radios.length; i++) {
                  if (checked) {
                    if (radios[i].value == defalutSelect[target.name]) {
                      radios[i].checked = 'checked';
                    }
                  } else {
                    radios[i].checked = false;
                  }
                }
              }
              // 鐐瑰嚮radio,閫変腑瀵瑰簲鐨刢heckbox
              if (target.name == ('imageBlockLineValue' + editorId) || target.name == ('textAlignValue' + editorId) || target.name == 'bdc') {
                var checkboxs = target.parentNode.previousSibling.getElementsByTagName('input');
                checkboxs && (checkboxs[0].checked = true);
              }

              getPara(popupUI);
            }
          });

          flag = 1;
        });
        this.initSplitButton();
      }
    };
    utils.inherits(AutoTypeSetButton, SplitButton);

  })();


// ui/cellalignpicker.js
///import core
///import uicore
  (function () {
    var utils = baidu.editor.utils,
      Popup = baidu.editor.ui.Popup,
      Stateful = baidu.editor.ui.Stateful,
      UIBase = baidu.editor.ui.UIBase;

    /**
     * 璇ュ弬鏁板皢鏂板涓€涓弬鏁帮細 selected锛� 鍙傛暟绫诲瀷涓轰竴涓狾bject锛� 褰㈠{ 'align': 'center', 'valign': 'top' }锛� 琛ㄧず鍗曞厓鏍肩殑鍒濆
     * 瀵归綈鐘舵€佷负锛� 绔栫洿灞呬笂锛屾按骞冲眳涓�; 鍏朵腑 align鐨勫彇鍊间负锛�'center', 'left', 'right'; valign鐨勫彇鍊间负: 'top', 'middle', 'bottom'
     * @update 2013/4/2 hancong03@baidu.com
     */
    var CellAlignPicker = baidu.editor.ui.CellAlignPicker = function (options) {
      this.initOptions(options);
      this.initSelected();
      this.initCellAlignPicker();
    };
    CellAlignPicker.prototype = {
      //鍒濆鍖栭€変腑鐘舵€侊紝 璇ユ柟娉曞皢鏍规嵁浼犻€掕繘鏉ョ殑鍙傛暟鑾峰彇鍒板簲璇ラ€変腑鐨勫榻愭柟寮忓浘鏍囩殑绱㈠紩
      initSelected: function(){

        var status = {

            valign: {
              top: 0,
              middle: 1,
              bottom: 2
            },
            align: {
              left: 0,
              center: 1,
              right: 2
            },
            count: 3

          },
          result = -1;

        if( this.selected ) {
          this.selectedIndex = status.valign[ this.selected.valign ] * status.count + status.align[ this.selected.align ];
        }

      },
      initCellAlignPicker:function () {
        this.initUIBase();
        this.Stateful_init();
      },
      getHtmlTpl:function () {

        var alignType = [ 'left', 'center', 'right' ],
          COUNT = 9,
          tempClassName = null,
          tempIndex = -1,
          tmpl = [];


        for( var i= 0; i<COUNT; i++ ) {

          tempClassName = this.selectedIndex === i ? ' class="edui-cellalign-selected" ' : '';
          tempIndex = i % 3;

          tempIndex === 0 && tmpl.push('<tr>');

          tmpl.push( '<td index="'+ i +'" ' + tempClassName + ' stateful><div class="edui-icon edui-'+ alignType[ tempIndex ] +'"></div></td>' );

          tempIndex === 2 && tmpl.push('</tr>');

        }

        return '<div id="##" class="edui-cellalignpicker %%">' +
          '<div class="edui-cellalignpicker-body">' +
          '<table onclick="$$._onClick(event);">' +
          tmpl.join('') +
          '</table>' +
          '</div>' +
          '</div>';
      },
      getStateDom: function (){
        return this.target;
      },
      _onClick: function (evt){
        var target= evt.target || evt.srcElement;
        if(/icon/.test(target.className)){
          this.items[target.parentNode.getAttribute("index")].onclick();
          Popup.postHide(evt);
        }
      },
      _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(CellAlignPicker, UIBase);
    utils.extend(CellAlignPicker.prototype, Stateful,true);
  })();





// ui/pastepicker.js
///import core
///import uicore
  (function () {
    var utils = baidu.editor.utils,
      Stateful = baidu.editor.ui.Stateful,
      uiUtils = baidu.editor.ui.uiUtils,
      UIBase = baidu.editor.ui.UIBase;

    var PastePicker = baidu.editor.ui.PastePicker = function (options) {
      this.initOptions(options);
      this.initPastePicker();
    };
    PastePicker.prototype = {
      initPastePicker:function () {
        this.initUIBase();
        this.Stateful_init();
      },
      getHtmlTpl:function () {
        return '<div class="edui-pasteicon" onclick="$$._onClick(this)"></div>' +
          '<div class="edui-pastecontainer">' +
          '<div class="edui-title">' + this.editor.getLang("pasteOpt") + '</div>' +
          '<div class="edui-button">' +
          '<div title="' + this.editor.getLang("pasteSourceFormat") + '" onclick="$$.format(false)" stateful>' +
          '<div class="edui-richtxticon"></div></div>' +
          '<div title="' + this.editor.getLang("tagFormat") + '" onclick="$$.format(2)" stateful>' +
          '<div class="edui-tagicon"></div></div>' +
          '<div title="' + this.editor.getLang("pasteTextFormat") + '" onclick="$$.format(true)" stateful>' +
          '<div class="edui-plaintxticon"></div></div>' +
          '</div>' +
          '</div>' +
          '</div>'
      },
      getStateDom:function () {
        return this.target;
      },
      format:function (param) {
        this.editor.ui._isTransfer = true;
        this.editor.fireEvent('pasteTransfer', param);
      },
      _onClick:function (cur) {
        var node = domUtils.getNextDomNode(cur),
          screenHt = uiUtils.getViewportRect().height,
          subPop = uiUtils.getClientRect(node);

        if ((subPop.top + subPop.height) > screenHt)
          node.style.top = (-subPop.height - cur.offsetHeight) + "px";
        else
          node.style.top = "";

        if (/hidden/ig.test(domUtils.getComputedStyle(node, "visibility"))) {
          node.style.visibility = "visible";
          domUtils.addClass(cur, "edui-state-opened");
        } else {
          node.style.visibility = "hidden";
          domUtils.removeClasses(cur, "edui-state-opened")
        }
      },
      _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(PastePicker, UIBase);
    utils.extend(PastePicker.prototype, Stateful, true);
  })();






// ui/toolbar.js
  (function (){
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      UIBase = baidu.editor.ui.UIBase,
      Toolbar = baidu.editor.ui.Toolbar = function (options){
        this.initOptions(options);
        this.initToolbar();
      };
    Toolbar.prototype = {
      items: null,
      initToolbar: function (){
        this.items = this.items || [];
        this.initUIBase();
      },
      add: function (item,index){
        if(index === undefined){
          this.items.push(item);
        }else{
          this.items.splice(index,0,item)
        }

      },
      getHtmlTpl: function (){
        var buff = [];
        for (var i=0; i<this.items.length; i++) {
          buff[i] = this.items[i].renderHtml();
        }
        return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' +
          buff.join('') +
          '</div>'
      },
      postRender: function (){
        var box = this.getDom();
        for (var i=0; i<this.items.length; i++) {
          this.items[i].postRender();
        }
        uiUtils.makeUnselectable(box);
      },
      _onMouseDown: function (e){
        var target = e.target || e.srcElement,
          tagName = target && target.tagName && target.tagName.toLowerCase();
        if (tagName == 'input' || tagName == 'object' || tagName == 'object') {
          return false;
        }
      }
    };
    utils.inherits(Toolbar, UIBase);

  })();


// ui/menu.js
///import core
///import uicore
///import ui\popup.js
///import ui\stateful.js
  (function () {
    var utils = baidu.editor.utils,
      domUtils = baidu.editor.dom.domUtils,
      uiUtils = baidu.editor.ui.uiUtils,
      UIBase = baidu.editor.ui.UIBase,
      Popup = baidu.editor.ui.Popup,
      Stateful = baidu.editor.ui.Stateful,
      CellAlignPicker = baidu.editor.ui.CellAlignPicker,

      Menu = baidu.editor.ui.Menu = function (options) {
        this.initOptions(options);
        this.initMenu();
      };

    var menuSeparator = {
      renderHtml:function () {
        return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>';
      },
      postRender:function () {
      },
      queryAutoHide:function () {
        return true;
      }
    };
    Menu.prototype = {
      items:null,
      uiName:'menu',
      initMenu:function () {
        this.items = this.items || [];
        this.initPopup();
        this.initItems();
      },
      initItems:function () {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (item == '-') {
            this.items[i] = this.getSeparator();
          } else if (!(item instanceof MenuItem)) {
            item.editor = this.editor;
            item.theme = this.editor.options.theme;
            this.items[i] = this.createItem(item);
          }
        }
      },
      getSeparator:function () {
        return menuSeparator;
      },
      createItem:function (item) {
        //鏂板涓€涓弬鏁癿enu, 璇ュ弬鏁板瓨鍌ㄤ簡menuItem鎵€瀵瑰簲鐨刴enu寮曠敤
        item.menu = this;
        return new MenuItem(item);
      },
      _Popup_getContentHtmlTpl:Popup.prototype.getContentHtmlTpl,
      getContentHtmlTpl:function () {
        if (this.items.length == 0) {
          return this._Popup_getContentHtmlTpl();
        }
        var buff = [];
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          buff[i] = item.renderHtml();
        }
        return ('<div class="%%-body">' + buff.join('') + '</div>');
      },
      _Popup_postRender:Popup.prototype.postRender,
      postRender:function () {
        var me = this;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.ownerMenu = this;
          item.postRender();
        }
        domUtils.on(this.getDom(), 'mouseover', function (evt) {
          evt = evt || event;
          var rel = evt.relatedTarget || evt.fromElement;
          var el = me.getDom();
          if (!uiUtils.contains(el, rel) && el !== rel) {
            me.fireEvent('over');
          }
        });
        this._Popup_postRender();
      },
      queryAutoHide:function (el) {
        if (el) {
          if (uiUtils.contains(this.getDom(), el)) {
            return false;
          }
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.queryAutoHide(el) === false) {
              return false;
            }
          }
        }
      },
      clearItems:function () {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          clearTimeout(item._showingTimer);
          clearTimeout(item._closingTimer);
          if (item.subMenu) {
            item.subMenu.destroy();
          }
        }
        this.items = [];
      },
      destroy:function () {
        if (this.getDom()) {
          domUtils.remove(this.getDom());
        }
        this.clearItems();
      },
      dispose:function () {
        this.destroy();
      }
    };
    utils.inherits(Menu, Popup);

    /**
     * @update 2013/04/03 hancong03 鏂板涓€涓弬鏁癿enu, 璇ュ弬鏁板瓨鍌ㄤ簡menuItem鎵€瀵瑰簲鐨刴enu寮曠敤
     * @type {Function}
     */
    var MenuItem = baidu.editor.ui.MenuItem = function (options) {
      this.initOptions(options);
      this.initUIBase();
      this.Stateful_init();
      if (this.subMenu && !(this.subMenu instanceof Menu)) {
        if (options.className && options.className.indexOf("aligntd") != -1) {
          var me = this;

          //鑾峰彇鍗曞厓鏍煎榻愬垵濮嬬姸鎬�
          this.subMenu.selected = this.editor.queryCommandValue( 'cellalignment' );

          this.subMenu = new Popup({
            content:new CellAlignPicker(this.subMenu),
            parentMenu:me,
            editor:me.editor,
            destroy:function () {
              if (this.getDom()) {
                domUtils.remove(this.getDom());
              }
            }
          });
          this.subMenu.addListener("postRenderAfter", function () {
            domUtils.on(this.getDom(), "mouseover", function () {
              me.addState('opened');
            });
          });
        } else {
          this.subMenu = new Menu(this.subMenu);
        }
      }
    };
    MenuItem.prototype = {
      label:'',
      subMenu:null,
      ownerMenu:null,
      uiName:'menuitem',
      alwalysHoverable:true,
      getHtmlTpl:function () {
        return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);">' +
          '<div class="%%-body">' +
          this.renderLabelHtml() +
          '</div>' +
          '</div>';
      },
      postRender:function () {
        var me = this;
        this.addListener('over', function () {
          me.ownerMenu.fireEvent('submenuover', me);
          if (me.subMenu) {
            me.delayShowSubMenu();
          }
        });
        if (this.subMenu) {
          this.getDom().className += ' edui-hassubmenu';
          this.subMenu.render();
          this.addListener('out', function () {
            me.delayHideSubMenu();
          });
          this.subMenu.addListener('over', function () {
            clearTimeout(me._closingTimer);
            me._closingTimer = null;
            me.addState('opened');
          });
          this.ownerMenu.addListener('hide', function () {
            me.hideSubMenu();
          });
          this.ownerMenu.addListener('submenuover', function (t, subMenu) {
            if (subMenu !== me) {
              me.delayHideSubMenu();
            }
          });
          this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide;
          this.subMenu.queryAutoHide = function (el) {
            if (el && uiUtils.contains(me.getDom(), el)) {
              return false;
            }
            return this._bakQueryAutoHide(el);
          };
        }
        this.getDom().style.tabIndex = '-1';
        uiUtils.makeUnselectable(this.getDom());
        this.Stateful_postRender();
      },
      delayShowSubMenu:function () {
        var me = this;
        if (!me.isDisabled()) {
          me.addState('opened');
          clearTimeout(me._showingTimer);
          clearTimeout(me._closingTimer);
          me._closingTimer = null;
          me._showingTimer = setTimeout(function () {
            me.showSubMenu();
          }, 250);
        }
      },
      delayHideSubMenu:function () {
        var me = this;
        if (!me.isDisabled()) {
          me.removeState('opened');
          clearTimeout(me._showingTimer);
          if (!me._closingTimer) {
            me._closingTimer = setTimeout(function () {
              if (!me.hasState('opened')) {
                me.hideSubMenu();
              }
              me._closingTimer = null;
            }, 400);
          }
        }
      },
      renderLabelHtml:function () {
        return '<div class="edui-arrow"></div>' +
          '<div class="edui-box edui-icon"></div>' +
          '<div class="edui-box edui-label %%-label">' + (this.label || '') + '</div>';
      },
      getStateDom:function () {
        return this.getDom();
      },
      queryAutoHide:function (el) {
        if (this.subMenu && this.hasState('opened')) {
          return this.subMenu.queryAutoHide(el);
        }
      },
      _onClick:function (event, this_) {
        if (this.hasState('disabled')) return;
        if (this.fireEvent('click', event, this_) !== false) {
          if (this.subMenu) {
            this.showSubMenu();
          } else {
            Popup.postHide(event);
          }
        }
      },
      showSubMenu:function () {
        var rect = uiUtils.getClientRect(this.getDom());
        rect.right -= 5;
        rect.left += 2;
        rect.width -= 7;
        rect.top -= 4;
        rect.bottom += 4;
        rect.height += 8;
        this.subMenu.showAnchorRect(rect, true, true);
      },
      hideSubMenu:function () {
        this.subMenu.hide();
      }
    };
    utils.inherits(MenuItem, UIBase);
    utils.extend(MenuItem.prototype, Stateful, true);
  })();


// ui/combox.js
///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
  (function (){
    // todo: menu鍜宨tem鎻愭垚閫氱敤list
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      Menu = baidu.editor.ui.Menu,
      SplitButton = baidu.editor.ui.SplitButton,
      Combox = baidu.editor.ui.Combox = function (options){
        this.initOptions(options);
        this.initCombox();
      };
    Combox.prototype = {
      uiName: 'combox',
      onbuttonclick:function () {
        this.showPopup();
      },
      initCombox: function (){
        var me = this;
        this.items = this.items || [];
        for (var i=0; i<this.items.length; i++) {
          var item = this.items[i];
          item.uiName = 'listitem';
          item.index = i;
          item.onclick = function (){
            me.selectByIndex(this.index);
          };
        }
        this.popup = new Menu({
          items: this.items,
          uiName: 'list',
          editor:this.editor,
          captureWheel: true,
          combox: this
        });

        this.initSplitButton();
      },
      _SplitButton_postRender: SplitButton.prototype.postRender,
      postRender: function (){
        this._SplitButton_postRender();
        this.setLabel(this.label || '');
        this.setValue(this.initValue || '');
      },
      showPopup: function (){
        var rect = uiUtils.getClientRect(this.getDom());
        rect.top += 1;
        rect.bottom -= 1;
        rect.height -= 2;
        this.popup.showAnchorRect(rect);
      },
      getValue: function (){
        return this.value;
      },
      setValue: function (value){
        var index = this.indexByValue(value);
        if (index != -1) {
          this.selectedIndex = index;
          this.setLabel(this.items[index].label);
          this.value = this.items[index].value;
        } else {
          this.selectedIndex = -1;
          this.setLabel(this.getLabelForUnknowValue(value));
          this.value = value;
        }
      },
      setLabel: function (label){
        this.getDom('button_body').innerHTML = label;
        this.label = label;
      },
      getLabelForUnknowValue: function (value){
        return value;
      },
      indexByValue: function (value){
        for (var i=0; i<this.items.length; i++) {
          if (value == this.items[i].value) {
            return i;
          }
        }
        return -1;
      },
      getItem: function (index){
        return this.items[index];
      },
      selectByIndex: function (index){
        if (index < this.items.length && this.fireEvent('select', index) !== false) {
          this.selectedIndex = index;
          this.value = this.items[index].value;
          this.setLabel(this.items[index].label);
        }
      }
    };
    utils.inherits(Combox, SplitButton);
  })();


// ui/dialog.js
///import core
///import uicore
///import ui/mask.js
///import ui/button.js
  (function (){
    var utils = baidu.editor.utils,
      domUtils = baidu.editor.dom.domUtils,
      uiUtils = baidu.editor.ui.uiUtils,
      Mask = baidu.editor.ui.Mask,
      UIBase = baidu.editor.ui.UIBase,
      Button = baidu.editor.ui.Button,
      Dialog = baidu.editor.ui.Dialog = function (options){
        if(options.name){
          var name = options.name;
          var cssRules = options.cssRules;
          if(!options.className){
            options.className =  'edui-for-' + name;
          }
          if(cssRules){
            options.cssRules = '.edui-default .edui-for-'+ name +' .edui-dialog-content  {'+ cssRules +'}'
          }
        }
        this.initOptions(utils.extend({
          autoReset: true,
          draggable: true,
          onok: function (){},
          oncancel: function (){},
          onclose: function (t, ok){
            return ok ? this.onok() : this.oncancel();
          },
          //鏄惁鎺у埗dialog涓殑scroll浜嬩欢锛� 榛樿涓轰笉闃绘
          holdScroll: false
        },options));
        this.initDialog();
      };
    var modalMask;
    var dragMask;
    var activeDialog;
    Dialog.prototype = {
      draggable: false,
      uiName: 'dialog',
      initDialog: function (){
        var me = this,
          theme=this.editor.options.theme;
        if(this.cssRules){
          utils.cssRule('edui-customize-'+this.name+'-style',this.cssRules);
        }
        this.initUIBase();
        this.modalMask = (modalMask || (modalMask = new Mask({
          className: 'edui-dialog-modalmask',
          theme:theme,
          onclick: function (){
            activeDialog && activeDialog.close(false);
          }
        })));
        this.dragMask = (dragMask || (dragMask = new Mask({
          className: 'edui-dialog-dragmask',
          theme:theme
        })));
        this.closeButton = new Button({
          className: 'edui-dialog-closebutton',
          title: me.closeDialog,
          theme:theme,
          onclick: function (){
            me.close(false);
          }
        });

        this.fullscreen && this.initResizeEvent();

        if (this.buttons) {
          for (var i=0; i<this.buttons.length; i++) {
            if (!(this.buttons[i] instanceof Button)) {
              this.buttons[i] = new Button(utils.extend(this.buttons[i],{
                editor : this.editor
              },true));
            }
          }
        }
      },
      initResizeEvent: function () {

        var me = this;

        domUtils.on( window, "resize", function () {

          if ( me._hidden || me._hidden === undefined ) {
            return;
          }

          if ( me.__resizeTimer ) {
            window.clearTimeout( me.__resizeTimer );
          }

          me.__resizeTimer = window.setTimeout( function () {

            me.__resizeTimer = null;

            var dialogWrapNode = me.getDom(),
              contentNode = me.getDom('content'),
              wrapRect = UE.ui.uiUtils.getClientRect( dialogWrapNode ),
              contentRect = UE.ui.uiUtils.getClientRect( contentNode ),
              vpRect = uiUtils.getViewportRect();

            contentNode.style.width = ( vpRect.width - wrapRect.width + contentRect.width ) + "px";
            contentNode.style.height = ( vpRect.height - wrapRect.height + contentRect.height ) + "px";

            dialogWrapNode.style.width = vpRect.width + "px";
            dialogWrapNode.style.height = vpRect.height + "px";

            me.fireEvent( "resize" );

          }, 100 );

        } );

      },
      fitSize: function (){
        var popBodyEl = this.getDom('body');
//            if (!(baidu.editor.browser.ie && baidu.editor.browser.version == 7)) {
//                uiUtils.removeStyle(popBodyEl, 'width');
//                uiUtils.removeStyle(popBodyEl, 'height');
//            }
        var size = this.mesureSize();
        popBodyEl.style.width = size.width + 'px';
        popBodyEl.style.height = size.height + 'px';
        return size;
      },
      safeSetOffset: function (offset){
        var me = this;
        var el = me.getDom();
        var vpRect = uiUtils.getViewportRect();
        var rect = uiUtils.getClientRect(el);
        var left = offset.left;
        if (left + rect.width > vpRect.right) {
          left = vpRect.right - rect.width;
        }
        var top = offset.top;
        if (top + rect.height > vpRect.bottom) {
          top = vpRect.bottom - rect.height;
        }
        el.style.left = Math.max(left, 0) + 'px';
        el.style.top = Math.max(top, 0) + 'px';
      },
      showAtCenter: function (){

        var vpRect = uiUtils.getViewportRect();

        if ( !this.fullscreen ) {
          this.getDom().style.display = '';
          var popSize = this.fitSize();
          var titleHeight = this.getDom('titlebar').offsetHeight | 0;
          var left = vpRect.width / 2 - popSize.width / 2;
          var top = vpRect.height / 2 - (popSize.height - titleHeight) / 2 - titleHeight;
          var popEl = this.getDom();
          this.safeSetOffset({
            left: Math.max(left | 0, 0),
            top: Math.max(top | 0, 0)
          });
          if (!domUtils.hasClass(popEl, 'edui-state-centered')) {
            popEl.className += ' edui-state-centered';
          }
        } else {
          var dialogWrapNode = this.getDom(),
            contentNode = this.getDom('content');

          dialogWrapNode.style.display = "block";

          var wrapRect = UE.ui.uiUtils.getClientRect( dialogWrapNode ),
            contentRect = UE.ui.uiUtils.getClientRect( contentNode );
          dialogWrapNode.style.left = "-100000px";

          contentNode.style.width = ( vpRect.width - wrapRect.width + contentRect.width ) + "px";
          contentNode.style.height = ( vpRect.height - wrapRect.height + contentRect.height ) + "px";

          dialogWrapNode.style.width = vpRect.width + "px";
          dialogWrapNode.style.height = vpRect.height + "px";
          dialogWrapNode.style.left = 0;

          //淇濆瓨鐜鐨刼verflow鍊�
          this._originalContext = {
            html: {
              overflowX: document.documentElement.style.overflowX,
              overflowY: document.documentElement.style.overflowY
            },
            body: {
              overflowX: document.body.style.overflowX,
              overflowY: document.body.style.overflowY
            }
          };

          document.documentElement.style.overflowX = 'hidden';
          document.documentElement.style.overflowY = 'hidden';
          document.body.style.overflowX = 'hidden';
          document.body.style.overflowY = 'hidden';

        }

        this._show();
      },
      getContentHtml: function (){
        var contentHtml = '';
        if (typeof this.content == 'string') {
          contentHtml = this.content;
        } else if (this.iframeUrl) {
          contentHtml = '<span id="'+ this.id +'_contmask" class="dialogcontmask"></span><iframe id="'+ this.id +
            '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+ this.iframeUrl +'"></iframe>';
        }
        return contentHtml;
      },
      getHtmlTpl: function (){
        var footHtml = '';

        if (this.buttons) {
          var buff = [];
          for (var i=0; i<this.buttons.length; i++) {
            buff[i] = this.buttons[i].renderHtml();
          }
          footHtml = '<div class="%%-foot">' +
            '<div id="##_buttons" class="%%-buttons">' + buff.join('') + '</div>' +
            '</div>';
        }

        return '<div id="##" class="%%"><div '+ ( !this.fullscreen ? 'class="%%"' : 'class="%%-wrap edui-dialog-fullscreen-flag"' ) +'><div id="##_body" class="%%-body">' +
          '<div class="%%-shadow"></div>' +
          '<div id="##_titlebar" class="%%-titlebar">' +
          '<div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);">' +
          '<span class="%%-caption">' + (this.title || '') + '</span>' +
          '</div>' +
          this.closeButton.renderHtml() +
          '</div>' +
          '<div id="##_content" class="%%-content">'+ ( this.autoReset ? '' : this.getContentHtml()) +'</div>' +
          footHtml +
          '</div></div></div>';
      },
      postRender: function (){
        // todo: 淇濇寔灞呬腑/璁颁綇涓婃鍏抽棴浣嶇疆閫夐」
        if (!this.modalMask.getDom()) {
          this.modalMask.render();
          this.modalMask.hide();
        }
        if (!this.dragMask.getDom()) {
          this.dragMask.render();
          this.dragMask.hide();
        }
        var me = this;
        this.addListener('show', function (){
          me.modalMask.show(this.getDom().style.zIndex - 2);
        });
        this.addListener('hide', function (){
          me.modalMask.hide();
        });
        if (this.buttons) {
          for (var i=0; i<this.buttons.length; i++) {
            this.buttons[i].postRender();
          }
        }
        domUtils.on(window, 'resize', function (){
          setTimeout(function (){
            if (!me.isHidden()) {
              me.safeSetOffset(uiUtils.getClientRect(me.getDom()));
            }
          });
        });

        //hold浣弒croll浜嬩欢锛岄槻姝ialog鐨勬粴鍔ㄥ奖鍝嶉〉闈�
//            if( this.holdScroll ) {
//
//                if( !me.iframeUrl ) {
//                    domUtils.on( document.getElementById( me.id + "_iframe"), !browser.gecko ? "mousewheel" : "DOMMouseScroll", function(e){
//                        domUtils.preventDefault(e);
//                    } );
//                } else {
//                    me.addListener('dialogafterreset', function(){
//                        window.setTimeout(function(){
//                            var iframeWindow = document.getElementById( me.id + "_iframe").contentWindow;
//
//                            if( browser.ie ) {
//
//                                var timer = window.setInterval(function(){
//
//                                    if( iframeWindow.document && iframeWindow.document.body ) {
//                                        window.clearInterval( timer );
//                                        timer = null;
//                                        domUtils.on( iframeWindow.document.body, !browser.gecko ? "mousewheel" : "DOMMouseScroll", function(e){
//                                            domUtils.preventDefault(e);
//                                        } );
//                                    }
//
//                                }, 100);
//
//                            } else {
//                                domUtils.on( iframeWindow, !browser.gecko ? "mousewheel" : "DOMMouseScroll", function(e){
//                                    domUtils.preventDefault(e);
//                                } );
//                            }
//
//                        }, 1);
//                    });
//                }
//
//            }
        this._hide();
      },
      mesureSize: function (){
        var body = this.getDom('body');
        var width = uiUtils.getClientRect(this.getDom('content')).width;
        var dialogBodyStyle = body.style;
        dialogBodyStyle.width = width;
        return uiUtils.getClientRect(body);
      },
      _onTitlebarMouseDown: function (evt, el){
        if (this.draggable) {
          var rect;
          var vpRect = uiUtils.getViewportRect();
          var me = this;
          uiUtils.startDrag(evt, {
            ondragstart: function (){
              rect = uiUtils.getClientRect(me.getDom());
              me.getDom('contmask').style.visibility = 'visible';
              me.dragMask.show(me.getDom().style.zIndex - 1);
            },
            ondragmove: function (x, y){
              var left = rect.left + x;
              var top = rect.top + y;
              me.safeSetOffset({
                left: left,
                top: top
              });
            },
            ondragstop: function (){
              me.getDom('contmask').style.visibility = 'hidden';
              domUtils.removeClasses(me.getDom(), ['edui-state-centered']);
              me.dragMask.hide();
            }
          });
        }
      },
      reset: function (){
        this.getDom('content').innerHTML = this.getContentHtml();
        this.fireEvent('dialogafterreset');
      },
      _show: function (){
        if (this._hidden) {
          this.getDom().style.display = '';

          //瑕侀珮杩囩紪杈戝櫒鐨剒indxe
          this.editor.container.style.zIndex && (this.getDom().style.zIndex = this.editor.container.style.zIndex * 1 + 10);
          this._hidden = false;
          this.fireEvent('show');
          baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4;
        }
      },
      isHidden: function (){
        return this._hidden;
      },
      _hide: function (){
        if (!this._hidden) {
          var wrapNode = this.getDom();
          wrapNode.style.display = 'none';
          wrapNode.style.zIndex = '';
          wrapNode.style.width = '';
          wrapNode.style.height = '';
          this._hidden = true;
          this.fireEvent('hide');
        }
      },
      open: function (){
        if (this.autoReset) {
          //鏈夊彲鑳借繕娌℃湁娓叉煋
          try{
            this.reset();
          }catch(e){
            this.render();
            this.open()
          }
        }
        this.showAtCenter();
        if (this.iframeUrl) {
          try {
            this.getDom('iframe').focus();
          } catch(ex){}
        }
        activeDialog = this;
      },
      _onCloseButtonClick: function (evt, el){
        this.close(false);
      },
      close: function (ok){
        if (this.fireEvent('close', ok) !== false) {
          //杩樺師鐜
          if ( this.fullscreen ) {

            document.documentElement.style.overflowX = this._originalContext.html.overflowX;
            document.documentElement.style.overflowY = this._originalContext.html.overflowY;
            document.body.style.overflowX = this._originalContext.body.overflowX;
            document.body.style.overflowY = this._originalContext.body.overflowY;
            delete this._originalContext;

          }
          this._hide();

          //閿€姣乧ontent
          var content = this.getDom('content');
          var iframe = this.getDom('iframe');
          if (content && iframe) {
            var doc = iframe.contentDocument || iframe.contentWindow.document;
            doc && (doc.body.innerHTML = '');
            domUtils.remove(content);
          }
        }
      }
    };
    utils.inherits(Dialog, UIBase);
  })();


// ui/menubutton.js
///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
  (function (){
    var utils = baidu.editor.utils,
      Menu = baidu.editor.ui.Menu,
      SplitButton = baidu.editor.ui.SplitButton,
      MenuButton = baidu.editor.ui.MenuButton = function (options){
        this.initOptions(options);
        this.initMenuButton();
      };
    MenuButton.prototype = {
      initMenuButton: function (){
        var me = this;
        this.uiName = "menubutton";
        this.popup = new Menu({
          items: me.items,
          className: me.className,
          editor:me.editor
        });
        this.popup.addListener('show', function (){
          var list = this;
          for (var i=0; i<list.items.length; i++) {
            list.items[i].removeState('checked');
            if (list.items[i].value == me._value) {
              list.items[i].addState('checked');
              this.value = me._value;
            }
          }
        });
        this.initSplitButton();
      },
      setValue : function(value){
        this._value = value;
      }

    };
    utils.inherits(MenuButton, SplitButton);
  })();

// ui/multiMenu.js
///import core
///import uicore
  ///commands 琛ㄦ儏
  (function(){
    var utils = baidu.editor.utils,
      Popup = baidu.editor.ui.Popup,
      SplitButton = baidu.editor.ui.SplitButton,
      MultiMenuPop = baidu.editor.ui.MultiMenuPop = function(options){
        this.initOptions(options);
        this.initMultiMenu();
      };

    MultiMenuPop.prototype = {
      initMultiMenu: function (){
        var me = this;
        this.popup = new Popup({
          content: '',
          editor : me.editor,
          iframe_rendered: false,
          onshow: function (){
            if (!this.iframe_rendered) {
              this.iframe_rendered = true;
              this.getDom('content').innerHTML = '<iframe id="'+me.id+'_iframe" src="'+ me.iframeUrl +'" frameborder="0"></iframe>';
              me.editor.container.style.zIndex && (this.getDom().style.zIndex = me.editor.container.style.zIndex * 1 + 1);
            }
          }
          // canSideUp:false,
          // canSideLeft:false
        });
        this.onbuttonclick = function(){
          this.showPopup();
        };
        this.initSplitButton();
      }

    };

    utils.inherits(MultiMenuPop, SplitButton);
  })();


// ui/shortcutmenu.js
  (function () {
    var UI = baidu.editor.ui,
      UIBase = UI.UIBase,
      uiUtils = UI.uiUtils,
      utils = baidu.editor.utils,
      domUtils = baidu.editor.dom.domUtils;

    var allMenus = [],//瀛樺偍鎵€鏈夊揩鎹疯彍鍗�
      timeID,
      isSubMenuShow = false;//鏄惁鏈夊瓙pop鏄剧ず

    var ShortCutMenu = UI.ShortCutMenu = function (options) {
      this.initOptions (options);
      this.initShortCutMenu ();
    };

    ShortCutMenu.postHide = hideAllMenu;

    ShortCutMenu.prototype = {
      isHidden : true ,
      SPACE : 5 ,
      initShortCutMenu : function () {
        this.items = this.items || [];
        this.initUIBase ();
        this.initItems ();
        this.initEvent ();
        allMenus.push (this);
      } ,
      initEvent : function () {
        var me = this,
          doc = me.editor.document;

        domUtils.on (doc , "mousemove" , function (e) {
          if (me.isHidden === false) {
            //鏈塸op鏄剧ず灏变笉闅愯棌蹇嵎鑿滃崟
            if (me.getSubMenuMark () || me.eventType == "contextmenu")   return;


            var flag = true,
              el = me.getDom (),
              wt = el.offsetWidth,
              ht = el.offsetHeight,
              distanceX = wt / 2 + me.SPACE,//璺濈涓績X鏍囧噯
              distanceY = ht / 2,//璺濈涓績Y鏍囧噯
              x = Math.abs (e.screenX - me.left),//绂讳腑蹇冭窛绂绘í鍧愭爣
              y = Math.abs (e.screenY - me.top);//绂讳腑蹇冭窛绂荤旱鍧愭爣

            clearTimeout (timeID);
            timeID = setTimeout (function () {
              if (y > 0 && y < distanceY) {
                me.setOpacity (el , "1");
              } else if (y > distanceY && y < distanceY + 70) {
                me.setOpacity (el , "0.5");
                flag = false;
              } else if (y > distanceY + 70 && y < distanceY + 140) {
                me.hide ();
              }

              if (flag && x > 0 && x < distanceX) {
                me.setOpacity (el , "1")
              } else if (x > distanceX && x < distanceX + 70) {
                me.setOpacity (el , "0.5")
              } else if (x > distanceX + 70 && x < distanceX + 140) {
                me.hide ();
              }
            });
          }
        });

        //ie\ff涓� mouseout涓嶅噯
        if (browser.chrome) {
          domUtils.on (doc , "mouseout" , function (e) {
            var relatedTgt = e.relatedTarget || e.toElement;

            if (relatedTgt == null || relatedTgt.tagName == "HTML") {
              me.hide ();
            }
          });
        }

        me.editor.addListener ("afterhidepop" , function () {
          if (!me.isHidden) {
            isSubMenuShow = true;
          }
        });

      } ,
      initItems : function () {
        if (utils.isArray (this.items)) {
          for (var i = 0, len = this.items.length ; i < len ; i++) {
            var item = this.items[i].toLowerCase ();

            if (UI[item]) {
              this.items[i] = new UI[item] (this.editor);
              this.items[i].className += " edui-shortcutsubmenu ";
            }
          }
        }
      } ,
      setOpacity : function (el , value) {
        if (browser.ie && browser.version < 9) {
          el.style.filter = "alpha(opacity = " + parseFloat (value) * 100 + ");"
        } else {
          el.style.opacity = value;
        }
      } ,
      getSubMenuMark : function () {
        isSubMenuShow = false;
        var layerEle = uiUtils.getFixedLayer ();
        var list = domUtils.getElementsByTagName (layerEle , "div" , function (node) {
          return domUtils.hasClass (node , "edui-shortcutsubmenu edui-popup")
        });

        for (var i = 0, node ; node = list[i++] ;) {
          if (node.style.display != "none") {
            isSubMenuShow = true;
          }
        }
        return isSubMenuShow;
      } ,
      show : function (e , hasContextmenu) {
        var me = this,
          offset = {},
          el = this.getDom (),
          fixedlayer = uiUtils.getFixedLayer ();

        function setPos (offset) {
          if (offset.left < 0) {
            offset.left = 0;
          }
          if (offset.top < 0) {
            offset.top = 0;
          }
          el.style.cssText = "position:absolute;left:" + offset.left + "px;top:" + offset.top + "px;";
        }

        function setPosByCxtMenu (menu) {
          if (!menu.tagName) {
            menu = menu.getDom ();
          }
          offset.left = parseInt (menu.style.left);
          offset.top = parseInt (menu.style.top);
          offset.top -= el.offsetHeight + 15;
          setPos (offset);
        }


        me.eventType = e.type;
        el.style.cssText = "display:block;left:-9999px";

        if (e.type == "contextmenu" && hasContextmenu) {
          var menu = domUtils.getElementsByTagName (fixedlayer , "div" , "edui-contextmenu")[0];
          if (menu) {
            setPosByCxtMenu (menu)
          } else {
            me.editor.addListener ("aftershowcontextmenu" , function (type , menu) {
              setPosByCxtMenu (menu);
            });
          }
        } else {
          offset = uiUtils.getViewportOffsetByEvent (e);
          offset.top -= el.offsetHeight + me.SPACE;
          offset.left += me.SPACE + 20;
          setPos (offset);
          me.setOpacity (el , 0.2);
        }


        me.isHidden = false;
        me.left = e.screenX + el.offsetWidth / 2 - me.SPACE;
        me.top = e.screenY - (el.offsetHeight / 2) - me.SPACE;

        if (me.editor) {
          el.style.zIndex = me.editor.container.style.zIndex * 1 + 10;
          fixedlayer.style.zIndex = el.style.zIndex - 1;
        }
      } ,
      hide : function () {
        if (this.getDom ()) {
          this.getDom ().style.display = "none";
        }
        this.isHidden = true;
      } ,
      postRender : function () {
        if (utils.isArray (this.items)) {
          for (var i = 0, item ; item = this.items[i++] ;) {
            item.postRender ();
          }
        }
      } ,
      getHtmlTpl : function () {
        var buff;
        if (utils.isArray (this.items)) {
          buff = [];
          for (var i = 0 ; i < this.items.length ; i++) {
            buff[i] = this.items[i].renderHtml ();
          }
          buff = buff.join ("");
        } else {
          buff = this.items;
        }

        return '<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >' +
          buff +
          '</div>';
      }
    };

    utils.inherits (ShortCutMenu , UIBase);

    function hideAllMenu (e) {
      var tgt = e.target || e.srcElement,
        cur = domUtils.findParent (tgt , function (node) {
          return domUtils.hasClass (node , "edui-shortcutmenu") || domUtils.hasClass (node , "edui-popup");
        } , true);

      if (!cur) {
        for (var i = 0, menu ; menu = allMenus[i++] ;) {
          menu.hide ()
        }
      }
    }

    domUtils.on (document , 'mousedown' , function (e) {
      hideAllMenu (e);
    });

    domUtils.on (window , 'scroll' , function (e) {
      hideAllMenu (e);
    });

  }) ();


// ui/breakline.js
  (function (){
    var utils = baidu.editor.utils,
      UIBase = baidu.editor.ui.UIBase,
      Breakline = baidu.editor.ui.Breakline = function (options){
        this.initOptions(options);
        this.initSeparator();
      };
    Breakline.prototype = {
      uiName: 'Breakline',
      initSeparator: function (){
        this.initUIBase();
      },
      getHtmlTpl: function (){
        return '<br/>';
      }
    };
    utils.inherits(Breakline, UIBase);

  })();


// ui/message.js
///import core
///import uicore
  (function () {
    var utils = baidu.editor.utils,
      domUtils = baidu.editor.dom.domUtils,
      UIBase = baidu.editor.ui.UIBase,
      Message = baidu.editor.ui.Message = function (options){
        this.initOptions(options);
        this.initMessage();
      };

    Message.prototype = {
      initMessage: function (){
        this.initUIBase();
      },
      getHtmlTpl: function (){
        return '<div id="##" class="edui-message %%">' +
          ' <div id="##_closer" class="edui-message-closer">脳</div>' +
          ' <div id="##_body" class="edui-message-body edui-message-type-info">' +
          ' <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe>' +
          ' <div class="edui-shadow"></div>' +
          ' <div id="##_content" class="edui-message-content">' +
          '  </div>' +
          ' </div>' +
          '</div>';
      },
      reset: function(opt){
        var me = this;
        if (!opt.keepshow) {
          clearTimeout(this.timer);
          me.timer = setTimeout(function(){
            me.hide();
          }, opt.timeout || 4000);
        }

        opt.content !== undefined && me.setContent(opt.content);
        opt.type !== undefined && me.setType(opt.type);

        me.show();
      },
      postRender: function(){
        var me = this,
          closer = this.getDom('closer');
        closer && domUtils.on(closer, 'click', function(){
          me.hide();
        });
      },
      setContent: function(content){
        this.getDom('content').innerHTML = content;
      },
      setType: function(type){
        type = type || 'info';
        var body = this.getDom('body');
        body.className = body.className.replace(/edui-message-type-[\w-]+/, 'edui-message-type-' + type);
      },
      getContent: function(){
        return this.getDom('content').innerHTML;
      },
      getType: function(){
        var arr = this.getDom('body').match(/edui-message-type-([\w-]+)/);
        return arr ? arr[1]:'';
      },
      show: function (){
        this.getDom().style.display = 'block';
      },
      hide: function (){
        var dom = this.getDom();
        if (dom) {
          dom.style.display = 'none';
          dom.parentNode && dom.parentNode.removeChild(dom);
        }
      }
    };

    utils.inherits(Message, UIBase);

  })();


// adapter/editorui.js
//ui璺熺紪杈戝櫒鐨勯€傞厤灞�
//閭ｄ釜鎸夐挳寮瑰嚭鏄痙ialog锛屾槸涓嬫媺绛愮瓑閮芥槸鍦ㄨ繖涓猨s涓厤缃�
//鑷繁鍐欑殑ui涔熻鍦ㄨ繖閲岄厤缃紝鏀惧埌baidu.editor.ui涓嬭竟锛屽綋缂栬緫鍣ㄥ疄渚嬪寲鐨勬椂鍊欎細鏍规嵁ueditor.config涓殑toolbars鎵惧埌鐩稿簲鐨勮繘琛屽疄渚嬪寲
  (function () {
    var utils = baidu.editor.utils;
    var editorui = baidu.editor.ui;
    var _Dialog = editorui.Dialog;
    editorui.buttons = {};

    editorui.Dialog = function (options) {
      var dialog = new _Dialog(options);
      dialog.addListener('hide', function () {

        if (dialog.editor) {
          var editor = dialog.editor;
          try {
            if (browser.gecko) {
              var y = editor.window.scrollY,
                x = editor.window.scrollX;
              editor.body.focus();
              editor.window.scrollTo(x, y);
            } else {
              editor.focus();
            }


          } catch (ex) {
          }
        }
      });
      return dialog;
    };

    var iframeUrlMap = {
      'anchor':'~/dialogs/anchor/anchor.html',
      'insertimage':'~/dialogs/image/image.html',
      'link':'~/dialogs/link/link.html',
      'spechars':'~/dialogs/spechars/spechars.html',
      'searchreplace':'~/dialogs/searchreplace/searchreplace.html',
      'map':'~/dialogs/map/map.html',
      'gmap':'~/dialogs/gmap/gmap.html',
      'insertvideo':'~/dialogs/video/video.html',
      'help':'~/dialogs/help/help.html',
      'preview':'~/dialogs/preview/preview.html',
      'emotion':'~/dialogs/emotion/emotion.html',
      'wordimage':'~/dialogs/wordimage/wordimage.html',
      'attachment':'~/dialogs/attachment/attachment.html',
      'insertframe':'~/dialogs/insertframe/insertframe.html',
      'edittip':'~/dialogs/table/edittip.html',
      'edittable':'~/dialogs/table/edittable.html',
      'edittd':'~/dialogs/table/edittd.html',
      'webapp':'~/dialogs/webapp/webapp.html',
      'snapscreen':'~/dialogs/snapscreen/snapscreen.html',
      'scrawl':'~/dialogs/scrawl/scrawl.html',
      'music':'~/dialogs/music/music.html',
      'template':'~/dialogs/template/template.html',
      'background':'~/dialogs/background/background.html',
      'charts': '~/dialogs/charts/charts.html'
    };
    //涓哄伐鍏锋爮娣诲姞鎸夐挳锛屼互涓嬮兘鏄粺涓€鐨勬寜閽Е鍙戝懡浠わ紝鎵€浠ュ啓鍦ㄤ竴璧�
    var btnCmds = ['undo', 'redo', 'formatmatch',
      'bold', 'italic', 'underline', 'fontborder', 'touppercase', 'tolowercase',
      'strikethrough', 'subscript', 'superscript', 'source', 'indent', 'outdent',
      'blockquote', 'pasteplain', 'pagebreak',
      'selectall', 'print','horizontal', 'removeformat', 'time', 'date', 'unlink',
      'insertparagraphbeforetable', 'insertrow', 'insertcol', 'mergeright', 'mergedown', 'deleterow',
      'deletecol', 'splittorows', 'splittocols', 'splittocells', 'mergecells', 'deletetable', 'drafts'];

    for (var i = 0, ci; ci = btnCmds[i++];) {
      ci = ci.toLowerCase();
      editorui[ci] = function (cmd) {
        return function (editor) {
          var ui = new editorui.Button({
            className:'edui-for-' + cmd,
            title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
            onclick:function () {
              editor.execCommand(cmd);
            },
            theme:editor.options.theme,
            showText:false
          });
          editorui.buttons[cmd] = ui;
          editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            var state = editor.queryCommandState(cmd);
            if (state == -1) {
              ui.setDisabled(true);
              ui.setChecked(false);
            } else {
              if (!uiReady) {
                ui.setDisabled(false);
                ui.setChecked(state);
              }
            }
          });
          return ui;
        };
      }(ci);
    }

    //娓呴櫎鏂囨。
    editorui.cleardoc = function (editor) {
      var ui = new editorui.Button({
        className:'edui-for-cleardoc',
        title:editor.options.labelMap.cleardoc || editor.getLang("labelMap.cleardoc") || '',
        theme:editor.options.theme,
        onclick:function () {
          if (confirm(editor.getLang("confirmClear"))) {
            editor.execCommand('cleardoc');
          }
        }
      });
      editorui.buttons["cleardoc"] = ui;
      editor.addListener('selectionchange', function () {
        ui.setDisabled(editor.queryCommandState('cleardoc') == -1);
      });
      return ui;
    };

    //鎺掔増锛屽浘鐗囨帓鐗堬紝鏂囧瓧鏂瑰悜
    var typeset = {
      'justify':['left', 'right', 'center', 'justify'],
      'imagefloat':['none', 'left', 'center', 'right'],
      'directionality':['ltr', 'rtl']
    };

    for (var p in typeset) {

      (function (cmd, val) {
        for (var i = 0, ci; ci = val[i++];) {
          (function (cmd2) {
            editorui[cmd.replace('float', '') + cmd2] = function (editor) {
              var ui = new editorui.Button({
                className:'edui-for-' + cmd.replace('float', '') + cmd2,
                title:editor.options.labelMap[cmd.replace('float', '') + cmd2] || editor.getLang("labelMap." + cmd.replace('float', '') + cmd2) || '',
                theme:editor.options.theme,
                onclick:function () {
                  editor.execCommand(cmd, cmd2);
                }
              });
              editorui.buttons[cmd] = ui;
              editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                ui.setDisabled(editor.queryCommandState(cmd) == -1);
                ui.setChecked(editor.queryCommandValue(cmd) == cmd2 && !uiReady);
              });
              return ui;
            };
          })(ci)
        }
      })(p, typeset[p])
    }

    //瀛椾綋棰滆壊鍜岃儗鏅鑹�
    for (var i = 0, ci; ci = ['backcolor', 'forecolor'][i++];) {
      editorui[ci] = function (cmd) {
        return function (editor) {
          var ui = new editorui.ColorButton({
            className:'edui-for-' + cmd,
            color:'default',
            title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
            editor:editor,
            onpickcolor:function (t, color) {
              editor.execCommand(cmd, color);
            },
            onpicknocolor:function () {
              editor.execCommand(cmd, 'default');
              this.setColor('transparent');
              this.color = 'default';
            },
            onbuttonclick:function () {
              editor.execCommand(cmd, this.color);
            }
          });
          editorui.buttons[cmd] = ui;
          editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState(cmd) == -1);
          });
          return ui;
        };
      }(ci);
    }


    var dialogBtns = {
      noOk:['searchreplace', 'help', 'spechars', 'webapp','preview'],
      ok:['attachment', 'anchor', 'link', 'insertimage', 'map', 'gmap', 'insertframe', 'wordimage',
        'insertvideo', 'insertframe', 'edittip', 'edittable', 'edittd', 'scrawl', 'template', 'music', 'background', 'charts']
    };

    for (var p in dialogBtns) {
      (function (type, vals) {
        for (var i = 0, ci; ci = vals[i++];) {
          //todo opera涓嬪瓨鍦ㄩ棶棰�
          if (browser.opera && ci === "searchreplace") {
            continue;
          }
          (function (cmd) {
            editorui[cmd] = function (editor, iframeUrl, title) {
              iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})[cmd] || iframeUrlMap[cmd];
              title = editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '';

              var dialog;
              //娌℃湁iframeUrl涓嶅垱寤篸ialog
              if (iframeUrl) {
                dialog = new editorui.Dialog(utils.extend({
                  iframeUrl:editor.ui.mapUrl(iframeUrl),
                  editor:editor,
                  className:'edui-for-' + cmd,
                  title:title,
                  holdScroll: cmd === 'insertimage',
                  fullscreen: /charts|preview/.test(cmd),
                  closeDialog:editor.getLang("closeDialog")
                }, type == 'ok' ? {
                  buttons:[
                    {
                      className:'edui-okbutton',
                      label:editor.getLang("ok"),
                      editor:editor,
                      onclick:function () {
                        dialog.close(true);
                      }
                    },
                    {
                      className:'edui-cancelbutton',
                      label:editor.getLang("cancel"),
                      editor:editor,
                      onclick:function () {
                        dialog.close(false);
                      }
                    }
                  ]
                } : {}));

                editor.ui._dialogs[cmd + "Dialog"] = dialog;
              }

              var ui = new editorui.Button({
                className:'edui-for-' + cmd,
                title:title,
                onclick:function () {
                  if (dialog) {
                    switch (cmd) {
                      case "wordimage":
                        var images = editor.execCommand("wordimage");
                        if (images && images.length) {
                          dialog.render();
                          dialog.open();
                        }
                        break;
                      case "scrawl":
                        if (editor.queryCommandState("scrawl") != -1) {
                          dialog.render();
                          dialog.open();
                        }

                        break;
                      default:
                        dialog.render();
                        dialog.open();
                    }
                  }
                },
                theme:editor.options.theme,
                disabled:(cmd == 'scrawl' && editor.queryCommandState("scrawl") == -1) || ( cmd == 'charts' )
              });
              editorui.buttons[cmd] = ui;
              editor.addListener('selectionchange', function () {
                //鍙瓨鍦ㄤ簬鍙抽敭鑿滃崟鑰屾棤宸ュ叿鏍忔寜閽殑ui涓嶉渶瑕佹娴嬬姸鎬�
                var unNeedCheckState = {'edittable':1};
                if (cmd in unNeedCheckState)return;

                var state = editor.queryCommandState(cmd);
                if (ui.getDom()) {
                  ui.setDisabled(state == -1);
                  ui.setChecked(state);
                }

              });

              return ui;
            };
          })(ci.toLowerCase())
        }
      })(p, dialogBtns[p]);
    }

    editorui.snapscreen = function (editor, iframeUrl, title) {
      title = editor.options.labelMap['snapscreen'] || editor.getLang("labelMap.snapscreen") || '';
      var ui = new editorui.Button({
        className:'edui-for-snapscreen',
        title:title,
        onclick:function () {
          editor.execCommand("snapscreen");
        },
        theme:editor.options.theme

      });
      editorui.buttons['snapscreen'] = ui;
      iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})["snapscreen"] || iframeUrlMap["snapscreen"];
      if (iframeUrl) {
        var dialog = new editorui.Dialog({
          iframeUrl:editor.ui.mapUrl(iframeUrl),
          editor:editor,
          className:'edui-for-snapscreen',
          title:title,
          buttons:[
            {
              className:'edui-okbutton',
              label:editor.getLang("ok"),
              editor:editor,
              onclick:function () {
                dialog.close(true);
              }
            },
            {
              className:'edui-cancelbutton',
              label:editor.getLang("cancel"),
              editor:editor,
              onclick:function () {
                dialog.close(false);
              }
            }
          ]

        });
        dialog.render();
        editor.ui._dialogs["snapscreenDialog"] = dialog;
      }
      editor.addListener('selectionchange', function () {
        ui.setDisabled(editor.queryCommandState('snapscreen') == -1);
      });
      return ui;
    };

    editorui.insertcode = function (editor, list, title) {
      list = editor.options['insertcode'] || [];
      title = editor.options.labelMap['insertcode'] || editor.getLang("labelMap.insertcode") || '';
      // if (!list.length) return;
      var items = [];
      utils.each(list,function(key,val){
        items.push({
          label:key,
          value:val,
          theme:editor.options.theme,
          renderLabelHtml:function () {
            return '<div class="edui-label %%-label" >' + (this.label || '') + '</div>';
          }
        });
      });

      var ui = new editorui.Combox({
        editor:editor,
        items:items,
        onselect:function (t, index) {
          editor.execCommand('insertcode', this.items[index].value);
        },
        onbuttonclick:function () {
          this.showPopup();
        },
        title:title,
        initValue:title,
        className:'edui-for-insertcode',
        indexByValue:function (value) {
          if (value) {
            for (var i = 0, ci; ci = this.items[i]; i++) {
              if (ci.value.indexOf(value) != -1)
                return i;
            }
          }

          return -1;
        }
      });
      editorui.buttons['insertcode'] = ui;
      editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        if (!uiReady) {
          var state = editor.queryCommandState('insertcode');
          if (state == -1) {
            ui.setDisabled(true);
          } else {
            ui.setDisabled(false);
            var value = editor.queryCommandValue('insertcode');
            if(!value){
              ui.setValue(title);
              return;
            }
            //trace:1871 ie涓嬩粠婧愮爜妯″紡鍒囨崲鍥炴潵鏃讹紝瀛椾綋浼氬甫鍗曞紩鍙凤紝鑰屼笖浼氭湁閫楀彿
            value && (value = value.replace(/['"]/g, '').split(',')[0]);
            ui.setValue(value);

          }
        }

      });
      return ui;
    };
    editorui.fontfamily = function (editor, list, title) {

      list = editor.options['fontfamily'] || [];
      title = editor.options.labelMap['fontfamily'] || editor.getLang("labelMap.fontfamily") || '';
      if (!list.length) return;
      for (var i = 0, ci, items = []; ci = list[i]; i++) {
        var langLabel = editor.getLang('fontfamily')[ci.name] || "";
        (function (key, val) {
          items.push({
            label:key,
            value:val,
            theme:editor.options.theme,
            renderLabelHtml:function () {
              return '<div class="edui-label %%-label" style="font-family:' +
                utils.unhtml(this.value) + '">' + (this.label || '') + '</div>';
            }
          });
        })(ci.label || langLabel, ci.val)
      }
      var ui = new editorui.Combox({
        editor:editor,
        items:items,
        onselect:function (t, index) {
          editor.execCommand('FontFamily', this.items[index].value);
        },
        onbuttonclick:function () {
          this.showPopup();
        },
        title:title,
        initValue:title,
        className:'edui-for-fontfamily',
        indexByValue:function (value) {
          if (value) {
            for (var i = 0, ci; ci = this.items[i]; i++) {
              if (ci.value.indexOf(value) != -1)
                return i;
            }
          }

          return -1;
        }
      });
      editorui.buttons['fontfamily'] = ui;
      editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        if (!uiReady) {
          var state = editor.queryCommandState('FontFamily');
          if (state == -1) {
            ui.setDisabled(true);
          } else {
            ui.setDisabled(false);
            var value = editor.queryCommandValue('FontFamily');
            //trace:1871 ie涓嬩粠婧愮爜妯″紡鍒囨崲鍥炴潵鏃讹紝瀛椾綋浼氬甫鍗曞紩鍙凤紝鑰屼笖浼氭湁閫楀彿
            value && (value = value.replace(/['"]/g, '').split(',')[0]);
            ui.setValue(value);

          }
        }

      });
      return ui;
    };

    editorui.fontsize = function (editor, list, title) {
      title = editor.options.labelMap['fontsize'] || editor.getLang("labelMap.fontsize") || '';
      list = list || editor.options['fontsize'] || [];
      if (!list.length) return;
      var items = [];
      for (var i = 0; i < list.length; i++) {
        var size = list[i] + 'px';
        items.push({
          label:size,
          value:size,
          theme:editor.options.theme,
          renderLabelHtml:function () {
            return '<div class="edui-label %%-label" style="line-height:1;font-size:' +
              this.value + '">' + (this.label || '') + '</div>';
          }
        });
      }
      var ui = new editorui.Combox({
        editor:editor,
        items:items,
        title:title,
        initValue:title,
        onselect:function (t, index) {
          editor.execCommand('FontSize', this.items[index].value);
        },
        onbuttonclick:function () {
          this.showPopup();
        },
        className:'edui-for-fontsize'
      });
      editorui.buttons['fontsize'] = ui;
      editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        if (!uiReady) {
          var state = editor.queryCommandState('FontSize');
          if (state == -1) {
            ui.setDisabled(true);
          } else {
            ui.setDisabled(false);
            ui.setValue(editor.queryCommandValue('FontSize'));
          }
        }

      });
      return ui;
    };

    editorui.paragraph = function (editor, list, title) {
      title = editor.options.labelMap['paragraph'] || editor.getLang("labelMap.paragraph") || '';
      list = editor.options['paragraph'] || [];
      if (utils.isEmptyObject(list)) return;
      var items = [];
      for (var i in list) {
        items.push({
          value:i,
          label:list[i] || editor.getLang("paragraph")[i],
          theme:editor.options.theme,
          renderLabelHtml:function () {
            return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || '') + '</span></div>';
          }
        })
      }
      var ui = new editorui.Combox({
        editor:editor,
        items:items,
        title:title,
        initValue:title,
        className:'edui-for-paragraph',
        onselect:function (t, index) {
          editor.execCommand('Paragraph', this.items[index].value);
        },
        onbuttonclick:function () {
          this.showPopup();
        }
      });
      editorui.buttons['paragraph'] = ui;
      editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        if (!uiReady) {
          var state = editor.queryCommandState('Paragraph');
          if (state == -1) {
            ui.setDisabled(true);
          } else {
            ui.setDisabled(false);
            var value = editor.queryCommandValue('Paragraph');
            var index = ui.indexByValue(value);
            if (index != -1) {
              ui.setValue(value);
            } else {
              ui.setValue(ui.initValue);
            }
          }
        }

      });
      return ui;
    };


    //鑷畾涔夋爣棰�
    editorui.customstyle = function (editor) {
      var list = editor.options['customstyle'] || [],
        title = editor.options.labelMap['customstyle'] || editor.getLang("labelMap.customstyle") || '';
      if (!list.length)return;
      var langCs = editor.getLang('customstyle');
      for (var i = 0, items = [], t; t = list[i++];) {
        (function (t) {
          var ck = {};
          ck.label = t.label ? t.label : langCs[t.name];
          ck.style = t.style;
          ck.className = t.className;
          ck.tag = t.tag;
          items.push({
            label:ck.label,
            value:ck,
            theme:editor.options.theme,
            renderLabelHtml:function () {
              return '<div class="edui-label %%-label">' + '<' + ck.tag + ' ' + (ck.className ? ' class="' + ck.className + '"' : "")
                + (ck.style ? ' style="' + ck.style + '"' : "") + '>' + ck.label + "<\/" + ck.tag + ">"
                + '</div>';
            }
          });
        })(t);
      }

      var ui = new editorui.Combox({
        editor:editor,
        items:items,
        title:title,
        initValue:title,
        className:'edui-for-customstyle',
        onselect:function (t, index) {
          editor.execCommand('customstyle', this.items[index].value);
        },
        onbuttonclick:function () {
          this.showPopup();
        },
        indexByValue:function (value) {
          for (var i = 0, ti; ti = this.items[i++];) {
            if (ti.label == value) {
              return i - 1
            }
          }
          return -1;
        }
      });
      editorui.buttons['customstyle'] = ui;
      editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        if (!uiReady) {
          var state = editor.queryCommandState('customstyle');
          if (state == -1) {
            ui.setDisabled(true);
          } else {
            ui.setDisabled(false);
            var value = editor.queryCommandValue('customstyle');
            var index = ui.indexByValue(value);
            if (index != -1) {
              ui.setValue(value);
            } else {
              ui.setValue(ui.initValue);
            }
          }
        }

      });
      return ui;
    };
    editorui.inserttable = function (editor, iframeUrl, title) {
      title = editor.options.labelMap['inserttable'] || editor.getLang("labelMap.inserttable") || '';
      var ui = new editorui.TableButton({
        editor:editor,
        title:title,
        className:'edui-for-inserttable',
        onpicktable:function (t, numCols, numRows) {
          editor.execCommand('InsertTable', {numRows:numRows, numCols:numCols, border:1});
        },
        onbuttonclick:function () {
          this.showPopup();
        }
      });
      editorui.buttons['inserttable'] = ui;
      editor.addListener('selectionchange', function () {
        ui.setDisabled(editor.queryCommandState('inserttable') == -1);
      });
      return ui;
    };

    editorui.lineheight = function (editor) {
      var val = editor.options.lineheight || [];
      if (!val.length)return;
      for (var i = 0, ci, items = []; ci = val[i++];) {
        items.push({
          //todo:鍐欐浜�
          label:ci,
          value:ci,
          theme:editor.options.theme,
          onclick:function () {
            editor.execCommand("lineheight", this.value);
          }
        })
      }
      var ui = new editorui.MenuButton({
        editor:editor,
        className:'edui-for-lineheight',
        title:editor.options.labelMap['lineheight'] || editor.getLang("labelMap.lineheight") || '',
        items:items,
        onbuttonclick:function () {
          var value = editor.queryCommandValue('LineHeight') || this.value;
          editor.execCommand("LineHeight", value);
        }
      });
      editorui.buttons['lineheight'] = ui;
      editor.addListener('selectionchange', function () {
        var state = editor.queryCommandState('LineHeight');
        if (state == -1) {
          ui.setDisabled(true);
        } else {
          ui.setDisabled(false);
          var value = editor.queryCommandValue('LineHeight');
          value && ui.setValue((value + '').replace(/cm/, ''));
          ui.setChecked(state)
        }
      });
      return ui;
    };

    var rowspacings = ['top', 'bottom'];
    for (var r = 0, ri; ri = rowspacings[r++];) {
      (function (cmd) {
        editorui['rowspacing' + cmd] = function (editor) {
          var val = editor.options['rowspacing' + cmd] || [];
          if (!val.length) return null;
          for (var i = 0, ci, items = []; ci = val[i++];) {
            items.push({
              label:ci,
              value:ci,
              theme:editor.options.theme,
              onclick:function () {
                editor.execCommand("rowspacing", this.value, cmd);
              }
            })
          }
          var ui = new editorui.MenuButton({
            editor:editor,
            className:'edui-for-rowspacing' + cmd,
            title:editor.options.labelMap['rowspacing' + cmd] || editor.getLang("labelMap.rowspacing" + cmd) || '',
            items:items,
            onbuttonclick:function () {
              var value = editor.queryCommandValue('rowspacing', cmd) || this.value;
              editor.execCommand("rowspacing", value, cmd);
            }
          });
          editorui.buttons[cmd] = ui;
          editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('rowspacing', cmd);
            if (state == -1) {
              ui.setDisabled(true);
            } else {
              ui.setDisabled(false);
              var value = editor.queryCommandValue('rowspacing', cmd);
              value && ui.setValue((value + '').replace(/%/, ''));
              ui.setChecked(state)
            }
          });
          return ui;
        }
      })(ri)
    }
    //鏈夊簭锛屾棤搴忓垪琛�
    var lists = ['insertorderedlist', 'insertunorderedlist'];
    for (var l = 0, cl; cl = lists[l++];) {
      (function (cmd) {
        editorui[cmd] = function (editor) {
          var vals = editor.options[cmd],
            _onMenuClick = function () {
              editor.execCommand(cmd, this.value);
            }, items = [];
          for (var i in vals) {
            items.push({
              label:vals[i] || editor.getLang()[cmd][i] || "",
              value:i,
              theme:editor.options.theme,
              onclick:_onMenuClick
            })
          }
          var ui = new editorui.MenuButton({
            editor:editor,
            className:'edui-for-' + cmd,
            title:editor.getLang("labelMap." + cmd) || '',
            'items':items,
            onbuttonclick:function () {
              var value = editor.queryCommandValue(cmd) || this.value;
              editor.execCommand(cmd, value);
            }
          });
          editorui.buttons[cmd] = ui;
          editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState(cmd);
            if (state == -1) {
              ui.setDisabled(true);
            } else {
              ui.setDisabled(false);
              var value = editor.queryCommandValue(cmd);
              ui.setValue(value);
              ui.setChecked(state)
            }
          });
          return ui;
        };
      })(cl)
    }

    editorui.fullscreen = function (editor, title) {
      title = editor.options.labelMap['fullscreen'] || editor.getLang("labelMap.fullscreen") || '';
      var ui = new editorui.Button({
        className:'edui-for-fullscreen',
        title:title,
        theme:editor.options.theme,
        onclick:function () {
          if (editor.ui) {
            editor.ui.setFullScreen(!editor.ui.isFullScreen());
          }
          this.setChecked(editor.ui.isFullScreen());
        }
      });
      editorui.buttons['fullscreen'] = ui;
      editor.addListener('selectionchange', function () {
        var state = editor.queryCommandState('fullscreen');
        ui.setDisabled(state == -1);
        ui.setChecked(editor.ui.isFullScreen());
      });
      return ui;
    };

    // 琛ㄦ儏
    editorui["emotion"] = function (editor, iframeUrl) {
      var cmd = "emotion";
      var ui = new editorui.MultiMenuPop({
        title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd + "") || '',
        editor:editor,
        className:'edui-for-' + cmd,
        iframeUrl:editor.ui.mapUrl(iframeUrl || (editor.options.iframeUrlMap || {})[cmd] || iframeUrlMap[cmd])
      });
      editorui.buttons[cmd] = ui;

      editor.addListener('selectionchange', function () {
        ui.setDisabled(editor.queryCommandState(cmd) == -1)
      });
      return ui;
    };

    editorui.autotypeset = function (editor) {
      var ui = new editorui.AutoTypeSetButton({
        editor:editor,
        title:editor.options.labelMap['autotypeset'] || editor.getLang("labelMap.autotypeset") || '',
        className:'edui-for-autotypeset',
        onbuttonclick:function () {
          editor.execCommand('autotypeset')
        }
      });
      editorui.buttons['autotypeset'] = ui;
      editor.addListener('selectionchange', function () {
        ui.setDisabled(editor.queryCommandState('autotypeset') == -1);
      });
      return ui;
    };

    /* 绠€鍗曚笂浼犳彃浠� */
    editorui["simpleupload"] = function (editor) {
      var name = 'simpleupload',
        ui = new editorui.Button({
          className:'edui-for-' + name,
          title:editor.options.labelMap[name] || editor.getLang("labelMap." + name) || '',
          onclick:function () {},
          theme:editor.options.theme,
          showText:false
        });
      editorui.buttons[name] = ui;
      editor.addListener('ready', function() {
        var b = ui.getDom('body'),
          iconSpan = b.children[0];
        editor.fireEvent('simpleuploadbtnready', iconSpan);
      });
      editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        var state = editor.queryCommandState(name);
        if (state == -1) {
          ui.setDisabled(true);
          ui.setChecked(false);
        } else {
          if (!uiReady) {
            ui.setDisabled(false);
            ui.setChecked(state);
          }
        }
      });
      return ui;
    };

  })();


// adapter/editor.js
///import core
///commands 鍏ㄥ睆
///commandsName FullScreen
///commandsTitle  鍏ㄥ睆
  (function () {
    var utils = baidu.editor.utils,
      uiUtils = baidu.editor.ui.uiUtils,
      UIBase = baidu.editor.ui.UIBase,
      domUtils = baidu.editor.dom.domUtils;
    var nodeStack = [];

    function EditorUI(options) {
      this.initOptions(options);
      this.initEditorUI();
    }

    EditorUI.prototype = {
      uiName:'editor',
      initEditorUI:function () {
        this.editor.ui = this;
        this._dialogs = {};
        this.initUIBase();
        this._initToolbars();
        var editor = this.editor,
          me = this;

        editor.addListener('ready', function () {
          //鎻愪緵getDialog鏂规硶
          editor.getDialog = function (name) {
            return editor.ui._dialogs[name + "Dialog"];
          };
          domUtils.on(editor.window, 'scroll', function (evt) {
            baidu.editor.ui.Popup.postHide(evt);
          });
          //鎻愪緵缂栬緫鍣ㄥ疄鏃跺楂�(鍏ㄥ睆鏃跺楂樹笉鍙樺寲)
          editor.ui._actualFrameWidth = editor.options.initialFrameWidth;

          UE.browser.ie && UE.browser.version === 6 && editor.container.ownerDocument.execCommand("BackgroundImageCache", false, true);

          //display bottom-bar label based on config
          if (editor.options.elementPathEnabled) {
            editor.ui.getDom('elementpath').innerHTML = '<div class="edui-editor-breadcrumb">' + editor.getLang("elementPathTip") + ':</div>';
          }
          if (editor.options.wordCount) {
            function countFn() {
              setCount(editor,me);
              domUtils.un(editor.document, "click", arguments.callee);
            }
            domUtils.on(editor.document, "click", countFn);
            editor.ui.getDom('wordcount').innerHTML = editor.getLang("wordCountTip");
          }
          editor.ui._scale();
          if (editor.options.scaleEnabled) {
            if (editor.autoHeightEnabled) {
              editor.disableAutoHeight();
            }
            me.enableScale();
          } else {
            me.disableScale();
          }
          if (!editor.options.elementPathEnabled && !editor.options.wordCount && !editor.options.scaleEnabled) {
            editor.ui.getDom('elementpath').style.display = "none";
            editor.ui.getDom('wordcount').style.display = "none";
            editor.ui.getDom('scale').style.display = "none";
          }

          if (!editor.selection.isFocus())return;
          editor.fireEvent('selectionchange', false, true);


        });

        editor.addListener('mousedown', function (t, evt) {
          var el = evt.target || evt.srcElement;
          baidu.editor.ui.Popup.postHide(evt, el);
          baidu.editor.ui.ShortCutMenu.postHide(evt);

        });
        editor.addListener("delcells", function () {
          if (UE.ui['edittip']) {
            new UE.ui['edittip'](editor);
          }
          editor.getDialog('edittip').open();
        });

        var pastePop, isPaste = false, timer;
        editor.addListener("afterpaste", function () {
          if(editor.queryCommandState('pasteplain'))
            return;
          if(baidu.editor.ui.PastePicker){
            pastePop = new baidu.editor.ui.Popup({
              content:new baidu.editor.ui.PastePicker({editor:editor}),
              editor:editor,
              className:'edui-wordpastepop'
            });
            pastePop.render();
          }
          isPaste = true;
        });

        editor.addListener("afterinserthtml", function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (pastePop && (isPaste || editor.ui._isTransfer)) {
              if(pastePop.isHidden()){
                var span = domUtils.createElement(editor.document, 'span', {
                    'style':"line-height:0px;",
                    'innerHTML':'\ufeff'
                  }),
                  range = editor.selection.getRange();
                range.insertNode(span);
                var tmp= getDomNode(span, 'firstChild', 'previousSibling');
                tmp && pastePop.showAnchor(tmp.nodeType == 3 ? tmp.parentNode : tmp);
                domUtils.remove(span);
              }else{
                pastePop.show();
              }
              delete editor.ui._isTransfer;
              isPaste = false;
            }
          }, 200)
        });
        editor.addListener('contextmenu', function (t, evt) {
          baidu.editor.ui.Popup.postHide(evt);
        });
        editor.addListener('keydown', function (t, evt) {
          if (pastePop)    pastePop.dispose(evt);
          var keyCode = evt.keyCode || evt.which;
          if(evt.altKey&&keyCode==90){
            UE.ui.buttons['fullscreen'].onclick();
          }
        });
        editor.addListener('wordcount', function (type) {
          setCount(this,me);
        });
        function setCount(editor,ui) {
          editor.setOpt({
            wordCount:true,
            maximumWords:10000,
            wordCountMsg:editor.options.wordCountMsg || editor.getLang("wordCountMsg"),
            wordOverFlowMsg:editor.options.wordOverFlowMsg || editor.getLang("wordOverFlowMsg")
          });
          var opt = editor.options,
            max = opt.maximumWords,
            msg = opt.wordCountMsg ,
            errMsg = opt.wordOverFlowMsg,
            countDom = ui.getDom('wordcount');
          if (!opt.wordCount) {
            return;
          }
          var count = editor.getContentLength(true);
          if (count > max) {
            countDom.innerHTML = errMsg;
            editor.fireEvent("wordcountoverflow");
          } else {
            countDom.innerHTML = msg.replace("{#leave}", max - count).replace("{#count}", count);
          }
        }

        editor.addListener('selectionchange', function () {
          if (editor.options.elementPathEnabled) {
            me[(editor.queryCommandState('elementpath') == -1 ? 'dis' : 'en') + 'ableElementPath']()
          }
          if (editor.options.scaleEnabled) {
            me[(editor.queryCommandState('scale') == -1 ? 'dis' : 'en') + 'ableScale']();

          }
        });
        var popup = new baidu.editor.ui.Popup({
          editor:editor,
          content:'',
          className:'edui-bubble',
          _onEditButtonClick:function () {
            this.hide();
            editor.ui._dialogs.linkDialog.open();
          },
          _onImgEditButtonClick:function (name) {
            this.hide();
            editor.ui._dialogs[name] && editor.ui._dialogs[name].open();

          },
          _onImgSetFloat:function (value) {
            this.hide();
            editor.execCommand("imagefloat", value);

          },
          _setIframeAlign:function (value) {
            var frame = popup.anchorEl;
            var newFrame = frame.cloneNode(true);
            switch (value) {
              case -2:
                newFrame.setAttribute("align", "");
                break;
              case -1:
                newFrame.setAttribute("align", "left");
                break;
              case 1:
                newFrame.setAttribute("align", "right");
                break;
            }
            frame.parentNode.insertBefore(newFrame, frame);
            domUtils.remove(frame);
            popup.anchorEl = newFrame;
            popup.showAnchor(popup.anchorEl);
          },
          _updateIframe:function () {
            var frame = editor._iframe = popup.anchorEl;
            if(domUtils.hasClass(frame, 'ueditor_baidumap')) {
              editor.selection.getRange().selectNode(frame).select();
              editor.ui._dialogs.mapDialog.open();
              popup.hide();
            } else {
              editor.ui._dialogs.insertframeDialog.open();
              popup.hide();
            }
          },
          _onRemoveButtonClick:function (cmdName) {
            editor.execCommand(cmdName);
            this.hide();
          },
          queryAutoHide:function (el) {
            if (el && el.ownerDocument == editor.document) {
              if (el.tagName.toLowerCase() == 'img' || domUtils.findParentByTagName(el, 'a', true)) {
                return el !== popup.anchorEl;
              }
            }
            return baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, el);
          }
        });
        popup.render();
        if (editor.options.imagePopup) {
          editor.addListener('mouseover', function (t, evt) {
            evt = evt || window.event;
            var el = evt.target || evt.srcElement;
            if (editor.ui._dialogs.insertframeDialog && /iframe/ig.test(el.tagName)) {
              var html = popup.formatHtml(
                '<nobr>' + editor.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                ' <span onclick="$$._updateIframe( this);" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>');
              if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
              } else {
                popup.hide();
              }
            }
          });
          editor.addListener('selectionchange', function (t, causeByUi) {
            if (!causeByUi) return;
            var html = '', str = "",
              img = editor.selection.getRange().getClosedNode(),
              dialogs = editor.ui._dialogs;
            if (img && img.tagName == 'IMG') {
              var dialogName = 'insertimageDialog';
              if (img.className.indexOf("edui-faked-video") != -1 || img.className.indexOf("edui-upload-video") != -1) {
                dialogName = "insertvideoDialog"
              }
              if (img.className.indexOf("edui-faked-webapp") != -1) {
                dialogName = "webappDialog"
              }
              if (img.src.indexOf("http://api.map.baidu.com") != -1) {
                dialogName = "mapDialog"
              }
              if (img.className.indexOf("edui-faked-music") != -1) {
                dialogName = "musicDialog"
              }
              if (img.src.indexOf("http://maps.google.com/maps/api/staticmap") != -1) {
                dialogName = "gmapDialog"
              }
              if (img.getAttribute("anchorname")) {
                dialogName = "anchorDialog";
                html = popup.formatHtml(
                  '<nobr>' + editor.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + editor.getLang("modify") + '</span>&nbsp;&nbsp;' +
                  '<span onclick=$$._onRemoveButtonClick(\'anchor\') class="edui-clickable">' + editor.getLang("delete") + '</span></nobr>');
              }
              if (img.getAttribute("word_img")) {
                //todo 鏀惧埌dialog鍘诲仛鏌ヨ
                editor.word_img = [img.getAttribute("word_img")];
                dialogName = "wordimageDialog"
              }
              if(domUtils.hasClass(img, 'loadingclass') || domUtils.hasClass(img, 'loaderrorclass')) {
                dialogName = "";
              }
              if (!dialogs[dialogName]) {
                return;
              }
              str = '<nobr>' + editor.getLang("property") + ': '+
                '<span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;' +
                '<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;' +
                '<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                '<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + editor.getLang("justifycenter") + '</span>&nbsp;&nbsp;'+
                '<span onclick="$$._onImgEditButtonClick(\'' + dialogName + '\');" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>';

              !html && (html = popup.formatHtml(str))

            }
            if (editor.ui._dialogs.linkDialog) {
              var link = editor.queryCommandValue('link');
              var url;
              if (link && (url = (link.getAttribute('_href') || link.getAttribute('href', 2)))) {
                var txt = url;
                if (url.length > 30) {
                  txt = url.substring(0, 20) + "...";
                }
                if (html) {
                  html += '<div style="height:5px;"></div>'
                }
                html += popup.formatHtml(
                  '<nobr>' + editor.getLang("anthorMsg") + ': <a target="_blank" href="' + url + '" title="' + url + '" >' + txt + '</a>' +
                  ' <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + editor.getLang("modify") + '</span>' +
                  ' <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + editor.getLang("clear") + '</span></nobr>');
                popup.showAnchor(link);
              }
            }

            if (html) {
              popup.getDom('content').innerHTML = html;
              popup.anchorEl = img || link;
              popup.showAnchor(popup.anchorEl);
            } else {
              popup.hide();
            }
          });
        }

      },
      _initToolbars:function () {
        var editor = this.editor;
        var toolbars = this.toolbars || [];
        var toolbarUis = [];
        for (var i = 0; i < toolbars.length; i++) {
          var toolbar = toolbars[i];
          var toolbarUi = new baidu.editor.ui.Toolbar({theme:editor.options.theme});
          for (var j = 0; j < toolbar.length; j++) {
            var toolbarItem = toolbar[j];
            var toolbarItemUi = null;
            if (typeof toolbarItem == 'string') {
              toolbarItem = toolbarItem.toLowerCase();
              if (toolbarItem == '|') {
                toolbarItem = 'Separator';
              }
              if(toolbarItem == '||'){
                toolbarItem = 'Breakline';
              }
              if (baidu.editor.ui[toolbarItem]) {
                toolbarItemUi = new baidu.editor.ui[toolbarItem](editor);
              }

              //fullscreen杩欓噷鍗曠嫭澶勭悊涓€涓嬶紝鏀惧埌棣栬鍘�
              if (toolbarItem == 'fullscreen') {
                if (toolbarUis && toolbarUis[0]) {
                  toolbarUis[0].items.splice(0, 0, toolbarItemUi);
                } else {
                  toolbarItemUi && toolbarUi.items.splice(0, 0, toolbarItemUi);
                }

                continue;


              }
            } else {
              toolbarItemUi = toolbarItem;
            }
            if (toolbarItemUi && toolbarItemUi.id) {

              toolbarUi.add(toolbarItemUi);
            }
          }
          toolbarUis[i] = toolbarUi;
        }

        //鎺ュ彈澶栭儴瀹氬埗鐨刄I

        utils.each(UE._customizeUI,function(obj,key){
          var itemUI,index;
          if(obj.id && obj.id != editor.key){
            return false;
          }
          itemUI = obj.execFn.call(editor,editor,key);
          if(itemUI){
            index = obj.index;
            if(index === undefined){
              index = toolbarUi.items.length;
            }
            toolbarUi.add(itemUI,index)
          }
        });

        this.toolbars = toolbarUis;
      },
      getHtmlTpl:function () {
        return '<div id="##" class="%%">' +
          '<div id="##_toolbarbox" class="%%-toolbarbox">' +
          (this.toolbars.length ?
          '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' +
          this.renderToolbarBoxHtml() +
          '</div></div>' : '') +
          '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">' +
          '<div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div>' +
          '<div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>' +
          '<div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>' +
          '<div style="height:0;overflow:hidden;clear:both;"></div>' +
          '</div>' +
          '<div id="##_message_holder" class="%%-messageholder"></div>' +
          '</div>' +
          '<div id="##_iframeholder" class="%%-iframeholder">' +
          '</div>' +
          //modify wdcount by matao
          '<div id="##_bottombar" class="%%-bottomContainer"><table><tr>' +
          '<td id="##_elementpath" class="%%-bottombar"></td>' +
          '<td id="##_wordcount" class="%%-wordcount"></td>' +
          '<td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>' +
          '</tr></table></div>' +
          '<div id="##_scalelayer"></div>' +
          '</div>';
      },
      showWordImageDialog:function () {
        this._dialogs['wordimageDialog'].open();
      },
      renderToolbarBoxHtml:function () {
        var buff = [];
        for (var i = 0; i < this.toolbars.length; i++) {
          buff.push(this.toolbars[i].renderHtml());
        }
        return buff.join('');
      },
      setFullScreen:function (fullscreen) {

        var editor = this.editor,
          container = editor.container.parentNode.parentNode;
        if (this._fullscreen != fullscreen) {
          this._fullscreen = fullscreen;
          this.editor.fireEvent('beforefullscreenchange', fullscreen);
          if (baidu.editor.browser.gecko) {
            var bk = editor.selection.getRange().createBookmark();
          }
          if (fullscreen) {
            while (container.tagName != "BODY") {
              var position = baidu.editor.dom.domUtils.getComputedStyle(container, "position");
              nodeStack.push(position);
              container.style.position = "static";
              container = container.parentNode;
            }
            this._bakHtmlOverflow = document.documentElement.style.overflow;
            this._bakBodyOverflow = document.body.style.overflow;
            this._bakAutoHeight = this.editor.autoHeightEnabled;
            this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

            this._bakEditorContaninerWidth = editor.iframe.parentNode.offsetWidth;
            if (this._bakAutoHeight) {
              //褰撳叏灞忔椂涓嶈兘鎵ц鑷姩闀块珮
              editor.autoHeightEnabled = false;
              this.editor.disableAutoHeight();
            }

            document.documentElement.style.overflow = 'hidden';
            //淇锛屾粴鍔ㄦ潯涓嶆敹璧风殑闂

            window.scrollTo(0,window.scrollY);
            this._bakCssText = this.getDom().style.cssText;
            this._bakCssText1 = this.getDom('iframeholder').style.cssText;
            editor.iframe.parentNode.style.width = '';
            this._updateFullScreen();
          } else {
            while (container.tagName != "BODY") {
              container.style.position = nodeStack.shift();
              container = container.parentNode;
            }
            this.getDom().style.cssText = this._bakCssText;
            this.getDom('iframeholder').style.cssText = this._bakCssText1;
            if (this._bakAutoHeight) {
              editor.autoHeightEnabled = true;
              this.editor.enableAutoHeight();
            }

            document.documentElement.style.overflow = this._bakHtmlOverflow;
            document.body.style.overflow = this._bakBodyOverflow;
            editor.iframe.parentNode.style.width = this._bakEditorContaninerWidth + 'px';
            window.scrollTo(0, this._bakScrollTop);
          }
          if (browser.gecko && editor.body.contentEditable === 'true') {
            var input = document.createElement('input');
            document.body.appendChild(input);
            editor.body.contentEditable = false;
            setTimeout(function () {
              input.focus();
              setTimeout(function () {
                editor.body.contentEditable = true;
                editor.fireEvent('fullscreenchanged', fullscreen);
                editor.selection.getRange().moveToBookmark(bk).select(true);
                baidu.editor.dom.domUtils.remove(input);
                fullscreen && window.scroll(0, 0);
              }, 0)
            }, 0)
          }

          if(editor.body.contentEditable === 'true'){
            this.editor.fireEvent('fullscreenchanged', fullscreen);
            this.triggerLayout();
          }

        }
      },
      _updateFullScreen:function () {
        if (this._fullscreen) {
          var vpRect = uiUtils.getViewportRect();
          this.getDom().style.cssText = 'border:0;position:absolute;left:0;top:' + (this.editor.options.topOffset || 0) + 'px;width:' + vpRect.width + 'px;height:' + vpRect.height + 'px;z-index:' + (this.getDom().style.zIndex * 1 + 100);
          uiUtils.setViewportOffset(this.getDom(), { left:0, top:this.editor.options.topOffset || 0 });
          this.editor.setHeight(vpRect.height - this.getDom('toolbarbox').offsetHeight - this.getDom('bottombar').offsetHeight - (this.editor.options.topOffset || 0),true);
          //涓嶆墜鍔ㄨ皟涓€涓嬶紝浼氬鑷村叏灞忓け鏁�
          if(browser.gecko){
            try{
              window.onresize();
            }catch(e){

            }

          }
        }
      },
      _updateElementPath:function () {
        var bottom = this.getDom('elementpath'), list;
        if (this.elementPathEnabled && (list = this.editor.queryCommandValue('elementpath'))) {

          var buff = [];
          for (var i = 0, ci; ci = list[i]; i++) {
            buff[i] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + i + '&quot;);">' + ci + '</span>');
          }
          bottom.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ': ' + buff.join(' &gt; ') + '</div>';

        } else {
          bottom.style.display = 'none'
        }
      },
      disableElementPath:function () {
        var bottom = this.getDom('elementpath');
        bottom.innerHTML = '';
        bottom.style.display = 'none';
        this.elementPathEnabled = false;

      },
      enableElementPath:function () {
        var bottom = this.getDom('elementpath');
        bottom.style.display = '';
        this.elementPathEnabled = true;
        this._updateElementPath();
      },
      _scale:function () {
        var doc = document,
          editor = this.editor,
          editorHolder = editor.container,
          editorDocument = editor.document,
          toolbarBox = this.getDom("toolbarbox"),
          bottombar = this.getDom("bottombar"),
          scale = this.getDom("scale"),
          scalelayer = this.getDom("scalelayer");

        var isMouseMove = false,
          position = null,
          minEditorHeight = 0,
          minEditorWidth = editor.options.minFrameWidth,
          pageX = 0,
          pageY = 0,
          scaleWidth = 0,
          scaleHeight = 0;

        function down() {
          position = domUtils.getXY(editorHolder);

          if (!minEditorHeight) {
            minEditorHeight = editor.options.minFrameHeight + toolbarBox.offsetHeight + bottombar.offsetHeight;
          }

          scalelayer.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + editorHolder.offsetWidth + "px;height:"
            + editorHolder.offsetHeight + "px;z-index:" + (editor.options.zIndex + 1);

          domUtils.on(doc, "mousemove", move);
          domUtils.on(editorDocument, "mouseup", up);
          domUtils.on(doc, "mouseup", up);
        }

        var me = this;
        //by xuheng 鍏ㄥ睆鏃跺叧鎺夌缉鏀�
        this.editor.addListener('fullscreenchanged', function (e, fullScreen) {
          if (fullScreen) {
            me.disableScale();

          } else {
            if (me.editor.options.scaleEnabled) {
              me.enableScale();
              var tmpNode = me.editor.document.createElement('span');
              me.editor.body.appendChild(tmpNode);
              me.editor.body.style.height = Math.max(domUtils.getXY(tmpNode).y, me.editor.iframe.offsetHeight - 20) + 'px';
              domUtils.remove(tmpNode)
            }
          }
        });
        function move(event) {
          clearSelection();
          var e = event || window.event;
          pageX = e.pageX || (doc.documentElement.scrollLeft + e.clientX);
          pageY = e.pageY || (doc.documentElement.scrollTop + e.clientY);
          scaleWidth = pageX - position.x;
          scaleHeight = pageY - position.y;

          if (scaleWidth >= minEditorWidth) {
            isMouseMove = true;
            scalelayer.style.width = scaleWidth + 'px';
          }
          if (scaleHeight >= minEditorHeight) {
            isMouseMove = true;
            scalelayer.style.height = scaleHeight + "px";
          }
        }

        function up() {
          if (isMouseMove) {
            isMouseMove = false;
            editor.ui._actualFrameWidth = scalelayer.offsetWidth - 2;
            editorHolder.style.width = editor.ui._actualFrameWidth + 'px';

            editor.setHeight(scalelayer.offsetHeight - bottombar.offsetHeight - toolbarBox.offsetHeight - 2,true);
          }
          if (scalelayer) {
            scalelayer.style.display = "none";
          }
          clearSelection();
          domUtils.un(doc, "mousemove", move);
          domUtils.un(editorDocument, "mouseup", up);
          domUtils.un(doc, "mouseup", up);
        }

        function clearSelection() {
          if (browser.ie)
            doc.selection.clear();
          else
            window.getSelection().removeAllRanges();
        }

        this.enableScale = function () {
          //trace:2868
          if (editor.queryCommandState("source") == 1)    return;
          scale.style.display = "";
          this.scaleEnabled = true;
          domUtils.on(scale, "mousedown", down);
        };
        this.disableScale = function () {
          scale.style.display = "none";
          this.scaleEnabled = false;
          domUtils.un(scale, "mousedown", down);
        };
      },
      isFullScreen:function () {
        return this._fullscreen;
      },
      postRender:function () {
        UIBase.prototype.postRender.call(this);
        for (var i = 0; i < this.toolbars.length; i++) {
          this.toolbars[i].postRender();
        }
        var me = this;
        var timerId,
          domUtils = baidu.editor.dom.domUtils,
          updateFullScreenTime = function () {
            clearTimeout(timerId);
            timerId = setTimeout(function () {
              me._updateFullScreen();
            });
          };
        domUtils.on(window, 'resize', updateFullScreenTime);

        me.addListener('destroy', function () {
          domUtils.un(window, 'resize', updateFullScreenTime);
          clearTimeout(timerId);
        })
      },
      showToolbarMsg:function (msg, flag) {
        this.getDom('toolbarmsg_label').innerHTML = msg;
        this.getDom('toolbarmsg').style.display = '';
        //
        if (!flag) {
          var w = this.getDom('upload_dialog');
          w.style.display = 'none';
        }
      },
      hideToolbarMsg:function () {
        this.getDom('toolbarmsg').style.display = 'none';
      },
      mapUrl:function (url) {
        return url ? url.replace('~/', this.editor.options.UEDITOR_HOME_URL || '') : ''
      },
      triggerLayout:function () {
        var dom = this.getDom();
        if (dom.style.zoom == '1') {
          dom.style.zoom = '100%';
        } else {
          dom.style.zoom = '1';
        }
      }
    };
    utils.inherits(EditorUI, baidu.editor.ui.UIBase);


    var instances = {};


    UE.ui.Editor = function (options) {
      var editor = new UE.Editor(options);
      editor.options.editor = editor;
      utils.loadFile(document, {
        href:editor.options.themePath + editor.options.theme + "/css/ueditor.css",
        tag:"link",
        type:"text/css",
        rel:"stylesheet"
      });

      var oldRender = editor.render;
      editor.render = function (holder) {
        if (holder.constructor === String) {
          editor.key = holder;
          instances[holder] = editor;
        }
        utils.domReady(function () {
          editor.langIsReady ? renderUI() : editor.addListener("langReady", renderUI);
          function renderUI() {
            editor.setOpt({
              labelMap:editor.options.labelMap || editor.getLang('labelMap')
            });
            new EditorUI(editor.options);
            if (holder) {
              if (holder.constructor === String) {
                holder = document.getElementById(holder);
              }
              holder && holder.getAttribute('name') && ( editor.options.textarea = holder.getAttribute('name'));
              if (holder && /script|textarea/ig.test(holder.tagName)) {
                var newDiv = document.createElement('div');
                holder.parentNode.insertBefore(newDiv, holder);
                var cont = holder.value || holder.innerHTML;
                editor.options.initialContent = /^[\t\r\n ]*$/.test(cont) ? editor.options.initialContent :
                  cont.replace(/>[\n\r\t]+([ ]{4})+/g, '>')
                    .replace(/[\n\r\t]+([ ]{4})+</g, '<')
                    .replace(/>[\n\r\t]+</g, '><');
                holder.className && (newDiv.className = holder.className);
                holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);
                if (/textarea/i.test(holder.tagName)) {
                  editor.textarea = holder;
                  editor.textarea.style.display = 'none';


                } else {
                  holder.parentNode.removeChild(holder);


                }
                if(holder.id){
                  newDiv.id = holder.id;
                  domUtils.removeAttributes(holder,'id');
                }
                holder = newDiv;
                holder.innerHTML = '';
              }

            }
            domUtils.addClass(holder, "edui-" + editor.options.theme);
            editor.ui.render(holder);
            var opt = editor.options;
            //缁欏疄渚嬫坊鍔犱竴涓紪杈戝櫒鐨勫鍣ㄥ紩鐢�
            editor.container = editor.ui.getDom();
            var parents = domUtils.findParents(holder,true);
            var displays = [];
            for(var i = 0 ,ci;ci=parents[i];i++){
              displays[i] = ci.style.display;
              ci.style.display = 'block'
            }
            if (opt.initialFrameWidth) {
              opt.minFrameWidth = opt.initialFrameWidth;
            } else {
              opt.minFrameWidth = opt.initialFrameWidth = holder.offsetWidth;
              var styleWidth = holder.style.width;
              if(/%$/.test(styleWidth)) {
                opt.initialFrameWidth = styleWidth;
              }
            }
            if (opt.initialFrameHeight) {
              opt.minFrameHeight = opt.initialFrameHeight;
            } else {
              opt.initialFrameHeight = opt.minFrameHeight = holder.offsetHeight;
            }
            for(var i = 0 ,ci;ci=parents[i];i++){
              ci.style.display =  displays[i]
            }
            //缂栬緫鍣ㄦ渶澶栧鍣ㄨ缃簡楂樺害锛屼細瀵艰嚧锛岀紪杈戝櫒涓嶅崰浣�
            //todo 鍏堝幓鎺夛紝娌℃湁鎵惧埌鍘熷洜
            if(holder.style.height){
              holder.style.height = ''
            }
            editor.container.style.width = opt.initialFrameWidth + (/%$/.test(opt.initialFrameWidth) ? '' : 'px');
            editor.container.style.zIndex = opt.zIndex;
            oldRender.call(editor, editor.ui.getDom('iframeholder'));
            editor.fireEvent("afteruiready");
          }
        })
      };
      return editor;
    };


    /**
     * @file
     * @name UE
     * @short UE
     * @desc UEditor鐨勯《閮ㄥ懡鍚嶇┖闂�
     */
    /**
     * @name getEditor
     * @since 1.2.4+
     * @grammar UE.getEditor(id,[opt])  =>  Editor瀹炰緥
     * @desc 鎻愪緵涓€涓叏灞€鐨勬柟娉曞緱鍒扮紪杈戝櫒瀹炰緥
     *
     * * ''id''  鏀剧疆缂栬緫鍣ㄧ殑瀹瑰櫒id, 濡傛灉瀹瑰櫒涓嬬殑缂栬緫鍣ㄥ凡缁忓瓨鍦紝灏辩洿鎺ヨ繑鍥�
     * * ''opt'' 缂栬緫鍣ㄧ殑鍙€夊弬鏁�
     * @example
     *  UE.getEditor('containerId',{onready:function(){//鍒涘缓涓€涓紪杈戝櫒瀹炰緥
     *      this.setContent('hello')
     *  }});
     *  UE.getEditor('containerId'); //杩斿洖鍒氬垱寤虹殑瀹炰緥
     *
     */
    UE.getEditor = function (id, opt) {
      var editor = instances[id];
      if (!editor) {
        editor = instances[id] = new UE.ui.Editor(opt);
        editor.render(id);
      }
      return editor;
    };


    UE.delEditor = function (id) {
      var editor;
      if (editor = instances[id]) {
        editor.key && editor.destroy();
        delete instances[id]
      }
    };

    UE.registerUI = function(uiName,fn,index,editorId){
      utils.each(uiName.split(/\s+/), function (name) {
        UE._customizeUI[name] = {
          id : editorId,
          execFn:fn,
          index:index
        };
      })

    }

  })();

// adapter/message.js
  UE.registerUI('message', function(editor) {

    var editorui = baidu.editor.ui;
    var Message = editorui.Message;
    var holder;
    var _messageItems = [];
    var me = editor;

    me.addListener('ready', function(){
      holder = document.getElementById(me.ui.id + '_message_holder');
      updateHolderPos();
      setTimeout(function(){
        updateHolderPos();
      }, 500);
    });

    me.addListener('showmessage', function(type, opt){
      opt = utils.isString(opt) ? {
        'content': opt
      } : opt;
      var message = new Message({
          'timeout': opt.timeout,
          'type': opt.type,
          'content': opt.content,
          'keepshow': opt.keepshow,
          'editor': me
        }),
        mid = opt.id || ('msg_' + (+new Date()).toString(36));
      message.render(holder);
      _messageItems[mid] = message;
      message.reset(opt);
      updateHolderPos();
      return mid;
    });

    me.addListener('updatemessage',function(type, id, opt){
      opt = utils.isString(opt) ? {
        'content': opt
      } : opt;
      var message = _messageItems[id];
      message.render(holder);
      message && message.reset(opt);
    });

    me.addListener('hidemessage',function(type, id){
      var message = _messageItems[id];
      message && message.hide();
    });

    function updateHolderPos(){
      var toolbarbox = me.ui.getDom('toolbarbox');
      if (toolbarbox) {
        holder.style.top = toolbarbox.offsetHeight + 3 + 'px';
      }
      holder.style.zIndex = Math.max(me.options.zIndex, me.iframe.style.zIndex) + 1;
    }

  });


// adapter/autosave.js
  UE.registerUI('autosave', function(editor) {
    var timer = null,uid = null;
    editor.on('afterautosave',function(){
      clearTimeout(timer);

      timer = setTimeout(function(){
        if(uid){
          editor.trigger('hidemessage',uid);
        }
        uid = editor.trigger('showmessage',{
          content : editor.getLang('autosave.success'),
          timeout : 2000
        });

      },2000)
    })

  });



})();
