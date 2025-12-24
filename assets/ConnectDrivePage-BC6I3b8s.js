import {
  u as $,
  w as A,
  n as E,
  _ as N,
  b as O,
  i as P,
  s as S,
  o as T,
  m as U,
  l as W,
  g as _,
  r as d,
  p as e,
  h as f,
  t as g,
  c as h,
  f as i,
  F as j,
  H as l,
  j as m,
  e as p,
  k as q,
  d as v,
  a as z,
} from "./index-4b3q4ibL.js";
import { V as J, a as Q, b as X } from "./VSelect-Dj0MS3ta.js";
const Z = { class: "mainBox" },
  aa = { class: "language-selector" },
  ta = { class: "connectBox" },
  ea = { class: "connectBtnBox" },
  la = { class: "content-container" },
  sa = { class: "title" },
  ia = { class: "accent-text" },
  oa = { class: "btn-content" },
  na = { key: 0, class: "connection-steps" },
  ca = { class: "step-label" },
  ra = {
    __name: "ConnectDrivePage",
    setup(ua) {
      function t(o) {
        return new Promise((s) => {
          setTimeout(s, o);
        });
      }
      const a = W("WebHIDService"),
        C = U(),
        { locale: I } = $(),
        L = z(),
        F = O(),
        { KeyboardConnectStatus: r, KeyboardRunMode: b, routerPage: K } = S(L),
        { staticLightColorList: y, LogoRGBStaticLightColorList: M } = S(F),
        n = d(!1),
        D = d(-1),
        u = d(""),
        w = d(!1),
        B = d(localStorage.getItem("lang") || "zh"),
        V = [
          { label: "中文", value: "zh" },
          { label: "English", value: "en" },
        ],
        Y = (o) => {
          ((I.value = o), localStorage.setItem("lang", o));
        },
        R = h(() =>
          u.value.includes("成功") || u.value.includes("完成")
            ? "success-status"
            : "",
        );
      h(() => (n.value ? "正在连接..." : "连接键盘"));
      const G = [
          "初始化连接",
          "获取键盘信息",
          "配置键盘设置",
          "同步灯光配置",
          "完成连接",
        ],
        c = (o, s) => {
          ((u.value = o),
            (w.value = o.includes("错误") || o.includes("失败")),
            s !== void 0 && (D.value = s));
        },
        H = async () => {
          ((n.value = !0),
            (D.value = 0),
            (w.value = !1),
            c("正在连接设备...", 0));
          try {
            await a.requestDevice();
          } catch (o) {
            (e.log(3, `Failed to request device:${o}`),
              (n.value = !1),
              (w.value = !0));
            return;
          }
          try {
            await a.openDevice();
          } catch (o) {
            (e.log(3, `Failed to open device:${o}`),
              (n.value = !1),
              (w.value = !0));
            return;
          }
          (await a.startEventListen(),
            c("设备连接成功，开始获取键盘信息...", 1),
            e.log(0, "开始获取键盘基本信息..."),
            (r.value = 2),
            await a.writeData(l.SYNCPack()),
            await t(200),
            b.value === 255
              ? (e.log(0, "当前键盘处于Boot模式，初始化结束..."),
                (r.value = 3),
                c("键盘初始化完成", 4))
              : (c("正在初始化键盘数据...", 2),
                e.log(0, "当前键盘处于App模式，即将开始初始化键盘数据..."),
                e.log(0, "获取键盘名称..."),
                await a.writeData(l.CMDPack(1, null)),
                await t(2),
                await a.writeData(l.CMDPack(38, null)),
                await t(2),
                e.log(0, "获取键盘精度及最大最小行程..."),
                await a.writeData(l.CMDPack(37, null)),
                await t(2),
                e.log(0, "获取键盘配置ID..."),
                await a.writeData(l.CMDPack(112, 4)),
                await t(2),
                e.log(0, "获取键盘支持的轴体ID..."),
                await a.writeData(l.CMDPack(118, null)),
                await t(2),
                e.log(0, "获取键盘回报率..."),
                await a.writeData(l.CMDPack(80, 7)),
                await t(2),
                c("正在同步键盘模式和配置...", 3),
                e.log(0, "查询键盘win模式..."),
                await a.writeData(l.CMDPack(33, null)),
                await t(2),
                e.log(0, "查询键盘mac模式..."),
                await a.writeData(l.CMDPack(34, null)),
                await t(2),
                e.log(0, "获取顶部死区开关状态..."),
                await a.writeData(l.CMDPack(52, 2)),
                await t(2),
                e.log(0, "获取键盘全局行程和死区..."),
                await a.writeData(l.DBPack(0, 0, 0, 0)),
                await t(2),
                e.log(0, "获取键盘灯光偏色设置..."),
                await a.writeData(l.CMDArrayPack(68, [255, 255, 255])),
                await t(2),
                c("正在同步灯光配置...", 3),
                e.log(0, "获取键盘灯光设置..."),
                await a.writeData(
                  l.PRGBPack(0, y.value, !1, !1, !1, 0, 0, 0, 0),
                ),
                await t(50),
                e.log(0, "获取键盘氛围灯光设置..."),
                await a.writeData(
                  l.LOGORGBPack(0, M.value, !1, !1, !1, 0, 0, 0, 0, 0),
                ),
                await t(50),
                e.log(0, "获取键盘HID矩阵..."),
                await a.writeData(l.DEFKEYPack(0, 1)),
                await t(2),
                await a.writeData(l.DEFKEYPack(2, 3)),
                await t(2),
                await a.writeData(l.DEFKEYPack(4, 5)),
                await t(2),
                c("键盘配置完成", 4)),
            e.log(0, "即将跳转至驱动页面..."),
            (n.value = !1),
            await t(800),
            C.push({ path: "/device" }));
        };
      return (
        A(r, async () => {
          r.value === 1 &&
            K.value === 0 &&
            (e.log(0, "键盘连接状态改变，开始获取键盘基本信息..."),
            (r.value = 2),
            await a.writeData(l.SYNCPack()),
            await t(200),
            b.value === 255
              ? (e.log(0, "当前键盘处于Boot模式，初始化结束..."), (r.value = 3))
              : (e.log(0, "当前键盘处于App模式，即将开始初始化键盘数据..."),
                await a.writeData(l.CMDPack(1, null)),
                await t(2),
                e.log(0, "获取键盘名称..."),
                await a.writeData(l.CMDPack(38, null)),
                await t(2),
                e.log(0, "获取键盘精度及最大最小行程..."),
                await a.writeData(l.CMDPack(37, null)),
                await t(2),
                e.log(0, "获取键盘配置ID..."),
                await a.writeData(l.CMDPack(112, 4)),
                await t(2),
                e.log(0, "获取键盘轴体ID..."),
                await a.writeData(l.CMDPack(118, null)),
                await t(2),
                e.log(0, "获取键盘回报率..."),
                await a.writeData(l.CMDPack(80, 7)),
                await t(2),
                e.log(0, "查询键盘win模式..."),
                await a.writeData(l.CMDPack(33, null)),
                await t(2),
                e.log(0, "查询键盘mac模式..."),
                await a.writeData(l.CMDPack(34, null)),
                await t(2),
                e.log(0, "获取顶部死区开关状态..."),
                await a.writeData(l.CMDPack(52, 2)),
                await t(2),
                e.log(0, "获取键盘全局行程和死区..."),
                await a.writeData(l.DBPack(0, 0, 0, 0)),
                await t(2),
                e.log(0, "获取键盘灯光设置..."),
                await a.writeData(
                  l.PRGBPack(0, y.value, !1, !1, !1, 0, 0, 0, 0),
                ),
                await t(50),
                e.log(0, "获取键盘氛围灯光设置..."),
                await a.writeData(
                  l.LOGORGBPack(0, M.value, !1, !1, !1, 0, 0, 0, 0, 0),
                ),
                await t(50),
                e.log(0, "获取键盘HID矩阵..."),
                await a.writeData(l.DEFKEYPack(0, 1)),
                await t(2),
                await a.writeData(l.DEFKEYPack(2, 3)),
                await t(2),
                await a.writeData(l.DEFKEYPack(4, 5)),
                await t(2)),
            C.push({ path: "/device" }));
        }),
        T(async () => {}),
        (o, s) => (
          p(),
          v("div", Z, [
            s[5] || (s[5] = i("div", { class: "bg-grid" }, null, -1)),
            s[6] || (s[6] = i("div", { class: "bg-glow" }, null, -1)),
            i("div", aa, [
              f(
                J,
                {
                  modelValue: B.value,
                  "onUpdate:modelValue": [
                    s[0] || (s[0] = (k) => (B.value = k)),
                    Y,
                  ],
                  items: V,
                  "item-title": "label",
                  "item-value": "value",
                  variant: "outlined",
                  density: "compact",
                  "bg-color": "rgba(30, 30, 40, 0.7)",
                  color: "primary",
                  "hide-details": "",
                },
                {
                  prepend: P(() => [
                    f(X, null, {
                      default: P(() => s[1] || (s[1] = [m("mdi-translate")])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
            ]),
            i("div", ta, [
              s[3] ||
                (s[3] = i(
                  "div",
                  { class: "picBox" },
                  [
                    i("div", { class: "keyboard-light" }),
                    i("div", { class: "overlay-pattern" }),
                  ],
                  -1,
                )),
              i("div", ea, [
                i("div", la, [
                  s[2] ||
                    (s[2] = i(
                      "div",
                      { class: "logoBox" },
                      [i("div", { class: "logo-glow" })],
                      -1,
                    )),
                  i("h2", sa, [
                    m(g(o.$t("messages.connectYour")), 1),
                    i("span", ia, g(o.$t("messages.axisKeyboard")), 1),
                  ]),
                  f(
                    Q,
                    {
                      size: "large",
                      loading: n.value,
                      disabled: n.value,
                      color: "primary",
                      class: "connectBtn",
                      onClick: H,
                    },
                    {
                      default: P(() => [
                        i("span", oa, g(o.$t("messages.connectKeyboard")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["loading", "disabled"],
                  ),
                  u.value && !w.value
                    ? (p(),
                      v(
                        "div",
                        { key: 0, class: E(["status-message", R.value]) },
                        g(u.value),
                        3,
                      ))
                    : _("", !0),
                ]),
              ]),
            ]),
            n.value
              ? (p(),
                v("div", na, [
                  (p(),
                  v(
                    j,
                    null,
                    q(G, (k, x) =>
                      i(
                        "div",
                        {
                          key: x,
                          class: E([
                            "step-item",
                            {
                              "step-active": D.value >= x,
                              "step-done": D.value > x,
                            },
                          ]),
                        },
                        [
                          s[4] ||
                            (s[4] = i("span", { class: "step-dot" }, null, -1)),
                          i("span", ca, g(k), 1),
                        ],
                        2,
                      ),
                    ),
                    64,
                  )),
                ]))
              : _("", !0),
            s[7] ||
              (s[7] = i(
                "div",
                { class: "ConnectPageFoot" },
                [
                  i("strong", null, [m("Modified by DevMiner")]),
                  i("span", null, [
                    m("Copyright © 2025 "),
                    i("span", { class: "brand-text" }, "Hummingbirds"),
                  ]),
                ],
                -1,
              )),
          ])
        )
      );
    },
  },
  ga = N(ra, [["__scopeId", "data-v-ae8bd35e"]]);
export { ga as default };
