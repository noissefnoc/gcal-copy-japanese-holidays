// 日本の祝日カレンダーのカレンダーID
var JAPANESE_HOLIDAY_CAL_ID = 'ja.japanese#holiday@group.v.calendar.google.com';

/**
 * alreadyRegistered
 * @param {Object} cal - 検査対象のCalendar
 * @param {Date} startTime - 検査対象開始日時
 * @param {Date} endTime - 検査対象終了日時
 */
function alreadyRegistered(cal, startTime, endTime) {
  var alreadyRegistered = false;
  var events = cal.getEvents(startTime, endTime);
  
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    
    if (/^【祝日】/.test(event.getTitle())) {
      alreadyRegistered = true;
      break;
    }
  }
  
  return alreadyRegistered;
}

// メイン処理
// ベースとなる祝日カレンダーから直近4週間を抜き出して、自分のカレンダーに追加
function main() {
  var now = new Date();
  var fourWeeksFromNow = new Date(now.getTime() + (4 * 7 * 24 * 60 * 60 * 1000));
  
  var myCal = CalendarApp.getDefaultCalendar();
  var jHCal = CalendarApp.getCalendarById(JAPANESE_HOLIDAY_CAL_ID);
  
  var holidays = jHCal.getEvents(now, fourWeeksFromNow);
  
  // 期間内に祝日がなければその場で終わり
  if (holidays.length == 0) {
    return
  }
  
  // 祝日がある場合は登録済でなければ登録
  for (var i = 0; i < holidays.length; i++) {
    var event = holidays[i];
    var title = "【祝日】 " + event.getTitle();
    var startDateTime = Moment.moment(event.getStartTime()).add(8, 'hours');
    var endDateTime = Moment.moment(event.getStartTime()).add(21, 'hours');
    
    // 登録されていなければ登録
    if (!alreadyRegistered(myCal, startDateTime.toDate(), endDateTime.toDate())) {
        myCal.createEvent(title, startDateTime.toDate(), endDateTime.toDate());
    }
  }
}
