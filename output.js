//Wed Nov 05 2025 07:26:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const CryptoJS = require("crypto-js"),
  WebSocket = require("ws"),
  axios = require("axios"),
  https = require("https"),
  path = require("path");
let sendNotify;
const qlDir = process.env.QL_DIR || "/ql",
  sendNotifyPaths = ["sendNotify", path.join(qlDir, "deps", "sendNotify.js"), path.join(qlDir, "scripts", "sendNotify.js"), "./sendNotify.js"];
for (const p of sendNotifyPaths) {
  try {
    const loadedModule = require(p);
    if (loadedModule && typeof loadedModule.sendNotify === "function") {
      sendNotify = loadedModule;
      console.log("[ℹ️] sendNotify.js 从 '" + p + "' 加载成功!");
      break;
    } else {
      if (loadedModule && typeof loadedModule === "function") {
        sendNotify = {
          "sendNotify": loadedModule
        };
        console.log("[ℹ️] sendNotify.js (直接导出函数) 从 '" + p + "' 加载成功!");
        break;
      } else sendNotify = null;
    }
  } catch (_0x280905) {}
}
(!sendNotify || typeof sendNotify.sendNotify !== "function") && (console.log("[⚠️] 警告: sendNotify.js 未能成功加载或其导出不正确。将使用控制台打印作为备用通知。"), sendNotify = {
  "sendNotify": function (_0x37629a, _0xd9126b) {
    console.log("\n--- (备用通知) ---");
    console.log("标题: " + _0x37629a);
    console.log("内容:\n" + _0xd9126b);
    console.log("--- (备用通知结束) ---\n");
  }
});
const CONFIG = {
    "wsUrl": "ws://219.151.188.13:9126/websocket",
    "httpUrl": "http://api.shangmeng.top/api",
    "getDeviceUrl": "http://api.shangmeng.top/api/MemeberRegistered/GetNewDeviceInfo",
    "loginUrl": "http://api.shangmeng.top/api/MemeberLogIn/XzwAccountPasswordLogIn",
    "announcementUrl": "http://121.41.79.81:40273/api/announcement",
    "keyValidationUrl": "http://121.41.79.81:40273/api/validate-key",
    "maxRetries": 3,
    "retryDelay": 1000,
    "verificationDelay": 1500,
    "checkInterval": 60000,
    "debug": false,
    "asyncProcessDelay": 1000,
    "orderDeduplicationTimeout": 30000,
    "enhancedDebugMode": false,
    "remindEnabled": true,
    "remindInterval": 30,
    "account": null,
    "pwd": null,
    "uid": null,
    "whitelist": [],
    "authKey": null,
    "wskey": null,
    "httpkey": null,
    "memberId": null,
    "devicenumber": null,
    "nickname": null,
    "userAgent": process.env.XZUA || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
  },
  notifiedOrderIds = new Set();
let wsClientInstance = null;
const log = {
    "_log": (_0x92ce04, ..._0x4b913c) => console.log("[" + new Date().toLocaleTimeString("zh-CN", {
      "hour12": false
    }) + "] " + _0x92ce04, ..._0x4b913c),
    "info": (..._0x34b455) => log._log("ℹ️", ..._0x34b455),
    "success": (..._0x214d5e) => log._log("✅", ..._0x214d5e),
    "error": (..._0x1c51db) => log._log("❌", ..._0x1c51db),
    "warn": (..._0x203f0d) => log._log("⚠️", ..._0x203f0d),
    "debug": (..._0x38ee85) => {
      CONFIG.debug && log._log("⚙️ DEBUG:", ..._0x38ee85);
    }
  },
  encrypt = {
    "_encryptWithKey": (_0x53df6c, _0xa7b16c = "ws") => {
      const _0x1c4ef0 = _0xa7b16c === "http" ? CONFIG.httpkey : CONFIG.wskey;
      if (!_0x1c4ef0) {
        log.error("加密错误: " + _0xa7b16c + " key 未在 CONFIG 中定义!");
        return null;
      }
      const _0x490cd1 = CryptoJS.enc.Utf8.parse(_0x1c4ef0),
        _0x40ecbf = CryptoJS.enc.Utf8.parse(_0x53df6c);
      try {
        return CryptoJS.TripleDES.encrypt(_0x40ecbf, _0x490cd1, {
          "mode": CryptoJS.mode.ECB,
          "padding": CryptoJS.pad.Pkcs7
        }).ciphertext.toString(CryptoJS.enc.Hex);
      } catch (_0x1e463e) {
        log.error("使用 " + _0xa7b16c + " key 加密失败:", _0x1e463e.message);
        return null;
      }
    },
    "_decryptTryBothKeys": _0x5a2e48 => {
      const _0x2c3407 = [CONFIG.wskey, CONFIG.httpkey];
      for (const _0x3edac0 of _0x2c3407) {
        if (!_0x3edac0) continue;
        try {
          {
            const _0x255bc0 = CryptoJS.enc.Utf8.parse(_0x3edac0),
              _0x2260d2 = CryptoJS.enc.Hex.parse(_0x5a2e48.replace(/^"|"$/g, "")),
              _0x553393 = CryptoJS.TripleDES.decrypt({
                "ciphertext": _0x2260d2
              }, _0x255bc0, {
                "mode": CryptoJS.mode.ECB,
                "padding": CryptoJS.pad.Pkcs7
              }),
              _0x4b6f34 = _0x553393.toString(CryptoJS.enc.Utf8);
            if (_0x4b6f34) return _0x4b6f34;
          }
        } catch (_0x1b8d15) {}
      }
      log.error("通用解密失败: 尝试了 wskey 和 httpkey 均无法解密。");
      return "";
    },
    "ws": _0x3e590c => encrypt._encryptWithKey(_0x3e590c, "ws"),
    "http": _0x2b2fe1 => encrypt._encryptWithKey(_0x2b2fe1, "http"),
    "decrypt": _0x2668d2 => encrypt._decryptTryBothKeys(_0x2668d2)
  };
