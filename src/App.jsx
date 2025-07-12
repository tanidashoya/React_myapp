//親が状態とロジックを持つ
//returnによってReactに渡される
import './App.css'
import Button from './components/Button/Button'
import Display from './components/Display/Display'
import {useState} from 'react';

function App() {
  // useState(0)は配列を返す：[現在の状態値, 状態更新関数]
  // 配列の分割代入で以下のように取得：
  // - 配列インデックス0: count（現在の状態値、初期値は0）
  // - 配列インデックス1: setCount（状態を更新する関数）
  const [count, setCount] = useState(0);

  // ボタンクリック時の処理を定義
  const handleClick = () => {
    // setCount関数の仕組み：
    // - setCountはReactが自動的に提供する状態更新専用関数
    // - setCount(処理内容)の形で、どのような処理をするかを呼び出し時に定義
    // - 処理内容の結果が新しい状態値として適用される
    
    // 例：count + 1の計算結果が新しいcountの値になる
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
        ボタン
      </Button>
      <Display count={count}/>
    </>
  )
}

export default App
