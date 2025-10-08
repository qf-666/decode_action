//Wed Oct 08 2025 23:53:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x2c4d66 = function () {
  let _0x52bbe5 = true;
  return function (_0x1099c5, _0x3b0424) {
    const _0x3a7d6d = _0x52bbe5 ? function () {
      if (_0x3b0424) {
        const _0x211da1 = _0x3b0424.apply(_0x1099c5, arguments);
        _0x3b0424 = null;
        return _0x211da1;
      }
    } : function () {};
    _0x52bbe5 = false;
    return _0x3a7d6d;
  };
}();
(function () {
  _0x2c4d66(this, function () {
    const _0x2295a1 = new RegExp("function *\\( *\\)"),
      _0xc7856c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x4b20b6 = _0xa19141("init");
    !_0x2295a1.test(_0x4b20b6 + "chain") || !_0xc7856c.test(_0x4b20b6 + "input") ? _0x4b20b6("0") : _0xa19141();
  })();
})();
const _0x1ae9cc = new _0x165089("Q必达"),
  _0x1b5e12 = "qbd",
  _0x1ce05e = 1;
let _0x2564e2 = ["@", "\n"],
  _0x280a53 = "",
  _0x3bc687 = [],
  _0x25c5d4 = 0,
  _0x455f48 = Date.now();
(function () {
  const _0xf00dc2 = function () {
      let _0x3dc744;
      try {
        _0x3dc744 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x5c8a75) {
        _0x3dc744 = window;
      }
      return _0x3dc744;
    },
    _0x7ec302 = _0xf00dc2();
  _0x7ec302.setInterval(_0xa19141, 2000);
})();
let _0xf04222 = 0,
  _0x4dc24f = 0,
  _0x20427b = false,
  _0x48b8f4 = false,
  _0x26c444 = "";
