//子が表示・UIの一部を持つ
//returnによってReactに渡される
import styles from './Button.module.css';
// stylesオブジェクトには、CSSファイルの内容ではなく、クラス名のマッピングが格納される
// 例: styles = { button: "Button_button__abc123" }（ファイル名_クラス名__ユニークID）
// これは「元のクラス名 → 変換後のクラス名」の辞書のような役割
// CSSファイル内のクラス数 = stylesオブジェクトのプロパティ数
// 例: CSSに.buttonと.groupingがあれば、styles = { button: "...", grouping: "..." } となる
// .buttonが.Button_button__abc123に変化するタイミング：
// 1. 開発サーバー起動時（npm start）
// 2. CSSファイル保存時（ホットリロード）
// CSS Modulesはimport文のファイルパスを読み取って、どのファイルのクラスかを認識し、
// ファイル名_クラス名__ハッシュ値の形式でユニーク名に変換する

function Button(props) {

    // propsから必要な値を分割代入で取得
    // children: ボタンの中身（テキストや他の要素）を表す特別なプロパティ
    const {type, disabled, onClick, children} = props;
    
    // JSXを返す
    // ボタン要素を返す
    //onClick属性にonClickを設定
    //styles.button: stylesオブジェクトのbuttonプロパティの値（CSSファイル内の.buttonクラスのクラス名）
    return (
        <button  className={styles.button} type={type} disabled={disabled} onClick={onClick}>
            {/* styles.button: CSSファイル内の.buttonクラスで定義されたスタイルを適用
                 CSS Modulesが自動的にクラス名をユニークにして、スタイルの競合を防ぎながら反映 */}
            {/* childrenプロパティの内容をボタンの中身として表示 */}
            {children}
        </button>
    )
}

export default Button;