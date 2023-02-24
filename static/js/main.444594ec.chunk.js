(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
	[0], {
		175: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
		},
		189: function(e, t, n) {},
		190: function(e, t, n) {},
		46: function(e) {
			e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"adr","type":"address"},{"indexed":false,"internalType":"uint256","name":"bnbToEat","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansBeforeFee","type":"uint256"}],"name":"EmitAte","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"adr","type":"address"},{"indexed":true,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"beansFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansTo","type":"uint256"}],"name":"EmitBaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"adr","type":"address"},{"indexed":true,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"bnbamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansTo","type":"uint256"}],"name":"EmitBoughtBeans","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bakerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"bool","name":"setAsBlacklisted","type":"bool"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"bnbRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"bnbTvl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyBeans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"dailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"hasInvested","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"maxPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"maxPayoutReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"maxTvlReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"secondsSinceLastEat","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"user","outputs":[{"components":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"uint256","name":"beans","type":"uint256"},{"internalType":"uint256","name":"bakedAt","type":"uint256"},{"internalType":"uint256","name":"ateAt","type":"uint256"},{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"hasReferred","type":"bool"},{"internalType":"address[]","name":"referrals","type":"address[]"},{"internalType":"address[]","name":"bonusEligibleReferrals","type":"address[]"},{"internalType":"uint256","name":"firstDeposit","type":"uint256"},{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"},{"internalType":"bool","name":"blacklisted","type":"bool"}],"internalType":"struct GrilledBUSD.Baker","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]')
		},
		531: function(e, t) {},
		540: function(e, t) {},
		541: function(e, t, n) {},
		542: function(e, t, n) {
			"use strict";
			n.r(t);
			var a, s, r = n(8),
				i = n.n(r),
				c = n(174),
				l = n.n(c),
				u = (n(189), n(190), n(13)),
				o = "static/media/bnb.106058a1.png",
				d = "static/media/ape3.a594fade.png",
				p = n(2),
				b = n(11),
				y = n(46),
				j = n(175),
				f = n(12),
				m = (n(191), n(4)),
				x = i.a.createContext();
			"undefined" !== typeof window && (a = window.ethereum);
			var h = "0xb356d32f30A99759961c631dd2053fA9Dc92a2B8",
				O = function() {
					var e = new f.a.providers.Web3Provider(a);
					e.getSigner();
					return new f.a.Contract(h, y, e)
				},
				v = function(e) {
					var t = e.children,
						n = Object(r.useState)(!1),
						i = Object(u.a)(n, 2),
						c = i[0],
						l = i[1],
						o = window.location.search,
						d = new URLSearchParams(o);
					Object(r.useEffect)((function() {
						window.ethereum && F()
					}), []), Object(r.useEffect)((function() {
						window.ethereum && O()
					}), [h]), window.ethereum && window.ethereum.on("accountsChanged", (function(e) {
						C(e[0]);
						var t = e[0];
						console.log(t), U(t), W(t), _(t), Q(t), le(t), ae(t), z(t), O(), Te(t)
					}));
					var v = Object(r.useState)(null),
						w = Object(u.a)(v, 2),
						g = w[0],
						A = w[1],
						T = Object(r.useState)(null),
						k = Object(u.a)(T, 2),
						B = k[0],
						M = k[1],
						S = Object(r.useState)(),
						N = Object(u.a)(S, 2),
						E = N[0],
						C = N[1],
						R = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e() {
								var t, n, s, r = arguments;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = r.length > 0 && void 0 !== r[0] ? r[0] : a, e.prev = 1, t) {
												e.next = 4;
												break
											}
											return e.abrupt("return", alert("Please install metamask "));
										case 4:
											return e.next = 6, t.request({
												method: "eth_requestAccounts"
											});
										case 6:
											n = e.sent, C(n[0]), s = n[0], U(s), W(s), _(s), Q(s), le(s), ae(s), z(s), Te(s), e.next = 23;
											break;
										case 19:
											throw e.prev = 19, e.t0 = e.catch(1), console.error(e.t0), new Error("No ethereum object.");
										case 23:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 19]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						D = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e() {
								var t = arguments;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											t.length > 0 && void 0 !== t[0] ? t[0] : a, C(null);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						F = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e() {
								var t, n, r, i, c, l = arguments;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = l.length > 0 && void 0 !== l[0] ? l[0] : a, e.prev = 1, t) {
												e.next = 4;
												break
											}
											return e.abrupt("return", alert("Please install metamask "));
										case 4:
											return e.next = 6, t.request({
												method: "eth_accounts"
											});
										case 6:
											if (!(n = e.sent).length) {
												e.next = 25;
												break
											}
											return C(n[0]), r = n[0], U(r), W(r), _(r), Q(r), le(r), ae(r), z(r), Te(r), i = O(), s = d.get("ref") || "0x0000000000000000000000000000000000000000", e.next = 22, i.hasInvested(s);
										case 22:
											c = e.sent, console.log(c), !1 === c && (s = "0x0000000000000000000000000000000000000000");
										case 25:
											e.next = 31;
											break;
										case 27:
											throw e.prev = 27, e.t0 = e.catch(1), console.error(e.t0), new Error("No ethereum object.");
										case 31:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 27]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						G = Object(r.useState)(null),
						J = Object(u.a)(G, 2),
						L = J[0],
						P = J[1],
						U = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, s, r, i;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = new f.a.providers.Web3Provider(a), e.next = 3, n.getBalance(t);
										case 3:
											s = e.sent, r = f.a.utils.formatEther(s), i = (Math.round(100 * r) / 100).toFixed(2), P(i), console.log(i);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						I = Object(r.useState)(null),
						X = Object(u.a)(I, 2),
						Z = X[0],
						q = X[1],
						Q = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, r, i, c;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.contractBalance();
										case 3:
											return a = e.sent, e.next = 6, n.hasInvested(s);
										case 6:
											r = e.sent, console.log(r), !1 === r && (s = "0x0000000000000000000000000000000000000000"), i = f.a.utils.formatEther(a), c = (Math.round(100 * i) / 100).toFixed(2), q(c), console.log(c);
										case 13:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						V = Object(r.useState)(null),
						H = Object(u.a)(V, 2),
						K = H[0],
						Y = H[1],
						z = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return console.log(t), n = O(), e.next = 4, n.user(t);
										case 4:
											a = e.sent, s = a.beans, r = s.toNumber(), Y(r), console.log(r);
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						W = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), console.log(n), e.next = 4, n.bnbTvl(t);
										case 4:
											a = e.sent, s = f.a.utils.formatEther(a), A(s), console.log(s);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						_ = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.bnbRewards(t);
										case 3:
											a = e.sent, s = f.a.utils.formatEther(a), r = (Math.round(1e6 * s) / 1e6).toFixed(6), M(r), console.log(r);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						$ = Object(r.useState)(null),
						ee = Object(u.a)($, 2),
						te = ee[0],
						ne = ee[1],
						ae = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.dailyReward(t);
										case 3:
											a = e.sent, s = f.a.utils.formatEther(a), ne(r = 1e14 * s), console.log(r);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						se = Object(r.useState)(null),
						re = Object(u.a)(se, 2),
						ie = re[0],
						ce = re[1],
						le = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.user(t);
										case 3:
											a = e.sent, s = a.referrals.length, ce(s);
										case 6:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						ue = Object(r.useState)(null),
						oe = Object(u.a)(ue, 2),
						de = oe[0],
						pe = oe[1],
						be = Object(r.useState)(null),
						ye = Object(u.a)(be, 2),
						je = ye[0],
						fe = ye[1],
						me = Object(r.useState)(null),
						xe = Object(u.a)(me, 2),
						he = xe[0],
						Oe = xe[1],
						ve = Object(r.useState)(null),
						we = Object(u.a)(ve, 2),
						ge = we[0],
						Ae = we[1],
						Te = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r, i, c, l;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.secondsSinceLastEat(t);
										case 3:
											a = e.sent, s = a.toNumber(), r = parseInt(s, 10), i = Math.floor(r / 86400), r -= 3600 * i * 24, c = Math.floor(r / 3600), r -= 3600 * c, l = Math.floor(r / 60), r -= 60 * l, console.log(i + " days, " + c + " Hrs, " + l + " Minutes, " + r + " Seconds"), 1 === i || 0 === i ? fe(90) : 2 === i ? fe(80) : 3 === i ? fe(70) : 4 === i ? fe(60) : 5 === i ? fe(50) : 6 === i ? fe(40) : 7 === i ? fe(30) : 8 === i ? fe(20) : 9 === i ? fe(10) : (10 === i || i > 10) && fe(5), pe(i), Oe(c), Ae(l);
										case 17:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						ke = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t, n) {
								var r, i, c, u, o, d, b, m;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t.preventDefault(), r = t.target.bnbval.value, 1, !(r >= 1 && r <= 1e5)) {
												e.next = 28;
												break
											}
											return i = new f.a.providers.Web3Provider(a), c = i.getSigner(), u = new f.a.Contract(h, y, c), o = new f.a.Contract("0x55d398326f99059fF775485246999027B3197955", j, c), console.log("sending " + t.target.bnbval.value + " to the contract"), d = f.a.utils.parseEther(t.target.bnbval.value), e.next = 12, o.approve(h, d);
										case 12:
											return b = e.sent, l(!0), console.log(b), e.next = 17, b.wait();
										case 17:
											return l(!1), e.next = 20, u.buyBeans(s, d);
										case 20:
											return m = e.sent, l(!0), console.log(m), e.next = 25, m.wait();
										case 25:
											l(!1), e.next = 29;
											break;
										case 28:
											alert("Enter buy amount between 10 and 100k USDT");
										case 29:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						Be = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, s, r, i, c;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t.preventDefault(), n = new f.a.providers.Web3Provider(a), s = n.getSigner(), r = new f.a.Contract(h, y, s), e.next = 6, r.bake();
										case 6:
											return i = e.sent, l(!0), e.next = 10, i.wait();
										case 10:
											c = e.sent, console.log(c), l(!1);
										case 13:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						Me = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, s, r, i;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t.preventDefault(), n = new f.a.providers.Web3Provider(a), s = n.getSigner(), r = new f.a.Contract(h, y, s), e.next = 6, r.eat();
										case 6:
											return i = e.sent, l(!0), console.log(i), e.next = 11, i.wait();
										case 11:
											l(!1);
										case 12:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}();
					return Object(m.jsx)(x.Provider, {
						value: {
							connectWallet: R,
							currentAccount: E,
							wbalance: L,
							myape: g,
							mybanana: B,
							seHireApes: Be,
							sellbanana: Me,
							buyapes: ke,
							isloading: c,
							disconnect: D,
							cabalance: Z,
							referrals: ie,
							dailyr: te,
							beans: K,
							tax: je,
							day: de,
							hr: he,
							min: ge
						},
						children: t
					})
				},
				w = "p-4 h-15  w-screen flex justify-between items-center ",
				g = "flex w-1/4 items-center justify-start",
				A = "flex w-1/4 justify-end items-center",
				T = "items-justify bg-[#E88D67] rounded-2xl   font-bold cursor-pointer",
				k = "items-center bg-[#25DB1E] rounded-2xl   font-bold cursor-pointer ",
				B = "p-2",
				M = "items-center justify-center w-10 h-10",
				S = " border border-[#051007] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#FFFFFF]",
				N = function() {
					var e = Object(r.useContext)(x),
						t = e.connectWallet,
						n = e.currentAccount,
						a = e.disconnect,
						s = Object(r.useState)(),
						i = Object(u.a)(s, 2),
						c = i[0],
						l = i[1];
					Object(r.useEffect)((function() {
						n && l("".concat(n.slice(0, 4), "...").concat(n.slice(38)))
					}), [n]);
					var p = Object(r.useState)("swap"),
						b = Object(u.a)(p, 2);
					b[0], b[1];
					return Object(m.jsx)("div", {
						className: "wrap",
						children: Object(m.jsxs)("div", {
							className: w,
							children: [Object(m.jsx)("div", {
								className: g,
								children: Object(m.jsx)("img", {
									src: d,
									alt: "uniswap",
									height: 200,
									width: 250,
									class: "rounded-md rounded-xl"
								})
							}), Object(m.jsxs)("div", {
								className: A,
								children: [Object(m.jsx)("div", {
									className: M,
									children: Object(m.jsx)("img", {
										src: o,
										alt: "eth logo"
									})
								}), n ? Object(m.jsx)("div", {
									onClick: function() {
										return a()
									},
									className: "".concat(k, " ").concat(B),
									children: Object(m.jsx)("div", {
										className: "".concat(S, " ").concat(B),
										children: c
									})
								}) : Object(m.jsx)("div", {
									onClick: function() {
										return t()
									},
									className: "".concat(T, " ").concat(B),
									children: Object(m.jsx)("div", {
										children: Object(m.jsx)("h4", {
											children: "Connect"
										})
									})
								})]
							})]
						})
					})
				},
				E = n.p + "static/media/tg.9baadc5d.png",
				C = (n.p, n.p, "p-2 w-screen "),
				R = "flex-1 flex justify-center items-center",
				D = "flex bg-[#191B1F] rounded-3xl",
				F = "px-1 py-2 m-1/2 flex items-center cursor-pointer rounded-3xl",
				G = function() {
					return Object(m.jsx)("div", {
						className: "wra",
						children: Object(m.jsx)("div", {
							className: C,
							children: Object(m.jsx)("div", {
								className: R,
								children: Object(m.jsxs)("div", {
									className: D,
									children: [Object(m.jsx)("div", {
										className: F
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://yutuswap.onrender.com",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "https://s2.loli.net/2023/02/19/mnH2qJiGY5esCjd.png",
												alt: "YutuDex",
												height: 200,
												width: 200,
												class: "rounded-md rounded-xl"
											})
										})
									}), Object(m.jsx)("div", {
										className: F
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://t.me/Yutu188",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "https://s2.loli.net/2023/02/19/B9nGlDEAec83dMf.png",
												alt: "Btok",
												height: 200,
												width: 200,
												class: "rounded-md rounded-xl"
											})
										})
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "http://yutumoon.com/",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "https://s2.loli.net/2023/02/19/uDN8Lw7ABvHPlpS.png",
												alt: "RaodMap",
												height: 200,
												width: 200,
												class: "rounded-md rounded-xl"
											})
										})
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://www.pinksale.finance/pinklock/detail/0xaB0C06125549e6C57636850CA26019b06326B0BA?chain=BSC",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "https://s2.loli.net/2023/02/19/YBnRuz8V6jMktL2.png",
												alt: "uniswap",
												height: 200,
												width: 200,
												class: "rounded-md rounded-xl"
											})
										})
									}),Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://www.pinksale.finance/pinklock/detail/0xaB0C06125549e6C57636850CA26019b06326B0BA?chain=BSC",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "https://s2.loli.net/2023/02/22/P7CE5yrw2UGRO94.png",
												alt: "Miner Tutorial",
												height: 180,
												width: 180,
												class: "rounded-md rounded-xl"
											})
										})
									})]
								})
							})
						})
					})
				},
				J = n(32),
				L = "static/media/1.png",
				P = "bg-[#34344A]  rounded-2xl p-6 text-2xl  border border-[#34344A] hover:border-[#41444F]  flex justify-between",
				U = "bg-transparent placeholder:text-[#B2B9D2] outline-none  w-full text-2xl",
				I = "bg-[#34344A] my-3 rounded-2xl p-6 text-l text-orange-600 border border-[#34344A] hover:border-[#41444F]  flex justify-between",
				X = function() {
					var e, t, n, a, s = Object(r.useContext)(x),
						i = (s.wbalance, s.myape),
						c = s.mybanana,
						l = s.seHireApes,
						o = s.sellbanana,
						d = s.buyapes,
						j = s.currentAccount,
						h = (s.cabalance, s.referrals),
						O = (s.dailyr, s.beans),
						v = s.day,
						w = s.hr,
						g = s.min,
						A = (s.tax, window.location.search),
						T = new URLSearchParams(A).get("ref") || "0x0000000000000000000000000000000000000000",
						k = "https://yutuminer.netlify.app/?ref=",
						B = (k.concat(T), k.concat(j)),
						M = "0xb356d32f30A99759961c631dd2053fA9Dc92a2B8",
						S = Object(r.useState)(null),
						N = Object(u.a)(S, 2),
						E = N[0],
						C = N[1];

					function R() {
						return (R = Object(b.a)(Object(p.a)().mark((function e() {
							var t, n, a, s, r;
							return Object(p.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = new f.a.providers.JsonRpcProvider("https://bsc-dataseed.binance.org"), n = new f.a.Contract(M, y, t), e.next = 4, n.contractBalance();
									case 4:
										a = e.sent, s = f.a.utils.formatEther(a), r = (Math.round(100 * s) / 100).toFixed(2), C(r);
									case 8:
									case "end":
										return e.stop()
								}
							}), e)
						})))).apply(this, arguments)
					}
					return Object(r.useEffect)((function() {
						! function() {
							R.apply(this, arguments)
						}()
					}), []), Object(m.jsx)("div", {
						children: Object(m.jsxs)("div", {
							className: "whole",
							children: [Object(m.jsx)("div", {
								class: "h-100 container py-5 ",
								children: Object(m.jsx)("div", {
									class: "row d-flex justify-content-center align-items-center h-100 ",
									children: Object(m.jsx)("div", {
										class: "col-12 col-md-8 col-lg-6 col-xl-5 ",
										children: Object(m.jsx)("div", (t = {
											class: "text-white "
										}, Object(J.a)(t, "class", "top"), Object(J.a)(t, "children", Object(m.jsxs)("div", {
											class: "card-body p-5 text-center",
											children: [Object(m.jsxs)("div", {
												class: "mb-md-2   md-4 pb-5  text-center ",
												children: [Object(m.jsx)("img", {
													src: L,
													alt: "mid",
													height: 70,
													width: 350,
													class: "rounded-md rounded-xl mx-auto d-block"
												}), Object(m.jsx)("p", {
													children: Object(m.jsx)("h4", {
														class: "fw-bold",
														children: "YuTu Miner pool is a locked USDT static rewards pool returning up to 8% daily"
													})
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Contract Balance ", Object(m.jsxs)("span", {
																children: [E, " USDT"]
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0 ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Your USDT invested ", Object(m.jsxs)("span", {
																children: [i, " USDT"]
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Your Carrots ", Object(m.jsx)("span", {
																children: O
															})]
														})
													})]
												}), Object(m.jsxs)("form", {
													onSubmit: d,
													children: [Object(m.jsxs)("div", {
														className: P,
														children: [Object(m.jsx)("input", {
															id: "bnbval",
															type: "text",
															className: U,
															placeholder: "0.0",
															pattern: "^[0-9]*[.,]?[0-9]*$"
														}), Object(m.jsx)("span", {
															class: "coin",
															children: "USDT"
														})]
													}), Object(m.jsxs)("div", {
														class: "feature-item  ",
														children: [Object(m.jsx)("div", {
															class: "feature-icon "
														}), Object(m.jsx)("ul", {
															class: "w-hours list-unstyled",
															children: Object(m.jsxs)("li", {
																class: "d-flex justify-content-between",
																children: ["Min - 10 USDT", Object(m.jsx)("span", {
																	children: "Max - 100k USDT"
																})]
															})
														})]
													}), Object(m.jsx)("div", {
														style: {
															display: "flex",
															flexDirection: "column"
														},
														children: Object(m.jsx)("button", {
															type: "submit",
															class: "but",
															children: Object(m.jsx)("h4", {
																children: "Buy Carrots"
															})
														})
													})]
												})]
											}), Object(m.jsx)("div", {
												class: "divider  mb-4 py-1  "
											}), Object(m.jsxs)("div", {
												children: [Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between ",
															children: ["Your Carrots Rewards ", Object(m.jsxs)("span", {
																children: [c, " USDT"]
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "row  ",
													children: [Object(m.jsx)("div", {
														class: "col-md-6 mb-4",
														children: Object(m.jsx)("div", {
															class: "form-outline",
															children: Object(m.jsx)("button", (e = {
																class: "rehire",
																onClick: l
															}, Object(J.a)(e, "class", "but"), Object(J.a)(e, "type", "submit"), Object(J.a)(e, "children", "RePlant Carrots"), e))
														})
													}), Object(m.jsx)("div", {
														class: "col-md-6 mb-4",
														children: Object(m.jsx)("div", {
															class: "form-outline",
															children: Object(m.jsx)("button", {
																onClick: o,
																class: "but1",
																type: "submit",
																children: "Eat Carrots"
															})
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between ",
															children: ["Time passed since last eat", " ", Object(m.jsxs)("span", {
																children: [v, "d ", w, "hr ", g, "min", Object(m.jsx)("br", {})]
															})]
														})
													})]
												})]
											})]
										})), t))
									})
								})
							}), Object(m.jsx)("div", {
								class: "h-100 container py-5 ",
								children: Object(m.jsx)("div", {
									class: "row d-flex justify-content-center align-items-center h-100",
									children: Object(m.jsx)("div", {
										class: "col-12 col-md-8 col-lg-6 col-xl-5",
										children: Object(m.jsx)("div", (n = {
											class: "card bg-light text-white border border-info border border-5"
										}, Object(J.a)(n, "class", "top"), Object(J.a)(n, "children", Object(m.jsx)("div", {
											class: "card-body p-5 text-left",
											children: Object(m.jsxs)("div", {
												class: "mb-md-1 mt-2 md-4 pb-5 ",
												children: [Object(m.jsx)("span", {
													class: "text-left-yellow-50",
													children: "Details"
												}), Object(m.jsx)("div", {
													class: "divider  mb-4 py-1 "
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Daily Returns upto* ", Object(m.jsx)("span", {
																children: "3.5 - 6.5%"
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["APR up to ", Object(m.jsx)("span", {
																children: " 1278% - 2373%"
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Fees", Object(m.jsxs)("span", {
																children: ["\xa0 \xa0 1% Deposit", Object(m.jsx)("br", {}), " 5% Withdraw"]
															})]
														})
													})]
												}), Object(m.jsx)("div", {
													class: "mt-5",
													children: Object(m.jsx)("p", {
														children: "YuTu Miner pulls carrots is a decentralized application (dApp) that allows users to invest in a rewards pool using USDT. The dApp has three main functions: Buy Beans (Invest), RePlant Carrots (Compound), and Eat Carrots (Withdraw). There is a tax on early withdrawals, with the amount depending on how long the USDT has been in the pool (the longer it has been, the lower the tax). Referral codes can be used to receive a 5% bonus on deposits made by people you refer. There are also 'Beantastic' referrals, which give higher daily returns depending on the number you have. The minimum investment is 10 USDT and the maximum is 100,000 USDT. There is a 1% deposit fee and a 5% withdrawal fee. The contract is fully decentralized, audited, and cannot be changed. Check the whitepaper for more details."
													})
												})]
											})
										})), n))
									})
								})
							}), Object(m.jsx)("div", {
								class: "h-100 container py-5",
								children: Object(m.jsx)("div", {
									class: "row d-flex justify-content-center align-items-center h-100",
									children: Object(m.jsx)("div", {
										class: "col-12 col-md-8 col-lg-6 col-xl-5",
										children: Object(m.jsx)("div", (a = {
											class: "card bg-light  border border-info border-5 rounded-pill "
										}, Object(J.a)(a, "class", "top"), Object(J.a)(a, "children", Object(m.jsx)("div", {
											class: "card-body p-5 text-center",
											children: Object(m.jsxs)("div", {
												class: "mb-md-5 mt-md-4 pb-5",
												children: [Object(m.jsx)("div", {
													class: "input-group ",
													children: Object(m.jsx)("input", {
														type: "text",
														class: "form-control",
														"aria-label": "Username",
														"aria-describedby": "basic-addon1",
														value: B
													})
												}), Object(m.jsxs)("div", {
													className: I,
													children: ["Referrals", Object(m.jsx)("span", {
														class: "coin1",
														children: h
													})]
												}), Object(m.jsx)("span", {
													class: "",
													children: "Earn 5% of the downline USDT deposit."
												})]
											})
										})), a))
									})
								})
							})]
						})
					})
				},
				Z = (n(541), " text-white  flex flex-col justify-between ");
			var q = function() {
				return Object(m.jsxs)("div", {
					className: Z,
					children: [Object(m.jsx)(N, {}), Object(m.jsx)(X, {}), Object(m.jsx)(G, {})]
				})
			};
			l.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(v, {
				children: Object(m.jsx)(i.a.StrictMode, {
					children: Object(m.jsx)(q, {})
				})
			}))
		}
	},
	[
		[542, 1, 2]
	]
]);
//# sourceMappingURL=main.444594ec.chunk.js.map