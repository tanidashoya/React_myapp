
import './App.css'
import Button from './components/Button/Button'
import {useState} from 'react';

function App() {
  // useState(0)は配列を返す：[現在の状態値, 状態更新関数]
  // 配列の分割代入で以下のように取得：
  // - 配列インデックス0: count（現在の状態値、初期値は0）
  // - 配列インデックス1: setCount（状態を更新する関数）
  const [count, setCount] = useState(0);

  // ボタンクリック時に実行される処理を定義
  const handleClick = () => {
    // setCount（配列インデックス1）を呼び出すことで：
    // 1. countの値を更新（0 → 1 → 2 → ...）
    // 2. コンポーネントの再レンダリングをトリガー
    // 3. 画面に新しい値が反映される
    
    // setCountの引数に渡した式（count + 1）が新しい状態値として適用される
    // つまり、現在のcountの値に1を足した結果が、次のcountの状態になる
    setCount(count + 1);
  }

  return (
    //returnの中で複数の要素を返す場合は、React.Fragmentで囲む
    //React.Fragmentは省略して<> </>と書くこともできる
    //FragmentはReactのコンポーネントの中で、複数の要素を返すための特別なコンポーネント

    <>
      <h1>Hello World</h1>
      {/* propsを渡す */}
      <Button 
        type="submit"        // ボタンのタイプをsubmitに設定
        disabled={false}     // ボタンを有効状態に設定
        onClick={handleClick} // ボタンクリック時の処理をhandleClick関数に設定
      >
        <span>カウント：{count}</span>
      </Button>

    </>
  )
}

export default App
