!function(e) {
	"function" == typeof define && define.amd ? define([ "jquery", "moment" ],
			e) : "object" == typeof exports ? module.exports = e(
			require("jquery"), require("moment")) : e(jQuery, moment)
}(function(e, t) {
	!function() {
		t.defineLocale("zh-cn", {
			months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort : "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin : "日_一_二_三_四_五_六".split("_"),
			longDateFormat : {
				LT : "HH:mm",
				LTS : "HH:mm:ss",
				L : "YYYY年MMMD日",
				LL : "YYYY年MMMD日",
				LLL : "YYYY年MMMD日Ah点mm分",
				LLLL : "YYYY年MMMD日ddddAh点mm分",
				l : "YYYY年MMMD日",
				ll : "YYYY年MMMD日",
				lll : "YYYY年MMMD日 HH:mm",
				llll : "YYYY年MMMD日dddd HH:mm"
			},
			meridiemParse : /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour : function(e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t
						|| "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12
						: e >= 11 ? e : e + 12
			},
			meridiem : function(e, t, a) {
				var d = 100 * e + t;
				return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午"
						: d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上"
			},
			calendar : {
				sameDay : "[今天]LT",
				nextDay : "[明天]LT",
				nextWeek : "[下]ddddLT",
				lastDay : "[昨天]LT",
				lastWeek : "[上]ddddLT",
				sameElse : "L"
			},
			dayOfMonthOrdinalParse : /\d{1,2}(日|月|周)/,
			ordinal : function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "日";
				case "M":
					return e + "月";
				case "w":
				case "W":
					return e + "周";
				default:
					return e
				}
			},
			relativeTime : {
				future : "%s内",
				past : "%s前",
				s : "几秒",
				m : "1 分钟",
				mm : "%d 分钟",
				h : "1 小时",
				hh : "%d 小时",
				d : "1 天",
				dd : "%d 天",
				M : "1 个月",
				MM : "%d 个月",
				y : "1 年",
				yy : "%d 年"
			},
			week : {
				dow : 1,
				doy : 4
			}
		})
	}(), e.fullCalendar.datepickerLocale("zh-cn", "zh-CN", {
		closeText : "关闭",
		prevText : "&#x3C;<",
		nextText : ">&#x3E;",
		currentText : "今天",
		monthNames : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月",
				"十月", "十一月", "十二月" ],
		monthNamesShort : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月",
				"九月", "十月", "十一月", "十二月" ],
		dayNames : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
		dayNamesShort : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ],
		dayNamesMin : [ "日", "一", "二", "三", "四", "五", "六" ],
		weekHeader : "周",
		dateFormat : "yy-mm-dd",
		firstDay : 1,
		isRTL : !1,
		showMonthAfterYear : !0,
		yearSuffix : "年"
	}), e.fullCalendar.locale("zh-cn", {
		buttonText : {
			month : "月",
			week : "周",
			day : "日",
			list : "日程"
		},
		allDayText : "全天",
		eventLimitText : function(e) {
			return "另外 " + e + " 个"
		},
		noEventsMessage : "没有事件显示"
	})
});
!function(e) {
	"function" == typeof define && define.amd ? define([ "jquery", "moment" ],
			e) : "object" == typeof exports ? module.exports = e(
			require("jquery"), require("moment")) : e(jQuery, moment)
}(function(e, t) {
	!function() {
		t.defineLocale("zh-cn", {
			months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort : "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin : "日_一_二_三_四_五_六".split("_"),
			longDateFormat : {
				LT : "HH:mm",
				LTS : "HH:mm:ss",
				L : "YYYY年MMMD日",
				LL : "YYYY年MMMD日",
				LLL : "YYYY年MMMD日Ah点mm分",
				LLLL : "YYYY年MMMD日ddddAh点mm分",
				l : "YYYY年MMMD日",
				ll : "YYYY年MMMD日",
				lll : "YYYY年MMMD日 HH:mm",
				llll : "YYYY年MMMD日dddd HH:mm"
			},
			meridiemParse : /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour : function(e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t
						|| "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12
						: e >= 11 ? e : e + 12
			},
			meridiem : function(e, t, a) {
				var d = 100 * e + t;
				return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午"
						: d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上"
			},
			calendar : {
				sameDay : "[今天]LT",
				nextDay : "[明天]LT",
				nextWeek : "[下]ddddLT",
				lastDay : "[昨天]LT",
				lastWeek : "[上]ddddLT",
				sameElse : "L"
			},
			dayOfMonthOrdinalParse : /\d{1,2}(日|月|周)/,
			ordinal : function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "日";
				case "M":
					return e + "月";
				case "w":
				case "W":
					return e + "周";
				default:
					return e
				}
			},
			relativeTime : {
				future : "%s内",
				past : "%s前",
				s : "几秒",
				m : "1 分钟",
				mm : "%d 分钟",
				h : "1 小时",
				hh : "%d 小时",
				d : "1 天",
				dd : "%d 天",
				M : "1 个月",
				MM : "%d 个月",
				y : "1 年",
				yy : "%d 年"
			},
			week : {
				dow : 1,
				doy : 4
			}
		})
	}(), e.fullCalendar.datepickerLocale("zh-cn", "zh-CN", {
		closeText : "关闭",
		prevText : "&#x3C;<",
		nextText : ">&#x3E;",
		currentText : "今天",
		monthNames : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月",
				"十月", "十一月", "十二月" ],
		monthNamesShort : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月",
				"九月", "十月", "十一月", "十二月" ],
		dayNames : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
		dayNamesShort : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ],
		dayNamesMin : [ "日", "一", "二", "三", "四", "五", "六" ],
		weekHeader : "周",
		dateFormat : "yy-mm-dd",
		firstDay : 1,
		isRTL : !1,
		showMonthAfterYear : !0,
		yearSuffix : "年"
	}), e.fullCalendar.locale("zh-cn", {
		buttonText : {
			month : "月",
			week : "周",
			day : "日",
			list : "日程"
		},
		allDayText : "全天",
		eventLimitText : function(e) {
			return "另外 " + e + " 个"
		},
		noEventsMessage : "没有事件显示"
	})
});