// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function () {
    // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
    let subject_points = [Number($('#national_language').val()),
                                Number($('#english').val()),
                                Number($('#mathematics').val()),
                                Number($('#science').val()),
                                Number($('#society').val())
                                ];
    function score_indicate() {
        // 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
        
        // 変数「sum」に「国語、英語、数学、理科、社会」の点数を足します。
        let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        // 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
        $("#sum_indicate").text(sum);
        average = sum / subject_points.length
        $("#average_indicate").text(average);
        // 「平均点：」に各教科の平均点を出力する処理を記述する。
        // ヒント：変数「average」に平均値を出して代入しましょう(平均をとりたい数の合計点数(sum) / 全体の個数)
        // ヒント：全体の個数はlengthメソッドを使って求めます。(lengthメソッド: 文字列の長さや配列の要素数などを取得するメソッド)
    };
    // 平均点数を取得し、取得した平均点数から「A、B、C、D」にランク分けするロジックを記述する。
    function get_achievement () {
         let average = $("#average_indicate").text();
         console.log(average)
        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "D";
        }
        
    };
    // 各教科の点数を取得し、取得した点数から「合格、不合格」の判断を下すロジックを作ります。
    console.log
    function get_pass_or_failure() {
                for(let i = 0; i<subject_points.length; i++){
                if(subject_points[i]<60){
                return "不合格"}
            }
            return "合格"
             

    }
        
    function judgement() {
        // 変数「achievement」に「get_achievement()の戻り値」を代入します。
        let achievement = get_achievement();
        // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
        let pass_or_failure = get_pass_or_failure();
        // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}です。${pass_or_failure}です。」が出力される処理です。
        $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
    };
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
        score_indicate();
    });
    // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
    $('#btn-evaluation').click(function () {
        $("#evaluation").text(get_achievement());
    });
    // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $('#btn-judge').click(function () {
        $("#judge").text(get_pass_or_failure());
    });
    // 「最終ジャッジ」(id="btn-declaration")ボタンが押された際、「function judgement()」の処理を実行させる。
    // ２回目以降に「最終ジャッジ」ボタンを押した際は、それまでに表示していたジャッジのHTML要素を削除して、新たなジャッジのHTML要素を追加する。
    // ヒント：removeメソッドについて調べてみましょう。
    $('#btn-declaration').click(function () {
    });
});

  // ここに書かれているJavaScriptの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構いません。合格要件をすべて満たしていれば合格となります。