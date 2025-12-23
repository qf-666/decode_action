//Tue Dec 23 2025 23:55:50 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios"),
  crypto = require("crypto"),
  TASK_CONFIG = {
    "APP_VERSION": "v1.5.6",
    "PLATFORM": "Android",
    "TIMEOUT": 30000,
    "COUNTDOWN_REFRESH_INTERVAL": 1000,
    "FIXED_WATCH_SEC": 15,
    "PROFIT_WAIT_SEC": 2,
    "INTERVAL_SEC": 5,
    "ACCOUNT_INTERVAL_SEC": 10,
    "DEFAULT_TOTAL_TASK": 4,
    "WELFARE_RETRY_COUNT": 3,
    "WELFARE_RETRY_DELAY": 3,
    "GET_AD_RETRY_COUNT": 3
  };
function log(_0x575602, _0x406872 = "INFO") {
  const _0x5a2135 = {
    "SUCCESS": "✅",
    "ERROR": "❌",
    "WARN": "⚠️",
    "INFO": "ℹ️",
    "CHECK": "🔍"
  };
  console.log("[" + (_0x5a2135[_0x406872] || "ℹ️") + " " + new Date().toLocaleString() + " | " + _0x406872 + "] " + _0x575602);
}
function toMD5Upper(_0x4f3754) {
  return crypto.createHash("md5").update(_0x4f3754, "utf8").digest("hex").toUpperCase();
}
function isMD5Hash(_0x3641d6) {
  return /^[A-F0-9]{32}$/.test(_0x3641d6);
}
async function fixedWait(_0x27172c) {
  return new Promise(_0x217fe7 => setTimeout(_0x217fe7, _0x27172c * 1000));
}
async function countdownWithProgress(_0x3499a2) {
  log("开始观看广告：" + _0x3499a2 + "秒");
  let _0x4a7ab7 = _0x3499a2;
  return new Promise(_0x174763 => {
    const _0x27cfc8 = setInterval(() => {
      {
        _0x4a7ab7 -= TASK_CONFIG.COUNTDOWN_REFRESH_INTERVAL / 1000;
        const _0x86881a = Math.round((_0x3499a2 - _0x4a7ab7) / _0x3499a2 * 100);
        process.stdout.write("\r[⏳ 观看进度] " + Math.ceil(_0x4a7ab7) + "秒 | " + _0x86881a + "%");
        if (_0x4a7ab7 <= 0) {
          clearInterval(_0x27cfc8);
          process.stdout.write("\r[⏳ 观看进度] 0秒 | 100%（观看完成）\n");
          _0x174763();
        }
      }
    }, TASK_CONFIG.COUNTDOWN_REFRESH_INTERVAL);
  });
}
function extractInfoFromUA(_0x650554) {
  const _0x21a598 = _0x650554.match(/(?:okhttp|WineProject)\/(\d+\.\d+\.\d+)/) || ["", TASK_CONFIG.APP_VERSION],
    _0x5d066d = _0x650554.match(/(iOS|Android)/) || ["", "iOS"];
  return {
    "version": _0x21a598[1],
    "platform": _0x5d066d[1]
  };
}
async function loginWithPhone(_0x1b6d6f, _0x42895e, _0x2878e1) {
  let _0x2cdfbb = _0x42895e;
  !isMD5Hash(_0x42895e) && (log("⚠️ 密码非标准MD5格式，将自动加密（明文长度：" + _0x42895e.length + "）", "WARN"), _0x2cdfbb = toMD5Upper(_0x42895e));
  const {
      platform: _0x996eb6,
      version: _0xeecd9f
    } = extractInfoFromUA(_0x2878e1),
    _0x635fdd = {
      "Content-Type": "application/json",
      "User-Agent": _0x2878e1,
      "version": _0xeecd9f || TASK_CONFIG.APP_VERSION,
      "platform": _0x996eb6 || "iOS",
      "Host": "gw.jiudageapp.com",
      "Accept": "*/*",
      "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
      "Accept-Language": "zh-Hans-CN;q=1.0, en-CN;q=0.9"
    },
    _0x3dc458 = {
      "phone": _0x1b6d6f,
      "password": _0x2cdfbb
    };
  try {
    {
      const _0x2c8fb2 = await axios.post("https://gw.jiudageapp.com/api/web/auth/pwdLogin", _0x3dc458, {
        "headers": _0x635fdd,
        "timeout": TASK_CONFIG.TIMEOUT
      });
      if (_0x2c8fb2.data?.["success"] && _0x2c8fb2.data.result?.["token"]) {
        log("📱 手机号 " + _0x1b6d6f + " 登录成功！", "SUCCESS");
        return _0x2c8fb2.data.result.token;
      } else {
        throw new Error(_0x2c8fb2.data?.["message"] || "登录返回无token");
      }
    }
  } catch (_0x22bfe4) {
    {
      log("❌ 手机号 " + _0x1b6d6f + " 登录失败：" + _0x22bfe4.message, "ERROR");
      throw _0x22bfe4;
    }
  }
}
async function getValidAd(_0x5e1e36, _0x2e0069 = 0) {
  try {
    const _0x33ad88 = await axios.post("https://gw.jiudageapp.com/api/web/member/get/internalAdvertisement", "", {
        "headers": _0x5e1e36,
        "timeout": TASK_CONFIG.TIMEOUT
      }),
      _0x25dd4a = _0x33ad88.data?.["result"];
    if (_0x25dd4a?.["id"] && _0x25dd4a?.["videoUrl"] && !isNaN(Number(_0x25dd4a.id))) return log("获取有效广告：ID=" + _0x25dd4a.id, "CHECK"), _0x25dd4a;
    throw new Error("广告信息无效（ID：" + _0x25dd4a?.["id"] + "）");
  } catch (_0xf6258a) {
    if (_0x2e0069 < TASK_CONFIG.GET_AD_RETRY_COUNT) return await fixedWait(TASK_CONFIG.WELFARE_RETRY_DELAY), getValidAd(_0x5e1e36, _0x2e0069 + 1);
    throw new Error("重试" + TASK_CONFIG.GET_AD_RETRY_COUNT + "次仍未获取有效广告：" + _0xf6258a.message);
  }
}
async function requestWelfare(_0x5baa9f, _0x575b19, _0x55faa9 = 0) {
  if (!_0x575b19 || isNaN(Number(_0x575b19))) throw new Error("videoId无效：" + _0x575b19);
  try {
    const _0x18b026 = await axios.post("https://gw.jiudageapp.com/api/web/newPeopleUnlock/receiveWelfareNineteen?videoId=" + Number(_0x575b19), "", {
      "headers": _0x5baa9f,
      "timeout": TASK_CONFIG.TIMEOUT
    });
    if (!_0x18b026.data.success) throw new Error(_0x18b026.data.message || "未知错误");
    return _0x18b026.data.result;
  } catch (_0x523284) {
    if (_0x55faa9 < TASK_CONFIG.WELFARE_RETRY_COUNT) return await fixedWait(TASK_CONFIG.WELFARE_RETRY_DELAY), requestWelfare(_0x5baa9f, _0x575b19, _0x55faa9 + 1);
    throw new Error("福利接口重试失败：" + _0x523284.message);
  }
}
async function getMemberInfo(_0x11da57) {
  try {
    {
      const _0x18af18 = await axios.post("https://gw.jiudageapp.com/api/web/member/getMemberInfo", "", {
        "headers": _0x11da57,
        "timeout": TASK_CONFIG.TIMEOUT
      });
      if (!_0x18af18.data.success) throw new Error(_0x18af18.data.message || "会员信息查询失败");
      const _0x487f03 = _0x18af18.data.result;
      log("会员信息：ID=" + _0x487f03.id + " | 手机号=" + _0x487f03.phone, "CHECK");
      return _0x487f03;
    }
  } catch (_0x1a30d2) {
    {
      log("会员信息查询异常：" + _0x1a30d2.message, "ERROR");
      throw _0x1a30d2;
    }
  }
}
async function getTaskExecutionConfig(_0xd9c623) {
  const _0x225521 = await getValidAd(_0xd9c623),
    _0xcabc5d = TASK_CONFIG.DEFAULT_TOTAL_TASK;
  log("设置执行次数：" + _0xcabc5d + "个（使用DEFAULT_TOTAL_TASK）", "SUCCESS");
  return {
    "executeCount": _0xcabc5d,
    "tempAdId": _0x225521.id,
    "finalContribution": 0,
    "isTotalZero": false
  };
}
async function runSingleAccount(_0x54014a, _0x426a17, _0x29f5e8, _0x1ac09c, _0x45f833) {
  let _0x52b1ca;
  try {
    _0x52b1ca = await loginWithPhone(_0x426a17, _0x29f5e8, _0x1ac09c);
  } catch (_0x97ff6) {
    log("🚫 跳过账号 " + _0x45f833 + "（登录失败）", "ERROR");
    return;
  }
  const {
      platform: _0x4b778b,
      version: _0x526137
    } = extractInfoFromUA(_0x1ac09c),
    _0x31cb9a = {
      "Authorization": _0x52b1ca,
      "User-Agent": _0x1ac09c,
      "version": _0x526137,
      "platform": _0x4b778b,
      "Content-Length": "0",
      "Host": "gw.jiudageapp.com",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip"
    };
  try {
    log("\n📱 设备信息：" + _0x4b778b + " | APP版本：" + _0x526137, "INFO");
    log("🔑 Token前缀：" + _0x52b1ca.slice(0, 20) + "...", "INFO");
    await getMemberInfo(_0x31cb9a);
    const _0x272f10 = await getTaskExecutionConfig(_0x31cb9a),
      {
        executeCount: _0x427749,
        tempAdId: _0x18c98b
      } = _0x272f10;
    if (_0x427749 <= 0) {
      {
        log("ℹ️ 无需执行广告（执行次数=" + _0x427749 + "）", "INFO");
        return;
      }
    }
    log("📋 开始执行" + _0x427749 + "个广告任务", "INFO");
    for (let _0x536821 = 0; _0x536821 < _0x427749; _0x536821++) {
      const _0x355f9d = _0x536821 + 1;
      log("\n📌 开始第" + _0x355f9d + "/" + _0x427749 + "个广告任务", "INFO");
      let _0x2f9753;
      try {
        _0x2f9753 = await getValidAd(_0x31cb9a);
        while (_0x2f9753.id === _0x18c98b) {
          log("⚠️ 跳过临时广告 ID=" + _0x18c98b + "，重新获取...", "WARN");
          _0x2f9753 = await getValidAd(_0x31cb9a);
        }
        log("✅ 成功获取广告：ID=" + _0x2f9753.id, "SUCCESS");
      } catch (_0xa4040f) {
        {
          log("❌ 获取广告失败，跳过该任务：" + _0xa4040f.message, "ERROR");
          continue;
        }
      }
      let _0x1e31d1 = TASK_CONFIG.FIXED_WATCH_SEC;
      log("⏱️ fixed模式：固定观看" + _0x1e31d1 + "秒", "INFO");
      await countdownWithProgress(_0x1e31d1);
      log("🎁 正在领取福利...", "INFO");
      try {
        {
          const _0x1a9999 = await requestWelfare(_0x31cb9a, _0x2f9753.id);
          log("✅ 福利领取成功！贡献值：+" + (_0x1a9999.actualReceiveContribution || 0), "SUCCESS");
        }
      } catch (_0x4134de) {
        log("❌ 福利领取失败（不影响后续）：" + _0x4134de.message, "ERROR");
      }
      await fixedWait(TASK_CONFIG.PROFIT_WAIT_SEC);
      if (_0x536821 < _0x427749 - 1) {
        log("⏳ 任务间隔等待" + TASK_CONFIG.INTERVAL_SEC + "秒...", "INFO");
        await fixedWait(TASK_CONFIG.INTERVAL_SEC);
      }
    }
    log("\n🎉 " + _0x45f833 + " 任务全部执行完毕！", "SUCCESS");
    log("📊 完成" + _0x427749 + "个广告任务（DEFAULT_TOTAL_TASK=" + TASK_CONFIG.DEFAULT_TOTAL_TASK + "）", "CHECK");
  } catch (_0x234691) {
    log("\n❌ " + _0x45f833 + " 执行异常：" + _0x234691.message, "ERROR");
  }
}
async function runMultiAccountTask() {
  const _0x3266d0 = process.env.DDDTK || "";
  if (!_0x3266d0) {
    log("未检测到环境变量 DDDTK（格式：备注#手机号#明文密码#ua）", "ERROR");
    process.exit(1);
  }
  const _0x1a08e6 = _0x3266d0.split(/[@\r\n]/).map(_0x8cb791 => _0x8cb791.trim()).filter(_0x509f60 => _0x509f60);
  _0x1a08e6.length === 0 && (log("DDD中无有效账号", "ERROR"), process.exit(1));
  log("检测到" + _0x1a08e6.length + "个账号，开始执行", "INFO");
  for (let _0x4df06e = 0; _0x4df06e < _0x1a08e6.length; _0x4df06e++) {
    const _0x5c9608 = _0x1a08e6[_0x4df06e].split("#").map(_0x3657e9 => _0x3657e9.trim());
    if (_0x5c9608.length !== 4) {
      log("❌ 账号格式错误（必须为：备注#手机号#明文密码#ua），当前段数：" + _0x5c9608.length + "，内容：" + _0x1a08e6[_0x4df06e], "ERROR");
      continue;
    }
    const [_0x26ed28, _0x2a898e, _0x145b18, _0xc314ac] = _0x5c9608;
    if (!/^1[3-9]\d{9}$/.test(_0x2a898e)) {
      log("❌ 手机号格式无效：" + _0x2a898e + "（账号：" + _0x26ed28 + "）", "ERROR");
      continue;
    }
    if (!_0x145b18) {
      {
        log("❌ 密码为空（账号：" + _0x26ed28 + "）", "ERROR");
        continue;
      }
    }
    if (!_0xc314ac || _0xc314ac.length < 10) {
      {
        log("❌ User-Agent 无效或过短（账号：" + _0x26ed28 + "）", "ERROR");
        continue;
      }
    }
    log("\n=====================================", "INFO");
    log("开始执行账号：" + _0x26ed28 + "（" + _0x2a898e + "）", "SUCCESS");
    log("=====================================", "INFO");
    await runSingleAccount(_0x4df06e, _0x2a898e, _0x145b18, _0xc314ac, _0x26ed28);
    _0x4df06e < _0x1a08e6.length - 1 && (log("\n⏳ 账号切换等待 " + TASK_CONFIG.ACCOUNT_INTERVAL_SEC + " 秒..."), await fixedWait(TASK_CONFIG.ACCOUNT_INTERVAL_SEC));
  }
  log("\n=====================================", "SUCCESS");
  log("所有 " + _0x1a08e6.length + " 个账号任务执行完毕！", "SUCCESS");
  log("=====================================", "SUCCESS");
}
runMultiAccountTask();