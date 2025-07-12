import {useState, useEffect} from 'react';

// useStateとuseEffectはコンポーネントのトップレベルでのみ呼び出し可能
// 条件分岐やループ、ネストした関数の中では呼び出せない
function Display(props){

    const {count} = props;
    const [text, setText] = useState("loading...");

    // useEffectの仕組み：
    // - 第1引数：実行したい処理（関数）
    // - 第2引数：依存配列（この配列の値が変更されたときに処理を実行）
    // - [count]：初回マウント時 + countの値が変更されるたびにuseEffectが実行される
    useEffect(() => {
        // setTimeoutで1秒後にテキストを更新
        // これにより、countが変更されてから1秒後に画面に反映される
        setTimeout(() => {
            setText(`カウント：${count}`);
        }, 1000);
    },[count]) // []だとcountが更新されても表示が更新されない

    return(
        <div>
            {text}
        </div>
    )
}

export default Display;