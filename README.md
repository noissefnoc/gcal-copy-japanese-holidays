# Copy Japanese holidays to your google calendar

自分のGoogleカレンダーに日本の祝日カレンダーの予定を転記するGoogle Apps Scriptです。

* Google Calendar には「日本の祝日」カレンダーがあるが、終日の予定なので、予定を入れてくる人がいて困る
* 変動的な祝日を自分も忘れていることがある

ということで、自分のカレンダーの日中時間帯に予定を入れるのをGoogle Apps Scriptを作りました。


## Deployment

※現在 [clasp](https://developers.google.com/apps-script/guides/clasp) に対応を検討中ですが、まだ完成していません

* Google Drive で Google Apps Script Editor を開く
* `copyCal.js` をコピペして保存
* 「リソース」>「ライブラリ」のメニューをクリック
    * 「ライブラリを追加」で「 `MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48` 」(Moment.js)を追加 
* 「編集」>「現在のプロジェクトのトリガー」のメニューをクリック
* 現在のプロジェクトのトリガーウィンドウで左から以下を指定
    * main
    * 時間主導型
    * 日タイマー
    * お好きな時間でどうぞ(多分深夜になると思いますが)


## 仕様

* 今日から4週間後までの日本の祝日カレンダーを見る
* まだ追加されてない祝日があれば自分のカレンダーに追加する


## ToDo (後で issue にする)

* [ ] `clasp` に対応してCLIからデプロイできるようにする
    * [ ] `clasp` 対応調査
    * [ ] `clasp` 対応ファイル作成
    * [ ] `clasp` でのデプロイ手順作成
* [ ] 「外出中」「予定枠」などの設定に対応する
    * [ ] 設定がどこでできるのか調査。 [stackoverflow](https://stackoverflow.com/questions/51617844/how-do-i-create-an-out-of-office-type-calendar-event-via-the-rest-api) によると `extendedProperties.private.everyoneDeclinedDismissed` ではないかとのこと
    * [ ] 設定が可能になるようにコード修正
    * [ ] スクリプトのプロパティなどで、ディフォルト値が指定できるように修正


## Author

noissefnoc <noissefnoc@gmail.com>