class _0x23f059 {
  constructor(_0x117960) {
    this.index = ++_0x25c5d4;
    this.phone = _0x117960.split("#")[0];
    this.pwd = _0x117960.split("#")[1];
    this.ckStatus = true;
  }
  async ["main"]() {
    this.task_Login();
    await _0x1ae9cc.wait(3000);
    this.user_info();
    await _0x1ae9cc.wait(3000);
    _0x20427b == false && this.task_signIn();
    await _0x1ae9cc.wait(3000);
    _0x48b8f4 == false && this.task_DoublePoint();
    await _0x1ae9cc.wait(3000);
    for (let _0x234635 = 1; _0x234635 <= 3; _0x234635++) {
      _0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  当前第 " + _0x234635 + "次看视频");
      this.task_watchVideo();
      await _0x1ae9cc.wait(5000);
    }
    await _0x1ae9cc.wait(3000);
    _0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  当前已有：" + _0x4dc24f + " 积分");
  }
  async ["task_Login"]() {
    try {
      const _0x247eee = JSON.stringify({
        "editionCode": 1835,
        "deviceType": 1,
        "password": "" + this.pwd,
        "genre": 0,
        "edition": "1.9.5",
        "deviceNo": "",
        "account": "" + this.phone
      });
      let _0x5492e9 = {
          "method": "POST",
          "url": "http://y3zhmdginr.wuliucps.com/ht/web/login/loginNew?t=" + _0x455f48,
          "headers": {
            "Accept-Language": "zh-CN,zh;q=0.8",
            "User-Agent": "okhttp-okgo/jeasonlzy",
            "source": "ANDROID",
            "appId": "com.qsongq.fjqexpress",
            "version": "1835",
            "group": "",
            "token": "",
            "Content-Type": "application/json;charset=utf-8",
            "Host": "y3zhmdginr.wuliucps.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "cookies": "'group': ''"
          },
          "body": _0x247eee
        },
        _0x3d57e6 = await _0x5d2acb(_0x5492e9);
      _0x3d57e6.code == 0 ? (_0x26c444 = _0x3d57e6.data.token, this.ckStatus = true) : this.ckStatus = false;
    } catch (_0x3d2faf) {
      console.log(_0x3d2faf);
    }
  }
  async ["user_info"]() {
    try {
      let _0x8cf0ba = {
          "method": "GET",
          "url": "http://wuliucps.com/ht/web/login/info?t=" + _0x455f48,
          "headers": {
            "User-Agent": "okhttp-okgo/jeasonlzy",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Accept-Language": "zh-CN,zh;q=0.8",
            "source": "ANDROID",
            "appId": "com.qsongq.fjqexpress",
            "version": "1835",
            "group": "",
            "token": "" + _0x26c444,
            "Cookie": "group="
          }
        },
        _0x2c1182 = await _0x5d2acb(_0x8cf0ba);
      if (_0x2c1182.code == 0) {
        let _0x29d2ef = null;
        _0x29d2ef = _0x2c1182.data;
        _0xf04222 = _0x29d2ef.nickname;
        _0x4dc24f = _0x29d2ef.integral;
        _0x20427b = _0x29d2ef.isSignIn;
        _0x48b8f4 = _0x29d2ef.isSignDouble;
        _0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  注册手机号正在上传...");
        await _0x1ae9cc.wait(3000);
        _0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  注册手机号上传成功！");
        _0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  当前已有：" + _0x4dc24f + " 积分");
        this.ckStatus = true;
      } else _0x1ae9cc.DoubleLog("用户[" + this.index + "]  登录失败,原因：" + _0x2c1182.msg), this.ckStatus = false;
    } catch (_0x1ec0e3) {
      console.log(_0x1ec0e3);
    }
  }
  async ["task_signIn"]() {
    try {
      const _0x4708ba = JSON.stringify({
        "group": ""
      });
      let _0x32707d = {
          "method": "POST",
          "url": "http://wuliucps.com/ht/web/mine/signIn?t=" + _0x455f48,
          "headers": {
            "Accept-Language": "zh-CN,zh;q=0.8",
            "User-Agent": "okhttp-okgo/jeasonlzy",
            "source": "ANDROID",
            "appId": "com.qsongq.fjqexpress",
            "version": "1835",
            "group": "",
            "token": "" + _0x26c444,
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "wuliucps.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
          },
          "body": _0x4708ba
        },
        _0x459c0f = await _0x5d2acb(_0x32707d);
      _0x459c0f.code == 0 ? (_0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  签到成功获得: " + _0x459c0f.data + "积分🎉"), this.ckStatus = true) : (_0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  签到失败,原因：" + _0x459c0f.msg + "❌"), this.ckStatus = false);
    } catch (_0x1ffc09) {
      console.log(_0x1ffc09);
    }
  }
  async ["task_DoublePoint"]() {
    try {
      const _0x11a8f4 = JSON.stringify({
        "data": "verify:true amount:10 name:积分 errorCode:0 errorMsg:"
      });
      let _0x5d49be = {
          "method": "POST",
          "url": "http://wuliucps.com/ht/web/mine/doublePoint?t=" + _0x455f48,
          "headers": {
            "Accept-Language": "zh-CN,zh;q=0.8",
            "User-Agent": "okhttp-okgo/jeasonlzy",
            "source": "ANDROID",
            "appId": "com.qsongq.fjqexpress",
            "version": "1835",
            "group": "",
            "token": "" + _0x26c444,
            "Content-Type": "application/json;charset=utf-8",
            "Host": "wuliucps.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
          },
          "body": _0x11a8f4
        },
        _0x277bc8 = await _0x5d2acb(_0x5d49be);
      _0x277bc8.code == 0 ? (_0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  看广告成功获得: " + _0x277bc8.data + "积分🎉"), this.ckStatus = true) : (_0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  看广告失败,原因：" + _0x277bc8.msg + "❌"), this.ckStatus = false);
    } catch (_0x46a94f) {
      console.log(_0x46a94f);
    }
  }
  async ["task_watchVideo"]() {
    try {
      const _0x59c1bb = JSON.stringify({
        "data": "verify:true amount:10 name:积分 errorCode:0 errorMsg:"
      });
      let _0x4732a0 = {
          "method": "POST",
          "url": "http://wuliucps.com/ht/web/task/watchVideo?t=" + _0x455f48,
          "headers": {
            "Accept-Language": "zh-CN,zh;q=0.8",
            "User-Agent": "okhttp-okgo/jeasonlzy",
            "source": "ANDROID",
            "appId": "com.qsongq.fjqexpress",
            "version": "1835",
            "group": "",
            "token": "" + _0x26c444,
            "Content-Type": "application/json;charset=utf-8",
            "Host": "wuliucps.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
          },
          "body": _0x59c1bb
        },
        _0xd1fb = await _0x5d2acb(_0x4732a0);
      _0xd1fb.code == 0 ? (_0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  看广告成功获得: " + _0xd1fb.data + "积分🎉"), this.ckStatus = true) : (_0x1ae9cc.DoubleLog("用户[" + _0xf04222 + "]  看广告失败,原因：" + _0xd1fb.msg + "❌"), this.ckStatus = false);
    } catch (_0x5ca2fb) {
      console.log(_0x5ca2fb);
    }
  }
}
async function _0x1e146a() {
  let _0x6383b5 = [];
  for (let _0x1aa630 of _0x3bc687) {
    _0x1aa630.ckStatus && (_0x6383b5.push(await _0x1aa630.main()), await _0x1ae9cc.wait(1000));
  }
  await Promise.all(_0x6383b5);
}
!(async () => {
  if (!(await _0x121ab3())) return;
  _0x3bc687.length > 0 && (await _0x1e146a());
  await _0x1ae9cc.SendMsg(_0x280a53);
})().catch(_0x109b4c => console.log(_0x109b4c)).finally(() => _0x1ae9cc.done());
async function _0x121ab3() {
  let _0x345dec = (_0x1ae9cc.isNode() ? process.env[_0x1b5e12] : _0x1ae9cc.getdata(_0x1b5e12)) || "",
    _0x5e3ba1 = 0;
  if (_0x345dec) {
    let _0x343d01 = _0x2564e2[0];
    for (let _0x133179 of _0x2564e2) if (_0x345dec.indexOf(_0x133179) > -1) {
      _0x343d01 = _0x133179;
      break;
    }
    for (let _0x2ac547 of _0x345dec.split(_0x343d01)) _0x2ac547 && _0x3bc687.push(new _0x23f059(_0x2ac547));
    _0x5e3ba1 = _0x3bc687.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x5e3ba1 + "个用户");
  return true;
}
async function _0x5d2acb(_0x2dc082, _0x34dca9) {
  _0x34dca9 = _0x2dc082.method ? _0x2dc082.method.toLowerCase() : _0x2dc082.body ? "post" : "get";
  const _0x28faa4 = {
    "method": _0x34dca9.toUpperCase(),
    "headers": _0x2dc082.headers,
    "body": _0x2dc082.body
  };
  try {
    const _0x4a1241 = await fetch(_0x2dc082.url, _0x28faa4),
      _0x1a1aa3 = await _0x4a1241.json();
    return _0x1a1aa3;
  } catch (_0x54b363) {
    console.error(_0x34dca9 + "请求失败");
    console.error(_0x54b363);
    throw _0x54b363;
  }
}
function _0xec1c51() {
  const _0x3415b1 = (_0x4fd12a, _0x4ee775) => Math.floor(Math.random() * (_0x4ee775 - _0x4fd12a + 1)) + _0x4fd12a,
    _0x49eb83 = _0x3415b1(600, 700) + "." + _0x3415b1(1, 4) + "." + _0x3415b1(1, 5),
    _0x4e8169 = _0x3415b1(12, 15) + "." + _0x3415b1(0, 6) + "." + _0x3415b1(0, 9),
    _0x1aac5e = "Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x4e8169 + " like Mac OS X) AppleWebKit/" + _0x49eb83 + " (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x16001422) NetType/WIFI Language/zh_CN";
  return _0x1aac5e;
}
function _0x165089(_0x15f0a3, _0x2811be) {
  class _0x474e1c {
    constructor(_0x37c64f) {
      this.env = _0x37c64f;
    }
    ["send"](_0xf4a31, _0x4680d3 = "GET") {
      _0xf4a31 = "string" == typeof _0xf4a31 ? {
        "url": _0xf4a31
      } : _0xf4a31;
      let _0x3486f2 = this.get;
      "POST" === _0x4680d3 && (_0x3486f2 = this.post);
      return new Promise((_0x515af2, _0x3b4d06) => {
        _0x3486f2.call(this, _0xf4a31, (_0x429146, _0x317067, _0x58f86d) => {
          _0x429146 ? _0x3b4d06(_0x429146) : _0x515af2(_0x317067);
        });
      });
    }
    ["get"](_0x5032a0) {
      return this.send.call(this.env, _0x5032a0);
    }
    ["post"](_0x80fcc3) {
      return this.send.call(this.env, _0x80fcc3, "POST");
    }
  }
  return new class {
    constructor(_0x5dcb8e, _0xccbc4) {
      this.name = _0x5dcb8e;
      this.http = new _0x474e1c(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xccbc4);
      this.log("", "🔔" + this.name + ",开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x20f4b2, _0x4a7694 = null) {
      try {
        return JSON.parse(_0x20f4b2);
      } catch {
        return _0x4a7694;
      }
    }
    ["toStr"](_0x33881e, _0x3facf2 = null) {
      try {
        return JSON.stringify(_0x33881e);
      } catch {
        return _0x3facf2;
      }
    }
    ["getjson"](_0x1de3eb, _0x4cf573) {
      let _0x508ec8 = _0x4cf573;
      const _0x1a8279 = this.getdata(_0x1de3eb);
      if (_0x1a8279) try {
        _0x508ec8 = JSON.parse(this.getdata(_0x1de3eb));
      } catch {}
      return _0x508ec8;
    }
    ["setjson"](_0x351097, _0x33c63e) {
      try {
        return this.setdata(JSON.stringify(_0x351097), _0x33c63e);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x2119a3) {
      return new Promise(_0x1ec3b1 => {
        this.get({
          "url": _0x2119a3
        }, (_0x5b8dad, _0x1045cd, _0x5c7a1b) => _0x1ec3b1(_0x5c7a1b));
      });
    }
    ["runScript"](_0x5b471e, _0x305b2d) {
      return new Promise(_0xf835d3 => {
        let _0xb4d49f = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xb4d49f = _0xb4d49f ? _0xb4d49f.replace(/\n/g, "").trim() : _0xb4d49f;
        let _0x5d5a6a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5d5a6a = _0x5d5a6a ? 1 * _0x5d5a6a : 20;
        _0x5d5a6a = _0x305b2d && _0x305b2d.timeout ? _0x305b2d.timeout : _0x5d5a6a;
        const [_0x3a0ea9, _0x167e11] = _0xb4d49f.split("@"),
          _0x340672 = {
            "url": "http://" + _0x167e11 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x5b471e,
              "mock_type": "cron",
              "timeout": _0x5d5a6a
            },
            "headers": {
              "X-Key": _0x3a0ea9,
              "Accept": "*/*"
            },
            "timeout": _0x5d5a6a
          };
        this.post(_0x340672, (_0x3fd391, _0x1a262e, _0x1b5019) => _0xf835d3(_0x1b5019));
      }).catch(_0x5239cc => this.logErr(_0x5239cc));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4ea416 = this.path.resolve(this.dataFile),
          _0x1cb478 = this.path.resolve(process.cwd(), this.dataFile),
          _0xc8bf61 = this.fs.existsSync(_0x4ea416),
          _0x5b80bc = !_0xc8bf61 && this.fs.existsSync(_0x1cb478);
        if (!_0xc8bf61 && !_0x5b80bc) return {};
        {
          const _0xfaea91 = _0xc8bf61 ? _0x4ea416 : _0x1cb478;
          try {
            return JSON.parse(this.fs.readFileSync(_0xfaea91));
          } catch (_0x44885a) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xc6e4c = this.path.resolve(this.dataFile),
          _0x1669e8 = this.path.resolve(process.cwd(), this.dataFile),
          _0x11447b = this.fs.existsSync(_0xc6e4c),
          _0x1a6280 = !_0x11447b && this.fs.existsSync(_0x1669e8),
          _0x3ae029 = JSON.stringify(this.data);
        _0x11447b ? this.fs.writeFileSync(_0xc6e4c, _0x3ae029) : _0x1a6280 ? this.fs.writeFileSync(_0x1669e8, _0x3ae029) : this.fs.writeFileSync(_0xc6e4c, _0x3ae029);
      }
    }
    ["lodash_get"](_0x31b051, _0xfee1bb, _0xf16a7b) {
      const _0x4b2370 = _0xfee1bb.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x52adb9 = _0x31b051;
      for (const _0x84fa80 of _0x4b2370) if (_0x52adb9 = Object(_0x52adb9)[_0x84fa80], undefined === _0x52adb9) return _0xf16a7b;
      return _0x52adb9;
    }
    ["lodash_set"](_0x12b6fb, _0x13cebd, _0x28ef9d) {
      return Object(_0x12b6fb) !== _0x12b6fb ? _0x12b6fb : (Array.isArray(_0x13cebd) || (_0x13cebd = _0x13cebd.toString().match(/[^.[\]]+/g) || []), _0x13cebd.slice(0, -1).reduce((_0x2573a9, _0x2f5e53, _0xcd4206) => Object(_0x2573a9[_0x2f5e53]) === _0x2573a9[_0x2f5e53] ? _0x2573a9[_0x2f5e53] : _0x2573a9[_0x2f5e53] = Math.abs(_0x13cebd[_0xcd4206 + 1]) >> 0 == +_0x13cebd[_0xcd4206 + 1] ? [] : {}, _0x12b6fb)[_0x13cebd[_0x13cebd.length - 1]] = _0x28ef9d, _0x12b6fb);
    }
    ["getdata"](_0x33f7ad) {
      let _0x590f0d = this.getval(_0x33f7ad);
      if (/^@/.test(_0x33f7ad)) {
        const [, _0x470121, _0x4bfe15] = /^@(.*?)\.(.*?)$/.exec(_0x33f7ad),
          _0x5c7840 = _0x470121 ? this.getval(_0x470121) : "";
        if (_0x5c7840) try {
          const _0x51e3db = JSON.parse(_0x5c7840);
          _0x590f0d = _0x51e3db ? this.lodash_get(_0x51e3db, _0x4bfe15, "") : _0x590f0d;
        } catch (_0x10eb74) {
          _0x590f0d = "";
        }
      }
      return _0x590f0d;
    }
    ["setdata"](_0xa56016, _0xe98e2b) {
      let _0x382820 = false;
      if (/^@/.test(_0xe98e2b)) {
        const [, _0x388dc6, _0x74c0d1] = /^@(.*?)\.(.*?)$/.exec(_0xe98e2b),
          _0x26fbbe = this.getval(_0x388dc6),
          _0x1bee65 = _0x388dc6 ? "null" === _0x26fbbe ? null : _0x26fbbe || "{}" : "{}";
        try {
          const _0x34aab9 = JSON.parse(_0x1bee65);
          this.lodash_set(_0x34aab9, _0x74c0d1, _0xa56016);
          _0x382820 = this.setval(JSON.stringify(_0x34aab9), _0x388dc6);
        } catch (_0x1514ec) {
          const _0x3303fd = {};
          this.lodash_set(_0x3303fd, _0x74c0d1, _0xa56016);
          _0x382820 = this.setval(JSON.stringify(_0x3303fd), _0x388dc6);
        }
      } else _0x382820 = this.setval(_0xa56016, _0xe98e2b);
      return _0x382820;
    }
    ["getval"](_0x57b484) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x57b484);
        case "Quantumult X":
          return $prefs.valueForKey(_0x57b484);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x57b484];
        default:
          return this.data && this.data[_0x57b484] || null;
      }
    }
    ["setval"](_0x157254, _0x13ecea) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x157254, _0x13ecea);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x157254, _0x13ecea);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x13ecea] = _0x157254;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x13ecea] || null;
      }
    }
    ["initGotEnv"](_0x2e1706) {
      this.got = this.got ? this.got : require("got");
      tokentough = tokentough ? tokentough : require("tough-cookie");
      tokenjar = tokenjar ? tokenjar : new tokentough.CookieJar();
      _0x2e1706 && (_0x2e1706.headers = _0x2e1706.headers ? _0x2e1706.headers : {}, undefined === _0x2e1706.headers.Cookie && undefined === _0x2e1706.cookieJar && (_0x2e1706.cookieJar = tokenjar));
    }
    ["get"](_0x389550, _0x102ce7 = () => {}) {
      switch (_0x389550.headers && (delete _0x389550.headers["Content-Type"], delete _0x389550.headers["Content-Length"], delete _0x389550.headers["content-type"], delete _0x389550.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x389550.headers = _0x389550.headers || {}, Object.assign(_0x389550.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x389550, (_0xe6e702, _0xa2f92c, _0x4cc158) => {
            !_0xe6e702 && _0xa2f92c && (_0xa2f92c.body = _0x4cc158, _0xa2f92c.statusCode = _0xa2f92c.status ? _0xa2f92c.status : _0xa2f92c.statusCode, _0xa2f92c.status = _0xa2f92c.statusCode);
            _0x102ce7(_0xe6e702, _0xa2f92c, _0x4cc158);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x389550.opts = _0x389550.opts || {}, Object.assign(_0x389550.opts, {
            "hints": false
          }));
          $task.fetch(_0x389550).then(_0x4f8f7c => {
            const {
              statusCode: _0x1e07a7,
              statusCode: _0x511c75,
              headers: _0x36f04b,
              body: _0x26a53e,
              bodyBytes: _0x51ba4a
            } = _0x4f8f7c;
            _0x102ce7(null, {
              "status": _0x1e07a7,
              "statusCode": _0x511c75,
              "headers": _0x36f04b,
              "body": _0x26a53e,
              "bodyBytes": _0x51ba4a
            }, _0x26a53e, _0x51ba4a);
          }, _0x4c7819 => _0x102ce7(_0x4c7819 && _0x4c7819.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x51f6d9 = require("iconv-lite");
          this.initGotEnv(_0x389550);
          this.got(_0x389550).on("redirect", (_0x50735f, _0x44ac62) => {
            try {
              if (_0x50735f.headers["set-cookie"]) {
                const _0x2e1063 = _0x50735f.headers["set-cookie"].map(tokentough.Cookie.parse).toString();
                _0x2e1063 && tokenjar.setCookieSync(_0x2e1063, null);
                _0x44ac62.cookieJar = tokenjar;
              }
            } catch (_0x58bfa5) {
              this.logErr(_0x58bfa5);
            }
          }).then(_0x49256a => {
            const {
                statusCode: _0x3a59ad,
                statusCode: _0x14c814,
                headers: _0x51f36e,
                rawBody: _0x3a0f8e
              } = _0x49256a,
              _0x2e4497 = _0x51f6d9.decode(_0x3a0f8e, this.encoding);
            _0x102ce7(null, {
              "status": _0x3a59ad,
              "statusCode": _0x14c814,
              "headers": _0x51f36e,
              "rawBody": _0x3a0f8e,
              "body": _0x2e4497
            }, _0x2e4497);
          }, _0x13ba51 => {
            const {
              message: _0x54fd4d,
              response: _0x507fe4
            } = _0x13ba51;
            _0x102ce7(_0x54fd4d, _0x507fe4, _0x507fe4 && _0x51f6d9.decode(_0x507fe4.rawBody, this.encoding));
          });
      }
    }
    ["post"](_0x21879b, _0x203c65 = () => {}) {
      const _0x5ac777 = _0x21879b.method ? _0x21879b.method.toLocaleLowerCase() : "post";
      switch (_0x21879b.body && _0x21879b.headers && !_0x21879b.headers["Content-Type"] && !_0x21879b.headers["content-type"] && (_0x21879b.headers["content-type"] = "application/x-www-form-urlencoded"), _0x21879b.headers && (delete _0x21879b.headers["Content-Length"], delete _0x21879b.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x21879b.headers = _0x21879b.headers || {}, Object.assign(_0x21879b.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x5ac777](_0x21879b, (_0x27ad33, _0x53d5b9, _0x2db6a7) => {
            !_0x27ad33 && _0x53d5b9 && (_0x53d5b9.body = _0x2db6a7, _0x53d5b9.statusCode = _0x53d5b9.status ? _0x53d5b9.status : _0x53d5b9.statusCode, _0x53d5b9.status = _0x53d5b9.statusCode);
            _0x203c65(_0x27ad33, _0x53d5b9, _0x2db6a7);
          });
          break;
        case "Quantumult X":
          _0x21879b.method = _0x5ac777;
          this.isNeedRewrite && (_0x21879b.opts = _0x21879b.opts || {}, Object.assign(_0x21879b.opts, {
            "hints": false
          }));
          $task.fetch(_0x21879b).then(_0x2d150e => {
            const {
              statusCode: _0x469c70,
              statusCode: _0x29d754,
              headers: _0x1d87e7,
              body: _0x21f69d,
              bodyBytes: _0x4d32dc
            } = _0x2d150e;
            _0x203c65(null, {
              "status": _0x469c70,
              "statusCode": _0x29d754,
              "headers": _0x1d87e7,
              "body": _0x21f69d,
              "bodyBytes": _0x4d32dc
            }, _0x21f69d, _0x4d32dc);
          }, _0x35e4a7 => _0x203c65(_0x35e4a7 && _0x35e4a7.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x4b0483 = require("iconv-lite");
          this.initGotEnv(_0x21879b);
          const {
            url: _0x373e73,
            ..._0x5b933f
          } = _0x21879b;
          this.got[_0x5ac777](_0x373e73, _0x5b933f).then(_0x215767 => {
            const {
                statusCode: _0x3d566b,
                statusCode: _0x5917b8,
                headers: _0x494dc6,
                rawBody: _0x12d69b
              } = _0x215767,
              _0x4dbea9 = _0x4b0483.decode(_0x12d69b, this.encoding);
            _0x203c65(null, {
              "status": _0x3d566b,
              "statusCode": _0x5917b8,
              "headers": _0x494dc6,
              "rawBody": _0x12d69b,
              "body": _0x4dbea9
            }, _0x4dbea9);
          }, _0x1ed28a => {
            const {
              message: _0x1e646a,
              response: _0x441584
            } = _0x1ed28a;
            _0x203c65(_0x1e646a, _0x441584, _0x441584 && _0x4b0483.decode(_0x441584.rawBody, this.encoding));
          });
      }
    }
    ["time"](_0x1ae050, _0xe83055 = null) {
      const _0x37d467 = _0xe83055 ? new Date(_0xe83055) : new Date();
      let _0x144ddc = {
        "M+": _0x37d467.getMonth() + 1,
        "d+": _0x37d467.getDate(),
        "H+": _0x37d467.getHours(),
        "m+": _0x37d467.getMinutes(),
        "s+": _0x37d467.getSeconds(),
        "q+": Math.floor((_0x37d467.getMonth() + 3) / 3),
        "S": _0x37d467.getMilliseconds()
      };
      /(y+)/.test(_0x1ae050) && (_0x1ae050 = _0x1ae050.replace(RegExp.$1, (_0x37d467.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5f2e40 in _0x144ddc) new RegExp("(" + _0x5f2e40 + ")").test(_0x1ae050) && (_0x1ae050 = _0x1ae050.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x144ddc[_0x5f2e40] : ("00" + _0x144ddc[_0x5f2e40]).substr(("" + _0x144ddc[_0x5f2e40]).length)));
      return _0x1ae050;
    }
    ["queryStr"](_0x596a9c) {
      let _0x218afc = "";
      for (const _0x1f00d1 in _0x596a9c) {
        let _0x28aac5 = _0x596a9c[_0x1f00d1];
        null != _0x28aac5 && "" !== _0x28aac5 && ("object" == typeof _0x28aac5 && (_0x28aac5 = JSON.stringify(_0x28aac5)), _0x218afc += _0x1f00d1 + "=" + _0x28aac5 + "&");
      }
      _0x218afc = _0x218afc.substring(0, _0x218afc.length - 1);
      return _0x218afc;
    }
    ["msg"](_0x234b99 = _0x15f0a3, _0x496def = "", _0x122643 = "", _0x50e8ca) {
      const _0x5d5463 = _0x180800 => {
        switch (typeof _0x180800) {
          case undefined:
            return _0x180800;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x180800
                };
              case "Loon":
              case "Shadowrocket":
                return _0x180800;
              case "Quantumult X":
                return {
                  "open-url": _0x180800
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x502a27 = _0x180800.url || _0x180800.openUrl || _0x180800["open-url"];
                  return {
                    "url": _0x502a27
                  };
                }
              case "Loon":
                {
                  let _0x293b57 = _0x180800.openUrl || _0x180800.url || _0x180800["open-url"],
                    _0x4014de = _0x180800.mediaUrl || _0x180800["media-url"];
                  return {
                    "openUrl": _0x293b57,
                    "mediaUrl": _0x4014de
                  };
                }
              case "Quantumult X":
                {
                  let _0x4c97a5 = _0x180800["open-url"] || _0x180800.url || _0x180800.openUrl,
                    _0x39c1e5 = _0x180800["media-url"] || _0x180800.mediaUrl,
                    _0x1445f2 = _0x180800["update-pasteboard"] || _0x180800.updatePasteboard;
                  return {
                    "open-url": _0x4c97a5,
                    "media-url": _0x39c1e5,
                    "update-pasteboard": _0x1445f2
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x234b99, _0x496def, _0x122643, _0x5d5463(_0x50e8ca));
          break;
        case "Quantumult X":
          $notify(_0x234b99, _0x496def, _0x122643, _0x5d5463(_0x50e8ca));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let _0x5085c3 = ["", "==============📣系统通知📣=============="];
        _0x5085c3.push(_0x234b99);
        _0x496def && _0x5085c3.push(_0x496def);
        _0x122643 && _0x5085c3.push(_0x122643);
        console.log(_0x5085c3.join("\n"));
        this.logs = this.logs.concat(_0x5085c3);
      }
    }
    ["log"](..._0x4969e) {
      _0x4969e.length > 0 && (this.logs = [...this.logs, ..._0x4969e]);
      console.log(_0x4969e.join(this.logSeparator));
    }
    ["logErr"](_0x2cd404, _0x27439f) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ",错误!", _0x2cd404);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ",错误!", _0x2cd404.stack);
      }
    }
    ["wait"](_0x1136b3) {
      return new Promise(_0x3f3e8d => setTimeout(_0x3f3e8d, _0x1136b3));
    }
    ["DoubleLog"](_0x3ae786) {
      _0x1ae9cc.isNode() ? _0x3ae786 && (console.log("" + _0x3ae786), _0x280a53 += "\n " + _0x3ae786) : (console.log("" + _0x3ae786), _0x280a53 += "\n " + _0x3ae786);
    }
    async ["SendMsg"](_0x24463d) {
      if (!_0x24463d) return;
      if (_0x1ce05e > 0) {
        if (_0x1ae9cc.isNode()) {
          var _0xa9608c = require("./sendNotify");
          await _0xa9608c.sendNotify(_0x1ae9cc.name, _0x24463d);
        } else _0x1ae9cc.msg(_0x1ae9cc.name, "", _0x24463d), console.log(_0x1ae9cc.name, "", _0x24463d);
      } else console.log(_0x24463d);
    }
    ["done"](_0x2c31f8 = {}) {
      const _0x1227e3 = new Date().getTime(),
        _0x460ba9 = (_0x1227e3 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ",结束!🕛 " + _0x460ba9 + "秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x2c31f8);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x15f0a3, _0x2811be);
}
function _0xa19141(_0x122bd2) {
  function _0x4cc829(_0x59eb5e) {
    if (typeof _0x59eb5e === "string") return function (_0x295f2d) {}.constructor("while (true) {}").apply("counter");else ("" + _0x59eb5e / _0x59eb5e).length !== 1 || _0x59eb5e % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x4cc829(++_0x59eb5e);
  }
  try {
    if (_0x122bd2) return _0x4cc829;else _0x4cc829(0);
  } catch (_0x2562f7) {}
}