async function fetchAnnouncement() {
  try {
    {
      const _0x4e88e7 = await axios.get(CONFIG.announcementUrl, {
        "timeout": 5000,
        "httpsAgent": new https.Agent({
          "rejectUnauthorized": false
        })
      });
      _0x4e88e7.data?.["success"] && _0x4e88e7.data.content ? (log.info("公告: " + _0x4e88e7.data.content.replace(/\n/g, "\n[公告内容] ")), log.info("===============================")) : log.warn("未能获取到有效公告内容");
    }
  } catch (_0x1b398e) {
    log.error("公告获取失败:", _0x1b398e.message);
  }
}
async function validateLicenseKey() {
  if (!CONFIG.authKey || !CONFIG.memberId || !CONFIG.devicenumber) return log.error("无法进行授权验证：缺少 authKey, memberId 或 devicenumber"), false;
  try {
    {
      const _0x20a39f = {
          "key": CONFIG.authKey,
          "memberId": CONFIG.memberId,
          "device": CONFIG.devicenumber
        },
        _0x4141ae = await axios.post(CONFIG.keyValidationUrl, _0x20a39f, {
          "timeout": 5000,
          "httpsAgent": new https.Agent({
            "rejectUnauthorized": false
          }),
          "headers": {
            "User-Agent": CONFIG.userAgent
          }
        });
      if (_0x4141ae.data?.["success"]) {
        const _0x194a31 = _0x4141ae.data.data?.["remainingDays"];
        log.success("服务端验证通过 | " + (_0x194a31 !== undefined ? "剩余天数: " + _0x194a31 : "有效期信息未提供"));
        return true;
      } else return log.error("授权验证失败: " + (_0x4141ae.data?.["error"] || "未知错误")), false;
    }
  } catch (_0x345803) {
    _0x345803.response?.["status"] === 403 ? log.error("验证失败：授权密钥无效、不匹配或已过期。") : log.error("授权验证请求失败:", _0x345803.message);
    return false;
  }
}
function checkEnvironmentVariables() {
  const _0x35a511 = ["XZCK", "XZQDBMD", "XZMY", "XZKEY"],
    _0x596aa9 = _0x35a511.filter(_0x217289 => !process.env[_0x217289]);
  if (_0x596aa9.length > 0) {
    log.error("❌ 启动失败：缺少必要的环境变量:", _0x596aa9.join(", "));
    log.info("🤷 请按照以下格式设置环境变量：");
    console.log("\n  👉 XZCK: 账号#密码#UID (例如: export XZCK=\"你的账号#你的密码#UID_xxxx\")\n  👉 XZQDBMD: 商品分类名称,用逗号隔开 (例如: export XZQDBMD=\"腾讯视频,爱奇艺\")\n  👉 XZMY: 授权密钥 (例如: export XZMY=\"你的授权密钥\")\n  👉 XZKEY: wskey#httpkey (例如: export XZKEY=\"ws密钥#http密钥\")\n  👉 XZUA: (可选) 自定义User-Agent (例如: export XZUA=\"MyCustomUA/1.0\")\n  👉 XZDEVICEID: (可选) 设备ID (例如: export XZDEVICEID=\"设备IDxxxx\")\n  👉 XZREMIND: (可选) 定时提醒开关#间隔分钟 (例如: export XZREMIND=\"true#60\")\n        ");
    process.exit(1);
  }
}
function parseEnvironmentVariables() {
  try {
    const [_0x363333, _0x2f4199, _0x5271cf] = process.env.XZCK.split("#");
    CONFIG.account = _0x363333?.["trim"]();
    CONFIG.pwd = _0x2f4199?.["trim"]();
    CONFIG.uid = _0x5271cf?.["trim"]();
    if (!CONFIG.account || !CONFIG.pwd || !CONFIG.uid) throw new Error("XZCK 格式不正确，必须是 账号#密码#UID");
    CONFIG.whitelist = process.env.XZQDBMD.split(",").map(_0xfb0037 => _0xfb0037.trim()).filter(Boolean);
    log.info("🎯 抢单白名单");
    console.log("" + (CONFIG.whitelist.length > 0 ? CONFIG.whitelist.map(_0x9d3ec2 => "├─ " + _0x9d3ec2).join("\n") : "└─ 未设置白名单，将尝试抢所有品类"));
    CONFIG.authKey = process.env.XZMY?.["trim"]();
    if (!CONFIG.authKey) throw new Error("XZMY 环境变量 (授权密钥) 未设置或为空");
    const [_0x599e64, _0x7ef7a6] = process.env.XZKEY.split("#");
    CONFIG.wskey = _0x599e64?.["trim"]();
    CONFIG.httpkey = _0x7ef7a6?.["trim"]();
    if (!CONFIG.wskey || !CONFIG.httpkey) throw new Error("XZKEY 格式不正确，必须是 wskey#httpkey");
    if (process.env.XZREMIND) {
      const _0x459add = process.env.XZREMIND.split("#");
      CONFIG.remindEnabled = _0x459add[0]?.["trim"]()["toLowerCase"]() === "true";
      if (_0x459add.length > 1 && _0x459add[1]) {
        {
          const _0x55c9de = parseInt(_0x459add[1].trim(), 10);
          !isNaN(_0x55c9de) && _0x55c9de > 0 && (CONFIG.remindInterval = _0x55c9de);
        }
      }
    }
  } catch (_0x415617) {
    log.error("❌ 环境变量处理失败: " + _0x415617.message);
    process.exit(1);
  }
}
async function getDeviceNumber() {
  if (process.env.XZDEVICEID) {
    {
      const _0x368ab8 = process.env.XZDEVICEID.trim();
      log.info("使用环境变量中的设备ID: " + _0x368ab8);
      return _0x368ab8;
    }
  }
  try {
    {
      const _0x4bb871 = {
          "devicetype": "H5",
          "info": CONFIG.userAgent.toLowerCase(),
          "host": "http://www.xuzuan.cn"
        },
        _0x425ef1 = encrypt.ws(JSON.stringify(_0x4bb871));
      if (!_0x425ef1) throw new Error("加密设备号请求失败");
      const _0x3e9e42 = await axios.post(CONFIG.getDeviceUrl, _0x425ef1, {
          "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "text/plain",
            "Origin": "http://www.xuzuan.cn",
            "Referer": "http://www.xuzuan.cn/",
            "User-Agent": CONFIG.userAgent
          },
          "timeout": 10000,
          "httpsAgent": new https.Agent({
            "rejectUnauthorized": false
          })
        }),
        _0x2d32be = encrypt.decrypt(_0x3e9e42.data);
      if (!_0x2d32be) throw new Error("获取设备号响应解密失败或为空");
      const _0x2ce5b4 = JSON.parse(_0x2d32be);
      if (_0x2ce5b4.code === 200 && _0x2ce5b4.data?.["devicenumber"]) return _0x2ce5b4.data.devicenumber;else {
        throw new Error("获取设备号失败: " + (_0x2ce5b4.msg || "未知错误"));
      }
    }
  } catch (_0x59aeb2) {
    log.error("获取设备号时出错: " + _0x59aeb2.message);
    throw _0x59aeb2;
  }
}
async function login() {
  let _0xacafa9 = CONFIG.maxRetries;
  while (_0xacafa9 > 0) {
    try {
      log.info("尝试登录...");
      const _0xb00c3e = await getDeviceNumber();
      if (!_0xb00c3e) throw new Error("无法获取设备号，登录中止");
      const _0xc84671 = {
          "account": CONFIG.account,
          "pwd": CONFIG.pwd,
          "domain": "http://www.xuzuan.cn/#/login"
        },
        _0x5c884b = encrypt.ws(JSON.stringify(_0xc84671));
      if (!_0x5c884b) throw new Error("加密登录请求失败");
      const _0xfdc0df = await axios.post(CONFIG.loginUrl, _0x5c884b, {
          "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "text/plain",
            "Origin": "http://www.xuzuan.cn",
            "Referer": "http://www.xuzuan.cn/",
            "User-Agent": CONFIG.userAgent,
            "devicenumber": _0xb00c3e,
            "devicetype": "H5"
          },
          "timeout": 10000,
          "httpsAgent": new https.Agent({
            "rejectUnauthorized": false
          })
        }),
        _0x5f55e5 = encrypt.decrypt(_0xfdc0df.data);
      if (!_0x5f55e5) throw new Error("登录响应解密失败或为空");
      const _0x5417a8 = JSON.parse(_0x5f55e5);
      if (_0x5417a8.code === 200 && _0x5417a8.data) {
        {
          CONFIG.memberId = _0x5417a8.data.Id;
          CONFIG.nickname = _0x5417a8.data.nickname;
          CONFIG.devicenumber = _0x5417a8.data.devicenumber;
          log.success("登录成功");
          console.log("🎉 登录成功 🎉\n   📅 用户信息\n   👤 用户ID: " + CONFIG.memberId + "\n   📛 昵  称: " + CONFIG.nickname + "\n   📱 设备ID: " + CONFIG.devicenumber);
          return;
        }
      } else throw new Error("登录失败: " + (_0x5417a8.msg || "未知错误"));
    } catch (_0x47a32c) {
      {
        _0xacafa9--;
        log.error("登录流程尝试失败 (" + (CONFIG.maxRetries - _0xacafa9) + "/" + CONFIG.maxRetries + "): " + _0x47a32c.message);
        if (_0xacafa9 > 0) log.warn("将在 " + CONFIG.retryDelay / 1000 + " 秒后重试..."), await new Promise(_0x175455 => setTimeout(_0x175455, CONFIG.retryDelay));else {
          {
            log.error("登录失败次数过多，停止尝试。");
            throw _0x47a32c;
          }
        }
      }
    }
  }
}
class NetworkService {
  static ["createClient"](_0x4aaa63) {
    const _0x5aaf27 = _0x4aaa63?.["device"] || CONFIG.devicenumber;
    if (!_0x5aaf27) return log.error("无法创建请求客户端：缺少设备号 (devicenumber)"), null;
    return axios.create({
      "baseURL": CONFIG.httpUrl,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "devicenumber": _0x5aaf27,
        "devicetype": "H5",
        "Origin": "http://www.xuzuan.cn",
        "Referer": "http://www.xuzuan.cn/",
        "User-Agent": CONFIG.userAgent
      },
      "httpsAgent": new https.Agent({
        "rejectUnauthorized": false
      }),
      "timeout": 8000
    });
  }
  static async ["grabOrder"](_0x572eb5, _0x55dab0) {
    const _0x56172d = this.createClient(_0x572eb5);
    if (!_0x56172d) return {
      "code": -1,
      "msg": "无法创建请求客户端"
    };
    const _0x4c8527 = {
        "id": _0x55dab0,
        "memberId": _0x572eb5.memberId,
        "domainName": "http://xuzuan.cn/#/receiveOrder"
      },
      _0x48ef7b = encrypt.http(JSON.stringify(_0x4c8527));
    if (!_0x48ef7b) return {
      "code": -1,
      "msg": "加密抢单请求失败"
    };
    try {
      const _0x4f99bd = await _0x56172d.post("/MarketOrder/ReceivingOrder", _0x48ef7b, {
          "headers": {
            "Content-Type": "text/plain"
          }
        }),
        _0xe273d4 = encrypt.decrypt(_0x4f99bd.data);
      if (!_0xe273d4) return {
        "code": -1,
        "msg": "抢单响应解密失败"
      };
      try {
        return JSON.parse(_0xe273d4);
      } catch (_0x56d2ec) {
        log.error("解析抢单响应失败 (ID: " + _0x55dab0 + "):", _0x56d2ec.message);
        return {
          "code": -1,
          "msg": "解析抢单响应失败: " + _0xe273d4
        };
      }
    } catch (_0x540886) {
      _0x540886.response && _0x540886.response.status === 508 ? log.warn("抢单请求过于频繁 (订单ID: " + _0x55dab0 + ")") : log.error("抢单请求失败 (订单ID: " + _0x55dab0 + "):", _0x540886.message);
      let _0x1f6b78 = "抢单请求异常: " + _0x540886.message;
      if (_0x540886.response?.["data"]) {
        const _0x36879f = encrypt.decrypt(_0x540886.response.data);
        if (_0x36879f) try {
          _0x1f6b78 = JSON.parse(_0x36879f).msg || _0x36879f;
        } catch {
          _0x1f6b78 = _0x36879f;
        }
      }
      return {
        "code": _0x540886.response?.["status"] || -1,
        "msg": _0x1f6b78
      };
    }
  }
  static async ["fetchMyOrders"](_0x1e474d, _0x355da0 = 1, _0x462213 = 20, _0xf1d2d0 = 3) {
    const _0xa6c8dd = this.createClient(_0x1e474d);
    if (!_0xa6c8dd) return null;
    const _0x149ae4 = "20190301".padEnd(24, "0"),
      _0x595dee = CryptoJS.enc.Utf8.parse(_0x149ae4),
      _0x5b0d49 = _0x566954 => {
        try {
          return CryptoJS.TripleDES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(_0x566954)), _0x595dee, {
            "mode": CryptoJS.mode.ECB,
            "padding": CryptoJS.pad.Pkcs7
          }).ciphertext.toString(CryptoJS.enc.Hex);
        } catch (_0x41c0cf) {
          log.error("使用特定密钥加密 MyOrderList 请求失败:", _0x41c0cf.message);
          return null;
        }
      },
      _0x34761d = _0xb59f6 => {
        try {
          {
            const _0x93caa2 = _0xb59f6.replace(/^"|"$/g, ""),
              _0x585c64 = CryptoJS.TripleDES.decrypt({
                "ciphertext": CryptoJS.enc.Hex.parse(_0x93caa2)
              }, _0x595dee, {
                "mode": CryptoJS.mode.ECB,
                "padding": CryptoJS.pad.Pkcs7
              });
            return _0x585c64.toString(CryptoJS.enc.Utf8);
          }
        } catch (_0x454afa) {
          log.error("使用特定密钥 (" + _0x149ae4 + ") 解密 MyOrderList 响应失败:", _0x454afa.message);
          return "";
        }
      },
      _0x4cc373 = new Date(),
      _0x1e134d = new Date(_0x4cc373);
    _0x1e134d.setDate(_0x4cc373.getDate() + 1);
    const _0x58341c = _0x447390 => _0x447390.toISOString().split("T")[0],
      _0x573bcf = {
        "status": _0xf1d2d0,
        "content": "",
        "times": _0x58341c(_0x4cc373),
        "timee": _0x58341c(_0x1e134d),
        "page": _0x355da0,
        "size": _0x462213,
        "memberId": _0x1e474d.memberId,
        "formatId": 0,
        "marketUserName": ""
      },
      _0x6730d4 = _0x5b0d49(_0x573bcf);
    if (!_0x6730d4) return log.error("加密 MyOrderList 请求失败"), null;
    try {
      {
        const _0x1104d8 = await _0xa6c8dd.post("/MarketOrder/MyOrderList", _0x6730d4, {
            "headers": {
              "Content-Type": "text/plain"
            }
          }),
          _0x485795 = _0x34761d(_0x1104d8.data);
        if (!_0x485795) return null;
        let _0x153a97;
        try {
          _0x153a97 = JSON.parse(_0x485795);
        } catch (_0x4c0bc7) {
          log.error("解析 MyOrderList 解密数据失败 (状态" + _0xf1d2d0 + "):", _0x4c0bc7.message);
          return null;
        }
        if (_0x153a97.code === 200 && _0x153a97.data) {
          return _0x153a97.data;
        } else {
          if (_0x153a97.code === 508) return log.warn("查询订单列表(状态" + _0xf1d2d0 + ")请求过于频繁: " + _0x153a97.msg), [];else {
            log.warn("查询订单列表(状态" + _0xf1d2d0 + ") API返回非200: Code=" + _0x153a97.code + ", Msg=" + (_0x153a97.msg || "无"));
            return [];
          }
        }
      }
    } catch (_0x473639) {
      _0x473639.response && _0x473639.response.status === 508 ? log.warn("查询订单列表(状态" + _0xf1d2d0 + ")请求过于频繁") : log.error("查询订单列表(状态" + _0xf1d2d0 + ")请求失败:", _0x473639.message);
      return null;
    }
  }
}
class OrderHandler {
  static ["processWsOrder"](_0x1fb086, _0x4b00fe) {
    const _0x33737d = CONFIG.whitelist.length === 0 || CONFIG.whitelist.includes(_0x1fb086.catalogName);
    return {
      "id": _0x1fb086.Id,
      "product": _0x1fb086.catalogName || "未知分类",
      "amount": _0x1fb086.curMoney,
      "status": _0x1fb086.orderStatus,
      "memberId": _0x4b00fe.memberId,
      "device": _0x4b00fe.device,
      "isAllowed": _0x33737d,
      "name": _0x1fb086.name || "",
      "formatName": _0x1fb086.formatName || "",
      "accounts": _0x1fb086.accounts || "",
      "templateText": _0x1fb086.templateText || "",
      "toString"(_0x3e9f23 = false) {
        return OrderHandler.formatOrderInfo(this, _0x3e9f23);
      }
    };
  }
  static ["formatOrderInfo"](_0x533c09, _0x38fdfc = false) {
    const _0x2f104d = new Date().toLocaleString("zh-CN", {
        "hour12": false
      }),
      _0x50c467 = _0x38fdfc ? "<br>" : "\n";
    let _0x39ecad = _0x533c09.accounts || "";
    if (!_0x39ecad && _0x533c09.templateText) try {
      const _0x24458d = JSON.parse(_0x533c09.templateText);
      Array.isArray(_0x24458d) ? _0x39ecad = _0x24458d.filter(_0x14bd40 => _0x14bd40.type === "input" && _0x14bd40.value).map(_0x25b192 => _0x25b192.value).join(", ") : _0x39ecad = String(_0x533c09.templateText).replace(/\n/g, " ").trim();
    } catch (_0x33c0da) {
      _0x39ecad = String(_0x533c09.templateText).replace(/\n/g, " ").trim();
    }
    _0x39ecad = _0x39ecad || "无";
    let _0x5085cb = ["📅 时间：" + _0x2f104d, "🎫 订单号：" + _0x533c09.id, "📦 商品：" + (_0x533c09.name || _0x533c09.specification || "未知商品") + " (" + (_0x533c09.formatName || "无规格") + ")", "🏷️ 分类：" + (_0x533c09.product || _0x533c09.catalogName || "未知分类"), "💰 价格：" + (_0x533c09.amount ?? _0x533c09.clinchPrice ?? "未知"), "👤 账号：" + _0x39ecad],
      _0x4dd694 = "状态 " + (_0x533c09.status ?? "未知");
    if (_0x533c09.status === 2) _0x4dd694 = "待接单 (来自WS)";else {
      if (_0x533c09.status === 3) _0x4dd694 = "待处理 (已接单)";
    }
    _0x5085cb.push("🔄 状态：" + _0x4dd694);
    const _0x54aa32 = "http://wap.xuzuan.cn/XzwIndex.aspx#/market/receiveOrder",
      _0xc90d88 = _0x38fdfc ? "<a href=\"" + _0x54aa32 + "\">点我处理订单</a>" : "点击链接直达：" + _0x54aa32;
    _0x5085cb.push("🔗 " + _0xc90d88);
    return _0x5085cb.join(_0x50c467).trim();
  }
}
const wxPush = {
  async "send"(_0x3b3c72, _0x1c68fe, _0x5f3fdf) {
    try {
      {
        const _0x36f239 = OrderHandler.formatOrderInfo(_0x5f3fdf, false);
        await sendNotify.sendNotify(_0x1c68fe, _0x36f239);
        log.success("青龙推送成功: \"" + _0x1c68fe + "\" (订单ID: " + _0x5f3fdf.id + ")");
      }
    } catch (_0xea2b76) {
      log.error("调用 sendNotify.sendNotify 推送失败 (订单ID: " + _0x5f3fdf.id + "):", _0xea2b76.message);
    }
  }
};
class WSClient {
  constructor(_0x3e8540) {
    this.account = _0x3e8540;
    this.ws = null;
    this.heartbeatInterval = null;
    this.reconnectTimeout = null;
    this.isGrabbing = false;
    this.recentGrabbedOrders = new Set();
    this.cleanupInterval = null;
    this.hasPendingOrder = false;
    this.lastMessageTime = Date.now();
    this.pendingOrderTimeout = null;
    this.orderCheckTimeout = null;
    this.connect();
    this.startOrderCleanup();
  }
  ["connect"]() {
    if (this.ws && this.ws.readyState !== WebSocket.CLOSED) return;
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
    try {
      {
        const _0x26c37b = {
          "rejectUnauthorized": false,
          "headers": {
            "User-Agent": CONFIG.userAgent
          }
        };
        this.ws = new WebSocket(CONFIG.wsUrl, _0x26c37b);
        this.initEventHandlers();
      }
    } catch (_0x2e09b2) {
      log.error("WebSocket 创建失败:", _0x2e09b2.message);
      this.scheduleReconnect();
    }
  }
  ["initEventHandlers"]() {
    this.ws.on("open", () => this.handleOpen());
    this.ws.on("message", _0x587b26 => this.handleMessage(_0x587b26));
    this.ws.on("close", (_0x559e72, _0x5a7751) => this.handleClose(_0x559e72, _0x5a7751));
    this.ws.on("error", _0x223154 => this.handleError(_0x223154));
    this.ws.on("pong", () => {
      log.debug("收到服务器 Pong 响应");
    });
  }
  ["handleOpen"]() {
    try {
      {
        this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = null);
        const _0x53c124 = {
            "Id": Date.now(),
            "Parameter": {
              "deviceNo": this.account.device,
              "memberId": this.account.memberId
            },
            "MethodName": "QueryOrder"
          },
          _0x1c3876 = encrypt.ws(JSON.stringify(_0x53c124));
        _0x1c3876 ? (this.ws.send(_0x1c3876), log.success("系统连接成功,已经在抢单咯(o゜▽゜)o☆")) : (log.error("加密WS认证指令失败，无法发送"), this.ws.close());
        this.startHeartbeat();
      }
    } catch (_0x2efc27) {
      log.error("WebSocket 打开事件处理失败:", _0x2efc27.message);
      this.ws.close();
    }
  }
  async ["handleMessage"](_0x1ceade) {
    this.lastMessageTime = Date.now();
    if (this.hasPendingOrder) {
      CONFIG.enhancedDebugMode && log.debug("检测到有待处理订单，暂停抢单");
      return;
    }
    if (this.isGrabbing) {
      if (CONFIG.enhancedDebugMode) {
        log.debug("正在处理抢单，忽略新的 WebSocket 消息");
      }
      return;
    }
    let _0xae3d8d;
    try {
      _0xae3d8d = encrypt.decrypt(_0x1ceade.toString());
      if (!_0xae3d8d) return;
      let _0x34c85f;
      try {
        _0x34c85f = JSON.parse(_0xae3d8d);
      } catch (_0xf55701) {
        return;
      }
      const _0x3c27aa = Array.isArray(_0x34c85f) ? _0x34c85f : [_0x34c85f];
      let _0x15ae04 = null;
      for (const _0xb9c940 of _0x3c27aa) {
        {
          if (!_0xb9c940 || typeof _0xb9c940 !== "object") continue;
          let _0x11c72f = [];
          if (_0xb9c940.MethodName === "order" && _0xb9c940.Parameter) _0x11c72f = [_0xb9c940.Parameter];else {
            if (_0xb9c940.code === 200 && Array.isArray(_0xb9c940.data)) _0x11c72f = _0xb9c940.data;else {
              if (_0xb9c940.pushType !== undefined && _0xb9c940.pushType !== 2 && _0xb9c940.Id && _0xb9c940.catalogName) _0x11c72f = [_0xb9c940];else {
                if (_0xb9c940.Id && _0xb9c940.catalogName && _0xb9c940.pushType === undefined && _0xb9c940.MethodName === undefined) _0x11c72f = [_0xb9c940];else continue;
              }
            }
          }
          for (const _0x5c129c of _0x11c72f) {
            {
              if (!_0x5c129c || typeof _0x5c129c !== "object" || !_0x5c129c.Id) continue;
              const _0x279dd6 = OrderHandler.processWsOrder(_0x5c129c, this.account);
              if (this.recentGrabbedOrders.has(_0x279dd6.id)) {
                CONFIG.enhancedDebugMode && log.debug("跳过重复订单: " + _0x279dd6.id + " (" + _0x279dd6.product + ")");
                continue;
              }
              if (_0x279dd6.isAllowed && _0x279dd6.status === 2) {
                if (!_0x15ae04) {
                  _0x15ae04 = _0x279dd6;
                  break;
                }
              }
            }
          }
          if (_0x15ae04) break;
        }
      }
      _0x15ae04 && (log.info("\n🎯 发现白名单订单 =================\n" + _0x15ae04.toString()), this.processOrderGrab(_0x15ae04).catch(_0x51d86b => {
        log.error("处理订单 " + _0x15ae04.id + " 抢单逻辑时发生未捕获错误:", _0x51d86b);
        this.isGrabbing = false;
        CONFIG.enhancedDebugMode && log.debug("异常处理：已重置抢单锁状态 (订单ID: " + _0x15ae04.id + ")");
      }));
    } catch (_0x4fe343) {
      log.error("WebSocket 消息处理中发生意外错误:", _0x4fe343.message);
      this.isGrabbing = false;
      CONFIG.enhancedDebugMode && log.debug("消息处理异常，已重置抢单锁状态");
    }
  }
  async ["processOrderGrab"](_0x49248f) {
    if (this.hasPendingOrder) {
      log.warn("检测到有待处理订单，取消抢单: " + _0x49248f.product + " (ID: " + _0x49248f.id + ")");
      return;
    }
    if (this.recentGrabbedOrders.has(_0x49248f.id)) {
      CONFIG.enhancedDebugMode && log.debug("订单 " + _0x49248f.id + " 已在处理中或已处理，跳过");
      return;
    }
    this.isGrabbing = true;
    this.recentGrabbedOrders.add(_0x49248f.id);
    CONFIG.enhancedDebugMode && log.debug("⚡️ 开始抢单流程: " + _0x49248f.product + " (ID: " + _0x49248f.id + ") - 锁已激活");
    log.info("⚡️ 尝试抢单: " + _0x49248f.product + " (ID: " + _0x49248f.id + ")");
    try {
      const _0x4a966f = await NetworkService.grabOrder({
        "memberId": this.account.memberId,
        "device": this.account.device
      }, _0x49248f.id);
      _0x4a966f.code === 200 ? (log.success("✅ 抢单请求成功 (订单ID: " + _0x49248f.id + ")，将在 " + CONFIG.asyncProcessDelay / 1000 + " 秒后异步检查订单状态"), this.scheduleAsyncOrderCheck(_0x49248f.id)) : log.error("❌ 抢单失败 (订单ID: " + _0x49248f.id + "): " + (_0x4a966f.msg || "返回未知错误"));
    } catch (_0x1338a5) {
      log.error("抢单请求过程中发生异常 (订单ID: " + _0x49248f.id + "):", _0x1338a5.message);
    } finally {
      this.isGrabbing = false;
      CONFIG.enhancedDebugMode && log.debug("抢单API调用完成 (ID: " + _0x49248f.id + ")，抢单锁已释放");
    }
  }
  async ["checkAndNotifyNewOrder"]() {
    if (CONFIG.enhancedDebugMode) {
      log.debug("开始执行异步订单查询和推送流程");
    }
    log.info("🔍 抢单后检查个人订单列表是否有新到账订单...");
    try {
      const _0x525cff = await NetworkService.fetchMyOrders({
        "memberId": this.account.memberId,
        "device": this.account.device
      }, 1, 20, 3);
      if (_0x525cff === null) return log.error("检查新订单失败：查询个人订单列表时出错。"), this.hasPendingOrder = false, false;
      if (Array.isArray(_0x525cff) && _0x525cff.length > 0) {
        this.hasPendingOrder = true;
        log.info("⚠️ 检测到 " + _0x525cff.length + " 个待处理订单，暂停抢单");
        this.pendingOrderTimeout && clearTimeout(this.pendingOrderTimeout);
        this.pendingOrderTimeout = setTimeout(() => {
          log.warn("⚠️ 待处理订单暂停超过30分钟，自动恢复抢单");
          this.hasPendingOrder = false;
          this.pendingOrderTimeout = null;
        }, 1800000);
        for (const _0x408fa9 of _0x525cff) {
          if (_0x408fa9 && _0x408fa9.Id && !notifiedOrderIds.has(_0x408fa9.Id)) {
            {
              log.success("🎉 检查到新到账订单 (ID: " + _0x408fa9.Id + ")，准备推送！");
              const _0x49aadd = {
                "id": _0x408fa9.Id,
                "product": _0x408fa9.catalogName,
                "amount": _0x408fa9.clinchPrice,
                "status": _0x408fa9.status,
                "name": _0x408fa9.specification,
                "formatName": _0x408fa9.formatName,
                "accounts": _0x408fa9.accounts,
                "templateText": _0x408fa9.templateText
              };
              notifiedOrderIds.add(_0x408fa9.Id);
              await wxPush.send(this.account, "抢单成功 ", _0x49aadd);
              return true;
            }
          }
        }
        log.info("检查完成，个人列表中未发现新的待处理订单。");
        return false;
      } else return this.hasPendingOrder = false, this.pendingOrderTimeout && (clearTimeout(this.pendingOrderTimeout), this.pendingOrderTimeout = null), log.info("✅ 个人列表中没有待处理订单，恢复抢单"), false;
    } catch (_0x45e6c1) {
      log.error("检查新订单过程中发生异常:", _0x45e6c1.message);
      this.hasPendingOrder = false;
      return false;
    } finally {
      CONFIG.enhancedDebugMode && log.debug("异步订单查询和推送流程执行完成");
    }
  }
  ["handleClose"](_0x35d628, _0x12b42b) {
    const _0xe54f49 = _0x12b42b ? _0x12b42b.toString() : "无";
    log.warn("WebSocket 连接已断开。 Code: " + _0x35d628 + ", 原因: " + _0xe54f49);
    this.cleanupWebSocket();
    this.scheduleReconnect();
  }
  ["handleError"](_0x3fc0e2) {
    log.error("WebSocket 连接遇到错误:", _0x3fc0e2.message);
    this.cleanupWebSocket(true);
    this.scheduleReconnect();
  }
  ["cleanupWebSocket"](_0x30fd7b = false) {
    this.stopHeartbeat();
    this.stopOrderCleanup();
    this.ws && (this.ws.removeAllListeners(), (_0x30fd7b || this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) && this.ws.terminate(), this.ws = null);
    this.isGrabbing = false;
    this.recentGrabbedOrders.clear();
    this.hasPendingOrder = false;
    this.pendingOrderTimeout && (clearTimeout(this.pendingOrderTimeout), this.pendingOrderTimeout = null);
    this.orderCheckTimeout && (clearTimeout(this.orderCheckTimeout), this.orderCheckTimeout = null);
  }
  ["scheduleReconnect"]() {
    if (this.reconnectTimeout) return;
    log.info("将在 5 秒后尝试重新连接 WebSocket...");
    this.reconnectTimeout = setTimeout(() => {
      this.reconnectTimeout = null;
      this.connect();
    }, 5000);
  }
  ["startHeartbeat"]() {
    log.info("启动 WebSocket 心跳 PING...");
    this.stopHeartbeat();
    this.heartbeatInterval = setInterval(() => {
      if (this.ws?.["readyState"] === WebSocket.OPEN) {
        try {
          log.debug("发送 Ping...");
          this.ws.ping(_0xc9ab8 => {
            _0xc9ab8 && (log.error("发送 Ping 失败:", _0xc9ab8.message), this.cleanupWebSocket(true), this.scheduleReconnect());
          });
        } catch (_0x16816e) {
          log.error("发送心跳时捕获到错误:", _0x16816e.message);
          this.cleanupWebSocket(true);
          this.scheduleReconnect();
        }
      } else log.warn("WebSocket 未连接，无法发送心跳。");
    }, 30000);
  }
  ["stopHeartbeat"]() {
    this.heartbeatInterval && (log.info("停止 WebSocket 心跳"), clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  ["startOrderCleanup"]() {
    CONFIG.enhancedDebugMode && log.debug("启动订单去重清理任务");
    this.stopOrderCleanup();
    this.cleanupInterval = setInterval(() => {
      this.cleanupOldGrabbedOrders();
    }, CONFIG.orderDeduplicationTimeout / 2);
  }
  ["stopOrderCleanup"]() {
    if (this.cleanupInterval) {
      CONFIG.enhancedDebugMode && log.debug("停止订单去重清理任务");
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }
  ["cleanupOldGrabbedOrders"]() {
    const _0x6d2e17 = this.recentGrabbedOrders.size;
    _0x6d2e17 > 50 && (this.recentGrabbedOrders.clear(), CONFIG.enhancedDebugMode && log.debug("清理已抢订单记录，清理前: " + _0x6d2e17 + "个，清理后: 0个"));
  }
  ["scheduleAsyncOrderCheck"](_0x306e26) {
    this.orderCheckTimeout && clearTimeout(this.orderCheckTimeout);
    CONFIG.enhancedDebugMode && log.debug("计划在 " + CONFIG.asyncProcessDelay + "ms 后异步检查订单 " + _0x306e26);
    this.orderCheckTimeout = setTimeout(async () => {
      this.orderCheckTimeout = null;
      try {
        await this.checkAndNotifyNewOrder();
      } catch (_0x3b60a9) {
        log.error("异步检查订单 " + _0x306e26 + " 时发生错误:", _0x3b60a9.message);
      }
    }, CONFIG.asyncProcessDelay);
  }
  ["checkWebSocketHealth"]() {
    const _0x408960 = Date.now(),
      _0x809b31 = _0x408960 - this.lastMessageTime,
      _0x25fa53 = 360000;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return log.warn("⚠️ WebSocket 连接状态异常，准备重连..."), false;
    if (_0x809b31 > _0x25fa53) return log.warn("⚠️ WebSocket 已 " + Math.floor(_0x809b31 / 1000) + " 秒未收到任何消息，可能存在异常，准备重连..."), false;
    return true;
  }
}
async function checkMyOrdersPeriodically() {
  log.info("⏱️ 开始执行定时任务：检查是否有待处理订单需要提醒...");
  try {
    if (wsClientInstance && !wsClientInstance.checkWebSocketHealth()) {
      {
        log.warn("⚠️ WebSocket 连接健康检查失败，触发重连机制...");
        if (wsClientInstance.reconnectTimeout) log.info("⏳ 重连已在进行中，跳过本次重连请求");else {
          wsClientInstance.cleanupWebSocket(true);
          wsClientInstance.scheduleReconnect();
        }
      }
    }
  } catch (_0x11538f) {
    log.error("健康检查过程中发生错误:", _0x11538f.message);
  }
  if (!CONFIG.memberId || !CONFIG.devicenumber || !CONFIG.uid) {
    log.warn("定时检查跳过：缺少 memberId, devicenumber 或 uid");
    return;
  }
  const _0x22a4c5 = {
    "memberId": CONFIG.memberId,
    "device": CONFIG.devicenumber,
    "uids": [CONFIG.uid]
  };
  try {
    {
      const _0x4ca515 = await NetworkService.fetchMyOrders(_0x22a4c5, 1, 50, 3);
      if (_0x4ca515 === null) {
        {
          log.error("定时检查失败：查询个人订单列表时出错。");
          return;
        }
      }
      if (Array.isArray(_0x4ca515) && _0x4ca515.length > 0) {
        {
          log.info("定时检查发现 " + _0x4ca515.length + " 条个人已接单待处理订单，准备推送提醒...");
          const _0xb3bb62 = _0x4ca515[0];
          if (_0xb3bb62 && _0xb3bb62.Id) {
            log.success("定时任务发现待处理订单: ID " + _0xb3bb62.Id + " (" + (_0xb3bb62.catalogName || "未知") + ")，推送提醒");
            const _0x543a4c = {
              "id": _0xb3bb62.Id,
              "product": _0xb3bb62.catalogName,
              "amount": _0xb3bb62.clinchPrice,
              "status": _0xb3bb62.status,
              "name": _0xb3bb62.specification,
              "formatName": _0xb3bb62.formatName,
              "accounts": _0xb3bb62.accounts,
              "templateText": _0xb3bb62.templateText
            };
            await wxPush.send(_0x22a4c5, "提醒-有待处理订单", _0x543a4c);
            log.info("定时检查完成，已推送第一个待处理订单的提醒。");
          } else log.warn("定时检查时发现第一个订单数据无效:", _0xb3bb62), log.info("定时检查完成，未找到有效的待处理订单进行提醒。");
        }
      } else log.info("定时检查完成，未在个人列表中发现订单。");
    }
  } catch (_0x22aef4) {
    log.error("定时检查订单列表时发生异常:", _0x22aef4.message);
  }
}
async function sendPeriodicReminder() {
  if (!CONFIG.memberId || !CONFIG.devicenumber || !CONFIG.uid) {
    {
      log.warn("定时提醒跳过：缺少 memberId, devicenumber 或 uid");
      return;
    }
  }
  try {
    const _0x145124 = new Date().toLocaleString("zh-CN", {
        "hour12": false
      }),
      _0x195254 = CONFIG.whitelist.length > 0 ? CONFIG.whitelist.join("、") : "全部类别",
      _0x7e003c = [];
    if (process.env.XZUA) _0x7e003c.push("XZUA: " + process.env.XZUA);
    if (process.env.XZDEVICEID) _0x7e003c.push("XZDEVICEID: " + process.env.XZDEVICEID);
    const _0x3916c8 = CONFIG.remindEnabled ? "定时提醒: 每" + CONFIG.remindInterval + "分钟" : "定时提醒: 已关闭";
    if (CONFIG.remindEnabled) _0x7e003c.push(_0x3916c8);
    const _0x44c45f = "⏰ 定时提醒 - " + _0x145124 + "\n\n" + "✅ 系统运行正常\n\n" + "👤 账号信息\n" + ("  用户ID: " + CONFIG.memberId + "\n") + ("  设备ID: " + CONFIG.devicenumber + "\n") + ("  昵称: " + (CONFIG.nickname || "未知") + "\n\n") + "🎯 抢单配置\n" + ("  白名单: " + _0x195254 + "\n") + ("  定时检查: 每" + CONFIG.checkInterval / 60000 + "分钟\n\n") + "⚙️ 环境配置\n" + (_0x7e003c.length > 0 ? _0x7e003c.map(_0x5ce431 => "  " + _0x5ce431).join("\n") + "\n" : "  (使用默认配置)\n") + "\n💡 请记得及时处理已接订单！";
    await sendNotify.sendNotify("⏰ 抢单系统定时提醒", _0x44c45f);
    log.success("定时提醒已发送：" + _0x145124);
  } catch (_0x50f286) {
    log.error("定时提醒发送失败:", _0x50f286.message);
  }
}
async function startup() {
  console.log("================= XuZuan Grabbing Script 启动 =================");
  try {
    {
      checkEnvironmentVariables();
      parseEnvironmentVariables();
      await fetchAnnouncement();
      await login();
      if (!CONFIG.memberId || !CONFIG.devicenumber) throw new Error("登录后未能获取 MemberID 或 DeviceNumber。");
      !(await validateLicenseKey()) && (log.error("❌ 系统启动终止：授权验证失败。"), process.exit(1));
      wsClientInstance = new WSClient({
        "memberId": CONFIG.memberId,
        "device": CONFIG.devicenumber,
        "uids": [CONFIG.uid]
      });
      log.info("⏱️ 启动定时订单检查任务，每 " + CONFIG.checkInterval / 60000 + " 分钟执行一次");
      setTimeout(() => {
        checkMyOrdersPeriodically().catch(_0x363db3 => {
          log.error("首次定时检查执行失败:", _0x363db3.message);
        });
      }, 5000);
      setInterval(() => {
        checkMyOrdersPeriodically().catch(_0x1f6b7c => {
          log.error("定时检查执行失败:", _0x1f6b7c.message);
        });
      }, CONFIG.checkInterval);
      CONFIG.remindEnabled ? (log.info("⏰ 启动定时提醒任务，每 " + CONFIG.remindInterval + " 分钟提醒一次"), await sendPeriodicReminder(), setInterval(sendPeriodicReminder, CONFIG.remindInterval * 60000)) : log.info("⏰ 定时提醒已禁用 (可通过 XZREMIND 环境变量开启)");
    }
  } catch (_0x2dd1c) {
    log.error("💥 系统启动过程中发生致命错误:", _0x2dd1c.message);
    process.exit(1);
  }
}
require.main === module && startup();
process.on("unhandledRejection", (_0x3009e3, _0x4f60ff) => {
  log.error("未处理的 Promise Rejection:", _0x3009e3);
});
process.on("uncaughtException", (_0x21fd6b, _0x234d51) => {
  log.error("未捕获的异常:", _0x21fd6b);
  log.error("异常来源:", _0x234d51);
  process.exit(1);
});